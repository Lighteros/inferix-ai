(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    4418: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 766)),
        Promise.resolve().then(n.bind(n, 96)),
        Promise.resolve().then(n.bind(n, 3479)),
        Promise.resolve().then(n.t.bind(n, 3704, 23)),
        Promise.resolve().then(n.t.bind(n, 2807, 23)),
        Promise.resolve().then(n.t.bind(n, 9574, 23)),
        Promise.resolve().then(n.t.bind(n, 347, 23));
    },
    3479: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let {
            html: t,
            height: n = null,
            width: o = null,
            children: l,
            dataNtpc: i = "",
          } = e;
          return (
            (0, a.useEffect)(() => {
              i &&
                performance.mark("mark_feature_usage", {
                  detail: { feature: "next-third-parties-".concat(i) },
                });
            }, [i]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                l,
                t
                  ? (0, r.jsx)("div", {
                      style: {
                        height: null != n ? "".concat(n, "px") : "auto",
                        width: null != o ? "".concat(o, "px") : "auto",
                      },
                      "data-ntpc": i,
                      dangerouslySetInnerHTML: { __html: t },
                    })
                  : null,
              ],
            })
          );
        });
      let r = n(5155),
        a = n(2115);
    },
    766: (e, t, n) => {
      "use strict";
      let r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = function (e) {
          let {
            gaId: t,
            debugMode: n,
            dataLayerName: i = "dataLayer",
            nonce: s,
          } = e;
          return (
            void 0 === r && (r = i),
            (0, o.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-ga" },
              });
            }, []),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(l.default, {
                  id: "_next-ga-init",
                  dangerouslySetInnerHTML: {
                    __html: "\n          window['"
                      .concat(i, "'] = window['")
                      .concat(
                        i,
                        "'] || [];\n          function gtag(){window['"
                      )
                      .concat(
                        i,
                        "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                      )
                      .concat(t, "' ")
                      .concat(n ? ",{ 'debug_mode': true }" : "", ");"),
                  },
                  nonce: s,
                }),
                (0, a.jsx)(l.default, {
                  id: "_next-ga",
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                  nonce: s,
                }),
              ],
            })
          );
        }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (void 0 === r) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[r]
            ? window[r].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  r,
                  " does not exist"
                )
              );
        });
      let a = n(5155),
        o = n(2115),
        l = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(6584));
    },
    96: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = void 0),
        (t.GoogleTagManager = function (e) {
          let {
            gtmId: t,
            gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
            dataLayerName: i = "dataLayer",
            auth: s,
            preview: c,
            dataLayer: u,
            nonce: d,
          } = e;
          l = i;
          let f = "dataLayer" !== i ? "&l=".concat(i) : "";
          return (
            (0, a.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-gtm" },
              });
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(o.default, {
                  id: "_next-gtm-init",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                        .concat(
                          u ? "w[l].push(".concat(JSON.stringify(u), ")") : "",
                          "\n      })(window,'"
                        )
                        .concat(i, "');"),
                  },
                  nonce: d,
                }),
                (0, r.jsx)(o.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: ""
                    .concat(n, "?id=")
                    .concat(t)
                    .concat(f)
                    .concat(s ? "&gtm_auth=".concat(s) : "")
                    .concat(
                      c ? "&gtm_preview=".concat(c, "&gtm_cookies_win=x") : ""
                    ),
                  nonce: d,
                }),
              ],
            })
          );
        });
      let r = n(5155),
        a = n(2115),
        o = (function (e) {
          return e && e.__esModule ? e : { default: e };
        })(n(6584)),
        l = "dataLayer";
      t.sendGTMEvent = (e, t) => {
        let n = t || l;
        (window[n] = window[n] || []), window[n].push(e);
      };
    },
    6584: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => a.a });
      var r = n(3704),
        a = n.n(r),
        o = {};
      for (let e in r) "default" !== e && (o[e] = () => r[e]);
      n.d(t, o);
    },
    8571: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          cancelIdleCallback: function () {
            return r;
          },
          requestIdleCallback: function () {
            return n;
          },
        });
      let n =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        r =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3704: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return h;
          },
          handleClientScriptLoad: function () {
            return p;
          },
          initScriptLoader: function () {
            return m;
          },
        });
      let r = n(306),
        a = n(9955),
        o = n(5155),
        l = r._(n(7650)),
        i = a._(n(2115)),
        s = n(1147),
        c = n(2815),
        u = n(8571),
        d = new Map(),
        f = new Set(),
        _ = (e) => {
          if (l.default.preinit) {
            e.forEach((e) => {
              l.default.preinit(e, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let t = document.head;
            e.forEach((e) => {
              let n = document.createElement("link");
              (n.type = "text/css"),
                (n.rel = "stylesheet"),
                (n.href = e),
                t.appendChild(n);
            });
          }
        },
        g = (e) => {
          let {
              src: t,
              id: n,
              onLoad: r = () => {},
              onReady: a = null,
              dangerouslySetInnerHTML: o,
              children: l = "",
              strategy: i = "afterInteractive",
              onError: s,
              stylesheets: u,
            } = e,
            g = n || t;
          if (g && f.has(g)) return;
          if (d.has(t)) {
            f.add(g), d.get(t).then(r, s);
            return;
          }
          let p = () => {
              a && a(), f.add(g);
            },
            m = document.createElement("script"),
            y = new Promise((e, t) => {
              m.addEventListener("load", function (t) {
                e(), r && r.call(this, t), p();
              }),
                m.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              s && s(e);
            });
          o
            ? ((m.innerHTML = o.__html || ""), p())
            : l
            ? ((m.textContent =
                "string" == typeof l ? l : Array.isArray(l) ? l.join("") : ""),
              p())
            : t && ((m.src = t), d.set(t, y)),
            (0, c.setAttributesFromProps)(m, e),
            "worker" === i && m.setAttribute("type", "text/partytown"),
            m.setAttribute("data-nscript", i),
            u && _(u),
            document.body.appendChild(m);
        };
      function p(e) {
        let { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, u.requestIdleCallback)(() => g(e));
            })
          : g(e);
      }
      function m(e) {
        e.forEach(p),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            let t = e.id || e.getAttribute("src");
            f.add(t);
          });
      }
      function y(e) {
        let {
            id: t,
            src: n = "",
            onLoad: r = () => {},
            onReady: a = null,
            strategy: c = "afterInteractive",
            onError: d,
            stylesheets: _,
            ...p
          } = e,
          {
            updateScripts: m,
            scripts: y,
            getIsSsr: h,
            appDir: b,
            nonce: w,
          } = (0, i.useContext)(s.HeadManagerContext),
          v = (0, i.useRef)(!1);
        (0, i.useEffect)(() => {
          let e = t || n;
          v.current || (a && e && f.has(e) && a(), (v.current = !0));
        }, [a, t, n]);
        let x = (0, i.useRef)(!1);
        if (
          ((0, i.useEffect)(() => {
            !x.current &&
              ("afterInteractive" === c
                ? g(e)
                : "lazyOnload" === c &&
                  ("complete" === document.readyState
                    ? (0, u.requestIdleCallback)(() => g(e))
                    : window.addEventListener("load", () => {
                        (0, u.requestIdleCallback)(() => g(e));
                      })),
              (x.current = !0));
          }, [e, c]),
          ("beforeInteractive" === c || "worker" === c) &&
            (m
              ? ((y[c] = (y[c] || []).concat([
                  { id: t, src: n, onLoad: r, onReady: a, onError: d, ...p },
                ])),
                m(y))
              : h && h()
              ? f.add(t || n)
              : h && !h() && g(e)),
          b)
        ) {
          if (
            (_ &&
              _.forEach((e) => {
                l.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === c)
          )
            return n
              ? (l.default.preload(
                  n,
                  p.integrity
                    ? {
                        as: "script",
                        integrity: p.integrity,
                        nonce: w,
                        crossOrigin: p.crossOrigin,
                      }
                    : { as: "script", nonce: w, crossOrigin: p.crossOrigin }
                ),
                (0, o.jsx)("script", {
                  nonce: w,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([n, { ...p, id: t }]) +
                      ")",
                  },
                }))
              : (p.dangerouslySetInnerHTML &&
                  ((p.children = p.dangerouslySetInnerHTML.__html),
                  delete p.dangerouslySetInnerHTML),
                (0, o.jsx)("script", {
                  nonce: w,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...p, id: t }]) +
                      ")",
                  },
                }));
          "afterInteractive" === c &&
            n &&
            l.default.preload(
              n,
              p.integrity
                ? {
                    as: "script",
                    integrity: p.integrity,
                    nonce: w,
                    crossOrigin: p.crossOrigin,
                  }
                : { as: "script", nonce: w, crossOrigin: p.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(y, "__nextScript", { value: !0 });
      let h = y;
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2815: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        r = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function a(e) {
        return ["async", "defer", "noModule"].includes(e);
      }
      function o(e, t) {
        for (let [o, l] of Object.entries(t)) {
          if (!t.hasOwnProperty(o) || r.includes(o) || void 0 === l) continue;
          let i = n[o] || o.toLowerCase();
          "SCRIPT" === e.tagName && a(i)
            ? (e[i] = !!l)
            : e.setAttribute(i, String(l)),
            (!1 === l ||
              ("SCRIPT" === e.tagName && a(i) && (!l || "false" === l))) &&
              (e.setAttribute(i, ""), e.removeAttribute(i));
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    347: () => {},
    9574: (e) => {
      e.exports = {
        style: { fontFamily: "'geistMono', 'geistMono Fallback'" },
        className: "__className_c3aa02",
        variable: "__variable_c3aa02",
      };
    },
    2807: (e) => {
      e.exports = {
        style: { fontFamily: "'geistSans', 'geistSans Fallback'" },
        className: "__className_1e4310",
        variable: "__variable_1e4310",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [659, 441, 517, 358], () => t(4418)), (_N_E = e.O());
  },
]);
