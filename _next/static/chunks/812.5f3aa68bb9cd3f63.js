(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [812],
  {
    5714: (e) => {
      !(function () {
        var t = {
            675: function (e, t) {
              "use strict";
              (t.byteLength = function (e) {
                var t = A(e),
                  i = t[0],
                  r = t[1];
                return ((i + r) * 3) / 4 - r;
              }),
                (t.toByteArray = function (e) {
                  var t,
                    i,
                    n = A(e),
                    a = n[0],
                    o = n[1],
                    l = new s(((a + o) * 3) / 4 - o),
                    h = 0,
                    c = o > 0 ? a - 4 : a;
                  for (i = 0; i < c; i += 4)
                    (t =
                      (r[e.charCodeAt(i)] << 18) |
                      (r[e.charCodeAt(i + 1)] << 12) |
                      (r[e.charCodeAt(i + 2)] << 6) |
                      r[e.charCodeAt(i + 3)]),
                      (l[h++] = (t >> 16) & 255),
                      (l[h++] = (t >> 8) & 255),
                      (l[h++] = 255 & t);
                  return (
                    2 === o &&
                      ((t =
                        (r[e.charCodeAt(i)] << 2) |
                        (r[e.charCodeAt(i + 1)] >> 4)),
                      (l[h++] = 255 & t)),
                    1 === o &&
                      ((t =
                        (r[e.charCodeAt(i)] << 10) |
                        (r[e.charCodeAt(i + 1)] << 4) |
                        (r[e.charCodeAt(i + 2)] >> 2)),
                      (l[h++] = (t >> 8) & 255),
                      (l[h++] = 255 & t)),
                    l
                  );
                }),
                (t.fromByteArray = function (e) {
                  for (
                    var t, r = e.length, s = r % 3, n = [], a = 0, o = r - s;
                    a < o;
                    a += 16383
                  )
                    n.push(
                      (function (e, t, r) {
                        for (var s, n = [], a = t; a < r; a += 3)
                          n.push(
                            i[
                              ((s =
                                ((e[a] << 16) & 0xff0000) +
                                ((e[a + 1] << 8) & 65280) +
                                (255 & e[a + 2])) >>
                                18) &
                                63
                            ] +
                              i[(s >> 12) & 63] +
                              i[(s >> 6) & 63] +
                              i[63 & s]
                          );
                        return n.join("");
                      })(e, a, a + 16383 > o ? o : a + 16383)
                    );
                  return (
                    1 === s
                      ? n.push(i[(t = e[r - 1]) >> 2] + i[(t << 4) & 63] + "==")
                      : 2 === s &&
                        n.push(
                          i[(t = (e[r - 2] << 8) + e[r - 1]) >> 10] +
                            i[(t >> 4) & 63] +
                            i[(t << 2) & 63] +
                            "="
                        ),
                    n.join("")
                  );
                });
              for (
                var i = [],
                  r = [],
                  s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  n =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  a = 0,
                  o = n.length;
                a < o;
                ++a
              )
                (i[a] = n[a]), (r[n.charCodeAt(a)] = a);
              function A(e) {
                var t = e.length;
                if (t % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var i = e.indexOf("=");
                -1 === i && (i = t);
                var r = i === t ? 0 : 4 - (i % 4);
                return [i, r];
              }
              (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
            },
            72: function (e, t, i) {
              "use strict";
              var r = i(675),
                s = i(783),
                n =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              function a(e) {
                if (e > 0x7fffffff)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, o.prototype), t;
              }
              function o(e, t, i) {
                if ("number" == typeof e) {
                  if ("string" == typeof t)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return h(e);
                }
                return A(e, t, i);
              }
              function A(e, t, i) {
                if ("string" == typeof e)
                  return (function (e, t) {
                    if (
                      (("string" != typeof t || "" === t) && (t = "utf8"),
                      !o.isEncoding(t))
                    )
                      throw TypeError("Unknown encoding: " + t);
                    var i = 0 | g(e, t),
                      r = a(i),
                      s = r.write(e, t);
                    return s !== i && (r = r.slice(0, s)), r;
                  })(e, t);
                if (ArrayBuffer.isView(e)) return c(e);
                if (null == e)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof e
                  );
                if (
                  T(e, ArrayBuffer) ||
                  (e && T(e.buffer, ArrayBuffer)) ||
                  ("undefined" != typeof SharedArrayBuffer &&
                    (T(e, SharedArrayBuffer) ||
                      (e && T(e.buffer, SharedArrayBuffer))))
                )
                  return (function (e, t, i) {
                    var r;
                    if (t < 0 || e.byteLength < t)
                      throw RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (i || 0))
                      throw RangeError('"length" is outside of buffer bounds');
                    return (
                      Object.setPrototypeOf(
                        (r =
                          void 0 === t && void 0 === i
                            ? new Uint8Array(e)
                            : void 0 === i
                            ? new Uint8Array(e, t)
                            : new Uint8Array(e, t, i)),
                        o.prototype
                      ),
                      r
                    );
                  })(e, t, i);
                if ("number" == typeof e)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var r = e.valueOf && e.valueOf();
                if (null != r && r !== e) return o.from(r, t, i);
                var s = (function (e) {
                  if (o.isBuffer(e)) {
                    var t,
                      i = 0 | u(e.length),
                      r = a(i);
                    return 0 === r.length || e.copy(r, 0, 0, i), r;
                  }
                  return void 0 !== e.length
                    ? "number" != typeof e.length || (t = e.length) != t
                      ? a(0)
                      : c(e)
                    : "Buffer" === e.type && Array.isArray(e.data)
                    ? c(e.data)
                    : void 0;
                })(e);
                if (s) return s;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof e[Symbol.toPrimitive]
                )
                  return o.from(e[Symbol.toPrimitive]("string"), t, i);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e
                );
              }
              function l(e) {
                if ("number" != typeof e)
                  throw TypeError('"size" argument must be of type number');
                if (e < 0)
                  throw RangeError(
                    'The value "' + e + '" is invalid for option "size"'
                  );
              }
              function h(e) {
                return l(e), a(e < 0 ? 0 : 0 | u(e));
              }
              function c(e) {
                for (
                  var t = e.length < 0 ? 0 : 0 | u(e.length), i = a(t), r = 0;
                  r < t;
                  r += 1
                )
                  i[r] = 255 & e[r];
                return i;
              }
              function u(e) {
                if (e >= 0x7fffffff)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
                  );
                return 0 | e;
              }
              function g(e, t) {
                if (o.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || T(e, ArrayBuffer))
                  return e.byteLength;
                if ("string" != typeof e)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof e
                  );
                var i = e.length,
                  r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === i) return 0;
                for (var s = !1; ; )
                  switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return i;
                    case "utf8":
                    case "utf-8":
                      return Q(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * i;
                    case "hex":
                      return i >>> 1;
                    case "base64":
                      return x(e).length;
                    default:
                      if (s) return r ? -1 : Q(e).length;
                      (t = ("" + t).toLowerCase()), (s = !0);
                  }
              }
              function d(e, t, i) {
                var s,
                  n,
                  a = !1;
                if (
                  ((void 0 === t || t < 0) && (t = 0),
                  t > this.length ||
                    ((void 0 === i || i > this.length) && (i = this.length),
                    i <= 0 || (i >>>= 0) <= (t >>>= 0)))
                )
                  return "";
                for (e || (e = "utf8"); ; )
                  switch (e) {
                    case "hex":
                      return (function (e, t, i) {
                        var r = e.length;
                        (!t || t < 0) && (t = 0),
                          (!i || i < 0 || i > r) && (i = r);
                        for (var s = "", n = t; n < i; ++n) s += M[e[n]];
                        return s;
                      })(this, t, i);
                    case "utf8":
                    case "utf-8":
                      return I(this, t, i);
                    case "ascii":
                      return (function (e, t, i) {
                        var r = "";
                        i = Math.min(e.length, i);
                        for (var s = t; s < i; ++s)
                          r += String.fromCharCode(127 & e[s]);
                        return r;
                      })(this, t, i);
                    case "latin1":
                    case "binary":
                      return (function (e, t, i) {
                        var r = "";
                        i = Math.min(e.length, i);
                        for (var s = t; s < i; ++s)
                          r += String.fromCharCode(e[s]);
                        return r;
                      })(this, t, i);
                    case "base64":
                      return (
                        (s = t),
                        (n = i),
                        0 === s && n === this.length
                          ? r.fromByteArray(this)
                          : r.fromByteArray(this.slice(s, n))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (e, t, i) {
                        for (
                          var r = e.slice(t, i), s = "", n = 0;
                          n < r.length;
                          n += 2
                        )
                          s += String.fromCharCode(r[n] + 256 * r[n + 1]);
                        return s;
                      })(this, t, i);
                    default:
                      if (a) throw TypeError("Unknown encoding: " + e);
                      (e = (e + "").toLowerCase()), (a = !0);
                  }
              }
              function p(e, t, i) {
                var r = e[t];
                (e[t] = e[i]), (e[i] = r);
              }
              function m(e, t, i, r, s) {
                var n;
                if (0 === e.length) return -1;
                if (
                  ("string" == typeof i
                    ? ((r = i), (i = 0))
                    : i > 0x7fffffff
                    ? (i = 0x7fffffff)
                    : i < -0x80000000 && (i = -0x80000000),
                  (n = i = +i) != n && (i = s ? 0 : e.length - 1),
                  i < 0 && (i = e.length + i),
                  i >= e.length)
                ) {
                  if (s) return -1;
                  i = e.length - 1;
                } else if (i < 0) {
                  if (!s) return -1;
                  i = 0;
                }
                if (("string" == typeof t && (t = o.from(t, r)), o.isBuffer(t)))
                  return 0 === t.length ? -1 : f(e, t, i, r, s);
                if ("number" == typeof t)
                  return ((t &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf)
                    ? s
                      ? Uint8Array.prototype.indexOf.call(e, t, i)
                      : Uint8Array.prototype.lastIndexOf.call(e, t, i)
                    : f(e, [t], i, r, s);
                throw TypeError("val must be string, number or Buffer");
              }
              function f(e, t, i, r, s) {
                var n,
                  a = 1,
                  o = e.length,
                  A = t.length;
                if (
                  void 0 !== r &&
                  ("ucs2" === (r = String(r).toLowerCase()) ||
                    "ucs-2" === r ||
                    "utf16le" === r ||
                    "utf-16le" === r)
                ) {
                  if (e.length < 2 || t.length < 2) return -1;
                  (a = 2), (o /= 2), (A /= 2), (i /= 2);
                }
                function l(e, t) {
                  return 1 === a ? e[t] : e.readUInt16BE(t * a);
                }
                if (s) {
                  var h = -1;
                  for (n = i; n < o; n++)
                    if (l(e, n) === l(t, -1 === h ? 0 : n - h)) {
                      if ((-1 === h && (h = n), n - h + 1 === A)) return h * a;
                    } else -1 !== h && (n -= n - h), (h = -1);
                } else
                  for (i + A > o && (i = o - A), n = i; n >= 0; n--) {
                    for (var c = !0, u = 0; u < A; u++)
                      if (l(e, n + u) !== l(t, u)) {
                        c = !1;
                        break;
                      }
                    if (c) return n;
                  }
                return -1;
              }
              function I(e, t, i) {
                i = Math.min(e.length, i);
                for (var r = [], s = t; s < i; ) {
                  var n,
                    a,
                    o,
                    A,
                    l = e[s],
                    h = null,
                    c = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
                  if (s + c <= i)
                    switch (c) {
                      case 1:
                        l < 128 && (h = l);
                        break;
                      case 2:
                        (192 & (n = e[s + 1])) == 128 &&
                          (A = ((31 & l) << 6) | (63 & n)) > 127 &&
                          (h = A);
                        break;
                      case 3:
                        (n = e[s + 1]),
                          (a = e[s + 2]),
                          (192 & n) == 128 &&
                            (192 & a) == 128 &&
                            (A =
                              ((15 & l) << 12) | ((63 & n) << 6) | (63 & a)) >
                              2047 &&
                            (A < 55296 || A > 57343) &&
                            (h = A);
                        break;
                      case 4:
                        (n = e[s + 1]),
                          (a = e[s + 2]),
                          (o = e[s + 3]),
                          (192 & n) == 128 &&
                            (192 & a) == 128 &&
                            (192 & o) == 128 &&
                            (A =
                              ((15 & l) << 18) |
                              ((63 & n) << 12) |
                              ((63 & a) << 6) |
                              (63 & o)) > 65535 &&
                            A < 1114112 &&
                            (h = A);
                    }
                  null === h
                    ? ((h = 65533), (c = 1))
                    : h > 65535 &&
                      ((h -= 65536),
                      r.push(((h >>> 10) & 1023) | 55296),
                      (h = 56320 | (1023 & h))),
                    r.push(h),
                    (s += c);
                }
                return (function (e) {
                  var t = e.length;
                  if (t <= 4096) return String.fromCharCode.apply(String, e);
                  for (var i = "", r = 0; r < t; )
                    i += String.fromCharCode.apply(
                      String,
                      e.slice(r, (r += 4096))
                    );
                  return i;
                })(r);
              }
              function E(e, t, i) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > i)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function C(e, t, i, r, s, n) {
                if (!o.isBuffer(e))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (t > s || t < n)
                  throw RangeError('"value" argument is out of bounds');
                if (i + r > e.length) throw RangeError("Index out of range");
              }
              function y(e, t, i, r, s, n) {
                if (i + r > e.length || i < 0)
                  throw RangeError("Index out of range");
              }
              function B(e, t, i, r, n) {
                return (
                  (t = +t),
                  (i >>>= 0),
                  n ||
                    y(e, t, i, 4, 34028234663852886e22, -34028234663852886e22),
                  s.write(e, t, i, r, 23, 4),
                  i + 4
                );
              }
              function w(e, t, i, r, n) {
                return (
                  (t = +t),
                  (i >>>= 0),
                  n ||
                    y(
                      e,
                      t,
                      i,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292
                    ),
                  s.write(e, t, i, r, 52, 8),
                  i + 8
                );
              }
              (t.Buffer = o),
                (t.SlowBuffer = function (e) {
                  return +e != e && (e = 0), o.alloc(+e);
                }),
                (t.INSPECT_MAX_BYTES = 50),
                (t.kMaxLength = 0x7fffffff),
                (o.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var e = new Uint8Array(1),
                      t = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(t, Uint8Array.prototype),
                      Object.setPrototypeOf(e, t),
                      42 === e.foo()
                    );
                  } catch (e) {
                    return !1;
                  }
                })()),
                o.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(o.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (o.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(o.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (o.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (o.poolSize = 8192),
                (o.from = function (e, t, i) {
                  return A(e, t, i);
                }),
                Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(o, Uint8Array),
                (o.alloc = function (e, t, i) {
                  return (l(e), e <= 0)
                    ? a(e)
                    : void 0 !== t
                    ? "string" == typeof i
                      ? a(e).fill(t, i)
                      : a(e).fill(t)
                    : a(e);
                }),
                (o.allocUnsafe = function (e) {
                  return h(e);
                }),
                (o.allocUnsafeSlow = function (e) {
                  return h(e);
                }),
                (o.isBuffer = function (e) {
                  return null != e && !0 === e._isBuffer && e !== o.prototype;
                }),
                (o.compare = function (e, t) {
                  if (
                    (T(e, Uint8Array) &&
                      (e = o.from(e, e.offset, e.byteLength)),
                    T(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)),
                    !o.isBuffer(e) || !o.isBuffer(t))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (e === t) return 0;
                  for (
                    var i = e.length, r = t.length, s = 0, n = Math.min(i, r);
                    s < n;
                    ++s
                  )
                    if (e[s] !== t[s]) {
                      (i = e[s]), (r = t[s]);
                      break;
                    }
                  return i < r ? -1 : r < i ? 1 : 0;
                }),
                (o.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (o.concat = function (e, t) {
                  if (!Array.isArray(e))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === e.length) return o.alloc(0);
                  if (void 0 === t)
                    for (i = 0, t = 0; i < e.length; ++i) t += e[i].length;
                  var i,
                    r = o.allocUnsafe(t),
                    s = 0;
                  for (i = 0; i < e.length; ++i) {
                    var n = e[i];
                    if ((T(n, Uint8Array) && (n = o.from(n)), !o.isBuffer(n)))
                      throw TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    n.copy(r, s), (s += n.length);
                  }
                  return r;
                }),
                (o.byteLength = g),
                (o.prototype._isBuffer = !0),
                (o.prototype.swap16 = function () {
                  var e = this.length;
                  if (e % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                  return this;
                }),
                (o.prototype.swap32 = function () {
                  var e = this.length;
                  if (e % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var t = 0; t < e; t += 4)
                    p(this, t, t + 3), p(this, t + 1, t + 2);
                  return this;
                }),
                (o.prototype.swap64 = function () {
                  var e = this.length;
                  if (e % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var t = 0; t < e; t += 8)
                    p(this, t, t + 7),
                      p(this, t + 1, t + 6),
                      p(this, t + 2, t + 5),
                      p(this, t + 3, t + 4);
                  return this;
                }),
                (o.prototype.toString = function () {
                  var e = this.length;
                  return 0 === e
                    ? ""
                    : 0 == arguments.length
                    ? I(this, 0, e)
                    : d.apply(this, arguments);
                }),
                (o.prototype.toLocaleString = o.prototype.toString),
                (o.prototype.equals = function (e) {
                  if (!o.isBuffer(e))
                    throw TypeError("Argument must be a Buffer");
                  return this === e || 0 === o.compare(this, e);
                }),
                (o.prototype.inspect = function () {
                  var e = "",
                    i = t.INSPECT_MAX_BYTES;
                  return (
                    (e = this.toString("hex", 0, i)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > i && (e += " ... "),
                    "<Buffer " + e + ">"
                  );
                }),
                n && (o.prototype[n] = o.prototype.inspect),
                (o.prototype.compare = function (e, t, i, r, s) {
                  if (
                    (T(e, Uint8Array) &&
                      (e = o.from(e, e.offset, e.byteLength)),
                    !o.isBuffer(e))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof e
                    );
                  if (
                    (void 0 === t && (t = 0),
                    void 0 === i && (i = e ? e.length : 0),
                    void 0 === r && (r = 0),
                    void 0 === s && (s = this.length),
                    t < 0 || i > e.length || r < 0 || s > this.length)
                  )
                    throw RangeError("out of range index");
                  if (r >= s && t >= i) return 0;
                  if (r >= s) return -1;
                  if (t >= i) return 1;
                  if (
                    ((t >>>= 0), (i >>>= 0), (r >>>= 0), (s >>>= 0), this === e)
                  )
                    return 0;
                  for (
                    var n = s - r,
                      a = i - t,
                      A = Math.min(n, a),
                      l = this.slice(r, s),
                      h = e.slice(t, i),
                      c = 0;
                    c < A;
                    ++c
                  )
                    if (l[c] !== h[c]) {
                      (n = l[c]), (a = h[c]);
                      break;
                    }
                  return n < a ? -1 : a < n ? 1 : 0;
                }),
                (o.prototype.includes = function (e, t, i) {
                  return -1 !== this.indexOf(e, t, i);
                }),
                (o.prototype.indexOf = function (e, t, i) {
                  return m(this, e, t, i, !0);
                }),
                (o.prototype.lastIndexOf = function (e, t, i) {
                  return m(this, e, t, i, !1);
                }),
                (o.prototype.write = function (e, t, i, r) {
                  if (void 0 === t) (r = "utf8"), (i = this.length), (t = 0);
                  else if (void 0 === i && "string" == typeof t)
                    (r = t), (i = this.length), (t = 0);
                  else if (isFinite(t))
                    (t >>>= 0),
                      isFinite(i)
                        ? ((i >>>= 0), void 0 === r && (r = "utf8"))
                        : ((r = i), (i = void 0));
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  var s,
                    n,
                    a,
                    o,
                    A,
                    l,
                    h,
                    c,
                    u,
                    g,
                    d,
                    p,
                    m = this.length - t;
                  if (
                    ((void 0 === i || i > m) && (i = m),
                    (e.length > 0 && (i < 0 || t < 0)) || t > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds");
                  r || (r = "utf8");
                  for (var f = !1; ; )
                    switch (r) {
                      case "hex":
                        return (function (e, t, i, r) {
                          i = Number(i) || 0;
                          var s = e.length - i;
                          r ? (r = Number(r)) > s && (r = s) : (r = s);
                          var n = t.length;
                          r > n / 2 && (r = n / 2);
                          for (var a = 0; a < r; ++a) {
                            var o = parseInt(t.substr(2 * a, 2), 16);
                            if (o != o) break;
                            e[i + a] = o;
                          }
                          return a;
                        })(this, e, t, i);
                      case "utf8":
                      case "utf-8":
                        return (
                          (A = t), (l = i), S(Q(e, this.length - A), this, A, l)
                        );
                      case "ascii":
                        return (h = t), (c = i), S(b(e), this, h, c);
                      case "latin1":
                      case "binary":
                        return (
                          (s = this),
                          (n = e),
                          (a = t),
                          (o = i),
                          S(b(n), s, a, o)
                        );
                      case "base64":
                        return (u = t), (g = i), S(x(e), this, u, g);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (d = t),
                          (p = i),
                          S(
                            (function (e, t) {
                              for (
                                var i, r, s = [], n = 0;
                                n < e.length && !((t -= 2) < 0);
                                ++n
                              )
                                (r = (i = e.charCodeAt(n)) >> 8),
                                  s.push(i % 256),
                                  s.push(r);
                              return s;
                            })(e, this.length - d),
                            this,
                            d,
                            p
                          )
                        );
                      default:
                        if (f) throw TypeError("Unknown encoding: " + r);
                        (r = ("" + r).toLowerCase()), (f = !0);
                    }
                }),
                (o.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (o.prototype.slice = function (e, t) {
                  var i = this.length;
                  (e = ~~e),
                    (t = void 0 === t ? i : ~~t),
                    e < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
                    t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
                    t < e && (t = e);
                  var r = this.subarray(e, t);
                  return Object.setPrototypeOf(r, o.prototype), r;
                }),
                (o.prototype.readUIntLE = function (e, t, i) {
                  (e >>>= 0), (t >>>= 0), i || E(e, t, this.length);
                  for (var r = this[e], s = 1, n = 0; ++n < t && (s *= 256); )
                    r += this[e + n] * s;
                  return r;
                }),
                (o.prototype.readUIntBE = function (e, t, i) {
                  (e >>>= 0), (t >>>= 0), i || E(e, t, this.length);
                  for (var r = this[e + --t], s = 1; t > 0 && (s *= 256); )
                    r += this[e + --t] * s;
                  return r;
                }),
                (o.prototype.readUInt8 = function (e, t) {
                  return (e >>>= 0), t || E(e, 1, this.length), this[e];
                }),
                (o.prototype.readUInt16LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || E(e, 2, this.length),
                    this[e] | (this[e + 1] << 8)
                  );
                }),
                (o.prototype.readUInt16BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || E(e, 2, this.length),
                    (this[e] << 8) | this[e + 1]
                  );
                }),
                (o.prototype.readUInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || E(e, 4, this.length),
                    (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                      0x1000000 * this[e + 3]
                  );
                }),
                (o.prototype.readUInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || E(e, 4, this.length),
                    0x1000000 * this[e] +
                      ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                  );
                }),
                (o.prototype.readIntLE = function (e, t, i) {
                  (e >>>= 0), (t >>>= 0), i || E(e, t, this.length);
                  for (var r = this[e], s = 1, n = 0; ++n < t && (s *= 256); )
                    r += this[e + n] * s;
                  return r >= (s *= 128) && (r -= Math.pow(2, 8 * t)), r;
                }),
                (o.prototype.readIntBE = function (e, t, i) {
                  (e >>>= 0), (t >>>= 0), i || E(e, t, this.length);
                  for (
                    var r = t, s = 1, n = this[e + --r];
                    r > 0 && (s *= 256);

                  )
                    n += this[e + --r] * s;
                  return n >= (s *= 128) && (n -= Math.pow(2, 8 * t)), n;
                }),
                (o.prototype.readInt8 = function (e, t) {
                  return ((e >>>= 0), t || E(e, 1, this.length), 128 & this[e])
                    ? -((255 - this[e] + 1) * 1)
                    : this[e];
                }),
                (o.prototype.readInt16LE = function (e, t) {
                  (e >>>= 0), t || E(e, 2, this.length);
                  var i = this[e] | (this[e + 1] << 8);
                  return 32768 & i ? 0xffff0000 | i : i;
                }),
                (o.prototype.readInt16BE = function (e, t) {
                  (e >>>= 0), t || E(e, 2, this.length);
                  var i = this[e + 1] | (this[e] << 8);
                  return 32768 & i ? 0xffff0000 | i : i;
                }),
                (o.prototype.readInt32LE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || E(e, 4, this.length),
                    this[e] |
                      (this[e + 1] << 8) |
                      (this[e + 2] << 16) |
                      (this[e + 3] << 24)
                  );
                }),
                (o.prototype.readInt32BE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || E(e, 4, this.length),
                    (this[e] << 24) |
                      (this[e + 1] << 16) |
                      (this[e + 2] << 8) |
                      this[e + 3]
                  );
                }),
                (o.prototype.readFloatLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || E(e, 4, this.length),
                    s.read(this, e, !0, 23, 4)
                  );
                }),
                (o.prototype.readFloatBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || E(e, 4, this.length),
                    s.read(this, e, !1, 23, 4)
                  );
                }),
                (o.prototype.readDoubleLE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || E(e, 8, this.length),
                    s.read(this, e, !0, 52, 8)
                  );
                }),
                (o.prototype.readDoubleBE = function (e, t) {
                  return (
                    (e >>>= 0),
                    t || E(e, 8, this.length),
                    s.read(this, e, !1, 52, 8)
                  );
                }),
                (o.prototype.writeUIntLE = function (e, t, i, r) {
                  if (((e = +e), (t >>>= 0), (i >>>= 0), !r)) {
                    var s = Math.pow(2, 8 * i) - 1;
                    C(this, e, t, i, s, 0);
                  }
                  var n = 1,
                    a = 0;
                  for (this[t] = 255 & e; ++a < i && (n *= 256); )
                    this[t + a] = (e / n) & 255;
                  return t + i;
                }),
                (o.prototype.writeUIntBE = function (e, t, i, r) {
                  if (((e = +e), (t >>>= 0), (i >>>= 0), !r)) {
                    var s = Math.pow(2, 8 * i) - 1;
                    C(this, e, t, i, s, 0);
                  }
                  var n = i - 1,
                    a = 1;
                  for (this[t + n] = 255 & e; --n >= 0 && (a *= 256); )
                    this[t + n] = (e / a) & 255;
                  return t + i;
                }),
                (o.prototype.writeUInt8 = function (e, t, i) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    i || C(this, e, t, 1, 255, 0),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (o.prototype.writeUInt16LE = function (e, t, i) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    i || C(this, e, t, 2, 65535, 0),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (o.prototype.writeUInt16BE = function (e, t, i) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    i || C(this, e, t, 2, 65535, 0),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (o.prototype.writeUInt32LE = function (e, t, i) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    i || C(this, e, t, 4, 0xffffffff, 0),
                    (this[t + 3] = e >>> 24),
                    (this[t + 2] = e >>> 16),
                    (this[t + 1] = e >>> 8),
                    (this[t] = 255 & e),
                    t + 4
                  );
                }),
                (o.prototype.writeUInt32BE = function (e, t, i) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    i || C(this, e, t, 4, 0xffffffff, 0),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (o.prototype.writeIntLE = function (e, t, i, r) {
                  if (((e = +e), (t >>>= 0), !r)) {
                    var s = Math.pow(2, 8 * i - 1);
                    C(this, e, t, i, s - 1, -s);
                  }
                  var n = 0,
                    a = 1,
                    o = 0;
                  for (this[t] = 255 & e; ++n < i && (a *= 256); )
                    e < 0 && 0 === o && 0 !== this[t + n - 1] && (o = 1),
                      (this[t + n] = (((e / a) >> 0) - o) & 255);
                  return t + i;
                }),
                (o.prototype.writeIntBE = function (e, t, i, r) {
                  if (((e = +e), (t >>>= 0), !r)) {
                    var s = Math.pow(2, 8 * i - 1);
                    C(this, e, t, i, s - 1, -s);
                  }
                  var n = i - 1,
                    a = 1,
                    o = 0;
                  for (this[t + n] = 255 & e; --n >= 0 && (a *= 256); )
                    e < 0 && 0 === o && 0 !== this[t + n + 1] && (o = 1),
                      (this[t + n] = (((e / a) >> 0) - o) & 255);
                  return t + i;
                }),
                (o.prototype.writeInt8 = function (e, t, i) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    i || C(this, e, t, 1, 127, -128),
                    e < 0 && (e = 255 + e + 1),
                    (this[t] = 255 & e),
                    t + 1
                  );
                }),
                (o.prototype.writeInt16LE = function (e, t, i) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    i || C(this, e, t, 2, 32767, -32768),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    t + 2
                  );
                }),
                (o.prototype.writeInt16BE = function (e, t, i) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    i || C(this, e, t, 2, 32767, -32768),
                    (this[t] = e >>> 8),
                    (this[t + 1] = 255 & e),
                    t + 2
                  );
                }),
                (o.prototype.writeInt32LE = function (e, t, i) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    i || C(this, e, t, 4, 0x7fffffff, -0x80000000),
                    (this[t] = 255 & e),
                    (this[t + 1] = e >>> 8),
                    (this[t + 2] = e >>> 16),
                    (this[t + 3] = e >>> 24),
                    t + 4
                  );
                }),
                (o.prototype.writeInt32BE = function (e, t, i) {
                  return (
                    (e = +e),
                    (t >>>= 0),
                    i || C(this, e, t, 4, 0x7fffffff, -0x80000000),
                    e < 0 && (e = 0xffffffff + e + 1),
                    (this[t] = e >>> 24),
                    (this[t + 1] = e >>> 16),
                    (this[t + 2] = e >>> 8),
                    (this[t + 3] = 255 & e),
                    t + 4
                  );
                }),
                (o.prototype.writeFloatLE = function (e, t, i) {
                  return B(this, e, t, !0, i);
                }),
                (o.prototype.writeFloatBE = function (e, t, i) {
                  return B(this, e, t, !1, i);
                }),
                (o.prototype.writeDoubleLE = function (e, t, i) {
                  return w(this, e, t, !0, i);
                }),
                (o.prototype.writeDoubleBE = function (e, t, i) {
                  return w(this, e, t, !1, i);
                }),
                (o.prototype.copy = function (e, t, i, r) {
                  if (!o.isBuffer(e))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (i || (i = 0),
                    r || 0 === r || (r = this.length),
                    t >= e.length && (t = e.length),
                    t || (t = 0),
                    r > 0 && r < i && (r = i),
                    r === i || 0 === e.length || 0 === this.length)
                  )
                    return 0;
                  if (t < 0) throw RangeError("targetStart out of bounds");
                  if (i < 0 || i >= this.length)
                    throw RangeError("Index out of range");
                  if (r < 0) throw RangeError("sourceEnd out of bounds");
                  r > this.length && (r = this.length),
                    e.length - t < r - i && (r = e.length - t + i);
                  var s = r - i;
                  if (
                    this === e &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(t, i, r);
                  else if (this === e && i < t && t < r)
                    for (var n = s - 1; n >= 0; --n) e[n + t] = this[n + i];
                  else Uint8Array.prototype.set.call(e, this.subarray(i, r), t);
                  return s;
                }),
                (o.prototype.fill = function (e, t, i, r) {
                  if ("string" == typeof e) {
                    if (
                      ("string" == typeof t
                        ? ((r = t), (t = 0), (i = this.length))
                        : "string" == typeof i && ((r = i), (i = this.length)),
                      void 0 !== r && "string" != typeof r)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof r && !o.isEncoding(r))
                      throw TypeError("Unknown encoding: " + r);
                    if (1 === e.length) {
                      var s,
                        n = e.charCodeAt(0);
                      (("utf8" === r && n < 128) || "latin1" === r) && (e = n);
                    }
                  } else
                    "number" == typeof e
                      ? (e &= 255)
                      : "boolean" == typeof e && (e = Number(e));
                  if (t < 0 || this.length < t || this.length < i)
                    throw RangeError("Out of range index");
                  if (i <= t) return this;
                  if (
                    ((t >>>= 0),
                    (i = void 0 === i ? this.length : i >>> 0),
                    e || (e = 0),
                    "number" == typeof e)
                  )
                    for (s = t; s < i; ++s) this[s] = e;
                  else {
                    var a = o.isBuffer(e) ? e : o.from(e, r),
                      A = a.length;
                    if (0 === A)
                      throw TypeError(
                        'The value "' + e + '" is invalid for argument "value"'
                      );
                    for (s = 0; s < i - t; ++s) this[s + t] = a[s % A];
                  }
                  return this;
                });
              var v = /[^+/0-9A-Za-z-_]/g;
              function Q(e, t) {
                t = t || 1 / 0;
                for (var i, r = e.length, s = null, n = [], a = 0; a < r; ++a) {
                  if ((i = e.charCodeAt(a)) > 55295 && i < 57344) {
                    if (!s) {
                      if (i > 56319 || a + 1 === r) {
                        (t -= 3) > -1 && n.push(239, 191, 189);
                        continue;
                      }
                      s = i;
                      continue;
                    }
                    if (i < 56320) {
                      (t -= 3) > -1 && n.push(239, 191, 189), (s = i);
                      continue;
                    }
                    i = (((s - 55296) << 10) | (i - 56320)) + 65536;
                  } else s && (t -= 3) > -1 && n.push(239, 191, 189);
                  if (((s = null), i < 128)) {
                    if ((t -= 1) < 0) break;
                    n.push(i);
                  } else if (i < 2048) {
                    if ((t -= 2) < 0) break;
                    n.push((i >> 6) | 192, (63 & i) | 128);
                  } else if (i < 65536) {
                    if ((t -= 3) < 0) break;
                    n.push(
                      (i >> 12) | 224,
                      ((i >> 6) & 63) | 128,
                      (63 & i) | 128
                    );
                  } else if (i < 1114112) {
                    if ((t -= 4) < 0) break;
                    n.push(
                      (i >> 18) | 240,
                      ((i >> 12) & 63) | 128,
                      ((i >> 6) & 63) | 128,
                      (63 & i) | 128
                    );
                  } else throw Error("Invalid code point");
                }
                return n;
              }
              function b(e) {
                for (var t = [], i = 0; i < e.length; ++i)
                  t.push(255 & e.charCodeAt(i));
                return t;
              }
              function x(e) {
                return r.toByteArray(
                  (function (e) {
                    if (
                      (e = (e = e.split("=")[0]).trim().replace(v, "")).length <
                      2
                    )
                      return "";
                    for (; e.length % 4 != 0; ) e += "=";
                    return e;
                  })(e)
                );
              }
              function S(e, t, i, r) {
                for (
                  var s = 0;
                  s < r && !(s + i >= t.length) && !(s >= e.length);
                  ++s
                )
                  t[s + i] = e[s];
                return s;
              }
              function T(e, t) {
                return (
                  e instanceof t ||
                  (null != e &&
                    null != e.constructor &&
                    null != e.constructor.name &&
                    e.constructor.name === t.name)
                );
              }
              var M = (function () {
                for (
                  var e = "0123456789abcdef", t = Array(256), i = 0;
                  i < 16;
                  ++i
                )
                  for (var r = 16 * i, s = 0; s < 16; ++s)
                    t[r + s] = e[i] + e[s];
                return t;
              })();
            },
            783: function (e, t) {
              (t.read = function (e, t, i, r, s) {
                var n,
                  a,
                  o = 8 * s - r - 1,
                  A = (1 << o) - 1,
                  l = A >> 1,
                  h = -7,
                  c = i ? s - 1 : 0,
                  u = i ? -1 : 1,
                  g = e[t + c];
                for (
                  c += u, n = g & ((1 << -h) - 1), g >>= -h, h += o;
                  h > 0;
                  n = 256 * n + e[t + c], c += u, h -= 8
                );
                for (
                  a = n & ((1 << -h) - 1), n >>= -h, h += r;
                  h > 0;
                  a = 256 * a + e[t + c], c += u, h -= 8
                );
                if (0 === n) n = 1 - l;
                else {
                  if (n === A) return a ? NaN : (1 / 0) * (g ? -1 : 1);
                  (a += Math.pow(2, r)), (n -= l);
                }
                return (g ? -1 : 1) * a * Math.pow(2, n - r);
              }),
                (t.write = function (e, t, i, r, s, n) {
                  var a,
                    o,
                    A,
                    l = 8 * n - s - 1,
                    h = (1 << l) - 1,
                    c = h >> 1,
                    u = 23 === s ? 5960464477539062e-23 : 0,
                    g = r ? 0 : n - 1,
                    d = r ? 1 : -1,
                    p = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
                  for (
                    isNaN((t = Math.abs(t))) || t === 1 / 0
                      ? ((o = isNaN(t) ? 1 : 0), (a = h))
                      : ((a = Math.floor(Math.log(t) / Math.LN2)),
                        t * (A = Math.pow(2, -a)) < 1 && (a--, (A *= 2)),
                        a + c >= 1
                          ? (t += u / A)
                          : (t += u * Math.pow(2, 1 - c)),
                        t * A >= 2 && (a++, (A /= 2)),
                        a + c >= h
                          ? ((o = 0), (a = h))
                          : a + c >= 1
                          ? ((o = (t * A - 1) * Math.pow(2, s)), (a += c))
                          : ((o = t * Math.pow(2, c - 1) * Math.pow(2, s)),
                            (a = 0)));
                    s >= 8;
                    e[i + g] = 255 & o, g += d, o /= 256, s -= 8
                  );
                  for (
                    a = (a << s) | o, l += s;
                    l > 0;
                    e[i + g] = 255 & a, g += d, a /= 256, l -= 8
                  );
                  e[i + g - d] |= 128 * p;
                });
            },
          },
          i = {};
        function r(e) {
          var s = i[e];
          if (void 0 !== s) return s.exports;
          var n = (i[e] = { exports: {} }),
            a = !0;
          try {
            t[e](n, n.exports, r), (a = !1);
          } finally {
            a && delete i[e];
          }
          return n.exports;
        }
        r.ab = "//";
        var s = r(72);
        e.exports = s;
      })();
    },
    9812: (e, t, i) => {
      "use strict";
      let r, s, n, a, o, A, l, h, c, u;
      i.r(t),
        i.d(t, {
          CanvasTexture: () => en.GOR,
          FileLoader: () => en.Y9S,
          Loader: () => en.aHM,
          ModelViewerElement: () => he,
          NearestFilter: () => en.hxR,
        });
      let g = (e, t) =>
          "method" !== t.kind || !t.descriptor || "value" in t.descriptor
            ? {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                originalKey: t.key,
                initializer() {
                  "function" == typeof t.initializer &&
                    (this[t.key] = t.initializer.call(this));
                },
                finisher(i) {
                  i.createProperty(t.key, e);
                },
              }
            : {
                ...t,
                finisher(i) {
                  i.createProperty(t.key, e);
                },
              },
        d = (e, t, i) => {
          t.constructor.createProperty(i, e);
        };
      function p(e) {
        return (t, i) => (void 0 !== i ? d(e, t, i) : g(e, t));
      }
      null !=
        (null === (m = window.HTMLSlotElement) || void 0 === m
          ? void 0
          : m.prototype.assignedElements) ||
        ((e, t) =>
          e.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE));
      var m,
        f,
        I,
        E,
        C,
        y,
        B,
        w,
        v,
        Q,
        b,
        x,
        S,
        T,
        M,
        R,
        D,
        L,
        F,
        k,
        _,
        U,
        N,
        P,
        G,
        O,
        H,
        q,
        V,
        Y,
        J,
        K,
        z,
        $,
        j,
        W,
        X,
        Z,
        ee,
        et,
        ei,
        er,
        es,
        en = i(337);
      let ea = window,
        eo =
          ea.ShadowRoot &&
          (void 0 === ea.ShadyCSS || ea.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        eA = Symbol(),
        el = new WeakMap();
      class eh {
        constructor(e, t, i) {
          if (((this._$cssResult$ = !0), i !== eA))
            throw Error(
              "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
            );
          (this.cssText = e), (this.t = t);
        }
        get styleSheet() {
          let e = this.o,
            t = this.t;
          if (eo && void 0 === e) {
            let i = void 0 !== t && 1 === t.length;
            i && (e = el.get(t)),
              void 0 === e &&
                ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText),
                i && el.set(t, e));
          }
          return e;
        }
        toString() {
          return this.cssText;
        }
      }
      let ec = (e) => new eh("string" == typeof e ? e : e + "", void 0, eA),
        eu = (e, t) => {
          eo
            ? (e.adoptedStyleSheets = t.map((e) =>
                e instanceof CSSStyleSheet ? e : e.styleSheet
              ))
            : t.forEach((t) => {
                let i = document.createElement("style"),
                  r = ea.litNonce;
                void 0 !== r && i.setAttribute("nonce", r),
                  (i.textContent = t.cssText),
                  e.appendChild(i);
              });
        },
        eg = eo
          ? (e) => e
          : (e) =>
              e instanceof CSSStyleSheet
                ? ((e) => {
                    let t = "";
                    for (let i of e.cssRules) t += i.cssText;
                    return ec(t);
                  })(e)
                : e,
        ed = window,
        ep = ed.trustedTypes,
        em = ep ? ep.emptyScript : "",
        ef = ed.reactiveElementPolyfillSupport,
        eI = {
          toAttribute(e, t) {
            switch (t) {
              case Boolean:
                e = e ? em : null;
                break;
              case Object:
              case Array:
                e = null == e ? e : JSON.stringify(e);
            }
            return e;
          },
          fromAttribute(e, t) {
            let i = e;
            switch (t) {
              case Boolean:
                i = null !== e;
                break;
              case Number:
                i = null === e ? null : Number(e);
                break;
              case Object:
              case Array:
                try {
                  i = JSON.parse(e);
                } catch (e) {
                  i = null;
                }
            }
            return i;
          },
        },
        eE = (e, t) => t !== e && (t == t || e == e),
        eC = {
          attribute: !0,
          type: String,
          converter: eI,
          reflect: !1,
          hasChanged: eE,
        },
        ey = "finalized";
      class eB extends HTMLElement {
        constructor() {
          super(),
            (this._$Ei = new Map()),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this._$El = null),
            this._$Eu();
        }
        static addInitializer(e) {
          var t;
          this.finalize(),
            (null !== (t = this.h) && void 0 !== t ? t : (this.h = [])).push(e);
        }
        static get observedAttributes() {
          this.finalize();
          let e = [];
          return (
            this.elementProperties.forEach((t, i) => {
              let r = this._$Ep(i, t);
              void 0 !== r && (this._$Ev.set(r, i), e.push(r));
            }),
            e
          );
        }
        static createProperty(e, t = eC) {
          if (
            (t.state && (t.attribute = !1),
            this.finalize(),
            this.elementProperties.set(e, t),
            !t.noAccessor && !this.prototype.hasOwnProperty(e))
          ) {
            let i = "symbol" == typeof e ? Symbol() : "__" + e,
              r = this.getPropertyDescriptor(e, i, t);
            void 0 !== r && Object.defineProperty(this.prototype, e, r);
          }
        }
        static getPropertyDescriptor(e, t, i) {
          return {
            get() {
              return this[t];
            },
            set(r) {
              let s = this[e];
              (this[t] = r), this.requestUpdate(e, s, i);
            },
            configurable: !0,
            enumerable: !0,
          };
        }
        static getPropertyOptions(e) {
          return this.elementProperties.get(e) || eC;
        }
        static finalize() {
          if (this.hasOwnProperty(ey)) return !1;
          this[ey] = !0;
          let e = Object.getPrototypeOf(this);
          if (
            (e.finalize(),
            void 0 !== e.h && (this.h = [...e.h]),
            (this.elementProperties = new Map(e.elementProperties)),
            (this._$Ev = new Map()),
            this.hasOwnProperty("properties"))
          ) {
            let e = this.properties;
            for (let t of [
              ...Object.getOwnPropertyNames(e),
              ...Object.getOwnPropertySymbols(e),
            ])
              this.createProperty(t, e[t]);
          }
          return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
        }
        static finalizeStyles(e) {
          let t = [];
          if (Array.isArray(e))
            for (let i of new Set(e.flat(1 / 0).reverse())) t.unshift(eg(i));
          else void 0 !== e && t.push(eg(e));
          return t;
        }
        static _$Ep(e, t) {
          let i = t.attribute;
          return !1 === i
            ? void 0
            : "string" == typeof i
            ? i
            : "string" == typeof e
            ? e.toLowerCase()
            : void 0;
        }
        _$Eu() {
          var e;
          (this._$E_ = new Promise((e) => (this.enableUpdating = e))),
            (this._$AL = new Map()),
            this._$Eg(),
            this.requestUpdate(),
            null === (e = this.constructor.h) ||
              void 0 === e ||
              e.forEach((e) => e(this));
        }
        addController(e) {
          var t, i;
          (null !== (t = this._$ES) && void 0 !== t
            ? t
            : (this._$ES = [])
          ).push(e),
            void 0 !== this.renderRoot &&
              this.isConnected &&
              (null === (i = e.hostConnected) || void 0 === i || i.call(e));
        }
        removeController(e) {
          var t;
          null === (t = this._$ES) ||
            void 0 === t ||
            t.splice(this._$ES.indexOf(e) >>> 0, 1);
        }
        _$Eg() {
          this.constructor.elementProperties.forEach((e, t) => {
            this.hasOwnProperty(t) &&
              (this._$Ei.set(t, this[t]), delete this[t]);
          });
        }
        createRenderRoot() {
          var e;
          let t =
            null !== (e = this.shadowRoot) && void 0 !== e
              ? e
              : this.attachShadow(this.constructor.shadowRootOptions);
          return eu(t, this.constructor.elementStyles), t;
        }
        connectedCallback() {
          var e;
          void 0 === this.renderRoot &&
            (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (e = this._$ES) ||
              void 0 === e ||
              e.forEach((e) => {
                var t;
                return null === (t = e.hostConnected) || void 0 === t
                  ? void 0
                  : t.call(e);
              });
        }
        enableUpdating(e) {}
        disconnectedCallback() {
          var e;
          null === (e = this._$ES) ||
            void 0 === e ||
            e.forEach((e) => {
              var t;
              return null === (t = e.hostDisconnected) || void 0 === t
                ? void 0
                : t.call(e);
            });
        }
        attributeChangedCallback(e, t, i) {
          this._$AK(e, i);
        }
        _$EO(e, t, i = eC) {
          var r;
          let s = this.constructor._$Ep(e, i);
          if (void 0 !== s && !0 === i.reflect) {
            let n = (
              void 0 !==
              (null === (r = i.converter) || void 0 === r
                ? void 0
                : r.toAttribute)
                ? i.converter
                : eI
            ).toAttribute(t, i.type);
            (this._$El = e),
              null == n ? this.removeAttribute(s) : this.setAttribute(s, n),
              (this._$El = null);
          }
        }
        _$AK(e, t) {
          var i;
          let r = this.constructor,
            s = r._$Ev.get(e);
          if (void 0 !== s && this._$El !== s) {
            let e = r.getPropertyOptions(s),
              n =
                "function" == typeof e.converter
                  ? { fromAttribute: e.converter }
                  : void 0 !==
                    (null === (i = e.converter) || void 0 === i
                      ? void 0
                      : i.fromAttribute)
                  ? e.converter
                  : eI;
            (this._$El = s),
              (this[s] = n.fromAttribute(t, e.type)),
              (this._$El = null);
          }
        }
        requestUpdate(e, t, i) {
          let r = !0;
          void 0 !== e &&
            ((
              (i = i || this.constructor.getPropertyOptions(e)).hasChanged || eE
            )(this[e], t)
              ? (this._$AL.has(e) || this._$AL.set(e, t),
                !0 === i.reflect &&
                  this._$El !== e &&
                  (void 0 === this._$EC && (this._$EC = new Map()),
                  this._$EC.set(e, i)))
              : (r = !1)),
            !this.isUpdatePending && r && (this._$E_ = this._$Ej());
        }
        async _$Ej() {
          this.isUpdatePending = !0;
          try {
            await this._$E_;
          } catch (e) {
            Promise.reject(e);
          }
          let e = this.scheduleUpdate();
          return null != e && (await e), !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var e;
          if (!this.isUpdatePending) return;
          this.hasUpdated,
            this._$Ei &&
              (this._$Ei.forEach((e, t) => (this[t] = e)),
              (this._$Ei = void 0));
          let t = !1,
            i = this._$AL;
          try {
            (t = this.shouldUpdate(i))
              ? (this.willUpdate(i),
                null === (e = this._$ES) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    var t;
                    return null === (t = e.hostUpdate) || void 0 === t
                      ? void 0
                      : t.call(e);
                  }),
                this.update(i))
              : this._$Ek();
          } catch (e) {
            throw ((t = !1), this._$Ek(), e);
          }
          t && this._$AE(i);
        }
        willUpdate(e) {}
        _$AE(e) {
          var t;
          null === (t = this._$ES) ||
            void 0 === t ||
            t.forEach((e) => {
              var t;
              return null === (t = e.hostUpdated) || void 0 === t
                ? void 0
                : t.call(e);
            }),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
            this.updated(e);
        }
        _$Ek() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$E_;
        }
        shouldUpdate(e) {
          return !0;
        }
        update(e) {
          void 0 !== this._$EC &&
            (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)),
            (this._$EC = void 0)),
            this._$Ek();
        }
        updated(e) {}
        firstUpdated(e) {}
      }
      (eB[ey] = !0),
        (eB.elementProperties = new Map()),
        (eB.elementStyles = []),
        (eB.shadowRootOptions = { mode: "open" }),
        null == ef || ef({ ReactiveElement: eB }),
        (null !== (f = ed.reactiveElementVersions) && void 0 !== f
          ? f
          : (ed.reactiveElementVersions = [])
        ).push("1.6.3");
      let ew = window,
        ev = ew.trustedTypes,
        eQ = ev
          ? ev.createPolicy("lit-html", { createHTML: (e) => e })
          : void 0,
        eb = "$lit$",
        ex = `lit$${(Math.random() + "").slice(9)}$`,
        eS = "?" + ex,
        eT = `<${eS}>`,
        eM = document,
        eR = () => eM.createComment(""),
        eD = (e) =>
          null === e || ("object" != typeof e && "function" != typeof e),
        eL = Array.isArray,
        eF = (e) =>
          eL(e) ||
          "function" == typeof (null == e ? void 0 : e[Symbol.iterator]),
        ek = "[ 	\n\f\r]",
        e_ = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        eU = /-->/g,
        eN = />/g,
        eP = RegExp(
          `>|${ek}(?:([^\\s"'>=/]+)(${ek}*=${ek}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
          "g"
        ),
        eG = /'/g,
        eO = /"/g,
        eH = /^(?:script|style|textarea|title)$/i,
        eq =
          (e) =>
          (t, ...i) => ({ _$litType$: e, strings: t, values: i }),
        eV = eq(1),
        eY = (eq(2), Symbol.for("lit-noChange")),
        eJ = Symbol.for("lit-nothing"),
        eK = new WeakMap(),
        ez = eM.createTreeWalker(eM, 129, null, !1);
      function e$(e, t) {
        if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return void 0 !== eQ ? eQ.createHTML(t) : t;
      }
      let ej = (e, t) => {
        let i = e.length - 1,
          r = [],
          s,
          n = 2 === t ? "<svg>" : "",
          a = e_;
        for (let t = 0; t < i; t++) {
          let i = e[t],
            o,
            A,
            l = -1,
            h = 0;
          for (
            ;
            h < i.length && ((a.lastIndex = h), null !== (A = a.exec(i)));

          )
            (h = a.lastIndex),
              a === e_
                ? "!--" === A[1]
                  ? (a = eU)
                  : void 0 !== A[1]
                  ? (a = eN)
                  : void 0 !== A[2]
                  ? (eH.test(A[2]) && (s = RegExp("</" + A[2], "g")), (a = eP))
                  : void 0 !== A[3] && (a = eP)
                : a === eP
                ? ">" === A[0]
                  ? ((a = null != s ? s : e_), (l = -1))
                  : void 0 === A[1]
                  ? (l = -2)
                  : ((l = a.lastIndex - A[2].length),
                    (o = A[1]),
                    (a = void 0 === A[3] ? eP : '"' === A[3] ? eO : eG))
                : a === eO || a === eG
                ? (a = eP)
                : a === eU || a === eN
                ? (a = e_)
                : ((a = eP), (s = void 0));
          let c = a === eP && e[t + 1].startsWith("/>") ? " " : "";
          n +=
            a === e_
              ? i + eT
              : l >= 0
              ? (r.push(o), i.slice(0, l) + eb + i.slice(l) + ex + c)
              : i + ex + (-2 === l ? (r.push(void 0), t) : c);
        }
        return [e$(e, n + (e[i] || "<?>") + (2 === t ? "</svg>" : "")), r];
      };
      class eW {
        constructor({ strings: e, _$litType$: t }, i) {
          let r;
          this.parts = [];
          let s = 0,
            n = 0,
            a = e.length - 1,
            o = this.parts,
            [A, l] = ej(e, t);
          if (
            ((this.el = eW.createElement(A, i)),
            (ez.currentNode = this.el.content),
            2 === t)
          ) {
            let e = this.el.content,
              t = e.firstChild;
            t.remove(), e.append(...t.childNodes);
          }
          for (; null !== (r = ez.nextNode()) && o.length < a; ) {
            if (1 === r.nodeType) {
              if (r.hasAttributes()) {
                let e = [];
                for (let t of r.getAttributeNames())
                  if (t.endsWith(eb) || t.startsWith(ex)) {
                    let i = l[n++];
                    if ((e.push(t), void 0 !== i)) {
                      let e = r.getAttribute(i.toLowerCase() + eb).split(ex),
                        t = /([.?@])?(.*)/.exec(i);
                      o.push({
                        type: 1,
                        index: s,
                        name: t[2],
                        strings: e,
                        ctor:
                          "." === t[1]
                            ? e2
                            : "?" === t[1]
                            ? e8
                            : "@" === t[1]
                            ? e4
                            : e1,
                      });
                    } else o.push({ type: 6, index: s });
                  }
                for (let t of e) r.removeAttribute(t);
              }
              if (eH.test(r.tagName)) {
                let e = r.textContent.split(ex),
                  t = e.length - 1;
                if (t > 0) {
                  r.textContent = ev ? ev.emptyScript : "";
                  for (let i = 0; i < t; i++)
                    r.append(e[i], eR()),
                      ez.nextNode(),
                      o.push({ type: 2, index: ++s });
                  r.append(e[t], eR());
                }
              }
            } else if (8 === r.nodeType) {
              if (r.data === eS) o.push({ type: 2, index: s });
              else {
                let e = -1;
                for (; -1 !== (e = r.data.indexOf(ex, e + 1)); )
                  o.push({ type: 7, index: s }), (e += ex.length - 1);
              }
            }
            s++;
          }
        }
        static createElement(e, t) {
          let i = eM.createElement("template");
          return (i.innerHTML = e), i;
        }
      }
      function eX(e, t, i = e, r) {
        var s, n, a;
        if (t === eY) return t;
        let o =
            void 0 !== r
              ? null === (s = i._$Co) || void 0 === s
                ? void 0
                : s[r]
              : i._$Cl,
          A = eD(t) ? void 0 : t._$litDirective$;
        return (
          (null == o ? void 0 : o.constructor) !== A &&
            (null === (n = null == o ? void 0 : o._$AO) ||
              void 0 === n ||
              n.call(o, !1),
            void 0 === A ? (o = void 0) : (o = new A(e))._$AT(e, i, r),
            void 0 !== r
              ? ((null !== (a = i._$Co) && void 0 !== a ? a : (i._$Co = []))[
                  r
                ] = o)
              : (i._$Cl = o)),
          void 0 !== o && (t = eX(e, o._$AS(e, t.values), o, r)),
          t
        );
      }
      class eZ {
        constructor(e, t) {
          (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = e),
            (this._$AM = t);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(e) {
          var t;
          let {
              el: { content: i },
              parts: r,
            } = this._$AD,
            s = (
              null !== (t = null == e ? void 0 : e.creationScope) &&
              void 0 !== t
                ? t
                : eM
            ).importNode(i, !0);
          ez.currentNode = s;
          let n = ez.nextNode(),
            a = 0,
            o = 0,
            A = r[0];
          for (; void 0 !== A; ) {
            if (a === A.index) {
              let t;
              2 === A.type
                ? (t = new e0(n, n.nextSibling, this, e))
                : 1 === A.type
                ? (t = new A.ctor(n, A.name, A.strings, this, e))
                : 6 === A.type && (t = new e5(n, this, e)),
                this._$AV.push(t),
                (A = r[++o]);
            }
            a !== (null == A ? void 0 : A.index) && ((n = ez.nextNode()), a++);
          }
          return (ez.currentNode = eM), s;
        }
        v(e) {
          let t = 0;
          for (let i of this._$AV)
            void 0 !== i &&
              (void 0 !== i.strings
                ? (i._$AI(e, i, t), (t += i.strings.length - 2))
                : i._$AI(e[t])),
              t++;
        }
      }
      class e0 {
        constructor(e, t, i, r) {
          var s;
          (this.type = 2),
            (this._$AH = eJ),
            (this._$AN = void 0),
            (this._$AA = e),
            (this._$AB = t),
            (this._$AM = i),
            (this.options = r),
            (this._$Cp =
              null === (s = null == r ? void 0 : r.isConnected) ||
              void 0 === s ||
              s);
        }
        get _$AU() {
          var e, t;
          return null !==
            (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
            void 0 !== t
            ? t
            : this._$Cp;
        }
        get parentNode() {
          let e = this._$AA.parentNode,
            t = this._$AM;
          return (
            void 0 !== t &&
              11 === (null == e ? void 0 : e.nodeType) &&
              (e = t.parentNode),
            e
          );
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(e, t = this) {
          eD((e = eX(this, e, t)))
            ? e === eJ || null == e || "" === e
              ? (this._$AH !== eJ && this._$AR(), (this._$AH = eJ))
              : e !== this._$AH && e !== eY && this._(e)
            : void 0 !== e._$litType$
            ? this.g(e)
            : void 0 !== e.nodeType
            ? this.$(e)
            : eF(e)
            ? this.T(e)
            : this._(e);
        }
        k(e) {
          return this._$AA.parentNode.insertBefore(e, this._$AB);
        }
        $(e) {
          this._$AH !== e && (this._$AR(), (this._$AH = this.k(e)));
        }
        _(e) {
          this._$AH !== eJ && eD(this._$AH)
            ? (this._$AA.nextSibling.data = e)
            : this.$(eM.createTextNode(e)),
            (this._$AH = e);
        }
        g(e) {
          var t;
          let { values: i, _$litType$: r } = e,
            s =
              "number" == typeof r
                ? this._$AC(e)
                : (void 0 === r.el &&
                    (r.el = eW.createElement(e$(r.h, r.h[0]), this.options)),
                  r);
          if (
            (null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === s
          )
            this._$AH.v(i);
          else {
            let e = new eZ(s, this),
              t = e.u(this.options);
            e.v(i), this.$(t), (this._$AH = e);
          }
        }
        _$AC(e) {
          let t = eK.get(e.strings);
          return void 0 === t && eK.set(e.strings, (t = new eW(e))), t;
        }
        T(e) {
          eL(this._$AH) || ((this._$AH = []), this._$AR());
          let t = this._$AH,
            i,
            r = 0;
          for (let s of e)
            r === t.length
              ? t.push(
                  (i = new e0(this.k(eR()), this.k(eR()), this, this.options))
                )
              : (i = t[r]),
              i._$AI(s),
              r++;
          r < t.length &&
            (this._$AR(i && i._$AB.nextSibling, r), (t.length = r));
        }
        _$AR(e = this._$AA.nextSibling, t) {
          var i;
          for (
            null === (i = this._$AP) || void 0 === i || i.call(this, !1, !0, t);
            e && e !== this._$AB;

          ) {
            let t = e.nextSibling;
            e.remove(), (e = t);
          }
        }
        setConnected(e) {
          var t;
          void 0 === this._$AM &&
            ((this._$Cp = e),
            null === (t = this._$AP) || void 0 === t || t.call(this, e));
        }
      }
      class e1 {
        constructor(e, t, i, r, s) {
          (this.type = 1),
            (this._$AH = eJ),
            (this._$AN = void 0),
            (this.element = e),
            (this.name = t),
            (this._$AM = r),
            (this.options = s),
            i.length > 2 || "" !== i[0] || "" !== i[1]
              ? ((this._$AH = Array(i.length - 1).fill(new String())),
                (this.strings = i))
              : (this._$AH = eJ);
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e, t = this, i, r) {
          let s = this.strings,
            n = !1;
          if (void 0 === s)
            (n =
              !eD((e = eX(this, e, t, 0))) || (e !== this._$AH && e !== eY)) &&
              (this._$AH = e);
          else {
            let r, a;
            let o = e;
            for (e = s[0], r = 0; r < s.length - 1; r++)
              (a = eX(this, o[i + r], t, r)) === eY && (a = this._$AH[r]),
                n || (n = !eD(a) || a !== this._$AH[r]),
                a === eJ
                  ? (e = eJ)
                  : e !== eJ && (e += (null != a ? a : "") + s[r + 1]),
                (this._$AH[r] = a);
          }
          n && !r && this.j(e);
        }
        j(e) {
          e === eJ
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, null != e ? e : "");
        }
      }
      class e2 extends e1 {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(e) {
          this.element[this.name] = e === eJ ? void 0 : e;
        }
      }
      let e3 = ev ? ev.emptyScript : "";
      class e8 extends e1 {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(e) {
          e && e !== eJ
            ? this.element.setAttribute(this.name, e3)
            : this.element.removeAttribute(this.name);
        }
      }
      class e4 extends e1 {
        constructor(e, t, i, r, s) {
          super(e, t, i, r, s), (this.type = 5);
        }
        _$AI(e, t = this) {
          var i;
          if (
            (e = null !== (i = eX(this, e, t, 0)) && void 0 !== i ? i : eJ) ===
            eY
          )
            return;
          let r = this._$AH,
            s =
              (e === eJ && r !== eJ) ||
              e.capture !== r.capture ||
              e.once !== r.once ||
              e.passive !== r.passive,
            n = e !== eJ && (r === eJ || s);
          s && this.element.removeEventListener(this.name, this, r),
            n && this.element.addEventListener(this.name, this, e),
            (this._$AH = e);
        }
        handleEvent(e) {
          var t, i;
          "function" == typeof this._$AH
            ? this._$AH.call(
                null !==
                  (i =
                    null === (t = this.options) || void 0 === t
                      ? void 0
                      : t.host) && void 0 !== i
                  ? i
                  : this.element,
                e
              )
            : this._$AH.handleEvent(e);
        }
      }
      class e5 {
        constructor(e, t, i) {
          (this.element = e),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = t),
            (this.options = i);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(e) {
          eX(this, e);
        }
      }
      let e6 = ew.litHtmlPolyfillSupport;
      null == e6 || e6(eW, e0),
        (null !== (I = ew.litHtmlVersions) && void 0 !== I
          ? I
          : (ew.litHtmlVersions = [])
        ).push("2.8.0");
      let e9 = (e, t, i) => {
        var r, s;
        let n =
            null !== (r = null == i ? void 0 : i.renderBefore) && void 0 !== r
              ? r
              : t,
          a = n._$litPart$;
        if (void 0 === a) {
          let e =
            null !== (s = null == i ? void 0 : i.renderBefore) && void 0 !== s
              ? s
              : null;
          n._$litPart$ = a = new e0(
            t.insertBefore(eR(), e),
            e,
            void 0,
            null != i ? i : {}
          );
        }
        return a._$AI(e), a;
      };
      class e7 extends eB {
        constructor() {
          super(...arguments),
            (this.renderOptions = { host: this }),
            (this._$Do = void 0);
        }
        createRenderRoot() {
          var e, t;
          let i = super.createRenderRoot();
          return (
            (null !== (e = (t = this.renderOptions).renderBefore) &&
              void 0 !== e) ||
              (t.renderBefore = i.firstChild),
            i
          );
        }
        update(e) {
          let t = this.render();
          this.hasUpdated ||
            (this.renderOptions.isConnected = this.isConnected),
            super.update(e),
            (this._$Do = e9(t, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          var e;
          super.connectedCallback(),
            null === (e = this._$Do) || void 0 === e || e.setConnected(!0);
        }
        disconnectedCallback() {
          var e;
          super.disconnectedCallback(),
            null === (e = this._$Do) || void 0 === e || e.setConnected(!1);
        }
        render() {
          return eY;
        }
      }
      (e7.finalized = !0),
        (e7._$litElement$ = !0),
        null === (E = globalThis.litElementHydrateSupport) ||
          void 0 === E ||
          E.call(globalThis, { LitElement: e7 });
      let te = globalThis.litElementPolyfillSupport;
      null == te || te({ LitElement: e7 }),
        (null !== (C = globalThis.litElementVersions) && void 0 !== C
          ? C
          : (globalThis.litElementVersions = [])
        ).push("3.3.3");
      let tt =
          null != navigator.xr &&
          null != self.XRSession &&
          null != navigator.xr.isSessionSupported,
        ti = tt && null != self.XRSession.prototype.requestHitTestSource,
        tr = null != self.ResizeObserver,
        ts = null != self.IntersectionObserver;
      (() => {
        let e = navigator.userAgent || navigator.vendor || self.opera;
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          e
        ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            e.substr(0, 4)
          );
      })(),
        /\bCrOS\b/.test(navigator.userAgent);
      let tn = /android/i.test(navigator.userAgent),
        ta =
          (/iPad|iPhone|iPod/.test(navigator.userAgent) && !self.MSStream) ||
          ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1);
      /Safari\//.test(navigator.userAgent);
      let to = /firefox/i.test(navigator.userAgent),
        tA = /OculusBrowser/.test(navigator.userAgent);
      ta && /CriOS\//.test(navigator.userAgent);
      let tl = tn && !to && !tA,
        th = !!(window.webkit && window.webkit.messageHandlers),
        tc = (() => {
          if (!ta) return !1;
          if (th)
            return !!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(
              navigator.userAgent
            );
          {
            let e = document.createElement("a");
            return !!(
              e.relList &&
              e.relList.supports &&
              e.relList.supports("ar")
            );
          }
        })(),
        tu = (e) => (e && "null" !== e ? td(e) : null),
        tg = () => {
          if (ti) return;
          let e = [];
          throw (
            (tt || e.push("WebXR Device API"),
            ti || e.push("WebXR Hit Test API"),
            Error(
              `The following APIs are required for AR, but are missing in this browser: ${e.join(
                ", "
              )}`
            ))
          );
        },
        td = (e) => new URL(e, window.location.toString()).toString(),
        tp = (e, t) => {
          let i = null,
            r = (...r) => {
              null == i &&
                (e(...r), (i = self.setTimeout(() => (i = null), t)));
            };
          return (
            (r.flush = () => {
              null != i && (self.clearTimeout(i), (i = null));
            }),
            r
          );
        },
        tm = (e, t) => {
          let i = null;
          return (...r) => {
            null != i && self.clearTimeout(i),
              (i = self.setTimeout(() => {
                (i = null), e(...r);
              }, t));
          };
        },
        tf = (e, t, i) => Math.max(t, Math.min(i, e)),
        tI = (() => {
          let e = RegExp("[?&]model-viewer-debug-mode(&|$)");
          return () =>
            (self.ModelViewerElement && self.ModelViewerElement.debugMode) ||
            (self.location &&
              self.location.search &&
              self.location.search.match(e));
        })(),
        tE = (e = 0) => new Promise((t) => setTimeout(t, e)),
        tC = (e, t, i = null) =>
          new Promise((r) => {
            e.addEventListener(t, function s(n) {
              (!i || i(n)) && (r(n), e.removeEventListener(t, s));
            });
          });
      var ty = function (e, t, i, r) {
        var s,
          n = arguments.length,
          a =
            n < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (s = e[o]) &&
              (a = (n < 3 ? s(a) : n > 3 ? s(t, i, a) : s(t, i)) || a);
        return n > 3 && a && Object.defineProperty(t, i, a), a;
      };
      let tB = Symbol("currentEnvironmentMap"),
        tw = Symbol("currentBackground"),
        tv = Symbol("updateEnvironment"),
        tQ = Symbol("cancelEnvironmentUpdate"),
        tb = eV`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`,
        tx = eV`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`,
        tS = eV`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`,
        tT = eV`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          role="button"
          href="javascript:void(0);"
          aria-label="View in your space">
        ${tS}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${tx}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${tb}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,
        tM = (e) => {
          e9(tT, e);
        },
        tR = new WeakMap();
      class tD extends en.aHM {
        constructor(e) {
          super(e),
            (this.decoderPath = ""),
            (this.decoderConfig = {}),
            (this.decoderBinary = null),
            (this.decoderPending = null),
            (this.workerLimit = 4),
            (this.workerPool = []),
            (this.workerNextTaskID = 1),
            (this.workerSourceURL = ""),
            (this.defaultAttributeIDs = {
              position: "POSITION",
              normal: "NORMAL",
              color: "COLOR",
              uv: "TEX_COORD",
            }),
            (this.defaultAttributeTypes = {
              position: "Float32Array",
              normal: "Float32Array",
              color: "Float32Array",
              uv: "Float32Array",
            });
        }
        setDecoderPath(e) {
          return (this.decoderPath = e), this;
        }
        setDecoderConfig(e) {
          return (this.decoderConfig = e), this;
        }
        setWorkerLimit(e) {
          return (this.workerLimit = e), this;
        }
        load(e, t, i, r) {
          let s = new en.Y9S(this.manager);
          s.setPath(this.path),
            s.setResponseType("arraybuffer"),
            s.setRequestHeader(this.requestHeader),
            s.setWithCredentials(this.withCredentials),
            s.load(
              e,
              (e) => {
                this.parse(e, t, r);
              },
              i,
              r
            );
        }
        parse(e, t, i = () => {}) {
          this.decodeDracoFile(e, t, null, null, en.er$, i).catch(i);
        }
        decodeDracoFile(e, t, i, r, s = en.Zr2, n = () => {}) {
          let a = {
            attributeIDs: i || this.defaultAttributeIDs,
            attributeTypes: r || this.defaultAttributeTypes,
            useUniqueIDs: !!i,
            vertexColorSpace: s,
          };
          return this.decodeGeometry(e, a).then(t).catch(n);
        }
        decodeGeometry(e, t) {
          let i;
          let r = JSON.stringify(t);
          if (tR.has(e)) {
            let t = tR.get(e);
            if (t.key === r) return t.promise;
            if (0 === e.byteLength)
              throw Error(
                "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
              );
          }
          let s = this.workerNextTaskID++,
            n = e.byteLength,
            a = this._getWorker(s, n)
              .then(
                (r) => (
                  (i = r),
                  new Promise((r, n) => {
                    (i._callbacks[s] = { resolve: r, reject: n }),
                      i.postMessage(
                        { type: "decode", id: s, taskConfig: t, buffer: e },
                        [e]
                      );
                  })
                )
              )
              .then((e) => this._createGeometry(e.geometry));
          return (
            a
              .catch(() => !0)
              .then(() => {
                i && s && this._releaseTask(i, s);
              }),
            tR.set(e, { key: r, promise: a }),
            a
          );
        }
        _createGeometry(e) {
          let t = new en.LoY();
          e.index && t.setIndex(new en.THS(e.index.array, 1));
          for (let i = 0; i < e.attributes.length; i++) {
            let r = e.attributes[i],
              s = r.name,
              n = r.array,
              a = r.itemSize,
              o = new en.THS(n, a);
            "color" === s &&
              (this._assignVertexColorSpace(o, r.vertexColorSpace),
              (o.normalized = n instanceof Float32Array == !1)),
              t.setAttribute(s, o);
          }
          return t;
        }
        _assignVertexColorSpace(e, t) {
          if (t !== en.er$) return;
          let i = new en.Q1f();
          for (let t = 0, r = e.count; t < r; t++)
            i.fromBufferAttribute(e, t),
              en.ppV.toWorkingColorSpace(i, en.er$),
              e.setXYZ(t, i.r, i.g, i.b);
        }
        _loadLibrary(e, t) {
          let i = new en.Y9S(this.manager);
          return (
            i.setPath(this.decoderPath),
            i.setResponseType(t),
            i.setWithCredentials(this.withCredentials),
            new Promise((t, r) => {
              i.load(e, t, void 0, r);
            })
          );
        }
        preload() {
          return this._initDecoder(), this;
        }
        _initDecoder() {
          if (this.decoderPending) return this.decoderPending;
          let e =
              "object" != typeof WebAssembly ||
              "js" === this.decoderConfig.type,
            t = [];
          return (
            e
              ? t.push(this._loadLibrary("draco_decoder.js", "text"))
              : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
                t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
            (this.decoderPending = Promise.all(t).then((t) => {
              let i = t[0];
              e || (this.decoderConfig.wasmBinary = t[1]);
              let r = tL.toString(),
                s = [
                  "/* draco decoder */",
                  i,
                  "",
                  "/* worker */",
                  r.substring(r.indexOf("{") + 1, r.lastIndexOf("}")),
                ].join("\n");
              this.workerSourceURL = URL.createObjectURL(new Blob([s]));
            })),
            this.decoderPending
          );
        }
        _getWorker(e, t) {
          return this._initDecoder().then(() => {
            if (this.workerPool.length < this.workerLimit) {
              let e = new Worker(this.workerSourceURL);
              (e._callbacks = {}),
                (e._taskCosts = {}),
                (e._taskLoad = 0),
                e.postMessage({
                  type: "init",
                  decoderConfig: this.decoderConfig,
                }),
                (e.onmessage = function (t) {
                  let i = t.data;
                  switch (i.type) {
                    case "decode":
                      e._callbacks[i.id].resolve(i);
                      break;
                    case "error":
                      e._callbacks[i.id].reject(i);
                      break;
                    default:
                      console.error(
                        'THREE.DRACOLoader: Unexpected message, "' +
                          i.type +
                          '"'
                      );
                  }
                }),
                this.workerPool.push(e);
            } else
              this.workerPool.sort(function (e, t) {
                return e._taskLoad > t._taskLoad ? -1 : 1;
              });
            let i = this.workerPool[this.workerPool.length - 1];
            return (i._taskCosts[e] = t), (i._taskLoad += t), i;
          });
        }
        _releaseTask(e, t) {
          (e._taskLoad -= e._taskCosts[t]),
            delete e._callbacks[t],
            delete e._taskCosts[t];
        }
        debug() {
          console.log(
            "Task load: ",
            this.workerPool.map((e) => e._taskLoad)
          );
        }
        dispose() {
          for (let e = 0; e < this.workerPool.length; ++e)
            this.workerPool[e].terminate();
          return (
            (this.workerPool.length = 0),
            "" !== this.workerSourceURL &&
              URL.revokeObjectURL(this.workerSourceURL),
            this
          );
        }
      }
      function tL() {
        let e, t;
        onmessage = function (i) {
          let r = i.data;
          switch (r.type) {
            case "init":
              (e = r.decoderConfig),
                (t = new Promise(function (t) {
                  (e.onModuleLoaded = function (e) {
                    t({ draco: e });
                  }),
                    DracoDecoderModule(e);
                }));
              break;
            case "decode":
              let s = r.buffer,
                n = r.taskConfig;
              t.then((e) => {
                let t = e.draco,
                  i = new t.Decoder();
                try {
                  let e = (function (e, t, i, r) {
                      let s, n;
                      let a = r.attributeIDs,
                        o = r.attributeTypes,
                        A = t.GetEncodedGeometryType(i);
                      if (A === e.TRIANGULAR_MESH)
                        (s = new e.Mesh()),
                          (n = t.DecodeArrayToMesh(i, i.byteLength, s));
                      else if (A === e.POINT_CLOUD)
                        (s = new e.PointCloud()),
                          (n = t.DecodeArrayToPointCloud(i, i.byteLength, s));
                      else
                        throw Error(
                          "THREE.DRACOLoader: Unexpected geometry type."
                        );
                      if (!n.ok() || 0 === s.ptr)
                        throw Error(
                          "THREE.DRACOLoader: Decoding failed: " + n.error_msg()
                        );
                      let l = { index: null, attributes: [] };
                      for (let i in a) {
                        let n, A;
                        let h = self[o[i]];
                        if (r.useUniqueIDs)
                          (A = a[i]), (n = t.GetAttributeByUniqueId(s, A));
                        else {
                          if (-1 === (A = t.GetAttributeId(s, e[a[i]])))
                            continue;
                          n = t.GetAttribute(s, A);
                        }
                        let c = (function (e, t, i, r, s, n) {
                          let a = n.num_components(),
                            o = i.num_points() * a,
                            A = o * s.BYTES_PER_ELEMENT,
                            l = (function (e, t) {
                              switch (t) {
                                case Float32Array:
                                  return e.DT_FLOAT32;
                                case Int8Array:
                                  return e.DT_INT8;
                                case Int16Array:
                                  return e.DT_INT16;
                                case Int32Array:
                                  return e.DT_INT32;
                                case Uint8Array:
                                  return e.DT_UINT8;
                                case Uint16Array:
                                  return e.DT_UINT16;
                                case Uint32Array:
                                  return e.DT_UINT32;
                              }
                            })(e, s),
                            h = e._malloc(A);
                          t.GetAttributeDataArrayForAllPoints(i, n, l, A, h);
                          let c = new s(e.HEAPF32.buffer, h, o).slice();
                          return e._free(h), { name: r, array: c, itemSize: a };
                        })(e, t, s, i, h, n);
                        "color" === i &&
                          (c.vertexColorSpace = r.vertexColorSpace),
                          l.attributes.push(c);
                      }
                      return (
                        A === e.TRIANGULAR_MESH &&
                          (l.index = (function (e, t, i) {
                            let r = 3 * i.num_faces(),
                              s = 4 * r,
                              n = e._malloc(s);
                            t.GetTrianglesUInt32Array(i, s, n);
                            let a = new Uint32Array(
                              e.HEAPF32.buffer,
                              n,
                              r
                            ).slice();
                            return e._free(n), { array: a, itemSize: 1 };
                          })(e, t, s)),
                        e.destroy(s),
                        l
                      );
                    })(t, i, new Int8Array(s), n),
                    a = e.attributes.map((e) => e.array.buffer);
                  e.index && a.push(e.index.array.buffer),
                    self.postMessage(
                      { type: "decode", id: r.id, geometry: e },
                      a
                    );
                } catch (e) {
                  console.error(e),
                    self.postMessage({
                      type: "error",
                      id: r.id,
                      error: e.message,
                    });
                } finally {
                  t.destroy(i);
                }
              });
          }
        };
      }
      function tF(e, t) {
        if (t === en.RJ4)
          return (
            console.warn(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
            ),
            e
          );
        if (t !== en.rYR && t !== en.O49)
          return (
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
              t
            ),
            e
          );
        {
          let i = e.getIndex();
          if (null === i) {
            let t = [],
              r = e.getAttribute("position");
            if (void 0 === r)
              return (
                console.error(
                  "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
                ),
                e
              );
            for (let e = 0; e < r.count; e++) t.push(e);
            e.setIndex(t), (i = e.getIndex());
          }
          let r = i.count - 2,
            s = [];
          if (t === en.rYR)
            for (let e = 1; e <= r; e++)
              s.push(i.getX(0)), s.push(i.getX(e)), s.push(i.getX(e + 1));
          else
            for (let e = 0; e < r; e++)
              e % 2 == 0
                ? (s.push(i.getX(e)),
                  s.push(i.getX(e + 1)),
                  s.push(i.getX(e + 2)))
                : (s.push(i.getX(e + 2)),
                  s.push(i.getX(e + 1)),
                  s.push(i.getX(e)));
          s.length / 3 !== r &&
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
            );
          let n = e.clone();
          return n.setIndex(s), n.clearGroups(), n;
        }
      }
      class tk extends en.aHM {
        constructor(e) {
          super(e),
            (this.dracoLoader = null),
            (this.ktx2Loader = null),
            (this.meshoptDecoder = null),
            (this.pluginCallbacks = []),
            this.register(function (e) {
              return new tO(e);
            }),
            this.register(function (e) {
              return new tH(e);
            }),
            this.register(function (e) {
              return new tW(e);
            }),
            this.register(function (e) {
              return new tX(e);
            }),
            this.register(function (e) {
              return new tZ(e);
            }),
            this.register(function (e) {
              return new tV(e);
            }),
            this.register(function (e) {
              return new tY(e);
            }),
            this.register(function (e) {
              return new tJ(e);
            }),
            this.register(function (e) {
              return new tK(e);
            }),
            this.register(function (e) {
              return new tG(e);
            }),
            this.register(function (e) {
              return new tz(e);
            }),
            this.register(function (e) {
              return new tq(e);
            }),
            this.register(function (e) {
              return new tj(e);
            }),
            this.register(function (e) {
              return new t$(e);
            }),
            this.register(function (e) {
              return new tN(e);
            }),
            this.register(function (e) {
              return new t0(e);
            }),
            this.register(function (e) {
              return new t1(e);
            });
        }
        load(e, t, i, r) {
          let s;
          let n = this;
          if ("" !== this.resourcePath) s = this.resourcePath;
          else if ("" !== this.path) {
            let t = en.r6x.extractUrlBase(e);
            s = en.r6x.resolveURL(t, this.path);
          } else s = en.r6x.extractUrlBase(e);
          this.manager.itemStart(e);
          let a = function (t) {
              r ? r(t) : console.error(t),
                n.manager.itemError(e),
                n.manager.itemEnd(e);
            },
            o = new en.Y9S(this.manager);
          o.setPath(this.path),
            o.setResponseType("arraybuffer"),
            o.setRequestHeader(this.requestHeader),
            o.setWithCredentials(this.withCredentials),
            o.load(
              e,
              function (i) {
                try {
                  n.parse(
                    i,
                    s,
                    function (i) {
                      t(i), n.manager.itemEnd(e);
                    },
                    a
                  );
                } catch (e) {
                  a(e);
                }
              },
              i,
              a
            );
        }
        setDRACOLoader(e) {
          return (this.dracoLoader = e), this;
        }
        setKTX2Loader(e) {
          return (this.ktx2Loader = e), this;
        }
        setMeshoptDecoder(e) {
          return (this.meshoptDecoder = e), this;
        }
        register(e) {
          return (
            -1 === this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.push(e),
            this
          );
        }
        unregister(e) {
          return (
            -1 !== this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
            this
          );
        }
        parse(e, t, i, r) {
          let s;
          let n = {},
            a = {},
            o = new TextDecoder();
          if ("string" == typeof e) s = JSON.parse(e);
          else if (e instanceof ArrayBuffer) {
            if (o.decode(new Uint8Array(e, 0, 4)) === t2) {
              try {
                n[tU.KHR_BINARY_GLTF] = new t8(e);
              } catch (e) {
                r && r(e);
                return;
              }
              s = JSON.parse(n[tU.KHR_BINARY_GLTF].content);
            } else s = JSON.parse(o.decode(e));
          } else s = e;
          if (void 0 === s.asset || s.asset.version[0] < 2) {
            r &&
              r(
                Error(
                  "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
                )
              );
            return;
          }
          let A = new im(s, {
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder,
          });
          A.fileLoader.setRequestHeader(this.requestHeader);
          for (let e = 0; e < this.pluginCallbacks.length; e++) {
            let t = this.pluginCallbacks[e](A);
            t.name ||
              console.error(
                "THREE.GLTFLoader: Invalid plugin found: missing name"
              ),
              (a[t.name] = t),
              (n[t.name] = !0);
          }
          if (s.extensionsUsed)
            for (let e = 0; e < s.extensionsUsed.length; ++e) {
              let t = s.extensionsUsed[e],
                i = s.extensionsRequired || [];
              switch (t) {
                case tU.KHR_MATERIALS_UNLIT:
                  n[t] = new tP();
                  break;
                case tU.KHR_DRACO_MESH_COMPRESSION:
                  n[t] = new t4(s, this.dracoLoader);
                  break;
                case tU.KHR_TEXTURE_TRANSFORM:
                  n[t] = new t5();
                  break;
                case tU.KHR_MESH_QUANTIZATION:
                  n[t] = new t6();
                  break;
                default:
                  i.indexOf(t) >= 0 &&
                    void 0 === a[t] &&
                    console.warn(
                      'THREE.GLTFLoader: Unknown extension "' + t + '".'
                    );
              }
            }
          A.setExtensions(n), A.setPlugins(a), A.parse(i, r);
        }
        parseAsync(e, t) {
          let i = this;
          return new Promise(function (r, s) {
            i.parse(e, t, r, s);
          });
        }
      }
      function t_() {
        let e = {};
        return {
          get: function (t) {
            return e[t];
          },
          add: function (t, i) {
            e[t] = i;
          },
          remove: function (t) {
            delete e[t];
          },
          removeAll: function () {
            e = {};
          },
        };
      }
      let tU = {
        KHR_BINARY_GLTF: "KHR_binary_glTF",
        KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
        KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
        KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
        KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
        KHR_MATERIALS_IOR: "KHR_materials_ior",
        KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
        KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
        KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
        KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
        KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
        KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
        KHR_MATERIALS_VOLUME: "KHR_materials_volume",
        KHR_TEXTURE_BASISU: "KHR_texture_basisu",
        KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
        KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
        KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
        EXT_MATERIALS_BUMP: "EXT_materials_bump",
        EXT_TEXTURE_WEBP: "EXT_texture_webp",
        EXT_TEXTURE_AVIF: "EXT_texture_avif",
        EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
        EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
      };
      class tN {
        constructor(e) {
          (this.parser = e),
            (this.name = tU.KHR_LIGHTS_PUNCTUAL),
            (this.cache = { refs: {}, uses: {} });
        }
        _markDefs() {
          let e = this.parser,
            t = this.parser.json.nodes || [];
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            r.extensions &&
              r.extensions[this.name] &&
              void 0 !== r.extensions[this.name].light &&
              e._addNodeRef(this.cache, r.extensions[this.name].light);
          }
        }
        _loadLight(e) {
          let t;
          let i = this.parser,
            r = "light:" + e,
            s = i.cache.get(r);
          if (s) return s;
          let n = i.json,
            a = (((n.extensions && n.extensions[this.name]) || {}).lights ||
              [])[e],
            o = new en.Q1f(0xffffff);
          void 0 !== a.color &&
            o.setRGB(a.color[0], a.color[1], a.color[2], en.Zr2);
          let A = void 0 !== a.range ? a.range : 0;
          switch (a.type) {
            case "directional":
              (t = new en.ZyN(o)).target.position.set(0, 0, -1),
                t.add(t.target);
              break;
            case "point":
              (t = new en.HiM(o)).distance = A;
              break;
            case "spot":
              ((t = new en.nCl(o)).distance = A),
                (a.spot = a.spot || {}),
                (a.spot.innerConeAngle =
                  void 0 !== a.spot.innerConeAngle ? a.spot.innerConeAngle : 0),
                (a.spot.outerConeAngle =
                  void 0 !== a.spot.outerConeAngle
                    ? a.spot.outerConeAngle
                    : Math.PI / 4),
                (t.angle = a.spot.outerConeAngle),
                (t.penumbra =
                  1 - a.spot.innerConeAngle / a.spot.outerConeAngle),
                t.target.position.set(0, 0, -1),
                t.add(t.target);
              break;
            default:
              throw Error("THREE.GLTFLoader: Unexpected light type: " + a.type);
          }
          return (
            t.position.set(0, 0, 0),
            (t.decay = 2),
            iu(t, a),
            void 0 !== a.intensity && (t.intensity = a.intensity),
            (t.name = i.createUniqueName(a.name || "light_" + e)),
            (s = Promise.resolve(t)),
            i.cache.add(r, s),
            s
          );
        }
        getDependency(e, t) {
          if ("light" === e) return this._loadLight(t);
        }
        createNodeAttachment(e) {
          let t = this,
            i = this.parser,
            r = i.json.nodes[e],
            s = ((r.extensions && r.extensions[this.name]) || {}).light;
          return void 0 === s
            ? null
            : this._loadLight(s).then(function (e) {
                return i._getNodeRef(t.cache, s, e);
              });
        }
      }
      class tP {
        constructor() {
          this.name = tU.KHR_MATERIALS_UNLIT;
        }
        getMaterialType() {
          return en.V9B;
        }
        extendParams(e, t, i) {
          let r = [];
          (e.color = new en.Q1f(1, 1, 1)), (e.opacity = 1);
          let s = t.pbrMetallicRoughness;
          if (s) {
            if (Array.isArray(s.baseColorFactor)) {
              let t = s.baseColorFactor;
              e.color.setRGB(t[0], t[1], t[2], en.Zr2), (e.opacity = t[3]);
            }
            void 0 !== s.baseColorTexture &&
              r.push(i.assignTexture(e, "map", s.baseColorTexture, en.er$));
          }
          return Promise.all(r);
        }
      }
      class tG {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_MATERIALS_EMISSIVE_STRENGTH);
        }
        extendMaterialParams(e, t) {
          let i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          let r = i.extensions[this.name].emissiveStrength;
          return void 0 !== r && (t.emissiveIntensity = r), Promise.resolve();
        }
      }
      class tO {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_MATERIALS_CLEARCOAT);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? en.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [],
            n = r.extensions[this.name];
          if (
            (void 0 !== n.clearcoatFactor && (t.clearcoat = n.clearcoatFactor),
            void 0 !== n.clearcoatTexture &&
              s.push(i.assignTexture(t, "clearcoatMap", n.clearcoatTexture)),
            void 0 !== n.clearcoatRoughnessFactor &&
              (t.clearcoatRoughness = n.clearcoatRoughnessFactor),
            void 0 !== n.clearcoatRoughnessTexture &&
              s.push(
                i.assignTexture(
                  t,
                  "clearcoatRoughnessMap",
                  n.clearcoatRoughnessTexture
                )
              ),
            void 0 !== n.clearcoatNormalTexture &&
              (s.push(
                i.assignTexture(
                  t,
                  "clearcoatNormalMap",
                  n.clearcoatNormalTexture
                )
              ),
              void 0 !== n.clearcoatNormalTexture.scale))
          ) {
            let e = n.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new en.I9Y(e, e);
          }
          return Promise.all(s);
        }
      }
      class tH {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_MATERIALS_DISPERSION);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? en.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          let r = i.extensions[this.name];
          return (
            (t.dispersion = void 0 !== r.dispersion ? r.dispersion : 0),
            Promise.resolve()
          );
        }
      }
      class tq {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_MATERIALS_IRIDESCENCE);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? en.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [],
            n = r.extensions[this.name];
          return (
            void 0 !== n.iridescenceFactor &&
              (t.iridescence = n.iridescenceFactor),
            void 0 !== n.iridescenceTexture &&
              s.push(
                i.assignTexture(t, "iridescenceMap", n.iridescenceTexture)
              ),
            void 0 !== n.iridescenceIor &&
              (t.iridescenceIOR = n.iridescenceIor),
            void 0 === t.iridescenceThicknessRange &&
              (t.iridescenceThicknessRange = [100, 400]),
            void 0 !== n.iridescenceThicknessMinimum &&
              (t.iridescenceThicknessRange[0] = n.iridescenceThicknessMinimum),
            void 0 !== n.iridescenceThicknessMaximum &&
              (t.iridescenceThicknessRange[1] = n.iridescenceThicknessMaximum),
            void 0 !== n.iridescenceThicknessTexture &&
              s.push(
                i.assignTexture(
                  t,
                  "iridescenceThicknessMap",
                  n.iridescenceThicknessTexture
                )
              ),
            Promise.all(s)
          );
        }
      }
      class tV {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_MATERIALS_SHEEN);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? en.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [];
          (t.sheenColor = new en.Q1f(0, 0, 0)),
            (t.sheenRoughness = 0),
            (t.sheen = 1);
          let n = r.extensions[this.name];
          if (void 0 !== n.sheenColorFactor) {
            let e = n.sheenColorFactor;
            t.sheenColor.setRGB(e[0], e[1], e[2], en.Zr2);
          }
          return (
            void 0 !== n.sheenRoughnessFactor &&
              (t.sheenRoughness = n.sheenRoughnessFactor),
            void 0 !== n.sheenColorTexture &&
              s.push(
                i.assignTexture(t, "sheenColorMap", n.sheenColorTexture, en.er$)
              ),
            void 0 !== n.sheenRoughnessTexture &&
              s.push(
                i.assignTexture(t, "sheenRoughnessMap", n.sheenRoughnessTexture)
              ),
            Promise.all(s)
          );
        }
      }
      class tY {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_MATERIALS_TRANSMISSION);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? en.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [],
            n = r.extensions[this.name];
          return (
            void 0 !== n.transmissionFactor &&
              (t.transmission = n.transmissionFactor),
            void 0 !== n.transmissionTexture &&
              s.push(
                i.assignTexture(t, "transmissionMap", n.transmissionTexture)
              ),
            Promise.all(s)
          );
        }
      }
      class tJ {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_MATERIALS_VOLUME);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? en.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [],
            n = r.extensions[this.name];
          (t.thickness = void 0 !== n.thicknessFactor ? n.thicknessFactor : 0),
            void 0 !== n.thicknessTexture &&
              s.push(i.assignTexture(t, "thicknessMap", n.thicknessTexture)),
            (t.attenuationDistance = n.attenuationDistance || 1 / 0);
          let a = n.attenuationColor || [1, 1, 1];
          return (
            (t.attenuationColor = new en.Q1f().setRGB(
              a[0],
              a[1],
              a[2],
              en.Zr2
            )),
            Promise.all(s)
          );
        }
      }
      class tK {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_MATERIALS_IOR);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? en.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          let r = i.extensions[this.name];
          return (t.ior = void 0 !== r.ior ? r.ior : 1.5), Promise.resolve();
        }
      }
      class tz {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_MATERIALS_SPECULAR);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? en.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [],
            n = r.extensions[this.name];
          (t.specularIntensity =
            void 0 !== n.specularFactor ? n.specularFactor : 1),
            void 0 !== n.specularTexture &&
              s.push(
                i.assignTexture(t, "specularIntensityMap", n.specularTexture)
              );
          let a = n.specularColorFactor || [1, 1, 1];
          return (
            (t.specularColor = new en.Q1f().setRGB(a[0], a[1], a[2], en.Zr2)),
            void 0 !== n.specularColorTexture &&
              s.push(
                i.assignTexture(
                  t,
                  "specularColorMap",
                  n.specularColorTexture,
                  en.er$
                )
              ),
            Promise.all(s)
          );
        }
      }
      class t$ {
        constructor(e) {
          (this.parser = e), (this.name = tU.EXT_MATERIALS_BUMP);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? en.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [],
            n = r.extensions[this.name];
          return (
            (t.bumpScale = void 0 !== n.bumpFactor ? n.bumpFactor : 1),
            void 0 !== n.bumpTexture &&
              s.push(i.assignTexture(t, "bumpMap", n.bumpTexture)),
            Promise.all(s)
          );
        }
      }
      class tj {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_MATERIALS_ANISOTROPY);
        }
        getMaterialType(e) {
          let t = this.parser.json.materials[e];
          return t.extensions && t.extensions[this.name] ? en.uSd : null;
        }
        extendMaterialParams(e, t) {
          let i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          let s = [],
            n = r.extensions[this.name];
          return (
            void 0 !== n.anisotropyStrength &&
              (t.anisotropy = n.anisotropyStrength),
            void 0 !== n.anisotropyRotation &&
              (t.anisotropyRotation = n.anisotropyRotation),
            void 0 !== n.anisotropyTexture &&
              s.push(i.assignTexture(t, "anisotropyMap", n.anisotropyTexture)),
            Promise.all(s)
          );
        }
      }
      class tW {
        constructor(e) {
          (this.parser = e), (this.name = tU.KHR_TEXTURE_BASISU);
        }
        loadTexture(e) {
          let t = this.parser,
            i = t.json,
            r = i.textures[e];
          if (!r.extensions || !r.extensions[this.name]) return null;
          let s = r.extensions[this.name],
            n = t.options.ktx2Loader;
          if (!n) {
            if (
              !(
                i.extensionsRequired &&
                i.extensionsRequired.indexOf(this.name) >= 0
              )
            )
              return null;
            throw Error(
              "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
            );
          }
          return t.loadTextureImage(e, s.source, n);
        }
      }
      class tX {
        constructor(e) {
          (this.parser = e),
            (this.name = tU.EXT_TEXTURE_WEBP),
            (this.isSupported = null);
        }
        loadTexture(e) {
          let t = this.name,
            i = this.parser,
            r = i.json,
            s = r.textures[e];
          if (!s.extensions || !s.extensions[t]) return null;
          let n = s.extensions[t],
            a = r.images[n.source],
            o = i.textureLoader;
          if (a.uri) {
            let e = i.options.manager.getHandler(a.uri);
            null !== e && (o = e);
          }
          return this.detectSupport().then(function (s) {
            if (s) return i.loadTextureImage(e, n.source, o);
            if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0)
              throw Error(
                "THREE.GLTFLoader: WebP required by asset but unsupported."
              );
            return i.loadTexture(e);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (e) {
                let t = new Image();
                (t.src =
                  "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
                  (t.onload = t.onerror =
                    function () {
                      e(1 === t.height);
                    });
              })),
            this.isSupported
          );
        }
      }
      class tZ {
        constructor(e) {
          (this.parser = e),
            (this.name = tU.EXT_TEXTURE_AVIF),
            (this.isSupported = null);
        }
        loadTexture(e) {
          let t = this.name,
            i = this.parser,
            r = i.json,
            s = r.textures[e];
          if (!s.extensions || !s.extensions[t]) return null;
          let n = s.extensions[t],
            a = r.images[n.source],
            o = i.textureLoader;
          if (a.uri) {
            let e = i.options.manager.getHandler(a.uri);
            null !== e && (o = e);
          }
          return this.detectSupport().then(function (s) {
            if (s) return i.loadTextureImage(e, n.source, o);
            if (r.extensionsRequired && r.extensionsRequired.indexOf(t) >= 0)
              throw Error(
                "THREE.GLTFLoader: AVIF required by asset but unsupported."
              );
            return i.loadTexture(e);
          });
        }
        detectSupport() {
          return (
            this.isSupported ||
              (this.isSupported = new Promise(function (e) {
                let t = new Image();
                (t.src =
                  "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
                  (t.onload = t.onerror =
                    function () {
                      e(1 === t.height);
                    });
              })),
            this.isSupported
          );
        }
      }
      class t0 {
        constructor(e) {
          (this.name = tU.EXT_MESHOPT_COMPRESSION), (this.parser = e);
        }
        loadBufferView(e) {
          let t = this.parser.json,
            i = t.bufferViews[e];
          if (!i.extensions || !i.extensions[this.name]) return null;
          {
            let e = i.extensions[this.name],
              r = this.parser.getDependency("buffer", e.buffer),
              s = this.parser.options.meshoptDecoder;
            if (!s || !s.supported) {
              if (
                !(
                  t.extensionsRequired &&
                  t.extensionsRequired.indexOf(this.name) >= 0
                )
              )
                return null;
              throw Error(
                "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
              );
            }
            return r.then(function (t) {
              let i = e.byteOffset || 0,
                r = e.byteLength || 0,
                n = e.count,
                a = e.byteStride,
                o = new Uint8Array(t, i, r);
              return s.decodeGltfBufferAsync
                ? s
                    .decodeGltfBufferAsync(n, a, o, e.mode, e.filter)
                    .then(function (e) {
                      return e.buffer;
                    })
                : s.ready.then(function () {
                    let t = new ArrayBuffer(n * a);
                    return (
                      s.decodeGltfBuffer(
                        new Uint8Array(t),
                        n,
                        a,
                        o,
                        e.mode,
                        e.filter
                      ),
                      t
                    );
                  });
            });
          }
        }
      }
      class t1 {
        constructor(e) {
          (this.name = tU.EXT_MESH_GPU_INSTANCING), (this.parser = e);
        }
        createNodeMesh(e) {
          let t = this.parser.json,
            i = t.nodes[e];
          if (!i.extensions || !i.extensions[this.name] || void 0 === i.mesh)
            return null;
          for (let e of t.meshes[i.mesh].primitives)
            if (
              e.mode !== it.TRIANGLES &&
              e.mode !== it.TRIANGLE_STRIP &&
              e.mode !== it.TRIANGLE_FAN &&
              void 0 !== e.mode
            )
              return null;
          let r = i.extensions[this.name].attributes,
            s = [],
            n = {};
          for (let e in r)
            s.push(
              this.parser
                .getDependency("accessor", r[e])
                .then((t) => ((n[e] = t), n[e]))
            );
          return s.length < 1
            ? null
            : (s.push(this.parser.createNodeMesh(e)),
              Promise.all(s).then((e) => {
                let t = e.pop(),
                  i = t.isGroup ? t.children : [t],
                  r = e[0].count,
                  s = [];
                for (let e of i) {
                  let t = new en.kn4(),
                    i = new en.Pq0(),
                    a = new en.PTz(),
                    o = new en.Pq0(1, 1, 1),
                    A = new en.ZLX(e.geometry, e.material, r);
                  for (let e = 0; e < r; e++)
                    n.TRANSLATION && i.fromBufferAttribute(n.TRANSLATION, e),
                      n.ROTATION && a.fromBufferAttribute(n.ROTATION, e),
                      n.SCALE && o.fromBufferAttribute(n.SCALE, e),
                      A.setMatrixAt(e, t.compose(i, a, o));
                  for (let t in n)
                    if ("_COLOR_0" === t) {
                      let e = n[t];
                      A.instanceColor = new en.uWO(
                        e.array,
                        e.itemSize,
                        e.normalized
                      );
                    } else
                      "TRANSLATION" !== t &&
                        "ROTATION" !== t &&
                        "SCALE" !== t &&
                        e.geometry.setAttribute(t, n[t]);
                  en.B69.prototype.copy.call(A, e),
                    this.parser.assignFinalMaterial(A),
                    s.push(A);
                }
                return t.isGroup ? (t.clear(), t.add(...s), t) : s[0];
              }));
        }
      }
      let t2 = "glTF",
        t3 = { JSON: 0x4e4f534a, BIN: 5130562 };
      class t8 {
        constructor(e) {
          (this.name = tU.KHR_BINARY_GLTF),
            (this.content = null),
            (this.body = null);
          let t = new DataView(e, 0, 12),
            i = new TextDecoder();
          if (
            ((this.header = {
              magic: i.decode(new Uint8Array(e.slice(0, 4))),
              version: t.getUint32(4, !0),
              length: t.getUint32(8, !0),
            }),
            this.header.magic !== t2)
          )
            throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
          if (this.header.version < 2)
            throw Error("THREE.GLTFLoader: Legacy binary file detected.");
          let r = this.header.length - 12,
            s = new DataView(e, 12),
            n = 0;
          for (; n < r; ) {
            let t = s.getUint32(n, !0);
            n += 4;
            let r = s.getUint32(n, !0);
            if (((n += 4), r === t3.JSON)) {
              let r = new Uint8Array(e, 12 + n, t);
              this.content = i.decode(r);
            } else if (r === t3.BIN) {
              let i = 12 + n;
              this.body = e.slice(i, i + t);
            }
            n += t;
          }
          if (null === this.content)
            throw Error("THREE.GLTFLoader: JSON content not found.");
        }
      }
      class t4 {
        constructor(e, t) {
          if (!t)
            throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
          (this.name = tU.KHR_DRACO_MESH_COMPRESSION),
            (this.json = e),
            (this.dracoLoader = t),
            this.dracoLoader.preload();
        }
        decodePrimitive(e, t) {
          let i = this.json,
            r = this.dracoLoader,
            s = e.extensions[this.name].bufferView,
            n = e.extensions[this.name].attributes,
            a = {},
            o = {},
            A = {};
          for (let e in n) a[io[e] || e.toLowerCase()] = n[e];
          for (let t in e.attributes) {
            let r = io[t] || t.toLowerCase();
            if (void 0 !== n[t]) {
              let s = i.accessors[e.attributes[t]],
                n = ii[s.componentType];
              (A[r] = n.name), (o[r] = !0 === s.normalized);
            }
          }
          return t.getDependency("bufferView", s).then(function (e) {
            return new Promise(function (t, i) {
              r.decodeDracoFile(
                e,
                function (e) {
                  for (let t in e.attributes) {
                    let i = e.attributes[t],
                      r = o[t];
                    void 0 !== r && (i.normalized = r);
                  }
                  t(e);
                },
                a,
                A,
                en.Zr2,
                i
              );
            });
          });
        }
      }
      class t5 {
        constructor() {
          this.name = tU.KHR_TEXTURE_TRANSFORM;
        }
        extendTexture(e, t) {
          return (
            ((void 0 === t.texCoord || t.texCoord === e.channel) &&
              void 0 === t.offset &&
              void 0 === t.rotation &&
              void 0 === t.scale) ||
              ((e = e.clone()),
              void 0 !== t.texCoord && (e.channel = t.texCoord),
              void 0 !== t.offset && e.offset.fromArray(t.offset),
              void 0 !== t.rotation && (e.rotation = t.rotation),
              void 0 !== t.scale && e.repeat.fromArray(t.scale),
              (e.needsUpdate = !0)),
            e
          );
        }
      }
      class t6 {
        constructor() {
          this.name = tU.KHR_MESH_QUANTIZATION;
        }
      }
      class t9 extends en.lGw {
        constructor(e, t, i, r) {
          super(e, t, i, r);
        }
        copySampleValue_(e) {
          let t = this.resultBuffer,
            i = this.sampleValues,
            r = this.valueSize,
            s = e * r * 3 + r;
          for (let e = 0; e !== r; e++) t[e] = i[s + e];
          return t;
        }
        interpolate_(e, t, i, r) {
          let s = this.resultBuffer,
            n = this.sampleValues,
            a = this.valueSize,
            o = 2 * a,
            A = 3 * a,
            l = r - t,
            h = (i - t) / l,
            c = h * h,
            u = c * h,
            g = e * A,
            d = g - A,
            p = -2 * u + 3 * c,
            m = u - c,
            f = 1 - p,
            I = m - c + h;
          for (let e = 0; e !== a; e++) {
            let t = n[d + e + a],
              i = n[d + e + o] * l,
              r = n[g + e + a],
              A = n[g + e] * l;
            s[e] = f * t + I * i + p * r + m * A;
          }
          return s;
        }
      }
      let t7 = new en.PTz();
      class ie extends t9 {
        interpolate_(e, t, i, r) {
          let s = super.interpolate_(e, t, i, r);
          return t7.fromArray(s).normalize().toArray(s), s;
        }
      }
      let it = {
          POINTS: 0,
          LINES: 1,
          LINE_LOOP: 2,
          LINE_STRIP: 3,
          TRIANGLES: 4,
          TRIANGLE_STRIP: 5,
          TRIANGLE_FAN: 6,
        },
        ii = {
          5120: Int8Array,
          5121: Uint8Array,
          5122: Int16Array,
          5123: Uint16Array,
          5125: Uint32Array,
          5126: Float32Array,
        },
        ir = {
          9728: en.hxR,
          9729: en.k6q,
          9984: en.pHI,
          9985: en.kRr,
          9986: en.Cfg,
          9987: en.$_I,
        },
        is = { 33071: en.ghU, 33648: en.kTW, 10497: en.GJx },
        ia = {
          SCALAR: 1,
          VEC2: 2,
          VEC3: 3,
          VEC4: 4,
          MAT2: 4,
          MAT3: 9,
          MAT4: 16,
        },
        io = {
          POSITION: "position",
          NORMAL: "normal",
          TANGENT: "tangent",
          TEXCOORD_0: "uv",
          TEXCOORD_1: "uv1",
          TEXCOORD_2: "uv2",
          TEXCOORD_3: "uv3",
          COLOR_0: "color",
          WEIGHTS_0: "skinWeight",
          JOINTS_0: "skinIndex",
        },
        iA = {
          scale: "scale",
          translation: "position",
          rotation: "quaternion",
          weights: "morphTargetInfluences",
        },
        il = { CUBICSPLINE: void 0, LINEAR: en.PJ3, STEP: en.ljd },
        ih = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
      function ic(e, t, i) {
        for (let r in i.extensions)
          void 0 === e[r] &&
            ((t.userData.gltfExtensions = t.userData.gltfExtensions || {}),
            (t.userData.gltfExtensions[r] = i.extensions[r]));
      }
      function iu(e, t) {
        void 0 !== t.extras &&
          ("object" == typeof t.extras
            ? Object.assign(e.userData, t.extras)
            : console.warn(
                "THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras
              ));
      }
      function ig(e) {
        let t = "",
          i = Object.keys(e).sort();
        for (let r = 0, s = i.length; r < s; r++)
          t += i[r] + ":" + e[i[r]] + ";";
        return t;
      }
      function id(e) {
        switch (e) {
          case Int8Array:
            return 1 / 127;
          case Uint8Array:
            return 1 / 255;
          case Int16Array:
            return 1 / 32767;
          case Uint16Array:
            return 1 / 65535;
          default:
            throw Error(
              "THREE.GLTFLoader: Unsupported normalized accessor component type."
            );
        }
      }
      let ip = new en.kn4();
      class im {
        constructor(e = {}, t = {}) {
          (this.json = e),
            (this.extensions = {}),
            (this.plugins = {}),
            (this.options = t),
            (this.cache = new t_()),
            (this.associations = new Map()),
            (this.primitiveCache = {}),
            (this.nodeCache = {}),
            (this.meshCache = { refs: {}, uses: {} }),
            (this.cameraCache = { refs: {}, uses: {} }),
            (this.lightCache = { refs: {}, uses: {} }),
            (this.sourceCache = {}),
            (this.textureCache = {}),
            (this.nodeNamesUsed = {});
          let i = !1,
            r = -1,
            s = !1,
            n = -1;
          if ("undefined" != typeof navigator) {
            let e = navigator.userAgent;
            i = !0 === /^((?!chrome|android).)*safari/i.test(e);
            let t = e.match(/Version\/(\d+)/);
            (r = i && t ? parseInt(t[1], 10) : -1),
              (n = (s = e.indexOf("Firefox") > -1)
                ? e.match(/Firefox\/([0-9]+)\./)[1]
                : -1);
          }
          "undefined" == typeof createImageBitmap ||
          (i && r < 17) ||
          (s && n < 98)
            ? (this.textureLoader = new en.Tap(this.options.manager))
            : (this.textureLoader = new en.Kzg(this.options.manager)),
            this.textureLoader.setCrossOrigin(this.options.crossOrigin),
            this.textureLoader.setRequestHeader(this.options.requestHeader),
            (this.fileLoader = new en.Y9S(this.options.manager)),
            this.fileLoader.setResponseType("arraybuffer"),
            "use-credentials" === this.options.crossOrigin &&
              this.fileLoader.setWithCredentials(!0);
        }
        setExtensions(e) {
          this.extensions = e;
        }
        setPlugins(e) {
          this.plugins = e;
        }
        parse(e, t) {
          let i = this,
            r = this.json,
            s = this.extensions;
          this.cache.removeAll(),
            (this.nodeCache = {}),
            this._invokeAll(function (e) {
              return e._markDefs && e._markDefs();
            }),
            Promise.all(
              this._invokeAll(function (e) {
                return e.beforeRoot && e.beforeRoot();
              })
            )
              .then(function () {
                return Promise.all([
                  i.getDependencies("scene"),
                  i.getDependencies("animation"),
                  i.getDependencies("camera"),
                ]);
              })
              .then(function (t) {
                let n = {
                  scene: t[0][r.scene || 0],
                  scenes: t[0],
                  animations: t[1],
                  cameras: t[2],
                  asset: r.asset,
                  parser: i,
                  userData: {},
                };
                return (
                  ic(s, n, r),
                  iu(n, r),
                  Promise.all(
                    i._invokeAll(function (e) {
                      return e.afterRoot && e.afterRoot(n);
                    })
                  ).then(function () {
                    for (let e of n.scenes) e.updateMatrixWorld();
                    e(n);
                  })
                );
              })
              .catch(t);
        }
        _markDefs() {
          let e = this.json.nodes || [],
            t = this.json.skins || [],
            i = this.json.meshes || [];
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i].joints;
            for (let t = 0, i = r.length; t < i; t++) e[r[t]].isBone = !0;
          }
          for (let t = 0, r = e.length; t < r; t++) {
            let r = e[t];
            void 0 !== r.mesh &&
              (this._addNodeRef(this.meshCache, r.mesh),
              void 0 !== r.skin && (i[r.mesh].isSkinnedMesh = !0)),
              void 0 !== r.camera &&
                this._addNodeRef(this.cameraCache, r.camera);
          }
        }
        _addNodeRef(e, t) {
          void 0 !== t &&
            (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
        }
        _getNodeRef(e, t, i) {
          if (e.refs[t] <= 1) return i;
          let r = i.clone(),
            s = (e, t) => {
              let i = this.associations.get(e);
              for (let [r, n] of (null != i && this.associations.set(t, i),
              e.children.entries()))
                s(n, t.children[r]);
            };
          return s(i, r), (r.name += "_instance_" + e.uses[t]++), r;
        }
        _invokeOne(e) {
          let t = Object.values(this.plugins);
          t.push(this);
          for (let i = 0; i < t.length; i++) {
            let r = e(t[i]);
            if (r) return r;
          }
          return null;
        }
        _invokeAll(e) {
          let t = Object.values(this.plugins);
          t.unshift(this);
          let i = [];
          for (let r = 0; r < t.length; r++) {
            let s = e(t[r]);
            s && i.push(s);
          }
          return i;
        }
        getDependency(e, t) {
          let i = e + ":" + t,
            r = this.cache.get(i);
          if (!r) {
            switch (e) {
              case "scene":
                r = this.loadScene(t);
                break;
              case "node":
                r = this._invokeOne(function (e) {
                  return e.loadNode && e.loadNode(t);
                });
                break;
              case "mesh":
                r = this._invokeOne(function (e) {
                  return e.loadMesh && e.loadMesh(t);
                });
                break;
              case "accessor":
                r = this.loadAccessor(t);
                break;
              case "bufferView":
                r = this._invokeOne(function (e) {
                  return e.loadBufferView && e.loadBufferView(t);
                });
                break;
              case "buffer":
                r = this.loadBuffer(t);
                break;
              case "material":
                r = this._invokeOne(function (e) {
                  return e.loadMaterial && e.loadMaterial(t);
                });
                break;
              case "texture":
                r = this._invokeOne(function (e) {
                  return e.loadTexture && e.loadTexture(t);
                });
                break;
              case "skin":
                r = this.loadSkin(t);
                break;
              case "animation":
                r = this._invokeOne(function (e) {
                  return e.loadAnimation && e.loadAnimation(t);
                });
                break;
              case "camera":
                r = this.loadCamera(t);
                break;
              default:
                if (
                  !(r = this._invokeOne(function (i) {
                    return (
                      i != this && i.getDependency && i.getDependency(e, t)
                    );
                  }))
                )
                  throw Error("Unknown type: " + e);
            }
            this.cache.add(i, r);
          }
          return r;
        }
        getDependencies(e) {
          let t = this.cache.get(e);
          if (!t) {
            let i = this;
            (t = Promise.all(
              (this.json[e + ("mesh" === e ? "es" : "s")] || []).map(function (
                t,
                r
              ) {
                return i.getDependency(e, r);
              })
            )),
              this.cache.add(e, t);
          }
          return t;
        }
        loadBuffer(e) {
          let t = this.json.buffers[e],
            i = this.fileLoader;
          if (t.type && "arraybuffer" !== t.type)
            throw Error(
              "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
            );
          if (void 0 === t.uri && 0 === e)
            return Promise.resolve(this.extensions[tU.KHR_BINARY_GLTF].body);
          let r = this.options;
          return new Promise(function (e, s) {
            i.load(en.r6x.resolveURL(t.uri, r.path), e, void 0, function () {
              s(
                Error(
                  'THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'
                )
              );
            });
          });
        }
        loadBufferView(e) {
          let t = this.json.bufferViews[e];
          return this.getDependency("buffer", t.buffer).then(function (e) {
            let i = t.byteLength || 0,
              r = t.byteOffset || 0;
            return e.slice(r, r + i);
          });
        }
        loadAccessor(e) {
          let t = this,
            i = this.json,
            r = this.json.accessors[e];
          if (void 0 === r.bufferView && void 0 === r.sparse) {
            let e = ia[r.type],
              t = ii[r.componentType],
              i = !0 === r.normalized,
              s = new t(r.count * e);
            return Promise.resolve(new en.THS(s, e, i));
          }
          let s = [];
          return (
            void 0 !== r.bufferView
              ? s.push(this.getDependency("bufferView", r.bufferView))
              : s.push(null),
            void 0 !== r.sparse &&
              (s.push(
                this.getDependency("bufferView", r.sparse.indices.bufferView)
              ),
              s.push(
                this.getDependency("bufferView", r.sparse.values.bufferView)
              )),
            Promise.all(s).then(function (e) {
              let s, n;
              let a = e[0],
                o = ia[r.type],
                A = ii[r.componentType],
                l = A.BYTES_PER_ELEMENT,
                h = l * o,
                c = r.byteOffset || 0,
                u =
                  void 0 !== r.bufferView
                    ? i.bufferViews[r.bufferView].byteStride
                    : void 0,
                g = !0 === r.normalized;
              if (u && u !== h) {
                let e = Math.floor(c / u),
                  i =
                    "InterleavedBuffer:" +
                    r.bufferView +
                    ":" +
                    r.componentType +
                    ":" +
                    e +
                    ":" +
                    r.count,
                  h = t.cache.get(i);
                h ||
                  ((s = new A(a, e * u, (r.count * u) / l)),
                  (h = new en.eB$(s, u / l)),
                  t.cache.add(i, h)),
                  (n = new en.eHs(h, o, (c % u) / l, g));
              } else (s = null === a ? new A(r.count * o) : new A(a, c, r.count * o)), (n = new en.THS(s, o, g));
              if (void 0 !== r.sparse) {
                let t = ia.SCALAR,
                  i = ii[r.sparse.indices.componentType],
                  s = r.sparse.indices.byteOffset || 0,
                  l = r.sparse.values.byteOffset || 0,
                  h = new i(e[1], s, r.sparse.count * t),
                  c = new A(e[2], l, r.sparse.count * o);
                null !== a &&
                  (n = new en.THS(n.array.slice(), n.itemSize, n.normalized)),
                  (n.normalized = !1);
                for (let e = 0, t = h.length; e < t; e++) {
                  let t = h[e];
                  if (
                    (n.setX(t, c[e * o]),
                    o >= 2 && n.setY(t, c[e * o + 1]),
                    o >= 3 && n.setZ(t, c[e * o + 2]),
                    o >= 4 && n.setW(t, c[e * o + 3]),
                    o >= 5)
                  )
                    throw Error(
                      "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
                    );
                }
                n.normalized = g;
              }
              return n;
            })
          );
        }
        loadTexture(e) {
          let t = this.json,
            i = this.options,
            r = t.textures[e].source,
            s = t.images[r],
            n = this.textureLoader;
          if (s.uri) {
            let e = i.manager.getHandler(s.uri);
            null !== e && (n = e);
          }
          return this.loadTextureImage(e, r, n);
        }
        loadTextureImage(e, t, i) {
          let r = this,
            s = this.json,
            n = s.textures[e],
            a = s.images[t],
            o = (a.uri || a.bufferView) + ":" + n.sampler;
          if (this.textureCache[o]) return this.textureCache[o];
          let A = this.loadImageSource(t, i)
            .then(function (t) {
              (t.flipY = !1),
                (t.name = n.name || a.name || ""),
                "" === t.name &&
                  "string" == typeof a.uri &&
                  !1 === a.uri.startsWith("data:image/") &&
                  (t.name = a.uri);
              let i = (s.samplers || {})[n.sampler] || {};
              return (
                (t.magFilter = ir[i.magFilter] || en.k6q),
                (t.minFilter = ir[i.minFilter] || en.$_I),
                (t.wrapS = is[i.wrapS] || en.GJx),
                (t.wrapT = is[i.wrapT] || en.GJx),
                (t.generateMipmaps =
                  !t.isCompressedTexture &&
                  t.minFilter !== en.hxR &&
                  t.minFilter !== en.k6q),
                r.associations.set(t, { textures: e }),
                t
              );
            })
            .catch(function () {
              return null;
            });
          return (this.textureCache[o] = A), A;
        }
        loadImageSource(e, t) {
          let i = this.json,
            r = this.options;
          if (void 0 !== this.sourceCache[e])
            return this.sourceCache[e].then((e) => e.clone());
          let s = i.images[e],
            n = self.URL || self.webkitURL,
            a = s.uri || "",
            o = !1;
          if (void 0 !== s.bufferView)
            a = this.getDependency("bufferView", s.bufferView).then(function (
              e
            ) {
              o = !0;
              let t = new Blob([e], { type: s.mimeType });
              return (a = n.createObjectURL(t));
            });
          else if (void 0 === s.uri)
            throw Error(
              "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
            );
          let A = Promise.resolve(a)
            .then(function (e) {
              return new Promise(function (i, s) {
                let n = i;
                !0 === t.isImageBitmapLoader &&
                  (n = function (e) {
                    let t = new en.gPd(e);
                    (t.needsUpdate = !0), i(t);
                  }),
                  t.load(en.r6x.resolveURL(e, r.path), n, void 0, s);
              });
            })
            .then(function (e) {
              var t;
              return (
                !0 === o && n.revokeObjectURL(a),
                iu(e, s),
                (e.userData.mimeType =
                  s.mimeType ||
                  ((t = s.uri).search(/\.jpe?g($|\?)/i) > 0 ||
                  0 === t.search(/^data\:image\/jpeg/)
                    ? "image/jpeg"
                    : t.search(/\.webp($|\?)/i) > 0 ||
                      0 === t.search(/^data\:image\/webp/)
                    ? "image/webp"
                    : t.search(/\.ktx2($|\?)/i) > 0 ||
                      0 === t.search(/^data\:image\/ktx2/)
                    ? "image/ktx2"
                    : "image/png")),
                e
              );
            })
            .catch(function (e) {
              throw (
                (console.error("THREE.GLTFLoader: Couldn't load texture", a), e)
              );
            });
          return (this.sourceCache[e] = A), A;
        }
        assignTexture(e, t, i, r) {
          let s = this;
          return this.getDependency("texture", i.index).then(function (n) {
            if (!n) return null;
            if (
              (void 0 !== i.texCoord &&
                i.texCoord > 0 &&
                ((n = n.clone()).channel = i.texCoord),
              s.extensions[tU.KHR_TEXTURE_TRANSFORM])
            ) {
              let e =
                void 0 !== i.extensions
                  ? i.extensions[tU.KHR_TEXTURE_TRANSFORM]
                  : void 0;
              if (e) {
                let t = s.associations.get(n);
                (n = s.extensions[tU.KHR_TEXTURE_TRANSFORM].extendTexture(
                  n,
                  e
                )),
                  s.associations.set(n, t);
              }
            }
            return void 0 !== r && (n.colorSpace = r), (e[t] = n), n;
          });
        }
        assignFinalMaterial(e) {
          let t = e.geometry,
            i = e.material,
            r = void 0 === t.attributes.tangent,
            s = void 0 !== t.attributes.color,
            n = void 0 === t.attributes.normal;
          if (e.isPoints) {
            let e = "PointsMaterial:" + i.uuid,
              t = this.cache.get(e);
            t ||
              ((t = new en.BH$()),
              en.imn.prototype.copy.call(t, i),
              t.color.copy(i.color),
              (t.map = i.map),
              (t.sizeAttenuation = !1),
              this.cache.add(e, t)),
              (i = t);
          } else if (e.isLine) {
            let e = "LineBasicMaterial:" + i.uuid,
              t = this.cache.get(e);
            t ||
              ((t = new en.mrM()),
              en.imn.prototype.copy.call(t, i),
              t.color.copy(i.color),
              (t.map = i.map),
              this.cache.add(e, t)),
              (i = t);
          }
          if (r || s || n) {
            let e = "ClonedMaterial:" + i.uuid + ":";
            r && (e += "derivative-tangents:"),
              s && (e += "vertex-colors:"),
              n && (e += "flat-shading:");
            let t = this.cache.get(e);
            t ||
              ((t = i.clone()),
              s && (t.vertexColors = !0),
              n && (t.flatShading = !0),
              r &&
                (t.normalScale && (t.normalScale.y *= -1),
                t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)),
              this.cache.add(e, t),
              this.associations.set(t, this.associations.get(i))),
              (i = t);
          }
          e.material = i;
        }
        getMaterialType() {
          return en._4j;
        }
        loadMaterial(e) {
          let t;
          let i = this,
            r = this.json,
            s = this.extensions,
            n = r.materials[e],
            a = {},
            o = n.extensions || {},
            A = [];
          if (o[tU.KHR_MATERIALS_UNLIT]) {
            let e = s[tU.KHR_MATERIALS_UNLIT];
            (t = e.getMaterialType()), A.push(e.extendParams(a, n, i));
          } else {
            let r = n.pbrMetallicRoughness || {};
            if (
              ((a.color = new en.Q1f(1, 1, 1)),
              (a.opacity = 1),
              Array.isArray(r.baseColorFactor))
            ) {
              let e = r.baseColorFactor;
              a.color.setRGB(e[0], e[1], e[2], en.Zr2), (a.opacity = e[3]);
            }
            void 0 !== r.baseColorTexture &&
              A.push(i.assignTexture(a, "map", r.baseColorTexture, en.er$)),
              (a.metalness =
                void 0 !== r.metallicFactor ? r.metallicFactor : 1),
              (a.roughness =
                void 0 !== r.roughnessFactor ? r.roughnessFactor : 1),
              void 0 !== r.metallicRoughnessTexture &&
                (A.push(
                  i.assignTexture(a, "metalnessMap", r.metallicRoughnessTexture)
                ),
                A.push(
                  i.assignTexture(a, "roughnessMap", r.metallicRoughnessTexture)
                )),
              (t = this._invokeOne(function (t) {
                return t.getMaterialType && t.getMaterialType(e);
              })),
              A.push(
                Promise.all(
                  this._invokeAll(function (t) {
                    return (
                      t.extendMaterialParams && t.extendMaterialParams(e, a)
                    );
                  })
                )
              );
          }
          !0 === n.doubleSided && (a.side = en.$EB);
          let l = n.alphaMode || ih.OPAQUE;
          if (
            (l === ih.BLEND
              ? ((a.transparent = !0), (a.depthWrite = !1))
              : ((a.transparent = !1),
                l === ih.MASK &&
                  (a.alphaTest =
                    void 0 !== n.alphaCutoff ? n.alphaCutoff : 0.5)),
            void 0 !== n.normalTexture &&
              t !== en.V9B &&
              (A.push(i.assignTexture(a, "normalMap", n.normalTexture)),
              (a.normalScale = new en.I9Y(1, 1)),
              void 0 !== n.normalTexture.scale))
          ) {
            let e = n.normalTexture.scale;
            a.normalScale.set(e, e);
          }
          if (
            (void 0 !== n.occlusionTexture &&
              t !== en.V9B &&
              (A.push(i.assignTexture(a, "aoMap", n.occlusionTexture)),
              void 0 !== n.occlusionTexture.strength &&
                (a.aoMapIntensity = n.occlusionTexture.strength)),
            void 0 !== n.emissiveFactor && t !== en.V9B)
          ) {
            let e = n.emissiveFactor;
            a.emissive = new en.Q1f().setRGB(e[0], e[1], e[2], en.Zr2);
          }
          return (
            void 0 !== n.emissiveTexture &&
              t !== en.V9B &&
              A.push(
                i.assignTexture(a, "emissiveMap", n.emissiveTexture, en.er$)
              ),
            Promise.all(A).then(function () {
              let r = new t(a);
              return (
                n.name && (r.name = n.name),
                iu(r, n),
                i.associations.set(r, { materials: e }),
                n.extensions && ic(s, r, n),
                r
              );
            })
          );
        }
        createUniqueName(e) {
          let t = en.Nwf.sanitizeNodeName(e || "");
          return t in this.nodeNamesUsed
            ? t + "_" + ++this.nodeNamesUsed[t]
            : ((this.nodeNamesUsed[t] = 0), t);
        }
        loadGeometries(e) {
          let t = this,
            i = this.extensions,
            r = this.primitiveCache,
            s = [];
          for (let n = 0, a = e.length; n < a; n++) {
            let a = e[n],
              o = (function (e) {
                let t;
                let i =
                  e.extensions && e.extensions[tU.KHR_DRACO_MESH_COMPRESSION];
                if (
                  ((t = i
                    ? "draco:" +
                      i.bufferView +
                      ":" +
                      i.indices +
                      ":" +
                      ig(i.attributes)
                    : e.indices + ":" + ig(e.attributes) + ":" + e.mode),
                  void 0 !== e.targets)
                )
                  for (let i = 0, r = e.targets.length; i < r; i++)
                    t += ":" + ig(e.targets[i]);
                return t;
              })(a),
              A = r[o];
            if (A) s.push(A.promise);
            else {
              let e;
              (e =
                a.extensions && a.extensions[tU.KHR_DRACO_MESH_COMPRESSION]
                  ? (function (e) {
                      return i[tU.KHR_DRACO_MESH_COMPRESSION]
                        .decodePrimitive(e, t)
                        .then(function (i) {
                          return iI(i, e, t);
                        });
                    })(a)
                  : iI(new en.LoY(), a, t)),
                (r[o] = { primitive: a, promise: e }),
                s.push(e);
            }
          }
          return Promise.all(s);
        }
        loadMesh(e) {
          let t = this,
            i = this.json,
            r = this.extensions,
            s = i.meshes[e],
            n = s.primitives,
            a = [];
          for (let e = 0, t = n.length; e < t; e++) {
            var o;
            let t =
              void 0 === n[e].material
                ? (void 0 === (o = this.cache).DefaultMaterial &&
                    (o.DefaultMaterial = new en._4j({
                      color: 0xffffff,
                      emissive: 0,
                      metalness: 1,
                      roughness: 1,
                      transparent: !1,
                      depthTest: !0,
                      side: en.hB5,
                    })),
                  o.DefaultMaterial)
                : this.getDependency("material", n[e].material);
            a.push(t);
          }
          return (
            a.push(t.loadGeometries(n)),
            Promise.all(a).then(function (i) {
              let a = i.slice(0, i.length - 1),
                o = i[i.length - 1],
                A = [];
              for (let i = 0, l = o.length; i < l; i++) {
                let l;
                let h = o[i],
                  c = n[i],
                  u = a[i];
                if (
                  c.mode === it.TRIANGLES ||
                  c.mode === it.TRIANGLE_STRIP ||
                  c.mode === it.TRIANGLE_FAN ||
                  void 0 === c.mode
                )
                  !0 ===
                    (l =
                      !0 === s.isSkinnedMesh
                        ? new en.I46(h, u)
                        : new en.eaF(h, u)).isSkinnedMesh &&
                    l.normalizeSkinWeights(),
                    c.mode === it.TRIANGLE_STRIP
                      ? (l.geometry = tF(l.geometry, en.O49))
                      : c.mode === it.TRIANGLE_FAN &&
                        (l.geometry = tF(l.geometry, en.rYR));
                else if (c.mode === it.LINES) l = new en.DXC(h, u);
                else if (c.mode === it.LINE_STRIP) l = new en.N1A(h, u);
                else if (c.mode === it.LINE_LOOP) l = new en.FCc(h, u);
                else if (c.mode === it.POINTS) l = new en.ONl(h, u);
                else
                  throw Error(
                    "THREE.GLTFLoader: Primitive mode unsupported: " + c.mode
                  );
                Object.keys(l.geometry.morphAttributes).length > 0 &&
                  (function (e, t) {
                    if ((e.updateMorphTargets(), void 0 !== t.weights))
                      for (let i = 0, r = t.weights.length; i < r; i++)
                        e.morphTargetInfluences[i] = t.weights[i];
                    if (t.extras && Array.isArray(t.extras.targetNames)) {
                      let i = t.extras.targetNames;
                      if (e.morphTargetInfluences.length === i.length) {
                        e.morphTargetDictionary = {};
                        for (let t = 0, r = i.length; t < r; t++)
                          e.morphTargetDictionary[i[t]] = t;
                      } else
                        console.warn(
                          "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
                        );
                    }
                  })(l, s),
                  (l.name = t.createUniqueName(s.name || "mesh_" + e)),
                  iu(l, s),
                  c.extensions && ic(r, l, c),
                  t.assignFinalMaterial(l),
                  A.push(l);
              }
              for (let i = 0, r = A.length; i < r; i++)
                t.associations.set(A[i], { meshes: e, primitives: i });
              if (1 === A.length) return s.extensions && ic(r, A[0], s), A[0];
              let l = new en.YJl();
              s.extensions && ic(r, l, s), t.associations.set(l, { meshes: e });
              for (let e = 0, t = A.length; e < t; e++) l.add(A[e]);
              return l;
            })
          );
        }
        loadCamera(e) {
          let t;
          let i = this.json.cameras[e],
            r = i[i.type];
          if (!r) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return;
          }
          return (
            "perspective" === i.type
              ? (t = new en.ubm(
                  en.cj9.radToDeg(r.yfov),
                  r.aspectRatio || 1,
                  r.znear || 1,
                  r.zfar || 2e6
                ))
              : "orthographic" === i.type &&
                (t = new en.qUd(
                  -r.xmag,
                  r.xmag,
                  r.ymag,
                  -r.ymag,
                  r.znear,
                  r.zfar
                )),
            i.name && (t.name = this.createUniqueName(i.name)),
            iu(t, i),
            Promise.resolve(t)
          );
        }
        loadSkin(e) {
          let t = this.json.skins[e],
            i = [];
          for (let e = 0, r = t.joints.length; e < r; e++)
            i.push(this._loadNodeShallow(t.joints[e]));
          return (
            void 0 !== t.inverseBindMatrices
              ? i.push(this.getDependency("accessor", t.inverseBindMatrices))
              : i.push(null),
            Promise.all(i).then(function (e) {
              let i = e.pop(),
                r = [],
                s = [];
              for (let n = 0, a = e.length; n < a; n++) {
                let a = e[n];
                if (a) {
                  r.push(a);
                  let e = new en.kn4();
                  null !== i && e.fromArray(i.array, 16 * n), s.push(e);
                } else
                  console.warn(
                    'THREE.GLTFLoader: Joint "%s" could not be found.',
                    t.joints[n]
                  );
              }
              return new en.EAD(r, s);
            })
          );
        }
        loadAnimation(e) {
          let t = this.json,
            i = this,
            r = t.animations[e],
            s = r.name ? r.name : "animation_" + e,
            n = [],
            a = [],
            o = [],
            A = [],
            l = [];
          for (let e = 0, t = r.channels.length; e < t; e++) {
            let t = r.channels[e],
              i = r.samplers[t.sampler],
              s = t.target,
              h = s.node,
              c = void 0 !== r.parameters ? r.parameters[i.input] : i.input,
              u = void 0 !== r.parameters ? r.parameters[i.output] : i.output;
            void 0 !== s.node &&
              (n.push(this.getDependency("node", h)),
              a.push(this.getDependency("accessor", c)),
              o.push(this.getDependency("accessor", u)),
              A.push(i),
              l.push(s));
          }
          return Promise.all([
            Promise.all(n),
            Promise.all(a),
            Promise.all(o),
            Promise.all(A),
            Promise.all(l),
          ]).then(function (e) {
            let t = e[0],
              r = e[1],
              n = e[2],
              a = e[3],
              o = e[4],
              A = [];
            for (let e = 0, s = t.length; e < s; e++) {
              let s = t[e],
                l = r[e],
                h = n[e],
                c = a[e],
                u = o[e];
              if (void 0 === s) continue;
              s.updateMatrix && s.updateMatrix();
              let g = i._createAnimationTracks(s, l, h, c, u);
              if (g) for (let e = 0; e < g.length; e++) A.push(g[e]);
            }
            return new en.tz3(s, void 0, A);
          });
        }
        createNodeMesh(e) {
          let t = this.json,
            i = this,
            r = t.nodes[e];
          return void 0 === r.mesh
            ? null
            : i.getDependency("mesh", r.mesh).then(function (e) {
                let t = i._getNodeRef(i.meshCache, r.mesh, e);
                return (
                  void 0 !== r.weights &&
                    t.traverse(function (e) {
                      if (e.isMesh)
                        for (let t = 0, i = r.weights.length; t < i; t++)
                          e.morphTargetInfluences[t] = r.weights[t];
                    }),
                  t
                );
              });
        }
        loadNode(e) {
          let t = this.json.nodes[e],
            i = this._loadNodeShallow(e),
            r = [],
            s = t.children || [];
          for (let e = 0, t = s.length; e < t; e++)
            r.push(this.getDependency("node", s[e]));
          let n =
            void 0 === t.skin
              ? Promise.resolve(null)
              : this.getDependency("skin", t.skin);
          return Promise.all([i, Promise.all(r), n]).then(function (e) {
            let t = e[0],
              i = e[1],
              r = e[2];
            null !== r &&
              t.traverse(function (e) {
                e.isSkinnedMesh && e.bind(r, ip);
              });
            for (let e = 0, r = i.length; e < r; e++) t.add(i[e]);
            return t;
          });
        }
        _loadNodeShallow(e) {
          let t = this.json,
            i = this.extensions,
            r = this;
          if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
          let s = t.nodes[e],
            n = s.name ? r.createUniqueName(s.name) : "",
            a = [],
            o = r._invokeOne(function (t) {
              return t.createNodeMesh && t.createNodeMesh(e);
            });
          return (
            o && a.push(o),
            void 0 !== s.camera &&
              a.push(
                r.getDependency("camera", s.camera).then(function (e) {
                  return r._getNodeRef(r.cameraCache, s.camera, e);
                })
              ),
            r
              ._invokeAll(function (t) {
                return t.createNodeAttachment && t.createNodeAttachment(e);
              })
              .forEach(function (e) {
                a.push(e);
              }),
            (this.nodeCache[e] = Promise.all(a).then(function (t) {
              let a;
              if (
                (a =
                  !0 === s.isBone
                    ? new en.$Kf()
                    : t.length > 1
                    ? new en.YJl()
                    : 1 === t.length
                    ? t[0]
                    : new en.B69()) !== t[0]
              )
                for (let e = 0, i = t.length; e < i; e++) a.add(t[e]);
              if (
                (s.name && ((a.userData.name = s.name), (a.name = n)),
                iu(a, s),
                s.extensions && ic(i, a, s),
                void 0 !== s.matrix)
              ) {
                let e = new en.kn4();
                e.fromArray(s.matrix), a.applyMatrix4(e);
              } else void 0 !== s.translation && a.position.fromArray(s.translation), void 0 !== s.rotation && a.quaternion.fromArray(s.rotation), void 0 !== s.scale && a.scale.fromArray(s.scale);
              return (
                r.associations.has(a) || r.associations.set(a, {}),
                (r.associations.get(a).nodes = e),
                a
              );
            })),
            this.nodeCache[e]
          );
        }
        loadScene(e) {
          let t = this.extensions,
            i = this.json.scenes[e],
            r = this,
            s = new en.YJl();
          i.name && (s.name = r.createUniqueName(i.name)),
            iu(s, i),
            i.extensions && ic(t, s, i);
          let n = i.nodes || [],
            a = [];
          for (let e = 0, t = n.length; e < t; e++)
            a.push(r.getDependency("node", n[e]));
          return Promise.all(a).then(function (e) {
            for (let t = 0, i = e.length; t < i; t++) s.add(e[t]);
            return (
              (r.associations = ((e) => {
                let t = new Map();
                for (let [e, i] of r.associations)
                  (e instanceof en.imn || e instanceof en.gPd) && t.set(e, i);
                return (
                  e.traverse((e) => {
                    let i = r.associations.get(e);
                    null != i && t.set(e, i);
                  }),
                  t
                );
              })(s)),
              s
            );
          });
        }
        _createAnimationTracks(e, t, i, r, s) {
          let n;
          let a = [],
            o = e.name ? e.name : e.uuid,
            A = [];
          switch (
            (iA[s.path] === iA.weights
              ? e.traverse(function (e) {
                  e.morphTargetInfluences && A.push(e.name ? e.name : e.uuid);
                })
              : A.push(o),
            iA[s.path])
          ) {
            case iA.weights:
              n = en.Hit;
              break;
            case iA.rotation:
              n = en.MBL;
              break;
            case iA.position:
            case iA.scale:
              n = en.RiT;
              break;
            default:
              n = 1 === i.itemSize ? en.Hit : en.RiT;
          }
          let l = void 0 !== r.interpolation ? il[r.interpolation] : en.PJ3,
            h = this._getArrayFromAccessor(i);
          for (let e = 0, i = A.length; e < i; e++) {
            let i = new n(A[e] + "." + iA[s.path], t.array, h, l);
            "CUBICSPLINE" === r.interpolation &&
              this._createCubicSplineTrackInterpolant(i),
              a.push(i);
          }
          return a;
        }
        _getArrayFromAccessor(e) {
          let t = e.array;
          if (e.normalized) {
            let e = id(t.constructor),
              i = new Float32Array(t.length);
            for (let r = 0, s = t.length; r < s; r++) i[r] = t[r] * e;
            t = i;
          }
          return t;
        }
        _createCubicSplineTrackInterpolant(e) {
          (e.createInterpolant = function (e) {
            return new (this instanceof en.MBL ? ie : t9)(
              this.times,
              this.values,
              this.getValueSize() / 3,
              e
            );
          }),
            (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline =
              !0);
        }
      }
      function iI(e, t, i) {
        let r = t.attributes,
          s = [];
        for (let t in r) {
          let n = io[t] || t.toLowerCase();
          n in e.attributes ||
            s.push(
              (function (t, r) {
                return i.getDependency("accessor", t).then(function (t) {
                  e.setAttribute(r, t);
                });
              })(r[t], n)
            );
        }
        if (void 0 !== t.indices && !e.index) {
          let r = i.getDependency("accessor", t.indices).then(function (t) {
            e.setIndex(t);
          });
          s.push(r);
        }
        return (
          en.ppV.workingColorSpace !== en.Zr2 &&
            "COLOR_0" in r &&
            console.warn(
              `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${en.ppV.workingColorSpace}" not supported.`
            ),
          iu(e, t),
          !(function (e, t, i) {
            let r = t.attributes,
              s = new en.NRn();
            if (void 0 === r.POSITION) return;
            {
              let e = i.json.accessors[r.POSITION],
                t = e.min,
                n = e.max;
              if (void 0 !== t && void 0 !== n) {
                if (
                  (s.set(
                    new en.Pq0(t[0], t[1], t[2]),
                    new en.Pq0(n[0], n[1], n[2])
                  ),
                  e.normalized)
                ) {
                  let t = id(ii[e.componentType]);
                  s.min.multiplyScalar(t), s.max.multiplyScalar(t);
                }
              } else {
                console.warn(
                  "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                );
                return;
              }
            }
            let n = t.targets;
            if (void 0 !== n) {
              let e = new en.Pq0(),
                t = new en.Pq0();
              for (let r = 0, s = n.length; r < s; r++) {
                let s = n[r];
                if (void 0 !== s.POSITION) {
                  let r = i.json.accessors[s.POSITION],
                    n = r.min,
                    a = r.max;
                  if (void 0 !== n && void 0 !== a) {
                    if (
                      (t.setX(Math.max(Math.abs(n[0]), Math.abs(a[0]))),
                      t.setY(Math.max(Math.abs(n[1]), Math.abs(a[1]))),
                      t.setZ(Math.max(Math.abs(n[2]), Math.abs(a[2]))),
                      r.normalized)
                    ) {
                      let e = id(ii[r.componentType]);
                      t.multiplyScalar(e);
                    }
                    e.max(t);
                  } else
                    console.warn(
                      "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
                    );
                }
              }
              s.expandByVector(e);
            }
            e.boundingBox = s;
            let a = new en.iyt();
            s.getCenter(a.center),
              (a.radius = s.min.distanceTo(s.max) / 2),
              (e.boundingSphere = a);
          })(e, t, i),
          Promise.all(s).then(function () {
            return void 0 !== t.targets
              ? (function (e, t, i) {
                  let r = !1,
                    s = !1,
                    n = !1;
                  for (let e = 0, i = t.length; e < i; e++) {
                    let i = t[e];
                    if (
                      (void 0 !== i.POSITION && (r = !0),
                      void 0 !== i.NORMAL && (s = !0),
                      void 0 !== i.COLOR_0 && (n = !0),
                      r && s && n)
                    )
                      break;
                  }
                  if (!r && !s && !n) return Promise.resolve(e);
                  let a = [],
                    o = [],
                    A = [];
                  for (let l = 0, h = t.length; l < h; l++) {
                    let h = t[l];
                    if (r) {
                      let t =
                        void 0 !== h.POSITION
                          ? i.getDependency("accessor", h.POSITION)
                          : e.attributes.position;
                      a.push(t);
                    }
                    if (s) {
                      let t =
                        void 0 !== h.NORMAL
                          ? i.getDependency("accessor", h.NORMAL)
                          : e.attributes.normal;
                      o.push(t);
                    }
                    if (n) {
                      let t =
                        void 0 !== h.COLOR_0
                          ? i.getDependency("accessor", h.COLOR_0)
                          : e.attributes.color;
                      A.push(t);
                    }
                  }
                  return Promise.all([
                    Promise.all(a),
                    Promise.all(o),
                    Promise.all(A),
                  ]).then(function (t) {
                    let i = t[0],
                      a = t[1],
                      o = t[2];
                    return (
                      r && (e.morphAttributes.position = i),
                      s && (e.morphAttributes.normal = a),
                      n && (e.morphAttributes.color = o),
                      (e.morphTargetsRelative = !0),
                      e
                    );
                  });
                })(e, t.targets, i)
              : e;
          })
        );
      }
      class iE {
        constructor(e = 4) {
          (this.pool = e),
            (this.queue = []),
            (this.workers = []),
            (this.workersResolve = []),
            (this.workerStatus = 0);
        }
        _initWorker(e) {
          if (!this.workers[e]) {
            let t = this.workerCreator();
            t.addEventListener("message", this._onMessage.bind(this, e)),
              (this.workers[e] = t);
          }
        }
        _getIdleWorker() {
          for (let e = 0; e < this.pool; e++)
            if (!(this.workerStatus & (1 << e))) return e;
          return -1;
        }
        _onMessage(e, t) {
          let i = this.workersResolve[e];
          if ((i && i(t), this.queue.length)) {
            let { resolve: t, msg: i, transfer: r } = this.queue.shift();
            (this.workersResolve[e] = t), this.workers[e].postMessage(i, r);
          } else this.workerStatus ^= 1 << e;
        }
        setWorkerCreator(e) {
          this.workerCreator = e;
        }
        setWorkerLimit(e) {
          this.pool = e;
        }
        postMessage(e, t) {
          return new Promise((i) => {
            let r = this._getIdleWorker();
            -1 !== r
              ? (this._initWorker(r),
                (this.workerStatus |= 1 << r),
                (this.workersResolve[r] = i),
                this.workers[r].postMessage(e, t))
              : this.queue.push({ resolve: i, msg: e, transfer: t });
          });
        }
        dispose() {
          this.workers.forEach((e) => e.terminate()),
            (this.workersResolve.length = 0),
            (this.workers.length = 0),
            (this.queue.length = 0),
            (this.workerStatus = 0);
        }
      }
      class iC {
        constructor() {
          (this.vkFormat = 0),
            (this.typeSize = 1),
            (this.pixelWidth = 0),
            (this.pixelHeight = 0),
            (this.pixelDepth = 0),
            (this.layerCount = 0),
            (this.faceCount = 1),
            (this.supercompressionScheme = 0),
            (this.levels = []),
            (this.dataFormatDescriptor = [
              {
                vendorId: 0,
                descriptorType: 0,
                descriptorBlockSize: 0,
                versionNumber: 2,
                colorModel: 0,
                colorPrimaries: 1,
                transferFunction: 2,
                flags: 0,
                texelBlockDimension: [0, 0, 0, 0],
                bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
                samples: [],
              },
            ]),
            (this.keyValue = {}),
            (this.globalData = null);
        }
      }
      class iy {
        constructor(e, t, i, r) {
          (this._dataView = void 0),
            (this._littleEndian = void 0),
            (this._offset = void 0),
            (this._dataView = new DataView(e.buffer, e.byteOffset + t, i)),
            (this._littleEndian = r),
            (this._offset = 0);
        }
        _nextUint8() {
          let e = this._dataView.getUint8(this._offset);
          return (this._offset += 1), e;
        }
        _nextUint16() {
          let e = this._dataView.getUint16(this._offset, this._littleEndian);
          return (this._offset += 2), e;
        }
        _nextUint32() {
          let e = this._dataView.getUint32(this._offset, this._littleEndian);
          return (this._offset += 4), e;
        }
        _nextUint64() {
          let e =
            this._dataView.getUint32(this._offset, this._littleEndian) +
            0x100000000 *
              this._dataView.getUint32(this._offset + 4, this._littleEndian);
          return (this._offset += 8), e;
        }
        _nextInt32() {
          let e = this._dataView.getInt32(this._offset, this._littleEndian);
          return (this._offset += 4), e;
        }
        _nextUint8Array(e) {
          let t = new Uint8Array(
            this._dataView.buffer,
            this._dataView.byteOffset + this._offset,
            e
          );
          return (this._offset += e), t;
        }
        _skip(e) {
          return (this._offset += e), this;
        }
        _scan(e, t) {
          void 0 === t && (t = 0);
          let i = this._offset,
            r = 0;
          for (; this._dataView.getUint8(this._offset) !== t && r < e; )
            r++, this._offset++;
          return (
            r < e && this._offset++,
            new Uint8Array(
              this._dataView.buffer,
              this._dataView.byteOffset + i,
              r
            )
          );
        }
      }
      new Uint8Array([0]);
      let iB = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];
      function iw(e) {
        return new TextDecoder().decode(e);
      }
      var iv = i(5714).Buffer;
      let iQ = {
        env: {
          emscripten_notify_memory_growth: function (e) {
            n = new Uint8Array(s.exports.memory.buffer);
          },
        },
      };
      class ib {
        init() {
          return (
            r ||
            (r =
              "undefined" != typeof fetch
                ? fetch("data:application/wasm;base64," + ix)
                    .then((e) => e.arrayBuffer())
                    .then((e) => WebAssembly.instantiate(e, iQ))
                    .then(this._init)
                : WebAssembly.instantiate(iv.from(ix, "base64"), iQ).then(
                    this._init
                  ))
          );
        }
        _init(e) {
          (s = e.instance), iQ.env.emscripten_notify_memory_growth(0);
        }
        decode(e, t = 0) {
          if (!s) throw Error("ZSTDDecoder: Await .init() before decoding.");
          let i = e.byteLength,
            r = s.exports.malloc(i);
          n.set(e, r),
            (t = t || Number(s.exports.ZSTD_findDecompressedSize(r, i)));
          let a = s.exports.malloc(t),
            o = s.exports.ZSTD_decompress(a, t, r, i),
            A = n.slice(a, a + o);
          return s.exports.free(r), s.exports.free(a), A;
        }
      }
      let ix =
        "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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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";
      en.KLL, en.VxR, en.VxR;
      let iS = new WeakMap(),
        iT = 0;
      class iM extends en.aHM {
        constructor(e) {
          super(e),
            (this.transcoderPath = ""),
            (this.transcoderBinary = null),
            (this.transcoderPending = null),
            (this.workerPool = new iE()),
            (this.workerSourceURL = ""),
            (this.workerConfig = null),
            "undefined" != typeof MSC_TRANSCODER &&
              console.warn(
                'THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.'
              );
        }
        setTranscoderPath(e) {
          return (this.transcoderPath = e), this;
        }
        setWorkerLimit(e) {
          return this.workerPool.setWorkerLimit(e), this;
        }
        async detectSupportAsync(e) {
          return (
            (this.workerConfig = {
              astcSupported: await e.hasFeatureAsync(
                "texture-compression-astc"
              ),
              astcHDRSupported: !1,
              etc1Supported: await e.hasFeatureAsync(
                "texture-compression-etc1"
              ),
              etc2Supported: await e.hasFeatureAsync(
                "texture-compression-etc2"
              ),
              dxtSupported: await e.hasFeatureAsync("texture-compression-bc"),
              bptcSupported: await e.hasFeatureAsync(
                "texture-compression-bptc"
              ),
              pvrtcSupported: await e.hasFeatureAsync(
                "texture-compression-pvrtc"
              ),
            }),
            this
          );
        }
        detectSupport(e) {
          return (
            !0 === e.isWebGPURenderer
              ? (this.workerConfig = {
                  astcSupported: e.hasFeature("texture-compression-astc"),
                  astcHDRSupported: !1,
                  etc1Supported: e.hasFeature("texture-compression-etc1"),
                  etc2Supported: e.hasFeature("texture-compression-etc2"),
                  dxtSupported: e.hasFeature("texture-compression-bc"),
                  bptcSupported: e.hasFeature("texture-compression-bptc"),
                  pvrtcSupported: e.hasFeature("texture-compression-pvrtc"),
                })
              : (this.workerConfig = {
                  astcSupported: e.extensions.has(
                    "WEBGL_compressed_texture_astc"
                  ),
                  astcHDRSupported:
                    e.extensions.has("WEBGL_compressed_texture_astc") &&
                    e.extensions
                      .get("WEBGL_compressed_texture_astc")
                      .getSupportedProfiles()
                      .includes("hdr"),
                  etc1Supported: e.extensions.has(
                    "WEBGL_compressed_texture_etc1"
                  ),
                  etc2Supported: e.extensions.has(
                    "WEBGL_compressed_texture_etc"
                  ),
                  dxtSupported: e.extensions.has(
                    "WEBGL_compressed_texture_s3tc"
                  ),
                  bptcSupported: e.extensions.has(
                    "EXT_texture_compression_bptc"
                  ),
                  pvrtcSupported:
                    e.extensions.has("WEBGL_compressed_texture_pvrtc") ||
                    e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc"),
                }),
            this
          );
        }
        init() {
          if (!this.transcoderPending) {
            let e = new en.Y9S(this.manager);
            e.setPath(this.transcoderPath),
              e.setWithCredentials(this.withCredentials);
            let t = e.loadAsync("basis_transcoder.js"),
              i = new en.Y9S(this.manager);
            i.setPath(this.transcoderPath),
              i.setResponseType("arraybuffer"),
              i.setWithCredentials(this.withCredentials);
            let r = i.loadAsync("basis_transcoder.wasm");
            (this.transcoderPending = Promise.all([t, r]).then(([e, t]) => {
              let i = iM.BasisWorker.toString(),
                r = [
                  "/* constants */",
                  "let _EngineFormat = " + JSON.stringify(iM.EngineFormat),
                  "let _EngineType = " + JSON.stringify(iM.EngineType),
                  "let _TranscoderFormat = " +
                    JSON.stringify(iM.TranscoderFormat),
                  "let _BasisFormat = " + JSON.stringify(iM.BasisFormat),
                  "/* basis_transcoder.js */",
                  e,
                  "/* worker */",
                  i.substring(i.indexOf("{") + 1, i.lastIndexOf("}")),
                ].join("\n");
              (this.workerSourceURL = URL.createObjectURL(new Blob([r]))),
                (this.transcoderBinary = t),
                this.workerPool.setWorkerCreator(() => {
                  let e = new Worker(this.workerSourceURL),
                    t = this.transcoderBinary.slice(0);
                  return (
                    e.postMessage(
                      {
                        type: "init",
                        config: this.workerConfig,
                        transcoderBinary: t,
                      },
                      [t]
                    ),
                    e
                  );
                });
            })),
              iT > 0 &&
                console.warn(
                  "THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."
                ),
              iT++;
          }
          return this.transcoderPending;
        }
        load(e, t, i, r) {
          if (null === this.workerConfig)
            throw Error(
              "THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`."
            );
          let s = new en.Y9S(this.manager);
          s.setResponseType("arraybuffer"),
            s.setWithCredentials(this.withCredentials),
            s.load(
              e,
              (e) => {
                this.parse(e, t, r);
              },
              i,
              r
            );
        }
        parse(e, t, i) {
          if (null === this.workerConfig)
            throw Error(
              "THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`."
            );
          if (iS.has(e)) return iS.get(e).promise.then(t).catch(i);
          this._createTexture(e)
            .then((e) => (t ? t(e) : null))
            .catch(i);
        }
        _createTextureFrom(e, t) {
          let i;
          let {
            type: r,
            error: s,
            data: {
              faces: n,
              width: a,
              height: o,
              format: A,
              type: l,
              dfdFlags: h,
            },
          } = e;
          if ("error" === r) return Promise.reject(s);
          if (6 === t.faceCount) i = new en.c5h(n, A, l);
          else {
            let e = n[0].mipmaps;
            i =
              t.layerCount > 1
                ? new en.iOZ(e, a, o, t.layerCount, A, l)
                : new en.FvD(e, a, o, A, l);
          }
          return (
            (i.minFilter = 1 === n[0].mipmaps.length ? en.k6q : en.$_I),
            (i.magFilter = en.k6q),
            (i.generateMipmaps = !1),
            (i.needsUpdate = !0),
            (i.colorSpace = ik(t)),
            (i.premultiplyAlpha = !!(1 & h)),
            i
          );
        }
        async _createTexture(e, t = {}) {
          let i = (function (e) {
              let t = new Uint8Array(e.buffer, e.byteOffset, iB.length);
              if (
                t[0] !== iB[0] ||
                t[1] !== iB[1] ||
                t[2] !== iB[2] ||
                t[3] !== iB[3] ||
                t[4] !== iB[4] ||
                t[5] !== iB[5] ||
                t[6] !== iB[6] ||
                t[7] !== iB[7] ||
                t[8] !== iB[8] ||
                t[9] !== iB[9] ||
                t[10] !== iB[10] ||
                t[11] !== iB[11]
              )
                throw Error("Missing KTX 2.0 identifier.");
              let i = new iC(),
                r = 17 * Uint32Array.BYTES_PER_ELEMENT,
                s = new iy(e, iB.length, r, !0);
              (i.vkFormat = s._nextUint32()),
                (i.typeSize = s._nextUint32()),
                (i.pixelWidth = s._nextUint32()),
                (i.pixelHeight = s._nextUint32()),
                (i.pixelDepth = s._nextUint32()),
                (i.layerCount = s._nextUint32()),
                (i.faceCount = s._nextUint32());
              let n = s._nextUint32();
              i.supercompressionScheme = s._nextUint32();
              let a = s._nextUint32(),
                o = s._nextUint32(),
                A = s._nextUint32(),
                l = s._nextUint32(),
                h = s._nextUint64(),
                c = s._nextUint64(),
                u = new iy(e, iB.length + r, 3 * n * 8, !0);
              for (let t = 0; t < n; t++)
                i.levels.push({
                  levelData: new Uint8Array(
                    e.buffer,
                    e.byteOffset + u._nextUint64(),
                    u._nextUint64()
                  ),
                  uncompressedByteLength: u._nextUint64(),
                });
              let g = new iy(e, a, o, !0),
                d = {
                  vendorId: g._skip(4)._nextUint16(),
                  descriptorType: g._nextUint16(),
                  versionNumber: g._nextUint16(),
                  descriptorBlockSize: g._nextUint16(),
                  colorModel: g._nextUint8(),
                  colorPrimaries: g._nextUint8(),
                  transferFunction: g._nextUint8(),
                  flags: g._nextUint8(),
                  texelBlockDimension: [
                    g._nextUint8(),
                    g._nextUint8(),
                    g._nextUint8(),
                    g._nextUint8(),
                  ],
                  bytesPlane: [
                    g._nextUint8(),
                    g._nextUint8(),
                    g._nextUint8(),
                    g._nextUint8(),
                    g._nextUint8(),
                    g._nextUint8(),
                    g._nextUint8(),
                    g._nextUint8(),
                  ],
                  samples: [],
                },
                p = (d.descriptorBlockSize / 4 - 6) / 4;
              for (let e = 0; e < p; e++) {
                let t = {
                  bitOffset: g._nextUint16(),
                  bitLength: g._nextUint8(),
                  channelType: g._nextUint8(),
                  samplePosition: [
                    g._nextUint8(),
                    g._nextUint8(),
                    g._nextUint8(),
                    g._nextUint8(),
                  ],
                  sampleLower: -1 / 0,
                  sampleUpper: 1 / 0,
                };
                64 & t.channelType
                  ? ((t.sampleLower = g._nextInt32()),
                    (t.sampleUpper = g._nextInt32()))
                  : ((t.sampleLower = g._nextUint32()),
                    (t.sampleUpper = g._nextUint32())),
                  (d.samples[e] = t);
              }
              (i.dataFormatDescriptor.length = 0),
                i.dataFormatDescriptor.push(d);
              let m = new iy(e, A, l, !0);
              for (; m._offset < l; ) {
                let e = m._nextUint32(),
                  t = m._scan(e),
                  r = iw(t);
                if (
                  ((i.keyValue[r] = m._nextUint8Array(e - t.byteLength - 1)),
                  r.match(/^ktx/i))
                ) {
                  let e = iw(i.keyValue[r]);
                  i.keyValue[r] = e.substring(0, e.lastIndexOf("\0"));
                }
                m._skip(e % 4 ? 4 - (e % 4) : 0);
              }
              if (c <= 0) return i;
              let f = new iy(e, h, c, !0),
                I = f._nextUint16(),
                E = f._nextUint16(),
                C = f._nextUint32(),
                y = f._nextUint32(),
                B = f._nextUint32(),
                w = f._nextUint32(),
                v = [];
              for (let e = 0; e < n; e++)
                v.push({
                  imageFlags: f._nextUint32(),
                  rgbSliceByteOffset: f._nextUint32(),
                  rgbSliceByteLength: f._nextUint32(),
                  alphaSliceByteOffset: f._nextUint32(),
                  alphaSliceByteLength: f._nextUint32(),
                });
              let Q = h + f._offset,
                b = Q + C,
                x = b + y,
                S = x + B,
                T = new Uint8Array(e.buffer, e.byteOffset + Q, C),
                M = new Uint8Array(e.buffer, e.byteOffset + b, y),
                R = new Uint8Array(e.buffer, e.byteOffset + x, B),
                D = new Uint8Array(e.buffer, e.byteOffset + S, w);
              return (
                (i.globalData = {
                  endpointCount: I,
                  selectorCount: E,
                  imageDescs: v,
                  endpointsData: T,
                  selectorsData: M,
                  tablesData: R,
                  extendedData: D,
                }),
                i
              );
            })(new Uint8Array(e)),
            r =
              1000066e3 === i.vkFormat &&
              167 === i.dataFormatDescriptor[0].colorModel;
          if (!(0 === i.vkFormat || (r && !this.workerConfig.astcHDRSupported)))
            return iF(i);
          let s = this.init()
            .then(() =>
              this.workerPool.postMessage(
                { type: "transcode", buffer: e, taskConfig: t },
                [e]
              )
            )
            .then((e) => this._createTextureFrom(e.data, i));
          return iS.set(e, { promise: s }), s;
        }
        dispose() {
          return (
            this.workerPool.dispose(),
            this.workerSourceURL && URL.revokeObjectURL(this.workerSourceURL),
            iT--,
            this
          );
        }
      }
      (iM.BasisFormat = { ETC1S: 0, UASTC: 1, UASTC_HDR: 2 }),
        (iM.TranscoderFormat = {
          ETC1: 0,
          ETC2: 1,
          BC1: 2,
          BC3: 3,
          BC4: 4,
          BC5: 5,
          BC7_M6_OPAQUE_ONLY: 6,
          BC7_M5: 7,
          PVRTC1_4_RGB: 8,
          PVRTC1_4_RGBA: 9,
          ASTC_4x4: 10,
          ATC_RGB: 11,
          ATC_RGBA_INTERPOLATED_ALPHA: 12,
          RGBA32: 13,
          RGB565: 14,
          BGR565: 15,
          RGBA4444: 16,
          BC6H: 22,
          RGB_HALF: 24,
          RGBA_HALF: 25,
        }),
        (iM.EngineFormat = {
          RGBAFormat: en.GWd,
          RGBA_ASTC_4x4_Format: en.qa3,
          RGB_BPTC_UNSIGNED_Format: en.W9U,
          RGBA_BPTC_Format: en.Fn,
          RGBA_ETC2_EAC_Format: en.KDk,
          RGBA_PVRTC_4BPPV1_Format: en.HXV,
          RGBA_S3TC_DXT5_Format: en.BXX,
          RGB_ETC1_Format: en.CVz,
          RGB_ETC2_Format: en.Riy,
          RGB_PVRTC_4BPPV1_Format: en.k6Q,
          RGBA_S3TC_DXT1_Format: en.Nz6,
        }),
        (iM.EngineType = {
          UnsignedByteType: en.OUM,
          HalfFloatType: en.ix0,
          FloatType: en.RQf,
        }),
        (iM.BasisWorker = function () {
          let e, t, i;
          let r = _EngineFormat,
            s = _EngineType,
            n = _TranscoderFormat,
            a = _BasisFormat;
          self.addEventListener("message", function (r) {
            let n = r.data;
            switch (n.type) {
              case "init":
                var o;
                (e = n.config),
                  (o = n.transcoderBinary),
                  (t = new Promise((e) => {
                    BASIS((i = { wasmBinary: o, onRuntimeInitialized: e }));
                  }).then(() => {
                    i.initializeBasis(),
                      void 0 === i.KTX2File &&
                        console.warn(
                          "THREE.KTX2Loader: Please update Basis Universal transcoder."
                        );
                  }));
                break;
              case "transcode":
                t.then(() => {
                  try {
                    let {
                      faces: t,
                      buffers: r,
                      width: o,
                      height: h,
                      hasAlpha: c,
                      format: u,
                      type: g,
                      dfdFlags: d,
                    } = (function (t) {
                      let r;
                      let n = new i.KTX2File(new Uint8Array(t));
                      function o() {
                        n.close(), n.delete();
                      }
                      if (!n.isValid())
                        throw (
                          (o(),
                          Error(
                            "THREE.KTX2Loader:	Invalid or unsupported .ktx2 file"
                          ))
                        );
                      if (n.isUASTC()) r = a.UASTC;
                      else if (n.isETC1S()) r = a.ETC1S;
                      else if (n.isHDR()) r = a.UASTC_HDR;
                      else
                        throw Error("THREE.KTX2Loader: Unknown Basis encoding");
                      let h = n.getWidth(),
                        c = n.getHeight(),
                        u = n.getLayers() || 1,
                        g = n.getLevels(),
                        d = n.getFaces(),
                        p = n.getHasAlpha(),
                        m = n.getDFDFlags(),
                        {
                          transcoderFormat: f,
                          engineFormat: I,
                          engineType: E,
                        } = (function (t, i, r, s) {
                          let n = A[t];
                          for (let a = 0; a < n.length; a++) {
                            let o = n[a];
                            if (
                              (o.if && !e[o.if]) ||
                              !o.basisFormat.includes(t) ||
                              (s && o.transcoderFormat.length < 2) ||
                              (o.needsPowerOfTwo && !(l(i) && l(r)))
                            )
                              continue;
                            let A = o.transcoderFormat[s ? 1 : 0],
                              h = o.engineFormat[s ? 1 : 0];
                            return {
                              transcoderFormat: A,
                              engineFormat: h,
                              engineType: o.engineType[0],
                            };
                          }
                          throw Error(
                            "THREE.KTX2Loader: Failed to identify transcoding target."
                          );
                        })(r, h, c, p);
                      if (!h || !c || !g)
                        throw (o(), Error("THREE.KTX2Loader:	Invalid texture"));
                      if (!n.startTranscoding())
                        throw (
                          (o(),
                          Error("THREE.KTX2Loader: .startTranscoding failed"))
                        );
                      let C = [],
                        y = [];
                      for (let e = 0; e < d; e++) {
                        let t = [];
                        for (let i = 0; i < g; i++) {
                          let r, a;
                          let A = [];
                          for (let t = 0; t < u; t++) {
                            let l = n.getImageLevelInfo(i, t, e);
                            0 === e &&
                              0 === i &&
                              0 === t &&
                              (l.origWidth % 4 != 0 || l.origHeight % 4 != 0) &&
                              console.warn(
                                "THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."
                              ),
                              g > 1
                                ? ((r = l.origWidth), (a = l.origHeight))
                                : ((r = l.width), (a = l.height));
                            let h = new Uint8Array(
                                n.getImageTranscodedSizeInBytes(i, t, 0, f)
                              ),
                              c = n.transcodeImage(h, i, t, e, f, 0, -1, -1);
                            if (
                              (E === s.HalfFloatType &&
                                (h = new Uint16Array(
                                  h.buffer,
                                  h.byteOffset,
                                  h.byteLength / Uint16Array.BYTES_PER_ELEMENT
                                )),
                              !c)
                            )
                              throw (
                                (o(),
                                Error(
                                  "THREE.KTX2Loader: .transcodeImage failed."
                                ))
                              );
                            A.push(h);
                          }
                          let l = (function (e) {
                            if (1 === e.length) return e[0];
                            let t = 0;
                            for (let i = 0; i < e.length; i++)
                              t += e[i].byteLength;
                            let i = new Uint8Array(t),
                              r = 0;
                            for (let t = 0; t < e.length; t++) {
                              let s = e[t];
                              i.set(s, r), (r += s.byteLength);
                            }
                            return i;
                          })(A);
                          t.push({ data: l, width: r, height: a }),
                            y.push(l.buffer);
                        }
                        C.push({
                          mipmaps: t,
                          width: h,
                          height: c,
                          format: I,
                          type: E,
                        });
                      }
                      return (
                        o(),
                        {
                          faces: C,
                          buffers: y,
                          width: h,
                          height: c,
                          hasAlpha: p,
                          dfdFlags: m,
                          format: I,
                          type: E,
                        }
                      );
                    })(n.buffer);
                    self.postMessage(
                      {
                        type: "transcode",
                        id: n.id,
                        data: {
                          faces: t,
                          width: o,
                          height: h,
                          hasAlpha: c,
                          format: u,
                          type: g,
                          dfdFlags: d,
                        },
                      },
                      r
                    );
                  } catch (e) {
                    console.error(e),
                      self.postMessage({
                        type: "error",
                        id: n.id,
                        error: e.message,
                      });
                  }
                });
            }
          });
          let o = [
              {
                if: "astcSupported",
                basisFormat: [a.UASTC],
                transcoderFormat: [n.ASTC_4x4, n.ASTC_4x4],
                engineFormat: [r.RGBA_ASTC_4x4_Format, r.RGBA_ASTC_4x4_Format],
                engineType: [s.UnsignedByteType],
                priorityETC1S: 1 / 0,
                priorityUASTC: 1,
                needsPowerOfTwo: !1,
              },
              {
                if: "bptcSupported",
                basisFormat: [a.ETC1S, a.UASTC],
                transcoderFormat: [n.BC7_M5, n.BC7_M5],
                engineFormat: [r.RGBA_BPTC_Format, r.RGBA_BPTC_Format],
                engineType: [s.UnsignedByteType],
                priorityETC1S: 3,
                priorityUASTC: 2,
                needsPowerOfTwo: !1,
              },
              {
                if: "dxtSupported",
                basisFormat: [a.ETC1S, a.UASTC],
                transcoderFormat: [n.BC1, n.BC3],
                engineFormat: [
                  r.RGBA_S3TC_DXT1_Format,
                  r.RGBA_S3TC_DXT5_Format,
                ],
                engineType: [s.UnsignedByteType],
                priorityETC1S: 4,
                priorityUASTC: 5,
                needsPowerOfTwo: !1,
              },
              {
                if: "etc2Supported",
                basisFormat: [a.ETC1S, a.UASTC],
                transcoderFormat: [n.ETC1, n.ETC2],
                engineFormat: [r.RGB_ETC2_Format, r.RGBA_ETC2_EAC_Format],
                engineType: [s.UnsignedByteType],
                priorityETC1S: 1,
                priorityUASTC: 3,
                needsPowerOfTwo: !1,
              },
              {
                if: "etc1Supported",
                basisFormat: [a.ETC1S, a.UASTC],
                transcoderFormat: [n.ETC1],
                engineFormat: [r.RGB_ETC1_Format],
                engineType: [s.UnsignedByteType],
                priorityETC1S: 2,
                priorityUASTC: 4,
                needsPowerOfTwo: !1,
              },
              {
                if: "pvrtcSupported",
                basisFormat: [a.ETC1S, a.UASTC],
                transcoderFormat: [n.PVRTC1_4_RGB, n.PVRTC1_4_RGBA],
                engineFormat: [
                  r.RGB_PVRTC_4BPPV1_Format,
                  r.RGBA_PVRTC_4BPPV1_Format,
                ],
                engineType: [s.UnsignedByteType],
                priorityETC1S: 5,
                priorityUASTC: 6,
                needsPowerOfTwo: !0,
              },
              {
                if: "bptcSupported",
                basisFormat: [a.UASTC_HDR],
                transcoderFormat: [n.BC6H],
                engineFormat: [r.RGB_BPTC_UNSIGNED_Format],
                engineType: [s.HalfFloatType],
                priorityHDR: 1,
                needsPowerOfTwo: !1,
              },
              {
                basisFormat: [a.ETC1S, a.UASTC],
                transcoderFormat: [n.RGBA32, n.RGBA32],
                engineFormat: [r.RGBAFormat, r.RGBAFormat],
                engineType: [s.UnsignedByteType, s.UnsignedByteType],
                priorityETC1S: 100,
                priorityUASTC: 100,
                needsPowerOfTwo: !1,
              },
              {
                basisFormat: [a.UASTC_HDR],
                transcoderFormat: [n.RGBA_HALF],
                engineFormat: [r.RGBAFormat],
                engineType: [s.HalfFloatType],
                priorityHDR: 100,
                needsPowerOfTwo: !1,
              },
            ],
            A = {
              [a.ETC1S]: o
                .filter((e) => e.basisFormat.includes(a.ETC1S))
                .sort((e, t) => e.priorityUASTC - t.priorityUASTC),
              [a.UASTC]: o
                .filter((e) => e.basisFormat.includes(a.UASTC))
                .sort((e, t) => e.priorityUASTC - t.priorityUASTC),
              [a.UASTC_HDR]: o
                .filter((e) => e.basisFormat.includes(a.UASTC_HDR))
                .sort((e, t) => e.priorityHDR - t.priorityHDR),
            };
          function l(e) {
            return e <= 2 || ((e & (e - 1)) == 0 && 0 !== e);
          }
        });
      let iR = new Set([en.GWd, en.paN, en.VT0]),
        iD = {
          109: en.GWd,
          97: en.GWd,
          37: en.GWd,
          43: en.GWd,
          103: en.paN,
          83: en.paN,
          16: en.paN,
          22: en.paN,
          100: en.VT0,
          76: en.VT0,
          15: en.VT0,
          9: en.VT0,
          1000066e3: en.qa3,
          166: en.Qrf,
          165: en.Qrf,
        },
        iL = {
          109: en.RQf,
          97: en.ix0,
          37: en.OUM,
          43: en.OUM,
          103: en.RQf,
          83: en.ix0,
          16: en.OUM,
          22: en.OUM,
          100: en.RQf,
          76: en.ix0,
          15: en.OUM,
          9: en.OUM,
          1000066e3: en.ix0,
          166: en.OUM,
          165: en.OUM,
        };
      async function iF(e) {
        let t, i;
        let { vkFormat: r } = e;
        if (void 0 === iD[r])
          throw Error("THREE.KTX2Loader: Unsupported vkFormat.");
        2 === e.supercompressionScheme &&
          (a ||
            (a = new Promise(async (e) => {
              let t = new ib();
              await t.init(), e(t);
            })),
          (t = await a));
        let s = [];
        for (let i = 0; i < e.levels.length; i++) {
          let n, a;
          let o = Math.max(1, e.pixelWidth >> i),
            A = Math.max(1, e.pixelHeight >> i),
            l = e.pixelDepth ? Math.max(1, e.pixelDepth >> i) : 0,
            h = e.levels[i];
          if (0 === e.supercompressionScheme) n = h.levelData;
          else if (2 === e.supercompressionScheme)
            n = t.decode(h.levelData, h.uncompressedByteLength);
          else
            throw Error(
              "THREE.KTX2Loader: Unsupported supercompressionScheme."
            );
          (a =
            iL[r] === en.RQf
              ? new Float32Array(
                  n.buffer,
                  n.byteOffset,
                  n.byteLength / Float32Array.BYTES_PER_ELEMENT
                )
              : iL[r] === en.ix0
              ? new Uint16Array(
                  n.buffer,
                  n.byteOffset,
                  n.byteLength / Uint16Array.BYTES_PER_ELEMENT
                )
              : n),
            s.push({ data: a, width: o, height: A, depth: l });
        }
        if (iR.has(iD[r]))
          i =
            0 === e.pixelDepth
              ? new en.GYF(s[0].data, e.pixelWidth, e.pixelHeight)
              : new en.dYF(
                  s[0].data,
                  e.pixelWidth,
                  e.pixelHeight,
                  e.pixelDepth
                );
        else {
          if (e.pixelDepth > 0)
            throw Error("THREE.KTX2Loader: Unsupported pixelDepth.");
          ((i = new en.FvD(s, e.pixelWidth, e.pixelHeight)).minFilter =
            1 === s.length ? en.k6q : en.$_I),
            (i.magFilter = en.k6q);
        }
        return (
          (i.mipmaps = s),
          (i.type = iL[r]),
          (i.format = iD[r]),
          (i.colorSpace = ik(e)),
          (i.needsUpdate = !0),
          Promise.resolve(i)
        );
      }
      function ik(e) {
        let t = e.dataFormatDescriptor[0];
        return 1 === t.colorPrimaries
          ? 2 === t.transferFunction
            ? en.er$
            : en.Zr2
          : 10 === t.colorPrimaries
          ? 2 === t.transferFunction
            ? "display-p3"
            : "display-p3-linear"
          : (0 === t.colorPrimaries ||
              console.warn(
                `THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`
              ),
            en.jf0);
      }
      let i_ = Symbol("retainerCount"),
        iU = Symbol("recentlyUsed"),
        iN = Symbol("evict"),
        iP = Symbol("evictionThreshold"),
        iG = Symbol("cache");
      class iO {
        constructor(e, t = 5) {
          (this[y] = new Map()), (this[B] = []), (this[iG] = e), (this[iP] = t);
        }
        set evictionThreshold(e) {
          (this[iP] = e), this[iN]();
        }
        get evictionThreshold() {
          return this[iP];
        }
        get cache() {
          return this[iG];
        }
        retainerCount(e) {
          return this[i_].get(e) || 0;
        }
        reset() {
          this[i_].clear(), (this[iU] = []);
        }
        retain(e) {
          this[i_].has(e) || this[i_].set(e, 0),
            this[i_].set(e, this[i_].get(e) + 1);
          let t = this[iU].indexOf(e);
          -1 !== t && this[iU].splice(t, 1), this[iU].unshift(e), this[iN]();
        }
        release(e) {
          this[i_].has(e) && this[i_].set(e, Math.max(this[i_].get(e) - 1, 0)),
            this[iN]();
        }
        [((y = i_), (B = iU), iN)]() {
          if (!(this[iU].length < this[iP]))
            for (let e = this[iU].length - 1; e >= this[iP]; --e) {
              let t = this[iU][e];
              0 === this[i_].get(t) &&
                (this[iG].delete(t), this[iU].splice(e, 1));
            }
        }
      }
      let iH = (e) => {
          let t = [],
            i = new Set();
          for (let r of e) {
            let e = r,
              s = 0;
            for (; i.has(e); ) e = r + "." + ++s;
            i.add(e), t.push(e);
          }
          return t;
        },
        iq = (e) => {
          let t = new Map();
          for (let i of e.mappings)
            for (let e of i.variants)
              t.set(e, { material: null, gltfMaterialIndex: i.material });
          return t;
        };
      class iV {
        constructor(e) {
          (this.parser = e), (this.name = "KHR_materials_variants");
        }
        afterRoot(e) {
          let t = this.parser,
            i = t.json;
          if (void 0 === i.extensions || void 0 === i.extensions[this.name])
            return null;
          let r = iH(
            (i.extensions[this.name].variants || []).map((e) => e.name)
          );
          for (let r of e.scenes)
            r.traverse((e) => {
              if (!e.material) return;
              let r = t.associations.get(e);
              if (null == r || null == r.meshes || null == r.primitives) return;
              let s = i.meshes[r.meshes].primitives[r.primitives].extensions;
              s &&
                s[this.name] &&
                (e.userData.variantMaterials = iq(s[this.name]));
            });
          return (e.userData.variants = r), Promise.resolve();
        }
      }
      en.gPd.DEFAULT_ANISOTROPY = 4;
      let iY = (e, t, i = () => {}) => {
          let r = (e) => {
            let t = e.loaded / e.total;
            i(Math.max(0, Math.min(1, isFinite(t) ? t : 1)));
          };
          return new Promise((i, s) => {
            t.load(e, i, r, s);
          });
        },
        iJ = (e) =>
          new Promise((t, i) => {
            let r = document.createElement("script");
            document.body.appendChild(r),
              (r.onload = t),
              (r.onerror = i),
              (r.async = !0),
              (r.src = e);
          }),
        iK = new Map(),
        iz = new Map(),
        i$ = new tD(),
        ij = new iM(),
        iW = Symbol("loader"),
        iX = Symbol("evictionPolicy"),
        iZ = Symbol("GLTFInstance");
      class i0 extends en.Qev {
        constructor(e) {
          super(),
            (this[v] = new tk().register((e) => new iV(e))),
            (this[iZ] = e),
            this[iW].setDRACOLoader(i$),
            this[iW].setKTX2Loader(ij);
        }
        static setDRACODecoderLocation(e) {
          (o = e), i$.setDecoderPath(e);
        }
        static getDRACODecoderLocation() {
          return o;
        }
        static setKTX2TranscoderLocation(e) {
          (A = e), ij.setTranscoderPath(e);
        }
        static getKTX2TranscoderLocation() {
          return A;
        }
        static setMeshoptDecoderLocation(e) {
          l !== e &&
            ((l = e),
            (h = iJ(e)
              .then(() => MeshoptDecoder.ready)
              .then(() => MeshoptDecoder)));
        }
        static getMeshoptDecoderLocation() {
          return l;
        }
        static initializeKTX2Loader(e) {
          ij.detectSupport(e);
        }
        static get cache() {
          return iK;
        }
        static clearCache() {
          iK.forEach((e, t) => {
            this.delete(t);
          }),
            this[iX].reset();
        }
        static has(e) {
          return iK.has(e);
        }
        static async delete(e) {
          if (!this.has(e)) return;
          let t = iK.get(e);
          iz.delete(e), iK.delete(e), (await t).dispose();
        }
        static hasFinishedLoading(e) {
          return !!iz.get(e);
        }
        get [((w = iX), (v = iW), iX)]() {
          return this.constructor[iX];
        }
        async preload(e, t, i = () => {}) {
          if (
            (this[iW].setWithCredentials(t.withCredentials),
            this.dispatchEvent({ type: "preload", element: t, src: e }),
            !iK.has(e))
          ) {
            null != h && this[iW].setMeshoptDecoder(await h);
            let t = iY(e, this[iW], (e) => {
                i(0.8 * e);
              }),
              r = this[iZ],
              s = t
                .then((e) => r.prepare(e))
                .then((e) => (i(0.9), new r(e)))
                .catch((e) => (console.error(e), new r()));
            iK.set(e, s);
          }
          await iK.get(e), iz.set(e, !0), i && i(1);
        }
        async load(e, t, i = () => {}) {
          await this.preload(e, t, i);
          let r = await iK.get(e),
            s = await r.clone();
          return (
            this[iX].retain(e),
            (s.dispose = () => {
              this[iX].release(e);
            }),
            s
          );
        }
      }
      i0[w] = new iO(i0);
      class i1 extends en.B69 {
        constructor(e = document.createElement("div")) {
          super(),
            (this.isCSS2DObject = !0),
            (this.element = e),
            (this.element.style.position = "absolute"),
            (this.element.style.userSelect = "none"),
            this.element.setAttribute("draggable", !1),
            (this.center = new en.I9Y(0.5, 0.5)),
            this.addEventListener("removed", function () {
              this.traverse(function (e) {
                e.element instanceof
                  e.element.ownerDocument.defaultView.Element &&
                  null !== e.element.parentNode &&
                  e.element.remove();
              });
            });
        }
        copy(e, t) {
          return (
            super.copy(e, t),
            (this.element = e.element.cloneNode(!0)),
            (this.center = e.center),
            this
          );
        }
      }
      let i2 = new en.Pq0(),
        i3 = new en.kn4(),
        i8 = new en.kn4(),
        i4 = new en.Pq0(),
        i5 = new en.Pq0();
      class i6 {
        constructor(e = {}) {
          let t, i, r, s;
          let n = this,
            a = { objects: new WeakMap() },
            o =
              void 0 !== e.element ? e.element : document.createElement("div");
          (o.style.overflow = "hidden"),
            (this.domElement = o),
            (this.getSize = function () {
              return { width: t, height: i };
            }),
            (this.render = function (e, t) {
              !0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(),
                null === t.parent &&
                  !0 === t.matrixWorldAutoUpdate &&
                  t.updateMatrixWorld(),
                i3.copy(t.matrixWorldInverse),
                i8.multiplyMatrices(t.projectionMatrix, i3),
                (function e(t, i, A) {
                  if (!1 === t.visible) {
                    !(function e(t) {
                      t.isCSS2DObject && (t.element.style.display = "none");
                      for (let i = 0, r = t.children.length; i < r; i++)
                        e(t.children[i]);
                    })(t);
                    return;
                  }
                  if (t.isCSS2DObject) {
                    i2.setFromMatrixPosition(t.matrixWorld),
                      i2.applyMatrix4(i8);
                    let e =
                        i2.z >= -1 &&
                        i2.z <= 1 &&
                        !0 === t.layers.test(A.layers),
                      l = t.element;
                    (l.style.display = !0 === e ? "" : "none"),
                      !0 === e &&
                        (t.onBeforeRender(n, i, A),
                        (l.style.transform =
                          "translate(" +
                          -100 * t.center.x +
                          "%," +
                          -100 * t.center.y +
                          "%)translate(" +
                          (i2.x * r + r) +
                          "px," +
                          (-i2.y * s + s) +
                          "px)"),
                        l.parentNode !== o && o.appendChild(l),
                        t.onAfterRender(n, i, A));
                    let h = {
                      distanceToCameraSquared:
                        (i4.setFromMatrixPosition(A.matrixWorld),
                        i5.setFromMatrixPosition(t.matrixWorld),
                        i4.distanceToSquared(i5)),
                    };
                    a.objects.set(t, h);
                  }
                  for (let r = 0, s = t.children.length; r < s; r++)
                    e(t.children[r], i, A);
                })(e, e, t),
                (function (e) {
                  let t = (function (e) {
                      let t = [];
                      return (
                        e.traverseVisible(function (e) {
                          e.isCSS2DObject && t.push(e);
                        }),
                        t
                      );
                    })(e).sort(function (e, t) {
                      return e.renderOrder !== t.renderOrder
                        ? t.renderOrder - e.renderOrder
                        : a.objects.get(e).distanceToCameraSquared -
                            a.objects.get(t).distanceToCameraSquared;
                    }),
                    i = t.length;
                  for (let e = 0, r = t.length; e < r; e++)
                    t[e].element.style.zIndex = i - e;
                })(e);
            }),
            (this.setSize = function (e, n) {
              (t = e),
                (i = n),
                (r = t / 2),
                (s = i / 2),
                (o.style.width = e + "px"),
                (o.style.height = n + "px");
            });
        }
      }
      function i9(e, t, i) {
        let r = i,
          s = new en.Pq0();
        return (
          e.updateWorldMatrix(!0, !0),
          e.traverseVisible((e) => {
            let { geometry: i } = e;
            if (void 0 !== i) {
              let { position: n } = i.attributes;
              if (void 0 !== n)
                for (let i = 0, a = n.count; i < a; i++)
                  e.isMesh
                    ? e.getVertexPosition(i, s)
                    : s.fromBufferAttribute(n, i),
                    e.isSkinnedMesh || s.applyMatrix4(e.matrixWorld),
                    (r = t(r, s));
            }
          }),
          r
        );
      }
      let i7 = {
        POSITION: [
          "byte",
          "byte normalized",
          "unsigned byte",
          "unsigned byte normalized",
          "short",
          "short normalized",
          "unsigned short",
          "unsigned short normalized",
        ],
        NORMAL: ["byte normalized", "short normalized"],
        TANGENT: ["byte normalized", "short normalized"],
        TEXCOORD: [
          "byte",
          "byte normalized",
          "unsigned byte",
          "short",
          "short normalized",
          "unsigned short",
        ],
      };
      class re {
        constructor() {
          (this.textureUtils = null),
            (this.pluginCallbacks = []),
            this.register(function (e) {
              return new ru(e);
            }),
            this.register(function (e) {
              return new rg(e);
            }),
            this.register(function (e) {
              return new rf(e);
            }),
            this.register(function (e) {
              return new rI(e);
            }),
            this.register(function (e) {
              return new rE(e);
            }),
            this.register(function (e) {
              return new rC(e);
            }),
            this.register(function (e) {
              return new rd(e);
            }),
            this.register(function (e) {
              return new rp(e);
            }),
            this.register(function (e) {
              return new rm(e);
            }),
            this.register(function (e) {
              return new ry(e);
            }),
            this.register(function (e) {
              return new rB(e);
            }),
            this.register(function (e) {
              return new rw(e);
            }),
            this.register(function (e) {
              return new rv(e);
            }),
            this.register(function (e) {
              return new rQ(e);
            });
        }
        register(e) {
          return (
            -1 === this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.push(e),
            this
          );
        }
        unregister(e) {
          return (
            -1 !== this.pluginCallbacks.indexOf(e) &&
              this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
            this
          );
        }
        setTextureUtils(e) {
          return (this.textureUtils = e), this;
        }
        parse(e, t, i, r) {
          let s = new rc(),
            n = [];
          for (let e = 0, t = this.pluginCallbacks.length; e < t; e++)
            n.push(this.pluginCallbacks[e](s));
          s.setPlugins(n),
            s.setTextureUtils(this.textureUtils),
            s.writeAsync(e, t, r).catch(i);
        }
        parseAsync(e, t) {
          let i = this;
          return new Promise(function (r, s) {
            i.parse(e, r, s, t);
          });
        }
      }
      let rt = {
          POINTS: 0,
          LINES: 1,
          LINE_LOOP: 2,
          LINE_STRIP: 3,
          TRIANGLES: 4,
          BYTE: 5120,
          UNSIGNED_BYTE: 5121,
          SHORT: 5122,
          UNSIGNED_SHORT: 5123,
          INT: 5124,
          UNSIGNED_INT: 5125,
          FLOAT: 5126,
          ARRAY_BUFFER: 34962,
          ELEMENT_ARRAY_BUFFER: 34963,
          NEAREST: 9728,
          LINEAR: 9729,
          NEAREST_MIPMAP_NEAREST: 9984,
          LINEAR_MIPMAP_NEAREST: 9985,
          NEAREST_MIPMAP_LINEAR: 9986,
          LINEAR_MIPMAP_LINEAR: 9987,
          CLAMP_TO_EDGE: 33071,
          MIRRORED_REPEAT: 33648,
          REPEAT: 10497,
        },
        ri = "KHR_mesh_quantization",
        rr = {};
      (rr[en.hxR] = rt.NEAREST),
        (rr[en.pHI] = rt.NEAREST_MIPMAP_NEAREST),
        (rr[en.Cfg] = rt.NEAREST_MIPMAP_LINEAR),
        (rr[en.k6q] = rt.LINEAR),
        (rr[en.kRr] = rt.LINEAR_MIPMAP_NEAREST),
        (rr[en.$_I] = rt.LINEAR_MIPMAP_LINEAR),
        (rr[en.ghU] = rt.CLAMP_TO_EDGE),
        (rr[en.GJx] = rt.REPEAT),
        (rr[en.kTW] = rt.MIRRORED_REPEAT);
      let rs = {
          scale: "scale",
          position: "translation",
          quaternion: "rotation",
          morphTargetInfluences: "weights",
        },
        rn = new en.Q1f();
      function ra(e, t) {
        return (
          e.length === t.length &&
          e.every(function (e, i) {
            return e === t[i];
          })
        );
      }
      function ro(e) {
        return 4 * Math.ceil(e / 4);
      }
      function rA(e, t = 0) {
        let i = ro(e.byteLength);
        if (i !== e.byteLength) {
          let r = new Uint8Array(i);
          if ((r.set(new Uint8Array(e)), 0 !== t))
            for (let s = e.byteLength; s < i; s++) r[s] = t;
          return r.buffer;
        }
        return e;
      }
      function rl() {
        return "undefined" == typeof document &&
          "undefined" != typeof OffscreenCanvas
          ? new OffscreenCanvas(1, 1)
          : document.createElement("canvas");
      }
      function rh(e, t) {
        let i;
        return void 0 !== e.toBlob
          ? new Promise((i) => e.toBlob(i, t))
          : ("image/jpeg" === t ? (i = 0.92) : "image/webp" === t && (i = 0.8),
            e.convertToBlob({ type: t, quality: i }));
      }
      class rc {
        constructor() {
          (this.plugins = []),
            (this.options = {}),
            (this.pending = []),
            (this.buffers = []),
            (this.byteOffset = 0),
            (this.buffers = []),
            (this.nodeMap = new Map()),
            (this.skins = []),
            (this.extensionsUsed = {}),
            (this.extensionsRequired = {}),
            (this.uids = new Map()),
            (this.uid = 0),
            (this.json = {
              asset: {
                version: "2.0",
                generator: "THREE.GLTFExporter r" + en.sPf,
              },
            }),
            (this.cache = {
              meshes: new Map(),
              attributes: new Map(),
              attributesNormalized: new Map(),
              materials: new Map(),
              textures: new Map(),
              images: new Map(),
            }),
            (this.textureUtils = null);
        }
        setPlugins(e) {
          this.plugins = e;
        }
        setTextureUtils(e) {
          this.textureUtils = e;
        }
        async writeAsync(e, t, i = {}) {
          (this.options = Object.assign(
            {
              binary: !1,
              trs: !1,
              onlyVisible: !0,
              maxTextureSize: 1 / 0,
              animations: [],
              includeCustomExtensions: !1,
            },
            i
          )),
            this.options.animations.length > 0 && (this.options.trs = !0),
            await this.processInputAsync(e),
            await Promise.all(this.pending);
          let r = this.buffers,
            s = this.json;
          i = this.options;
          let n = this.extensionsUsed,
            a = this.extensionsRequired,
            o = new Blob(r, { type: "application/octet-stream" }),
            A = Object.keys(n),
            l = Object.keys(a);
          if (
            (A.length > 0 && (s.extensionsUsed = A),
            l.length > 0 && (s.extensionsRequired = l),
            s.buffers &&
              s.buffers.length > 0 &&
              (s.buffers[0].byteLength = o.size),
            !0 === i.binary)
          ) {
            let e = new FileReader();
            e.readAsArrayBuffer(o),
              (e.onloadend = function () {
                var i;
                let r = rA(e.result),
                  n = new DataView(new ArrayBuffer(8));
                n.setUint32(0, r.byteLength, !0), n.setUint32(4, 5130562, !0);
                let a = rA(
                    ((i = JSON.stringify(s)),
                    new TextEncoder().encode(i).buffer),
                    32
                  ),
                  o = new DataView(new ArrayBuffer(8));
                o.setUint32(0, a.byteLength, !0),
                  o.setUint32(4, 0x4e4f534a, !0);
                let A = new ArrayBuffer(12),
                  l = new DataView(A);
                l.setUint32(0, 0x46546c67, !0), l.setUint32(4, 2, !0);
                let h =
                  12 +
                  o.byteLength +
                  a.byteLength +
                  n.byteLength +
                  r.byteLength;
                l.setUint32(8, h, !0);
                let c = new Blob([A, o, a, n, r], {
                    type: "application/octet-stream",
                  }),
                  u = new FileReader();
                u.readAsArrayBuffer(c),
                  (u.onloadend = function () {
                    t(u.result);
                  });
              });
          } else if (s.buffers && s.buffers.length > 0) {
            let e = new FileReader();
            e.readAsDataURL(o),
              (e.onloadend = function () {
                let i = e.result;
                (s.buffers[0].uri = i), t(s);
              });
          } else t(s);
        }
        serializeUserData(e, t) {
          if (0 === Object.keys(e.userData).length) return;
          let i = this.options,
            r = this.extensionsUsed;
          try {
            let s = JSON.parse(JSON.stringify(e.userData));
            if (i.includeCustomExtensions && s.gltfExtensions) {
              for (let e in (void 0 === t.extensions && (t.extensions = {}),
              s.gltfExtensions))
                (t.extensions[e] = s.gltfExtensions[e]), (r[e] = !0);
              delete s.gltfExtensions;
            }
            Object.keys(s).length > 0 && (t.extras = s);
          } catch (t) {
            console.warn(
              "THREE.GLTFExporter: userData of '" +
                e.name +
                "' won't be serialized because of JSON.stringify error - " +
                t.message
            );
          }
        }
        getUID(e, t = !1) {
          if (!1 === this.uids.has(e)) {
            let t = new Map();
            t.set(!0, this.uid++), t.set(!1, this.uid++), this.uids.set(e, t);
          }
          return this.uids.get(e).get(t);
        }
        isNormalizedNormalAttribute(e) {
          if (this.cache.attributesNormalized.has(e)) return !1;
          let t = new en.Pq0();
          for (let i = 0, r = e.count; i < r; i++)
            if (Math.abs(t.fromBufferAttribute(e, i).length() - 1) > 5e-4)
              return !1;
          return !0;
        }
        createNormalizedNormalAttribute(e) {
          let t = this.cache;
          if (t.attributesNormalized.has(e))
            return t.attributesNormalized.get(e);
          let i = e.clone(),
            r = new en.Pq0();
          for (let e = 0, t = i.count; e < t; e++)
            r.fromBufferAttribute(i, e),
              0 === r.x && 0 === r.y && 0 === r.z ? r.setX(1) : r.normalize(),
              i.setXYZ(e, r.x, r.y, r.z);
          return t.attributesNormalized.set(e, i), i;
        }
        applyTextureTransform(e, t) {
          let i = !1,
            r = {};
          (0 !== t.offset.x || 0 !== t.offset.y) &&
            ((r.offset = t.offset.toArray()), (i = !0)),
            0 !== t.rotation && ((r.rotation = t.rotation), (i = !0)),
            (1 !== t.repeat.x || 1 !== t.repeat.y) &&
              ((r.scale = t.repeat.toArray()), (i = !0)),
            i &&
              ((e.extensions = e.extensions || {}),
              (e.extensions.KHR_texture_transform = r),
              (this.extensionsUsed.KHR_texture_transform = !0));
        }
        async buildMetalRoughTextureAsync(e, t) {
          if (e === t) return e;
          function i(e) {
            return e.colorSpace === en.er$
              ? function (e) {
                  return e < 0.04045
                    ? 0.0773993808 * e
                    : Math.pow(0.9478672986 * e + 0.0521327014, 2.4);
                }
              : function (e) {
                  return e;
                };
          }
          e instanceof en.FvD && (e = await this.decompressTextureAsync(e)),
            t instanceof en.FvD && (t = await this.decompressTextureAsync(t));
          let r = e ? e.image : null,
            s = t ? t.image : null,
            n = Math.max(r ? r.width : 0, s ? s.width : 0),
            a = Math.max(r ? r.height : 0, s ? s.height : 0),
            o = rl();
          (o.width = n), (o.height = a);
          let A = o.getContext("2d", { willReadFrequently: !0 });
          (A.fillStyle = "#00ffff"), A.fillRect(0, 0, n, a);
          let l = A.getImageData(0, 0, n, a);
          if (r) {
            A.drawImage(r, 0, 0, n, a);
            let t = i(e),
              s = A.getImageData(0, 0, n, a).data;
            for (let e = 2; e < s.length; e += 4)
              l.data[e] = 256 * t(s[e] / 256);
          }
          if (s) {
            A.drawImage(s, 0, 0, n, a);
            let e = i(t),
              r = A.getImageData(0, 0, n, a).data;
            for (let t = 1; t < r.length; t += 4)
              l.data[t] = 256 * e(r[t] / 256);
          }
          A.putImageData(l, 0, 0);
          let h = (e || t).clone();
          return (
            (h.source = new en.kLi(o)),
            (h.colorSpace = en.jf0),
            (h.channel = (e || t).channel),
            e &&
              t &&
              e.channel !== t.channel &&
              console.warn(
                "THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."
              ),
            console.warn(
              "THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."
            ),
            h
          );
        }
        async decompressTextureAsync(e, t = 1 / 0) {
          if (null === this.textureUtils)
            throw Error(
              "THREE.GLTFExporter: setTextureUtils() must be called to process compressed textures."
            );
          return await this.textureUtils.decompress(e, t);
        }
        processBuffer(e) {
          let t = this.json,
            i = this.buffers;
          return t.buffers || (t.buffers = [{ byteLength: 0 }]), i.push(e), 0;
        }
        processBufferView(e, t, i, r, s) {
          let n;
          let a = this.json;
          switch ((a.bufferViews || (a.bufferViews = []), t)) {
            case rt.BYTE:
            case rt.UNSIGNED_BYTE:
              n = 1;
              break;
            case rt.SHORT:
            case rt.UNSIGNED_SHORT:
              n = 2;
              break;
            default:
              n = 4;
          }
          let o = e.itemSize * n;
          s === rt.ARRAY_BUFFER && (o = 4 * Math.ceil(o / 4));
          let A = ro(r * o),
            l = new DataView(new ArrayBuffer(A)),
            h = 0;
          for (let s = i; s < i + r; s++) {
            for (let i = 0; i < e.itemSize; i++) {
              let r;
              e.itemSize > 4
                ? (r = e.array[s * e.itemSize + i])
                : (0 === i
                    ? (r = e.getX(s))
                    : 1 === i
                    ? (r = e.getY(s))
                    : 2 === i
                    ? (r = e.getZ(s))
                    : 3 === i && (r = e.getW(s)),
                  !0 === e.normalized && (r = en.cj9.normalize(r, e.array))),
                t === rt.FLOAT
                  ? l.setFloat32(h, r, !0)
                  : t === rt.INT
                  ? l.setInt32(h, r, !0)
                  : t === rt.UNSIGNED_INT
                  ? l.setUint32(h, r, !0)
                  : t === rt.SHORT
                  ? l.setInt16(h, r, !0)
                  : t === rt.UNSIGNED_SHORT
                  ? l.setUint16(h, r, !0)
                  : t === rt.BYTE
                  ? l.setInt8(h, r)
                  : t === rt.UNSIGNED_BYTE && l.setUint8(h, r),
                (h += n);
            }
            h % o != 0 && (h += o - (h % o));
          }
          let c = {
            buffer: this.processBuffer(l.buffer),
            byteOffset: this.byteOffset,
            byteLength: A,
          };
          return (
            void 0 !== s && (c.target = s),
            s === rt.ARRAY_BUFFER && (c.byteStride = o),
            (this.byteOffset += A),
            a.bufferViews.push(c),
            { id: a.bufferViews.length - 1, byteLength: 0 }
          );
        }
        processBufferViewImage(e) {
          let t = this,
            i = t.json;
          return (
            i.bufferViews || (i.bufferViews = []),
            new Promise(function (r) {
              let s = new FileReader();
              s.readAsArrayBuffer(e),
                (s.onloadend = function () {
                  let e = rA(s.result),
                    n = {
                      buffer: t.processBuffer(e),
                      byteOffset: t.byteOffset,
                      byteLength: e.byteLength,
                    };
                  (t.byteOffset += e.byteLength), r(i.bufferViews.push(n) - 1);
                });
            })
          );
        }
        processAccessor(e, t, i, r) {
          let s, n;
          let a = this.json;
          if (e.array.constructor === Float32Array) s = rt.FLOAT;
          else if (e.array.constructor === Int32Array) s = rt.INT;
          else if (e.array.constructor === Uint32Array) s = rt.UNSIGNED_INT;
          else if (e.array.constructor === Int16Array) s = rt.SHORT;
          else if (e.array.constructor === Uint16Array) s = rt.UNSIGNED_SHORT;
          else if (e.array.constructor === Int8Array) s = rt.BYTE;
          else if (e.array.constructor === Uint8Array) s = rt.UNSIGNED_BYTE;
          else
            throw Error(
              "THREE.GLTFExporter: Unsupported bufferAttribute component type: " +
                e.array.constructor.name
            );
          if (
            (void 0 === i && (i = 0),
            (void 0 === r || r === 1 / 0) && (r = e.count),
            0 === r)
          )
            return null;
          let o = (function (e, t, i) {
            let r = {
              min: Array(e.itemSize).fill(Number.POSITIVE_INFINITY),
              max: Array(e.itemSize).fill(Number.NEGATIVE_INFINITY),
            };
            for (let s = t; s < t + i; s++)
              for (let t = 0; t < e.itemSize; t++) {
                let i;
                e.itemSize > 4
                  ? (i = e.array[s * e.itemSize + t])
                  : (0 === t
                      ? (i = e.getX(s))
                      : 1 === t
                      ? (i = e.getY(s))
                      : 2 === t
                      ? (i = e.getZ(s))
                      : 3 === t && (i = e.getW(s)),
                    !0 === e.normalized && (i = en.cj9.normalize(i, e.array))),
                  (r.min[t] = Math.min(r.min[t], i)),
                  (r.max[t] = Math.max(r.max[t], i));
              }
            return r;
          })(e, i, r);
          void 0 !== t &&
            (n = e === t.index ? rt.ELEMENT_ARRAY_BUFFER : rt.ARRAY_BUFFER);
          let A = this.processBufferView(e, s, i, r, n),
            l = {
              bufferView: A.id,
              byteOffset: A.byteOffset,
              componentType: s,
              count: r,
              max: o.max,
              min: o.min,
              type: {
                1: "SCALAR",
                2: "VEC2",
                3: "VEC3",
                4: "VEC4",
                9: "MAT3",
                16: "MAT4",
              }[e.itemSize],
            };
          return (
            !0 === e.normalized && (l.normalized = !0),
            a.accessors || (a.accessors = []),
            a.accessors.push(l) - 1
          );
        }
        processImage(e, t, i, r = "image/png") {
          if (null !== e) {
            let s = this,
              n = s.cache,
              a = s.json,
              o = s.options,
              A = s.pending;
            n.images.has(e) || n.images.set(e, {});
            let l = n.images.get(e),
              h = r + ":flipY/" + i.toString();
            if (void 0 !== l[h]) return l[h];
            a.images || (a.images = []);
            let c = { mimeType: r },
              u = rl();
            (u.width = Math.min(e.width, o.maxTextureSize)),
              (u.height = Math.min(e.height, o.maxTextureSize));
            let g = u.getContext("2d", { willReadFrequently: !0 });
            if (
              (!0 === i && (g.translate(0, u.height), g.scale(1, -1)),
              void 0 !== e.data)
            ) {
              t !== en.GWd &&
                console.error("GLTFExporter: Only RGBAFormat is supported.", t),
                (e.width > o.maxTextureSize || e.height > o.maxTextureSize) &&
                  console.warn(
                    "GLTFExporter: Image size is bigger than maxTextureSize",
                    e
                  );
              let i = new Uint8ClampedArray(e.height * e.width * 4);
              for (let t = 0; t < i.length; t += 4)
                (i[t + 0] = e.data[t + 0]),
                  (i[t + 1] = e.data[t + 1]),
                  (i[t + 2] = e.data[t + 2]),
                  (i[t + 3] = e.data[t + 3]);
              g.putImageData(new ImageData(i, e.width, e.height), 0, 0);
            } else if (
              ("undefined" != typeof HTMLImageElement &&
                e instanceof HTMLImageElement) ||
              ("undefined" != typeof HTMLCanvasElement &&
                e instanceof HTMLCanvasElement) ||
              ("undefined" != typeof ImageBitmap && e instanceof ImageBitmap) ||
              ("undefined" != typeof OffscreenCanvas &&
                e instanceof OffscreenCanvas)
            )
              g.drawImage(e, 0, 0, u.width, u.height);
            else
              throw Error(
                "THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas."
              );
            !0 === o.binary
              ? A.push(
                  rh(u, r)
                    .then((e) => s.processBufferViewImage(e))
                    .then((e) => {
                      c.bufferView = e;
                    })
                )
              : void 0 !== u.toDataURL
              ? (c.uri = u.toDataURL(r))
              : A.push(
                  rh(u, r)
                    .then((e) => new FileReader().readAsDataURL(e))
                    .then((e) => {
                      c.uri = e;
                    })
                );
            let d = a.images.push(c) - 1;
            return (l[h] = d), d;
          }
          throw Error(
            "THREE.GLTFExporter: No valid image data found. Unable to process texture."
          );
        }
        processSampler(e) {
          let t = this.json;
          t.samplers || (t.samplers = []);
          let i = {
            magFilter: rr[e.magFilter],
            minFilter: rr[e.minFilter],
            wrapS: rr[e.wrapS],
            wrapT: rr[e.wrapT],
          };
          return t.samplers.push(i) - 1;
        }
        async processTextureAsync(e) {
          let t = this.options,
            i = this.cache,
            r = this.json;
          if (i.textures.has(e)) return i.textures.get(e);
          r.textures || (r.textures = []),
            e instanceof en.FvD &&
              (e = await this.decompressTextureAsync(e, t.maxTextureSize));
          let s = e.userData.mimeType;
          "image/webp" === s && (s = "image/png");
          let n = {
            sampler: this.processSampler(e),
            source: this.processImage(e.image, e.format, e.flipY, s),
          };
          e.name && (n.name = e.name),
            await this._invokeAllAsync(async function (t) {
              t.writeTexture && (await t.writeTexture(e, n));
            });
          let a = r.textures.push(n) - 1;
          return i.textures.set(e, a), a;
        }
        async processMaterialAsync(e) {
          let t = this.cache,
            i = this.json;
          if (t.materials.has(e)) return t.materials.get(e);
          if (e.isShaderMaterial)
            return (
              console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),
              null
            );
          i.materials || (i.materials = []);
          let r = { pbrMetallicRoughness: {} };
          !0 !== e.isMeshStandardMaterial &&
            !0 !== e.isMeshBasicMaterial &&
            console.warn(
              "GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results."
            );
          let s = e.color.toArray().concat([e.opacity]);
          if (
            (ra(s, [1, 1, 1, 1]) ||
              (r.pbrMetallicRoughness.baseColorFactor = s),
            e.isMeshStandardMaterial
              ? ((r.pbrMetallicRoughness.metallicFactor = e.metalness),
                (r.pbrMetallicRoughness.roughnessFactor = e.roughness))
              : ((r.pbrMetallicRoughness.metallicFactor = 0),
                (r.pbrMetallicRoughness.roughnessFactor = 1)),
            e.metalnessMap || e.roughnessMap)
          ) {
            let t = await this.buildMetalRoughTextureAsync(
                e.metalnessMap,
                e.roughnessMap
              ),
              i = {
                index: await this.processTextureAsync(t),
                texCoord: t.channel,
              };
            this.applyTextureTransform(i, t),
              (r.pbrMetallicRoughness.metallicRoughnessTexture = i);
          }
          if (e.map) {
            let t = {
              index: await this.processTextureAsync(e.map),
              texCoord: e.map.channel,
            };
            this.applyTextureTransform(t, e.map),
              (r.pbrMetallicRoughness.baseColorTexture = t);
          }
          if (e.emissive) {
            let t = e.emissive;
            if (
              (Math.max(t.r, t.g, t.b) > 0 &&
                (r.emissiveFactor = e.emissive.toArray()),
              e.emissiveMap)
            ) {
              let t = {
                index: await this.processTextureAsync(e.emissiveMap),
                texCoord: e.emissiveMap.channel,
              };
              this.applyTextureTransform(t, e.emissiveMap),
                (r.emissiveTexture = t);
            }
          }
          if (e.normalMap) {
            let t = {
              index: await this.processTextureAsync(e.normalMap),
              texCoord: e.normalMap.channel,
            };
            e.normalScale &&
              1 !== e.normalScale.x &&
              (t.scale = e.normalScale.x),
              this.applyTextureTransform(t, e.normalMap),
              (r.normalTexture = t);
          }
          if (e.aoMap) {
            let t = {
              index: await this.processTextureAsync(e.aoMap),
              texCoord: e.aoMap.channel,
            };
            1 !== e.aoMapIntensity && (t.strength = e.aoMapIntensity),
              this.applyTextureTransform(t, e.aoMap),
              (r.occlusionTexture = t);
          }
          e.transparent
            ? (r.alphaMode = "BLEND")
            : e.alphaTest > 0 &&
              ((r.alphaMode = "MASK"), (r.alphaCutoff = e.alphaTest)),
            e.side === en.$EB && (r.doubleSided = !0),
            "" !== e.name && (r.name = e.name),
            this.serializeUserData(e, r),
            await this._invokeAllAsync(async function (t) {
              t.writeMaterialAsync && (await t.writeMaterialAsync(e, r));
            });
          let n = i.materials.push(r) - 1;
          return t.materials.set(e, n), n;
        }
        async processMeshAsync(e) {
          let t;
          let i = this.cache,
            r = this.json,
            s = [e.geometry.uuid];
          if (Array.isArray(e.material))
            for (let t = 0, i = e.material.length; t < i; t++)
              s.push(e.material[t].uuid);
          else s.push(e.material.uuid);
          let n = s.join(":");
          if (i.meshes.has(n)) return i.meshes.get(n);
          let a = e.geometry;
          t = e.isLineSegments
            ? rt.LINES
            : e.isLineLoop
            ? rt.LINE_LOOP
            : e.isLine
            ? rt.LINE_STRIP
            : e.isPoints
            ? rt.POINTS
            : e.material.wireframe
            ? rt.LINES
            : rt.TRIANGLES;
          let o = {},
            A = {},
            l = [],
            h = [],
            c = {
              uv: "TEXCOORD_0",
              uv1: "TEXCOORD_1",
              uv2: "TEXCOORD_2",
              uv3: "TEXCOORD_3",
              color: "COLOR_0",
              skinWeight: "WEIGHTS_0",
              skinIndex: "JOINTS_0",
            },
            u = a.getAttribute("normal");
          void 0 === u ||
            this.isNormalizedNormalAttribute(u) ||
            (console.warn(
              "THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."
            ),
            a.setAttribute("normal", this.createNormalizedNormalAttribute(u)));
          let g = null;
          for (let e in a.attributes) {
            if ("morph" === e.slice(0, 5)) continue;
            let t = a.attributes[e];
            if (
              ((e = c[e] || e.toUpperCase()),
              /^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(
                e
              ) || (e = "_" + e),
              i.attributes.has(this.getUID(t)))
            ) {
              A[e] = i.attributes.get(this.getUID(t));
              continue;
            }
            g = null;
            let r = t.array;
            "JOINTS_0" !== e ||
            r instanceof Uint16Array ||
            r instanceof Uint8Array
              ? (r instanceof Uint32Array || r instanceof Int32Array) &&
                !e.startsWith("_") &&
                (console.warn(
                  `GLTFExporter: Attribute "${e}" converted to type FLOAT.`
                ),
                (g = re.Utils.toFloat32BufferAttribute(t)))
              : (console.warn(
                  'GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'
                ),
                (g = new en.THS(new Uint16Array(r), t.itemSize, t.normalized)));
            let s = this.processAccessor(g || t, a);
            null !== s &&
              (e.startsWith("_") || this.detectMeshQuantization(e, t),
              (A[e] = s),
              i.attributes.set(this.getUID(t), s));
          }
          if (
            (void 0 !== u && a.setAttribute("normal", u),
            0 === Object.keys(A).length)
          )
            return null;
          if (
            void 0 !== e.morphTargetInfluences &&
            e.morphTargetInfluences.length > 0
          ) {
            let t = [],
              r = [],
              s = {};
            if (void 0 !== e.morphTargetDictionary)
              for (let t in e.morphTargetDictionary)
                s[e.morphTargetDictionary[t]] = t;
            for (let n = 0; n < e.morphTargetInfluences.length; ++n) {
              let o = {},
                A = !1;
              for (let e in a.morphAttributes) {
                if ("position" !== e && "normal" !== e) {
                  A ||
                    (console.warn(
                      "GLTFExporter: Only POSITION and NORMAL morph are supported."
                    ),
                    (A = !0));
                  continue;
                }
                let t = a.morphAttributes[e][n],
                  r = e.toUpperCase(),
                  s = a.attributes[e];
                if (i.attributes.has(this.getUID(t, !0))) {
                  o[r] = i.attributes.get(this.getUID(t, !0));
                  continue;
                }
                let l = t.clone();
                if (!a.morphTargetsRelative)
                  for (let e = 0, i = t.count; e < i; e++)
                    for (let i = 0; i < t.itemSize; i++)
                      0 === i && l.setX(e, t.getX(e) - s.getX(e)),
                        1 === i && l.setY(e, t.getY(e) - s.getY(e)),
                        2 === i && l.setZ(e, t.getZ(e) - s.getZ(e)),
                        3 === i && l.setW(e, t.getW(e) - s.getW(e));
                (o[r] = this.processAccessor(l, a)),
                  i.attributes.set(this.getUID(s, !0), o[r]);
              }
              h.push(o),
                t.push(e.morphTargetInfluences[n]),
                void 0 !== e.morphTargetDictionary && r.push(s[n]);
            }
            (o.weights = t),
              r.length > 0 && ((o.extras = {}), (o.extras.targetNames = r));
          }
          let d = Array.isArray(e.material);
          if (d && 0 === a.groups.length) return null;
          let p = !1;
          if (d && null === a.index) {
            let e = [];
            for (let t = 0, i = a.attributes.position.count; t < i; t++)
              e[t] = t;
            a.setIndex(e), (p = !0);
          }
          let m = d ? e.material : [e.material],
            f = d
              ? a.groups
              : [{ materialIndex: 0, start: void 0, count: void 0 }];
          for (let e = 0, r = f.length; e < r; e++) {
            let r = { mode: t, attributes: A };
            if (
              (this.serializeUserData(a, r),
              h.length > 0 && (r.targets = h),
              null !== a.index)
            ) {
              let t = this.getUID(a.index);
              (void 0 !== f[e].start || void 0 !== f[e].count) &&
                (t += ":" + f[e].start + ":" + f[e].count),
                i.attributes.has(t)
                  ? (r.indices = i.attributes.get(t))
                  : ((r.indices = this.processAccessor(
                      a.index,
                      a,
                      f[e].start,
                      f[e].count
                    )),
                    i.attributes.set(t, r.indices)),
                null === r.indices && delete r.indices;
            }
            let s = await this.processMaterialAsync(m[f[e].materialIndex]);
            null !== s && (r.material = s), l.push(r);
          }
          !0 === p && a.setIndex(null),
            (o.primitives = l),
            r.meshes || (r.meshes = []),
            await this._invokeAllAsync(function (t) {
              t.writeMesh && t.writeMesh(e, o);
            });
          let I = r.meshes.push(o) - 1;
          return i.meshes.set(n, I), I;
        }
        detectMeshQuantization(e, t) {
          let i;
          if (this.extensionsUsed[ri]) return;
          switch (t.array.constructor) {
            case Int8Array:
              i = "byte";
              break;
            case Uint8Array:
              i = "unsigned byte";
              break;
            case Int16Array:
              i = "short";
              break;
            case Uint16Array:
              i = "unsigned short";
              break;
            default:
              return;
          }
          t.normalized && (i += " normalized");
          let r = e.split("_", 1)[0];
          i7[r] &&
            i7[r].includes(i) &&
            ((this.extensionsUsed[ri] = !0),
            (this.extensionsRequired[ri] = !0));
        }
        processCamera(e) {
          let t = this.json;
          t.cameras || (t.cameras = []);
          let i = e.isOrthographicCamera,
            r = { type: i ? "orthographic" : "perspective" };
          return (
            i
              ? (r.orthographic = {
                  xmag: 2 * e.right,
                  ymag: 2 * e.top,
                  zfar: e.far <= 0 ? 0.001 : e.far,
                  znear: e.near < 0 ? 0 : e.near,
                })
              : (r.perspective = {
                  aspectRatio: e.aspect,
                  yfov: en.cj9.degToRad(e.fov),
                  zfar: e.far <= 0 ? 0.001 : e.far,
                  znear: e.near < 0 ? 0 : e.near,
                }),
            "" !== e.name && (r.name = e.type),
            t.cameras.push(r) - 1
          );
        }
        processAnimation(e, t) {
          let i = this.json,
            r = this.nodeMap;
          i.animations || (i.animations = []);
          let s = (e = re.Utils.mergeMorphTargetTracks(e.clone(), t)).tracks,
            n = [],
            a = [];
          for (let e = 0; e < s.length; ++e) {
            let i;
            let o = s[e],
              A = en.Nwf.parseTrackName(o.name),
              l = en.Nwf.findNode(t, A.nodeName),
              h = rs[A.propertyName];
            if (
              ("bones" === A.objectName &&
                (l =
                  !0 === l.isSkinnedMesh
                    ? l.skeleton.getBoneByName(A.objectIndex)
                    : void 0),
              !l || !h)
            ) {
              console.warn(
                'THREE.GLTFExporter: Could not export animation track "%s".',
                o.name
              );
              continue;
            }
            let c = o.values.length / o.times.length;
            h === rs.morphTargetInfluences &&
              (c /= l.morphTargetInfluences.length),
              !0 ===
              o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline
                ? ((i = "CUBICSPLINE"), (c /= 3))
                : (i = o.getInterpolation() === en.ljd ? "STEP" : "LINEAR"),
              a.push({
                input: this.processAccessor(new en.THS(o.times, 1)),
                output: this.processAccessor(new en.THS(o.values, c)),
                interpolation: i,
              }),
              n.push({
                sampler: a.length - 1,
                target: { node: r.get(l), path: h },
              });
          }
          return (
            i.animations.push({
              name: e.name || "clip_" + i.animations.length,
              samplers: a,
              channels: n,
            }),
            i.animations.length - 1
          );
        }
        processSkin(e) {
          let t = this.json,
            i = this.nodeMap,
            r = t.nodes[i.get(e)],
            s = e.skeleton;
          if (void 0 === s) return null;
          let n = e.skeleton.bones[0];
          if (void 0 === n) return null;
          let a = [],
            o = new Float32Array(16 * s.bones.length),
            A = new en.kn4();
          for (let t = 0; t < s.bones.length; ++t)
            a.push(i.get(s.bones[t])),
              A.copy(s.boneInverses[t]),
              A.multiply(e.bindMatrix).toArray(o, 16 * t);
          return (
            void 0 === t.skins && (t.skins = []),
            t.skins.push({
              inverseBindMatrices: this.processAccessor(new en.THS(o, 16)),
              joints: a,
              skeleton: i.get(n),
            }),
            (r.skin = t.skins.length - 1)
          );
        }
        async processNodeAsync(e) {
          let t = this.json,
            i = this.options,
            r = this.nodeMap;
          t.nodes || (t.nodes = []);
          let s = {};
          if (i.trs) {
            let t = e.quaternion.toArray(),
              i = e.position.toArray(),
              r = e.scale.toArray();
            ra(t, [0, 0, 0, 1]) || (s.rotation = t),
              ra(i, [0, 0, 0]) || (s.translation = i),
              ra(r, [1, 1, 1]) || (s.scale = r);
          } else
            e.matrixAutoUpdate && e.updateMatrix(),
              !1 ===
                ra(
                  e.matrix.elements,
                  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
                ) && (s.matrix = e.matrix.elements);
          if (
            ("" !== e.name && (s.name = String(e.name)),
            this.serializeUserData(e, s),
            e.isMesh || e.isLine || e.isPoints)
          ) {
            let t = await this.processMeshAsync(e);
            null !== t && (s.mesh = t);
          } else e.isCamera && (s.camera = this.processCamera(e));
          if ((e.isSkinnedMesh && this.skins.push(e), e.children.length > 0)) {
            let t = [];
            for (let r = 0, s = e.children.length; r < s; r++) {
              let s = e.children[r];
              if (s.visible || !1 === i.onlyVisible) {
                let e = await this.processNodeAsync(s);
                null !== e && t.push(e);
              }
            }
            t.length > 0 && (s.children = t);
          }
          await this._invokeAllAsync(function (t) {
            t.writeNode && t.writeNode(e, s);
          });
          let n = t.nodes.push(s) - 1;
          return r.set(e, n), n;
        }
        async processSceneAsync(e) {
          let t = this.json,
            i = this.options;
          t.scenes || ((t.scenes = []), (t.scene = 0));
          let r = {};
          "" !== e.name && (r.name = e.name), t.scenes.push(r);
          let s = [];
          for (let t = 0, r = e.children.length; t < r; t++) {
            let r = e.children[t];
            if (r.visible || !1 === i.onlyVisible) {
              let e = await this.processNodeAsync(r);
              null !== e && s.push(e);
            }
          }
          s.length > 0 && (r.nodes = s), this.serializeUserData(e, r);
        }
        async processObjectsAsync(e) {
          let t = new en.Z58();
          t.name = "AuxScene";
          for (let i = 0; i < e.length; i++) t.children.push(e[i]);
          await this.processSceneAsync(t);
        }
        async processInputAsync(e) {
          let t = this.options;
          (e = e instanceof Array ? e : [e]),
            await this._invokeAllAsync(function (t) {
              t.beforeParse && t.beforeParse(e);
            });
          let i = [];
          for (let t = 0; t < e.length; t++)
            e[t] instanceof en.Z58
              ? await this.processSceneAsync(e[t])
              : i.push(e[t]);
          i.length > 0 && (await this.processObjectsAsync(i));
          for (let e = 0; e < this.skins.length; ++e)
            this.processSkin(this.skins[e]);
          for (let i = 0; i < t.animations.length; ++i)
            this.processAnimation(t.animations[i], e[0]);
          await this._invokeAllAsync(function (t) {
            t.afterParse && t.afterParse(e);
          });
        }
        async _invokeAllAsync(e) {
          for (let t = 0, i = this.plugins.length; t < i; t++)
            await e(this.plugins[t]);
        }
      }
      class ru {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_lights_punctual");
        }
        writeNode(e, t) {
          if (!e.isLight) return;
          if (!e.isDirectionalLight && !e.isPointLight && !e.isSpotLight) {
            console.warn(
              "THREE.GLTFExporter: Only directional, point, and spot lights are supported.",
              e
            );
            return;
          }
          let i = this.writer,
            r = i.json,
            s = i.extensionsUsed,
            n = {};
          e.name && (n.name = e.name),
            (n.color = e.color.toArray()),
            (n.intensity = e.intensity),
            e.isDirectionalLight
              ? (n.type = "directional")
              : e.isPointLight
              ? ((n.type = "point"), e.distance > 0 && (n.range = e.distance))
              : e.isSpotLight &&
                ((n.type = "spot"),
                e.distance > 0 && (n.range = e.distance),
                (n.spot = {}),
                (n.spot.innerConeAngle = (1 - e.penumbra) * e.angle),
                (n.spot.outerConeAngle = e.angle)),
            void 0 !== e.decay &&
              2 !== e.decay &&
              console.warn(
                "THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."
              ),
            e.target &&
              (e.target.parent !== e ||
                0 !== e.target.position.x ||
                0 !== e.target.position.y ||
                -1 !== e.target.position.z) &&
              console.warn(
                "THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."
              ),
            s[this.name] ||
              ((r.extensions = r.extensions || {}),
              (r.extensions[this.name] = { lights: [] }),
              (s[this.name] = !0));
          let a = r.extensions[this.name].lights;
          a.push(n),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = { light: a.length - 1 });
        }
      }
      class rg {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_unlit");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshBasicMaterial) return;
          let i = this.writer.extensionsUsed;
          (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = {}),
            (i[this.name] = !0),
            (t.pbrMetallicRoughness.metallicFactor = 0),
            (t.pbrMetallicRoughness.roughnessFactor = 0.9);
        }
      }
      class rd {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_clearcoat");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshPhysicalMaterial || 0 === e.clearcoat) return;
          let i = this.writer,
            r = i.extensionsUsed,
            s = {};
          if (((s.clearcoatFactor = e.clearcoat), e.clearcoatMap)) {
            let t = {
              index: await i.processTextureAsync(e.clearcoatMap),
              texCoord: e.clearcoatMap.channel,
            };
            i.applyTextureTransform(t, e.clearcoatMap),
              (s.clearcoatTexture = t);
          }
          if (
            ((s.clearcoatRoughnessFactor = e.clearcoatRoughness),
            e.clearcoatRoughnessMap)
          ) {
            let t = {
              index: await i.processTextureAsync(e.clearcoatRoughnessMap),
              texCoord: e.clearcoatRoughnessMap.channel,
            };
            i.applyTextureTransform(t, e.clearcoatRoughnessMap),
              (s.clearcoatRoughnessTexture = t);
          }
          if (e.clearcoatNormalMap) {
            let t = {
              index: await i.processTextureAsync(e.clearcoatNormalMap),
              texCoord: e.clearcoatNormalMap.channel,
            };
            1 !== e.clearcoatNormalScale.x &&
              (t.scale = e.clearcoatNormalScale.x),
              i.applyTextureTransform(t, e.clearcoatNormalMap),
              (s.clearcoatNormalTexture = t);
          }
          (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = s),
            (r[this.name] = !0);
        }
      }
      class rp {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_dispersion");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshPhysicalMaterial || 0 === e.dispersion) return;
          let i = this.writer.extensionsUsed,
            r = {};
          (r.dispersion = e.dispersion),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = r),
            (i[this.name] = !0);
        }
      }
      class rm {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_iridescence");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshPhysicalMaterial || 0 === e.iridescence) return;
          let i = this.writer,
            r = i.extensionsUsed,
            s = {};
          if (((s.iridescenceFactor = e.iridescence), e.iridescenceMap)) {
            let t = {
              index: await i.processTextureAsync(e.iridescenceMap),
              texCoord: e.iridescenceMap.channel,
            };
            i.applyTextureTransform(t, e.iridescenceMap),
              (s.iridescenceTexture = t);
          }
          if (
            ((s.iridescenceIor = e.iridescenceIOR),
            (s.iridescenceThicknessMinimum = e.iridescenceThicknessRange[0]),
            (s.iridescenceThicknessMaximum = e.iridescenceThicknessRange[1]),
            e.iridescenceThicknessMap)
          ) {
            let t = {
              index: await i.processTextureAsync(e.iridescenceThicknessMap),
              texCoord: e.iridescenceThicknessMap.channel,
            };
            i.applyTextureTransform(t, e.iridescenceThicknessMap),
              (s.iridescenceThicknessTexture = t);
          }
          (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = s),
            (r[this.name] = !0);
        }
      }
      class rf {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_transmission");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshPhysicalMaterial || 0 === e.transmission) return;
          let i = this.writer,
            r = i.extensionsUsed,
            s = {};
          if (((s.transmissionFactor = e.transmission), e.transmissionMap)) {
            let t = {
              index: await i.processTextureAsync(e.transmissionMap),
              texCoord: e.transmissionMap.channel,
            };
            i.applyTextureTransform(t, e.transmissionMap),
              (s.transmissionTexture = t);
          }
          (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = s),
            (r[this.name] = !0);
        }
      }
      class rI {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_volume");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshPhysicalMaterial || 0 === e.transmission) return;
          let i = this.writer,
            r = i.extensionsUsed,
            s = {};
          if (((s.thicknessFactor = e.thickness), e.thicknessMap)) {
            let t = {
              index: await i.processTextureAsync(e.thicknessMap),
              texCoord: e.thicknessMap.channel,
            };
            i.applyTextureTransform(t, e.thicknessMap),
              (s.thicknessTexture = t);
          }
          e.attenuationDistance !== 1 / 0 &&
            (s.attenuationDistance = e.attenuationDistance),
            (s.attenuationColor = e.attenuationColor.toArray()),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = s),
            (r[this.name] = !0);
        }
      }
      class rE {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_ior");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshPhysicalMaterial || 1.5 === e.ior) return;
          let i = this.writer.extensionsUsed,
            r = {};
          (r.ior = e.ior),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = r),
            (i[this.name] = !0);
        }
      }
      class rC {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_specular");
        }
        async writeMaterialAsync(e, t) {
          if (
            !e.isMeshPhysicalMaterial ||
            (1 === e.specularIntensity &&
              e.specularColor.equals(rn) &&
              !e.specularIntensityMap &&
              !e.specularColorMap)
          )
            return;
          let i = this.writer,
            r = i.extensionsUsed,
            s = {};
          if (e.specularIntensityMap) {
            let t = {
              index: await i.processTextureAsync(e.specularIntensityMap),
              texCoord: e.specularIntensityMap.channel,
            };
            i.applyTextureTransform(t, e.specularIntensityMap),
              (s.specularTexture = t);
          }
          if (e.specularColorMap) {
            let t = {
              index: await i.processTextureAsync(e.specularColorMap),
              texCoord: e.specularColorMap.channel,
            };
            i.applyTextureTransform(t, e.specularColorMap),
              (s.specularColorTexture = t);
          }
          (s.specularFactor = e.specularIntensity),
            (s.specularColorFactor = e.specularColor.toArray()),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = s),
            (r[this.name] = !0);
        }
      }
      class ry {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_sheen");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshPhysicalMaterial || 0 == e.sheen) return;
          let i = this.writer,
            r = i.extensionsUsed,
            s = {};
          if (e.sheenRoughnessMap) {
            let t = {
              index: await i.processTextureAsync(e.sheenRoughnessMap),
              texCoord: e.sheenRoughnessMap.channel,
            };
            i.applyTextureTransform(t, e.sheenRoughnessMap),
              (s.sheenRoughnessTexture = t);
          }
          if (e.sheenColorMap) {
            let t = {
              index: await i.processTextureAsync(e.sheenColorMap),
              texCoord: e.sheenColorMap.channel,
            };
            i.applyTextureTransform(t, e.sheenColorMap),
              (s.sheenColorTexture = t);
          }
          (s.sheenRoughnessFactor = e.sheenRoughness),
            (s.sheenColorFactor = e.sheenColor.toArray()),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = s),
            (r[this.name] = !0);
        }
      }
      class rB {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_anisotropy");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshPhysicalMaterial || 0 == e.anisotropy) return;
          let i = this.writer,
            r = i.extensionsUsed,
            s = {};
          if (e.anisotropyMap) {
            let t = { index: await i.processTextureAsync(e.anisotropyMap) };
            i.applyTextureTransform(t, e.anisotropyMap),
              (s.anisotropyTexture = t);
          }
          (s.anisotropyStrength = e.anisotropy),
            (s.anisotropyRotation = e.anisotropyRotation),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = s),
            (r[this.name] = !0);
        }
      }
      class rw {
        constructor(e) {
          (this.writer = e), (this.name = "KHR_materials_emissive_strength");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshStandardMaterial || 1 === e.emissiveIntensity) return;
          let i = this.writer.extensionsUsed,
            r = {};
          (r.emissiveStrength = e.emissiveIntensity),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = r),
            (i[this.name] = !0);
        }
      }
      class rv {
        constructor(e) {
          (this.writer = e), (this.name = "EXT_materials_bump");
        }
        async writeMaterialAsync(e, t) {
          if (!e.isMeshStandardMaterial || (1 === e.bumpScale && !e.bumpMap))
            return;
          let i = this.writer,
            r = i.extensionsUsed,
            s = {};
          if (e.bumpMap) {
            let t = {
              index: await i.processTextureAsync(e.bumpMap),
              texCoord: e.bumpMap.channel,
            };
            i.applyTextureTransform(t, e.bumpMap), (s.bumpTexture = t);
          }
          (s.bumpFactor = e.bumpScale),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = s),
            (r[this.name] = !0);
        }
      }
      class rQ {
        constructor(e) {
          (this.writer = e), (this.name = "EXT_mesh_gpu_instancing");
        }
        writeNode(e, t) {
          if (!e.isInstancedMesh) return;
          let i = this.writer,
            r = new Float32Array(3 * e.count),
            s = new Float32Array(4 * e.count),
            n = new Float32Array(3 * e.count),
            a = new en.kn4(),
            o = new en.Pq0(),
            A = new en.PTz(),
            l = new en.Pq0();
          for (let t = 0; t < e.count; t++)
            e.getMatrixAt(t, a),
              a.decompose(o, A, l),
              o.toArray(r, 3 * t),
              A.toArray(s, 4 * t),
              l.toArray(n, 3 * t);
          let h = {
            TRANSLATION: i.processAccessor(new en.THS(r, 3)),
            ROTATION: i.processAccessor(new en.THS(s, 4)),
            SCALE: i.processAccessor(new en.THS(n, 3)),
          };
          e.instanceColor && (h._COLOR_0 = i.processAccessor(e.instanceColor)),
            (t.extensions = t.extensions || {}),
            (t.extensions[this.name] = { attributes: h }),
            (i.extensionsUsed[this.name] = !0),
            (i.extensionsRequired[this.name] = !0);
        }
      }
      re.Utils = {
        insertKeyframe: function (e, t) {
          let i;
          let r = e.getValueSize(),
            s = new e.TimeBufferType(e.times.length + 1),
            n = new e.ValueBufferType(e.values.length + r),
            a = e.createInterpolant(new e.ValueBufferType(r));
          if (0 === e.times.length) {
            s[0] = t;
            for (let e = 0; e < r; e++) n[e] = 0;
            i = 0;
          } else if (t < e.times[0]) {
            if (0.001 > Math.abs(e.times[0] - t)) return 0;
            (s[0] = t),
              s.set(e.times, 1),
              n.set(a.evaluate(t), 0),
              n.set(e.values, r),
              (i = 0);
          } else if (t > e.times[e.times.length - 1]) {
            if (0.001 > Math.abs(e.times[e.times.length - 1] - t))
              return e.times.length - 1;
            (s[s.length - 1] = t),
              s.set(e.times, 0),
              n.set(e.values, 0),
              n.set(a.evaluate(t), e.values.length),
              (i = s.length - 1);
          } else
            for (let o = 0; o < e.times.length; o++) {
              if (0.001 > Math.abs(e.times[o] - t)) return o;
              if (e.times[o] < t && e.times[o + 1] > t) {
                s.set(e.times.slice(0, o + 1), 0),
                  (s[o + 1] = t),
                  s.set(e.times.slice(o + 1), o + 2),
                  n.set(e.values.slice(0, (o + 1) * r), 0),
                  n.set(a.evaluate(t), (o + 1) * r),
                  n.set(e.values.slice((o + 1) * r), (o + 2) * r),
                  (i = o + 1);
                break;
              }
            }
          return (e.times = s), (e.values = n), i;
        },
        mergeMorphTargetTracks: function (e, t) {
          let i = [],
            r = {},
            s = e.tracks;
          for (let e = 0; e < s.length; ++e) {
            let n,
              a = s[e],
              o = en.Nwf.parseTrackName(a.name),
              A = en.Nwf.findNode(t, o.nodeName);
            if (
              "morphTargetInfluences" !== o.propertyName ||
              void 0 === o.propertyIndex
            ) {
              i.push(a);
              continue;
            }
            if (
              a.createInterpolant !== a.InterpolantFactoryMethodDiscrete &&
              a.createInterpolant !== a.InterpolantFactoryMethodLinear
            ) {
              if (a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)
                throw Error(
                  "THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation."
                );
              console.warn(
                "THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."
              ),
                (a = a.clone()).setInterpolation(en.PJ3);
            }
            let l = A.morphTargetInfluences.length,
              h = A.morphTargetDictionary[o.propertyIndex];
            if (void 0 === h)
              throw Error(
                "THREE.GLTFExporter: Morph target name not found: " +
                  o.propertyIndex
              );
            if (void 0 === r[A.uuid]) {
              let e = new (n = a.clone()).ValueBufferType(l * n.times.length);
              for (let t = 0; t < n.times.length; t++)
                e[t * l + h] = n.values[t];
              (n.name = (o.nodeName || "") + ".morphTargetInfluences"),
                (n.values = e),
                (r[A.uuid] = n),
                i.push(n);
              continue;
            }
            let c = a.createInterpolant(new a.ValueBufferType(1));
            n = r[A.uuid];
            for (let e = 0; e < n.times.length; e++)
              n.values[e * l + h] = c.evaluate(n.times[e]);
            for (let e = 0; e < a.times.length; e++) {
              let t = this.insertKeyframe(n, a.times[e]);
              n.values[t * l + h] = a.values[e];
            }
          }
          return (e.tracks = i), e;
        },
        toFloat32BufferAttribute: function (e) {
          let t = new en.THS(
            new Float32Array(e.count * e.itemSize),
            e.itemSize,
            !1
          );
          if (!e.normalized && !e.isInterleavedBufferAttribute)
            return t.array.set(e.array), t;
          for (let i = 0, r = e.count; i < r; i++)
            for (let r = 0; r < e.itemSize; r++)
              t.setComponent(i, r, e.getComponent(i, r));
          return t;
        },
      };
      let rb = (e) =>
          void 0 !== e.material &&
          e.userData &&
          e.userData.variantMaterials &&
          !!Array.from(e.userData.variantMaterials.values()).filter((e) =>
            rx(e.material)
          ),
        rx = (e) => e && e.isMaterial && !Array.isArray(e);
      class rS {
        constructor(e) {
          (this.writer = e),
            (this.name = "KHR_materials_variants"),
            (this.variantNames = []);
        }
        beforeParse(e) {
          let t = new Set();
          for (let i of e)
            i.traverse((e) => {
              if (!rb(e)) return;
              let i = e.userData.variantMaterials;
              for (let [r, s] of e.userData.variantData) {
                let e = i.get(s.index);
                e && rx(e.material) && t.add(r);
              }
            });
          t.forEach((e) => this.variantNames.push(e));
        }
        writeMesh(e, t) {
          if (!rb(e)) return;
          let i = e.userData,
            r = i.variantMaterials,
            s = i.variantData,
            n = new Map(),
            a = new Map();
          for (let [e, t] of Array.from(s.values())
            .sort((e, t) => e.index - t.index)
            .entries())
            a.set(t.index, e);
          for (let e of s.values()) {
            let t = r.get(e.index);
            if (!t || !rx(t.material)) continue;
            let i = this.writer.processMaterial(t.material);
            n.has(i) || n.set(i, { material: i, variants: [] }),
              n.get(i).variants.push(a.get(e.index));
          }
          let o = Array.from(n.values())
            .map((e) => e.variants.sort((e, t) => e - t) && e)
            .sort((e, t) => e.material - t.material);
          if (0 === o.length) return;
          let A = rx(i.originalMaterial)
            ? this.writer.processMaterial(i.originalMaterial)
            : -1;
          for (let e of t.primitives)
            A >= 0 && (e.material = A),
              (e.extensions = e.extensions || {}),
              (e.extensions[this.name] = { mappings: o });
        }
        afterParse() {
          if (0 === this.variantNames.length) return;
          let e = this.writer.json;
          e.extensions = e.extensions || {};
          let t = this.variantNames.map((e) => ({ name: e }));
          (e.extensions[this.name] = { variants: t }),
            (this.writer.extensionsUsed[this.name] = !0);
        }
      }
      var rT = i(7274);
      class rM {
        constructor(e, t, i, r, s) {
          (this.xrLight = e),
            (this.renderer = t),
            (this.lightProbe = i),
            (this.xrWebGLBinding = null),
            (this.estimationStartCallback = s),
            (this.frameCallback = this.onXRFrame.bind(this));
          let n = t.xr.getSession();
          if (r && "XRWebGLBinding" in window) {
            let i = new en.o6l(16);
            e.environment = i.texture;
            let r = t.getContext();
            switch (n.preferredReflectionFormat) {
              case "srgba8":
                r.getExtension("EXT_sRGB");
                break;
              case "rgba16f":
                r.getExtension("OES_texture_half_float");
            }
            (this.xrWebGLBinding = new XRWebGLBinding(n, r)),
              this.lightProbe.addEventListener("reflectionchange", () => {
                this.updateReflection();
              });
          }
          n.requestAnimationFrame(this.frameCallback);
        }
        updateReflection() {
          let e = this.renderer.properties.get(this.xrLight.environment);
          if (e) {
            let t = this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);
            t &&
              ((e.__webglTexture = t),
              (this.xrLight.environment.needsPMREMUpdate = !0));
          }
        }
        onXRFrame(e, t) {
          if (!this.xrLight) return;
          t.session.requestAnimationFrame(this.frameCallback);
          let i = t.getLightEstimate(this.lightProbe);
          if (i) {
            this.xrLight.lightProbe.sh.fromArray(
              i.sphericalHarmonicsCoefficients
            ),
              (this.xrLight.lightProbe.intensity = 1);
            let e = Math.max(
              1,
              Math.max(
                i.primaryLightIntensity.x,
                Math.max(i.primaryLightIntensity.y, i.primaryLightIntensity.z)
              )
            );
            this.xrLight.directionalLight.color.setRGB(
              i.primaryLightIntensity.x / e,
              i.primaryLightIntensity.y / e,
              i.primaryLightIntensity.z / e
            ),
              (this.xrLight.directionalLight.intensity = e),
              this.xrLight.directionalLight.position.copy(
                i.primaryLightDirection
              ),
              this.estimationStartCallback &&
                (this.estimationStartCallback(),
                (this.estimationStartCallback = null));
          }
        }
        dispose() {
          (this.xrLight = null),
            (this.renderer = null),
            (this.lightProbe = null),
            (this.xrWebGLBinding = null);
        }
      }
      class rR extends en.YJl {
        constructor(e, t = !0) {
          super(),
            (this.lightProbe = new en.FZo()),
            (this.lightProbe.intensity = 0),
            this.add(this.lightProbe),
            (this.directionalLight = new en.ZyN()),
            (this.directionalLight.intensity = 0),
            this.add(this.directionalLight),
            (this.environment = null);
          let i = null,
            r = !1;
          e.xr.addEventListener("sessionstart", () => {
            let s = e.xr.getSession();
            "requestLightProbe" in s &&
              s
                .requestLightProbe({
                  reflectionFormat: s.preferredReflectionFormat,
                })
                .then((s) => {
                  i = new rM(this, e, s, t, () => {
                    (r = !0), this.dispatchEvent({ type: "estimationstart" });
                  });
                });
          }),
            e.xr.addEventListener("sessionend", () => {
              i && (i.dispose(), (i = null)),
                r && this.dispatchEvent({ type: "estimationend" });
            }),
            (this.dispose = () => {
              i && (i.dispose(), (i = null)),
                this.remove(this.lightProbe),
                (this.lightProbe = null),
                this.remove(this.directionalLight),
                (this.directionalLight = null),
                (this.environment = null);
            });
        }
      }
      class rD {
        constructor(e = 50) {
          (this.velocity = 0),
            (this.naturalFrequency = 0),
            this.setDecayTime(e);
        }
        setDecayTime(e) {
          this.naturalFrequency = 1 / Math.max(0.001, e);
        }
        update(e, t, i, r) {
          let s = 2e-4 * this.naturalFrequency;
          if (null == e || 0 === r || (e === t && 0 === this.velocity))
            return t;
          if (i < 0) return e;
          let n = e - t,
            a = this.velocity + this.naturalFrequency * n,
            o = n + i * a,
            A = Math.exp(-this.naturalFrequency * i),
            l = (a - this.naturalFrequency * o) * A,
            h = -this.naturalFrequency * (l + a * A);
          return Math.abs(l) < s * Math.abs(r) && h * n >= 0
            ? ((this.velocity = 0), t)
            : ((this.velocity = l), t + o * A);
        }
      }
      let rL = Math.PI / 24,
        rF = new en.I9Y(),
        rk = (e, t, i) => {
          let r =
            t > 0 ? (i > 0 ? 0 : -Math.PI / 2) : i > 0 ? Math.PI / 2 : Math.PI;
          for (let s = 0; s <= 12; ++s)
            e.push(
              t + 0.17 * Math.cos(r),
              i + 0.17 * Math.sin(r),
              0,
              t + 0.2 * Math.cos(r),
              i + 0.2 * Math.sin(r),
              0
            ),
              (r += rL);
        };
      class r_ extends en.eaF {
        constructor(e, t) {
          let i = new en.LoY(),
            r = [],
            s = [],
            { size: n, boundingBox: a } = e,
            o = n.x / 2,
            A = ("back" === t ? n.y : n.z) / 2;
          rk(s, o, A), rk(s, -o, A), rk(s, -o, -A), rk(s, o, -A);
          let l = s.length / 3;
          for (let e = 0; e < l - 2; e += 2)
            r.push(e, e + 1, e + 3, e, e + 3, e + 2);
          let h = l - 2;
          r.push(h, h + 1, 1, h, 1, 0),
            i.setAttribute("position", new en.qtW(s, 3)),
            i.setIndex(r),
            super(i),
            (this.side = t);
          let c = this.material;
          switch (
            ((c.side = en.$EB),
            (c.transparent = !0),
            (c.opacity = 0),
            (this.goalOpacity = 0),
            (this.opacityDamper = new rD()),
            (this.hitPlane = new en.eaF(
              new en.bdM(2 * (o + 0.2), 2 * (A + 0.2))
            )),
            (this.hitPlane.visible = !1),
            (this.hitPlane.material.side = en.$EB),
            this.add(this.hitPlane),
            (this.hitBox = new en.eaF(
              new en.iNn(n.x + 0.4, n.y + 0.2, n.z + 0.4)
            )),
            (this.hitBox.visible = !1),
            (this.hitBox.material.side = en.$EB),
            this.add(this.hitBox),
            a.getCenter(this.position),
            t)
          ) {
            case "bottom":
              this.rotateX(-Math.PI / 2),
                (this.shadowHeight = a.min.y),
                (this.position.y = this.shadowHeight);
              break;
            case "back":
              (this.shadowHeight = a.min.z),
                (this.position.z = this.shadowHeight);
          }
          e.target.add(this),
            (this.hitBox.position.y = (n.y + 0.2) / 2 + a.min.y),
            e.target.add(this.hitBox),
            (this.offsetHeight = 0);
        }
        getHit(e, t, i) {
          rF.set(t, -i), (this.hitPlane.visible = !0);
          let r = e.positionAndNormalFromPoint(rF, this.hitPlane);
          return (this.hitPlane.visible = !1), null == r ? null : r.position;
        }
        getExpandedHit(e, t, i) {
          this.hitPlane.scale.set(1e3, 1e3, 1e3),
            this.hitPlane.updateMatrixWorld();
          let r = this.getHit(e, t, i);
          return this.hitPlane.scale.set(1, 1, 1), r;
        }
        controllerIntersection(e, t) {
          this.hitBox.visible = !0;
          let i = e.hitFromController(t, this.hitBox);
          return (this.hitBox.visible = !1), i;
        }
        set offsetHeight(e) {
          (e -= 0.001),
            "back" === this.side
              ? (this.position.z = this.shadowHeight + e)
              : (this.position.y = this.shadowHeight + e);
        }
        get offsetHeight() {
          return "back" === this.side
            ? this.position.z - this.shadowHeight
            : this.position.y - this.shadowHeight;
        }
        set show(e) {
          this.goalOpacity = e ? 0.75 : 0;
        }
        updateOpacity(e) {
          let t = this.material;
          (t.opacity = this.opacityDamper.update(
            t.opacity,
            this.goalOpacity,
            e,
            1
          )),
            (this.visible = t.opacity > 0);
        }
        dispose() {
          let { geometry: e, material: t } = this.hitPlane;
          e.dispose(),
            t.dispose(),
            this.hitBox.geometry.dispose(),
            this.hitBox.material.dispose(),
            this.geometry.dispose(),
            this.material.dispose(),
            this.hitBox.removeFromParent(),
            this.removeFromParent();
        }
      }
      let rU = (e, t) => ({ type: "number", number: e, unit: t }),
        rN = (() => {
          let e = {};
          return (t) => {
            let i = t;
            if (i in e) return e[i];
            let r = [],
              s = 0;
            for (; t; ) {
              if (++s > 1e3) {
                t = "";
                break;
              }
              let e = rP(t),
                i = e.nodes[0];
              if (null == i || 0 === i.terms.length) break;
              r.push(i), (t = e.remainingInput);
            }
            return (e[i] = r);
          };
        })(),
        rP = (() => {
          let e = /^(\-\-|[a-z\u0240-\uffff])/i,
            t = /^([\*\+\/]|[\-]\s)/i,
            i = /^[\),]/;
          return (r) => {
            let s = [];
            for (; r.length && ((r = r.trim()), !i.test(r)); )
              if ("(" === r[0]) {
                let { nodes: e, remainingInput: t } = rq(r);
                (r = t),
                  s.push({
                    type: "function",
                    name: { type: "ident", value: "calc" },
                    arguments: e,
                  });
              } else if (e.test(r)) {
                let e = rG(r),
                  t = e.nodes[0];
                if ("(" === (r = e.remainingInput)[0]) {
                  let { nodes: e, remainingInput: i } = rq(r);
                  s.push({ type: "function", name: t, arguments: e }), (r = i);
                } else s.push(t);
              } else if (t.test(r))
                s.push({ type: "operator", value: r[0] }), (r = r.slice(1));
              else {
                let { nodes: e, remainingInput: t } =
                  "#" === r[0] ? rH(r) : rO(r);
                if (0 === e.length) break;
                s.push(e[0]), (r = t);
              }
            return {
              nodes: [{ type: "expression", terms: s }],
              remainingInput: r,
            };
          };
        })(),
        rG = (() => {
          let e = /[^a-z0-9_\-\u0240-\uffff]/i;
          return (t) => {
            let i = t.match(e);
            return {
              nodes: [
                { type: "ident", value: null == i ? t : t.substr(0, i.index) },
              ],
              remainingInput: null == i ? "" : t.substr(i.index),
            };
          };
        })(),
        rO = (() => {
          let e = /[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,
            t = /^[a-z%]+/i,
            i = /^(m|mm|cm|rad|deg|[%])$/;
          return (r) => {
            let s = r.match(e),
              n = null == s ? "0" : s[0],
              a = (r = null == n ? r : r.slice(n.length)).match(t),
              o = null != a && "" !== a[0] ? a[0] : null,
              A = null == a ? r : r.slice(o.length);
            return (
              null == o || i.test(o) || (o = null),
              {
                nodes: [
                  { type: "number", number: parseFloat(n) || 0, unit: o },
                ],
                remainingInput: A,
              }
            );
          };
        })(),
        rH = (() => {
          let e = /^[a-f0-9]*/i;
          return (t) => {
            let i = (t = t.slice(1).trim()).match(e);
            return {
              nodes: null == i ? [] : [{ type: "hex", value: i[0] }],
              remainingInput: null == i ? t : t.slice(i[0].length),
            };
          };
        })(),
        rq = (e) => {
          let t = [];
          for (e = e.slice(1).trim(); e.length; ) {
            let i = rP(e);
            if ((t.push(i.nodes[0]), "," === (e = i.remainingInput.trim())[0]))
              e = e.slice(1).trim();
            else if (")" === e[0]) {
              e = e.slice(1);
              break;
            }
          }
          return { nodes: t, remainingInput: e };
        },
        rV = Symbol("visitedTypes");
      class rY {
        constructor(e) {
          this[rV] = e;
        }
        walk(e, t) {
          let i = e.slice();
          for (; i.length; ) {
            let e = i.shift();
            switch ((this[rV].indexOf(e.type) > -1 && t(e), e.type)) {
              case "expression":
                i.unshift(...e.terms);
                break;
              case "function":
                i.unshift(e.name, ...e.arguments);
            }
          }
        }
      }
      let rJ = Object.freeze({ type: "number", number: 0, unit: null }),
        rK = (e, t = 0) => {
          let { number: i, unit: r } = e;
          if (isFinite(i)) {
            if ("rad" === e.unit || null == e.unit) return e;
          } else (i = t), (r = "rad");
          return {
            type: "number",
            number: (("deg" === r && null != i ? i : 0) * Math.PI) / 180,
            unit: "rad",
          };
        },
        rz = (e, t = 0) => {
          let i,
            { number: r, unit: s } = e;
          if (isFinite(r)) {
            if ("m" === e.unit) return e;
          } else (r = t), (s = "m");
          switch (s) {
            default:
              i = 1;
              break;
            case "cm":
              i = 0.01;
              break;
            case "mm":
              i = 0.001;
          }
          return { type: "number", number: i * r, unit: "m" };
        },
        r$ = (() => {
          let e = (e) => e,
            t = { rad: e, deg: rK, m: e, mm: rz, cm: rz };
          return (e, i = rJ) => {
            isFinite(e.number) || ((e.number = i.number), (e.unit = i.unit));
            let { unit: r } = e;
            if (null == r) return e;
            let s = t[r];
            return null == s ? i : s(e);
          };
        })(),
        rj = Symbol("evaluate"),
        rW = Symbol("lastValue");
      class rX {
        constructor() {
          this[Q] = null;
        }
        static evaluatableFor(e, t = rJ) {
          if (e instanceof rX) return e;
          if ("number" === e.type) return "%" === e.unit ? new r1(e, t) : e;
          switch (e.name.value) {
            case "calc":
              return new r5(e, t);
            case "env":
              return new r3(e);
          }
          return rJ;
        }
        static evaluate(e) {
          return e instanceof rX ? e.evaluate() : e;
        }
        static isConstant(e) {
          return !(e instanceof rX) || e.isConstant;
        }
        static applyIntrinsics(e, t) {
          let { basis: i, keywords: r } = t,
            { auto: s } = r;
          return i.map((t, i) => {
            let n = null == s[i] ? t : s[i],
              a = e[i] ? e[i] : n;
            if ("ident" === a.type) {
              let e = a.value;
              e in r && (a = r[e][i]);
            }
            return ((null == a || "ident" === a.type) && (a = n),
            "%" === a.unit)
              ? rU((a.number / 100) * t.number, t.unit)
              : (a = r$(a, t)).unit !== t.unit
              ? t
              : a;
          });
        }
        get isConstant() {
          return !1;
        }
        evaluate() {
          return (
            (this.isConstant && null != this[rW]) || (this[rW] = this[rj]()),
            this[rW]
          );
        }
      }
      Q = rW;
      let rZ = Symbol("percentage"),
        r0 = Symbol("basis");
      class r1 extends rX {
        constructor(e, t) {
          super(), (this[rZ] = e), (this[r0] = t);
        }
        get isConstant() {
          return !0;
        }
        [rj]() {
          return rU((this[rZ].number / 100) * this[r0].number, this[r0].unit);
        }
      }
      let r2 = Symbol("identNode");
      class r3 extends rX {
        constructor(e) {
          super(), (this[b] = null);
          let t = e.arguments.length ? e.arguments[0].terms[0] : null;
          null != t && "ident" === t.type && (this[r2] = t);
        }
        get isConstant() {
          return !1;
        }
        [((b = r2), rj)]() {
          return null != this[r2] && "window-scroll-y" === this[r2].value
            ? {
                type: "number",
                number:
                  window.pageYOffset /
                    (Math.max(
                      document.body.scrollHeight,
                      document.body.offsetHeight,
                      document.documentElement.clientHeight,
                      document.documentElement.scrollHeight,
                      document.documentElement.offsetHeight
                    ) -
                      window.innerHeight) || 0,
                unit: null,
              }
            : rJ;
        }
      }
      let r8 = /[\*\/]/,
        r4 = Symbol("evaluator");
      class r5 extends rX {
        constructor(e, t = rJ) {
          if ((super(), (this[x] = null), 1 !== e.arguments.length)) return;
          let i = e.arguments[0].terms.slice(),
            r = [];
          for (; i.length; ) {
            let e = i.shift();
            if (r.length > 0) {
              let i = r[r.length - 1];
              if ("operator" === i.type && r8.test(i.value)) {
                let i = r.pop(),
                  s = r.pop();
                if (null == s) return;
                r.push(
                  new se(i, rX.evaluatableFor(s, t), rX.evaluatableFor(e, t))
                );
                continue;
              }
            }
            r.push("operator" === e.type ? e : rX.evaluatableFor(e, t));
          }
          for (; r.length > 2; ) {
            let [e, i, s] = r.splice(0, 3);
            if ("operator" !== i.type) return;
            r.unshift(
              new se(i, rX.evaluatableFor(e, t), rX.evaluatableFor(s, t))
            );
          }
          1 === r.length && (this[r4] = r[0]);
        }
        get isConstant() {
          return null == this[r4] || rX.isConstant(this[r4]);
        }
        [((x = r4), rj)]() {
          return null != this[r4] ? rX.evaluate(this[r4]) : rJ;
        }
      }
      let r6 = Symbol("operator"),
        r9 = Symbol("left"),
        r7 = Symbol("right");
      class se extends rX {
        constructor(e, t, i) {
          super(), (this[r6] = e), (this[r9] = t), (this[r7] = i);
        }
        get isConstant() {
          return rX.isConstant(this[r9]) && rX.isConstant(this[r7]);
        }
        [rj]() {
          let e;
          let t = r$(rX.evaluate(this[r9])),
            i = r$(rX.evaluate(this[r7])),
            { number: r, unit: s } = t,
            { number: n, unit: a } = i;
          if (null != a && null != s && a != s) return rJ;
          switch (this[r6].value) {
            case "+":
              e = r + n;
              break;
            case "-":
              e = r - n;
              break;
            case "/":
              e = r / n;
              break;
            case "*":
              e = r * n;
              break;
            default:
              return rJ;
          }
          return { type: "number", number: e, unit: s || a };
        }
      }
      let st = Symbol("evaluatables"),
        si = Symbol("intrinsics");
      class sr extends rX {
        constructor(e, t) {
          super(), (this[si] = t);
          let i = e[0],
            r = null != i ? i.terms : [];
          this[st] = t.basis.map((e, t) => {
            let i = r[t];
            return null == i
              ? { type: "ident", value: "auto" }
              : "ident" === i.type
              ? i
              : rX.evaluatableFor(i, e);
          });
        }
        get isConstant() {
          for (let e of this[st]) if (!rX.isConstant(e)) return !1;
          return !0;
        }
        [rj]() {
          let e = this[st].map((e) => rX.evaluate(e));
          return rX.applyIntrinsics(e, this[si]).map((e) => e.number);
        }
      }
      let ss = Symbol("instances"),
        sn = Symbol("activateListener"),
        sa = Symbol("deactivateListener"),
        so = Symbol("notifyInstances"),
        sA = Symbol("notify"),
        sl = Symbol("callback");
      class sh {
        constructor(e) {
          this[sl] = e;
        }
        static [so]() {
          for (let e of sh[ss]) e[sA]();
        }
        static [((S = ss), sn)]() {
          window.addEventListener("scroll", this[so], { passive: !0 });
        }
        static [sa]() {
          window.removeEventListener("scroll", this[so]);
        }
        observe() {
          0 === sh[ss].size && sh[sn](), sh[ss].add(this);
        }
        disconnect() {
          sh[ss].delete(this), 0 === sh[ss].size && sh[sa]();
        }
        [sA]() {
          this[sl]();
        }
      }
      sh[S] = new Set();
      let sc = Symbol("computeStyleCallback"),
        su = Symbol("astWalker"),
        sg = Symbol("dependencies"),
        sd = Symbol("onScroll");
      class sp {
        constructor(e) {
          (this[T] = {}),
            (this[M] = new rY(["function"])),
            (this[R] = () => {
              this[sc]({ relatedState: "window-scroll" });
            }),
            (this[sc] = e);
        }
        observeEffectsFor(e) {
          let t = {},
            i = this[sg];
          for (let r in (this[su].walk(e, (e) => {
            let { name: r } = e,
              s = e.arguments[0].terms[0];
            if (
              "env" === r.value &&
              null != s &&
              "ident" === s.type &&
              "window-scroll-y" === s.value &&
              null == t["window-scroll"]
            ) {
              let e =
                "window-scroll" in i ? i["window-scroll"] : new sh(this[sd]);
              e.observe(), delete i["window-scroll"], (t["window-scroll"] = e);
            }
          }),
          i))
            i[r].disconnect();
          this[sg] = t;
        }
        dispose() {
          for (let e in this[sg]) this[sg][e].disconnect();
        }
      }
      (T = sg), (M = su), (R = sd);
      let sm = (e) => {
          let t = e.observeEffects || !1,
            i =
              e.intrinsics instanceof Function
                ? e.intrinsics
                : () => e.intrinsics;
          return (r, s) => {
            let n = r.updated,
              a = r.connectedCallback,
              o = r.disconnectedCallback,
              A = Symbol(`${s}StyleEffector`),
              l = Symbol(`${s}StyleEvaluator`),
              h = Symbol(`${s}UpdateEvaluator`),
              c = Symbol(`${s}EvaluateAndSync`);
            Object.defineProperties(r, {
              [A]: { value: null, writable: !0 },
              [l]: { value: null, writable: !0 },
              [h]: {
                value: function () {
                  let e = rN(this[s]);
                  (this[l] = new sr(e, i(this))),
                    null == this[A] && t && (this[A] = new sp(() => this[c]())),
                    null != this[A] && this[A].observeEffectsFor(e);
                },
              },
              [c]: {
                value: function () {
                  if (null == this[l]) return;
                  let t = this[l].evaluate();
                  this[e.updateHandler](t);
                },
              },
              updated: {
                value: function (e) {
                  e.has(s) && (this[h](), this[c]()), n.call(this, e);
                },
              },
              connectedCallback: {
                value: function () {
                  a.call(this), this.requestUpdate(s, this[s]);
                },
              },
              disconnectedCallback: {
                value: function () {
                  o.call(this),
                    null != this[A] && (this[A].dispose(), (this[A] = null));
                },
              },
            });
          };
        },
        sf = (e) => (e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e),
        sI =
          (e, t, i = sf) =>
          (r) =>
            e + (t - e) * i(r),
        sE = (e, t) => {
          let i = t.map(
            (
              (e) => (t) =>
                (e += t)
            )(0)
          );
          return (t) => {
            t = tf(t, 0, 1) * i[i.length - 1];
            let r = i.findIndex((e) => e >= t),
              s = r < 1 ? 0 : i[r - 1],
              n = i[r];
            return e[r]((t - s) / (n - s));
          };
        },
        sC = (e) => {
          let t = [],
            i = [],
            r = e.initialValue;
          for (let s = 0; s < e.keyframes.length; ++s) {
            let n = e.keyframes[s],
              { value: a, frames: o } = n,
              A = sI(r, a, n.ease || sf);
            t.push(A), i.push(o), (r = a);
          }
          return sE(t, i);
        };
      var sy = function (e, t, i, r) {
        var s,
          n = arguments.length,
          a =
            n < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (s = e[o]) &&
              (a = (n < 3 ? s(a) : n > 3 ? s(t, i, a) : s(t, i)) || a);
        return n > 3 && a && Object.defineProperty(t, i, a), a;
      };
      let sB = sC({
          initialValue: 0,
          keyframes: [
            { frames: 5, value: -1 },
            { frames: 1, value: -1 },
            { frames: 8, value: 1 },
            { frames: 1, value: 1 },
            { frames: 5, value: 0 },
            { frames: 18, value: 0 },
          ],
        }),
        sw = sC({
          initialValue: 0,
          keyframes: [
            { frames: 1, value: 1 },
            { frames: 5, value: 1 },
            { frames: 1, value: 0 },
            { frames: 6, value: 0 },
          ],
        }),
        sv = "0deg 75deg 105%",
        sQ = ["front", "right", "back", "left"],
        sb = ["upper-", "", "lower-"],
        sx = { AUTO: "auto" },
        sS = { BASIC: "basic", WIGGLE: "wiggle" },
        sT = { NONE: "none" },
        sM = () => ({ basis: [rK(rU(30, "deg"))], keywords: { auto: [null] } }),
        sR = () => ({ basis: [rK(rU(12, "deg"))], keywords: { auto: [null] } }),
        sD = (() => {
          let e = rN(sv)[0].terms,
            t = r$(e[0]),
            i = r$(e[1]);
          return (e) => ({
            basis: [t, i, rU(e[o4].idealCameraDistance(), "m")],
            keywords: { auto: [null, null, rU(105, "%")] },
          });
        })(),
        sL = (e) => {
          let t = 2.2 * e[o4].boundingSphere.radius;
          return {
            basis: [rU(-1 / 0, "rad"), rU(0, "rad"), rU(t, "m")],
            keywords: { auto: [null, null, null] },
          };
        },
        sF = (e) => {
          let t = new sr([], sD(e)).evaluate()[2];
          return {
            basis: [rU(1 / 0, "rad"), rU(Math.PI, "rad"), rU(t, "m")],
            keywords: { auto: [null, null, null] },
          };
        },
        sk = (e) => {
          let t = e[o4].boundingBox.getCenter(new en.Pq0());
          return {
            basis: [rU(t.x, "m"), rU(t.y, "m"), rU(t.z, "m")],
            keywords: { auto: [null, null, null] },
          };
        },
        s_ = Math.PI / 2,
        sU = Math.PI / 3,
        sN = s_ / 2,
        sP = 2 * Math.PI,
        sG = Symbol("controls"),
        sO = Symbol("panElement"),
        sH = Symbol("promptElement"),
        sq = Symbol("promptAnimatedContainer"),
        sV = Symbol("fingerAnimatedContainers"),
        sY = Symbol("deferInteractionPrompt"),
        sJ = Symbol("updateAria"),
        sK = Symbol("a11y"),
        sz = Symbol("updateA11y"),
        s$ = Symbol("updateCameraForRadius"),
        sj = Symbol("cancelPrompts"),
        sW = Symbol("onChange"),
        sX = Symbol("onPointerChange"),
        sZ = Symbol("waitingToPromptUser"),
        s0 = Symbol("userHasInteracted"),
        s1 = Symbol("promptElementVisibleTime"),
        s2 = Symbol("lastPromptOffset"),
        s3 = Symbol("cancellationSource"),
        s8 = Symbol("lastSpherical"),
        s4 = Symbol("jumpCamera"),
        s5 = Symbol("initialized"),
        s6 = Symbol("maintainThetaPhi"),
        s9 = Symbol("syncCameraOrbit"),
        s7 = Symbol("syncFieldOfView"),
        ne = Symbol("syncCameraTarget"),
        nt = Symbol("syncMinCameraOrbit"),
        ni = Symbol("syncMaxCameraOrbit"),
        nr = Symbol("syncMinFieldOfView"),
        ns = Symbol("syncMaxFieldOfView"),
        nn = new en.I9Y(),
        na = new en.Pq0(),
        no = Object.freeze({
          minimumRadius: 0,
          maximumRadius: 1 / 0,
          minimumPolarAngle: 0,
          maximumPolarAngle: Math.PI,
          minimumAzimuthalAngle: -1 / 0,
          maximumAzimuthalAngle: 1 / 0,
          minimumFieldOfView: 10,
          maximumFieldOfView: 45,
          touchAction: "none",
        }),
        nA = Math.PI / 8,
        nl = {
          USER_INTERACTION: "user-interaction",
          NONE: "none",
          AUTOMATIC: "automatic",
        };
      class nh extends en.Qev {
        constructor(e, t, i) {
          super(),
            (this.camera = e),
            (this.element = t),
            (this.scene = i),
            (this.orbitSensitivity = 1),
            (this.zoomSensitivity = 1),
            (this.panSensitivity = 1),
            (this.inputSensitivity = 1),
            (this.changeSource = nl.NONE),
            (this._interactionEnabled = !1),
            (this._disableZoom = !1),
            (this.isUserPointing = !1),
            (this.enablePan = !0),
            (this.enableTap = !0),
            (this.panProjection = new en.dwI()),
            (this.panPerPixel = 0),
            (this.spherical = new en.YHV()),
            (this.goalSpherical = new en.YHV()),
            (this.thetaDamper = new rD()),
            (this.phiDamper = new rD()),
            (this.radiusDamper = new rD()),
            (this.logFov = Math.log(no.maximumFieldOfView)),
            (this.goalLogFov = this.logFov),
            (this.fovDamper = new rD()),
            (this.touchMode = null),
            (this.pointers = []),
            (this.startTime = 0),
            (this.startPointerPosition = { clientX: 0, clientY: 0 }),
            (this.lastSeparation = 0),
            (this.touchDecided = !1),
            (this.onContext = (e) => {
              if (this.enablePan) e.preventDefault();
              else
                for (let e of this.pointers)
                  this.onPointerUp(
                    new PointerEvent(
                      "pointercancel",
                      Object.assign(
                        Object.assign({}, this.startPointerPosition),
                        { pointerId: e.id }
                      )
                    )
                  );
            }),
            (this.touchModeZoom = (e, t) => {
              if (!this._disableZoom) {
                let e = this.twoTouchDistance(
                    this.pointers[0],
                    this.pointers[1]
                  ),
                  t =
                    (0.04 *
                      this.zoomSensitivity *
                      (this.lastSeparation - e) *
                      50) /
                    this.scene.height;
                (this.lastSeparation = e), this.userAdjustOrbit(0, 0, t);
              }
              this.panPerPixel > 0 && this.movePan(e, t);
            }),
            (this.disableScroll = (e) => {
              e.preventDefault();
            }),
            (this.touchModeRotate = (e, t) => {
              let { touchAction: i } = this._options;
              if (!this.touchDecided && "none" !== i) {
                this.touchDecided = !0;
                let r = Math.abs(e),
                  s = Math.abs(t);
                if (
                  this.changeSource === nl.USER_INTERACTION &&
                  (("pan-y" === i && s > r) || ("pan-x" === i && r > s))
                ) {
                  this.touchMode = null;
                  return;
                }
                this.element.addEventListener("touchmove", this.disableScroll, {
                  passive: !1,
                });
              }
              this.handleSinglePointerMove(e, t);
            }),
            (this.onPointerDown = (e) => {
              if (this.pointers.length > 2) return;
              let { element: t } = this;
              0 === this.pointers.length &&
                (t.addEventListener("pointermove", this.onPointerMove),
                t.addEventListener("pointerup", this.onPointerUp),
                (this.touchMode = null),
                (this.touchDecided = !1),
                (this.startPointerPosition.clientX = e.clientX),
                (this.startPointerPosition.clientY = e.clientY),
                (this.startTime = performance.now()));
              try {
                t.setPointerCapture(e.pointerId);
              } catch (e) {}
              this.pointers.push({
                clientX: e.clientX,
                clientY: e.clientY,
                id: e.pointerId,
              }),
                (this.isUserPointing = !1),
                "touch" === e.pointerType
                  ? ((this.changeSource = e.altKey
                      ? nl.AUTOMATIC
                      : nl.USER_INTERACTION),
                    this.onTouchChange(e))
                  : ((this.changeSource = nl.USER_INTERACTION),
                    this.onMouseDown(e)),
                this.changeSource === nl.USER_INTERACTION &&
                  this.dispatchEvent({ type: "user-interaction" });
            }),
            (this.onPointerMove = (e) => {
              let t = this.pointers.find((t) => t.id === e.pointerId);
              if (null == t) return;
              if ("mouse" === e.pointerType && 0 === e.buttons) {
                this.onPointerUp(e);
                return;
              }
              let i = this.pointers.length,
                r = (e.clientX - t.clientX) / i,
                s = (e.clientY - t.clientY) / i;
              (0 !== r || 0 !== s) &&
                ((t.clientX = e.clientX),
                (t.clientY = e.clientY),
                "touch" === e.pointerType
                  ? ((this.changeSource = e.altKey
                      ? nl.AUTOMATIC
                      : nl.USER_INTERACTION),
                    null !== this.touchMode && this.touchMode(r, s))
                  : ((this.changeSource = nl.USER_INTERACTION),
                    this.panPerPixel > 0
                      ? this.movePan(r, s)
                      : this.handleSinglePointerMove(r, s)));
            }),
            (this.onPointerUp = (e) => {
              let { element: t } = this,
                i = this.pointers.findIndex((t) => t.id === e.pointerId);
              -1 !== i && this.pointers.splice(i, 1),
                this.panPerPixel > 0 && !e.altKey && this.resetRadius(),
                0 === this.pointers.length
                  ? (t.removeEventListener("pointermove", this.onPointerMove),
                    t.removeEventListener("pointerup", this.onPointerUp),
                    t.removeEventListener("touchmove", this.disableScroll),
                    this.enablePan && this.enableTap && this.recenter(e))
                  : null !== this.touchMode && this.onTouchChange(e),
                (this.scene.element[sO].style.opacity = 0),
                (t.style.cursor = "grab"),
                (this.panPerPixel = 0),
                this.isUserPointing &&
                  this.dispatchEvent({ type: "pointer-change-end" });
            }),
            (this.onWheel = (e) => {
              this.changeSource = nl.USER_INTERACTION;
              let t =
                (e.deltaY *
                  (1 == e.deltaMode ? 18 : 1) *
                  0.04 *
                  this.zoomSensitivity) /
                30;
              this.userAdjustOrbit(0, 0, t),
                e.preventDefault(),
                this.dispatchEvent({ type: "user-interaction" });
            }),
            (this.onKeyDown = (e) => {
              let { changeSource: t } = this;
              (this.changeSource = nl.USER_INTERACTION),
                (
                  e.shiftKey && this.enablePan
                    ? this.panKeyCodeHandler(e)
                    : this.orbitZoomKeyCodeHandler(e)
                )
                  ? (e.preventDefault(),
                    this.dispatchEvent({ type: "user-interaction" }))
                  : (this.changeSource = t);
            }),
            (this._options = Object.assign({}, no)),
            this.setOrbit(0, Math.PI / 2, 1),
            this.setFieldOfView(100),
            this.jumpToGoal();
        }
        get interactionEnabled() {
          return this._interactionEnabled;
        }
        enableInteraction() {
          if (!1 === this._interactionEnabled) {
            let { element: e } = this;
            e.addEventListener("pointerdown", this.onPointerDown),
              e.addEventListener("pointercancel", this.onPointerUp),
              this._disableZoom || e.addEventListener("wheel", this.onWheel),
              e.addEventListener("keydown", this.onKeyDown),
              e.addEventListener("touchmove", () => {}, { passive: !1 }),
              e.addEventListener("contextmenu", this.onContext),
              (this.element.style.cursor = "grab"),
              (this._interactionEnabled = !0),
              this.updateTouchActionStyle();
          }
        }
        disableInteraction() {
          if (!0 === this._interactionEnabled) {
            let { element: e } = this;
            e.removeEventListener("pointerdown", this.onPointerDown),
              e.removeEventListener("pointermove", this.onPointerMove),
              e.removeEventListener("pointerup", this.onPointerUp),
              e.removeEventListener("pointercancel", this.onPointerUp),
              e.removeEventListener("wheel", this.onWheel),
              e.removeEventListener("keydown", this.onKeyDown),
              e.removeEventListener("contextmenu", this.onContext),
              (e.style.cursor = ""),
              (this.touchMode = null),
              (this._interactionEnabled = !1),
              this.updateTouchActionStyle();
          }
        }
        get options() {
          return this._options;
        }
        set disableZoom(e) {
          this._disableZoom != e &&
            ((this._disableZoom = e),
            !0 === e
              ? this.element.removeEventListener("wheel", this.onWheel)
              : this.element.addEventListener("wheel", this.onWheel),
            this.updateTouchActionStyle());
        }
        getCameraSpherical(e = new en.YHV()) {
          return e.copy(this.spherical);
        }
        getFieldOfView() {
          return this.camera.fov;
        }
        applyOptions(e) {
          Object.assign(this._options, e),
            this.setOrbit(),
            this.setFieldOfView(Math.exp(this.goalLogFov));
        }
        updateNearFar(e, t) {
          (this.camera.far = 0 === t ? 2 : t),
            (this.camera.near = Math.max(e, this.camera.far / 1e3)),
            this.camera.updateProjectionMatrix();
        }
        updateAspect(e) {
          (this.camera.aspect = e), this.camera.updateProjectionMatrix();
        }
        setOrbit(
          e = this.goalSpherical.theta,
          t = this.goalSpherical.phi,
          i = this.goalSpherical.radius
        ) {
          let {
              minimumAzimuthalAngle: r,
              maximumAzimuthalAngle: s,
              minimumPolarAngle: n,
              maximumPolarAngle: a,
              minimumRadius: o,
              maximumRadius: A,
            } = this._options,
            { theta: l, phi: h, radius: c } = this.goalSpherical,
            u = tf(e, r, s);
          isFinite(r) ||
            isFinite(s) ||
            (this.spherical.theta =
              this.wrapAngle(this.spherical.theta - u) + u);
          let g = tf(t, n, a),
            d = tf(i, o, A);
          return (
            !!(
              (u !== l || g !== h || d !== c) &&
              isFinite(u) &&
              isFinite(g) &&
              isFinite(d)
            ) &&
            ((this.goalSpherical.theta = u),
            (this.goalSpherical.phi = g),
            (this.goalSpherical.radius = d),
            this.goalSpherical.makeSafe(),
            !0)
          );
        }
        setRadius(e) {
          (this.goalSpherical.radius = e), this.setOrbit();
        }
        setFieldOfView(e) {
          let { minimumFieldOfView: t, maximumFieldOfView: i } = this._options;
          (e = tf(e, t, i)), (this.goalLogFov = Math.log(e));
        }
        setDamperDecayTime(e) {
          this.thetaDamper.setDecayTime(e),
            this.phiDamper.setDecayTime(e),
            this.radiusDamper.setDecayTime(e),
            this.fovDamper.setDecayTime(e);
        }
        adjustOrbit(e, t, i) {
          let { theta: r, phi: s, radius: n } = this.goalSpherical,
            {
              minimumRadius: a,
              maximumRadius: o,
              minimumFieldOfView: A,
              maximumFieldOfView: l,
            } = this._options,
            h = this.spherical.theta - r,
            c = Math.PI - 0.001,
            u = r - tf(e, -c - h, c - h),
            g =
              0 === i
                ? 0
                : ((i > 0 ? o : a) - n) /
                  (Math.log(i > 0 ? l : A) - this.goalLogFov),
            d = n + i * (isFinite(g) ? g : (o - a) * 2);
          if ((this.setOrbit(u, s - t, d), 0 !== i)) {
            let e = this.goalLogFov + i;
            this.setFieldOfView(Math.exp(e));
          }
        }
        jumpToGoal() {
          this.update(0, 1e4);
        }
        update(e, t) {
          if (this.isStationary()) return !1;
          let { maximumPolarAngle: i, maximumRadius: r } = this._options,
            s = this.spherical.theta - this.goalSpherical.theta;
          return (
            !(Math.abs(s) > Math.PI) ||
              isFinite(this._options.minimumAzimuthalAngle) ||
              isFinite(this._options.maximumAzimuthalAngle) ||
              (this.spherical.theta -= 2 * Math.sign(s) * Math.PI),
            (this.spherical.theta = this.thetaDamper.update(
              this.spherical.theta,
              this.goalSpherical.theta,
              t,
              Math.PI
            )),
            (this.spherical.phi = this.phiDamper.update(
              this.spherical.phi,
              this.goalSpherical.phi,
              t,
              i
            )),
            (this.spherical.radius = this.radiusDamper.update(
              this.spherical.radius,
              this.goalSpherical.radius,
              t,
              r
            )),
            (this.logFov = this.fovDamper.update(
              this.logFov,
              this.goalLogFov,
              t,
              1
            )),
            this.moveCamera(),
            !0
          );
        }
        updateTouchActionStyle() {
          let { style: e } = this.element;
          if (this._interactionEnabled) {
            let { touchAction: t } = this._options;
            this._disableZoom && "none" !== t
              ? (e.touchAction = "manipulation")
              : (e.touchAction = t);
          } else e.touchAction = "";
        }
        isStationary() {
          return (
            this.goalSpherical.theta === this.spherical.theta &&
            this.goalSpherical.phi === this.spherical.phi &&
            this.goalSpherical.radius === this.spherical.radius &&
            this.goalLogFov === this.logFov
          );
        }
        moveCamera() {
          this.spherical.makeSafe(),
            this.camera.position.setFromSpherical(this.spherical),
            this.camera.setRotationFromEuler(
              new en.O9p(
                this.spherical.phi - Math.PI / 2,
                this.spherical.theta,
                0,
                "YXZ"
              )
            ),
            this.camera.fov !== Math.exp(this.logFov) &&
              ((this.camera.fov = Math.exp(this.logFov)),
              this.camera.updateProjectionMatrix());
        }
        userAdjustOrbit(e, t, i) {
          this.adjustOrbit(
            e * this.orbitSensitivity * this.inputSensitivity,
            t * this.orbitSensitivity * this.inputSensitivity,
            i * this.inputSensitivity
          );
        }
        wrapAngle(e) {
          let t = (e + Math.PI) / (2 * Math.PI);
          return 2 * (t - Math.floor(t)) * Math.PI - Math.PI;
        }
        pixelLengthToSphericalAngle(e) {
          return (2 * Math.PI * e) / this.scene.height;
        }
        twoTouchDistance(e, t) {
          let { clientX: i, clientY: r } = e,
            { clientX: s, clientY: n } = t,
            a = s - i,
            o = n - r;
          return Math.sqrt(a * a + o * o);
        }
        handleSinglePointerMove(e, t) {
          let i = this.pixelLengthToSphericalAngle(e),
            r = this.pixelLengthToSphericalAngle(t);
          !1 === this.isUserPointing &&
            ((this.isUserPointing = !0),
            this.dispatchEvent({ type: "pointer-change-start" })),
            this.userAdjustOrbit(i, r, 0);
        }
        initializePan() {
          let { theta: e, phi: t } = this.spherical,
            i = e - this.scene.yaw;
          (this.panPerPixel =
            (0.018 * this.panSensitivity) / this.scene.height),
            this.panProjection.set(
              -Math.cos(i),
              -Math.cos(t) * Math.sin(i),
              0,
              0,
              Math.sin(t),
              0,
              Math.sin(i),
              -Math.cos(t) * Math.cos(i),
              0
            );
        }
        movePan(e, t) {
          let { scene: i } = this,
            r = na.set(e, t, 0).multiplyScalar(this.inputSensitivity),
            s =
              this.spherical.radius * Math.exp(this.logFov) * this.panPerPixel;
          r.multiplyScalar(s);
          let n = i.getTarget();
          n.add(r.applyMatrix3(this.panProjection)),
            i.boundingSphere.clampPoint(n, n),
            i.setTarget(n.x, n.y, n.z);
        }
        recenter(e) {
          if (
            performance.now() > this.startTime + 300 ||
            Math.abs(e.clientX - this.startPointerPosition.clientX) > 2 ||
            Math.abs(e.clientY - this.startPointerPosition.clientY) > 2
          )
            return;
          let { scene: t } = this,
            i = t.positionAndNormalFromPoint(t.getNDC(e.clientX, e.clientY));
          if (null == i) {
            let { cameraTarget: e } = t.element;
            (t.element.cameraTarget = ""),
              (t.element.cameraTarget = e),
              this.userAdjustOrbit(0, 0, 1);
          } else
            t.target.worldToLocal(i.position),
              t.setTarget(i.position.x, i.position.y, i.position.z);
        }
        resetRadius() {
          let { scene: e } = this,
            t = e.positionAndNormalFromPoint(nn.set(0, 0));
          if (null == t) return;
          e.target.worldToLocal(t.position);
          let i = e.getTarget(),
            { theta: r, phi: s } = this.spherical,
            n = r - e.yaw,
            a = na.set(
              Math.sin(s) * Math.sin(n),
              Math.cos(s),
              Math.sin(s) * Math.cos(n)
            ),
            o = a.dot(t.position.sub(i));
          i.add(a.multiplyScalar(o)),
            e.setTarget(i.x, i.y, i.z),
            this.setOrbit(void 0, void 0, this.goalSpherical.radius - o);
        }
        onTouchChange(e) {
          if (1 === this.pointers.length) this.touchMode = this.touchModeRotate;
          else {
            if (this._disableZoom) {
              (this.touchMode = null),
                this.element.removeEventListener(
                  "touchmove",
                  this.disableScroll
                );
              return;
            }
            (this.touchMode =
              this.touchDecided && null === this.touchMode
                ? null
                : this.touchModeZoom),
              (this.touchDecided = !0),
              this.element.addEventListener("touchmove", this.disableScroll, {
                passive: !1,
              }),
              (this.lastSeparation = this.twoTouchDistance(
                this.pointers[0],
                this.pointers[1]
              )),
              this.enablePan &&
                null != this.touchMode &&
                (this.initializePan(),
                e.altKey || (this.scene.element[sO].style.opacity = 1));
          }
        }
        onMouseDown(e) {
          (this.panPerPixel = 0),
            this.enablePan &&
              (2 === e.button || e.ctrlKey || e.metaKey || e.shiftKey) &&
              (this.initializePan(),
              (this.scene.element[sO].style.opacity = 1)),
            (this.element.style.cursor = "grabbing");
        }
        orbitZoomKeyCodeHandler(e) {
          let t = !0;
          switch (e.key) {
            case "PageUp":
              this.userAdjustOrbit(0, 0, 0.04 * this.zoomSensitivity);
              break;
            case "PageDown":
              this.userAdjustOrbit(0, 0, -0.04 * this.zoomSensitivity);
              break;
            case "ArrowUp":
              this.userAdjustOrbit(0, -nA, 0);
              break;
            case "ArrowDown":
              this.userAdjustOrbit(0, nA, 0);
              break;
            case "ArrowLeft":
              this.userAdjustOrbit(-nA, 0, 0);
              break;
            case "ArrowRight":
              this.userAdjustOrbit(nA, 0, 0);
              break;
            default:
              t = !1;
          }
          return t;
        }
        panKeyCodeHandler(e) {
          this.initializePan();
          let t = !0;
          switch (e.key) {
            case "ArrowUp":
              this.movePan(0, -10);
              break;
            case "ArrowDown":
              this.movePan(0, 10);
              break;
            case "ArrowLeft":
              this.movePan(-10, 0);
              break;
            case "ArrowRight":
              this.movePan(10, 0);
              break;
            default:
              t = !1;
          }
          return t;
        }
      }
      let nc = {
          NOT_PRESENTING: "not-presenting",
          SESSION_STARTED: "session-started",
          OBJECT_PLACED: "object-placed",
          FAILED: "failed",
        },
        nu = { TRACKING: "tracking", NOT_TRACKING: "not-tracking" },
        ng = new en.Pq0(),
        nd = new en.PTz(),
        np = new en.kn4(),
        nm = new en.Pq0(),
        nf = new en.ubm(45, 1, 0.1, 100),
        nI = new en.LoY().setFromPoints([
          new en.Pq0(0, 0, 0),
          new en.Pq0(0, 0, -1),
        ]),
        nE = new en.iNn();
      class nC extends en.Qev {
        constructor(e) {
          super(),
            (this.renderer = e),
            (this.currentSession = null),
            (this.placeOnWall = !1),
            (this.placementBox = null),
            (this.lastTick = null),
            (this.turntableRotation = null),
            (this.oldShadowIntensity = null),
            (this.frame = null),
            (this.initialHitSource = null),
            (this.transientHitTestSource = null),
            (this.inputSource = null),
            (this._presentedScene = null),
            (this.resolveCleanup = null),
            (this.exitWebXRButtonContainer = null),
            (this.overlay = null),
            (this.xrLight = null),
            (this.xrMode = null),
            (this.controller1 = null),
            (this.controller2 = null),
            (this.selectedController = null),
            (this.tracking = !0),
            (this.frames = 0),
            (this.initialized = !1),
            (this.oldTarget = new en.Pq0()),
            (this.placementComplete = !1),
            (this.isTranslating = !1),
            (this.isRotating = !1),
            (this.isTwoFingering = !1),
            (this.lastDragPosition = new en.Pq0()),
            (this.relativeOrientation = new en.PTz()),
            (this.scaleLine = new en.N1A(nI)),
            (this.firstRatio = 0),
            (this.lastAngle = 0),
            (this.goalPosition = new en.Pq0()),
            (this.goalYaw = 0),
            (this.goalScale = 1),
            (this.xDamper = new rD()),
            (this.yDamper = new rD()),
            (this.zDamper = new rD()),
            (this.yawDamper = new rD()),
            (this.pitchDamper = new rD()),
            (this.rollDamper = new rD()),
            (this.scaleDamper = new rD()),
            (this.onExitWebXRButtonContainerClick = () =>
              this.stopPresenting()),
            (this.onControllerSelectStart = (e) => {
              let t = this.presentedScene,
                i = e.target;
              if (null != this.placementBox.controllerIntersection(t, i))
                null != this.selectedController &&
                  ((this.selectedController.userData.line.visible = !1),
                  t.canScale &&
                    ((this.isTwoFingering = !0),
                    (this.firstRatio =
                      this.controllerSeparation() / t.pivot.scale.x),
                    (this.scaleLine.visible = !0))),
                  i.attach(t.pivot),
                  (this.selectedController = i),
                  t.setShadowIntensity(0.01);
              else {
                let e =
                  i === this.controller1 ? this.controller2 : this.controller1;
                this.relativeOrientation
                  .copy(i.quaternion)
                  .invert()
                  .multiply(t.pivot.getWorldQuaternion(nd)),
                  (e.userData.turning = !1),
                  (i.userData.turning = !0),
                  (i.userData.line.visible = !1);
              }
            }),
            (this.onControllerSelectEnd = (e) => {
              let t = e.target;
              if (
                ((t.userData.turning = !1),
                (t.userData.line.visible = !0),
                (this.isTwoFingering = !1),
                (this.scaleLine.visible = !1),
                null != this.selectedController && this.selectedController != t)
              )
                return;
              let i = this.presentedScene;
              i.attach(i.pivot),
                (this.selectedController = null),
                (this.goalYaw = Math.atan2(
                  i.pivot.matrix.elements[8],
                  i.pivot.matrix.elements[10]
                )),
                (this.goalPosition.x = i.pivot.position.x),
                (this.goalPosition.z = i.pivot.position.z);
            }),
            (this.onUpdateScene = () => {
              null != this.placementBox &&
                this.isPresenting &&
                (this.placementBox.dispose(),
                (this.placementBox = new r_(
                  this.presentedScene,
                  this.placeOnWall ? "back" : "bottom"
                )));
            }),
            (this.onSelectStart = (e) => {
              let t = this.transientHitTestSource;
              if (null == t) return;
              let i = this.frame.getHitTestResultsForTransientInput(t),
                r = this.presentedScene,
                s = this.placementBox;
              if (1 === i.length) {
                this.inputSource = e.inputSource;
                let { axes: t } = this.inputSource.gamepad,
                  i = s.getHit(this.presentedScene, t[0], t[1]);
                (s.show = !0),
                  null != i
                    ? ((this.isTranslating = !0), this.lastDragPosition.copy(i))
                    : !1 === this.placeOnWall &&
                      ((this.isRotating = !0), (this.lastAngle = 1.5 * t[0]));
              } else if (2 === i.length) {
                (s.show = !0), (this.isTwoFingering = !0);
                let { separation: e } = this.fingerPolar(i);
                this.firstRatio = e / r.pivot.scale.x;
              }
            }),
            (this.onSelectEnd = () => {
              (this.isTranslating = !1),
                (this.isRotating = !1),
                (this.isTwoFingering = !1),
                (this.inputSource = null),
                (this.goalPosition.y +=
                  this.placementBox.offsetHeight * this.presentedScene.scale.x),
                (this.placementBox.show = !1);
            }),
            (this.threeRenderer = e.threeRenderer),
            (this.threeRenderer.xr.enabled = !0);
        }
        async resolveARSession() {
          tg();
          let e = await navigator.xr.requestSession("immersive-ar", {
            requiredFeatures: ["hit-test"],
            optionalFeatures: ["dom-overlay", "light-estimation"],
            domOverlay: this.overlay ? { root: this.overlay } : void 0,
          });
          return (
            this.threeRenderer.xr.setReferenceSpaceType("local"),
            await this.threeRenderer.xr.setSession(e),
            (this.threeRenderer.xr.cameraAutoUpdate = !1),
            e
          );
        }
        get presentedScene() {
          return this._presentedScene;
        }
        async supportsPresentation() {
          try {
            return tg(), await navigator.xr.isSessionSupported("immersive-ar");
          } catch (e) {
            return (
              console.warn("Request to present in WebXR denied:"),
              console.warn(e),
              console.warn("Falling back to next ar-mode"),
              !1
            );
          }
        }
        async present(e, t = !1) {
          this.isPresenting &&
            console.warn("Cannot present while a model is already presenting");
          let i = new Promise((e, t) => {
            requestAnimationFrame(() => e());
          });
          e.setHotspotsVisibility(!1),
            e.queueRender(),
            await i,
            (this._presentedScene = e),
            (this.overlay = e.element.shadowRoot.querySelector("div.default")),
            !0 === t &&
              ((this.xrLight = new rR(this.threeRenderer)),
              this.xrLight.addEventListener("estimationstart", () => {
                if (!this.isPresenting || null == this.xrLight) return;
                let e = this.presentedScene;
                e.add(this.xrLight), (e.environment = this.xrLight.environment);
              }));
          let r = await this.resolveARSession();
          r.addEventListener(
            "end",
            () => {
              this.postSessionCleanup();
            },
            { once: !0 }
          );
          let s = e.element.shadowRoot.querySelector(
            ".slot.exit-webxr-ar-button"
          );
          s.classList.add("enabled"),
            s.addEventListener("click", this.onExitWebXRButtonContainerClick),
            (this.exitWebXRButtonContainer = s);
          let n = await r.requestReferenceSpace("viewer");
          (this.xrMode = r.interactionMode),
            (this.tracking = !0),
            (this.frames = 0),
            (this.initialized = !1),
            (this.turntableRotation = e.yaw),
            (this.goalYaw = e.yaw),
            (this.goalScale = 1),
            e.setBackground(null),
            (this.oldShadowIntensity = e.shadowIntensity),
            e.setShadowIntensity(0.01),
            this.oldTarget.copy(e.getTarget()),
            e.element.addEventListener("load", this.onUpdateScene);
          let a = (20 * Math.PI) / 180,
            o =
              !0 === this.placeOnWall
                ? void 0
                : new XRRay(new DOMPoint(0, 0, 0), {
                    x: 0,
                    y: -Math.sin(a),
                    z: -Math.cos(a),
                  });
          r.requestHitTestSource({ space: n, offsetRay: o }).then((e) => {
            this.initialHitSource = e;
          }),
            "screen-space" !== this.xrMode &&
              (this.setupControllers(),
              this.xDamper.setDecayTime(150),
              this.yDamper.setDecayTime(150),
              this.zDamper.setDecayTime(150),
              this.yawDamper.setDecayTime(150),
              this.pitchDamper.setDecayTime(150),
              this.rollDamper.setDecayTime(150)),
            (this.currentSession = r),
            (this.placementBox = new r_(
              e,
              this.placeOnWall ? "back" : "bottom"
            )),
            (this.placementComplete = !1),
            (this.lastTick = performance.now()),
            this.dispatchEvent({ type: "status", status: nc.SESSION_STARTED });
        }
        setupControllers() {
          (this.controller1 = this.threeRenderer.xr.getController(0)),
            this.controller1.addEventListener(
              "selectstart",
              this.onControllerSelectStart
            ),
            this.controller1.addEventListener(
              "selectend",
              this.onControllerSelectEnd
            ),
            (this.controller2 = this.threeRenderer.xr.getController(1)),
            this.controller2.addEventListener(
              "selectstart",
              this.onControllerSelectStart
            ),
            this.controller2.addEventListener(
              "selectend",
              this.onControllerSelectEnd
            );
          let e = this.presentedScene;
          if (
            (e.add(this.controller1),
            e.add(this.controller2),
            !this.controller1.userData.line)
          ) {
            let t = new en.N1A(nI);
            (t.name = "line"),
              (t.scale.z = 5),
              (this.controller1.userData.turning = !1),
              (this.controller1.userData.line = t),
              this.controller1.add(t),
              (this.controller2.userData.turning = !1);
            let i = t.clone();
            (this.controller2.userData.line = i),
              this.controller2.add(i),
              (this.scaleLine.name = "scale line"),
              (this.scaleLine.visible = !1),
              this.controller1.add(this.scaleLine);
            let { size: r } = e,
              s = 0.1 / Math.max(r.x, r.y, r.z),
              n = new en.eaF(nE);
            (n.name = "box"),
              n.scale.copy(r).multiplyScalar(s),
              (n.visible = !1),
              (this.controller1.userData.box = n),
              e.add(n);
            let a = n.clone();
            (this.controller2.userData.box = a), e.add(a);
          }
        }
        hover(e) {
          if ("screen-space" === this.xrMode || this.selectedController == e)
            return !1;
          let t = this.presentedScene,
            i = this.placementBox.controllerIntersection(t, e);
          return (
            (e.userData.box.visible =
              (null == i || e.userData.turning) && !this.isTwoFingering),
            (e.userData.line.scale.z = null == i ? 5 : i.distance),
            null != i
          );
        }
        controllerSeparation() {
          return this.controller1.position.distanceTo(
            this.controller2.position
          );
        }
        async stopPresenting() {
          if (!this.isPresenting) return;
          let e = new Promise((e) => {
            this.resolveCleanup = e;
          });
          try {
            await this.currentSession.end(), await e;
          } catch (e) {
            console.warn("Error while trying to end WebXR AR session"),
              console.warn(e),
              this.postSessionCleanup();
          }
        }
        get isPresenting() {
          return null != this.presentedScene;
        }
        get target() {
          return this.oldTarget;
        }
        updateTarget() {
          let e = this.presentedScene;
          if (null != e) {
            let t = e.getTarget();
            this.oldTarget.copy(t),
              this.placeOnWall
                ? (t.z = e.boundingBox.min.z)
                : (t.y = e.boundingBox.min.y),
              e.setTarget(t.x, t.y, t.z);
          }
        }
        postSessionCleanup() {
          let e = this.currentSession;
          null != e &&
            (e.removeEventListener("selectstart", this.onSelectStart),
            e.removeEventListener("selectend", this.onSelectEnd),
            (this.currentSession = null));
          let t = this.presentedScene;
          if (((this._presentedScene = null), null != t)) {
            let { element: e } = t;
            null != this.xrLight &&
              (t.remove(this.xrLight),
              this.xrLight.dispose(),
              (this.xrLight = null)),
              t.add(t.pivot),
              t.pivot.quaternion.set(0, 0, 0, 1),
              t.pivot.position.set(0, 0, 0),
              t.pivot.scale.set(1, 1, 1),
              t.setShadowOffset(0);
            let i = this.turntableRotation;
            null != i && (t.yaw = i);
            let r = this.oldShadowIntensity;
            null != r && t.setShadowIntensity(r),
              t.setEnvironmentAndSkybox(e[tB], e[tw]);
            let s = this.oldTarget;
            t.setTarget(s.x, s.y, s.z),
              (t.xrCamera = null),
              t.element.removeEventListener("load", this.onUpdateScene),
              t.orientHotspots(0);
            let { width: n, height: a } = e.getBoundingClientRect();
            t.setSize(n, a),
              requestAnimationFrame(() => {
                t.element.dispatchEvent(
                  new CustomEvent("camera-change", {
                    detail: { source: nl.NONE },
                  })
                );
              });
          }
          this.renderer.height = 0;
          let i = this.exitWebXRButtonContainer;
          null != i &&
            (i.classList.remove("enabled"),
            i.removeEventListener(
              "click",
              this.onExitWebXRButtonContainerClick
            ),
            (this.exitWebXRButtonContainer = null));
          let r = this.transientHitTestSource;
          null != r && (r.cancel(), (this.transientHitTestSource = null));
          let s = this.initialHitSource;
          null != s && (s.cancel(), (this.initialHitSource = null)),
            null != this.placementBox &&
              (this.placementBox.dispose(), (this.placementBox = null)),
            "screen-space" !== this.xrMode &&
              (null != this.controller1 &&
                ((this.controller1.userData.turning = !1),
                (this.controller1.userData.box.visible = !1),
                (this.controller1.userData.line.visible = !0),
                this.controller1.removeEventListener(
                  "selectstart",
                  this.onControllerSelectStart
                ),
                this.controller1.removeEventListener(
                  "selectend",
                  this.onControllerSelectEnd
                ),
                this.controller1.removeFromParent(),
                (this.controller1 = null)),
              null != this.controller2 &&
                ((this.controller2.userData.turning = !1),
                (this.controller2.userData.box.visible = !1),
                (this.controller2.userData.line.visible = !0),
                this.controller2.removeEventListener(
                  "selectstart",
                  this.onControllerSelectStart
                ),
                this.controller2.removeEventListener(
                  "selectend",
                  this.onControllerSelectEnd
                ),
                this.controller2.removeFromParent(),
                (this.controller2 = null)),
              (this.selectedController = null),
              (this.scaleLine.visible = !1)),
            (this.isTranslating = !1),
            (this.isRotating = !1),
            (this.isTwoFingering = !1),
            (this.lastTick = null),
            (this.turntableRotation = null),
            (this.oldShadowIntensity = null),
            (this.frame = null),
            (this.inputSource = null),
            (this.overlay = null),
            null != this.resolveCleanup && this.resolveCleanup(),
            this.dispatchEvent({ type: "status", status: nc.NOT_PRESENTING });
        }
        updateView(e) {
          let t = this.presentedScene,
            i = this.threeRenderer.xr;
          i.updateCamera(nf), (t.xrCamera = i.getCamera());
          let { elements: r } = t.getCamera().matrixWorld;
          if (
            (t.orientHotspots(Math.atan2(r[1], r[5])),
            this.initialized ||
              (this.placeInitially(), (this.initialized = !0)),
            e.requestViewportScale && e.recommendedViewportScale)
          ) {
            let t = e.recommendedViewportScale;
            e.requestViewportScale(Math.max(t, 0.25));
          }
          let s = i.getBaseLayer();
          if (null != s) {
            let t =
              s instanceof XRWebGLLayer
                ? s.getViewport(e)
                : i.getBinding().getViewSubImage(s, e).viewport;
            this.threeRenderer.setViewport(t.x, t.y, t.width, t.height);
          }
        }
        placeInitially() {
          let e = this.presentedScene,
            { pivot: t, element: i } = e,
            { position: r } = t,
            s = e.getCamera(),
            { width: n, height: a } = this.overlay.getBoundingClientRect();
          e.setSize(n, a),
            s.projectionMatrixInverse.copy(s.projectionMatrix).invert();
          let { theta: o } = i.getCameraOrbit(),
            A = s.getWorldDirection(ng);
          (e.yaw = Math.atan2(-A.x, -A.z) - o), (this.goalYaw = e.yaw);
          let l = Math.max(1, 2 * e.boundingSphere.radius);
          r.copy(s.position).add(A.multiplyScalar(l)), this.updateTarget();
          let h = e.getTarget();
          if (
            (r.add(h).sub(this.oldTarget),
            this.goalPosition.copy(r),
            e.setHotspotsVisibility(!0),
            "screen-space" === this.xrMode)
          ) {
            let { session: e } = this.frame;
            e.addEventListener("selectstart", this.onSelectStart),
              e.addEventListener("selectend", this.onSelectEnd),
              e
                .requestHitTestSourceForTransientInput({
                  profile: "generic-touchscreen",
                })
                .then((e) => {
                  this.transientHitTestSource = e;
                });
          }
        }
        getTouchLocation() {
          let { axes: e } = this.inputSource.gamepad,
            t = this.placementBox.getExpandedHit(
              this.presentedScene,
              e[0],
              e[1]
            );
          return null != t &&
            (ng.copy(t).sub(this.presentedScene.getCamera().position),
            ng.length() > 10)
            ? null
            : t;
        }
        getHitPoint(e) {
          let t = this.threeRenderer.xr.getReferenceSpace(),
            i = e.getPose(t);
          if (null == i) return null;
          let r = np.fromArray(i.transform.matrix);
          return (
            !0 === this.placeOnWall &&
              (this.goalYaw = Math.atan2(r.elements[4], r.elements[6])),
            r.elements[5] > 0.75 !== this.placeOnWall
              ? nm.setFromMatrixPosition(r)
              : null
          );
        }
        moveToFloor(e) {
          let t = this.initialHitSource;
          if (null == t) return;
          let i = e.getHitTestResults(t);
          if (0 == i.length) return;
          let r = i[0],
            s = this.getHitPoint(r);
          null != s &&
            ((this.placementBox.show = !0),
            this.isTranslating ||
              (this.placeOnWall
                ? this.goalPosition.copy(s)
                : (this.goalPosition.y = s.y)),
            t.cancel(),
            (this.initialHitSource = null),
            this.dispatchEvent({ type: "status", status: nc.OBJECT_PLACED }));
        }
        fingerPolar(e) {
          let t = e[0].inputSource.gamepad.axes,
            i = e[1].inputSource.gamepad.axes,
            r = i[0] - t[0],
            s = i[1] - t[1],
            n = Math.atan2(s, r),
            a = this.lastAngle - n;
          return (
            a > Math.PI
              ? (a -= 2 * Math.PI)
              : a < -Math.PI && (a += 2 * Math.PI),
            (this.lastAngle = n),
            { separation: Math.sqrt(r * r + s * s), deltaYaw: a }
          );
        }
        setScale(e) {
          let t = e / this.firstRatio;
          this.goalScale = 0.2 > Math.abs(t - 1) ? 1 : t;
        }
        processInput(e) {
          let t = this.transientHitTestSource;
          if (
            null == t ||
            (!this.isTranslating && !this.isTwoFingering && !this.isRotating)
          )
            return;
          let i = e.getHitTestResultsForTransientInput(t),
            r = this.presentedScene,
            s = r.pivot.scale.x;
          if (this.isTwoFingering) {
            if (i.length < 2) this.isTwoFingering = !1;
            else {
              let { separation: e, deltaYaw: t } = this.fingerPolar(i);
              !1 === this.placeOnWall && (this.goalYaw += t),
                r.canScale && this.setScale(e);
            }
            return;
          }
          if (2 === i.length) {
            (this.isTranslating = !1),
              (this.isRotating = !1),
              (this.isTwoFingering = !0);
            let { separation: e } = this.fingerPolar(i);
            this.firstRatio = e / s;
            return;
          }
          if (this.isRotating) {
            let e = 1.5 * this.inputSource.gamepad.axes[0];
            (this.goalYaw += e - this.lastAngle), (this.lastAngle = e);
          } else
            this.isTranslating &&
              i.forEach((e) => {
                if (e.inputSource !== this.inputSource) return;
                let t = null;
                if (
                  (e.results.length > 0 && (t = this.getHitPoint(e.results[0])),
                  null == t && (t = this.getTouchLocation()),
                  null != t)
                ) {
                  if (
                    (this.goalPosition.sub(this.lastDragPosition),
                    !1 === this.placeOnWall)
                  ) {
                    let e = t.y - this.lastDragPosition.y;
                    if (e < 0) {
                      (this.placementBox.offsetHeight = e / s),
                        this.presentedScene.setShadowOffset(e);
                      let i = ng.copy(r.getCamera().position),
                        n = -e / (i.y - t.y);
                      i.multiplyScalar(n), t.multiplyScalar(1 - n).add(i);
                    }
                  }
                  this.goalPosition.add(t), this.lastDragPosition.copy(t);
                }
              });
        }
        moveScene(e) {
          let t = this.presentedScene,
            { pivot: i } = t,
            r = this.placementBox;
          if (
            (r.updateOpacity(e),
            this.controller1 &&
              (this.controller1.userData.turning &&
                (i.quaternion
                  .copy(this.controller1.quaternion)
                  .multiply(this.relativeOrientation),
                this.selectedController &&
                  this.selectedController === this.controller2 &&
                  i.quaternion.premultiply(
                    nd.copy(this.controller2.quaternion).invert()
                  )),
              this.controller1.userData.box.position.copy(
                this.controller1.position
              ),
              i.getWorldQuaternion(this.controller1.userData.box.quaternion)),
            this.controller2 &&
              (this.controller2.userData.turning &&
                (i.quaternion
                  .copy(this.controller2.quaternion)
                  .multiply(this.relativeOrientation),
                this.selectedController &&
                  this.selectedController === this.controller1 &&
                  i.quaternion.premultiply(
                    nd.copy(this.controller1.quaternion).invert()
                  )),
              this.controller2.userData.box.position.copy(
                this.controller2.position
              ),
              i.getWorldQuaternion(this.controller2.userData.box.quaternion)),
            this.controller1 && this.controller2 && this.isTwoFingering)
          ) {
            let e = this.controllerSeparation();
            this.setScale(e),
              (this.scaleLine.scale.z = -e),
              this.scaleLine.lookAt(this.controller2.position);
          }
          let s = t.pivot.scale.x;
          if (this.goalScale !== s) {
            let i = this.scaleDamper.update(s, this.goalScale, e, 1);
            t.pivot.scale.set(i, i, i);
          }
          if (i.parent !== t) return;
          let { position: n } = i,
            a = t.boundingSphere.radius,
            o = this.goalPosition,
            A = nl.NONE;
          if (!o.equals(n)) {
            A = nl.USER_INTERACTION;
            let { x: i, y: s, z: l } = n;
            if (
              ((i = this.xDamper.update(i, o.x, e, a)),
              (s = this.yDamper.update(s, o.y, e, a)),
              (l = this.zDamper.update(l, o.z, e, a)),
              n.set(i, s, l),
              "screen-space" === this.xrMode && !this.isTranslating)
            ) {
              let e = o.y - s;
              this.placementComplete && !1 === this.placeOnWall
                ? ((r.offsetHeight = e / t.pivot.scale.x), t.setShadowOffset(e))
                : 0 === e &&
                  ((this.placementComplete = !0),
                  (r.show = !1),
                  t.setShadowIntensity(0.8));
            }
            "screen-space" !== this.xrMode &&
              o.equals(n) &&
              t.setShadowIntensity(0.8);
          }
          t.updateTarget(e), nd.setFromAxisAngle(ng.set(0, 1, 0), this.goalYaw);
          let l = t.pivot.quaternion.angleTo(nd),
            h = l - this.yawDamper.update(l, 0, e, Math.PI);
          t.pivot.quaternion.rotateTowards(nd, h),
            t.element.dispatchEvent(
              new CustomEvent("camera-change", { detail: { source: A } })
            );
        }
        onWebXRFrame(e, t) {
          if ("screen-space" !== this.xrMode) {
            let e = this.hover(this.controller1),
              t = this.hover(this.controller2);
            this.placementBox.show = (e || t) && !this.isTwoFingering;
          }
          (this.frame = t), ++this.frames;
          let i = this.threeRenderer.xr.getReferenceSpace(),
            r = t.getViewerPose(i);
          null == r &&
            !0 === this.tracking &&
            this.frames > 30 &&
            ((this.tracking = !1),
            this.dispatchEvent({ type: "tracking", status: nu.NOT_TRACKING }));
          let s = this.presentedScene;
          if (null == r || null == s || !s.element.loaded) {
            this.threeRenderer.clear();
            return;
          }
          !1 === this.tracking &&
            ((this.tracking = !0),
            this.dispatchEvent({ type: "tracking", status: nu.TRACKING }));
          let n = !0;
          for (let i of r.views) {
            if ((this.updateView(i), n)) {
              this.moveToFloor(t), this.processInput(t);
              let i = e - this.lastTick;
              this.moveScene(i),
                this.renderer.preRender(s, e, i),
                (this.lastTick = e),
                s.renderShadow(this.threeRenderer);
            }
            this.threeRenderer.render(s, s.getCamera()), (n = !1);
          }
        }
      }
      let ny = Symbol("prepared"),
        nB = Symbol("prepare"),
        nw = Symbol("preparedGLTF"),
        nv = Symbol("clone");
      class nQ {
        constructor(e) {
          this[nw] = e;
        }
        static prepare(e) {
          if (null == e.scene) throw Error("Model does not have a scene");
          if (e[ny]) return e;
          let t = this[nB](e);
          return (t[ny] = !0), t;
        }
        static [nB](e) {
          let { scene: t } = e,
            i = [t];
          return Object.assign(Object.assign({}, e), { scene: t, scenes: i });
        }
        get parser() {
          return this[nw].parser;
        }
        get animations() {
          return this[nw].animations;
        }
        get scene() {
          return this[nw].scene;
        }
        get scenes() {
          return this[nw].scenes;
        }
        get cameras() {
          return this[nw].cameras;
        }
        get asset() {
          return this[nw].asset;
        }
        get userData() {
          return this[nw].userData;
        }
        clone() {
          return new this.constructor(this[nv]());
        }
        dispose() {
          this.scenes.forEach((e) => {
            e.traverse((e) => {
              e.material &&
                ((Array.isArray(e.material)
                  ? e.material
                  : [e.material]
                ).forEach((e) => {
                  for (let t in e) {
                    let i = e[t];
                    if (i instanceof en.gPd) {
                      let e = i.source.data;
                      null != e.close && e.close(), i.dispose();
                    }
                  }
                  e.dispose();
                }),
                e.geometry.dispose());
            });
          });
        }
        [nv]() {
          let e = this[nw],
            t = (function (e) {
              let t = new Map(),
                i = new Map(),
                r = e.clone();
              return (
                (function e(t, i, r) {
                  r(t, i);
                  for (let s = 0; s < t.children.length; s++)
                    e(t.children[s], i.children[s], r);
                })(e, r, function (e, r) {
                  t.set(r, e), i.set(e, r);
                }),
                r.traverse(function (e) {
                  if (!e.isSkinnedMesh) return;
                  let r = t.get(e),
                    s = r.skeleton.bones;
                  (e.skeleton = r.skeleton.clone()),
                    e.bindMatrix.copy(r.bindMatrix),
                    (e.skeleton.bones = s.map(function (e) {
                      return i.get(e);
                    })),
                    e.bind(e.skeleton, e.bindMatrix);
                }),
                r
              );
            })(this.scene);
          nb(t, this.scene);
          let i = [t],
            r = e.userData ? Object.assign({}, e.userData) : {};
          return Object.assign(Object.assign({}, e), {
            scene: t,
            scenes: i,
            userData: r,
          });
        }
      }
      let nb = (e, t) => {
          nx(e, t, (e, t) => {
            void 0 !== t.userData.variantMaterials &&
              (e.userData.variantMaterials = new Map(
                t.userData.variantMaterials
              )),
              void 0 !== t.userData.variantData &&
                (e.userData.variantData = t.userData.variantData),
              void 0 !== t.userData.originalMaterial &&
                (e.userData.originalMaterial = t.userData.originalMaterial);
          });
        },
        nx = (e, t, i) => {
          i(e, t);
          for (let r = 0; r < e.children.length; r++)
            nx(e.children[r], t.children[r], i);
        },
        nS = Symbol("threeGLTF"),
        nT = Symbol("gltf"),
        nM = Symbol("gltfElementMap"),
        nR = Symbol("threeObjectMap"),
        nD = Symbol("parallelTraverseThreeScene"),
        nL = Symbol("correlateOriginalThreeGLTF"),
        nF = Symbol("correlateCloneThreeGLTF");
      class nk {
        constructor(e, t, i, r) {
          (this[nS] = e), (this[nT] = t), (this[nM] = r), (this[nR] = i);
        }
        static from(e, t) {
          return null != t ? this[nF](e, t) : this[nL](e);
        }
        static [nL](e) {
          let t = e.parser.json,
            i = e.parser.associations,
            r = new Map(),
            s = { name: "Default" },
            n = { index: -1 };
          for (let e of i.keys())
            e instanceof en.imn &&
              null == i.get(e) &&
              (n.index < 0 &&
                (null == t.materials && (t.materials = []),
                (n.index = t.materials.length),
                t.materials.push(s)),
              (e.name = s.name),
              i.set(e, { materials: n.index }));
          for (let [e, s] of i)
            for (let i in (s &&
              ((e.userData = e.userData || {}), (e.userData.associations = s)),
            s))
              if (null != i && "primitives" !== i) {
                let n = (t[i] || [])[s[i]];
                if (null == n) continue;
                let a = r.get(n);
                null == a && ((a = new Set()), r.set(n, a)), a.add(e);
              }
          return new nk(e, t, i, r);
        }
        static [nF](e, t) {
          let i = t.threeGLTF,
            r = JSON.parse(JSON.stringify(t.gltf)),
            s = new Map(),
            n = new Map();
          for (let a = 0; a < i.scenes.length; a++)
            this[nD](i.scenes[a], e.scenes[a], (e, i) => {
              let a = t.threeObjectMap.get(e);
              if (null != a) {
                for (let e in a)
                  if (null != e && "primitives" !== e) {
                    let t = a[e],
                      o = r[e][t],
                      A = s.get(i) || {};
                    (A[e] = t), s.set(i, A);
                    let l = n.get(o) || new Set();
                    l.add(i), n.set(o, l);
                  }
              }
            });
          return new nk(e, r, s, n);
        }
        static [nD](e, t, i) {
          let r = (e, t) => {
            if ((i(e, t), e.isObject3D)) {
              if (e.material) {
                if (Array.isArray(e.material))
                  for (let r = 0; r < e.material.length; ++r)
                    i(e.material[r], t.material[r]);
                else i(e.material, t.material);
              }
              for (let i = 0; i < e.children.length; ++i)
                r(e.children[i], t.children[i]);
            }
          };
          r(e, t);
        }
        get threeGLTF() {
          return this[nS];
        }
        get gltf() {
          return this[nT];
        }
        get gltfElementMap() {
          return this[nM];
        }
        get threeObjectMap() {
          return this[nR];
        }
      }
      let n_ = Symbol("correlatedSceneGraph");
      class nU extends nQ {
        static [nB](e) {
          let t = super[nB](e);
          null == t[n_] && (t[n_] = nk.from(t));
          let { scene: i } = t,
            r = new en.iyt(void 0, 1 / 0);
          return (
            i.traverse((e) => {
              if (
                ((e.renderOrder = 1e3),
                (e.frustumCulled = !1),
                e.name || (e.name = e.uuid),
                e.material)
              ) {
                let { geometry: i } = e;
                (e.castShadow = !0),
                  e.isSkinnedMesh &&
                    ((i.boundingSphere = r), (i.boundingBox = null));
                let s = e.material;
                if (
                  (!0 === s.isMeshBasicMaterial && (s.toneMapped = !1),
                  (s.shadowSide = en.hB5),
                  s.aoMap)
                ) {
                  let { gltf: e, threeObjectMap: r } = t[n_],
                    n = r.get(s);
                  if (null != e.materials && null != n && null != n.materials) {
                    let t = e.materials[n.materials];
                    t.occlusionTexture &&
                      0 === t.occlusionTexture.texCoord &&
                      null != i.attributes.uv &&
                      i.setAttribute("uv2", i.attributes.uv);
                  }
                }
              }
            }),
            t
          );
        }
        get correlatedSceneGraph() {
          return this[nw][n_];
        }
        [nv]() {
          let e = super[nv](),
            t = new Map();
          return (
            e.scene.traverse((e) => {
              if (e.material) {
                let i = e.material;
                if (null != i) {
                  if (t.has(i.uuid)) {
                    e.material = t.get(i.uuid);
                    return;
                  }
                  (e.material = i.clone()), t.set(i.uuid, e.material);
                }
              }
              void 0 !== e.target && e.add(e.target);
            }),
            (e[n_] = nk.from(e, this.correlatedSceneGraph)),
            e
          );
        }
      }
      let nN = (e, t, i) => {
          let r;
          switch (e) {
            case en.OUM:
              r = new Uint8ClampedArray(t * i * 4);
              break;
            case en.ix0:
              r = new Uint16Array(t * i * 4);
              break;
            case en.bkx:
              r = new Uint32Array(t * i * 4);
              break;
            case en.tJf:
              r = new Int8Array(t * i * 4);
              break;
            case en.fBL:
              r = new Int16Array(t * i * 4);
              break;
            case en.Yuy:
              r = new Int32Array(t * i * 4);
              break;
            case en.RQf:
              r = new Float32Array(t * i * 4);
              break;
            default:
              throw Error("Unsupported data type");
          }
          return r;
        },
        nP = (e, t, i, r) => {
          if (void 0 !== c) return c;
          let s = new en.nWS(1, 1, r);
          t.setRenderTarget(s);
          let n = new en.eaF(new en.bdM(), new en.V9B({ color: 0xffffff }));
          t.render(n, i), t.setRenderTarget(null);
          let a = nN(e, s.width, s.height);
          return (
            t.readRenderTargetPixels(s, 0, 0, s.width, s.height, a),
            s.dispose(),
            n.geometry.dispose(),
            n.material.dispose(),
            (c = 0 !== a[0])
          );
        };
      class nG {
        constructor(e) {
          var t, i, r, s, n, a, o, A, l, h, c, u, g, d, p, m;
          (this._rendererIsDisposable = !1),
            (this._supportsReadPixels = !0),
            (this.render = () => {
              this._renderer.setRenderTarget(this._renderTarget);
              try {
                this._renderer.render(this._scene, this._camera);
              } catch (e) {
                throw (this._renderer.setRenderTarget(null), e);
              }
              this._renderer.setRenderTarget(null);
            }),
            (this._width = e.width),
            (this._height = e.height),
            (this._type = e.type),
            (this._colorSpace = e.colorSpace);
          let f = {
            format: en.GWd,
            depthBuffer: !1,
            stencilBuffer: !1,
            type: this._type,
            colorSpace: this._colorSpace,
            anisotropy:
              (null === (t = e.renderTargetOptions) || void 0 === t
                ? void 0
                : t.anisotropy) !== void 0
                ? null === (i = e.renderTargetOptions) || void 0 === i
                  ? void 0
                  : i.anisotropy
                : 1,
            generateMipmaps:
              (null === (r = e.renderTargetOptions) || void 0 === r
                ? void 0
                : r.generateMipmaps) !== void 0 &&
              (null === (s = e.renderTargetOptions) || void 0 === s
                ? void 0
                : s.generateMipmaps),
            magFilter:
              (null === (n = e.renderTargetOptions) || void 0 === n
                ? void 0
                : n.magFilter) !== void 0
                ? null === (a = e.renderTargetOptions) || void 0 === a
                  ? void 0
                  : a.magFilter
                : en.k6q,
            minFilter:
              (null === (o = e.renderTargetOptions) || void 0 === o
                ? void 0
                : o.minFilter) !== void 0
                ? null === (A = e.renderTargetOptions) || void 0 === A
                  ? void 0
                  : A.minFilter
                : en.k6q,
            samples:
              (null === (l = e.renderTargetOptions) || void 0 === l
                ? void 0
                : l.samples) !== void 0
                ? null === (h = e.renderTargetOptions) || void 0 === h
                  ? void 0
                  : h.samples
                : void 0,
            wrapS:
              (null === (c = e.renderTargetOptions) || void 0 === c
                ? void 0
                : c.wrapS) !== void 0
                ? null === (u = e.renderTargetOptions) || void 0 === u
                  ? void 0
                  : u.wrapS
                : en.ghU,
            wrapT:
              (null === (g = e.renderTargetOptions) || void 0 === g
                ? void 0
                : g.wrapT) !== void 0
                ? null === (d = e.renderTargetOptions) || void 0 === d
                  ? void 0
                  : d.wrapT
                : en.ghU,
          };
          if (
            ((this._material = e.material),
            e.renderer
              ? (this._renderer = e.renderer)
              : ((this._renderer = nG.instantiateRenderer()),
                (this._rendererIsDisposable = !0)),
            (this._scene = new en.Z58()),
            (this._camera = new en.qUd()),
            this._camera.position.set(0, 0, 10),
            (this._camera.left = -0.5),
            (this._camera.right = 0.5),
            (this._camera.top = 0.5),
            (this._camera.bottom = -0.5),
            this._camera.updateProjectionMatrix(),
            !nP(this._type, this._renderer, this._camera, f))
          ) {
            let e;
            this._type === en.ix0 &&
              (e = this._renderer.extensions.has("EXT_color_buffer_float")
                ? en.RQf
                : void 0),
              void 0 !== e
                ? (console.warn(
                    `This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${en.RQf}`
                  ),
                  (this._type = e))
                : ((this._supportsReadPixels = !1),
                  console.warn(
                    "This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"
                  ));
          }
          (this._quad = new en.eaF(new en.bdM(), this._material)),
            this._quad.geometry.computeBoundingBox(),
            this._scene.add(this._quad),
            (this._renderTarget = new en.nWS(this.width, this.height, f)),
            (this._renderTarget.texture.mapping =
              (null === (p = e.renderTargetOptions) || void 0 === p
                ? void 0
                : p.mapping) !== void 0
                ? null === (m = e.renderTargetOptions) || void 0 === m
                  ? void 0
                  : m.mapping
                : en.UTZ);
        }
        static instantiateRenderer() {
          let e = new rT.JeP();
          return e.setSize(128, 128), e;
        }
        toArray() {
          if (!this._supportsReadPixels)
            throw Error("Can't read pixels in this browser");
          let e = nN(this._type, this._width, this._height);
          return (
            this._renderer.readRenderTargetPixels(
              this._renderTarget,
              0,
              0,
              this._width,
              this._height,
              e
            ),
            e
          );
        }
        toDataTexture(e) {
          let t = new en.GYF(
            this.toArray(),
            this.width,
            this.height,
            en.GWd,
            this._type,
            (null == e ? void 0 : e.mapping) || en.UTZ,
            (null == e ? void 0 : e.wrapS) || en.ghU,
            (null == e ? void 0 : e.wrapT) || en.ghU,
            (null == e ? void 0 : e.magFilter) || en.k6q,
            (null == e ? void 0 : e.minFilter) || en.k6q,
            (null == e ? void 0 : e.anisotropy) || 1,
            en.Zr2
          );
          return (
            (t.generateMipmaps =
              (null == e ? void 0 : e.generateMipmaps) !== void 0 &&
              (null == e ? void 0 : e.generateMipmaps)),
            t
          );
        }
        disposeOnDemandRenderer() {
          this._renderer.setRenderTarget(null),
            this._rendererIsDisposable &&
              (this._renderer.dispose(), this._renderer.forceContextLoss());
        }
        dispose(e) {
          this.disposeOnDemandRenderer(),
            e && this.renderTarget.dispose(),
            this.material instanceof en.BKk &&
              Object.values(this.material.uniforms).forEach((e) => {
                e.value instanceof en.gPd && e.value.dispose();
              }),
            Object.values(this.material).forEach((e) => {
              e instanceof en.gPd && e.dispose();
            }),
            this.material.dispose(),
            this._quad.geometry.dispose();
        }
        get width() {
          return this._width;
        }
        set width(e) {
          (this._width = e),
            this._renderTarget.setSize(this._width, this._height);
        }
        get height() {
          return this._height;
        }
        set height(e) {
          (this._height = e),
            this._renderTarget.setSize(this._width, this._height);
        }
        get renderer() {
          return this._renderer;
        }
        get renderTarget() {
          return this._renderTarget;
        }
        set renderTarget(e) {
          (this._renderTarget = e),
            (this._width = e.width),
            (this._height = e.height);
        }
        get material() {
          return this._material;
        }
        get type() {
          return this._type;
        }
        get colorSpace() {
          return this._colorSpace;
        }
      }
      let nO = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
        nH = `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
      class nq extends en.BKk {
        constructor({
          gamma: e,
          offsetHdr: t,
          offsetSdr: i,
          gainMapMin: r,
          gainMapMax: s,
          maxDisplayBoost: n,
          hdrCapacityMin: a,
          hdrCapacityMax: o,
          sdr: A,
          gainMap: l,
        }) {
          super({
            name: "GainMapDecoderMaterial",
            vertexShader: nO,
            fragmentShader: nH,
            uniforms: {
              sdr: { value: A },
              gainMap: { value: l },
              gamma: { value: new en.Pq0(1 / e[0], 1 / e[1], 1 / e[2]) },
              offsetHdr: { value: new en.Pq0().fromArray(t) },
              offsetSdr: { value: new en.Pq0().fromArray(i) },
              gainMapMin: { value: new en.Pq0().fromArray(r) },
              gainMapMax: { value: new en.Pq0().fromArray(s) },
              weightFactor: { value: (Math.log2(n) - a) / (o - a) },
            },
            blending: en.XIg,
            depthTest: !1,
            depthWrite: !1,
          }),
            (this._maxDisplayBoost = n),
            (this._hdrCapacityMin = a),
            (this._hdrCapacityMax = o),
            (this.needsUpdate = !0),
            (this.uniformsNeedUpdate = !0);
        }
        get sdr() {
          return this.uniforms.sdr.value;
        }
        set sdr(e) {
          this.uniforms.sdr.value = e;
        }
        get gainMap() {
          return this.uniforms.gainMap.value;
        }
        set gainMap(e) {
          this.uniforms.gainMap.value = e;
        }
        get offsetHdr() {
          return this.uniforms.offsetHdr.value.toArray();
        }
        set offsetHdr(e) {
          this.uniforms.offsetHdr.value.fromArray(e);
        }
        get offsetSdr() {
          return this.uniforms.offsetSdr.value.toArray();
        }
        set offsetSdr(e) {
          this.uniforms.offsetSdr.value.fromArray(e);
        }
        get gainMapMin() {
          return this.uniforms.gainMapMin.value.toArray();
        }
        set gainMapMin(e) {
          this.uniforms.gainMapMin.value.fromArray(e);
        }
        get gainMapMax() {
          return this.uniforms.gainMapMax.value.toArray();
        }
        set gainMapMax(e) {
          this.uniforms.gainMapMax.value.fromArray(e);
        }
        get gamma() {
          let e = this.uniforms.gamma.value;
          return [1 / e.x, 1 / e.y, 1 / e.z];
        }
        set gamma(e) {
          let t = this.uniforms.gamma.value;
          (t.x = 1 / e[0]), (t.y = 1 / e[1]), (t.z = 1 / e[2]);
        }
        get hdrCapacityMin() {
          return this._hdrCapacityMin;
        }
        set hdrCapacityMin(e) {
          (this._hdrCapacityMin = e), this.calculateWeight();
        }
        get hdrCapacityMax() {
          return this._hdrCapacityMax;
        }
        set hdrCapacityMax(e) {
          (this._hdrCapacityMax = e), this.calculateWeight();
        }
        get maxDisplayBoost() {
          return this._maxDisplayBoost;
        }
        set maxDisplayBoost(e) {
          (this._maxDisplayBoost = Math.max(1, Math.min(65504, e))),
            this.calculateWeight();
        }
        calculateWeight() {
          let e =
            (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) /
            (this._hdrCapacityMax - this._hdrCapacityMin);
          this.uniforms.weightFactor.value = Math.max(0, Math.min(1, e));
        }
      }
      class nV extends Error {}
      class nY extends Error {}
      let nJ = (e, t, i) => {
          var r;
          let s;
          let n =
            null === (r = e.attributes.getNamedItem(t)) || void 0 === r
              ? void 0
              : r.nodeValue;
          if (n) s = n;
          else {
            let r = e.getElementsByTagName(t)[0];
            if (r) {
              let e = r.getElementsByTagName("rdf:li");
              if (3 === e.length) s = Array.from(e).map((e) => e.innerHTML);
              else
                throw Error(
                  `Gainmap metadata contains an array of items for ${t} but its length is not 3`
                );
            } else {
              if (i) return i;
              throw Error(`Can't find ${t} in gainmap metadata`);
            }
          }
          return s;
        },
        nK = (e) => {
          var t, i;
          let r;
          "undefined" != typeof TextDecoder
            ? (r = new TextDecoder().decode(e))
            : (r = e.toString());
          let s = r.indexOf("<x:xmpmeta"),
            n = new DOMParser();
          for (; -1 !== s; ) {
            let e = r.indexOf("x:xmpmeta>", s);
            r.slice(s, e + 10);
            let a = r.slice(s, e + 10);
            try {
              let e = n
                  .parseFromString(a, "text/xml")
                  .getElementsByTagName("rdf:Description")[0],
                r = nJ(e, "hdrgm:GainMapMin", "0"),
                s = nJ(e, "hdrgm:GainMapMax"),
                o = nJ(e, "hdrgm:Gamma", "1"),
                A = nJ(e, "hdrgm:OffsetSDR", "0.015625"),
                l = nJ(e, "hdrgm:OffsetHDR", "0.015625"),
                h =
                  null ===
                    (t = e.attributes.getNamedItem("hdrgm:HDRCapacityMin")) ||
                  void 0 === t
                    ? void 0
                    : t.nodeValue;
              h || (h = "0");
              let c =
                null ===
                  (i = e.attributes.getNamedItem("hdrgm:HDRCapacityMax")) ||
                void 0 === i
                  ? void 0
                  : i.nodeValue;
              if (!c) throw Error("Incomplete gainmap metadata");
              return {
                gainMapMin: Array.isArray(r)
                  ? r.map((e) => parseFloat(e))
                  : [parseFloat(r), parseFloat(r), parseFloat(r)],
                gainMapMax: Array.isArray(s)
                  ? s.map((e) => parseFloat(e))
                  : [parseFloat(s), parseFloat(s), parseFloat(s)],
                gamma: Array.isArray(o)
                  ? o.map((e) => parseFloat(e))
                  : [parseFloat(o), parseFloat(o), parseFloat(o)],
                offsetSdr: Array.isArray(A)
                  ? A.map((e) => parseFloat(e))
                  : [parseFloat(A), parseFloat(A), parseFloat(A)],
                offsetHdr: Array.isArray(l)
                  ? l.map((e) => parseFloat(e))
                  : [parseFloat(l), parseFloat(l), parseFloat(l)],
                hdrCapacityMin: parseFloat(h),
                hdrCapacityMax: parseFloat(c),
              };
            } catch (e) {}
            s = r.indexOf("<x:xmpmeta", e);
          }
        };
      class nz {
        constructor(e) {
          this.options = {
            debug: !!e && void 0 !== e.debug && e.debug,
            extractFII: !e || void 0 === e.extractFII || e.extractFII,
            extractNonFII: !e || void 0 === e.extractNonFII || e.extractNonFII,
          };
        }
        extract(e) {
          return new Promise((t, i) => {
            let r;
            let s = this.options.debug,
              n = new DataView(e.buffer);
            if (65496 !== n.getUint16(0)) {
              i(Error("Not a valid jpeg"));
              return;
            }
            let a = n.byteLength,
              o = 2,
              A = 0;
            for (; o < a; ) {
              if (++A > 250) {
                i(Error(`Found no marker after ${A} loops 😵`));
                return;
              }
              if (255 !== n.getUint8(o)) {
                i(
                  Error(
                    `Not a valid marker at offset 0x${o.toString(
                      16
                    )}, found: 0x${n.getUint8(o).toString(16)}`
                  )
                );
                return;
              }
              if (
                ((r = n.getUint8(o + 1)),
                s && console.log(`Marker: ${r.toString(16)}`),
                226 === r)
              ) {
                s && console.log("Found APP2 marker (0xffe2)");
                let e = o + 4;
                if (0x4d504600 === n.getUint32(e)) {
                  let r;
                  let s = e + 4;
                  if (18761 === n.getUint16(s)) r = !1;
                  else if (19789 === n.getUint16(s)) r = !0;
                  else {
                    i(Error("No valid endianness marker found in TIFF header"));
                    return;
                  }
                  if (42 !== n.getUint16(s + 2, !r)) {
                    i(Error("Not valid TIFF data! (no 0x002A marker)"));
                    return;
                  }
                  let a = n.getUint32(s + 4, !r);
                  if (a < 8) {
                    i(Error("Not valid TIFF data! (First offset less than 8)"));
                    return;
                  }
                  let o = s + a,
                    A = n.getUint16(o, !r),
                    l = o + 2,
                    h = 0;
                  for (let e = l; e < l + 12 * A; e += 12)
                    45057 === n.getUint16(e, !r) &&
                      (h = n.getUint32(e + 8, !r));
                  let c = o + 2 + 12 * A + 4,
                    u = [];
                  for (let e = c; e < c + 16 * h; e += 16) {
                    let t = {
                      MPType: n.getUint32(e, !r),
                      size: n.getUint32(e + 4, !r),
                      dataOffset: n.getUint32(e + 8, !r),
                      dependantImages: n.getUint32(e + 12, !r),
                      start: -1,
                      end: -1,
                      isFII: !1,
                    };
                    t.dataOffset
                      ? ((t.start = s + t.dataOffset), (t.isFII = !1))
                      : ((t.start = 0), (t.isFII = !0)),
                      (t.end = t.start + t.size),
                      u.push(t);
                  }
                  if (this.options.extractNonFII && u.length) {
                    let e = new Blob([n]),
                      i = [];
                    for (let t of u) {
                      if (t.isFII && !this.options.extractFII) continue;
                      let r = e.slice(t.start, t.end + 1, "image/jpeg");
                      i.push(r);
                    }
                    t(i);
                  }
                }
              }
              o += 2 + n.getUint16(o + 2);
            }
          });
        }
      }
      let n$ = async (e) => {
          let t = nK(e);
          if (!t) throw new nY("Gain map XMP metadata not found");
          let i = new nz({ extractFII: !0, extractNonFII: !0 }),
            r = await i.extract(e);
          if (2 !== r.length) throw new nV("Gain map recovery image not found");
          return {
            sdr: new Uint8Array(await r[0].arrayBuffer()),
            gainMap: new Uint8Array(await r[1].arrayBuffer()),
            metadata: t,
          };
        },
        nj = (e) =>
          new Promise((t, i) => {
            let r = document.createElement("img");
            (r.onload = () => {
              t(r);
            }),
              (r.onerror = (e) => {
                i(e);
              }),
              (r.src = URL.createObjectURL(e));
          });
      class nW extends en.aHM {
        constructor(e, t) {
          super(t),
            e && (this._renderer = e),
            (this._internalLoadingManager = new en.KPJ());
        }
        setRenderer(e) {
          return (this._renderer = e), this;
        }
        setRenderTargetOptions(e) {
          return (this._renderTargetOptions = e), this;
        }
        prepareQuadRenderer() {
          this._renderer ||
            console.warn(
              "WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer."
            );
          let e = new nq({
            gainMapMax: [1, 1, 1],
            gainMapMin: [0, 0, 0],
            gamma: [1, 1, 1],
            offsetHdr: [1, 1, 1],
            offsetSdr: [1, 1, 1],
            hdrCapacityMax: 1,
            hdrCapacityMin: 0,
            maxDisplayBoost: 1,
            gainMap: new en.gPd(),
            sdr: new en.gPd(),
          });
          return new nG({
            width: 16,
            height: 16,
            type: en.ix0,
            colorSpace: en.Zr2,
            material: e,
            renderer: this._renderer,
            renderTargetOptions: this._renderTargetOptions,
          });
        }
        async render(e, t, i, r) {
          let s, n;
          let a = r ? new Blob([r], { type: "image/jpeg" }) : void 0,
            o = new Blob([i], { type: "image/jpeg" }),
            A = !1;
          if ("undefined" == typeof createImageBitmap) {
            let e = await Promise.all([
              a ? nj(a) : Promise.resolve(void 0),
              nj(o),
            ]);
            (n = e[0]), (s = e[1]), (A = !0);
          } else {
            let e = await Promise.all([
              a
                ? createImageBitmap(a, { imageOrientation: "flipY" })
                : Promise.resolve(void 0),
              createImageBitmap(o, { imageOrientation: "flipY" }),
            ]);
            (n = e[0]), (s = e[1]);
          }
          let l = new en.gPd(
            n || new ImageData(2, 2),
            en.UTZ,
            en.ghU,
            en.ghU,
            en.k6q,
            en.NZq,
            en.GWd,
            en.OUM,
            1,
            en.Zr2
          );
          (l.flipY = A), (l.needsUpdate = !0);
          let h = new en.gPd(
            s,
            en.UTZ,
            en.ghU,
            en.ghU,
            en.k6q,
            en.NZq,
            en.GWd,
            en.OUM,
            1,
            en.er$
          );
          (h.flipY = A),
            (h.needsUpdate = !0),
            (e.width = s.width),
            (e.height = s.height),
            (e.material.gainMap = l),
            (e.material.sdr = h),
            (e.material.gainMapMin = t.gainMapMin),
            (e.material.gainMapMax = t.gainMapMax),
            (e.material.offsetHdr = t.offsetHdr),
            (e.material.offsetSdr = t.offsetSdr),
            (e.material.gamma = t.gamma),
            (e.material.hdrCapacityMin = t.hdrCapacityMin),
            (e.material.hdrCapacityMax = t.hdrCapacityMax),
            (e.material.maxDisplayBoost = Math.pow(2, t.hdrCapacityMax)),
            (e.material.needsUpdate = !0),
            e.render();
        }
      }
      class nX extends nW {
        load(e, t, i, r) {
          let s = this.prepareQuadRenderer(),
            n = new en.Y9S(this._internalLoadingManager);
          return (
            n.setResponseType("arraybuffer"),
            n.setRequestHeader(this.requestHeader),
            n.setPath(this.path),
            n.setWithCredentials(this.withCredentials),
            this.manager.itemStart(e),
            n.load(
              e,
              async (i) => {
                let n, a, o;
                if ("string" == typeof i)
                  throw Error(
                    "Invalid buffer, received [string], was expecting [ArrayBuffer]"
                  );
                let A = new Uint8Array(i);
                try {
                  let e = await n$(A);
                  (n = e.sdr), (a = e.gainMap), (o = e.metadata);
                } catch (t) {
                  if (t instanceof nY || t instanceof nV)
                    console.warn(
                      `Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`
                    ),
                      (o = {
                        gainMapMin: [0, 0, 0],
                        gainMapMax: [1, 1, 1],
                        gamma: [1, 1, 1],
                        hdrCapacityMin: 0,
                        hdrCapacityMax: 1,
                        offsetHdr: [0, 0, 0],
                        offsetSdr: [0, 0, 0],
                      }),
                      (n = A);
                  else throw t;
                }
                try {
                  await this.render(s, o, n, a);
                } catch (t) {
                  this.manager.itemError(e),
                    "function" == typeof r && r(t),
                    s.disposeOnDemandRenderer();
                  return;
                }
                "function" == typeof t && t(s),
                  this.manager.itemEnd(e),
                  s.disposeOnDemandRenderer();
              },
              i,
              (t) => {
                this.manager.itemError(e), "function" == typeof r && r(t);
              }
            ),
            s
          );
        }
      }
      class nZ extends en.BRH {
        constructor(e) {
          super(e), (this.type = en.ix0);
        }
        parse(e) {
          let t, i, r;
          let s = function (e, t) {
              switch (e) {
                case 1:
                  throw Error("THREE.RGBELoader: Read Error: " + (t || ""));
                case 2:
                  throw Error("THREE.RGBELoader: Write Error: " + (t || ""));
                case 3:
                  throw Error(
                    "THREE.RGBELoader: Bad File Format: " + (t || "")
                  );
                default:
                  throw Error("THREE.RGBELoader: Memory Error: " + (t || ""));
              }
            },
            n = function (e, t, i) {
              t = t || 1024;
              let r = e.pos,
                s = -1,
                n = 0,
                a = "",
                o = String.fromCharCode.apply(
                  null,
                  new Uint16Array(e.subarray(r, r + 128))
                );
              for (; 0 > (s = o.indexOf("\n")) && n < t && r < e.byteLength; )
                (a += o),
                  (n += o.length),
                  (r += 128),
                  (o += String.fromCharCode.apply(
                    null,
                    new Uint16Array(e.subarray(r, r + 128))
                  ));
              return (
                -1 < s && (!1 !== i && (e.pos += n + s + 1), a + o.slice(0, s))
              );
            },
            a = new Uint8Array(e);
          a.pos = 0;
          let o = (function (e) {
              let t, i;
              let r = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
                a = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
                o = /^\s*FORMAT=(\S+)\s*$/,
                A = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
                l = {
                  valid: 0,
                  string: "",
                  comments: "",
                  programtype: "RGBE",
                  format: "",
                  gamma: 1,
                  exposure: 1,
                  width: 0,
                  height: 0,
                };
              for (
                (!(e.pos >= e.byteLength) && (t = n(e))) ||
                  s(1, "no header found"),
                  (i = t.match(/^#\?(\S+)/)) || s(3, "bad initial token"),
                  l.valid |= 1,
                  l.programtype = i[1],
                  l.string += t + "\n";
                !1 !== (t = n(e));

              ) {
                if (((l.string += t + "\n"), "#" === t.charAt(0))) {
                  l.comments += t + "\n";
                  continue;
                }
                if (
                  ((i = t.match(r)) && (l.gamma = parseFloat(i[1])),
                  (i = t.match(a)) && (l.exposure = parseFloat(i[1])),
                  (i = t.match(o)) && ((l.valid |= 2), (l.format = i[1])),
                  (i = t.match(A)) &&
                    ((l.valid |= 4),
                    (l.height = parseInt(i[1], 10)),
                    (l.width = parseInt(i[2], 10))),
                  2 & l.valid && 4 & l.valid)
                )
                  break;
              }
              return (
                2 & l.valid || s(3, "missing format specifier"),
                4 & l.valid || s(3, "missing image size specifier"),
                l
              );
            })(a),
            A = o.width,
            l = o.height,
            h = (function (e, t, i) {
              if (t < 8 || t > 32767 || 2 !== e[0] || 2 !== e[1] || 128 & e[2])
                return new Uint8Array(e);
              t !== ((e[2] << 8) | e[3]) && s(3, "wrong scanline width");
              let r = new Uint8Array(4 * t * i);
              r.length || s(4, "unable to allocate buffer space");
              let n = 0,
                a = 0,
                o = 4 * t,
                A = new Uint8Array(4),
                l = new Uint8Array(o),
                h = i;
              for (; h > 0 && a < e.byteLength; ) {
                a + 4 > e.byteLength && s(1),
                  (A[0] = e[a++]),
                  (A[1] = e[a++]),
                  (A[2] = e[a++]),
                  (A[3] = e[a++]),
                  (2 != A[0] || 2 != A[1] || ((A[2] << 8) | A[3]) != t) &&
                    s(3, "bad rgbe scanline format");
                let i = 0,
                  c;
                for (; i < o && a < e.byteLength; ) {
                  let t = (c = e[a++]) > 128;
                  if (
                    (t && (c -= 128),
                    (0 === c || i + c > o) && s(3, "bad scanline data"),
                    t)
                  ) {
                    let t = e[a++];
                    for (let e = 0; e < c; e++) l[i++] = t;
                  } else l.set(e.subarray(a, a + c), i), (i += c), (a += c);
                }
                for (let e = 0; e < t; e++) {
                  let i = 0;
                  (r[n] = l[e + i]),
                    (i += t),
                    (r[n + 1] = l[e + i]),
                    (i += t),
                    (r[n + 2] = l[e + i]),
                    (i += t),
                    (r[n + 3] = l[e + i]),
                    (n += 4);
                }
                h--;
              }
              return r;
            })(a.subarray(a.pos), A, l);
          switch (this.type) {
            case en.RQf:
              let c = new Float32Array(4 * (r = h.length / 4));
              for (let e = 0; e < r; e++)
                !(function (e, t, i, r) {
                  let s = Math.pow(2, e[t + 3] - 128) / 255;
                  (i[r + 0] = e[t + 0] * s),
                    (i[r + 1] = e[t + 1] * s),
                    (i[r + 2] = e[t + 2] * s),
                    (i[r + 3] = 1);
                })(h, 4 * e, c, 4 * e);
              (t = c), (i = en.RQf);
              break;
            case en.ix0:
              let u = new Uint16Array(4 * (r = h.length / 4));
              for (let e = 0; e < r; e++)
                !(function (e, t, i, r) {
                  let s = Math.pow(2, e[t + 3] - 128) / 255;
                  (i[r + 0] = en.GxU.toHalfFloat(
                    Math.min(e[t + 0] * s, 65504)
                  )),
                    (i[r + 1] = en.GxU.toHalfFloat(
                      Math.min(e[t + 1] * s, 65504)
                    )),
                    (i[r + 2] = en.GxU.toHalfFloat(
                      Math.min(e[t + 2] * s, 65504)
                    )),
                    (i[r + 3] = en.GxU.toHalfFloat(1));
                })(h, 4 * e, u, 4 * e);
              (t = u), (i = en.ix0);
              break;
            default:
              throw Error("THREE.RGBELoader: Unsupported type: " + this.type);
          }
          return {
            width: A,
            height: l,
            data: t,
            header: o.string,
            gamma: o.gamma,
            exposure: o.exposure,
            type: i,
          };
        }
        setDataType(e) {
          return (this.type = e), this;
        }
        load(e, t, i, r) {
          return super.load(
            e,
            function (e, i) {
              switch (e.type) {
                case en.RQf:
                case en.ix0:
                  (e.colorSpace = en.Zr2),
                    (e.minFilter = en.k6q),
                    (e.magFilter = en.k6q),
                    (e.generateMipmaps = !1),
                    (e.flipY = !0);
              }
              t && t(e, i);
            },
            i,
            r
          );
        }
      }
      let n0 = {
          topLight: { intensity: 500, position: [0.418, 16.199, 0.3] },
          room: {
            position: [-0.757, 13.219, 0.717],
            scale: [31.713, 28.305, 28.591],
          },
          boxes: [
            {
              position: [-10.906, 2.009, 1.846],
              rotation: -0.195,
              scale: [2.328, 7.905, 4.651],
            },
            {
              position: [-5.607, -0.754, -0.758],
              rotation: 0.994,
              scale: [1.97, 1.534, 3.955],
            },
            {
              position: [6.167, 0.857, 7.803],
              rotation: 0.561,
              scale: [3.927, 6.285, 3.687],
            },
            {
              position: [-2.017, 0.018, 6.124],
              rotation: 0.333,
              scale: [2.002, 4.566, 2.064],
            },
            {
              position: [2.291, -0.756, -2.621],
              rotation: -0.286,
              scale: [1.546, 1.552, 1.496],
            },
            {
              position: [-2.193, -0.369, -5.547],
              rotation: 0.516,
              scale: [3.875, 3.487, 2.986],
            },
          ],
          lights: [
            {
              intensity: 50,
              position: [-16.116, 14.37, 8.208],
              scale: [0.1, 2.428, 2.739],
            },
            {
              intensity: 50,
              position: [-16.109, 18.021, -8.207],
              scale: [0.1, 2.425, 2.751],
            },
            {
              intensity: 17,
              position: [14.904, 12.198, -1.832],
              scale: [0.15, 4.265, 6.331],
            },
            {
              intensity: 43,
              position: [-0.462, 8.89, 14.52],
              scale: [4.38, 5.441, 0.088],
            },
            {
              intensity: 20,
              position: [3.235, 11.486, -12.541],
              scale: [2.5, 2, 0.1],
            },
            { intensity: 100, position: [0, 20, 0], scale: [1, 0.1, 1] },
          ],
        },
        n1 = {
          topLight: { intensity: 400, position: [0.5, 14, 0.5] },
          room: { position: [0, 13.2, 0], scale: [31.5, 28.5, 31.5] },
          boxes: [
            {
              position: [-10.906, -1, 1.846],
              rotation: -0.195,
              scale: [2.328, 7.905, 4.651],
            },
            {
              position: [-5.607, -0.754, -0.758],
              rotation: 0.994,
              scale: [1.97, 1.534, 3.955],
            },
            {
              position: [6.167, -0.16, 7.803],
              rotation: 0.561,
              scale: [3.927, 6.285, 3.687],
            },
            {
              position: [-2.017, 0.018, 6.124],
              rotation: 0.333,
              scale: [2.002, 4.566, 2.064],
            },
            {
              position: [2.291, -0.756, -2.621],
              rotation: -0.286,
              scale: [1.546, 1.552, 1.496],
            },
            {
              position: [-2.193, -0.369, -5.547],
              rotation: 0.516,
              scale: [3.875, 3.487, 2.986],
            },
          ],
          lights: [
            { intensity: 80, position: [-14, 10, 8], scale: [0.1, 2.5, 2.5] },
            { intensity: 80, position: [-14, 14, -4], scale: [0.1, 2.5, 2.5] },
            { intensity: 23, position: [14, 12, 0], scale: [0.1, 5, 5] },
            { intensity: 16, position: [0, 9, 14], scale: [5, 5, 0.1] },
            { intensity: 80, position: [7, 8, -14], scale: [2.5, 2.5, 0.1] },
            { intensity: 80, position: [-7, 16, -14], scale: [2.5, 2.5, 0.1] },
            { intensity: 1, position: [0, 20, 0], scale: [0.1, 0.1, 0.1] },
          ],
        };
      class n2 extends en.Z58 {
        constructor(e) {
          super(), (this.position.y = -3.5);
          let t = new en.iNn();
          t.deleteAttribute("uv");
          let i = new en._4j({ metalness: 0, side: en.hsX }),
            r = new en._4j({ metalness: 0 }),
            s = "legacy" == e ? n0 : n1,
            n = new en.HiM(0xffffff, s.topLight.intensity, 28, 2);
          n.position.set(...s.topLight.position), this.add(n);
          let a = new en.eaF(t, i);
          for (let e of (a.position.set(...s.room.position),
          a.scale.set(...s.room.scale),
          this.add(a),
          s.boxes)) {
            let i = new en.eaF(t, r);
            i.position.set(...e.position),
              i.rotation.set(0, e.rotation, 0),
              i.scale.set(...e.scale),
              this.add(i);
          }
          for (let e of s.lights) {
            let i = new en.eaF(t, this.createAreaLightMaterial(e.intensity));
            i.position.set(...e.position), i.scale.set(...e.scale), this.add(i);
          }
        }
        createAreaLightMaterial(e) {
          let t = new en.V9B();
          return t.color.setScalar(e), t;
        }
      }
      let n3 = /\.hdr(\.js)?$/;
      class n8 {
        constructor(e) {
          (this.threeRenderer = e),
            (this.lottieLoaderUrl = ""),
            (this._ldrLoader = null),
            (this._imageLoader = null),
            (this._hdrLoader = null),
            (this._lottieLoader = null),
            (this.generatedEnvironmentMap = null),
            (this.generatedEnvironmentMapAlt = null),
            (this.skyboxCache = new Map()),
            (this.blurMaterial = null),
            (this.blurScene = null);
        }
        ldrLoader(e) {
          return (
            null == this._ldrLoader && (this._ldrLoader = new en.Tap()),
            this._ldrLoader.setWithCredentials(e),
            this._ldrLoader
          );
        }
        imageLoader(e) {
          return (
            null == this._imageLoader &&
              (this._imageLoader = new nX(this.threeRenderer)),
            this._imageLoader.setWithCredentials(e),
            this._imageLoader
          );
        }
        hdrLoader(e) {
          return (
            null == this._hdrLoader &&
              ((this._hdrLoader = new nZ()),
              this._hdrLoader.setDataType(en.ix0)),
            this._hdrLoader.setWithCredentials(e),
            this._hdrLoader
          );
        }
        async getLottieLoader(e) {
          if (null == this._lottieLoader) {
            let { LottieLoader: e } = await import(this.lottieLoaderUrl);
            this._lottieLoader = new e();
          }
          return this._lottieLoader.setWithCredentials(e), this._lottieLoader;
        }
        async loadImage(e, t) {
          let i = await new Promise((i, r) =>
            this.ldrLoader(t).load(e, i, () => {}, r)
          );
          return (i.name = e), (i.flipY = !1), i;
        }
        async loadLottie(e, t, i) {
          let r = await this.getLottieLoader(i);
          r.setQuality(t);
          let s = await new Promise((t, i) => r.load(e, t, () => {}, i));
          return (s.name = e), s;
        }
        async loadEquirect(e, t = !1, i = () => {}) {
          try {
            let r = n3.test(e),
              s = r ? this.hdrLoader(t) : this.imageLoader(t),
              n = await new Promise((t, r) =>
                s.load(
                  e,
                  (e) => {
                    let { renderTarget: i } = e;
                    if (null != i) {
                      let { texture: r } = i;
                      e.dispose(!1), t(r);
                    } else t(e);
                  },
                  (e) => {
                    i((e.loaded / e.total) * 0.9);
                  },
                  r
                )
              );
            return (
              i(1),
              (n.name = e),
              (n.mapping = en.wfO),
              r || (n.colorSpace = en.er$),
              n
            );
          } finally {
            i && i(1);
          }
        }
        async generateEnvironmentMapAndSkybox(
          e = null,
          t = null,
          i = () => {},
          r = !1
        ) {
          let s;
          let n = "legacy" !== t;
          ("legacy" === t || "neutral" === t) && (t = null), (t = tu(t));
          let a = Promise.resolve(null);
          e && (a = this.loadEquirectFromUrl(e, r, i)),
            (s = t
              ? this.loadEquirectFromUrl(t, r, i)
              : e
              ? this.loadEquirectFromUrl(e, r, i)
              : n
              ? this.loadGeneratedEnvironmentMapAlt()
              : this.loadGeneratedEnvironmentMap());
          let [o, A] = await Promise.all([s, a]);
          if (null == o) throw Error("Failed to load environment map.");
          return { environmentMap: o, skybox: A };
        }
        async loadEquirectFromUrl(e, t, i) {
          if (!this.skyboxCache.has(e)) {
            let r = this.loadEquirect(e, t, i);
            this.skyboxCache.set(e, r);
          }
          return this.skyboxCache.get(e);
        }
        async GenerateEnvironmentMap(e, t) {
          await tE();
          let i = this.threeRenderer,
            r = new en.o6l(256, {
              generateMipmaps: !1,
              type: en.ix0,
              format: en.GWd,
              colorSpace: en.Zr2,
              depthBuffer: !0,
            }),
            s = new en.F1T(0.1, 100, r),
            n = s.renderTarget.texture;
          n.name = t;
          let a = i.outputColorSpace,
            o = i.toneMapping;
          return (
            (i.toneMapping = en.y_p),
            (i.outputColorSpace = en.Zr2),
            s.update(i, e),
            this.blurCubemap(r, 0.04),
            (i.toneMapping = o),
            (i.outputColorSpace = a),
            n
          );
        }
        async loadGeneratedEnvironmentMap() {
          return (
            null == this.generatedEnvironmentMap &&
              (this.generatedEnvironmentMap = this.GenerateEnvironmentMap(
                new n2("legacy"),
                "legacy"
              )),
            this.generatedEnvironmentMap
          );
        }
        async loadGeneratedEnvironmentMapAlt() {
          return (
            null == this.generatedEnvironmentMapAlt &&
              (this.generatedEnvironmentMapAlt = this.GenerateEnvironmentMap(
                new n2("neutral"),
                "neutral"
              )),
            this.generatedEnvironmentMapAlt
          );
        }
        blurCubemap(e, t) {
          if (null == this.blurMaterial) {
            this.blurMaterial = this.getBlurShader(20);
            let e = new en.iNn(),
              t = new en.eaF(e, this.blurMaterial);
            (this.blurScene = new en.Z58()), this.blurScene.add(t);
          }
          let i = e.clone();
          this.halfblur(e, i, t, "latitudinal"),
            this.halfblur(i, e, t, "longitudinal");
        }
        halfblur(e, t, i, r) {
          let s = e.width,
            n = isFinite(i) ? Math.PI / (2 * s) : (2 * Math.PI) / 39,
            a = i / n,
            o = isFinite(i) ? 1 + Math.floor(3 * a) : 20;
          o > 20 &&
            console.warn(
              `sigmaRadians, ${i}, is too large and will clip, as it requested ${o} samples when the maximum is set to 20`
            );
          let A = [],
            l = 0;
          for (let e = 0; e < 20; ++e) {
            let t = e / a,
              i = Math.exp((-t * t) / 2);
            A.push(i), 0 == e ? (l += i) : e < o && (l += 2 * i);
          }
          for (let e = 0; e < A.length; e++) A[e] = A[e] / l;
          let h = this.blurMaterial.uniforms;
          (h.envMap.value = e.texture),
            (h.samples.value = o),
            (h.weights.value = A),
            (h.latitudinal.value = "latitudinal" === r),
            (h.dTheta.value = n),
            new en.F1T(0.1, 100, t).update(this.threeRenderer, this.blurScene);
        }
        getBlurShader(e) {
          let t = new Float32Array(e),
            i = new en.Pq0(0, 1, 0);
          return new en.BKk({
            name: "SphericalGaussianBlur",
            defines: { n: e },
            uniforms: {
              envMap: { value: null },
              samples: { value: 1 },
              weights: { value: t },
              latitudinal: { value: !1 },
              dTheta: { value: 0 },
              poleAxis: { value: i },
            },
            vertexShader: `
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,
            fragmentShader: `
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
        }
  
        void main() {
  
          vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );
  
          if ( all( equal( axis, vec3( 0.0 ) ) ) ) {
  
            axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );
  
          }
  
          axis = normalize( axis );
  
          gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
          gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );
  
          for ( int i = 1; i < n; i++ ) {
  
            if ( i >= samples ) {
  
              break;
  
            }
  
            float theta = dTheta * float( i );
            gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
            gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );
  
          }
        }
      `,
            blending: en.XIg,
            depthTest: !1,
            depthWrite: !1,
            side: en.hsX,
          });
        }
        async dispose() {
          for (let [, e] of this.skyboxCache) (await e).dispose();
          null != this.generatedEnvironmentMap &&
            ((await this.generatedEnvironmentMap).dispose(),
            (this.generatedEnvironmentMap = null)),
            null != this.generatedEnvironmentMapAlt &&
              ((await this.generatedEnvironmentMapAlt).dispose(),
              (this.generatedEnvironmentMapAlt = null)),
            null != this.blurMaterial && this.blurMaterial.dispose();
        }
      }
      let n4 = [1, 0.79, 0.62, 0.5, 0.4, 0.31, 0.25],
        n5 = "high-performance";
      class n6 extends en.Qev {
        constructor(e) {
          super(),
            (this.loader = new i0(nU)),
            (this.width = 0),
            (this.height = 0),
            (this.dpr = 1),
            (this.scenes = new Set()),
            (this.multipleScenesVisible = !1),
            (this.lastTick = performance.now()),
            (this.renderedLastFrame = !1),
            (this.scaleStep = 0),
            (this.lastStep = 3),
            (this.avgFrameDuration = 50),
            (this.onWebGLContextLost = (e) => {
              this.dispatchEvent({ type: "contextlost", sourceEvent: e });
            }),
            (this.onWebGLContextRestored = () => {
              var e;
              for (let t of (null === (e = this.textureUtils) ||
                void 0 === e ||
                e.dispose(),
              (this.textureUtils = new n8(this.threeRenderer)),
              this.scenes))
                t.element[tv]();
            }),
            (this.dpr = window.devicePixelRatio),
            (this.canvas3D = document.createElement("canvas")),
            (this.canvas3D.id = "webgl-canvas"),
            this.canvas3D.classList.add("show");
          try {
            (this.threeRenderer = new rT.JeP({
              canvas: this.canvas3D,
              alpha: !0,
              antialias: !0,
              powerPreference: e.powerPreference,
              preserveDrawingBuffer: !0,
            })),
              (this.threeRenderer.autoClear = !0),
              this.threeRenderer.setPixelRatio(1),
              (this.threeRenderer.debug = {
                checkShaderErrors: !!e.debug,
                onShaderError: null,
              }),
              (this.threeRenderer.toneMapping = en.FV);
          } catch (e) {
            console.warn(e);
          }
          (this.arRenderer = new nC(this)),
            (this.textureUtils = this.canRender
              ? new n8(this.threeRenderer)
              : null),
            i0.initializeKTX2Loader(this.threeRenderer),
            this.canvas3D.addEventListener(
              "webglcontextlost",
              this.onWebGLContextLost
            ),
            this.canvas3D.addEventListener(
              "webglcontextrestored",
              this.onWebGLContextRestored
            ),
            this.updateRendererSize();
        }
        static get singleton() {
          return (
            this._singleton ||
              (this._singleton = new n6({
                powerPreference:
                  (self.ModelViewerElement || {}).powerPreference || n5,
                debug: tI(),
              })),
            this._singleton
          );
        }
        static resetSingleton() {
          let e = this._singleton.dispose();
          for (let t of e) t.disconnectedCallback();
          for (let t of ((this._singleton = new n6({
            powerPreference:
              (self.ModelViewerElement || {}).powerPreference || n5,
            debug: tI(),
          })),
          e))
            t.connectedCallback();
        }
        get canRender() {
          return null != this.threeRenderer;
        }
        get scaleFactor() {
          return n4[this.scaleStep];
        }
        set minScale(e) {
          let t = 1;
          for (; t < n4.length && !(n4[t] < e); ) ++t;
          this.lastStep = t - 1;
        }
        registerScene(e) {
          this.scenes.add(e), e.forceRescale();
          let t = new en.I9Y();
          this.threeRenderer.getSize(t),
            (e.canvas.width = t.x),
            (e.canvas.height = t.y),
            this.canRender &&
              this.scenes.size > 0 &&
              this.threeRenderer.setAnimationLoop((e, t) => this.render(e, t));
        }
        unregisterScene(e) {
          this.scenes.delete(e),
            this.canvas3D.parentElement === e.canvas.parentElement &&
              e.canvas.parentElement.removeChild(this.canvas3D),
            this.canRender &&
              0 === this.scenes.size &&
              this.threeRenderer.setAnimationLoop(null);
        }
        displayCanvas(e) {
          return e.element.modelIsVisible && !this.multipleScenesVisible
            ? this.canvas3D
            : e.element[o8];
        }
        countVisibleScenes() {
          let { canvas3D: e } = this,
            t = 0,
            i = null;
          for (let r of this.scenes) {
            let { element: s } = r;
            s.modelIsVisible && null == r.externalRenderer && ++t,
              e.parentElement === r.canvas.parentElement && (i = r);
          }
          let r = t > 1;
          if (null != i) {
            let t = r && !this.multipleScenesVisible,
              s = !i.element.modelIsVisible;
            if (t || s) {
              let { width: t, height: r } = this.sceneSize(i);
              this.copyPixels(i, t, r), e.parentElement.removeChild(e);
            }
          }
          this.multipleScenesVisible = r;
        }
        updateRendererSize() {
          var e;
          let t = window.devicePixelRatio;
          if (t !== this.dpr)
            for (let e of this.scenes) {
              let { element: t } = e;
              t[oY](t.getBoundingClientRect());
            }
          let i = 0,
            r = 0;
          for (let e of this.scenes)
            (i = Math.max(i, e.width)), (r = Math.max(r, e.height));
          if (i !== this.width || r !== this.height || t !== this.dpr)
            for (let s of ((this.width = i),
            (this.height = r),
            (this.dpr = t),
            (i = Math.ceil(i * t)),
            (r = Math.ceil(r * t)),
            this.canRender && this.threeRenderer.setSize(i, r, !1),
            this.scenes)) {
              let { canvas: t } = s;
              (t.width = i),
                (t.height = r),
                s.forceRescale(),
                null === (e = s.effectRenderer) ||
                  void 0 === e ||
                  e.setSize(i, r);
            }
        }
        updateRendererScale(e) {
          let t = this.scaleStep;
          (this.avgFrameDuration += tf(
            0.2 * (e - this.avgFrameDuration),
            -5,
            5
          )),
            this.avgFrameDuration > 60
              ? ++this.scaleStep
              : this.avgFrameDuration < 40 &&
                this.scaleStep > 0 &&
                --this.scaleStep,
            (this.scaleStep = Math.min(this.scaleStep, this.lastStep)),
            t !== this.scaleStep && (this.avgFrameDuration = 50);
        }
        shouldRender(e) {
          if (e.shouldRender())
            e.scaleStep != this.scaleStep &&
              ((e.scaleStep = this.scaleStep), this.rescaleCanvas(e));
          else {
            if (0 == e.scaleStep) return !1;
            (e.scaleStep = 0), this.rescaleCanvas(e);
          }
          return !0;
        }
        rescaleCanvas(e) {
          let t = n4[e.scaleStep],
            i = Math.ceil(this.width / t),
            r = Math.ceil(this.height / t),
            { style: s } = e.canvas;
          (s.width = `${i}px`),
            (s.height = `${r}px`),
            (this.canvas3D.style.width = `${i}px`),
            (this.canvas3D.style.height = `${r}px`);
          let n = this.dpr * t,
            a =
              t < 1
                ? "GPU throttling"
                : this.dpr !== window.devicePixelRatio
                ? "No meta viewport tag"
                : "";
          e.element.dispatchEvent(
            new CustomEvent("render-scale", {
              detail: {
                reportedDpr: window.devicePixelRatio,
                renderedDpr: n,
                minimumDpr: this.dpr * n4[this.lastStep],
                pixelWidth: Math.ceil(e.width * n),
                pixelHeight: Math.ceil(e.height * n),
                reason: a,
              },
            })
          );
        }
        sceneSize(e) {
          let { dpr: t } = this,
            i = n4[e.scaleStep];
          return {
            width: Math.min(Math.ceil(e.width * i * t), this.canvas3D.width),
            height: Math.min(Math.ceil(e.height * i * t), this.canvas3D.height),
          };
        }
        copyPixels(e, t, i) {
          let r = e.context;
          if (null == r) {
            console.log("could not acquire 2d context");
            return;
          }
          r.clearRect(0, 0, t, i),
            r.drawImage(this.canvas3D, 0, 0, t, i, 0, 0, t, i),
            e.canvas.classList.add("show");
        }
        orderedScenes() {
          let e = [];
          for (let t of [!1, !0])
            for (let i of this.scenes)
              i.element.modelIsVisible === t && e.push(i);
          return e;
        }
        get isPresenting() {
          return this.arRenderer.isPresenting;
        }
        preRender(e, t, i) {
          let { element: r, exposure: s, toneMapping: n } = e;
          r[o6](t, i);
          let a = "number" == typeof s && !Number.isNaN(s),
            o = r.environmentImage,
            A = r.skyboxImage,
            l =
              n === en.aJ8 && ("neutral" === o || "legacy" === o || (!o && !A));
          this.threeRenderer.toneMappingExposure = (a ? s : 1) * (l ? 1.3 : 1);
        }
        render(e, t) {
          if (null != t) {
            this.arRenderer.onWebXRFrame(e, t);
            return;
          }
          let i = e - this.lastTick;
          if (((this.lastTick = e), !this.canRender || this.isPresenting))
            return;
          this.countVisibleScenes(),
            this.updateRendererSize(),
            this.renderedLastFrame &&
              (this.updateRendererScale(i), (this.renderedLastFrame = !1));
          let { canvas3D: r } = this;
          for (let t of this.orderedScenes()) {
            let { element: s } = t;
            if (
              !s.loaded ||
              (!s.modelIsVisible && t.renderCount > 0) ||
              (this.preRender(t, e, i), !this.shouldRender(t))
            )
              continue;
            if (null != t.externalRenderer) {
              let e = t.getCamera();
              e.updateMatrix();
              let { matrix: i, projectionMatrix: r } = e,
                s = i.elements.slice(),
                n = t.getTarget();
              (s[12] += n.x),
                (s[13] += n.y),
                (s[14] += n.z),
                t.externalRenderer.render({
                  viewMatrix: s,
                  projectionMatrix: r.elements,
                });
              continue;
            }
            if (!s.modelIsVisible && !this.multipleScenesVisible)
              for (let e of this.scenes)
                e.element.modelIsVisible && e.queueRender();
            let { width: n, height: a } = this.sceneSize(t);
            t.renderShadow(this.threeRenderer),
              this.threeRenderer.setRenderTarget(null),
              this.threeRenderer.setViewport(
                0,
                Math.ceil(this.height * this.dpr) - a,
                n,
                a
              ),
              null != t.effectRenderer
                ? t.effectRenderer.render(i)
                : ((this.threeRenderer.autoClear = !0),
                  (this.threeRenderer.toneMapping = t.toneMapping),
                  this.threeRenderer.render(t, t.camera)),
              this.multipleScenesVisible ||
              (!t.element.modelIsVisible && 0 === t.renderCount)
                ? this.copyPixels(t, n, a)
                : r.parentElement !== t.canvas.parentElement &&
                  (t.canvas.parentElement.appendChild(r),
                  t.canvas.classList.remove("show")),
              t.hasRendered(),
              ++t.renderCount,
              (this.renderedLastFrame = !0);
          }
        }
        dispose() {
          null != this.textureUtils && this.textureUtils.dispose(),
            null != this.threeRenderer && this.threeRenderer.dispose(),
            (this.textureUtils = null),
            (this.threeRenderer = null);
          let e = [];
          for (let t of this.scenes) e.push(t.element);
          return (
            this.canvas3D.removeEventListener(
              "webglcontextlost",
              this.onWebGLContextLost
            ),
            this.canvas3D.removeEventListener(
              "webglcontextrestored",
              this.onWebGLContextRestored
            ),
            e
          );
        }
      }
      let n9 = Symbol("correlatedObjects"),
        n7 = Symbol("onUpdate");
      class ae {
        constructor(e, t) {
          (this[n7] = e), (this[n9] = t);
        }
      }
      let at = new en.V9B(),
        ai = new en.bdM(2, 2),
        ar = 0,
        as = Symbol("threeTexture"),
        an = Symbol("threeTextures");
      Symbol("applyTexture");
      class aa extends ae {
        get [as]() {
          var e;
          return null === (e = this[n9]) || void 0 === e
            ? void 0
            : e.values().next().value;
        }
        get [an]() {
          return this[n9];
        }
        constructor(e, t) {
          super(e, new Set(t ? [t] : [])),
            this[as].image.src ||
              (this[as].image.src = t.name ? t.name : "adhoc_image" + ar++),
            this[as].image.name ||
              (this[as].image.name =
                t && t.image && t.image.src
                  ? t.image.src.split("/").pop()
                  : "adhoc_image");
        }
        get name() {
          return this[as].image.name || "";
        }
        get uri() {
          return this[as].image.src;
        }
        get bufferView() {
          return this[as].image.bufferView;
        }
        get element() {
          let e = this[as];
          if (e && (e.isCanvasTexture || e.isVideoTexture)) return e.image;
        }
        get animation() {
          let e = this[as];
          if (e && e.isCanvasTexture && e.animation) return e.animation;
        }
        get type() {
          return null != this.uri ? "external" : "embedded";
        }
        set name(e) {
          for (let t of this[an]) t.image.name = e;
        }
        update() {
          let e = this[as];
          e &&
            e.isCanvasTexture &&
            !e.animation &&
            ((this[as].needsUpdate = !0), this[n7]());
        }
        async createThumbnail(e, t) {
          let i = new en.Z58();
          at.map = this[as];
          let r = new en.eaF(ai, at);
          i.add(r);
          let s = new en.qUd(-1, 1, 1, -1, 0, 1),
            { threeRenderer: n } = n6.singleton,
            a = new en.nWS(e, t);
          n.setRenderTarget(a), n.render(i, s), n.setRenderTarget(null);
          let o = new Uint8Array(e * t * 4);
          n.readRenderTargetPixels(a, 0, 0, e, t, o),
            (ok.width = e),
            (ok.height = t);
          let A = ok.getContext("2d"),
            l = A.createImageData(e, t);
          return (
            l.data.set(o),
            A.putImageData(l, 0, 0),
            new Promise(async (e, t) => {
              ok.toBlob((i) => {
                if (!i) return t("Failed to capture thumbnail.");
                e(URL.createObjectURL(i));
              }, "image/png");
            })
          );
        }
      }
      !(function (e) {
        (e[(e.Nearest = 9728)] = "Nearest"),
          (e[(e.Linear = 9729)] = "Linear"),
          (e[(e.NearestMipmapNearest = 9984)] = "NearestMipmapNearest"),
          (e[(e.LinearMipmapNearest = 9985)] = "LinearMipmapNearest"),
          (e[(e.NearestMipmapLinear = 9986)] = "NearestMipmapLinear"),
          (e[(e.LinearMipmapLinear = 9987)] = "LinearMipmapLinear");
      })(D || (D = {})),
        (function (e) {
          (e[(e.ClampToEdge = 33071)] = "ClampToEdge"),
            (e[(e.MirroredRepeat = 33648)] = "MirroredRepeat"),
            (e[(e.Repeat = 10497)] = "Repeat");
        })(L || (L = {}));
      let ao = new Map([
          [L.Repeat, en.GJx],
          [L.ClampToEdge, en.ghU],
          [L.MirroredRepeat, en.kTW],
        ]),
        aA = new Map([
          [en.GJx, L.Repeat],
          [en.ghU, L.ClampToEdge],
          [en.kTW, L.MirroredRepeat],
        ]),
        al = new Map([
          [D.Nearest, en.hxR],
          [D.Linear, en.k6q],
          [D.NearestMipmapNearest, en.pHI],
          [D.LinearMipmapNearest, en.kRr],
          [D.NearestMipmapLinear, en.Cfg],
          [D.LinearMipmapLinear, en.$_I],
        ]),
        ah = new Map([
          [en.hxR, D.Nearest],
          [en.k6q, D.Linear],
          [en.pHI, D.NearestMipmapNearest],
          [en.kRr, D.LinearMipmapNearest],
          [en.Cfg, D.NearestMipmapLinear],
          [en.$_I, D.LinearMipmapLinear],
        ]),
        ac = new Map([
          [D.Nearest, en.hxR],
          [D.Linear, en.k6q],
        ]),
        au = new Map([
          [en.hxR, D.Nearest],
          [en.k6q, D.Linear],
        ]),
        ag = (e) => ah.has(e),
        ad = (e) => au.has(e),
        ap = (e) => aA.has(e),
        am = (e, t) => {
          switch (e) {
            case "minFilter":
              return ag(t);
            case "magFilter":
              return ad(t);
            case "wrapS":
            case "wrapT":
              return ap(t);
            case "rotation":
            case "repeat":
            case "offset":
              return !0;
            default:
              throw Error(`Cannot configure property "${e}" on Sampler`);
          }
        },
        af = Symbol("threeTexture"),
        aI = Symbol("threeTextures"),
        aE = Symbol("setProperty");
      class aC extends ae {
        get [af]() {
          var e;
          return null === (e = this[n9]) || void 0 === e
            ? void 0
            : e.values().next().value;
        }
        get [aI]() {
          return this[n9];
        }
        constructor(e, t) {
          super(e, new Set(t ? [t] : []));
        }
        get name() {
          return this[af].name || "";
        }
        get minFilter() {
          return ah.get(this[af].minFilter);
        }
        get magFilter() {
          return au.get(this[af].magFilter);
        }
        get wrapS() {
          return aA.get(this[af].wrapS);
        }
        get wrapT() {
          return aA.get(this[af].wrapT);
        }
        get rotation() {
          return this[af].rotation;
        }
        get scale() {
          return Aa(this[af].repeat);
        }
        get offset() {
          return Aa(this[af].offset);
        }
        setMinFilter(e) {
          this[aE]("minFilter", al.get(e));
        }
        setMagFilter(e) {
          this[aE]("magFilter", ac.get(e));
        }
        setWrapS(e) {
          this[aE]("wrapS", ao.get(e));
        }
        setWrapT(e) {
          this[aE]("wrapT", ao.get(e));
        }
        setRotation(e) {
          null == e && (e = 0), this[aE]("rotation", e);
        }
        setScale(e) {
          null == e && (e = { u: 1, v: 1 }),
            this[aE]("repeat", new en.I9Y(e.u, e.v));
        }
        setOffset(e) {
          null == e && (e = { u: 0, v: 0 }),
            this[aE]("offset", new en.I9Y(e.u, e.v));
        }
        [aE](e, t) {
          if (am(e, t))
            for (let i of this[aI]) (i[e] = t), (i.needsUpdate = !0);
          this[n7]();
        }
      }
      let ay = Symbol("image"),
        aB = Symbol("sampler"),
        aw = Symbol("threeTexture");
      class av extends ae {
        constructor(e, t) {
          super(e, new Set(t ? [t] : [])),
            (this[aB] = new aC(e, t)),
            (this[ay] = new aa(e, t));
        }
        get [aw]() {
          var e;
          return null === (e = this[n9]) || void 0 === e
            ? void 0
            : e.values().next().value;
        }
        get name() {
          return this[aw].name || "";
        }
        set name(e) {
          for (let t of this[n9]) t.name = e;
        }
        get sampler() {
          return this[aB];
        }
        get source() {
          return this[ay];
        }
      }
      let aQ = Symbol("texture"),
        ab = Symbol("transform"),
        ax = Symbol("materials"),
        aS = Symbol("usage"),
        aT = Symbol("onUpdate"),
        aM = Symbol("activeVideo");
      !(function (e) {
        (e[(e.Base = 0)] = "Base"),
          (e[(e.MetallicRoughness = 1)] = "MetallicRoughness"),
          (e[(e.Normal = 2)] = "Normal"),
          (e[(e.Occlusion = 3)] = "Occlusion"),
          (e[(e.Emissive = 4)] = "Emissive"),
          (e[(e.Clearcoat = 5)] = "Clearcoat"),
          (e[(e.ClearcoatRoughness = 6)] = "ClearcoatRoughness"),
          (e[(e.ClearcoatNormal = 7)] = "ClearcoatNormal"),
          (e[(e.SheenColor = 8)] = "SheenColor"),
          (e[(e.SheenRoughness = 9)] = "SheenRoughness"),
          (e[(e.Transmission = 10)] = "Transmission"),
          (e[(e.Thickness = 11)] = "Thickness"),
          (e[(e.Specular = 12)] = "Specular"),
          (e[(e.SpecularColor = 13)] = "SpecularColor"),
          (e[(e.Iridescence = 14)] = "Iridescence"),
          (e[(e.IridescenceThickness = 15)] = "IridescenceThickness"),
          (e[(e.Anisotropy = 16)] = "Anisotropy");
      })(U || (U = {}));
      class aR {
        constructor(e, t, i, r) {
          (this[F] = null),
            (this[k] = {
              rotation: 0,
              scale: new en.I9Y(1, 1),
              offset: new en.I9Y(0, 0),
            }),
            (this[_] = !1),
            i &&
              ((this[ab].rotation = i.rotation),
              this[ab].scale.copy(i.repeat),
              this[ab].offset.copy(i.offset),
              (this[aQ] = new av(e, i))),
            (this[aT] = e),
            (this[ax] = r),
            (this[aS] = t);
        }
        get texture() {
          return this[aQ];
        }
        setTexture(e) {
          var t, i;
          let r = null != e ? e.source[as] : null,
            s = null === (t = this[aQ]) || void 0 === t ? void 0 : t.source[as];
          if (
            (null != s && s.isVideoTexture
              ? (this[aM] = !1)
              : (null === (i = this[aQ]) || void 0 === i
                  ? void 0
                  : i.source.animation) &&
                this[aQ].source.animation.removeEventListener(
                  "enterFrame",
                  this[aT]
                ),
            (this[aQ] = e),
            null != r && r.isVideoTexture)
          ) {
            let e = r.image;
            if (((this[aM] = !0), null != e.requestVideoFrameCallback)) {
              let t = () => {
                this[aM] && (this[aT](), e.requestVideoFrameCallback(t));
              };
              e.requestVideoFrameCallback(t);
            } else {
              let e = () => {
                this[aM] && (this[aT](), requestAnimationFrame(e));
              };
              requestAnimationFrame(e);
            }
          } else
            (null == e ? void 0 : e.source.animation) != null &&
              e.source.animation.addEventListener("enterFrame", this[aT]);
          let n = en.er$;
          if (this[ax])
            for (let e of this[ax]) {
              switch (this[aS]) {
                case U.Base:
                  e.map = r;
                  break;
                case U.MetallicRoughness:
                  (n = en.Zr2), (e.metalnessMap = r), (e.roughnessMap = r);
                  break;
                case U.Normal:
                  (n = en.Zr2), (e.normalMap = r);
                  break;
                case U.Occlusion:
                  (n = en.Zr2), (e.aoMap = r);
                  break;
                case U.Emissive:
                  e.emissiveMap = r;
                  break;
                case U.Clearcoat:
                  e.clearcoatMap = r;
                  break;
                case U.ClearcoatRoughness:
                  e.clearcoatRoughnessMap = r;
                  break;
                case U.ClearcoatNormal:
                  e.clearcoatNormalMap = r;
                  break;
                case U.SheenColor:
                  e.sheenColorMap = r;
                  break;
                case U.SheenRoughness:
                  e.sheenRoughnessMap = r;
                  break;
                case U.Transmission:
                  e.transmissionMap = r;
                  break;
                case U.Thickness:
                  e.thicknessMap = r;
                  break;
                case U.Specular:
                  e.specularIntensityMap = r;
                  break;
                case U.SpecularColor:
                  e.specularColorMap = r;
                  break;
                case U.Iridescence:
                  e.iridescenceMap = r;
                  break;
                case U.IridescenceThickness:
                  e.iridescenceThicknessMap = r;
                  break;
                case U.Anisotropy:
                  e.anisotropyMap = r;
              }
              e.needsUpdate = !0;
            }
          r &&
            ((r.colorSpace = n),
            (r.rotation = this[ab].rotation),
            (r.repeat = this[ab].scale),
            (r.offset = this[ab].offset)),
            this[aT]();
        }
      }
      (F = aQ), (k = ab), (_ = aM);
      let aD = Symbol("threeMaterial"),
        aL = Symbol("threeMaterials"),
        aF = Symbol("baseColorTexture"),
        ak = Symbol("metallicRoughnessTexture");
      class a_ extends ae {
        constructor(e, t) {
          super(e, t);
          let { map: i, metalnessMap: r } = t.values().next().value;
          (this[aF] = new aR(e, U.Base, i, t)),
            (this[ak] = new aR(e, U.MetallicRoughness, r, t));
        }
        get [aL]() {
          return this[n9];
        }
        get [aD]() {
          var e;
          return null === (e = this[n9]) || void 0 === e
            ? void 0
            : e.values().next().value;
        }
        get baseColorFactor() {
          let e = [0, 0, 0, this[aD].opacity];
          return this[aD].color.toArray(e), e;
        }
        get metallicFactor() {
          return this[aD].metalness;
        }
        get roughnessFactor() {
          return this[aD].roughness;
        }
        get baseColorTexture() {
          return this[aF];
        }
        get metallicRoughnessTexture() {
          return this[ak];
        }
        setBaseColorFactor(e) {
          let t = new en.Q1f();
          for (let i of (e instanceof Array ? t.fromArray(e) : t.set(e),
          this[aL]))
            i.color.set(t),
              e instanceof Array && e.length > 3
                ? (i.opacity = e[3])
                : ((e = [0, 0, 0, i.opacity]), t.toArray(e));
          this[n7]();
        }
        setMetallicFactor(e) {
          for (let t of this[aL]) t.metalness = e;
          this[n7]();
        }
        setRoughnessFactor(e) {
          for (let t of this[aL]) t.roughness = e;
          this[n7]();
        }
      }
      let aU = Symbol("pbrMetallicRoughness"),
        aN = Symbol("normalTexture"),
        aP = Symbol("occlusionTexture"),
        aG = Symbol("emissiveTexture"),
        aO = Symbol("backingThreeMaterial"),
        aH = Symbol("applyAlphaCutoff"),
        aq = Symbol("getAlphaMode"),
        aV = Symbol("lazyLoadGLTFInfo"),
        aY = Symbol("initialize"),
        aJ = Symbol("getLoadedMaterial"),
        aK = Symbol("ensureMaterialIsLoaded"),
        az = Symbol("gltfIndex"),
        a$ = Symbol("setActive"),
        aj = Symbol("variantIndices"),
        aW = Symbol("isActive"),
        aX = Symbol("modelVariants"),
        aZ = Symbol("name"),
        a0 = Symbol("pbrTextures");
      class a1 extends ae {
        constructor(e, t, i, r, s, n, a) {
          super(e, s),
            (this[N] = new Set()),
            (this[P] = new Map()),
            (this[az] = t),
            (this[aW] = i),
            (this[aX] = r),
            (this[aZ] = n),
            null == a ? this[aY]() : (this[aV] = a);
        }
        get [((N = aj), (P = a0), aO)]() {
          return this[n9].values().next().value;
        }
        [aY]() {
          let e = this[n7],
            t = this[n9];
          this[aU] = new a_(e, t);
          let {
            normalMap: i,
            aoMap: r,
            emissiveMap: s,
          } = t.values().next().value;
          (this[aN] = new aR(e, U.Normal, i, t)),
            (this[aP] = new aR(e, U.Occlusion, r, t)),
            (this[aG] = new aR(e, U.Emissive, s, t));
          let n = (i) => {
            this[a0].set(i, new aR(e, i, null, t));
          };
          n(U.Clearcoat),
            n(U.ClearcoatRoughness),
            n(U.ClearcoatNormal),
            n(U.SheenColor),
            n(U.SheenRoughness),
            n(U.Transmission),
            n(U.Thickness),
            n(U.Specular),
            n(U.SpecularColor),
            n(U.Iridescence),
            n(U.IridescenceThickness),
            n(U.Anisotropy);
        }
        async [aJ]() {
          if (null != this[aV]) {
            let e = await this[aV].doLazyLoad();
            return (
              this[aY](),
              (this[aV] = void 0),
              (this.ensureLoaded = async () => {}),
              e
            );
          }
          return null;
        }
        colorFromRgb(e) {
          let t = new en.Q1f();
          return e instanceof Array ? t.fromArray(e) : t.set(e), t;
        }
        [aK]() {
          if (null != this[aV])
            throw Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`);
        }
        async ensureLoaded() {
          await this[aJ]();
        }
        get isLoaded() {
          return null == this[aV];
        }
        get isActive() {
          return this[aW];
        }
        [a$](e) {
          this[aW] = e;
        }
        get name() {
          return this[aZ] || "";
        }
        set name(e) {
          if (((this[aZ] = e), null != this[n9]))
            for (let t of this[n9]) t.name = e;
        }
        get pbrMetallicRoughness() {
          return this[aK](), this[aU];
        }
        get normalTexture() {
          return this[aK](), this[aN];
        }
        get occlusionTexture() {
          return this[aK](), this[aP];
        }
        get emissiveTexture() {
          return this[aK](), this[aG];
        }
        get emissiveFactor() {
          return this[aK](), this[aO].emissive.toArray();
        }
        get index() {
          return this[az];
        }
        hasVariant(e) {
          let t = this[aX].get(e);
          return null != t && this[aj].has(t.index);
        }
        setEmissiveFactor(e) {
          this[aK]();
          let t = this.colorFromRgb(e);
          for (let e of this[n9]) e.emissive.set(t);
          this[n7]();
        }
        [aq]() {
          return this[aO].transparent
            ? "BLEND"
            : this[aO].alphaTest > 0
            ? "MASK"
            : "OPAQUE";
        }
        [aH]() {
          for (let e of (this[aK](), this[n9]))
            "MASK" === this[aq]()
              ? void 0 == e.alphaTest && (e.alphaTest = 0.5)
              : (e.alphaTest = void 0),
              (e.needsUpdate = !0);
        }
        setAlphaCutoff(e) {
          for (let t of (this[aK](), this[n9]))
            (t.alphaTest = e), (t.needsUpdate = !0);
          this[aH](), this[n7]();
        }
        getAlphaCutoff() {
          return this[aK](), this[aO].alphaTest;
        }
        setDoubleSided(e) {
          for (let t of (this[aK](), this[n9]))
            (t.side = e ? en.$EB : en.hB5), (t.needsUpdate = !0);
          this[n7]();
        }
        getDoubleSided() {
          return this[aK](), this[aO].side == en.$EB;
        }
        setAlphaMode(e) {
          this[aK]();
          let t = (e, t) => {
            (e.transparent = t), (e.depthWrite = !t);
          };
          for (let i of this[n9])
            t(i, "BLEND" === e),
              "MASK" === e ? (i.alphaTest = 0.5) : (i.alphaTest = void 0),
              (i.needsUpdate = !0);
          this[n7]();
        }
        getAlphaMode() {
          return this[aK](), this[aq]();
        }
        get emissiveStrength() {
          return this[aK](), this[aO].emissiveIntensity;
        }
        setEmissiveStrength(e) {
          for (let t of (this[aK](), this[n9])) t.emissiveIntensity = e;
          this[n7]();
        }
        get clearcoatFactor() {
          return this[aK](), this[aO].clearcoat;
        }
        get clearcoatRoughnessFactor() {
          return this[aK](), this[aO].clearcoatRoughness;
        }
        get clearcoatTexture() {
          return this[aK](), this[a0].get(U.Clearcoat);
        }
        get clearcoatRoughnessTexture() {
          return this[aK](), this[a0].get(U.ClearcoatRoughness);
        }
        get clearcoatNormalTexture() {
          return this[aK](), this[a0].get(U.ClearcoatNormal);
        }
        get clearcoatNormalScale() {
          return this[aK](), this[aO].clearcoatNormalScale.x;
        }
        setClearcoatFactor(e) {
          for (let t of (this[aK](), this[n9])) t.clearcoat = e;
          this[n7]();
        }
        setClearcoatRoughnessFactor(e) {
          for (let t of (this[aK](), this[n9])) t.clearcoatRoughness = e;
          this[n7]();
        }
        setClearcoatNormalScale(e) {
          for (let t of (this[aK](), this[n9]))
            t.clearcoatNormalScale = new en.I9Y(e, e);
          this[n7]();
        }
        get ior() {
          return this[aK](), this[aO].ior;
        }
        setIor(e) {
          for (let t of (this[aK](), this[n9])) t.ior = e;
          this[n7]();
        }
        get sheenColorFactor() {
          return this[aK](), this[aO].sheenColor.toArray();
        }
        get sheenColorTexture() {
          return this[aK](), this[a0].get(U.SheenColor);
        }
        get sheenRoughnessFactor() {
          return this[aK](), this[aO].sheenRoughness;
        }
        get sheenRoughnessTexture() {
          return this[aK](), this[a0].get(U.SheenRoughness);
        }
        setSheenColorFactor(e) {
          this[aK]();
          let t = this.colorFromRgb(e);
          for (let e of this[n9]) e.sheenColor.set(t), (e.sheen = 1);
          this[n7]();
        }
        setSheenRoughnessFactor(e) {
          for (let t of (this[aK](), this[n9]))
            (t.sheenRoughness = e), (t.sheen = 1);
          this[n7]();
        }
        get transmissionFactor() {
          return this[aK](), this[aO].transmission;
        }
        get transmissionTexture() {
          return this[aK](), this[a0].get(U.Transmission);
        }
        setTransmissionFactor(e) {
          for (let t of (this[aK](), this[n9])) t.transmission = e;
          this[n7]();
        }
        get thicknessFactor() {
          return this[aK](), this[aO].thickness;
        }
        get thicknessTexture() {
          return this[aK](), this[a0].get(U.Thickness);
        }
        get attenuationDistance() {
          return this[aK](), this[aO].attenuationDistance;
        }
        get attenuationColor() {
          return this[aK](), this[aO].attenuationColor.toArray();
        }
        setThicknessFactor(e) {
          for (let t of (this[aK](), this[n9])) t.thickness = e;
          this[n7]();
        }
        setAttenuationDistance(e) {
          for (let t of (this[aK](), this[n9])) t.attenuationDistance = e;
          this[n7]();
        }
        setAttenuationColor(e) {
          this[aK]();
          let t = this.colorFromRgb(e);
          for (let e of this[n9]) e.attenuationColor.set(t);
          this[n7]();
        }
        get specularFactor() {
          return this[aK](), this[aO].specularIntensity;
        }
        get specularTexture() {
          return this[aK](), this[a0].get(U.Specular);
        }
        get specularColorFactor() {
          return this[aK](), this[aO].specularColor.toArray();
        }
        get specularColorTexture() {
          return this[aK](), this[a0].get(U.SheenColor);
        }
        setSpecularFactor(e) {
          for (let t of (this[aK](), this[n9])) t.specularIntensity = e;
          this[n7]();
        }
        setSpecularColorFactor(e) {
          this[aK]();
          let t = this.colorFromRgb(e);
          for (let e of this[n9]) e.specularColor.set(t);
          this[n7]();
        }
        get iridescenceFactor() {
          return this[aK](), this[aO].iridescence;
        }
        get iridescenceTexture() {
          return this[aK](), this[a0].get(U.Iridescence);
        }
        get iridescenceIor() {
          return this[aK](), this[aO].iridescenceIOR;
        }
        get iridescenceThicknessMinimum() {
          return this[aK](), this[aO].iridescenceThicknessRange[0];
        }
        get iridescenceThicknessMaximum() {
          return this[aK](), this[aO].iridescenceThicknessRange[1];
        }
        get iridescenceThicknessTexture() {
          return this[aK](), this[a0].get(U.IridescenceThickness);
        }
        setIridescenceFactor(e) {
          for (let t of (this[aK](), this[n9])) t.iridescence = e;
          this[n7]();
        }
        setIridescenceIor(e) {
          for (let t of (this[aK](), this[n9])) t.iridescenceIOR = e;
          this[n7]();
        }
        setIridescenceThicknessMinimum(e) {
          for (let t of (this[aK](), this[n9]))
            t.iridescenceThicknessRange[0] = e;
          this[n7]();
        }
        setIridescenceThicknessMaximum(e) {
          for (let t of (this[aK](), this[n9]))
            t.iridescenceThicknessRange[1] = e;
          this[n7]();
        }
        get anisotropyStrength() {
          return this[aK](), this[aO].anisotropy;
        }
        get anisotropyRotation() {
          return this[aK](), this[aO].anisotropyRotation;
        }
        get anisotropyTexture() {
          return this[aK](), this[a0].get(U.Anisotropy);
        }
        setAnisotropyStrength(e) {
          for (let t of (this[aK](), this[n9])) t.anisotropy = e;
          this[n7]();
        }
        setAnisotropyRotation(e) {
          for (let t of (this[aK](), this[n9])) t.anisotropyRotation = e;
          this[n7]();
        }
      }
      class a2 {
        constructor(e) {
          (this.name = ""), (this.children = []), (this.name = e);
        }
      }
      class a3 extends a2 {
        constructor(e, t, i, r) {
          super(e.name),
            (this.materials = new Map()),
            (this.variantToMaterialMap = new Map()),
            (this.initialMaterialIdx = 0),
            (this.activeMaterialIdx = 0),
            (this.mesh = e);
          let { gltf: s, threeGLTF: n, threeObjectMap: a } = r;
          (this.parser = n.parser),
            (this.modelVariants = i),
            (this.mesh.userData.variantData = i);
          let o = a.get(e.material);
          null != o.materials
            ? (this.initialMaterialIdx = this.activeMaterialIdx = o.materials)
            : console.error(
                `Primitive (${e.name}) missing initial material reference.`
              );
          let A = e.userData.associations || {};
          if (null == A.meshes) {
            console.error("Mesh is missing primitive index association");
            return;
          }
          let l = ((s.meshes || [])[A.meshes].primitives || [])[A.primitives];
          if (null == l) {
            console.error("Mesh primitive definition is missing.");
            return;
          }
          if (null != l.material) this.materials.set(l.material, t[l.material]);
          else {
            let e = t.findIndex((e) => "Default" === e.name);
            e >= 0
              ? this.materials.set(e, t[e])
              : console.warn("gltfPrimitive has no material!");
          }
          if (l.extensions && l.extensions.KHR_materials_variants) {
            let e = l.extensions.KHR_materials_variants,
              r = n.parser.json.extensions.KHR_materials_variants.variants;
            for (let s of e.mappings) {
              let e = t[s.material];
              for (let t of (this.materials.set(s.material, e), s.variants)) {
                let { name: s } = r[t];
                this.variantToMaterialMap.set(t, e),
                  e[aj].add(t),
                  i.has(s) || i.set(s, { name: s, index: t });
              }
            }
          }
        }
        async setActiveMaterial(e) {
          let t = this.materials.get(e);
          if (e !== this.activeMaterialIdx) {
            let i = t[n9],
              r = await t[aJ]();
            null != r
              ? (this.mesh.material = r)
              : (this.mesh.material = i.values().next().value),
              this.parser.assignFinalMaterial(this.mesh),
              i.add(this.mesh.material),
              (this.activeMaterialIdx = e);
          }
          return this.mesh.material;
        }
        getActiveMaterial() {
          return this.materials.get(this.activeMaterialIdx);
        }
        getMaterial(e) {
          return this.materials.get(e);
        }
        async enableVariant(e) {
          if (null == e) return this.setActiveMaterial(this.initialMaterialIdx);
          if (null != this.variantToMaterialMap && this.modelVariants.has(e)) {
            let t = this.modelVariants.get(e);
            return this.enableVariantHelper(t.index);
          }
          return null;
        }
        async enableVariantHelper(e) {
          if (null != this.variantToMaterialMap && null != e) {
            let t = this.variantToMaterialMap.get(e);
            if (null != t) return this.setActiveMaterial(t.index);
          }
          return null;
        }
        async instantiateVariants() {
          if (null != this.variantToMaterialMap)
            for (let e of this.variantToMaterialMap.keys()) {
              let t = this.mesh.userData.variantMaterials.get(e);
              if (null != t.material) continue;
              let i = await this.enableVariantHelper(e);
              null != i && (t.material = i);
            }
        }
        get variantInfo() {
          return this.variantToMaterialMap;
        }
        addVariant(e, t) {
          if (!this.ensureVariantIsUnused(t)) return !1;
          this.modelVariants.has(t) ||
            this.modelVariants.set(t, {
              name: t,
              index: this.modelVariants.size,
            });
          let i = this.modelVariants.get(t).index;
          return (
            e[aj].add(i),
            this.variantToMaterialMap.set(i, e),
            this.materials.set(e.index, e),
            this.updateVariantUserData(i, e),
            !0
          );
        }
        deleteVariant(e) {
          if (this.variantInfo.has(e)) {
            this.variantInfo.delete(e);
            let t = this.mesh.userData.variantMaterials;
            null != t && t.delete(e);
          }
        }
        updateVariantUserData(e, t) {
          t[aj].add(e),
            (this.mesh.userData.variantData = this.modelVariants),
            (this.mesh.userData.variantMaterials =
              this.mesh.userData.variantMaterials || new Map()),
            this.mesh.userData.variantMaterials.set(e, {
              material: t[n9].values().next().value,
              gltfMaterialIndex: t.index,
            });
        }
        ensureVariantIsUnused(e) {
          let t = this.modelVariants.get(e);
          return (
            !(null != t && this.variantInfo.has(t.index)) ||
            (console.warn(
              `Primitive cannot add variant '${e}' for this material, it already exists.`
            ),
            !1)
          );
        }
      }
      let a8 = Symbol("materials"),
        a4 = Symbol("hierarchy"),
        a5 = Symbol("roots"),
        a6 = Symbol("primitives");
      Symbol("loadVariant");
      let a9 = Symbol("prepareVariantsForExport"),
        a7 = Symbol("switchVariant"),
        oe = Symbol("materialFromPoint"),
        ot = Symbol("nodeFromPoint"),
        oi = Symbol("nodeFromIndex"),
        or = Symbol("variantData"),
        os = Symbol("availableVariants"),
        on = Symbol("modelOnUpdate"),
        oa = Symbol("cloneMaterial");
      class oo {
        constructor(e, t, i, r) {
          (this.gltf = e),
            (this.gltfElementMap = t),
            (this.mapKey = i),
            (this.doLazyLoad = r);
        }
      }
      class oA {
        constructor(e, t = () => {}) {
          (this[G] = []),
            (this[O] = []),
            (this[H] = []),
            (this[q] = []),
            (this[V] = () => {}),
            (this[Y] = new Map()),
            (this[on] = t);
          let { gltf: i, threeGLTF: r, gltfElementMap: s } = e;
          for (let [e, n] of i.materials.entries()) {
            let a = s.get(n);
            if (null != a) this[a8].push(new a1(t, e, !0, this[or], a, n.name));
            else {
              let a = (i.materials || [])[e],
                o = new Set();
              s.set(a, o);
              let A = async () => {
                let t = await r.parser.getDependency("material", e);
                return o.add(t), t;
              };
              this[a8].push(
                new a1(t, e, !1, this[or], o, n.name, new oo(i, s, a, A))
              );
            }
          }
          let n = new Map(),
            a = [];
          for (let e of r.scene.children) a.push(e);
          for (; a.length > 0; ) {
            let t = a.pop(),
              i = null;
            t instanceof en.eaF
              ? ((i = new a3(t, this.materials, this[or], e)), this[a6].push(i))
              : (i = new a2(t.name));
            let r = n.get(t);
            for (let e of (null != r ? r.children.push(i) : this[a5].push(i),
            this[a4].push(i),
            t.children))
              a.push(e), n.set(t, i);
          }
        }
        get materials() {
          return this[a8];
        }
        [((G = a8), (O = a4), (H = a5), (q = a6), (V = on), (Y = or), os)]() {
          let e = Array.from(this[or].values());
          return e.sort((e, t) => e.index - t.index), e.map((e) => e.name);
        }
        getMaterialByName(e) {
          let t = this[a8].filter((t) => t.name === e);
          return t.length > 0 ? t[0] : null;
        }
        [oi](e, t) {
          let i = this[a4].find((i) => {
            if (i instanceof a3) {
              let { meshes: r, primitives: s } = i.mesh.userData.associations;
              if (r == e && s == t) return !0;
            }
            return !1;
          });
          return null == i ? null : i;
        }
        [ot](e) {
          return this[a4].find((t) => t instanceof a3 && t.mesh === e.object);
        }
        [oe](e) {
          return this[ot](e).getActiveMaterial();
        }
        async [a7](e) {
          for (let t of this[a6]) await t.enableVariant(e);
          for (let e of this.materials) e[a$](!1);
          for (let e of this[a6])
            this.materials[e.getActiveMaterial().index][a$](!0);
        }
        async [a9]() {
          let e = [];
          for (let t of this[a6]) e.push(t.instantiateVariants());
          await Promise.all(e);
        }
        [oa](e, t) {
          let i = this.materials[e];
          i.isLoaded ||
            console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);
          let r = i[n9],
            s = new Set();
          for (let [e, i] of r.entries()) {
            let n = i.clone();
            (n.name = t + (r.size > 1 ? "_inst" + e : "")), s.add(n);
          }
          let n = new a1(this[on], this[a8].length, !1, this[or], s, t);
          return this[a8].push(n), n;
        }
        createMaterialInstanceForVariant(e, t, i, r = !0) {
          let s = null;
          for (let r of this[a6]) {
            let n = this[or].get(i);
            (null != n && r.variantInfo.has(n.index)) ||
              null == r.getMaterial(e) ||
              (this.hasVariant(i) || this.createVariant(i),
              null == s && (s = this[oa](e, t)),
              r.addVariant(s, i));
          }
          if (r && null != s)
            for (let t of (s[a$](!0), this.materials[e][a$](!1), this[a6]))
              t.enableVariant(i);
          return s;
        }
        createVariant(e) {
          this[or].has(e)
            ? console.warn(`Variant '${e}'' already exists`)
            : this[or].set(e, { name: e, index: this[or].size });
        }
        hasVariant(e) {
          return this[or].has(e);
        }
        setMaterialToVariant(e, t) {
          if (null == this[os]().find((e) => e === t)) {
            console.warn(
              `Can't add material to '${t}', the variant does not exist.'`
            );
            return;
          }
          if (e < 0 || e >= this.materials.length) {
            console.error(
              "setMaterialToVariant(): materialIndex is out of bounds."
            );
            return;
          }
          for (let i of this[a6]) {
            let r = i.getMaterial(e);
            null != r && i.addVariant(r, t);
          }
        }
        updateVariantName(e, t) {
          let i = this[or].get(e);
          null != i && ((i.name = t), this[or].set(t, i), this[or].delete(e));
        }
        deleteVariant(e) {
          let t = this[or].get(e);
          if (null != t) {
            for (let i of this.materials)
              i.hasVariant(e) && i[aj].delete(t.index);
            for (let e of this[a6]) e.deleteVariant(t.index);
            this[or].delete(e);
          }
        }
      }
      var ol = function (e, t, i, r) {
        var s,
          n = arguments.length,
          a =
            n < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (s = e[o]) &&
              (a = (n < 3 ? s(a) : n > 3 ? s(t, i, a) : s(t, i)) || a);
        return n > 3 && a && Object.defineProperty(t, i, a), a;
      };
      let oh = Symbol("currentGLTF"),
        oc = Symbol("originalGltfJson"),
        ou = Symbol("model"),
        og = Symbol("getOnUpdateMethod"),
        od = Symbol("buildTexture");
      class op extends en.eaF {
        constructor() {
          super(void 0, new en.V9B({ depthWrite: !1 })),
            (this.height = 0),
            (this.radius = 0),
            (this.resolution = 0),
            (this.userData.noHit = !0);
        }
        get map() {
          return this.material.map;
        }
        set map(e) {
          this.material.map = e;
        }
        isUsable() {
          return (
            this.height > 0 &&
            this.radius > 0 &&
            null != this.geometry &&
            null != this.map
          );
        }
        updateGeometry(e = this.height, t = this.radius, i = 128) {
          (e != this.height || t != this.radius || i != this.resolution) &&
            ((this.height = e),
            (this.radius = t),
            (this.resolution = i),
            e > 0 &&
              t > 0 &&
              (this.geometry.dispose(),
              (this.geometry = (function (e, t, i) {
                let r = new en.Gu$(t, 2 * i, i);
                r.scale(1, 1, -1);
                let s = r.getAttribute("position"),
                  n = new en.Pq0();
                for (let t = 0; t < s.count; ++t)
                  if ((n.fromBufferAttribute(s, t), n.y < 0)) {
                    let i = -(3 * e) / 2,
                      r = n.y < i ? -e / n.y : 1 - (n.y * n.y) / (3 * i * i);
                    n.multiplyScalar(r), n.toArray(s.array, 3 * t);
                  }
                return (s.needsUpdate = !0), r;
              })(e, t, i))));
        }
      }
      let om = new en.Pq0(),
        of = new en.Pq0(),
        oI = new en.Pq0(),
        oE = new en.dwI(),
        oC = new en.lMl(),
        oy = new en.PTz();
      class oB extends i1 {
        constructor(e) {
          super(document.createElement("div")),
            (this.normal = new en.Pq0(0, 1, 0)),
            (this.initialized = !1),
            (this.referenceCount = 1),
            (this.pivot = document.createElement("div")),
            (this.slot = document.createElement("slot")),
            this.element.classList.add("annotation-wrapper"),
            (this.slot.name = e.name),
            this.element.appendChild(this.pivot),
            this.pivot.appendChild(this.slot),
            this.updatePosition(e.position),
            this.updateNormal(e.normal),
            (this.surface = e.surface);
        }
        get facingCamera() {
          return !this.element.classList.contains("hide");
        }
        show() {
          (this.facingCamera && this.initialized) || this.updateVisibility(!0);
        }
        hide() {
          (this.facingCamera || !this.initialized) && this.updateVisibility(!1);
        }
        increment() {
          this.referenceCount++;
        }
        decrement() {
          return (
            this.referenceCount > 0 && --this.referenceCount,
            0 === this.referenceCount
          );
        }
        updatePosition(e) {
          if (null == e) return;
          let t = rN(e)[0].terms;
          for (let e = 0; e < 3; ++e)
            this.position.setComponent(e, r$(t[e]).number);
          this.updateMatrixWorld();
        }
        updateNormal(e) {
          if (null == e) return;
          let t = rN(e)[0].terms;
          for (let e = 0; e < 3; ++e) this.normal.setComponent(e, t[e].number);
        }
        updateSurface() {
          let { mesh: e, tri: t, bary: i } = this;
          if (null == e || null == t || null == i) return;
          e.getVertexPosition(t.x, om),
            e.getVertexPosition(t.y, of),
            e.getVertexPosition(t.z, oI),
            om.toArray(oE.elements, 0),
            of.toArray(oE.elements, 3),
            oI.toArray(oE.elements, 6),
            this.position.copy(i).applyMatrix3(oE);
          let r = this.parent;
          r.worldToLocal(e.localToWorld(this.position)),
            oC.set(om, of, oI),
            oC.getNormal(this.normal).transformDirection(e.matrixWorld);
          let s = r.parent;
          oy.setFromAxisAngle(om.set(0, 1, 0), -s.rotation.y),
            this.normal.applyQuaternion(oy);
        }
        orient(e) {
          this.pivot.style.transform = `rotate(${e}rad)`;
        }
        updateVisibility(e) {
          this.element.classList.toggle("hide", !e),
            this.slot.assignedNodes().forEach((t) => {
              if (t.nodeType !== Node.ELEMENT_NODE) return;
              let i = t.dataset.visibilityAttribute;
              if (null != i) {
                let r = `data-${i}`;
                t.toggleAttribute(r, e);
              }
              t.dispatchEvent(
                new CustomEvent("hotspot-visibility", {
                  detail: { visible: e },
                })
              );
            }),
            (this.initialized = !0);
        }
      }
      let ow = {
          name: "HorizontalBlurShader",
          uniforms: { tDiffuse: { value: null }, h: { value: 1 / 512 } },
          vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
          fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`,
        },
        ov = {
          name: "VerticalBlurShader",
          uniforms: { tDiffuse: { value: null }, v: { value: 1 / 512 } },
          vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
          fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`,
        };
      class oQ extends en.B69 {
        constructor(e, t, i) {
          super(),
            (this.camera = new en.qUd()),
            (this.renderTarget = null),
            (this.renderTargetBlur = null),
            (this.depthMaterial = new en.CSG()),
            (this.horizontalBlurMaterial = new en.BKk(ow)),
            (this.verticalBlurMaterial = new en.BKk(ov)),
            (this.intensity = 0),
            (this.softness = 1),
            (this.boundingBox = new en.NRn()),
            (this.size = new en.Pq0()),
            (this.maxDimension = 0),
            (this.isAnimated = !1),
            (this.needsUpdate = !1);
          let { camera: r } = this;
          (r.rotation.x = Math.PI / 2),
            (r.left = -0.5),
            (r.right = 0.5),
            (r.bottom = -0.5),
            (r.top = 0.5),
            this.add(r);
          let s = new en.bdM(),
            n = new en.V9B({ opacity: 1, transparent: !0, side: en.hsX });
          (this.floor = new en.eaF(s, n)),
            (this.floor.userData.noHit = !0),
            r.add(this.floor),
            (this.blurPlane = new en.eaF(s)),
            (this.blurPlane.visible = !1),
            r.add(this.blurPlane),
            e.target.add(this),
            (this.depthMaterial.onBeforeCompile = function (e) {
              e.fragmentShader = e.fragmentShader.replace(
                "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );",
                "gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );"
              );
            }),
            (this.horizontalBlurMaterial.depthTest = !1),
            (this.verticalBlurMaterial.depthTest = !1),
            this.setScene(e, t, i);
        }
        setScene(e, t, i) {
          let { boundingBox: r, size: s, rotation: n, position: a } = this;
          if (
            ((this.isAnimated = e.animationNames.length > 0),
            this.boundingBox.copy(e.boundingBox),
            this.size.copy(e.size),
            (this.maxDimension =
              Math.max(s.x, s.y, s.z) * (this.isAnimated ? 2 : 1)),
            this.boundingBox.getCenter(a),
            "back" === i)
          ) {
            let { min: e, max: t } = r;
            ([e.y, e.z] = [e.z, e.y]),
              ([t.y, t.z] = [t.z, t.y]),
              ([s.y, s.z] = [s.z, s.y]),
              (n.x = Math.PI / 2),
              (n.y = Math.PI);
          } else (n.x = 0), (n.y = 0);
          if (this.isAnimated) {
            let e = r.min.y,
              t = r.max.y;
            (s.y = this.maxDimension),
              r.expandByVector(
                s.subScalar(this.maxDimension).multiplyScalar(-0.5)
              ),
              (r.min.y = e),
              (r.max.y = t),
              s.set(this.maxDimension, t - e, this.maxDimension);
          }
          "bottom" === i ? (a.y = r.min.y) : (a.z = r.min.y),
            this.setSoftness(t);
        }
        setSoftness(e) {
          this.softness = e;
          let { size: t, camera: i } = this,
            r = this.isAnimated ? 2 : 1,
            s = r * Math.pow(2, 9 - 3 * e);
          this.setMapSize(s);
          let n = t.y / 2,
            a = t.y * r;
          (i.near = 0),
            (i.far = (1 - e) * a + e * n),
            (this.depthMaterial.opacity = 1 / e),
            i.updateProjectionMatrix(),
            this.setIntensity(this.intensity),
            this.setOffset(0);
        }
        setMapSize(e) {
          let { size: t } = this;
          this.isAnimated && (e *= 2);
          let i = Math.floor(t.x > t.z ? e : (e * t.x) / t.z),
            r = Math.floor(t.x > t.z ? (e * t.z) / t.x : e),
            s = 10 + i,
            n = 10 + r;
          if (
            (null != this.renderTarget &&
              (this.renderTarget.width !== s ||
                this.renderTarget.height !== n) &&
              (this.renderTarget.dispose(),
              (this.renderTarget = null),
              this.renderTargetBlur.dispose(),
              (this.renderTargetBlur = null)),
            null == this.renderTarget)
          ) {
            let e = { format: en.GWd };
            (this.renderTarget = new en.nWS(s, n, e)),
              (this.renderTargetBlur = new en.nWS(s, n, e)),
              (this.floor.material.map = this.renderTarget.texture);
          }
          this.camera.scale.set(t.x * (1 + 10 / i), t.z * (1 + 10 / r), 1),
            (this.needsUpdate = !0);
        }
        setIntensity(e) {
          if (((this.intensity = e), e > 0)) {
            var t;
            (this.visible = !0),
              (this.floor.visible = !0),
              (this.floor.material.opacity =
                e * ((1 - (t = this.softness * this.softness)) * 0.3 + 1 * t));
          } else (this.visible = !1), (this.floor.visible = !1);
        }
        getIntensity() {
          return this.intensity;
        }
        setOffset(e) {
          this.floor.position.z = -e + this.gap();
        }
        gap() {
          return 0.001 * this.maxDimension;
        }
        render(e, t) {
          t.overrideMaterial = this.depthMaterial;
          let i = e.getClearAlpha();
          e.setClearAlpha(0), (this.floor.visible = !1);
          let r = e.xr.enabled;
          e.xr.enabled = !1;
          let s = e.getRenderTarget();
          e.setRenderTarget(this.renderTarget),
            e.render(t, this.camera),
            (t.overrideMaterial = null),
            (this.floor.visible = !0),
            this.blurShadow(e),
            (e.xr.enabled = r),
            e.setRenderTarget(s),
            e.setClearAlpha(i);
        }
        blurShadow(e) {
          let {
            camera: t,
            horizontalBlurMaterial: i,
            verticalBlurMaterial: r,
            renderTarget: s,
            renderTargetBlur: n,
            blurPlane: a,
          } = this;
          (a.visible = !0),
            (a.material = i),
            (i.uniforms.h.value = 1 / this.renderTarget.width),
            (i.uniforms.tDiffuse.value = this.renderTarget.texture),
            e.setRenderTarget(n),
            e.render(a, t),
            (a.material = r),
            (r.uniforms.v.value = 1 / this.renderTarget.height),
            (r.uniforms.tDiffuse.value = this.renderTargetBlur.texture),
            e.setRenderTarget(s),
            e.render(a, t),
            (a.visible = !1);
        }
        dispose() {
          null != this.renderTarget && this.renderTarget.dispose(),
            null != this.renderTargetBlur && this.renderTargetBlur.dispose(),
            this.depthMaterial.dispose(),
            this.horizontalBlurMaterial.dispose(),
            this.verticalBlurMaterial.dispose(),
            this.floor.material.dispose(),
            this.floor.geometry.dispose(),
            this.blurPlane.geometry.dispose(),
            this.removeFromParent();
        }
      }
      let ob = new en.Pq0(),
        ox = new en.Pq0(),
        oS = new en.Pq0(),
        oT = new en.tBo(),
        oM = new en.Pq0(),
        oR = new en.I9Y();
      class oD extends en.Z58 {
        constructor({ canvas: e, element: t, width: i, height: r }) {
          super(),
            (this.annotationRenderer = new i6()),
            (this.effectRenderer = null),
            (this.schemaElement = document.createElement("script")),
            (this.width = 1),
            (this.height = 1),
            (this.aspect = 1),
            (this.scaleStep = 0),
            (this.renderCount = 0),
            (this.externalRenderer = null),
            (this.camera = new en.ubm(45, 1, 0.1, 100)),
            (this.xrCamera = null),
            (this.url = null),
            (this.pivot = new en.B69()),
            (this.target = new en.B69()),
            (this.animationNames = []),
            (this.boundingBox = new en.NRn()),
            (this.boundingSphere = new en.iyt()),
            (this.size = new en.Pq0()),
            (this.idealAspect = 0),
            (this.framedFoVDeg = 0),
            (this.shadow = null),
            (this.shadowIntensity = 0),
            (this.shadowSoftness = 1),
            (this.bakedShadows = new Set()),
            (this.exposure = 1),
            (this.toneMapping = en.FV),
            (this.canScale = !0),
            (this.isDirty = !1),
            (this.goalTarget = new en.Pq0()),
            (this.targetDamperX = new rD()),
            (this.targetDamperY = new rD()),
            (this.targetDamperZ = new rD()),
            (this._currentGLTF = null),
            (this._model = null),
            (this.cancelPendingSourceChange = null),
            (this.animationsByName = new Map()),
            (this.currentAnimationAction = null),
            (this.groundedSkybox = new op()),
            (this.name = "ModelScene"),
            (this.element = t),
            (this.canvas = e),
            (this.camera = new en.ubm(45, 1, 0.1, 100)),
            (this.camera.name = "MainCamera"),
            this.add(this.pivot),
            (this.pivot.name = "Pivot"),
            this.pivot.add(this.target),
            this.setSize(i, r),
            (this.target.name = "Target"),
            (this.mixer = new en.Iw4(this.target));
          let { domElement: s } = this.annotationRenderer,
            { style: n } = s;
          (n.display = "none"),
            (n.pointerEvents = "none"),
            (n.position = "absolute"),
            (n.top = "0"),
            this.element.shadowRoot.querySelector(".default").appendChild(s),
            this.schemaElement.setAttribute("type", "application/ld+json");
        }
        get context() {
          return this.canvas.getContext("2d");
        }
        getCamera() {
          return null != this.xrCamera ? this.xrCamera : this.camera;
        }
        queueRender() {
          this.isDirty = !0;
        }
        shouldRender() {
          return this.isDirty;
        }
        hasRendered() {
          this.isDirty = !1;
        }
        forceRescale() {
          (this.scaleStep = -1), this.queueRender();
        }
        async setObject(e) {
          this.reset(),
            (this._model = e),
            this.target.add(e),
            await this.setupScene();
        }
        async setSource(e, t = () => {}) {
          let i;
          if (!e || e === this.url) {
            t(1);
            return;
          }
          if ((this.reset(), (this.url = e), null != this.externalRenderer)) {
            let e = await this.externalRenderer.load(t);
            (this.boundingSphere.radius = e.framedRadius),
              (this.idealAspect = e.fieldOfViewAspect);
            return;
          }
          null != this.cancelPendingSourceChange &&
            (this.cancelPendingSourceChange(),
            (this.cancelPendingSourceChange = null));
          try {
            i = await new Promise(async (i, r) => {
              this.cancelPendingSourceChange = () => r();
              try {
                let r = await this.element[Ae].loader.load(e, this.element, t);
                i(r);
              } catch (e) {
                r(e);
              }
            });
          } catch (e) {
            if (null == e) return;
            throw e;
          }
          (this.cancelPendingSourceChange = null),
            this.reset(),
            (this.url = e),
            (this._currentGLTF = i),
            null != i && ((this._model = i.scene), this.target.add(i.scene));
          let { animations: r } = i,
            s = new Map(),
            n = [];
          for (let e of r) s.set(e.name, e), n.push(e.name);
          (this.animations = r),
            (this.animationsByName = s),
            (this.animationNames = n),
            await this.setupScene();
        }
        async setupScene() {
          this.applyTransform(),
            this.updateBoundingBox(),
            await this.updateFraming(),
            this.updateShadow(),
            this.setShadowIntensity(this.shadowIntensity),
            this.setGroundedSkybox();
        }
        reset() {
          (this.url = null),
            (this.renderCount = 0),
            this.queueRender(),
            null != this.shadow && this.shadow.setIntensity(0),
            this.bakedShadows.clear();
          let { _model: e } = this;
          null != e && (e.removeFromParent(), (this._model = null));
          let t = this._currentGLTF;
          null != t && (t.dispose(), (this._currentGLTF = null)),
            null != this.currentAnimationAction &&
              (this.currentAnimationAction.stop(),
              (this.currentAnimationAction = null)),
            this.mixer.stopAllAction(),
            this.mixer.uncacheRoot(this);
        }
        dispose() {
          this.reset(),
            null != this.shadow &&
              (this.shadow.dispose(), (this.shadow = null)),
            (this.element[oh] = null),
            (this.element[oc] = null),
            (this.element[ou] = null);
        }
        get currentGLTF() {
          return this._currentGLTF;
        }
        setSize(e, t) {
          if (this.width !== e || this.height !== t) {
            if (
              ((this.width = Math.max(e, 1)),
              (this.height = Math.max(t, 1)),
              this.annotationRenderer.setSize(e, t),
              (this.aspect = this.width / this.height),
              null != this.externalRenderer)
            ) {
              let i = window.devicePixelRatio;
              this.externalRenderer.resize(e * i, t * i);
            }
            this.queueRender();
          }
        }
        markBakedShadow(e) {
          (e.userData.noHit = !0), this.bakedShadows.add(e);
        }
        unmarkBakedShadow(e) {
          (e.userData.noHit = !1),
            (e.visible = !0),
            this.bakedShadows.delete(e),
            this.boundingBox.expandByObject(e);
        }
        findBakedShadows(e) {
          let t = new en.NRn();
          e.traverse((e) => {
            if (!e.material || !e.material.transparent) return;
            t.setFromObject(e);
            let i = t.getSize(oM),
              r = Math.min(i.x, i.y, i.z);
            Math.max(i.x, i.y, i.z) < 100 * r || this.markBakedShadow(e);
          });
        }
        checkBakedShadows() {
          let { min: e, max: t } = this.boundingBox,
            i = new en.NRn();
          for (let r of (this.boundingBox.getSize(this.size),
          this.bakedShadows))
            i.setFromObject(r),
              (i.min.y < e.y + this.size.y / 100 &&
                i.min.x <= e.x &&
                i.max.x >= t.x &&
                i.min.z <= e.z &&
                i.max.z >= t.z) ||
                (i.min.z < e.z + this.size.z / 100 &&
                  i.min.x <= e.x &&
                  i.max.x >= t.x &&
                  i.min.y <= e.y &&
                  i.max.y >= t.y) ||
                this.unmarkBakedShadow(r);
        }
        applyTransform() {
          let { model: e } = this;
          if (null == e) return;
          let t = rN(this.element.orientation)[0].terms,
            i = r$(t[0]).number,
            r = r$(t[1]).number,
            s = r$(t[2]).number;
          e.quaternion.setFromEuler(new en.O9p(r, s, i, "YXZ"));
          let n = rN(this.element.scale)[0].terms;
          e.scale.set(n[0].number, n[1].number, n[2].number);
        }
        updateBoundingBox() {
          let { model: e } = this;
          if (null == e) return;
          this.target.remove(e), this.findBakedShadows(e);
          let t = (e, t) => e.expandByPoint(t);
          this.setBakedShadowVisibility(!1),
            (this.boundingBox = i9(e, t, new en.NRn())),
            this.boundingBox.isEmpty() &&
              (this.setBakedShadowVisibility(!0),
              this.bakedShadows.forEach((e) => this.unmarkBakedShadow(e)),
              (this.boundingBox = i9(e, t, new en.NRn()))),
            this.checkBakedShadows(),
            this.setBakedShadowVisibility(),
            this.boundingBox.getSize(this.size),
            this.target.add(e);
        }
        async updateFraming() {
          let { model: e } = this;
          if (null == e) return;
          this.target.remove(e), this.setBakedShadowVisibility(!1);
          let { center: t } = this.boundingSphere;
          this.element.requestUpdate("cameraTarget"),
            await this.element.updateComplete,
            t.copy(this.getTarget()),
            (this.boundingSphere.radius = Math.sqrt(
              i9(e, (e, i) => Math.max(e, t.distanceToSquared(i)), 0)
            )),
            (this.idealAspect =
              i9(
                e,
                (e, i) => (
                  i.sub(t),
                  Math.max(
                    e,
                    Math.sqrt(i.x * i.x + i.z * i.z) /
                      (this.idealCameraDistance() - Math.abs(i.y))
                  )
                ),
                0
              ) / Math.tan(((this.framedFoVDeg / 2) * Math.PI) / 180)),
            this.setBakedShadowVisibility(),
            this.target.add(e);
        }
        setBakedShadowVisibility(e = this.shadowIntensity <= 0) {
          for (let t of this.bakedShadows) t.visible = e;
        }
        idealCameraDistance() {
          let e = ((this.framedFoVDeg / 2) * Math.PI) / 180;
          return this.boundingSphere.radius / Math.sin(e);
        }
        adjustedFoV(e) {
          return (
            (2 *
              Math.atan(
                Math.tan(((e / 2) * Math.PI) / 180) *
                  Math.max(1, this.idealAspect / this.aspect)
              ) *
              180) /
            Math.PI
          );
        }
        getNDC(e, t) {
          if (null != this.xrCamera)
            oR.set(e / window.screen.width, t / window.screen.height);
          else {
            let i = this.element.getBoundingClientRect();
            oR.set((e - i.x) / this.width, (t - i.y) / this.height);
          }
          return oR.multiplyScalar(2).subScalar(1), (oR.y *= -1), oR;
        }
        getSize() {
          return { width: this.width, height: this.height };
        }
        setEnvironmentAndSkybox(e, t) {
          this.element[Ae].arRenderer.presentedScene !== this &&
            ((this.environment = e), this.setBackground(t), this.queueRender());
        }
        setBackground(e) {
          (this.groundedSkybox.map = e),
            this.groundedSkybox.isUsable()
              ? (this.target.add(this.groundedSkybox), (this.background = null))
              : (this.target.remove(this.groundedSkybox),
                (this.background = e));
        }
        farRadius() {
          return (
            this.boundingSphere.radius *
            (null != this.groundedSkybox.parent ? 10 : 1)
          );
        }
        setGroundedSkybox() {
          let e = r$(rN(this.element.skyboxHeight)[0].terms[0]).number,
            t = 10 * this.boundingSphere.radius;
          this.groundedSkybox.updateGeometry(e, t),
            (this.groundedSkybox.position.y =
              e - (this.shadow ? 2 * this.shadow.gap() : 0)),
            this.setBackground(this.groundedSkybox.map);
        }
        setTarget(e, t, i) {
          this.goalTarget.set(-e, -t, -i);
        }
        setTargetDamperDecayTime(e) {
          this.targetDamperX.setDecayTime(e),
            this.targetDamperY.setDecayTime(e),
            this.targetDamperZ.setDecayTime(e);
        }
        getTarget() {
          return this.goalTarget.clone().multiplyScalar(-1);
        }
        getDynamicTarget() {
          return this.target.position.clone().multiplyScalar(-1);
        }
        jumpToGoal() {
          this.updateTarget(1e4);
        }
        updateTarget(e) {
          let t = this.goalTarget,
            i = this.target.position;
          if (t.equals(i)) return !1;
          {
            let r = this.boundingSphere.radius / 10,
              { x: s, y: n, z: a } = i;
            return (
              (s = this.targetDamperX.update(s, t.x, e, r)),
              (n = this.targetDamperY.update(n, t.y, e, r)),
              (a = this.targetDamperZ.update(a, t.z, e, r)),
              (this.groundedSkybox.position.x = -s),
              (this.groundedSkybox.position.z = -a),
              this.target.position.set(s, n, a),
              this.target.updateMatrixWorld(),
              this.queueRender(),
              !0
            );
          }
        }
        pointTowards(e, t) {
          let { x: i, z: r } = this.position;
          this.yaw = Math.atan2(e - i, t - r);
        }
        get model() {
          return this._model;
        }
        set yaw(e) {
          (this.pivot.rotation.y = e),
            (this.groundedSkybox.rotation.y = -e),
            this.queueRender();
        }
        get yaw() {
          return this.pivot.rotation.y;
        }
        set animationTime(e) {
          this.mixer.setTime(e), this.queueShadowRender();
        }
        get animationTime() {
          if (null != this.currentAnimationAction) {
            let e = Math.max(this.currentAnimationAction._loopCount, 0);
            return this.currentAnimationAction.loop === en.lc7 && (1 & e) == 1
              ? this.duration - this.currentAnimationAction.time
              : this.currentAnimationAction.time;
          }
          return 0;
        }
        set animationTimeScale(e) {
          this.mixer.timeScale = e;
        }
        get animationTimeScale() {
          return this.mixer.timeScale;
        }
        get duration() {
          return null != this.currentAnimationAction &&
            this.currentAnimationAction.getClip()
            ? this.currentAnimationAction.getClip().duration
            : 0;
        }
        get hasActiveAnimation() {
          return null != this.currentAnimationAction;
        }
        playAnimation(e = null, t = 0, i = en.aMy, r = 1 / 0) {
          if (null == this._currentGLTF) return;
          let { animations: s } = this;
          if (null == s || 0 === s.length) return;
          let n = null;
          if (null != e && null == (n = this.animationsByName.get(e))) {
            let t = parseInt(e);
            !isNaN(t) && t >= 0 && t < s.length && (n = s[t]);
          }
          null == n && (n = s[0]);
          try {
            let { currentAnimationAction: e } = this,
              s = this.mixer.clipAction(n, this);
            (this.currentAnimationAction = s),
              this.element.paused
                ? this.mixer.stopAllAction()
                : ((s.paused = !1),
                  null != e && s !== e
                    ? s.crossFadeFrom(e, t, !1)
                    : this.animationTimeScale > 0 &&
                      this.animationTime == this.duration &&
                      (this.animationTime = 0)),
              s.setLoop(i, r),
              (s.enabled = !0),
              (s.clampWhenFinished = !0),
              s.play();
          } catch (e) {
            console.error(e);
          }
        }
        stopAnimation() {
          (this.currentAnimationAction = null), this.mixer.stopAllAction();
        }
        updateAnimation(e) {
          this.mixer.update(e), this.queueShadowRender();
        }
        subscribeMixerEvent(e, t) {
          this.mixer.addEventListener(e, t);
        }
        updateShadow() {
          let e = this.shadow;
          if (null != e) {
            let t = "wall" === this.element.arPlacement ? "back" : "bottom";
            e.setScene(this, this.shadowSoftness, t), (e.needsUpdate = !0);
          }
        }
        renderShadow(e) {
          let t = this.shadow;
          null != t &&
            !0 == t.needsUpdate &&
            (t.render(e, this), (t.needsUpdate = !1));
        }
        queueShadowRender() {
          null != this.shadow && (this.shadow.needsUpdate = !0);
        }
        setShadowIntensity(e) {
          if (
            ((this.shadowIntensity = e),
            null != this._currentGLTF &&
              (this.setBakedShadowVisibility(),
              !(e <= 0) || null != this.shadow))
          ) {
            if (null == this.shadow) {
              let e = "wall" === this.element.arPlacement ? "back" : "bottom";
              this.shadow = new oQ(this, this.shadowSoftness, e);
            }
            this.shadow.setIntensity(e);
          }
        }
        setShadowSoftness(e) {
          this.shadowSoftness = e;
          let t = this.shadow;
          null != t && t.setSoftness(e);
        }
        setShadowOffset(e) {
          let t = this.shadow;
          null != t && t.setOffset(e);
        }
        getHit(e = this) {
          return oT
            .intersectObject(e, !0)
            .find((e) => e.object.visible && !e.object.userData.noHit);
        }
        hitFromController(e, t = this) {
          return oT.setFromXRController(e), this.getHit(t);
        }
        hitFromPoint(e, t = this) {
          return oT.setFromCamera(e, this.getCamera()), this.getHit(t);
        }
        positionAndNormalFromPoint(e, t = this) {
          var i;
          let r = this.hitFromPoint(e, t);
          return null == r
            ? null
            : {
                position: r.point,
                normal:
                  null != r.face
                    ? r.face.normal
                        .clone()
                        .applyNormalMatrix(
                          new en.dwI().getNormalMatrix(r.object.matrixWorld)
                        )
                    : oT.ray.direction.clone().multiplyScalar(-1),
                uv: null !== (i = r.uv) && void 0 !== i ? i : null,
              };
        }
        surfaceFromPoint(e, t = this) {
          let i = this.element.model;
          if (null == i) return null;
          let r = this.hitFromPoint(e, t);
          if (null == r || null == r.face) return null;
          let { meshes: s, primitives: n } =
              i[ot](r).mesh.userData.associations,
            a = new en.Pq0(),
            o = new en.Pq0(),
            A = new en.Pq0(),
            { a: l, b: h, c } = r.face,
            u = r.object;
          u.getVertexPosition(l, a),
            u.getVertexPosition(h, o),
            u.getVertexPosition(c, A);
          let g = new en.lMl(a, o, A),
            d = new en.Pq0();
          return (
            g.getBarycoord(u.worldToLocal(r.point), d),
            `${s} ${n} ${l} ${h} ${c} ${d.x.toFixed(3)} ${d.y.toFixed(
              3
            )} ${d.z.toFixed(3)}`
          );
        }
        addHotspot(e) {
          this.target.add(e),
            this.annotationRenderer.domElement.appendChild(e.element),
            this.updateSurfaceHotspot(e);
        }
        removeHotspot(e) {
          this.target.remove(e);
        }
        forHotspots(e) {
          let { children: t } = this.target;
          for (let i = 0, r = t.length; i < r; i++) {
            let r = t[i];
            r instanceof oB && e(r);
          }
        }
        updateSurfaceHotspot(e) {
          if (null == e.surface || null == this.element.model) return;
          let t = rN(e.surface)[0].terms;
          if (8 != t.length) {
            console.warn(e.surface + " does not have exactly 8 numbers.");
            return;
          }
          let i = this.element.model[oi](t[0].number, t[1].number);
          if (null == i) {
            console.warn(
              e.surface +
                " does not match a node/primitive in this glTF! Skipping this hotspot."
            );
            return;
          }
          let r = i.mesh.geometry.attributes.position.count,
            s = new en.Pq0(t[2].number, t[3].number, t[4].number);
          if (s.x >= r || s.y >= r || s.z >= r) {
            console.warn(
              e.surface +
                " vertex indices out of range in this glTF! Skipping this hotspot."
            );
            return;
          }
          let n = new en.Pq0(t[5].number, t[6].number, t[7].number);
          (e.mesh = i.mesh), (e.tri = s), (e.bary = n), e.updateSurface();
        }
        animateSurfaceHotspots() {
          this.element.paused ||
            this.forHotspots((e) => {
              e.updateSurface();
            });
        }
        updateHotspotsVisibility(e) {
          this.forHotspots((t) => {
            ob.copy(e),
              ox.setFromMatrixPosition(t.matrixWorld),
              ob.sub(ox),
              oS.copy(t.normal).transformDirection(this.target.matrixWorld),
              0 > ob.dot(oS) ? t.hide() : t.show();
          });
        }
        orientHotspots(e) {
          this.forHotspots((t) => {
            t.orient(e);
          });
        }
        setHotspotsVisibility(e) {
          this.forHotspots((t) => {
            t.visible = e;
          });
        }
        updateSchema(e) {
          var t;
          let { schemaElement: i, element: r } = this,
            { alt: s, poster: n, iosSrc: a } = r;
          if (null != e) {
            let r = [
              {
                "@type": "MediaObject",
                contentUrl: e,
                encodingFormat:
                  (null === (t = e.split(".").pop()) || void 0 === t
                    ? void 0
                    : t.toLowerCase()) === "gltf"
                    ? "model/gltf+json"
                    : "model/gltf-binary",
              },
            ];
            a &&
              r.push({
                "@type": "MediaObject",
                contentUrl: a,
                encodingFormat: "model/vnd.usdz+zip",
              }),
              (i.textContent = JSON.stringify({
                "@context": "http://schema.org/",
                "@type": "3DModel",
                image: null != n ? n : void 0,
                name: null != s ? s : void 0,
                encoding: r,
              })),
              document.head.appendChild(i);
          } else null != i.parentElement && i.parentElement.removeChild(i);
        }
      }
      class oL extends EventTarget {
        constructor() {
          super(...arguments),
            (this.ongoingActivities = new Set()),
            (this.totalProgress = 0);
        }
        get ongoingActivityCount() {
          return this.ongoingActivities.size;
        }
        beginActivity(e) {
          let t = { progress: 0, completed: !1 };
          return (
            this.ongoingActivities.add(t),
            1 === this.ongoingActivityCount &&
              this.announceTotalProgress(t, 0, e),
            (i) => {
              let r;
              return (
                (r = Math.max(tf(i, 0, 1), t.progress)) !== t.progress &&
                  this.announceTotalProgress(t, r, e),
                t.progress
              );
            }
          );
        }
        announceTotalProgress(e, t, i) {
          let r = 0,
            s = 0;
          for (let i of (1 == t && (e.completed = !0),
          this.ongoingActivities)) {
            let { progress: e } = i;
            (r += 1 - e), i.completed && s++;
          }
          let n = e.progress;
          (e.progress = t),
            (this.totalProgress += ((t - n) * (1 - this.totalProgress)) / r);
          let a = s === this.ongoingActivityCount ? 1 : this.totalProgress;
          this.dispatchEvent(
            new CustomEvent("progress", {
              detail: { totalProgress: a, reason: i },
            })
          ),
            s === this.ongoingActivityCount &&
              ((this.totalProgress = 0), this.ongoingActivities.clear());
        }
      }
      var oF = function (e, t, i, r) {
        var s,
          n = arguments.length,
          a =
            n < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (s = e[o]) &&
              (a = (n < 3 ? s(a) : n > 3 ? s(t, i, a) : s(t, i)) || a);
        return n > 3 && a && Object.defineProperty(t, i, a), a;
      };
      let ok = document.createElement("canvas"),
        o_ = Symbol("fallbackResizeHandler"),
        oU = Symbol("defaultAriaLabel"),
        oN = Symbol("resizeObserver"),
        oP = Symbol("clearModelTimeout"),
        oG = Symbol("onContextLost"),
        oO = Symbol("loaded"),
        oH = Symbol("status"),
        oq = Symbol("onFocus"),
        oV = Symbol("onBlur"),
        oY = Symbol("updateSize"),
        oJ = Symbol("intersectionObserver"),
        oK = Symbol("isElementInViewport"),
        oz = Symbol("announceModelVisibility"),
        o$ = Symbol("ariaLabel"),
        oj = Symbol("altDefaulted"),
        oW = Symbol("statusElement"),
        oX = Symbol("updateStatus"),
        oZ = Symbol("loadedTime"),
        o0 = Symbol("updateSource"),
        o1 = Symbol("markLoaded"),
        o2 = Symbol("container"),
        o3 = Symbol("input"),
        o8 = Symbol("canvas"),
        o4 = Symbol("scene"),
        o5 = Symbol("needsRender"),
        o6 = Symbol("tick"),
        o9 = Symbol("onModelLoad"),
        o7 = Symbol("onResize"),
        Ae = Symbol("renderer"),
        At = Symbol("progressTracker"),
        Ai = Symbol("getLoaded"),
        Ar = Symbol("getModelIsVisible"),
        As = Symbol("shouldAttemptPreload"),
        An = (e) => ({
          x: e.x,
          y: e.y,
          z: e.z,
          toString() {
            return `${this.x}m ${this.y}m ${this.z}m`;
          },
        }),
        Aa = (e) => ({
          u: e.x,
          v: e.y,
          toString() {
            return `${this.u} ${this.v}`;
          },
        });
      class Ao extends eB {
        constructor() {
          let e, t;
          super(),
            (this.alt = null),
            (this.src = null),
            (this.withCredentials = !1),
            (this.generateSchema = !1),
            (this[J] = !1),
            (this[K] = !1),
            (this[z] = 0),
            (this[$] = ""),
            (this[j] = null),
            (this[W] = tm(() => {
              let e = this.getBoundingClientRect();
              this[oY](e);
            }, 50)),
            (this[X] = tm((e) => {
              let t = this.modelIsVisible;
              t !== e &&
                this.dispatchEvent(
                  new CustomEvent("model-visibility", {
                    detail: { visible: t },
                  })
                );
            }, 0)),
            (this[Z] = null),
            (this[ee] = null),
            (this[et] = new oL()),
            (this[ei] = () => {
              this[oW].textContent = this[oH];
            }),
            (this[er] = () => {
              this[oW].textContent = "";
            }),
            (this[es] = (e) => {
              this.dispatchEvent(
                new CustomEvent("error", {
                  detail: {
                    type: "webglcontextlost",
                    sourceError: e.sourceEvent,
                  },
                })
              );
            }),
            this.attachShadow({ mode: "open" });
          let i = this.shadowRoot;
          if (
            (tM(i),
            (this[o2] = i.querySelector(".container")),
            (this[o3] = i.querySelector(".userInput")),
            (this[o8] = i.querySelector("canvas")),
            (this[oW] = i.querySelector("#status")),
            (this[oU] = this[o3].getAttribute("aria-label")),
            this.isConnected)
          ) {
            let i = this.getBoundingClientRect();
            (e = i.width), (t = i.height);
          } else (e = 300), (t = 150);
          (this[o4] = new oD({
            canvas: this[o8],
            element: this,
            width: e,
            height: t,
          })),
            Promise.resolve().then(() => {
              this[oY](this.getBoundingClientRect());
            }),
            tr &&
              (this[oN] = new ResizeObserver((e) => {
                if (!this[Ae].isPresenting)
                  for (let t of e) t.target === this && this[oY](t.contentRect);
              })),
            ts
              ? (this[oJ] = new IntersectionObserver(
                  (e) => {
                    for (let t of e)
                      if (t.target === this) {
                        let e = this.modelIsVisible;
                        (this[oK] = t.isIntersecting),
                          this[oz](e),
                          this[oK] && !this.loaded && this[o0]();
                      }
                  },
                  { root: null, rootMargin: "0px", threshold: 1e-5 }
                ))
              : (this[oK] = !0);
        }
        static get is() {
          return "model-viewer";
        }
        static set modelCacheSize(e) {
          i0[iX].evictionThreshold = e;
        }
        static get modelCacheSize() {
          return i0[iX].evictionThreshold;
        }
        static set minimumRenderScale(e) {
          e > 1 &&
            console.warn(
              "<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."
            ),
            e <= 0 &&
              console.warn(
                "<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."
              ),
            (n6.singleton.minScale = e);
        }
        static get minimumRenderScale() {
          return n6.singleton.minScale;
        }
        get loaded() {
          return this[Ai]();
        }
        get [((J = oK),
        (K = oO),
        (z = oZ),
        ($ = oH),
        (j = oP),
        (W = o_),
        (X = oz),
        (Z = oN),
        (ee = oJ),
        (et = At),
        Ae)]() {
          return n6.singleton;
        }
        get modelIsVisible() {
          return this[Ar]();
        }
        connectedCallback() {
          super.connectedCallback && super.connectedCallback(),
            tr
              ? this[oN].observe(this)
              : self.addEventListener("resize", this[o_]),
            ts && this[oJ].observe(this),
            this.addEventListener("focus", this[oq]),
            this.addEventListener("blur", this[oV]);
          let e = this[Ae];
          e.addEventListener("contextlost", this[oG]),
            e.registerScene(this[o4]),
            null != this[oP] &&
              (self.clearTimeout(this[oP]),
              (this[oP] = null),
              this.requestUpdate("src", null));
        }
        disconnectedCallback() {
          super.disconnectedCallback && super.disconnectedCallback(),
            tr
              ? this[oN].unobserve(this)
              : self.removeEventListener("resize", this[o_]),
            ts && this[oJ].unobserve(this),
            this.removeEventListener("focus", this[oq]),
            this.removeEventListener("blur", this[oV]);
          let e = this[Ae];
          e.removeEventListener("contextlost", this[oG]),
            e.unregisterScene(this[o4]),
            (this[oP] = self.setTimeout(() => {
              this[o4].dispose(), (this[oP] = null);
            }, 10));
        }
        updated(e) {
          super.updated(e),
            e.has("src") &&
              (null == this.src
                ? ((this[oO] = !1), (this[oZ] = 0), this[o4].reset())
                : this.src !== this[o4].url &&
                  ((this[oO] = !1), (this[oZ] = 0), this[o0]())),
            e.has("alt") && this[o3].setAttribute("aria-label", this[o$]),
            e.has("generateSchema") &&
              (this.generateSchema
                ? this[o4].updateSchema(this.src)
                : this[o4].updateSchema(null));
        }
        toDataURL(e, t) {
          return this[Ae].displayCanvas(this[o4]).toDataURL(e, t);
        }
        async toBlob(e) {
          let t = e ? e.mimeType : void 0,
            i = e ? e.qualityArgument : void 0,
            r = e ? e.idealAspect : void 0,
            { width: s, height: n, idealAspect: a, aspect: o } = this[o4],
            { dpr: A, scaleFactor: l } = this[Ae],
            h = s * l * A,
            c = n * l * A,
            u = 0,
            g = 0;
          !0 === r &&
            (a > o
              ? (g = (c - (c = Math.round(h / a))) / 2)
              : (u = (h - (h = Math.round(c * a))) / 2)),
            (ok.width = h),
            (ok.height = c);
          try {
            return new Promise(async (e, r) => {
              ok
                .getContext("2d")
                .drawImage(
                  this[Ae].displayCanvas(this[o4]),
                  u,
                  g,
                  h,
                  c,
                  0,
                  0,
                  h,
                  c
                ),
                ok.toBlob(
                  (t) => {
                    if (!t) return r(Error("Unable to retrieve canvas blob"));
                    e(t);
                  },
                  t,
                  i
                );
            });
          } finally {
            this[oY]({ width: s, height: n });
          }
        }
        registerEffectComposer(e) {
          e.setRenderer(this[Ae].threeRenderer),
            e.setMainCamera(this[o4].getCamera()),
            e.setMainScene(this[o4]),
            (this[o4].effectRenderer = e);
        }
        unregisterEffectComposer() {
          this[o4].effectRenderer = null;
        }
        registerRenderer(e) {
          this[o4].externalRenderer = e;
        }
        unregisterRenderer() {
          this[o4].externalRenderer = null;
        }
        get [o$]() {
          return this[oj];
        }
        get [oj]() {
          return null == this.alt || "null" === this.alt ? this[oU] : this.alt;
        }
        [Ai]() {
          return this[oO];
        }
        [Ar]() {
          return this.loaded && this[oK];
        }
        [As]() {
          return !!this.src && this[oK];
        }
        [oY]({ width: e, height: t }) {
          0 !== e &&
            0 !== t &&
            ((this[o2].style.width = `${e}px`),
            (this[o2].style.height = `${t}px`),
            this[o7]({ width: e, height: t }));
        }
        [o6](e, t) {
          var i;
          null === (i = this[o4].effectRenderer) ||
            void 0 === i ||
            i.beforeRender(e, t);
        }
        [o1]() {
          this[oO] || ((this[oO] = !0), (this[oZ] = performance.now()));
        }
        [o5]() {
          this[o4].queueRender();
        }
        [o9]() {}
        [oX](e) {
          this[oH] = e;
          let t = this.getRootNode();
          null != t &&
            t.activeElement === this &&
            this[oW].textContent != e &&
            (this[oW].textContent = e);
        }
        [((ei = oq), (er = oV), o7)](e) {
          this[o4].setSize(e.width, e.height);
        }
        async [((es = oG), o0)]() {
          let e = this[o4];
          if (this.loaded || !this[As]() || this.src === e.url) return;
          this.generateSchema && e.updateSchema(this.src),
            this[oX]("Loading"),
            e.stopAnimation();
          let t = this[At].beginActivity("model-load"),
            i = this.src;
          try {
            let r = e.setSource(i, (e) => t(0.95 * tf(e, 0, 1))),
              s = this[tv]();
            await Promise.all([r, s]),
              this[o1](),
              this[o9](),
              this.updateComplete.then(() => {
                this.dispatchEvent(new CustomEvent("before-render"));
              }),
              await new Promise((e) => {
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    this.dispatchEvent(
                      new CustomEvent("load", { detail: { url: i } })
                    ),
                      e();
                  });
                });
              });
          } catch (e) {
            this.dispatchEvent(
              new CustomEvent("error", {
                detail: { type: "loadfailure", sourceError: e },
              })
            );
          } finally {
            t(1);
          }
        }
      }
      oF([p({ type: String })], Ao.prototype, "alt", void 0),
        oF([p({ type: String })], Ao.prototype, "src", void 0),
        oF(
          [p({ type: Boolean, attribute: "with-credentials" })],
          Ao.prototype,
          "withCredentials",
          void 0
        ),
        oF(
          [p({ type: Boolean, attribute: "generate-schema" })],
          Ao.prototype,
          "generateSchema",
          void 0
        );
      var AA = function (e, t, i, r) {
        var s,
          n = arguments.length,
          a =
            n < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (s = e[o]) &&
              (a = (n < 3 ? s(a) : n > 3 ? s(t, i, a) : s(t, i)) || a);
        return n > 3 && a && Object.defineProperty(t, i, a), a;
      };
      let Al = Symbol("changeAnimation"),
        Ah = Symbol("paused"),
        Ac = { repetitions: 1 / 0, pingpong: !1 },
        Au = Symbol("hotspotMap"),
        Ag = Symbol("mutationCallback"),
        Ad = Symbol("observer"),
        Ap = Symbol("addHotspot"),
        Am = Symbol("removeHotspot"),
        Af = new en.kn4();
      var AI = {},
        AE = function (e, t, i, r, s) {
          var n = new Worker(
            AI[t] ||
              (AI[t] = URL.createObjectURL(
                new Blob(
                  [
                    e +
                      ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})',
                  ],
                  { type: "text/javascript" }
                )
              ))
          );
          return (
            (n.onmessage = function (e) {
              var t = e.data,
                i = t.$e$;
              if (i) {
                var r = Error(i[0]);
                (r.code = i[1]), (r.stack = i[2]), s(r, null);
              } else s(null, t);
            }),
            n.postMessage(i, r),
            n
          );
        },
        AC = Uint8Array,
        Ay = Uint16Array,
        AB = Int32Array,
        Aw = new AC([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        Av = new AC([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        AQ = new AC([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        Ab = function (e, t) {
          for (var i = new Ay(31), r = 0; r < 31; ++r)
            i[r] = t += 1 << e[r - 1];
          for (var s = new AB(i[30]), r = 1; r < 30; ++r)
            for (var n = i[r]; n < i[r + 1]; ++n) s[n] = ((n - i[r]) << 5) | r;
          return { b: i, r: s };
        },
        Ax = Ab(Aw, 2),
        AS = Ax.b,
        AT = Ax.r;
      (AS[28] = 258), (AT[258] = 28);
      for (
        var AM = Ab(Av, 0), AR = AM.b, AD = AM.r, AL = new Ay(32768), AF = 0;
        AF < 32768;
        ++AF
      ) {
        var Ak = ((43690 & AF) >> 1) | ((21845 & AF) << 1);
        (Ak =
          ((61680 & (Ak = ((52428 & Ak) >> 2) | ((13107 & Ak) << 2))) >> 4) |
          ((3855 & Ak) << 4)),
          (AL[AF] = (((65280 & Ak) >> 8) | ((255 & Ak) << 8)) >> 1);
      }
      for (
        var A_ = function (e, t, i) {
            for (var r, s = e.length, n = 0, a = new Ay(t); n < s; ++n)
              e[n] && ++a[e[n] - 1];
            var o = new Ay(t);
            for (n = 1; n < t; ++n) o[n] = (o[n - 1] + a[n - 1]) << 1;
            if (i) {
              r = new Ay(1 << t);
              var A = 15 - t;
              for (n = 0; n < s; ++n)
                if (e[n])
                  for (
                    var l = (n << 4) | e[n],
                      h = t - e[n],
                      c = o[e[n] - 1]++ << h,
                      u = c | ((1 << h) - 1);
                    c <= u;
                    ++c
                  )
                    r[AL[c] >> A] = l;
            } else
              for (n = 0, r = new Ay(s); n < s; ++n)
                e[n] && (r[n] = AL[o[e[n] - 1]++] >> (15 - e[n]));
            return r;
          },
          AU = new AC(288),
          AF = 0;
        AF < 144;
        ++AF
      )
        AU[AF] = 8;
      for (var AF = 144; AF < 256; ++AF) AU[AF] = 9;
      for (var AF = 256; AF < 280; ++AF) AU[AF] = 7;
      for (var AF = 280; AF < 288; ++AF) AU[AF] = 8;
      for (var AN = new AC(32), AF = 0; AF < 32; ++AF) AN[AF] = 5;
      var AP = A_(AU, 9, 0),
        AG = A_(AN, 5, 0),
        AO = function (e) {
          for (var t = e[0], i = 1; i < e.length; ++i) e[i] > t && (t = e[i]);
          return t;
        },
        AH = function (e, t, i) {
          var r = (t / 8) | 0;
          return ((e[r] | (e[r + 1] << 8)) >> (7 & t)) & i;
        },
        Aq = function (e, t) {
          var i = (t / 8) | 0;
          return (e[i] | (e[i + 1] << 8) | (e[i + 2] << 16)) >> (7 & t);
        },
        AV = function (e) {
          return ((e + 7) / 8) | 0;
        },
        AY = function (e, t, i) {
          return (
            (null == t || t < 0) && (t = 0),
            (null == i || i > e.length) && (i = e.length),
            new AC(e.subarray(t, i))
          );
        },
        AJ = [
          "unexpected EOF",
          "invalid block type",
          "invalid length/literal",
          "invalid distance",
          "stream finished",
          "no stream handler",
          ,
          "no callback",
          "invalid UTF-8 data",
          "extra field too long",
          "date not in range 1980-2099",
          "filename too long",
          "stream finishing",
          "invalid zip data",
        ],
        AK = function (e, t, i) {
          var r = Error(t || AJ[e]);
          if (
            ((r.code = e),
            Error.captureStackTrace && Error.captureStackTrace(r, AK),
            !i)
          )
            throw r;
          return r;
        },
        Az = function (e, t, i, r) {
          var s = e.length,
            n = r ? r.length : 0;
          if (!s || (t.f && !t.l)) return i || new AC(0);
          var a = !i,
            o = a || 2 != t.i,
            A = t.i;
          a && (i = new AC(3 * s));
          var l = function (e) {
              var t = i.length;
              if (e > t) {
                var r = new AC(Math.max(2 * t, e));
                r.set(i), (i = r);
              }
            },
            h = t.f || 0,
            c = t.p || 0,
            u = t.b || 0,
            g = t.l,
            d = t.d,
            p = t.m,
            m = t.n,
            f = 8 * s;
          do {
            if (!g) {
              h = AH(e, c, 1);
              var I = AH(e, c + 1, 3);
              if (((c += 3), I)) {
                if (1 == I) (g = null), (d = null), (p = 9), (m = 5);
                else if (2 == I) {
                  var E = AH(e, c, 31) + 257,
                    C = AH(e, c + 10, 15) + 4,
                    y = E + AH(e, c + 5, 31) + 1;
                  c += 14;
                  for (var B = new AC(y), w = new AC(19), v = 0; v < C; ++v)
                    w[AQ[v]] = AH(e, c + 3 * v, 7);
                  c += 3 * C;
                  for (
                    var Q = AO(w), b = (1 << Q) - 1, x = A_(w, Q, 1), v = 0;
                    v < y;

                  ) {
                    var S = x[AH(e, c, b)];
                    c += 15 & S;
                    var T = S >> 4;
                    if (T < 16) B[v++] = T;
                    else {
                      var M = 0,
                        R = 0;
                      for (
                        16 == T
                          ? ((R = 3 + AH(e, c, 3)), (c += 2), (M = B[v - 1]))
                          : 17 == T
                          ? ((R = 3 + AH(e, c, 7)), (c += 3))
                          : 18 == T && ((R = 11 + AH(e, c, 127)), (c += 7));
                        R--;

                      )
                        B[v++] = M;
                    }
                  }
                  var D = B.subarray(0, E),
                    L = B.subarray(E);
                  (p = AO(D)),
                    (m = AO(L)),
                    (g = A_(D, p, 1)),
                    (d = A_(L, m, 1));
                } else AK(1);
              } else {
                var T = AV(c) + 4,
                  F = e[T - 4] | (e[T - 3] << 8),
                  k = T + F;
                if (k > s) {
                  A && AK(0);
                  break;
                }
                o && l(u + F),
                  i.set(e.subarray(T, k), u),
                  (t.b = u += F),
                  (t.p = c = 8 * k),
                  (t.f = h);
                continue;
              }
              if (c > f) {
                A && AK(0);
                break;
              }
            }
            o && l(u + 131072);
            for (var _ = (1 << p) - 1, U = (1 << m) - 1, N = c; ; N = c) {
              var M = g[Aq(e, c) & _],
                P = M >> 4;
              if ((c += 15 & M) > f) {
                A && AK(0);
                break;
              }
              if ((M || AK(2), P < 256)) i[u++] = P;
              else if (256 == P) {
                (N = c), (g = null);
                break;
              } else {
                var G = P - 254;
                if (P > 264) {
                  var v = P - 257,
                    O = Aw[v];
                  (G = AH(e, c, (1 << O) - 1) + AS[v]), (c += O);
                }
                var H = d[Aq(e, c) & U],
                  q = H >> 4;
                H || AK(3), (c += 15 & H);
                var L = AR[q];
                if (q > 3) {
                  var O = Av[q];
                  (L += Aq(e, c) & ((1 << O) - 1)), (c += O);
                }
                if (c > f) {
                  A && AK(0);
                  break;
                }
                o && l(u + 131072);
                var V = u + G;
                if (u < L) {
                  var Y = n - L,
                    J = Math.min(L, V);
                  for (Y + u < 0 && AK(3); u < J; ++u) i[u] = r[Y + u];
                }
                for (; u < V; ++u) i[u] = i[u - L];
              }
            }
            (t.l = g),
              (t.p = N),
              (t.b = u),
              (t.f = h),
              g && ((h = 1), (t.m = p), (t.d = d), (t.n = m));
          } while (!h);
          return u != i.length && a ? AY(i, 0, u) : i.subarray(0, u);
        },
        A$ = function (e, t, i) {
          i <<= 7 & t;
          var r = (t / 8) | 0;
          (e[r] |= i), (e[r + 1] |= i >> 8);
        },
        Aj = function (e, t, i) {
          i <<= 7 & t;
          var r = (t / 8) | 0;
          (e[r] |= i), (e[r + 1] |= i >> 8), (e[r + 2] |= i >> 16);
        },
        AW = function (e, t) {
          for (var i = [], r = 0; r < e.length; ++r)
            e[r] && i.push({ s: r, f: e[r] });
          var s = i.length,
            n = i.slice();
          if (!s) return { t: A8, l: 0 };
          if (1 == s) {
            var a = new AC(i[0].s + 1);
            return (a[i[0].s] = 1), { t: a, l: 1 };
          }
          i.sort(function (e, t) {
            return e.f - t.f;
          }),
            i.push({ s: -1, f: 25001 });
          var o = i[0],
            A = i[1],
            l = 0,
            h = 1,
            c = 2;
          for (i[0] = { s: -1, f: o.f + A.f, l: o, r: A }; h != s - 1; )
            (o = i[i[l].f < i[c].f ? l++ : c++]),
              (A = i[l != h && i[l].f < i[c].f ? l++ : c++]),
              (i[h++] = { s: -1, f: o.f + A.f, l: o, r: A });
          for (var u = n[0].s, r = 1; r < s; ++r) n[r].s > u && (u = n[r].s);
          var g = new Ay(u + 1),
            d = AX(i[h - 1], g, 0);
          if (d > t) {
            var r = 0,
              p = 0,
              m = d - t,
              f = 1 << m;
            for (
              n.sort(function (e, t) {
                return g[t.s] - g[e.s] || e.f - t.f;
              });
              r < s;
              ++r
            ) {
              var I = n[r].s;
              if (g[I] > t) (p += f - (1 << (d - g[I]))), (g[I] = t);
              else break;
            }
            for (p >>= m; p > 0; ) {
              var E = n[r].s;
              g[E] < t ? (p -= 1 << (t - g[E]++ - 1)) : ++r;
            }
            for (; r >= 0 && p; --r) {
              var C = n[r].s;
              g[C] == t && (--g[C], ++p);
            }
            d = t;
          }
          return { t: new AC(g), l: d };
        },
        AX = function (e, t, i) {
          return -1 == e.s
            ? Math.max(AX(e.l, t, i + 1), AX(e.r, t, i + 1))
            : (t[e.s] = i);
        },
        AZ = function (e) {
          for (var t = e.length; t && !e[--t]; );
          for (
            var i = new Ay(++t),
              r = 0,
              s = e[0],
              n = 1,
              a = function (e) {
                i[r++] = e;
              },
              o = 1;
            o <= t;
            ++o
          )
            if (e[o] == s && o != t) ++n;
            else {
              if (!s && n > 2) {
                for (; n > 138; n -= 138) a(32754);
                n > 2 &&
                  (a(n > 10 ? ((n - 11) << 5) | 28690 : ((n - 3) << 5) | 12305),
                  (n = 0));
              } else if (n > 3) {
                for (a(s), --n; n > 6; n -= 6) a(8304);
                n > 2 && (a(((n - 3) << 5) | 8208), (n = 0));
              }
              for (; n--; ) a(s);
              (n = 1), (s = e[o]);
            }
          return { c: i.subarray(0, r), n: t };
        },
        A0 = function (e, t) {
          for (var i = 0, r = 0; r < t.length; ++r) i += e[r] * t[r];
          return i;
        },
        A1 = function (e, t, i) {
          var r = i.length,
            s = AV(t + 2);
          (e[s] = 255 & r),
            (e[s + 1] = r >> 8),
            (e[s + 2] = 255 ^ e[s]),
            (e[s + 3] = 255 ^ e[s + 1]);
          for (var n = 0; n < r; ++n) e[s + n + 4] = i[n];
          return (s + 4 + r) * 8;
        },
        A2 = function (e, t, i, r, s, n, a, o, A, l, h) {
          A$(t, h++, i), ++s[256];
          for (
            var c,
              u,
              g,
              d,
              p = AW(s, 15),
              m = p.t,
              f = p.l,
              I = AW(n, 15),
              E = I.t,
              C = I.l,
              y = AZ(m),
              B = y.c,
              w = y.n,
              v = AZ(E),
              Q = v.c,
              b = v.n,
              x = new Ay(19),
              S = 0;
            S < B.length;
            ++S
          )
            ++x[31 & B[S]];
          for (var S = 0; S < Q.length; ++S) ++x[31 & Q[S]];
          for (
            var T = AW(x, 7), M = T.t, R = T.l, D = 19;
            D > 4 && !M[AQ[D - 1]];
            --D
          );
          var L = (l + 5) << 3,
            F = A0(s, AU) + A0(n, AN) + a,
            k =
              A0(s, m) +
              A0(n, E) +
              a +
              14 +
              3 * D +
              A0(x, M) +
              2 * x[16] +
              3 * x[17] +
              7 * x[18];
          if (A >= 0 && L <= F && L <= k) return A1(t, h, e.subarray(A, A + l));
          if ((A$(t, h, 1 + (k < F)), (h += 2), k < F)) {
            (c = A_(m, f, 0)), (u = m), (g = A_(E, C, 0)), (d = E);
            var _ = A_(M, R, 0);
            A$(t, h, w - 257),
              A$(t, h + 5, b - 1),
              A$(t, h + 10, D - 4),
              (h += 14);
            for (var S = 0; S < D; ++S) A$(t, h + 3 * S, M[AQ[S]]);
            h += 3 * D;
            for (var U = [B, Q], N = 0; N < 2; ++N)
              for (var P = U[N], S = 0; S < P.length; ++S) {
                var G = 31 & P[S];
                A$(t, h, _[G]),
                  (h += M[G]),
                  G > 15 && (A$(t, h, (P[S] >> 5) & 127), (h += P[S] >> 12));
              }
          } else (c = AP), (u = AU), (g = AG), (d = AN);
          for (var S = 0; S < o; ++S) {
            var O = r[S];
            if (O > 255) {
              var G = (O >> 18) & 31;
              Aj(t, h, c[G + 257]),
                (h += u[G + 257]),
                G > 7 && (A$(t, h, (O >> 23) & 31), (h += Aw[G]));
              var H = 31 & O;
              Aj(t, h, g[H]),
                (h += d[H]),
                H > 3 && (Aj(t, h, (O >> 5) & 8191), (h += Av[H]));
            } else Aj(t, h, c[O]), (h += u[O]);
          }
          return Aj(t, h, c[256]), h + u[256];
        },
        A3 = new AB([
          65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
          2117632,
        ]),
        A8 = new AC(0),
        A4 = function (e, t, i, r, s, n) {
          var a = n.z || e.length,
            o = new AC(r + a + 5 * (1 + Math.ceil(a / 7e3)) + s),
            A = o.subarray(r, o.length - s),
            l = n.l,
            h = 7 & (n.r || 0);
          if (t) {
            h && (A[0] = n.r >> 3);
            for (
              var c = A3[t - 1],
                u = c >> 13,
                g = 8191 & c,
                d = (1 << i) - 1,
                p = n.p || new Ay(32768),
                m = n.h || new Ay(d + 1),
                f = Math.ceil(i / 3),
                I = 2 * f,
                E = function (t) {
                  return (e[t] ^ (e[t + 1] << f) ^ (e[t + 2] << I)) & d;
                },
                C = new AB(25e3),
                y = new Ay(288),
                B = new Ay(32),
                w = 0,
                v = 0,
                Q = n.i || 0,
                b = 0,
                x = n.w || 0,
                S = 0;
              Q + 2 < a;
              ++Q
            ) {
              var T = E(Q),
                M = 32767 & Q,
                R = m[T];
              if (((p[M] = R), (m[T] = M), x <= Q)) {
                var D = a - Q;
                if ((w > 7e3 || b > 24576) && (D > 423 || !l)) {
                  (h = A2(e, A, 0, C, y, B, v, b, S, Q - S, h)),
                    (b = w = v = 0),
                    (S = Q);
                  for (var L = 0; L < 286; ++L) y[L] = 0;
                  for (var L = 0; L < 30; ++L) B[L] = 0;
                }
                var F = 2,
                  k = 0,
                  _ = g,
                  U = (M - R) & 32767;
                if (D > 2 && T == E(Q - U))
                  for (
                    var N = Math.min(u, D) - 1,
                      P = Math.min(32767, Q),
                      G = Math.min(258, D);
                    U <= P && --_ && M != R;

                  ) {
                    if (e[Q + F] == e[Q + F - U]) {
                      for (var O = 0; O < G && e[Q + O] == e[Q + O - U]; ++O);
                      if (O > F) {
                        if (((F = O), (k = U), O > N)) break;
                        for (
                          var H = Math.min(U, O - 2), q = 0, L = 0;
                          L < H;
                          ++L
                        ) {
                          var V = (Q - U + L) & 32767,
                            Y = p[V],
                            J = (V - Y) & 32767;
                          J > q && ((q = J), (R = V));
                        }
                      }
                    }
                    (R = p[(M = R)]), (U += (M - R) & 32767);
                  }
                if (k) {
                  C[b++] = 0x10000000 | (AT[F] << 18) | AD[k];
                  var K = 31 & AT[F],
                    z = 31 & AD[k];
                  (v += Aw[K] + Av[z]), ++y[257 + K], ++B[z], (x = Q + F), ++w;
                } else (C[b++] = e[Q]), ++y[e[Q]];
              }
            }
            for (Q = Math.max(Q, x); Q < a; ++Q) (C[b++] = e[Q]), ++y[e[Q]];
            (h = A2(e, A, l, C, y, B, v, b, S, Q - S, h)),
              l ||
                ((n.r = (7 & h) | (A[(h / 8) | 0] << 3)),
                (h -= 7),
                (n.h = m),
                (n.p = p),
                (n.i = Q),
                (n.w = x));
          } else {
            for (var Q = n.w || 0; Q < a + l; Q += 65535) {
              var $ = Q + 65535;
              $ >= a && ((A[(h / 8) | 0] = l), ($ = a)),
                (h = A1(A, h + 1, e.subarray(Q, $)));
            }
            n.i = a;
          }
          return AY(o, 0, r + AV(h) + s);
        },
        A5 = (function () {
          for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
            for (var i = t, r = 9; --r; )
              i = (1 & i && -0x12477ce0) ^ (i >>> 1);
            e[t] = i;
          }
          return e;
        })(),
        A6 = function () {
          var e = -1;
          return {
            p: function (t) {
              for (var i = e, r = 0; r < t.length; ++r)
                i = A5[(255 & i) ^ t[r]] ^ (i >>> 8);
              e = i;
            },
            d: function () {
              return ~e;
            },
          };
        },
        A9 = function () {
          var e = 1,
            t = 0;
          return {
            p: function (i) {
              for (var r = e, s = t, n = 0 | i.length, a = 0; a != n; ) {
                for (var o = Math.min(a + 2655, n); a < o; ++a) s += r += i[a];
                (r = (65535 & r) + 15 * (r >> 16)),
                  (s = (65535 & s) + 15 * (s >> 16));
              }
              (e = r), (t = s);
            },
            d: function () {
              return (
                (e %= 65521),
                (t %= 65521),
                ((255 & e) << 24) |
                  ((65280 & e) << 8) |
                  ((255 & t) << 8) |
                  (t >> 8)
              );
            },
          };
        },
        A7 = function (e, t, i, r, s) {
          if (!s && ((s = { l: 1 }), t.dictionary)) {
            var n = t.dictionary.subarray(-32768),
              a = new AC(n.length + e.length);
            a.set(n), a.set(e, n.length), (e = a), (s.w = n.length);
          }
          return A4(
            e,
            null == t.level ? 6 : t.level,
            null == t.mem
              ? s.l
                ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length))))
                : 20
              : 12 + t.mem,
            i,
            r,
            s
          );
        },
        le = function (e, t) {
          var i = {};
          for (var r in e) i[r] = e[r];
          for (var r in t) i[r] = t[r];
          return i;
        },
        lt = function (e, t, i) {
          for (
            var r = e(),
              s = e.toString(),
              n = s
                .slice(s.indexOf("[") + 1, s.lastIndexOf("]"))
                .replace(/\s+/g, "")
                .split(","),
              a = 0;
            a < r.length;
            ++a
          ) {
            var o = r[a],
              A = n[a];
            if ("function" == typeof o) {
              t += ";" + A + "=";
              var l = o.toString();
              if (o.prototype) {
                if (-1 != l.indexOf("[native code]")) {
                  var h = l.indexOf(" ", 8) + 1;
                  t += l.slice(h, l.indexOf("(", h));
                } else
                  for (var c in ((t += l), o.prototype))
                    t +=
                      ";" +
                      A +
                      ".prototype." +
                      c +
                      "=" +
                      o.prototype[c].toString();
              } else t += l;
            } else i[A] = o;
          }
          return t;
        },
        li = function (e) {
          var t = [];
          for (var i in e)
            e[i].buffer && t.push((e[i] = new e[i].constructor(e[i])).buffer);
          return t;
        },
        lr = function (e, t, i, r) {
          if (!null[i]) {
            for (var s = "", n = {}, a = e.length - 1, o = 0; o < a; ++o)
              s = lt(e[o], s, n);
            null[i] = { c: lt(e[a], s, n), e: n };
          }
          var A = le({}, null[i].e);
          return AE(
            null[i].c +
              ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" +
              t.toString() +
              "}",
            i,
            A,
            li(A),
            r
          );
        },
        ls = function (e) {
          return postMessage(e, [e.buffer]);
        },
        ln = function (e) {
          return (
            e && { out: e.size && new AC(e.size), dictionary: e.dictionary }
          );
        },
        la = function (e, t) {
          return e[t] | (e[t + 1] << 8);
        },
        lo = function (e, t) {
          return (
            (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0
          );
        },
        lA = function (e, t) {
          return lo(e, t) + 0x100000000 * lo(e, t + 4);
        },
        ll = function (e, t, i) {
          for (; i; ++t) (e[t] = i), (i >>>= 8);
        };
      function lh(e, t) {
        return Az(e, { i: 2 }, t && t.out, t && t.dictionary);
      }
      var lc = function (e, t, i, r) {
          for (var s in e) {
            var n = e[s],
              a = t + s,
              o = r;
            Array.isArray(n) && ((o = le(r, n[1])), (n = n[0])),
              n instanceof AC
                ? (i[a] = [n, o])
                : ((i[(a += "/")] = [new AC(0), o]), lc(n, a, i, r));
          }
        },
        lu = "undefined" != typeof TextEncoder && new TextEncoder(),
        lg = "undefined" != typeof TextDecoder && new TextDecoder();
      try {
        lg.decode(A8, { stream: !0 });
      } catch (e) {}
      function ld(e, t) {
        if (t) {
          for (var i = new AC(e.length), r = 0; r < e.length; ++r)
            i[r] = e.charCodeAt(r);
          return i;
        }
        if (lu) return lu.encode(e);
        for (
          var s = e.length,
            n = new AC(e.length + (e.length >> 1)),
            a = 0,
            o = function (e) {
              n[a++] = e;
            },
            r = 0;
          r < s;
          ++r
        ) {
          if (a + 5 > n.length) {
            var A = new AC(a + 8 + ((s - r) << 1));
            A.set(n), (n = A);
          }
          var l = e.charCodeAt(r);
          l < 128 || t
            ? o(l)
            : (l < 2048
                ? o(192 | (l >> 6))
                : (l > 55295 && l < 57344
                    ? (o(
                        240 |
                          ((l =
                            (65536 + (1047552 & l)) |
                            (1023 & e.charCodeAt(++r))) >>
                            18)
                      ),
                      o(128 | ((l >> 12) & 63)))
                    : o(224 | (l >> 12)),
                  o(128 | ((l >> 6) & 63))),
              o(128 | (63 & l)));
        }
        return AY(n, 0, a);
      }
      var lp = function (e) {
          var t = 0;
          if (e)
            for (var i in e) {
              var r = e[i].length;
              r > 65535 && AK(9), (t += r + 4);
            }
          return t;
        },
        lm = function (e, t, i, r, s, n, a, o) {
          var A = r.length,
            l = i.extra,
            h = o && o.length,
            c = lp(l);
          ll(e, t, null != a ? 0x2014b50 : 0x4034b50),
            (t += 4),
            null != a && ((e[t++] = 20), (e[t++] = i.os)),
            (e[t] = 20),
            (t += 2),
            (e[t++] = (i.flag << 1) | (n < 0 && 8)),
            (e[t++] = s && 8),
            (e[t++] = 255 & i.compression),
            (e[t++] = i.compression >> 8);
          var u = new Date(null == i.mtime ? Date.now() : i.mtime),
            g = u.getFullYear() - 1980;
          if (
            ((g < 0 || g > 119) && AK(10),
            ll(
              e,
              t,
              (g << 25) |
                ((u.getMonth() + 1) << 21) |
                (u.getDate() << 16) |
                (u.getHours() << 11) |
                (u.getMinutes() << 5) |
                (u.getSeconds() >> 1)
            ),
            (t += 4),
            -1 != n &&
              (ll(e, t, i.crc),
              ll(e, t + 4, n < 0 ? -n - 2 : n),
              ll(e, t + 8, i.size)),
            ll(e, t + 12, A),
            ll(e, t + 14, c),
            (t += 16),
            null != a &&
              (ll(e, t, h), ll(e, t + 6, i.attrs), ll(e, t + 10, a), (t += 14)),
            e.set(r, t),
            (t += A),
            c)
          )
            for (var d in l) {
              var p = l[d],
                m = p.length;
              ll(e, t, +d), ll(e, t + 2, m), e.set(p, t + 4), (t += 4 + m);
            }
          return h && (e.set(o, t), (t += h)), t;
        },
        lf = function (e, t, i, r, s) {
          ll(e, t, 0x6054b50),
            ll(e, t + 8, i),
            ll(e, t + 10, i),
            ll(e, t + 12, r),
            ll(e, t + 16, s);
        };
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : "function" == typeof setTimeout && setTimeout;
      class lI {
        constructor() {
          this.textureUtils = null;
        }
        setTextureUtils(e) {
          this.textureUtils = e;
        }
        parse(e, t, i, r) {
          this.parseAsync(e, r).then(t).catch(i);
        }
        async parseAsync(e, t = {}) {
          t = Object.assign(
            {
              ar: {
                anchoring: { type: "plane" },
                planeAnchoring: { alignment: "horizontal" },
              },
              includeAnchoringProperties: !0,
              quickLookCompatible: !1,
              maxTextureSize: 1024,
            },
            t
          );
          let i = {},
            r = "model.usda";
          i[r] = null;
          let s = lE();
          s += (function (e) {
            let t =
              !0 === e.includeAnchoringProperties
                ? `
		token preliminary:anchoring:type = "${e.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${e.ar.planeAnchoring.alignment}"
	`
                : "";
            return `def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{${t}
`;
          })(t);
          let n = {},
            a = {};
          for (let o in (e.traverseVisible((e) => {
            if (e.isMesh) {
              let r = e.geometry,
                a = e.material;
              if (a.isMeshStandardMaterial) {
                let o = "geometries/Geometry_" + r.id + ".usda";
                if (!(o in i)) {
                  var t;
                  let e;
                  let s = (function (e) {
                    let t = (function (e) {
                      var t;
                      let i = e.attributes,
                        r = i.position.count;
                      return `
	def Mesh "Geometry"
	{
		int[] faceVertexCounts = [${Array(
      (null !== (t = e).index ? t.index.count : t.attributes.position.count) / 3
    )
      .fill(3)
      .join(", ")}]
		int[] faceVertexIndices = [${(function (e) {
      let t = e.index,
        i = [];
      if (null !== t) for (let e = 0; e < t.count; e++) i.push(t.getX(e));
      else {
        let t = e.attributes.position.count;
        for (let e = 0; e < t; e++) i.push(e);
      }
      return i.join(", ");
    })(e)}]
		normal3f[] normals = [${lB(i.normal, r)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${lB(i.position, r)}]
${(function (e) {
  let t = "";
  for (let i = 0; i < 4; i++) {
    let r = i > 0 ? i : "",
      s = e["uv" + r];
    void 0 !== s &&
      (t += `
		texCoord2f[] primvars:st${r} = [${(function (e) {
        let t = [];
        for (let i = 0; i < e.count; i++) {
          let r = e.getX(i),
            s = e.getY(i);
          t.push(`(${r.toPrecision(7)}, ${1 - s.toPrecision(7)})`);
        }
        return t.join(", ");
      })(s)}] (
			interpolation = "vertex"
		)`);
  }
  let i = e.color;
  if (void 0 !== i) {
    let e = i.count;
    t += `
	color3f[] primvars:displayColor = [${lB(i, e)}] (
		interpolation = "vertex"
		)`;
  }
  return t;
})(i)}
		uniform token subdivisionScheme = "none"
	}
`;
                    })(e);
                    return `
def "Geometry"
{
${t}
}
`;
                  })(r);
                  i[o] = ((t = s), ld(lE() + t));
                }
                a.uuid in n || (n[a.uuid] = a),
                  (s += (function (e, t, i) {
                    let r = "Object_" + e.id,
                      s = lC(e.matrixWorld);
                    return (
                      0 > e.matrixWorld.determinant() &&
                        console.warn(
                          "THREE.USDZExporter: USDZ does not support negative scales",
                          e
                        ),
                      `def Xform "${r}" (
	prepend references = @./geometries/Geometry_${t.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${s}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${i.id}>
}

`
                    );
                  })(e, r, a));
              } else
                console.warn(
                  "THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",
                  e
                );
            } else
              e.isCamera &&
                (s += (function (e) {
                  let t = e.name ? e.name : "Camera_" + e.id,
                    i = lC(e.matrixWorld);
                  return (0 > e.matrixWorld.determinant() &&
                    console.warn(
                      "THREE.USDZExporter: USDZ does not support negative scales",
                      e
                    ),
                  e.isOrthographicCamera)
                    ? `def Camera "${t}"
		{
			matrix4d xformOp:transform = ${i}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${e.near.toPrecision(7)}, ${e.far.toPrecision(7)})
			float horizontalAperture = ${(
        (Math.abs(e.left) + Math.abs(e.right)) *
        10
      ).toPrecision(7)}
			float verticalAperture = ${(
        (Math.abs(e.top) + Math.abs(e.bottom)) *
        10
      ).toPrecision(7)}
			token projection = "orthographic"
		}
	
	`
                    : `def Camera "${t}"
		{
			matrix4d xformOp:transform = ${i}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${e.near.toPrecision(7)}, ${e.far.toPrecision(7)})
			float focalLength = ${e.getFocalLength().toPrecision(7)}
			float focusDistance = ${e.focus.toPrecision(7)}
			float horizontalAperture = ${e.getFilmWidth().toPrecision(7)}
			token projection = "perspective"
			float verticalAperture = ${e.getFilmHeight().toPrecision(7)}
		}
	
	`;
                })(e));
          }),
          (s += `
		}
	}
}

`),
          (s += (function (e, t, i = !1) {
            let r = [];
            for (let s in e) {
              let n = e[s];
              r.push(
                (function (e, t, i = !1) {
                  let r = [],
                    s = [];
                  function n(r, s, n) {
                    var a;
                    let o = r.source.id + "_" + r.flipY;
                    t[o] = r;
                    let A = r.channel > 0 ? "st" + r.channel : "st",
                      l = { 1e3: "repeat", 1001: "clamp", 1002: "mirror" },
                      h = r.repeat.clone(),
                      c = r.offset.clone(),
                      u = r.rotation,
                      g = Math.sin(u),
                      d = Math.cos(u);
                    return (
                      (c.y = 1 - c.y - h.y),
                      i
                        ? ((c.x = c.x / h.x),
                          (c.y = c.y / h.y),
                          (c.x += g / h.x),
                          (c.y += d - 1))
                        : ((c.x += g * h.x), (c.y += (1 - d) * h.y)),
                      `
		def Shader "PrimvarReader_${s}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${A}"
			float2 outputs:result
		}

		def Shader "Transform2d_${s}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${
        e.id
      }/PrimvarReader_${s}.outputs:result>
			float inputs:rotation = ${((180 / Math.PI) * u).toFixed(7)}
			float2 inputs:scale = ${lv(h)}
			float2 inputs:translation = ${lv(c)}
			float2 outputs:result
		}

		def Shader "Texture_${r.id}_${s}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${o}.png@
			float2 inputs:st.connect = </Materials/Material_${
        e.id
      }/Transform2d_${s}.outputs:result>
			${
        void 0 !== n
          ? "float4 inputs:scale = " +
            ((a = n), `(${a.r}, ${a.g}, ${a.b}, 1.0)`)
          : ""
      }
			token inputs:sourceColorSpace = "${r.colorSpace === en.jf0 ? "raw" : "sRGB"}"
			token inputs:wrapS = "${l[r.wrapS]}"
			token inputs:wrapT = "${l[r.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${e.transparent || e.alphaTest > 0 ? "float outputs:a" : ""}
		}`
                    );
                  }
                  return (
                    e.side === en.$EB &&
                      console.warn(
                        "THREE.USDZExporter: USDZ does not support double sided materials",
                        e
                      ),
                    null !== e.map
                      ? (r.push(
                          `			color3f inputs:diffuseColor.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:rgb>`
                        ),
                        e.transparent
                          ? r.push(
                              `			float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:a>`
                            )
                          : e.alphaTest > 0 &&
                            (r.push(
                              `			float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.map.id}_diffuse.outputs:a>`
                            ),
                            r.push(
                              `			float inputs:opacityThreshold = ${e.alphaTest}`
                            )),
                        s.push(n(e.map, "diffuse", e.color)))
                      : r.push(`			color3f inputs:diffuseColor = ${lw(e.color)}`),
                    null !== e.emissiveMap
                      ? (r.push(
                          `			color3f inputs:emissiveColor.connect = </Materials/Material_${e.id}/Texture_${e.emissiveMap.id}_emissive.outputs:rgb>`
                        ),
                        s.push(
                          n(
                            e.emissiveMap,
                            "emissive",
                            new en.Q1f(
                              e.emissive.r * e.emissiveIntensity,
                              e.emissive.g * e.emissiveIntensity,
                              e.emissive.b * e.emissiveIntensity
                            )
                          )
                        ))
                      : e.emissive.getHex() > 0 &&
                        r.push(
                          `			color3f inputs:emissiveColor = ${lw(e.emissive)}`
                        ),
                    null !== e.normalMap &&
                      (r.push(
                        `			normal3f inputs:normal.connect = </Materials/Material_${e.id}/Texture_${e.normalMap.id}_normal.outputs:rgb>`
                      ),
                      s.push(n(e.normalMap, "normal"))),
                    null !== e.aoMap &&
                      (r.push(
                        `			float inputs:occlusion.connect = </Materials/Material_${e.id}/Texture_${e.aoMap.id}_occlusion.outputs:r>`
                      ),
                      s.push(
                        n(
                          e.aoMap,
                          "occlusion",
                          new en.Q1f(
                            e.aoMapIntensity,
                            e.aoMapIntensity,
                            e.aoMapIntensity
                          )
                        )
                      )),
                    null !== e.roughnessMap
                      ? (r.push(
                          `			float inputs:roughness.connect = </Materials/Material_${e.id}/Texture_${e.roughnessMap.id}_roughness.outputs:g>`
                        ),
                        s.push(
                          n(
                            e.roughnessMap,
                            "roughness",
                            new en.Q1f(e.roughness, e.roughness, e.roughness)
                          )
                        ))
                      : r.push(`			float inputs:roughness = ${e.roughness}`),
                    null !== e.metalnessMap
                      ? (r.push(
                          `			float inputs:metallic.connect = </Materials/Material_${e.id}/Texture_${e.metalnessMap.id}_metallic.outputs:b>`
                        ),
                        s.push(
                          n(
                            e.metalnessMap,
                            "metallic",
                            new en.Q1f(e.metalness, e.metalness, e.metalness)
                          )
                        ))
                      : r.push(`			float inputs:metallic = ${e.metalness}`),
                    null !== e.alphaMap
                      ? (r.push(
                          `			float inputs:opacity.connect = </Materials/Material_${e.id}/Texture_${e.alphaMap.id}_opacity.outputs:r>`
                        ),
                        r.push(`			float inputs:opacityThreshold = 0.0001`),
                        s.push(n(e.alphaMap, "opacity")))
                      : r.push(`			float inputs:opacity = ${e.opacity}`),
                    e.isMeshPhysicalMaterial &&
                      (null !== e.clearcoatMap
                        ? (r.push(
                            `			float inputs:clearcoat.connect = </Materials/Material_${e.id}/Texture_${e.clearcoatMap.id}_clearcoat.outputs:r>`
                          ),
                          s.push(
                            n(
                              e.clearcoatMap,
                              "clearcoat",
                              new en.Q1f(e.clearcoat, e.clearcoat, e.clearcoat)
                            )
                          ))
                        : r.push(`			float inputs:clearcoat = ${e.clearcoat}`),
                      null !== e.clearcoatRoughnessMap
                        ? (r.push(
                            `			float inputs:clearcoatRoughness.connect = </Materials/Material_${e.id}/Texture_${e.clearcoatRoughnessMap.id}_clearcoatRoughness.outputs:g>`
                          ),
                          s.push(
                            n(
                              e.clearcoatRoughnessMap,
                              "clearcoatRoughness",
                              new en.Q1f(
                                e.clearcoatRoughness,
                                e.clearcoatRoughness,
                                e.clearcoatRoughness
                              )
                            )
                          ))
                        : r.push(
                            `			float inputs:clearcoatRoughness = ${e.clearcoatRoughness}`
                          ),
                      r.push(`			float inputs:ior = ${e.ior}`)),
                    `
	def Material "Material_${e.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${r.join("\n")}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${
      e.id
    }/PreviewSurface.outputs:surface>

${s.join("\n")}

	}
`
                  );
                })(n, t, i)
              );
            }
            return `def "Materials"
{
${r.join("")}
}

`;
          })(n, a, t.quickLookCompatible)),
          (i[r] = ld(s)),
          (s = null),
          a)) {
            let e = a[o];
            if (!0 === e.isCompressedTexture) {
              if (null === this.textureUtils)
                throw Error(
                  "THREE.USDZExporter: setTextureUtils() must be called to process compressed textures."
                );
              e = await this.textureUtils.decompress(e);
            }
            let r = (function (e, t, i) {
                if (
                  ("undefined" != typeof HTMLImageElement &&
                    e instanceof HTMLImageElement) ||
                  ("undefined" != typeof HTMLCanvasElement &&
                    e instanceof HTMLCanvasElement) ||
                  ("undefined" != typeof OffscreenCanvas &&
                    e instanceof OffscreenCanvas) ||
                  ("undefined" != typeof ImageBitmap &&
                    e instanceof ImageBitmap)
                ) {
                  let r = i / Math.max(e.width, e.height),
                    s = document.createElement("canvas");
                  (s.width = e.width * Math.min(1, r)),
                    (s.height = e.height * Math.min(1, r));
                  let n = s.getContext("2d");
                  return (
                    !0 === t && (n.translate(0, s.height), n.scale(1, -1)),
                    n.drawImage(e, 0, 0, s.width, s.height),
                    s
                  );
                }
                throw Error(
                  "THREE.USDZExporter: No valid image data found. Unable to process texture."
                );
              })(e.image, e.flipY, t.maxTextureSize),
              s = await new Promise((e) => r.toBlob(e, "image/png", 1));
            i[`textures/Texture_${o}.png`] = new Uint8Array(
              await s.arrayBuffer()
            );
          }
          let o = 0;
          for (let e in i) {
            let t = i[e],
              r = 63 & (o += 34 + e.length);
            if (4 !== r) {
              let s = new Uint8Array(64 - r);
              i[e] = [t, { extra: { 12345: s } }];
            }
            o = t.length;
          }
          return (function (e, t) {
            t || (t = {});
            var i = {},
              r = [];
            lc(e, "", i, t);
            var s = 0,
              n = 0;
            for (var a in i) {
              var o = i[a],
                A = o[0],
                l = o[1],
                h = 0 == l.level ? 0 : 8,
                c = ld(a),
                u = c.length,
                g = l.comment,
                d = g && ld(g),
                p = d && d.length,
                m = lp(l.extra);
              u > 65535 && AK(11);
              var f = h ? A7(A, l || {}, 0, 0) : A,
                I = f.length,
                E = A6();
              E.p(A),
                r.push(
                  le(l, {
                    size: A.length,
                    crc: E.d(),
                    c: f,
                    f: c,
                    m: d,
                    u: u != a.length || (d && g.length != p),
                    o: s,
                    compression: h,
                  })
                ),
                (s += 30 + u + m + I),
                (n += 76 + 2 * (u + m) + (p || 0) + I);
            }
            for (
              var C = new AC(n + 22), y = s, B = n - s, w = 0;
              w < r.length;
              ++w
            ) {
              var c = r[w];
              lm(C, c.o, c, c.f, c.u, c.c.length);
              var v = 30 + c.f.length + lp(c.extra);
              C.set(c.c, c.o + v),
                lm(C, s, c, c.f, c.u, c.c.length, c.o, c.m),
                (s += 16 + v + (c.m ? c.m.length : 0));
            }
            return lf(C, s, r.length, B, y), C;
          })(i, { level: 0 });
        }
      }
      function lE() {
        return `#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`;
      }
      function lC(e) {
        let t = e.elements;
        return `( ${ly(t, 0)}, ${ly(t, 4)}, ${ly(t, 8)}, ${ly(t, 12)} )`;
      }
      function ly(e, t) {
        return `(${e[t + 0]}, ${e[t + 1]}, ${e[t + 2]}, ${e[t + 3]})`;
      }
      function lB(e, t) {
        if (void 0 === e)
          return (
            console.warn("USDZExporter: Normals missing."),
            Array(t).fill("(0, 0, 0)").join(", ")
          );
        let i = [];
        for (let t = 0; t < e.count; t++) {
          let r = e.getX(t),
            s = e.getY(t),
            n = e.getZ(t);
          i.push(
            `(${r.toPrecision(7)}, ${s.toPrecision(7)}, ${n.toPrecision(7)})`
          );
        }
        return i.join(", ");
      }
      function lw(e) {
        return `(${e.r}, ${e.g}, ${e.b})`;
      }
      function lv(e) {
        return `(${e.x}, ${e.y})`;
      }
      var lQ = function (e, t, i, r) {
        var s,
          n = arguments.length,
          a =
            n < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (s = e[o]) &&
              (a = (n < 3 ? s(a) : n > 3 ? s(t, i, a) : s(t, i)) || a);
        return n > 3 && a && Object.defineProperty(t, i, a), a;
      };
      let lb = !1,
        lx = !1,
        lS = "#model-viewer-no-ar-fallback",
        lT =
          ((u = ["quick-look", "scene-viewer", "webxr", "none"]),
          (e) => {
            try {
              let t = rN(e),
                i = (t.length ? t[0].terms : [])
                  .filter((e) => e && "ident" === e.type)
                  .map((e) => e.value)
                  .filter((e) => u.indexOf(e) > -1);
              return new Set(i);
            } catch (e) {}
            return new Set();
          }),
        lM = {
          QUICK_LOOK: "quick-look",
          SCENE_VIEWER: "scene-viewer",
          WEBXR: "webxr",
          NONE: "none",
        },
        lR = Symbol("arButtonContainer"),
        lD = Symbol("enterARWithWebXR"),
        lL = Symbol("openSceneViewer"),
        lF = Symbol("openIOSARQuickLook"),
        lk = Symbol("canActivateAR"),
        l_ = Symbol("arMode"),
        lU = Symbol("arModes"),
        lN = Symbol("arAnchor"),
        lP = Symbol("preload"),
        lG = Symbol("onARButtonContainerClick"),
        lO = Symbol("onARStatus"),
        lH = Symbol("onARTracking"),
        lq = Symbol("onARTap"),
        lV = Symbol("selectARMode"),
        lY = Symbol("triggerLoad");
      var lJ = function (e, t, i, r) {
        var s,
          n = arguments.length,
          a =
            n < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (s = e[o]) &&
              (a = (n < 3 ? s(a) : n > 3 ? s(t, i, a) : s(t, i)) || a);
        return n > 3 && a && Object.defineProperty(t, i, a), a;
      };
      let lK = { AUTO: "auto" },
        lz = { AUTO: "auto", EAGER: "eager" },
        l$ = Symbol("defaultProgressBarElement"),
        lj = Symbol("posterContainerElement"),
        lW = Symbol("defaultPosterElement"),
        lX = Symbol("shouldDismissPoster"),
        lZ = Symbol("hidePoster"),
        l0 = Symbol("modelIsRevealed"),
        l1 = Symbol("updateProgressBar"),
        l2 = Symbol("ariaLabelCallToAction"),
        l3 = Symbol("onProgress");
      var l8 = function (e, t, i, r) {
        var s,
          n = arguments.length,
          a =
            n < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (s = e[o]) &&
              (a = (n < 3 ? s(a) : n > 3 ? s(t, i, a) : s(t, i)) || a);
        return n > 3 && a && Object.defineProperty(t, i, a), a;
      };
      let l4 = {
          basis: [rK(rU(Math.PI / 32, "rad"))],
          keywords: { auto: [null] },
        },
        l5 = Symbol("autoRotateStartTime"),
        l6 = Symbol("radiansPerSecond"),
        l9 = Symbol("syncRotationRate"),
        l7 = Symbol("onCameraChange"),
        he = ((e) => {
          var t, i, r;
          class s extends e {
            constructor() {
              super(...arguments),
                (this[t] = new Map()),
                (this[i] = (e) => {
                  e.forEach((e) => {
                    (e instanceof MutationRecord && "childList" !== e.type) ||
                      (e.addedNodes.forEach((e) => {
                        this[Ap](e);
                      }),
                      e.removedNodes.forEach((e) => {
                        this[Am](e);
                      }),
                      this[o5]());
                  });
                }),
                (this[r] = new MutationObserver(this[Ag]));
            }
            connectedCallback() {
              super.connectedCallback();
              for (let e = 0; e < this.children.length; ++e)
                this[Ap](this.children[e]);
              let { ShadyDOM: e } = self;
              null == e
                ? this[Ad].observe(this, { childList: !0 })
                : (this[Ad] = e.observeChildren(this, this[Ag]));
            }
            disconnectedCallback() {
              super.disconnectedCallback();
              let { ShadyDOM: e } = self;
              null == e ? this[Ad].disconnect() : e.unobserveChildren(this[Ad]);
            }
            [((t = Au), (i = Ag), (r = Ad), o9)]() {
              super[o9]();
              let e = this[o4];
              e.forHotspots((t) => {
                e.updateSurfaceHotspot(t);
              });
            }
            [o6](e, t) {
              super[o6](e, t);
              let i = this[o4],
                { annotationRenderer: r } = i,
                s = i.getCamera();
              i.shouldRender() &&
                (i.animateSurfaceHotspots(),
                i.updateHotspotsVisibility(s.position),
                (r.domElement.style.display = ""),
                r.render(i, s));
            }
            updateHotspot(e) {
              let t = this[Au].get(e.name);
              null != t &&
                (t.updatePosition(e.position),
                t.updateNormal(e.normal),
                (t.surface = e.surface),
                this[o4].updateSurfaceHotspot(t),
                this[o5]());
            }
            queryHotspot(e) {
              let t = this[Au].get(e);
              if (null == t) return null;
              let i = An(t.position),
                r = An(t.normal),
                s = t.facingCamera,
                n = this[o4],
                a = n.getCamera(),
                o = new en.Pq0();
              o.setFromMatrixPosition(t.matrixWorld), o.project(a);
              let A = n.width / 2,
                l = n.height / 2;
              (o.x = o.x * A + A), (o.y = -(o.y * l) + l);
              let h = An(new en.Pq0(o.x, o.y, o.z));
              return Number.isFinite(h.x) && Number.isFinite(h.y)
                ? { position: i, normal: r, canvasPosition: h, facingCamera: s }
                : null;
            }
            positionAndNormalFromPoint(e, t) {
              let i = this[o4],
                r = i.getNDC(e, t),
                s = i.positionAndNormalFromPoint(r);
              if (null == s) return null;
              Af.copy(i.target.matrixWorld).invert();
              let n = An(s.position.applyMatrix4(Af)),
                a = An(s.normal.transformDirection(Af)),
                o = null;
              return (
                null != s.uv && (o = Aa(s.uv)),
                { position: n, normal: a, uv: o }
              );
            }
            surfaceFromPoint(e, t) {
              let i = this[o4],
                r = i.getNDC(e, t);
              return i.surfaceFromPoint(r);
            }
            [Ap](e) {
              if (
                !(e instanceof HTMLElement && 0 === e.slot.indexOf("hotspot"))
              )
                return;
              let t = this[Au].get(e.slot);
              null != t
                ? t.increment()
                : ((t = new oB({
                    name: e.slot,
                    position: e.dataset.position,
                    normal: e.dataset.normal,
                    surface: e.dataset.surface,
                  })),
                  this[Au].set(e.slot, t),
                  this[o4].addHotspot(t)),
                this[o4].queueRender();
            }
            [Am](e) {
              if (!(e instanceof HTMLElement)) return;
              let t = this[Au].get(e.slot);
              t &&
                (t.decrement() &&
                  (this[o4].removeHotspot(t), this[Au].delete(e.slot)),
                this[o4].queueRender());
            }
          }
          return s;
        })(
          ((e) => {
            var t, i, r;
            class s extends e {
              constructor() {
                super(...arguments),
                  (this[t] = void 0),
                  (this[i] = null),
                  (this[r] = null),
                  (this.variantName = null),
                  (this.orientation = "0 0 0"),
                  (this.scale = "1 1 1");
              }
              get model() {
                return this[ou];
              }
              get availableVariants() {
                return this.model ? this.model[os]() : [];
              }
              get originalGltfJson() {
                return this[oc];
              }
              [((t = ou), (i = oh), (r = oc), og)]() {
                return () => {
                  this[o5]();
                };
              }
              [od](e) {
                return (
                  (e.colorSpace = en.er$),
                  (e.wrapS = en.GJx),
                  (e.wrapT = en.GJx),
                  new av(this[og](), e)
                );
              }
              async createTexture(e, t = "image/png") {
                let { textureUtils: i } = this[Ae],
                  r = await i.loadImage(e, this.withCredentials);
                return (r.userData.mimeType = t), this[od](r);
              }
              async createLottieTexture(e, t = 1) {
                let { textureUtils: i } = this[Ae],
                  r = await i.loadLottie(e, t, this.withCredentials);
                return this[od](r);
              }
              createVideoTexture(e) {
                let t = document.createElement("video");
                (t.crossOrigin = this.withCredentials
                  ? "use-credentials"
                  : "anonymous"),
                  (t.src = e),
                  (t.muted = !0),
                  (t.playsInline = !0),
                  (t.loop = !0),
                  t.play();
                let i = new en.Nv2(t);
                return this[od](i);
              }
              createCanvasTexture() {
                let e = document.createElement("canvas"),
                  t = new en.GOR(e);
                return this[od](t);
              }
              async updated(e) {
                if ((super.updated(e), e.has("variantName"))) {
                  let e = this[At].beginActivity("variant-update");
                  e(0.1);
                  let t = this[ou],
                    { variantName: i } = this;
                  null != t &&
                    (await t[a7](i),
                    this[o5](),
                    this.dispatchEvent(new CustomEvent("variant-applied"))),
                    e(1);
                }
                if (e.has("orientation") || e.has("scale")) {
                  if (!this.loaded) return;
                  let e = this[o4];
                  e.applyTransform(),
                    e.updateBoundingBox(),
                    e.updateShadow(),
                    this[Ae].arRenderer.onUpdateScene(),
                    this[o5]();
                }
              }
              [o9]() {
                super[o9]();
                let { currentGLTF: e } = this[o4];
                if (null != e) {
                  let { correlatedSceneGraph: t } = e;
                  null != t &&
                    e !== this[oh] &&
                    ((this[ou] = new oA(t, this[og]())),
                    (this[oc] = JSON.parse(JSON.stringify(t.gltf)))),
                    "variants" in e.userData &&
                      this.requestUpdate("variantName");
                }
                this[oh] = e;
              }
              async exportScene(e) {
                let t = this[o4];
                return new Promise(async (i, r) => {
                  let s = {
                    binary: !0,
                    onlyVisible: !0,
                    maxTextureSize: 1 / 0,
                    includeCustomExtensions: !1,
                    forceIndices: !1,
                  };
                  Object.assign(s, e),
                    (s.animations = t.animations),
                    (s.truncateDrawRange = !0);
                  let n = t.shadow,
                    a = !1;
                  null != n && ((a = n.visible), (n.visible = !1)),
                    await this[ou][a9](),
                    new re()
                      .register((e) => new rS(e))
                      .parse(
                        t.model,
                        (e) =>
                          i(
                            new Blob([s.binary ? e : JSON.stringify(e)], {
                              type: s.binary
                                ? "application/octet-stream"
                                : "application/json",
                            })
                          ),
                        () => r("glTF export failed"),
                        s
                      ),
                    null != n && (n.visible = a);
                });
              }
              materialFromPoint(e, t) {
                let i = this[ou];
                if (null == i) return null;
                let r = this[o4],
                  s = r.getNDC(e, t),
                  n = r.hitFromPoint(s);
                return null == n || null == n.face ? null : i[oe](n);
              }
            }
            return (
              ol(
                [p({ type: String, attribute: "variant-name" })],
                s.prototype,
                "variantName",
                void 0
              ),
              ol(
                [p({ type: String, attribute: "orientation" })],
                s.prototype,
                "orientation",
                void 0
              ),
              ol(
                [p({ type: String, attribute: "scale" })],
                s.prototype,
                "scale",
                void 0
              ),
              s
            );
          })(
            ((e) => {
              var t, i, r;
              class s extends e {
                constructor() {
                  super(...arguments),
                    (this.autoRotate = !1),
                    (this.autoRotateDelay = 3e3),
                    (this.rotationPerSecond = "auto"),
                    (this[t] = performance.now()),
                    (this[i] = 0),
                    (this[r] = (e) => {
                      this.autoRotate &&
                        "user-interaction" === e.detail.source &&
                        (this[l5] = performance.now());
                    });
                }
                connectedCallback() {
                  super.connectedCallback(),
                    this.addEventListener("camera-change", this[l7]),
                    (this[l5] = performance.now());
                }
                disconnectedCallback() {
                  super.disconnectedCallback(),
                    this.removeEventListener("camera-change", this[l7]),
                    (this[l5] = performance.now());
                }
                updated(e) {
                  super.updated(e),
                    e.has("autoRotate") && (this[l5] = performance.now());
                }
                [((t = l5), (i = l6), l9)](e) {
                  this[l6] = e[0];
                }
                [o6](e, t) {
                  if (
                    (super[o6](e, t),
                    !this.autoRotate || !this[Ar]() || this[Ae].isPresenting)
                  )
                    return;
                  let i = Math.min(t, e - this[l5] - this.autoRotateDelay);
                  i > 0 &&
                    (this[o4].yaw =
                      this.turntableRotation + this[l6] * i * 0.001);
                }
                get turntableRotation() {
                  return this[o4].yaw;
                }
                resetTurntableRotation(e = 0) {
                  this[o4].yaw = e;
                }
              }
              return (
                (r = l7),
                l8(
                  [p({ type: Boolean, attribute: "auto-rotate" })],
                  s.prototype,
                  "autoRotate",
                  void 0
                ),
                l8(
                  [p({ type: Number, attribute: "auto-rotate-delay" })],
                  s.prototype,
                  "autoRotateDelay",
                  void 0
                ),
                l8(
                  [
                    sm({ intrinsics: l4, updateHandler: l9 }),
                    p({ type: String, attribute: "rotation-per-second" }),
                  ],
                  s.prototype,
                  "rotationPerSecond",
                  void 0
                ),
                s
              );
            })(
              ((e) => {
                var t, i, r;
                class s extends e {
                  constructor() {
                    super(...arguments),
                      (this.environmentImage = null),
                      (this.skyboxImage = null),
                      (this.shadowIntensity = 0),
                      (this.shadowSoftness = 1),
                      (this.exposure = 1),
                      (this.toneMapping = "auto"),
                      (this.skyboxHeight = "0"),
                      (this[t] = null),
                      (this[i] = null),
                      (this[r] = null);
                  }
                  updated(e) {
                    super.updated(e),
                      e.has("shadowIntensity") &&
                        (this[o4].setShadowIntensity(
                          0.5 * this.shadowIntensity
                        ),
                        this[o5]()),
                      e.has("shadowSoftness") &&
                        (this[o4].setShadowSoftness(this.shadowSoftness),
                        this[o5]()),
                      e.has("exposure") &&
                        ((this[o4].exposure = this.exposure), this[o5]()),
                      e.has("toneMapping") &&
                        ((this[o4].toneMapping =
                          "aces" === this.toneMapping
                            ? en.FV
                            : "agx" === this.toneMapping
                            ? en.LAk
                            : en.aJ8),
                        this[o5]()),
                      (e.has("environmentImage") || e.has("skyboxImage")) &&
                        this[As]() &&
                        this[tv](),
                      e.has("skyboxHeight") &&
                        (this[o4].setGroundedSkybox(), this[o5]());
                  }
                  hasBakedShadow() {
                    return this[o4].bakedShadows.size > 0;
                  }
                  async [((t = tB), (i = tw), (r = tQ), tv)]() {
                    let { skyboxImage: e, environmentImage: t } = this;
                    null != this[tQ] && (this[tQ](), (this[tQ] = null));
                    let { textureUtils: i } = this[Ae];
                    if (null == i) return;
                    let r = this[At].beginActivity("environment-update");
                    try {
                      let { environmentMap: s, skybox: n } =
                        await i.generateEnvironmentMapAndSkybox(
                          tu(e),
                          t,
                          (e) => r(tf(e, 0, 1)),
                          this.withCredentials
                        );
                      this[tB] !== s &&
                        ((this[tB] = s),
                        this.dispatchEvent(
                          new CustomEvent("environment-change")
                        )),
                        null != n
                          ? (this[tw] = n.name === s.name ? s : n)
                          : (this[tw] = null),
                        this[o4].setEnvironmentAndSkybox(this[tB], this[tw]);
                    } catch (e) {
                      if (e instanceof Error)
                        throw (this[o4].setEnvironmentAndSkybox(null, null), e);
                    } finally {
                      r(1);
                    }
                  }
                }
                return (
                  ty(
                    [p({ type: String, attribute: "environment-image" })],
                    s.prototype,
                    "environmentImage",
                    void 0
                  ),
                  ty(
                    [p({ type: String, attribute: "skybox-image" })],
                    s.prototype,
                    "skyboxImage",
                    void 0
                  ),
                  ty(
                    [p({ type: Number, attribute: "shadow-intensity" })],
                    s.prototype,
                    "shadowIntensity",
                    void 0
                  ),
                  ty(
                    [p({ type: Number, attribute: "shadow-softness" })],
                    s.prototype,
                    "shadowSoftness",
                    void 0
                  ),
                  ty([p({ type: Number })], s.prototype, "exposure", void 0),
                  ty(
                    [p({ type: String, attribute: "tone-mapping" })],
                    s.prototype,
                    "toneMapping",
                    void 0
                  ),
                  ty(
                    [p({ type: String, attribute: "skybox-height" })],
                    s.prototype,
                    "skyboxHeight",
                    void 0
                  ),
                  s
                );
              })(
                ((e) => {
                  var t, i, r, s, n, a, o, A, l, h, c, u, g, d, m, f, I, E;
                  class C extends e {
                    constructor() {
                      super(...arguments),
                        (this.cameraControls = !1),
                        (this.cameraOrbit = sv),
                        (this.cameraTarget = "auto auto auto"),
                        (this.fieldOfView = "auto"),
                        (this.minCameraOrbit = "auto"),
                        (this.maxCameraOrbit = "auto"),
                        (this.minFieldOfView = "auto"),
                        (this.maxFieldOfView = "auto"),
                        (this.interactionPromptThreshold = 3e3),
                        (this.interactionPrompt = sx.AUTO),
                        (this.interactionPromptStyle = sS.WIGGLE),
                        (this.orbitSensitivity = 1),
                        (this.zoomSensitivity = 1),
                        (this.panSensitivity = 1),
                        (this.touchAction = sT.NONE),
                        (this.disableZoom = !1),
                        (this.disablePan = !1),
                        (this.disableTap = !1),
                        (this.interpolationDecay = 50),
                        (this.a11y = null),
                        (this[t] = this.shadowRoot.querySelector(
                          ".interaction-prompt"
                        )),
                        (this[i] = this.shadowRoot.querySelector("#prompt")),
                        (this[r] = [
                          this.shadowRoot.querySelector("#finger0"),
                          this.shadowRoot.querySelector("#finger1"),
                        ]),
                        (this[s] =
                          this.shadowRoot.querySelector(".pan-target")),
                        (this[n] = 0),
                        (this[a] = 1 / 0),
                        (this[o] = !1),
                        (this[A] = !1),
                        (this[l] = nl.AUTOMATIC),
                        (this[h] = new nh(this[o4].camera, this[o3], this[o4])),
                        (this[c] = new en.YHV()),
                        (this[u] = !1),
                        (this[g] = !1),
                        (this[d] = !1),
                        (this[m] = {}),
                        (this[f] = () => {
                          let e = this[sG].changeSource;
                          (this[s3] = e),
                            e === nl.USER_INTERACTION &&
                              ((this[s0] = !0), this[sY]());
                        }),
                        (this[I] = () => {
                          this[sJ](), this[o5]();
                          let e = this[sG].changeSource;
                          this.dispatchEvent(
                            new CustomEvent("camera-change", {
                              detail: { source: e },
                            })
                          );
                        }),
                        (this[E] = (e) => {
                          this[o2].classList.toggle(
                            "pointer-tumbling",
                            "pointer-change-start" === e.type
                          );
                        });
                    }
                    get inputSensitivity() {
                      return this[sG].inputSensitivity;
                    }
                    set inputSensitivity(e) {
                      this[sG].inputSensitivity = e;
                    }
                    getCameraOrbit() {
                      let { theta: e, phi: t, radius: i } = this[s8];
                      return {
                        theta: e,
                        phi: t,
                        radius: i,
                        toString() {
                          return `${this.theta}rad ${this.phi}rad ${this.radius}m`;
                        },
                      };
                    }
                    getCameraTarget() {
                      return An(
                        this[Ae].isPresenting
                          ? this[Ae].arRenderer.target
                          : this[o4].getDynamicTarget()
                      );
                    }
                    getFieldOfView() {
                      return this[sG].getFieldOfView();
                    }
                    getMinimumFieldOfView() {
                      return this[sG].options.minimumFieldOfView;
                    }
                    getMaximumFieldOfView() {
                      return this[sG].options.maximumFieldOfView;
                    }
                    getIdealAspect() {
                      return this[o4].idealAspect;
                    }
                    jumpCameraToGoal() {
                      (this[s4] = !0), this.requestUpdate(s4, !1);
                    }
                    resetInteractionPrompt() {
                      (this[s2] = 0),
                        (this[s1] = 1 / 0),
                        (this[s0] = !1),
                        (this[sZ] =
                          this.interactionPrompt === sx.AUTO &&
                          this.cameraControls);
                    }
                    zoom(e) {
                      let t = new WheelEvent("wheel", { deltaY: -30 * e });
                      this[o3].dispatchEvent(t);
                    }
                    connectedCallback() {
                      super.connectedCallback(),
                        this[sG].addEventListener("user-interaction", this[sj]),
                        this[sG].addEventListener(
                          "pointer-change-start",
                          this[sX]
                        ),
                        this[sG].addEventListener(
                          "pointer-change-end",
                          this[sX]
                        );
                    }
                    disconnectedCallback() {
                      super.disconnectedCallback(),
                        this[sG].removeEventListener(
                          "user-interaction",
                          this[sj]
                        ),
                        this[sG].removeEventListener(
                          "pointer-change-start",
                          this[sX]
                        ),
                        this[sG].removeEventListener(
                          "pointer-change-end",
                          this[sX]
                        );
                    }
                    updated(e) {
                      super.updated(e);
                      let t = this[sG],
                        i = this[o4];
                      if (
                        (e.has("cameraControls") &&
                          (this.cameraControls
                            ? (t.enableInteraction(),
                              this.interactionPrompt === sx.AUTO &&
                                (this[sZ] = !0))
                            : (t.disableInteraction(), this[sY]()),
                          this[o3].setAttribute("aria-label", this[o$])),
                        e.has("disableZoom") &&
                          (t.disableZoom = this.disableZoom),
                        e.has("disablePan") && (t.enablePan = !this.disablePan),
                        e.has("disableTap") && (t.enableTap = !this.disableTap),
                        (e.has("interactionPrompt") ||
                          e.has("cameraControls") ||
                          e.has("src")) &&
                          (this.interactionPrompt === sx.AUTO &&
                          this.cameraControls &&
                          !this[s0]
                            ? (this[sZ] = !0)
                            : this[sY]()),
                        e.has("interactionPromptStyle") &&
                          (this[sq].style.opacity =
                            this.interactionPromptStyle == sS.BASIC
                              ? "1"
                              : "0"),
                        e.has("touchAction"))
                      ) {
                        let e = this.touchAction;
                        t.applyOptions({ touchAction: e }),
                          t.updateTouchActionStyle();
                      }
                      e.has("orbitSensitivity") &&
                        (t.orbitSensitivity = this.orbitSensitivity),
                        e.has("zoomSensitivity") &&
                          (t.zoomSensitivity = this.zoomSensitivity),
                        e.has("panSensitivity") &&
                          (t.panSensitivity = this.panSensitivity),
                        e.has("interpolationDecay") &&
                          (t.setDamperDecayTime(this.interpolationDecay),
                          i.setTargetDamperDecayTime(this.interpolationDecay)),
                        e.has("a11y") && this[sz](),
                        !0 === this[s4] &&
                          Promise.resolve().then(() => {
                            t.jumpToGoal(),
                              i.jumpToGoal(),
                              this[sW](),
                              (this[s4] = !1);
                          });
                    }
                    async updateFraming() {
                      let e = this[o4],
                        t = e.adjustedFoV(e.framedFoVDeg);
                      await e.updateFraming();
                      let i = e.adjustedFoV(e.framedFoVDeg),
                        r = this[sG].getFieldOfView() / t;
                      this[sG].setFieldOfView(i * r),
                        (this[s6] = !0),
                        this.requestUpdate("maxFieldOfView"),
                        this.requestUpdate("fieldOfView"),
                        this.requestUpdate("minCameraOrbit"),
                        this.requestUpdate("maxCameraOrbit"),
                        this.requestUpdate("cameraOrbit"),
                        await this.updateComplete;
                    }
                    interact(e, t, i) {
                      let r = this[o3],
                        s = this[sV];
                      if ("1" === s[0].style.opacity) {
                        console.warn(
                          "interact() failed because an existing interaction is running."
                        );
                        return;
                      }
                      let n = [];
                      n.push({ x: sC(t.x), y: sC(t.y) });
                      let a = [{ x: n[0].x(0), y: n[0].y(0) }];
                      null != i &&
                        (n.push({ x: sC(i.x), y: sC(i.y) }),
                        a.push({ x: n[1].x(0), y: n[1].y(0) }));
                      let o = performance.now(),
                        { width: A, height: l } = this[o4],
                        h = this.getBoundingClientRect(),
                        c = (e) => {
                          for (let [t, i] of a.entries()) {
                            let { style: n } = s[t];
                            (n.transform = `translateX(${
                              A * i.x
                            }px) translateY(${l * i.y}px)`),
                              "pointerdown" === e
                                ? (n.opacity = "1")
                                : "pointerup" === e && (n.opacity = "0");
                            let a = {
                              pointerId: t - 5678,
                              pointerType: "touch",
                              target: r,
                              clientX: A * i.x + h.x,
                              clientY: l * i.y + h.y,
                              altKey: !0,
                            };
                            r.dispatchEvent(new PointerEvent(e, a));
                          }
                        },
                        u = () => {
                          let t = this[s3];
                          if (t !== nl.AUTOMATIC || !r.isConnected) {
                            for (let e of this[sV]) e.style.opacity = "0";
                            c("pointercancel"),
                              this.dispatchEvent(
                                new CustomEvent("interact-stopped", {
                                  detail: { source: t },
                                })
                              ),
                              document.removeEventListener(
                                "visibilitychange",
                                g
                              );
                            return;
                          }
                          let i = Math.min(1, (performance.now() - o) / e);
                          for (let [e, t] of a.entries())
                            (t.x = n[e].x(i)), (t.y = n[e].y(i));
                          c("pointermove"),
                            i < 1
                              ? requestAnimationFrame(u)
                              : (c("pointerup"),
                                this.dispatchEvent(
                                  new CustomEvent("interact-stopped", {
                                    detail: { source: nl.AUTOMATIC },
                                  })
                                ),
                                document.removeEventListener(
                                  "visibilitychange",
                                  g
                                ));
                        },
                        g = () => {
                          let e = 0;
                          "hidden" === document.visibilityState
                            ? (e = performance.now() - o)
                            : (o = performance.now() - e);
                        };
                      document.addEventListener("visibilitychange", g),
                        c("pointerdown"),
                        (this[s3] = nl.AUTOMATIC),
                        requestAnimationFrame(u);
                    }
                    [((t = sH),
                    (i = sq),
                    (r = sV),
                    (s = sO),
                    (n = s2),
                    (a = s1),
                    (o = s0),
                    (A = sZ),
                    (l = s3),
                    (h = sG),
                    (c = s8),
                    (u = s4),
                    (g = s5),
                    (d = s6),
                    (m = sK),
                    s7)](e) {
                      let t = this[sG],
                        i = this[o4];
                      (i.framedFoVDeg = (180 * e[0]) / Math.PI),
                        (t.changeSource = nl.NONE),
                        t.setFieldOfView(i.adjustedFoV(i.framedFoVDeg)),
                        this[sj]();
                    }
                    [s9](e) {
                      let t = this[sG];
                      if (this[s6]) {
                        let { theta: t, phi: i } = this.getCameraOrbit();
                        (e[0] = t), (e[1] = i), (this[s6] = !1);
                      }
                      (t.changeSource = nl.NONE),
                        t.setOrbit(e[0], e[1], e[2]),
                        this[sj]();
                    }
                    [nt](e) {
                      this[sG].applyOptions({
                        minimumAzimuthalAngle: e[0],
                        minimumPolarAngle: e[1],
                        minimumRadius: e[2],
                      }),
                        this.jumpCameraToGoal();
                    }
                    [ni](e) {
                      this[sG].applyOptions({
                        maximumAzimuthalAngle: e[0],
                        maximumPolarAngle: e[1],
                        maximumRadius: e[2],
                      }),
                        this[s$](e[2]),
                        this.jumpCameraToGoal();
                    }
                    [nr](e) {
                      this[sG].applyOptions({
                        minimumFieldOfView: (180 * e[0]) / Math.PI,
                      }),
                        this.jumpCameraToGoal();
                    }
                    [ns](e) {
                      let t = this[o4].adjustedFoV((180 * e[0]) / Math.PI);
                      this[sG].applyOptions({ maximumFieldOfView: t }),
                        this.jumpCameraToGoal();
                    }
                    [ne](e) {
                      let [t, i, r] = e;
                      this[Ae].arRenderer.isPresenting ||
                        this[o4].setTarget(t, i, r),
                        (this[sG].changeSource = nl.NONE),
                        this[Ae].arRenderer.updateTarget(),
                        this[sj]();
                    }
                    [o6](e, t) {
                      if (
                        (super[o6](e, t), this[Ae].isPresenting || !this[Ar]())
                      )
                        return;
                      let i = this[sG],
                        r = this[o4],
                        s = performance.now();
                      if (
                        (this[sZ] &&
                          this.loaded &&
                          s > this[oZ] + this.interactionPromptThreshold &&
                          ((this[sZ] = !1),
                          (this[s1] = s),
                          this[sH].classList.add("visible")),
                        isFinite(this[s1]) &&
                          this.interactionPromptStyle === sS.WIGGLE)
                      ) {
                        let e = ((s - this[s1]) / 5e3) % 1,
                          t = sB(e),
                          n = sw(e);
                        if (
                          ((this[sq].style.opacity = `${n}`), t !== this[s2])
                        ) {
                          let e = t * r.width * 0.05,
                            s = ((t - this[s2]) * Math.PI) / 16;
                          (this[sq].style.transform = `translateX(${e}px)`),
                            (i.changeSource = nl.AUTOMATIC),
                            i.adjustOrbit(s, 0, 0),
                            (this[s2] = t);
                        }
                      }
                      let n = i.update(e, t),
                        a = r.updateTarget(t);
                      (n || a) && this[sW]();
                    }
                    [sY]() {
                      (this[sZ] = !1),
                        this[sH].classList.remove("visible"),
                        (this[s1] = 1 / 0);
                    }
                    [s$](e) {
                      let t = Math.abs(2 * Math.max(this[o4].farRadius(), e));
                      this[sG].updateNearFar(0, t);
                    }
                    [sJ]() {
                      let { theta: e, phi: t } = this[sG].getCameraSpherical(
                          this[s8]
                        ),
                        i = Math.floor(t / sU),
                        r = sQ[(4 + Math.floor(((e % sP) + sN) / s_)) % 4],
                        s = sb[i],
                        n = `${s}${r}`;
                      n in this[sK]
                        ? this[oX](this[sK][n])
                        : this[oX](`View from stage ${n}`);
                    }
                    get [o$]() {
                      let e = ". Use mouse, touch or arrow keys to move.";
                      return (
                        "interaction-prompt" in this[sK] &&
                          (e = `. ${this[sK]["interaction-prompt"]}`),
                        super[o$].replace(/\.$/, "") +
                          (this.cameraControls ? e : "")
                      );
                    }
                    async [o7](e) {
                      let t = this[sG],
                        i = this[o4],
                        r = i.adjustedFoV(i.framedFoVDeg);
                      super[o7](e);
                      let s = i.adjustedFoV(i.framedFoVDeg) / r,
                        n = t.getFieldOfView() * (isFinite(s) ? s : 1);
                      t.updateAspect(this[o4].aspect),
                        this.requestUpdate(
                          "maxFieldOfView",
                          this.maxFieldOfView
                        ),
                        await this.updateComplete,
                        this[sG].setFieldOfView(n),
                        this.jumpCameraToGoal();
                    }
                    [o9]() {
                      super[o9](),
                        this[s5] ? (this[s6] = !0) : (this[s5] = !0),
                        this.requestUpdate(
                          "maxFieldOfView",
                          this.maxFieldOfView
                        ),
                        this.requestUpdate("fieldOfView", this.fieldOfView),
                        this.requestUpdate(
                          "minCameraOrbit",
                          this.minCameraOrbit
                        ),
                        this.requestUpdate(
                          "maxCameraOrbit",
                          this.maxCameraOrbit
                        ),
                        this.requestUpdate("cameraOrbit", this.cameraOrbit),
                        this.requestUpdate("cameraTarget", this.cameraTarget),
                        this.jumpCameraToGoal();
                    }
                    [((f = sj), (I = sW), (E = sX), sz)]() {
                      if ("string" == typeof this.a11y) {
                        if (this.a11y.startsWith("{"))
                          try {
                            this[sK] = JSON.parse(this.a11y);
                          } catch (e) {
                            console.warn("Error parsing a11y JSON:", e);
                          }
                        else
                          this.a11y.length > 0
                            ? console.warn(
                                "Error not supported format, should be a JSON string:",
                                this.a11y
                              )
                            : (this[sK] = {});
                      } else
                        "object" == typeof this.a11y && null != this.a11y
                          ? (this[sK] = Object.assign({}, this.a11y))
                          : (this[sK] = {});
                      this[o3].setAttribute("aria-label", this[o$]);
                    }
                  }
                  return (
                    sy(
                      [p({ type: Boolean, attribute: "camera-controls" })],
                      C.prototype,
                      "cameraControls",
                      void 0
                    ),
                    sy(
                      [
                        sm({
                          intrinsics: sD,
                          observeEffects: !0,
                          updateHandler: s9,
                        }),
                        p({
                          type: String,
                          attribute: "camera-orbit",
                          hasChanged: () => !0,
                        }),
                      ],
                      C.prototype,
                      "cameraOrbit",
                      void 0
                    ),
                    sy(
                      [
                        sm({
                          intrinsics: sk,
                          observeEffects: !0,
                          updateHandler: ne,
                        }),
                        p({
                          type: String,
                          attribute: "camera-target",
                          hasChanged: () => !0,
                        }),
                      ],
                      C.prototype,
                      "cameraTarget",
                      void 0
                    ),
                    sy(
                      [
                        sm({
                          intrinsics: sM,
                          observeEffects: !0,
                          updateHandler: s7,
                        }),
                        p({
                          type: String,
                          attribute: "field-of-view",
                          hasChanged: () => !0,
                        }),
                      ],
                      C.prototype,
                      "fieldOfView",
                      void 0
                    ),
                    sy(
                      [
                        sm({ intrinsics: sL, updateHandler: nt }),
                        p({
                          type: String,
                          attribute: "min-camera-orbit",
                          hasChanged: () => !0,
                        }),
                      ],
                      C.prototype,
                      "minCameraOrbit",
                      void 0
                    ),
                    sy(
                      [
                        sm({ intrinsics: sF, updateHandler: ni }),
                        p({
                          type: String,
                          attribute: "max-camera-orbit",
                          hasChanged: () => !0,
                        }),
                      ],
                      C.prototype,
                      "maxCameraOrbit",
                      void 0
                    ),
                    sy(
                      [
                        sm({ intrinsics: sR, updateHandler: nr }),
                        p({
                          type: String,
                          attribute: "min-field-of-view",
                          hasChanged: () => !0,
                        }),
                      ],
                      C.prototype,
                      "minFieldOfView",
                      void 0
                    ),
                    sy(
                      [
                        sm({ intrinsics: sM, updateHandler: ns }),
                        p({
                          type: String,
                          attribute: "max-field-of-view",
                          hasChanged: () => !0,
                        }),
                      ],
                      C.prototype,
                      "maxFieldOfView",
                      void 0
                    ),
                    sy(
                      [
                        p({
                          type: Number,
                          attribute: "interaction-prompt-threshold",
                        }),
                      ],
                      C.prototype,
                      "interactionPromptThreshold",
                      void 0
                    ),
                    sy(
                      [p({ type: String, attribute: "interaction-prompt" })],
                      C.prototype,
                      "interactionPrompt",
                      void 0
                    ),
                    sy(
                      [
                        p({
                          type: String,
                          attribute: "interaction-prompt-style",
                        }),
                      ],
                      C.prototype,
                      "interactionPromptStyle",
                      void 0
                    ),
                    sy(
                      [p({ type: Number, attribute: "orbit-sensitivity" })],
                      C.prototype,
                      "orbitSensitivity",
                      void 0
                    ),
                    sy(
                      [p({ type: Number, attribute: "zoom-sensitivity" })],
                      C.prototype,
                      "zoomSensitivity",
                      void 0
                    ),
                    sy(
                      [p({ type: Number, attribute: "pan-sensitivity" })],
                      C.prototype,
                      "panSensitivity",
                      void 0
                    ),
                    sy(
                      [p({ type: String, attribute: "touch-action" })],
                      C.prototype,
                      "touchAction",
                      void 0
                    ),
                    sy(
                      [p({ type: Boolean, attribute: "disable-zoom" })],
                      C.prototype,
                      "disableZoom",
                      void 0
                    ),
                    sy(
                      [p({ type: Boolean, attribute: "disable-pan" })],
                      C.prototype,
                      "disablePan",
                      void 0
                    ),
                    sy(
                      [p({ type: Boolean, attribute: "disable-tap" })],
                      C.prototype,
                      "disableTap",
                      void 0
                    ),
                    sy(
                      [p({ type: Number, attribute: "interpolation-decay" })],
                      C.prototype,
                      "interpolationDecay",
                      void 0
                    ),
                    sy([p()], C.prototype, "a11y", void 0),
                    C
                  );
                })(
                  ((e) => {
                    var t, i, r, s, n, a, o, A, l, h;
                    class c extends e {
                      constructor() {
                        super(...arguments),
                          (this.ar = !1),
                          (this.arScale = "auto"),
                          (this.arPlacement = "floor"),
                          (this.arModes = "webxr scene-viewer quick-look"),
                          (this.iosSrc = null),
                          (this.xrEnvironment = !1),
                          (this[t] = !1),
                          (this[i] =
                            this.shadowRoot.querySelector(".ar-button")),
                          (this[r] = document.createElement("a")),
                          (this[s] = new Set()),
                          (this[n] = lM.NONE),
                          (this[a] = !1),
                          (this[o] = (e) => {
                            e.preventDefault(), this.activateAR();
                          }),
                          (this[A] = ({ status: e }) => {
                            (e === nc.NOT_PRESENTING ||
                              this[Ae].arRenderer.presentedScene ===
                                this[o4]) &&
                              (this.setAttribute("ar-status", e),
                              this.dispatchEvent(
                                new CustomEvent("ar-status", {
                                  detail: { status: e },
                                })
                              ),
                              e === nc.NOT_PRESENTING
                                ? this.removeAttribute("ar-tracking")
                                : e === nc.SESSION_STARTED &&
                                  this.setAttribute(
                                    "ar-tracking",
                                    nu.TRACKING
                                  ));
                          }),
                          (this[l] = ({ status: e }) => {
                            this.setAttribute("ar-tracking", e),
                              this.dispatchEvent(
                                new CustomEvent("ar-tracking", {
                                  detail: { status: e },
                                })
                              );
                          }),
                          (this[h] = (e) => {
                            "_apple_ar_quicklook_button_tapped" == e.data &&
                              this.dispatchEvent(
                                new CustomEvent("quick-look-button-tapped")
                              );
                          });
                      }
                      get canActivateAR() {
                        return this[l_] !== lM.NONE;
                      }
                      connectedCallback() {
                        super.connectedCallback(),
                          this[Ae].arRenderer.addEventListener(
                            "status",
                            this[lO]
                          ),
                          this.setAttribute("ar-status", nc.NOT_PRESENTING),
                          this[Ae].arRenderer.addEventListener(
                            "tracking",
                            this[lH]
                          ),
                          this[lN].addEventListener("message", this[lq]);
                      }
                      disconnectedCallback() {
                        super.disconnectedCallback(),
                          this[Ae].arRenderer.removeEventListener(
                            "status",
                            this[lO]
                          ),
                          this[Ae].arRenderer.removeEventListener(
                            "tracking",
                            this[lH]
                          ),
                          this[lN].removeEventListener("message", this[lq]);
                      }
                      update(e) {
                        super.update(e),
                          e.has("arScale") &&
                            (this[o4].canScale = "fixed" !== this.arScale),
                          e.has("arPlacement") &&
                            (this[o4].updateShadow(), this[o5]()),
                          e.has("arModes") && (this[lU] = lT(this.arModes)),
                          (e.has("ar") ||
                            e.has("arModes") ||
                            e.has("src") ||
                            e.has("iosSrc")) &&
                            this[lV]();
                      }
                      async activateAR() {
                        switch (this[l_]) {
                          case lM.QUICK_LOOK:
                            await this[lF]();
                            break;
                          case lM.WEBXR:
                            await this[lD]();
                            break;
                          case lM.SCENE_VIEWER:
                            this[lL]();
                            break;
                          default:
                            console.warn(
                              "No AR Mode can be activated. This is probably due to missing configuration or device capabilities"
                            );
                        }
                      }
                      async [((t = lk),
                      (i = lR),
                      (r = lN),
                      (s = lU),
                      (n = l_),
                      (a = lP),
                      (o = lG),
                      (A = lO),
                      (l = lH),
                      (h = lq),
                      lV)]() {
                        var e;
                        let t = lM.NONE;
                        if (this.ar) {
                          if (null != this.src)
                            for (let i of this[lU]) {
                              if (
                                "webxr" === i &&
                                ti &&
                                !lb &&
                                (await this[
                                  Ae
                                ].arRenderer.supportsPresentation())
                              ) {
                                t = lM.WEBXR;
                                break;
                              }
                              if (
                                "scene-viewer" === i &&
                                !lx &&
                                (tl ||
                                  (navigator.userAgentData &&
                                    navigator.userAgentData
                                      .getHighEntropyValues &&
                                    (null ===
                                      (e = (
                                        await navigator.userAgentData.getHighEntropyValues(
                                          ["formFactor"]
                                        )
                                      ).formFactor) || void 0 === e
                                      ? void 0
                                      : e.includes("XR"))))
                              ) {
                                t = lM.SCENE_VIEWER;
                                break;
                              }
                              if ("quick-look" === i && tc) {
                                t = lM.QUICK_LOOK;
                                break;
                              }
                            }
                          t === lM.NONE &&
                            null != this.iosSrc &&
                            tc &&
                            (t = lM.QUICK_LOOK);
                        }
                        if (t !== lM.NONE)
                          this[lR].classList.add("enabled"),
                            this[lR].addEventListener("click", this[lG]);
                        else if (this[lR].classList.contains("enabled")) {
                          this[lR].removeEventListener("click", this[lG]),
                            this[lR].classList.remove("enabled");
                          let e = nc.FAILED;
                          this.setAttribute("ar-status", e),
                            this.dispatchEvent(
                              new CustomEvent("ar-status", {
                                detail: { status: e },
                              })
                            );
                        }
                        this[l_] = t;
                      }
                      async [lD]() {
                        console.log(
                          "Attempting to present in AR with WebXR..."
                        ),
                          await this[lY]();
                        try {
                          this[lR].removeEventListener("click", this[lG]);
                          let { arRenderer: e } = this[Ae];
                          (e.placeOnWall = "wall" === this.arPlacement),
                            await e.present(this[o4], this.xrEnvironment);
                        } catch (e) {
                          console.warn(
                            "Error while trying to present in AR with WebXR"
                          ),
                            console.error(e),
                            await this[Ae].arRenderer.stopPresenting(),
                            (lb = !0),
                            console.warn("Falling back to next ar-mode"),
                            await this[lV](),
                            this.activateAR();
                        } finally {
                          this[lV]();
                        }
                      }
                      async [lY]() {
                        this.loaded ||
                          ((this[lP] = !0),
                          this[o0](),
                          await tC(this, "load"),
                          (this[lP] = !1));
                      }
                      [As]() {
                        return super[As]() || this[lP];
                      }
                      [lL]() {
                        let e = self.location.toString(),
                          t = new URL(e),
                          i = new URL(this.src, e);
                        i.hash && (i.hash = "");
                        let r = new URLSearchParams(i.search);
                        if (
                          ((t.hash = lS),
                          r.set("mode", "ar_preferred"),
                          r.has("disable_occlusion") ||
                            r.set("disable_occlusion", "true"),
                          "fixed" === this.arScale &&
                            r.set("resizable", "false"),
                          "wall" === this.arPlacement &&
                            r.set("enable_vertical_placement", "true"),
                          r.has("sound"))
                        ) {
                          let t = new URL(r.get("sound"), e);
                          r.set("sound", t.toString());
                        }
                        if (r.has("link")) {
                          let t = new URL(r.get("link"), e);
                          r.set("link", t.toString());
                        }
                        let s = `intent://arvr.google.com/scene-viewer/1.2?${
                          r.toString() +
                          "&file=" +
                          encodeURIComponent(i.toString())
                        }#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(
                          t.toString()
                        )};end;`;
                        self.addEventListener(
                          "hashchange",
                          () => {
                            self.location.hash === lS &&
                              ((lx = !0),
                              self.history.back(),
                              console.warn(
                                "Error while trying to present in AR with Scene Viewer"
                              ),
                              console.warn("Falling back to next ar-mode"),
                              this[lV]());
                          },
                          { once: !0 }
                        ),
                          this[lN].setAttribute("href", s),
                          console.log(
                            "Attempting to present in AR with Scene Viewer..."
                          ),
                          this[lN].click();
                      }
                      async [lF]() {
                        let e = !this.iosSrc;
                        this[lR].classList.remove("enabled");
                        let t = e ? await this.prepareUSDZ() : this.iosSrc,
                          i = new URL(t, self.location.toString());
                        if (e) {
                          let e = new URL(self.location.toString()),
                            t = new URL(this.src, e);
                          t.hash && (i.hash = t.hash);
                        }
                        "fixed" === this.arScale &&
                          (i.hash && (i.hash += "&"),
                          (i.hash += "allowsContentScaling=0"));
                        let r = this[lN];
                        r.setAttribute("rel", "ar");
                        let s = document.createElement("img");
                        r.appendChild(s),
                          r.setAttribute("href", i.toString()),
                          e && r.setAttribute("download", "model.usdz"),
                          (r.style.display = "none"),
                          r.isConnected || this.shadowRoot.appendChild(r),
                          console.log(
                            "Attempting to present in AR with Quick Look..."
                          ),
                          r.click(),
                          r.removeChild(s),
                          e && URL.revokeObjectURL(t),
                          this[lR].classList.add("enabled");
                      }
                      async prepareUSDZ() {
                        let e = this[At].beginActivity("usdz-conversion");
                        await this[lY]();
                        let { model: t, shadow: i, target: r } = this[o4];
                        if (null == t) return "";
                        let s = !1;
                        null != i && ((s = i.visible), (i.visible = !1)),
                          e(0.2);
                        let n = new lI();
                        r.remove(t),
                          t.position.copy(r.position),
                          t.updateWorldMatrix(!1, !0);
                        let a = await n.parseAsync(t);
                        t.position.set(0, 0, 0), r.add(t);
                        let o = new Blob([a], { type: "model/vnd.usdz+zip" }),
                          A = URL.createObjectURL(o);
                        return e(1), null != i && (i.visible = s), A;
                      }
                    }
                    return (
                      lQ(
                        [p({ type: Boolean, attribute: "ar" })],
                        c.prototype,
                        "ar",
                        void 0
                      ),
                      lQ(
                        [p({ type: String, attribute: "ar-scale" })],
                        c.prototype,
                        "arScale",
                        void 0
                      ),
                      lQ(
                        [p({ type: String, attribute: "ar-placement" })],
                        c.prototype,
                        "arPlacement",
                        void 0
                      ),
                      lQ(
                        [p({ type: String, attribute: "ar-modes" })],
                        c.prototype,
                        "arModes",
                        void 0
                      ),
                      lQ(
                        [p({ type: String, attribute: "ios-src" })],
                        c.prototype,
                        "iosSrc",
                        void 0
                      ),
                      lQ(
                        [p({ type: Boolean, attribute: "xr-environment" })],
                        c.prototype,
                        "xrEnvironment",
                        void 0
                      ),
                      c
                    );
                  })(
                    ((e) => {
                      var t, i, r, s, n, a, o, A;
                      class l extends e {
                        constructor(...e) {
                          super(...e),
                            (this.poster = null),
                            (this.reveal = lK.AUTO),
                            (this.loading = lz.AUTO),
                            (this[t] = !1),
                            (this[i] = !1),
                            (this[r] =
                              this.shadowRoot.querySelector(".slot.poster")),
                            (this[s] =
                              this.shadowRoot.querySelector("#default-poster")),
                            (this[n] = this.shadowRoot.querySelector(
                              "#default-progress-bar > .bar"
                            )),
                            (this[a] = this[lW].getAttribute("aria-label")),
                            (this[o] = tp((e) => {
                              let t = this[l$].parentNode;
                              requestAnimationFrame(() => {
                                (this[l$].style.transform = `scaleX(${e})`),
                                  0 === e &&
                                    (t.removeChild(this[l$]),
                                    t.appendChild(this[l$])),
                                  this[l$].classList.toggle("hide", 1 === e);
                              });
                            }, 100)),
                            (this[A] = (e) => {
                              let t = e.detail.totalProgress,
                                i = e.detail.reason;
                              1 === t &&
                                (this[l1].flush(),
                                this.loaded &&
                                  (this[lX] || this.reveal === lK.AUTO) &&
                                  this[lZ]()),
                                this[l1](t),
                                this.dispatchEvent(
                                  new CustomEvent("progress", {
                                    detail: { totalProgress: t, reason: i },
                                  })
                                );
                            });
                          let l = self.ModelViewerElement || {},
                            h =
                              l.dracoDecoderLocation ||
                              "https://www.gstatic.com/draco/versioned/decoders/1.5.6/";
                          i0.setDRACODecoderLocation(h);
                          let c =
                            l.ktx2TranscoderLocation ||
                            "https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/";
                          i0.setKTX2TranscoderLocation(c),
                            l.meshoptDecoderLocation &&
                              i0.setMeshoptDecoderLocation(
                                l.meshoptDecoderLocation
                              );
                          let u =
                            l.lottieLoaderLocation ||
                            "https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js";
                          n6.singleton.textureUtils.lottieLoaderUrl = u;
                        }
                        static set dracoDecoderLocation(e) {
                          i0.setDRACODecoderLocation(e);
                        }
                        static get dracoDecoderLocation() {
                          return i0.getDRACODecoderLocation();
                        }
                        static set ktx2TranscoderLocation(e) {
                          i0.setKTX2TranscoderLocation(e);
                        }
                        static get ktx2TranscoderLocation() {
                          return i0.getKTX2TranscoderLocation();
                        }
                        static set meshoptDecoderLocation(e) {
                          i0.setMeshoptDecoderLocation(e);
                        }
                        static get meshoptDecoderLocation() {
                          return i0.getMeshoptDecoderLocation();
                        }
                        static set lottieLoaderLocation(e) {
                          n6.singleton.textureUtils.lottieLoaderUrl = e;
                        }
                        static get lottieLoaderLocation() {
                          return n6.singleton.textureUtils.lottieLoaderUrl;
                        }
                        static mapURLs(e) {
                          n6.singleton.loader[iW].manager.setURLModifier(e);
                        }
                        dismissPoster() {
                          this.loaded
                            ? this[lZ]()
                            : ((this[lX] = !0), this[o0]());
                        }
                        showPoster() {
                          let e = this[lj];
                          if (e.classList.contains("show")) return;
                          e.classList.add("show"),
                            this[o3].classList.remove("show");
                          let t = this[lW];
                          t.removeAttribute("tabindex"),
                            t.removeAttribute("aria-hidden");
                          let i = this.modelIsVisible;
                          (this[l0] = !1), this[oz](i);
                        }
                        getDimensions() {
                          return An(this[o4].size);
                        }
                        getBoundingBoxCenter() {
                          return An(
                            this[o4].boundingBox.getCenter(new en.Pq0())
                          );
                        }
                        connectedCallback() {
                          super.connectedCallback(),
                            this.loaded || this.showPoster(),
                            this[At].addEventListener("progress", this[l3]);
                        }
                        disconnectedCallback() {
                          super.disconnectedCallback(),
                            this[At].removeEventListener("progress", this[l3]);
                        }
                        async updated(e) {
                          super.updated(e),
                            e.has("poster") &&
                              null != this.poster &&
                              (this[
                                lW
                              ].style.backgroundImage = `url(${this.poster})`),
                            e.has("alt") &&
                              this[lW].setAttribute("aria-label", this[oj]),
                            (e.has("reveal") || e.has("loading")) && this[o0]();
                        }
                        [((t = l0),
                        (i = lX),
                        (r = lj),
                        (s = lW),
                        (n = l$),
                        (a = l2),
                        (o = l1),
                        (A = l3),
                        As)]() {
                          return (
                            !!this.src &&
                            (this[lX] ||
                              this.loading === lz.EAGER ||
                              (this.reveal === lK.AUTO && this[oK]))
                          );
                        }
                        [lZ]() {
                          this[lX] = !1;
                          let e = this[lj];
                          if (!e.classList.contains("show")) return;
                          e.classList.remove("show"),
                            this[o3].classList.add("show");
                          let t = this.modelIsVisible;
                          (this[l0] = !0), this[oz](t);
                          let i = this.getRootNode();
                          i && i.activeElement === this && this[o3].focus();
                          let r = this[lW];
                          r.setAttribute("aria-hidden", "true"),
                            (r.tabIndex = -1),
                            this.dispatchEvent(
                              new CustomEvent("poster-dismissed")
                            );
                        }
                        [Ar]() {
                          return super[Ar]() && this[l0];
                        }
                      }
                      return (
                        lJ(
                          [p({ type: String })],
                          l.prototype,
                          "poster",
                          void 0
                        ),
                        lJ(
                          [p({ type: String })],
                          l.prototype,
                          "reveal",
                          void 0
                        ),
                        lJ(
                          [p({ type: String })],
                          l.prototype,
                          "loading",
                          void 0
                        ),
                        l
                      );
                    })(
                      ((e) => {
                        var t;
                        class i extends e {
                          constructor(...e) {
                            super(e),
                              (this.autoplay = !1),
                              (this.animationName = void 0),
                              (this.animationCrossfadeDuration = 300),
                              (this[t] = !0),
                              this[o4].subscribeMixerEvent("loop", (e) => {
                                let t = e.action._loopCount;
                                this.dispatchEvent(
                                  new CustomEvent("loop", {
                                    detail: { count: t },
                                  })
                                );
                              }),
                              this[o4].subscribeMixerEvent("finished", () => {
                                (this[Ah] = !0),
                                  this.dispatchEvent(
                                    new CustomEvent("finished")
                                  );
                              });
                          }
                          get availableAnimations() {
                            return this.loaded ? this[o4].animationNames : [];
                          }
                          get duration() {
                            return this[o4].duration;
                          }
                          get paused() {
                            return this[Ah];
                          }
                          get currentTime() {
                            return this[o4].animationTime;
                          }
                          set currentTime(e) {
                            (this[o4].animationTime = e), this[o5]();
                          }
                          get timeScale() {
                            return this[o4].animationTimeScale;
                          }
                          set timeScale(e) {
                            this[o4].animationTimeScale = e;
                          }
                          pause() {
                            this[Ah] ||
                              ((this[Ah] = !0),
                              this.dispatchEvent(new CustomEvent("pause")));
                          }
                          play(e) {
                            this.availableAnimations.length > 0 &&
                              ((this[Ah] = !1),
                              this[Al](e),
                              this.dispatchEvent(new CustomEvent("play")));
                          }
                          [((t = Ah), o9)]() {
                            super[o9](),
                              (this[Ah] = !0),
                              null != this.animationName && this[Al](),
                              this.autoplay && this.play();
                          }
                          [o6](e, t) {
                            super[o6](e, t),
                              !this[Ah] &&
                                (this[Ar]() || this[Ae].isPresenting) &&
                                (this[o4].updateAnimation(t / 1e3), this[o5]());
                          }
                          updated(e) {
                            super.updated(e),
                              e.has("autoplay") && this.autoplay && this.play(),
                              e.has("animationName") && this[Al]();
                          }
                          [Al](e = Ac) {
                            var t;
                            let i =
                                null !== (t = e.repetitions) && void 0 !== t
                                  ? t
                                  : 1 / 0,
                              r = e.pingpong
                                ? en.lc7
                                : 1 === i
                                ? en.G3T
                                : en.aMy;
                            this[o4].playAnimation(
                              this.animationName,
                              this.animationCrossfadeDuration / 1e3,
                              r,
                              i
                            ),
                              this[Ah] &&
                                (this[o4].updateAnimation(0), this[o5]());
                          }
                        }
                        return (
                          AA(
                            [p({ type: Boolean })],
                            i.prototype,
                            "autoplay",
                            void 0
                          ),
                          AA(
                            [p({ type: String, attribute: "animation-name" })],
                            i.prototype,
                            "animationName",
                            void 0
                          ),
                          AA(
                            [
                              p({
                                type: Number,
                                attribute: "animation-crossfade-duration",
                              }),
                            ],
                            i.prototype,
                            "animationCrossfadeDuration",
                            void 0
                          ),
                          i
                        );
                      })(Ao)
                    )
                  )
                )
              )
            )
          )
        );
      customElements.define("model-viewer", he);
    },
  },
]);
