// Forkphorus scripts...
! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("rgbcolor"), require("stackblur-canvas")) : "function" == typeof define && define.amd ? define(["rgbcolor", "stackblur-canvas"], e) : t.canvg = e(t.RGBColor, t.StackBlur) }(this, function(y, v) { "use strict"; var t; return y = y && y.hasOwnProperty("default") ? y.default : y, v = v && v.hasOwnProperty("default") ? v.default : v,
		function(t) { var l;
			t.exports;
			(l = window).DOMParser = window.DOMParser; var c = l.document;

			function d(t, e) { var i; return (i = c.createElement("canvas")).width = t, i.height = e, i } var f, p = function(t, e, i) { if (null != t || null != e || null != i) { var n = m(i || {}); "string" == typeof t && (t = c.getElementById(t)), null != t.svg && t.svg.stop(), t.childNodes && 1 == t.childNodes.length && "OBJECT" == t.childNodes[0].nodeName || (t.svg = n); var s = t.getContext("2d");
					void 0 !== e.documentElement ? n.loadXmlDoc(s, e) : "<" == e.substr(0, 1) ? n.loadXml(s, e) : n.load(s, e) } else
					for (var a = c.querySelectorAll("svg"), r = 0; r < a.length; r++) { var o = a[r],
							h = c.createElement("canvas"); if (void 0 !== o.clientWidth && void 0 !== o.clientHeight) h.width = o.clientWidth, h.height = o.clientHeight;
						else { var l = o.getBoundingClientRect();
							h.width = l.width, h.height = l.height } o.parentNode.insertBefore(h, o), o.parentNode.removeChild(o); var u = c.createElement("div");
						u.appendChild(o), p(h, u.innerHTML) } }; "undefined" == typeof Element || (void 0 !== Element.prototype.matches ? f = function(t, e) { return t.matches(e) } : void 0 !== Element.prototype.webkitMatchesSelector ? f = function(t, e) { return t.webkitMatchesSelector(e) } : void 0 !== Element.prototype.mozMatchesSelector ? f = function(t, e) { return t.mozMatchesSelector(e) } : void 0 !== Element.prototype.msMatchesSelector ? f = function(t, e) { return t.msMatchesSelector(e) } : void 0 !== Element.prototype.oMatchesSelector ? f = function(t, e) { return t.oMatchesSelector(e) } : ("function" != typeof jQuery && "function" != typeof Zepto || (f = function(t, e) { return $(t).is(e) }), void 0 === f && "undefined" != typeof Sizzle && (f = Sizzle.matchesSelector))); var e = /(\[[^\]]+\])/g,
				i = /(#[^\s\+>~\.\[:]+)/g,
				a = /(\.[^\s\+>~\.\[:]+)/g,
				r = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
				o = /(:[\w-]+\([^\)]*\))/gi,
				h = /(:[^\s\+>~\.\[:]+)/g,
				u = /([^\s\+>~\.\[:]+)/g;

			function P(n) { var s = [0, 0, 0],
					t = function(t, e) { var i = n.match(t);
						null != i && (s[e] += i.length, n = n.replace(t, " ")) }; return n = (n = n.replace(/:not\(([^\)]*)\)/g, "     $1 ")).replace(/{[\s\S]*/gm, " "), t(e, 1), t(i, 0), t(a, 1), t(r, 2), t(o, 1), t(h, 1), n = (n = n.replace(/[\*\s\+>~]/g, " ")).replace(/[#\.]/g, " "), t(u, 2), s.join("") }

			function m(s) { var D = { opts: s, FRAMERATE: 30, MAX_VIRTUAL_PIXELS: 3e4, rootEmSize: 12, emSize: 12, log: function() {} };
				1 == D.opts.log && "undefined" != typeof console && (D.log = function(t) { console.log(t) }), D.init = function(t) { var e = 0;
					D.UniqueId = function() { return "canvg" + ++e }, D.Definitions = {}, D.Styles = {}, D.StylesSpecificity = {}, D.Animations = [], D.Images = [], D.ctx = t, D.ViewPort = new function() { this.viewPorts = [], this.Clear = function() { this.viewPorts = [] }, this.SetCurrent = function(t, e) { this.viewPorts.push({ width: t, height: e }) }, this.RemoveCurrent = function() { this.viewPorts.pop() }, this.Current = function() { return this.viewPorts[this.viewPorts.length - 1] }, this.width = function() { return this.Current().width }, this.height = function() { return this.Current().height }, this.ComputeSize = function(t) { return null != t && "number" == typeof t ? t : "x" == t ? this.width() : "y" == t ? this.height() : Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2) } } }, D.init(), D.ImagesLoaded = function() { for (var t = 0; t < D.Images.length; t++)
						if (!D.Images[t].loaded) return !1; return !0 }, D.trim = function(t) { return t.replace(/^\s+|\s+$/g, "") }, D.compressSpaces = function(t) { return t.replace(/(?!\u3000)\s+/gm, " ") }, D.ajax = function(t) { var e; return (e = l.XMLHttpRequest ? new l.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")) ? (e.open("GET", t, !1), e.send(null), e.responseText) : null }, D.parseXml = function(e) { if ("undefined" != typeof Windows && void 0 !== Windows.Data && void 0 !== Windows.Data.Xml) { var t = new Windows.Data.Xml.Dom.XmlDocument,
							i = new Windows.Data.Xml.Dom.XmlLoadSettings; return i.prohibitDtd = !1, t.loadXml(e, i), t } if (!l.DOMParser) return e = e.replace(/<!DOCTYPE svg[^>]*>/, ""), (t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e), t; try { var n = s.xmldom ? new l.DOMParser(s.xmldom) : new l.DOMParser; return n.parseFromString(e, "image/svg+xml") } catch (t) { return (n = s.xmldom ? new l.DOMParser(s.xmldom) : new l.DOMParser).parseFromString(e, "text/xml") } }, D.Property = function(t, e) { this.name = t, this.value = e }, D.Property.prototype.getValue = function() { return this.value }, D.Property.prototype.hasValue = function() { return null != this.value && "" !== this.value }, D.Property.prototype.numValue = function() { if (!this.hasValue()) return 0; var t = parseFloat(this.value); return (this.value + "").match(/%$/) && (t /= 100), t }, D.Property.prototype.valueOrDefault = function(t) { return this.hasValue() ? this.value : t }, D.Property.prototype.numValueOrDefault = function(t) { return this.hasValue() ? this.numValue() : parseFloat(t) }, D.Property.prototype.addOpacity = function(t) { var e = this.value; if (null != t.value && "" != t.value && "string" == typeof this.value) { var i = new y(this.value);
						i.ok && (e = "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + t.numValue() + ")") } return new D.Property(this.name, e) }, D.Property.prototype.getDefinition = function() { var t = this.value.match(/#([^\)'"]+)/); return t && (t = t[1]), t || (t = this.value), D.Definitions[t] }, D.Property.prototype.isUrlDefinition = function() { return 0 == this.value.indexOf("url(") }, D.Property.prototype.getFillStyleDefinition = function(t, e) { var i = this.getDefinition(); if (null != i && i.createGradient) return i.createGradient(D.ctx, t, e); if (null != i && i.createPattern) { if (i.getHrefAttribute().hasValue()) { var n = i.attribute("patternTransform");
							i = i.getHrefAttribute().getDefinition(), n.hasValue() && (i.attribute("patternTransform", !0).value = n.value) } return i.createPattern(D.ctx, t, e) } return null }, D.Property.prototype.getDPI = function() { return 96 }, D.Property.prototype.getREM = function() { return D.rootEmSize }, D.Property.prototype.getEM = function() { return D.emSize }, D.Property.prototype.getUnits = function() { return (this.value + "").replace(/[0-9\.\-]/g, "") }, D.Property.prototype.isPixels = function() { if (!this.hasValue()) return !1; var t = this.value + ""; return !!t.match(/px$/) || !!t.match(/^[0-9]+$/) }, D.Property.prototype.toPixels = function(t, e) { if (!this.hasValue()) return 0; var i = this.value + ""; if (i.match(/rem$/)) return this.numValue() * this.getREM(t); if (i.match(/em$/)) return this.numValue() * this.getEM(t); if (i.match(/ex$/)) return this.numValue() * this.getEM(t) / 2; if (i.match(/px$/)) return this.numValue(); if (i.match(/pt$/)) return this.numValue() * this.getDPI(t) * (1 / 72); if (i.match(/pc$/)) return 15 * this.numValue(); if (i.match(/cm$/)) return this.numValue() * this.getDPI(t) / 2.54; if (i.match(/mm$/)) return this.numValue() * this.getDPI(t) / 25.4; if (i.match(/in$/)) return this.numValue() * this.getDPI(t); if (i.match(/%$/)) return this.numValue() * D.ViewPort.ComputeSize(t); var n = this.numValue(); return e && n < 1 ? n * D.ViewPort.ComputeSize(t) : n }, D.Property.prototype.toMilliseconds = function() { return this.hasValue() ? (this.value + "").match(/ms$/) ? this.numValue() : 1e3 * this.numValue() : 0 }, D.Property.prototype.toRadians = function() { if (!this.hasValue()) return 0; var t = this.value + ""; return t.match(/deg$/) ? this.numValue() * (Math.PI / 180) : t.match(/grad$/) ? this.numValue() * (Math.PI / 200) : t.match(/rad$/) ? this.numValue() : this.numValue() * (Math.PI / 180) }; var t = { baseline: "alphabetic", "before-edge": "top", "text-before-edge": "top", middle: "middle", central: "middle", "after-edge": "bottom", "text-after-edge": "bottom", ideographic: "ideographic", alphabetic: "alphabetic", hanging: "hanging", mathematical: "alphabetic" }; return D.Property.prototype.toTextBaseline = function() { return this.hasValue() ? t[this.value] : null }, D.Font = new function() { this.Styles = "normal|italic|oblique|inherit", this.Variants = "normal|small-caps|inherit", this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit", this.CreateFont = function(t, e, i, n, s, a) { var r = null != a ? this.Parse(a) : this.CreateFont("", "", "", "", "", D.ctx.font); return { fontFamily: s = s || r.fontFamily, fontSize: n || r.fontSize, fontStyle: t || r.fontStyle, fontWeight: i || r.fontWeight, fontVariant: e || r.fontVariant, toString: function() { return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ") } } }; var r = this;
					this.Parse = function(t) { for (var e = {}, i = D.trim(D.compressSpaces(t || "")).split(" "), n = { fontSize: !1, fontStyle: !1, fontWeight: !1, fontVariant: !1 }, s = "", a = 0; a < i.length; a++) n.fontStyle || -1 == r.Styles.indexOf(i[a]) ? n.fontVariant || -1 == r.Variants.indexOf(i[a]) ? n.fontWeight || -1 == r.Weights.indexOf(i[a]) ? n.fontSize ? "inherit" != i[a] && (s += i[a]) : ("inherit" != i[a] && (e.fontSize = i[a].split("/")[0]), n.fontStyle = n.fontVariant = n.fontWeight = n.fontSize = !0) : ("inherit" != i[a] && (e.fontWeight = i[a]), n.fontStyle = n.fontVariant = n.fontWeight = !0) : ("inherit" != i[a] && (e.fontVariant = i[a]), n.fontStyle = n.fontVariant = !0) : ("inherit" != i[a] && (e.fontStyle = i[a]), n.fontStyle = !0); return "" != s && (e.fontFamily = s), e } }, D.ToNumberArray = function(t) { for (var e = (t || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [], i = 0; i < e.length; i++) e[i] = parseFloat(e[i]); return e }, D.Point = function(t, e) { this.x = t, this.y = e }, D.Point.prototype.angleTo = function(t) { return Math.atan2(t.y - this.y, t.x - this.x) }, D.Point.prototype.applyTransform = function(t) { var e = this.x * t[0] + this.y * t[2] + t[4],
						i = this.x * t[1] + this.y * t[3] + t[5];
					this.x = e, this.y = i }, D.CreatePoint = function(t) { var e = D.ToNumberArray(t); return new D.Point(e[0], e[1]) }, D.CreatePath = function(t) { for (var e = D.ToNumberArray(t), i = [], n = 0; n < e.length; n += 2) i.push(new D.Point(e[n], e[n + 1])); return i }, D.BoundingBox = function(t, e, i, n) { this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN, this.x = function() { return this.x1 }, this.y = function() { return this.y1 }, this.width = function() { return this.x2 - this.x1 }, this.height = function() { return this.y2 - this.y1 }, this.addPoint = function(t, e) { null != t && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t, this.x2 = t), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)), null != e && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e)) }, this.addX = function(t) { this.addPoint(t, null) }, this.addY = function(t) { this.addPoint(null, t) }, this.addBoundingBox = function(t) { this.addPoint(t.x1, t.y1), this.addPoint(t.x2, t.y2) }, this.addQuadraticCurve = function(t, e, i, n, s, a) { var r = t + 2 / 3 * (i - t),
							o = e + 2 / 3 * (n - e),
							h = r + 1 / 3 * (s - t),
							l = o + 1 / 3 * (a - e);
						this.addBezierCurve(t, e, r, h, o, l, s, a) }, this.addBezierCurve = function(t, e, i, n, s, a, r, o) { var h = [t, e],
							l = [i, n],
							u = [s, a],
							c = [r, o];
						this.addPoint(h[0], h[1]), this.addPoint(c[0], c[1]); for (var f = 0; f <= 1; f++) { var p = function(t) { return Math.pow(1 - t, 3) * h[f] + 3 * Math.pow(1 - t, 2) * t * l[f] + 3 * (1 - t) * Math.pow(t, 2) * u[f] + Math.pow(t, 3) * c[f] },
								d = 6 * h[f] - 12 * l[f] + 6 * u[f],
								m = -3 * h[f] + 9 * l[f] - 9 * u[f] + 3 * c[f],
								y = 3 * l[f] - 3 * h[f]; if (0 != m) { var v = Math.pow(d, 2) - 4 * y * m; if (!(v < 0)) { var g = (-d + Math.sqrt(v)) / (2 * m);
									0 < g && g < 1 && (0 == f && this.addX(p(g)), 1 == f && this.addY(p(g))); var x = (-d - Math.sqrt(v)) / (2 * m);
									0 < x && x < 1 && (0 == f && this.addX(p(x)), 1 == f && this.addY(p(x))) } } else { if (0 == d) continue; var b = -y / d;
								0 < b && b < 1 && (0 == f && this.addX(p(b)), 1 == f && this.addY(p(b))) } } }, this.isPointInBox = function(t, e) { return this.x1 <= t && t <= this.x2 && this.y1 <= e && e <= this.y2 }, this.addPoint(t, e), this.addPoint(i, n) }, D.Transform = function(t) { var e = this;
					this.Type = {}, this.Type.translate = function(t) { this.p = D.CreatePoint(t), this.apply = function(t) { t.translate(this.p.x || 0, this.p.y || 0) }, this.unapply = function(t) { t.translate(-1 * this.p.x || 0, -1 * this.p.y || 0) }, this.applyToPoint = function(t) { t.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]) } }, this.Type.rotate = function(t) { var e = D.ToNumberArray(t);
						this.angle = new D.Property("angle", e[0]), this.cx = e[1] || 0, this.cy = e[2] || 0, this.apply = function(t) { t.translate(this.cx, this.cy), t.rotate(this.angle.toRadians()), t.translate(-this.cx, -this.cy) }, this.unapply = function(t) { t.translate(this.cx, this.cy), t.rotate(-1 * this.angle.toRadians()), t.translate(-this.cx, -this.cy) }, this.applyToPoint = function(t) { var e = this.angle.toRadians();
							t.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]), t.applyTransform([Math.cos(e), Math.sin(e), -Math.sin(e), Math.cos(e), 0, 0]), t.applyTransform([1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0]) } }, this.Type.scale = function(t) { this.p = D.CreatePoint(t), this.apply = function(t) { t.scale(this.p.x || 1, this.p.y || this.p.x || 1) }, this.unapply = function(t) { t.scale(1 / this.p.x || 1, 1 / this.p.y || this.p.x || 1) }, this.applyToPoint = function(t) { t.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0]) } }, this.Type.matrix = function(t) { this.m = D.ToNumberArray(t), this.apply = function(t) { t.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]) }, this.unapply = function(t) { var e = this.m[0],
								i = this.m[2],
								n = this.m[4],
								s = this.m[1],
								a = this.m[3],
								r = this.m[5],
								o = 1 / (e * (1 * a - 0 * r) - i * (1 * s - 0 * r) + n * (0 * s - 0 * a));
							t.transform(o * (1 * a - 0 * r), o * (0 * r - 1 * s), o * (0 * n - 1 * i), o * (1 * e - 0 * n), o * (i * r - n * a), o * (n * s - e * r)) }, this.applyToPoint = function(t) { t.applyTransform(this.m) } }, this.Type.SkewBase = function(t) { this.base = e.Type.matrix, this.base(t), this.angle = new D.Property("angle", t) }, this.Type.SkewBase.prototype = new this.Type.matrix, this.Type.skewX = function(t) { this.base = e.Type.SkewBase, this.base(t), this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0] }, this.Type.skewX.prototype = new this.Type.SkewBase, this.Type.skewY = function(t) { this.base = e.Type.SkewBase, this.base(t), this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0] }, this.Type.skewY.prototype = new this.Type.SkewBase, this.transforms = [], this.apply = function(t) { for (var e = 0; e < this.transforms.length; e++) this.transforms[e].apply(t) }, this.unapply = function(t) { for (var e = this.transforms.length - 1; 0 <= e; e--) this.transforms[e].unapply(t) }, this.applyToPoint = function(t) { for (var e = 0; e < this.transforms.length; e++) this.transforms[e].applyToPoint(t) }; for (var i = D.trim(D.compressSpaces(t)).replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/), n = 0; n < i.length; n++)
						if ("none" !== i[n]) { var s = D.trim(i[n].split("(")[0]),
								a = i[n].split("(")[1].replace(")", ""),
								r = this.Type[s]; if (void 0 !== r) { var o = new r(a);
								o.type = s, this.transforms.push(o) } } }, D.AspectRatio = function(t, e, i, n, s, a, r, o, h, l) { var u = (e = (e = D.compressSpaces(e)).replace(/^defer\s/, "")).split(" ")[0] || "xMidYMid",
						c = e.split(" ")[1] || "meet",
						f = i / n,
						p = s / a,
						d = Math.min(f, p),
						m = Math.max(f, p); "meet" == c && (n *= d, a *= d), "slice" == c && (n *= m, a *= m), h = new D.Property("refX", h), l = new D.Property("refY", l), h.hasValue() && l.hasValue() ? t.translate(-d * h.toPixels("x"), -d * l.toPixels("y")) : (u.match(/^xMid/) && ("meet" == c && d == p || "slice" == c && m == p) && t.translate(i / 2 - n / 2, 0), u.match(/YMid$/) && ("meet" == c && d == f || "slice" == c && m == f) && t.translate(0, s / 2 - a / 2), u.match(/^xMax/) && ("meet" == c && d == p || "slice" == c && m == p) && t.translate(i - n, 0), u.match(/YMax$/) && ("meet" == c && d == f || "slice" == c && m == f) && t.translate(0, s - a)), "none" == u ? t.scale(f, p) : "meet" == c ? t.scale(d, d) : "slice" == c && t.scale(m, m), t.translate(null == r ? 0 : -r, null == o ? 0 : -o) }, D.Element = {}, D.EmptyProperty = new D.Property("EMPTY", ""), D.Element.ElementBase = function(a) { this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.children = [], this.attribute = function(t, e) { var i = this.attributes[t]; return null != i ? i : (1 == e && (i = new D.Property(t, ""), this.attributes[t] = i), i || D.EmptyProperty) }, this.getHrefAttribute = function() { for (var t in this.attributes)
							if ("href" == t || t.match(/:href$/)) return this.attributes[t]; return D.EmptyProperty }, this.style = function(t, e, i) { var n = this.styles[t]; if (null != n) return n; var s = this.attribute(t); if (null != s && s.hasValue()) return this.styles[t] = s; if (1 != i) { var a = this.parent; if (null != a) { var r = a.style(t); if (null != r && r.hasValue()) return r } } return 1 == e && (n = new D.Property(t, ""), this.styles[t] = n), n || D.EmptyProperty }, this.render = function(t) { if ("none" != this.style("display").value && "hidden" != this.style("visibility").value) { if (t.save(), this.style("mask").hasValue()) { var e = this.style("mask").getDefinition();
								null != e && e.apply(t, this) } else if (this.style("filter").hasValue()) { var i = this.style("filter").getDefinition();
								null != i && i.apply(t, this) } else this.setContext(t), this.renderChildren(t), this.clearContext(t);
							t.restore() } }, this.setContext = function() {}, this.clearContext = function() {}, this.renderChildren = function(t) { for (var e = 0; e < this.children.length; e++) this.children[e].render(t) }, this.addChild = function(t, e) { var i = t;
						e && (i = D.CreateElement(t)), i.parent = this, "title" != i.type && this.children.push(i) }, this.addStylesFromStyleDefinition = function() { for (var t in D.Styles)
							if ("@" != t[0] && f(a, t)) { var e = D.Styles[t],
									i = D.StylesSpecificity[t]; if (null != e)
									for (var n in e) { var s = this.stylesSpecificity[n];
										void 0 === s && (s = "000"), s <= i && (this.styles[n] = e[n], this.stylesSpecificity[n] = i) } } }; var t, e = new RegExp("^[A-Z-]+$"); if (null != a && 1 == a.nodeType) { for (var i = 0; i < a.attributes.length; i++) { var n = a.attributes[i],
								s = (t = n.nodeName, e.test(t) ? t.toLowerCase() : t);
							this.attributes[s] = new D.Property(s, n.value) } if (this.addStylesFromStyleDefinition(), this.attribute("style").hasValue()) { var r = this.attribute("style").value.split(";"); for (i = 0; i < r.length; i++)
								if ("" != D.trim(r[i])) { var o = r[i].split(":"),
										h = D.trim(o[0]),
										l = D.trim(o[1]);
									this.styles[h] = new D.Property(h, l) } } this.attribute("id").hasValue() && null == D.Definitions[this.attribute("id").value] && (D.Definitions[this.attribute("id").value] = this); for (i = 0; i < a.childNodes.length; i++) { var u = a.childNodes[i]; if (1 == u.nodeType && this.addChild(u, !0), this.captureTextNodes && (3 == u.nodeType || 4 == u.nodeType)) { var c = u.value || u.text || u.textContent || ""; "" != D.compressSpaces(c) && this.addChild(new D.Element.tspan(u), !1) } } } }, D.Element.RenderedElementBase = function(t) { this.base = D.Element.ElementBase, this.base(t), this.calculateOpacity = function() { for (var t = 1, e = this; null != e;) { var i = e.style("opacity", !1, !0);
							i.hasValue() && (t *= i.numValue()), e = e.parent } return t }, this.setContext = function(t, e) { if (!e) { var i; if (this.style("fill").isUrlDefinition()) null != (i = this.style("fill").getFillStyleDefinition(this, this.style("fill-opacity"))) && (t.fillStyle = i);
							else if (this.style("fill").hasValue()) { var n; "currentColor" == (n = this.style("fill")).value && (n.value = this.style("color").value), "inherit" != n.value && (t.fillStyle = "none" == n.value ? "rgba(0,0,0,0)" : n.value) } if (this.style("fill-opacity").hasValue()) n = (n = new D.Property("fill", t.fillStyle)).addOpacity(this.style("fill-opacity")), t.fillStyle = n.value; if (this.style("stroke").isUrlDefinition()) null != (i = this.style("stroke").getFillStyleDefinition(this, this.style("stroke-opacity"))) && (t.strokeStyle = i);
							else if (this.style("stroke").hasValue()) { var s; "currentColor" == (s = this.style("stroke")).value && (s.value = this.style("color").value), "inherit" != s.value && (t.strokeStyle = "none" == s.value ? "rgba(0,0,0,0)" : s.value) } if (this.style("stroke-opacity").hasValue()) s = (s = new D.Property("stroke", t.strokeStyle)).addOpacity(this.style("stroke-opacity")), t.strokeStyle = s.value; if (this.style("stroke-width").hasValue()) { var a = this.style("stroke-width").toPixels();
								t.lineWidth = 0 == a ? .001 : a } if (this.style("stroke-linecap").hasValue() && (t.lineCap = this.style("stroke-linecap").value), this.style("stroke-linejoin").hasValue() && (t.lineJoin = this.style("stroke-linejoin").value), this.style("stroke-miterlimit").hasValue() && (t.miterLimit = this.style("stroke-miterlimit").value), this.style("paint-order").hasValue() && (t.paintOrder = this.style("paint-order").value), this.style("stroke-dasharray").hasValue() && "none" != this.style("stroke-dasharray").value) { var r = D.ToNumberArray(this.style("stroke-dasharray").value);
								void 0 !== t.setLineDash ? t.setLineDash(r) : void 0 !== t.webkitLineDash ? t.webkitLineDash = r : void 0 === t.mozDash || 1 == r.length && 0 == r[0] || (t.mozDash = r); var o = this.style("stroke-dashoffset").toPixels();
								void 0 !== t.lineDashOffset ? t.lineDashOffset = o : void 0 !== t.webkitLineDashOffset ? t.webkitLineDashOffset = o : void 0 !== t.mozDashOffset && (t.mozDashOffset = o) } } if (void 0 !== t.font)
							if (this.style("font").hasValue()) t.font = this.style("font").value;
							else { t.font = D.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString(); var h = this.style("font-size", !1, !1);
								h.isPixels() && (D.emSize = h.toPixels()) }
						this.style("transform", !1, !0).hasValue() && new D.Transform(this.style("transform", !1, !0).value).apply(t); if (this.style("clip-path", !1, !0).hasValue()) { var l = this.style("clip-path", !1, !0).getDefinition();
							null != l && l.apply(t) } t.globalAlpha = this.calculateOpacity() } }, D.Element.RenderedElementBase.prototype = new D.Element.ElementBase, D.Element.PathElementBase = function(t) { this.base = D.Element.RenderedElementBase, this.base(t), this.path = function(t) { return null != t && t.beginPath(), new D.BoundingBox }, this.renderChildren = function(t) { this.path(t), D.Mouse.checkPath(this, t), "" != t.fillStyle && ("inherit" != this.style("fill-rule").valueOrDefault("inherit") ? t.fill(this.style("fill-rule").value) : t.fill()), "" != t.strokeStyle && t.stroke(); var e = this.getMarkers(); if (null != e) { if (this.style("marker-start").isUrlDefinition())(i = this.style("marker-start").getDefinition()).render(t, e[0][0], e[0][1]); if (this.style("marker-mid").isUrlDefinition())
								for (var i = this.style("marker-mid").getDefinition(), n = 1; n < e.length - 1; n++) i.render(t, e[n][0], e[n][1]); if (this.style("marker-end").isUrlDefinition())(i = this.style("marker-end").getDefinition()).render(t, e[e.length - 1][0], e[e.length - 1][1]) } }, this.getBoundingBox = function() { return this.path() }, this.getMarkers = function() { return null } }, D.Element.PathElementBase.prototype = new D.Element.RenderedElementBase, D.SetDefaults = function(t) { t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4 }, D.Element.svg = function(t) { this.base = D.Element.RenderedElementBase, this.base(t), this.baseClearContext = this.clearContext, this.clearContext = function(t) { this.baseClearContext(t), D.ViewPort.RemoveCurrent() }, this.baseSetContext = this.setContext, this.setContext = function(t) { if (D.SetDefaults(t), t.canvas.style && void 0 !== t.font && void 0 !== l.getComputedStyle) { t.font = l.getComputedStyle(t.canvas).getPropertyValue("font"); var e = new D.Property("fontSize", D.Font.Parse(t.font).fontSize);
							e.hasValue() && (D.rootEmSize = D.emSize = e.toPixels("y")) } this.baseSetContext(t), this.attribute("x").hasValue() || (this.attribute("x", !0).value = 0), this.attribute("y").hasValue() || (this.attribute("y", !0).value = 0), t.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y")); var i = D.ViewPort.width(),
							n = D.ViewPort.height(); if (this.attribute("width").hasValue() || (this.attribute("width", !0).value = "100%"), this.attribute("height").hasValue() || (this.attribute("height", !0).value = "100%"), void 0 === this.root) { i = this.attribute("width").toPixels("x"), n = this.attribute("height").toPixels("y"); var s = 0,
								a = 0;
							this.attribute("refX").hasValue() && this.attribute("refY").hasValue() && (s = -this.attribute("refX").toPixels("x"), a = -this.attribute("refY").toPixels("y")), "visible" != this.attribute("overflow").valueOrDefault("hidden") && (t.beginPath(), t.moveTo(s, a), t.lineTo(i, a), t.lineTo(i, n), t.lineTo(s, n), t.closePath(), t.clip()) } if (D.ViewPort.SetCurrent(i, n), this.attribute("viewBox").hasValue()) { var r = D.ToNumberArray(this.attribute("viewBox").value),
								o = r[0],
								h = r[1];
							i = r[2], n = r[3], D.AspectRatio(t, this.attribute("preserveAspectRatio").value, D.ViewPort.width(), i, D.ViewPort.height(), n, o, h, this.attribute("refX").value, this.attribute("refY").value), D.ViewPort.RemoveCurrent(), D.ViewPort.SetCurrent(r[2], r[3]) } } }, D.Element.svg.prototype = new D.Element.RenderedElementBase, D.Element.rect = function(t) { this.base = D.Element.PathElementBase, this.base(t), this.path = function(t) { var e = this.attribute("x").toPixels("x"),
							i = this.attribute("y").toPixels("y"),
							n = this.attribute("width").toPixels("x"),
							s = this.attribute("height").toPixels("y"),
							a = this.attribute("rx").toPixels("x"),
							r = this.attribute("ry").toPixels("y"); if (this.attribute("rx").hasValue() && !this.attribute("ry").hasValue() && (r = a), this.attribute("ry").hasValue() && !this.attribute("rx").hasValue() && (a = r), a = Math.min(a, n / 2), r = Math.min(r, s / 2), null != t) { var o = (Math.sqrt(2) - 1) / 3 * 4;
							t.beginPath(), 0 < s && 0 < n && (t.moveTo(e + a, i), t.lineTo(e + n - a, i), t.bezierCurveTo(e + n - a + o * a, i, e + n, i + r - o * r, e + n, i + r), t.lineTo(e + n, i + s - r), t.bezierCurveTo(e + n, i + s - r + o * r, e + n - a + o * a, i + s, e + n - a, i + s), t.lineTo(e + a, i + s), t.bezierCurveTo(e + a - o * a, i + s, e, i + s - r + o * r, e, i + s - r), t.lineTo(e, i + r), t.bezierCurveTo(e, i + r - o * r, e + a - o * a, i, e + a, i), t.closePath()) } return new D.BoundingBox(e, i, e + n, i + s) } }, D.Element.rect.prototype = new D.Element.PathElementBase, D.Element.circle = function(t) { this.base = D.Element.PathElementBase, this.base(t), this.path = function(t) { var e = this.attribute("cx").toPixels("x"),
							i = this.attribute("cy").toPixels("y"),
							n = this.attribute("r").toPixels(); return null != t && 0 < n && (t.beginPath(), t.arc(e, i, n, 0, 2 * Math.PI, !1), t.closePath()), new D.BoundingBox(e - n, i - n, e + n, i + n) } }, D.Element.circle.prototype = new D.Element.PathElementBase, D.Element.ellipse = function(t) { this.base = D.Element.PathElementBase, this.base(t), this.path = function(t) { var e = (Math.sqrt(2) - 1) / 3 * 4,
							i = this.attribute("rx").toPixels("x"),
							n = this.attribute("ry").toPixels("y"),
							s = this.attribute("cx").toPixels("x"),
							a = this.attribute("cy").toPixels("y"); return null != t && (t.beginPath(), t.moveTo(s + i, a), t.bezierCurveTo(s + i, a + e * n, s + e * i, a + n, s, a + n), t.bezierCurveTo(s - e * i, a + n, s - i, a + e * n, s - i, a), t.bezierCurveTo(s - i, a - e * n, s - e * i, a - n, s, a - n), t.bezierCurveTo(s + e * i, a - n, s + i, a - e * n, s + i, a), t.closePath()), new D.BoundingBox(s - i, a - n, s + i, a + n) } }, D.Element.ellipse.prototype = new D.Element.PathElementBase, D.Element.line = function(t) { this.base = D.Element.PathElementBase, this.base(t), this.getPoints = function() { return [new D.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new D.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y"))] }, this.path = function(t) { var e = this.getPoints(); return null != t && (t.beginPath(), t.moveTo(e[0].x, e[0].y), t.lineTo(e[1].x, e[1].y)), new D.BoundingBox(e[0].x, e[0].y, e[1].x, e[1].y) }, this.getMarkers = function() { var t = this.getPoints(),
							e = t[0].angleTo(t[1]); return [
							[t[0], e],
							[t[1], e]
						] } }, D.Element.line.prototype = new D.Element.PathElementBase, D.Element.polyline = function(t) { this.base = D.Element.PathElementBase, this.base(t), this.points = D.CreatePath(this.attribute("points").value), this.path = function(t) { var e = new D.BoundingBox(this.points[0].x, this.points[0].y);
						null != t && (t.beginPath(), t.moveTo(this.points[0].x, this.points[0].y)); for (var i = 1; i < this.points.length; i++) e.addPoint(this.points[i].x, this.points[i].y), null != t && t.lineTo(this.points[i].x, this.points[i].y); return e }, this.getMarkers = function() { for (var t = [], e = 0; e < this.points.length - 1; e++) t.push([this.points[e], this.points[e].angleTo(this.points[e + 1])]); return 0 < t.length && t.push([this.points[this.points.length - 1], t[t.length - 1][1]]), t } }, D.Element.polyline.prototype = new D.Element.PathElementBase, D.Element.polygon = function(t) { this.base = D.Element.polyline, this.base(t), this.basePath = this.path, this.path = function(t) { var e = this.basePath(t); return null != t && (t.lineTo(this.points[0].x, this.points[0].y), t.closePath()), e } }, D.Element.polygon.prototype = new D.Element.polyline, D.Element.path = function(t) { this.base = D.Element.PathElementBase, this.base(t); var e = this.attribute("d").value;
					e = e.replace(/,/gm, " "); for (var i = 0; i < 2; i++) e = e.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2");
					e = (e = e.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2")).replace(/([0-9])([+\-])/gm, "$1 $2"); for (i = 0; i < 2; i++) e = e.replace(/(\.[0-9]*)(\.)/gm, "$1 $2");
					e = e.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 "), e = D.compressSpaces(e), e = D.trim(e), this.PathParser = new function(t) { this.tokens = t.split(" "), this.reset = function() { this.i = -1, this.command = "", this.previousCommand = "", this.start = new D.Point(0, 0), this.control = new D.Point(0, 0), this.current = new D.Point(0, 0), this.points = [], this.angles = [] }, this.isEnd = function() { return this.i >= this.tokens.length - 1 }, this.isCommandOrEnd = function() { return !!this.isEnd() || null != this.tokens[this.i + 1].match(/^[A-Za-z]$/) }, this.isRelativeCommand = function() { switch (this.command) {
								case "m":
								case "l":
								case "h":
								case "v":
								case "c":
								case "s":
								case "q":
								case "t":
								case "a":
								case "z":
									return !0 } return !1 }, this.getToken = function() { return this.i++, this.tokens[this.i] }, this.getScalar = function() { return parseFloat(this.getToken()) }, this.nextCommand = function() { this.previousCommand = this.command, this.command = this.getToken() }, this.getPoint = function() { var t = new D.Point(this.getScalar(), this.getScalar()); return this.makeAbsolute(t) }, this.getAsControlPoint = function() { var t = this.getPoint(); return this.control = t }, this.getAsCurrentPoint = function() { var t = this.getPoint(); return this.current = t }, this.getReflectedControlPoint = function() { return "c" != this.previousCommand.toLowerCase() && "s" != this.previousCommand.toLowerCase() && "q" != this.previousCommand.toLowerCase() && "t" != this.previousCommand.toLowerCase() ? this.current : new D.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y) }, this.makeAbsolute = function(t) { return this.isRelativeCommand() && (t.x += this.current.x, t.y += this.current.y), t }, this.addMarker = function(t, e, i) { null != i && 0 < this.angles.length && null == this.angles[this.angles.length - 1] && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(i)), this.addMarkerAngle(t, null == e ? null : e.angleTo(t)) }, this.addMarkerAngle = function(t, e) { this.points.push(t), this.angles.push(e) }, this.getMarkerPoints = function() { return this.points }, this.getMarkerAngles = function() { for (var t = 0; t < this.angles.length; t++)
								if (null == this.angles[t])
									for (var e = t + 1; e < this.angles.length; e++)
										if (null != this.angles[e]) { this.angles[t] = this.angles[e]; break }
							return this.angles } }(e), this.path = function(t) { var e = this.PathParser;
						e.reset(); var i = new D.BoundingBox; for (null != t && t.beginPath(); !e.isEnd();) switch (e.nextCommand(), e.command) {
							case "M":
							case "m":
								var n = e.getAsCurrentPoint(); for (e.addMarker(n), i.addPoint(n.x, n.y), null != t && t.moveTo(n.x, n.y), e.start = e.current; !e.isCommandOrEnd();) { n = e.getAsCurrentPoint();
									e.addMarker(n, e.start), i.addPoint(n.x, n.y), null != t && t.lineTo(n.x, n.y) } break;
							case "L":
							case "l":
								for (; !e.isCommandOrEnd();) { var s = e.current;
									n = e.getAsCurrentPoint();
									e.addMarker(n, s), i.addPoint(n.x, n.y), null != t && t.lineTo(n.x, n.y) } break;
							case "H":
							case "h":
								for (; !e.isCommandOrEnd();) { var a = new D.Point((e.isRelativeCommand() ? e.current.x : 0) + e.getScalar(), e.current.y);
									e.addMarker(a, e.current), e.current = a, i.addPoint(e.current.x, e.current.y), null != t && t.lineTo(e.current.x, e.current.y) } break;
							case "V":
							case "v":
								for (; !e.isCommandOrEnd();) { a = new D.Point(e.current.x, (e.isRelativeCommand() ? e.current.y : 0) + e.getScalar());
									e.addMarker(a, e.current), e.current = a, i.addPoint(e.current.x, e.current.y), null != t && t.lineTo(e.current.x, e.current.y) } break;
							case "C":
							case "c":
								for (; !e.isCommandOrEnd();) { var r = e.current,
										o = e.getPoint(),
										h = e.getAsControlPoint(),
										l = e.getAsCurrentPoint();
									e.addMarker(l, h, o), i.addBezierCurve(r.x, r.y, o.x, o.y, h.x, h.y, l.x, l.y), null != t && t.bezierCurveTo(o.x, o.y, h.x, h.y, l.x, l.y) } break;
							case "S":
							case "s":
								for (; !e.isCommandOrEnd();) { r = e.current, o = e.getReflectedControlPoint(), h = e.getAsControlPoint(), l = e.getAsCurrentPoint();
									e.addMarker(l, h, o), i.addBezierCurve(r.x, r.y, o.x, o.y, h.x, h.y, l.x, l.y), null != t && t.bezierCurveTo(o.x, o.y, h.x, h.y, l.x, l.y) } break;
							case "Q":
							case "q":
								for (; !e.isCommandOrEnd();) { r = e.current, h = e.getAsControlPoint(), l = e.getAsCurrentPoint();
									e.addMarker(l, h, h), i.addQuadraticCurve(r.x, r.y, h.x, h.y, l.x, l.y), null != t && t.quadraticCurveTo(h.x, h.y, l.x, l.y) } break;
							case "T":
							case "t":
								for (; !e.isCommandOrEnd();) { r = e.current, h = e.getReflectedControlPoint();
									e.control = h;
									l = e.getAsCurrentPoint();
									e.addMarker(l, h, h), i.addQuadraticCurve(r.x, r.y, h.x, h.y, l.x, l.y), null != t && t.quadraticCurveTo(h.x, h.y, l.x, l.y) } break;
							case "A":
							case "a":
								for (; !e.isCommandOrEnd();) { r = e.current; var u = e.getScalar(),
										c = e.getScalar(),
										f = e.getScalar() * (Math.PI / 180),
										p = e.getScalar(),
										d = e.getScalar(),
										m = (l = e.getAsCurrentPoint(), new D.Point(Math.cos(f) * (r.x - l.x) / 2 + Math.sin(f) * (r.y - l.y) / 2, -Math.sin(f) * (r.x - l.x) / 2 + Math.cos(f) * (r.y - l.y) / 2)),
										y = Math.pow(m.x, 2) / Math.pow(u, 2) + Math.pow(m.y, 2) / Math.pow(c, 2);
									1 < y && (u *= Math.sqrt(y), c *= Math.sqrt(y)); var v = (p == d ? -1 : 1) * Math.sqrt((Math.pow(u, 2) * Math.pow(c, 2) - Math.pow(u, 2) * Math.pow(m.y, 2) - Math.pow(c, 2) * Math.pow(m.x, 2)) / (Math.pow(u, 2) * Math.pow(m.y, 2) + Math.pow(c, 2) * Math.pow(m.x, 2)));
									isNaN(v) && (v = 0); var g = new D.Point(v * u * m.y / c, v * -c * m.x / u),
										x = new D.Point((r.x + l.x) / 2 + Math.cos(f) * g.x - Math.sin(f) * g.y, (r.y + l.y) / 2 + Math.sin(f) * g.x + Math.cos(f) * g.y),
										b = function(t) { return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2)) },
										P = function(t, e) { return (t[0] * e[0] + t[1] * e[1]) / (b(t) * b(e)) },
										E = function(t, e) { return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(P(t, e)) },
										w = E([1, 0], [(m.x - g.x) / u, (m.y - g.y) / c]),
										C = [(m.x - g.x) / u, (m.y - g.y) / c],
										B = [(-m.x - g.x) / u, (-m.y - g.y) / c],
										M = E(C, B);
									P(C, B) <= -1 && (M = Math.PI), 1 <= P(C, B) && (M = 0); var T = 1 - d ? 1 : -1,
										S = w + T * (M / 2),
										V = new D.Point(x.x + u * Math.cos(S), x.y + c * Math.sin(S)); if (e.addMarkerAngle(V, S - T * Math.PI / 2), e.addMarkerAngle(l, S - T * Math.PI), i.addPoint(l.x, l.y), null != t && !isNaN(w) && !isNaN(M)) { P = c < u ? u : c; var k = c < u ? 1 : u / c,
											A = c < u ? c / u : 1;
										t.translate(x.x, x.y), t.rotate(f), t.scale(k, A), t.arc(0, 0, P, w, w + M, 1 - d), t.scale(1 / k, 1 / A), t.rotate(-f), t.translate(-x.x, -x.y) } } break;
							case "Z":
							case "z":
								null != t && i.x1 !== i.x2 && i.y1 !== i.y2 && t.closePath(), e.current = e.start }
						return i }, this.getMarkers = function() { for (var t = this.PathParser.getMarkerPoints(), e = this.PathParser.getMarkerAngles(), i = [], n = 0; n < t.length; n++) i.push([t[n], e[n]]); return i } }, D.Element.path.prototype = new D.Element.PathElementBase, D.Element.pattern = function(t) { this.base = D.Element.ElementBase, this.base(t), this.createPattern = function(t, e, i) { var n = this.attribute("width").toPixels("x", !0),
							s = this.attribute("height").toPixels("y", !0),
							a = new D.Element.svg;
						a.attributes.viewBox = new D.Property("viewBox", this.attribute("viewBox").value), a.attributes.width = new D.Property("width", n + "px"), a.attributes.height = new D.Property("height", s + "px"), a.attributes.transform = new D.Property("transform", this.attribute("patternTransform").value), a.children = this.children; var r = d(n, s),
							o = r.getContext("2d");
						this.attribute("x").hasValue() && this.attribute("y").hasValue() && o.translate(this.attribute("x").toPixels("x", !0), this.attribute("y").toPixels("y", !0)), i.hasValue() ? this.styles["fill-opacity"] = i : delete this.styles["fill-opacity"]; for (var h = -1; h <= 1; h++)
							for (var l = -1; l <= 1; l++) o.save(), a.attributes.x = new D.Property("x", h * r.width), a.attributes.y = new D.Property("y", l * r.height), a.render(o), o.restore(); return t.createPattern(r, "repeat") } }, D.Element.pattern.prototype = new D.Element.ElementBase, D.Element.marker = function(t) { this.base = D.Element.ElementBase, this.base(t), this.baseRender = this.render, this.render = function(t, e, i) { if (e) { t.translate(e.x, e.y), "auto" == this.attribute("orient").valueOrDefault("auto") && t.rotate(i), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && t.scale(t.lineWidth, t.lineWidth), t.save(); var n = new D.Element.svg;
							n.attributes.viewBox = new D.Property("viewBox", this.attribute("viewBox").value), n.attributes.refX = new D.Property("refX", this.attribute("refX").value), n.attributes.refY = new D.Property("refY", this.attribute("refY").value), n.attributes.width = new D.Property("width", this.attribute("markerWidth").value), n.attributes.height = new D.Property("height", this.attribute("markerHeight").value), n.attributes.fill = new D.Property("fill", this.attribute("fill").valueOrDefault("black")), n.attributes.stroke = new D.Property("stroke", this.attribute("stroke").valueOrDefault("none")), n.children = this.children, n.render(t), t.restore(), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && t.scale(1 / t.lineWidth, 1 / t.lineWidth), "auto" == this.attribute("orient").valueOrDefault("auto") && t.rotate(-i), t.translate(-e.x, -e.y) } } }, D.Element.marker.prototype = new D.Element.ElementBase, D.Element.defs = function(t) { this.base = D.Element.ElementBase, this.base(t), this.render = function() {} }, D.Element.defs.prototype = new D.Element.ElementBase, D.Element.GradientBase = function(t) { this.base = D.Element.ElementBase, this.base(t), this.stops = []; for (var e = 0; e < this.children.length; e++) { var i = this.children[e]; "stop" == i.type && this.stops.push(i) } this.getGradient = function() {}, this.gradientUnits = function() { return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox") }, this.attributesToInherit = ["gradientUnits"], this.inheritStopContainer = function(t) { for (var e = 0; e < this.attributesToInherit.length; e++) { var i = this.attributesToInherit[e];!this.attribute(i).hasValue() && t.attribute(i).hasValue() && (this.attribute(i, !0).value = t.attribute(i).value) } }, this.createGradient = function(t, e, i) { var n = this;
						this.getHrefAttribute().hasValue() && (n = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(n)); var s = function(t) { return i.hasValue() ? new D.Property("color", t).addOpacity(i).value : t },
							a = this.getGradient(t, e); if (null == a) return s(n.stops[n.stops.length - 1].color); for (var r = 0; r < n.stops.length; r++) a.addColorStop(n.stops[r].offset, s(n.stops[r].color)); if (this.attribute("gradientTransform").hasValue()) { var o = D.ViewPort.viewPorts[0],
								h = new D.Element.rect;
							h.attributes.x = new D.Property("x", -D.MAX_VIRTUAL_PIXELS / 3), h.attributes.y = new D.Property("y", -D.MAX_VIRTUAL_PIXELS / 3), h.attributes.width = new D.Property("width", D.MAX_VIRTUAL_PIXELS), h.attributes.height = new D.Property("height", D.MAX_VIRTUAL_PIXELS); var l = new D.Element.g;
							l.attributes.transform = new D.Property("transform", this.attribute("gradientTransform").value), l.children = [h]; var u = new D.Element.svg;
							u.attributes.x = new D.Property("x", 0), u.attributes.y = new D.Property("y", 0), u.attributes.width = new D.Property("width", o.width), u.attributes.height = new D.Property("height", o.height), u.children = [l]; var c = d(o.width, o.height),
								f = c.getContext("2d"); return f.fillStyle = a, u.render(f), f.createPattern(c, "no-repeat") } return a } }, D.Element.GradientBase.prototype = new D.Element.ElementBase, D.Element.linearGradient = function(t) { this.base = D.Element.GradientBase, this.base(t), this.attributesToInherit.push("x1"), this.attributesToInherit.push("y1"), this.attributesToInherit.push("x2"), this.attributesToInherit.push("y2"), this.getGradient = function(t, e) { var i = "objectBoundingBox" == this.gradientUnits() ? e.getBoundingBox(t) : null;
						this.attribute("x1").hasValue() || this.attribute("y1").hasValue() || this.attribute("x2").hasValue() || this.attribute("y2").hasValue() || (this.attribute("x1", !0).value = 0, this.attribute("y1", !0).value = 0, this.attribute("x2", !0).value = 1, this.attribute("y2", !0).value = 0); var n = "objectBoundingBox" == this.gradientUnits() ? i.x() + i.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x"),
							s = "objectBoundingBox" == this.gradientUnits() ? i.y() + i.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y"),
							a = "objectBoundingBox" == this.gradientUnits() ? i.x() + i.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x"),
							r = "objectBoundingBox" == this.gradientUnits() ? i.y() + i.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y"); return n == a && s == r ? null : t.createLinearGradient(n, s, a, r) } }, D.Element.linearGradient.prototype = new D.Element.GradientBase, D.Element.radialGradient = function(t) { this.base = D.Element.GradientBase, this.base(t), this.attributesToInherit.push("cx"), this.attributesToInherit.push("cy"), this.attributesToInherit.push("r"), this.attributesToInherit.push("fx"), this.attributesToInherit.push("fy"), this.attributesToInherit.push("fr"), this.getGradient = function(t, e) { var i = e.getBoundingBox(t);
						this.attribute("cx").hasValue() || (this.attribute("cx", !0).value = "50%"), this.attribute("cy").hasValue() || (this.attribute("cy", !0).value = "50%"), this.attribute("r").hasValue() || (this.attribute("r", !0).value = "50%"); var n = "objectBoundingBox" == this.gradientUnits() ? i.x() + i.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x"),
							s = "objectBoundingBox" == this.gradientUnits() ? i.y() + i.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y"),
							a = n,
							r = s;
						this.attribute("fx").hasValue() && (a = "objectBoundingBox" == this.gradientUnits() ? i.x() + i.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x")), this.attribute("fy").hasValue() && (r = "objectBoundingBox" == this.gradientUnits() ? i.y() + i.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y")); var o = "objectBoundingBox" == this.gradientUnits() ? (i.width() + i.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels(),
							h = this.attribute("fr").toPixels(); return t.createRadialGradient(a, r, h, n, s, o) } }, D.Element.radialGradient.prototype = new D.Element.GradientBase, D.Element.stop = function(t) { this.base = D.Element.ElementBase, this.base(t), this.offset = this.attribute("offset").numValue(), this.offset < 0 && (this.offset = 0), 1 < this.offset && (this.offset = 1); var e = this.style("stop-color", !0); "" === e.value && (e.value = "#000"), this.style("stop-opacity").hasValue() && (e = e.addOpacity(this.style("stop-opacity"))), this.color = e.value }, D.Element.stop.prototype = new D.Element.ElementBase, D.Element.AnimateBase = function(t) { this.base = D.Element.ElementBase, this.base(t), D.Animations.push(this), this.duration = 0, this.begin = this.attribute("begin").toMilliseconds(), this.maxDuration = this.begin + this.attribute("dur").toMilliseconds(), this.getProperty = function() { var t = this.attribute("attributeType").value,
							e = this.attribute("attributeName").value; return "CSS" == t ? this.parent.style(e, !0) : this.parent.attribute(e, !0) }, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.calcValue = function() { return "" }, this.update = function(t) { if (null == this.initialValue && (this.initialValue = this.getProperty().value, this.initialUnits = this.getProperty().getUnits()), this.duration > this.maxDuration) { if ("indefinite" == this.attribute("repeatCount").value || "indefinite" == this.attribute("repeatDur").value) this.duration = 0;
							else if ("freeze" != this.attribute("fill").valueOrDefault("remove") || this.frozen) { if ("remove" == this.attribute("fill").valueOrDefault("remove") && !this.removed) return this.removed = !0, this.getProperty().value = this.parent.animationFrozen ? this.parent.animationFrozenValue : this.initialValue, !0 } else this.frozen = !0, this.parent.animationFrozen = !0, this.parent.animationFrozenValue = this.getProperty().value; return !1 } this.duration = this.duration + t; var e = !1; if (this.begin < this.duration) { var i = this.calcValue(); if (this.attribute("type").hasValue()) i = this.attribute("type").value + "(" + i + ")";
							this.getProperty().value = i, e = !0 } return e }, this.from = this.attribute("from"), this.to = this.attribute("to"), this.values = this.attribute("values"), this.values.hasValue() && (this.values.value = this.values.value.split(";")), this.progress = function() { var t = { progress: (this.duration - this.begin) / (this.maxDuration - this.begin) }; if (this.values.hasValue()) { var e = t.progress * (this.values.value.length - 1),
								i = Math.floor(e),
								n = Math.ceil(e);
							t.from = new D.Property("from", parseFloat(this.values.value[i])), t.to = new D.Property("to", parseFloat(this.values.value[n])), t.progress = (e - i) / (n - i) } else t.from = this.from, t.to = this.to; return t } }, D.Element.AnimateBase.prototype = new D.Element.ElementBase, D.Element.animate = function(t) { this.base = D.Element.AnimateBase, this.base(t), this.calcValue = function() { var t = this.progress(),
							e = t.from.numValue() + (t.to.numValue() - t.from.numValue()) * t.progress; return "%" === this.initialUnits && (e *= 100), e + this.initialUnits } }, D.Element.animate.prototype = new D.Element.AnimateBase, D.Element.animateColor = function(t) { this.base = D.Element.AnimateBase, this.base(t), this.calcValue = function() { var t = this.progress(),
							e = new y(t.from.value),
							i = new y(t.to.value); if (e.ok && i.ok) { var n = e.r + (i.r - e.r) * t.progress,
								s = e.g + (i.g - e.g) * t.progress,
								a = e.b + (i.b - e.b) * t.progress; return "rgb(" + parseInt(n, 10) + "," + parseInt(s, 10) + "," + parseInt(a, 10) + ")" } return this.attribute("from").value } }, D.Element.animateColor.prototype = new D.Element.AnimateBase, D.Element.animateTransform = function(t) { this.base = D.Element.AnimateBase, this.base(t), this.calcValue = function() { for (var t = this.progress(), e = D.ToNumberArray(t.from.value), i = D.ToNumberArray(t.to.value), n = "", s = 0; s < e.length; s++) n += e[s] + (i[s] - e[s]) * t.progress + " "; return n } }, D.Element.animateTransform.prototype = new D.Element.animate, D.Element.font = function(t) { this.base = D.Element.ElementBase, this.base(t), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.isRTL = !1, this.isArabic = !1, this.fontFace = null, this.missingGlyph = null, this.glyphs = []; for (var e = 0; e < this.children.length; e++) { var i = this.children[e]; "font-face" == i.type ? (this.fontFace = i).style("font-family").hasValue() && (D.Definitions[i.style("font-family").value] = this) : "missing-glyph" == i.type ? this.missingGlyph = i : "glyph" == i.type && ("" != i.arabicForm ? (this.isRTL = !0, this.isArabic = !0, void 0 === this.glyphs[i.unicode] && (this.glyphs[i.unicode] = []), this.glyphs[i.unicode][i.arabicForm] = i) : this.glyphs[i.unicode] = i) } this.render = function() {} }, D.Element.font.prototype = new D.Element.ElementBase, D.Element.fontface = function(t) { this.base = D.Element.ElementBase, this.base(t), this.ascent = this.attribute("ascent").value, this.descent = this.attribute("descent").value, this.unitsPerEm = this.attribute("units-per-em").numValue() }, D.Element.fontface.prototype = new D.Element.ElementBase, D.Element.missingglyph = function(t) { this.base = D.Element.path, this.base(t), this.horizAdvX = 0 }, D.Element.missingglyph.prototype = new D.Element.path, D.Element.glyph = function(t) { this.base = D.Element.path, this.base(t), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.unicode = this.attribute("unicode").value, this.arabicForm = this.attribute("arabic-form").value }, D.Element.glyph.prototype = new D.Element.path, D.Element.text = function(t) { this.captureTextNodes = !0, this.base = D.Element.RenderedElementBase, this.base(t), this.baseSetContext = this.setContext, this.setContext = function(t) { this.baseSetContext(t); var e = this.style("dominant-baseline").toTextBaseline();
						null == e && (e = this.style("alignment-baseline").toTextBaseline()), null != e && (t.textBaseline = e) }, this.initializeCoordinates = function(t) { this.x = this.attribute("x").toPixels("x"), this.y = this.attribute("y").toPixels("y"), this.attribute("dx").hasValue() && (this.x += this.attribute("dx").toPixels("x")), this.attribute("dy").hasValue() && (this.y += this.attribute("dy").toPixels("y")), this.x += this.getAnchorDelta(t, this, 0) }, this.getBoundingBox = function(t) { this.initializeCoordinates(t); for (var e = null, i = 0; i < this.children.length; i++) { var n = this.getChildBoundingBox(t, this, this, i);
							null == e ? e = n : e.addBoundingBox(n) } return e }, this.renderChildren = function(t) { this.initializeCoordinates(t); for (var e = 0; e < this.children.length; e++) this.renderChild(t, this, this, e);
						D.Mouse.checkBoundingBox(this, this.getBoundingBox(t)) }, this.getAnchorDelta = function(t, e, i) { var n = this.style("text-anchor").valueOrDefault("start"); if ("start" == n) return 0; for (var s = 0, a = i; a < e.children.length; a++) { var r = e.children[a]; if (i < a && r.attribute("x").hasValue()) break;
							s += r.measureTextRecursive(t) } return -1 * ("end" == n ? s : s / 2) }, this.adjustChildCoordinates = function(t, e, i, n) { var s = i.children[n]; if ("function" != typeof s.measureText) return s; if (s.attribute("x").hasValue()) { s.x = s.attribute("x").toPixels("x") + e.getAnchorDelta(t, i, n); var a = s.attribute("text-anchor").valueOrDefault("start"); if ("start" !== a) { var r = s.measureTextRecursive(t);
								s.x += -1 * ("end" == a ? r : r / 2) } s.attribute("dx").hasValue() && (s.x += s.attribute("dx").toPixels("x")) } else s.attribute("dx").hasValue() && (e.x += s.attribute("dx").toPixels("x")), s.x = e.x; return e.x = s.x + s.measureText(t), s.attribute("y").hasValue() ? (s.y = s.attribute("y").toPixels("y"), s.attribute("dy").hasValue() && (s.y += s.attribute("dy").toPixels("y"))) : (s.attribute("dy").hasValue() && (e.y += s.attribute("dy").toPixels("y")), s.y = e.y), e.y = s.y, s }, this.getChildBoundingBox = function(t, e, i, n) { var s = this.adjustChildCoordinates(t, e, i, n),
							a = s.getBoundingBox(t); for (n = 0; n < s.children.length; n++) { var r = e.getChildBoundingBox(t, e, s, n);
							a.addBoundingBox(r) } return a }, this.renderChild = function(t, e, i, n) { var s = this.adjustChildCoordinates(t, e, i, n);
						s.render(t); for (n = 0; n < s.children.length; n++) e.renderChild(t, e, s, n) } }, D.Element.text.prototype = new D.Element.RenderedElementBase, D.Element.TextElementBase = function(t) { this.base = D.Element.RenderedElementBase, this.base(t), this.getGlyph = function(t, e, i) { var n = e[i],
							s = null; if (t.isArabic) { var a = "isolated";
							(0 == i || " " == e[i - 1]) && i < e.length - 2 && " " != e[i + 1] && (a = "terminal"), 0 < i && " " != e[i - 1] && i < e.length - 2 && " " != e[i + 1] && (a = "medial"), 0 < i && " " != e[i - 1] && (i == e.length - 1 || " " == e[i + 1]) && (a = "initial"), void 0 !== t.glyphs[n] && null == (s = t.glyphs[n][a]) && "glyph" == t.glyphs[n].type && (s = t.glyphs[n]) } else s = t.glyphs[n]; return null == s && (s = t.missingGlyph), s }, this.renderChildren = function(t) { var e = this.parent.style("font-family").getDefinition(); if (null == e) "stroke" == t.paintOrder ? ("" != t.strokeStyle && t.strokeText(D.compressSpaces(this.getText()), this.x, this.y), "" != t.fillStyle && t.fillText(D.compressSpaces(this.getText()), this.x, this.y)) : ("" != t.fillStyle && t.fillText(D.compressSpaces(this.getText()), this.x, this.y), "" != t.strokeStyle && t.strokeText(D.compressSpaces(this.getText()), this.x, this.y));
						else { var i = this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize),
								n = this.parent.style("font-style").valueOrDefault(D.Font.Parse(D.ctx.font).fontStyle),
								s = this.getText();
							e.isRTL && (s = s.split("").reverse().join("")); for (var a = D.ToNumberArray(this.parent.attribute("dx").value), r = 0; r < s.length; r++) { var o = this.getGlyph(e, s, r),
									h = i / e.fontFace.unitsPerEm;
								t.translate(this.x, this.y), t.scale(h, -h); var l = t.lineWidth;
								t.lineWidth = t.lineWidth * e.fontFace.unitsPerEm / i, "italic" == n && t.transform(1, 0, .4, 1, 0, 0), o.render(t), "italic" == n && t.transform(1, 0, -.4, 1, 0, 0), t.lineWidth = l, t.scale(1 / h, -1 / h), t.translate(-this.x, -this.y), this.x += i * (o.horizAdvX || e.horizAdvX) / e.fontFace.unitsPerEm, void 0 === a[r] || isNaN(a[r]) || (this.x += a[r]) } } }, this.getText = function() {}, this.measureTextRecursive = function(t) { for (var e = this.measureText(t), i = 0; i < this.children.length; i++) e += this.children[i].measureTextRecursive(t); return e }, this.measureText = function(t) { var e = this.parent.style("font-family").getDefinition(); if (null != e) { var i = this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize),
								n = 0,
								s = this.getText();
							e.isRTL && (s = s.split("").reverse().join("")); for (var a = D.ToNumberArray(this.parent.attribute("dx").value), r = 0; r < s.length; r++) { n += (this.getGlyph(e, s, r).horizAdvX || e.horizAdvX) * i / e.fontFace.unitsPerEm, void 0 === a[r] || isNaN(a[r]) || (n += a[r]) } return n } var o = D.compressSpaces(this.getText()); if (!t.measureText) return 10 * o.length;
						t.save(), this.setContext(t, !0); var h = t.measureText(o).width; return t.restore(), h }, this.getBoundingBox = function(t) { var e = this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize); return new D.BoundingBox(this.x, this.y - e, this.x + this.measureText(t), this.y) } }, D.Element.TextElementBase.prototype = new D.Element.RenderedElementBase, D.Element.tspan = function(t) { this.captureTextNodes = !0, this.base = D.Element.TextElementBase, this.base(t), this.text = D.compressSpaces(t.value || t.text || t.textContent || ""), this.getText = function() { return 0 < this.children.length ? "" : this.text } }, D.Element.tspan.prototype = new D.Element.TextElementBase, D.Element.tref = function(t) { this.base = D.Element.TextElementBase, this.base(t), this.getText = function() { var t = this.getHrefAttribute().getDefinition(); if (null != t) return t.children[0].getText() } }, D.Element.tref.prototype = new D.Element.TextElementBase, D.Element.a = function(t) { this.base = D.Element.TextElementBase, this.base(t), this.hasText = 0 < t.childNodes.length; for (var e = 0; e < t.childNodes.length; e++) 3 != t.childNodes[e].nodeType && (this.hasText = !1);
					this.text = this.hasText ? t.childNodes[0].value || t.childNodes[0].data : "", this.getText = function() { return this.text }, this.baseRenderChildren = this.renderChildren, this.renderChildren = function(t) { if (this.hasText) { this.baseRenderChildren(t); var e = new D.Property("fontSize", D.Font.Parse(D.ctx.font).fontSize);
							D.Mouse.checkBoundingBox(this, new D.BoundingBox(this.x, this.y - e.toPixels("y"), this.x + this.measureText(t), this.y)) } else if (0 < this.children.length) { var i = new D.Element.g;
							i.children = this.children, i.parent = this, i.render(t) } }, this.onclick = function() { l.open(this.getHrefAttribute().value) }, this.onmousemove = function() { D.ctx.canvas.style.cursor = "pointer" } }, D.Element.a.prototype = new D.Element.TextElementBase, D.Element.textPath = function(t) { this.base = D.Element.TextElementBase, this.base(t); var e = this.getHrefAttribute().getDefinition();
					this.text = D.compressSpaces(t.value || t.text || t.textContent || ""), this.renderChildren = function(t) { this.setTextData(t), t.save(); var e = this.parent.style("text-decoration").value,
							i = this.fontSize(),
							n = this.glyphInfo,
							s = t.fillStyle; "underline" === e && t.beginPath(); for (var a = 0; a < n.length; a++) { var r = n[a].p0,
								o = n[a].p1,
								h = n[a].text;
							t.save(), t.translate(r.x, r.y), t.rotate(n[a].rotation), "" != t.fillStyle && t.fillText(D.compressSpaces(h), 0, 0), "" != t.strokeStyle && t.strokeText(D.compressSpaces(h), 0, 0), t.restore(), "underline" === e && (0 === a && t.moveTo(r.x, r.y + i / 8), t.lineTo(o.x, o.y + i / 5)) } "underline" === e && (t.lineWidth = i / 20, t.strokeStyle = s, t.stroke(), t.closePath()), t.restore() }, this.path = function(t) { var e = this.dataArray;
						null != t && t.beginPath(); for (var i = 0; i < e.length; i++) { var n = e[i].command,
								s = e[i].points; switch (n) {
								case "L":
									null != t && t.lineTo(s[0], s[1]); break;
								case "M":
									null != t && t.moveTo(s[0], s[1]); break;
								case "C":
									null != t && t.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]); break;
								case "Q":
									null != t && t.quadraticCurveTo(s[0], s[1], s[2], s[3]); break;
								case "A":
									var a = s[0],
										r = s[1],
										o = s[2],
										h = s[3],
										l = s[4],
										u = s[5],
										c = s[6],
										f = s[7],
										p = h < o ? o : h,
										d = h < o ? 1 : o / h,
										m = h < o ? h / o : 1;
									null != t && (t.translate(a, r), t.rotate(c), t.scale(d, m), t.arc(0, 0, p, l, l + u, 1 - f), t.scale(1 / d, 1 / m), t.rotate(-c), t.translate(-a, -r)); break;
								case "z":
									null != t && t.closePath() } } }, this.getText = function() { return this.text }, this.fontSize = function() { return this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize) }, this.measureText = function(t, e) { var i = this.parent.style("font-family").getDefinition(); if (e = e || this.getText(), null != i) { var n = this.fontSize(),
								s = 0;
							i.isRTL && (e = e.split("").reverse().join("")); for (var a = D.ToNumberArray(this.parent.attribute("dx").value), r = 0; r < e.length; r++) { s += (this.getGlyph(i, e, r).horizAdvX || i.horizAdvX) * n / i.fontFace.unitsPerEm, void 0 === a[r] || isNaN(a[r]) || (s += a[r]) } return s } var o = D.compressSpaces(e); if (!t.measureText) return 10 * o.length;
						t.save(), this.setContext(t); var h = t.measureText(o).width; return t.restore(), h }, this.setTextData = function(r) { if (!this.hasOwnProperty("glyphInfo")) { var o = this,
								t = this.getText().split(""),
								h = this.getText().split(" ").length - 1,
								e = D.ToNumberArray(this.parent.attribute("dx").valueOrDefault("0")),
								i = 0,
								l = this.parent.style("text-anchor").valueOrDefault("start"),
								n = this.style("letter-spacing"),
								s = this.parent.style("letter-spacing");
							n.hasValue() && "inherit" !== n.getValue() ? n.hasValue() && "initial" !== n.getValue() && "unset" !== n.getValue() && (i = n.toPixels()) : i = s.toPixels(), this.letterSpacingCache = []; for (var a = 0; a < this.getText().length; a++) this.letterSpacingCache.push(void 0 !== e[a] ? e[a] : i); var u = this.letterSpacingCache.reduce(function(t, e) { return t + e || 0 }, 0);
							this.textWidth = this.measureText(r), this.textHeight = this.fontSize(); var c = Math.max(this.textWidth + u, 0);
							this.glyphInfo = []; var f = this.getPathLength(),
								p = this.style("startOffset").numValueOrDefault(0) * f,
								d = 0; "middle" !== l && "center" !== l || (d = -c / 2), "end" !== l && "right" !== l || (d = -c), d += p; var m = function(t, e) { var i, n = o.measureText(r, t); " " === t && "justify" === l && c < f && (n += (f - c) / h), -1 < e && (d += (i = (i = e) || 0, o.letterSpacingCache[i] || 0)); var s = o.textHeight / 20,
									a = { p0: o.getEquidistantPointOnPath(d, s), p1: o.getEquidistantPointOnPath(d + n, s) }; return d += n, a }; for (a = 0; a < t.length; a++) { var y = m(t[a], a); if (void 0 !== y.p0 && void 0 !== y.p1) { var v = o.getLineLength(y.p0.x, y.p0.y, y.p1.x, y.p1.y),
										g = o.getPointOnLine(0 + v / 2, y.p0.x, y.p0.y, y.p1.x, y.p1.y),
										x = Math.atan2(y.p1.y - y.p0.y, y.p1.x - y.p0.x);
									this.glyphInfo.push({ transposeX: g.x, transposeY: g.y, text: t[a], rotation: x, p0: y.p0, p1: y.p1 }) } } } }, this.parsePathData = function(t) { if (this.pathLength = void 0, !t) return []; var e = [],
							i = t.PathParser; for (i.reset(); !i.isEnd();) { var n = [],
								s = null,
								a = i.current ? i.current.x : 0,
								r = i.current ? i.current.y : 0;
							i.nextCommand(); var o = i.command.toUpperCase(); switch (i.command) {
								case "M":
								case "m":
									var h = i.getAsCurrentPoint(); for (n.push(h.x, h.y), i.start = i.current; !i.isCommandOrEnd();) { h = i.getAsCurrentPoint();
										n.push(h.x, h.y), s = "L" } break;
								case "L":
								case "l":
									for (; !i.isCommandOrEnd();) { h = i.getAsCurrentPoint();
										n.push(h.x, h.y) } s = "L"; break;
								case "H":
								case "h":
									for (; !i.isCommandOrEnd();) { var l = new D.Point((i.isRelativeCommand() ? i.current.x : 0) + i.getScalar(), i.current.y);
										n.push(l.x, l.y), i.current = l } s = "L"; break;
								case "V":
								case "v":
									for (; !i.isCommandOrEnd();) { l = new D.Point(i.current.x, (i.isRelativeCommand() ? i.current.y : 0) + i.getScalar());
										n.push(l.x, l.y), i.current = l } s = "L"; break;
								case "C":
								case "c":
									for (; !i.isCommandOrEnd();) { var u = i.getPoint(),
											c = i.getAsControlPoint(),
											f = i.getAsCurrentPoint();
										n.push(u.x, u.y, c.x, c.y, f.x, f.y) } break;
								case "S":
								case "s":
									for (; !i.isCommandOrEnd();) { u = i.getReflectedControlPoint(), c = i.getAsControlPoint(), f = i.getAsCurrentPoint();
										n.push(u.x, u.y, c.x, c.y, f.x, f.y) } s = "C"; break;
								case "Q":
								case "q":
									for (; !i.isCommandOrEnd();) { c = i.getAsControlPoint(), f = i.getAsCurrentPoint();
										n.push(c.x, c.y, f.x, f.y) } break;
								case "T":
								case "t":
									for (; !i.isCommandOrEnd();) { c = i.getReflectedControlPoint();
										i.control = c;
										f = i.getAsCurrentPoint();
										n.push(c.x, c.y, f.x, f.y) } s = "Q"; break;
								case "A":
								case "a":
									for (; !i.isCommandOrEnd();) { var p = i.current,
											d = i.getScalar(),
											m = i.getScalar(),
											y = i.getScalar() * (Math.PI / 180),
											v = i.getScalar(),
											g = i.getScalar(),
											x = (f = i.getAsCurrentPoint(), new D.Point(Math.cos(y) * (p.x - f.x) / 2 + Math.sin(y) * (p.y - f.y) / 2, -Math.sin(y) * (p.x - f.x) / 2 + Math.cos(y) * (p.y - f.y) / 2)),
											b = Math.pow(x.x, 2) / Math.pow(d, 2) + Math.pow(x.y, 2) / Math.pow(m, 2);
										1 < b && (d *= Math.sqrt(b), m *= Math.sqrt(b)); var P = (v == g ? -1 : 1) * Math.sqrt((Math.pow(d, 2) * Math.pow(m, 2) - Math.pow(d, 2) * Math.pow(x.y, 2) - Math.pow(m, 2) * Math.pow(x.x, 2)) / (Math.pow(d, 2) * Math.pow(x.y, 2) + Math.pow(m, 2) * Math.pow(x.x, 2)));
										isNaN(P) && (P = 0); var E = new D.Point(P * d * x.y / m, P * -m * x.x / d),
											w = new D.Point((p.x + f.x) / 2 + Math.cos(y) * E.x - Math.sin(y) * E.y, (p.y + f.y) / 2 + Math.sin(y) * E.x + Math.cos(y) * E.y),
											C = function(t) { return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2)) },
											B = function(t, e) { return (t[0] * e[0] + t[1] * e[1]) / (C(t) * C(e)) },
											M = function(t, e) { return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(B(t, e)) },
											T = M([1, 0], [(x.x - E.x) / d, (x.y - E.y) / m]),
											S = [(x.x - E.x) / d, (x.y - E.y) / m],
											V = [(-x.x - E.x) / d, (-x.y - E.y) / m],
											k = M(S, V);
										B(S, V) <= -1 && (k = Math.PI), 1 <= B(S, V) && (k = 0), 0 === g && 0 < k && (k -= 2 * Math.PI), 1 === g && k < 0 && (k += 2 * Math.PI), n = [w.x, w.y, d, m, T, k, y, g] } break;
								case "Z":
								case "z":
									i.current = i.start } "Z" !== o ? e.push({ command: s || o, points: n, start: { x: a, y: r }, pathLength: this.calcLength(a, r, s || o, n) }) : e.push({ command: "z", points: [], start: void 0, pathLength: 0 }) } return e }, this.getPathLength = function() { if (void 0 === this.pathLength || null === this.pathLength || isNaN(this.pathLength))
							for (var t = this.pathLength = 0; t < this.dataArray.length; t++) 0 < this.dataArray[t].pathLength && (this.pathLength += this.dataArray[t].pathLength); return this.pathLength }, this.getPointOnPath = function(t) { var e = 0,
							i = this.getPathLength(),
							n = void 0; if (!(t < -5e-5 || i < t - 5e-5))
							for (var s = 0; s < this.dataArray.length; s++) { var a = this.dataArray[s]; if (!a || !(a.pathLength < 5e-5 || e + a.pathLength + 5e-5 < t)) { var r = t - e,
										o = void 0; switch (a.command) {
										case "L":
											n = this.getPointOnLine(r, a.start.x, a.start.y, a.points[0], a.points[1], a.start.x, a.start.y); break;
										case "A":
											var h = a.points[4],
												l = a.points[5],
												u = a.points[4] + l; if (o = h + r / a.pathLength * l, l < 0 && o < u || 0 <= l && u < o) break;
											n = this.getPointOnEllipticalArc(a.points[0], a.points[1], a.points[2], a.points[3], o, a.points[6]); break;
										case "C":
											1 < (o = r / a.pathLength) && (o = 1), n = this.getPointOnCubicBezier(o, a.start.x, a.start.y, a.points[0], a.points[1], a.points[2], a.points[3], a.points[4], a.points[5]); break;
										case "Q":
											1 < (o = r / a.pathLength) && (o = 1), n = this.getPointOnQuadraticBezier(o, a.start.x, a.start.y, a.points[0], a.points[1], a.points[2], a.points[3]) } if (void 0 !== n && n !== {}) return n; break } e += a.pathLength } }, this.buildEquidistantCache = function(t, e) { var i = this.getPathLength(); if (e = e || .25, t = t || i / 100, this.equidistantCache = this.equidistantCache || {}, !this.equidistantCache.hasOwnProperty("points") || this.equidistantCache.step != t || this.equidistantCache.precision != e) { this.equidistantCache = { step: t, precision: e, points: [] }; for (var n = 0, s = 0; s <= i; s += e) { var a = this.getPointOnPath(s),
									r = this.getPointOnPath(s + e);
								void 0 !== a && void 0 !== r && (t <= (n += this.getLineLength(a.x, a.y, r.x, r.y)) && (this.equidistantCache.points.push({ x: a.x, y: a.y, distance: s }), n -= t)) } } }, this.getEquidistantPointOnPath = function(t, e, i) { if (this.buildEquidistantCache(e, i), !(t < 0 || 5e-5 < t - this.getPathLength())) { var n = Math.round(t / this.getPathLength() * (this.equidistantCache.points.length - 1)); return this.equidistantCache.points[n] || void 0 } }, this.getLineLength = function(t, e, i, n) { return Math.sqrt((i - t) * (i - t) + (n - e) * (n - e)) }, this.getPointOnLine = function(t, e, i, n, s, a, r) { void 0 === a && (a = e), void 0 === r && (r = i); var o = (s - i) / (n - e + 1e-8),
							h = Math.sqrt(t * t / (1 + o * o));
						n < e && (h *= -1); var l, u = o * h; if (n === e) l = { x: a, y: r + u };
						else if ((r - i) / (a - e + 1e-8) === o) l = { x: a + h, y: r + u };
						else { var c, f, p = this.getLineLength(e, i, n, s); if (p < 1e-8) return; var d = (a - e) * (n - e) + (r - i) * (s - i);
							c = e + (d /= p * p) * (n - e), f = i + d * (s - i); var m = this.getLineLength(a, r, c, f),
								y = Math.sqrt(t * t - m * m);
							h = Math.sqrt(y * y / (1 + o * o)), n < e && (h *= -1), l = { x: c + h, y: f + (u = o * h) } } return l }, this.getPointOnCubicBezier = function(t, e, i, n, s, a, r, o, h) {
						function l(t) { return t * t * t }

						function u(t) { return 3 * t * t * (1 - t) }

						function c(t) { return 3 * t * (1 - t) * (1 - t) }

						function f(t) { return (1 - t) * (1 - t) * (1 - t) } return { x: o * l(t) + a * u(t) + n * c(t) + e * f(t), y: h * l(t) + r * u(t) + s * c(t) + i * f(t) } }, this.getPointOnQuadraticBezier = function(t, e, i, n, s, a, r) {
						function o(t) { return t * t }

						function h(t) { return 2 * t * (1 - t) }

						function l(t) { return (1 - t) * (1 - t) } return { x: a * o(t) + n * h(t) + e * l(t), y: r * o(t) + s * h(t) + i * l(t) } }, this.getPointOnEllipticalArc = function(t, e, i, n, s, a) { var r = Math.cos(a),
							o = Math.sin(a),
							h = i * Math.cos(s),
							l = n * Math.sin(s); return { x: t + (h * r - l * o), y: e + (h * o + l * r) } }, this.calcLength = function(t, e, i, n) { var s, a, r, o; switch (i) {
							case "L":
								return this.getLineLength(t, e, n[0], n[1]);
							case "C":
								for (s = 0, a = this.getPointOnCubicBezier(0, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), o = .01; o <= 1; o += .01) r = this.getPointOnCubicBezier(o, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), s += this.getLineLength(a.x, a.y, r.x, r.y), a = r; return s;
							case "Q":
								for (s = 0, a = this.getPointOnQuadraticBezier(0, t, e, n[0], n[1], n[2], n[3]), o = .01; o <= 1; o += .01) r = this.getPointOnQuadraticBezier(o, t, e, n[0], n[1], n[2], n[3]), s += this.getLineLength(a.x, a.y, r.x, r.y), a = r; return s;
							case "A":
								s = 0; var h = n[4],
									l = n[5],
									u = n[4] + l,
									c = Math.PI / 180; if (Math.abs(h - u) < c && (c = Math.abs(h - u)), a = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0), l < 0)
									for (o = h - c; u < o; o -= c) r = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], o, 0), s += this.getLineLength(a.x, a.y, r.x, r.y), a = r;
								else
									for (o = h + c; o < u; o += c) r = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], o, 0), s += this.getLineLength(a.x, a.y, r.x, r.y), a = r; return r = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), s += this.getLineLength(a.x, a.y, r.x, r.y) } return 0 }, this.dataArray = this.parsePathData(e) }, D.Element.textPath.prototype = new D.Element.TextElementBase, D.Element.image = function(t) { this.base = D.Element.RenderedElementBase, this.base(t); var e = this.getHrefAttribute().value; if ("" != e) { var a = e.match(/\.svg$/); if (D.Images.push(this), this.loaded = !1, a) this.img = D.ajax(e), this.loaded = !0;
						else { this.img = c.createElement("img"), 1 == D.opts.useCORS && (this.img.crossOrigin = "Anonymous"); var r = this;
							this.img.onload = function() { r.loaded = !0 }, this.img.onerror = function() { D.log('ERROR: image "' + e + '" not found'), r.loaded = !0 }, this.img.src = e } this.renderChildren = function(t) { var e = this.attribute("x").toPixels("x"),
								i = this.attribute("y").toPixels("y"),
								n = this.attribute("width").toPixels("x"),
								s = this.attribute("height").toPixels("y");
							0 != n && 0 != s && (t.save(), a ? t.drawSvg(this.img, e, i, n, s) : (t.translate(e, i), D.AspectRatio(t, this.attribute("preserveAspectRatio").value, n, this.img.width, s, this.img.height, 0, 0), r.loaded && (void 0 === this.img.complete || this.img.complete) && t.drawImage(this.img, 0, 0)), t.restore()) }, this.getBoundingBox = function() { var t = this.attribute("x").toPixels("x"),
								e = this.attribute("y").toPixels("y"),
								i = this.attribute("width").toPixels("x"),
								n = this.attribute("height").toPixels("y"); return new D.BoundingBox(t, e, t + i, e + n) } } }, D.Element.image.prototype = new D.Element.RenderedElementBase, D.Element.g = function(t) { this.base = D.Element.RenderedElementBase, this.base(t), this.getBoundingBox = function(t) { for (var e = new D.BoundingBox, i = 0; i < this.children.length; i++) e.addBoundingBox(this.children[i].getBoundingBox(t)); return e } }, D.Element.g.prototype = new D.Element.RenderedElementBase, D.Element.symbol = function(t) { this.base = D.Element.RenderedElementBase, this.base(t), this.render = function() {} }, D.Element.symbol.prototype = new D.Element.RenderedElementBase, D.ParseExternalUrl = function(t) { var e = t.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/) || []; return e[2] || e[3] || e[4] }, D.Element.style = function(t) { this.base = D.Element.ElementBase, this.base(t); for (var e = "", i = 0; i < t.childNodes.length; i++) e += t.childNodes[i].data;
					e = e.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ""); var n = (e = D.compressSpaces(e)).split("}"); for (i = 0; i < n.length; i++)
						if ("" != D.trim(n[i]))
							for (var s = n[i].split("{"), a = s[0].split(","), r = s[1].split(";"), o = 0; o < a.length; o++) { var h = D.trim(a[o]); if ("" != h) { for (var l = D.Styles[h] || {}, u = 0; u < r.length; u++) { var c = r[u].indexOf(":"),
											f = r[u].substr(0, c),
											p = r[u].substr(c + 1, r[u].length - c);
										null != f && null != p && (l[D.trim(f)] = new D.Property(D.trim(f), D.trim(p))) } if (D.Styles[h] = l, D.StylesSpecificity[h] = P(h), "@font-face" == h)
										for (var d = l["font-family"].value.replace(/"/g, ""), m = l.src.value.split(","), y = 0; y < m.length; y++)
											if (0 < m[y].indexOf('format("svg")')) { var v = D.ParseExternalUrl(m[y]); if (v)
													for (var g = D.parseXml(D.ajax(v)).getElementsByTagName("font"), x = 0; x < g.length; x++) { var b = D.CreateElement(g[x]);
														D.Definitions[d] = b } } } } }, D.Element.style.prototype = new D.Element.ElementBase, D.Element.use = function(t) { this.base = D.Element.RenderedElementBase, this.base(t), this.baseSetContext = this.setContext, this.setContext = function(t) { this.baseSetContext(t), this.attribute("x").hasValue() && t.translate(this.attribute("x").toPixels("x"), 0), this.attribute("y").hasValue() && t.translate(0, this.attribute("y").toPixels("y")) }; var n = this.getHrefAttribute().getDefinition();
					this.path = function(t) { null != n && n.path(t) }, this.elementTransform = function() { if (null != n && n.style("transform", !1, !0).hasValue()) return new D.Transform(n.style("transform", !1, !0).value) }, this.getBoundingBox = function(t) { if (null != n) return n.getBoundingBox(t) }, this.renderChildren = function(t) { if (null != n) { var e = n; "symbol" == n.type && ((e = new D.Element.svg).type = "svg", e.attributes.viewBox = new D.Property("viewBox", n.attribute("viewBox").value), e.attributes.preserveAspectRatio = new D.Property("preserveAspectRatio", n.attribute("preserveAspectRatio").value), e.attributes.overflow = new D.Property("overflow", n.attribute("overflow").value), e.children = n.children), "svg" == e.type && (this.attribute("width").hasValue() && (e.attributes.width = new D.Property("width", this.attribute("width").value)), this.attribute("height").hasValue() && (e.attributes.height = new D.Property("height", this.attribute("height").value))); var i = e.parent;
							e.parent = null, e.render(t), e.parent = i } } }, D.Element.use.prototype = new D.Element.RenderedElementBase, D.Element.mask = function(t) { this.base = D.Element.ElementBase, this.base(t), this.apply = function(t, e) { var i = this.attribute("x").toPixels("x"),
							n = this.attribute("y").toPixels("y"),
							s = this.attribute("width").toPixels("x"),
							a = this.attribute("height").toPixels("y"); if (0 == s && 0 == a) { for (var r = new D.BoundingBox, o = 0; o < this.children.length; o++) r.addBoundingBox(this.children[o].getBoundingBox(t));
							i = Math.floor(r.x1), n = Math.floor(r.y1), s = Math.floor(r.width()), a = Math.floor(r.height()) } var h = e.style("mask").value;
						e.style("mask").value = ""; var l = d(i + s, n + a),
							u = l.getContext("2d");
						D.SetDefaults(u), this.renderChildren(u), new D.Element.feColorMatrix({ nodeType: 1, childNodes: [], attributes: [{ nodeName: "type", value: "luminanceToAlpha" }, { nodeName: "includeOpacity", value: "true" }] }).apply(u, 0, 0, i + s, n + a); var c = d(i + s, n + a),
							f = c.getContext("2d");
						D.SetDefaults(f), e.render(f), f.globalCompositeOperation = "destination-in", f.fillStyle = u.createPattern(l, "no-repeat"), f.fillRect(0, 0, i + s, n + a), t.fillStyle = f.createPattern(c, "no-repeat"), t.fillRect(0, 0, i + s, n + a), e.style("mask").value = h }, this.render = function() {} }, D.Element.mask.prototype = new D.Element.ElementBase, D.Element.clipPath = function(t) { this.base = D.Element.ElementBase, this.base(t), this.apply = function(t) { var e = "undefined" != typeof CanvasRenderingContext2D,
							i = t.beginPath,
							n = t.closePath;
						e && (CanvasRenderingContext2D.prototype.beginPath = function() {}, CanvasRenderingContext2D.prototype.closePath = function() {}), i.call(t); for (var s = 0; s < this.children.length; s++) { var a = this.children[s]; if (void 0 !== a.path) { var r = void 0 !== a.elementTransform && a.elementTransform();!r && a.style("transform", !1, !0).hasValue() && (r = new D.Transform(a.style("transform", !1, !0).value)), r && r.apply(t), a.path(t), e && (CanvasRenderingContext2D.prototype.closePath = n), r && r.unapply(t) } } n.call(t), t.clip(), e && (CanvasRenderingContext2D.prototype.beginPath = i, CanvasRenderingContext2D.prototype.closePath = n) }, this.render = function() {} }, D.Element.clipPath.prototype = new D.Element.ElementBase, D.Element.filter = function(t) { this.base = D.Element.ElementBase, this.base(t), this.apply = function(t, e) { var i = e.getBoundingBox(t),
							n = Math.floor(i.x1),
							s = Math.floor(i.y1),
							a = Math.floor(i.width()),
							r = Math.floor(i.height()),
							o = e.style("filter").value;
						e.style("filter").value = ""; for (var h = 0, l = 0, u = 0; u < this.children.length; u++) { var c = this.children[u].extraFilterDistance || 0;
							h = Math.max(h, c), l = Math.max(l, c) } var f = d(a + 2 * h, r + 2 * l),
							p = f.getContext("2d");
						D.SetDefaults(p), p.translate(-n + h, -s + l), e.render(p); for (u = 0; u < this.children.length; u++) "function" == typeof this.children[u].apply && this.children[u].apply(p, 0, 0, a + 2 * h, r + 2 * l);
						t.drawImage(f, 0, 0, a + 2 * h, r + 2 * l, n - h, s - l, a + 2 * h, r + 2 * l), e.style("filter", !0).value = o }, this.render = function() {} }, D.Element.filter.prototype = new D.Element.ElementBase, D.Element.feDropShadow = function(t) { this.base = D.Element.ElementBase, this.base(t), this.addStylesFromStyleDefinition(), this.apply = function() {} }, D.Element.feDropShadow.prototype = new D.Element.ElementBase, D.Element.feMorphology = function(t) { this.base = D.Element.ElementBase, this.base(t), this.apply = function() {} }, D.Element.feMorphology.prototype = new D.Element.ElementBase, D.Element.feComposite = function(t) { this.base = D.Element.ElementBase, this.base(t), this.apply = function() {} }, D.Element.feComposite.prototype = new D.Element.ElementBase, D.Element.feColorMatrix = function(t) { this.base = D.Element.ElementBase, this.base(t); var n = D.ToNumberArray(this.attribute("values").value); switch (this.attribute("type").valueOrDefault("matrix")) {
						case "saturate":
							var e = n[0];
							n = [.213 + .787 * e, .715 - .715 * e, .072 - .072 * e, 0, 0, .213 - .213 * e, .715 + .285 * e, .072 - .072 * e, 0, 0, .213 - .213 * e, .715 - .715 * e, .072 + .928 * e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]; break;
						case "hueRotate":
							var s = n[0] * Math.PI / 180,
								i = function(t, e, i) { return t + Math.cos(s) * e + Math.sin(s) * i };
							n = [i(.213, .787, -.213), i(.715, -.715, -.715), i(.072, -.072, .928), 0, 0, i(.213, -.213, .143), i(.715, .285, .14), i(.072, -.072, -.283), 0, 0, i(.213, -.213, -.787), i(.715, -.715, .715), i(.072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]; break;
						case "luminanceToAlpha":
							n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1] }

					function d(t, e, i, n, s, a) { return t[i * n * 4 + 4 * e + a] }

					function m(t, e, i, n, s, a, r) { t[i * n * 4 + 4 * e + a] = r }

					function y(t, e) { var i = n[t]; return i * (i < 0 ? e - 255 : e) } var v = this.attribute("includeOpacity").hasValue();
					this.apply = function(t, e, i, n, s) { var a = t.getImageData(0, 0, n, s); for (i = 0; i < s; i++)
							for (e = 0; e < n; e++) { var r = d(a.data, e, i, n, 0, 0),
									o = d(a.data, e, i, n, 0, 1),
									h = d(a.data, e, i, n, 0, 2),
									l = d(a.data, e, i, n, 0, 3),
									u = y(0, r) + y(1, o) + y(2, h) + y(3, l) + y(4, 1),
									c = y(5, r) + y(6, o) + y(7, h) + y(8, l) + y(9, 1),
									f = y(10, r) + y(11, o) + y(12, h) + y(13, l) + y(14, 1),
									p = y(15, r) + y(16, o) + y(17, h) + y(18, l) + y(19, 1);
								v && (u = c = f = 0, p *= l / 255), m(a.data, e, i, n, 0, 0, u), m(a.data, e, i, n, 0, 1, c), m(a.data, e, i, n, 0, 2, f), m(a.data, e, i, n, 0, 3, p) } t.clearRect(0, 0, n, s), t.putImageData(a, 0, 0) } }, D.Element.feColorMatrix.prototype = new D.Element.ElementBase, D.Element.feGaussianBlur = function(t) { this.base = D.Element.ElementBase, this.base(t), this.blurRadius = Math.floor(this.attribute("stdDeviation").numValue()), this.extraFilterDistance = this.blurRadius, this.apply = function(t, e, i, n, s) { v && void 0 !== v.canvasRGBA ? (t.canvas.id = D.UniqueId(), t.canvas.style.display = "none", c.body.appendChild(t.canvas), v.canvasRGBA(t.canvas, e, i, n, s, this.blurRadius), c.body.removeChild(t.canvas)) : D.log("ERROR: StackBlur.js must be included for blur to work") } }, D.Element.feGaussianBlur.prototype = new D.Element.ElementBase, D.Element.title = function() {}, D.Element.title.prototype = new D.Element.ElementBase, D.Element.desc = function() {}, D.Element.desc.prototype = new D.Element.ElementBase, D.Element.MISSING = function(t) { D.log("ERROR: Element '" + t.nodeName + "' not yet implemented.") }, D.Element.MISSING.prototype = new D.Element.ElementBase, D.CreateElement = function(t) { var e = t.nodeName.replace(/^[^:]+:/, "");
					e = e.replace(/\-/g, ""); var i = null; return (i = void 0 !== D.Element[e] ? new D.Element[e](t) : new D.Element.MISSING(t)).type = t.nodeName, i }, D.load = function(t, e) { D.loadXml(t, D.ajax(e)) }, D.loadXml = function(t, e) { D.loadXmlDoc(t, D.parseXml(e)) }, D.loadXmlDoc = function(a, r) { D.init(a); var i = function(t) { for (var e = a.canvas; e;) t.x -= e.offsetLeft, t.y -= e.offsetTop, e = e.offsetParent; return l.scrollX && (t.x += l.scrollX), l.scrollY && (t.y += l.scrollY), t };
					1 != D.opts.ignoreMouse && (a.canvas.onclick = function(t) { var e = i(new D.Point(null != t ? t.clientX : event.clientX, null != t ? t.clientY : event.clientY));
						D.Mouse.onclick(e.x, e.y) }, a.canvas.onmousemove = function(t) { var e = i(new D.Point(null != t ? t.clientX : event.clientX, null != t ? t.clientY : event.clientY));
						D.Mouse.onmousemove(e.x, e.y) }); var o = D.CreateElement(r.documentElement);
					o.root = !0, o.addStylesFromStyleDefinition(); var h = !0,
						n = function() { D.ViewPort.Clear(), a.canvas.parentNode ? D.ViewPort.SetCurrent(a.canvas.parentNode.clientWidth, a.canvas.parentNode.clientHeight) : D.ViewPort.SetCurrent(800, 600), 1 != D.opts.ignoreDimensions && (h || null == D.opts.scaleWidth && null == D.opts.scaleHeight) && (o.style("width").hasValue() && (a.canvas.width = o.style("width").toPixels("x"), a.canvas.style && (a.canvas.style.width = a.canvas.width + "px")), o.style("height").hasValue() && (a.canvas.height = o.style("height").toPixels("y"), a.canvas.style && (a.canvas.style.height = a.canvas.height + "px"))); var t = a.canvas.clientWidth || a.canvas.width,
								e = a.canvas.clientHeight || a.canvas.height; if (1 == D.opts.ignoreDimensions && o.style("width").hasValue() && o.style("height").hasValue() && (t = o.style("width").toPixels("x"), e = o.style("height").toPixels("y")), D.ViewPort.SetCurrent(t, e), null != D.opts.offsetX && (o.attribute("x", !0).value = D.opts.offsetX), null != D.opts.offsetY && (o.attribute("y", !0).value = D.opts.offsetY), null != D.opts.scaleWidth || null != D.opts.scaleHeight) { var i = null,
									n = null,
									s = D.ToNumberArray(o.attribute("viewBox").value);
								null != D.opts.scaleWidth && (o.attribute("width").hasValue() ? i = o.attribute("width").toPixels("x") / D.opts.scaleWidth : isNaN(s[2]) || (i = s[2] / D.opts.scaleWidth)), null != D.opts.scaleHeight && (o.attribute("height").hasValue() ? n = o.attribute("height").toPixels("y") / D.opts.scaleHeight : isNaN(s[3]) || (n = s[3] / D.opts.scaleHeight)), null == i && (i = n), null == n && (n = i), o.attribute("width", !0).value = D.opts.scaleWidth, o.attribute("height", !0).value = D.opts.scaleHeight, o.style("transform", !0, !0).value += " scale(" + 1 / i + "," + 1 / n + ")" } 1 != D.opts.ignoreClear && a.clearRect(0, 0, t, e), o.render(a), h && (h = !1, "function" == typeof D.opts.renderCallback && D.opts.renderCallback(r)) },
						s = !0;
					D.ImagesLoaded() && (s = !1, n()), D.intervalID = setInterval(function() { var t = !1; if (s && D.ImagesLoaded() && (t = !(s = !1)), 1 != D.opts.ignoreMouse && (t = t || D.Mouse.hasEvents()), 1 != D.opts.ignoreAnimation)
							for (var e = 0; e < D.Animations.length; e++) { var i = D.Animations[e].update(1e3 / D.FRAMERATE);
								t = t || i }
						"function" == typeof D.opts.forceRedraw && 1 == D.opts.forceRedraw() && (t = !0), t && (n(), D.Mouse.runEvents()) }, 1e3 / D.FRAMERATE) }, D.stop = function() { D.intervalID && clearInterval(D.intervalID) }, D.Mouse = new function() { this.events = [], this.hasEvents = function() { return 0 != this.events.length }, this.onclick = function(t, e) { this.events.push({ type: "onclick", x: t, y: e, run: function(t) { t.onclick && t.onclick() } }) }, this.onmousemove = function(t, e) { this.events.push({ type: "onmousemove", x: t, y: e, run: function(t) { t.onmousemove && t.onmousemove() } }) }, this.eventElements = [], this.checkPath = function(t, e) { for (var i = 0; i < this.events.length; i++) { var n = this.events[i];
							e.isPointInPath && e.isPointInPath(n.x, n.y) && (this.eventElements[i] = t) } }, this.checkBoundingBox = function(t, e) { if (e)
							for (var i = 0; i < this.events.length; i++) { var n = this.events[i];
								e.isPointInBox(n.x, n.y) && (this.eventElements[i] = t) } }, this.runEvents = function() { D.ctx.canvas.style.cursor = ""; for (var t = 0; t < this.events.length; t++)
							for (var e = this.events[t], i = this.eventElements[t]; i;) e.run(i), i = i.parent;
						this.events = [], this.eventElements = [] } }, D } "undefined" != typeof CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.drawSvg = function(t, e, i, n, s, a) { var r = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0, ignoreClear: !0, offsetX: e, offsetY: i, scaleWidth: n, scaleHeight: s }; for (var o in a) a.hasOwnProperty(o) && (r[o] = a[o]);
				p(this.canvas, t, r) }), p._build = m, t.exports = p }(t = { exports: {} }, t.exports), t.exports });
/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */
(function() {
	function l(a, b) { document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b) }

	function m(a) { document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() { document.removeEventListener("DOMContentLoaded", c);
			a() }) : document.attachEvent("onreadystatechange", function k() { if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), a() }) };

	function t(a) {
		this.a = document.createElement("div");
		this.a.setAttribute("aria-hidden", "true");
		this.a.appendChild(document.createTextNode(a));
		this.b = document.createElement("span");
		this.c = document.createElement("span");
		this.h = document.createElement("span");
		this.f = document.createElement("span");
		this.g = -1;
		this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
		this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
		this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
		this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
		this.b.appendChild(this.h);
		this.c.appendChild(this.f);
		this.a.appendChild(this.b);
		this.a.appendChild(this.c)
	}

	function u(a, b) { a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";" }

	function z(a) { var b = a.a.offsetWidth,
			c = b + 100;
		a.f.style.width = c + "px";
		a.c.scrollLeft = c;
		a.b.scrollLeft = a.b.scrollWidth + 100; return a.g !== b ? (a.g = b, !0) : !1 }

	function A(a, b) {
		function c() { var a = k;
			z(a) && a.a.parentNode && b(a.g) } var k = a;
		l(a.b, c);
		l(a.c, c);
		z(a) };

	function B(a, b) { var c = b || {};
		this.family = a;
		this.style = c.style || "normal";
		this.weight = c.weight || "normal";
		this.stretch = c.stretch || "normal" }
	var C = null,
		D = null,
		E = null,
		F = null;

	function G() { if (null === D)
			if (J() && /Apple/.test(window.navigator.vendor)) { var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
				D = !!a && 603 > parseInt(a[1], 10) } else D = !1; return D }

	function J() { null === F && (F = !!document.fonts); return F }

	function K() { if (null === E) { var a = document.createElement("div"); try { a.style.font = "condensed 100px sans-serif" } catch (b) {} E = "" !== a.style.font } return E }

	function L(a, b) { return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ") }
	B.prototype.load = function(a, b) {
		var c = this,
			k = a || "BESbswy",
			r = 0,
			n = b || 3E3,
			H = (new Date).getTime();
		return new Promise(function(a, b) {
			if (J() && !G()) {
				var M = new Promise(function(a, b) {
						function e() {
							(new Date).getTime() - H >= n ? b(Error("" + n + "ms timeout exceeded")) : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function(c) { 1 <= c.length ? a() : setTimeout(e, 25) }, b) } e() }),
					N = new Promise(function(a, c) { r = setTimeout(function() { c(Error("" + n + "ms timeout exceeded")) }, n) });
				Promise.race([N, M]).then(function() { clearTimeout(r);
						a(c) },
					b)
			} else m(function() {
				function v() { var b; if (b = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h)(b = f != g && f != h && g != h) || (null === C && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), C = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = C && (f == w && g == w && h == w || f == x && g == x && h == x || f == y && g == y && h == y)), b = !b;
					b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(r), a(c)) }

				function I() {
					if ((new Date).getTime() - H >= n) d.parentNode && d.parentNode.removeChild(d), b(Error("" +
						n + "ms timeout exceeded"));
					else { var a = document.hidden; if (!0 === a || void 0 === a) f = e.a.offsetWidth, g = p.a.offsetWidth, h = q.a.offsetWidth, v();
						r = setTimeout(I, 50) }
				}
				var e = new t(k),
					p = new t(k),
					q = new t(k),
					f = -1,
					g = -1,
					h = -1,
					w = -1,
					x = -1,
					y = -1,
					d = document.createElement("div");
				d.dir = "ltr";
				u(e, L(c, "sans-serif"));
				u(p, L(c, "serif"));
				u(q, L(c, "monospace"));
				d.appendChild(e.a);
				d.appendChild(p.a);
				d.appendChild(q.a);
				document.body.appendChild(d);
				w = e.a.offsetWidth;
				x = p.a.offsetWidth;
				y = q.a.offsetWidth;
				I();
				A(e, function(a) { f = a;
					v() });
				u(e,
					L(c, '"' + c.family + '",sans-serif'));
				A(p, function(a) { g = a;
					v() });
				u(p, L(c, '"' + c.family + '",serif'));
				A(q, function(a) { h = a;
					v() });
				u(q, L(c, '"' + c.family + '",monospace'))
			})
		})
	};
	"object" === typeof module ? module.exports = B : (window.FontFaceObserver = B, window.FontFaceObserver.prototype.load = B.prototype.load);
}());

/*!

JSZip v3.1.5 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
! function(a) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
	else if ("function" == typeof define && define.amd) define([], a);
	else { var b;
		b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.JSZip = a() } }(function() {
	return function a(b, c, d) {
		function e(g, h) { if (!c[g]) { if (!b[g]) { var i = "function" == typeof require && require; if (!h && i) return i(g, !0); if (f) return f(g, !0); var j = new Error("Cannot find module '" + g + "'"); throw j.code = "MODULE_NOT_FOUND", j } var k = c[g] = { exports: {} };
				b[g][0].call(k.exports, function(a) { var c = b[g][1][a]; return e(c ? c : a) }, k, k.exports, a, b, c, d) } return c[g].exports } for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]); return e }({
		1: [function(a, b, c) { "use strict"; var d = a("./utils"),
				e = a("./support"),
				f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			c.encode = function(a) { for (var b, c, e, g, h, i, j, k = [], l = 0, m = a.length, n = m, o = "string" !== d.getTypeOf(a); l < a.length;) n = m - l, o ? (b = a[l++], c = l < m ? a[l++] : 0, e = l < m ? a[l++] : 0) : (b = a.charCodeAt(l++), c = l < m ? a.charCodeAt(l++) : 0, e = l < m ? a.charCodeAt(l++) : 0), g = b >> 2, h = (3 & b) << 4 | c >> 4, i = n > 1 ? (15 & c) << 2 | e >> 6 : 64, j = n > 2 ? 63 & e : 64, k.push(f.charAt(g) + f.charAt(h) + f.charAt(i) + f.charAt(j)); return k.join("") }, c.decode = function(a) { var b, c, d, g, h, i, j, k = 0,
					l = 0,
					m = "data:"; if (a.substr(0, m.length) === m) throw new Error("Invalid base64 input, it looks like a data url.");
				a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); var n = 3 * a.length / 4; if (a.charAt(a.length - 1) === f.charAt(64) && n--, a.charAt(a.length - 2) === f.charAt(64) && n--, n % 1 !== 0) throw new Error("Invalid base64 input, bad content length."); var o; for (o = e.uint8array ? new Uint8Array(0 | n) : new Array(0 | n); k < a.length;) g = f.indexOf(a.charAt(k++)), h = f.indexOf(a.charAt(k++)), i = f.indexOf(a.charAt(k++)), j = f.indexOf(a.charAt(k++)), b = g << 2 | h >> 4, c = (15 & h) << 4 | i >> 2, d = (3 & i) << 6 | j, o[l++] = b, 64 !== i && (o[l++] = c), 64 !== j && (o[l++] = d); return o } }, { "./support": 30, "./utils": 32 }],
		2: [function(a, b, c) { "use strict";

			function d(a, b, c, d, e) { this.compressedSize = a, this.uncompressedSize = b, this.crc32 = c, this.compression = d, this.compressedContent = e } var e = a("./external"),
				f = a("./stream/DataWorker"),
				g = a("./stream/DataLengthProbe"),
				h = a("./stream/Crc32Probe"),
				g = a("./stream/DataLengthProbe");
			d.prototype = { getContentWorker: function() { var a = new f(e.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new g("data_length")),
						b = this; return a.on("end", function() { if (this.streamInfo.data_length !== b.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch") }), a }, getCompressedWorker: function() { return new f(e.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression) } }, d.createWorkerFrom = function(a, b, c) { return a.pipe(new h).pipe(new g("uncompressedSize")).pipe(b.compressWorker(c)).pipe(new g("compressedSize")).withStreamInfo("compression", b) }, b.exports = d }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }],
		3: [function(a, b, c) { "use strict"; var d = a("./stream/GenericWorker");
			c.STORE = { magic: "\0\0", compressWorker: function(a) { return new d("STORE compression") }, uncompressWorker: function() { return new d("STORE decompression") } }, c.DEFLATE = a("./flate") }, { "./flate": 7, "./stream/GenericWorker": 28 }],
		4: [function(a, b, c) { "use strict";

			function d() { for (var a, b = [], c = 0; c < 256; c++) { a = c; for (var d = 0; d < 8; d++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
					b[c] = a } return b }

			function e(a, b, c, d) { var e = h,
					f = d + c;
				a ^= -1; for (var g = d; g < f; g++) a = a >>> 8 ^ e[255 & (a ^ b[g])]; return a ^ -1 }

			function f(a, b, c, d) { var e = h,
					f = d + c;
				a ^= -1; for (var g = d; g < f; g++) a = a >>> 8 ^ e[255 & (a ^ b.charCodeAt(g))]; return a ^ -1 } var g = a("./utils"),
				h = d();
			b.exports = function(a, b) { if ("undefined" == typeof a || !a.length) return 0; var c = "string" !== g.getTypeOf(a); return c ? e(0 | b, a, a.length, 0) : f(0 | b, a, a.length, 0) } }, { "./utils": 32 }],
		5: [function(a, b, c) { "use strict";
			c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null }, {}],
		6: [function(a, b, c) { "use strict"; var d = null;
			d = "undefined" != typeof Promise ? Promise : a("lie"), b.exports = { Promise: d } }, { lie: 58 }],
		7: [function(a, b, c) { "use strict";

			function d(a, b) { h.call(this, "FlateWorker/" + a), this._pako = null, this._pakoAction = a, this._pakoOptions = b, this.meta = {} } var e = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
				f = a("pako"),
				g = a("./utils"),
				h = a("./stream/GenericWorker"),
				i = e ? "uint8array" : "array";
			c.magic = "\b\0", g.inherits(d, h), d.prototype.processChunk = function(a) { this.meta = a.meta, null === this._pako && this._createPako(), this._pako.push(g.transformTo(i, a.data), !1) }, d.prototype.flush = function() { h.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0) }, d.prototype.cleanUp = function() { h.prototype.cleanUp.call(this), this._pako = null }, d.prototype._createPako = function() { this._pako = new f[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 }); var a = this;
				this._pako.onData = function(b) { a.push({ data: b, meta: a.meta }) } }, c.compressWorker = function(a) { return new d("Deflate", a) }, c.uncompressWorker = function() { return new d("Inflate", {}) } }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 59 }],
		8: [function(a, b, c) { "use strict";

			function d(a, b, c, d) { f.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = b, this.zipPlatform = c, this.encodeFileName = d, this.streamFiles = a, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [] } var e = a("../utils"),
				f = a("../stream/GenericWorker"),
				g = a("../utf8"),
				h = a("../crc32"),
				i = a("../signature"),
				j = function(a, b) { var c, d = ""; for (c = 0; c < b; c++) d += String.fromCharCode(255 & a), a >>>= 8; return d },
				k = function(a, b) { var c = a; return a || (c = b ? 16893 : 33204), (65535 & c) << 16 },
				l = function(a, b) { return 63 & (a || 0) },
				m = function(a, b, c, d, f, m) { var n, o, p = a.file,
						q = a.compression,
						r = m !== g.utf8encode,
						s = e.transformTo("string", m(p.name)),
						t = e.transformTo("string", g.utf8encode(p.name)),
						u = p.comment,
						v = e.transformTo("string", m(u)),
						w = e.transformTo("string", g.utf8encode(u)),
						x = t.length !== p.name.length,
						y = w.length !== u.length,
						z = "",
						A = "",
						B = "",
						C = p.dir,
						D = p.date,
						E = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
					b && !c || (E.crc32 = a.crc32, E.compressedSize = a.compressedSize, E.uncompressedSize = a.uncompressedSize); var F = 0;
					b && (F |= 8), r || !x && !y || (F |= 2048); var G = 0,
						H = 0;
					C && (G |= 16), "UNIX" === f ? (H = 798, G |= k(p.unixPermissions, C)) : (H = 20, G |= l(p.dosPermissions, C)), n = D.getUTCHours(), n <<= 6, n |= D.getUTCMinutes(), n <<= 5, n |= D.getUTCSeconds() / 2, o = D.getUTCFullYear() - 1980, o <<= 4, o |= D.getUTCMonth() + 1, o <<= 5, o |= D.getUTCDate(), x && (A = j(1, 1) + j(h(s), 4) + t, z += "up" + j(A.length, 2) + A), y && (B = j(1, 1) + j(h(v), 4) + w, z += "uc" + j(B.length, 2) + B); var I = "";
					I += "\n\0", I += j(F, 2), I += q.magic, I += j(n, 2), I += j(o, 2), I += j(E.crc32, 4), I += j(E.compressedSize, 4), I += j(E.uncompressedSize, 4), I += j(s.length, 2), I += j(z.length, 2); var J = i.LOCAL_FILE_HEADER + I + s + z,
						K = i.CENTRAL_FILE_HEADER + j(H, 2) + I + j(v.length, 2) + "\0\0\0\0" + j(G, 4) + j(d, 4) + s + z + v; return { fileRecord: J, dirRecord: K } },
				n = function(a, b, c, d, f) { var g = "",
						h = e.transformTo("string", f(d)); return g = i.CENTRAL_DIRECTORY_END + "\0\0\0\0" + j(a, 2) + j(a, 2) + j(b, 4) + j(c, 4) + j(h.length, 2) + h },
				o = function(a) { var b = ""; return b = i.DATA_DESCRIPTOR + j(a.crc32, 4) + j(a.compressedSize, 4) + j(a.uncompressedSize, 4) };
			e.inherits(d, f), d.prototype.push = function(a) { var b = a.meta.percent || 0,
					c = this.entriesCount,
					d = this._sources.length;
				this.accumulate ? this.contentBuffer.push(a) : (this.bytesWritten += a.data.length, f.prototype.push.call(this, { data: a.data, meta: { currentFile: this.currentFile, percent: c ? (b + 100 * (c - d - 1)) / c : 100 } })) }, d.prototype.openedSource = function(a) { this.currentSourceOffset = this.bytesWritten, this.currentFile = a.file.name; var b = this.streamFiles && !a.file.dir; if (b) { var c = m(a, b, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
					this.push({ data: c.fileRecord, meta: { percent: 0 } }) } else this.accumulate = !0 }, d.prototype.closedSource = function(a) { this.accumulate = !1; var b = this.streamFiles && !a.file.dir,
					c = m(a, b, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName); if (this.dirRecords.push(c.dirRecord), b) this.push({ data: o(a), meta: { percent: 100 } });
				else
					for (this.push({ data: c.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
				this.currentFile = null }, d.prototype.flush = function() { for (var a = this.bytesWritten, b = 0; b < this.dirRecords.length; b++) this.push({ data: this.dirRecords[b], meta: { percent: 100 } }); var c = this.bytesWritten - a,
					d = n(this.dirRecords.length, c, a, this.zipComment, this.encodeFileName);
				this.push({ data: d, meta: { percent: 100 } }) }, d.prototype.prepareNextSource = function() { this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume() }, d.prototype.registerPrevious = function(a) { this._sources.push(a); var b = this; return a.on("data", function(a) { b.processChunk(a) }), a.on("end", function() { b.closedSource(b.previous.streamInfo), b._sources.length ? b.prepareNextSource() : b.end() }), a.on("error", function(a) { b.error(a) }), this }, d.prototype.resume = function() { return !!f.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0)) }, d.prototype.error = function(a) { var b = this._sources; if (!f.prototype.error.call(this, a)) return !1; for (var c = 0; c < b.length; c++) try { b[c].error(a) } catch (a) {}
				return !0 }, d.prototype.lock = function() { f.prototype.lock.call(this); for (var a = this._sources, b = 0; b < a.length; b++) a[b].lock() }, b.exports = d }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }],
		9: [function(a, b, c) { "use strict"; var d = a("../compressions"),
				e = a("./ZipFileWorker"),
				f = function(a, b) { var c = a || b,
						e = d[c]; if (!e) throw new Error(c + " is not a valid compression method !"); return e };
			c.generateWorker = function(a, b, c) { var d = new e(b.streamFiles, c, b.platform, b.encodeFileName),
					g = 0; try { a.forEach(function(a, c) { g++; var e = f(c.options.compression, b.compression),
							h = c.options.compressionOptions || b.compressionOptions || {},
							i = c.dir,
							j = c.date;
						c._compressWorker(e, h).withStreamInfo("file", { name: a, dir: i, date: j, comment: c.comment || "", unixPermissions: c.unixPermissions, dosPermissions: c.dosPermissions }).pipe(d) }), d.entriesCount = g } catch (h) { d.error(h) } return d } }, { "../compressions": 3, "./ZipFileWorker": 8 }],
		10: [function(a, b, c) { "use strict";

			function d() { if (!(this instanceof d)) return new d; if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
				this.files = {}, this.comment = null, this.root = "", this.clone = function() { var a = new d; for (var b in this) "function" != typeof this[b] && (a[b] = this[b]); return a } } d.prototype = a("./object"), d.prototype.loadAsync = a("./load"), d.support = a("./support"), d.defaults = a("./defaults"), d.version = "3.1.5", d.loadAsync = function(a, b) { return (new d).loadAsync(a, b) }, d.external = a("./external"), b.exports = d }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }],
		11: [function(a, b, c) { "use strict";

			function d(a) { return new f.Promise(function(b, c) { var d = a.decompressed.getContentWorker().pipe(new i);
					d.on("error", function(a) { c(a) }).on("end", function() { d.streamInfo.crc32 !== a.decompressed.crc32 ? c(new Error("Corrupted zip : CRC32 mismatch")) : b() }).resume() }) } var e = a("./utils"),
				f = a("./external"),
				g = a("./utf8"),
				e = a("./utils"),
				h = a("./zipEntries"),
				i = a("./stream/Crc32Probe"),
				j = a("./nodejsUtils");
			b.exports = function(a, b) { var c = this; return b = e.extend(b || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: g.utf8decode }), j.isNode && j.isStream(a) ? f.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : e.prepareContent("the loaded zip file", a, !0, b.optimizedBinaryString, b.base64).then(function(a) { var c = new h(b); return c.load(a), c }).then(function(a) { var c = [f.Promise.resolve(a)],
						e = a.files; if (b.checkCRC32)
						for (var g = 0; g < e.length; g++) c.push(d(e[g])); return f.Promise.all(c) }).then(function(a) { for (var d = a.shift(), e = d.files, f = 0; f < e.length; f++) { var g = e[f];
						c.file(g.fileNameStr, g.decompressed, { binary: !0, optimizedBinaryString: !0, date: g.date, dir: g.dir, comment: g.fileCommentStr.length ? g.fileCommentStr : null, unixPermissions: g.unixPermissions, dosPermissions: g.dosPermissions, createFolders: b.createFolders }) } return d.zipComment.length && (c.comment = d.zipComment), c }) } }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }],
		12: [function(a, b, c) { "use strict";

			function d(a, b) { f.call(this, "Nodejs stream input adapter for " + a), this._upstreamEnded = !1, this._bindStream(b) } var e = a("../utils"),
				f = a("../stream/GenericWorker");
			e.inherits(d, f), d.prototype._bindStream = function(a) { var b = this;
				this._stream = a, a.pause(), a.on("data", function(a) { b.push({ data: a, meta: { percent: 0 } }) }).on("error", function(a) { b.isPaused ? this.generatedError = a : b.error(a) }).on("end", function() { b.isPaused ? b._upstreamEnded = !0 : b.end() }) }, d.prototype.pause = function() { return !!f.prototype.pause.call(this) && (this._stream.pause(), !0) }, d.prototype.resume = function() { return !!f.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0) }, b.exports = d }, { "../stream/GenericWorker": 28, "../utils": 32 }],
		13: [function(a, b, c) { "use strict";

			function d(a, b, c) { e.call(this, b), this._helper = a; var d = this;
				a.on("data", function(a, b) { d.push(a) || d._helper.pause(), c && c(b) }).on("error", function(a) { d.emit("error", a) }).on("end", function() { d.push(null) }) } var e = a("readable-stream").Readable,
				f = a("../utils");
			f.inherits(d, e), d.prototype._read = function() { this._helper.resume() }, b.exports = d }, { "../utils": 32, "readable-stream": 16 }],
		14: [function(a, b, c) { "use strict";
			b.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(a, b) { return new Buffer(a, b) }, allocBuffer: function(a) { return Buffer.alloc ? Buffer.alloc(a) : new Buffer(a) }, isBuffer: function(a) { return Buffer.isBuffer(a) }, isStream: function(a) { return a && "function" == typeof a.on && "function" == typeof a.pause && "function" == typeof a.resume } } }, {}],
		15: [function(a, b, c) { "use strict";

			function d(a) { return "[object RegExp]" === Object.prototype.toString.call(a) } var e = a("./utf8"),
				f = a("./utils"),
				g = a("./stream/GenericWorker"),
				h = a("./stream/StreamHelper"),
				i = a("./defaults"),
				j = a("./compressedObject"),
				k = a("./zipObject"),
				l = a("./generate"),
				m = a("./nodejsUtils"),
				n = a("./nodejs/NodejsStreamInputAdapter"),
				o = function(a, b, c) { var d, e = f.getTypeOf(b),
						h = f.extend(c || {}, i);
					h.date = h.date || new Date, null !== h.compression && (h.compression = h.compression.toUpperCase()), "string" == typeof h.unixPermissions && (h.unixPermissions = parseInt(h.unixPermissions, 8)), h.unixPermissions && 16384 & h.unixPermissions && (h.dir = !0), h.dosPermissions && 16 & h.dosPermissions && (h.dir = !0), h.dir && (a = q(a)), h.createFolders && (d = p(a)) && r.call(this, d, !0); var l = "string" === e && h.binary === !1 && h.base64 === !1;
					c && "undefined" != typeof c.binary || (h.binary = !l); var o = b instanceof j && 0 === b.uncompressedSize;
					(o || h.dir || !b || 0 === b.length) && (h.base64 = !1, h.binary = !0, b = "", h.compression = "STORE", e = "string"); var s = null;
					s = b instanceof j || b instanceof g ? b : m.isNode && m.isStream(b) ? new n(a, b) : f.prepareContent(a, b, h.binary, h.optimizedBinaryString, h.base64); var t = new k(a, s, h);
					this.files[a] = t },
				p = function(a) { "/" === a.slice(-1) && (a = a.substring(0, a.length - 1)); var b = a.lastIndexOf("/"); return b > 0 ? a.substring(0, b) : "" },
				q = function(a) { return "/" !== a.slice(-1) && (a += "/"), a },
				r = function(a, b) { return b = "undefined" != typeof b ? b : i.createFolders, a = q(a), this.files[a] || o.call(this, a, null, { dir: !0, createFolders: b }), this.files[a] },
				s = { load: function() { throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.") }, forEach: function(a) { var b, c, d; for (b in this.files) this.files.hasOwnProperty(b) && (d = this.files[b], c = b.slice(this.root.length, b.length), c && b.slice(0, this.root.length) === this.root && a(c, d)) }, filter: function(a) { var b = []; return this.forEach(function(c, d) { a(c, d) && b.push(d) }), b }, file: function(a, b, c) { if (1 === arguments.length) { if (d(a)) { var e = a; return this.filter(function(a, b) { return !b.dir && e.test(a) }) } var f = this.files[this.root + a]; return f && !f.dir ? f : null } return a = this.root + a, o.call(this, a, b, c), this }, folder: function(a) { if (!a) return this; if (d(a)) return this.filter(function(b, c) { return c.dir && a.test(b) }); var b = this.root + a,
							c = r.call(this, b),
							e = this.clone(); return e.root = c.name, e }, remove: function(a) { a = this.root + a; var b = this.files[a]; if (b || ("/" !== a.slice(-1) && (a += "/"), b = this.files[a]), b && !b.dir) delete this.files[a];
						else
							for (var c = this.filter(function(b, c) { return c.name.slice(0, a.length) === a }), d = 0; d < c.length; d++) delete this.files[c[d].name]; return this }, generate: function(a) { throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.") }, generateInternalStream: function(a) { var b, c = {}; try { if (c = f.extend(a || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: e.utf8encode }), c.type = c.type.toLowerCase(), c.compression = c.compression.toUpperCase(), "binarystring" === c.type && (c.type = "string"), !c.type) throw new Error("No output type specified.");
							f.checkSupport(c.type), "darwin" !== c.platform && "freebsd" !== c.platform && "linux" !== c.platform && "sunos" !== c.platform || (c.platform = "UNIX"), "win32" === c.platform && (c.platform = "DOS"); var d = c.comment || this.comment || "";
							b = l.generateWorker(this, c, d) } catch (i) { b = new g("error"), b.error(i) } return new h(b, c.type || "string", c.mimeType) }, generateAsync: function(a, b) { return this.generateInternalStream(a).accumulate(b) }, generateNodeStream: function(a, b) { return a = a || {}, a.type || (a.type = "nodebuffer"), this.generateInternalStream(a).toNodejsStream(b) } };
			b.exports = s }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }],
		16: [function(a, b, c) { b.exports = a("stream") }, { stream: void 0 }],
		17: [function(a, b, c) { "use strict";

			function d(a) { e.call(this, a); for (var b = 0; b < this.data.length; b++) a[b] = 255 & a[b] } var e = a("./DataReader"),
				f = a("../utils");
			f.inherits(d, e), d.prototype.byteAt = function(a) { return this.data[this.zero + a] }, d.prototype.lastIndexOfSignature = function(a) { for (var b = a.charCodeAt(0), c = a.charCodeAt(1), d = a.charCodeAt(2), e = a.charCodeAt(3), f = this.length - 4; f >= 0; --f)
					if (this.data[f] === b && this.data[f + 1] === c && this.data[f + 2] === d && this.data[f + 3] === e) return f - this.zero; return -1 }, d.prototype.readAndCheckSignature = function(a) { var b = a.charCodeAt(0),
					c = a.charCodeAt(1),
					d = a.charCodeAt(2),
					e = a.charCodeAt(3),
					f = this.readData(4); return b === f[0] && c === f[1] && d === f[2] && e === f[3] }, d.prototype.readData = function(a) { if (this.checkOffset(a), 0 === a) return []; var b = this.data.slice(this.zero + this.index, this.zero + this.index + a); return this.index += a, b }, b.exports = d }, { "../utils": 32, "./DataReader": 18 }],
		18: [function(a, b, c) { "use strict";

			function d(a) { this.data = a, this.length = a.length, this.index = 0, this.zero = 0 } var e = a("../utils");
			d.prototype = { checkOffset: function(a) { this.checkIndex(this.index + a) }, checkIndex: function(a) { if (this.length < this.zero + a || a < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + a + "). Corrupted zip ?") }, setIndex: function(a) { this.checkIndex(a), this.index = a }, skip: function(a) { this.setIndex(this.index + a) }, byteAt: function(a) {}, readInt: function(a) { var b, c = 0; for (this.checkOffset(a), b = this.index + a - 1; b >= this.index; b--) c = (c << 8) + this.byteAt(b); return this.index += a, c }, readString: function(a) { return e.transformTo("string", this.readData(a)) }, readData: function(a) {}, lastIndexOfSignature: function(a) {}, readAndCheckSignature: function(a) {}, readDate: function() { var a = this.readInt(4); return new Date(Date.UTC((a >> 25 & 127) + 1980, (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (31 & a) << 1)) } }, b.exports = d }, { "../utils": 32 }],
		19: [function(a, b, c) { "use strict";

			function d(a) { e.call(this, a) } var e = a("./Uint8ArrayReader"),
				f = a("../utils");
			f.inherits(d, e), d.prototype.readData = function(a) { this.checkOffset(a); var b = this.data.slice(this.zero + this.index, this.zero + this.index + a); return this.index += a, b }, b.exports = d }, { "../utils": 32, "./Uint8ArrayReader": 21 }],
		20: [function(a, b, c) { "use strict";

			function d(a) { e.call(this, a) } var e = a("./DataReader"),
				f = a("../utils");
			f.inherits(d, e), d.prototype.byteAt = function(a) { return this.data.charCodeAt(this.zero + a) }, d.prototype.lastIndexOfSignature = function(a) { return this.data.lastIndexOf(a) - this.zero }, d.prototype.readAndCheckSignature = function(a) { var b = this.readData(4); return a === b }, d.prototype.readData = function(a) { this.checkOffset(a); var b = this.data.slice(this.zero + this.index, this.zero + this.index + a); return this.index += a, b }, b.exports = d }, { "../utils": 32, "./DataReader": 18 }],
		21: [function(a, b, c) { "use strict";

			function d(a) { e.call(this, a) } var e = a("./ArrayReader"),
				f = a("../utils");
			f.inherits(d, e), d.prototype.readData = function(a) { if (this.checkOffset(a), 0 === a) return new Uint8Array(0); var b = this.data.subarray(this.zero + this.index, this.zero + this.index + a); return this.index += a, b }, b.exports = d }, { "../utils": 32, "./ArrayReader": 17 }],
		22: [function(a, b, c) { "use strict"; var d = a("../utils"),
				e = a("../support"),
				f = a("./ArrayReader"),
				g = a("./StringReader"),
				h = a("./NodeBufferReader"),
				i = a("./Uint8ArrayReader");
			b.exports = function(a) { var b = d.getTypeOf(a); return d.checkSupport(b), "string" !== b || e.uint8array ? "nodebuffer" === b ? new h(a) : e.uint8array ? new i(d.transformTo("uint8array", a)) : new f(d.transformTo("array", a)) : new g(a) } }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }],
		23: [function(a, b, c) { "use strict";
			c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\b" }, {}],
		24: [function(a, b, c) { "use strict";

			function d(a) { e.call(this, "ConvertWorker to " + a), this.destType = a } var e = a("./GenericWorker"),
				f = a("../utils");
			f.inherits(d, e), d.prototype.processChunk = function(a) { this.push({ data: f.transformTo(this.destType, a.data), meta: a.meta }) }, b.exports = d }, { "../utils": 32, "./GenericWorker": 28 }],
		25: [function(a, b, c) { "use strict";

			function d() { e.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0) } var e = a("./GenericWorker"),
				f = a("../crc32"),
				g = a("../utils");
			g.inherits(d, e), d.prototype.processChunk = function(a) { this.streamInfo.crc32 = f(a.data, this.streamInfo.crc32 || 0), this.push(a) }, b.exports = d }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }],
		26: [function(a, b, c) { "use strict";

			function d(a) { f.call(this, "DataLengthProbe for " + a), this.propName = a, this.withStreamInfo(a, 0) } var e = a("../utils"),
				f = a("./GenericWorker");
			e.inherits(d, f), d.prototype.processChunk = function(a) { if (a) { var b = this.streamInfo[this.propName] || 0;
					this.streamInfo[this.propName] = b + a.data.length } f.prototype.processChunk.call(this, a) }, b.exports = d }, { "../utils": 32, "./GenericWorker": 28 }],
		27: [function(a, b, c) { "use strict";

			function d(a) { f.call(this, "DataWorker"); var b = this;
				this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, a.then(function(a) { b.dataIsReady = !0, b.data = a, b.max = a && a.length || 0, b.type = e.getTypeOf(a), b.isPaused || b._tickAndRepeat() }, function(a) { b.error(a) }) } var e = a("../utils"),
				f = a("./GenericWorker"),
				g = 16384;
			e.inherits(d, f), d.prototype.cleanUp = function() { f.prototype.cleanUp.call(this), this.data = null }, d.prototype.resume = function() { return !!f.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, e.delay(this._tickAndRepeat, [], this)), !0) }, d.prototype._tickAndRepeat = function() { this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (e.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0)) }, d.prototype._tick = function() { if (this.isPaused || this.isFinished) return !1; var a = g,
					b = null,
					c = Math.min(this.max, this.index + a); if (this.index >= this.max) return this.end(); switch (this.type) {
					case "string":
						b = this.data.substring(this.index, c); break;
					case "uint8array":
						b = this.data.subarray(this.index, c); break;
					case "array":
					case "nodebuffer":
						b = this.data.slice(this.index, c) } return this.index = c, this.push({ data: b, meta: { percent: this.max ? this.index / this.max * 100 : 0 } }) }, b.exports = d }, { "../utils": 32, "./GenericWorker": 28 }],
		28: [function(a, b, c) { "use strict";

			function d(a) { this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null } d.prototype = { push: function(a) { this.emit("data", a) }, end: function() { if (this.isFinished) return !1;
					this.flush(); try { this.emit("end"), this.cleanUp(), this.isFinished = !0 } catch (a) { this.emit("error", a) } return !0 }, error: function(a) { return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0) }, on: function(a, b) { return this._listeners[a].push(b), this }, cleanUp: function() { this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [] }, emit: function(a, b) { if (this._listeners[a])
						for (var c = 0; c < this._listeners[a].length; c++) this._listeners[a][c].call(this, b) }, pipe: function(a) { return a.registerPrevious(this) }, registerPrevious: function(a) { if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
					this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a; var b = this; return a.on("data", function(a) { b.processChunk(a) }), a.on("end", function() { b.end() }), a.on("error", function(a) { b.error(a) }), this }, pause: function() { return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0) }, resume: function() { if (!this.isPaused || this.isFinished) return !1;
					this.isPaused = !1; var a = !1; return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a }, flush: function() {}, processChunk: function(a) { this.push(a) }, withStreamInfo: function(a, b) { return this.extraStreamInfo[a] = b, this.mergeStreamInfo(), this }, mergeStreamInfo: function() { for (var a in this.extraStreamInfo) this.extraStreamInfo.hasOwnProperty(a) && (this.streamInfo[a] = this.extraStreamInfo[a]) }, lock: function() { if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
					this.isLocked = !0, this.previous && this.previous.lock() }, toString: function() { var a = "Worker " + this.name; return this.previous ? this.previous + " -> " + a : a } }, b.exports = d }, {}],
		29: [function(a, b, c) { "use strict";

			function d(a, b, c) { switch (a) {
					case "blob":
						return h.newBlob(h.transformTo("arraybuffer", b), c);
					case "base64":
						return k.encode(b);
					default:
						return h.transformTo(a, b) } }

			function e(a, b) { var c, d = 0,
					e = null,
					f = 0; for (c = 0; c < b.length; c++) f += b[c].length; switch (a) {
					case "string":
						return b.join("");
					case "array":
						return Array.prototype.concat.apply([], b);
					case "uint8array":
						for (e = new Uint8Array(f), c = 0; c < b.length; c++) e.set(b[c], d), d += b[c].length; return e;
					case "nodebuffer":
						return Buffer.concat(b);
					default:
						throw new Error("concat : unsupported type '" + a + "'") } }

			function f(a, b) { return new m.Promise(function(c, f) { var g = [],
						h = a._internalType,
						i = a._outputType,
						j = a._mimeType;
					a.on("data", function(a, c) { g.push(a), b && b(c) }).on("error", function(a) { g = [], f(a) }).on("end", function() { try { var a = d(i, e(h, g), j);
							c(a) } catch (b) { f(b) } g = [] }).resume() }) }

			function g(a, b, c) { var d = b; switch (b) {
					case "blob":
					case "arraybuffer":
						d = "uint8array"; break;
					case "base64":
						d = "string" } try { this._internalType = d, this._outputType = b, this._mimeType = c, h.checkSupport(d), this._worker = a.pipe(new i(d)), a.lock() } catch (e) { this._worker = new j("error"), this._worker.error(e) } } var h = a("../utils"),
				i = a("./ConvertWorker"),
				j = a("./GenericWorker"),
				k = a("../base64"),
				l = a("../support"),
				m = a("../external"),
				n = null; if (l.nodestream) try { n = a("../nodejs/NodejsStreamOutputAdapter") } catch (o) {} g.prototype = { accumulate: function(a) { return f(this, a) }, on: function(a, b) { var c = this; return "data" === a ? this._worker.on(a, function(a) { b.call(c, a.data, a.meta) }) : this._worker.on(a, function() { h.delay(b, arguments, c) }), this }, resume: function() { return h.delay(this._worker.resume, [], this._worker), this }, pause: function() { return this._worker.pause(), this }, toNodejsStream: function(a) { if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method"); return new n(this, { objectMode: "nodebuffer" !== this._outputType }, a) } }, b.exports = g }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }],
		30: [function(a, b, c) { "use strict"; if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, c.nodebuffer = "undefined" != typeof Buffer, c.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) c.blob = !1;
			else { var d = new ArrayBuffer(0); try { c.blob = 0 === new Blob([d], { type: "application/zip" }).size } catch (e) { try { var f = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder,
							g = new f;
						g.append(d), c.blob = 0 === g.getBlob("application/zip").size } catch (e) { c.blob = !1 } } } try { c.nodestream = !!a("readable-stream").Readable } catch (e) { c.nodestream = !1 } }, { "readable-stream": 16 }],
		31: [function(a, b, c) { "use strict";

			function d() { i.call(this, "utf-8 decode"), this.leftOver = null }

			function e() { i.call(this, "utf-8 encode") } for (var f = a("./utils"), g = a("./support"), h = a("./nodejsUtils"), i = a("./stream/GenericWorker"), j = new Array(256), k = 0; k < 256; k++) j[k] = k >= 252 ? 6 : k >= 248 ? 5 : k >= 240 ? 4 : k >= 224 ? 3 : k >= 192 ? 2 : 1;
			j[254] = j[254] = 1; var l = function(a) { var b, c, d, e, f, h = a.length,
						i = 0; for (e = 0; e < h; e++) c = a.charCodeAt(e), 55296 === (64512 & c) && e + 1 < h && (d = a.charCodeAt(e + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), e++)), i += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4; for (b = g.uint8array ? new Uint8Array(i) : new Array(i), f = 0, e = 0; f < i; e++) c = a.charCodeAt(e), 55296 === (64512 & c) && e + 1 < h && (d = a.charCodeAt(e + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), e++)), c < 128 ? b[f++] = c : c < 2048 ? (b[f++] = 192 | c >>> 6, b[f++] = 128 | 63 & c) : c < 65536 ? (b[f++] = 224 | c >>> 12, b[f++] = 128 | c >>> 6 & 63, b[f++] = 128 | 63 & c) : (b[f++] = 240 | c >>> 18, b[f++] = 128 | c >>> 12 & 63, b[f++] = 128 | c >>> 6 & 63, b[f++] = 128 | 63 & c); return b },
				m = function(a, b) { var c; for (b = b || a.length, b > a.length && (b = a.length), c = b - 1; c >= 0 && 128 === (192 & a[c]);) c--; return c < 0 ? b : 0 === c ? b : c + j[a[c]] > b ? c : b },
				n = function(a) { var b, c, d, e, g = a.length,
						h = new Array(2 * g); for (c = 0, b = 0; b < g;)
						if (d = a[b++], d < 128) h[c++] = d;
						else if (e = j[d], e > 4) h[c++] = 65533, b += e - 1;
					else { for (d &= 2 === e ? 31 : 3 === e ? 15 : 7; e > 1 && b < g;) d = d << 6 | 63 & a[b++], e--;
						e > 1 ? h[c++] = 65533 : d < 65536 ? h[c++] = d : (d -= 65536, h[c++] = 55296 | d >> 10 & 1023, h[c++] = 56320 | 1023 & d) } return h.length !== c && (h.subarray ? h = h.subarray(0, c) : h.length = c), f.applyFromCharCode(h) };
			c.utf8encode = function(a) { return g.nodebuffer ? h.newBufferFrom(a, "utf-8") : l(a) }, c.utf8decode = function(a) { return g.nodebuffer ? f.transformTo("nodebuffer", a).toString("utf-8") : (a = f.transformTo(g.uint8array ? "uint8array" : "array", a), n(a)) }, f.inherits(d, i), d.prototype.processChunk = function(a) { var b = f.transformTo(g.uint8array ? "uint8array" : "array", a.data); if (this.leftOver && this.leftOver.length) { if (g.uint8array) { var d = b;
						b = new Uint8Array(d.length + this.leftOver.length), b.set(this.leftOver, 0), b.set(d, this.leftOver.length) } else b = this.leftOver.concat(b);
					this.leftOver = null } var e = m(b),
					h = b;
				e !== b.length && (g.uint8array ? (h = b.subarray(0, e), this.leftOver = b.subarray(e, b.length)) : (h = b.slice(0, e), this.leftOver = b.slice(e, b.length))), this.push({ data: c.utf8decode(h), meta: a.meta }) }, d.prototype.flush = function() { this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null) }, c.Utf8DecodeWorker = d, f.inherits(e, i), e.prototype.processChunk = function(a) { this.push({ data: c.utf8encode(a.data), meta: a.meta }) }, c.Utf8EncodeWorker = e }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }],
		32: [function(a, b, c) {
			"use strict";

			function d(a) { var b = null; return b = i.uint8array ? new Uint8Array(a.length) : new Array(a.length), f(a, b) }

			function e(a) { return a }

			function f(a, b) { for (var c = 0; c < a.length; ++c) b[c] = 255 & a.charCodeAt(c); return b }

			function g(a) { var b = 65536,
					d = c.getTypeOf(a),
					e = !0; if ("uint8array" === d ? e = n.applyCanBeUsed.uint8array : "nodebuffer" === d && (e = n.applyCanBeUsed.nodebuffer), e)
					for (; b > 1;) try { return n.stringifyByChunk(a, d, b) } catch (f) { b = Math.floor(b / 2) }
				return n.stringifyByChar(a) }

			function h(a, b) {
				for (var c = 0; c < a.length; c++) b[c] = a[c];
				return b
			}
			var i = a("./support"),
				j = a("./base64"),
				k = a("./nodejsUtils"),
				l = a("core-js/library/fn/set-immediate"),
				m = a("./external");
			c.newBlob = function(a, b) { c.checkSupport("blob"); try { return new Blob([a], { type: b }) } catch (d) { try { var e = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder,
							f = new e; return f.append(a), f.getBlob(b) } catch (d) { throw new Error("Bug : can't construct the Blob.") } } };
			var n = { stringifyByChunk: function(a, b, c) { var d = [],
						e = 0,
						f = a.length; if (f <= c) return String.fromCharCode.apply(null, a); for (; e < f;) "array" === b || "nodebuffer" === b ? d.push(String.fromCharCode.apply(null, a.slice(e, Math.min(e + c, f)))) : d.push(String.fromCharCode.apply(null, a.subarray(e, Math.min(e + c, f)))), e += c; return d.join("") }, stringifyByChar: function(a) { for (var b = "", c = 0; c < a.length; c++) b += String.fromCharCode(a[c]); return b }, applyCanBeUsed: { uint8array: function() { try { return i.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length } catch (a) { return !1 } }(), nodebuffer: function() { try { return i.nodebuffer && 1 === String.fromCharCode.apply(null, k.allocBuffer(1)).length } catch (a) { return !1 } }() } };
			c.applyFromCharCode = g;
			var o = {};
			o.string = { string: e, array: function(a) { return f(a, new Array(a.length)) }, arraybuffer: function(a) { return o.string.uint8array(a).buffer }, uint8array: function(a) { return f(a, new Uint8Array(a.length)) }, nodebuffer: function(a) { return f(a, k.allocBuffer(a.length)) } }, o.array = { string: g, array: e, arraybuffer: function(a) { return new Uint8Array(a).buffer }, uint8array: function(a) { return new Uint8Array(a) }, nodebuffer: function(a) { return k.newBufferFrom(a) } }, o.arraybuffer = { string: function(a) { return g(new Uint8Array(a)) }, array: function(a) { return h(new Uint8Array(a), new Array(a.byteLength)) }, arraybuffer: e, uint8array: function(a) { return new Uint8Array(a) }, nodebuffer: function(a) { return k.newBufferFrom(new Uint8Array(a)) } }, o.uint8array = { string: g, array: function(a) { return h(a, new Array(a.length)) }, arraybuffer: function(a) { return a.buffer }, uint8array: e, nodebuffer: function(a) { return k.newBufferFrom(a) } }, o.nodebuffer = { string: g, array: function(a) { return h(a, new Array(a.length)) }, arraybuffer: function(a) { return o.nodebuffer.uint8array(a).buffer }, uint8array: function(a) { return h(a, new Uint8Array(a.length)) }, nodebuffer: e }, c.transformTo = function(a, b) { if (b || (b = ""), !a) return b;
				c.checkSupport(a); var d = c.getTypeOf(b),
					e = o[d][a](b); return e }, c.getTypeOf = function(a) { return "string" == typeof a ? "string" : "[object Array]" === Object.prototype.toString.call(a) ? "array" : i.nodebuffer && k.isBuffer(a) ? "nodebuffer" : i.uint8array && a instanceof Uint8Array ? "uint8array" : i.arraybuffer && a instanceof ArrayBuffer ? "arraybuffer" : void 0 }, c.checkSupport = function(a) { var b = i[a.toLowerCase()]; if (!b) throw new Error(a + " is not supported by this platform") }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(a) { var b, c, d = ""; for (c = 0; c < (a || "").length; c++) b = a.charCodeAt(c), d += "\\x" + (b < 16 ? "0" : "") + b.toString(16).toUpperCase(); return d }, c.delay = function(a, b, c) { l(function() { a.apply(c || null, b || []) }) }, c.inherits = function(a, b) { var c = function() {};
				c.prototype = b.prototype, a.prototype = new c }, c.extend = function() { var a, b, c = {}; for (a = 0; a < arguments.length; a++)
					for (b in arguments[a]) arguments[a].hasOwnProperty(b) && "undefined" == typeof c[b] && (c[b] = arguments[a][b]); return c }, c.prepareContent = function(a, b, e, f, g) { var h = m.Promise.resolve(b).then(function(a) { var b = i.blob && (a instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(a)) !== -1); return b && "undefined" != typeof FileReader ? new m.Promise(function(b, c) { var d = new FileReader;
						d.onload = function(a) { b(a.target.result) }, d.onerror = function(a) { c(a.target.error) }, d.readAsArrayBuffer(a) }) : a }); return h.then(function(b) { var h = c.getTypeOf(b); return h ? ("arraybuffer" === h ? b = c.transformTo("uint8array", b) : "string" === h && (g ? b = j.decode(b) : e && f !== !0 && (b = d(b))), b) : m.Promise.reject(new Error("Can't read the data of '" + a + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?")) }) }
		}, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, "core-js/library/fn/set-immediate": 36 }],
		33: [function(a, b, c) { "use strict";

			function d(a) { this.files = [], this.loadOptions = a } var e = a("./reader/readerFor"),
				f = a("./utils"),
				g = a("./signature"),
				h = a("./zipEntry"),
				i = (a("./utf8"), a("./support"));
			d.prototype = { checkSignature: function(a) { if (!this.reader.readAndCheckSignature(a)) { this.reader.index -= 4; var b = this.reader.readString(4); throw new Error("Corrupted zip or bug: unexpected signature (" + f.pretty(b) + ", expected " + f.pretty(a) + ")") } }, isSignature: function(a, b) { var c = this.reader.index;
					this.reader.setIndex(a); var d = this.reader.readString(4),
						e = d === b; return this.reader.setIndex(c), e }, readBlockEndOfCentral: function() { this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2); var a = this.reader.readData(this.zipCommentLength),
						b = i.uint8array ? "uint8array" : "array",
						c = f.transformTo(b, a);
					this.zipComment = this.loadOptions.decodeFileName(c) }, readBlockZip64EndOfCentral: function() { this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {}; for (var a, b, c, d = this.zip64EndOfCentralSize - 44, e = 0; e < d;) a = this.reader.readInt(2), b = this.reader.readInt(4), c = this.reader.readData(b), this.zip64ExtensibleData[a] = { id: a, length: b, value: c } }, readBlockZip64EndOfCentralLocator: function() { if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1) throw new Error("Multi-volumes zip are not supported") }, readLocalFiles: function() { var a, b; for (a = 0; a < this.files.length; a++) b = this.files[a], this.reader.setIndex(b.localHeaderOffset), this.checkSignature(g.LOCAL_FILE_HEADER), b.readLocalPart(this.reader), b.handleUTF8(), b.processAttributes() }, readCentralDir: function() { var a; for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(g.CENTRAL_FILE_HEADER);) a = new h({ zip64: this.zip64 }, this.loadOptions), a.readCentralPart(this.reader), this.files.push(a); if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length) }, readEndOfCentral: function() { var a = this.reader.lastIndexOfSignature(g.CENTRAL_DIRECTORY_END); if (a < 0) { var b = !this.isSignature(0, g.LOCAL_FILE_HEADER); throw b ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory") } this.reader.setIndex(a); var c = a; if (this.checkSignature(g.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === f.MAX_VALUE_16BITS || this.diskWithCentralDirStart === f.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === f.MAX_VALUE_16BITS || this.centralDirRecords === f.MAX_VALUE_16BITS || this.centralDirSize === f.MAX_VALUE_32BITS || this.centralDirOffset === f.MAX_VALUE_32BITS) { if (this.zip64 = !0, a = this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR), a < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator"); if (this.reader.setIndex(a), this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, g.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(g.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
						this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(g.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral() } var d = this.centralDirOffset + this.centralDirSize;
					this.zip64 && (d += 20, d += 12 + this.zip64EndOfCentralSize); var e = c - d; if (e > 0) this.isSignature(c, g.CENTRAL_FILE_HEADER) || (this.reader.zero = e);
					else if (e < 0) throw new Error("Corrupted zip: missing " + Math.abs(e) + " bytes.") }, prepareReader: function(a) { this.reader = e(a) }, load: function(a) { this.prepareReader(a), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles() } }, b.exports = d }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utf8": 31, "./utils": 32, "./zipEntry": 34 }],
		34: [function(a, b, c) { "use strict";

			function d(a, b) { this.options = a, this.loadOptions = b } var e = a("./reader/readerFor"),
				f = a("./utils"),
				g = a("./compressedObject"),
				h = a("./crc32"),
				i = a("./utf8"),
				j = a("./compressions"),
				k = a("./support"),
				l = 0,
				m = 3,
				n = function(a) { for (var b in j)
						if (j.hasOwnProperty(b) && j[b].magic === a) return j[b]; return null };
			d.prototype = { isEncrypted: function() { return 1 === (1 & this.bitFlag) }, useUTF8: function() { return 2048 === (2048 & this.bitFlag) }, readLocalPart: function(a) { var b, c; if (a.skip(22), this.fileNameLength = a.readInt(2), c = a.readInt(2), this.fileName = a.readData(this.fileNameLength), a.skip(c), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize === -1 || uncompressedSize === -1)"); if (b = n(this.compressionMethod), null === b) throw new Error("Corrupted zip : compression " + f.pretty(this.compressionMethod) + " unknown (inner file : " + f.transformTo("string", this.fileName) + ")");
					this.decompressed = new g(this.compressedSize, this.uncompressedSize, this.crc32, b, a.readData(this.compressedSize)) }, readCentralPart: function(a) { this.versionMadeBy = a.readInt(2), a.skip(2), this.bitFlag = a.readInt(2), this.compressionMethod = a.readString(2), this.date = a.readDate(), this.crc32 = a.readInt(4), this.compressedSize = a.readInt(4), this.uncompressedSize = a.readInt(4); var b = a.readInt(2); if (this.extraFieldsLength = a.readInt(2), this.fileCommentLength = a.readInt(2), this.diskNumberStart = a.readInt(2), this.internalFileAttributes = a.readInt(2), this.externalFileAttributes = a.readInt(4), this.localHeaderOffset = a.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
					a.skip(b), this.readExtraFields(a), this.parseZIP64ExtraField(a), this.fileComment = a.readData(this.fileCommentLength) }, processAttributes: function() { this.unixPermissions = null, this.dosPermissions = null; var a = this.versionMadeBy >> 8;
					this.dir = !!(16 & this.externalFileAttributes), a === l && (this.dosPermissions = 63 & this.externalFileAttributes), a === m && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0) }, parseZIP64ExtraField: function(a) { if (this.extraFields[1]) { var b = e(this.extraFields[1].value);
						this.uncompressedSize === f.MAX_VALUE_32BITS && (this.uncompressedSize = b.readInt(8)), this.compressedSize === f.MAX_VALUE_32BITS && (this.compressedSize = b.readInt(8)), this.localHeaderOffset === f.MAX_VALUE_32BITS && (this.localHeaderOffset = b.readInt(8)), this.diskNumberStart === f.MAX_VALUE_32BITS && (this.diskNumberStart = b.readInt(4)) } }, readExtraFields: function(a) { var b, c, d, e = a.index + this.extraFieldsLength; for (this.extraFields || (this.extraFields = {}); a.index < e;) b = a.readInt(2), c = a.readInt(2), d = a.readData(c), this.extraFields[b] = { id: b, length: c, value: d } }, handleUTF8: function() { var a = k.uint8array ? "uint8array" : "array"; if (this.useUTF8()) this.fileNameStr = i.utf8decode(this.fileName), this.fileCommentStr = i.utf8decode(this.fileComment);
					else { var b = this.findExtraFieldUnicodePath(); if (null !== b) this.fileNameStr = b;
						else { var c = f.transformTo(a, this.fileName);
							this.fileNameStr = this.loadOptions.decodeFileName(c) } var d = this.findExtraFieldUnicodeComment(); if (null !== d) this.fileCommentStr = d;
						else { var e = f.transformTo(a, this.fileComment);
							this.fileCommentStr = this.loadOptions.decodeFileName(e) } } }, findExtraFieldUnicodePath: function() { var a = this.extraFields[28789]; if (a) { var b = e(a.value); return 1 !== b.readInt(1) ? null : h(this.fileName) !== b.readInt(4) ? null : i.utf8decode(b.readData(a.length - 5)) } return null }, findExtraFieldUnicodeComment: function() { var a = this.extraFields[25461]; if (a) { var b = e(a.value); return 1 !== b.readInt(1) ? null : h(this.fileComment) !== b.readInt(4) ? null : i.utf8decode(b.readData(a.length - 5)) } return null } }, b.exports = d }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }],
		35: [function(a, b, c) { "use strict"; var d = a("./stream/StreamHelper"),
				e = a("./stream/DataWorker"),
				f = a("./utf8"),
				g = a("./compressedObject"),
				h = a("./stream/GenericWorker"),
				i = function(a, b, c) { this.name = a, this.dir = c.dir, this.date = c.date, this.comment = c.comment, this.unixPermissions = c.unixPermissions, this.dosPermissions = c.dosPermissions, this._data = b, this._dataBinary = c.binary, this.options = { compression: c.compression, compressionOptions: c.compressionOptions } };
			i.prototype = { internalStream: function(a) { var b = null,
						c = "string"; try { if (!a) throw new Error("No output type specified.");
						c = a.toLowerCase(); var e = "string" === c || "text" === c; "binarystring" !== c && "text" !== c || (c = "string"), b = this._decompressWorker(); var g = !this._dataBinary;
						g && !e && (b = b.pipe(new f.Utf8EncodeWorker)), !g && e && (b = b.pipe(new f.Utf8DecodeWorker)) } catch (i) { b = new h("error"), b.error(i) } return new d(b, c, "") }, async: function(a, b) { return this.internalStream(a).accumulate(b) }, nodeStream: function(a, b) { return this.internalStream(a || "nodebuffer").toNodejsStream(b) }, _compressWorker: function(a, b) { if (this._data instanceof g && this._data.compression.magic === a.magic) return this._data.getCompressedWorker(); var c = this._decompressWorker(); return this._dataBinary || (c = c.pipe(new f.Utf8EncodeWorker)), g.createWorkerFrom(c, a, b) }, _decompressWorker: function() { return this._data instanceof g ? this._data.getContentWorker() : this._data instanceof h ? this._data : new e(this._data) } }; for (var j = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], k = function() { throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.") }, l = 0; l < j.length; l++) i.prototype[j[l]] = k;
			b.exports = i }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }],
		36: [function(a, b, c) { a("../modules/web.immediate"), b.exports = a("../modules/_core").setImmediate }, { "../modules/_core": 40, "../modules/web.immediate": 56 }],
		37: [function(a, b, c) { b.exports = function(a) { if ("function" != typeof a) throw TypeError(a + " is not a function!"); return a } }, {}],
		38: [function(a, b, c) { var d = a("./_is-object");
			b.exports = function(a) { if (!d(a)) throw TypeError(a + " is not an object!"); return a } }, { "./_is-object": 51 }],
		39: [function(a, b, c) { var d = {}.toString;
			b.exports = function(a) { return d.call(a).slice(8, -1) } }, {}],
		40: [function(a, b, c) { var d = b.exports = { version: "2.3.0" }; "number" == typeof __e && (__e = d) }, {}],
		41: [function(a, b, c) { var d = a("./_a-function");
			b.exports = function(a, b, c) { if (d(a), void 0 === b) return a; switch (c) {
					case 1:
						return function(c) { return a.call(b, c) };
					case 2:
						return function(c, d) { return a.call(b, c, d) };
					case 3:
						return function(c, d, e) { return a.call(b, c, d, e) } } return function() { return a.apply(b, arguments) } } }, { "./_a-function": 37 }],
		42: [function(a, b, c) { b.exports = !a("./_fails")(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, { "./_fails": 45 }],
		43: [function(a, b, c) { var d = a("./_is-object"),
				e = a("./_global").document,
				f = d(e) && d(e.createElement);
			b.exports = function(a) { return f ? e.createElement(a) : {} } }, { "./_global": 46, "./_is-object": 51 }],
		44: [function(a, b, c) { var d = a("./_global"),
				e = a("./_core"),
				f = a("./_ctx"),
				g = a("./_hide"),
				h = "prototype",
				i = function(a, b, c) { var j, k, l, m = a & i.F,
						n = a & i.G,
						o = a & i.S,
						p = a & i.P,
						q = a & i.B,
						r = a & i.W,
						s = n ? e : e[b] || (e[b] = {}),
						t = s[h],
						u = n ? d : o ? d[b] : (d[b] || {})[h];
					n && (c = b); for (j in c) k = !m && u && void 0 !== u[j], k && j in s || (l = k ? u[j] : c[j], s[j] = n && "function" != typeof u[j] ? c[j] : q && k ? f(l, d) : r && u[j] == l ? function(a) { var b = function(b, c, d) { if (this instanceof a) { switch (arguments.length) {
									case 0:
										return new a;
									case 1:
										return new a(b);
									case 2:
										return new a(b, c) } return new a(b, c, d) } return a.apply(this, arguments) }; return b[h] = a[h], b }(l) : p && "function" == typeof l ? f(Function.call, l) : l, p && ((s.virtual || (s.virtual = {}))[j] = l, a & i.R && t && !t[j] && g(t, j, l))) };
			i.F = 1, i.G = 2, i.S = 4, i.P = 8, i.B = 16, i.W = 32, i.U = 64, i.R = 128, b.exports = i }, { "./_core": 40, "./_ctx": 41, "./_global": 46, "./_hide": 47 }],
		45: [function(a, b, c) { b.exports = function(a) { try { return !!a() } catch (b) { return !0 } } }, {}],
		46: [function(a, b, c) { var d = b.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = d) }, {}],
		47: [function(a, b, c) { var d = a("./_object-dp"),
				e = a("./_property-desc");
			b.exports = a("./_descriptors") ? function(a, b, c) { return d.f(a, b, e(1, c)) } : function(a, b, c) { return a[b] = c, a } }, { "./_descriptors": 42, "./_object-dp": 52, "./_property-desc": 53 }],
		48: [function(a, b, c) { b.exports = a("./_global").document && document.documentElement }, { "./_global": 46 }],
		49: [function(a, b, c) { b.exports = !a("./_descriptors") && !a("./_fails")(function() { return 7 != Object.defineProperty(a("./_dom-create")("div"), "a", { get: function() { return 7 } }).a }) }, { "./_descriptors": 42, "./_dom-create": 43, "./_fails": 45 }],
		50: [function(a, b, c) { b.exports = function(a, b, c) { var d = void 0 === c; switch (b.length) {
					case 0:
						return d ? a() : a.call(c);
					case 1:
						return d ? a(b[0]) : a.call(c, b[0]);
					case 2:
						return d ? a(b[0], b[1]) : a.call(c, b[0], b[1]);
					case 3:
						return d ? a(b[0], b[1], b[2]) : a.call(c, b[0], b[1], b[2]);
					case 4:
						return d ? a(b[0], b[1], b[2], b[3]) : a.call(c, b[0], b[1], b[2], b[3]) } return a.apply(c, b) } }, {}],
		51: [function(a, b, c) { b.exports = function(a) { return "object" == typeof a ? null !== a : "function" == typeof a } }, {}],
		52: [function(a, b, c) { var d = a("./_an-object"),
				e = a("./_ie8-dom-define"),
				f = a("./_to-primitive"),
				g = Object.defineProperty;
			c.f = a("./_descriptors") ? Object.defineProperty : function(a, b, c) { if (d(a), b = f(b, !0), d(c), e) try { return g(a, b, c) } catch (h) {}
				if ("get" in c || "set" in c) throw TypeError("Accessors not supported!"); return "value" in c && (a[b] = c.value), a } }, { "./_an-object": 38, "./_descriptors": 42, "./_ie8-dom-define": 49, "./_to-primitive": 55 }],
		53: [function(a, b, c) { b.exports = function(a, b) { return { enumerable: !(1 & a), configurable: !(2 & a), writable: !(4 & a), value: b } } }, {}],
		54: [function(a, b, c) { var d, e, f, g = a("./_ctx"),
				h = a("./_invoke"),
				i = a("./_html"),
				j = a("./_dom-create"),
				k = a("./_global"),
				l = k.process,
				m = k.setImmediate,
				n = k.clearImmediate,
				o = k.MessageChannel,
				p = 0,
				q = {},
				r = "onreadystatechange",
				s = function() { var a = +this; if (q.hasOwnProperty(a)) { var b = q[a];
						delete q[a], b() } },
				t = function(a) { s.call(a.data) };
			m && n || (m = function(a) { for (var b = [], c = 1; arguments.length > c;) b.push(arguments[c++]); return q[++p] = function() { h("function" == typeof a ? a : Function(a), b) }, d(p), p }, n = function(a) { delete q[a] }, "process" == a("./_cof")(l) ? d = function(a) { l.nextTick(g(s, a, 1)) } : o ? (e = new o, f = e.port2, e.port1.onmessage = t, d = g(f.postMessage, f, 1)) : k.addEventListener && "function" == typeof postMessage && !k.importScripts ? (d = function(a) { k.postMessage(a + "", "*") }, k.addEventListener("message", t, !1)) : d = r in j("script") ? function(a) { i.appendChild(j("script"))[r] = function() { i.removeChild(this), s.call(a) } } : function(a) { setTimeout(g(s, a, 1), 0) }), b.exports = { set: m, clear: n } }, { "./_cof": 39, "./_ctx": 41, "./_dom-create": 43, "./_global": 46, "./_html": 48, "./_invoke": 50 }],
		55: [function(a, b, c) { var d = a("./_is-object");
			b.exports = function(a, b) { if (!d(a)) return a; var c, e; if (b && "function" == typeof(c = a.toString) && !d(e = c.call(a))) return e; if ("function" == typeof(c = a.valueOf) && !d(e = c.call(a))) return e; if (!b && "function" == typeof(c = a.toString) && !d(e = c.call(a))) return e; throw TypeError("Can't convert object to primitive value") } }, { "./_is-object": 51 }],
		56: [function(a, b, c) { var d = a("./_export"),
				e = a("./_task");
			d(d.G + d.B, { setImmediate: e.set, clearImmediate: e.clear }) }, { "./_export": 44, "./_task": 54 }],
		57: [function(a, b, c) {
			(function(a) { "use strict";

				function c() { k = !0; for (var a, b, c = l.length; c;) { for (b = l, l = [], a = -1; ++a < c;) b[a]();
						c = l.length } k = !1 }

				function d(a) { 1 !== l.push(a) || k || e() } var e, f = a.MutationObserver || a.WebKitMutationObserver; if (f) { var g = 0,
						h = new f(c),
						i = a.document.createTextNode("");
					h.observe(i, { characterData: !0 }), e = function() { i.data = g = ++g % 2 } } else if (a.setImmediate || "undefined" == typeof a.MessageChannel) e = "document" in a && "onreadystatechange" in a.document.createElement("script") ? function() { var b = a.document.createElement("script");
					b.onreadystatechange = function() { c(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null }, a.document.documentElement.appendChild(b) } : function() { setTimeout(c, 0) };
				else { var j = new a.MessageChannel;
					j.port1.onmessage = c, e = function() { j.port2.postMessage(0) } } var k, l = [];
				b.exports = d }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}],
		58: [function(a, b, c) { "use strict";

			function d() {}

			function e(a) { if ("function" != typeof a) throw new TypeError("resolver must be a function");
				this.state = s, this.queue = [], this.outcome = void 0, a !== d && i(this, a) }

			function f(a, b, c) { this.promise = a, "function" == typeof b && (this.onFulfilled = b, this.callFulfilled = this.otherCallFulfilled), "function" == typeof c && (this.onRejected = c, this.callRejected = this.otherCallRejected) }

			function g(a, b, c) { o(function() { var d; try { d = b(c) } catch (e) { return p.reject(a, e) } d === a ? p.reject(a, new TypeError("Cannot resolve promise with itself")) : p.resolve(a, d) }) }

			function h(a) { var b = a && a.then; if (a && ("object" == typeof a || "function" == typeof a) && "function" == typeof b) return function() { b.apply(a, arguments) } }

			function i(a, b) {
				function c(b) { f || (f = !0, p.reject(a, b)) }

				function d(b) { f || (f = !0, p.resolve(a, b)) }

				function e() { b(d, c) } var f = !1,
					g = j(e); "error" === g.status && c(g.value) }

			function j(a, b) { var c = {}; try { c.value = a(b), c.status = "success" } catch (d) { c.status = "error", c.value = d } return c }

			function k(a) { return a instanceof this ? a : p.resolve(new this(d), a) }

			function l(a) { var b = new this(d); return p.reject(b, a) }

			function m(a) {
				function b(a, b) {
					function d(a) { g[b] = a, ++h !== e || f || (f = !0, p.resolve(j, g)) } c.resolve(a).then(d, function(a) { f || (f = !0, p.reject(j, a)) }) } var c = this; if ("[object Array]" !== Object.prototype.toString.call(a)) return this.reject(new TypeError("must be an array")); var e = a.length,
					f = !1; if (!e) return this.resolve([]); for (var g = new Array(e), h = 0, i = -1, j = new this(d); ++i < e;) b(a[i], i); return j }

			function n(a) {
				function b(a) { c.resolve(a).then(function(a) { f || (f = !0, p.resolve(h, a)) }, function(a) { f || (f = !0, p.reject(h, a)) }) } var c = this; if ("[object Array]" !== Object.prototype.toString.call(a)) return this.reject(new TypeError("must be an array")); var e = a.length,
					f = !1; if (!e) return this.resolve([]); for (var g = -1, h = new this(d); ++g < e;) b(a[g]); return h } var o = a("immediate"),
				p = {},
				q = ["REJECTED"],
				r = ["FULFILLED"],
				s = ["PENDING"];
			b.exports = e, e.prototype["catch"] = function(a) { return this.then(null, a) }, e.prototype.then = function(a, b) { if ("function" != typeof a && this.state === r || "function" != typeof b && this.state === q) return this; var c = new this.constructor(d); if (this.state !== s) { var e = this.state === r ? a : b;
					g(c, e, this.outcome) } else this.queue.push(new f(c, a, b)); return c }, f.prototype.callFulfilled = function(a) { p.resolve(this.promise, a) }, f.prototype.otherCallFulfilled = function(a) { g(this.promise, this.onFulfilled, a) }, f.prototype.callRejected = function(a) { p.reject(this.promise, a) }, f.prototype.otherCallRejected = function(a) { g(this.promise, this.onRejected, a) }, p.resolve = function(a, b) { var c = j(h, b); if ("error" === c.status) return p.reject(a, c.value); var d = c.value; if (d) i(a, d);
				else { a.state = r, a.outcome = b; for (var e = -1, f = a.queue.length; ++e < f;) a.queue[e].callFulfilled(b) } return a }, p.reject = function(a, b) { a.state = q, a.outcome = b; for (var c = -1, d = a.queue.length; ++c < d;) a.queue[c].callRejected(b); return a }, e.resolve = k, e.reject = l, e.all = m, e.race = n }, { immediate: 57 }],
		59: [function(a, b, c) { "use strict"; var d = a("./lib/utils/common").assign,
				e = a("./lib/deflate"),
				f = a("./lib/inflate"),
				g = a("./lib/zlib/constants"),
				h = {};
			d(h, e, f, g), b.exports = h }, { "./lib/deflate": 60, "./lib/inflate": 61, "./lib/utils/common": 62, "./lib/zlib/constants": 65 }],
		60: [function(a, b, c) { "use strict";

			function d(a) { if (!(this instanceof d)) return new d(a);
				this.options = i.assign({ level: s, method: u, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: t, to: "" }, a || {}); var b = this.options;
				b.raw && b.windowBits > 0 ? b.windowBits = -b.windowBits : b.gzip && b.windowBits > 0 && b.windowBits < 16 && (b.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l, this.strm.avail_out = 0; var c = h.deflateInit2(this.strm, b.level, b.method, b.windowBits, b.memLevel, b.strategy); if (c !== p) throw new Error(k[c]); if (b.header && h.deflateSetHeader(this.strm, b.header), b.dictionary) { var e; if (e = "string" == typeof b.dictionary ? j.string2buf(b.dictionary) : "[object ArrayBuffer]" === m.call(b.dictionary) ? new Uint8Array(b.dictionary) : b.dictionary, c = h.deflateSetDictionary(this.strm, e), c !== p) throw new Error(k[c]);
					this._dict_set = !0 } }

			function e(a, b) { var c = new d(b); if (c.push(a, !0), c.err) throw c.msg || k[c.err]; return c.result }

			function f(a, b) { return b = b || {}, b.raw = !0, e(a, b) }

			function g(a, b) { return b = b || {}, b.gzip = !0, e(a, b) } var h = a("./zlib/deflate"),
				i = a("./utils/common"),
				j = a("./utils/strings"),
				k = a("./zlib/messages"),
				l = a("./zlib/zstream"),
				m = Object.prototype.toString,
				n = 0,
				o = 4,
				p = 0,
				q = 1,
				r = 2,
				s = -1,
				t = 0,
				u = 8;
			d.prototype.push = function(a, b) { var c, d, e = this.strm,
					f = this.options.chunkSize; if (this.ended) return !1;
				d = b === ~~b ? b : b === !0 ? o : n, "string" == typeof a ? e.input = j.string2buf(a) : "[object ArrayBuffer]" === m.call(a) ? e.input = new Uint8Array(a) : e.input = a, e.next_in = 0, e.avail_in = e.input.length;
				do { if (0 === e.avail_out && (e.output = new i.Buf8(f), e.next_out = 0, e.avail_out = f), c = h.deflate(e, d), c !== q && c !== p) return this.onEnd(c), this.ended = !0, !1;
					0 !== e.avail_out && (0 !== e.avail_in || d !== o && d !== r) || ("string" === this.options.to ? this.onData(j.buf2binstring(i.shrinkBuf(e.output, e.next_out))) : this.onData(i.shrinkBuf(e.output, e.next_out))) } while ((e.avail_in > 0 || 0 === e.avail_out) && c !== q); return d === o ? (c = h.deflateEnd(this.strm), this.onEnd(c), this.ended = !0, c === p) : d !== r || (this.onEnd(p), e.avail_out = 0, !0) }, d.prototype.onData = function(a) { this.chunks.push(a) }, d.prototype.onEnd = function(a) { a === p && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg }, c.Deflate = d, c.deflate = e, c.deflateRaw = f, c.gzip = g }, { "./utils/common": 62, "./utils/strings": 63, "./zlib/deflate": 67, "./zlib/messages": 72, "./zlib/zstream": 74 }],
		61: [function(a, b, c) { "use strict";

			function d(a) { if (!(this instanceof d)) return new d(a);
				this.options = h.assign({ chunkSize: 16384, windowBits: 0, to: "" }, a || {}); var b = this.options;
				b.raw && b.windowBits >= 0 && b.windowBits < 16 && (b.windowBits = -b.windowBits, 0 === b.windowBits && (b.windowBits = -15)), !(b.windowBits >= 0 && b.windowBits < 16) || a && a.windowBits || (b.windowBits += 32), b.windowBits > 15 && b.windowBits < 48 && 0 === (15 & b.windowBits) && (b.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l, this.strm.avail_out = 0; var c = g.inflateInit2(this.strm, b.windowBits); if (c !== j.Z_OK) throw new Error(k[c]);
				this.header = new m, g.inflateGetHeader(this.strm, this.header) }

			function e(a, b) { var c = new d(b); if (c.push(a, !0), c.err) throw c.msg || k[c.err]; return c.result }

			function f(a, b) { return b = b || {}, b.raw = !0, e(a, b) } var g = a("./zlib/inflate"),
				h = a("./utils/common"),
				i = a("./utils/strings"),
				j = a("./zlib/constants"),
				k = a("./zlib/messages"),
				l = a("./zlib/zstream"),
				m = a("./zlib/gzheader"),
				n = Object.prototype.toString;
			d.prototype.push = function(a, b) { var c, d, e, f, k, l, m = this.strm,
					o = this.options.chunkSize,
					p = this.options.dictionary,
					q = !1; if (this.ended) return !1;
				d = b === ~~b ? b : b === !0 ? j.Z_FINISH : j.Z_NO_FLUSH, "string" == typeof a ? m.input = i.binstring2buf(a) : "[object ArrayBuffer]" === n.call(a) ? m.input = new Uint8Array(a) : m.input = a, m.next_in = 0, m.avail_in = m.input.length;
				do { if (0 === m.avail_out && (m.output = new h.Buf8(o), m.next_out = 0, m.avail_out = o), c = g.inflate(m, j.Z_NO_FLUSH), c === j.Z_NEED_DICT && p && (l = "string" == typeof p ? i.string2buf(p) : "[object ArrayBuffer]" === n.call(p) ? new Uint8Array(p) : p, c = g.inflateSetDictionary(this.strm, l)), c === j.Z_BUF_ERROR && q === !0 && (c = j.Z_OK, q = !1), c !== j.Z_STREAM_END && c !== j.Z_OK) return this.onEnd(c), this.ended = !0, !1;
					m.next_out && (0 !== m.avail_out && c !== j.Z_STREAM_END && (0 !== m.avail_in || d !== j.Z_FINISH && d !== j.Z_SYNC_FLUSH) || ("string" === this.options.to ? (e = i.utf8border(m.output, m.next_out), f = m.next_out - e, k = i.buf2string(m.output, e), m.next_out = f, m.avail_out = o - f, f && h.arraySet(m.output, m.output, e, f, 0), this.onData(k)) : this.onData(h.shrinkBuf(m.output, m.next_out)))), 0 === m.avail_in && 0 === m.avail_out && (q = !0) } while ((m.avail_in > 0 || 0 === m.avail_out) && c !== j.Z_STREAM_END); return c === j.Z_STREAM_END && (d = j.Z_FINISH), d === j.Z_FINISH ? (c = g.inflateEnd(this.strm), this.onEnd(c), this.ended = !0, c === j.Z_OK) : d !== j.Z_SYNC_FLUSH || (this.onEnd(j.Z_OK), m.avail_out = 0, !0) }, d.prototype.onData = function(a) { this.chunks.push(a) }, d.prototype.onEnd = function(a) { a === j.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = h.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg }, c.Inflate = d, c.inflate = e, c.inflateRaw = f, c.ungzip = e }, { "./utils/common": 62, "./utils/strings": 63, "./zlib/constants": 65, "./zlib/gzheader": 68, "./zlib/inflate": 70, "./zlib/messages": 72, "./zlib/zstream": 74 }],
		62: [function(a, b, c) { "use strict"; var d = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
			c.assign = function(a) { for (var b = Array.prototype.slice.call(arguments, 1); b.length;) { var c = b.shift(); if (c) { if ("object" != typeof c) throw new TypeError(c + "must be non-object"); for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d]) } } return a }, c.shrinkBuf = function(a, b) { return a.length === b ? a : a.subarray ? a.subarray(0, b) : (a.length = b, a) }; var e = { arraySet: function(a, b, c, d, e) { if (b.subarray && a.subarray) return void a.set(b.subarray(c, c + d), e); for (var f = 0; f < d; f++) a[e + f] = b[c + f] }, flattenChunks: function(a) { var b, c, d, e, f, g; for (d = 0, b = 0, c = a.length; b < c; b++) d += a[b].length; for (g = new Uint8Array(d), e = 0, b = 0, c = a.length; b < c; b++) f = a[b], g.set(f, e), e += f.length; return g } },
				f = { arraySet: function(a, b, c, d, e) { for (var f = 0; f < d; f++) a[e + f] = b[c + f] }, flattenChunks: function(a) { return [].concat.apply([], a) } };
			c.setTyped = function(a) { a ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, e)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, f)) }, c.setTyped(d) }, {}],
		63: [function(a, b, c) { "use strict";

			function d(a, b) { if (b < 65537 && (a.subarray && g || !a.subarray && f)) return String.fromCharCode.apply(null, e.shrinkBuf(a, b)); for (var c = "", d = 0; d < b; d++) c += String.fromCharCode(a[d]); return c } var e = a("./common"),
				f = !0,
				g = !0; try { String.fromCharCode.apply(null, [0]) } catch (h) { f = !1 } try { String.fromCharCode.apply(null, new Uint8Array(1)) } catch (h) { g = !1 } for (var i = new e.Buf8(256), j = 0; j < 256; j++) i[j] = j >= 252 ? 6 : j >= 248 ? 5 : j >= 240 ? 4 : j >= 224 ? 3 : j >= 192 ? 2 : 1;
			i[254] = i[254] = 1, c.string2buf = function(a) { var b, c, d, f, g, h = a.length,
					i = 0; for (f = 0; f < h; f++) c = a.charCodeAt(f), 55296 === (64512 & c) && f + 1 < h && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)), i += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4; for (b = new e.Buf8(i), g = 0, f = 0; g < i; f++) c = a.charCodeAt(f), 55296 === (64512 & c) && f + 1 < h && (d = a.charCodeAt(f + 1), 56320 === (64512 & d) && (c = 65536 + (c - 55296 << 10) + (d - 56320), f++)), c < 128 ? b[g++] = c : c < 2048 ? (b[g++] = 192 | c >>> 6, b[g++] = 128 | 63 & c) : c < 65536 ? (b[g++] = 224 | c >>> 12, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c) : (b[g++] = 240 | c >>> 18, b[g++] = 128 | c >>> 12 & 63, b[g++] = 128 | c >>> 6 & 63, b[g++] = 128 | 63 & c); return b }, c.buf2binstring = function(a) { return d(a, a.length) }, c.binstring2buf = function(a) { for (var b = new e.Buf8(a.length), c = 0, d = b.length; c < d; c++) b[c] = a.charCodeAt(c); return b }, c.buf2string = function(a, b) { var c, e, f, g, h = b || a.length,
					j = new Array(2 * h); for (e = 0, c = 0; c < h;)
					if (f = a[c++], f < 128) j[e++] = f;
					else if (g = i[f], g > 4) j[e++] = 65533, c += g - 1;
				else { for (f &= 2 === g ? 31 : 3 === g ? 15 : 7; g > 1 && c < h;) f = f << 6 | 63 & a[c++], g--;
					g > 1 ? j[e++] = 65533 : f < 65536 ? j[e++] = f : (f -= 65536, j[e++] = 55296 | f >> 10 & 1023, j[e++] = 56320 | 1023 & f) } return d(j, e) }, c.utf8border = function(a, b) { var c; for (b = b || a.length, b > a.length && (b = a.length), c = b - 1; c >= 0 && 128 === (192 & a[c]);) c--; return c < 0 ? b : 0 === c ? b : c + i[a[c]] > b ? c : b } }, { "./common": 62 }],
		64: [function(a, b, c) {
			"use strict";

			function d(a, b, c, d) {
				for (var e = 65535 & a | 0, f = a >>> 16 & 65535 | 0, g = 0; 0 !== c;) { g = c > 2e3 ? 2e3 : c, c -= g;
					do e = e + b[d++] | 0, f = f + e | 0; while (--g);
					e %= 65521, f %= 65521 }
				return e | f << 16 | 0;
			}
			b.exports = d
		}, {}],
		65: [function(a, b, c) { "use strict";
			b.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 } }, {}],
		66: [function(a, b, c) { "use strict";

			function d() { for (var a, b = [], c = 0; c < 256; c++) { a = c; for (var d = 0; d < 8; d++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
					b[c] = a } return b }

			function e(a, b, c, d) { var e = f,
					g = d + c;
				a ^= -1; for (var h = d; h < g; h++) a = a >>> 8 ^ e[255 & (a ^ b[h])]; return a ^ -1 } var f = d();
			b.exports = e }, {}],
		67: [function(a, b, c) { "use strict";

			function d(a, b) { return a.msg = I[b], b }

			function e(a) { return (a << 1) - (a > 4 ? 9 : 0) }

			function f(a) { for (var b = a.length; --b >= 0;) a[b] = 0 }

			function g(a) { var b = a.state,
					c = b.pending;
				c > a.avail_out && (c = a.avail_out), 0 !== c && (E.arraySet(a.output, b.pending_buf, b.pending_out, c, a.next_out), a.next_out += c, b.pending_out += c, a.total_out += c, a.avail_out -= c, b.pending -= c, 0 === b.pending && (b.pending_out = 0)) }

			function h(a, b) { F._tr_flush_block(a, a.block_start >= 0 ? a.block_start : -1, a.strstart - a.block_start, b), a.block_start = a.strstart, g(a.strm) }

			function i(a, b) { a.pending_buf[a.pending++] = b }

			function j(a, b) { a.pending_buf[a.pending++] = b >>> 8 & 255, a.pending_buf[a.pending++] = 255 & b }

			function k(a, b, c, d) { var e = a.avail_in; return e > d && (e = d), 0 === e ? 0 : (a.avail_in -= e, E.arraySet(b, a.input, a.next_in, e, c), 1 === a.state.wrap ? a.adler = G(a.adler, b, e, c) : 2 === a.state.wrap && (a.adler = H(a.adler, b, e, c)), a.next_in += e, a.total_in += e, e) }

			function l(a, b) { var c, d, e = a.max_chain_length,
					f = a.strstart,
					g = a.prev_length,
					h = a.nice_match,
					i = a.strstart > a.w_size - la ? a.strstart - (a.w_size - la) : 0,
					j = a.window,
					k = a.w_mask,
					l = a.prev,
					m = a.strstart + ka,
					n = j[f + g - 1],
					o = j[f + g];
				a.prev_length >= a.good_match && (e >>= 2), h > a.lookahead && (h = a.lookahead);
				do
					if (c = b, j[c + g] === o && j[c + g - 1] === n && j[c] === j[f] && j[++c] === j[f + 1]) { f += 2, c++;
						do; while (j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && j[++f] === j[++c] && f < m); if (d = ka - (m - f), f = m - ka, d > g) { if (a.match_start = b, g = d, d >= h) break;
							n = j[f + g - 1], o = j[f + g] } } while ((b = l[b & k]) > i && 0 !== --e);
				return g <= a.lookahead ? g : a.lookahead }

			function m(a) { var b, c, d, e, f, g = a.w_size;
				do { if (e = a.window_size - a.lookahead - a.strstart, a.strstart >= g + (g - la)) { E.arraySet(a.window, a.window, g, g, 0), a.match_start -= g, a.strstart -= g, a.block_start -= g, c = a.hash_size, b = c;
						do d = a.head[--b], a.head[b] = d >= g ? d - g : 0; while (--c);
						c = g, b = c;
						do d = a.prev[--b], a.prev[b] = d >= g ? d - g : 0; while (--c);
						e += g } if (0 === a.strm.avail_in) break; if (c = k(a.strm, a.window, a.strstart + a.lookahead, e), a.lookahead += c, a.lookahead + a.insert >= ja)
						for (f = a.strstart - a.insert, a.ins_h = a.window[f], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[f + 1]) & a.hash_mask; a.insert && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[f + ja - 1]) & a.hash_mask, a.prev[f & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = f, f++, a.insert--, !(a.lookahead + a.insert < ja));); } while (a.lookahead < la && 0 !== a.strm.avail_in) }

			function n(a, b) { var c = 65535; for (c > a.pending_buf_size - 5 && (c = a.pending_buf_size - 5);;) { if (a.lookahead <= 1) { if (m(a), 0 === a.lookahead && b === J) return ua; if (0 === a.lookahead) break } a.strstart += a.lookahead, a.lookahead = 0; var d = a.block_start + c; if ((0 === a.strstart || a.strstart >= d) && (a.lookahead = a.strstart - d, a.strstart = d, h(a, !1), 0 === a.strm.avail_out)) return ua; if (a.strstart - a.block_start >= a.w_size - la && (h(a, !1), 0 === a.strm.avail_out)) return ua } return a.insert = 0, b === M ? (h(a, !0), 0 === a.strm.avail_out ? wa : xa) : a.strstart > a.block_start && (h(a, !1), 0 === a.strm.avail_out) ? ua : ua }

			function o(a, b) { for (var c, d;;) { if (a.lookahead < la) { if (m(a), a.lookahead < la && b === J) return ua; if (0 === a.lookahead) break } if (c = 0, a.lookahead >= ja && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + ja - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), 0 !== c && a.strstart - c <= a.w_size - la && (a.match_length = l(a, c)), a.match_length >= ja)
						if (d = F._tr_tally(a, a.strstart - a.match_start, a.match_length - ja), a.lookahead -= a.match_length, a.match_length <= a.max_lazy_match && a.lookahead >= ja) { a.match_length--;
							do a.strstart++, a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + ja - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart; while (0 !== --a.match_length);
							a.strstart++ } else a.strstart += a.match_length, a.match_length = 0, a.ins_h = a.window[a.strstart], a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + 1]) & a.hash_mask;
					else d = F._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++; if (d && (h(a, !1), 0 === a.strm.avail_out)) return ua } return a.insert = a.strstart < ja - 1 ? a.strstart : ja - 1, b === M ? (h(a, !0), 0 === a.strm.avail_out ? wa : xa) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? ua : va }

			function p(a, b) { for (var c, d, e;;) { if (a.lookahead < la) { if (m(a), a.lookahead < la && b === J) return ua; if (0 === a.lookahead) break } if (c = 0, a.lookahead >= ja && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + ja - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart), a.prev_length = a.match_length, a.prev_match = a.match_start, a.match_length = ja - 1, 0 !== c && a.prev_length < a.max_lazy_match && a.strstart - c <= a.w_size - la && (a.match_length = l(a, c), a.match_length <= 5 && (a.strategy === U || a.match_length === ja && a.strstart - a.match_start > 4096) && (a.match_length = ja - 1)), a.prev_length >= ja && a.match_length <= a.prev_length) { e = a.strstart + a.lookahead - ja, d = F._tr_tally(a, a.strstart - 1 - a.prev_match, a.prev_length - ja), a.lookahead -= a.prev_length - 1, a.prev_length -= 2;
						do ++a.strstart <= e && (a.ins_h = (a.ins_h << a.hash_shift ^ a.window[a.strstart + ja - 1]) & a.hash_mask, c = a.prev[a.strstart & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = a.strstart); while (0 !== --a.prev_length); if (a.match_available = 0, a.match_length = ja - 1, a.strstart++, d && (h(a, !1), 0 === a.strm.avail_out)) return ua } else if (a.match_available) { if (d = F._tr_tally(a, 0, a.window[a.strstart - 1]), d && h(a, !1), a.strstart++, a.lookahead--, 0 === a.strm.avail_out) return ua } else a.match_available = 1, a.strstart++, a.lookahead-- } return a.match_available && (d = F._tr_tally(a, 0, a.window[a.strstart - 1]), a.match_available = 0), a.insert = a.strstart < ja - 1 ? a.strstart : ja - 1, b === M ? (h(a, !0), 0 === a.strm.avail_out ? wa : xa) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? ua : va }

			function q(a, b) { for (var c, d, e, f, g = a.window;;) { if (a.lookahead <= ka) { if (m(a), a.lookahead <= ka && b === J) return ua; if (0 === a.lookahead) break } if (a.match_length = 0, a.lookahead >= ja && a.strstart > 0 && (e = a.strstart - 1, d = g[e], d === g[++e] && d === g[++e] && d === g[++e])) { f = a.strstart + ka;
						do; while (d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && d === g[++e] && e < f);
						a.match_length = ka - (f - e), a.match_length > a.lookahead && (a.match_length = a.lookahead) } if (a.match_length >= ja ? (c = F._tr_tally(a, 1, a.match_length - ja), a.lookahead -= a.match_length, a.strstart += a.match_length, a.match_length = 0) : (c = F._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++), c && (h(a, !1), 0 === a.strm.avail_out)) return ua } return a.insert = 0, b === M ? (h(a, !0), 0 === a.strm.avail_out ? wa : xa) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? ua : va }

			function r(a, b) { for (var c;;) { if (0 === a.lookahead && (m(a), 0 === a.lookahead)) { if (b === J) return ua; break } if (a.match_length = 0, c = F._tr_tally(a, 0, a.window[a.strstart]), a.lookahead--, a.strstart++, c && (h(a, !1), 0 === a.strm.avail_out)) return ua } return a.insert = 0, b === M ? (h(a, !0), 0 === a.strm.avail_out ? wa : xa) : a.last_lit && (h(a, !1), 0 === a.strm.avail_out) ? ua : va }

			function s(a, b, c, d, e) { this.good_length = a, this.max_lazy = b, this.nice_length = c, this.max_chain = d, this.func = e }

			function t(a) { a.window_size = 2 * a.w_size, f(a.head), a.max_lazy_match = D[a.level].max_lazy, a.good_match = D[a.level].good_length, a.nice_match = D[a.level].nice_length, a.max_chain_length = D[a.level].max_chain, a.strstart = 0, a.block_start = 0, a.lookahead = 0, a.insert = 0, a.match_length = a.prev_length = ja - 1, a.match_available = 0, a.ins_h = 0 }

			function u() { this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = $, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new E.Buf16(2 * ha), this.dyn_dtree = new E.Buf16(2 * (2 * fa + 1)), this.bl_tree = new E.Buf16(2 * (2 * ga + 1)), f(this.dyn_ltree), f(this.dyn_dtree), f(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new E.Buf16(ia + 1), this.heap = new E.Buf16(2 * ea + 1), f(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new E.Buf16(2 * ea + 1), f(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0 }

			function v(a) { var b; return a && a.state ? (a.total_in = a.total_out = 0, a.data_type = Z, b = a.state, b.pending = 0, b.pending_out = 0, b.wrap < 0 && (b.wrap = -b.wrap), b.status = b.wrap ? na : sa, a.adler = 2 === b.wrap ? 0 : 1, b.last_flush = J, F._tr_init(b), O) : d(a, Q) }

			function w(a) { var b = v(a); return b === O && t(a.state), b }

			function x(a, b) { return a && a.state ? 2 !== a.state.wrap ? Q : (a.state.gzhead = b, O) : Q }

			function y(a, b, c, e, f, g) { if (!a) return Q; var h = 1; if (b === T && (b = 6), e < 0 ? (h = 0, e = -e) : e > 15 && (h = 2, e -= 16), f < 1 || f > _ || c !== $ || e < 8 || e > 15 || b < 0 || b > 9 || g < 0 || g > X) return d(a, Q);
				8 === e && (e = 9); var i = new u; return a.state = i, i.strm = a, i.wrap = h, i.gzhead = null, i.w_bits = e, i.w_size = 1 << i.w_bits, i.w_mask = i.w_size - 1, i.hash_bits = f + 7, i.hash_size = 1 << i.hash_bits, i.hash_mask = i.hash_size - 1, i.hash_shift = ~~((i.hash_bits + ja - 1) / ja), i.window = new E.Buf8(2 * i.w_size), i.head = new E.Buf16(i.hash_size), i.prev = new E.Buf16(i.w_size), i.lit_bufsize = 1 << f + 6, i.pending_buf_size = 4 * i.lit_bufsize, i.pending_buf = new E.Buf8(i.pending_buf_size), i.d_buf = 1 * i.lit_bufsize, i.l_buf = 3 * i.lit_bufsize, i.level = b, i.strategy = g, i.method = c, w(a) }

			function z(a, b) { return y(a, b, $, aa, ba, Y) }

			function A(a, b) { var c, h, k, l; if (!a || !a.state || b > N || b < 0) return a ? d(a, Q) : Q; if (h = a.state, !a.output || !a.input && 0 !== a.avail_in || h.status === ta && b !== M) return d(a, 0 === a.avail_out ? S : Q); if (h.strm = a, c = h.last_flush, h.last_flush = b, h.status === na)
					if (2 === h.wrap) a.adler = 0, i(h, 31), i(h, 139), i(h, 8), h.gzhead ? (i(h, (h.gzhead.text ? 1 : 0) + (h.gzhead.hcrc ? 2 : 0) + (h.gzhead.extra ? 4 : 0) + (h.gzhead.name ? 8 : 0) + (h.gzhead.comment ? 16 : 0)), i(h, 255 & h.gzhead.time), i(h, h.gzhead.time >> 8 & 255), i(h, h.gzhead.time >> 16 & 255), i(h, h.gzhead.time >> 24 & 255), i(h, 9 === h.level ? 2 : h.strategy >= V || h.level < 2 ? 4 : 0), i(h, 255 & h.gzhead.os), h.gzhead.extra && h.gzhead.extra.length && (i(h, 255 & h.gzhead.extra.length), i(h, h.gzhead.extra.length >> 8 & 255)), h.gzhead.hcrc && (a.adler = H(a.adler, h.pending_buf, h.pending, 0)), h.gzindex = 0, h.status = oa) : (i(h, 0), i(h, 0), i(h, 0), i(h, 0), i(h, 0), i(h, 9 === h.level ? 2 : h.strategy >= V || h.level < 2 ? 4 : 0), i(h, ya), h.status = sa);
					else { var m = $ + (h.w_bits - 8 << 4) << 8,
							n = -1;
						n = h.strategy >= V || h.level < 2 ? 0 : h.level < 6 ? 1 : 6 === h.level ? 2 : 3, m |= n << 6, 0 !== h.strstart && (m |= ma), m += 31 - m % 31, h.status = sa, j(h, m), 0 !== h.strstart && (j(h, a.adler >>> 16), j(h, 65535 & a.adler)), a.adler = 1 }
				if (h.status === oa)
					if (h.gzhead.extra) { for (k = h.pending; h.gzindex < (65535 & h.gzhead.extra.length) && (h.pending !== h.pending_buf_size || (h.gzhead.hcrc && h.pending > k && (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)), g(a), k = h.pending, h.pending !== h.pending_buf_size));) i(h, 255 & h.gzhead.extra[h.gzindex]), h.gzindex++;
						h.gzhead.hcrc && h.pending > k && (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)), h.gzindex === h.gzhead.extra.length && (h.gzindex = 0, h.status = pa) } else h.status = pa; if (h.status === pa)
					if (h.gzhead.name) { k = h.pending;
						do { if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > k && (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)), g(a), k = h.pending, h.pending === h.pending_buf_size)) { l = 1; break } l = h.gzindex < h.gzhead.name.length ? 255 & h.gzhead.name.charCodeAt(h.gzindex++) : 0, i(h, l) } while (0 !== l);
						h.gzhead.hcrc && h.pending > k && (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)), 0 === l && (h.gzindex = 0, h.status = qa) } else h.status = qa; if (h.status === qa)
					if (h.gzhead.comment) { k = h.pending;
						do { if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > k && (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)), g(a), k = h.pending, h.pending === h.pending_buf_size)) { l = 1; break } l = h.gzindex < h.gzhead.comment.length ? 255 & h.gzhead.comment.charCodeAt(h.gzindex++) : 0, i(h, l) } while (0 !== l);
						h.gzhead.hcrc && h.pending > k && (a.adler = H(a.adler, h.pending_buf, h.pending - k, k)), 0 === l && (h.status = ra) } else h.status = ra; if (h.status === ra && (h.gzhead.hcrc ? (h.pending + 2 > h.pending_buf_size && g(a), h.pending + 2 <= h.pending_buf_size && (i(h, 255 & a.adler), i(h, a.adler >> 8 & 255), a.adler = 0, h.status = sa)) : h.status = sa), 0 !== h.pending) { if (g(a), 0 === a.avail_out) return h.last_flush = -1, O } else if (0 === a.avail_in && e(b) <= e(c) && b !== M) return d(a, S); if (h.status === ta && 0 !== a.avail_in) return d(a, S); if (0 !== a.avail_in || 0 !== h.lookahead || b !== J && h.status !== ta) { var o = h.strategy === V ? r(h, b) : h.strategy === W ? q(h, b) : D[h.level].func(h, b); if (o !== wa && o !== xa || (h.status = ta), o === ua || o === wa) return 0 === a.avail_out && (h.last_flush = -1), O; if (o === va && (b === K ? F._tr_align(h) : b !== N && (F._tr_stored_block(h, 0, 0, !1), b === L && (f(h.head), 0 === h.lookahead && (h.strstart = 0, h.block_start = 0, h.insert = 0))), g(a), 0 === a.avail_out)) return h.last_flush = -1, O } return b !== M ? O : h.wrap <= 0 ? P : (2 === h.wrap ? (i(h, 255 & a.adler), i(h, a.adler >> 8 & 255), i(h, a.adler >> 16 & 255), i(h, a.adler >> 24 & 255), i(h, 255 & a.total_in), i(h, a.total_in >> 8 & 255), i(h, a.total_in >> 16 & 255), i(h, a.total_in >> 24 & 255)) : (j(h, a.adler >>> 16), j(h, 65535 & a.adler)), g(a), h.wrap > 0 && (h.wrap = -h.wrap), 0 !== h.pending ? O : P) }

			function B(a) { var b; return a && a.state ? (b = a.state.status, b !== na && b !== oa && b !== pa && b !== qa && b !== ra && b !== sa && b !== ta ? d(a, Q) : (a.state = null, b === sa ? d(a, R) : O)) : Q }

			function C(a, b) { var c, d, e, g, h, i, j, k, l = b.length; if (!a || !a.state) return Q; if (c = a.state, g = c.wrap, 2 === g || 1 === g && c.status !== na || c.lookahead) return Q; for (1 === g && (a.adler = G(a.adler, b, l, 0)), c.wrap = 0, l >= c.w_size && (0 === g && (f(c.head), c.strstart = 0, c.block_start = 0, c.insert = 0), k = new E.Buf8(c.w_size), E.arraySet(k, b, l - c.w_size, c.w_size, 0), b = k, l = c.w_size), h = a.avail_in, i = a.next_in, j = a.input, a.avail_in = l, a.next_in = 0, a.input = b, m(c); c.lookahead >= ja;) { d = c.strstart, e = c.lookahead - (ja - 1);
					do c.ins_h = (c.ins_h << c.hash_shift ^ c.window[d + ja - 1]) & c.hash_mask, c.prev[d & c.w_mask] = c.head[c.ins_h], c.head[c.ins_h] = d, d++; while (--e);
					c.strstart = d, c.lookahead = ja - 1, m(c) } return c.strstart += c.lookahead, c.block_start = c.strstart, c.insert = c.lookahead, c.lookahead = 0, c.match_length = c.prev_length = ja - 1, c.match_available = 0, a.next_in = i, a.input = j, a.avail_in = h, c.wrap = g, O } var D, E = a("../utils/common"),
				F = a("./trees"),
				G = a("./adler32"),
				H = a("./crc32"),
				I = a("./messages"),
				J = 0,
				K = 1,
				L = 3,
				M = 4,
				N = 5,
				O = 0,
				P = 1,
				Q = -2,
				R = -3,
				S = -5,
				T = -1,
				U = 1,
				V = 2,
				W = 3,
				X = 4,
				Y = 0,
				Z = 2,
				$ = 8,
				_ = 9,
				aa = 15,
				ba = 8,
				ca = 29,
				da = 256,
				ea = da + 1 + ca,
				fa = 30,
				ga = 19,
				ha = 2 * ea + 1,
				ia = 15,
				ja = 3,
				ka = 258,
				la = ka + ja + 1,
				ma = 32,
				na = 42,
				oa = 69,
				pa = 73,
				qa = 91,
				ra = 103,
				sa = 113,
				ta = 666,
				ua = 1,
				va = 2,
				wa = 3,
				xa = 4,
				ya = 3;
			D = [new s(0, 0, 0, 0, n), new s(4, 4, 8, 4, o), new s(4, 5, 16, 8, o), new s(4, 6, 32, 32, o), new s(4, 4, 16, 16, p), new s(8, 16, 32, 32, p), new s(8, 16, 128, 128, p), new s(8, 32, 128, 256, p), new s(32, 128, 258, 1024, p), new s(32, 258, 258, 4096, p)], c.deflateInit = z, c.deflateInit2 = y, c.deflateReset = w, c.deflateResetKeep = v, c.deflateSetHeader = x, c.deflate = A, c.deflateEnd = B, c.deflateSetDictionary = C, c.deflateInfo = "pako deflate (from Nodeca project)" }, { "../utils/common": 62, "./adler32": 64, "./crc32": 66, "./messages": 72, "./trees": 73 }],
		68: [function(a, b, c) { "use strict";

			function d() { this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1 } b.exports = d }, {}],
		69: [function(a, b, c) { "use strict"; var d = 30,
				e = 12;
			b.exports = function(a, b) { var c, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
				c = a.state, f = a.next_in, B = a.input, g = f + (a.avail_in - 5), h = a.next_out, C = a.output, i = h - (b - a.avail_out), j = h + (a.avail_out - 257), k = c.dmax, l = c.wsize, m = c.whave, n = c.wnext, o = c.window, p = c.hold, q = c.bits, r = c.lencode, s = c.distcode, t = (1 << c.lenbits) - 1, u = (1 << c.distbits) - 1;
				a: do { q < 15 && (p += B[f++] << q, q += 8, p += B[f++] << q, q += 8), v = r[p & t];
					b: for (;;) { if (w = v >>> 24, p >>>= w, q -= w, w = v >>> 16 & 255, 0 === w) C[h++] = 65535 & v;
						else { if (!(16 & w)) { if (0 === (64 & w)) { v = r[(65535 & v) + (p & (1 << w) - 1)]; continue b } if (32 & w) { c.mode = e; break a } a.msg = "invalid literal/length code", c.mode = d; break a } x = 65535 & v, w &= 15, w && (q < w && (p += B[f++] << q, q += 8), x += p & (1 << w) - 1, p >>>= w, q -= w), q < 15 && (p += B[f++] << q, q += 8, p += B[f++] << q, q += 8), v = s[p & u];
							c: for (;;) { if (w = v >>> 24, p >>>= w, q -= w, w = v >>> 16 & 255, !(16 & w)) { if (0 === (64 & w)) { v = s[(65535 & v) + (p & (1 << w) - 1)]; continue c } a.msg = "invalid distance code", c.mode = d; break a } if (y = 65535 & v, w &= 15, q < w && (p += B[f++] << q, q += 8, q < w && (p += B[f++] << q, q += 8)), y += p & (1 << w) - 1, y > k) { a.msg = "invalid distance too far back", c.mode = d; break a } if (p >>>= w, q -= w, w = h - i, y > w) { if (w = y - w, w > m && c.sane) { a.msg = "invalid distance too far back", c.mode = d; break a } if (z = 0, A = o, 0 === n) { if (z += l - w, w < x) { x -= w;
											do C[h++] = o[z++]; while (--w);
											z = h - y, A = C } } else if (n < w) { if (z += l + n - w, w -= n, w < x) { x -= w;
											do C[h++] = o[z++]; while (--w); if (z = 0, n < x) { w = n, x -= w;
												do C[h++] = o[z++]; while (--w);
												z = h - y, A = C } } } else if (z += n - w, w < x) { x -= w;
										do C[h++] = o[z++]; while (--w);
										z = h - y, A = C } for (; x > 2;) C[h++] = A[z++], C[h++] = A[z++], C[h++] = A[z++], x -= 3;
									x && (C[h++] = A[z++], x > 1 && (C[h++] = A[z++])) } else { z = h - y;
									do C[h++] = C[z++], C[h++] = C[z++], C[h++] = C[z++], x -= 3; while (x > 2);
									x && (C[h++] = C[z++], x > 1 && (C[h++] = C[z++])) } break } } break } } while (f < g && h < j);
				x = q >> 3, f -= x, q -= x << 3, p &= (1 << q) - 1, a.next_in = f, a.next_out = h, a.avail_in = f < g ? 5 + (g - f) : 5 - (f - g), a.avail_out = h < j ? 257 + (j - h) : 257 - (h - j), c.hold = p, c.bits = q } }, {}],
		70: [function(a, b, c) { "use strict";

			function d(a) { return (a >>> 24 & 255) + (a >>> 8 & 65280) + ((65280 & a) << 8) + ((255 & a) << 24) }

			function e() { this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new s.Buf16(320), this.work = new s.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0 }

			function f(a) { var b; return a && a.state ? (b = a.state, a.total_in = a.total_out = b.total = 0, a.msg = "", b.wrap && (a.adler = 1 & b.wrap), b.mode = L, b.last = 0, b.havedict = 0, b.dmax = 32768, b.head = null, b.hold = 0, b.bits = 0, b.lencode = b.lendyn = new s.Buf32(pa), b.distcode = b.distdyn = new s.Buf32(qa), b.sane = 1, b.back = -1, D) : G }

			function g(a) { var b; return a && a.state ? (b = a.state, b.wsize = 0, b.whave = 0, b.wnext = 0, f(a)) : G }

			function h(a, b) { var c, d; return a && a.state ? (d = a.state, b < 0 ? (c = 0, b = -b) : (c = (b >> 4) + 1, b < 48 && (b &= 15)), b && (b < 8 || b > 15) ? G : (null !== d.window && d.wbits !== b && (d.window = null), d.wrap = c, d.wbits = b, g(a))) : G }

			function i(a, b) { var c, d; return a ? (d = new e, a.state = d, d.window = null, c = h(a, b), c !== D && (a.state = null), c) : G }

			function j(a) { return i(a, sa) }

			function k(a) { if (ta) { var b; for (q = new s.Buf32(512), r = new s.Buf32(32), b = 0; b < 144;) a.lens[b++] = 8; for (; b < 256;) a.lens[b++] = 9; for (; b < 280;) a.lens[b++] = 7; for (; b < 288;) a.lens[b++] = 8; for (w(y, a.lens, 0, 288, q, 0, a.work, { bits: 9 }), b = 0; b < 32;) a.lens[b++] = 5;
					w(z, a.lens, 0, 32, r, 0, a.work, { bits: 5 }), ta = !1 } a.lencode = q, a.lenbits = 9, a.distcode = r, a.distbits = 5 }

			function l(a, b, c, d) { var e, f = a.state; return null === f.window && (f.wsize = 1 << f.wbits, f.wnext = 0, f.whave = 0, f.window = new s.Buf8(f.wsize)), d >= f.wsize ? (s.arraySet(f.window, b, c - f.wsize, f.wsize, 0), f.wnext = 0, f.whave = f.wsize) : (e = f.wsize - f.wnext, e > d && (e = d), s.arraySet(f.window, b, c - d, e, f.wnext), d -= e, d ? (s.arraySet(f.window, b, c - d, d, 0), f.wnext = d, f.whave = f.wsize) : (f.wnext += e, f.wnext === f.wsize && (f.wnext = 0), f.whave < f.wsize && (f.whave += e))), 0 }

			function m(a, b) { var c, e, f, g, h, i, j, m, n, o, p, q, r, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa = 0,
					Ba = new s.Buf8(4),
					Ca = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]; if (!a || !a.state || !a.output || !a.input && 0 !== a.avail_in) return G;
				c = a.state, c.mode === W && (c.mode = X), h = a.next_out, f = a.output, j = a.avail_out, g = a.next_in, e = a.input, i = a.avail_in, m = c.hold, n = c.bits, o = i, p = j, xa = D;
				a: for (;;) switch (c.mode) {
					case L:
						if (0 === c.wrap) { c.mode = X; break } for (; n < 16;) { if (0 === i) break a;
							i--, m += e[g++] << n, n += 8 } if (2 & c.wrap && 35615 === m) { c.check = 0, Ba[0] = 255 & m, Ba[1] = m >>> 8 & 255, c.check = u(c.check, Ba, 2, 0), m = 0, n = 0, c.mode = M; break } if (c.flags = 0, c.head && (c.head.done = !1), !(1 & c.wrap) || (((255 & m) << 8) + (m >> 8)) % 31) { a.msg = "incorrect header check", c.mode = ma; break } if ((15 & m) !== K) { a.msg = "unknown compression method", c.mode = ma; break } if (m >>>= 4, n -= 4, wa = (15 & m) + 8, 0 === c.wbits) c.wbits = wa;
						else if (wa > c.wbits) { a.msg = "invalid window size", c.mode = ma; break } c.dmax = 1 << wa, a.adler = c.check = 1, c.mode = 512 & m ? U : W, m = 0, n = 0; break;
					case M:
						for (; n < 16;) { if (0 === i) break a;
							i--, m += e[g++] << n, n += 8 } if (c.flags = m, (255 & c.flags) !== K) { a.msg = "unknown compression method", c.mode = ma; break } if (57344 & c.flags) { a.msg = "unknown header flags set", c.mode = ma; break } c.head && (c.head.text = m >> 8 & 1), 512 & c.flags && (Ba[0] = 255 & m, Ba[1] = m >>> 8 & 255, c.check = u(c.check, Ba, 2, 0)), m = 0, n = 0, c.mode = N;
					case N:
						for (; n < 32;) { if (0 === i) break a;
							i--, m += e[g++] << n, n += 8 } c.head && (c.head.time = m), 512 & c.flags && (Ba[0] = 255 & m, Ba[1] = m >>> 8 & 255, Ba[2] = m >>> 16 & 255, Ba[3] = m >>> 24 & 255, c.check = u(c.check, Ba, 4, 0)), m = 0, n = 0, c.mode = O;
					case O:
						for (; n < 16;) { if (0 === i) break a;
							i--, m += e[g++] << n, n += 8 } c.head && (c.head.xflags = 255 & m, c.head.os = m >> 8), 512 & c.flags && (Ba[0] = 255 & m, Ba[1] = m >>> 8 & 255, c.check = u(c.check, Ba, 2, 0)), m = 0, n = 0, c.mode = P;
					case P:
						if (1024 & c.flags) { for (; n < 16;) { if (0 === i) break a;
								i--, m += e[g++] << n, n += 8 } c.length = m, c.head && (c.head.extra_len = m), 512 & c.flags && (Ba[0] = 255 & m, Ba[1] = m >>> 8 & 255, c.check = u(c.check, Ba, 2, 0)), m = 0, n = 0 } else c.head && (c.head.extra = null);
						c.mode = Q;
					case Q:
						if (1024 & c.flags && (q = c.length, q > i && (q = i), q && (c.head && (wa = c.head.extra_len - c.length, c.head.extra || (c.head.extra = new Array(c.head.extra_len)), s.arraySet(c.head.extra, e, g, q, wa)), 512 & c.flags && (c.check = u(c.check, e, q, g)), i -= q, g += q, c.length -= q), c.length)) break a;
						c.length = 0, c.mode = R;
					case R:
						if (2048 & c.flags) { if (0 === i) break a;
							q = 0;
							do wa = e[g + q++], c.head && wa && c.length < 65536 && (c.head.name += String.fromCharCode(wa)); while (wa && q < i); if (512 & c.flags && (c.check = u(c.check, e, q, g)), i -= q, g += q, wa) break a } else c.head && (c.head.name = null);
						c.length = 0, c.mode = S;
					case S:
						if (4096 & c.flags) { if (0 === i) break a;
							q = 0;
							do wa = e[g + q++], c.head && wa && c.length < 65536 && (c.head.comment += String.fromCharCode(wa)); while (wa && q < i); if (512 & c.flags && (c.check = u(c.check, e, q, g)), i -= q, g += q, wa) break a } else c.head && (c.head.comment = null);
						c.mode = T;
					case T:
						if (512 & c.flags) { for (; n < 16;) { if (0 === i) break a;
								i--, m += e[g++] << n, n += 8 } if (m !== (65535 & c.check)) { a.msg = "header crc mismatch", c.mode = ma; break } m = 0, n = 0 } c.head && (c.head.hcrc = c.flags >> 9 & 1, c.head.done = !0), a.adler = c.check = 0, c.mode = W; break;
					case U:
						for (; n < 32;) { if (0 === i) break a;
							i--, m += e[g++] << n, n += 8 } a.adler = c.check = d(m), m = 0, n = 0, c.mode = V;
					case V:
						if (0 === c.havedict) return a.next_out = h, a.avail_out = j, a.next_in = g, a.avail_in = i, c.hold = m, c.bits = n, F;
						a.adler = c.check = 1, c.mode = W;
					case W:
						if (b === B || b === C) break a;
					case X:
						if (c.last) { m >>>= 7 & n, n -= 7 & n, c.mode = ja; break } for (; n < 3;) { if (0 === i) break a;
							i--, m += e[g++] << n, n += 8 } switch (c.last = 1 & m, m >>>= 1, n -= 1, 3 & m) {
							case 0:
								c.mode = Y; break;
							case 1:
								if (k(c), c.mode = ca, b === C) { m >>>= 2, n -= 2; break a } break;
							case 2:
								c.mode = _; break;
							case 3:
								a.msg = "invalid block type", c.mode = ma } m >>>= 2, n -= 2; break;
					case Y:
						for (m >>>= 7 & n, n -= 7 & n; n < 32;) { if (0 === i) break a;
							i--, m += e[g++] << n, n += 8 } if ((65535 & m) !== (m >>> 16 ^ 65535)) { a.msg = "invalid stored block lengths", c.mode = ma; break } if (c.length = 65535 & m, m = 0, n = 0, c.mode = Z, b === C) break a;
					case Z:
						c.mode = $;
					case $:
						if (q = c.length) { if (q > i && (q = i), q > j && (q = j), 0 === q) break a;
							s.arraySet(f, e, g, q, h), i -= q, g += q, j -= q, h += q, c.length -= q; break } c.mode = W; break;
					case _:
						for (; n < 14;) { if (0 === i) break a;
							i--, m += e[g++] << n, n += 8 } if (c.nlen = (31 & m) + 257, m >>>= 5, n -= 5, c.ndist = (31 & m) + 1, m >>>= 5, n -= 5, c.ncode = (15 & m) + 4, m >>>= 4, n -= 4, c.nlen > 286 || c.ndist > 30) { a.msg = "too many length or distance symbols", c.mode = ma; break } c.have = 0, c.mode = aa;
					case aa:
						for (; c.have < c.ncode;) { for (; n < 3;) { if (0 === i) break a;
								i--, m += e[g++] << n, n += 8 } c.lens[Ca[c.have++]] = 7 & m, m >>>= 3, n -= 3 } for (; c.have < 19;) c.lens[Ca[c.have++]] = 0; if (c.lencode = c.lendyn, c.lenbits = 7, ya = { bits: c.lenbits }, xa = w(x, c.lens, 0, 19, c.lencode, 0, c.work, ya), c.lenbits = ya.bits, xa) { a.msg = "invalid code lengths set", c.mode = ma; break } c.have = 0, c.mode = ba;
					case ba:
						for (; c.have < c.nlen + c.ndist;) { for (; Aa = c.lencode[m & (1 << c.lenbits) - 1], qa = Aa >>> 24, ra = Aa >>> 16 & 255, sa = 65535 & Aa, !(qa <= n);) { if (0 === i) break a;
								i--, m += e[g++] << n, n += 8 } if (sa < 16) m >>>= qa, n -= qa, c.lens[c.have++] = sa;
							else { if (16 === sa) { for (za = qa + 2; n < za;) { if (0 === i) break a;
										i--, m += e[g++] << n, n += 8 } if (m >>>= qa, n -= qa, 0 === c.have) { a.msg = "invalid bit length repeat", c.mode = ma; break } wa = c.lens[c.have - 1], q = 3 + (3 & m), m >>>= 2, n -= 2 } else if (17 === sa) { for (za = qa + 3; n < za;) { if (0 === i) break a;
										i--, m += e[g++] << n, n += 8 } m >>>= qa, n -= qa, wa = 0, q = 3 + (7 & m), m >>>= 3, n -= 3 } else { for (za = qa + 7; n < za;) { if (0 === i) break a;
										i--, m += e[g++] << n, n += 8 } m >>>= qa, n -= qa, wa = 0, q = 11 + (127 & m), m >>>= 7, n -= 7 } if (c.have + q > c.nlen + c.ndist) { a.msg = "invalid bit length repeat", c.mode = ma; break } for (; q--;) c.lens[c.have++] = wa } } if (c.mode === ma) break; if (0 === c.lens[256]) { a.msg = "invalid code -- missing end-of-block", c.mode = ma; break } if (c.lenbits = 9, ya = { bits: c.lenbits }, xa = w(y, c.lens, 0, c.nlen, c.lencode, 0, c.work, ya), c.lenbits = ya.bits, xa) { a.msg = "invalid literal/lengths set", c.mode = ma; break } if (c.distbits = 6, c.distcode = c.distdyn, ya = { bits: c.distbits }, xa = w(z, c.lens, c.nlen, c.ndist, c.distcode, 0, c.work, ya), c.distbits = ya.bits, xa) { a.msg = "invalid distances set", c.mode = ma; break } if (c.mode = ca, b === C) break a;
					case ca:
						c.mode = da;
					case da:
						if (i >= 6 && j >= 258) { a.next_out = h, a.avail_out = j, a.next_in = g, a.avail_in = i, c.hold = m, c.bits = n, v(a, p), h = a.next_out, f = a.output, j = a.avail_out, g = a.next_in, e = a.input, i = a.avail_in, m = c.hold, n = c.bits, c.mode === W && (c.back = -1); break } for (c.back = 0; Aa = c.lencode[m & (1 << c.lenbits) - 1], qa = Aa >>> 24, ra = Aa >>> 16 & 255, sa = 65535 & Aa, !(qa <= n);) { if (0 === i) break a;
							i--, m += e[g++] << n, n += 8 } if (ra && 0 === (240 & ra)) { for (ta = qa, ua = ra, va = sa; Aa = c.lencode[va + ((m & (1 << ta + ua) - 1) >> ta)], qa = Aa >>> 24, ra = Aa >>> 16 & 255, sa = 65535 & Aa, !(ta + qa <= n);) { if (0 === i) break a;
								i--, m += e[g++] << n, n += 8 } m >>>= ta, n -= ta, c.back += ta } if (m >>>= qa, n -= qa, c.back += qa, c.length = sa, 0 === ra) { c.mode = ia; break } if (32 & ra) { c.back = -1, c.mode = W; break } if (64 & ra) { a.msg = "invalid literal/length code", c.mode = ma; break } c.extra = 15 & ra, c.mode = ea;
					case ea:
						if (c.extra) { for (za = c.extra; n < za;) { if (0 === i) break a;
								i--, m += e[g++] << n, n += 8 } c.length += m & (1 << c.extra) - 1, m >>>= c.extra, n -= c.extra, c.back += c.extra } c.was = c.length, c.mode = fa;
					case fa:
						for (; Aa = c.distcode[m & (1 << c.distbits) - 1], qa = Aa >>> 24, ra = Aa >>> 16 & 255, sa = 65535 & Aa, !(qa <= n);) { if (0 === i) break a;
							i--, m += e[g++] << n, n += 8 } if (0 === (240 & ra)) { for (ta = qa, ua = ra, va = sa; Aa = c.distcode[va + ((m & (1 << ta + ua) - 1) >> ta)], qa = Aa >>> 24, ra = Aa >>> 16 & 255, sa = 65535 & Aa, !(ta + qa <= n);) { if (0 === i) break a;
								i--, m += e[g++] << n, n += 8 } m >>>= ta, n -= ta, c.back += ta } if (m >>>= qa, n -= qa, c.back += qa, 64 & ra) { a.msg = "invalid distance code", c.mode = ma; break } c.offset = sa, c.extra = 15 & ra, c.mode = ga;
					case ga:
						if (c.extra) { for (za = c.extra; n < za;) { if (0 === i) break a;
								i--, m += e[g++] << n, n += 8 } c.offset += m & (1 << c.extra) - 1, m >>>= c.extra, n -= c.extra, c.back += c.extra } if (c.offset > c.dmax) { a.msg = "invalid distance too far back", c.mode = ma; break } c.mode = ha;
					case ha:
						if (0 === j) break a; if (q = p - j, c.offset > q) { if (q = c.offset - q, q > c.whave && c.sane) { a.msg = "invalid distance too far back", c.mode = ma; break } q > c.wnext ? (q -= c.wnext, r = c.wsize - q) : r = c.wnext - q, q > c.length && (q = c.length), pa = c.window } else pa = f, r = h - c.offset, q = c.length;
						q > j && (q = j), j -= q, c.length -= q;
						do f[h++] = pa[r++]; while (--q);
						0 === c.length && (c.mode = da); break;
					case ia:
						if (0 === j) break a;
						f[h++] = c.length, j--, c.mode = da; break;
					case ja:
						if (c.wrap) { for (; n < 32;) { if (0 === i) break a;
								i--, m |= e[g++] << n, n += 8 } if (p -= j, a.total_out += p, c.total += p, p && (a.adler = c.check = c.flags ? u(c.check, f, p, h - p) : t(c.check, f, p, h - p)), p = j, (c.flags ? m : d(m)) !== c.check) { a.msg = "incorrect data check", c.mode = ma; break } m = 0, n = 0 } c.mode = ka;
					case ka:
						if (c.wrap && c.flags) { for (; n < 32;) { if (0 === i) break a;
								i--, m += e[g++] << n, n += 8 } if (m !== (4294967295 & c.total)) { a.msg = "incorrect length check", c.mode = ma; break } m = 0, n = 0 } c.mode = la;
					case la:
						xa = E; break a;
					case ma:
						xa = H; break a;
					case na:
						return I;
					case oa:
					default:
						return G }
				return a.next_out = h, a.avail_out = j, a.next_in = g, a.avail_in = i, c.hold = m, c.bits = n, (c.wsize || p !== a.avail_out && c.mode < ma && (c.mode < ja || b !== A)) && l(a, a.output, a.next_out, p - a.avail_out) ? (c.mode = na, I) : (o -= a.avail_in, p -= a.avail_out, a.total_in += o, a.total_out += p, c.total += p, c.wrap && p && (a.adler = c.check = c.flags ? u(c.check, f, p, a.next_out - p) : t(c.check, f, p, a.next_out - p)), a.data_type = c.bits + (c.last ? 64 : 0) + (c.mode === W ? 128 : 0) + (c.mode === ca || c.mode === Z ? 256 : 0), (0 === o && 0 === p || b === A) && xa === D && (xa = J), xa) }

			function n(a) { if (!a || !a.state) return G; var b = a.state; return b.window && (b.window = null), a.state = null, D }

			function o(a, b) { var c; return a && a.state ? (c = a.state, 0 === (2 & c.wrap) ? G : (c.head = b, b.done = !1, D)) : G }

			function p(a, b) { var c, d, e, f = b.length; return a && a.state ? (c = a.state, 0 !== c.wrap && c.mode !== V ? G : c.mode === V && (d = 1, d = t(d, b, f, 0), d !== c.check) ? H : (e = l(a, b, f, f)) ? (c.mode = na, I) : (c.havedict = 1, D)) : G } var q, r, s = a("../utils/common"),
				t = a("./adler32"),
				u = a("./crc32"),
				v = a("./inffast"),
				w = a("./inftrees"),
				x = 0,
				y = 1,
				z = 2,
				A = 4,
				B = 5,
				C = 6,
				D = 0,
				E = 1,
				F = 2,
				G = -2,
				H = -3,
				I = -4,
				J = -5,
				K = 8,
				L = 1,
				M = 2,
				N = 3,
				O = 4,
				P = 5,
				Q = 6,
				R = 7,
				S = 8,
				T = 9,
				U = 10,
				V = 11,
				W = 12,
				X = 13,
				Y = 14,
				Z = 15,
				$ = 16,
				_ = 17,
				aa = 18,
				ba = 19,
				ca = 20,
				da = 21,
				ea = 22,
				fa = 23,
				ga = 24,
				ha = 25,
				ia = 26,
				ja = 27,
				ka = 28,
				la = 29,
				ma = 30,
				na = 31,
				oa = 32,
				pa = 852,
				qa = 592,
				ra = 15,
				sa = ra,
				ta = !0;
			c.inflateReset = g, c.inflateReset2 = h, c.inflateResetKeep = f, c.inflateInit = j, c.inflateInit2 = i, c.inflate = m, c.inflateEnd = n, c.inflateGetHeader = o, c.inflateSetDictionary = p, c.inflateInfo = "pako inflate (from Nodeca project)" }, { "../utils/common": 62, "./adler32": 64, "./crc32": 66, "./inffast": 69, "./inftrees": 71 }],
		71: [function(a, b, c) { "use strict"; var d = a("../utils/common"),
				e = 15,
				f = 852,
				g = 592,
				h = 0,
				i = 1,
				j = 2,
				k = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
				l = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
				m = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
				n = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
			b.exports = function(a, b, c, o, p, q, r, s) { var t, u, v, w, x, y, z, A, B, C = s.bits,
					D = 0,
					E = 0,
					F = 0,
					G = 0,
					H = 0,
					I = 0,
					J = 0,
					K = 0,
					L = 0,
					M = 0,
					N = null,
					O = 0,
					P = new d.Buf16(e + 1),
					Q = new d.Buf16(e + 1),
					R = null,
					S = 0; for (D = 0; D <= e; D++) P[D] = 0; for (E = 0; E < o; E++) P[b[c + E]]++; for (H = C, G = e; G >= 1 && 0 === P[G]; G--); if (H > G && (H = G), 0 === G) return p[q++] = 20971520, p[q++] = 20971520, s.bits = 1, 0; for (F = 1; F < G && 0 === P[F]; F++); for (H < F && (H = F), K = 1, D = 1; D <= e; D++)
					if (K <<= 1, K -= P[D], K < 0) return -1; if (K > 0 && (a === h || 1 !== G)) return -1; for (Q[1] = 0, D = 1; D < e; D++) Q[D + 1] = Q[D] + P[D]; for (E = 0; E < o; E++) 0 !== b[c + E] && (r[Q[b[c + E]]++] = E); if (a === h ? (N = R = r, y = 19) : a === i ? (N = k, O -= 257, R = l, S -= 257, y = 256) : (N = m, R = n, y = -1), M = 0, E = 0, D = F, x = q, I = H, J = 0, v = -1, L = 1 << H, w = L - 1, a === i && L > f || a === j && L > g) return 1; for (;;) { z = D - J, r[E] < y ? (A = 0, B = r[E]) : r[E] > y ? (A = R[S + r[E]], B = N[O + r[E]]) : (A = 96, B = 0), t = 1 << D - J, u = 1 << I, F = u;
					do u -= t, p[x + (M >> J) + u] = z << 24 | A << 16 | B | 0; while (0 !== u); for (t = 1 << D - 1; M & t;) t >>= 1; if (0 !== t ? (M &= t - 1, M += t) : M = 0, E++, 0 === --P[D]) { if (D === G) break;
						D = b[c + r[E]] } if (D > H && (M & w) !== v) { for (0 === J && (J = H), x += F, I = D - J, K = 1 << I; I + J < G && (K -= P[I + J], !(K <= 0));) I++, K <<= 1; if (L += 1 << I, a === i && L > f || a === j && L > g) return 1;
						v = M & w, p[v] = H << 24 | I << 16 | x - q | 0 } } return 0 !== M && (p[x + M] = D - J << 24 | 64 << 16 | 0), s.bits = H, 0 } }, { "../utils/common": 62 }],
		72: [function(a, b, c) { "use strict";
			b.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" } }, {}],
		73: [function(a, b, c) {
			"use strict";

			function d(a) { for (var b = a.length; --b >= 0;) a[b] = 0 }

			function e(a, b, c, d, e) { this.static_tree = a, this.extra_bits = b, this.extra_base = c, this.elems = d, this.max_length = e, this.has_stree = a && a.length }

			function f(a, b) { this.dyn_tree = a, this.max_code = 0, this.stat_desc = b }

			function g(a) { return a < 256 ? ia[a] : ia[256 + (a >>> 7)] }

			function h(a, b) { a.pending_buf[a.pending++] = 255 & b, a.pending_buf[a.pending++] = b >>> 8 & 255 }

			function i(a, b, c) { a.bi_valid > X - c ? (a.bi_buf |= b << a.bi_valid & 65535, h(a, a.bi_buf), a.bi_buf = b >> X - a.bi_valid, a.bi_valid += c - X) : (a.bi_buf |= b << a.bi_valid & 65535, a.bi_valid += c) }

			function j(a, b, c) { i(a, c[2 * b], c[2 * b + 1]) }

			function k(a, b) { var c = 0;
				do c |= 1 & a, a >>>= 1, c <<= 1; while (--b > 0); return c >>> 1 }

			function l(a) { 16 === a.bi_valid ? (h(a, a.bi_buf), a.bi_buf = 0, a.bi_valid = 0) : a.bi_valid >= 8 && (a.pending_buf[a.pending++] = 255 & a.bi_buf, a.bi_buf >>= 8, a.bi_valid -= 8) }

			function m(a, b) {
				var c, d, e, f, g, h, i = b.dyn_tree,
					j = b.max_code,
					k = b.stat_desc.static_tree,
					l = b.stat_desc.has_stree,
					m = b.stat_desc.extra_bits,
					n = b.stat_desc.extra_base,
					o = b.stat_desc.max_length,
					p = 0;
				for (f = 0; f <= W; f++) a.bl_count[f] = 0;
				for (i[2 * a.heap[a.heap_max] + 1] = 0,
					c = a.heap_max + 1; c < V; c++) d = a.heap[c], f = i[2 * i[2 * d + 1] + 1] + 1, f > o && (f = o, p++), i[2 * d + 1] = f, d > j || (a.bl_count[f]++, g = 0, d >= n && (g = m[d - n]), h = i[2 * d], a.opt_len += h * (f + g), l && (a.static_len += h * (k[2 * d + 1] + g)));
				if (0 !== p) { do { for (f = o - 1; 0 === a.bl_count[f];) f--;
						a.bl_count[f]--, a.bl_count[f + 1] += 2, a.bl_count[o]--, p -= 2 } while (p > 0); for (f = o; 0 !== f; f--)
						for (d = a.bl_count[f]; 0 !== d;) e = a.heap[--c], e > j || (i[2 * e + 1] !== f && (a.opt_len += (f - i[2 * e + 1]) * i[2 * e], i[2 * e + 1] = f), d--) }
			}

			function n(a, b, c) { var d, e, f = new Array(W + 1),
					g = 0; for (d = 1; d <= W; d++) f[d] = g = g + c[d - 1] << 1; for (e = 0; e <= b; e++) { var h = a[2 * e + 1];
					0 !== h && (a[2 * e] = k(f[h]++, h)) } }

			function o() { var a, b, c, d, f, g = new Array(W + 1); for (c = 0, d = 0; d < Q - 1; d++)
					for (ka[d] = c, a = 0; a < 1 << ba[d]; a++) ja[c++] = d; for (ja[c - 1] = d, f = 0, d = 0; d < 16; d++)
					for (la[d] = f, a = 0; a < 1 << ca[d]; a++) ia[f++] = d; for (f >>= 7; d < T; d++)
					for (la[d] = f << 7, a = 0; a < 1 << ca[d] - 7; a++) ia[256 + f++] = d; for (b = 0; b <= W; b++) g[b] = 0; for (a = 0; a <= 143;) ga[2 * a + 1] = 8, a++, g[8]++; for (; a <= 255;) ga[2 * a + 1] = 9, a++, g[9]++; for (; a <= 279;) ga[2 * a + 1] = 7, a++, g[7]++; for (; a <= 287;) ga[2 * a + 1] = 8, a++, g[8]++; for (n(ga, S + 1, g), a = 0; a < T; a++) ha[2 * a + 1] = 5, ha[2 * a] = k(a, 5);
				ma = new e(ga, ba, R + 1, S, W), na = new e(ha, ca, 0, T, W), oa = new e(new Array(0), da, 0, U, Y) }

			function p(a) { var b; for (b = 0; b < S; b++) a.dyn_ltree[2 * b] = 0; for (b = 0; b < T; b++) a.dyn_dtree[2 * b] = 0; for (b = 0; b < U; b++) a.bl_tree[2 * b] = 0;
				a.dyn_ltree[2 * Z] = 1, a.opt_len = a.static_len = 0, a.last_lit = a.matches = 0 }

			function q(a) { a.bi_valid > 8 ? h(a, a.bi_buf) : a.bi_valid > 0 && (a.pending_buf[a.pending++] = a.bi_buf), a.bi_buf = 0, a.bi_valid = 0 }

			function r(a, b, c, d) { q(a), d && (h(a, c), h(a, ~c)), G.arraySet(a.pending_buf, a.window, b, c, a.pending), a.pending += c }

			function s(a, b, c, d) { var e = 2 * b,
					f = 2 * c; return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c] }

			function t(a, b, c) { for (var d = a.heap[c], e = c << 1; e <= a.heap_len && (e < a.heap_len && s(b, a.heap[e + 1], a.heap[e], a.depth) && e++, !s(b, d, a.heap[e], a.depth));) a.heap[c] = a.heap[e], c = e, e <<= 1;
				a.heap[c] = d }

			function u(a, b, c) { var d, e, f, h, k = 0; if (0 !== a.last_lit)
					do d = a.pending_buf[a.d_buf + 2 * k] << 8 | a.pending_buf[a.d_buf + 2 * k + 1], e = a.pending_buf[a.l_buf + k], k++, 0 === d ? j(a, e, b) : (f = ja[e], j(a, f + R + 1, b), h = ba[f], 0 !== h && (e -= ka[f], i(a, e, h)), d--, f = g(d), j(a, f, c), h = ca[f], 0 !== h && (d -= la[f], i(a, d, h))); while (k < a.last_lit);
				j(a, Z, b) }

			function v(a, b) { var c, d, e, f = b.dyn_tree,
					g = b.stat_desc.static_tree,
					h = b.stat_desc.has_stree,
					i = b.stat_desc.elems,
					j = -1; for (a.heap_len = 0, a.heap_max = V, c = 0; c < i; c++) 0 !== f[2 * c] ? (a.heap[++a.heap_len] = j = c, a.depth[c] = 0) : f[2 * c + 1] = 0; for (; a.heap_len < 2;) e = a.heap[++a.heap_len] = j < 2 ? ++j : 0, f[2 * e] = 1, a.depth[e] = 0, a.opt_len--, h && (a.static_len -= g[2 * e + 1]); for (b.max_code = j, c = a.heap_len >> 1; c >= 1; c--) t(a, f, c);
				e = i;
				do c = a.heap[1], a.heap[1] = a.heap[a.heap_len--], t(a, f, 1), d = a.heap[1], a.heap[--a.heap_max] = c, a.heap[--a.heap_max] = d, f[2 * e] = f[2 * c] + f[2 * d], a.depth[e] = (a.depth[c] >= a.depth[d] ? a.depth[c] : a.depth[d]) + 1, f[2 * c + 1] = f[2 * d + 1] = e, a.heap[1] = e++, t(a, f, 1); while (a.heap_len >= 2);
				a.heap[--a.heap_max] = a.heap[1], m(a, b), n(f, j, a.bl_count) }

			function w(a, b, c) { var d, e, f = -1,
					g = b[1],
					h = 0,
					i = 7,
					j = 4; for (0 === g && (i = 138, j = 3), b[2 * (c + 1) + 1] = 65535, d = 0; d <= c; d++) e = g, g = b[2 * (d + 1) + 1], ++h < i && e === g || (h < j ? a.bl_tree[2 * e] += h : 0 !== e ? (e !== f && a.bl_tree[2 * e]++, a.bl_tree[2 * $]++) : h <= 10 ? a.bl_tree[2 * _]++ : a.bl_tree[2 * aa]++, h = 0, f = e, 0 === g ? (i = 138, j = 3) : e === g ? (i = 6, j = 3) : (i = 7, j = 4)) }

			function x(a, b, c) { var d, e, f = -1,
					g = b[1],
					h = 0,
					k = 7,
					l = 4; for (0 === g && (k = 138, l = 3), d = 0; d <= c; d++)
					if (e = g, g = b[2 * (d + 1) + 1], !(++h < k && e === g)) { if (h < l) { do j(a, e, a.bl_tree); while (0 !== --h) } else 0 !== e ? (e !== f && (j(a, e, a.bl_tree), h--), j(a, $, a.bl_tree), i(a, h - 3, 2)) : h <= 10 ? (j(a, _, a.bl_tree), i(a, h - 3, 3)) : (j(a, aa, a.bl_tree), i(a, h - 11, 7));
						h = 0, f = e, 0 === g ? (k = 138, l = 3) : e === g ? (k = 6, l = 3) : (k = 7, l = 4) } }

			function y(a) { var b; for (w(a, a.dyn_ltree, a.l_desc.max_code), w(a, a.dyn_dtree, a.d_desc.max_code), v(a, a.bl_desc), b = U - 1; b >= 3 && 0 === a.bl_tree[2 * ea[b] + 1]; b--); return a.opt_len += 3 * (b + 1) + 5 + 5 + 4, b }

			function z(a, b, c, d) { var e; for (i(a, b - 257, 5), i(a, c - 1, 5), i(a, d - 4, 4), e = 0; e < d; e++) i(a, a.bl_tree[2 * ea[e] + 1], 3);
				x(a, a.dyn_ltree, b - 1), x(a, a.dyn_dtree, c - 1) }

			function A(a) { var b, c = 4093624447; for (b = 0; b <= 31; b++, c >>>= 1)
					if (1 & c && 0 !== a.dyn_ltree[2 * b]) return I; if (0 !== a.dyn_ltree[18] || 0 !== a.dyn_ltree[20] || 0 !== a.dyn_ltree[26]) return J; for (b = 32; b < R; b++)
					if (0 !== a.dyn_ltree[2 * b]) return J; return I }

			function B(a) { pa || (o(), pa = !0), a.l_desc = new f(a.dyn_ltree, ma), a.d_desc = new f(a.dyn_dtree, na), a.bl_desc = new f(a.bl_tree, oa), a.bi_buf = 0, a.bi_valid = 0, p(a) }

			function C(a, b, c, d) { i(a, (L << 1) + (d ? 1 : 0), 3), r(a, b, c, !0) }

			function D(a) { i(a, M << 1, 3), j(a, Z, ga), l(a) }

			function E(a, b, c, d) { var e, f, g = 0;
				a.level > 0 ? (a.strm.data_type === K && (a.strm.data_type = A(a)), v(a, a.l_desc), v(a, a.d_desc), g = y(a), e = a.opt_len + 3 + 7 >>> 3, f = a.static_len + 3 + 7 >>> 3, f <= e && (e = f)) : e = f = c + 5, c + 4 <= e && b !== -1 ? C(a, b, c, d) : a.strategy === H || f === e ? (i(a, (M << 1) + (d ? 1 : 0), 3), u(a, ga, ha)) : (i(a, (N << 1) + (d ? 1 : 0), 3), z(a, a.l_desc.max_code + 1, a.d_desc.max_code + 1, g + 1), u(a, a.dyn_ltree, a.dyn_dtree)), p(a), d && q(a) }

			function F(a, b, c) { return a.pending_buf[a.d_buf + 2 * a.last_lit] = b >>> 8 & 255, a.pending_buf[a.d_buf + 2 * a.last_lit + 1] = 255 & b, a.pending_buf[a.l_buf + a.last_lit] = 255 & c, a.last_lit++, 0 === b ? a.dyn_ltree[2 * c]++ : (a.matches++, b--, a.dyn_ltree[2 * (ja[c] + R + 1)]++, a.dyn_dtree[2 * g(b)]++), a.last_lit === a.lit_bufsize - 1 }
			var G = a("../utils/common"),
				H = 4,
				I = 0,
				J = 1,
				K = 2,
				L = 0,
				M = 1,
				N = 2,
				O = 3,
				P = 258,
				Q = 29,
				R = 256,
				S = R + 1 + Q,
				T = 30,
				U = 19,
				V = 2 * S + 1,
				W = 15,
				X = 16,
				Y = 7,
				Z = 256,
				$ = 16,
				_ = 17,
				aa = 18,
				ba = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
				ca = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
				da = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
				ea = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
				fa = 512,
				ga = new Array(2 * (S + 2));
			d(ga);
			var ha = new Array(2 * T);
			d(ha);
			var ia = new Array(fa);
			d(ia);
			var ja = new Array(P - O + 1);
			d(ja);
			var ka = new Array(Q);
			d(ka);
			var la = new Array(T);
			d(la);
			var ma, na, oa, pa = !1;
			c._tr_init = B, c._tr_stored_block = C, c._tr_flush_block = E, c._tr_tally = F, c._tr_align = D
		}, { "../utils/common": 62 }],
		74: [function(a, b, c) { "use strict";

			function d() { this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0 } b.exports = d }, {}]
	}, {}, [10])(10)
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 * @license Use it if you like it
 */

(function(global) {

	function RGBColor(color_string) {
		this.ok = false;

		// strip any leading #
		if (color_string.charAt(0) == '#') { // remove # if any
			color_string = color_string.substr(1, 6);
		}

		color_string = color_string.replace(/ /g, '');
		color_string = color_string.toLowerCase();

		// before getting into regexps, try simple matches
		// and overwrite the input
		var simple_colors = {
			aliceblue: 'f0f8ff',
			antiquewhite: 'faebd7',
			aqua: '00ffff',
			aquamarine: '7fffd4',
			azure: 'f0ffff',
			beige: 'f5f5dc',
			bisque: 'ffe4c4',
			black: '000000',
			blanchedalmond: 'ffebcd',
			blue: '0000ff',
			blueviolet: '8a2be2',
			brown: 'a52a2a',
			burlywood: 'deb887',
			cadetblue: '5f9ea0',
			chartreuse: '7fff00',
			chocolate: 'd2691e',
			coral: 'ff7f50',
			cornflowerblue: '6495ed',
			cornsilk: 'fff8dc',
			crimson: 'dc143c',
			cyan: '00ffff',
			darkblue: '00008b',
			darkcyan: '008b8b',
			darkgoldenrod: 'b8860b',
			darkgray: 'a9a9a9',
			darkgreen: '006400',
			darkkhaki: 'bdb76b',
			darkmagenta: '8b008b',
			darkolivegreen: '556b2f',
			darkorange: 'ff8c00',
			darkorchid: '9932cc',
			darkred: '8b0000',
			darksalmon: 'e9967a',
			darkseagreen: '8fbc8f',
			darkslateblue: '483d8b',
			darkslategray: '2f4f4f',
			darkturquoise: '00ced1',
			darkviolet: '9400d3',
			deeppink: 'ff1493',
			deepskyblue: '00bfff',
			dimgray: '696969',
			dodgerblue: '1e90ff',
			feldspar: 'd19275',
			firebrick: 'b22222',
			floralwhite: 'fffaf0',
			forestgreen: '228b22',
			fuchsia: 'ff00ff',
			gainsboro: 'dcdcdc',
			ghostwhite: 'f8f8ff',
			gold: 'ffd700',
			goldenrod: 'daa520',
			gray: '808080',
			green: '008000',
			greenyellow: 'adff2f',
			honeydew: 'f0fff0',
			hotpink: 'ff69b4',
			indianred: 'cd5c5c',
			indigo: '4b0082',
			ivory: 'fffff0',
			khaki: 'f0e68c',
			lavender: 'e6e6fa',
			lavenderblush: 'fff0f5',
			lawngreen: '7cfc00',
			lemonchiffon: 'fffacd',
			lightblue: 'add8e6',
			lightcoral: 'f08080',
			lightcyan: 'e0ffff',
			lightgoldenrodyellow: 'fafad2',
			lightgrey: 'd3d3d3',
			lightgreen: '90ee90',
			lightpink: 'ffb6c1',
			lightsalmon: 'ffa07a',
			lightseagreen: '20b2aa',
			lightskyblue: '87cefa',
			lightslateblue: '8470ff',
			lightslategray: '778899',
			lightsteelblue: 'b0c4de',
			lightyellow: 'ffffe0',
			lime: '00ff00',
			limegreen: '32cd32',
			linen: 'faf0e6',
			magenta: 'ff00ff',
			maroon: '800000',
			mediumaquamarine: '66cdaa',
			mediumblue: '0000cd',
			mediumorchid: 'ba55d3',
			mediumpurple: '9370d8',
			mediumseagreen: '3cb371',
			mediumslateblue: '7b68ee',
			mediumspringgreen: '00fa9a',
			mediumturquoise: '48d1cc',
			mediumvioletred: 'c71585',
			midnightblue: '191970',
			mintcream: 'f5fffa',
			mistyrose: 'ffe4e1',
			moccasin: 'ffe4b5',
			navajowhite: 'ffdead',
			navy: '000080',
			oldlace: 'fdf5e6',
			olive: '808000',
			olivedrab: '6b8e23',
			orange: 'ffa500',
			orangered: 'ff4500',
			orchid: 'da70d6',
			palegoldenrod: 'eee8aa',
			palegreen: '98fb98',
			paleturquoise: 'afeeee',
			palevioletred: 'd87093',
			papayawhip: 'ffefd5',
			peachpuff: 'ffdab9',
			peru: 'cd853f',
			pink: 'ffc0cb',
			plum: 'dda0dd',
			powderblue: 'b0e0e6',
			purple: '800080',
			red: 'ff0000',
			rosybrown: 'bc8f8f',
			royalblue: '4169e1',
			saddlebrown: '8b4513',
			salmon: 'fa8072',
			sandybrown: 'f4a460',
			seagreen: '2e8b57',
			seashell: 'fff5ee',
			sienna: 'a0522d',
			silver: 'c0c0c0',
			skyblue: '87ceeb',
			slateblue: '6a5acd',
			slategray: '708090',
			snow: 'fffafa',
			springgreen: '00ff7f',
			steelblue: '4682b4',
			tan: 'd2b48c',
			teal: '008080',
			thistle: 'd8bfd8',
			tomato: 'ff6347',
			turquoise: '40e0d0',
			violet: 'ee82ee',
			violetred: 'd02090',
			wheat: 'f5deb3',
			white: 'ffffff',
			whitesmoke: 'f5f5f5',
			yellow: 'ffff00',
			yellowgreen: '9acd32'
		};
		for (var key in simple_colors) {
			if (color_string == key) {
				color_string = simple_colors[key];
			}
		}
		// emd of simple type-in colors

		// array of color definition objects
		var color_defs = [{
			re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
			example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
			process: function(bits) {
				return [
					parseInt(bits[1]),
					parseInt(bits[2]),
					parseInt(bits[3])
				];
			}
		}, {
			re: /^(\w{2})(\w{2})(\w{2})$/,
			example: ['#00ff00', '336699'],
			process: function(bits) {
				return [
					parseInt(bits[1], 16),
					parseInt(bits[2], 16),
					parseInt(bits[3], 16)
				];
			}
		}, {
			re: /^(\w{1})(\w{1})(\w{1})$/,
			example: ['#fb0', 'f0f'],
			process: function(bits) {
				return [
					parseInt(bits[1] + bits[1], 16),
					parseInt(bits[2] + bits[2], 16),
					parseInt(bits[3] + bits[3], 16)
				];
			}
		}];

		// search through the definitions to find a match
		for (var i = 0; i < color_defs.length; i++) {
			var re = color_defs[i].re;
			var processor = color_defs[i].process;
			var bits = re.exec(color_string);
			if (bits) {
				channels = processor(bits);
				this.r = channels[0];
				this.g = channels[1];
				this.b = channels[2];
				this.ok = true;
			}

		}

		// validate/cleanup values
		this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
		this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
		this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);

		// some getters
		this.toRGB = function() {
			return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
		}
		this.toHex = function() {
			var r = this.r.toString(16);
			var g = this.g.toString(16);
			var b = this.b.toString(16);
			if (r.length == 1) r = '0' + r;
			if (g.length == 1) g = '0' + g;
			if (b.length == 1) b = '0' + b;
			return '#' + r + g + b;
		}

		// help
		this.getHelpXML = function() {

			var examples = new Array();
			// add regexps
			for (var i = 0; i < color_defs.length; i++) {
				var example = color_defs[i].example;
				for (var j = 0; j < example.length; j++) {
					examples[examples.length] = example[j];
				}
			}
			// add type-in colors
			for (var sc in simple_colors) {
				examples[examples.length] = sc;
			}

			var xml = document.createElement('ul');
			xml.setAttribute('id', 'rgbcolor-examples');
			for (var i = 0; i < examples.length; i++) {
				try {
					var list_item = document.createElement('li');
					var list_color = new RGBColor(examples[i]);
					var example_div = document.createElement('div');
					example_div.style.cssText =
						'margin: 3px; ' +
						'border: 1px solid black; ' +
						'background:' + list_color.toHex() + '; ' +
						'color:' + list_color.toHex();
					example_div.appendChild(document.createTextNode('test'));
					var list_item_value = document.createTextNode(
						' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex()
					);
					list_item.appendChild(example_div);
					list_item.appendChild(list_item_value);
					xml.appendChild(list_item);

				} catch (e) {}
			}
			return xml;

		}

	}

	// export as AMD...
	if (typeof define !== 'undefined' && define.amd) {
		define(function() { return RGBColor; });
	}

	// ...or as browserify
	else if (typeof module !== 'undefined' && module.exports) {
		module.exports = RGBColor;
	}

	global.RGBColor = RGBColor;

}(typeof window !== 'undefined' ? window : this));

! function(a) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
	else if ("function" == typeof define && define.amd) define([], a);
	else { var b;
		b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.StackBlur = a() } }(function() { return function a(b, c, d) {
		function e(g, h) { if (!c[g]) { if (!b[g]) { var i = "function" == typeof require && require; if (!h && i) return i(g, !0); if (f) return f(g, !0); var j = new Error("Cannot find module '" + g + "'"); throw j.code = "MODULE_NOT_FOUND", j } var k = c[g] = { exports: {} };
				b[g][0].call(k.exports, function(a) { var c = b[g][1][a]; return e(c ? c : a) }, k, k.exports, a, b, c, d) } return c[g].exports } for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]); return e }({ 1: [function(a, b, c) {
			function d(a, b, c, d) { if ("string" == typeof a) var a = document.getElementById(a);
				else if ("undefined" != typeof HTMLImageElement && !a instanceof HTMLImageElement) return; var e = a.naturalWidth,
					g = a.naturalHeight; if ("string" == typeof b) var b = document.getElementById(b);
				else if ("undefined" != typeof HTMLCanvasElement && !b instanceof HTMLCanvasElement) return;
				b.style.width = e + "px", b.style.height = g + "px", b.width = e, b.height = g; var i = b.getContext("2d");
				i.clearRect(0, 0, e, g), i.drawImage(a, 0, 0), isNaN(c) || c < 1 || (d ? f(b, 0, 0, e, g, c) : h(b, 0, 0, e, g, c)) }

			function e(a, b, c, d, e) { if ("string" == typeof a) var a = document.getElementById(a);
				else if ("undefined" != typeof HTMLCanvasElement && !a instanceof HTMLCanvasElement) return; var f, g = a.getContext("2d"); try { try { f = g.getImageData(b, c, d, e) } catch (h) { throw new Error("unable to access local image data: " + h) } } catch (h) { throw new Error("unable to access image data: " + h) } return f }

			function f(a, b, c, d, f, h) { if (!(isNaN(h) || h < 1)) { h |= 0; var i = e(a, b, c, d, f);
					i = g(i, b, c, d, f, h), a.getContext("2d").putImageData(i, b, c) } }

			function g(a, b, c, d, e, f) { var g, h, i, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H = a.data,
					I = f + f + 1,
					J = d - 1,
					K = e - 1,
					L = f + 1,
					M = L * (L + 1) / 2,
					N = new j,
					O = N; for (i = 1; i < I; i++)
					if (O = O.next = new j, i == L) var P = O;
				O.next = N; var Q = null,
					R = null;
				p = o = 0; var S = k[f],
					T = l[f]; for (h = 0; h < e; h++) { for (y = z = A = B = q = r = s = t = 0, u = L * (C = H[o]), v = L * (D = H[o + 1]), w = L * (E = H[o + 2]), x = L * (F = H[o + 3]), q += M * C, r += M * D, s += M * E, t += M * F, O = N, i = 0; i < L; i++) O.r = C, O.g = D, O.b = E, O.a = F, O = O.next; for (i = 1; i < L; i++) m = o + ((J < i ? J : i) << 2), q += (O.r = C = H[m]) * (G = L - i), r += (O.g = D = H[m + 1]) * G, s += (O.b = E = H[m + 2]) * G, t += (O.a = F = H[m + 3]) * G, y += C, z += D, A += E, B += F, O = O.next; for (Q = N, R = P, g = 0; g < d; g++) H[o + 3] = F = t * S >> T, 0 != F ? (F = 255 / F, H[o] = (q * S >> T) * F, H[o + 1] = (r * S >> T) * F, H[o + 2] = (s * S >> T) * F) : H[o] = H[o + 1] = H[o + 2] = 0, q -= u, r -= v, s -= w, t -= x, u -= Q.r, v -= Q.g, w -= Q.b, x -= Q.a, m = p + ((m = g + f + 1) < J ? m : J) << 2, y += Q.r = H[m], z += Q.g = H[m + 1], A += Q.b = H[m + 2], B += Q.a = H[m + 3], q += y, r += z, s += A, t += B, Q = Q.next, u += C = R.r, v += D = R.g, w += E = R.b, x += F = R.a, y -= C, z -= D, A -= E, B -= F, R = R.next, o += 4;
					p += d } for (g = 0; g < d; g++) { for (z = A = B = y = r = s = t = q = 0, o = g << 2, u = L * (C = H[o]), v = L * (D = H[o + 1]), w = L * (E = H[o + 2]), x = L * (F = H[o + 3]), q += M * C, r += M * D, s += M * E, t += M * F, O = N, i = 0; i < L; i++) O.r = C, O.g = D, O.b = E, O.a = F, O = O.next; for (n = d, i = 1; i <= f; i++) o = n + g << 2, q += (O.r = C = H[o]) * (G = L - i), r += (O.g = D = H[o + 1]) * G, s += (O.b = E = H[o + 2]) * G, t += (O.a = F = H[o + 3]) * G, y += C, z += D, A += E, B += F, O = O.next, i < K && (n += d); for (o = g, Q = N, R = P, h = 0; h < e; h++) m = o << 2, H[m + 3] = F = t * S >> T, F > 0 ? (F = 255 / F, H[m] = (q * S >> T) * F, H[m + 1] = (r * S >> T) * F, H[m + 2] = (s * S >> T) * F) : H[m] = H[m + 1] = H[m + 2] = 0, q -= u, r -= v, s -= w, t -= x, u -= Q.r, v -= Q.g, w -= Q.b, x -= Q.a, m = g + ((m = h + L) < K ? m : K) * d << 2, q += y += Q.r = H[m], r += z += Q.g = H[m + 1], s += A += Q.b = H[m + 2], t += B += Q.a = H[m + 3], Q = Q.next, u += C = R.r, v += D = R.g, w += E = R.b, x += F = R.a, y -= C, z -= D, A -= E, B -= F, R = R.next, o += d } return a }

			function h(a, b, c, d, f, g) { if (!(isNaN(g) || g < 1)) { g |= 0; var h = e(a, b, c, d, f);
					h = i(h, b, c, d, f, g), a.getContext("2d").putImageData(h, b, c) } }

			function i(a, b, c, d, e, f) { var g, h, i, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = a.data,
					E = f + f + 1,
					F = d - 1,
					G = e - 1,
					H = f + 1,
					I = H * (H + 1) / 2,
					J = new j,
					K = J; for (i = 1; i < E; i++)
					if (K = K.next = new j, i == H) var L = K;
				K.next = J; var M = null,
					N = null;
				p = o = 0; var O = k[f],
					P = l[f]; for (h = 0; h < e; h++) { for (w = x = y = q = r = s = 0, t = H * (z = D[o]), u = H * (A = D[o + 1]), v = H * (B = D[o + 2]), q += I * z, r += I * A, s += I * B, K = J, i = 0; i < H; i++) K.r = z, K.g = A, K.b = B, K = K.next; for (i = 1; i < H; i++) m = o + ((F < i ? F : i) << 2), q += (K.r = z = D[m]) * (C = H - i), r += (K.g = A = D[m + 1]) * C, s += (K.b = B = D[m + 2]) * C, w += z, x += A, y += B, K = K.next; for (M = J, N = L, g = 0; g < d; g++) D[o] = q * O >> P, D[o + 1] = r * O >> P, D[o + 2] = s * O >> P, q -= t, r -= u, s -= v, t -= M.r, u -= M.g, v -= M.b, m = p + ((m = g + f + 1) < F ? m : F) << 2, w += M.r = D[m], x += M.g = D[m + 1], y += M.b = D[m + 2], q += w, r += x, s += y, M = M.next, t += z = N.r, u += A = N.g, v += B = N.b, w -= z, x -= A, y -= B, N = N.next, o += 4;
					p += d } for (g = 0; g < d; g++) { for (x = y = w = r = s = q = 0, o = g << 2, t = H * (z = D[o]), u = H * (A = D[o + 1]), v = H * (B = D[o + 2]), q += I * z, r += I * A, s += I * B, K = J, i = 0; i < H; i++) K.r = z, K.g = A, K.b = B, K = K.next; for (n = d, i = 1; i <= f; i++) o = n + g << 2, q += (K.r = z = D[o]) * (C = H - i), r += (K.g = A = D[o + 1]) * C, s += (K.b = B = D[o + 2]) * C, w += z, x += A, y += B, K = K.next, i < G && (n += d); for (o = g, M = J, N = L, h = 0; h < e; h++) m = o << 2, D[m] = q * O >> P, D[m + 1] = r * O >> P, D[m + 2] = s * O >> P, q -= t, r -= u, s -= v, t -= M.r, u -= M.g, v -= M.b, m = g + ((m = h + H) < G ? m : G) * d << 2, q += w += M.r = D[m], r += x += M.g = D[m + 1], s += y += M.b = D[m + 2], M = M.next, t += z = N.r, u += A = N.g, v += B = N.b, w -= z, x -= A, y -= B, N = N.next, o += d } return a }

			function j() { this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null } var k = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
				l = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
			b.exports = { image: d, canvasRGBA: f, canvasRGB: h, imageDataRGBA: g, imageDataRGB: i } }, {}] }, {}, [1])(1) });
"use strict";
var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
	function adopt(value) { return value instanceof P ? value : new P(function(resolve) { resolve(value); }); }
	return new(P || (P = Promise))(function(resolve, reject) {
		function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }

		function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }

		function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
};
/*!
=== NOTE ===
This file is generated from source files in https://github.com/forkphorus/forkphorus
Please see the README for more information.

=== LICENSE ===
The MIT License (MIT)

Copyright (c) 2013-2017 Nathan Dinsmore
Copyright (c) 2019-2020 Thomas Weber

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
if (!('Promise' in window)) {
	throw new Error('Browser does not support Promise');
}
var P;
(function(P) {
	var config;
	(function(config) {
		const features = location.search.replace('?', '').split('&');
		config.debug = features.indexOf('debug') > -1;
		config.useWebGL = features.indexOf('webgl') > -1;
		config.supportVideoSensing = features.indexOf('video') > -1;
		config.experimentalOptimizations = features.indexOf('opt') > -1;
		config.scale = window.devicePixelRatio || 1;
		config.PROJECT_API = 'https://projects.scratch.mit.edu/$id';
	})(config = P.config || (P.config = {}));
})(P || (P = {}));
var P;
(function(P) {
	var audio;
	(function(audio) {
		audio.context = (function() {
			if (window.AudioContext) {
				return new AudioContext();
			} else if (window.webkitAudioContext) {
				return new window.webkitAudioContext();
			} else {
				return null;
			}
		})();
		if (audio.context) {
			var volume = 0.5;
			var globalNode = audio.context.createGain();
			globalNode.gain.value = volume;
			globalNode.connect(audio.context.destination);
		}
		audio.drums = [
			{ name: 'SnareDrum', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'Tom', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'SideStick', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'Crash', baseRatio: 0.8908987181403393, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'HiHatOpen', baseRatio: 0.9438743126816935, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'HiHatClosed', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'Tambourine', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'Clap', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'Claves', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'WoodBlock', baseRatio: 0.7491535384383408, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'Cowbell', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'Triangle', baseRatio: 0.8514452780229479, loop: true, loopStart: 0.7638548752834468, loopEnd: 0.7825396825396825, attackEnd: 0, holdEnd: 0, decayEnd: 2 },
			{ name: 'Bongo', baseRatio: 0.5297315471796477, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'Conga', baseRatio: 0.7954545454545454, loop: true, loopStart: 0.1926077097505669, loopEnd: 0.20403628117913833, attackEnd: 0, holdEnd: 0, decayEnd: 2 },
			{ name: 'Cabasa', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'GuiroLong', baseRatio: 0.5946035575013605, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'Vibraslap', baseRatio: 0.8408964152537145, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
			{ name: 'Cuica', baseRatio: 0.7937005259840998, loop: false, loopStart: null, loopEnd: null, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
		];
		audio.instruments = [
			[
				{ top: 38, name: 'AcousticPiano_As3', baseRatio: 0.5316313272700484, loop: true, loopStart: 0.465578231292517, loopEnd: 0.7733786848072562, attackEnd: 0, holdEnd: 0.1, decayEnd: 22.1 },
				{ top: 44, name: 'AcousticPiano_C4', baseRatio: 0.5905141892259927, loop: true, loopStart: 0.6334693877551021, loopEnd: 0.8605442176870748, attackEnd: 0, holdEnd: 0.1, decayEnd: 20.1 },
				{ top: 51, name: 'AcousticPiano_G4', baseRatio: 0.8843582887700535, loop: true, loopStart: 0.5532879818594104, loopEnd: 0.5609977324263039, attackEnd: 0, holdEnd: 0.08, decayEnd: 18.08 },
				{ top: 62, name: 'AcousticPiano_C6', baseRatio: 2.3557692307692304, loop: true, loopStart: 0.5914739229024943, loopEnd: 0.6020861678004535, attackEnd: 0, holdEnd: 0.08, decayEnd: 16.08 },
				{ top: 70, name: 'AcousticPiano_F5', baseRatio: 1.5776515151515151, loop: true, loopStart: 0.5634920634920635, loopEnd: 0.5879818594104308, attackEnd: 0, holdEnd: 0.04, decayEnd: 14.04 },
				{ top: 77, name: 'AcousticPiano_Ds6', baseRatio: 2.800762112139358, loop: true, loopStart: 0.560907029478458, loopEnd: 0.5836281179138322, attackEnd: 0, holdEnd: 0.02, decayEnd: 10.02 },
				{ top: 85, name: 'AcousticPiano_Ds6', baseRatio: 2.800762112139358, loop: true, loopStart: 0.560907029478458, loopEnd: 0.5836281179138322, attackEnd: 0, holdEnd: 0, decayEnd: 8 },
				{ top: 90, name: 'AcousticPiano_Ds6', baseRatio: 2.800762112139358, loop: true, loopStart: 0.560907029478458, loopEnd: 0.5836281179138322, attackEnd: 0, holdEnd: 0, decayEnd: 6 },
				{ top: 96, name: 'AcousticPiano_D7', baseRatio: 5.275119617224881, loop: true, loopStart: 0.3380498866213152, loopEnd: 0.34494331065759637, attackEnd: 0, holdEnd: 0, decayEnd: 3 },
				{ top: 128, name: 'AcousticPiano_D7', baseRatio: 5.275119617224881, loop: true, loopStart: 0.3380498866213152, loopEnd: 0.34494331065759637, attackEnd: 0, holdEnd: 0, decayEnd: 2 }
			],
			[
				{ top: 48, name: 'ElectricPiano_C2', baseRatio: 0.14870515241435123, loop: true, loopStart: 0.6956009070294784, loopEnd: 0.7873015873015873, attackEnd: 0, holdEnd: 0.08, decayEnd: 10.08 },
				{ top: 74, name: 'ElectricPiano_C4', baseRatio: 0.5945685670261941, loop: true, loopStart: 0.5181859410430839, loopEnd: 0.5449433106575964, attackEnd: 0, holdEnd: 0.04, decayEnd: 8.04 },
				{ top: 128, name: 'ElectricPiano_C4', baseRatio: 0.5945685670261941, loop: true, loopStart: 0.5181859410430839, loopEnd: 0.5449433106575964, attackEnd: 0, holdEnd: 0, decayEnd: 6 }
			],
			[
				{ top: 128, name: 'Organ_G2', baseRatio: 0.22283731584620914, loop: true, loopStart: 0.05922902494331066, loopEnd: 0.1510204081632653, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[{ top: 40, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 15 },
				{ top: 56, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 13.5 },
				{ top: 60, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 12 },
				{ top: 67, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 8.5 },
				{ top: 72, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 7 },
				{ top: 83, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 5.5 },
				{ top: 128, name: 'AcousticGuitar_F3', baseRatio: 0.3977272727272727, loop: true, loopStart: 1.6628117913832199, loopEnd: 1.6685260770975057, attackEnd: 0, holdEnd: 0, decayEnd: 4.5 }
			],
			[
				{ top: 40, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358, attackEnd: 0, holdEnd: 0, decayEnd: 15 },
				{ top: 56, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 13.5 },
				{ top: 60, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 12 },
				{ top: 67, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 8.5 },
				{ top: 72, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 7 },
				{ top: 83, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 5.5 },
				{ top: 128, name: 'ElectricGuitar_F3', baseRatio: 0.39615522817103843, loop: true, loopStart: 1.5733333333333333, loopEnd: 1.5848072562358277, attackEnd: 0, holdEnd: 0, decayEnd: 4.5 }
			],
			[
				{ top: 34, name: 'ElectricBass_G1', baseRatio: 0.11111671034065712, loop: true, loopStart: 1.9007709750566892, loopEnd: 1.9212244897959183, attackEnd: 0, holdEnd: 0, decayEnd: 17 },
				{ top: 48, name: 'ElectricBass_G1', baseRatio: 0.11111671034065712, loop: true, loopStart: 1.9007709750566892, loopEnd: 1.9212244897959183, attackEnd: 0, holdEnd: 0, decayEnd: 14 },
				{ top: 64, name: 'ElectricBass_G1', baseRatio: 0.11111671034065712, loop: true, loopStart: 1.9007709750566892, loopEnd: 1.9212244897959183, attackEnd: 0, holdEnd: 0, decayEnd: 12 },
				{ top: 128, name: 'ElectricBass_G1', baseRatio: 0.11111671034065712, loop: true, loopStart: 1.9007709750566892, loopEnd: 1.9212244897959183, attackEnd: 0, holdEnd: 0, decayEnd: 10 }
			],
			[
				{ top: 38, name: 'Pizz_G2', baseRatio: 0.21979665071770335, loop: true, loopStart: 0.3879365079365079, loopEnd: 0.3982766439909297, attackEnd: 0, holdEnd: 0, decayEnd: 5 },
				{ top: 45, name: 'Pizz_G2', baseRatio: 0.21979665071770335, loop: true, loopStart: 0.3879365079365079, loopEnd: 0.3982766439909297, attackEnd: 0, holdEnd: 0.012, decayEnd: 4.012 },
				{ top: 56, name: 'Pizz_A3', baseRatio: 0.503654636820466, loop: true, loopStart: 0.5197278911564626, loopEnd: 0.5287528344671202, attackEnd: 0, holdEnd: 0, decayEnd: 4 },
				{ top: 64, name: 'Pizz_A3', baseRatio: 0.503654636820466, loop: true, loopStart: 0.5197278911564626, loopEnd: 0.5287528344671202, attackEnd: 0, holdEnd: 0, decayEnd: 3.2 },
				{ top: 72, name: 'Pizz_E4', baseRatio: 0.7479647218453188, loop: true, loopStart: 0.7947845804988662, loopEnd: 0.7978231292517007, attackEnd: 0, holdEnd: 0, decayEnd: 2.8 },
				{ top: 80, name: 'Pizz_E4', baseRatio: 0.7479647218453188, loop: true, loopStart: 0.7947845804988662, loopEnd: 0.7978231292517007, attackEnd: 0, holdEnd: 0, decayEnd: 2.2 },
				{ top: 128, name: 'Pizz_E4', baseRatio: 0.7479647218453188, loop: true, loopStart: 0.7947845804988662, loopEnd: 0.7978231292517007, attackEnd: 0, holdEnd: 0, decayEnd: 1.5 }
			],
			[
				{ top: 41, name: 'Cello_C2', baseRatio: 0.14870515241435123, loop: true, loopStart: 0.3876643990929705, loopEnd: 0.40294784580498866, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 52, name: 'Cello_As2', baseRatio: 0.263755980861244, loop: true, loopStart: 0.3385487528344671, loopEnd: 0.35578231292517004, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 62, name: 'Violin_D4', baseRatio: 0.6664047388781432, loop: true, loopStart: 0.48108843537414964, loopEnd: 0.5151927437641723, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 75, name: 'Violin_A4', baseRatio: 0.987460815047022, loop: true, loopStart: 0.14108843537414967, loopEnd: 0.15029478458049886, attackEnd: 0.07, holdEnd: 0.07, decayEnd: 0.07 },
				{ top: 128, name: 'Violin_E5', baseRatio: 1.4885238523852387, loop: true, loopStart: 0.10807256235827664, loopEnd: 0.1126530612244898, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[
				{ top: 30, name: 'BassTrombone_A2_3', baseRatio: 0.24981872564125807, loop: true, loopStart: 0.061541950113378686, loopEnd: 0.10702947845804989, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 40, name: 'BassTrombone_A2_2', baseRatio: 0.24981872564125807, loop: true, loopStart: 0.08585034013605441, loopEnd: 0.13133786848072562, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 55, name: 'Trombone_B3', baseRatio: 0.5608240680183126, loop: true, loopStart: 0.12, loopEnd: 0.17673469387755103, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 88, name: 'Trombone_B3', baseRatio: 0.5608240680183126, loop: true, loopStart: 0.12, loopEnd: 0.17673469387755103, attackEnd: 0.05, holdEnd: 0.05, decayEnd: 0.05 },
				{ top: 128, name: 'Trumpet_E5', baseRatio: 1.4959294436906376, loop: true, loopStart: 0.1307936507936508, loopEnd: 0.14294784580498865, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[
				{ top: 128, name: 'Clarinet_C4', baseRatio: 0.5940193965517241, loop: true, loopStart: 0.6594104308390023, loopEnd: 0.7014965986394558, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[
				{ top: 40, name: 'TenorSax_C3', baseRatio: 0.2971698113207547, loop: true, loopStart: 0.4053968253968254, loopEnd: 0.4895238095238095, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 50, name: 'TenorSax_C3', baseRatio: 0.2971698113207547, loop: true, loopStart: 0.4053968253968254, loopEnd: 0.4895238095238095, attackEnd: 0.02, holdEnd: 0.02, decayEnd: 0.02 },
				{ top: 59, name: 'TenorSax_C3', baseRatio: 0.2971698113207547, loop: true, loopStart: 0.4053968253968254, loopEnd: 0.4895238095238095, attackEnd: 0.04, holdEnd: 0.04, decayEnd: 0.04 },
				{ top: 67, name: 'AltoSax_A3', baseRatio: 0.49814747876378096, loop: true, loopStart: 0.3875736961451247, loopEnd: 0.4103854875283447, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 75, name: 'AltoSax_A3', baseRatio: 0.49814747876378096, loop: true, loopStart: 0.3875736961451247, loopEnd: 0.4103854875283447, attackEnd: 0.02, holdEnd: 0.02, decayEnd: 0.02 },
				{ top: 80, name: 'AltoSax_A3', baseRatio: 0.49814747876378096, loop: true, loopStart: 0.3875736961451247, loopEnd: 0.4103854875283447, attackEnd: 0.02, holdEnd: 0.02, decayEnd: 0.02 },
				{ top: 128, name: 'AltoSax_C6', baseRatio: 2.3782742681047764, loop: true, loopStart: 0.05705215419501134, loopEnd: 0.0838095238095238, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[
				{ top: 61, name: 'Flute_B5_2', baseRatio: 2.255113636363636, loop: true, loopStart: 0.08430839002267573, loopEnd: 0.10244897959183673, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 128, name: 'Flute_B5_1', baseRatio: 2.255113636363636, loop: true, loopStart: 0.10965986394557824, loopEnd: 0.12780045351473923, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[
				{ top: 128, name: 'WoodenFlute_C5', baseRatio: 1.1892952324548416, loop: true, loopStart: 0.5181859410430839, loopEnd: 0.7131065759637188, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[
				{ top: 57, name: 'Bassoon_C3', baseRatio: 0.29700969827586204, loop: true, loopStart: 0.11011337868480725, loopEnd: 0.19428571428571428, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 67, name: 'Bassoon_C3', baseRatio: 0.29700969827586204, loop: true, loopStart: 0.11011337868480725, loopEnd: 0.19428571428571428, attackEnd: 0.04, holdEnd: 0.04, decayEnd: 0.04 },
				{ top: 76, name: 'Bassoon_C3', baseRatio: 0.29700969827586204, loop: true, loopStart: 0.11011337868480725, loopEnd: 0.19428571428571428, attackEnd: 0.08, holdEnd: 0.08, decayEnd: 0.08 },
				{ top: 84, name: 'EnglishHorn_F3', baseRatio: 0.39601293103448276, loop: true, loopStart: 0.341859410430839, loopEnd: 0.4049886621315193, attackEnd: 0.04, holdEnd: 0.04, decayEnd: 0.04 },
				{ top: 128, name: 'EnglishHorn_D4', baseRatio: 0.6699684005833739, loop: true, loopStart: 0.22027210884353743, loopEnd: 0.23723356009070296, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[
				{ top: 39, name: 'Choir_F3', baseRatio: 0.3968814788643197, loop: true, loopStart: 0.6352380952380953, loopEnd: 1.8721541950113378, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 50, name: 'Choir_F3', baseRatio: 0.3968814788643197, loop: true, loopStart: 0.6352380952380953, loopEnd: 1.8721541950113378, attackEnd: 0.04, holdEnd: 0.04, decayEnd: 0.04 },
				{ top: 61, name: 'Choir_F3', baseRatio: 0.3968814788643197, loop: true, loopStart: 0.6352380952380953, loopEnd: 1.8721541950113378, attackEnd: 0.06, holdEnd: 0.06, decayEnd: 0.06 },
				{ top: 72, name: 'Choir_F4', baseRatio: 0.7928898424161845, loop: true, loopStart: 0.7415419501133786, loopEnd: 2.1059410430839, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 128, name: 'Choir_F5', baseRatio: 1.5879576065654504, loop: true, loopStart: 0.836281179138322, loopEnd: 2.0585487528344673, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[
				{ top: 38, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0.1, decayEnd: 8.1 },
				{ top: 48, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0.1, decayEnd: 7.6 },
				{ top: 59, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0.06, decayEnd: 7.06 },
				{ top: 70, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0.04, decayEnd: 6.04 },
				{ top: 78, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0.02, decayEnd: 5.02 },
				{ top: 86, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0, decayEnd: 4 },
				{ top: 128, name: 'Vibraphone_C3', baseRatio: 0.29829545454545453, loop: true, loopStart: 0.2812698412698413, loopEnd: 0.28888888888888886, attackEnd: 0, holdEnd: 0, decayEnd: 3 }
			],
			[
				{ top: 128, name: 'MusicBox_C4', baseRatio: 0.5937634640241276, loop: true, loopStart: 0.6475283446712018, loopEnd: 0.6666666666666666, attackEnd: 0, holdEnd: 0, decayEnd: 2 }
			],
			[
				{ top: 128, name: 'SteelDrum_D5', baseRatio: 1.3660402567543959, loop: false, loopStart: -0.000045351473922902495, loopEnd: -0.000045351473922902495, attackEnd: 0, holdEnd: 0, decayEnd: 2 }
			],
			[
				{ top: 128, name: 'Marimba_C4', baseRatio: 0.5946035575013605, loop: false, loopStart: -0.000045351473922902495, loopEnd: -0.000045351473922902495, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[
				{ top: 80, name: 'SynthLead_C4', baseRatio: 0.5942328422565577, loop: true, loopStart: 0.006122448979591836, loopEnd: 0.06349206349206349, attackEnd: 0, holdEnd: 0, decayEnd: 0 },
				{ top: 128, name: 'SynthLead_C6', baseRatio: 2.3760775862068964, loop: true, loopStart: 0.005623582766439909, loopEnd: 0.01614512471655329, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			],
			[
				{ top: 38, name: 'SynthPad_A3', baseRatio: 0.4999105065330231, loop: true, loopStart: 0.1910204081632653, loopEnd: 3.9917006802721087, attackEnd: 0.05, holdEnd: 0.05, decayEnd: 0.05 },
				{ top: 50, name: 'SynthPad_A3', baseRatio: 0.4999105065330231, loop: true, loopStart: 0.1910204081632653, loopEnd: 3.9917006802721087, attackEnd: 0.08, holdEnd: 0.08, decayEnd: 0.08 },
				{ top: 62, name: 'SynthPad_A3', baseRatio: 0.4999105065330231, loop: true, loopStart: 0.1910204081632653, loopEnd: 3.9917006802721087, attackEnd: 0.11, holdEnd: 0.11, decayEnd: 0.11 },
				{ top: 74, name: 'SynthPad_A3', baseRatio: 0.4999105065330231, loop: true, loopStart: 0.1910204081632653, loopEnd: 3.9917006802721087, attackEnd: 0.15, holdEnd: 0.15, decayEnd: 0.15 },
				{ top: 86, name: 'SynthPad_A3', baseRatio: 0.4999105065330231, loop: true, loopStart: 0.1910204081632653, loopEnd: 3.9917006802721087, attackEnd: 0.2, holdEnd: 0.2, decayEnd: 0.2 },
				{ top: 128, name: 'SynthPad_C6', baseRatio: 2.3820424708835755, loop: true, loopStart: 0.11678004535147392, loopEnd: 0.41732426303854875, attackEnd: 0, holdEnd: 0, decayEnd: 0 }
			]
		];
		const SB2_SOUNDBANK_FILES = {
			'AcousticGuitar_F3': 'sb2/instruments/AcousticGuitar_F3_22k.wav',
			'AcousticPiano_As3': 'sb2/instruments/AcousticPiano(5)_A%233_22k.wav',
			'AcousticPiano_C4': 'sb2/instruments/AcousticPiano(5)_C4_22k.wav',
			'AcousticPiano_G4': 'sb2/instruments/AcousticPiano(5)_G4_22k.wav',
			'AcousticPiano_F5': 'sb2/instruments/AcousticPiano(5)_F5_22k.wav',
			'AcousticPiano_C6': 'sb2/instruments/AcousticPiano(5)_C6_22k.wav',
			'AcousticPiano_Ds6': 'sb2/instruments/AcousticPiano(5)_D%236_22k.wav',
			'AcousticPiano_D7': 'sb2/instruments/AcousticPiano(5)_D7_22k.wav',
			'AltoSax_A3': 'sb2/instruments/AltoSax_A3_22K.wav',
			'AltoSax_C6': 'sb2/instruments/AltoSax(3)_C6_22k.wav',
			'Bassoon_C3': 'sb2/instruments/Bassoon_C3_22k.wav',
			'BassTrombone_A2_2': 'sb2/instruments/BassTrombone_A2(2)_22k.wav',
			'BassTrombone_A2_3': 'sb2/instruments/BassTrombone_A2(3)_22k.wav',
			'Cello_C2': 'sb2/instruments/Cello(3b)_C2_22k.wav',
			'Cello_As2': 'sb2/instruments/Cello(3)_A%232_22k.wav',
			'Choir_F3': 'sb2/instruments/Choir(4)_F3_22k.wav',
			'Choir_F4': 'sb2/instruments/Choir(4)_F4_22k.wav',
			'Choir_F5': 'sb2/instruments/Choir(4)_F5_22k.wav',
			'Clarinet_C4': 'sb2/instruments/Clarinet_C4_22k.wav',
			'ElectricBass_G1': 'sb2/instruments/ElectricBass(2)_G1_22k.wav',
			'ElectricGuitar_F3': 'sb2/instruments/ElectricGuitar(2)_F3(1)_22k.wav',
			'ElectricPiano_C2': 'sb2/instruments/ElectricPiano_C2_22k.wav',
			'ElectricPiano_C4': 'sb2/instruments/ElectricPiano_C4_22k.wav',
			'EnglishHorn_D4': 'sb2/instruments/EnglishHorn(1)_D4_22k.wav',
			'EnglishHorn_F3': 'sb2/instruments/EnglishHorn(1)_F3_22k.wav',
			'Flute_B5_1': 'sb2/instruments/Flute(3)_B5(1)_22k.wav',
			'Flute_B5_2': 'sb2/instruments/Flute(3)_B5(2)_22k.wav',
			'Marimba_C4': 'sb2/instruments/Marimba_C4_22k.wav',
			'MusicBox_C4': 'sb2/instruments/MusicBox_C4_22k.wav',
			'Organ_G2': 'sb2/instruments/Organ(2)_G2_22k.wav',
			'Pizz_A3': 'sb2/instruments/Pizz(2)_A3_22k.wav',
			'Pizz_E4': 'sb2/instruments/Pizz(2)_E4_22k.wav',
			'Pizz_G2': 'sb2/instruments/Pizz(2)_G2_22k.wav',
			'SteelDrum_D5': 'sb2/instruments/SteelDrum_D5_22k.wav',
			'SynthLead_C4': 'sb2/instruments/SynthLead(6)_C4_22k.wav',
			'SynthLead_C6': 'sb2/instruments/SynthLead(6)_C6_22k.wav',
			'SynthPad_A3': 'sb2/instruments/SynthPad(2)_A3_22k.wav',
			'SynthPad_C6': 'sb2/instruments/SynthPad(2)_C6_22k.wav',
			'TenorSax_C3': 'sb2/instruments/TenorSax(1)_C3_22k.wav',
			'Trombone_B3': 'sb2/instruments/Trombone_B3_22k.wav',
			'Trumpet_E5': 'sb2/instruments/Trumpet_E5_22k.wav',
			'Vibraphone_C3': 'sb2/instruments/Vibraphone_C3_22k.wav',
			'Violin_D4': 'sb2/instruments/Violin(2)_D4_22K.wav',
			'Violin_A4': 'sb2/instruments/Violin(3)_A4_22k.wav',
			'Violin_E5': 'sb2/instruments/Violin(3b)_E5_22k.wav',
			'WoodenFlute_C5': 'sb2/instruments/WoodenFlute_C5_22k.wav',
			'BassDrum': 'sb2/drums/BassDrum(1b)_22k.wav',
			'Bongo': 'sb2/drums/Bongo_22k.wav',
			'Cabasa': 'sb2/drums/Cabasa(1)_22k.wav',
			'Clap': 'sb2/drums/Clap(1)_22k.wav',
			'Claves': 'sb2/drums/Claves(1)_22k.wav',
			'Conga': 'sb2/drums/Conga(1)_22k.wav',
			'Cowbell': 'sb2/drums/Cowbell(3)_22k.wav',
			'Crash': 'sb2/drums/Crash(2)_22k.wav',
			'Cuica': 'sb2/drums/Cuica(2)_22k.wav',
			'GuiroLong': 'sb2/drums/GuiroLong(1)_22k.wav',
			'GuiroShort': 'sb2/drums/GuiroShort(1)_22k.wav',
			'HiHatClosed': 'sb2/drums/HiHatClosed(1)_22k.wav',
			'HiHatOpen': 'sb2/drums/HiHatOpen(2)_22k.wav',
			'HiHatPedal': 'sb2/drums/HiHatPedal(1)_22k.wav',
			'Maracas': 'sb2/drums/Maracas(1)_22k.wav',
			'SideStick': 'sb2/drums/SideStick(1)_22k.wav',
			'SnareDrum': 'sb2/drums/SnareDrum(1)_22k.wav',
			'Tambourine': 'sb2/drums/Tambourine(3)_22k.wav',
			'Tom': 'sb2/drums/Tom(1)_22k.wav',
			'Triangle': 'sb2/drums/Triangle(1)_22k.wav',
			'Vibraslap': 'sb2/drums/Vibraslap(1)_22k.wav',
			'WoodBlock': 'sb2/drums/WoodBlock(1)_22k.wav'
		};
		const soundbank = {};

		function loadSoundbankSB2(loader) {
			if (!audio.context)
				return Promise.resolve();
			const promises = [];
			for (const name in SB2_SOUNDBANK_FILES) {
				if (!soundbank[name]) {
					const promise = P.utils.settled(loadSoundbankBuffer(name));
					promises.push(promise);
					if (loader) {
						loader.addTask(new P.io.PromiseTask(promise));
					}
				}
			}
			return Promise.all(promises);
		}
		audio.loadSoundbankSB2 = loadSoundbankSB2;

		function loadSoundbankBuffer(name) {
			return P.io.getAssetManager().loadSoundbankFile(SB2_SOUNDBANK_FILES[name])
				.then((buffer) => P.audio.decodeAudio(buffer))
				.then((sound) => soundbank[name] = sound);
		}

		function playSpan(span, key, duration, connection) {
			if (!audio.context) {
				throw new Error('Cannot playSpan without an AudioContext');
			}
			const buffer = soundbank[span.name];
			if (!buffer) {
				throw new Error('No soundbank entry named: ' + span.name);
			}
			const source = audio.context.createBufferSource();
			const note = audio.context.createGain();
			source.buffer = buffer;
			if (source.loop = span.loop) {
				source.loopStart = span.loopStart;
				source.loopEnd = span.loopEnd;
			}
			source.connect(note);
			note.connect(connection);
			const time = audio.context.currentTime;
			source.playbackRate.value = Math.pow(2, (key - 69) / 12) / span.baseRatio;
			const gain = note.gain;
			gain.value = 0;
			gain.setValueAtTime(0, time);
			if (span.attackEnd < duration) {
				gain.linearRampToValueAtTime(1, time + span.attackEnd);
				if (span.decayTime > 0 && span.holdEnd < duration) {
					gain.linearRampToValueAtTime(1, time + span.holdEnd);
					if (span.decayEnd < duration) {
						gain.linearRampToValueAtTime(0, time + span.decayEnd);
					} else {
						gain.linearRampToValueAtTime(1 - (duration - span.holdEnd) / span.decayTime, time + duration);
					}
				} else {
					gain.linearRampToValueAtTime(1, time + duration);
				}
			} else {
				gain.linearRampToValueAtTime(1, time + duration);
			}
			gain.linearRampToValueAtTime(0, time + duration + 0.02267573696);
			source.start(time);
			source.stop(time + duration + 0.02267573696);
			return source;
		}
		audio.playSpan = playSpan;

		function connectNode(node) {
			node.connect(globalNode);
		}
		audio.connectNode = connectNode;
		const ADPCM_STEPS = [
			7, 8, 9, 10, 11, 12, 13, 14, 16, 17,
			19, 21, 23, 25, 28, 31, 34, 37, 41, 45,
			50, 55, 60, 66, 73, 80, 88, 97, 107, 118,
			130, 143, 157, 173, 190, 209, 230, 253, 279, 307,
			337, 371, 408, 449, 494, 544, 598, 658, 724, 796,
			876, 963, 1060, 1166, 1282, 1411, 1552, 1707, 1878, 2066,
			2272, 2499, 2749, 3024, 3327, 3660, 4026, 4428, 4871, 5358,
			5894, 6484, 7132, 7845, 8630, 9493, 10442, 11487, 12635, 13899,
			15289, 16818, 18500, 20350, 22385, 24623, 27086, 29794, 32767,
		];
		const ADPCM_INDEX = [-1, -1, -1, -1, 2, 4, 6, 8, -1, -1, -1, -1, 2, 4, 6, 8];

		function decodeADPCMAudio(ab, cb) {
			var dv = new DataView(ab);
			if (dv.getUint32(0) !== 0x52494646 || dv.getUint32(8) !== 0x57415645) {
				return cb(new Error('Unrecognized audio format'));
			}
			var blocks = {};
			var i = 12,
				l = dv.byteLength - 8;
			while (i < l) {
				blocks[String.fromCharCode(dv.getUint8(i), dv.getUint8(i + 1), dv.getUint8(i + 2), dv.getUint8(i + 3))] = i;
				i += 8 + dv.getUint32(i + 4, true);
			}
			var format = dv.getUint16(20, true);
			var channels = dv.getUint16(22, true);
			var sampleRate = dv.getUint32(24, true);
			var byteRate = dv.getUint32(28, true);
			var blockAlign = dv.getUint16(32, true);
			var bitsPerSample = dv.getUint16(34, true);
			if (format === 17) {
				var samplesPerBlock = dv.getUint16(38, true);
				var blockSize = ((samplesPerBlock - 1) / 2) + 4;
				var frameCount = dv.getUint32(blocks.fact + 8, true);
				var buffer = audio.context.createBuffer(1, frameCount, sampleRate);
				var channel = buffer.getChannelData(0);
				var sample, index = 0;
				var step, code, delta;
				var lastByte = -1;
				var offset = blocks.data + 8;
				i = offset;
				var j = 0;
				while (true) {
					if ((((i - offset) % blockSize) == 0) && (lastByte < 0)) {
						if (i >= dv.byteLength)
							break;
						sample = dv.getInt16(i, true);
						i += 2;
						index = dv.getUint8(i);
						i += 1;
						i++;
						if (index > 88)
							index = 88;
						channel[j++] = sample / 32767;
					} else {
						if (lastByte < 0) {
							if (i >= dv.byteLength)
								break;
							lastByte = dv.getUint8(i);
							i += 1;
							code = lastByte & 0xf;
						} else {
							code = (lastByte >> 4) & 0xf;
							lastByte = -1;
						}
						step = ADPCM_STEPS[index];
						delta = 0;
						if (code & 4)
							delta += step;
						if (code & 2)
							delta += step >> 1;
						if (code & 1)
							delta += step >> 2;
						delta += step >> 3;
						index += ADPCM_INDEX[code];
						if (index > 88)
							index = 88;
						if (index < 0)
							index = 0;
						sample += (code & 8) ? -delta : delta;
						if (sample > 32767)
							sample = 32767;
						if (sample < -32768)
							sample = -32768;
						channel[j++] = sample / 32768;
					}
				}
				return cb(null, buffer);
			}
			cb(new Error('Unrecognized WAV format ' + format));
		}

		function decodeAudio(ab) {
			if (!audio.context) {
				return Promise.reject('No audio context');
			}
			return new Promise((resolve, reject) => {
				decodeADPCMAudio(ab, function(err1, buffer) {
					if (buffer) {
						resolve(buffer);
						return;
					}
					audio.context.decodeAudioData(ab, function(buffer) {
						resolve(buffer);
					}, function(err2) {
						reject(`Could not decode audio: ${err1} | ${err2}`);
					});
				});
			});
		}
		audio.decodeAudio = decodeAudio;
	})(audio = P.audio || (P.audio = {}));
})(P || (P = {}));
var P;
(function(P) {
	var core;
	(function(core) {;
		class PenColor {
			constructor() {
				this.x = 0;
				this.y = 0;
				this.z = 255;
				this.a = 1;
				this.mode = 0;
				this.css = 'rgba(0, 0, 255, 1)';
			}
			setRGBA(rgba) {
				this.x = rgba >> 16 & 0xff;
				this.y = rgba >> 8 & 0xff;
				this.z = rgba & 0xff;
				this.a = (rgba >> 24 & 0xff) / 0xff || 1;
				this.css = 'rgba(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.a + ')';
				this.mode = 0;
			}
			toHSLA() {
				switch (this.mode) {
					case 0:
						{
							this.mode = 1;
							const hsl = P.utils.rgbToHSL(this.x, this.y, this.z);
							this.x = hsl[0];
							this.y = hsl[1] * 100;
							this.z = hsl[2] * 100;
							break;
						}
					case 2:
						{
							this.mode = 1;
							const hsl = P.utils.hsvToHSL(this.x, this.y / 100, this.z / 100);
							this.x = hsl[0];
							this.y = hsl[1] * 100;
							this.z = hsl[2] * 100;
							break;
						}
				}
			}
			toHSVA() {
				switch (this.mode) {
					case 0:
						{
							this.mode = 2;
							const hsv = P.utils.rgbToHSV(this.x, this.y, this.z);
							this.x = hsv[0];
							this.y = hsv[1] * 100;
							this.z = hsv[2] * 100;
							break;
						}
					case 1:
						{
							this.mode = 2;
							const hsv = P.utils.hslToHSV(this.x, this.y / 100, this.z / 100);
							this.x = hsv[0];
							this.y = hsv[1] * 100;
							this.z = hsv[2] * 100;
							break;
						}
				}
			}
			toParts() {
				return [1, 0, 0, 1];
			}
			toCSS() {
				switch (this.mode) {
					case 0:
						return this.css;
					case 1:
						return 'hsla(' + this.x + ',' + this.y + '%,' + (this.z > 100 ? 200 - this.z : this.z) + '%,' + this.a + ')';
					case 2:
						{
							const rgb = P.utils.hsvToRGB(this.x / 360, this.y / 100, this.z / 100);
							return 'rgba(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ', ' + this.a + ')';
						}
				}
				throw new Error('Unknown pen color mode: ' + this.mode);
			}
			setParam(param, value) {
				this.toHSVA();
				switch (param) {
					case 'color':
						this.x = (value * 360 / 100) % 360;
						if (this.x < 0)
							this.x += 360;
						break;
					case 'saturation':
						this.y = P.utils.clamp(value, 0, 100);
						break;
					case 'brightness':
						this.z = P.utils.clamp(value, 0, 100);
						break;
					case 'transparency':
						this.a = 1 - (value / 100);
						if (this.a > 1)
							this.a = 1;
						if (this.a < 0)
							this.a = 0;
						break;
				}
			}
			changeParam(param, value) {
				this.toHSVA();
				switch (param) {
					case 'color':
						this.x = (this.x + value * 360 / 100) % 360;
						if (this.x < 0)
							this.x += 360;
						break;
					case 'saturation':
						this.y = P.utils.clamp(this.y + value, 0, 100);
						break;
					case 'brightness':
						this.z = P.utils.clamp(this.z + value, 0, 100);
						break;
					case 'transparency':
						this.a = Math.max(0, Math.min(1, this.a - value / 100));
						break;
				}
			}
			copy(other) {
				this.x = other.x;
				this.y = other.y;
				this.z = other.z;
				this.a = other.a;
				this.css = other.css;
				this.mode = other.mode;
			}
		}
		core.PenColor = PenColor;
		class Base {
			constructor() {
				this.isStage = false;
				this.isSprite = false;
				this.isClone = false;
				this.visible = true;
				this.scratchX = 0;
				this.scratchY = 0;
				this.name = '';
				this.costumes = [];
				this.currentCostumeIndex = 0;
				this.sounds = [];
				this.soundRefs = {};
				this.instrument = 0;
				this.volume = 1;
				this.node = null;
				this.activeSounds = new Set();
				this.watchers = Object.create(null);
				this.listWatchers = Object.create(null);
				this.vars = Object.create(null);
				this.lists = Object.create(null);
				this.saying = false;
				this.thinking = false;
				this.sayId = 0;
				this.procedures = Object.create(null);
				this.listeners = {
					whenClicked: [],
					whenCloned: [],
					whenGreenFlag: [],
					whenIReceive: Object.create(null),
					whenKeyPressed: [],
					whenBackdropChanges: Object.create(null),
					whenSceneStarts: Object.create(null),
				};
				this.fns = [];
				this.filters = {
					color: 0,
					fisheye: 0,
					whirl: 0,
					pixelate: 0,
					mosaic: 0,
					brightness: 0,
					ghost: 0,
				};
				this.soundFilters = {
					pitch: 0,
				};
				this.penSize = 1;
				this.penColor = new PenColor();
				this.isPenDown = false;
				for (var i = 0; i < 128; i++) {
					this.listeners.whenKeyPressed.push([]);
				}
			}
			addSound(sound) {
				this.soundRefs[sound.name] = sound;
				this.sounds.push(sound);
			}
			showVariable(name, visible) {
				let watcher = this.watchers[name];
				if (!watcher) {
					const newWatcher = this.createVariableWatcher(this, name);
					if (!newWatcher) {
						return;
					}
					newWatcher.init();
					this.watchers[name] = watcher = newWatcher;
					this.stage.allWatchers.push(watcher);
				}
				watcher.setVisible(visible);
			}
			showList(name, visible) {
				let watcher = this.listWatchers[name];
				if (!watcher) {
					const newWatcher = this.createListWatcher(this, name);
					if (!newWatcher) {
						return;
					}
					newWatcher.init();
					this.listWatchers[name] = watcher = newWatcher;
					this.stage.allWatchers.push(watcher);
				}
				watcher.setVisible(visible);
			}
			showNextCostume() {
				this.currentCostumeIndex = (this.currentCostumeIndex + 1) % this.costumes.length;
				if (this.saying && isSprite(this))
					this.updateBubble();
			}
			showPreviousCostume() {
				var length = this.costumes.length;
				this.currentCostumeIndex = (this.currentCostumeIndex + length - 1) % length;
				if (this.saying && isSprite(this))
					this.updateBubble();
			}
			getCostumeName() {
				return this.costumes[this.currentCostumeIndex] ? this.costumes[this.currentCostumeIndex].name : '';
			}
			setCostume(costume) {
				if (typeof costume !== 'number') {
					costume = '' + costume;
					for (var i = 0; i < this.costumes.length; i++) {
						if (this.costumes[i].name === costume) {
							this.currentCostumeIndex = i;
							if (this.saying && isSprite(this))
								this.updateBubble();
							return;
						}
					}
					if (costume === (this.isSprite ? 'next costume' : 'next backdrop')) {
						this.showNextCostume();
						return;
					}
					if (costume === (this.isSprite ? 'previous costume' : 'previous backdrop')) {
						this.showPreviousCostume();
						return;
					}
					if (!isFinite(costume) || !/\d/.test(costume)) {
						return;
					}
				}
				var i = (Math.floor(costume) - 1 || 0) % this.costumes.length;
				if (i < 0)
					i += this.costumes.length;
				this.currentCostumeIndex = i;
				if (isSprite(this) && this.saying)
					this.updateBubble();
			}
			setFilter(name, value) {
				switch (name) {
					case 'ghost':
						if (value < 0)
							value = 0;
						if (value > 100)
							value = 100;
						break;
					case 'brightness':
						if (value < -100)
							value = -100;
						if (value > 100)
							value = 100;
						break;
					case 'color':
						if (value === Infinity) {
							break;
						}
						value = value % 200;
						if (value < 0)
							value += 200;
						break;
				}
				this.filters[name] = value;
			}
			changeFilter(name, value) {
				this.setFilter(name, this.filters[name] + value);
			}
			resetFilters() {
				this.filters = {
					color: 0,
					fisheye: 0,
					whirl: 0,
					pixelate: 0,
					mosaic: 0,
					brightness: 0,
					ghost: 0
				};
			}
			setSoundFilter(name, value) {
				switch (name.toLowerCase()) {
					case 'pitch':
						this.soundFilters.pitch = value;
						break;
				}
			}
			changeSoundFilter(name, value) {
				switch (name.toLowerCase()) {
					case 'pitch':
						this.soundFilters.pitch += value;
						break;
				}
			}
			resetSoundFilters() {
				this.soundFilters = {
					pitch: 0,
				};
			}
			getSound(name) {
				if (typeof name === 'string') {
					var s = this.soundRefs[name];
					if (s)
						return s;
					name = +name;
				}
				var l = this.sounds.length;
				if (l && typeof name === 'number' && name === name) {
					var i = Math.round(name - 1) % l;
					if (i < 0)
						i += l;
					return this.sounds[i];
				}
			}
			stopSounds() {
				if (this.node) {
					for (const sound of this.activeSounds) {
						sound.stopped = true;
						sound.node.disconnect();
					}
					this.activeSounds.clear();
					this.node.disconnect();
					this.node = null;
				}
			}
			stopSoundsExcept(originBase) {
				if (this.node) {
					for (const sound of this.activeSounds) {
						if (sound.base !== originBase) {
							sound.node.disconnect();
							sound.stopped = true;
							this.activeSounds.delete(sound);
						}
					}
				}
			}
			ask(question) {
				var stage = this.stage;
				if (question) {
					if (this.visible && isSprite(this)) {
						this.say(question);
						stage.promptTitle.style.display = 'none';
					} else {
						stage.promptTitle.style.display = 'block';
						stage.promptTitle.textContent = question;
					}
				} else {
					stage.promptTitle.style.display = 'none';
				}
				stage.hidePrompt = false;
				stage.prompter.style.display = 'block';
				stage.prompt.value = '';
				stage.prompt.focus();
			}
			say(text, thinking = false) {
				text = text.toString();
				if (text.length === 0) {
					this.saying = false;
					if (this.bubbleContainer)
						this.bubbleContainer.style.display = 'none';
					return ++this.sayId;
				}
				this.saying = true;
				this.thinking = thinking;
				if (!this.bubbleContainer) {
					this.bubbleContainer = document.createElement('div');
					this.bubbleContainer.style.maxWidth = (127 / 14) + 'em';
					this.bubbleContainer.style.minWidth = (48 / 14) + 'em';
					this.bubbleContainer.style.padding = (8 / 14) + 'em ' + (10 / 14) + 'em';
					this.bubbleContainer.style.border = (3 / 14) + 'em solid rgb(160, 160, 160)';
					this.bubbleContainer.style.borderRadius = (10 / 14) + 'em';
					this.bubbleContainer.style.background = '#fff';
					this.bubbleContainer.style.position = 'absolute';
					this.bubbleContainer.style.font = 'bold 1.4em sans-serif';
					this.bubbleContainer.style.whiteSpace = 'pre-wrap';
					this.bubbleContainer.style.wordWrap = 'break-word';
					this.bubbleContainer.style.textAlign = 'center';
					this.bubbleContainer.style.cursor = 'default';
					this.bubbleContainer.style.pointerEvents = 'auto';
					this.bubbleContainer.appendChild(this.bubbleText = document.createTextNode(''));
					this.bubbleContainer.appendChild(this.bubblePointer = document.createElement('div'));
					this.bubblePointer.style.position = 'absolute';
					this.bubblePointer.style.height = (21 / 14) + 'em';
					this.bubblePointer.style.width = (44 / 14) + 'em';
					this.bubblePointer.style.background = 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzg0IgogICBoZWlnaHQ9IjY0IgogICBpZD0ic3ZnMjk4NSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpY29ucy5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyOTg3IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI1LjU5ODkwMDgiCiAgICAgaW5rc2NhcGU6Y3g9IjE5My43MDIxNCIKICAgICBpbmtzY2FwZTpjeT0iMjguNzUwODY5IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICBpbmtzY2FwZTpncmlkLWJib3g9InRydWUiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICB1bml0cz0iaW4iCiAgICAgd2lkdGg9IjEyaW4iPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkMjk5MyIKICAgICAgIGVtcHNwYWNpbmc9IjQiCiAgICAgICB2aXNpYmxlPSJ0cnVlIgogICAgICAgZW5hYmxlZD0idHJ1ZSIKICAgICAgIHNuYXB2aXNpYmxlZ3JpZGxpbmVzb25seT0idHJ1ZSIgLz4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDM4MDUiCiAgICAgICBlbXBzcGFjaW5nPSIxIgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiCiAgICAgICBzbmFwdmlzaWJsZWdyaWRsaW5lc29ubHk9InRydWUiCiAgICAgICBzcGFjaW5neD0iMzIiCiAgICAgICBzcGFjaW5neT0iMzIiCiAgICAgICBlbXBjb2xvcj0iIzAwMDAwMCIKICAgICAgIGVtcG9wYWNpdHk9IjAuNiIKICAgICAgIG9yaWdpbng9IjAiCiAgICAgICBvcmlnaW55PSIwIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTI5OTAiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaWQ9ImxheWVyMSIKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMzIpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMCwtOSB2IC0xNCBoIDIgdiAxNCB6IgogICAgICAgaWQ9InBhdGgyOTk1IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTIsLTIyIGMgMCwwIDMsLTEgNSwxIDIsMiA1LDEgNSwxIHYgOCBjIDAsMCAtMywxIC01LC0xIC0yLC0yIC01LC0xIC01LC0xIHoiCiAgICAgICBpZD0icGF0aDM3NjUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjemNjemNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDQyLC0yMyBoIDQgdiAxNCBoIC00IHoiCiAgICAgICBpZD0icGF0aDM4MDciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSA0OSwtMjMgaCA0IHYgMTQgaCAtNCB6IgogICAgICAgaWQ9InBhdGgzODE3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTA5LC05IGggNiBsIDQsLTQgdiAtNiBsIC00LC00IGggLTYgbCAtNCw0IHYgNiB6IgogICAgICAgaWQ9InBhdGgzODIxIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDc0LC0yMyAxMiw3IC0xMiw3IHoiCiAgICAgICBpZD0icGF0aDM4MjMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDIwMSwtMjMgaCA3IHYgMiBoIC01IHYgMTAgaCAxMCB2IC01IGggMiB2IDcgaCAtMTQgeiIKICAgICAgIGlkPSJwYXRoMzkxMCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMjA3LC0xNi41IDQuNSwtNC41IC0yLC0yIGggNS41IHYgNS41IGwgLTIsLTIgLTQuNSw0LjUgSCAyMDcgWiIKICAgICAgIGlkPSJwYXRoMzkxMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNTEsLTIzIHYgNS41IGwgLTIsLTIgLTIuNSwyLjUgLTAuNjU1ODcsLTAuNjU1ODY5IEwgMTQ1LC0xOC41IGwgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIGlkPSJwYXRoMzkzNiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoMzkzOCIKICAgICAgIGQ9Im0gMTM3LC0yMyBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMS41LDEuNSAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMzcsLTkgdiAtNS41IGwgMiwyIDIuNSwtMi41IDEuNSwxLjUgLTIuNSwyLjUgMiwyIHoiCiAgICAgICBpZD0icGF0aDM5NDAiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQxMDgiCiAgICAgICBkPSJtIDE1MSwtOSBoIC01LjUgbCAyLC0yIC0yLjUsLTIuNSAwLjY1NTg3LC0wLjY1NTg3IEwgMTQ2LjUsLTE1IGwgMi41LDIuNSAyLC0yIHoiCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJNIDEwLDIzIFYgOSBoIDIgdiAxNCB6IgogICAgICAgaWQ9InBhdGgyOTk1LTciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMiwxMCBjIDAsMCAzLC0xIDUsMSAyLDIgNSwxIDUsMSB2IDggYyAwLDAgLTMsMSAtNSwtMSAtMiwtMiAtNSwtMSAtNSwtMSB6IgogICAgICAgaWQ9InBhdGgzNzY1LTgiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjemNjemNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDQyLDkgaCA0IHYgMTQgaCAtNCB6IgogICAgICAgaWQ9InBhdGgzODA3LTEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSA0OSw5IGggNCB2IDE0IGggLTQgeiIKICAgICAgIGlkPSJwYXRoMzgxNy0zIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTA5LDIzIGggNiBsIDQsLTQgdiAtNiBsIC00LC00IGggLTYgbCAtNCw0IHYgNiB6IgogICAgICAgaWQ9InBhdGgzODIxLTQiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gNzQsOSAxMiw3IC0xMiw3IHoiCiAgICAgICBpZD0icGF0aDM4MjMtMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Ik0gMTc3LDE1IFYgOS41IGwgMiwyIDIuNSwtMi41IDAuNjU1ODcsMC42NTU4NjkgTCAxODMsMTAuNSBsIC0yLjUsMi41IDIsMiB6IgogICAgICAgaWQ9InBhdGgzOTM2LTIiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDM5MzgtNyIKICAgICAgIGQ9Im0gMTc1LDE1IGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDEuNSwtMS41IDIuNSwyLjUgMiwtMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNzUsMTcgdiA1LjUgbCAtMiwtMiAtMi41LDIuNSAtMS41LC0xLjUgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIGlkPSJwYXRoMzk0MC03IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg0MDExIgogICAgICAgZD0ibSAxNzcsMTcgaCA1LjUgbCAtMiwyIDIuNSwyLjUgLTAuNjU1ODcsMC42NTU4NyBMIDE4MS41LDIzIDE3OSwyMC41IGwgLTIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJmaWxsOiMyZWFlZGY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBpZD0icGF0aDI5ODciCiAgICAgICBjeD0iMjQwIgogICAgICAgY3k9Ii0xNiIKICAgICAgIHI9IjEwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDIzNCwtMTQuNSA0LDQgNywtNyB2IC00IGwgLTcsNyAtMiwtMiB6IgogICAgICAgaWQ9InBhdGgzNzU3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpTYW5zO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7ZmlsbDojYTBhMGEwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozO21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBkPSJtIDI2OCwtMjggYyAwLDAgLTUuMDU2MiwxMi43OTcyIC02LjI0OTE0LDE1LjYyMjg0MSAtMS4xOTI5MywyLjgyNTY0MiAwLjE4OTM3LDMuNjEwMDkyIDIuNzcxNjUsMi41ODkxOSBDIDI2Ny4xMDQ3OSwtMTAuODA4ODcxIDMwMywtMjUgMzAzLC0yNSB2IC0zIGwgLTM4LDE1IDYsLTE1IHoiCiAgICAgICBpZD0icGF0aDM4NTciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjenpjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAyNjUsLTEzIDYsLTE1IGggMzIgeiIKICAgICAgIGlkPSJwYXRoMzg2NSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246U2Fuczt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6I2EwYTBhMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MzttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0ibSAyOTUsNCBjIDAsMCA1LjA1NjIsMTIuNzk3MiA2LjI0OTE0LDE1LjYyMjg0MSAxLjE5MjkzLDIuODI1NjQyIC0wLjE4OTM3LDMuNjEwMDkyIC0yLjc3MTY1LDIuNTg5MTkgQyAyOTUuODk1MjEsMjEuMTkxMTI5IDI2MCw3IDI2MCw3IFYgNCBsIDM4LDE1IC02LC0xNSB6IgogICAgICAgaWQ9InBhdGgzODU3LTMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjenpjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0iTSAyOTgsMTkgMjkyLDQgaCAtMzIgeiIKICAgICAgIGlkPSJwYXRoMzg2NS04IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjYyIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDowLjk5OTkwMDk0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUiCiAgICAgICBjeD0iMzI4LjkxNjQ3IgogICAgICAgY3k9Ii0xMC40MTY0NTgiCiAgICAgICByeD0iMy41MDAwNDk2IgogICAgICAgcnk9IjIuMDAwMDQ5NiIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDoxLjM1Nzc5NzE1O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtNiIKICAgICAgIGN4PSIzMzUuNzE3NSIKICAgICAgIGN5PSItMTQuNDUwMDAxIgogICAgICAgcng9IjQuMTcxMTAxNiIKICAgICAgIHJ5PSIyLjA3MTEwMTQiIC8+CiAgICA8ZWxsaXBzZQogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2EwYTBhMDtzdHJva2Utd2lkdGg6MS44MjY0NzAxNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGgzOTc1LTYtNiIKICAgICAgIGN4PSIzNDEuNSIKICAgICAgIGN5PSItMjEiCiAgICAgICByeD0iNS40OTk5OTgxIgogICAgICAgcnk9IjMuMDk0NzM0NyIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDowLjk5OTkwMDk0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtMSIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoLTEsMSkiCiAgICAgICBjeD0iLTM2My4wODM1NiIKICAgICAgIGN5PSIyMS41ODQiCiAgICAgICByeD0iMy41MDAwNDk2IgogICAgICAgcnk9IjIuMDAwMDQ5NiIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDoxLjM1Nzc5NzE1O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtNi0zIgogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIKICAgICAgIGN4PSItMzU2LjI4MjUiCiAgICAgICBjeT0iMTcuNTUwNDU3IgogICAgICAgcng9IjQuMTcxMTAxNiIKICAgICAgIHJ5PSIyLjA3MTEwMTQiIC8+CiAgICA8ZWxsaXBzZQogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2EwYTBhMDtzdHJva2Utd2lkdGg6MS44MjY0NzAxNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGgzOTc1LTYtNi00IgogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIKICAgICAgIGN4PSItMzUwLjUiCiAgICAgICBjeT0iMTEuMDAwNDYiCiAgICAgICByeD0iNS40OTk5OTgxIgogICAgICAgcnk9IjMuMDk0NzM0NyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDMwNDUiCiAgICAgICBkPSJtIDE1MSw5IHYgNS41IGwgLTIsLTIgLTIuNSwyLjUgLTAuNjU1ODcsLTAuNjU1ODY5IEwgMTQ1LDEzLjUgbCAyLjUsLTIuNSAtMiwtMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMzcsOSBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMS41LDEuNSAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgaWQ9InBhdGgzMDQ3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDMwNDkiCiAgICAgICBkPSJtIDEzNywyMyB2IC01LjUgbCAyLDIgMi41LC0yLjUgMS41LDEuNSAtMi41LDIuNSAyLDIgeiIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTUxLDIzIGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDAuNjU1ODcsLTAuNjU1ODcgTCAxNDYuNSwxNyBsIDIuNSwyLjUgMiwtMiB6IgogICAgICAgaWQ9InBhdGgzMDUxIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ3IgogICAgICAgZD0ibSAyMDEsOSBoIDcgdiAyIGggLTUgdiAxMCBoIDEwIHYgLTUgaCAyIHYgNyBoIC0xNCB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ5IgogICAgICAgZD0ibSAyMDcsMTUuNSA0LjUsLTQuNSAtMiwtMiBoIDUuNSB2IDUuNSBsIC0yLC0yIC00LjUsNC41IEggMjA3IFoiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNDU1NyIKICAgICAgIGQ9Im0gMTc3LC0xNyB2IC01LjUgbCAyLDIgMi41LC0yLjUgMC42NTU4NywwLjY1NTg2OSBMIDE4MywtMjEuNSBsIC0yLjUsMi41IDIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNzUsLTE3IGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDEuNSwtMS41IDIuNSwyLjUgMiwtMiB6IgogICAgICAgaWQ9InBhdGg0NTU5IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ1NjEiCiAgICAgICBkPSJtIDE3NSwtMTUgdiA1LjUgbCAtMiwtMiAtMi41LDIuNSAtMS41LC0xLjUgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTc3LC0xNSBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMC42NTU4NywwLjY1NTg3IEwgMTgxLjUsLTkgbCAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgaWQ9InBhdGg0NTYzIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogIDwvZz4KPC9zdmc+Cg==")';
					this.bubblePointer.style.backgroundSize = (384 / 14) + 'em ' + (64 / 14) + 'em';
					this.bubblePointer.style.backgroundPositionY = (-4 / 14) + 'em';
					this.stage.ui.appendChild(this.bubbleContainer);
				}
				this.bubblePointer.style.backgroundPositionX = (thinking ? -323 : -259) / 14 + 'em';
				this.bubbleContainer.style.display = 'block';
				this.bubbleText.nodeValue = text;
				this.updateBubble();
				return ++this.sayId;
			}
			updateBubble() {
				if (!this.visible || !this.saying) {
					this.bubbleContainer.style.display = 'none';
					return;
				}
				const b = this.rotatedBounds();
				const left = 240 + b.right;
				var bottom = 180 + b.top;
				const width = this.bubbleContainer.offsetWidth / this.stage.zoom;
				const height = this.bubbleContainer.offsetHeight / this.stage.zoom;
				this.bubblePointer.style.top = ((height - 6) / 14) + 'em';
				if (left + width + 2 > 480) {
					var d = (240 - b.left) / 14;
					if (d > 25)
						d = 25;
					this.bubbleContainer.style.right = d + 'em';
					this.bubbleContainer.style.left = 'auto';
					this.bubblePointer.style.right = (3 / 14) + 'em';
					this.bubblePointer.style.left = 'auto';
					this.bubblePointer.style.backgroundPositionY = (-36 / 14) + 'em';
				} else {
					this.bubbleContainer.style.left = (left / 14) + 'em';
					this.bubbleContainer.style.right = 'auto';
					this.bubblePointer.style.left = (3 / 14) + 'em';
					this.bubblePointer.style.right = 'auto';
					this.bubblePointer.style.backgroundPositionY = (-4 / 14) + 'em';
				}
				if (bottom + height + 2 > 360) {
					bottom = 360 - height - 2;
				}
				if (bottom < 19) {
					bottom = 19;
				}
				this.bubbleContainer.style.bottom = (bottom / 14) + 'em';
			}
			remove() {
				if (this.bubbleContainer) {
					this.stage.ui.removeChild(this.bubbleContainer);
					delete this.bubbleContainer;
				}
				if (this.node && this.isClone && !this.isStage) {
					for (const sound of this.activeSounds) {
						sound.node.disconnect();
						sound.stopped = true;
					}
					this.activeSounds.clear();
					this.node.disconnect();
					this.node.connect(this.stage.getAudioNode());
					this.node = null;
				}
			}
			getAudioNode() {
				if (this.node) {
					return this.node;
				}
				if (!P.audio.context) {
					throw new Error('No audio context');
				}
				this.node = P.audio.context.createGain();
				this.node.gain.value = this.volume;
				P.audio.connectNode(this.node);
				return this.node;
			}
			createVariableWatcher(target, variableName) {
				return null;
			}
			createListWatcher(target, listName) {
				return null;
			}
			dotPen() {
				this.stage.renderer.penDot(this.penColor, this.penSize, this.scratchX, this.scratchY);
			}
			stamp() {
				this.stage.renderer.penStamp(this);
			}
			setPenColor(color) {
				if (typeof color === 'string') {
					if (color.startsWith('#')) {
						color = parseInt(color.substr(1), 16);
					} else if (color.startsWith('0x')) {
						color = parseInt(color.substr(2), 16);
					} else {
						color = +color;
					}
				}
				this.penColor.setRGBA(color);
			}
		}
		core.Base = Base;
		class Stage extends Base {
			constructor() {
				super();
				this.stage = this;
				this.isStage = true;
				this.children = [];
				this.allWatchers = [];
				this.answer = '';
				this.promptId = 0;
				this.nextPromptId = 0;
				this.hidePrompt = false;
				this.zoom = 1;
				this.rawMouseX = 0;
				this.rawMouseY = 0;
				this.mouseX = 0;
				this.mouseY = 0;
				this.mousePressed = false;
				this.tempoBPM = 60;
				this.username = '';
				this.counter = 0;
				this.speech2text = null;
				this.microphone = null;
				this.extensions = [];
				this.runtime = new P.runtime.Runtime(this);
				this.keys = [];
				this.keys.any = 0;
				this.root = document.createElement('div');
				this.root.classList.add('forkphorus-root');
				if (P.config.useWebGL) {
					this.renderer = new P.renderer.webgl.WebGLProjectRenderer(this);
				} else {
					this.renderer = new P.renderer.canvas2d.ProjectRenderer2D(this);
				}
				this.renderer.resize(1);
				this.renderer.init(this.root);
				this.canvas = this.renderer.canvas;
				this.ui = document.createElement('div');
				this.root.appendChild(this.ui);
				this.ui.style.pointerEvents = 'none';
				this.canvas.tabIndex = 0;
				this.canvas.style.outline = 'none';
				this.prompter = document.createElement('div');
				this.ui.appendChild(this.prompter);
				this.prompter.style.zIndex = '1';
				this.prompter.style.pointerEvents = 'auto';
				this.prompter.style.position = 'absolute';
				this.prompter.style.left =
					this.prompter.style.right = '1.4em';
				this.prompter.style.bottom = '.6em';
				this.prompter.style.padding = '.5em 3.0em .5em .5em';
				this.prompter.style.border = '.3em solid rgb(46, 174, 223)';
				this.prompter.style.borderRadius = '.8em';
				this.prompter.style.background = '#fff';
				this.prompter.style.display = 'none';
				this.promptTitle = document.createElement('div');
				this.prompter.appendChild(this.promptTitle);
				this.promptTitle.textContent = '';
				this.promptTitle.style.cursor = 'default';
				this.promptTitle.style.font = 'bold 1.3em sans-serif';
				this.promptTitle.style.margin = '0 ' + (-25 / 13) + 'em ' + (5 / 13) + 'em 0';
				this.promptTitle.style.whiteSpace = 'pre';
				this.promptTitle.style.overflow = 'hidden';
				this.promptTitle.style.textOverflow = 'ellipsis';
				this.prompt = document.createElement('input');
				this.prompter.appendChild(this.prompt);
				this.prompt.style.border = '0';
				this.prompt.style.background = '#eee';
				this.prompt.style.boxSizing = 'border-box';
				this.prompt.style.font = '1.3em sans-serif';
				this.prompt.style.padding = '0 ' + (3 / 13) + 'em';
				this.prompt.style.outline = '0';
				this.prompt.style.margin = '0';
				this.prompt.style.width = '100%';
				this.prompt.style.height = '' + (20 / 13) + 'em';
				this.prompt.style.display = 'block';
				this.prompt.style.borderRadius = '0';
				this.prompt.style.boxShadow = 'inset ' + (1 / 13) + 'em ' + (1 / 13) + 'em ' + (2 / 13) + 'em rgba(0, 0, 0, .2), inset ' + (-1 / 13) + 'em ' + (-1 / 13) + 'em ' + (1 / 13) + 'em rgba(255, 255, 255, .2)';
				this.prompt.style.webkitAppearance = 'none';
				this.promptButton = document.createElement('div');
				this.prompter.appendChild(this.promptButton);
				this.promptButton.style.width = '2.2em';
				this.promptButton.style.height = '2.2em';
				this.promptButton.style.position = 'absolute';
				this.promptButton.style.right = '.4em';
				this.promptButton.style.bottom = '.4em';
				this.promptButton.style.background = 'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzg0IgogICBoZWlnaHQ9IjY0IgogICBpZD0ic3ZnMjk4NSIKICAgdmVyc2lvbj0iMS4xIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjMgKDI0MDU1NDYsIDIwMTgtMDMtMTEpIgogICBzb2RpcG9kaTpkb2NuYW1lPSJpY29ucy5zdmciPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyOTg3IiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI1LjU5ODkwMDgiCiAgICAgaW5rc2NhcGU6Y3g9IjE5My43MDIxNCIKICAgICBpbmtzY2FwZTpjeT0iMjguNzUwODY5IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBzaG93Z3JpZD0idHJ1ZSIKICAgICBpbmtzY2FwZTpncmlkLWJib3g9InRydWUiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgICAgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMSIKICAgICB1bml0cz0iaW4iCiAgICAgd2lkdGg9IjEyaW4iPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkMjk5MyIKICAgICAgIGVtcHNwYWNpbmc9IjQiCiAgICAgICB2aXNpYmxlPSJ0cnVlIgogICAgICAgZW5hYmxlZD0idHJ1ZSIKICAgICAgIHNuYXB2aXNpYmxlZ3JpZGxpbmVzb25seT0idHJ1ZSIgLz4KICAgIDxpbmtzY2FwZTpncmlkCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBpZD0iZ3JpZDM4MDUiCiAgICAgICBlbXBzcGFjaW5nPSIxIgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiCiAgICAgICBzbmFwdmlzaWJsZWdyaWRsaW5lc29ubHk9InRydWUiCiAgICAgICBzcGFjaW5neD0iMzIiCiAgICAgICBzcGFjaW5neT0iMzIiCiAgICAgICBlbXBjb2xvcj0iIzAwMDAwMCIKICAgICAgIGVtcG9wYWNpdHk9IjAuNiIKICAgICAgIG9yaWdpbng9IjAiCiAgICAgICBvcmlnaW55PSIwIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTI5OTAiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaWQ9ImxheWVyMSIKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMzIpIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMCwtOSB2IC0xNCBoIDIgdiAxNCB6IgogICAgICAgaWQ9InBhdGgyOTk1IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTIsLTIyIGMgMCwwIDMsLTEgNSwxIDIsMiA1LDEgNSwxIHYgOCBjIDAsMCAtMywxIC01LC0xIC0yLC0yIC01LC0xIC01LC0xIHoiCiAgICAgICBpZD0icGF0aDM3NjUiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjemNjemNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDQyLC0yMyBoIDQgdiAxNCBoIC00IHoiCiAgICAgICBpZD0icGF0aDM4MDciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSA0OSwtMjMgaCA0IHYgMTQgaCAtNCB6IgogICAgICAgaWQ9InBhdGgzODE3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTA5LC05IGggNiBsIDQsLTQgdiAtNiBsIC00LC00IGggLTYgbCAtNCw0IHYgNiB6IgogICAgICAgaWQ9InBhdGgzODIxIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDc0LC0yMyAxMiw3IC0xMiw3IHoiCiAgICAgICBpZD0icGF0aDM4MjMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDIwMSwtMjMgaCA3IHYgMiBoIC01IHYgMTAgaCAxMCB2IC01IGggMiB2IDcgaCAtMTQgeiIKICAgICAgIGlkPSJwYXRoMzkxMCIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMjA3LC0xNi41IDQuNSwtNC41IC0yLC0yIGggNS41IHYgNS41IGwgLTIsLTIgLTQuNSw0LjUgSCAyMDcgWiIKICAgICAgIGlkPSJwYXRoMzkxMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNTEsLTIzIHYgNS41IGwgLTIsLTIgLTIuNSwyLjUgLTAuNjU1ODcsLTAuNjU1ODY5IEwgMTQ1LC0xOC41IGwgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIGlkPSJwYXRoMzkzNiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoMzkzOCIKICAgICAgIGQ9Im0gMTM3LC0yMyBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMS41LDEuNSAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMzcsLTkgdiAtNS41IGwgMiwyIDIuNSwtMi41IDEuNSwxLjUgLTIuNSwyLjUgMiwyIHoiCiAgICAgICBpZD0icGF0aDM5NDAiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQxMDgiCiAgICAgICBkPSJtIDE1MSwtOSBoIC01LjUgbCAyLC0yIC0yLjUsLTIuNSAwLjY1NTg3LC0wLjY1NTg3IEwgMTQ2LjUsLTE1IGwgMi41LDIuNSAyLC0yIHoiCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJNIDEwLDIzIFYgOSBoIDIgdiAxNCB6IgogICAgICAgaWQ9InBhdGgyOTk1LTciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMiwxMCBjIDAsMCAzLC0xIDUsMSAyLDIgNSwxIDUsMSB2IDggYyAwLDAgLTMsMSAtNSwtMSAtMiwtMiAtNSwtMSAtNSwtMSB6IgogICAgICAgaWQ9InBhdGgzNzY1LTgiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjemNjemNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDQyLDkgaCA0IHYgMTQgaCAtNCB6IgogICAgICAgaWQ9InBhdGgzODA3LTEiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSA0OSw5IGggNCB2IDE0IGggLTQgeiIKICAgICAgIGlkPSJwYXRoMzgxNy0zIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTA5LDIzIGggNiBsIDQsLTQgdiAtNiBsIC00LC00IGggLTYgbCAtNCw0IHYgNiB6IgogICAgICAgaWQ9InBhdGgzODIxLTQiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gNzQsOSAxMiw3IC0xMiw3IHoiCiAgICAgICBpZD0icGF0aDM4MjMtMiIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Ik0gMTc3LDE1IFYgOS41IGwgMiwyIDIuNSwtMi41IDAuNjU1ODcsMC42NTU4NjkgTCAxODMsMTAuNSBsIC0yLjUsMi41IDIsMiB6IgogICAgICAgaWQ9InBhdGgzOTM2LTIiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDM5MzgtNyIKICAgICAgIGQ9Im0gMTc1LDE1IGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDEuNSwtMS41IDIuNSwyLjUgMiwtMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNzUsMTcgdiA1LjUgbCAtMiwtMiAtMi41LDIuNSAtMS41LC0xLjUgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIGlkPSJwYXRoMzk0MC03IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjY2MiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgaWQ9InBhdGg0MDExIgogICAgICAgZD0ibSAxNzcsMTcgaCA1LjUgbCAtMiwyIDIuNSwyLjUgLTAuNjU1ODcsMC42NTU4NyBMIDE4MS41LDIzIDE3OSwyMC41IGwgLTIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxjaXJjbGUKICAgICAgIHN0eWxlPSJmaWxsOiMyZWFlZGY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBpZD0icGF0aDI5ODciCiAgICAgICBjeD0iMjQwIgogICAgICAgY3k9Ii0xNiIKICAgICAgIHI9IjEwIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiCiAgICAgICBkPSJtIDIzNCwtMTQuNSA0LDQgNywtNyB2IC00IGwgLTcsNyAtMiwtMiB6IgogICAgICAgaWQ9InBhdGgzNzU3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iY29sb3I6IzAwMDAwMDtmb250LXN0eWxlOm5vcm1hbDtmb250LXZhcmlhbnQ6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0cmV0Y2g6bm9ybWFsO2ZvbnQtc2l6ZTptZWRpdW07bGluZS1oZWlnaHQ6bm9ybWFsO2ZvbnQtZmFtaWx5OlNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpTYW5zO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7d3JpdGluZy1tb2RlOmxyLXRiO2RpcmVjdGlvbjpsdHI7YmFzZWxpbmUtc2hpZnQ6YmFzZWxpbmU7dGV4dC1hbmNob3I6c3RhcnQ7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTt2aXNpYmlsaXR5OnZpc2libGU7ZmlsbDojYTBhMGEwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozO21hcmtlcjpub25lO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBkPSJtIDI2OCwtMjggYyAwLDAgLTUuMDU2MiwxMi43OTcyIC02LjI0OTE0LDE1LjYyMjg0MSAtMS4xOTI5MywyLjgyNTY0MiAwLjE4OTM3LDMuNjEwMDkyIDIuNzcxNjUsMi41ODkxOSBDIDI2Ny4xMDQ3OSwtMTAuODA4ODcxIDMwMywtMjUgMzAzLC0yNSB2IC0zIGwgLTM4LDE1IDYsLTE1IHoiCiAgICAgICBpZD0icGF0aDM4NTciCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjenpjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAyNjUsLTEzIDYsLTE1IGggMzIgeiIKICAgICAgIGlkPSJwYXRoMzg2NSIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpTYW5zOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246U2Fuczt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC1kZWNvcmF0aW9uLWxpbmU6bm9uZTtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3dyaXRpbmctbW9kZTpsci10YjtkaXJlY3Rpb246bHRyO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O2Rpc3BsYXk6aW5saW5lO292ZXJmbG93OnZpc2libGU7dmlzaWJpbGl0eTp2aXNpYmxlO2ZpbGw6I2EwYTBhMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MzttYXJrZXI6bm9uZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0ibSAyOTUsNCBjIDAsMCA1LjA1NjIsMTIuNzk3MiA2LjI0OTE0LDE1LjYyMjg0MSAxLjE5MjkzLDIuODI1NjQyIC0wLjE4OTM3LDMuNjEwMDkyIC0yLjc3MTY1LDIuNTg5MTkgQyAyOTUuODk1MjEsMjEuMTkxMTI5IDI2MCw3IDI2MCw3IFYgNCBsIDM4LDE1IC02LC0xNSB6IgogICAgICAgaWQ9InBhdGgzODU3LTMiCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjenpjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0iTSAyOTgsMTkgMjkyLDQgaCAtMzIgeiIKICAgICAgIGlkPSJwYXRoMzg2NS04IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjYyIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDowLjk5OTkwMDk0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUiCiAgICAgICBjeD0iMzI4LjkxNjQ3IgogICAgICAgY3k9Ii0xMC40MTY0NTgiCiAgICAgICByeD0iMy41MDAwNDk2IgogICAgICAgcnk9IjIuMDAwMDQ5NiIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDoxLjM1Nzc5NzE1O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtNiIKICAgICAgIGN4PSIzMzUuNzE3NSIKICAgICAgIGN5PSItMTQuNDUwMDAxIgogICAgICAgcng9IjQuMTcxMTAxNiIKICAgICAgIHJ5PSIyLjA3MTEwMTQiIC8+CiAgICA8ZWxsaXBzZQogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2EwYTBhMDtzdHJva2Utd2lkdGg6MS44MjY0NzAxNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGgzOTc1LTYtNiIKICAgICAgIGN4PSIzNDEuNSIKICAgICAgIGN5PSItMjEiCiAgICAgICByeD0iNS40OTk5OTgxIgogICAgICAgcnk9IjMuMDk0NzM0NyIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDowLjk5OTkwMDk0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtMSIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoLTEsMSkiCiAgICAgICBjeD0iLTM2My4wODM1NiIKICAgICAgIGN5PSIyMS41ODQiCiAgICAgICByeD0iMy41MDAwNDk2IgogICAgICAgcnk9IjIuMDAwMDQ5NiIgLz4KICAgIDxlbGxpcHNlCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojYTBhMGEwO3N0cm9rZS13aWR0aDoxLjM1Nzc5NzE1O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBpZD0icGF0aDM5NzUtNi0zIgogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIKICAgICAgIGN4PSItMzU2LjI4MjUiCiAgICAgICBjeT0iMTcuNTUwNDU3IgogICAgICAgcng9IjQuMTcxMTAxNiIKICAgICAgIHJ5PSIyLjA3MTEwMTQiIC8+CiAgICA8ZWxsaXBzZQogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2EwYTBhMDtzdHJva2Utd2lkdGg6MS44MjY0NzAxNDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGgzOTc1LTYtNi00IgogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgtMSwxKSIKICAgICAgIGN4PSItMzUwLjUiCiAgICAgICBjeT0iMTEuMDAwNDYiCiAgICAgICByeD0iNS40OTk5OTgxIgogICAgICAgcnk9IjMuMDk0NzM0NyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDMwNDUiCiAgICAgICBkPSJtIDE1MSw5IHYgNS41IGwgLTIsLTIgLTIuNSwyLjUgLTAuNjU1ODcsLTAuNjU1ODY5IEwgMTQ1LDEzLjUgbCAyLjUsLTIuNSAtMiwtMiB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxMzcsOSBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMS41LDEuNSAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgaWQ9InBhdGgzMDQ3IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDMwNDkiCiAgICAgICBkPSJtIDEzNywyMyB2IC01LjUgbCAyLDIgMi41LC0yLjUgMS41LDEuNSAtMi41LDIuNSAyLDIgeiIKICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTUxLDIzIGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDAuNjU1ODcsLTAuNjU1ODcgTCAxNDYuNSwxNyBsIDIuNSwyLjUgMiwtMiB6IgogICAgICAgaWQ9InBhdGgzMDUxIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogICAgPHBhdGgKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ3IgogICAgICAgZD0ibSAyMDEsOSBoIDcgdiAyIGggLTUgdiAxMCBoIDEwIHYgLTUgaCAyIHYgNyBoIC0xNCB6IgogICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ5IgogICAgICAgZD0ibSAyMDcsMTUuNSA0LjUsLTQuNSAtMiwtMiBoIDUuNSB2IDUuNSBsIC0yLC0yIC00LjUsNC41IEggMjA3IFoiCiAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIGlkPSJwYXRoNDU1NyIKICAgICAgIGQ9Im0gMTc3LC0xNyB2IC01LjUgbCAyLDIgMi41LC0yLjUgMC42NTU4NywwLjY1NTg2OSBMIDE4MywtMjEuNSBsIC0yLjUsMi41IDIsMiB6IgogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIgogICAgICAgZD0ibSAxNzUsLTE3IGggLTUuNSBsIDIsLTIgLTIuNSwtMi41IDEuNSwtMS41IDIuNSwyLjUgMiwtMiB6IgogICAgICAgaWQ9InBhdGg0NTU5IgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2MiIC8+CiAgICA8cGF0aAogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIKICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgICAgICBpZD0icGF0aDQ1NjEiCiAgICAgICBkPSJtIDE3NSwtMTUgdiA1LjUgbCAtMiwtMiAtMi41LDIuNSAtMS41LC0xLjUgMi41LC0yLjUgLTIsLTIgeiIKICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIKICAgICAgIGQ9Im0gMTc3LC0xNSBoIDUuNSBsIC0yLDIgMi41LDIuNSAtMC42NTU4NywwLjY1NTg3IEwgMTgxLjUsLTkgbCAtMi41LC0yLjUgLTIsMiB6IgogICAgICAgaWQ9InBhdGg0NTYzIgogICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPgogIDwvZz4KPC9zdmc+Cg==) -22.8em -0.4em';
				this.promptButton.style.backgroundSize = '38.4em 6.4em';
				this.addEventListeners();
			}
			addEventListeners() {
				this._onmousedown = this._onmousedown.bind(this);
				this._onmouseup = this._onmouseup.bind(this);
				this._onmousemove = this._onmousemove.bind(this);
				this._ontouchstart = this._ontouchstart.bind(this);
				this._ontouchend = this._ontouchend.bind(this);
				this._ontouchmove = this._ontouchmove.bind(this);
				document.addEventListener('mousedown', this._onmousedown);
				document.addEventListener('mouseup', this._onmouseup);
				document.addEventListener('mousemove', this._onmousemove);
				document.addEventListener('touchstart', this._ontouchstart, { passive: false });
				document.addEventListener('touchend', this._ontouchend);
				document.addEventListener('touchmove', this._ontouchmove);
				this.root.addEventListener('wheel', this._onwheel.bind(this));
				this.root.addEventListener('keyup', this._onkeyup.bind(this));
				this.root.addEventListener('keydown', this._onkeydown.bind(this));
				this.promptButton.addEventListener('touchstart', this.submitPrompt.bind(this));
				this.promptButton.addEventListener('mousedown', this.submitPrompt.bind(this));
				this.prompt.addEventListener('keydown', (e) => {
					if (e.keyCode === 13)
						this.submitPrompt();
				});
			}
			removeEventListeners() {
				document.removeEventListener('mousedown', this._onmousedown);
				document.removeEventListener('mouseup', this._onmouseup);
				document.removeEventListener('mousemove', this._onmousemove);
				document.removeEventListener('touchstart', this._ontouchstart);
				document.removeEventListener('touchend', this._ontouchend);
				document.removeEventListener('touchmove', this._ontouchmove);
			}
			_onwheel(e) {
				if (e.deltaY > 0) {
					this.runtime.trigger('whenKeyPressed', 40);
				} else if (e.deltaY < 0) {
					this.runtime.trigger('whenKeyPressed', 38);
				}
			}
			keyEventToCode(e) {
				const key = e.key;
				switch (key) {
					case 'Enter':
						return 13;
					case 'ArrowLeft':
						return 37;
					case 'ArrowUp':
						return 38;
					case 'ArrowRight':
						return 39;
					case 'ArrowDown':
						return 40;
				}
				if (key.length !== 1) {
					return -1;
				}
				return key.toUpperCase().charCodeAt(0);
			}
			_onkeyup(e) {
				const c = this.keyEventToCode(e);
				if (c === -1)
					return;
				if (this.keys[c])
					this.keys.any--;
				this.keys[c] = false;
				e.stopPropagation();
				if (e.target === this.canvas) {
					e.preventDefault();
				}
			}
			_onkeydown(e) {
				const c = this.keyEventToCode(e);
				if (c === -1)
					return;
				if (!this.keys[c])
					this.keys.any++;
				this.keys[c] = true;
				if (e.ctrlKey || e.altKey || e.metaKey || c === 27)
					return;
				e.stopPropagation();
				if (e.target === this.canvas) {
					e.preventDefault();
					this.runtime.trigger('whenKeyPressed', c);
				}
			}
			_onmousedown(e) {
				if (!this.runtime.isRunning)
					return;
				this.updateMousePosition(e);
				this.mousePressed = true;
				if (e.target === this.canvas) {
					this.clickMouse();
					e.preventDefault();
					this.canvas.focus();
				}
				this.onmousedown(e);
			}
			_onmouseup(e) {
				if (!this.runtime.isRunning)
					return;
				this.updateMousePosition(e);
				this.releaseMouse();
				this.onmouseup(e);
			}
			_onmousemove(e) {
				if (!this.runtime.isRunning)
					return;
				this.updateMousePosition(e);
				this.onmousemove(e);
			}
			_ontouchend(e) {
				if (!this.runtime.isRunning)
					return;
				this.releaseMouse();
				for (var i = 0; i < e.changedTouches.length; i++) {
					const t = e.changedTouches[i];
					this.ontouch(e, t);
				}
			}
			_ontouchstart(e) {
				if (!this.runtime.isRunning)
					return;
				this.mousePressed = true;
				for (var i = 0; i < e.changedTouches.length; i++) {
					const t = e.changedTouches[i];
					this.updateMousePosition(t);
					if (e.target === this.canvas) {
						this.clickMouse();
					}
					this.ontouch(e, t);
				}
				if (e.target === this.canvas)
					e.preventDefault();
			}
			_ontouchmove(e) {
				if (!this.runtime.isRunning)
					return;
				this.updateMousePosition(e.changedTouches[0]);
				for (var i = 0; i < e.changedTouches.length; i++) {
					const t = e.changedTouches[i];
					this.ontouch(e, t);
				}
			}
			ontouch(e, t) {}
			onmousedown(e) {}
			onmouseup(e) {}
			onmousemove(e) {}
			destroy() {
				this.runtime.stopAll();
				this.runtime.pause();
				this.stopAllSounds();
				for (const extension of this.extensions) {
					extension.destroy();
				}
				this.removeEventListeners();
			}
			pauseExtensions() {
				for (const extension of this.extensions) {
					extension.onpause();
				}
			}
			startExtensions() {
				for (const extension of this.extensions) {
					extension.onstart();
				}
			}
			focus() {
				if (this.promptId < this.nextPromptId) {
					this.prompt.focus();
				} else {
					this.canvas.focus();
				}
			}
			updateMousePosition(e) {
				var rect = this.canvas.getBoundingClientRect();
				var x = (e.clientX - rect.left) / this.zoom - 240;
				var y = 180 - (e.clientY - rect.top) / this.zoom;
				this.rawMouseX = x;
				this.rawMouseY = y;
				if (x < -240)
					x = -240;
				if (x > 240)
					x = 240;
				if (y < -180)
					y = -180;
				if (y > 180)
					y = 180;
				this.mouseX = Math.round(x);
				this.mouseY = Math.round(y);
			}
			setZoom(zoom) {
				if (this.zoom === zoom)
					return;
				this.renderer.resize(zoom);
				this.root.style.width = (480 * zoom | 0) + 'px';
				this.root.style.height = (360 * zoom | 0) + 'px';
				this.root.style.fontSize = (zoom * 10) + 'px';
				this.zoom = zoom;
				if (!this.runtime.isRunning) {
					for (const watcher of this.allWatchers) {
						if (watcher instanceof P.sb3.Scratch3ListWatcher) {
							watcher.updateList();
						}
					}
				}
			}
			clickMouse() {
				this.mouseSprite = undefined;
				for (var i = this.children.length; i--;) {
					var c = this.children[i];
					if (c.visible && c.filters.ghost < 100 && c.touching("_mouse_")) {
						if (c.isDraggable) {
							this.mouseSprite = c;
							c.mouseDown();
						} else {
							this.runtime.triggerFor(c, 'whenClicked');
						}
						return;
					}
				}
				this.runtime.triggerFor(this, 'whenClicked');
			}
			releaseMouse() {
				this.mousePressed = false;
				if (this.mouseSprite) {
					this.mouseSprite.mouseUp();
					this.mouseSprite = undefined;
				}
			}
			setFilter(name, value) {
				super.setFilter(name, value);
				this.renderer.onStageFiltersChanged();
			}
			resetFilters() {
				super.resetFilters();
				this.renderer.onStageFiltersChanged();
			}
			getObject(name) {
				for (var i = 0; i < this.children.length; i++) {
					var c = this.children[i];
					if (c.name === name && !c.isClone) {
						return c;
					}
				}
				if (name === "_stage_" || name === this.name) {
					return this;
				}
				return null;
			}
			getObjects(name) {
				const result = [];
				for (var i = 0; i < this.children.length; i++) {
					if (this.children[i].name === name) {
						result.push(this.children[i]);
					}
				}
				return result;
			}
			getPosition(name) {
				switch (name) {
					case "_mouse_":
						return {
							x: this.mouseX,
							y: this.mouseY,
						};
					case "_random_":
						return {
							x: Math.round(480 * Math.random() - 240),
							y: Math.round(360 * Math.random() - 180),
						};
				}
				const sprite = this.getObject(name);
				if (!sprite)
					return null;
				return {
					x: sprite.scratchX,
					y: sprite.scratchY,
				};
			}
			draw() {
				this.renderer.drawFrame();
				for (var i = this.allWatchers.length; i--;) {
					var w = this.allWatchers[i];
					if (w.visible) {
						w.update();
					}
				}
				if (this.hidePrompt) {
					this.hidePrompt = false;
					this.prompter.style.display = 'none';
					this.canvas.focus();
				}
			}
			showVideo(visible) {
				if (P.config.supportVideoSensing) {
					if (visible) {
						if (!this.videoElement) {
							this.videoElement = document.createElement('video');
							this.videoElement.onloadedmetadata = () => {
								this.videoElement.play();
							};
							this.videoElement.style.opacity = '0.5';
							this.root.insertBefore(this.videoElement, this.canvas);
							navigator.mediaDevices.getUserMedia({ video: true, audio: false })
								.then((stream) => this.videoElement.srcObject = stream);
						}
						this.videoElement.style.display = 'block';
					} else {
						if (this.videoElement) {
							this.videoElement.style.display = 'none';
						}
					}
				}
			}
			addExtension(extension) {
				this.extensions.push(extension);
			}
			initSpeech2Text() {
				if (!this.speech2text && P.ext.speech2text.isSupported()) {
					this.speech2text = new P.ext.speech2text.SpeechToTextExtension(this);
					this.addExtension(this.speech2text);
				}
			}
			initLoudness() {
				if (!this.microphone) {
					this.microphone = new P.ext.microphone.MicrophoneExtension(this);
					this.addExtension(this.microphone);
				}
			}
			stopAllSounds() {
				for (var children = this.children, i = children.length; i--;) {
					children[i].stopSounds();
				}
				this.stopSounds();
			}
			removeAllClones() {
				var i = this.children.length;
				while (i--) {
					if (this.children[i].isClone) {
						this.children[i].remove();
						this.children.splice(i, 1);
					}
				}
			}
			moveTo() {}
			forward() {}
			rotatedBounds() {
				return {
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				};
			}
			touching(thing) {
				if (thing == "_mouse_") {
					return true;
				}
				return false;
			}
			touchingColor(color) {
				return false;
			}
			colorTouchingColor(colorA, colorB) {
				return false;
			}
			submitPrompt() {
				if (this.promptId < this.nextPromptId) {
					this.answer = this.prompt.value;
					this.promptId += 1;
					if (this.promptId >= this.nextPromptId) {
						this.hidePrompt = true;
					}
				}
			}
			clearPen() {
				this.renderer.penClear();
			}
		}
		core.Stage = Stage;
		class Sprite extends Base {
			constructor(stage) {
				super();
				this.isSprite = true;
				this.isClone = false;
				this.direction = 90;
				this.rotationStyle = 0;
				this.isDraggable = false;
				this.isDragging = false;
				this.scale = 1;
				this.dragStartX = 0;
				this.dragStartY = 0;
				this.dragOffsetX = 0;
				this.dragOffsetY = 0;
				this.stage = stage;
			}
			mouseDown() {
				this.dragStartX = this.scratchX;
				this.dragStartY = this.scratchY;
				this.dragOffsetX = this.scratchX - this.stage.mouseX;
				this.dragOffsetY = this.scratchY - this.stage.mouseY;
				this.isDragging = true;
			}
			mouseUp() {
				if (this.isDragging && this.scratchX === this.dragStartX && this.scratchY === this.dragStartY) {
					this.stage.runtime.triggerFor(this, 'whenClicked');
				}
				this.isDragging = false;
			}
			rotatedBounds() {
				const costume = this.costumes[this.currentCostumeIndex];
				const scale = costume.scale * this.scale;
				var left = -costume.rotationCenterX * scale;
				var top = costume.rotationCenterY * scale;
				var right = left + costume.width * scale;
				var bottom = top - costume.height * scale;
				if (this.rotationStyle !== 0) {
					if (this.rotationStyle === 1 && this.direction < 0) {
						right = -left;
						left = right - costume.width * costume.scale * this.scale;
					}
					return {
						left: this.scratchX + left,
						right: this.scratchX + right,
						top: this.scratchY + top,
						bottom: this.scratchY + bottom
					};
				}
				const mSin = Math.sin(this.direction * Math.PI / 180);
				const mCos = Math.cos(this.direction * Math.PI / 180);
				const tlX = mSin * left - mCos * top;
				const tlY = mCos * left + mSin * top;
				const trX = mSin * right - mCos * top;
				const trY = mCos * right + mSin * top;
				const blX = mSin * left - mCos * bottom;
				const blY = mCos * left + mSin * bottom;
				const brX = mSin * right - mCos * bottom;
				const brY = mCos * right + mSin * bottom;
				return {
					left: this.scratchX + Math.min(tlX, trX, blX, brX),
					right: this.scratchX + Math.max(tlX, trX, blX, brX),
					top: this.scratchY + Math.max(tlY, trY, blY, brY),
					bottom: this.scratchY + Math.min(tlY, trY, blY, brY)
				};
			}
			showRotatedBounds() {
				var bounds = this.rotatedBounds();
				var div = document.createElement('div');
				div.style.outline = '1px solid red';
				div.style.position = 'absolute';
				div.style.left = (240 + bounds.left) + 'px';
				div.style.top = (180 - bounds.top) + 'px';
				div.style.width = (bounds.right - bounds.left) + 'px';
				div.style.height = (bounds.top - bounds.bottom) + 'px';
				this.stage.canvas.parentNode.appendChild(div);
			}
			createVariableWatcher(target, variableName) {
				return this.stage.createVariableWatcher(target, variableName);
			}
			forward(steps) {
				const d = (90 - this.direction) * Math.PI / 180;
				this.moveTo(this.scratchX + steps * Math.cos(d), this.scratchY + steps * Math.sin(d));
			}
			moveTo(x, y) {
				var ox = this.scratchX;
				var oy = this.scratchY;
				if (ox === x && oy === y && !this.isPenDown) {
					return;
				}
				this.scratchX = x;
				this.scratchY = y;
				if (this.isPenDown && !this.isDragging) {
					this.stage.renderer.penLine(this.penColor, this.penSize, ox, oy, x, y);
				}
				if (this.saying) {
					this.updateBubble();
				}
			}
			setDirection(degrees) {
				var d = degrees % 360;
				if (d > 180)
					d -= 360;
				if (d <= -180)
					d += 360;
				this.direction = d;
				if (this.saying)
					this.updateBubble();
			}
			clone() {
				const clone = this._clone();
				clone.isClone = true;
				for (const key of Object.keys(this.vars)) {
					clone.vars[key] = this.vars[key];
				}
				for (const key of Object.keys(this.lists)) {
					clone.lists[key] = this.lists[key].slice(0);
				}
				clone.filters = {
					color: this.filters.color,
					fisheye: this.filters.fisheye,
					whirl: this.filters.whirl,
					pixelate: this.filters.pixelate,
					mosaic: this.filters.mosaic,
					brightness: this.filters.brightness,
					ghost: this.filters.ghost
				};
				clone.procedures = this.procedures;
				clone.listeners = this.listeners;
				clone.fns = this.fns;
				clone.name = this.name;
				clone.costumes = this.costumes;
				clone.currentCostumeIndex = this.currentCostumeIndex;
				clone.sounds = this.sounds;
				clone.soundRefs = this.soundRefs;
				clone.direction = this.direction;
				clone.instrument = this.instrument;
				clone.isDraggable = this.isDraggable;
				clone.rotationStyle = this.rotationStyle;
				clone.scale = this.scale;
				clone.volume = this.volume;
				clone.scratchX = this.scratchX;
				clone.scratchY = this.scratchY;
				clone.visible = this.visible;
				clone.penSize = this.penSize;
				clone.penColor.copy(this.penColor);
				clone.isPenDown = this.isPenDown;
				clone.watchers = this.watchers;
				clone.listWatchers = this.listWatchers;
				return clone;
			}
			touching(thing) {
				if (thing === "_mouse_") {
					const x = this.stage.rawMouseX;
					const y = this.stage.rawMouseY;
					return this.stage.renderer.spriteTouchesPoint(this, x, y);
				} else if (thing === "_edge_") {
					const bounds = this.rotatedBounds();
					return bounds.left <= -240 || bounds.right >= 240 || bounds.top >= 180 || bounds.bottom <= -180;
				} else {
					if (!this.visible)
						return false;
					const sprites = this.stage.getObjects(thing);
					return this.stage.renderer.spritesIntersect(this, sprites);
				}
			}
			touchingColor(color) {
				return this.stage.renderer.spriteTouchesColor(this, color);
			}
			colorTouchingColor(sourceColor, touchingColor) {
				return this.stage.renderer.spriteColorTouchesColor(this, sourceColor, touchingColor);
			}
			bounceOffEdge() {
				var b = this.rotatedBounds();
				var dl = 240 + b.left;
				var dt = 180 - b.top;
				var dr = 240 - b.right;
				var db = 180 + b.bottom;
				var d = Math.min(dl, dt, dr, db);
				if (d > 0)
					return;
				var dir = this.direction * Math.PI / 180;
				var dx = Math.sin(dir);
				var dy = -Math.cos(dir);
				switch (d) {
					case dl:
						dx = Math.max(0.2, Math.abs(dx));
						break;
					case dt:
						dy = Math.max(0.2, Math.abs(dy));
						break;
					case dr:
						dx = -Math.max(0.2, Math.abs(dx));
						break;
					case db:
						dy = -Math.max(0.2, Math.abs(dy));
						break;
				}
				this.direction = Math.atan2(dy, dx) * 180 / Math.PI + 90;
				if (this.saying)
					this.updateBubble();
			}
			distanceTo(thing) {
				const p = this.stage.getPosition(thing);
				if (!p) {
					return 10000;
				}
				const x = p.x;
				const y = p.y;
				return Math.sqrt((this.scratchX - x) * (this.scratchX - x) + (this.scratchY - y) * (this.scratchY - y));
			}
			gotoObject(thing) {
				const position = this.stage.getPosition(thing);
				if (!position) {
					return 0;
				}
				this.moveTo(position.x, position.y);
			}
			pointTowards(thing) {
				const position = this.stage.getPosition(thing);
				if (!position) {
					return 0;
				}
				const dx = position.x - this.scratchX;
				const dy = position.y - this.scratchY;
				this.direction = dx === 0 && dy === 0 ? 90 : Math.atan2(dx, dy) * 180 / Math.PI;
				if (this.saying)
					this.updateBubble();
			}
		}
		core.Sprite = Sprite;
		class Costume {
			constructor(costumeData) {
				this.name = costumeData.name;
				this.scale = 1 / costumeData.bitmapResolution;
				this.rotationCenterX = costumeData.rotationCenterX;
				this.rotationCenterY = costumeData.rotationCenterY;
			}
		}
		core.Costume = Costume;
		class BitmapCostume extends Costume {
			constructor(image, options) {
				super(options);
				if (image.tagName === 'CANVAS') {
					const ctx = image.getContext('2d');
					if (!ctx) {
						throw new Error(`Cannot get 2d rendering context of costume image, despite it already being a canvas "${this.name}"`);
					}
					this.ctx = ctx;
				}
				this.image = image;
				this.width = image.width;
				this.height = image.height;
				this.isScalable = false;
			}
			getContext() {
				if (this.ctx) {
					return this.ctx;
				}
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');
				if (!ctx) {
					throw new Error(`cannot get 2d rendering context in getContext on Bitmap "${this.name}"`);
				}
				canvas.width = this.width;
				canvas.height = this.height;
				ctx.drawImage(this.image, 0, 0);
				this.ctx = ctx;
				return ctx;
			}
			getImage() {
				return this.image;
			}
			requestSize(scale) {
				throw new Error(`requestSize is not implemented on BitmapCostume "${this.name}" isScalable=${this.isScalable}`);
			}
		}
		core.BitmapCostume = BitmapCostume;
		class VectorCostume extends Costume {
			constructor(svg, options) {
				super(options);
				this.currentScale = 1;
				if (svg.height < 1 || svg.width < 1) {
					svg = new Image(1, 1);
				}
				this.isScalable = true;
				this.width = svg.width;
				this.height = svg.height;
				this.svg = svg;
				this.maxScale = this.calculateMaxScale();
			}
			calculateMaxScale() {
				if (VectorCostume.MAX_SIZE / this.width < VectorCostume.MAX_SCALE) {
					return VectorCostume.MAX_SIZE / this.width;
				}
				if (VectorCostume.MAX_SIZE / this.height < VectorCostume.MAX_SCALE) {
					return VectorCostume.MAX_SIZE / this.height;
				}
				return VectorCostume.MAX_SCALE;
			}
			render() {
				const width = Math.floor(Math.max(1, this.width * this.currentScale));
				const height = Math.floor(Math.max(1, this.height * this.currentScale));
				if (!this.canvas) {
					const canvas = document.createElement('canvas');
					canvas.width = width;
					canvas.height = height;
					const ctx = canvas.getContext('2d');
					if (!ctx) {
						const fmt = (n) => Math.round(n * 100) / 100;
						throw new Error(`cannot get 2d rendering context in initCanvas on Vector "${this.name}" @ ${fmt(this.currentScale)}/${fmt(this.maxScale)} | ${width}x${height}`);
					}
					this.canvas = canvas;
					this.ctx = ctx;
				} else {
					this.canvas.width = width;
					this.canvas.height = height;
				}
				this.ctx.drawImage(this.svg, 0, 0, width, height);
			}
			requestSize(costumeScale) {
				const scale = Math.min(Math.ceil(costumeScale), this.maxScale);
				if (this.currentScale < scale) {
					this.currentScale = scale;
					this.render();
				}
			}
			getContext() {
				if (this.ctx) {
					return this.ctx;
				}
				this.render();
				return this.ctx;
			}
			getImage() {
				if (this.canvas) {
					return this.canvas;
				}
				this.render();
				return this.canvas;
			}
		}
		VectorCostume.MAX_SCALE = 8;
		VectorCostume.MAX_SIZE = 1024;
		core.VectorCostume = VectorCostume;
		if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
			console.log('Vector scaling is disabled');
			VectorCostume.MAX_SCALE = 1;
		}
		class Sound {
			constructor(data) {
				this.source = null;
				if (!data.buffer)
					throw new Error('no AudioBuffer');
				this.name = data.name;
				this.buffer = data.buffer;
				this.duration = this.buffer.duration;
			}
			createSourceNode() {
				if (this.source) {
					this.source.disconnect();
				}
				this.source = P.audio.context.createBufferSource();
				this.source.buffer = this.buffer;
				this.source.start();
				return this.source;
			}
		}
		core.Sound = Sound;
		class Watcher {
			constructor(stage, targetName) {
				this.valid = true;
				this.visible = true;
				this.x = 0;
				this.y = 0;
				this.stage = stage;
				this.targetName = targetName;
			}
			init() {
				this.target = this.stage.getObject(this.targetName) || this.stage;
			}
			setVisible(visible) {
				this.visible = visible;
			}
		}
		core.Watcher = Watcher;
		class Procedure {
			constructor(fn, warp, inputs) {
				this.fn = fn;
				this.warp = warp;
				this.inputs = inputs;
			}
		}
		core.Procedure = Procedure;

		function isSprite(base) {
			return base.isSprite;
		}
		core.isSprite = isSprite;
	})(core = P.core || (P.core = {}));
})(P || (P = {}));
var P;
(function(P) {
	var fonts;
	(function(fonts_1) {
		const fontFamilyCache = {};
		fonts_1.scratch3 = {
			'Marker': 'fonts/Knewave-Regular.woff',
			'Handwriting': 'fonts/Handlee-Regular.woff',
			'Pixel': 'fonts/Grand9K-Pixel.ttf',
			'Curly': 'fonts/Griffy-Regular.woff',
			'Serif': 'fonts/SourceSerifPro-Regular.woff',
			'Sans Serif': 'fonts/NotoSans-Regular.woff',
		};

		function loadLocalFont(fontFamily, src) {
			if (fontFamilyCache[fontFamily]) {
				return Promise.resolve(fontFamilyCache[fontFamily]);
			}
			return P.io.getAssetManager().loadFont(src)
				.then((blob) => P.io.readers.toDataURL(blob))
				.then((url) => {
					fontFamilyCache[fontFamily] = url;
					return url;
				});
		}
		fonts_1.loadLocalFont = loadLocalFont;

		function getFont(fontFamily) {
			if (!(fontFamily in fontFamilyCache)) {
				return null;
			}
			return fontFamilyCache[fontFamily];
		}

		function getCSSFontFace(fontFamily, src) {
			return `@font-face { font-family: "${fontFamily}"; src: url("${src}"); }`;
		}

		function addFontRules(svg, fonts) {
			const cssRules = [];
			for (const fontName of fonts) {
				const font = getFont(fontName);
				if (!font) {
					console.warn('unknown font from cache', fontName);
					continue;
				}
				cssRules.push(getCSSFontFace(fontName, font));
			}
			const doc = svg.ownerDocument;
			const defs = doc.createElementNS('http://www.w3.org/2000/svg', 'defs');
			const style = doc.createElementNS('http://www.w3.org/2000/svg', 'style');
			style.innerHTML = cssRules.join('\n');
			defs.appendChild(style);
			svg.appendChild(style);
		}
		fonts_1.addFontRules = addFontRules;

		function loadWebFont(name) {
			const observer = new FontFaceObserver(name);
			return observer.load();
		}
		fonts_1.loadWebFont = loadWebFont;
	})(fonts = P.fonts || (P.fonts = {}));
})(P || (P = {}));
var P;
(function(P) {
	var i18n;
	(function(i18n) {
		'use strict';
		const SUPPORTED_LANGUAGES = ['en', 'es'];
		const DEFAULT_LANGUAGE = 'en';

		function getLanguage() {
			let language = navigator.language;
			if (language.indexOf('-') > -1) {
				language = language.substring(0, language.indexOf('-'));
			}
			if (SUPPORTED_LANGUAGES.indexOf(language) === -1) {
				language = DEFAULT_LANGUAGE;
			}
			return language;
		}
		const translations = {};
		const defaultTranslations = {};
		const language = getLanguage();

		function translate(messageId) {
			if (translations[messageId]) {
				return translations[messageId];
			}
			if (defaultTranslations[messageId]) {
				return defaultTranslations[messageId];
			}
			console.warn('Missing translation:', messageId);
			return '## ' + messageId + ' ##';
		}
		i18n.translate = translate;

		function translateElement(element) {
			const translatable = element.querySelectorAll('[data-i18n]');
			for (var i = 0; i < translatable.length; i++) {
				const el = translatable[i];
				const messageId = el.getAttribute('data-i18n');
				if (messageId === null)
					continue;
				const result = translate(messageId);
				el.textContent = result;
			}
		}
		i18n.translateElement = translateElement;

		function merge(into, source) {
			for (const key of Object.keys(source)) {
				into[key] = source[key];
			}
		}

		function addTranslations(importedLanguage, importedTranslations) {
			if (importedLanguage === language) {
				merge(translations, importedTranslations);
			} else if (importedLanguage === DEFAULT_LANGUAGE) {
				merge(defaultTranslations, importedTranslations);
			}
		}
		i18n.addTranslations = addTranslations;
		addTranslations('en', {
			'player.controls.turboIndicator': 'Turbo Mode',
			'player.controls.fullscreen.title': 'Click to fullscreen player, Shift+click to just maximize.',
			'player.controls.flag.title': 'Shift+click to enable turbo mode.',
			'player.controls.flag.title.enabled': 'Turbo mode is enabled. Shift+click to disable turbo mode.',
			'player.controls.flag.title.disabled': 'Turbo mode is disabled. Shift+click to enable turbo mode.',
			'player.errorhandler.error': 'An internal error occurred. <a $attrs>Click here</a> to file a bug report.',
			'player.errorhandler.error.unsupported': 'This project type ($type) is not supported. For more information and workarounds, <a href="https://github.com/forkphorus/forkphorus/wiki/On-Scratch-1-Projects" target="_blank" rel="noopener">visit this help page</a>.',
			'player.errorhandler.error.doesnotexist': 'There is no project with ID $id (Project was probably deleted, never existed, or you made a typo.)',
			'player.errorhandler.instructions': 'Describe what you were doing to cause this error:',
		});
		addTranslations('es', {
			'player.controls.turboIndicator': 'Modo Turbo',
		});
	})(i18n = P.i18n || (P.i18n = {}));
})(P || (P = {}));
var P;
(function(P) {
	var io;
	(function(io) {
		io.config = {
			localPath: '',
		};
		if (['http:', 'https:'].indexOf(location.protocol) === -1) {
			io.config.localPath = 'https://forkphorus.github.io';
		}
		let readers;
		(function(readers) {
			function toArrayBuffer(object) {
				return new Promise((resolve, reject) => {
					const fileReader = new FileReader();
					fileReader.onloadend = function() {
						resolve(fileReader.result);
					};
					fileReader.onerror = function(err) {
						reject('Could not read object');
					};
					fileReader.readAsArrayBuffer(object);
				});
			}
			readers.toArrayBuffer = toArrayBuffer;

			function toDataURL(object) {
				return new Promise((resolve, reject) => {
					const fileReader = new FileReader();
					fileReader.onloadend = function() {
						resolve(fileReader.result);
					};
					fileReader.onerror = function(err) {
						reject('Could not read object');
					};
					fileReader.readAsDataURL(object);
				});
			}
			readers.toDataURL = toDataURL;

			function toText(object) {
				return new Promise((resolve, reject) => {
					const fileReader = new FileReader();
					fileReader.onloadend = function() {
						resolve(fileReader.result);
					};
					fileReader.onerror = function(err) {
						reject('Could not read object');
					};
					fileReader.readAsText(object);
				});
			}
			readers.toText = toText;
		})(readers = io.readers || (io.readers = {}));
		class FetchingAssetManager {
			constructor() {
				this.soundbankSource = 'soundbank/';
			}
			loadSoundbankFile(src) {
				return this.loadArrayBuffer(this.soundbankSource + src);
			}
			loadFont(src) {
				return this.loadBlob(src);
			}
			loadArrayBuffer(src) {
				return new Request(io.config.localPath + src).load('arraybuffer');
			}
			loadBlob(src) {
				return new Request(io.config.localPath + src).load('blob');
			}
		}
		var globalAssetManager = new FetchingAssetManager();

		function getAssetManager() {
			return globalAssetManager;
		}
		io.getAssetManager = getAssetManager;

		function setAssetManager(newManager) {
			globalAssetManager = newManager;
		}
		io.setAssetManager = setAssetManager;
		class AbstractTask {
			setLoader(loader) {
				this.loader = loader;
			}
			updateLoaderProgress() {
				if (this.loader) {
					this.loader.updateProgress();
				}
			}
		}
		io.AbstractTask = AbstractTask;
		class Retry extends AbstractTask {
			try (handle) {
				return new Promise((resolve, reject) => {
					handle()
						.then((response) => resolve(response))
						.catch((err) => {
							if (this.aborted) {
								reject(err);
								return;
							}
							console.warn(`First attempt to ${this.getRetryWarningDescription()} failed, trying again.`, err);
							setTimeout(() => {
								handle()
									.then((response) => resolve(response))
									.catch((err) => reject(err));
							}, 250);
						});
				});
			}
			getRetryWarningDescription() {
				return 'complete task';
			}
			abort() {
				this.aborted = true;
			}
		}
		io.Retry = Retry;
		class Request extends Retry {
			constructor(url) {
				super();
				this.url = url;
				this.shouldIgnoreErrors = false;
				this.workComputable = false;
				this.totalWork = 0;
				this.completedWork = 0;
				this.complete = false;
				this.status = 0;
				this.xhr = null;
			}
			isComplete() {
				return this.complete;
			}
			isWorkComputable() {
				return this.workComputable;
			}
			getTotalWork() {
				return this.totalWork;
			}
			getCompletedWork() {
				return this.completedWork;
			}
			abort() {
				super.abort();
				if (this.xhr) {
					this.xhr.abort();
				}
			}
			ignoreErrors() {
				this.shouldIgnoreErrors = true;
				return this;
			}
			getStatus() {
				return this.status;
			}
			updateProgress(event) {
				this.workComputable = event.lengthComputable;
				this.totalWork = event.total;
				this.completedWork = event.loaded;
				this.updateLoaderProgress();
			}
			_load() {
				return new Promise((resolve, reject) => {
					const xhr = new XMLHttpRequest();
					xhr.addEventListener('load', () => {
						this.status = xhr.status;
						if (Request.acceptableResponseCodes.indexOf(xhr.status) !== -1 || this.shouldIgnoreErrors) {
							resolve(xhr.response);
						} else {
							reject(new Error(`HTTP Error ${xhr.status} while downloading ${this.url}`));
						}
					});
					xhr.addEventListener('progress', (e) => {
						this.updateProgress(e);
					});
					xhr.addEventListener('loadstart', (e) => {
						this.updateProgress(e);
					});
					xhr.addEventListener('loadend', (e) => {
						this.complete = true;
						this.updateProgress(e);
					});
					xhr.addEventListener('error', (err) => {
						reject(`Error while downloading ${this.url} (error) (${xhr.status}/${xhr.readyState})`);
					});
					xhr.addEventListener('abort', (err) => {
						this.aborted = true;
						reject(`Error while downloading ${this.url} (abort) (${xhr.status}/${xhr.readyState})`);
					});
					xhr.open('GET', this.url);
					xhr.responseType = this.responseType;
					this.xhr = xhr;
					setTimeout(xhr.send.bind(xhr));
				});
			}
			load(type) {
				this.responseType = type;
				return this.try(() => this._load());
			}
			getRetryWarningDescription() {
				return `download ${this.url}`;
			}
		}
		Request.acceptableResponseCodes = [0, 200];
		io.Request = Request;
		class Img extends Retry {
			constructor(src) {
				super();
				this.src = src;
				this.complete = false;
			}
			isComplete() {
				return this.complete;
			}
			isWorkComputable() {
				return false;
			}
			getTotalWork() {
				return 0;
			}
			getCompletedWork() {
				return 0;
			}
			_load() {
				return new Promise((resolve, reject) => {
					const image = new Image();
					image.onload = () => {
						this.complete = true;
						this.updateLoaderProgress();
						resolve(image);
					};
					image.onerror = (err) => {
						reject('Failed to load image: ' + image.src);
					};
					image.crossOrigin = 'anonymous';
					image.src = this.src;
				});
			}
			load() {
				return this.try(() => this._load());
			}
			getRetryWarningDescription() {
				return `download image ${this.src}`;
			}
		}
		io.Img = Img;
		class Manual extends AbstractTask {
			constructor() {
				super(...arguments);
				this.complete = false;
				this.aborted = false;
			}
			markComplete() {
				this.complete = true;
				this.updateLoaderProgress();
			}
			isComplete() {
				return this.complete;
			}
			isWorkComputable() {
				return false;
			}
			getTotalWork() {
				return 0;
			}
			getCompletedWork() {
				return 0;
			}
			abort() {
				this.aborted = true;
			}
		}
		io.Manual = Manual;
		class PromiseTask extends Manual {
			constructor(promise) {
				super();
				promise.then(() => this.markComplete());
			}
		}
		io.PromiseTask = PromiseTask;
		class Loader {
			constructor() {
				this._tasks = [];
				this.aborted = false;
				this.error = false;
			}
			calculateProgress() {
				if (this.aborted) {
					return 1;
				}
				const totalTasks = this._tasks.length;
				if (totalTasks === 0) {
					return 0;
				}
				let totalWork = 0;
				let completedWork = 0;
				let finishedTasks = 0;
				let uncomputable = 0;
				for (const task of this._tasks) {
					if (task.isComplete()) {
						finishedTasks++;
					}
					if (task.isWorkComputable()) {
						completedWork += task.getCompletedWork();
						totalWork += task.getTotalWork();
					} else {
						uncomputable++;
					}
				}
				if (totalWork === 0) {
					return finishedTasks / totalTasks;
				}
				if (uncomputable > 0) {
					const averageWork = totalWork / (totalTasks - uncomputable) * uncomputable;
					totalWork = 0;
					completedWork = 0;
					for (const task of this._tasks) {
						if (task.isWorkComputable()) {
							completedWork += task.getCompletedWork();
							totalWork += task.getTotalWork();
						} else {
							totalWork += averageWork;
							if (task.isComplete())
								completedWork += averageWork;
						}
					}
				}
				return completedWork / totalWork;
			}
			updateProgress() {
				if (this.error) {
					return;
				}
				const progress = this.calculateProgress();
				this.onprogress(progress);
			}
			resetTasks() {
				this._tasks = [];
				this.updateProgress();
			}
			addTask(task) {
				this._tasks.push(task);
				task.setLoader(this);
				return task;
			}
			abort() {
				this.aborted = true;
				for (const task of this._tasks) {
					task.abort();
				}
			}
			onprogress(progress) {}
		}
		io.Loader = Loader;
	})(io = P.io || (P.io = {}));
})(P || (P = {}));
var P;
(function(P) {
	var utils;
	(function(utils) {
		function parseRotationStyle(style) {
			switch (style) {
				case 'leftRight':
				case 'left-right':
					return 1;
				case 'none':
				case 'don\'t rotate':
					return 2;
				case 'normal':
				case 'all around':
					return 0;
			}
			console.warn('unknown rotation style', style);
			return 0;
		}
		utils.parseRotationStyle = parseRotationStyle;

		function rgbToHSL(r, g, b) {
			r /= 255;
			g /= 255;
			b /= 255;
			var min = Math.min(r, g, b);
			var max = Math.max(r, g, b);
			if (min === max) {
				return [0, 0, r];
			}
			var c = max - min;
			var l = (min + max) / 2;
			var s = c / (1 - Math.abs(2 * l - 1));
			var h;
			switch (max) {
				case r:
					h = ((g - b) / c + 6) % 6;
					break;
				case g:
					h = (b - r) / c + 2;
					break;
				case b:
					h = (r - g) / c + 4;
					break;
			}
			h *= 60;
			return [h, s, l];
		}
		utils.rgbToHSL = rgbToHSL;

		function rgbToHSV(r, g, b) {
			r /= 255;
			g /= 255;
			b /= 255;
			var max = Math.max(r, g, b),
				min = Math.min(r, g, b);
			var h, s, v = max;
			var d = max - min;
			s = max == 0 ? 0 : d / max;
			if (max == min) {
				h = 0;
			} else {
				switch (max) {
					case r:
						h = (g - b) / d + (g < b ? 6 : 0);
						break;
					case g:
						h = (b - r) / d + 2;
						break;
					case b:
						h = (r - g) / d + 4;
						break;
				}
				h /= 6;
			}
			return [h * 360, s, v];
		}
		utils.rgbToHSV = rgbToHSV;

		function hsvToRGB(h, s, v) {
			var r, g, b;
			var i = Math.floor(h * 6);
			var f = h * 6 - i;
			var p = v * (1 - s);
			var q = v * (1 - f * s);
			var t = v * (1 - (1 - f) * s);
			switch (i % 6) {
				case 0:
					r = v, g = t, b = p;
					break;
				case 1:
					r = q, g = v, b = p;
					break;
				case 2:
					r = p, g = v, b = t;
					break;
				case 3:
					r = p, g = q, b = v;
					break;
				case 4:
					r = t, g = p, b = v;
					break;
				case 5:
					r = v, g = p, b = q;
					break;
			}
			return [r * 255, g * 255, b * 255];
		}
		utils.hsvToRGB = hsvToRGB;

		function hslToHSV(h, s, l) {
			var v = l + s * Math.min(l, 1 - l);
			var s = v === 0 ? 0 : 2 - 2 * l / v;
			return [h, s, v];
		}
		utils.hslToHSV = hslToHSV;

		function hsvToHSL(h, s, v) {
			var l = v - v * s / 2;
			var s = l === 0 ? 0 : (v - l) / Math.min(2 - 2 * l / v);
			return [h, s, l];
		}
		utils.hsvToHSL = hsvToHSL;

		function clamp(number, min, max) {
			return Math.min(max, Math.max(min, number));
		}
		utils.clamp = clamp;

		function settled(promise) {
			return new Promise((resolve, _reject) => {
				promise
					.then(() => resolve())
					.catch(() => resolve());
			});
		}
		utils.settled = settled;
	})(utils = P.utils || (P.utils = {}));
})(P || (P = {}));
var P;
(function(P) {
	var player;
	(function(player_1) {
		class PlayerError extends Error {
			constructor() {
				super(...arguments);
				this.handledByPlayer = true;
			}
		}
		player_1.PlayerError = PlayerError;
		class ProjectNotSupportedError extends PlayerError {
			constructor(type) {
				super('Project type (' + type + ') is not supported');
				this.type = type;
				this.name = 'ProjectNotSupportedError';
			}
		}
		player_1.ProjectNotSupportedError = ProjectNotSupportedError;
		class ProjectDoesNotExistError extends PlayerError {
			constructor(id) {
				super('Project with ID ' + id + ' does not exist');
				this.id = id;
				this.name = 'ProjectDoesNotExistError';
			}
		}
		player_1.ProjectDoesNotExistError = ProjectDoesNotExistError;
		class LoaderIdentifier {
			constructor() {
				this.active = true;
				this.loader = null;
			}
			cancel() {
				if (!this.active) {
					throw new Error('cannot cancel: already cancelled');
				}
				this.active = false;
				if (this.loader) {
					this.loader.abort();
				}
			}
			setLoader(loader) {
				if (!this.active) {
					throw new Error('Loading aborted');
				}
				this.loader = loader;
			}
			isActive() {
				return this.active;
			}
		}
		class Slot {
			constructor() {
				this._listeners = [];
			}
			subscribe(fn) {
				this._listeners.push(fn);
			}
			emit(value) {
				for (const listener of this._listeners) {
					listener(value);
				}
			}
		}
		class LocalProjectMeta {
			constructor(filename) {
				this.filename = filename;
			}
			load() {
				return Promise.resolve(this);
			}
			getTitle() {
				return this.filename;
			}
			getId() {
				return null;
			}
		}
		class RemoteProjectMeta {
			constructor(id) {
				this.id = id;
				this.title = null;
			}
			load() {
				return new P.io.Request('https://scratch.garbomuffin.com/proxy/projects/$id'.replace('$id', this.id))
					.ignoreErrors()
					.load('json')
					.then((data) => {
						if (data.title) {
							this.title = data.title;
						}
						return this;
					});
			}
			getTitle() {
				return this.title;
			}
			getId() {
				return this.id;
			}
		}
		class Player {
			constructor(options = {}) {
				this.onprogress = new Slot();
				this.onload = new Slot();
				this.onstartload = new Slot();
				this.oncleanup = new Slot();
				this.onthemechange = new Slot();
				this.onerror = new Slot();
				this.onresume = new Slot();
				this.onpause = new Slot();
				this.onoptionschange = new Slot();
				this.MAGIC = {
					LARGE_Z_INDEX: '9999999999',
					CLOUD_HISTORY_API: 'https://scratch.garbomuffin.com/cloud-proxy/logs/$id?limit=100',
					PROJECT_API: 'https://projects.scratch.mit.edu/$id',
				};
				this.projectMeta = null;
				this.currentLoader = null;
				this.fullscreenEnabled = false;
				this.clickToPlayContainer = null;
				this.root = document.createElement('div');
				this.root.className = 'player-root';
				this.playerContainer = document.createElement('div');
				this.playerContainer.className = 'player-stage';
				this.root.appendChild(this.playerContainer);
				this.setOptions(Object.assign(Object.assign({}, options), Player.DEFAULT_OPTIONS));
				window.addEventListener('resize', () => this.updateFullscreen());
				document.addEventListener('fullscreenchange', () => this.onfullscreenchange());
				document.addEventListener('mozfullscreenchange', () => this.onfullscreenchange());
				document.addEventListener('webkitfullscreenchange', () => this.onfullscreenchange());
				this.handleError = this.handleError.bind(this);
			}
			enableAttribute(name) {
				this.root.setAttribute(name, '');
			}
			disableAttribute(name) {
				this.root.removeAttribute(name);
			}
			setAttribute(name, enabled) {
				if (enabled) {
					this.enableAttribute(name);
				} else {
					this.disableAttribute(name);
				}
			}
			setOptions(changedOptions) {
				this.options = Object.assign(Object.assign({}, this.options), changedOptions);
				if (typeof changedOptions.turbo !== 'undefined') {
					this.setAttribute('turbo', changedOptions.turbo);
				}
				if (typeof changedOptions.theme !== 'undefined') {
					this.root.setAttribute('theme', changedOptions.theme);
					this.onthemechange.emit(changedOptions.theme);
				}
				if (this.hasStage()) {
					this.applyOptionsToStage();
				}
				this.onoptionschange.emit(changedOptions);
			}
			getOptions() {
				return this.options;
			}
			addControls(options = {}) {
				if (this.controlsContainer) {
					throw new Error('This player already has controls.');
				}
				let flagTouchTimeout = undefined;
				const clickStop = (e) => {
					this.throwWithoutStage();
					this.stopAll();
					this.stage.draw();
					e.preventDefault();
				};
				const clickPause = (e) => {
					this.toggleRunning();
				};
				const clickFullscreen = (e) => {
					this.throwWithoutStage();
					this.setOptions({ fullscreenMode: e.shiftKey ? 'window' : 'full' });
					if (this.fullscreenEnabled) {
						this.exitFullscreen();
					} else {
						this.enterFullscreen();
					}
				};
				const clickFlag = (e) => {
					if (flagTouchTimeout === null) {
						return;
					}
					if (flagTouchTimeout) {
						clearTimeout(flagTouchTimeout);
					}
					this.throwWithoutStage();
					if (e.shiftKey) {
						this.setOptions({ turbo: !this.options.turbo });
					} else {
						this.triggerGreenFlag();
					}
					this.focus();
					e.preventDefault();
				};
				const startTouchFlag = (e) => {
					flagTouchTimeout = setTimeout(() => {
						flagTouchTimeout = null;
						this.setOptions({ turbo: !this.options.turbo });
					}, 500);
				};
				const preventDefault = (e) => {
					e.preventDefault();
				};
				this.controlsContainer = document.createElement('div');
				this.controlsContainer.className = 'player-controls';
				if (options.enableStop !== false) {
					var stopButton = document.createElement('span');
					stopButton.className = 'player-button player-stop';
					this.controlsContainer.appendChild(stopButton);
					stopButton.addEventListener('click', clickStop);
					stopButton.addEventListener('touchend', clickStop);
					stopButton.addEventListener('touchstart', preventDefault);
				}
				if (options.enablePause !== false) {
					var pauseButton = document.createElement('span');
					pauseButton.className = 'player-button player-pause';
					this.controlsContainer.appendChild(pauseButton);
					pauseButton.addEventListener('click', clickPause);
					pauseButton.addEventListener('touchend', clickPause);
					pauseButton.addEventListener('touchstart', preventDefault);
				}
				if (options.enableFlag !== false) {
					var flagButton = document.createElement('span');
					flagButton.className = 'player-button player-flag';
					flagButton.title = P.i18n.translate('player.controls.flag.title');
					this.controlsContainer.appendChild(flagButton);
					flagButton.addEventListener('click', clickFlag);
					flagButton.addEventListener('touchend', clickFlag);
					flagButton.addEventListener('touchstart', startTouchFlag);
					flagButton.addEventListener('touchstart', preventDefault);
				}
				if (options.enableTurbo !== false) {
					var turboText = document.createElement('span');
					turboText.innerText = P.i18n.translate('player.controls.turboIndicator');
					turboText.className = 'player-label player-turbo';
					this.controlsContainer.appendChild(turboText);
					this.onoptionschange.subscribe((options) => {
						if (flagButton && typeof options.turbo === 'boolean') {
							if (options.turbo) {
								flagButton.title = P.i18n.translate('player.controls.flag.title.enabled');
							} else {
								flagButton.title = P.i18n.translate('player.controls.flag.title.disabled');
							}
						}
					});
				}
				if (options.enableFullscreen !== false) {
					var fullscreenButton = document.createElement('span');
					fullscreenButton.className = 'player-button player-fullscreen-btn';
					fullscreenButton.title = P.i18n.translate('player.controls.fullscreen.title');
					this.controlsContainer.appendChild(fullscreenButton);
					fullscreenButton.addEventListener('click', clickFullscreen);
					fullscreenButton.addEventListener('touchend', clickFullscreen);
					fullscreenButton.addEventListener('touchstart', preventDefault);
				}
				this.root.addEventListener('touchmove', (e) => {
					if (this.fullscreenEnabled) {
						e.preventDefault();
					}
				});
				this.root.insertBefore(this.controlsContainer, this.root.firstChild);
			}
			applyOptionsToStage() {
				if (this.stage.runtime.framerate !== this.options.fps) {
					this.stage.runtime.framerate = this.options.fps;
					if (this.isRunning()) {
						this.stage.runtime.resetInterval();
					}
				}
				this.stage.username = this.options.username;
				this.stage.runtime.isTurbo = this.options.turbo;
				this.stage.renderer.imageSmoothingEnabled = this.options.imageSmoothing;
			}
			throwWithoutStage() {
				if (!this.stage) {
					throw new Error('Missing stage.');
				}
			}
			resume() {
				this.throwWithoutStage();
				if (this.isRunning()) {
					throw new Error('cannot resume: project is already running');
				}
				this.stage.runtime.start();
				this.enableAttribute('running');
				this.onresume.emit();
			}
			pause() {
				this.throwWithoutStage();
				if (!this.isRunning()) {
					throw new Error('cannot pause: project is already paused');
				}
				this.stage.runtime.pause();
				this.disableAttribute('running');
				this.onpause.emit();
			}
			isRunning() {
				if (!this.hasStage()) {
					return false;
				}
				return this.stage.runtime.isRunning;
			}
			toggleRunning() {
				this.throwWithoutStage();
				if (this.stage.runtime.isRunning) {
					this.pause();
				} else {
					this.resume();
				}
			}
			stopAll() {
				this.throwWithoutStage();
				this.pause();
				this.stage.runtime.stopAll();
			}
			triggerGreenFlag() {
				this.throwWithoutStage();
				if (!this.isRunning()) {
					this.resume();
				}
				this.stage.runtime.stopAll();
				this.stage.runtime.triggerGreenFlag();
				if (this.clickToPlayContainer) {
					this.removeClickToPlayContainer();
				}
			}
			cleanup() {
				if (this.currentLoader) {
					this.currentLoader.cancel();
					this.currentLoader = null;
				}
				if (this.clickToPlayContainer) {
					this.removeClickToPlayContainer();
				}
				if (this.fullscreenEnabled) {
					this.exitFullscreen();
				}
				if (this.stage) {
					this.stage.destroy();
					this.stage = null;
				}
				this.projectMeta = null;
				while (this.playerContainer.firstChild) {
					this.playerContainer.removeChild(this.playerContainer.firstChild);
				}
				this.oncleanup.emit();
			}
			focus() {
				this.stage.focus();
			}
			hasStage() {
				return !!this.stage;
			}
			getStage() {
				this.throwWithoutStage();
				return this.stage;
			}
			hasProjectMeta() {
				return !!this.projectMeta;
			}
			getProjectMeta() {
				if (!this.projectMeta) {
					throw new Error('no project meta');
				}
				return this.projectMeta;
			}
			handleError(error) {
				console.error(error);
				this.onerror.emit(error);
			}
			enterFullscreen() {
				this.savedTheme = this.root.getAttribute('theme');
				this.setOptions({ theme: 'dark' });
				if (this.options.fullscreenMode === 'full') {
					if (this.root.requestFullScreenWithKeys) {
						this.root.requestFullScreenWithKeys();
					} else if (this.root.webkitRequestFullScreen) {
						this.root.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
					} else if (this.root.requestFullscreen) {
						this.root.requestFullscreen();
					}
				}
				document.body.classList.add('player-body-fullscreen');
				this.root.style.zIndex = this.MAGIC.LARGE_Z_INDEX;
				this.enableAttribute('fullscreen');
				this.fullscreenEnabled = true;
				if (this.hasStage()) {
					if (!this.isRunning()) {
						this.stage.draw();
					}
					this.focus();
				}
				this.updateFullscreen();
			}
			exitFullscreen() {
				this.setOptions({ theme: this.savedTheme });
				this.disableAttribute('fullscreen');
				this.fullscreenEnabled = false;
				if (document.fullscreenElement === this.root || document.webkitFullscreenElement === this.root) {
					if (document.exitFullscreen) {
						document.exitFullscreen();
					} else if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					} else if (document.webkitCancelFullScreen) {
						document.webkitCancelFullScreen();
					} else if (document.webkitExitFullscreen) {
						document.webkitExitFullscreen();
					}
				}
				this.root.style.paddingLeft = '';
				this.root.style.paddingTop = '';
				this.root.style.zIndex = '';
				if (this.controlsContainer) {
					this.controlsContainer.style.width = '';
				}
				document.body.classList.remove('player-body-fullscreen');
				if (this.stage) {
					this.stage.setZoom(1);
					this.focus();
				}
			}
			updateFullscreen() {
				if (!this.fullscreenEnabled) {
					return;
				}
				this.throwWithoutStage();
				const controlsHeight = this.controlsContainer ? this.controlsContainer.offsetHeight : 0;
				window.scrollTo(0, 0);
				let w = window.innerWidth - this.options.fullscreenPadding * 2;
				let h = window.innerHeight - this.options.fullscreenPadding - controlsHeight;
				w = Math.min(w, h / 0.75);
				w = Math.min(w, this.options.fullscreenMaxWidth);
				h = w * 0.75 + controlsHeight;
				if (this.controlsContainer) {
					this.controlsContainer.style.width = w + 'px';
				}
				this.root.style.paddingLeft = (window.innerWidth - w) / 2 + 'px';
				this.root.style.paddingTop = (window.innerHeight - h - this.options.fullscreenPadding) / 2 + 'px';
				this.stage.setZoom(w / 480);
			}
			onfullscreenchange() {
				if (typeof document.fullscreen === 'boolean' && document.fullscreen !== this.fullscreenEnabled) {
					this.exitFullscreen();
				} else if (typeof document.webkitIsFullScreen === 'boolean' && document.webkitIsFullScreen !== this.fullscreenEnabled) {
					this.exitFullscreen();
				}
			}
			isCloudVariable(variableName) {
				return variableName.startsWith('☁');
			}
			getCloudVariables(id) {
				return __awaiter(this, void 0, void 0, function*() {
					const data = yield new P.io.Request(this.MAGIC.CLOUD_HISTORY_API.replace('$id', id)).load('json');
					const variables = Object.create(null);
					for (const entry of data.reverse()) {
						const { verb, name, value } = entry;
						if (!this.isCloudVariable(name)) {
							console.warn('cloud variable logs affecting non-cloud variable, skipping', name);
							continue;
						}
						switch (verb) {
							case 'create_var':
							case 'set_var':
								variables[name] = value;
								break;
							case 'del_var':
								delete variables[name];
								break;
							case 'rename_var':
								variables[value] = variables[name];
								delete variables[name];
								break;
							default:
								console.warn('unknown cloud variable log verb', verb);
						}
					}
					return variables;
				});
			}
			addCloudVariables(stage, id) {
				const variables = Object.keys(stage.vars);
				const hasCloudVariables = variables.some(this.isCloudVariable);
				if (!hasCloudVariables) {
					return;
				}
				this.getCloudVariables(id).then((variables) => {
					for (const name of Object.keys(variables)) {
						if (name in stage.vars) {
							stage.vars[name] = variables[name];
						} else {
							console.warn('not applying unknown cloud variable:', name);
						}
					}
				});
			}
			enactAutoplayPolicy(policy) {
				switch (policy) {
					case 'always':
						{
							this.triggerGreenFlag();
							break;
						}
					case 'if-audio-playable':
						{
							if (!P.audio.context || P.audio.context.state === 'running') {
								this.triggerGreenFlag();
							} else {
								this.showClickToPlayContainer();
							}
							break;
						}
					case 'never':
						{
							this.showClickToPlayContainer();
							break;
						}
				}
			}
			showClickToPlayContainer() {
				if (this.clickToPlayContainer) {
					throw new Error('cannot show click-to-play interface: already shown');
				}
				this.clickToPlayContainer = document.createElement('div');
				this.clickToPlayContainer.className = 'player-click-to-play-container';
				this.clickToPlayContainer.onclick = () => {
					this.removeClickToPlayContainer();
					this.triggerGreenFlag();
					this.focus();
				};
				const content = document.createElement('div');
				content.className = 'player-click-to-play-icon';
				this.clickToPlayContainer.appendChild(content);
				this.stage.ui.appendChild(this.clickToPlayContainer);
			}
			removeClickToPlayContainer() {
				if (this.clickToPlayContainer === null) {
					throw new Error('cannot hide click-to-play interface: already hidden');
				}
				this.stage.ui.removeChild(this.clickToPlayContainer);
				this.clickToPlayContainer = null;
			}
			beginLoadingProject() {
				this.cleanup();
				this.onstartload.emit();
				const loaderId = new LoaderIdentifier();
				this.currentLoader = loaderId;
				return { loaderId };
			}
			determineProjectType(data) {
				if ('objName' in data)
					return 'sb2';
				if ('targets' in data)
					return 'sb3';
				throw new Error('Unknown project type');
			}
			isScratch1Project(buffer) {
				const MAGIC = 'ScratchV0';
				const array = new Uint8Array(buffer);
				for (var i = 0; i < MAGIC.length; i++) {
					if (String.fromCharCode(array[i]) !== MAGIC[i]) {
						return false;
					}
				}
				return true;
			}
			fetchProject(id) {
				const request = new P.io.Request(this.MAGIC.PROJECT_API.replace('$id', id));
				return request
					.ignoreErrors()
					.load('blob')
					.then(function(response) {
						if (request.getStatus() === 404) {
							throw new ProjectDoesNotExistError(id);
						}
						return response;
					});
			}
			setStage(stage) {
				this.stage = stage;
				this.stage.runtime.handleError = this.handleError;
				this.applyOptionsToStage();
				this.playerContainer.appendChild(stage.root);
				stage.focus();
				stage.draw();
				this.onload.emit(stage);
				this.enactAutoplayPolicy(this.options.autoplayPolicy);
			}
			loadLoader(loaderId, loader) {
				return __awaiter(this, void 0, void 0, function*() {
					loaderId.setLoader(loader);
					loader.onprogress = (progress) => {
						if (loaderId.isActive()) {
							this.onprogress.emit(progress);
						}
					};
					const stage = yield loader.load();
					this.setStage(stage);
					return stage;
				});
			}
			loadProjectFromBufferWithType(loaderId, buffer, type) {
				return __awaiter(this, void 0, void 0, function*() {
					let loader;
					switch (type) {
						case 'sb2':
							loader = new P.sb2.SB2FileLoader(buffer);
							break;
						case 'sb3':
							loader = new P.sb3.SB3FileLoader(buffer);
							break;
						default:
							throw new Error('Unknown type: ' + type);
					}
					yield this.loadLoader(loaderId, loader);
				});
			}
			loadProjectById(id) {
				return __awaiter(this, void 0, void 0, function*() {
					const { loaderId } = this.beginLoadingProject();
					const getLoader = (blob) => __awaiter(this, void 0, void 0, function*() {
						const projectText = yield P.io.readers.toText(blob);
						try {
							const projectJson = JSON.parse(projectText);
							switch (this.determineProjectType(projectJson)) {
								case 'sb2':
									return new P.sb2.Scratch2Loader(projectJson);
								case 'sb3':
									return new P.sb3.Scratch3Loader(projectJson);
							}
						} catch (e) {
							const buffer = yield P.io.readers.toArrayBuffer(blob);
							if (this.isScratch1Project(buffer)) {
								throw new ProjectNotSupportedError('Scratch 1');
							}
							return new P.sb2.SB2FileLoader(buffer);
						}
					});
					try {
						this.projectMeta = new RemoteProjectMeta(id);
						const blob = yield this.fetchProject(id);
						const loader = yield getLoader(blob);
						const stage = yield this.loadLoader(loaderId, loader);
						this.addCloudVariables(stage, id);
					} catch (e) {
						if (loaderId.isActive()) {
							this.handleError(e);
						}
					}
				});
			}
			loadProjectFromFile(file) {
				return __awaiter(this, void 0, void 0, function*() {
					const { loaderId } = this.beginLoadingProject();
					try {
						this.projectMeta = new LocalProjectMeta(file.name);
						const extension = file.name.split('.').pop() || '';
						const buffer = yield P.io.readers.toArrayBuffer(file);
						switch (extension) {
							case 'sb2':
								return this.loadProjectFromBufferWithType(loaderId, buffer, 'sb2');
							case 'sb3':
								return this.loadProjectFromBufferWithType(loaderId, buffer, 'sb3');
							default:
								throw new Error('Unrecognized file extension: ' + extension);
						}
					} catch (e) {
						if (loaderId.isActive()) {
							this.handleError(e);
						}
					}
				});
			}
			loadProjectFromBuffer(buffer, type) {
				return __awaiter(this, void 0, void 0, function*() {
					const { loaderId } = this.beginLoadingProject();
					try {
						return yield this.loadProjectFromBufferWithType(loaderId, buffer, type);
					} catch (e) {
						if (loaderId.isActive()) {
							this.handleError(e);
						}
					}
				});
			}
		}
		Player.DEFAULT_OPTIONS = {
			autoplayPolicy: 'always',
			cloudVariables: 'once',
			fps: 30,
			theme: 'light',
			turbo: false,
			username: '',
			fullscreenMode: 'full',
			fullscreenPadding: 8,
			fullscreenMaxWidth: Infinity,
			imageSmoothing: false,
		};
		player_1.Player = Player;
		class ErrorHandler {
			constructor(player, options = {}) {
				this.player = player;
				this.player = player;
				player.onerror.subscribe(this.onerror.bind(this));
				player.oncleanup.subscribe(this.oncleanup.bind(this));
				this.errorEl = null;
				if (options.container) {
					this.errorContainer = options.container;
				} else {
					this.errorContainer = null;
				}
			}
			stringifyError(error) {
				if (!error) {
					return 'unknown error';
				}
				if (error.stack) {
					return 'Message: ' + error.message + '\nStack:\n' + error.stack;
				}
				return error.toString();
			}
			createBugReportLink(bodyBefore, bodyAfter) {
				var title = this.getBugReportTitle();
				bodyAfter = bodyAfter || '';
				var body = bodyBefore +
					'\n\n\n-----\n' +
					this.getBugReportMetadata() +
					'\n' +
					bodyAfter;
				return ErrorHandler.BUG_REPORT_LINK
					.replace('$title', encodeURIComponent(title))
					.replace('$body', encodeURIComponent(body));
			}
			getBugReportTitle() {
				const meta = this.player.getProjectMeta();
				const title = meta.getTitle();
				const id = meta.getId();
				if (title) {
					return title;
				}
				if (id) {
					return id;
				}
				return 'Unknown Project';
			}
			getBugReportMetadata() {
				var meta = '';
				meta += 'Project ID: ' + this.player.getProjectMeta().getId() + '\n';
				meta += location.href + '\n';
				meta += navigator.userAgent;
				return meta;
			}
			createErrorLink(error) {
				var body = P.i18n.translate('player.errorhandler.instructions');
				return this.createBugReportLink(body, '```\n' + this.stringifyError(error) + '\n```');
			}
			oncleanup() {
				if (this.errorEl && this.errorEl.parentNode) {
					this.errorEl.parentNode.removeChild(this.errorEl);
					this.errorEl = null;
				}
			}
			handleError(error) {
				var el = document.createElement('div');
				var errorLink = this.createErrorLink(error);
				var attributes = 'href="' + errorLink + '" target="_blank" ref="noopener"';
				el.innerHTML = P.i18n.translate('player.errorhandler.error').replace('$attrs', attributes);
				return el;
			}
			handleNotSupportedError(error) {
				var el = document.createElement('div');
				el.innerHTML = P.i18n.translate('player.errorhandler.error.unsupported').replace('$type', error.type);
				return el;
			}
			handleDoesNotExistError(error) {
				var el = document.createElement('div');
				el.textContent = P.i18n.translate('player.errorhandler.error.doesnotexist').replace('$id', error.id);
				return el;
			}
			onerror(error) {
				var el = document.createElement('div');
				el.className = 'player-error';
				if (error instanceof ProjectNotSupportedError) {
					el.appendChild(this.handleNotSupportedError(error));
				} else if (error instanceof ProjectDoesNotExistError) {
					el.appendChild(this.handleDoesNotExistError(error));
				} else {
					el.appendChild(this.handleError(error));
				}
				if (this.errorContainer) {
					this.errorContainer.appendChild(el);
				} else if (this.player.hasStage()) {
					this.player.getStage().ui.appendChild(el);
				} else {
					this.player.playerContainer.appendChild(el);
				}
				this.errorEl = el;
			}
		}
		ErrorHandler.BUG_REPORT_LINK = 'https://github.com/forkphorus/forkphorus/issues/new?title=$title&body=$body';
		player_1.ErrorHandler = ErrorHandler;
		class ProgressBar {
			constructor(player, options = {}) {
				this.el = document.createElement('div');
				this.el.className = 'player-progress';
				this.bar = document.createElement('div');
				this.bar.className = 'player-progress-fill';
				this.el.appendChild(this.bar);
				this.setTheme(player.getOptions().theme);
				player.onthemechange.subscribe((theme) => this.setTheme(theme));
				player.onprogress.subscribe((progress) => this.setProgress(progress));
				player.onstartload.subscribe(() => {
					this.el.setAttribute('state', 'loading');
					this.setProgress(0);
				});
				player.onload.subscribe(() => {
					this.el.setAttribute('state', 'loaded');
				});
				player.oncleanup.subscribe(() => {
					this.el.setAttribute('state', '');
					this.bar.style.width = '0%';
				});
				player.onerror.subscribe(() => {
					this.el.setAttribute('state', 'error');
					this.bar.style.width = '100%';
				});
				if (options.position === 'controls' || options.position === undefined) {
					if (!player.controlsContainer) {
						throw new Error('No controls to put progess bar in.');
					}
					player.controlsContainer.appendChild(this.el);
				} else {
					options.position.appendChild(this.el);
				}
			}
			setTheme(theme) {
				this.el.setAttribute('theme', theme);
			}
			setProgress(progress) {
				this.bar.style.width = 10 + progress * 90 + '%';
			}
		}
		player_1.ProgressBar = ProgressBar;
	})(player = P.player || (P.player = {}));
})(P || (P = {}));
var P;
(function(P) {
	var runtime;
	(function(runtime_1) {
		var runtime;
		var self;
		var S;
		var R;
		var STACK;
		var C;
		var CALLS;
		var WARP;
		var BASE;
		var THREAD;
		var IMMEDIATE;
		var VISUAL;
		const epoch = Date.UTC(2000, 0, 1);
		const INSTRUMENTS = P.audio.instruments;
		const DRUMS = P.audio.drums;
		const DIGIT = /\d/;
		var bool = function(v) {
			return +v !== 0 && v !== '' && v !== 'false' && v !== false;
		};
		var compare = function(x, y) {
			if ((typeof x === 'number' || DIGIT.test(x)) && (typeof y === 'number' || DIGIT.test(y))) {
				var nx = +x;
				var ny = +y;
				if (nx === nx && ny === ny) {
					return nx < ny ? -1 : nx === ny ? 0 : 1;
				}
			}
			var xs = ('' + x).toLowerCase();
			var ys = ('' + y).toLowerCase();
			return xs < ys ? -1 : xs === ys ? 0 : 1;
		};
		var numLess = function(nx, y) {
			if (typeof y === 'number' || DIGIT.test(y)) {
				var ny = +y;
				if (ny === ny) {
					return nx < ny;
				}
			}
			var ys = ('' + y).toLowerCase();
			return '' + nx < ys;
		};
		var numGreater = function(nx, y) {
			if (typeof y === 'number' || DIGIT.test(y)) {
				var ny = +y;
				if (ny === ny) {
					return nx > ny;
				}
			}
			var ys = ('' + y).toLowerCase();
			return '' + nx > ys;
		};
		var equal = function(x, y) {
			if ((typeof x === 'number' || typeof x === 'boolean' || DIGIT.test(x)) && (typeof y === 'number' || typeof x === 'boolean' || DIGIT.test(y))) {
				var nx = +x;
				var ny = +y;
				if (nx === nx && ny === ny) {
					return nx === ny;
				}
			}
			var xs = ('' + x).toLowerCase();
			var ys = ('' + y).toLowerCase();
			return xs === ys;
		};
		var numEqual = function(nx, y) {
			if (typeof y === 'number' || DIGIT.test(y)) {
				var ny = +y;
				return ny === ny && nx === ny;
			}
			return false;
		};
		var strEqual = function(a, b) {
			return (a + '').toLowerCase() === (b + '').toLowerCase();
		};
		var stringContains = function(baseString, needle) {
			return baseString.toLowerCase().indexOf(needle.toLowerCase()) > -1;
		};
		var mod = function(x, y) {
			var r = x % y;
			if (r / y < 0) {
				r += y;
			}
			return r;
		};
		var random = function(x, y) {
			var fractional = (typeof x === 'string' && !isNaN(+x) && x.indexOf('.') > -1) ||
				(typeof y === 'string' && !isNaN(+y) && y.indexOf('.') > -1);
			x = +x || 0;
			y = +y || 0;
			if (x > y) {
				var tmp = y;
				y = x;
				x = tmp;
			}
			if (!fractional && (x % 1 === 0 && y % 1 === 0)) {
				return Math.floor(Math.random() * (y - x + 1)) + x;
			}
			return Math.random() * (y - x) + x;
		};
		var clone = function(name) {
			const parent = name === '_myself_' ? S : self.getObject(name);
			if (!parent || !P.core.isSprite(parent)) {
				return;
			}
			const c = parent.clone();
			self.children.splice(self.children.indexOf(parent), 0, c);
			runtime.triggerFor(c, 'whenCloned');
		};
		var getVars = function(name) {
			return self.vars[name] !== undefined ? self.vars : S.vars;
		};
		var getLists = function(name) {
			if (self.lists[name] !== undefined)
				return self.lists;
			if (S.lists[name] === undefined) {
				S.lists[name] = [];
			}
			return S.lists;
		};
		var listIndex = function(list, index, length) {
			var i = index | 0;
			if (i === index)
				return i > 0 && i <= length ? i - 1 : -1;
			if (index === 'random' || index === 'any') {
				return Math.random() * length | 0;
			}
			if (index === 'last') {
				return length - 1;
			}
			return i > 0 && i <= length ? i - 1 : -1;
		};
		var contentsOfList = function(list) {
			var isSingle = true;
			for (var i = list.length; i--;) {
				if (list[i].length !== 1) {
					isSingle = false;
					break;
				}
			}
			return list.join(isSingle ? '' : ' ');
		};
		var getLineOfList = function(list, index) {
			var i = listIndex(list, index, list.length);
			return i !== -1 ? list[i] : '';
		};
		var listContains = function(list, value) {
			for (var i = list.length; i--;) {
				if (equal(list[i], value))
					return true;
			}
			return false;
		};
		var listIndexOf = function(list, value) {
			for (var i = 0; i < list.length; i++) {
				if (equal(list[i], value))
					return i + 1;
			}
			return 0;
		};
		var appendToList = function(list, value) {
			list.push(value);
		};
		var deleteLineOfList = function(list, index) {
			if (index === 'all') {
				list.length = 0;
			} else {
				var i = listIndex(list, index, list.length);
				if (i === list.length - 1) {
					list.pop();
				} else if (i !== -1) {
					list.splice(i, 1);
				}
			}
		};
		var insertInList = function(list, index, value) {
			var i = listIndex(list, index, list.length + 1);
			if (i === list.length) {
				list.push(value);
			} else if (i !== -1) {
				list.splice(i, 0, value);
			}
		};
		var setLineOfList = function(list, index, value) {
			var i = listIndex(list, index, list.length);
			if (i !== -1) {
				list[i] = value;
			}
		};
		var watchedAppendToList = function(list, value) {
			appendToList(list, value);
			if (!list.modified)
				list.modified = true;
		};
		var watchedDeleteLineOfList = function(list, index) {
			deleteLineOfList(list, index);
			if (!list.modified)
				list.modified = true;
		};
		var watchedInsertInList = function(list, index, value) {
			insertInList(list, index, value);
			if (!list.modified)
				list.modified = true;
		};
		var watchedSetLineOfList = function(list, index, value) {
			setLineOfList(list, index, value);
			if (!list.modified)
				list.modified = true;
		};
		var mathFunc = function(f, x) {
			switch (f) {
				case 'abs':
					return Math.abs(x);
				case 'floor':
					return Math.floor(x);
				case 'sqrt':
					return Math.sqrt(x);
				case 'ceiling':
					return Math.ceil(x);
				case 'cos':
					return Math.cos(x * Math.PI / 180);
				case 'sin':
					return Math.sin(x * Math.PI / 180);
				case 'tan':
					return Math.tan(x * Math.PI / 180);
				case 'asin':
					return Math.asin(x) * 180 / Math.PI;
				case 'acos':
					return Math.acos(x) * 180 / Math.PI;
				case 'atan':
					return Math.atan(x) * 180 / Math.PI;
				case 'ln':
					return Math.log(x);
				case 'log':
					return Math.log(x) / Math.LN10;
				case 'e ^':
					return Math.exp(x);
				case '10 ^':
					return Math.exp(x * Math.LN10);
			}
			return 0;
		};
		var attribute = function(attr, objName) {
			const o = self.getObject(objName);
			if (!o)
				return 0;
			if (P.core.isSprite(o)) {
				switch (attr) {
					case 'x position':
						return o.scratchX;
					case 'y position':
						return o.scratchY;
					case 'direction':
						return o.direction;
					case 'costume #':
						return o.currentCostumeIndex + 1;
					case 'costume name':
						return o.costumes[o.currentCostumeIndex].name;
					case 'size':
						return o.scale * 100;
					case 'volume':
						return o.volume * 100;
				}
			} else {
				switch (attr) {
					case 'background #':
					case 'backdrop #':
						return o.currentCostumeIndex + 1;
					case 'backdrop name':
						return o.costumes[o.currentCostumeIndex].name;
					case 'volume':
						return o.volume * 100;
				}
			}
			const value = o.vars[attr];
			if (value !== undefined) {
				return value;
			}
			return 0;
		};
		var timeAndDate = function(format) {
			switch (format) {
				case 'year':
					return new Date().getFullYear();
				case 'month':
					return new Date().getMonth() + 1;
				case 'date':
					return new Date().getDate();
				case 'day of week':
					return new Date().getDay() + 1;
				case 'hour':
					return new Date().getHours();
				case 'minute':
					return new Date().getMinutes();
				case 'second':
					return new Date().getSeconds();
			}
			return 0;
		};

		function getKeyCode(keyName) {
			keyName = keyName + '';
			switch (keyName.toLowerCase()) {
				case 'space':
					return 32;
				case 'left arrow':
					return 37;
				case 'up arrow':
					return 38;
				case 'right arrow':
					return 39;
				case 'down arrow':
					return 40;
				case 'any':
					return 'any';
			}
			return keyName.toUpperCase().charCodeAt(0);
		}
		runtime_1.getKeyCode = getKeyCode;
		var getKeyCode3 = function(keyName) {
			switch (keyName.toLowerCase()) {
				case 'space':
					return 32;
				case 'left arrow':
					return 37;
				case 'up arrow':
					return 38;
				case 'right arrow':
					return 39;
				case 'down arrow':
					return 40;
				case 'enter':
					return 13;
				case 'any':
					return 'any';
			}
			return keyName.toUpperCase().charCodeAt(0);
		};
		const audioContext = P.audio.context;
		if (audioContext) {
			var playNote = function(key, duration) {
				var span;
				var spans = INSTRUMENTS[S.instrument];
				for (var i = 0, l = spans.length; i < l; i++) {
					span = spans[i];
					if (span.top >= key || span.top === 128)
						break;
				}
				return playSpan(span, key, duration);
			};
			var playSpan = function(span, key, duration) {
				const node = P.audio.playSpan(span, key, duration, S.getAudioNode());
				return {
					stopped: false,
					node,
					base: BASE,
				};
			};
			var applySoundEffects = function(node) {
				node.playbackRate.value = Math.pow(2, (S.soundFilters.pitch / 10 / 12));
			};
			var playSound = function(sound) {
				const node = sound.createSourceNode();
				applySoundEffects(node);
				node.connect(S.getAudioNode());
				return {
					stopped: false,
					node,
					base: BASE,
				};
			};
			var startSound = function(sound) {
				const node = sound.createSourceNode();
				applySoundEffects(node);
				node.connect(S.getAudioNode());
			};
		}
		var save = function() {
			STACK.push(R);
			R = {};
		};
		var restore = function() {
			R = STACK.pop();
		};
		var call = function(procedure, id, values) {
			if (procedure) {
				STACK.push(R);
				CALLS.push(C);
				C = {
					base: procedure.fn,
					fn: S.fns[id],
					args: procedure.call(values),
					numargs: [],
					boolargs: [],
					stack: STACK = [],
					warp: procedure.warp,
				};
				R = {};
				if (C.warp || WARP) {
					WARP++;
					IMMEDIATE = procedure.fn;
				} else {
					if (VISUAL) {
						for (var i = CALLS.length, j = 5; i-- && j--;) {
							if (CALLS[i].base === procedure.fn) {
								runtime.queue[THREAD] = new Thread(S, BASE, procedure.fn, CALLS);
								return;
							}
						}
					}
					IMMEDIATE = procedure.fn;
				}
			} else {
				IMMEDIATE = S.fns[id];
			}
		};
		var endCall = function() {
			if (CALLS.length) {
				if (WARP)
					WARP--;
				IMMEDIATE = C.fn;
				C = CALLS.pop();
				STACK = C.stack;
				R = STACK.pop();
			}
		};
		var sceneChange = function() {
			return runtime.trigger('whenSceneStarts', self.getCostumeName());
		};
		var backdropChange = function() {
			return runtime.trigger('whenBackdropChanges', self.getCostumeName());
		};
		var broadcast = function(name) {
			return runtime.trigger('whenIReceive', name);
		};
		var running = function(bases) {
			for (var j = 0; j < runtime.queue.length; j++) {
				if (runtime.queue[j] && bases.indexOf(runtime.queue[j].base) !== -1)
					return true;
			}
			return false;
		};
		var queue = function(id) {
			if (WARP) {
				IMMEDIATE = S.fns[id];
			} else {
				forceQueue(id);
			}
		};
		var forceQueue = function(id) {
			runtime.queue[THREAD] = new Thread(S, BASE, S.fns[id], CALLS);
		};
		class Thread {
			constructor(sprite, base, fn, calls) {
				this.sprite = sprite;
				this.base = base;
				this.fn = fn;
				this.calls = calls;
			}
		}
		class Runtime {
			constructor(stage) {
				this.stage = stage;
				this.queue = [];
				this.isRunning = false;
				this.timerStart = 0;
				this.baseTime = 0;
				this.baseNow = 0;
				this.isTurbo = false;
				this.framerate = 30;
				this.onError = this.onError.bind(this);
				this.step = this.step.bind(this);
			}
			startThread(sprite, base) {
				const thread = new Thread(sprite, base, base, [{
					args: [],
					stack: [{}],
				}]);
				for (let i = 0; i < this.queue.length; i++) {
					const q = this.queue[i];
					if (q && q.sprite === sprite && q.base === base) {
						this.queue[i] = thread;
						return;
					}
				}
				this.queue.push(thread);
			}
			triggerFor(sprite, event, arg) {
				let threads;
				switch (event) {
					case 'whenClicked':
						threads = sprite.listeners.whenClicked;
						break;
					case 'whenCloned':
						threads = sprite.listeners.whenCloned;
						break;
					case 'whenGreenFlag':
						threads = sprite.listeners.whenGreenFlag;
						break;
					case 'whenKeyPressed':
						threads = sprite.listeners.whenKeyPressed[arg];
						break;
					case 'whenSceneStarts':
						threads = sprite.listeners.whenSceneStarts[('' + arg).toLowerCase()];
						break;
					case 'whenBackdropChanges':
						threads = sprite.listeners.whenBackdropChanges['' + arg];
						break;
					case 'whenIReceive':
						arg = '' + arg;
						threads = sprite.listeners.whenIReceive[arg] || sprite.listeners.whenIReceive[arg.toLowerCase()];
						break;
					default:
						throw new Error('Unknown trigger event: ' + event);
				}
				if (threads) {
					for (let i = 0; i < threads.length; i++) {
						this.startThread(sprite, threads[i]);
					}
				}
				return threads || [];
			}
			trigger(event, arg) {
				let threads = [];
				for (let i = this.stage.children.length; i--;) {
					threads = threads.concat(this.triggerFor(this.stage.children[i], event, arg));
				}
				return threads.concat(this.triggerFor(this.stage, event, arg));
			}
			triggerGreenFlag() {
				this.timerStart = this.now();
				this.trigger('whenGreenFlag');
			}
			start() {
				this.isRunning = true;
				if (this.interval)
					return;
				window.addEventListener('error', this.onError);
				this.baseTime = Date.now();
				this.interval = setInterval(this.step, 1000 / this.framerate);
				if (audioContext)
					audioContext.resume();
				this.stage.startExtensions();
			}
			pause() {
				if (this.interval) {
					this.baseNow = this.now();
					clearInterval(this.interval);
					this.interval = 0;
					window.removeEventListener('error', this.onError);
					if (audioContext)
						audioContext.suspend();
					this.stage.pauseExtensions();
				}
				this.isRunning = false;
			}
			resetInterval() {
				if (!this.isRunning) {
					throw new Error('Cannot restart interval when paused');
				}
				if (this.interval) {
					clearInterval(this.interval);
				}
				this.interval = setInterval(this.step, 1000 / this.framerate);
			}
			stopAll() {
				this.stage.hidePrompt = false;
				this.stage.prompter.style.display = 'none';
				this.stage.promptId = this.stage.nextPromptId = 0;
				this.queue.length = 0;
				this.stage.resetFilters();
				this.stage.stopSounds();
				for (var i = 0; i < this.stage.children.length; i++) {
					const c = this.stage.children[i];
					if (c.isClone) {
						c.remove();
						this.stage.children.splice(i, 1);
						i -= 1;
					} else {
						c.resetFilters();
						if (c.saying && P.core.isSprite(c))
							c.say('');
						c.stopSounds();
					}
				}
			}
			now() {
				return this.baseNow + Date.now() - this.baseTime;
			}
			evaluateExpression(sprite, fn) {
				self = this.stage;
				runtime = this;
				S = sprite;
				try {
					return fn();
				} catch (e) {
					return undefined;
				}
			}
			step() {
				self = this.stage;
				runtime = this;
				VISUAL = false;
				for (var i = 0; i < this.stage.children.length; i++) {
					const c = this.stage.children[i];
					if (c.isDragging) {
						c.moveTo(c.dragOffsetX + c.stage.mouseX, c.dragOffsetY + c.stage.mouseY);
					}
				}
				if (audioContext && audioContext.state === 'suspended') {
					audioContext.resume();
				}
				const start = Date.now();
				const queue = this.queue;
				do {
					for (THREAD = 0; THREAD < queue.length; THREAD++) {
						const thread = queue[THREAD];
						if (thread) {
							S = thread.sprite;
							IMMEDIATE = thread.fn;
							BASE = thread.base;
							CALLS = thread.calls;
							C = CALLS.pop();
							STACK = C.stack;
							R = STACK.pop();
							queue[THREAD] = undefined;
							WARP = 0;
							while (IMMEDIATE) {
								const fn = IMMEDIATE;
								IMMEDIATE = null;
								fn();
							}
							STACK.push(R);
							CALLS.push(C);
						}
					}
					for (let i = queue.length; i--;) {
						if (!queue[i]) {
							queue.splice(i, 1);
						}
					}
				} while ((this.isTurbo || !VISUAL) && Date.now() - start < 1000 / this.framerate && queue.length);
				this.stage.draw();
			}
			onError(e) {
				clearInterval(this.interval);
				this.handleError(e.error);
			}
			handleError(e) {
				console.error(e);
			}
		}
		runtime_1.Runtime = Runtime;

		function createContinuation(source) {
			var result = '(function() {\n';
			var brackets = 0;
			var delBrackets = 0;
			var shouldDelete = false;
			var here = 0;
			var length = source.length;
			while (here < length) {
				var i = source.indexOf('{', here);
				var j = source.indexOf('}', here);
				var k = source.indexOf('return;', here);
				if (k === -1)
					k = length;
				if (i === -1 && j === -1) {
					if (!shouldDelete) {
						result += source.slice(here, k);
					}
					break;
				}
				if (i === -1)
					i = length;
				if (j === -1)
					j = length;
				if (shouldDelete) {
					if (i < j) {
						delBrackets++;
						here = i + 1;
					} else {
						delBrackets--;
						if (!delBrackets) {
							shouldDelete = false;
						}
						here = j + 1;
					}
				} else {
					if (brackets === 0 && k < i && k < j) {
						result += source.slice(here, k);
						break;
					}
					if (i < j) {
						result += source.slice(here, i + 1);
						brackets++;
						here = i + 1;
					} else {
						result += source.slice(here, j);
						here = j + 1;
						if (source.substr(j, 8) === '} else {') {
							if (brackets > 0) {
								result += '} else {';
								here = j + 8;
							} else {
								shouldDelete = true;
								delBrackets = 0;
							}
						} else {
							if (brackets > 0) {
								result += '}';
								brackets--;
							}
						}
					}
				}
			}
			result += '})';
			return scopedEval(result);
		}
		runtime_1.createContinuation = createContinuation;

		function scopedEval(source) {
			return eval(source);
		}
		runtime_1.scopedEval = scopedEval;
	})(runtime = P.runtime || (P.runtime = {}));
})(P || (P = {}));
var P;
(function(P) {
	var sb2;
	(function(sb2) {
		const ASSET_URL = 'https://cdn.assets.scratch.mit.edu/internalapi/asset/';
		class Scratch2VariableWatcher extends P.core.Watcher {
			constructor(stage, targetName, data) {
				super(stage, targetName);
				this.cmd = data.cmd;
				this.type = data.type || 'var';
				if (data.color) {
					var c = (data.color < 0 ? data.color + 0x1000000 : data.color).toString(16);
					this.color = '#000000'.slice(0, -c.length) + c;
				} else {
					this.color = '#ee7d16';
				}
				this.isDiscrete = data.isDiscrete == null ? true : data.isDiscrete;
				this.label = data.label || '';
				this.mode = data.mode || 1;
				this.param = data.param;
				this.sliderMax = data.sliderMax == null ? 100 : data.sliderMax;
				this.sliderMin = data.sliderMin || 0;
				this.targetName = data.target;
				this.visible = data.visible == null ? false : data.visible;
				this.x = data.x || 0;
				this.y = data.y || 0;
			}
			init() {
				super.init();
				if (this.target && this.cmd === 'getVar:') {
					this.target.watchers[this.param] = this;
				}
				if (!this.label) {
					this.label = this.getLabel();
					if (this.target.isSprite)
						this.label = this.target.name + ': ' + this.label;
				}
				this.layout();
			}
			getLabel() {
				var WATCHER_LABELS = {
					'costumeIndex': 'costume #',
					'xpos': 'x position',
					'ypos': 'y position',
					'heading': 'direction',
					'scale': 'size',
					'backgroundIndex': 'background #',
					'sceneName': 'background name',
					'tempo': 'tempo',
					'volume': 'volume',
					'answer': 'answer',
					'timer': 'timer',
					'soundLevel': 'loudness',
					'isLoud': 'loud?',
					'xScroll': 'x scroll',
					'yScroll': 'y scroll'
				};
				switch (this.cmd) {
					case 'getVar:':
						return this.param;
					case 'sensor:':
						return this.param + ' sensor value';
					case 'sensorPressed':
						return 'sensor ' + this.param + '?';
					case 'timeAndDate':
						return this.param;
					case 'senseVideoMotion':
						return 'video ' + this.param;
				}
				return WATCHER_LABELS[this.cmd] || '';
			}
			setVisible(visible) {
				super.setVisible(visible);
				this.layout();
			}
			update() {
				var value = 0;
				if (!this.target)
					return;
				switch (this.cmd) {
					case 'answer':
						value = this.stage.answer;
						break;
					case 'backgroundIndex':
						value = this.stage.currentCostumeIndex + 1;
						break;
					case 'costumeIndex':
						value = this.target.currentCostumeIndex + 1;
						break;
					case 'getVar:':
						value = this.target.vars[this.param];
						break;
					case 'heading':
						value = this.target.direction;
						break;
					case 'scale':
						if (this.target.isSprite) {
							value = this.target.scale * 100;
						}
						break;
					case 'sceneName':
						value = this.stage.getCostumeName();
						break;
					case 'senseVideoMotion':
						break;
					case 'soundLevel':
						if (this.stage.microphone) {
							value = this.stage.microphone.getLoudness();
						} else {
							value = -1;
						}
						break;
					case 'tempo':
						value = this.stage.tempoBPM;
						break;
					case 'timeAndDate':
						value = this.timeAndDate(this.param);
						break;
					case 'timer':
						value = Math.round((this.stage.runtime.now() - this.stage.runtime.timerStart) / 100) / 10;
						break;
					case 'volume':
						value = this.target.volume * 100;
						break;
					case 'xpos':
						value = this.target.scratchX;
						break;
					case 'ypos':
						value = this.target.scratchY;
						break;
				}
				if (typeof value === 'number' && (value < 0.001 || value > 0.001)) {
					value = Math.round(value * 1000) / 1000;
				}
				this.readout.textContent = '' + value;
				if (this.slider) {
					this.buttonWrap.style.transform = 'translate(' + ((+value || 0) - this.sliderMin) / (this.sliderMax - this.sliderMin) * 100 + '%,0)';
				}
			}
			timeAndDate(format) {
				switch (format) {
					case 'year':
						return new Date().getFullYear();
					case 'month':
						return new Date().getMonth() + 1;
					case 'date':
						return new Date().getDate();
					case 'day of week':
						return new Date().getDay() + 1;
					case 'hour':
						return new Date().getHours();
					case 'minute':
						return new Date().getMinutes();
					case 'second':
						return new Date().getSeconds();
				}
				return 0;
			}
			layout() {
				if (this.el) {
					this.el.style.display = this.visible ? 'block' : 'none';
					return;
				}
				if (!this.visible)
					return;
				this.el = document.createElement('div');
				this.el.dataset.watcher = '' + this.stage.allWatchers.indexOf(this);
				this.el.style.whiteSpace = 'pre';
				this.el.style.position = 'absolute';
				this.el.style.left = this.el.style.top = '0';
				this.el.style.transform = 'translate(' + (this.x | 0) / 10 + 'em,' + (this.y | 0) / 10 + 'em)';
				this.el.style.cursor = 'default';
				if (this.mode === 2) {
					this.el.appendChild(this.readout = document.createElement('div'));
					this.readout.style.minWidth = (38 / 15) + 'em';
					this.readout.style.font = 'bold 1.5em/' + (19 / 15) + ' sans-serif';
					this.readout.style.height = (19 / 15) + 'em';
					this.readout.style.borderRadius = (4 / 15) + 'em';
					this.readout.style.margin = (3 / 15) + 'em 0 0 0';
					this.readout.style.padding = '0 ' + (3 / 10) + 'em';
				} else {
					this.el.appendChild(this.labelEl = document.createElement('div'));
					this.el.appendChild(this.readout = document.createElement('div'));
					this.el.style.border = '.1em solid rgb(148,145,145)';
					this.el.style.borderRadius = '.4em';
					this.el.style.background = 'rgb(193,196,199)';
					this.el.style.padding = '.2em .6em .3em .5em';
					this.labelEl.textContent = this.label;
					this.labelEl.style.font = 'bold 1.1em/1 sans-serif';
					this.labelEl.style.display = 'inline-block';
					this.labelEl.style.verticalAlign =
						this.readout.style.verticalAlign = 'middle';
					this.readout.style.minWidth = (37 / 10) + 'em';
					this.readout.style.padding = '0 ' + (1 / 10) + 'em';
					this.readout.style.font = 'bold 1.0em/' + (13 / 10) + ' sans-serif';
					this.readout.style.height = (13 / 10) + 'em';
					this.readout.style.borderRadius = (4 / 10) + 'em';
					this.readout.style.marginLeft = (6 / 10) + 'em';
				}
				this.readout.style.color = '#fff';
				var f = 1 / (this.mode === 2 ? 15 : 10);
				this.readout.style.border = f + 'em solid #fff';
				this.readout.style.boxShadow = 'inset ' + f + 'em ' + f + 'em ' + f + 'em rgba(0,0,0,.5), inset -' + f + 'em -' + f + 'em ' + f + 'em rgba(255,255,255,.5)';
				this.readout.style.textAlign = 'center';
				this.readout.style.background = this.color;
				this.readout.style.display = 'inline-block';
				if (this.mode === 3) {
					this.el.appendChild(this.slider = document.createElement('div'));
					this.slider.appendChild(this.buttonWrap = document.createElement('div'));
					this.buttonWrap.appendChild(this.button = document.createElement('div'));
					this.slider.style.height =
						this.slider.style.borderRadius = '.5em';
					this.slider.style.background = 'rgb(192,192,192)';
					this.slider.style.margin = '.4em 0 .1em';
					this.slider.style.boxShadow = 'inset .125em .125em .125em rgba(0,0,0,.5), inset -.125em -.125em .125em rgba(255,255,255,.5)';
					this.slider.style.position = 'relative';
					this.slider.style.pointerEvents = 'auto';
					this.slider.dataset.slider = '';
					this.slider.style.paddingRight =
						this.button.style.width =
						this.button.style.height =
						this.button.style.borderRadius = '1.1em';
					this.button.style.position = 'absolute';
					this.button.style.left = '0';
					this.button.style.top = '-.3em';
					this.button.style.background = '#fff';
					this.button.style.boxShadow = 'inset .3em .3em .2em -.2em rgba(255,255,255,.9), inset -.3em -.3em .2em -.2em rgba(0,0,0,.9), inset 0 0 0 .1em #777';
					this.button.dataset.button = '';
				}
				this.stage.ui.appendChild(this.el);
			}
		}
		sb2.Scratch2VariableWatcher = Scratch2VariableWatcher;
		class Scratch2Stage extends P.core.Stage {
			constructor() {
				super(...arguments);
				this.dragging = {};
				this.defaultWatcherX = 10;
				this.defaultWatcherY = 10;
			}
			createVariableWatcher(target, variableName) {
				const x = this.defaultWatcherX;
				const y = this.defaultWatcherY;
				this.defaultWatcherY += 26;
				if (this.defaultWatcherY >= 450) {
					this.defaultWatcherY = 10;
					this.defaultWatcherX += 150;
				}
				return new P.sb2.Scratch2VariableWatcher(this, target.name, {
					cmd: 'getVar:',
					param: variableName,
					x,
					y,
				});
			}
			say(text, thinking) {
				return ++this.sayId;
			}
			updateBubble() {}
			watcherStart(id, t, e) {
				var p = e.target;
				while (p && p.dataset.watcher == null)
					p = p.parentElement;
				if (!p)
					return;
				var w = this.allWatchers[p.dataset.watcher];
				this.dragging[id] = {
					watcher: w,
					offset: (e.target.dataset.button == null ? -w.button.offsetWidth / 2 | 0 : w.button.getBoundingClientRect().left - t.clientX) - w.slider.getBoundingClientRect().left
				};
			}
			watcherMove(id, t, e) {
				var d = this.dragging[id];
				if (!d)
					return;
				var w = d.watcher;
				var sw = w.slider.offsetWidth;
				var bw = w.button.offsetWidth;
				var value = w.sliderMin + Math.max(0, Math.min(1, (t.clientX + d.offset) / (sw - bw))) * (w.sliderMax - w.sliderMin);
				w.target.vars[w.param] = w.isDiscrete ? Math.round(value) : Math.round(value * 100) / 100;
				w.update();
				e.preventDefault();
			}
			watcherEnd(id, t, e) {
				this.watcherMove(id, t, e);
				delete this.dragging[id];
			}
			ontouch(event, touch) {
				const target = event.target;
				if (target.dataset.button != null || target.dataset.slider != null) {
					this.watcherStart(touch.identifier, touch, event);
				}
			}
			onmousedown(e) {
				const target = e.target;
				if (target.dataset.button != null || target.dataset.slider != null) {
					this.watcherStart('mouse', e, e);
				}
			}
			onmousemove(e) {
				this.watcherMove('mouse', e, e);
			}
			onmouseup(e) {
				this.watcherEnd('mouse', e, e);
			}
		}
		sb2.Scratch2Stage = Scratch2Stage;
		class Scratch2Sprite extends P.core.Sprite {
			_clone() {
				return new Scratch2Sprite(this.stage);
			}
		}
		sb2.Scratch2Sprite = Scratch2Sprite;
		class BaseSB2Loader extends P.io.Loader {
			loadImage(url) {
				return this.addTask(new P.io.Img(url)).load();
			}
			loadFonts() {
				return Promise.all([
					this.addTask(new P.io.PromiseTask((P.utils.settled(P.fonts.loadWebFont('Donegal One'))))),
					this.addTask(new P.io.PromiseTask((P.utils.settled(P.fonts.loadWebFont('Gloria Hallelujah'))))),
					this.addTask(new P.io.PromiseTask((P.utils.settled(P.fonts.loadWebFont('Mystery Quest'))))),
					this.addTask(new P.io.PromiseTask((P.utils.settled(P.fonts.loadWebFont('Permanent Marker'))))),
					this.addTask(new P.io.PromiseTask((P.utils.settled(P.fonts.loadWebFont('Scratch'))))),
				]).then(() => undefined);
			}
			loadBase(data, isStage) {
				var costumes;
				var sounds;
				return Promise.all([
					this.loadArray(data.costumes, this.loadCostume.bind(this)).then((c) => costumes = c),
					this.loadArray(data.sounds, this.loadSound.bind(this)).then((s) => sounds = s),
				]).then(() => {
					const variables = {};
					if (data.variables) {
						for (const variable of data.variables) {
							if (variable.isPeristent) {
								throw new Error('Cloud variables are not supported');
							}
							variables[variable.name] = variable.value;
						}
					}
					const lists = {};
					if (data.lists) {
						for (const list of data.lists) {
							if (list.isPeristent) {
								throw new Error('Cloud lists are not supported');
							}
							lists[list.listName] = list.contents;
						}
					}
					const object = new(isStage ? Scratch2Stage : Scratch2Sprite)(null);
					object.name = data.objName;
					object.vars = variables;
					object.lists = lists;
					object.costumes = costumes;
					object.currentCostumeIndex = data.currentCostumeIndex;
					sounds.forEach((sound) => sound && object.addSound(sound));
					if (isStage) {} else {
						const sprite = object;
						sprite.scratchX = data.scratchX;
						sprite.scratchY = data.scratchY;
						sprite.direction = data.direction;
						sprite.isDraggable = data.isDraggable;
						sprite.rotationStyle = P.utils.parseRotationStyle(data.rotationStyle);
						sprite.scale = data.scale;
						sprite.visible = data.visible;
					}
					object.scripts = data.scripts || [];
					return object;
				});
			}
			loadArray(data, process) {
				return Promise.all((data || []).map((i, ind) => process(i, ind)));
			}
			loadObject(data) {
				if (data.cmd) {
					return this.loadVariableWatcher(data);
				} else if (data.listName) {} else {
					return this.loadBase(data, false);
				}
			}
			loadVariableWatcher(data) {
				const targetName = data.target;
				const watcher = new Scratch2VariableWatcher(null, targetName, data);
				return watcher;
			}
			loadCostume(data) {
				const promises = [
					this.loadMD5(data.baseLayerMD5, data.baseLayerID)
					.then((asset) => data.$image = asset)
				];
				if (data.textLayerMD5) {
					promises.push(this.loadMD5(data.textLayerMD5, data.textLayerID)
						.then((asset) => data.$text = asset));
				}
				return Promise.all(promises)
					.then((layers) => {
						var image;
						if (layers.length > 1) {
							image = document.createElement('canvas');
							const ctx = image.getContext('2d');
							if (!ctx) {
								throw new Error('Cannot get 2d rendering context loading costume ' + data.costumeName);
							}
							image.width = Math.max(layers[0].width, 1);
							image.height = Math.max(layers[0].height, 1);
							for (const layer of layers) {
								ctx.drawImage(layer, 0, 0);
							}
						} else {
							image = layers[0];
						}
						return new P.core.BitmapCostume(image, {
							name: data.costumeName,
							bitmapResolution: data.bitmapResolution,
							rotationCenterX: data.rotationCenterX,
							rotationCenterY: data.rotationCenterY,
						});
					});
			}
			loadSound(data) {
				return new Promise((resolve, reject) => {
					this.loadMD5(data.md5, data.soundID, true)
						.then((buffer) => {
							resolve(new P.core.Sound({
								name: data.soundName,
								buffer,
							}));
						})
						.catch((err) => {
							resolve(null);
							console.warn('Could not load sound: ' + err);
						});
				});
			}
			loadSVG(source) {
				const parser = new DOMParser();
				var doc = parser.parseFromString(source, 'image/svg+xml');
				var svg = doc.documentElement;
				if (!svg.style) {
					doc = parser.parseFromString('<body>' + source, 'text/html');
					svg = doc.querySelector('svg');
				}
				svg.style.visibility = 'hidden';
				svg.style.position = 'absolute';
				svg.style.left = '-10000px';
				svg.style.top = '-10000px';
				document.body.appendChild(svg);
				const viewBox = svg.viewBox.baseVal;
				if (viewBox && (viewBox.x || viewBox.y)) {
					svg.width.baseVal.value = viewBox.width - viewBox.x;
					svg.height.baseVal.value = viewBox.height - viewBox.y;
					viewBox.x = 0;
					viewBox.y = 0;
					viewBox.width = 0;
					viewBox.height = 0;
				}
				patchSVG(svg, svg);
				document.body.removeChild(svg);
				svg.style.visibility = svg.style.position = svg.style.left = svg.style.top = '';
				return new Promise((resolve, reject) => {
					const canvas = document.createElement('canvas');
					canvg(canvas, new XMLSerializer().serializeToString(svg), {
						ignoreMouse: true,
						ignoreAnimation: true,
						ignoreClear: true,
						renderCallback: function() {
							if (canvas.width === 0 || canvas.height === 0) {
								resolve(new Image());
								return;
							}
							resolve(canvas);
						}
					});
				});
			}
			load() {
				var children;
				var stage;
				return this.loadFonts()
					.then(() => Promise.all([
						P.audio.loadSoundbankSB2(this),
						this.loadArray(this.projectData.children, this.loadObject.bind(this)).then((c) => children = c),
						this.loadBase(this.projectData, true).then((s) => stage = s),
					]))
					.then(() => {
						if (this.aborted) {
							throw new Error('Loading aborting.');
						}
						children = children.filter((i) => i);
						children.forEach((c) => c.stage = stage);
						const sprites = children.filter((i) => i instanceof Scratch2Sprite);
						const watchers = children.filter((i) => i instanceof Scratch2VariableWatcher);
						stage.children = sprites;
						stage.allWatchers = watchers;
						stage.allWatchers.forEach((w) => w.init());
						P.sb2.compiler.compile(stage);
						return stage;
					});
			}
		}
		sb2.BaseSB2Loader = BaseSB2Loader;
		class SB2FileLoader extends BaseSB2Loader {
			constructor(buffer) {
				super();
				this.buffer = buffer;
			}
			loadMD5(hash, id, isAudio = false) {
				const f = isAudio ? this.zip.file(id + '.wav') : this.zip.file(id + '.gif') || this.zip.file(id + '.png') || this.zip.file(id + '.jpg') || this.zip.file(id + '.svg');
				hash = f.name;
				const ext = hash.split('.').pop();
				if (ext === 'svg') {
					return f.async('text')
						.then((text) => this.loadSVG(text));
				} else if (ext === 'wav') {
					return f.async('arrayBuffer')
						.then((buffer) => P.audio.decodeAudio(buffer));
				} else {
					return new Promise((resolve, reject) => {
						var image = new Image();
						image.onload = function() {
							resolve(image);
						};
						f.async('binarystring')
							.then((data) => {
								image.src = 'data:image/' + (ext === 'jpg' ? 'jpeg' : ext) + ';base64,' + btoa(data);
							});
					});
				}
			}
			load() {
				return JSZip.loadAsync(this.buffer)
					.then((data) => {
						this.zip = data;
						return this.zip.file('project.json').async('text');
					})
					.then((project) => {
						this.projectData = JSON.parse(project);
					})
					.then(() => super.load());
			}
		}
		sb2.SB2FileLoader = SB2FileLoader;
		class Scratch2Loader extends BaseSB2Loader {
			constructor(idOrData) {
				super();
				if (typeof idOrData === 'object') {
					this.projectData = idOrData;
					this.projectId = null;
				} else {
					this.projectId = idOrData;
				}
			}
			loadMD5(hash, id, isAudio = false) {
				const ext = hash.split('.').pop();
				if (ext === 'svg') {
					return this.addTask(new P.io.Request(ASSET_URL + hash + '/get/')).load('text')
						.then((text) => this.loadSVG(text));
				} else if (ext === 'wav') {
					return this.addTask(new P.io.Request(ASSET_URL + hash + '/get/')).load('arraybuffer')
						.then((buffer) => P.audio.decodeAudio(buffer));
				} else {
					return this.loadImage(ASSET_URL + hash + '/get/');
				}
			}
			load() {
				if (this.projectId) {
					return this.addTask(new P.io.Request(P.config.PROJECT_API.replace('$id', '' + this.projectId))).load('json')
						.then((data) => {
							this.projectData = data;
							return super.load();
						});
				} else {
					return super.load();
				}
			}
		}
		sb2.Scratch2Loader = Scratch2Loader;

		function patchSVG(svg, element) {
			const FONTS = {
				'': 'Helvetica',
				Donegal: 'Donegal One',
				Gloria: 'Gloria Hallelujah',
				Marker: 'Permanent Marker',
				Mystery: 'Mystery Quest'
			};
			const LINE_HEIGHTS = {
				Helvetica: 1.13,
				'Donegal One': 1.25,
				'Gloria Hallelujah': 1.97,
				'Permanent Marker': 1.43,
				'Mystery Quest': 1.37
			};
			if (element.nodeType !== 1)
				return;
			if (element.nodeName === 'text') {
				var font = element.getAttribute('font-family') || '';
				font = FONTS[font] || font;
				if (font) {
					element.setAttribute('font-family', font);
					if (font === 'Helvetica')
						element.style.fontWeight = 'bold';
				}
				var size = +element.getAttribute('font-size');
				if (!size) {
					element.setAttribute('font-size', size = 18);
				}
				var bb = element.getBBox();
				var x = 4 - .6 * element.transform.baseVal.consolidate().matrix.a;
				var y = (element.getAttribute('y') - bb.y) * 1.1;
				element.setAttribute('x', x);
				element.setAttribute('y', y);
				var lines = element.textContent.split('\n');
				if (lines.length > 1) {
					element.textContent = lines[0];
					var lineHeight = LINE_HEIGHTS[font] || 1;
					for (var i = 1, l = lines.length; i < l; i++) {
						var tspan = document.createElementNS(null, 'tspan');
						tspan.textContent = lines[i];
						tspan.setAttribute('x', '' + x);
						tspan.setAttribute('y', '' + (y + size * i * lineHeight));
						element.appendChild(tspan);
					}
				}
			} else if ((element.hasAttribute('x') || element.hasAttribute('y')) && element.hasAttribute('transform')) {
				element.setAttribute('x', 0);
				element.setAttribute('y', 0);
			}
			[].forEach.call(element.childNodes, patchSVG.bind(null, svg));
		}
	})(sb2 = P.sb2 || (P.sb2 = {}));
})(P || (P = {}));
(function(P) {
	var sb2;
	(function(sb2) {
		var compiler;
		(function(compiler) {
			var LOG_PRIMITIVES;
			class Scratch2Procedure extends P.core.Procedure {
				call(inputs) {
					return inputs;
				}
			}
			compiler.Scratch2Procedure = Scratch2Procedure;
			var EVENT_SELECTORS = [
				'procDef',
				'whenClicked',
				'whenCloned',
				'whenGreenFlag',
				'whenIReceive',
				'whenKeyPressed',
				'whenSceneStarts',
				'whenSensorGreaterThan'
			];
			var compileScripts = function(object) {
				for (var i = 0; i < object.scripts.length; i++) {
					compiler.compileListener(object, object.scripts[i][2]);
				}
			};
			var warnings;
			var warn = function(message) {
				warnings[message] = (warnings[message] || 0) + 1;
			};
			compiler.compileListener = function(object, script) {
				if (!script[0] || EVENT_SELECTORS.indexOf(script[0][0]) === -1)
					return;
				var nextLabel = function() {
					return object.fns.length + fns.length;
				};
				var label = function() {
					var id = nextLabel();
					fns.push(source.length);
					visual = 0;
					return id;
				};
				var delay = function() {
					source += 'return;\n';
					label();
				};
				var queue = function(id) {
					source += 'queue(' + id + ');\n';
					source += 'return;\n';
				};
				var forceQueue = function(id) {
					source += 'forceQueue(' + id + ');\n';
					source += 'return;\n';
				};
				var seq = function(script) {
					if (!script)
						return;
					for (var i = 0; i < script.length; i++) {
						compile(script[i]);
					}
				};
				var varRef = function(name) {
					if (typeof name !== 'string') {
						return 'getVars(' + val(name) + ')[' + val(name) + ']';
					}
					var o = object.stage.vars[name] !== undefined ? 'self' : 'S';
					return o + '.vars[' + val(name) + ']';
				};
				var listRef = function(name) {
					if (typeof name !== 'string') {
						return 'getLists(' + val(name) + ')[' + val(name) + ']';
					}
					var o = object.stage.lists[name] !== undefined ? 'self' : 'S';
					if (o === 'S' && !object.lists[name]) {
						object.lists[name] = [];
					}
					return o + '.lists[' + val(name) + ']';
				};
				var param = function(name, usenum, usebool) {
					if (typeof name !== 'string') {
						throw new Error('Dynamic parameters are not supported');
					}
					if (!inputs)
						return '0';
					var i = inputs.indexOf(name);
					if (i === -1) {
						return '0';
					}
					var t = types[i];
					var kind = t === '%n' || t === '%d' || t === '%c' ? 'num' :
						t === '%b' ? 'bool' : '';
					if (kind === 'num' && usenum) {
						used[i] = true;
						return 'C.numargs[' + i + ']';
					}
					if (kind === 'bool' && usebool) {
						used[i] = true;
						return 'C.boolargs[' + i + ']';
					}
					var v = 'C.args[' + i + ']';
					if (usenum)
						return '(+' + v + ' || 0)';
					if (usebool)
						return 'bool(' + v + ')';
					return v;
				};
				var val2 = function(e) {
					var v;
					if (e[0] === 'costumeName') {
						return 'S.getCostumeName()';
					} else if (e[0] === 'sceneName') {
						return 'self.getCostumeName()';
					} else if (e[0] === 'readVariable') {
						return varRef(e[1]);
					} else if (e[0] === 'contentsOfList:') {
						return 'contentsOfList(' + listRef(e[1]) + ')';
					} else if (e[0] === 'getLine:ofList:') {
						return 'getLineOfList(' + listRef(e[2]) + ', ' + val(e[1]) + ')';
					} else if (e[0] === 'concatenate:with:') {
						return '("" + ' + val(e[1]) + ' + ' + val(e[2]) + ')';
					} else if (e[0] === 'letter:of:') {
						return '(("" + ' + val(e[2]) + ')[(' + num(e[1]) + ' | 0) - 1] || "")';
					} else if (e[0] === 'answer') {
						return 'self.answer';
					} else if (e[0] === 'getAttribute:of:') {
						return 'attribute(' + val(e[1]) + ', ' + val(e[2]) + ')';
					} else if (e[0] === 'getUserId') {
						return '0';
					} else if (e[0] === 'getUserName') {
						return 'self.username';
					} else {
						warn('Undefined val: ' + e[0]);
					}
				};
				var val = function(e, usenum, usebool) {
					var v;
					if (typeof e === 'number' || typeof e === 'boolean' || e === null) {
						return '' + e;
					} else if (typeof e === 'string') {
						return '"' + e
							.replace(/\\/g, '\\\\')
							.replace(/\n/g, '\\n')
							.replace(/\r/g, '\\r')
							.replace(/"/g, '\\"')
							.replace(/\{/g, '\\x7b')
							.replace(/\}/g, '\\x7d') + '"';
					} else if (e[0] === 'getParam') {
						return param(e[1], usenum, usebool);
					} else if ((v = numval(e)) != null || (v = boolval(e)) != null) {
						return v;
					} else {
						v = val2(e);
						if (usenum)
							return '(+' + v + ' || 0)';
						if (usebool)
							return 'bool(' + v + ')';
						return v;
					}
				};
				var numval = function(e) {
					if (e[0] === 'xpos') {
						return 'S.scratchX';
					} else if (e[0] === 'ypos') {
						return 'S.scratchY';
					} else if (e[0] === 'heading') {
						return 'S.direction';
					} else if (e[0] === 'costumeIndex') {
						return '(S.currentCostumeIndex + 1)';
					} else if (e[0] === 'backgroundIndex') {
						return '(self.currentCostumeIndex + 1)';
					} else if (e[0] === 'scale') {
						return '(S.scale * 100)';
					} else if (e[0] === 'volume') {
						return '(S.volume * 100)';
					} else if (e[0] === 'tempo') {
						return 'self.tempoBPM';
					} else if (e[0] === 'lineCountOfList:') {
						return listRef(e[1]) + '.length';
					} else if (e[0] === '+') {
						return '(' + num(e[1]) + ' + ' + num(e[2]) + ' || 0)';
					} else if (e[0] === '-') {
						return '(' + num(e[1]) + ' - ' + num(e[2]) + ' || 0)';
					} else if (e[0] === '*') {
						return '(' + num(e[1]) + ' * ' + num(e[2]) + ' || 0)';
					} else if (e[0] === '/') {
						return '(' + num(e[1]) + ' / ' + num(e[2]) + ' || 0)';
					} else if (e[0] === 'randomFrom:to:') {
						return 'random(' + num(e[1]) + ', ' + num(e[2]) + ')';
					} else if (e[0] === 'abs') {
						return 'Math.abs(' + num(e[1]) + ')';
					} else if (e[0] === 'sqrt') {
						return 'Math.sqrt(' + num(e[1]) + ')';
					} else if (e[0] === 'stringLength:') {
						return '("" + ' + val(e[1]) + ').length';
					} else if (e[0] === '%' || e[0] === '\\\\') {
						return 'mod(' + num(e[1]) + ', ' + num(e[2]) + ')';
					} else if (e[0] === 'rounded') {
						return 'Math.round(' + num(e[1]) + ')';
					} else if (e[0] === 'computeFunction:of:') {
						if (typeof e[1] !== 'object') {
							switch ('' + e[1]) {
								case 'abs':
									return 'Math.abs(' + num(e[2]) + ')';
								case 'floor':
									return 'Math.floor(' + num(e[2]) + ')';
								case 'sqrt':
									return 'Math.sqrt(' + num(e[2]) + ')';
								case 'ceiling':
									return 'Math.ceil(' + num(e[2]) + ')';
								case 'cos':
									return 'Math.cos(' + num(e[2]) + ' * Math.PI / 180)';
								case 'sin':
									return 'Math.sin(' + num(e[2]) + ' * Math.PI / 180)';
								case 'tan':
									return 'Math.tan(' + num(e[2]) + ' * Math.PI / 180)';
								case 'asin':
									return '(Math.asin(' + num(e[2]) + ') * 180 / Math.PI)';
								case 'acos':
									return '(Math.acos(' + num(e[2]) + ') * 180 / Math.PI)';
								case 'atan':
									return '(Math.atan(' + num(e[2]) + ') * 180 / Math.PI)';
								case 'ln':
									return 'Math.log(' + num(e[2]) + ')';
								case 'log':
									return '(Math.log(' + num(e[2]) + ') / Math.LN10)';
								case 'e ^':
									return 'Math.exp(' + num(e[2]) + ')';
								case '10 ^':
									return 'Math.exp(' + num(e[2]) + ' * Math.LN10)';
							}
							return '0';
						}
						return 'mathFunc(' + val(e[1]) + ', ' + num(e[2]) + ')';
					} else if (e[0] === 'mouseX') {
						return 'self.mouseX';
					} else if (e[0] === 'mouseY') {
						return 'self.mouseY';
					} else if (e[0] === 'timer') {
						return '((runtime.now() - runtime.timerStart) / 1000)';
					} else if (e[0] === 'distanceTo:') {
						return 'S.distanceTo(' + val(e[1]) + ')';
					} else if (e[0] === 'soundLevel') {
						object.stage.initLoudness();
						return 'self.microphone.getLoudness()';
					} else if (e[0] === 'timestamp') {
						return '((Date.now() - epoch) / 86400000)';
					} else if (e[0] === 'timeAndDate') {
						return 'timeAndDate(' + val(e[1]) + ')';
					}
				};
				var DIGIT = /\d/;
				var boolval = function(e) {
					if (e[0] === 'list:contains:') {
						return 'listContains(' + listRef(e[1]) + ', ' + val(e[2]) + ')';
					} else if (e[0] === '<' || e[0] === '>') {
						var less;
						let x;
						let y;
						if (typeof e[1] === 'string' && DIGIT.test(e[1]) || typeof e[1] === 'number') {
							less = e[0] === '<';
							x = e[1];
							y = e[2];
						} else if (typeof e[2] === 'string' && DIGIT.test(e[2]) || typeof e[2] === 'number') {
							less = e[0] === '>';
							x = e[2];
							y = e[1];
						}
						var nx = +x;
						if (x == null || nx !== nx) {
							return '(compare(' + val(e[1]) + ', ' + val(e[2]) + ') === ' + (e[0] === '<' ? -1 : 1) + ')';
						}
						return (less ? 'numLess' : 'numGreater') + '(' + nx + ', ' + val(y) + ')';
					} else if (e[0] === '=') {
						let x;
						let y;
						if (typeof e[1] === 'string' && DIGIT.test(e[1]) || typeof e[1] === 'number') {
							x = e[1];
							y = e[2];
						} else if (typeof e[2] === 'string' && DIGIT.test(e[2]) || typeof e[2] === 'number') {
							x = e[2];
							y = e[1];
						}
						var nx = +x;
						if (x == null || nx !== nx) {
							return '(equal(' + val(e[1]) + ', ' + val(e[2]) + '))';
						}
						return '(numEqual(' + nx + ', ' + val(y) + '))';
					} else if (e[0] === '&') {
						return '(' + bool(e[1]) + ' && ' + bool(e[2]) + ')';
					} else if (e[0] === '|') {
						return '(' + bool(e[1]) + ' || ' + bool(e[2]) + ')';
					} else if (e[0] === 'not') {
						return '!' + bool(e[1]) + '';
					} else if (e[0] === 'mousePressed') {
						return 'self.mousePressed';
					} else if (e[0] === 'touching:') {
						return 'S.touching(' + val(e[1]) + ')';
					} else if (e[0] === 'touchingColor:') {
						return 'S.touchingColor(' + val(e[1]) + ')';
					} else if (e[0] === 'color:sees:') {
						return 'S.colorTouchingColor(' + val(e[1]) + ', ' + val(e[2]) + ')';
					} else if (e[0] === 'keyPressed:') {
						var v = typeof e[1] === 'object' ?
							'getKeyCode(' + val(e[1]) + ')' : val(P.runtime.getKeyCode(e[1]));
						return '!!self.keys[' + v + ']';
					}
				};
				var bool = function(e) {
					if (typeof e === 'boolean') {
						return e;
					}
					if (typeof e === 'number' || typeof e === 'string') {
						return +e !== 0 && e !== '' && e !== 'false';
					}
					var v = boolval(e);
					return v != null ? v : val(e, false, true);
				};
				var num = function(e) {
					if (typeof e === 'number') {
						return e || 0;
					}
					if (typeof e === 'boolean' || typeof e === 'string') {
						return +e || 0;
					}
					var v = numval(e);
					return v != null ? v : val(e, true);
				};
				var beatHead = function(dur) {
					source += 'save();\n';
					source += 'R.start = runtime.now();\n';
					source += 'R.duration = ' + num(dur) + ' * 60 / self.tempoBPM;\n';
					source += 'var first = true;\n';
				};
				var beatTail = function() {
					var id = label();
					source += 'if (!R.sound) R.sound = { stopped: false };';
					source += 'S.activeSounds.add(R.sound);\n';
					source += 'if ((runtime.now() - R.start < R.duration * 1000 || first) && !R.sound.stopped) {\n';
					source += '  var first;\n';
					forceQueue(id);
					source += '}\n';
					source += 'S.activeSounds.delete(R.sound);';
					source += 'restore();\n';
				};
				var wait = function(dur) {
					source += 'save();\n';
					source += 'R.start = runtime.now();\n';
					source += 'R.duration = ' + dur + ';\n';
					source += 'var first = true;\n';
					var id = label();
					source += 'if (runtime.now() - R.start < R.duration * 1000 || first) {\n';
					source += '  var first;\n';
					forceQueue(id);
					source += '}\n';
					source += 'restore();\n';
				};
				var toHSLA = 'S.penColor.toHSLA();\n';
				toHSLA += 'S.penColor.a = 1;\n';
				var visual = 0;
				var compile = function(block) {
					if (LOG_PRIMITIVES) {
						source += 'console.log(' + val(block[0]) + ');\n';
					}
					if (['turnRight:', 'turnLeft:', 'heading:', 'pointTowards:', 'setRotationStyle', 'lookLike:', 'nextCostume', 'say:duration:elapsed:from:', 'say:', 'think:duration:elapsed:from:', 'think:', 'changeGraphicEffect:by:', 'setGraphicEffect:to:', 'filterReset', 'changeSizeBy:', 'setSizeTo:', 'comeToFront', 'goBackByLayers:'].indexOf(block[0]) !== -1) {
						if (visual < 2) {
							source += 'if (S.visible) VISUAL = true;\n';
							visual = 2;
						} else if (P.config.debug)
							source += '/* visual: 2 */\n';
					} else if (['forward:', 'gotoX:y:', 'gotoSpriteOrMouse:', 'changeXposBy:', 'xpos:', 'changeYposBy:', 'ypos:', 'bounceOffEdge', 'glideSecs:toX:y:elapsed:from:'].indexOf(block[0]) !== -1) {
						if (visual < 1) {
							source += 'if (S.visible || S.isPenDown) VISUAL = true;\n';
							visual = 1;
						} else if (P.config.debug)
							source += '/* visual: 1 */\n';
					} else if (['showBackground:', 'startScene', 'nextBackground', 'nextScene', 'startSceneAndWait', 'show', 'hide', 'putPenDown', 'stampCostume', 'showVariable:', 'hideVariable:', 'doAsk', 'setVolumeTo:', 'changeVolumeBy:', 'setTempoTo:', 'changeTempoBy:'].indexOf(block[0]) !== -1) {
						if (visual < 3) {
							source += 'VISUAL = true;\n';
							visual = 3;
						} else if (P.config.debug)
							source += '/* visual: 3 */\n';
					}
					if (block[0] === 'forward:') {
						source += 'S.forward(' + num(block[1]) + ');\n';
					} else if (block[0] === 'turnRight:') {
						source += 'S.setDirection(S.direction + ' + num(block[1]) + ');\n';
					} else if (block[0] === 'turnLeft:') {
						source += 'S.setDirection(S.direction - ' + num(block[1]) + ');\n';
					} else if (block[0] === 'heading:') {
						source += 'S.setDirection(' + num(block[1]) + ');\n';
					} else if (block[0] === 'pointTowards:') {
						source += 'S.pointTowards(' + val(block[1]) + ');\n';
					} else if (block[0] === 'gotoX:y:') {
						source += 'S.moveTo(' + num(block[1]) + ', ' + num(block[2]) + ');\n';
					} else if (block[0] === 'gotoSpriteOrMouse:') {
						source += 'S.gotoObject(' + val(block[1]) + ');\n';
					} else if (block[0] === 'changeXposBy:') {
						source += 'S.moveTo(S.scratchX + ' + num(block[1]) + ', S.scratchY);\n';
					} else if (block[0] === 'xpos:') {
						source += 'S.moveTo(' + num(block[1]) + ', S.scratchY);\n';
					} else if (block[0] === 'changeYposBy:') {
						source += 'S.moveTo(S.scratchX, S.scratchY + ' + num(block[1]) + ');\n';
					} else if (block[0] === 'ypos:') {
						source += 'S.moveTo(S.scratchX, ' + num(block[1]) + ');\n';
					} else if (block[0] === 'bounceOffEdge') {
						source += 'S.bounceOffEdge();\n';
					} else if (block[0] === 'setRotationStyle') {
						source += 'S.rotationStyle = P.utils.parseRotationStyle(' + val(block[1]) + ');\n';
					} else if (block[0] === 'lookLike:') {
						source += 'S.setCostume(' + val(block[1]) + ');\n';
					} else if (block[0] === 'nextCostume') {
						source += 'S.showNextCostume();\n';
					} else if (block[0] === 'showBackground:' ||
						block[0] === 'startScene') {
						source += 'self.setCostume(' + val(block[1]) + ');\n';
						source += 'var threads = sceneChange();\n';
						source += 'if (threads.indexOf(BASE) !== -1) {return;}\n';
					} else if (block[0] === 'nextBackground' ||
						block[0] === 'nextScene') {
						source += 'S.showNextCostume();\n';
						source += 'var threads = sceneChange();\n';
						source += 'if (threads.indexOf(BASE) !== -1) {return;}\n';
					} else if (block[0] === 'startSceneAndWait') {
						source += 'save();\n';
						source += 'self.setCostume(' + val(block[1]) + ');\n';
						source += 'R.threads = sceneChange();\n';
						source += 'if (R.threads.indexOf(BASE) !== -1) {return;}\n';
						var id = label();
						source += 'if (!running(R.threads)) {\n';
						forceQueue(id);
						source += '}\n';
						source += 'restore();\n';
					} else if (block[0] === 'say:duration:elapsed:from:') {
						source += 'save();\n';
						source += 'R.id = S.say(' + val(block[1]) + ', false);\n';
						source += 'R.start = runtime.now();\n';
						source += 'R.duration = ' + num(block[2]) + ';\n';
						var id = label();
						source += 'if (runtime.now() - R.start < R.duration * 1000) {\n';
						forceQueue(id);
						source += '}\n';
						source += 'if (S.sayId === R.id) {\n';
						source += '  S.say("");\n';
						source += '}\n';
						source += 'restore();\n';
					} else if (block[0] === 'say:') {
						source += 'S.say(' + val(block[1]) + ', false);\n';
					} else if (block[0] === 'think:duration:elapsed:from:') {
						source += 'save();\n';
						source += 'R.id = S.say(' + val(block[1]) + ', true);\n';
						source += 'R.start = runtime.now();\n';
						source += 'R.duration = ' + num(block[2]) + ';\n';
						var id = label();
						source += 'if (runtime.now() - R.start < R.duration * 1000) {\n';
						forceQueue(id);
						source += '}\n';
						source += 'if (S.sayId === R.id) {\n';
						source += '  S.say("");\n';
						source += '}\n';
						source += 'restore();\n';
					} else if (block[0] === 'think:') {
						source += 'S.say(' + val(block[1]) + ', true);\n';
					} else if (block[0] === 'changeGraphicEffect:by:') {
						source += 'S.changeFilter(' + val(block[1]) + ', ' + num(block[2]) + ');\n';
					} else if (block[0] === 'setGraphicEffect:to:') {
						source += 'S.setFilter(' + val(block[1]) + ', ' + num(block[2]) + ');\n';
					} else if (block[0] === 'filterReset') {
						source += 'S.resetFilters();\n';
					} else if (block[0] === 'changeSizeBy:') {
						source += 'var f = S.scale + ' + num(block[1]) + ' / 100;\n';
						source += 'S.scale = f < 0 ? 0 : f;\n';
					} else if (block[0] === 'setSizeTo:') {
						source += 'var f = ' + num(block[1]) + ' / 100;\n';
						source += 'S.scale = f < 0 ? 0 : f;\n';
					} else if (block[0] === 'show') {
						source += 'S.visible = true;\n';
						source += 'if (S.saying) S.updateBubble();\n';
					} else if (block[0] === 'hide') {
						source += 'S.visible = false;\n';
						source += 'if (S.saying) S.updateBubble();\n';
					} else if (block[0] === 'comeToFront') {
						source += 'var i = self.children.indexOf(S);\n';
						source += 'if (i !== -1) self.children.splice(i, 1);\n';
						source += 'self.children.push(S);\n';
					} else if (block[0] === 'goBackByLayers:') {
						source += 'var i = self.children.indexOf(S);\n';
						source += 'if (i !== -1) {\n';
						source += '  self.children.splice(i, 1);\n';
						source += '  self.children.splice(Math.max(0, i - ' + num(block[1]) + '), 0, S);\n';
						source += '}\n';
					} else if (block[0] === 'setVideoState') {
						source += 'switch (' + val(block[1]) + ') {';
						source += '  case "off": self.showVideo(false); break;';
						source += '  case "on": self.showVideo(true); break;';
						source += '}';
					} else if (block[0] === 'playSound:') {
						if (P.audio.context) {
							source += 'var sound = S.getSound(' + val(block[1]) + ');\n';
							source += 'if (sound) startSound(sound);\n';
						}
					} else if (block[0] === 'doPlaySoundAndWait') {
						if (P.audio.context) {
							source += 'var sound = S.getSound(' + val(block[1]) + ');\n';
							source += 'if (sound) {\n';
							source += '  save();\n';
							source += '  R.sound = playSound(sound);\n';
							source += '  S.activeSounds.add(R.sound);\n';
							source += '  R.start = runtime.now();\n';
							source += '  R.duration = sound.duration;\n';
							source += '  var first = true;\n';
							var id = label();
							source += '  if ((runtime.now() - R.start < R.duration * 1000 || first) && !R.sound.stopped) {\n';
							source += '    var first;\n';
							forceQueue(id);
							source += '  }\n';
							source += '  S.activeSounds.delete(R.sound);\n';
							source += '  restore();\n';
							source += '}\n';
						}
					} else if (block[0] === 'stopAllSounds') {
						if (P.audio.context) {
							source += 'self.stopAllSounds();\n';
						}
					} else if (block[0] === 'playDrum') {
						beatHead(block[2]);
						if (P.audio.context) {
							source += 'R.sound = playSpan(DRUMS[Math.round(' + num(block[1]) + ') - 1] || DRUMS[2], 60, 10);\n';
						}
						beatTail();
					} else if (block[0] === 'rest:elapsed:from:') {
						beatHead(block[1]);
						beatTail();
					} else if (block[0] === 'noteOn:duration:elapsed:from:') {
						beatHead(block[2]);
						if (P.audio.context) {
							source += 'R.sound = playNote(' + num(block[1]) + ', R.duration);\n';
						}
						beatTail();
					} else if (block[0] === 'instrument:') {
						source += 'S.instrument = Math.max(0, Math.min(INSTRUMENTS.length - 1, ' + num(block[1]) + ' - 1)) | 0;';
					} else if (block[0] === 'changeVolumeBy:' || block[0] === 'setVolumeTo:') {
						source += 'S.volume = Math.min(1, Math.max(0, ' + (block[0] === 'changeVolumeBy:' ? 'S.volume + ' : '') + num(block[1]) + ' / 100));\n';
						source += 'if (S.node) S.node.gain.value = S.volume;\n';
					} else if (block[0] === 'changeTempoBy:') {
						source += 'self.tempoBPM += ' + num(block[1]) + ';\n';
					} else if (block[0] === 'setTempoTo:') {
						source += 'self.tempoBPM = ' + num(block[1]) + ';\n';
					} else if (block[0] === 'clearPenTrails') {
						source += 'self.clearPen();\n';
					} else if (block[0] === 'putPenDown') {
						source += 'S.isPenDown = true;\n';
						source += 'S.dotPen();\n';
					} else if (block[0] === 'putPenUp') {
						source += 'S.isPenDown = false;\n';
					} else if (block[0] === 'penColor:') {
						source += 'S.setPenColor(' + num(block[1]) + ');\n';
					} else if (block[0] === 'setPenHueTo:') {
						source += toHSLA;
						source += 'S.penColor.x = ' + num(block[1]) + ' * 360 / 200;\n';
						source += 'S.penColor.y = 100;\n';
					} else if (block[0] === 'changePenHueBy:') {
						source += toHSLA;
						source += 'S.penColor.x += ' + num(block[1]) + ' * 360 / 200;\n';
						source += 'S.penColor.y = 100;\n';
					} else if (block[0] === 'setPenShadeTo:') {
						source += toHSLA;
						source += 'S.penColor.z = ' + num(block[1]) + ' % 200;\n';
						source += 'if (S.penColor.z < 0) S.penColor.z += 200;\n';
						source += 'S.penColor.y = 100;\n';
					} else if (block[0] === 'changePenShadeBy:') {
						source += toHSLA;
						source += 'S.penColor.z = (S.penColor.z + ' + num(block[1]) + ') % 200;\n';
						source += 'if (S.penColor.z < 0) S.penColor.z += 200;\n';
						source += 'S.penColor.y = 100;\n';
					} else if (block[0] === 'penSize:') {
						source += 'var f = ' + num(block[1]) + ';\n';
						source += 'S.penSize = f < 1 ? 1 : f;\n';
					} else if (block[0] === 'changePenSizeBy:') {
						source += 'var f = S.penSize + ' + num(block[1]) + ';\n';
						source += 'S.penSize = f < 1 ? 1 : f;\n';
					} else if (block[0] === 'stampCostume') {
						source += 'S.stamp();\n';
					} else if (block[0] === 'setVar:to:') {
						source += varRef(block[1]) + ' = ' + val(block[2]) + ';\n';
					} else if (block[0] === 'changeVar:by:') {
						var ref = varRef(block[1]);
						source += ref + ' = (+' + ref + ' || 0) + ' + num(block[2]) + ';\n';
					} else if (block[0] === 'append:toList:') {
						source += 'appendToList(' + listRef(block[2]) + ', ' + val(block[1]) + ');\n';
					} else if (block[0] === 'deleteLine:ofList:') {
						source += 'deleteLineOfList(' + listRef(block[2]) + ', ' + val(block[1]) + ');\n';
					} else if (block[0] === 'insert:at:ofList:') {
						source += 'insertInList(' + listRef(block[3]) + ', ' + val(block[2]) + ', ' + val(block[1]) + ');\n';
					} else if (block[0] === 'setLine:ofList:to:') {
						source += 'setLineOfList(' + listRef(block[2]) + ', ' + val(block[1]) + ', ' + val(block[3]) + ');\n';
					} else if (block[0] === 'showVariable:' || block[0] === 'hideVariable:') {
						var isShow = block[0] === 'showVariable:';
						if (typeof block[1] === 'string') {
							var o = object.vars[block[1]] !== undefined ? 'S' : 'self';
							source += o + '.showVariable(' + val(block[1]) + ', ' + isShow + ');\n';
						} else {
							warn('ignoring dynamic variable');
						}
					} else if (block[0] === 'broadcast:') {
						source += 'var threads = broadcast(' + val(block[1]) + ');\n';
						source += 'if (threads.indexOf(BASE) !== -1) {return;}\n';
					} else if (block[0] === 'call') {
						if (P.config.debug && block[1] === 'phosphorus: debug') {
							source += 'debugger;\n';
						} else {
							source += 'call(S.procedures[' + val(block[1]) + '], ' + nextLabel() + ', [';
							for (var i = 2; i < block.length; i++) {
								if (i > 2) {
									source += ', ';
								}
								source += val(block[i]);
							}
							source += ']);\n';
							delay();
						}
					} else if (block[0] === 'doBroadcastAndWait') {
						source += 'save();\n';
						source += 'R.threads = broadcast(' + val(block[1]) + ');\n';
						source += 'if (R.threads.indexOf(BASE) !== -1) {return;}\n';
						var id = label();
						source += 'if (running(R.threads)) {\n';
						forceQueue(id);
						source += '}\n';
						source += 'restore();\n';
					} else if (block[0] === 'doForever') {
						var id = label();
						seq(block[1]);
						forceQueue(id);
					} else if (block[0] === 'doForeverIf') {
						var id = label();
						source += 'if (' + bool(block[1]) + ') {\n';
						seq(block[2]);
						source += '}\n';
						forceQueue(id);
					} else if (block[0] === 'doIf') {
						source += 'if (' + bool(block[1]) + ') {\n';
						seq(block[2]);
						source += '}\n';
					} else if (block[0] === 'doIfElse') {
						source += 'if (' + bool(block[1]) + ') {\n';
						seq(block[2]);
						source += '} else {\n';
						seq(block[3]);
						source += '}\n';
					} else if (block[0] === 'doRepeat') {
						source += 'save();\n';
						source += 'R.count = ' + num(block[1]) + ';\n';
						var id = label();
						source += 'if (R.count >= 0.5) {\n';
						source += '  R.count -= 1;\n';
						seq(block[2]);
						queue(id);
						source += '} else {\n';
						source += '  restore();\n';
						source += '}\n';
					} else if (block[0] === 'doReturn') {
						source += 'endCall();\n';
						source += 'return;\n';
					} else if (block[0] === 'doUntil') {
						var id = label();
						source += 'if (!' + bool(block[1]) + ') {\n';
						seq(block[2]);
						queue(id);
						source += '}\n';
					} else if (block[0] === 'doWhile') {
						var id = label();
						source += 'if (' + bool(block[1]) + ') {\n';
						seq(block[2]);
						queue(id);
						source += '}\n';
					} else if (block[0] === 'doWaitUntil') {
						var id = label();
						source += 'if (!' + bool(block[1]) + ') {\n';
						forceQueue(id);
						source += '}\n';
					} else if (block[0] === 'glideSecs:toX:y:elapsed:from:') {
						source += 'save();\n';
						source += 'R.start = runtime.now();\n';
						source += 'R.duration = ' + num(block[1]) + ';\n';
						source += 'R.baseX = S.scratchX;\n';
						source += 'R.baseY = S.scratchY;\n';
						source += 'R.deltaX = ' + num(block[2]) + ' - S.scratchX;\n';
						source += 'R.deltaY = ' + num(block[3]) + ' - S.scratchY;\n';
						var id = label();
						source += 'var f = (runtime.now() - R.start) / (R.duration * 1000);\n';
						source += 'if (f > 1 || isNaN(f)) f = 1;\n';
						source += 'S.moveTo(R.baseX + f * R.deltaX, R.baseY + f * R.deltaY);\n';
						source += 'if (f < 1) {\n';
						forceQueue(id);
						source += '}\n';
						source += 'restore();\n';
					} else if (block[0] === 'stopAll') {
						source += 'runtime.stopAll();\n';
						source += 'return;\n';
					} else if (block[0] === 'stopScripts') {
						source += 'switch (' + val(block[1]) + ') {\n';
						source += '  case "all":\n';
						source += '    runtime.stopAll();\n';
						source += '    return;\n';
						source += '  case "this script":\n';
						source += '    endCall();\n';
						source += '    return;\n';
						source += '  case "other scripts in sprite":\n';
						source += '  case "other scripts in stage":\n';
						source += '    S.stopSoundsExcept(BASE);\n';
						source += '    for (var i = 0; i < runtime.queue.length; i++) {\n';
						source += '      if (i !== THREAD && runtime.queue[i] && runtime.queue[i].sprite === S) {\n';
						source += '        runtime.queue[i] = undefined;\n';
						source += '      }\n';
						source += '    }\n';
						source += '    break;\n';
						source += '}\n';
					} else if (block[0] === 'wait:elapsed:from:') {
						wait(num(block[1]));
					} else if (block[0] === 'warpSpeed') {
						source += 'WARP++;\n';
						seq(block[1]);
						source += 'WARP--;\n';
					} else if (block[0] === 'createCloneOf') {
						source += 'clone(' + val(block[1]) + ');\n';
					} else if (block[0] === 'deleteClone') {
						source += 'if (S.isClone) {\n';
						source += '  S.remove();\n';
						source += '  var i = self.children.indexOf(S);\n';
						source += '  if (i !== -1) self.children.splice(i, 1);\n';
						source += '  for (var i = 0; i < runtime.queue.length; i++) {\n';
						source += '    if (runtime.queue[i] && runtime.queue[i].sprite === S) {\n';
						source += '      runtime.queue[i] = undefined;\n';
						source += '    }\n';
						source += '  }\n';
						source += '  return;\n';
						source += '}\n';
					} else if (block[0] === 'doAsk') {
						source += 'R.id = self.nextPromptId++;\n';
						var id = label();
						source += 'if (self.promptId < R.id) {\n';
						forceQueue(id);
						source += '}\n';
						source += 'S.ask(' + val(block[1]) + ');\n';
						var id = label();
						source += 'if (self.promptId === R.id) {\n';
						forceQueue(id);
						source += '}\n';
					} else if (block[0] === 'timerReset') {
						source += 'runtime.timerStart = runtime.now();\n';
					} else {
						warn('Undefined command: ' + block[0]);
					}
				};
				var source = '';
				var startfn = object.fns.length;
				var fns = [0];
				if (script[0][0] === 'procDef') {
					var inputs = script[0][2];
					var types = script[0][1].match(/%[snmdcb]/g) || [];
					var used = [];
				}
				for (let i = 1; i < script.length; i++) {
					compile(script[i]);
				}
				if (script[0][0] === 'procDef') {
					let pre = '';
					for (let i = types.length; i--;) {
						if (used[i]) {
							const t = types[i];
							if (t === '%d' || t === '%n' || t === '%c') {
								pre += 'C.numargs[' + i + '] = +C.args[' + i + '] || 0;\n';
							} else if (t === '%b') {
								pre += 'C.boolargs[' + i + '] = bool(C.args[' + i + ']);\n';
							}
						}
					}
					source = pre + source;
					for (let i = 1, l = fns.length; i < l; ++i) {
						fns[i] += pre.length;
					}
					source += 'endCall();\n';
					source += 'return;\n';
				}
				for (let i = 0; i < fns.length; i++) {
					object.fns.push(P.runtime.createContinuation(source.slice(fns[i])));
				}
				var f = object.fns[startfn];
				if (script[0][0] === 'whenClicked') {
					object.listeners.whenClicked.push(f);
				} else if (script[0][0] === 'whenGreenFlag') {
					object.listeners.whenGreenFlag.push(f);
				} else if (script[0][0] === 'whenCloned') {
					object.listeners.whenCloned.push(f);
				} else if (script[0][0] === 'whenIReceive') {
					var key = script[0][1].toLowerCase();
					(object.listeners.whenIReceive[key] || (object.listeners.whenIReceive[key] = [])).push(f);
				} else if (script[0][0] === 'whenKeyPressed') {
					if (script[0][1] === 'any') {
						for (var i = 128; i--;) {
							object.listeners.whenKeyPressed[i].push(f);
						}
					} else {
						object.listeners.whenKeyPressed[P.runtime.getKeyCode(script[0][1])].push(f);
					}
				} else if (script[0][0] === 'whenSceneStarts') {
					var key = script[0][1].toLowerCase();
					(object.listeners.whenSceneStarts[key] || (object.listeners.whenSceneStarts[key] = [])).push(f);
				} else if (script[0][0] === 'procDef') {
					const warp = script[0][4];
					const name = script[0][1];
					if (!object.procedures[name]) {
						object.procedures[name] = new Scratch2Procedure(f, warp, inputs);
					} else {
						warn('procedure already exists: ' + name);
					}
				} else {
					warn('Undefined event: ' + script[0][0]);
				}
				if (P.config.debug) {
					var variant = script[0][0];
					if (variant === 'procDef') {
						variant += ':' + script[0][1];
					}
					console.log('compiled sb2 script', variant, source);
				}
			};

			function compile(stage) {
				warnings = Object.create(null);
				compileScripts(stage);
				for (var i = 0; i < stage.children.length; i++) {
					compileScripts(stage.children[i]);
				}
				for (var key in warnings) {
					console.warn(key + (warnings[key] > 1 ? ' (repeated ' + warnings[key] + ' times)' : ''));
				}
			}
			compiler.compile = compile;
		})(compiler = sb2.compiler || (sb2.compiler = {}));
	})(sb2 = P.sb2 || (P.sb2 = {}));
})(P || (P = {}));
var P;
(function(P) {
	var sb3;
	(function(sb3) {
		sb3.ASSETS_API = 'https://assets.scratch.mit.edu/internalapi/asset/$md5ext/get/';
		class Scratch3Stage extends P.core.Stage {
			constructor() {
				super(...arguments);
				this.listIds = {};
			}
		}
		sb3.Scratch3Stage = Scratch3Stage;
		class Scratch3Sprite extends P.core.Sprite {
			constructor() {
				super(...arguments);
				this.listIds = {};
			}
			_clone() {
				return new Scratch3Sprite(this.stage);
			}
		}
		sb3.Scratch3Sprite = Scratch3Sprite;
		class Scratch3VariableWatcher extends P.core.Watcher {
			constructor(stage, data) {
				super(stage, data.spriteName || '');
				this.id = data.id;
				this.opcode = data.opcode;
				this.mode = data.mode;
				this.params = data.params;
				this.libraryEntry = P.sb3.compiler.watcherLibrary[this.opcode];
				this.x = data.x;
				this.y = data.y;
				this.visible = typeof data.visible === 'boolean' ? data.visible : true;
				this.sliderMin = data.sliderMin || 0;
				this.sliderMax = data.sliderMax || 0;
				if (typeof data.isDiscrete !== 'undefined') {
					this.sliderStep = data.isDiscrete ? 1 : 0.01;
				} else {
					this.sliderStep = 1;
				}
				if (!this.libraryEntry) {
					console.warn('unknown watcher', this.opcode, this);
					this.valid = false;
				}
			}
			update() {
				if (this.visible) {
					const value = this.getValue();
					if (this.valueEl.textContent !== value) {
						this.valueEl.textContent = value;
					}
					if (this.sliderInput) {
						this.sliderInput.value = value;
					}
				}
			}
			init() {
				super.init();
				if (this.libraryEntry.init) {
					this.libraryEntry.init(this);
				}
				this.updateLayout();
			}
			setVisible(visible) {
				super.setVisible(visible);
				this.updateLayout();
			}
			getLabel() {
				const label = this.libraryEntry.getLabel(this);
				if (!this.target.isStage) {
					return this.targetName + ': ' + label;
				}
				return label;
			}
			getValue() {
				const value = this.libraryEntry.evaluate(this);
				if (typeof value === 'number') {
					return '' + (Math.round(value * 1e6) / 1e6);
				}
				return '' + value;
			}
			setValue(value) {
				if (this.libraryEntry.set) {
					this.libraryEntry.set(this, value);
					this.update();
				}
			}
			updateLayout() {
				if (this.containerEl) {
					this.containerEl.style.display = this.visible ? 'flex' : 'none';
					return;
				}
				if (!this.visible) {
					return;
				}
				const container = document.createElement('div');
				container.classList.add('s3-watcher-container');
				container.dataset.opcode = this.opcode;
				container.style.top = (this.y / 10) + 'em';
				container.style.left = (this.x / 10) + 'em';
				const value = document.createElement('div');
				value.classList.add('s3-watcher-value');
				value.textContent = this.getValue();
				this.containerEl = container;
				this.valueEl = value;
				this.stage.ui.appendChild(container);
				const mode = this.mode;
				if (mode === 'large') {
					container.classList.add('s3-watcher-large');
					container.appendChild(value);
				} else {
					const row = document.createElement('div');
					row.classList.add('s3-watcher-row');
					row.classList.add('s3-watcher-row-normal');
					const label = document.createElement('div');
					label.classList.add('s3-watcher-label');
					label.textContent = this.getLabel();
					row.appendChild(label);
					row.appendChild(value);
					container.classList.add('s3-watcher-container-normal');
					container.appendChild(row);
					if (mode === 'slider') {
						const slider = document.createElement('div');
						slider.classList.add('s3-watcher-row-slider');
						const input = document.createElement('input');
						input.type = 'range';
						input.min = '' + this.sliderMin;
						input.max = '' + this.sliderMax;
						input.step = '' + this.sliderStep;
						input.value = this.getValue();
						input.addEventListener('input', this.sliderChanged.bind(this));
						this.sliderInput = input;
						slider.appendChild(input);
						container.appendChild(slider);
					}
				}
			}
			sliderChanged(e) {
				const value = +e.target.value;
				this.setValue(value);
			}
		}
		sb3.Scratch3VariableWatcher = Scratch3VariableWatcher;
		class ListWatcherRow {
			constructor() {
				this.value = '';
				this.index = -1;
				this.y = 0;
				this.visible = true;
				this.element = document.createElement('div');
				this.indexEl = document.createElement('div');
				this.valueEl = document.createElement('div');
				this.element.className = 's3-list-row';
				this.indexEl.className = 's3-list-index';
				this.valueEl.className = 's3-list-value';
				this.element.appendChild(this.indexEl);
				this.element.appendChild(this.valueEl);
			}
			setValue(value) {
				if (value !== this.value) {
					this.value = value;
					this.valueEl.textContent = value;
				}
			}
			setIndex(index) {
				if (index !== this.index) {
					this.index = index;
					this.indexEl.textContent = (index + 1).toString();
				}
			}
			setY(y) {
				if (y !== this.y) {
					this.y = y;
					this.element.style.transform = 'translateY(' + y + 'px)';
				}
			}
			setVisible(visible) {
				if (this.visible !== visible) {
					this.visible = visible;
					this.element.style.display = visible ? '' : 'none';
				}
			}
		}
		sb3.ListWatcherRow = ListWatcherRow;
		class Scratch3ListWatcher extends P.core.Watcher {
			constructor(stage, data) {
				super(stage, data.spriteName || '');
				this.rows = [];
				this.firstUpdateComplete = false;
				this._rowHeight = -1;
				this.scrollTop = 0;
				this.lastZoomLevel = 1;
				this.scrollAhead = 8;
				this.scrollBack = 3;
				this.scrollDirection = 1;
				this._contentHeight = -1;
				this.id = data.id;
				this.params = data.params;
				this.x = data.x;
				this.y = data.y;
				this.visible = typeof data.visible === 'boolean' ? data.visible : true;
				this.width = data.width || 100;
				this.height = data.height || 200;
			}
			shouldUpdate() {
				if (!this.visible)
					return false;
				if (this.lastZoomLevel !== this.stage.zoom)
					return true;
				if (!this.firstUpdateComplete)
					return true;
				return this.list.modified;
			}
			update() {
				if (!this.shouldUpdate()) {
					return;
				}
				if (this.lastZoomLevel !== this.stage.zoom) {
					this.contentEl.scrollTop *= this.stage.zoom / this.lastZoomLevel;
				}
				this.list.modified = false;
				this.lastZoomLevel = this.stage.zoom;
				this.firstUpdateComplete = true;
				this.updateList();
				const bottomLabelText = this.getBottomLabel();
				if (this.bottomLabelEl.textContent !== bottomLabelText) {
					this.bottomLabelEl.textContent = this.getBottomLabel();
				}
			}
			updateList() {
				if (!this.visible && this._rowHeight === -1) {
					return;
				}
				const height = this.list.length * this.getRowHeight();
				this.endpointEl.style.transform = 'translateY(' + (height * this.stage.zoom) + 'px)';
				const topVisible = this.scrollTop;
				const bottomVisible = topVisible + this.getContentHeight();
				let startingIndex = Math.floor(topVisible / this.getRowHeight());
				let endingIndex = Math.ceil(bottomVisible / this.getRowHeight());
				if (this.scrollDirection === 1) {
					startingIndex -= this.scrollBack;
					endingIndex += this.scrollAhead;
				} else {
					startingIndex -= this.scrollAhead;
					endingIndex += this.scrollBack;
				}
				if (startingIndex < 0)
					startingIndex = 0;
				if (endingIndex > this.list.length - 1)
					endingIndex = this.list.length - 1;
				if (endingIndex - startingIndex > 50) {
					endingIndex = startingIndex + 50;
				}
				const visibleRows = endingIndex - startingIndex;
				while (this.rows.length <= visibleRows) {
					this.addRow();
				}
				for (var listIndex = startingIndex, rowIndex = 0; listIndex <= endingIndex; listIndex++, rowIndex++) {
					let row = this.rows[rowIndex];
					row.setIndex(listIndex);
					row.setValue(this.list[listIndex]);
					row.setY(listIndex * this._rowHeight * this.stage.zoom);
					row.setVisible(true);
				}
				while (rowIndex < this.rows.length) {
					this.rows[rowIndex].setVisible(false);
					rowIndex++;
				}
			}
			init() {
				super.init();
				const target = this.target;
				const listId = this.id;
				const listName = target.listIds[listId];
				if (!(listName in this.target.lists)) {
					this.target.lists[listName] = createList();
				}
				this.list = this.target.lists[listName];
				this.target.listWatchers[listName] = this;
				this.updateLayout();
			}
			getTopLabel() {
				if (this.target.isStage) {
					return this.params.LIST;
				}
				return this.target.name + ': ' + this.params.LIST;
			}
			getBottomLabel() {
				return 'length ' + this.list.length;
			}
			getContentHeight() {
				if (this._contentHeight === -1) {
					this._contentHeight = this.contentEl.offsetHeight;
				}
				return this._contentHeight;
			}
			getRowHeight() {
				if (this._rowHeight === -1) {
					const PADDING = 2;
					const row = this.addRow();
					const height = row.element.offsetHeight;
					this._rowHeight = height + PADDING;
				}
				return this._rowHeight;
			}
			addRow() {
				const row = new ListWatcherRow();
				this.rows.push(row);
				this.contentEl.appendChild(row.element);
				return row;
			}
			updateLayout() {
				if (!this.containerEl) {
					this.createLayout();
				}
				this.containerEl.style.display = this.visible ? '' : 'none';
			}
			setVisible(visible) {
				super.setVisible(visible);
				this.updateLayout();
			}
			createLayout() {
				this.containerEl = document.createElement('div');
				this.topLabelEl = document.createElement('div');
				this.bottomLabelEl = document.createElement('div');
				this.middleContainerEl = document.createElement('div');
				this.contentEl = document.createElement('div');
				this.containerEl.style.top = (this.y / 10) + 'em';
				this.containerEl.style.left = (this.x / 10) + 'em';
				this.containerEl.style.height = (this.height / 10) + 'em';
				this.containerEl.style.width = (this.width / 10) + 'em';
				this.containerEl.classList.add('s3-list-container');
				this.topLabelEl.textContent = this.getTopLabel();
				this.topLabelEl.classList.add('s3-list-top-label');
				this.bottomLabelEl.textContent = this.getBottomLabel();
				this.bottomLabelEl.classList.add('s3-list-bottom-label');
				this.middleContainerEl.classList.add('s3-list-content');
				this.contentEl.classList.add('s3-list-rows');
				this.contentEl.addEventListener('scroll', (e) => {
					const scrollTop = this.contentEl.scrollTop / this.stage.zoom;
					const scrollChange = this.scrollTop - scrollTop;
					if (scrollChange < 0) {
						this.scrollDirection = 1;
					} else if (scrollChange > 0) {
						this.scrollDirection = 0;
					}
					this.scrollTop = scrollTop;
					this.updateList();
				});
				this.endpointEl = document.createElement('div');
				this.endpointEl.className = 's3-list-endpoint';
				this.contentEl.appendChild(this.endpointEl);
				this.middleContainerEl.appendChild(this.contentEl);
				this.containerEl.appendChild(this.topLabelEl);
				this.containerEl.appendChild(this.middleContainerEl);
				this.containerEl.appendChild(this.bottomLabelEl);
				this.stage.ui.appendChild(this.containerEl);
			}
		}
		sb3.Scratch3ListWatcher = Scratch3ListWatcher;
		class Scratch3Procedure extends P.core.Procedure {
			call(inputs) {
				const args = {};
				for (var i = 0; i < this.inputs.length; i++) {
					args[this.inputs[i]] = inputs[i];
				}
				return args;
			}
		}
		sb3.Scratch3Procedure = Scratch3Procedure;

		function createList() {
			const list = [];
			list.modified = false;
			list.toString = function() {
				var i = this.length;
				while (i--) {
					if (('' + this[i]).length !== 1) {
						return this.join(' ');
					}
				}
				return this.join('');
			};
			return list;
		}
		sb3.createList = createList;

		function patchSVG(svg) {
			if (svg.hasAttribute('viewBox')) {
				const viewBox = svg.getAttribute('viewBox').split(/ |,/).map((i) => +i);
				if (viewBox.every((i) => !isNaN(i)) && viewBox.length === 4) {
					const [x, y, w, h] = viewBox;
					svg.setAttribute('width', (w + x).toString());
					svg.setAttribute('height', (h + y).toString());
				} else {
					console.warn('weird viewBox', svg.getAttribute('viewBox'));
				}
				svg.removeAttribute('viewBox');
			}
			const textElements = svg.querySelectorAll('text');
			const usedFonts = [];
			const addFont = (font) => {
				if (usedFonts.indexOf(font) === -1) {
					usedFonts.push(font);
				}
			};
			for (var i = 0; i < textElements.length; i++) {
				const el = textElements[i];
				let fonts = (el.getAttribute('font-family') || '')
					.split(',')
					.map((i) => i.trim());
				let found = false;
				for (const family of fonts) {
					if (P.fonts.scratch3[family]) {
						found = true;
						addFont(family);
						break;
					} else if (family === 'sans-serif') {
						found = true;
						break;
					}
				}
				if (!found) {
					console.warn('unknown fonts', fonts);
					const font = 'Sans Serif';
					addFont(font);
					el.setAttribute('font-family', font);
				}
			}
			P.fonts.addFontRules(svg, usedFonts);
		}

		function fixVectorNamespace(svg) {
			var newSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
			for (const attribute of svg.attributes) {
				newSVG.setAttribute(attribute.name, attribute.value);
			}
			newSVG.innerHTML = svg.innerHTML;
			return newSVG;
		}
		class BaseSB3Loader extends P.io.Loader {
			getSVG(path) {
				return this.getAsText(path)
					.then((source) => {
						const parser = new DOMParser();
						const doc = parser.parseFromString(source, 'image/svg+xml');
						let svg = doc.documentElement;
						if (svg.namespaceURI !== 'http://www.w3.org/2000/svg') {
							svg = fixVectorNamespace(svg);
						}
						patchSVG(svg);
						return new Promise((resolve, reject) => {
							const image = new Image();
							image.onload = (e) => {
								resolve(image);
							};
							image.onerror = (e) => {
								reject('Failed to load SVG: ' + path);
							};
							image.src = 'data:image/svg+xml,' + encodeURIComponent(new XMLSerializer().serializeToString(svg));
						});
					});
			}
			getBitmapImage(path, format) {
				return this.getAsImage(path, format);
			}
			loadCostume(data, index) {
				const path = data.assetId + '.' + data.dataFormat;
				const costumeOptions = {
					name: data.name,
					bitmapResolution: data.bitmapResolution || 1,
					rotationCenterX: data.rotationCenterX,
					rotationCenterY: data.rotationCenterY,
				};
				if (data.dataFormat === 'svg') {
					return this.getSVG(path)
						.then((svg) => new P.core.VectorCostume(svg, costumeOptions));
				} else {
					return this.getBitmapImage(path, data.dataFormat)
						.then((image) => new P.core.BitmapCostume(image, costumeOptions));
				}
			}
			getAudioBuffer(path) {
				return this.getAsArrayBuffer(path)
					.then((buffer) => P.audio.decodeAudio(buffer))
					.catch((err) => {
						throw new Error(`Could not load audio: ${path} (${err})`);
					});
			}
			loadSound(data) {
				return new Promise((resolve, reject) => {
					this.getAudioBuffer(data.md5ext)
						.then((buffer) => {
							resolve(new P.core.Sound({
								name: data.name,
								buffer,
							}));
						})
						.catch((err) => {
							console.warn('Could not load sound: ' + err);
							resolve(null);
						});
				});
			}
			loadWatcher(data, stage) {
				if (data.mode === 'list') {
					return new Scratch3ListWatcher(stage, data);
				}
				return new Scratch3VariableWatcher(stage, data);
			}
			loadTarget(data) {
				const target = new(data.isStage ? Scratch3Stage : Scratch3Sprite)(null);
				for (const id of Object.keys(data.variables)) {
					const variable = data.variables[id];
					const name = variable[0];
					const value = variable[1];
					target.vars[name] = value;
				}
				for (const id of Object.keys(data.lists)) {
					const list = data.lists[id];
					const name = list[0];
					const content = list[1];
					if (target.lists[name]) {
						continue;
					}
					const scratchList = createList();
					for (var i = 0; i < content.length; i++) {
						scratchList[i] = content[i];
					}
					target.lists[name] = scratchList;
					target.listIds[id] = name;
				}
				target.name = data.name;
				target.currentCostumeIndex = data.currentCostume;
				target.sb3data = data;
				if (target.isStage) {} else {
					const sprite = target;
					sprite.scratchX = data.x;
					sprite.scratchY = data.y;
					sprite.visible = data.visible;
					sprite.direction = data.direction;
					sprite.scale = data.size / 100;
					sprite.isDraggable = data.draggable;
					sprite.rotationStyle = P.utils.parseRotationStyle(data.rotationStyle);
				}
				const costumesPromise = Promise.all(data.costumes.map((c, i) => this.loadCostume(c, i)));
				const soundsPromise = Promise.all(data.sounds.map((c) => this.loadSound(c)));
				return Promise.all([costumesPromise, soundsPromise])
					.then((result) => {
						const costumes = result[0];
						const sounds = result[1];
						target.costumes = costumes;
						sounds.forEach((sound) => sound && target.addSound(sound));
						return target;
					});
			}
			loadAssets() {
				return Promise.all([
					this.loadSoundbank(),
					this.loadFonts(),
				]);
			}
			loadSoundbank() {
				return P.audio.loadSoundbankSB2(this);
			}
			loadFonts() {
				const promises = [];
				for (const family in P.fonts.scratch3) {
					const promise = P.utils.settled(P.fonts.loadLocalFont(family, P.fonts.scratch3[family]));
					promises.push(promise);
					this.addTask(new P.io.PromiseTask(promise));
				}
				return Promise.all(promises);
			}
			compileTargets(targets, stage) {
				if (P.config.debug) {
					console.time('Scratch 3 compile');
				}
				for (const target of targets) {
					const compiler = new P.sb3.compiler.Compiler(target);
					compiler.compile();
				}
				if (P.config.debug) {
					console.timeEnd('Scratch 3 compile');
				}
			}
			load() {
				if (!this.projectData) {
					throw new Error('Project data is missing or invalid');
				}
				if (!Array.isArray(this.projectData.targets)) {
					throw new Error('Invalid project data: missing targets');
				}
				const targets = this.projectData.targets;
				targets.sort((a, b) => a.layerOrder - b.layerOrder);
				return this.loadAssets()
					.then(() => {
						this.resetTasks();
						return Promise.all(targets.map((data) => this.loadTarget(data)));
					})
					.then((targets) => {
						if (this.aborted) {
							throw new Error('Loading aborting.');
						}
						const stage = targets.filter((i) => i.isStage)[0];
						if (!stage) {
							throw new Error('Project does not have a Stage');
						}
						const sprites = targets.filter((i) => i.isSprite);
						sprites.forEach((sprite) => sprite.stage = stage);
						stage.children = sprites;
						stage.allWatchers = this.projectData.monitors
							.map((data) => this.loadWatcher(data, stage))
							.filter((i) => i && i.valid);
						stage.allWatchers.forEach((watcher) => watcher.init());
						this.compileTargets(targets, stage);
						return stage;
					});
			}
		}
		sb3.BaseSB3Loader = BaseSB3Loader;
		class SB3FileLoader extends BaseSB3Loader {
			constructor(buffer) {
				super();
				this.buffer = buffer;
			}
			getAsText(path) {
				const task = this.addTask(new P.io.Manual());
				return this.zip.file(path).async('text')
					.then((response) => {
						task.markComplete();
						return response;
					});
			}
			getAsArrayBuffer(path) {
				const task = this.addTask(new P.io.Manual());
				return this.zip.file(path).async('arrayBuffer')
					.then((response) => {
						task.markComplete();
						return response;
					});
			}
			getAsBase64(path) {
				const task = this.addTask(new P.io.Manual());
				return this.zip.file(path).async('base64')
					.then((response) => {
						task.markComplete();
						return response;
					});
			}
			getAsImage(path, format) {
				const task = this.addTask(new P.io.Manual());
				return this.getAsBase64(path)
					.then((imageData) => {
						return new Promise((resolve, reject) => {
							const image = new Image();
							image.onload = () => {
								task.markComplete();
								resolve(image);
							};
							image.onerror = (error) => {
								reject('Failed to load image: ' + path + '.' + format);
							};
							image.src = 'data:image/' + format + ';base64,' + imageData;
						});
					});
			}
			load() {
				return JSZip.loadAsync(this.buffer)
					.then((data) => {
						this.zip = data;
						return this.getAsText('project.json');
					})
					.then((project) => {
						this.projectData = JSON.parse(project);
					})
					.then(() => super.load());
			}
		}
		sb3.SB3FileLoader = SB3FileLoader;
		class Scratch3Loader extends BaseSB3Loader {
			constructor(idOrData) {
				super();
				if (typeof idOrData === 'object') {
					this.projectData = idOrData;
					this.projectId = null;
				} else {
					this.projectId = idOrData;
				}
			}
			getAsText(path) {
				return this.addTask(new P.io.Request(sb3.ASSETS_API.replace('$md5ext', path))).load('text');
			}
			getAsArrayBuffer(path) {
				return this.addTask(new P.io.Request(sb3.ASSETS_API.replace('$md5ext', path))).load('arraybuffer');
			}
			getAsImage(path) {
				return this.addTask(new P.io.Img(sb3.ASSETS_API.replace('$md5ext', path))).load();
			}
			load() {
				if (this.projectId) {
					return this.addTask(new P.io.Request(P.config.PROJECT_API.replace('$id', '' + this.projectId))).load('json')
						.then((data) => {
							this.projectData = data;
							return super.load();
						});
				} else {
					return super.load();
				}
			}
		}
		sb3.Scratch3Loader = Scratch3Loader;
	})(sb3 = P.sb3 || (P.sb3 = {}));
})(P || (P = {}));
(function(P) {
	var sb3;
	(function(sb3) {
		var compiler;
		(function(compiler_1) {
			function assertNever(i) {
				throw new Error('Compile-time assertNever failed.');
			}
			class CompiledInput {
				constructor(source, type) {
					this.source = source;
					this.type = type;
					this.potentialNumber = true;
				}
				toString() {
					return this.source;
				}
			}
			compiler_1.CompiledInput = CompiledInput;
			const stringInput = (v) => new CompiledInput(v, 'string');
			const numberInput = (v) => new CompiledInput(v, 'number');
			const booleanInput = (v) => new CompiledInput(v, 'boolean');
			const anyInput = (v) => new CompiledInput(v, 'any');;
			class BlockUtil {
				constructor(compiler, block) {
					this.compiler = compiler;
					this.block = block;
				}
				get target() {
					return this.compiler.target;
				}
				get stage() {
					return this.compiler.target.stage;
				}
				getInput(name, type) {
					return this.compiler.compileInput(this.block, name, type);
				}
				getField(name) {
					return this.compiler.getField(this.block, name);
				}
				fieldInput(name) {
					return this.sanitizedInput(this.getField(name));
				}
				sanitizedInput(string) {
					return this.compiler.sanitizedInput(string);
				}
				sanitizedString(string) {
					return this.compiler.sanitizedString(string);
				}
				getVariableReference(field) {
					return this.compiler.getVariableReference(this.getField(field));
				}
				getListReference(field) {
					return this.compiler.getListReference(this.getField(field));
				}
				getVariableScope(field) {
					return this.compiler.getVariableScope(this.getField(field));
				}
				getListScope(field) {
					return this.compiler.getListScope(this.getField(field));
				}
				asType(input, type) {
					return this.compiler.asType(input, type);
				}
			}
			compiler_1.BlockUtil = BlockUtil;
			class StatementUtil extends BlockUtil {
				constructor() {
					super(...arguments);
					this.content = '';
					this.substacksQueue = false;
				}
				getSubstack(name) {
					const labelsBefore = this.compiler.labelCount;
					const substack = this.compiler.compileSubstackInput(this.block, name);
					if (this.compiler.labelCount !== labelsBefore) {
						this.substacksQueue = true;
					}
					return substack;
				}
				claimNextLabel() {
					return this.compiler.labelCount++;
				}
				addLabel(label) {
					if (!label) {
						label = this.claimNextLabel();
					}
					this.write(`{{${label}}}`);
					return label;
				}
				queue(label) {
					this.writeLn(`queue(${label}); return;`);
				}
				forceQueue(label) {
					this.writeLn(`forceQueue(${label}); return;`);
				}
				visual(variant) {
					switch (variant) {
						case 'drawing':
							this.writeLn('if (S.visible || S.isPenDown) VISUAL = true;');
							break;
						case 'visible':
							this.writeLn('if (S.visible) VISUAL = true;');
							break;
						case 'always':
							this.writeLn('VISUAL = true;');
							break;
						default:
							assertNever(variant);
					}
				}
				updateBubble() {
					this.writeLn('if (S.saying) S.updateBubble()');
				}
				wait(seconds) {
					this.writeLn('save();');
					this.writeLn('R.start = runtime.now();');
					this.writeLn(`R.duration = ${seconds}`);
					this.writeLn('var first = true;');
					const label = this.addLabel();
					this.writeLn('if (runtime.now() - R.start < R.duration * 1000 || first) {');
					this.writeLn('  var first;');
					this.forceQueue(label);
					this.writeLn('}');
					this.writeLn('restore();');
				}
				write(content) {
					this.content += content;
				}
				writeLn(content) {
					this.content += content + '\n';
				}
			}
			compiler_1.StatementUtil = StatementUtil;
			class InputUtil extends BlockUtil {
				numberInput(v) { return numberInput(v); }
				stringInput(v) { return stringInput(v); }
				booleanInput(v) { return booleanInput(v); }
				anyInput(v) { return anyInput(v); }
			}
			compiler_1.InputUtil = InputUtil;
			class HatUtil extends BlockUtil {
				constructor(compiler, block, startingFunction) {
					super(compiler, block);
					this.startingFunction = startingFunction;
				}
			}
			compiler_1.HatUtil = HatUtil;
			compiler_1.statementLibrary = Object.create(null);
			compiler_1.inputLibrary = Object.create(null);
			compiler_1.hatLibrary = Object.create(null);
			compiler_1.watcherLibrary = Object.create(null);
			class Compiler {
				constructor(target) {
					this.labelCount = 0;
					this.target = target;
					this.data = target.sb3data;
					this.blocks = this.data.blocks;
				}
				getHatBlocks() {
					return Object.keys(this.blocks)
						.filter((i) => this.blocks[i].topLevel);
				}
				getStatementCompiler(opcode) {
					if (compiler_1.statementLibrary[opcode]) {
						return compiler_1.statementLibrary[opcode];
					}
					return null;
				}
				getInputCompiler(opcode) {
					if (compiler_1.inputLibrary[opcode]) {
						return compiler_1.inputLibrary[opcode];
					}
					return null;
				}
				getHatCompiler(opcode) {
					if (compiler_1.hatLibrary[opcode]) {
						return compiler_1.hatLibrary[opcode];
					}
					return null;
				}
				getInputFallback(type) {
					switch (type) {
						case 'number':
							return '0';
						case 'boolean':
							return 'false';
						case 'string':
							return '""';
						case 'any':
							return '""';
						case 'list':
							return '""';
					}
					assertNever(type);
				}
				asType(input, type) {
					switch (type) {
						case 'string':
							return '("" + ' + input + ')';
						case 'number':
							return '(+' + input + ' || 0)';
						case 'boolean':
							return 'bool(' + input + ')';
						case 'any':
							return input;
						case 'list':
							throw new Error("Converting to 'list' type is not something you're supposed to do");
					}
					assertNever(type);
				}
				convertInputType(input, type) {
					if (input.type === type) {
						return input;
					}
					if (type === 'any') {
						if (input.type === 'list') {
							type = 'string';
						} else {
							return input;
						}
					}
					return new CompiledInput(this.asType(input.source, type), type);
				}
				sanitizedInput(string) {
					return stringInput(this.sanitizedString(string));
				}
				sanitizedString(string) {
					string = string
						.replace(/\\/g, '\\\\')
						.replace(/'/g, '\\\'')
						.replace(/"/g, '\\"')
						.replace(/\n/g, '\\n')
						.replace(/\r/g, '\\r')
						.replace(/\{/g, '\\x7b')
						.replace(/\}/g, '\\x7d');
					return `"${string}"`;
				}
				sanitizedComment(content) {
					content = content
						.replace(/\*\//g, '');
					return `/* ${content} */`;
				}
				getVariableScope(name) {
					if (name in this.target.stage.vars) {
						return 'self';
					} else if (name in this.target.vars) {
						return 'S';
					} else {
						this.target.vars[name] = 0;
						return 'S';
					}
				}
				getListScope(name) {
					if (name in this.target.stage.lists) {
						return 'self';
					} else if (name in this.target.lists) {
						return 'S';
					} else {
						this.target.lists[name] = sb3.createList();
						return 'S';
					}
				}
				getVariableReference(name) {
					return `${this.getVariableScope(name)}.vars[${this.sanitizedString(name)}]`;
				}
				getListReference(name) {
					return `${this.getListScope(name)}.lists[${this.sanitizedString(name)}]`;
				}
				isStringLiteralPotentialNumber(text) {
					return /\d|true|false|Infinity/.test(text);
				}
				compileNativeInput(native, desiredType) {
					const type = native[0];
					switch (type) {
						case 4:
						case 5:
						case 6:
						case 7:
						case 8:
							{
								const number = +native[1];
								if (isNaN(number) || desiredType === 'string') {
									return this.sanitizedInput('' + native[1]);
								} else {
									return numberInput(number.toString());
								}
							}
						case 10:
							{
								const value = native[1];
								if (desiredType !== 'string' && /\d|Infinity/.test(value)) {
									const number = +value;
									if (number.toString() === value) {
										if (!isNaN(number)) {
											return numberInput(number.toString());
										}
									}
								}
								const input = this.sanitizedInput(native[1] + '');
								input.potentialNumber = this.isStringLiteralPotentialNumber(native[1]);
								return input;
							}
						case 12:
							return anyInput(this.getVariableReference(native[1]));
						case 13:
							return new CompiledInput(this.getListReference(native[1]), 'list');
						case 11:
							return this.sanitizedInput(native[1]);
						case 9:
							{
								const color = native[1];
								const hex = color.substr(1);
								if (/^[0-9a-f]{6,8}$/.test(hex)) {
									return numberInput('0x' + hex);
								} else {
									this.warn('expected hex color code but got', hex);
									return numberInput('0x0');
								}
							}
						default:
							this.warn('unknown native', type, native);
							return stringInput('""');
					}
				}
				compileInput(parentBlock, inputName, type) {
					if (!parentBlock.inputs[inputName]) {
						this.warn('missing input', inputName);
						return new CompiledInput(this.getInputFallback(type), type);
					}
					const input = parentBlock.inputs[inputName];
					if (Array.isArray(input[1])) {
						const native = input[1];
						return this.convertInputType(this.compileNativeInput(native, type), type);
					}
					const inputBlockId = input[1];
					if (!inputBlockId) {
						return new CompiledInput(this.getInputFallback(type), type);
					}
					const inputBlock = this.blocks[inputBlockId];
					const opcode = inputBlock.opcode;
					const compiler = this.getInputCompiler(opcode);
					if (!compiler) {
						this.warn('unknown input', opcode, inputBlock);
						return new CompiledInput(this.getInputFallback(type), type);
					}
					const util = new InputUtil(this, inputBlock);
					let result = compiler(util);
					if (P.config.debug) {
						result.source = this.sanitizedComment(inputBlock.opcode) + result.source;
					}
					return this.convertInputType(result, type);
				}
				getField(block, fieldName) {
					const value = block.fields[fieldName];
					if (!value) {
						this.warn('missing field', fieldName);
						return '';
					}
					return '' + value[0];
				}
				compileSubstackInput(block, substackName) {
					if (!block.inputs[substackName]) {
						return '';
					}
					const substack = block.inputs[substackName];
					const type = substack[0];
					const id = substack[1];
					if (id === null) {
						return '';
					}
					return this.compileStack(id);
				}
				getNewState() {
					return {
						isWarp: false,
					};
				}
				compileStack(startingBlock) {
					let script = '';
					let block = this.blocks[startingBlock];
					while (true) {
						var opcode = block.opcode;
						const compiler = this.getStatementCompiler(opcode);
						if (P.config.debug) {
							script += this.sanitizedComment(block.opcode);
						}
						if (compiler) {
							const util = new StatementUtil(this, block);
							compiler(util);
							script += util.content;
						} else {
							script += '/* unknown statement */';
							this.warn('unknown statement', opcode, block);
						}
						if (!block.next) {
							break;
						}
						block = this.blocks[block.next];
					}
					return script;
				}
				compileHat(hat) {
					const hatCompiler = this.getHatCompiler(hat.opcode);
					if (!hatCompiler) {
						if (!this.getInputCompiler(hat.opcode) && !this.getStatementCompiler(hat.opcode)) {
							this.warn('unknown hat block', hat.opcode, hat);
						}
						return;
					}
					this.labelCount = this.target.fns.length;
					const startingBlock = hat.next;
					if (!startingBlock) {
						return;
					}
					this.state = this.getNewState();
					if (hatCompiler.precompile) {
						hatCompiler.precompile(this, hat);
					}
					let script = `{{${this.labelCount++}}}`;
					script += this.compileStack(startingBlock);
					if (hatCompiler.postcompile) {
						script = hatCompiler.postcompile(this, script, hat);
					}
					const parseResult = this.parseScript(script);
					const parsedScript = parseResult.script;
					const startFn = this.target.fns.length;
					for (let label of Object.keys(parseResult.labels)) {
						this.target.fns[label] = P.runtime.createContinuation(parsedScript.slice(parseResult.labels[label]));
					}
					const startingFn = this.target.fns[startFn];
					const util = new HatUtil(this, hat, startingFn);
					hatCompiler.handle(util);
					if (P.config.debug) {
						this.log(`[${this.target.name}] compiled sb3 script "${hat.opcode}"`, script, this.target);
					}
				}
				parseScript(script) {
					const labels = {};
					let index = 0;
					let accumulator = 0;
					while (true) {
						const labelStart = script.indexOf('{{', index);
						if (labelStart === -1) {
							break;
						}
						const labelEnd = script.indexOf('}}', index);
						const id = script.substring(labelStart + 2, labelEnd);
						const length = labelEnd + 2 - labelStart;
						accumulator += length;
						labels[id] = labelEnd + 2 - accumulator;
						index = labelEnd + 2;
					}
					const fixedScript = script.replace(/{{\d+}}/g, '');
					return {
						labels,
						script: fixedScript,
					};
				}
				warn(...args) {
					args.unshift('[sb3 compiler]');
					console.warn.apply(console, args);
				}
				log(...args) {
					args.unshift('[sb3 compiler]');
					console.log.apply(console, args);
				}
				compile() {
					const hats = this.getHatBlocks();
					for (const hatId of hats) {
						const hat = this.blocks[hatId];
						this.compileHat(hat);
					}
				}
			}
			compiler_1.Compiler = Compiler;
		})(compiler = sb3.compiler || (sb3.compiler = {}));
	})(sb3 = P.sb3 || (P.sb3 = {}));
})(P || (P = {}));
(function() {
	const statementLibrary = P.sb3.compiler.statementLibrary;
	const inputLibrary = P.sb3.compiler.inputLibrary;
	const hatLibrary = P.sb3.compiler.hatLibrary;
	const watcherLibrary = P.sb3.compiler.watcherLibrary;
	statementLibrary['control_all_at_once'] = function(util) {
		const SUBSTACK = util.getSubstack('SUBSTACK');
		util.write(SUBSTACK);
	};
	statementLibrary['control_clear_counter'] = function(util) {
		util.writeLn('self.counter = 0;');
	};
	statementLibrary['control_create_clone_of'] = function(util) {
		const CLONE_OPTION = util.getInput('CLONE_OPTION', 'any');
		util.writeLn(`clone(${CLONE_OPTION});`);
	};
	statementLibrary['control_delete_this_clone'] = function(util) {
		util.writeLn('if (S.isClone) {');
		util.writeLn('  S.remove();');
		util.writeLn('  var i = self.children.indexOf(S);');
		util.writeLn('  if (i !== -1) self.children.splice(i, 1);');
		util.writeLn('  for (var i = 0; i < runtime.queue.length; i++) {');
		util.writeLn('    if (runtime.queue[i] && runtime.queue[i].sprite === S) {');
		util.writeLn('      runtime.queue[i] = undefined;');
		util.writeLn('    }');
		util.writeLn('  }');
		util.writeLn('  return;');
		util.writeLn('}');
	};
	statementLibrary['control_for_each'] = function(util) {
		const VARIABLE = util.getVariableReference('VARIABLE');
		const SUBSTACK = util.getSubstack('SUBSTACK');
		const VALUE = util.getInput('VALUE', 'number');
		util.writeLn('save();');
		util.writeLn(`R.times = ${VALUE};`);
		util.writeLn(`if (R.times > 0) ${VARIABLE} = 0;`);
		const label = util.addLabel();
		util.writeLn(`if (${VARIABLE} < R.times) {`);
		util.writeLn(`  ${VARIABLE} = ${util.asType(VARIABLE, 'number')} + 1;`);
		util.write(SUBSTACK);
		util.queue(label);
		util.writeLn('} else {');
		util.writeLn('  restore();');
		util.writeLn('}');
	};
	statementLibrary['control_forever'] = function(util) {
		const SUBSTACK = util.getSubstack('SUBSTACK');
		if (util.compiler.state.isWarp && !util.substacksQueue) {
			util.writeLn('while (true) {');
			util.write(SUBSTACK);
			util.writeLn('}');
		} else {
			const label = util.addLabel();
			util.write(SUBSTACK);
			util.queue(label);
		}
	};
	statementLibrary['control_if'] = function(util) {
		const CONDITION = util.getInput('CONDITION', 'any');
		const SUBSTACK = util.getSubstack('SUBSTACK');
		util.writeLn(`if (${CONDITION}) {`);
		util.write(SUBSTACK);
		util.writeLn('}');
	};
	statementLibrary['control_if_else'] = function(util) {
		const CONDITION = util.getInput('CONDITION', 'any');
		const SUBSTACK = util.getSubstack('SUBSTACK');
		const SUBSTACK2 = util.getSubstack('SUBSTACK2');
		util.writeLn(`if (${CONDITION}) {`);
		util.write(SUBSTACK);
		util.writeLn('} else {');
		util.write(SUBSTACK2);
		util.writeLn('}');
	};
	statementLibrary['control_incr_counter'] = function(util) {
		util.writeLn('self.counter++;');
	};
	statementLibrary['control_repeat'] = function(util) {
		const TIMES = util.getInput('TIMES', 'any');
		const SUBSTACK = util.getSubstack('SUBSTACK');
		if (util.compiler.state.isWarp && !util.substacksQueue) {
			util.writeLn('save();');
			util.writeLn(`R.count = ${TIMES};`);
			util.writeLn('while (R.count >= 0.5) {');
			util.writeLn('  R.count -= 1;');
			util.write(SUBSTACK);
			util.writeLn('}');
			util.writeLn('restore();');
		} else {
			util.writeLn('save();');
			util.writeLn(`R.count = ${TIMES};`);
			const label = util.addLabel();
			util.writeLn('if (R.count >= 0.5) {');
			util.writeLn('  R.count -= 1;');
			util.write(SUBSTACK);
			util.queue(label);
			util.writeLn('} else {');
			util.writeLn('  restore();');
			util.writeLn('}');
		}
	};
	statementLibrary['control_repeat_until'] = function(util) {
		const CONDITION = util.getInput('CONDITION', 'boolean');
		const SUBSTACK = util.getSubstack('SUBSTACK');
		if (util.compiler.state.isWarp && !util.substacksQueue) {
			util.writeLn(`while (!${CONDITION}) {`);
			util.write(SUBSTACK);
			util.writeLn('}');
		} else {
			const label = util.addLabel();
			util.writeLn(`if (!${CONDITION}) {`);
			util.write(SUBSTACK);
			util.queue(label);
			util.writeLn('}');
		}
	};
	statementLibrary['control_stop'] = function(util) {
		const STOP_OPTION = util.getField('STOP_OPTION');
		switch (STOP_OPTION) {
			case 'all':
				util.writeLn('runtime.stopAll(); return;');
				break;
			case 'this script':
				util.writeLn('endCall(); return;');
				break;
			case 'other scripts in sprite':
			case 'other scripts in stage':
				util.writeLn('S.stopSoundsExcept(BASE);');
				util.writeLn('for (var i = 0; i < runtime.queue.length; i++) {');
				util.writeLn('  if (i !== THREAD && runtime.queue[i] && runtime.queue[i].sprite === S) {');
				util.writeLn('    runtime.queue[i] = undefined;');
				util.writeLn('  }');
				util.writeLn('}');
				break;
		}
	};
	statementLibrary['control_wait'] = function(util) {
		const DURATION = util.getInput('DURATION', 'any');
		util.writeLn('save();');
		util.writeLn('R.start = runtime.now();');
		util.writeLn(`R.duration = ${DURATION};`);
		util.writeLn(`var first = true;`);
		const label = util.addLabel();
		util.writeLn('if (runtime.now() - R.start < R.duration * 1000 || first) {');
		util.writeLn('  var first;');
		util.forceQueue(label);
		util.writeLn('}');
		util.writeLn('restore();');
	};
	statementLibrary['control_wait_until'] = function(util) {
		const CONDITION = util.getInput('CONDITION', 'boolean');
		const label = util.addLabel();
		util.writeLn(`if (!${CONDITION}) {`);
		util.forceQueue(label);
		util.writeLn('}');
	};
	statementLibrary['control_while'] = function(util) {
		const CONDITION = util.getInput('CONDITION', 'boolean');
		const SUBSTACK = util.getSubstack('SUBSTACK');
		if (util.compiler.state.isWarp && !util.substacksQueue) {
			util.writeLn(`while (${CONDITION}) {`);
			util.write(SUBSTACK);
			util.writeLn('}');
		} else {
			const label = util.addLabel();
			util.writeLn(`if (${CONDITION}) {`);
			util.write(SUBSTACK);
			util.queue(label);
			util.writeLn('}');
		}
	};
	statementLibrary['data_addtolist'] = function(util) {
		const LIST = util.getListReference('LIST');
		const ITEM = util.getInput('ITEM', 'any');
		util.writeLn(`watchedAppendToList(${LIST}, ${ITEM});`);
	};
	statementLibrary['data_changevariableby'] = function(util) {
		const VARIABLE = util.getVariableReference('VARIABLE');
		const VALUE = util.getInput('VALUE', 'number');
		util.writeLn(`${VARIABLE} = (${util.asType(VARIABLE, 'number')} + ${VALUE});`);
	};
	statementLibrary['data_deletealloflist'] = function(util) {
		const LIST = util.getListReference('LIST');
		util.writeLn(`${LIST}.length = 0;`);
	};
	statementLibrary['data_deleteoflist'] = function(util) {
		const LIST = util.getListReference('LIST');
		const INDEX = util.getInput('INDEX', 'any');
		util.writeLn(`watchedDeleteLineOfList(${LIST}, ${INDEX});`);
	};
	statementLibrary['data_hidelist'] = function(util) {
		const LIST = util.sanitizedString(util.getField('LIST'));
		const scope = util.getListScope('LIST');
		util.writeLn(`${scope}.showList(${LIST}, false);`);
	};
	statementLibrary['data_hidevariable'] = function(util) {
		const VARIABLE = util.sanitizedString(util.getField('VARIABLE'));
		const scope = util.getVariableScope('VARIABLE');
		util.writeLn(`${scope}.showVariable(${VARIABLE}, false);`);
	};
	statementLibrary['data_insertatlist'] = function(util) {
		const LIST = util.getListReference('LIST');
		const INDEX = util.getInput('INDEX', 'any');
		const ITEM = util.getInput('ITEM', 'any');
		util.writeLn(`watchedInsertInList(${LIST}, ${INDEX}, ${ITEM});`);
	};
	statementLibrary['data_replaceitemoflist'] = function(util) {
		const LIST = util.getListReference('LIST');
		const ITEM = util.getInput('ITEM', 'any');
		const INDEX = util.getInput('INDEX', 'any');
		util.writeLn(`watchedSetLineOfList(${LIST}, ${INDEX}, ${ITEM});`);
	};
	statementLibrary['data_setvariableto'] = function(util) {
		const VARIABLE = util.getVariableReference('VARIABLE');
		const VALUE = util.getInput('VALUE', 'any');
		util.writeLn(`${VARIABLE} = ${VALUE};`);
	};
	statementLibrary['data_showlist'] = function(util) {
		const LIST = util.sanitizedString(util.getField('LIST'));
		const scope = util.getListScope('LIST');
		util.writeLn(`${scope}.showList(${LIST}, true);`);
	};
	statementLibrary['data_showvariable'] = function(util) {
		const VARIABLE = util.sanitizedString(util.getField('VARIABLE'));
		const scope = util.getVariableScope('VARIABLE');
		util.writeLn(`${scope}.showVariable(${VARIABLE}, true);`);
	};
	statementLibrary['event_broadcast'] = function(util) {
		const BROADCAST_INPUT = util.getInput('BROADCAST_INPUT', 'any');
		util.writeLn(`var threads = broadcast(${BROADCAST_INPUT});`);
		util.writeLn('if (threads.indexOf(BASE) !== -1) {return;}');
	};
	statementLibrary['event_broadcastandwait'] = function(util) {
		const BROADCAST_INPUT = util.getInput('BROADCAST_INPUT', 'any');
		util.writeLn('save();');
		util.writeLn(`R.threads = broadcast(${BROADCAST_INPUT});`);
		util.writeLn('if (R.threads.indexOf(BASE) !== -1) {return;}');
		const label = util.addLabel();
		util.writeLn('if (running(R.threads)) {');
		util.forceQueue(label);
		util.writeLn('}');
		util.writeLn('restore();');
	};
	statementLibrary['looks_changeeffectby'] = function(util) {
		const EFFECT = util.sanitizedString(util.getField('EFFECT')).toLowerCase();
		const CHANGE = util.getInput('CHANGE', 'number');
		util.writeLn(`S.changeFilter(${EFFECT}, ${CHANGE});`);
		util.visual('visible');
	};
	statementLibrary['looks_changesizeby'] = function(util) {
		const CHANGE = util.getInput('CHANGE', 'any');
		util.writeLn(`var f = S.scale + ${CHANGE} / 100;`);
		util.writeLn('S.scale = f < 0 ? 0 : f;');
		util.visual('visible');
	};
	statementLibrary['looks_cleargraphiceffects'] = function(util) {
		util.writeLn('S.resetFilters();');
		util.visual('visible');
	};
	statementLibrary['looks_goforwardbackwardlayers'] = function(util) {
		const FORWARD_BACKWARD = util.getField('FORWARD_BACKWARD');
		const NUM = util.getInput('NUM', 'number');
		util.writeLn('var i = self.children.indexOf(S);');
		util.writeLn('if (i !== -1) {');
		util.writeLn('  self.children.splice(i, 1);');
		if (FORWARD_BACKWARD === 'forward') {
			util.writeLn(`  self.children.splice(Math.min(self.children.length - 1, i + ${NUM}), 0, S);`);
		} else {
			util.writeLn(`  self.children.splice(Math.max(0, i - ${NUM}), 0, S);`);
		}
		util.writeLn('}');
	};
	statementLibrary['looks_gotofrontback'] = function(util) {
		const FRONT_BACK = util.getField('FRONT_BACK');
		util.writeLn('var i = self.children.indexOf(S);');
		util.writeLn('if (i !== -1) self.children.splice(i, 1);');
		if (FRONT_BACK === 'front') {
			util.writeLn('self.children.push(S);');
		} else {
			util.writeLn('self.children.unshift(S);');
		}
	};
	statementLibrary['looks_hide'] = function(util) {
		util.visual('visible');
		util.writeLn('S.visible = false;');
		util.updateBubble();
	};
	statementLibrary['looks_nextbackdrop'] = function(util) {
		util.writeLn('self.showNextCostume();');
		util.visual('always');
		util.writeLn('var threads = backdropChange();');
		util.writeLn('if (threads.indexOf(BASE) !== -1) {return;}');
	};
	statementLibrary['looks_nextcostume'] = function(util) {
		util.writeLn('S.showNextCostume();');
		util.visual('visible');
	};
	statementLibrary['looks_say'] = function(util) {
		const MESSAGE = util.getInput('MESSAGE', 'any');
		util.writeLn(`S.say(${MESSAGE}, false);`);
	};
	statementLibrary['looks_sayforsecs'] = function(util) {
		const MESSAGE = util.getInput('MESSAGE', 'any');
		const SECS = util.getInput('SECS', 'number');
		util.writeLn('save();');
		util.writeLn(`R.id = S.say(${MESSAGE}, false);`);
		util.writeLn('R.start = runtime.now();');
		util.writeLn(`R.duration = ${SECS};`);
		const label = util.addLabel();
		util.writeLn('if (runtime.now() - R.start < R.duration * 1000) {');
		util.forceQueue(label);
		util.writeLn('}');
		util.writeLn('if (S.sayId === R.id) {');
		util.writeLn('  S.say("");');
		util.writeLn('}');
		util.writeLn('restore();');
		util.visual('visible');
	};
	statementLibrary['looks_seteffectto'] = function(util) {
		const EFFECT = util.sanitizedString(util.getField('EFFECT')).toLowerCase();
		const VALUE = util.getInput('VALUE', 'number');
		util.writeLn(`S.setFilter(${EFFECT}, ${VALUE});`);
		util.visual('visible');
	};
	statementLibrary['looks_setsizeto'] = function(util) {
		const SIZE = util.getInput('SIZE', 'number');
		util.writeLn(`S.scale = Math.max(0, ${SIZE} / 100);`);
		util.visual('visible');
	};
	statementLibrary['looks_show'] = function(util) {
		util.writeLn('S.visible = true;');
		util.visual('always');
		util.updateBubble();
	};
	statementLibrary['looks_switchbackdropto'] = function(util) {
		const BACKDROP = util.getInput('BACKDROP', 'any');
		util.writeLn(`self.setCostume(${BACKDROP});`);
		util.visual('always');
		util.writeLn('var threads = backdropChange();');
		util.writeLn('if (threads.indexOf(BASE) !== -1) {return;}');
	};
	statementLibrary['looks_switchcostumeto'] = function(util) {
		const COSTUME = util.getInput('COSTUME', 'any');
		util.writeLn(`S.setCostume(${COSTUME});`);
		util.visual('visible');
	};
	statementLibrary['looks_think'] = function(util) {
		const MESSAGE = util.getInput('MESSAGE', 'any');
		util.writeLn(`S.say(${MESSAGE}, true);`);
		util.visual('visible');
	};
	statementLibrary['looks_thinkforsecs'] = function(util) {
		const MESSAGE = util.getInput('MESSAGE', 'any');
		const SECS = util.getInput('SECS', 'number');
		util.writeLn('save();');
		util.writeLn(`R.id = S.say(${MESSAGE}, true);`);
		util.writeLn('R.start = runtime.now();');
		util.writeLn(`R.duration = ${SECS};`);
		const label = util.addLabel();
		util.writeLn('if (runtime.now() - R.start < R.duration * 1000) {');
		util.forceQueue(label);
		util.writeLn('}');
		util.writeLn('if (S.sayId === R.id) {');
		util.writeLn('  S.say("");');
		util.writeLn('}');
		util.writeLn('restore();');
		util.visual('visible');
	};
	statementLibrary['motion_changexby'] = function(util) {
		const DX = util.getInput('DX', 'number');
		util.writeLn(`S.moveTo(S.scratchX + ${DX}, S.scratchY);`);
		util.visual('drawing');
	};
	statementLibrary['motion_changeyby'] = function(util) {
		const DY = util.getInput('DY', 'number');
		util.writeLn(`S.moveTo(S.scratchX, S.scratchY + ${DY});`);
		util.visual('drawing');
	};
	statementLibrary['motion_glidesecstoxy'] = function(util) {
		const SECS = util.getInput('SECS', 'any');
		const X = util.getInput('X', 'any');
		const Y = util.getInput('Y', 'any');
		util.visual('drawing');
		util.writeLn('save();');
		util.writeLn('R.start = runtime.now();');
		util.writeLn(`R.duration = ${SECS};`);
		util.writeLn('R.baseX = S.scratchX;');
		util.writeLn('R.baseY = S.scratchY;');
		util.writeLn(`R.deltaX = ${X} - S.scratchX;`);
		util.writeLn(`R.deltaY = ${Y} - S.scratchY;`);
		const label = util.addLabel();
		util.writeLn('var f = (runtime.now() - R.start) / (R.duration * 1000);');
		util.writeLn('if (f > 1 || isNaN(f)) f = 1;');
		util.writeLn('S.moveTo(R.baseX + f * R.deltaX, R.baseY + f * R.deltaY);');
		util.writeLn('if (f < 1) {');
		util.forceQueue(label);
		util.writeLn('}');
		util.writeLn('restore();');
	};
	statementLibrary['motion_glideto'] = function(util) {
		const SECS = util.getInput('SECS', 'any');
		const TO = util.getInput('TO', 'any');
		util.visual('drawing');
		util.writeLn('save();');
		util.writeLn('R.start = runtime.now();');
		util.writeLn(`R.duration = ${SECS};`);
		util.writeLn('R.baseX = S.scratchX;');
		util.writeLn('R.baseY = S.scratchY;');
		util.writeLn(`var to = self.getPosition(${TO});`);
		util.writeLn('if (to) {');
		util.writeLn('  R.deltaX = to.x - S.scratchX;');
		util.writeLn('  R.deltaY = to.y - S.scratchY;');
		const label = util.addLabel();
		util.writeLn('  var f = (runtime.now() - R.start) / (R.duration * 1000);');
		util.writeLn('  if (f > 1 || isNaN(f)) f = 1;');
		util.writeLn('  S.moveTo(R.baseX + f * R.deltaX, R.baseY + f * R.deltaY);');
		util.writeLn('  if (f < 1) {');
		util.forceQueue(label);
		util.writeLn('  }');
		util.writeLn('  restore();');
		util.writeLn('}');
	};
	statementLibrary['motion_goto'] = function(util) {
		const TO = util.getInput('TO', 'any');
		util.writeLn(`S.gotoObject(${TO});`);
		util.visual('drawing');
	};
	statementLibrary['motion_gotoxy'] = function(util) {
		const X = util.getInput('X', 'number');
		const Y = util.getInput('Y', 'number');
		util.writeLn(`S.moveTo(${X}, ${Y});`);
		util.visual('drawing');
	};
	statementLibrary['motion_ifonedgebounce'] = function(util) {
		util.writeLn('S.bounceOffEdge();');
	};
	statementLibrary['motion_movesteps'] = function(util) {
		const STEPS = util.getInput('STEPS', 'number');
		util.writeLn(`S.forward(${STEPS});`);
		util.visual('drawing');
	};
	statementLibrary['motion_pointindirection'] = function(util) {
		const DIRECTION = util.getInput('DIRECTION', 'number');
		util.visual('visible');
		util.writeLn(`S.setDirection(${DIRECTION});`);
	};
	statementLibrary['motion_pointtowards'] = function(util) {
		const TOWARDS = util.getInput('TOWARDS', 'any');
		util.writeLn(`S.pointTowards(${TOWARDS});`);
		util.visual('visible');
	};
	statementLibrary['motion_setrotationstyle'] = function(util) {
		const STYLE = P.utils.parseRotationStyle(util.getField('STYLE'));
		util.writeLn(`S.rotationStyle = ${STYLE};`);
		util.visual('visible');
	};
	statementLibrary['motion_setx'] = function(util) {
		const X = util.getInput('X', 'number');
		util.writeLn(`S.moveTo(${X}, S.scratchY);`);
		util.visual('drawing');
	};
	statementLibrary['motion_sety'] = function(util) {
		const Y = util.getInput('Y', 'number');
		util.writeLn(`S.moveTo(S.scratchX, ${Y});`);
		util.visual('drawing');
	};
	statementLibrary['motion_turnleft'] = function(util) {
		const DEGREES = util.getInput('DEGREES', 'number');
		util.writeLn(`S.setDirection(S.direction - ${DEGREES});`);
		util.visual('visible');
	};
	statementLibrary['motion_turnright'] = function(util) {
		const DEGREES = util.getInput('DEGREES', 'number');
		util.writeLn(`S.setDirection(S.direction + ${DEGREES});`);
		util.visual('visible');
	};
	statementLibrary['music_changeTempo'] = function(util) {
		const TEMPO = util.getInput('TEMPO', 'number');
		util.writeLn(`self.tempoBPM += ${TEMPO};`);
	};
	statementLibrary['music_playDrumForBeats'] = function(util) {
		const BEATS = util.getInput('BEATS', 'any');
		const DRUM = util.getInput('DRUM', 'any');
		util.writeLn('save();');
		util.writeLn('R.start = runtime.now();');
		util.writeLn(`R.duration = ${BEATS} * 60 / self.tempoBPM;`);
		util.writeLn(`var first = true;`);
		if (P.audio.context) {
			util.writeLn(`R.sound = playSpan(DRUMS[Math.round(${DRUM}) - 1] || DRUMS[2], 60, 10);`);
		} else {
			util.writeLn('R.sound = { stopped: false };');
		}
		const id = util.addLabel();
		util.writeLn('S.activeSounds.add(R.sound);');
		util.writeLn('if ((runtime.now() - R.start < R.duration * 1000 || first) && !R.sound.stopped) {');
		util.writeLn('  var first;');
		util.forceQueue(id);
		util.writeLn('}');
		util.writeLn('S.activeSounds.delete(R.sound);');
		util.writeLn('restore();');
	};
	statementLibrary['music_playNoteForBeats'] = function(util) {
		const BEATS = util.getInput('BEATS', 'any');
		const NOTE = util.getInput('NOTE', 'any');
		util.writeLn('save();');
		util.writeLn('R.start = runtime.now();');
		util.writeLn(`R.duration = ${BEATS} * 60 / self.tempoBPM;`);
		util.writeLn(`var first = true;`);
		if (P.audio.context) {
			util.writeLn(`R.sound = playNote(${NOTE}, R.duration);`);
		} else {
			util.writeLn('R.sound = { stopped: false };');
		}
		const id = util.addLabel();
		util.writeLn('S.activeSounds.add(R.sound);');
		util.writeLn('if ((runtime.now() - R.start < R.duration * 1000 || first) && !R.sound.stopped) {');
		util.writeLn('  var first;');
		util.forceQueue(id);
		util.writeLn('}');
		util.writeLn('S.activeSounds.delete(R.sound);');
		util.writeLn('restore();');
	};
	statementLibrary['music_restForBeats'] = function(util) {
		const BEATS = util.getInput('BEATS', 'number');
		util.writeLn('save();');
		util.writeLn('R.start = runtime.now();');
		util.writeLn(`R.duration = ${BEATS} * 60 / self.tempoBPM;`);
		util.writeLn(`var first = true;`);
		const id = util.addLabel();
		util.writeLn('if (runtime.now() - R.start < R.duration * 1000 || first) {');
		util.writeLn('  var first;');
		util.forceQueue(id);
		util.writeLn('}');
		util.writeLn('restore();');
	};
	statementLibrary['music_setTempo'] = function(util) {
		const TEMPO = util.getInput('TEMPO', 'number');
		util.writeLn(`self.tempoBPM = ${TEMPO};`);
	};
	statementLibrary['music_setInstrument'] = function(util) {
		const INSTRUMENT = util.getInput('INSTRUMENT', 'number');
		util.writeLn(`S.instrument = Math.max(0, Math.min(INSTRUMENTS.length - 1, ${INSTRUMENT} - 1)) | 0;`);
	};
	statementLibrary['pen_changePenColorParamBy'] = function(util) {
		const COLOR_PARAM = util.getInput('COLOR_PARAM', 'string');
		const VALUE = util.getInput('VALUE', 'number');
		util.writeLn(`S.penColor.changeParam(${COLOR_PARAM}, ${VALUE});`);
	};
	statementLibrary['pen_changePenHueBy'] = function(util) {
		const HUE = util.getInput('HUE', 'number');
		util.writeLn('S.penColor.toHSLA();');
		util.writeLn(`S.penColor.x += ${HUE} * 360 / 200;`);
		util.writeLn('S.penColor.y = 100;');
	};
	statementLibrary['pen_changePenShadeBy'] = function(util) {
		const SHADE = util.getInput('SHADE', 'number');
		util.writeLn('S.penColor.toHSLA();');
		util.writeLn(`S.penColor.z = (S.penColor.z + ${SHADE}) % 200;`);
		util.writeLn('if (S.penColor.z < 0) S.penColor.z += 200;');
		util.writeLn('S.penColor.y = 100;');
	};
	statementLibrary['pen_changePenSizeBy'] = function(util) {
		const SIZE = util.getInput('SIZE', 'number');
		util.writeLn(`S.penSize = Math.max(1, S.penSize + ${SIZE});`);
	};
	statementLibrary['pen_clear'] = function(util) {
		util.writeLn('self.clearPen();');
		util.visual('always');
	};
	statementLibrary['pen_penDown'] = function(util) {
		util.writeLn('S.isPenDown = true;');
		util.writeLn('S.dotPen();');
		util.visual('always');
	};
	statementLibrary['pen_penUp'] = function(util) {
		util.writeLn('S.isPenDown = false;');
	};
	statementLibrary['pen_setPenColorParamTo'] = function(util) {
		const COLOR_PARAM = util.getInput('COLOR_PARAM', 'string');
		const VALUE = util.getInput('VALUE', 'number');
		util.writeLn(`S.penColor.setParam(${COLOR_PARAM}, ${VALUE});`);
	};
	statementLibrary['pen_setPenColorToColor'] = function(util) {
		const COLOR = util.getInput('COLOR', 'any');
		util.writeLn(`S.setPenColor(${COLOR});`);
	};
	statementLibrary['pen_setPenHueToNumber'] = function(util) {
		const HUE = util.getInput('HUE', 'number');
		util.writeLn('S.penColor.toHSLA();');
		util.writeLn(`S.penColor.x = ${HUE} * 360 / 200;`);
		util.writeLn('S.penColor.y = 100;');
	};
	statementLibrary['pen_setPenShadeToNumber'] = function(util) {
		const SHADE = util.getInput('SHADE', 'number');
		util.writeLn('S.penColor.toHSLA();');
		util.writeLn(`S.penColor.z = ${SHADE} % 200;`);
		util.writeLn('if (S.penColor.z < 0) S.penColor.z += 200;');
		util.writeLn('S.penColor.y = 100;');
	};
	statementLibrary['pen_setPenSizeTo'] = function(util) {
		const SIZE = util.getInput('SIZE', 'number');
		util.writeLn(`S.penSize = Math.max(1, ${SIZE});`);
	};
	statementLibrary['pen_stamp'] = function(util) {
		util.writeLn('S.stamp();');
		util.visual('always');
	};
	statementLibrary['procedures_call'] = function(util) {
		const mutation = util.block.mutation;
		const name = mutation.proccode;
		if (P.config.debug) {
			if (name === 'forkphorus:debugger;') {
				util.writeLn('/* forkphorus */ debugger;');
				return;
			} else if (name === 'forkphorus:throw;') {
				util.writeLn('/* forkphorus */ throw new Error("Debug intended crash");');
				return;
			}
		}
		const label = util.claimNextLabel();
		util.write(`call(S.procedures[${util.sanitizedString(name)}], ${label}, [`);
		const inputNames = JSON.parse(mutation.argumentids);
		for (const inputName of inputNames) {
			util.write(`${util.getInput(inputName, 'any')}, `);
		}
		util.writeLn(']); return;');
		util.addLabel(label);
	};
	statementLibrary['sound_changeeffectby'] = function(util) {
		const EFFECT = util.sanitizedString(util.getField('EFFECT'));
		const VALUE = util.getInput('VALUE', 'number');
		util.writeLn(`S.changeSoundFilter(${EFFECT}, ${VALUE});`);
	};
	statementLibrary['sound_changevolumeby'] = function(util) {
		const VOLUME = util.getInput('VOLUME', 'number');
		util.writeLn(`S.volume = Math.max(0, Math.min(1, S.volume + ${VOLUME} / 100));`);
		util.writeLn('if (S.node) S.node.gain.value = S.volume;');
	};
	statementLibrary['sound_cleareffects'] = function(util) {
		util.writeLn('S.resetSoundFilters();');
	};
	statementLibrary['sound_play'] = function(util) {
		const SOUND_MENU = util.getInput('SOUND_MENU', 'any');
		if (P.audio.context) {
			util.writeLn(`var sound = S.getSound(${SOUND_MENU});`);
			util.writeLn('if (sound) startSound(sound);');
		}
	};
	statementLibrary['sound_playuntildone'] = function(util) {
		const SOUND_MENU = util.getInput('SOUND_MENU', 'any');
		if (P.audio.context) {
			util.writeLn(`var sound = S.getSound(${SOUND_MENU});`);
			util.writeLn('if (sound) {');
			util.writeLn('  save();');
			util.writeLn('  R.sound = playSound(sound);');
			util.writeLn('  S.activeSounds.add(R.sound);');
			util.writeLn('  R.start = runtime.now();');
			util.writeLn('  R.duration = sound.duration;');
			util.writeLn('  var first = true;');
			const label = util.addLabel();
			util.writeLn('  if ((runtime.now() - R.start < R.duration * 1000 || first) && !R.sound.stopped) {');
			util.writeLn('    var first;');
			util.forceQueue(label);
			util.writeLn('  }');
			util.writeLn('  S.activeSounds.delete(R.sound);');
			util.writeLn('  restore();');
			util.writeLn('}');
		}
	};
	statementLibrary['sound_seteffectto'] = function(util) {
		const EFFECT = util.sanitizedString(util.getField('EFFECT'));
		const VALUE = util.getInput('VALUE', 'number');
		util.writeLn(`S.setSoundFilter(${EFFECT}, ${VALUE});`);
	};
	statementLibrary['sound_setvolumeto'] = function(util) {
		const VOLUME = util.getInput('VOLUME', 'number');
		util.writeLn(`S.volume = Math.max(0, Math.min(1, ${VOLUME} / 100));`);
		util.writeLn('if (S.node) S.node.gain.value = S.volume;');
	};
	statementLibrary['sound_stopallsounds'] = function(util) {
		if (P.audio.context) {
			util.writeLn('self.stopAllSounds();');
		}
	};
	statementLibrary['sensing_askandwait'] = function(util) {
		const QUESTION = util.getInput('QUESTION', 'string');
		util.writeLn('R.id = self.nextPromptId++;');
		const label1 = util.addLabel();
		util.writeLn('if (self.promptId < R.id) {');
		util.forceQueue(label1);
		util.writeLn('}');
		util.writeLn(`S.ask(${QUESTION});`);
		const label2 = util.addLabel();
		util.writeLn('if (self.promptId === R.id) {');
		util.forceQueue(label2);
		util.writeLn('}');
		util.writeLn('S.say("");');
		util.visual('always');
	};
	statementLibrary['sensing_resettimer'] = function(util) {
		util.writeLn('runtime.timerStart = runtime.now();');
	};
	statementLibrary['sensing_setdragmode'] = function(util) {
		const DRAG_MODE = util.getField('DRAG_MODE');
		if (DRAG_MODE === 'draggable') {
			util.writeLn('S.isDraggable = true;');
		} else {
			util.writeLn('S.isDraggable = false;');
		}
	};
	statementLibrary['speech2text_listenAndWait'] = function(util) {
		util.stage.initSpeech2Text();
		util.writeLn('if (self.speech2text) {');
		util.writeLn('  save();');
		util.writeLn('  self.speech2text.startListen();');
		util.writeLn('  R.id = self.speech2text.id();');
		const label = util.addLabel();
		util.writeLn('  if (self.speech2text.id() === R.id) {');
		util.forceQueue(label);
		util.writeLn('  }');
		util.writeLn('  self.speech2text.endListen();');
		util.writeLn('  restore();');
		util.writeLn('}');
	};
	statementLibrary['videoSensing_videoToggle'] = function(util) {
		const VIDEO_STATE = util.getInput('VIDEO_STATE', 'string');
		util.writeLn(`switch (${VIDEO_STATE}) {`);
		util.writeLn('  case "off": self.showVideo(false); break;');
		util.writeLn('  case "on": self.showVideo(true); break;');
		util.writeLn('}');
	};
	const noopStatement = (util) => util.writeLn('/* noop */');
	statementLibrary['motion_align_scene'] = noopStatement;
	statementLibrary['motion_scroll_right'] = noopStatement;
	statementLibrary['motion_scroll_up'] = noopStatement;
	statementLibrary['looks_changestretchby'] = noopStatement;
	statementLibrary['looks_hideallsprites'] = noopStatement;
	statementLibrary['looks_setstretchto'] = noopStatement;
	inputLibrary['argument_reporter_boolean'] = function(util) {
		const VALUE = util.sanitizedString(util.getField('VALUE'));
		return util.booleanInput(util.asType(`C.args[${VALUE}]`, 'boolean'));
	};
	inputLibrary['argument_reporter_string_number'] = function(util) {
		const VALUE = util.sanitizedString(util.getField('VALUE'));
		return util.anyInput(`C.args[${VALUE}]`);
	};
	inputLibrary['control_create_clone_of_menu'] = function(util) {
		return util.fieldInput('CLONE_OPTION');
	};
	inputLibrary['control_get_counter'] = function(util) {
		return util.numberInput('self.counter');
	};
	inputLibrary['data_itemoflist'] = function(util) {
		const LIST = util.getListReference('LIST');
		const INDEX = util.getInput('INDEX', 'any');
		return util.anyInput(`getLineOfList(${LIST}, ${INDEX})`);
	};
	inputLibrary['data_itemnumoflist'] = function(util) {
		const LIST = util.getListReference('LIST');
		const ITEM = util.getInput('ITEM', 'any');
		return util.numberInput(`listIndexOf(${LIST}, ${ITEM})`);
	};
	inputLibrary['data_lengthoflist'] = function(util) {
		const LIST = util.getListReference('LIST');
		return util.numberInput(`${LIST}.length`);
	};
	inputLibrary['data_listcontainsitem'] = function(util) {
		const LIST = util.getListReference('LIST');
		const ITEM = util.getInput('ITEM', 'any');
		return util.booleanInput(`listContains(${LIST}, ${ITEM})`);
	};
	inputLibrary['looks_backdropnumbername'] = function(util) {
		const NUMBER_NAME = util.getField('NUMBER_NAME');
		if (NUMBER_NAME === 'number') {
			return util.numberInput('(self.currentCostumeIndex + 1)');
		} else {
			return util.stringInput('self.costumes[self.currentCostumeIndex].name');
		}
	};
	inputLibrary['looks_backdrops'] = function(util) {
		return util.fieldInput('BACKDROP');
	};
	inputLibrary['looks_costume'] = function(util) {
		return util.fieldInput('COSTUME');
	};
	inputLibrary['looks_costumenumbername'] = function(util) {
		const NUMBER_NAME = util.getField('NUMBER_NAME');
		if (NUMBER_NAME === 'number') {
			return util.numberInput('(S.currentCostumeIndex + 1)');
		} else {
			return util.stringInput('S.costumes[S.currentCostumeIndex].name');
		}
	};
	inputLibrary['looks_size'] = function(util) {
		return util.numberInput('(S.scale * 100)');
	};
	inputLibrary['makeymakey_menu_KEY'] = function(util) {
		return util.fieldInput('KEY');
	};
	inputLibrary['makeymakey_menu_SEQUENCE'] = function(util) {
		return util.fieldInput('SEQUENCE');
	};
	inputLibrary['matrix'] = function(util) {
		return util.fieldInput('MATRIX');
	};
	inputLibrary['motion_direction'] = function(util) {
		return util.numberInput('S.direction');
	};
	inputLibrary['motion_glideto_menu'] = function(util) {
		return util.fieldInput('TO');
	};
	inputLibrary['motion_goto_menu'] = function(util) {
		return util.fieldInput('TO');
	};
	inputLibrary['motion_pointtowards_menu'] = function(util) {
		return util.fieldInput('TOWARDS');
	};
	inputLibrary['motion_xposition'] = function(util) {
		return util.numberInput('S.scratchX');
	};
	inputLibrary['motion_yposition'] = function(util) {
		return util.numberInput('S.scratchY');
	};
	inputLibrary['music_getTempo'] = function(util) {
		return util.numberInput('self.tempoBPM');
	};
	inputLibrary['music_menu_DRUM'] = function(util) {
		return util.fieldInput('DRUM');
	};
	inputLibrary['music_menu_INSTRUMENT'] = function(util) {
		return util.fieldInput('INSTRUMENT');
	};
	inputLibrary['note'] = function(util) {
		return util.fieldInput('NOTE');
	};
	inputLibrary['operator_add'] = function(util) {
		const NUM1 = util.getInput('NUM1', 'number');
		const NUM2 = util.getInput('NUM2', 'number');
		return util.numberInput(`(${NUM1} + ${NUM2} || 0)`);
	};
	inputLibrary['operator_and'] = function(util) {
		const OPERAND1 = util.getInput('OPERAND1', 'any');
		const OPERAND2 = util.getInput('OPERAND2', 'any');
		return util.booleanInput(`(${OPERAND1} && ${OPERAND2})`);
	};
	inputLibrary['operator_contains'] = function(util) {
		const STRING1 = util.getInput('STRING1', 'string');
		const STRING2 = util.getInput('STRING2', 'string');
		return util.booleanInput(`stringContains(${STRING1}, ${STRING2})`);
	};
	inputLibrary['operator_divide'] = function(util) {
		const NUM1 = util.getInput('NUM1', 'number');
		const NUM2 = util.getInput('NUM2', 'number');
		return util.numberInput(`(${NUM1} / ${NUM2} || 0)`);
	};
	inputLibrary['operator_equals'] = function(util) {
		const OPERAND1 = util.getInput('OPERAND1', 'any');
		const OPERAND2 = util.getInput('OPERAND2', 'any');
		if (!OPERAND1.potentialNumber || !OPERAND2.potentialNumber) {
			return util.booleanInput(`strEqual(${OPERAND1}, ${OPERAND2})`);
		}
		if (P.config.experimentalOptimizations) {
			if (OPERAND1.type === 'number') {
				return util.booleanInput(`numEqual(${OPERAND1}, ${OPERAND2})`);
			}
			if (OPERAND2.type === 'number') {
				return util.booleanInput(`numEqual(${OPERAND2}, ${OPERAND1})`);
			}
		}
		return util.booleanInput(`equal(${OPERAND1}, ${OPERAND2})`);
	};
	inputLibrary['operator_gt'] = function(util) {
		const OPERAND1 = util.getInput('OPERAND1', 'any');
		const OPERAND2 = util.getInput('OPERAND2', 'any');
		return util.booleanInput(`(compare(${OPERAND1}, ${OPERAND2}) === 1)`);
	};
	inputLibrary['operator_join'] = function(util) {
		const STRING1 = util.getInput('STRING1', 'string');
		const STRING2 = util.getInput('STRING2', 'string');
		return util.stringInput(`(${STRING1} + ${STRING2})`);
	};
	inputLibrary['operator_length'] = function(util) {
		const STRING = util.getInput('STRING', 'string');
		return util.numberInput(`(${STRING}).length`);
	};
	inputLibrary['operator_letter_of'] = function(util) {
		const STRING = util.getInput('STRING', 'string');
		const LETTER = util.getInput('LETTER', 'number');
		return util.stringInput(`((${STRING})[(${LETTER} | 0) - 1] || "")`);
	};
	inputLibrary['operator_lt'] = function(util) {
		const OPERAND1 = util.getInput('OPERAND1', 'any');
		const OPERAND2 = util.getInput('OPERAND2', 'any');
		return util.booleanInput(`(compare(${OPERAND1}, ${OPERAND2}) === -1)`);
	};
	inputLibrary['operator_mathop'] = function(util) {
		const OPERATOR = util.getField('OPERATOR');
		const NUM = util.getInput('NUM', 'number');
		switch (OPERATOR) {
			case 'abs':
				return util.numberInput(`Math.abs(${NUM})`);
			case 'floor':
				return util.numberInput(`Math.floor(${NUM})`);
			case 'sqrt':
				return util.numberInput(`Math.sqrt(${NUM})`);
			case 'ceiling':
				return util.numberInput(`Math.ceil(${NUM})`);
			case 'cos':
				return util.numberInput(`(Math.round(Math.cos(${NUM} * Math.PI / 180) * 1e10) / 1e10)`);
			case 'sin':
				return util.numberInput(`(Math.round(Math.sin(${NUM} * Math.PI / 180) * 1e10) / 1e10)`);
			case 'tan':
				return util.numberInput(`Math.tan(${NUM} * Math.PI / 180)`);
			case 'asin':
				return util.numberInput(`(Math.asin(${NUM}) * 180 / Math.PI)`);
			case 'acos':
				return util.numberInput(`(Math.acos(${NUM}) * 180 / Math.PI)`);
			case 'atan':
				return util.numberInput(`(Math.atan(${NUM}) * 180 / Math.PI)`);
			case 'ln':
				return util.numberInput(`Math.log(${NUM})`);
			case 'log':
				return util.numberInput(`(Math.log(${NUM}) / Math.LN10)`);
			case 'e ^':
				return util.numberInput(`Math.exp(${NUM})`);
			case '10 ^':
				return util.numberInput(`Math.pow(10, ${NUM})`);
			default:
				return util.numberInput('0');
		}
	};
	inputLibrary['operator_mod'] = function(util) {
		const NUM1 = util.getInput('NUM1', 'number');
		const NUM2 = util.getInput('NUM2', 'number');
		return util.numberInput(`mod(${NUM1}, ${NUM2})`);
	};
	inputLibrary['operator_multiply'] = function(util) {
		const NUM1 = util.getInput('NUM1', 'number');
		const NUM2 = util.getInput('NUM2', 'number');
		return util.numberInput(`(${NUM1} * ${NUM2} || 0)`);
	};
	inputLibrary['operator_not'] = function(util) {
		const OPERAND = util.getInput('OPERAND', 'any');
		return util.booleanInput(`!${OPERAND}`);
	};
	inputLibrary['operator_or'] = function(util) {
		const OPERAND1 = util.getInput('OPERAND1', 'any');
		const OPERAND2 = util.getInput('OPERAND2', 'any');
		return util.booleanInput(`(${OPERAND1} || ${OPERAND2})`);
	};
	inputLibrary['operator_random'] = function(util) {
		const FROM = util.getInput('FROM', 'string');
		const TO = util.getInput('TO', 'string');
		return util.numberInput(`random(${FROM}, ${TO})`);
	};
	inputLibrary['operator_round'] = function(util) {
		const NUM = util.getInput('NUM', 'number');
		return util.numberInput(`Math.round(${NUM})`);
	};
	inputLibrary['operator_subtract'] = function(util) {
		const NUM1 = util.getInput('NUM1', 'number');
		const NUM2 = util.getInput('NUM2', 'number');
		return util.numberInput(`(${NUM1} - ${NUM2} || 0)`);
	};
	inputLibrary['pen_menu_colorParam'] = function(util) {
		return util.fieldInput('colorParam');
	};
	inputLibrary['sensing_answer'] = function(util) {
		return util.stringInput('self.answer');
	};
	inputLibrary['sensing_coloristouchingcolor'] = function(util) {
		const COLOR = util.getInput('COLOR', 'any');
		const COLOR2 = util.getInput('COLOR2', 'any');
		return util.booleanInput(`S.colorTouchingColor(${COLOR}, ${COLOR2})`);
	};
	inputLibrary['sensing_current'] = function(util) {
		const CURRENTMENU = util.getField('CURRENTMENU').toLowerCase();
		switch (CURRENTMENU) {
			case 'year':
				return util.numberInput('new Date().getFullYear()');
			case 'month':
				return util.numberInput('(new Date().getMonth() + 1)');
			case 'date':
				return util.numberInput('new Date().getDate()');
			case 'dayofweek':
				return util.numberInput('(new Date().getDay() + 1)');
			case 'hour':
				return util.numberInput('new Date().getHours()');
			case 'minute':
				return util.numberInput('new Date().getMinutes()');
			case 'second':
				return util.numberInput('new Date().getSeconds()');
		}
		return util.numberInput('0');
	};
	inputLibrary['sensing_dayssince2000'] = function(util) {
		return util.numberInput('((Date.now() - epoch) / 86400000)');
	};
	inputLibrary['sensing_distanceto'] = function(util) {
		const DISTANCETOMENU = util.getInput('DISTANCETOMENU', 'any');
		return util.numberInput(`S.distanceTo(${DISTANCETOMENU})`);
	};
	inputLibrary['sensing_distancetomenu'] = function(util) {
		return util.fieldInput('DISTANCETOMENU');
	};
	inputLibrary['sensing_keyoptions'] = function(util) {
		return util.fieldInput('KEY_OPTION');
	};
	inputLibrary['sensing_keypressed'] = function(util) {
		const KEY_OPTION = util.getInput('KEY_OPTION', 'string');
		return util.booleanInput(`!!self.keys[getKeyCode3(${KEY_OPTION})]`);
	};
	inputLibrary['sensing_loud'] = function(util) {
		util.stage.initLoudness();
		return util.booleanInput('(self.microphone.getLoudness() > 10)');
	};
	inputLibrary['sensing_loudness'] = function(util) {
		util.stage.initLoudness();
		return util.numberInput('self.microphone.getLoudness()');
	};
	inputLibrary['sensing_mousedown'] = function(util) {
		return util.booleanInput('self.mousePressed');
	};
	inputLibrary['sensing_mousex'] = function(util) {
		return util.numberInput('self.mouseX');
	};
	inputLibrary['sensing_mousey'] = function(util) {
		return util.numberInput('self.mouseY');
	};
	inputLibrary['sensing_of'] = function(util) {
		const PROPERTY = util.sanitizedString(util.getField('PROPERTY'));
		const OBJECT = util.getInput('OBJECT', 'string');
		return util.anyInput(`attribute(${PROPERTY}, ${OBJECT})`);
	};
	inputLibrary['sensing_of_object_menu'] = function(util) {
		return util.fieldInput('OBJECT');
	};
	inputLibrary['sensing_timer'] = function(util) {
		return util.numberInput('((runtime.now() - runtime.timerStart) / 1000)');
	};
	inputLibrary['sensing_touchingcolor'] = function(util) {
		const COLOR = util.getInput('COLOR', 'any');
		return util.booleanInput(`S.touchingColor(${COLOR})`);
	};
	inputLibrary['sensing_touchingobject'] = function(util) {
		const TOUCHINGOBJECTMENU = util.getInput('TOUCHINGOBJECTMENU', 'string');
		return util.booleanInput(`S.touching(${TOUCHINGOBJECTMENU})`);
	};
	inputLibrary['sensing_touchingobjectmenu'] = function(util) {
		return util.fieldInput('TOUCHINGOBJECTMENU');
	};
	inputLibrary['sound_sounds_menu'] = function(util) {
		return util.fieldInput('SOUND_MENU');
	};
	inputLibrary['sensing_username'] = function(util) {
		return util.stringInput('self.username');
	};
	inputLibrary['sound_volume'] = function(util) {
		return util.numberInput('(S.volume * 100)');
	};
	inputLibrary['speech2text_getSpeech'] = function(util) {
		util.stage.initSpeech2Text();
		return util.stringInput('(self.speech2text ? self.speech2text.speech : "")');
	};
	inputLibrary['translate_menu_languages'] = function(util) {
		return util.fieldInput('languages');
	};
	inputLibrary['translate_getTranslate'] = function(util) {
		const WORDS = util.getInput('WORDS', 'string');
		const LANGUAGE = util.getInput('LANGUAGE', 'string');
		return WORDS;
	};
	inputLibrary['translate_getViewerLanguage'] = function(util) {
		return util.sanitizedInput('English');
	};
	inputLibrary['videoSensing_menu_VIDEO_STATE'] = function(util) {
		return util.fieldInput('VIDEO_STATE');
	};
	const noopInput = (util) => util.anyInput('undefined');
	inputLibrary['motion_yscroll'] = noopInput;
	inputLibrary['motion_xscroll'] = noopInput;
	inputLibrary['sensing_userid'] = noopInput;
	hatLibrary['control_start_as_clone'] = {
		handle(util) {
			util.target.listeners.whenCloned.push(util.startingFunction);
		},
	};
	hatLibrary['event_whenbackdropswitchesto'] = {
		handle(util) {
			const BACKDROP = util.getField('BACKDROP');
			if (!util.target.listeners.whenBackdropChanges[BACKDROP]) {
				util.target.listeners.whenBackdropChanges[BACKDROP] = [];
			}
			util.target.listeners.whenBackdropChanges[BACKDROP].push(util.startingFunction);
		},
	};
	hatLibrary['event_whenbroadcastreceived'] = {
		handle(util) {
			const BROADCAST_OPTION = util.getField('BROADCAST_OPTION').toLowerCase();
			if (!util.target.listeners.whenIReceive[BROADCAST_OPTION]) {
				util.target.listeners.whenIReceive[BROADCAST_OPTION] = [];
			}
			util.target.listeners.whenIReceive[BROADCAST_OPTION].push(util.startingFunction);
		},
	};
	hatLibrary['event_whenflagclicked'] = {
		handle(util) {
			util.target.listeners.whenGreenFlag.push(util.startingFunction);
		},
	};
	hatLibrary['event_whenkeypressed'] = {
		handle(util) {
			const KEY_OPTION = util.getField('KEY_OPTION');
			if (KEY_OPTION === 'any') {
				for (var i = 128; i--;) {
					util.target.listeners.whenKeyPressed[i].push(util.startingFunction);
				}
			} else {
				util.target.listeners.whenKeyPressed[P.runtime.getKeyCode(KEY_OPTION)].push(util.startingFunction);
			}
		},
	};
	hatLibrary['event_whenstageclicked'] = {
		handle(util) {
			util.target.listeners.whenClicked.push(util.startingFunction);
		},
	};
	hatLibrary['event_whenthisspriteclicked'] = {
		handle(util) {
			util.target.listeners.whenClicked.push(util.startingFunction);
		},
	};
	hatLibrary['makeymakey_whenMakeyKeyPressed'] = {
		handle(util) {
			const KEY = util.getInput('KEY', 'string');
			try {
				const value = P.runtime.scopedEval(KEY.source);
				var keycode = P.runtime.getKeyCode(value);
			} catch (e) {
				util.compiler.warn('makeymakey key generation error', e);
				return;
			}
			if (keycode === 'any') {
				for (var i = 128; i--;) {
					util.target.listeners.whenKeyPressed[i].push(util.startingFunction);
				}
			} else {
				util.target.listeners.whenKeyPressed[keycode].push(util.startingFunction);
			}
		},
	};
	hatLibrary['makeymakey_whenCodePressed'] = {
		handle(util) {
			const SEQUENCE = util.getInput('SEQUENCE', 'string');
			try {
				var sequence = P.runtime.scopedEval(SEQUENCE.source);
			} catch (e) {
				util.compiler.warn('makeymakey sequence generation error', e);
				return;
			}
			const ARROWS = ['up', 'down', 'left', 'right'];
			const keys = sequence.toLowerCase().split(' ')
				.map((key) => {
					if (ARROWS.indexOf(key) > -1) {
						return P.runtime.getKeyCode(key + ' arrow');
					} else {
						return P.runtime.getKeyCode(key);
					}
				});
			const targetFunction = util.startingFunction;
			let sequenceIndex = 0;
			for (let key = 128; key--;) {
				util.target.listeners.whenKeyPressed[key].push(function() {
					const expectedKey = keys[sequenceIndex];
					if (key !== expectedKey) {
						sequenceIndex = 0;
					} else {
						sequenceIndex++;
						if (sequenceIndex === keys.length) {
							sequenceIndex = 0;
							targetFunction();
						}
					}
				});
			}
		},
	};
	hatLibrary['procedures_definition'] = {
		handle(util) {
			const customBlockId = util.block.inputs.custom_block[1];
			const mutation = util.compiler.blocks[customBlockId].mutation;
			const proccode = mutation.proccode;
			const warp = typeof mutation.warp === 'string' ? mutation.warp === 'true' : mutation.warp;
			const argumentNames = JSON.parse(mutation.argumentnames);
			const procedure = new P.sb3.Scratch3Procedure(util.startingFunction, warp, argumentNames);
			util.target.procedures[proccode] = procedure;
		},
		postcompile(compiler, source, hat) {
			return source + 'endCall(); return;\n';
		},
		precompile(compiler, hat) {
			const customBlockId = hat.inputs.custom_block[1];
			const mutation = compiler.blocks[customBlockId].mutation;
			const warp = typeof mutation.warp === 'string' ? mutation.warp === 'true' : mutation.warp;
			if (warp) {
				compiler.state.isWarp = true;
			}
		},
	};
	hatLibrary['speech2text_whenIHearHat'] = {
		handle(util) {
			util.stage.initSpeech2Text();
			if (util.stage.speech2text) {
				const PHRASE = util.getInput('PHRASE', 'string');
				const phraseFunction = `return ${PHRASE}`;
				util.stage.speech2text.addHat({
					target: util.target,
					startingFunction: util.startingFunction,
					phraseFunction: P.runtime.createContinuation(phraseFunction),
				});
			}
		},
	};
	watcherLibrary['data_variable'] = {
		init(watcher) {
			const name = watcher.params.VARIABLE;
			watcher.target.watchers[name] = watcher;
		},
		set(watcher, value) {
			const name = watcher.params.VARIABLE;
			watcher.target.vars[name] = value;
		},
		evaluate(watcher) {
			const name = watcher.params.VARIABLE;
			return watcher.target.vars[name];
		},
		getLabel(watcher) {
			return watcher.params.VARIABLE;
		},
	};
	watcherLibrary['looks_backdropnumbername'] = {
		evaluate(watcher) {
			const target = watcher.stage;
			const param = watcher.params.NUMBER_NAME;
			if (param === 'number') {
				return target.currentCostumeIndex + 1;
			} else {
				return target.costumes[target.currentCostumeIndex].name;
			}
		},
		getLabel(watcher) {
			return 'backdrop ' + watcher.params.NUMBER_NAME;
		},
	};
	watcherLibrary['looks_costumenumbername'] = {
		evaluate(watcher) {
			const target = watcher.target;
			const param = watcher.params.NUMBER_NAME;
			if (param === 'number') {
				return target.currentCostumeIndex + 1;
			} else {
				return target.costumes[target.currentCostumeIndex].name;
			}
		},
		getLabel(watcher) {
			return 'costume ' + watcher.params.NUMBER_NAME;
		},
	};
	watcherLibrary['looks_size'] = {
		evaluate(watcher) { return P.core.isSprite(watcher.target) ? watcher.target.scale * 100 : 100; },
		getLabel() { return 'size'; },
	};
	watcherLibrary['motion_direction'] = {
		evaluate(watcher) { return P.core.isSprite(watcher.target) ? watcher.target.direction : 0; },
		getLabel() { return 'direction'; },
	};
	watcherLibrary['motion_xposition'] = {
		evaluate(watcher) { return watcher.target.scratchX; },
		getLabel() { return 'x position'; },
	};
	watcherLibrary['motion_yposition'] = {
		evaluate(watcher) { return watcher.target.scratchY; },
		getLabel() { return 'y position'; },
	};
	watcherLibrary['music_getTempo'] = {
		evaluate(watcher) { return watcher.stage.tempoBPM; },
		getLabel() { return 'Music: tempo'; },
	};
	watcherLibrary['sensing_answer'] = {
		evaluate(watcher) { return watcher.stage.answer; },
		getLabel() { return 'answer'; },
	};
	watcherLibrary['sensing_current'] = {
		evaluate(watcher) {
			const param = watcher.params.CURRENTMENU.toLowerCase();
			switch (param) {
				case 'year':
					return new Date().getFullYear();
				case 'month':
					return new Date().getMonth() + 1;
				case 'date':
					return new Date().getDate();
				case 'dayofweek':
					return new Date().getDay() + 1;
				case 'hour':
					return new Date().getHours();
				case 'minute':
					return new Date().getMinutes();
				case 'second':
					return new Date().getSeconds();
			}
			return 0;
		},
		getLabel(watcher) {
			const param = watcher.params.CURRENTMENU.toLowerCase();
			if (param === 'dayofweek') {
				return 'day of week';
			}
			return param;
		}
	};
	watcherLibrary['sensing_loudness'] = {
		init(watcher) {
			watcher.stage.initLoudness();
		},
		evaluate(watcher) {
			if (watcher.stage.microphone) {
				return watcher.stage.microphone.getLoudness();
			} else {
				return -1;
			}
		},
		getLabel() { return 'loudness'; },
	};
	watcherLibrary['sensing_timer'] = {
		evaluate(watcher) {
			return (watcher.stage.runtime.now() - watcher.stage.runtime.timerStart) / 1000;
		},
		getLabel() { return 'timer'; },
	};
	watcherLibrary['sensing_username'] = {
		evaluate(watcher) { return watcher.stage.username; },
		getLabel() { return 'username'; },
	};
	watcherLibrary['sound_volume'] = {
		evaluate(watcher) { return watcher.target.volume * 100; },
		getLabel() { return 'volume'; },
	};
	watcherLibrary['speech2text_getSpeech'] = {
		init(watcher) {
			watcher.stage.initSpeech2Text();
		},
		evaluate(watcher) {
			if (watcher.stage.speech2text) {
				return watcher.stage.speech2text.speech;
			}
			return '';
		},
		getLabel(watcher) { return 'Speech to text: speech'; },
	};
}());
var P;
(function(P) {
	var ext;
	(function(ext) {
		class Extension {
			constructor(stage) {
				this.stage = stage;
			}
			destroy() {}
			onstart() {}
			onpause() {}
		}
		ext.Extension = Extension;
	})(ext = P.ext || (P.ext = {}));
})(P || (P = {}));
/*!
Parts of this file (microphone.ts) are derived from https://github.com/LLK/scratch-audio/blob/develop/src/Loudness.js
*/
var P;
(function(P) {
	var ext;
	(function(ext) {
		var microphone;
		(function(microphone_1) {
			let microphone = null;
			let state = 0;
			const CACHE_TIME = 1000 / 30;

			function connect() {
				if (state !== 0) {
					return;
				}
				if (!P.audio.context) {
					console.warn('Cannot connect to microphone without audio context.');
					state = 3;
					return;
				}
				state = 2;
				navigator.mediaDevices.getUserMedia({ audio: true })
					.then((mediaStream) => {
						const source = P.audio.context.createMediaStreamSource(mediaStream);
						const analyzer = P.audio.context.createAnalyser();
						source.connect(analyzer);
						microphone = {
							source: source,
							stream: mediaStream,
							analyzer,
							dataArray: new Float32Array(analyzer.fftSize),
							lastValue: -1,
							lastCheck: 0,
						};
						state = 1;
					})
					.catch((err) => {
						console.warn('Cannot connect to microphone: ' + err);
						state = 3;
					});
			}

			function reinitAnalyser() {
				if (!microphone) {
					throw new Error('Microphone not connected; cannot re-init something that does not exist!');
				}
				const analyzer = P.audio.context.createAnalyser();
				microphone.source.disconnect();
				microphone.source.connect(analyzer);
				microphone.analyzer = analyzer;
				if (microphone.dataArray.length !== analyzer.fftSize) {
					microphone.dataArray = new Float32Array(analyzer.fftSize);
				}
			}

			function getLoudness() {
				if (microphone === null) {
					connect();
					return -1;
				}
				if (!microphone.stream.active) {
					return -1;
				}
				if (Date.now() - microphone.lastCheck < CACHE_TIME) {
					return microphone.lastValue;
				}
				microphone.analyzer.getFloatTimeDomainData(microphone.dataArray);
				let sum = 0;
				for (let i = 0; i < microphone.dataArray.length; i++) {
					sum += Math.pow(microphone.dataArray[i], 2);
				}
				let rms = Math.sqrt(sum / microphone.dataArray.length);
				if (microphone.lastValue !== -1) {
					rms = Math.max(rms, microphone.lastValue * 0.6);
				}
				microphone.lastValue = rms;
				rms *= 1.63;
				rms = Math.sqrt(rms);
				rms = Math.round(rms * 100);
				rms = Math.min(rms, 100);
				return rms;
			}
			class MicrophoneExtension extends P.ext.Extension {
				getLoudness() {
					return getLoudness();
				}
				onstart() {
					if (microphone) {
						reinitAnalyser();
					}
				}
			}
			microphone_1.MicrophoneExtension = MicrophoneExtension;
		})(microphone = ext.microphone || (ext.microphone = {}));
	})(ext = P.ext || (P.ext = {}));
})(P || (P = {}));
var P;
(function(P) {
	var ext;
	(function(ext) {
		var speech2text;
		(function(speech2text) {
			var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition;
			let supported = null;

			function isSupported() {
				if (supported === null) {
					supported = typeof SpeechRecognition !== 'undefined';
					if (!supported) {
						console.warn('Speech to text is not supported in this browser. (https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)');
					}
				}
				return supported;
			}
			speech2text.isSupported = isSupported;
			class SpeechToTextExtension extends P.ext.Extension {
				constructor(stage) {
					super(stage);
					this.speech = '';
					this.listeners = 0;
					this.hats = [];
					this.initRecognition();
					this.initOverlay();
				}
				initRecognition() {
					this.recognition = new SpeechRecognition();
					this.recognition.lang = 'en-US';
					this.recognition.continuous = true;
					this.recognition.onresult = (event) => this.onresult(event);
					this.recognition.onerror = (event) => {
						console.warn('speech2text error', event);
					};
					this.recognition.onend = () => {
						console.warn('speech2text disconnected, reconnecting');
						this.initRecognition();
					};
					this.recognition.start();
				}
				initOverlay() {
					if (this.overlayElement) {
						throw new Error('initializing overlay twice');
					}
					const container = document.createElement('div');
					container.className = 'speech2text-container';
					const indicator = document.createElement('div');
					indicator.className = 'speech2text-indicator';
					const animation = document.createElement('div');
					animation.className = 'speech2text-animation';
					container.appendChild(animation);
					container.appendChild(indicator);
					this.stage.ui.appendChild(container);
					this.overlayElement = container;
				}
				onresult(event) {
					this.lastResultIndex = event.resultIndex;
					const lastResult = event.results[event.resultIndex];
					const message = lastResult[0];
					const transcript = message.transcript.trim();
					if (this.listeners !== 0) {
						this.speech = transcript;
					}
					for (const hat of this.hats) {
						const target = hat.target;
						const phraseFunction = hat.phraseFunction;
						const startingFunction = hat.startingFunction;
						const value = this.stage.runtime.evaluateExpression(target, phraseFunction);
						if (value === transcript) {
							this.stage.runtime.startThread(target, startingFunction);
						}
					}
				}
				addHat(hat) {
					this.hats.push(hat);
				}
				startListen() {
					this.listeners++;
					this.overlayElement.setAttribute('listening', '');
				}
				endListen() {
					this.listeners--;
					if (this.listeners === 0) {
						this.overlayElement.removeAttribute('listening');
					}
				}
				destroy() {
					this.recognition.abort();
				}
				id() {
					return this.lastResultIndex;
				}
			}
			speech2text.SpeechToTextExtension = SpeechToTextExtension;
		})(speech2text = ext.speech2text || (ext.speech2text = {}));
	})(ext = P.ext || (P.ext = {}));
})(P || (P = {}));
var P;
(function(P) {
	var renderer;
	(function(renderer_1) {
		var canvas2d;
		(function(canvas2d) {
			function getCSSFilter(filters) {
				let filter = '';
				if (filters.brightness) {
					filter += 'brightness(' + (100 + filters.brightness) + '%) ';
				}
				if (filters.color) {
					if (filters.color === Infinity) {
						filter += 'grayscale(100%) ';
					} else {
						filter += 'hue-rotate(' + (filters.color / 200 * 360) + 'deg) ';
					}
				}
				return filter;
			}

			function create2dCanvas() {
				const canvas = document.createElement('canvas');
				canvas.width = 480;
				canvas.height = 360;
				const ctx = canvas.getContext('2d');
				if (!ctx) {
					throw new Error('Cannot get 2d rendering context in create2dCanvas');
				}
				ctx.imageSmoothingEnabled = false;
				return { canvas, ctx };
			}
			class SpriteRenderer2D {
				constructor() {
					this.noEffects = false;
					this.imageSmoothingEnabled = false;
					const { canvas, ctx } = create2dCanvas();
					this.canvas = canvas;
					this.ctx = ctx;
				}
				reset(scale) {
					this._reset(this.ctx, scale);
				}
				drawChild(c) {
					this._drawChild(c, this.ctx);
				}
				drawObjects(children) {
					for (var i = 0; i < children.length; i++) {
						var child = children[i];
						if (!child.visible) {
							continue;
						}
						this.drawChild(child);
					}
				}
				_reset(ctx, scale) {
					const effectiveScale = scale * P.config.scale;
					const width = 480 * effectiveScale;
					const height = 360 * effectiveScale;
					if (ctx.canvas.width !== width || ctx.canvas.height !== height) {
						ctx.canvas.width = width;
						ctx.canvas.height = height;
						ctx.scale(effectiveScale, effectiveScale);
					} else {
						ctx.clearRect(0, 0, 480, 360);
					}
				}
				_drawChild(c, ctx) {
					const costume = c.costumes[c.currentCostumeIndex];
					if (!costume) {
						return;
					}
					ctx.save();
					const globalScale = c.stage.zoom * P.config.scale;
					ctx.translate(((c.scratchX + 240) * globalScale | 0) / globalScale, ((180 - c.scratchY) * globalScale | 0) / globalScale);
					let objectScale = costume.scale;
					if (P.core.isSprite(c)) {
						if (c.rotationStyle === 0) {
							ctx.rotate((c.direction - 90) * Math.PI / 180);
						} else if (c.rotationStyle === 1 && c.direction < 0) {
							ctx.scale(-1, 1);
						}
						objectScale *= c.scale;
					}
					if (costume.isScalable) {
						costume.requestSize(objectScale * globalScale);
					}
					ctx.imageSmoothingEnabled = costume.isScalable || this.imageSmoothingEnabled;
					const image = costume.getImage();
					const x = -costume.rotationCenterX * objectScale;
					const y = -costume.rotationCenterY * objectScale;
					const w = costume.width * objectScale;
					const h = costume.height * objectScale;
					if (w < 1 || h < 1) {
						ctx.restore();
						return;
					}
					if (!this.noEffects) {
						ctx.globalAlpha = Math.max(0, Math.min(1, 1 - c.filters.ghost / 100));
						if (c.filters.brightness === 100) {
							workingRenderer.canvas.width = w;
							workingRenderer.canvas.height = h;
							workingRenderer.ctx.save();
							workingRenderer.ctx.translate(0, 0);
							workingRenderer.ctx.drawImage(image, 0, 0, w, h);
							workingRenderer.ctx.globalCompositeOperation = 'source-in';
							workingRenderer.ctx.fillStyle = 'white';
							workingRenderer.ctx.fillRect(0, 0, w, h);
							ctx.drawImage(workingRenderer.canvas, x, y);
							workingRenderer.ctx.restore();
						} else {
							const filter = getCSSFilter(c.filters);
							if (filter !== '') {
								ctx.filter = getCSSFilter(c.filters);
							}
							ctx.drawImage(image, x, y, w, h);
						}
					} else {
						ctx.drawImage(image, x, y, w, h);
					}
					ctx.restore();
				}
			}
			canvas2d.SpriteRenderer2D = SpriteRenderer2D;
			const workingRenderer = new SpriteRenderer2D();
			const workingRenderer2 = new SpriteRenderer2D();
			class ProjectRenderer2D extends SpriteRenderer2D {
				constructor(stage) {
					super();
					this.stage = stage;
					this.zoom = 1;
					this.penScalingEnabled = true;
					this.penModified = false;
					this.penTargetZoom = -1;
					this.penZoom = 1;
					this.stageCostumeIndex = -1;
					const { ctx: stageContext, canvas: stageLayer } = create2dCanvas();
					this.stageContext = stageContext;
					this.stageLayer = stageLayer;
					const { ctx: penContext, canvas: penLayer } = create2dCanvas();
					this.penContext = penContext;
					this.penLayer = penLayer;
				}
				onStageFiltersChanged() {
					this.renderStageCostume(this.zoom);
				}
				renderStageCostume(scale) {
					this._reset(this.stageContext, scale);
					this._drawChild(this.stage, this.stageContext);
				}
				init(root) {
					root.appendChild(this.stageLayer);
					root.appendChild(this.penLayer);
					root.appendChild(this.canvas);
				}
				drawFrame() {
					this.reset(this.zoom);
					this.drawObjects(this.stage.children);
					if (this.stage.currentCostumeIndex !== this.stageCostumeIndex) {
						this.stageCostumeIndex = this.stage.currentCostumeIndex;
						this.renderStageCostume(this.zoom);
					}
				}
				drawAllExcept(renderer, skip) {
					renderer.drawChild(this.stage);
					renderer.ctx.drawImage(this.penLayer, 0, 0, 480, 360);
					for (var i = 0; i < this.stage.children.length; i++) {
						var child = this.stage.children[i];
						if (!child.visible || child === skip) {
							continue;
						}
						renderer.drawChild(child);
					}
				}
				resize(zoom) {
					this.zoom = zoom;
					this.resizePen(zoom);
					this.renderStageCostume(this.zoom);
				}
				resizePen(zoom) {
					if (!this.penScalingEnabled) {
						return;
					}
					if (zoom > this.penZoom) {
						this.penZoom = zoom;
						workingRenderer.canvas.width = this.penLayer.width;
						workingRenderer.canvas.height = this.penLayer.height;
						workingRenderer.ctx.drawImage(this.penLayer, 0, 0);
						this._reset(this.penContext, zoom);
						this.penContext.drawImage(workingRenderer.canvas, 0, 0, 480, 360);
					} else if (!this.penModified) {
						this.penZoom = zoom;
						this._reset(this.penContext, zoom);
					} else {
						this.penTargetZoom = zoom;
					}
				}
				penClear() {
					this.penModified = false;
					if (this.penTargetZoom !== -1) {
						this._reset(this.penContext, this.penTargetZoom);
						this.penZoom = this.penTargetZoom;
						this.penTargetZoom = -1;
					}
					this.penContext.clearRect(0, 0, 480, 360);
				}
				penDot(color, size, x, y) {
					this.penModified = true;
					this.penContext.fillStyle = color.toCSS();
					this.penContext.beginPath();
					this.penContext.arc(240 + x, 180 - y, size / 2, 0, 2 * Math.PI, false);
					this.penContext.fill();
				}
				penLine(color, size, x1, y1, x2, y2) {
					this.penModified = true;
					this.penContext.lineCap = 'round';
					if (this.penZoom === 1) {
						if (size % 2 > .5 && size % 2 < 1.5) {
							x1 -= .5;
							y1 -= .5;
							x2 -= .5;
							y2 -= .5;
						}
					}
					this.penContext.strokeStyle = color.toCSS();
					this.penContext.lineWidth = size;
					this.penContext.beginPath();
					this.penContext.moveTo(240 + x1, 180 - y1);
					this.penContext.lineTo(240 + x2, 180 - y2);
					this.penContext.stroke();
				}
				penStamp(sprite) {
					this.penModified = true;
					this._drawChild(sprite, this.penContext);
				}
				spriteTouchesPoint(sprite, x, y) {
					const bounds = sprite.rotatedBounds();
					if (x < bounds.left || y < bounds.bottom || x > bounds.right || y > bounds.top || sprite.scale === 0) {
						return false;
					}
					const costume = sprite.costumes[sprite.currentCostumeIndex];
					var cx = (x - sprite.scratchX) / sprite.scale;
					var cy = (sprite.scratchY - y) / sprite.scale;
					if (sprite.rotationStyle === 0 && sprite.direction !== 90) {
						const d = (90 - sprite.direction) * Math.PI / 180;
						const ox = cx;
						const s = Math.sin(d),
							c = Math.cos(d);
						cx = c * ox - s * cy;
						cy = s * ox + c * cy;
					} else if (sprite.rotationStyle === 1 && sprite.direction < 0) {
						cx = -cx;
					}
					let positionX = Math.round(cx / costume.scale + costume.rotationCenterX);
					let positionY = Math.round(cy / costume.scale + costume.rotationCenterY);
					if (costume instanceof P.core.VectorCostume) {
						positionX *= costume.currentScale;
						positionY *= costume.currentScale;
					}
					if (!Number.isFinite(positionX) || !Number.isFinite(positionY)) {
						return false;
					}
					const data = costume.getContext().getImageData(positionX, positionY, 1, 1).data;
					return data[3] !== 0;
				}
				spritesIntersect(spriteA, otherSprites) {
					const mb = spriteA.rotatedBounds();
					for (var i = 0; i < otherSprites.length; i++) {
						const spriteB = otherSprites[i];
						if (!spriteB.visible || spriteA === spriteB) {
							continue;
						}
						const ob = spriteB.rotatedBounds();
						if (mb.bottom >= ob.top || ob.bottom >= mb.top || mb.left >= ob.right || ob.left >= mb.right) {
							continue;
						}
						const left = Math.max(mb.left, ob.left);
						const top = Math.min(mb.top, ob.top);
						const right = Math.min(mb.right, ob.right);
						const bottom = Math.max(mb.bottom, ob.bottom);
						const width = right - left;
						const height = top - bottom;
						if (width < 1 || height < 1 || width !== width || height !== height) {
							continue;
						}
						workingRenderer.canvas.width = width;
						workingRenderer.canvas.height = height;
						workingRenderer.ctx.save();
						workingRenderer.noEffects = true;
						workingRenderer.ctx.translate(-(left + 240), -(180 - top));
						workingRenderer.drawChild(spriteA);
						workingRenderer.ctx.globalCompositeOperation = 'source-in';
						workingRenderer.drawChild(spriteB);
						workingRenderer.noEffects = false;
						workingRenderer.ctx.restore();
						const data = workingRenderer.ctx.getImageData(0, 0, width, height).data;
						const length = data.length;
						for (var j = 0; j < length; j += 4) {
							if (data[j + 3]) {
								return true;
							}
						}
					}
					return false;
				}
				spriteTouchesColor(sprite, color) {
					const b = sprite.rotatedBounds();
					const width = b.right - b.left;
					const height = b.top - b.bottom;
					if (width < 1 || height < 1 || width !== width || height !== height) {
						return false;
					}
					workingRenderer.canvas.width = width;
					workingRenderer.canvas.height = height;
					workingRenderer.ctx.save();
					workingRenderer.ctx.translate(-(240 + b.left), -(180 - b.top));
					this.drawAllExcept(workingRenderer, sprite);
					workingRenderer.ctx.globalCompositeOperation = 'destination-in';
					workingRenderer.noEffects = true;
					workingRenderer.drawChild(sprite);
					workingRenderer.noEffects = false;
					workingRenderer.ctx.restore();
					const data = workingRenderer.ctx.getImageData(0, 0, b.right - b.left, b.top - b.bottom).data;
					color = color & 0xffffff;
					const length = (b.right - b.left) * (b.top - b.bottom) * 4;
					for (var i = 0; i < length; i += 4) {
						if ((data[i] << 16 | data[i + 1] << 8 | data[i + 2]) === color && data[i + 3]) {
							return true;
						}
					}
					return false;
				}
				spriteColorTouchesColor(sprite, spriteColor, otherColor) {
					var rb = sprite.rotatedBounds();
					const width = rb.right - rb.left;
					const height = rb.top - rb.bottom;
					if (width < 1 || height < 1 || width !== width || height !== height) {
						return false;
					}
					workingRenderer.canvas.width = workingRenderer2.canvas.width = width;
					workingRenderer.canvas.height = workingRenderer2.canvas.height = height;
					workingRenderer.ctx.save();
					workingRenderer2.ctx.save();
					workingRenderer.ctx.translate(-(240 + rb.left), -(180 - rb.top));
					workingRenderer2.ctx.translate(-(240 + rb.left), -(180 - rb.top));
					this.drawAllExcept(workingRenderer, sprite);
					workingRenderer2.drawChild(sprite);
					workingRenderer.ctx.restore();
					workingRenderer2.ctx.restore();
					var dataA = workingRenderer.ctx.getImageData(0, 0, width, height).data;
					var dataB = workingRenderer2.ctx.getImageData(0, 0, width, height).data;
					spriteColor = spriteColor & 0xffffff;
					otherColor = otherColor & 0xffffff;
					var length = dataA.length;
					for (var i = 0; i < length; i += 4) {
						var touchesSource = (dataB[i] << 16 | dataB[i + 1] << 8 | dataB[i + 2]) === spriteColor && dataB[i + 3];
						var touchesOther = (dataA[i] << 16 | dataA[i + 1] << 8 | dataA[i + 2]) === otherColor && dataA[i + 3];
						if (touchesSource && touchesOther) {
							return true;
						}
					}
					return false;
				}
			}
			canvas2d.ProjectRenderer2D = ProjectRenderer2D;
		})(canvas2d = renderer_1.canvas2d || (renderer_1.canvas2d = {}));
	})(renderer = P.renderer || (P.renderer = {}));
})(P || (P = {}));
var P;
(function(P) {
	var m3;
	(function(m3) {
		function multiply(out, other) {
			const a0 = out[0];
			const a1 = out[1];
			const a2 = out[2];
			const a3 = out[3];
			const a4 = out[4];
			const a5 = out[5];
			const a6 = out[6];
			const a7 = out[7];
			const a8 = out[8];
			const b0 = other[0];
			const b1 = other[1];
			const b2 = other[2];
			const b3 = other[3];
			const b4 = other[4];
			const b5 = other[5];
			const b6 = other[6];
			const b7 = other[7];
			const b8 = other[8];
			out[0] = b0 * a0 + b1 * a3 + b2 * a6;
			out[1] = b0 * a1 + b1 * a4 + b2 * a7;
			out[2] = b0 * a2 + b1 * a5 + b2 * a8;
			out[3] = b3 * a0 + b4 * a3 + b5 * a6;
			out[4] = b3 * a1 + b4 * a4 + b5 * a7;
			out[5] = b3 * a2 + b4 * a5 + b5 * a8;
			out[6] = b6 * a0 + b7 * a3 + b8 * a6;
			out[7] = b6 * a1 + b7 * a4 + b8 * a7;
			out[8] = b6 * a2 + b7 * a5 + b8 * a8;
		}
		m3.multiply = multiply;

		function translation(x, y) {
			return [
				1, 0, 0,
				0, 1, 0,
				x, y, 1,
			];
		}
		m3.translation = translation;

		function rotation(degrees) {
			const radians = degrees * Math.PI / 180;
			const cos = Math.cos(radians);
			const sin = Math.sin(radians);
			return [
				cos, -sin, 0,
				sin, cos, 0,
				0, 0, 1,
			];
		}
		m3.rotation = rotation;

		function scaling(x, y) {
			return [
				x, 0, 0,
				0, y, 0,
				0, 0, 1,
			];
		}
		m3.scaling = scaling;

		function projection(width, height) {
			return [
				2 / width, 0, 0,
				0, -2 / height, 0, -1, 1, 1,
			];
		}
		m3.projection = projection;
	})(m3 = P.m3 || (P.m3 = {}));
})(P || (P = {}));
var P;
(function(P) {
	var renderer;
	(function(renderer) {
		var webgl;
		(function(webgl) {
			function createCanvas() {
				const canvas = document.createElement('canvas');
				canvas.width = 480;
				canvas.height = 360;
				return canvas;
			}

			function filtersAffectShape(filters) {
				return filters.fisheye !== 0 ||
					filters.mosaic !== 0 ||
					filters.pixelate !== 0 ||
					filters.whirl !== 0;
			}
			const horizontalInvertMatrix = P.m3.scaling(-1, 1);
			class ShaderVariant {
				constructor(gl, program) {
					this.gl = gl;
					this.program = program;
					this.uniformLocations = {};
					this.attributeLocations = {};
					const activeUniforms = gl.getProgramParameter(program, this.gl.ACTIVE_UNIFORMS);
					for (let index = 0; index < activeUniforms; index++) {
						const info = gl.getActiveUniform(program, index);
						if (!info) {
							throw new Error('uniform at index ' + index + ' does not exist');
						}
						const name = info.name;
						const location = gl.getUniformLocation(program, name);
						if (!location) {
							throw new Error('uniform named ' + name + ' does not exist');
						}
						this.uniformLocations[name] = location;
					}
					const activeAttributes = gl.getProgramParameter(program, this.gl.ACTIVE_ATTRIBUTES);
					for (let index = 0; index < activeAttributes; index++) {
						const info = gl.getActiveAttrib(program, index);
						if (!info) {
							throw new Error('attribute at index ' + index + ' does not exist');
						}
						this.attributeLocations[info.name] = index;
					}
				}
				uniform1f(name, value) {
					const location = this.getUniform(name);
					this.gl.uniform1f(location, value);
				}
				uniform2f(name, a, b) {
					const location = this.getUniform(name);
					this.gl.uniform2f(location, a, b);
				}
				uniform4f(name, a, b, c, d) {
					const location = this.getUniform(name);
					this.gl.uniform4f(location, a, b, c, d);
				}
				uniformMatrix3(name, value) {
					const location = this.getUniform(name);
					this.gl.uniformMatrix3fv(location, false, value);
				}
				hasUniform(name) {
					return this.uniformLocations.hasOwnProperty(name);
				}
				getUniform(name) {
					if (!this.hasUniform(name)) {
						throw new Error('uniform of name ' + name + ' does not exist');
					}
					return this.uniformLocations[name];
				}
				attributeBuffer(name, value) {
					if (!this.hasAttribute(name)) {
						throw new Error('attribute of name ' + name + ' does not exist');
					}
					const location = this.attributeLocations[name];
					this.gl.enableVertexAttribArray(location);
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, value);
					this.gl.vertexAttribPointer(location, 2, this.gl.FLOAT, false, 0, 0);
				}
				hasAttribute(name) {
					return this.attributeLocations.hasOwnProperty(name);
				}
				getAttribute(name) {
					if (!this.hasAttribute(name)) {
						throw new Error('attribute of name ' + name + ' does not exist');
					}
					return this.attributeLocations[name];
				}
			}
			class WebGLSpriteRenderer {
				constructor() {
					this.globalScaleMatrix = P.m3.scaling(1, 1);
					this.boundFramebuffer = null;
					this.costumeTextures = new Map();
					this.canvas = createCanvas();
					const gl = this.canvas.getContext('webgl', {
						alpha: false,
						antialias: false,
					});
					if (!gl) {
						throw new Error('cannot get webgl rendering context');
					}
					this.gl = gl;
					this.noFiltersShader = this.compileVariant([]);
					this.allFiltersShader = this.compileVariant([
						'ENABLE_BRIGHTNESS',
						'ENABLE_COLOR',
						'ENABLE_GHOST',
						'ENABLE_FISHEYE',
						'ENABLE_MOSAIC',
						'ENABLE_PIXELATE',
					]);
					this.gl.enable(this.gl.BLEND);
					this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
					this.quadBuffer = this.gl.createBuffer();
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.quadBuffer);
					this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
						0, 0,
						0, 1,
						1, 0,
						1, 0,
						0, 1,
						1, 1,
					]), this.gl.STATIC_DRAW);
				}
				compileShader(type, source, definitions) {
					if (definitions) {
						for (const def of definitions) {
							source = '#define ' + def + '\n' + source;
						}
					}
					const shader = this.gl.createShader(type);
					if (!shader) {
						throw new Error('Cannot create shader');
					}
					this.gl.shaderSource(shader, source);
					this.gl.compileShader(shader);
					if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
						const error = this.gl.getShaderInfoLog(shader);
						this.gl.deleteShader(shader);
						throw new Error('Shader compilation error: ' + error);
					}
					return shader;
				}
				compileProgram(vs, fs, definitions) {
					const vertexShader = this.compileShader(this.gl.VERTEX_SHADER, vs, definitions);
					const fragmentShader = this.compileShader(this.gl.FRAGMENT_SHADER, fs, definitions);
					const program = this.gl.createProgram();
					if (!program) {
						throw new Error('Cannot create program');
					}
					this.gl.attachShader(program, vertexShader);
					this.gl.attachShader(program, fragmentShader);
					this.gl.linkProgram(program);
					if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
						const error = this.gl.getProgramInfoLog(program);
						this.gl.deleteProgram(program);
						throw new Error('Program compilation error: ' + error);
					}
					return program;
				}
				compileVariant(definitions) {
					const program = this.compileProgram(WebGLSpriteRenderer.vertexShader, WebGLSpriteRenderer.fragmentShader, definitions);
					return new ShaderVariant(this.gl, program);
				}
				createTexture() {
					const texture = this.gl.createTexture();
					if (!texture) {
						throw new Error('Cannot create texture');
					}
					this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
					this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
					this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
					this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
					return texture;
				}
				convertToTexture(canvas) {
					const texture = this.createTexture();
					this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, canvas);
					return texture;
				}
				createFramebuffer() {
					const frameBuffer = this.gl.createFramebuffer();
					if (!frameBuffer) {
						throw new Error('cannot create frame buffer');
					}
					return frameBuffer;
				}
				bindFramebuffer(buffer) {
					if (buffer === this.boundFramebuffer) {
						return;
					}
					this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, buffer);
					this.boundFramebuffer = buffer;
				}
				reset(scale) {
					this.canvas.width = scale * 480;
					this.canvas.height = scale * 360;
					this.resetFramebuffer(scale);
				}
				resetFramebuffer(scale) {
					this.gl.viewport(0, 0, 480, 360);
					if (this.globalScaleMatrix[0] !== scale) {
						this.globalScaleMatrix = P.m3.scaling(scale, scale);
					}
					this.gl.clearColor(255, 255, 255, 0);
					this.gl.clear(this.gl.COLOR_BUFFER_BIT);
				}
				drawChild(child) {
					this._drawChild(child, this.allFiltersShader);
				}
				_drawChild(child, shader) {
					this.gl.useProgram(shader.program);
					const costume = child.costumes[child.currentCostumeIndex];
					if (!this.costumeTextures.has(costume)) {
						const image = costume.getImage();
						const texture = this.convertToTexture(image);
						this.costumeTextures.set(costume, texture);
					}
					this.gl.bindTexture(this.gl.TEXTURE_2D, this.costumeTextures.get(costume));
					shader.attributeBuffer('a_position', this.quadBuffer);
					const matrix = P.m3.projection(this.canvas.width, this.canvas.height);
					P.m3.multiply(matrix, this.globalScaleMatrix);
					P.m3.multiply(matrix, P.m3.translation(240 + child.scratchX | 0, 180 - child.scratchY | 0));
					if (P.core.isSprite(child)) {
						if (child.rotationStyle === 0 && child.direction !== 90) {
							P.m3.multiply(matrix, P.m3.rotation(90 - child.direction));
						} else if (child.rotationStyle === 1 && child.direction < 0) {
							P.m3.multiply(matrix, horizontalInvertMatrix);
						}
						if (child.scale !== 1) {
							P.m3.multiply(matrix, P.m3.scaling(child.scale, child.scale));
						}
					}
					if (costume.scale !== 1) {
						P.m3.multiply(matrix, P.m3.scaling(costume.scale, costume.scale));
					}
					P.m3.multiply(matrix, P.m3.translation(-costume.rotationCenterX, -costume.rotationCenterY));
					P.m3.multiply(matrix, P.m3.scaling(costume.width, costume.height));
					shader.uniformMatrix3('u_matrix', matrix);
					if (shader.hasUniform('u_opacity')) {
						shader.uniform1f('u_opacity', 1 - child.filters.ghost / 100);
					}
					if (shader.hasUniform('u_brightness')) {
						shader.uniform1f('u_brightness', child.filters.brightness / 100);
					}
					if (shader.hasUniform('u_color')) {
						shader.uniform1f('u_color', child.filters.color / 200);
					}
					if (shader.hasUniform('u_mosaic')) {
						const mosaic = Math.round((Math.abs(child.filters.mosaic) + 10) / 10);
						shader.uniform1f('u_mosaic', P.utils.clamp(mosaic, 1, 512));
					}
					if (shader.hasUniform('u_whirl')) {
						shader.uniform1f('u_whirl', child.filters.whirl * Math.PI / -180);
					}
					if (shader.hasUniform('u_fisheye')) {
						shader.uniform1f('u_fisheye', Math.max(0, (child.filters.fisheye + 100) / 100));
					}
					if (shader.hasUniform('u_pixelate')) {
						shader.uniform1f('u_pixelate', Math.abs(child.filters.pixelate) / 10);
					}
					if (shader.hasUniform('u_size')) {
						shader.uniform2f('u_size', costume.width, costume.height);
					}
					this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
				}
				drawTextureOverlay(texture) {
					const shader = this.noFiltersShader;
					this.gl.useProgram(shader.program);
					this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
					shader.attributeBuffer('a_position', this.quadBuffer);
					const matrix = P.m3.projection(this.canvas.width, this.canvas.height);
					P.m3.multiply(matrix, this.globalScaleMatrix);
					P.m3.multiply(matrix, P.m3.translation(240, 180));
					P.m3.multiply(matrix, P.m3.scaling(1, -1));
					P.m3.multiply(matrix, P.m3.translation(-240, -180));
					P.m3.multiply(matrix, P.m3.scaling(480, 360));
					shader.uniformMatrix3('u_matrix', matrix);
					this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
				}
			}
			WebGLSpriteRenderer.vertexShader = `
    attribute vec2 a_position;

    uniform mat3 u_matrix;

    varying vec2 v_texcoord;

    void main() {
      gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
      v_texcoord = a_position;
    }
    `;
			WebGLSpriteRenderer.fragmentShader = `
    precision mediump float;

    varying vec2 v_texcoord;

    uniform sampler2D u_texture;

    #ifdef ENABLE_BRIGHTNESS
      uniform float u_brightness;
    #endif
    #ifdef ENABLE_COLOR
      uniform float u_color;
    #endif
    #ifdef ENABLE_GHOST
      uniform float u_opacity;
    #endif
    #ifdef ENABLE_MOSAIC
      uniform float u_mosaic;
    #endif
    #ifdef ENABLE_WHIRL
      uniform float u_whirl;
    #endif
    #ifdef ENABLE_FISHEYE
      uniform float u_fisheye;
    #endif
    #ifdef ENABLE_PIXELATE
      uniform float u_pixelate;
      uniform vec2 u_size;
    #endif

    const float minimumAlpha = 1.0 / 250.0;
    const vec2 vecCenter = vec2(0.5, 0.5);

    // http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }
    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    void main() {
      // varyings cannot be modified
      vec2 texcoord = v_texcoord;

      #ifdef ENABLE_MOSAIC
        texcoord = fract(u_mosaic * v_texcoord);
      #endif

      #ifdef ENABLE_PIXELATE
      if (u_pixelate != 0.0) {
        vec2 texelSize = u_size / u_pixelate;
        texcoord = (floor(texcoord * texelSize) + vecCenter) / texelSize;
      }
      #endif

      #ifdef ENABLE_WHIRL
      {
        const float radius = 0.5;
        vec2 offset = texcoord - vecCenter;
        float offsetMagnitude = length(offset);
        float whirlFactor = max(1.0 - (offsetMagnitude / radius), 0.0);
        float whirlActual = u_whirl * whirlFactor * whirlFactor;
        float sinWhirl = sin(whirlActual);
        float cosWhirl = cos(whirlActual);
        mat2 rotationMatrix = mat2(
          cosWhirl, -sinWhirl,
          sinWhirl, cosWhirl
        );
        texcoord = rotationMatrix * offset + vecCenter;
      }
      #endif

      #ifdef ENABLE_FISHEYE
      {
        vec2 vec = (texcoord - vecCenter) / vecCenter;
        float vecLength = length(vec);
        float r = pow(min(vecLength, 1.0), u_fisheye) * max(1.0, vecLength);
        vec2 unit = vec / vecLength;
        texcoord = vecCenter + r * unit * vecCenter;
      }
      #endif

      vec4 color = texture2D(u_texture, texcoord);
      if (color.a < minimumAlpha) {
        discard;
      }

      #ifdef ENABLE_GHOST
        color.a *= u_opacity;
      #endif

      #ifdef ENABLE_COLOR
      if (u_color != 0.0) {
        vec3 hsv = rgb2hsv(color.rgb);
        // hsv.x = hue
        // hsv.y = saturation
        // hsv.z = value

        // scratch forces all colors to have some minimal amount saturation so there is a visual change
        const float minValue = 0.11 / 2.0;
        const float minSaturation = 0.09;
        if (hsv.z < minValue) hsv = vec3(0.0, 1.0, minValue);
        else if (hsv.y < minSaturation) hsv = vec3(0.0, minSaturation, hsv.z);

        hsv.x = mod(hsv.x + u_color, 1.0);
        if (hsv.x < 0.0) hsv.x += 1.0;
        color = vec4(hsv2rgb(hsv), color.a);
      }
      #endif

      #ifdef ENABLE_BRIGHTNESS
        color.rgb = clamp(color.rgb + vec3(u_brightness), 0.0, 1.0);
      #endif

      gl_FragColor = color;
    }
    `;
			webgl.WebGLSpriteRenderer = WebGLSpriteRenderer;
			class WebGLProjectRenderer extends WebGLSpriteRenderer {
				constructor(stage) {
					super();
					this.stage = stage;
					this.zoom = 1;
					this.shaderOnlyShapeFilters = this.compileVariant(['ONLY_SHAPE_FILTERS']);
					this.fallbackRenderer = new P.renderer.canvas2d.ProjectRenderer2D(stage);
					this.penTexture = this.createTexture();
					this.penBuffer = this.createFramebuffer();
					this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, 480, 360, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
					this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.penBuffer);
					this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.penTexture, 0);
					this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
					this.penDotShader = new ShaderVariant(this.gl, this.compileProgram(WebGLProjectRenderer.PEN_DOT_VERTEX_SHADER, WebGLProjectRenderer.PEN_DOT_FRAGMENT_SHADER));
					this.penLineShader = new ShaderVariant(this.gl, this.compileProgram(WebGLProjectRenderer.PEN_LINE_VERTEX_SHADER, WebGLProjectRenderer.PEN_LINE_FRAGMENT_SHADER));
					this.reset(1);
				}
				drawFrame() {
					this.bindFramebuffer(null);
					this.reset(this.zoom);
					this.drawChild(this.stage);
					this.drawTextureOverlay(this.penTexture);
					for (var i = 0; i < this.stage.children.length; i++) {
						var child = this.stage.children[i];
						if (!child.visible) {
							continue;
						}
						this.drawChild(child);
					}
				}
				init(root) {
					root.appendChild(this.canvas);
				}
				onStageFiltersChanged() {}
				penLine(color, size, x, y, x2, y2) {
					this.bindFramebuffer(this.penBuffer);
					const shader = this.penLineShader;
					this.gl.useProgram(shader.program);
					const buffer = this.gl.createBuffer();
					if (buffer === null) {
						throw new Error('buffer is null');
					}
					this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
					this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
						x / 240, y / 180,
						x2 / 240, y2 / 180,
					]), this.gl.STATIC_DRAW);
					shader.attributeBuffer('a_position', buffer);
					const parts = color.toParts();
					shader.uniform4f('u_color', parts[0], parts[1], parts[2], parts[3]);
					this.gl.drawArrays(this.gl.LINES, 0, 2);
					this.gl.deleteBuffer(buffer);
				}
				penDot(color, size, x, y) {
					this.bindFramebuffer(this.penBuffer);
					const shader = this.penDotShader;
					this.gl.useProgram(shader.program);
					shader.attributeBuffer('a_position', this.quadBuffer);
					const matrix = P.m3.projection(this.canvas.width, this.canvas.height);
					P.m3.multiply(matrix, P.m3.translation(240 + x - size / 2 | 0, 180 - y - size / 2 | 0));
					P.m3.multiply(matrix, P.m3.scaling(size, size));
					shader.uniformMatrix3('u_matrix', matrix);
					const parts = color.toParts();
					shader.uniform4f('u_color', parts[0], parts[1], parts[2], parts[3]);
					this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
				}
				penStamp(sprite) {
					this.bindFramebuffer(this.penBuffer);
					this.drawChild(sprite);
				}
				penClear() {
					this.bindFramebuffer(this.penBuffer);
					this.gl.clearColor(255, 255, 255, 0);
					this.gl.clear(this.gl.COLOR_BUFFER_BIT);
				}
				resize(scale) {
					this.zoom = scale;
				}
				spriteTouchesPoint(sprite, x, y) {
					if (!filtersAffectShape(sprite.filters)) {
						return this.fallbackRenderer.spriteTouchesPoint(sprite, x, y);
					}
					const texture = this.createTexture();
					const framebuffer = this.createFramebuffer();
					this.bindFramebuffer(framebuffer);
					this.resetFramebuffer(1);
					this._drawChild(sprite, this.shaderOnlyShapeFilters);
					const result = new Uint8Array(4);
					this.gl.readPixels(240 + x | 0, 180 + y | 0, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, result);
					this.gl.deleteTexture(texture);
					this.gl.deleteFramebuffer(framebuffer);
					return result[3] !== 0;
				}
				spritesIntersect(spriteA, otherSprites) {
					return this.fallbackRenderer.spritesIntersect(spriteA, otherSprites);
				}
				spriteTouchesColor(sprite, color) {
					return this.fallbackRenderer.spriteTouchesColor(sprite, color);
				}
				spriteColorTouchesColor(sprite, spriteColor, otherColor) {
					return this.fallbackRenderer.spriteColorTouchesColor(sprite, spriteColor, otherColor);
				}
			}
			WebGLProjectRenderer.PEN_DOT_VERTEX_SHADER = `
    attribute vec2 a_position;
    varying vec2 v_position;
    uniform mat3 u_matrix;
    void main() {
      gl_Position = vec4((u_matrix * vec3(a_position, 1)).xy, 0, 1);
      v_position = a_position;
    }
    `;
			WebGLProjectRenderer.PEN_DOT_FRAGMENT_SHADER = `
    precision mediump float;
    uniform vec4 u_color;
    varying vec2 v_position;
    void main() {
      float x = (v_position.x - 0.5) * 2.0;
      float y = (v_position.y - 0.5) * 2.0;
      if (sqrt(x * x + y * y) >= 1.0) {
        discard;
      }
      gl_FragColor = u_color;
    }
    `;
			WebGLProjectRenderer.PEN_LINE_VERTEX_SHADER = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0, 1);
    }
    `;
			WebGLProjectRenderer.PEN_LINE_FRAGMENT_SHADER = `
    precision mediump float;
    uniform vec4 u_color;
    void main() {
      gl_FragColor = u_color;
    }
    `;
			webgl.WebGLProjectRenderer = WebGLProjectRenderer;
		})(webgl = renderer.webgl || (renderer.webgl = {}));
	})(renderer = P.renderer || (P.renderer = {}));
})(P || (P = {}));
//# sourceMappingURL=phosphorus.dist.js.map

// NW.js hook...
(function() {
	if (typeof nw !== 'undefined') {
		// open links in the browser
		var win = nw.Window.get();
		win.on('new-win-policy', (frame, url, policy) => {
			policy.ignore();
			nw.Shell.openExternal(url);
		});
		// fix the size of the window made by NW.js
		var package = nw.require('package.json');
		if (package.window && package.window.height && package.window.width) {
			win.resizeBy(package.window.width - window.innerWidth, package.window.height - window.innerHeight);
		}
	}
})();

// Player scripts...
(function() {
	'use strict';

	var splash = document.querySelector('.splash');
	var error = document.querySelector('.error');
	var progressBar = document.querySelector('.progress');
	var progressBarFill = document.querySelector('.progress-bar');

	var splash = document.querySelector('.splash');
	var error = document.querySelector('.error');
	var progressBar = document.querySelector('.progress');
	var progressBarFill = document.querySelector('.progress-bar');

	var player = new P.player.Player();
	player.setOptions({ theme: 'dark' });
	var errorHandler = new P.player.ErrorHandler(player, {
		container: document.querySelector('.error-report'),
	});
	player.onprogress.subscribe(function(progress) {
		progressBarFill.style.width = (10 + progress * 90) + '%';
	});
	player.onerror.subscribe(function(e) {
		player.exitFullscreen();
		error.style.display = 'table';
	});
	document.querySelector('.player').appendChild(player.root);

	document.addEventListener('touchmove', function(e) {
		e.preventDefault();
	});

	P.io.setAssetManager(new class {
		constructor() {
			// Assets...
		}

		loadSoundbankFile(src) {
			return this.fetch('soundbank/' + src).then(function(e) { return e.arrayBuffer(); });
		}

		loadFont(src) {
			return this.fetch(src).then(function(e) { return e.blob(); });
		}

		fetch(u) {
			return fetch(this.data[u]);
		}
	});

	// Project type...
	var type = 'sb3';
	// Project data...

	// Player options...
	var playerOptions = { "fullscreenPadding": 0, "fullscreenMode": "window", "turbo": false, "autoplayPolicy": "always", "username": "", "fps": 60 };
	// Controls options...
	var controlsOptions = null;

	player.setOptions(playerOptions);
	if (controlsOptions) {
		player.addControls(controlsOptions);
	}

	fetch(project)
		.then(function(request) { return request.arrayBuffer(); })
		.then(function(buffer) { return player.loadProjectFromBuffer(buffer, type); })
		.then(function() {
			player.enterFullscreen();
			splash.style.display = 'none';
		})
		.catch(function(e) {
			player.handleError(e);
		});
}());