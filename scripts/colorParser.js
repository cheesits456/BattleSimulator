(function (global) {
	function RGBColor(color_string) {
		this.ok = false;

		// strip any leading #
		if (color_string.charAt(0) == "#") {
			// remove # if any
			color_string = color_string.substr(1, 6);
		}

		color_string = color_string.replace(/ /g, "");
		color_string = color_string.toLowerCase();

		// before getting into regexps, try simple matches
		// and overwrite the input
		var simple_colors = {
			aliceblue: "f0f8ff",
			antiquewhite: "faebd7",
			aqua: "00ffff",
			aquamarine: "7fffd4",
			azure: "f0ffff",
			beige: "f5f5dc",
			bisque: "ffe4c4",
			black: "000000",
			blanchedalmond: "ffebcd",
			blue: "0000ff",
			blueviolet: "8a2be2",
			brown: "a52a2a",
			burlywood: "deb887",
			cadetblue: "5f9ea0",
			chartreuse: "7fff00",
			chocolate: "d2691e",
			coral: "ff7f50",
			cornflowerblue: "6495ed",
			cornsilk: "fff8dc",
			crimson: "dc143c",
			cyan: "00ffff",
			darkblue: "00008b",
			darkcyan: "008b8b",
			darkgoldenrod: "b8860b",
			darkgray: "a9a9a9",
			darkgreen: "006400",
			darkkhaki: "bdb76b",
			darkmagenta: "8b008b",
			darkolivegreen: "556b2f",
			darkorange: "ff8c00",
			darkorchid: "9932cc",
			darkred: "8b0000",
			darksalmon: "e9967a",
			darkseagreen: "8fbc8f",
			darkslateblue: "483d8b",
			darkslategray: "2f4f4f",
			darkturquoise: "00ced1",
			darkviolet: "9400d3",
			deeppink: "ff1493",
			deepskyblue: "00bfff",
			dimgray: "696969",
			dodgerblue: "1e90ff",
			feldspar: "d19275",
			firebrick: "b22222",
			floralwhite: "fffaf0",
			forestgreen: "228b22",
			fuchsia: "ff00ff",
			gainsboro: "dcdcdc",
			ghostwhite: "f8f8ff",
			gold: "ffd700",
			goldenrod: "daa520",
			gray: "808080",
			green: "008000",
			greenyellow: "adff2f",
			honeydew: "f0fff0",
			hotpink: "ff69b4",
			indianred: "cd5c5c",
			indigo: "4b0082",
			ivory: "fffff0",
			khaki: "f0e68c",
			lavender: "e6e6fa",
			lavenderblush: "fff0f5",
			lawngreen: "7cfc00",
			lemonchiffon: "fffacd",
			lightblue: "add8e6",
			lightcoral: "f08080",
			lightcyan: "e0ffff",
			lightgoldenrodyellow: "fafad2",
			lightgrey: "d3d3d3",
			lightgreen: "90ee90",
			lightpink: "ffb6c1",
			lightsalmon: "ffa07a",
			lightseagreen: "20b2aa",
			lightskyblue: "87cefa",
			lightslateblue: "8470ff",
			lightslategray: "778899",
			lightsteelblue: "b0c4de",
			lightyellow: "ffffe0",
			lime: "00ff00",
			limegreen: "32cd32",
			linen: "faf0e6",
			magenta: "ff00ff",
			maroon: "800000",
			mediumaquamarine: "66cdaa",
			mediumblue: "0000cd",
			mediumorchid: "ba55d3",
			mediumpurple: "9370d8",
			mediumseagreen: "3cb371",
			mediumslateblue: "7b68ee",
			mediumspringgreen: "00fa9a",
			mediumturquoise: "48d1cc",
			mediumvioletred: "c71585",
			midnightblue: "191970",
			mintcream: "f5fffa",
			mistyrose: "ffe4e1",
			moccasin: "ffe4b5",
			navajowhite: "ffdead",
			navy: "000080",
			oldlace: "fdf5e6",
			olive: "808000",
			olivedrab: "6b8e23",
			orange: "ffa500",
			orangered: "ff4500",
			orchid: "da70d6",
			palegoldenrod: "eee8aa",
			palegreen: "98fb98",
			paleturquoise: "afeeee",
			palevioletred: "d87093",
			papayawhip: "ffefd5",
			peachpuff: "ffdab9",
			peru: "cd853f",
			pink: "ffc0cb",
			plum: "dda0dd",
			powderblue: "b0e0e6",
			purple: "800080",
			red: "ff0000",
			rosybrown: "bc8f8f",
			royalblue: "4169e1",
			saddlebrown: "8b4513",
			salmon: "fa8072",
			sandybrown: "f4a460",
			seagreen: "2e8b57",
			seashell: "fff5ee",
			sienna: "a0522d",
			silver: "c0c0c0",
			skyblue: "87ceeb",
			slateblue: "6a5acd",
			slategray: "708090",
			snow: "fffafa",
			springgreen: "00ff7f",
			steelblue: "4682b4",
			tan: "d2b48c",
			teal: "008080",
			thistle: "d8bfd8",
			tomato: "ff6347",
			turquoise: "40e0d0",
			violet: "ee82ee",
			violetred: "d02090",
			wheat: "f5deb3",
			white: "ffffff",
			whitesmoke: "f5f5f5",
			yellow: "ffff00",
			yellowgreen: "9acd32"
		};
		for (var key in simple_colors) {
			if (color_string == key) {
				color_string = simple_colors[key];
			}
		}
		// emd of simple type-in colors

		// array of color definition objects
		var color_defs = [
			{
				re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
				example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
				process: function (bits) {
					return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3])];
				}
			},
			{
				re: /^(\w{2})(\w{2})(\w{2})$/,
				example: ["#00ff00", "336699"],
				process: function (bits) {
					return [parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16)];
				}
			},
			{
				re: /^(\w{1})(\w{1})(\w{1})$/,
				example: ["#fb0", "f0f"],
				process: function (bits) {
					return [
						parseInt(bits[1] + bits[1], 16),
						parseInt(bits[2] + bits[2], 16),
						parseInt(bits[3] + bits[3], 16)
					];
				}
			}
		];

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
		this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
		this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
		this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;

		// some getters
		this.toRGB = function () {
			return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
		};
		this.toHex = function () {
			var r = this.r.toString(16);
			var g = this.g.toString(16);
			var b = this.b.toString(16);
			if (r.length == 1) r = "0" + r;
			if (g.length == 1) g = "0" + g;
			if (b.length == 1) b = "0" + b;
			return "#" + r + g + b;
		};

		// help
		this.getHelpXML = function () {
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

			var xml = document.createElement("ul");
			xml.setAttribute("id", "rgbcolor-examples");
			for (var i = 0; i < examples.length; i++) {
				try {
					var list_item = document.createElement("li");
					var list_color = new RGBColor(examples[i]);
					var example_div = document.createElement("div");
					example_div.style.cssText =
						"margin: 3px; " +
						"border: 1px solid black; " +
						"background:" +
						list_color.toHex() +
						"; " +
						"color:" +
						list_color.toHex();
					example_div.appendChild(document.createTextNode("test"));
					var list_item_value = document.createTextNode(
						" " + examples[i] + " -> " + list_color.toRGB() + " -> " + list_color.toHex()
					);
					list_item.appendChild(example_div);
					list_item.appendChild(list_item_value);
					xml.appendChild(list_item);
				} catch (e) {}
			}
			return xml;
		};
	}

	// export as AMD...
	if (typeof define !== "undefined" && define.amd) {
		define(function () {
			return RGBColor;
		});
	}

	// ...or as browserify
	else if (typeof module !== "undefined" && module.exports) {
		module.exports = RGBColor;
	}

	global.RGBColor = RGBColor;
})(typeof window !== "undefined" ? window : this);

!(function (a) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
	else if ("function" == typeof define && define.amd) define([], a);
	else {
		var b;
		(b =
			"undefined" != typeof window
				? window
				: "undefined" != typeof global
				? global
				: "undefined" != typeof self
				? self
				: this),
			(b.StackBlur = a());
	}
})(function () {
	return (function a(b, c, d) {
		function e(g, h) {
			if (!c[g]) {
				if (!b[g]) {
					var i = "function" == typeof require && require;
					if (!h && i) return i(g, !0);
					if (f) return f(g, !0);
					var j = new Error("Cannot find module '" + g + "'");
					throw ((j.code = "MODULE_NOT_FOUND"), j);
				}
				var k = (c[g] = { exports: {} });
				b[g][0].call(
					k.exports,
					function (a) {
						var c = b[g][1][a];
						return e(c ? c : a);
					},
					k,
					k.exports,
					a,
					b,
					c,
					d
				);
			}
			return c[g].exports;
		}
		for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
		return e;
	})(
		{
			1: [
				function (a, b, c) {
					function d(a, b, c, d) {
						if ("string" == typeof a) var a = document.getElementById(a);
						else if ("undefined" != typeof HTMLImageElement && !a instanceof HTMLImageElement) return;
						var e = a.naturalWidth,
							g = a.naturalHeight;
						if ("string" == typeof b) var b = document.getElementById(b);
						else if ("undefined" != typeof HTMLCanvasElement && !b instanceof HTMLCanvasElement) return;
						(b.style.width = e + "px"), (b.style.height = g + "px"), (b.width = e), (b.height = g);
						var i = b.getContext("2d");
						i.clearRect(0, 0, e, g),
							i.drawImage(a, 0, 0),
							isNaN(c) || c < 1 || (d ? f(b, 0, 0, e, g, c) : h(b, 0, 0, e, g, c));
					}

					function e(a, b, c, d, e) {
						if ("string" == typeof a) var a = document.getElementById(a);
						else if ("undefined" != typeof HTMLCanvasElement && !a instanceof HTMLCanvasElement) return;
						var f,
							g = a.getContext("2d");
						try {
							try {
								f = g.getImageData(b, c, d, e);
							} catch (h) {
								throw new Error("unable to access local image data: " + h);
							}
						} catch (h) {
							throw new Error("unable to access image data: " + h);
						}
						return f;
					}

					function f(a, b, c, d, f, h) {
						if (!(isNaN(h) || h < 1)) {
							h |= 0;
							var i = e(a, b, c, d, f);
							(i = g(i, b, c, d, f, h)), a.getContext("2d").putImageData(i, b, c);
						}
					}

					function g(a, b, c, d, e, f) {
						var g,
							h,
							i,
							m,
							n,
							o,
							p,
							q,
							r,
							s,
							t,
							u,
							v,
							w,
							x,
							y,
							z,
							A,
							B,
							C,
							D,
							E,
							F,
							G,
							H = a.data,
							I = f + f + 1,
							J = d - 1,
							K = e - 1,
							L = f + 1,
							M = (L * (L + 1)) / 2,
							N = new j(),
							O = N;
						for (i = 1; i < I; i++) if (((O = O.next = new j()), i == L)) var P = O;
						O.next = N;
						var Q = null,
							R = null;
						p = o = 0;
						var S = k[f],
							T = l[f];
						for (h = 0; h < e; h++) {
							for (
								y = z = A = B = q = r = s = t = 0,
									u = L * (C = H[o]),
									v = L * (D = H[o + 1]),
									w = L * (E = H[o + 2]),
									x = L * (F = H[o + 3]),
									q += M * C,
									r += M * D,
									s += M * E,
									t += M * F,
									O = N,
									i = 0;
								i < L;
								i++
							)
								(O.r = C), (O.g = D), (O.b = E), (O.a = F), (O = O.next);
							for (i = 1; i < L; i++)
								(m = o + ((J < i ? J : i) << 2)),
									(q += (O.r = C = H[m]) * (G = L - i)),
									(r += (O.g = D = H[m + 1]) * G),
									(s += (O.b = E = H[m + 2]) * G),
									(t += (O.a = F = H[m + 3]) * G),
									(y += C),
									(z += D),
									(A += E),
									(B += F),
									(O = O.next);
							for (Q = N, R = P, g = 0; g < d; g++)
								(H[o + 3] = F = (t * S) >> T),
									0 != F
										? ((F = 255 / F),
										  (H[o] = ((q * S) >> T) * F),
										  (H[o + 1] = ((r * S) >> T) * F),
										  (H[o + 2] = ((s * S) >> T) * F))
										: (H[o] = H[o + 1] = H[o + 2] = 0),
									(q -= u),
									(r -= v),
									(s -= w),
									(t -= x),
									(u -= Q.r),
									(v -= Q.g),
									(w -= Q.b),
									(x -= Q.a),
									(m = (p + ((m = g + f + 1) < J ? m : J)) << 2),
									(y += Q.r = H[m]),
									(z += Q.g = H[m + 1]),
									(A += Q.b = H[m + 2]),
									(B += Q.a = H[m + 3]),
									(q += y),
									(r += z),
									(s += A),
									(t += B),
									(Q = Q.next),
									(u += C = R.r),
									(v += D = R.g),
									(w += E = R.b),
									(x += F = R.a),
									(y -= C),
									(z -= D),
									(A -= E),
									(B -= F),
									(R = R.next),
									(o += 4);
							p += d;
						}
						for (g = 0; g < d; g++) {
							for (
								z = A = B = y = r = s = t = q = 0,
									o = g << 2,
									u = L * (C = H[o]),
									v = L * (D = H[o + 1]),
									w = L * (E = H[o + 2]),
									x = L * (F = H[o + 3]),
									q += M * C,
									r += M * D,
									s += M * E,
									t += M * F,
									O = N,
									i = 0;
								i < L;
								i++
							)
								(O.r = C), (O.g = D), (O.b = E), (O.a = F), (O = O.next);
							for (n = d, i = 1; i <= f; i++)
								(o = (n + g) << 2),
									(q += (O.r = C = H[o]) * (G = L - i)),
									(r += (O.g = D = H[o + 1]) * G),
									(s += (O.b = E = H[o + 2]) * G),
									(t += (O.a = F = H[o + 3]) * G),
									(y += C),
									(z += D),
									(A += E),
									(B += F),
									(O = O.next),
									i < K && (n += d);
							for (o = g, Q = N, R = P, h = 0; h < e; h++)
								(m = o << 2),
									(H[m + 3] = F = (t * S) >> T),
									F > 0
										? ((F = 255 / F),
										  (H[m] = ((q * S) >> T) * F),
										  (H[m + 1] = ((r * S) >> T) * F),
										  (H[m + 2] = ((s * S) >> T) * F))
										: (H[m] = H[m + 1] = H[m + 2] = 0),
									(q -= u),
									(r -= v),
									(s -= w),
									(t -= x),
									(u -= Q.r),
									(v -= Q.g),
									(w -= Q.b),
									(x -= Q.a),
									(m = (g + ((m = h + L) < K ? m : K) * d) << 2),
									(q += y += Q.r = H[m]),
									(r += z += Q.g = H[m + 1]),
									(s += A += Q.b = H[m + 2]),
									(t += B += Q.a = H[m + 3]),
									(Q = Q.next),
									(u += C = R.r),
									(v += D = R.g),
									(w += E = R.b),
									(x += F = R.a),
									(y -= C),
									(z -= D),
									(A -= E),
									(B -= F),
									(R = R.next),
									(o += d);
						}
						return a;
					}

					function h(a, b, c, d, f, g) {
						if (!(isNaN(g) || g < 1)) {
							g |= 0;
							var h = e(a, b, c, d, f);
							(h = i(h, b, c, d, f, g)), a.getContext("2d").putImageData(h, b, c);
						}
					}

					function i(a, b, c, d, e, f) {
						var g,
							h,
							i,
							m,
							n,
							o,
							p,
							q,
							r,
							s,
							t,
							u,
							v,
							w,
							x,
							y,
							z,
							A,
							B,
							C,
							D = a.data,
							E = f + f + 1,
							F = d - 1,
							G = e - 1,
							H = f + 1,
							I = (H * (H + 1)) / 2,
							J = new j(),
							K = J;
						for (i = 1; i < E; i++) if (((K = K.next = new j()), i == H)) var L = K;
						K.next = J;
						var M = null,
							N = null;
						p = o = 0;
						var O = k[f],
							P = l[f];
						for (h = 0; h < e; h++) {
							for (
								w = x = y = q = r = s = 0,
									t = H * (z = D[o]),
									u = H * (A = D[o + 1]),
									v = H * (B = D[o + 2]),
									q += I * z,
									r += I * A,
									s += I * B,
									K = J,
									i = 0;
								i < H;
								i++
							)
								(K.r = z), (K.g = A), (K.b = B), (K = K.next);
							for (i = 1; i < H; i++)
								(m = o + ((F < i ? F : i) << 2)),
									(q += (K.r = z = D[m]) * (C = H - i)),
									(r += (K.g = A = D[m + 1]) * C),
									(s += (K.b = B = D[m + 2]) * C),
									(w += z),
									(x += A),
									(y += B),
									(K = K.next);
							for (M = J, N = L, g = 0; g < d; g++)
								(D[o] = (q * O) >> P),
									(D[o + 1] = (r * O) >> P),
									(D[o + 2] = (s * O) >> P),
									(q -= t),
									(r -= u),
									(s -= v),
									(t -= M.r),
									(u -= M.g),
									(v -= M.b),
									(m = (p + ((m = g + f + 1) < F ? m : F)) << 2),
									(w += M.r = D[m]),
									(x += M.g = D[m + 1]),
									(y += M.b = D[m + 2]),
									(q += w),
									(r += x),
									(s += y),
									(M = M.next),
									(t += z = N.r),
									(u += A = N.g),
									(v += B = N.b),
									(w -= z),
									(x -= A),
									(y -= B),
									(N = N.next),
									(o += 4);
							p += d;
						}
						for (g = 0; g < d; g++) {
							for (
								x = y = w = r = s = q = 0,
									o = g << 2,
									t = H * (z = D[o]),
									u = H * (A = D[o + 1]),
									v = H * (B = D[o + 2]),
									q += I * z,
									r += I * A,
									s += I * B,
									K = J,
									i = 0;
								i < H;
								i++
							)
								(K.r = z), (K.g = A), (K.b = B), (K = K.next);
							for (n = d, i = 1; i <= f; i++)
								(o = (n + g) << 2),
									(q += (K.r = z = D[o]) * (C = H - i)),
									(r += (K.g = A = D[o + 1]) * C),
									(s += (K.b = B = D[o + 2]) * C),
									(w += z),
									(x += A),
									(y += B),
									(K = K.next),
									i < G && (n += d);
							for (o = g, M = J, N = L, h = 0; h < e; h++)
								(m = o << 2),
									(D[m] = (q * O) >> P),
									(D[m + 1] = (r * O) >> P),
									(D[m + 2] = (s * O) >> P),
									(q -= t),
									(r -= u),
									(s -= v),
									(t -= M.r),
									(u -= M.g),
									(v -= M.b),
									(m = (g + ((m = h + H) < G ? m : G) * d) << 2),
									(q += w += M.r = D[m]),
									(r += x += M.g = D[m + 1]),
									(s += y += M.b = D[m + 2]),
									(M = M.next),
									(t += z = N.r),
									(u += A = N.g),
									(v += B = N.b),
									(w -= z),
									(x -= A),
									(y -= B),
									(N = N.next),
									(o += d);
						}
						return a;
					}

					function j() {
						(this.r = 0), (this.g = 0), (this.b = 0), (this.a = 0), (this.next = null);
					}
					var k = [
							512,
							512,
							456,
							512,
							328,
							456,
							335,
							512,
							405,
							328,
							271,
							456,
							388,
							335,
							292,
							512,
							454,
							405,
							364,
							328,
							298,
							271,
							496,
							456,
							420,
							388,
							360,
							335,
							312,
							292,
							273,
							512,
							482,
							454,
							428,
							405,
							383,
							364,
							345,
							328,
							312,
							298,
							284,
							271,
							259,
							496,
							475,
							456,
							437,
							420,
							404,
							388,
							374,
							360,
							347,
							335,
							323,
							312,
							302,
							292,
							282,
							273,
							265,
							512,
							497,
							482,
							468,
							454,
							441,
							428,
							417,
							405,
							394,
							383,
							373,
							364,
							354,
							345,
							337,
							328,
							320,
							312,
							305,
							298,
							291,
							284,
							278,
							271,
							265,
							259,
							507,
							496,
							485,
							475,
							465,
							456,
							446,
							437,
							428,
							420,
							412,
							404,
							396,
							388,
							381,
							374,
							367,
							360,
							354,
							347,
							341,
							335,
							329,
							323,
							318,
							312,
							307,
							302,
							297,
							292,
							287,
							282,
							278,
							273,
							269,
							265,
							261,
							512,
							505,
							497,
							489,
							482,
							475,
							468,
							461,
							454,
							447,
							441,
							435,
							428,
							422,
							417,
							411,
							405,
							399,
							394,
							389,
							383,
							378,
							373,
							368,
							364,
							359,
							354,
							350,
							345,
							341,
							337,
							332,
							328,
							324,
							320,
							316,
							312,
							309,
							305,
							301,
							298,
							294,
							291,
							287,
							284,
							281,
							278,
							274,
							271,
							268,
							265,
							262,
							259,
							257,
							507,
							501,
							496,
							491,
							485,
							480,
							475,
							470,
							465,
							460,
							456,
							451,
							446,
							442,
							437,
							433,
							428,
							424,
							420,
							416,
							412,
							408,
							404,
							400,
							396,
							392,
							388,
							385,
							381,
							377,
							374,
							370,
							367,
							363,
							360,
							357,
							354,
							350,
							347,
							344,
							341,
							338,
							335,
							332,
							329,
							326,
							323,
							320,
							318,
							315,
							312,
							310,
							307,
							304,
							302,
							299,
							297,
							294,
							292,
							289,
							287,
							285,
							282,
							280,
							278,
							275,
							273,
							271,
							269,
							267,
							265,
							263,
							261,
							259
						],
						l = [
							9,
							11,
							12,
							13,
							13,
							14,
							14,
							15,
							15,
							15,
							15,
							16,
							16,
							16,
							16,
							17,
							17,
							17,
							17,
							17,
							17,
							17,
							18,
							18,
							18,
							18,
							18,
							18,
							18,
							18,
							18,
							19,
							19,
							19,
							19,
							19,
							19,
							19,
							19,
							19,
							19,
							19,
							19,
							19,
							19,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							20,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							21,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							22,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							23,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24,
							24
						];
					b.exports = {
						image: d,
						canvasRGBA: f,
						canvasRGB: h,
						imageDataRGBA: g,
						imageDataRGB: i
					};
				},
				{}
			]
		},
		{},
		[1]
	)(1);
});
("use strict");
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}

			function rejected(value) {
				try {
					step(generator["throw"](value));
				} catch (e) {
					reject(e);
				}
			}

			function step(result) {
				result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
