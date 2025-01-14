"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [433],
  {
    5565: (e, t, i) => {
      i.d(t, { default: () => n.a });
      var r = i(4146),
        n = i.n(r);
    },
    6046: (e, t, i) => {
      var r = i(6658);
      i.o(r, "usePathname") &&
        i.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        i.o(r, "useRouter") &&
          i.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          });
    },
    7970: (e, t, i) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = i(306),
        n = i(9955),
        s = i(5155),
        a = n._(i(2115)),
        o = r._(i(7650)),
        u = r._(i(6107)),
        l = i(666),
        c = i(1159),
        d = i(3621);
      i(2363);
      let h = i(3576),
        f = r._(i(5514)),
        p = i(5353),
        y = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, i, r, n, s, a) {
        let o = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== o &&
          ((e["data-loaded-src"] = o),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && n(!0), null == i ? void 0 : i.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    n = !1;
                  i.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => n,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (n = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function g(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, a.forwardRef)((e, t) => {
        let {
            src: i,
            srcSet: r,
            sizes: n,
            height: o,
            width: u,
            decoding: l,
            className: c,
            style: d,
            fetchPriority: h,
            placeholder: f,
            loading: y,
            unoptimized: v,
            fill: b,
            onLoadRef: w,
            onLoadingCompleteRef: O,
            setBlurComplete: C,
            setShowAltText: S,
            sizesInput: E,
            onLoad: _,
            onError: P,
            ...R
          } = e,
          x = (0, a.useCallback)(
            (e) => {
              e && (P && (e.src = e.src), e.complete && m(e, f, w, O, C, v, E));
            },
            [i, f, w, O, C, P, v, E]
          ),
          j = (0, p.useMergedRef)(t, x);
        return (0, s.jsx)("img", {
          ...R,
          ...g(h),
          loading: y,
          width: u,
          height: o,
          decoding: l,
          "data-nimg": b ? "fill" : "1",
          className: c,
          style: d,
          sizes: n,
          srcSet: r,
          src: i,
          ref: j,
          onLoad: (e) => {
            m(e.currentTarget, f, w, O, C, v, E);
          },
          onError: (e) => {
            S(!0), "empty" !== f && C(!0), P && P(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: i } = e,
          r = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...g(i.fetchPriority),
          };
        return t && o.default.preload
          ? (o.default.preload(i.src, r), null)
          : (0, s.jsx)(u.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...r },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let w = (0, a.forwardRef)((e, t) => {
        let i = (0, a.useContext)(h.RouterContext),
          r = (0, a.useContext)(d.ImageConfigContext),
          n = (0, a.useMemo)(() => {
            let e = y || r || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              i = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: i };
          }, [r]),
          { onLoad: o, onLoadingComplete: u } = e,
          p = (0, a.useRef)(o);
        (0, a.useEffect)(() => {
          p.current = o;
        }, [o]);
        let m = (0, a.useRef)(u);
        (0, a.useEffect)(() => {
          m.current = u;
        }, [u]);
        let [g, w] = (0, a.useState)(!1),
          [O, C] = (0, a.useState)(!1),
          { props: S, meta: E } = (0, l.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: n,
            blurComplete: g,
            showAltText: O,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(v, {
              ...S,
              unoptimized: E.unoptimized,
              placeholder: E.placeholder,
              fill: E.fill,
              onLoadRef: p,
              onLoadingCompleteRef: m,
              setBlurComplete: w,
              setShowAltText: C,
              sizesInput: e.sizes,
              ref: t,
            }),
            E.priority
              ? (0, s.jsx)(b, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5353: (e, t, i) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let r = i(2115);
      function n(e, t) {
        let i = (0, r.useRef)(() => {}),
          n = (0, r.useRef)(() => {});
        return (0, r.useMemo)(
          () =>
            e && t
              ? (r) => {
                  null === r
                    ? (i.current(), n.current())
                    : ((i.current = s(e, r)), (n.current = s(t, r)));
                }
              : e || t,
          [e, t]
        );
      }
      function s(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let i = e(t);
          return "function" == typeof i ? i : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3003: (e, t, i) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = i(306)._(i(2115)).default.createContext({});
    },
    675: (e, t) => {
      function i(e) {
        let {
          ampFirst: t = !1,
          hybrid: i = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (i && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    666: (e, t, i) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }),
        i(2363);
      let r = i(5859),
        n = i(1159);
      function s(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function o(e, t) {
        var i;
        let o,
          u,
          l,
          {
            src: c,
            sizes: d,
            unoptimized: h = !1,
            priority: f = !1,
            loading: p,
            className: y,
            quality: m,
            width: g,
            height: v,
            fill: b = !1,
            style: w,
            overrideSrc: O,
            onLoad: C,
            onLoadingComplete: S,
            placeholder: E = "empty",
            blurDataURL: _,
            fetchPriority: P,
            decoding: R = "async",
            layout: x,
            objectFit: j,
            objectPosition: M,
            lazyBoundary: q,
            lazyRoot: T,
            ...D
          } = e,
          { imgConf: A, showAltText: F, blurComplete: k, defaultLoader: I } = t,
          L = A || n.imageConfigDefault;
        if ("allSizes" in L) o = L;
        else {
          let e = [...L.deviceSizes, ...L.imageSizes].sort((e, t) => e - t),
            t = L.deviceSizes.sort((e, t) => e - t);
          o = { ...L, allSizes: e, deviceSizes: t };
        }
        if (void 0 === I)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let U = D.loader || I;
        delete D.loader, delete D.srcSet;
        let Q = "__next_img_default" in U;
        if (Q) {
          if ("custom" === o.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = U;
          U = (t) => {
            let { config: i, ...r } = t;
            return e(r);
          };
        }
        if (x) {
          "fill" === x && (b = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[x];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[x];
          t && !d && (d = t);
        }
        let N = "",
          V = a(g),
          z = a(v);
        if ((i = c) && "object" == typeof i && (s(i) || void 0 !== i.src)) {
          let e = s(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((u = e.blurWidth),
            (l = e.blurHeight),
            (_ = _ || e.blurDataURL),
            (N = e.src),
            !b)
          ) {
            if (V || z) {
              if (V && !z) {
                let t = V / e.width;
                z = Math.round(e.height * t);
              } else if (!V && z) {
                let t = z / e.height;
                V = Math.round(e.width * t);
              }
            } else (V = e.width), (z = e.height);
          }
        }
        let G = !f && ("lazy" === p || void 0 === p);
        (!(c = "string" == typeof c ? c : N) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((h = !0), (G = !1)),
          o.unoptimized && (h = !0),
          Q && c.endsWith(".svg") && !o.dangerouslyAllowSVG && (h = !0);
        let K = a(m),
          H = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: j,
                  objectPosition: M,
                }
              : {},
            F ? {} : { color: "transparent" },
            w
          ),
          W =
            k || "empty" === E
              ? null
              : "blur" === E
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: V,
                  heightInt: z,
                  blurWidth: u,
                  blurHeight: l,
                  blurDataURL: _ || "",
                  objectFit: H.objectFit,
                }) +
                '")'
              : 'url("' + E + '")',
          B = W
            ? {
                backgroundSize: H.objectFit || "cover",
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: W,
              }
            : {},
          $ = (function (e) {
            let {
              config: t,
              src: i,
              unoptimized: r,
              width: n,
              quality: s,
              sizes: a,
              loader: o,
            } = e;
            if (r) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: u, kind: l } = (function (e, t, i) {
                let { deviceSizes: r, allSizes: n } = e;
                if (i) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(i)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: n.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => n.find((t) => t >= e) || n[n.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, n, a),
              c = u.length - 1;
            return {
              sizes: a || "w" !== l ? a : "100vw",
              srcSet: u
                .map(
                  (e, r) =>
                    o({ config: t, src: i, quality: s, width: e }) +
                    " " +
                    ("w" === l ? e : r + 1) +
                    l
                )
                .join(", "),
              src: o({ config: t, src: i, quality: s, width: u[c] }),
            };
          })({
            config: o,
            src: c,
            unoptimized: h,
            width: V,
            quality: K,
            sizes: d,
            loader: U,
          });
        return {
          props: {
            ...D,
            loading: G ? "lazy" : p,
            fetchPriority: P,
            width: V,
            height: z,
            decoding: R,
            className: y,
            style: { ...H, ...B },
            sizes: $.sizes,
            srcSet: $.srcSet,
            src: O || $.src,
          },
          meta: { unoptimized: h, priority: f, placeholder: E, fill: b },
        };
      }
    },
    6107: (e, t, i) => {
      var r = i(2818);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return h;
          },
        });
      let n = i(306),
        s = i(9955),
        a = i(5155),
        o = s._(i(2115)),
        u = n._(i(1172)),
        l = i(3003),
        c = i(1147),
        d = i(675);
      function h(e) {
        void 0 === e && (e = !1);
        let t = [(0, a.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, a.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      i(2363);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function y(e, t) {
        let { inAmpMode: i } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(h(i).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                i = new Set(),
                r = {};
              return (n) => {
                let s = !0,
                  a = !1;
                if (
                  n.key &&
                  "number" != typeof n.key &&
                  n.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = n.key.slice(n.key.indexOf("$") + 1);
                  e.has(t) ? (s = !1) : e.add(t);
                }
                switch (n.type) {
                  case "title":
                  case "base":
                    t.has(n.type) ? (s = !1) : t.add(n.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (n.props.hasOwnProperty(t)) {
                        if ("charSet" === t) i.has(t) ? (s = !1) : i.add(t);
                        else {
                          let e = n.props[t],
                            i = r[t] || new Set();
                          ("name" !== t || !a) && i.has(e)
                            ? (s = !1)
                            : (i.add(e), (r[t] = i));
                        }
                      }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (
              r.env.__NEXT_OPTIMIZE_FONTS &&
              !i &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                o.default.cloneElement(e, t)
              );
            }
            return o.default.cloneElement(e, { key: n });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          i = (0, o.useContext)(l.AmpStateContext),
          r = (0, o.useContext)(c.HeadManagerContext);
        return (0, a.jsx)(u.default, {
          reduceComponentsToState: y,
          headManager: r,
          inAmpMode: (0, d.isInAmpMode)(i),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5859: (e, t) => {
      function i(e) {
        let {
            widthInt: t,
            heightInt: i,
            blurWidth: r,
            blurHeight: n,
            blurDataURL: s,
            objectFit: a,
          } = e,
          o = r ? 40 * r : t,
          u = n ? 40 * n : i,
          l = o && u ? "viewBox='0 0 " + o + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          l +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (l
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    3621: (e, t, i) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = i(306)._(i(2115)),
        n = i(1159),
        s = r.default.createContext(n.imageConfigDefault);
    },
    1159: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    4146: (e, t, i) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var i in t)
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
        })(t, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return o;
          },
        });
      let r = i(306),
        n = i(666),
        s = i(7970),
        a = r._(i(5514));
      function o(e) {
        let { props: t } = (0, n.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
        return { props: t };
      }
      let u = s.Image;
    },
    5514: (e, t) => {
      function i(e) {
        let { config: t, src: i, width: r, quality: n } = e;
        return i;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (i.__next_img_default = !0);
      let r = i;
    },
    3576: (e, t, i) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = i(306)._(i(2115)).default.createContext(null);
    },
    1172: (e, t, i) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = i(2115),
        n = "undefined" == typeof window,
        s = n ? () => {} : r.useLayoutEffect,
        a = n ? () => {} : r.useEffect;
      function o(e) {
        let { headManager: t, reduceComponentsToState: i } = e;
        function o() {
          if (t && t.mountedInstances) {
            let n = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(i(n, e));
          }
        }
        if (n) {
          var u;
          null == t || null == (u = t.mountedInstances) || u.add(e.children),
            o();
        }
        return (
          s(() => {
            var i;
            return (
              null == t ||
                null == (i = t.mountedInstances) ||
                i.add(e.children),
              () => {
                var i;
                null == t ||
                  null == (i = t.mountedInstances) ||
                  i.delete(e.children);
              }
            );
          }),
          s(
            () => (
              t && (t._pendingUpdate = o),
              () => {
                t && (t._pendingUpdate = o);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    9125: (e, t, i) => {
      var r = i(2115),
        n =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = r.useState,
        a = r.useEffect,
        o = r.useLayoutEffect,
        u = r.useDebugValue;
      function l(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var i = t();
          return !n(e, i);
        } catch (e) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var i = t(),
                r = s({ inst: { value: i, getSnapshot: t } }),
                n = r[0].inst,
                c = r[1];
              return (
                o(
                  function () {
                    (n.value = i), (n.getSnapshot = t), l(n) && c({ inst: n });
                  },
                  [e, i, t]
                ),
                a(
                  function () {
                    return (
                      l(n) && c({ inst: n }),
                      e(function () {
                        l(n) && c({ inst: n });
                      })
                    );
                  },
                  [e]
                ),
                u(i),
                i
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : c;
    },
    4236: (e, t, i) => {
      e.exports = i(9125);
    },
    383: (e, t, i) => {
      i.d(t, { E: () => F });
      var r = "undefined" == typeof window || "Deno" in globalThis;
      function n() {}
      function s(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function a(e, t) {
        let {
          type: i = "all",
          exact: r,
          fetchStatus: n,
          predicate: s,
          queryKey: a,
          stale: o,
        } = e;
        if (a) {
          if (r) {
            if (t.queryHash !== u(a, t.options)) return !1;
          } else if (!c(t.queryKey, a)) return !1;
        }
        if ("all" !== i) {
          let e = t.isActive();
          if (("active" === i && !e) || ("inactive" === i && e)) return !1;
        }
        return (
          ("boolean" != typeof o || t.isStale() === o) &&
          (!n || n === t.state.fetchStatus) &&
          (!s || !!s(t))
        );
      }
      function o(e, t) {
        let { exact: i, status: r, predicate: n, mutationKey: s } = e;
        if (s) {
          if (!t.options.mutationKey) return !1;
          if (i) {
            if (l(t.options.mutationKey) !== l(s)) return !1;
          } else if (!c(t.options.mutationKey, s)) return !1;
        }
        return (!r || t.state.status === r) && (!n || !!n(t));
      }
      function u(e, t) {
        return (t?.queryKeyHashFn || l)(e);
      }
      function l(e) {
        return JSON.stringify(e, (e, t) =>
          h(t)
            ? Object.keys(t)
                .sort()
                .reduce((e, i) => ((e[i] = t[i]), e), {})
            : t
        );
      }
      function c(e, t) {
        return (
          e === t ||
          (typeof e == typeof t &&
            !!e &&
            !!t &&
            "object" == typeof e &&
            "object" == typeof t &&
            !Object.keys(t).some((i) => !c(e[i], t[i])))
        );
      }
      function d(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length;
      }
      function h(e) {
        if (!f(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let i = t.prototype;
        return (
          !!(f(i) && i.hasOwnProperty("isPrototypeOf")) &&
          Object.getPrototypeOf(e) === Object.prototype
        );
      }
      function f(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function p(e, t, i = 0) {
        let r = [...e, t];
        return i && r.length > i ? r.slice(1) : r;
      }
      function y(e, t, i = 0) {
        let r = [t, ...e];
        return i && r.length > i ? r.slice(0, -1) : r;
      }
      var m = Symbol();
      function g(e, t) {
        return !e.queryFn && t?.initialPromise
          ? () => t.initialPromise
          : e.queryFn && e.queryFn !== m
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
      }
      var v = (function () {
          let e = [],
            t = 0,
            i = (e) => {
              e();
            },
            r = (e) => {
              e();
            },
            n = (e) => setTimeout(e, 0),
            s = (r) => {
              t
                ? e.push(r)
                : n(() => {
                    i(r);
                  });
            },
            a = () => {
              let t = e;
              (e = []),
                t.length &&
                  n(() => {
                    r(() => {
                      t.forEach((e) => {
                        i(e);
                      });
                    });
                  });
            };
          return {
            batch: (e) => {
              let i;
              t++;
              try {
                i = e();
              } finally {
                --t || a();
              }
              return i;
            },
            batchCalls:
              (e) =>
              (...t) => {
                s(() => {
                  e(...t);
                });
              },
            schedule: s,
            setNotifyFunction: (e) => {
              i = e;
            },
            setBatchNotifyFunction: (e) => {
              r = e;
            },
            setScheduler: (e) => {
              n = e;
            },
          };
        })(),
        b = class {
          constructor() {
            (this.listeners = new Set()),
              (this.subscribe = this.subscribe.bind(this));
          }
          subscribe(e) {
            return (
              this.listeners.add(e),
              this.onSubscribe(),
              () => {
                this.listeners.delete(e), this.onUnsubscribe();
              }
            );
          }
          hasListeners() {
            return this.listeners.size > 0;
          }
          onSubscribe() {}
          onUnsubscribe() {}
        },
        w = new (class extends b {
          #e;
          #t;
          #i;
          constructor() {
            super(),
              (this.#i = (e) => {
                if (!r && window.addEventListener) {
                  let t = () => e();
                  return (
                    window.addEventListener("visibilitychange", t, !1),
                    () => {
                      window.removeEventListener("visibilitychange", t);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#i);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#i = e),
              this.#t?.(),
              (this.#t = e((e) => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
              }));
          }
          setFocused(e) {
            this.#e !== e && ((this.#e = e), this.onFocus());
          }
          onFocus() {
            let e = this.isFocused();
            this.listeners.forEach((t) => {
              t(e);
            });
          }
          isFocused() {
            return "boolean" == typeof this.#e
              ? this.#e
              : globalThis.document?.visibilityState !== "hidden";
          }
        })(),
        O = new (class extends b {
          #r = !0;
          #t;
          #i;
          constructor() {
            super(),
              (this.#i = (e) => {
                if (!r && window.addEventListener) {
                  let t = () => e(!0),
                    i = () => e(!1);
                  return (
                    window.addEventListener("online", t, !1),
                    window.addEventListener("offline", i, !1),
                    () => {
                      window.removeEventListener("online", t),
                        window.removeEventListener("offline", i);
                    }
                  );
                }
              });
          }
          onSubscribe() {
            this.#t || this.setEventListener(this.#i);
          }
          onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), (this.#t = void 0));
          }
          setEventListener(e) {
            (this.#i = e),
              this.#t?.(),
              (this.#t = e(this.setOnline.bind(this)));
          }
          setOnline(e) {
            this.#r !== e &&
              ((this.#r = e),
              this.listeners.forEach((t) => {
                t(e);
              }));
          }
          isOnline() {
            return this.#r;
          }
        })();
      function C(e) {
        return Math.min(1e3 * 2 ** e, 3e4);
      }
      function S(e) {
        return (e ?? "online") !== "online" || O.isOnline();
      }
      var E = class extends Error {
        constructor(e) {
          super("CancelledError"),
            (this.revert = e?.revert),
            (this.silent = e?.silent);
        }
      };
      function _(e) {
        return e instanceof E;
      }
      function P(e) {
        let t,
          i = !1,
          n = 0,
          s = !1,
          a = (function () {
            let e, t;
            let i = new Promise((i, r) => {
              (e = i), (t = r);
            });
            function r(e) {
              Object.assign(i, e), delete i.resolve, delete i.reject;
            }
            return (
              (i.status = "pending"),
              i.catch(() => {}),
              (i.resolve = (t) => {
                r({ status: "fulfilled", value: t }), e(t);
              }),
              (i.reject = (e) => {
                r({ status: "rejected", reason: e }), t(e);
              }),
              i
            );
          })(),
          o = () =>
            w.isFocused() &&
            ("always" === e.networkMode || O.isOnline()) &&
            e.canRun(),
          u = () => S(e.networkMode) && e.canRun(),
          l = (i) => {
            s || ((s = !0), e.onSuccess?.(i), t?.(), a.resolve(i));
          },
          c = (i) => {
            s || ((s = !0), e.onError?.(i), t?.(), a.reject(i));
          },
          d = () =>
            new Promise((i) => {
              (t = (e) => {
                (s || o()) && i(e);
              }),
                e.onPause?.();
            }).then(() => {
              (t = void 0), s || e.onContinue?.();
            }),
          h = () => {
            let t;
            if (s) return;
            let a = 0 === n ? e.initialPromise : void 0;
            try {
              t = a ?? e.fn();
            } catch (e) {
              t = Promise.reject(e);
            }
            Promise.resolve(t)
              .then(l)
              .catch((t) => {
                if (s) return;
                let a = e.retry ?? (r ? 0 : 3),
                  u = e.retryDelay ?? C,
                  l = "function" == typeof u ? u(n, t) : u,
                  f =
                    !0 === a ||
                    ("number" == typeof a && n < a) ||
                    ("function" == typeof a && a(n, t));
                if (i || !f) {
                  c(t);
                  return;
                }
                n++,
                  e.onFail?.(n, t),
                  new Promise((e) => {
                    setTimeout(e, l);
                  })
                    .then(() => (o() ? void 0 : d()))
                    .then(() => {
                      i ? c(t) : h();
                    });
              });
          };
        return {
          promise: a,
          cancel: (t) => {
            s || (c(new E(t)), e.abort?.());
          },
          continue: () => (t?.(), a),
          cancelRetry: () => {
            i = !0;
          },
          continueRetry: () => {
            i = !1;
          },
          canStart: u,
          start: () => (u() ? h() : d().then(h), a),
        };
      }
      var R = class {
          #n;
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            var e;
            this.clearGcTimeout(),
              "number" == typeof (e = this.gcTime) &&
                e >= 0 &&
                e !== 1 / 0 &&
                (this.#n = setTimeout(() => {
                  this.optionalRemove();
                }, this.gcTime));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (r ? 1 / 0 : 3e5));
          }
          clearGcTimeout() {
            this.#n && (clearTimeout(this.#n), (this.#n = void 0));
          }
        },
        x = class extends R {
          #s;
          #a;
          #o;
          #u;
          #l;
          #c;
          constructor(e) {
            super(),
              (this.#c = !1),
              (this.#l = e.defaultOptions),
              this.setOptions(e.options),
              (this.observers = []),
              (this.#o = e.cache),
              (this.queryKey = e.queryKey),
              (this.queryHash = e.queryHash),
              (this.#s = (function (e) {
                let t =
                    "function" == typeof e.initialData
                      ? e.initialData()
                      : e.initialData,
                  i = void 0 !== t,
                  r = i
                    ? "function" == typeof e.initialDataUpdatedAt
                      ? e.initialDataUpdatedAt()
                      : e.initialDataUpdatedAt
                    : 0;
                return {
                  data: t,
                  dataUpdateCount: 0,
                  dataUpdatedAt: i ? r ?? Date.now() : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: i ? "success" : "pending",
                  fetchStatus: "idle",
                };
              })(this.options)),
              (this.state = e.state ?? this.#s),
              this.scheduleGc();
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            return this.#u?.promise;
          }
          setOptions(e) {
            (this.options = { ...this.#l, ...e }),
              this.updateGcTime(this.options.gcTime);
          }
          optionalRemove() {
            this.observers.length ||
              "idle" !== this.state.fetchStatus ||
              this.#o.remove(this);
          }
          setData(e, t) {
            var i, r;
            let n =
              ((i = this.state.data),
              "function" == typeof (r = this.options).structuralSharing
                ? r.structuralSharing(i, e)
                : !1 !== r.structuralSharing
                ? (function e(t, i) {
                    if (t === i) return t;
                    let r = d(t) && d(i);
                    if (r || (h(t) && h(i))) {
                      let n = r ? t : Object.keys(t),
                        s = n.length,
                        a = r ? i : Object.keys(i),
                        o = a.length,
                        u = r ? [] : {},
                        l = 0;
                      for (let s = 0; s < o; s++) {
                        let o = r ? s : a[s];
                        ((!r && n.includes(o)) || r) &&
                        void 0 === t[o] &&
                        void 0 === i[o]
                          ? ((u[o] = void 0), l++)
                          : ((u[o] = e(t[o], i[o])),
                            u[o] === t[o] && void 0 !== t[o] && l++);
                      }
                      return s === o && l === s ? t : u;
                    }
                    return i;
                  })(i, e)
                : e);
            return (
              this.#d({
                data: n,
                type: "success",
                dataUpdatedAt: t?.updatedAt,
                manual: t?.manual,
              }),
              n
            );
          }
          setState(e, t) {
            this.#d({ type: "setState", state: e, setStateOptions: t });
          }
          cancel(e) {
            let t = this.#u?.promise;
            return (
              this.#u?.cancel(e), t ? t.then(n).catch(n) : Promise.resolve()
            );
          }
          destroy() {
            super.destroy(), this.cancel({ silent: !0 });
          }
          reset() {
            this.destroy(), this.setState(this.#s);
          }
          isActive() {
            return this.observers.some((e) => {
              var t;
              return (
                !1 !==
                ("function" == typeof (t = e.options.enabled) ? t(this) : t)
              );
            });
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === m ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStale() {
            return (
              !!this.state.isInvalidated ||
              (this.getObserversCount() > 0
                ? this.observers.some((e) => e.getCurrentResult().isStale)
                : void 0 === this.state.data)
            );
          }
          isStaleByTime(e = 0) {
            return (
              this.state.isInvalidated ||
              void 0 === this.state.data ||
              !Math.max(this.state.dataUpdatedAt + (e || 0) - Date.now(), 0)
            );
          }
          onFocus() {
            let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
            e?.refetch({ cancelRefetch: !1 }), this.#u?.continue();
          }
          onOnline() {
            let e = this.observers.find((e) => e.shouldFetchOnReconnect());
            e?.refetch({ cancelRefetch: !1 }), this.#u?.continue();
          }
          addObserver(e) {
            this.observers.includes(e) ||
              (this.observers.push(e),
              this.clearGcTimeout(),
              this.#o.notify({
                type: "observerAdded",
                query: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            this.observers.includes(e) &&
              ((this.observers = this.observers.filter((t) => t !== e)),
              this.observers.length ||
                (this.#u &&
                  (this.#c
                    ? this.#u.cancel({ revert: !0 })
                    : this.#u.cancelRetry()),
                this.scheduleGc()),
              this.#o.notify({
                type: "observerRemoved",
                query: this,
                observer: e,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated || this.#d({ type: "invalidate" });
          }
          fetch(e, t) {
            if ("idle" !== this.state.fetchStatus) {
              if (void 0 !== this.state.data && t?.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (this.#u) return this.#u.continueRetry(), this.#u.promise;
            }
            if ((e && this.setOptions(e), !this.options.queryFn)) {
              let e = this.observers.find((e) => e.options.queryFn);
              e && this.setOptions(e.options);
            }
            let i = new AbortController(),
              r = (e) => {
                Object.defineProperty(e, "signal", {
                  enumerable: !0,
                  get: () => ((this.#c = !0), i.signal),
                });
              },
              n = {
                fetchOptions: t,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () => {
                  let e = g(this.options, t),
                    i = { queryKey: this.queryKey, meta: this.meta };
                  return (r(i), (this.#c = !1), this.options.persister)
                    ? this.options.persister(e, i, this)
                    : e(i);
                },
              };
            r(n),
              this.options.behavior?.onFetch(n, this),
              (this.#a = this.state),
              ("idle" === this.state.fetchStatus ||
                this.state.fetchMeta !== n.fetchOptions?.meta) &&
                this.#d({ type: "fetch", meta: n.fetchOptions?.meta });
            let s = (e) => {
              (_(e) && e.silent) || this.#d({ type: "error", error: e }),
                _(e) ||
                  (this.#o.config.onError?.(e, this),
                  this.#o.config.onSettled?.(this.state.data, e, this)),
                this.scheduleGc();
            };
            return (
              (this.#u = P({
                initialPromise: t?.initialPromise,
                fn: n.fetchFn,
                abort: i.abort.bind(i),
                onSuccess: (e) => {
                  if (void 0 === e) {
                    s(Error(`${this.queryHash} data is undefined`));
                    return;
                  }
                  try {
                    this.setData(e);
                  } catch (e) {
                    s(e);
                    return;
                  }
                  this.#o.config.onSuccess?.(e, this),
                    this.#o.config.onSettled?.(e, this.state.error, this),
                    this.scheduleGc();
                },
                onError: s,
                onFail: (e, t) => {
                  this.#d({ type: "failed", failureCount: e, error: t });
                },
                onPause: () => {
                  this.#d({ type: "pause" });
                },
                onContinue: () => {
                  this.#d({ type: "continue" });
                },
                retry: n.options.retry,
                retryDelay: n.options.retryDelay,
                networkMode: n.options.networkMode,
                canRun: () => !0,
              })),
              this.#u.start()
            );
          }
          #d(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    fetchFailureCount: e.failureCount,
                    fetchFailureReason: e.error,
                  };
                case "pause":
                  return { ...t, fetchStatus: "paused" };
                case "continue":
                  return { ...t, fetchStatus: "fetching" };
                case "fetch":
                  var i;
                  return {
                    ...t,
                    ...((i = t.data),
                    {
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                      fetchStatus: S(this.options.networkMode)
                        ? "fetching"
                        : "paused",
                      ...(void 0 === i && { error: null, status: "pending" }),
                    }),
                    fetchMeta: e.meta ?? null,
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    dataUpdateCount: t.dataUpdateCount + 1,
                    dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!e.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  };
                case "error":
                  let r = e.error;
                  if (_(r) && r.revert && this.#a)
                    return { ...this.#a, fetchStatus: "idle" };
                  return {
                    ...t,
                    error: r,
                    errorUpdateCount: t.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: t.fetchFailureCount + 1,
                    fetchFailureReason: r,
                    fetchStatus: "idle",
                    status: "error",
                  };
                case "invalidate":
                  return { ...t, isInvalidated: !0 };
                case "setState":
                  return { ...t, ...e.state };
              }
            })(this.state)),
              v.batch(() => {
                this.observers.forEach((e) => {
                  e.onQueryUpdate();
                }),
                  this.#o.notify({ query: this, type: "updated", action: e });
              });
          }
        },
        j = class extends b {
          constructor(e = {}) {
            super(), (this.config = e), (this.#h = new Map());
          }
          #h;
          build(e, t, i) {
            let r = t.queryKey,
              n = t.queryHash ?? u(r, t),
              s = this.get(n);
            return (
              s ||
                ((s = new x({
                  cache: this,
                  queryKey: r,
                  queryHash: n,
                  options: e.defaultQueryOptions(t),
                  state: i,
                  defaultOptions: e.getQueryDefaults(r),
                })),
                this.add(s)),
              s
            );
          }
          add(e) {
            this.#h.has(e.queryHash) ||
              (this.#h.set(e.queryHash, e),
              this.notify({ type: "added", query: e }));
          }
          remove(e) {
            let t = this.#h.get(e.queryHash);
            t &&
              (e.destroy(),
              t === e && this.#h.delete(e.queryHash),
              this.notify({ type: "removed", query: e }));
          }
          clear() {
            v.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          get(e) {
            return this.#h.get(e);
          }
          getAll() {
            return [...this.#h.values()];
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => a(t, e));
          }
          findAll(e = {}) {
            let t = this.getAll();
            return Object.keys(e).length > 0 ? t.filter((t) => a(e, t)) : t;
          }
          notify(e) {
            v.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          onFocus() {
            v.batch(() => {
              this.getAll().forEach((e) => {
                e.onFocus();
              });
            });
          }
          onOnline() {
            v.batch(() => {
              this.getAll().forEach((e) => {
                e.onOnline();
              });
            });
          }
        },
        M = class extends R {
          #f;
          #p;
          #u;
          constructor(e) {
            super(),
              (this.mutationId = e.mutationId),
              (this.#p = e.mutationCache),
              (this.#f = []),
              (this.state = e.state || {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
                submittedAt: 0,
              }),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#f.includes(e) ||
              (this.#f.push(e),
              this.clearGcTimeout(),
              this.#p.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#f = this.#f.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#p.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#f.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#p.remove(this));
          }
          continue() {
            return this.#u?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            this.#u = P({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#d({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#d({ type: "pause" });
              },
              onContinue: () => {
                this.#d({ type: "continue" });
              },
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#p.canRun(this),
            });
            let t = "pending" === this.state.status,
              i = !this.#u.canStart();
            try {
              if (!t) {
                this.#d({ type: "pending", variables: e, isPaused: i }),
                  await this.#p.config.onMutate?.(e, this);
                let t = await this.options.onMutate?.(e);
                t !== this.state.context &&
                  this.#d({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: i,
                  });
              }
              let r = await this.#u.start();
              return (
                await this.#p.config.onSuccess?.(
                  r,
                  e,
                  this.state.context,
                  this
                ),
                await this.options.onSuccess?.(r, e, this.state.context),
                await this.#p.config.onSettled?.(
                  r,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                ),
                await this.options.onSettled?.(r, null, e, this.state.context),
                this.#d({ type: "success", data: r }),
                r
              );
            } catch (t) {
              try {
                throw (
                  (await this.#p.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this
                  ),
                  await this.options.onError?.(t, e, this.state.context),
                  await this.#p.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context
                  ),
                  t)
                );
              } finally {
                this.#d({ type: "error", error: t });
              }
            } finally {
              this.#p.runNext(this);
            }
          }
          #d(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              v.batch(() => {
                this.#f.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#p.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        },
        q = class extends b {
          constructor(e = {}) {
            super(),
              (this.config = e),
              (this.#y = new Map()),
              (this.#m = Date.now());
          }
          #y;
          #m;
          build(e, t, i) {
            let r = new M({
              mutationCache: this,
              mutationId: ++this.#m,
              options: e.defaultMutationOptions(t),
              state: i,
            });
            return this.add(r), r;
          }
          add(e) {
            let t = T(e),
              i = this.#y.get(t) ?? [];
            i.push(e),
              this.#y.set(t, i),
              this.notify({ type: "added", mutation: e });
          }
          remove(e) {
            let t = T(e);
            if (this.#y.has(t)) {
              let i = this.#y.get(t)?.filter((t) => t !== e);
              i && (0 === i.length ? this.#y.delete(t) : this.#y.set(t, i));
            }
            this.notify({ type: "removed", mutation: e });
          }
          canRun(e) {
            let t = this.#y
              .get(T(e))
              ?.find((e) => "pending" === e.state.status);
            return !t || t === e;
          }
          runNext(e) {
            let t = this.#y.get(T(e))?.find((t) => t !== e && t.state.isPaused);
            return t?.continue() ?? Promise.resolve();
          }
          clear() {
            v.batch(() => {
              this.getAll().forEach((e) => {
                this.remove(e);
              });
            });
          }
          getAll() {
            return [...this.#y.values()].flat();
          }
          find(e) {
            let t = { exact: !0, ...e };
            return this.getAll().find((e) => o(t, e));
          }
          findAll(e = {}) {
            return this.getAll().filter((t) => o(e, t));
          }
          notify(e) {
            v.batch(() => {
              this.listeners.forEach((t) => {
                t(e);
              });
            });
          }
          resumePausedMutations() {
            let e = this.getAll().filter((e) => e.state.isPaused);
            return v.batch(() =>
              Promise.all(e.map((e) => e.continue().catch(n)))
            );
          }
        };
      function T(e) {
        return e.options.scope?.id ?? String(e.mutationId);
      }
      function D(e) {
        return {
          onFetch: (t, i) => {
            let r = t.options,
              n = t.fetchOptions?.meta?.fetchMore?.direction,
              s = t.state.data?.pages || [],
              a = t.state.data?.pageParams || [],
              o = { pages: [], pageParams: [] },
              u = 0,
              l = async () => {
                let i = !1,
                  l = (e) => {
                    Object.defineProperty(e, "signal", {
                      enumerable: !0,
                      get: () => (
                        t.signal.aborted
                          ? (i = !0)
                          : t.signal.addEventListener("abort", () => {
                              i = !0;
                            }),
                        t.signal
                      ),
                    });
                  },
                  c = g(t.options, t.fetchOptions),
                  d = async (e, r, n) => {
                    if (i) return Promise.reject();
                    if (null == r && e.pages.length) return Promise.resolve(e);
                    let s = {
                      queryKey: t.queryKey,
                      pageParam: r,
                      direction: n ? "backward" : "forward",
                      meta: t.options.meta,
                    };
                    l(s);
                    let a = await c(s),
                      { maxPages: o } = t.options,
                      u = n ? y : p;
                    return {
                      pages: u(e.pages, a, o),
                      pageParams: u(e.pageParams, r, o),
                    };
                  };
                if (n && s.length) {
                  let e = "backward" === n,
                    t = { pages: s, pageParams: a },
                    i = (
                      e
                        ? function (e, { pages: t, pageParams: i }) {
                            return t.length > 0
                              ? e.getPreviousPageParam?.(t[0], t, i[0], i)
                              : void 0;
                          }
                        : A
                    )(r, t);
                  o = await d(t, i, e);
                } else {
                  let t = e ?? s.length;
                  do {
                    let e = 0 === u ? a[0] ?? r.initialPageParam : A(r, o);
                    if (u > 0 && null == e) break;
                    (o = await d(o, e)), u++;
                  } while (u < t);
                }
                return o;
              };
            t.options.persister
              ? (t.fetchFn = () =>
                  t.options.persister?.(
                    l,
                    {
                      queryKey: t.queryKey,
                      meta: t.options.meta,
                      signal: t.signal,
                    },
                    i
                  ))
              : (t.fetchFn = l);
          },
        };
      }
      function A(e, { pages: t, pageParams: i }) {
        let r = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[r], t, i[r], i) : void 0;
      }
      var F = class {
        #g;
        #p;
        #l;
        #v;
        #b;
        #w;
        #O;
        #C;
        constructor(e = {}) {
          (this.#g = e.queryCache || new j()),
            (this.#p = e.mutationCache || new q()),
            (this.#l = e.defaultOptions || {}),
            (this.#v = new Map()),
            (this.#b = new Map()),
            (this.#w = 0);
        }
        mount() {
          this.#w++,
            1 === this.#w &&
              ((this.#O = w.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#g.onFocus());
              })),
              (this.#C = O.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#g.onOnline());
              })));
        }
        unmount() {
          this.#w--,
            0 === this.#w &&
              (this.#O?.(),
              (this.#O = void 0),
              this.#C?.(),
              (this.#C = void 0));
        }
        isFetching(e) {
          return this.#g.findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return this.#p.findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#g.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.getQueryData(e.queryKey);
          if (void 0 === t) return this.fetchQuery(e);
          {
            let i = this.defaultQueryOptions(e),
              r = this.#g.build(this, i);
            return (
              e.revalidateIfStale &&
                r.isStaleByTime(s(i.staleTime, r)) &&
                this.prefetchQuery(i),
              Promise.resolve(t)
            );
          }
        }
        getQueriesData(e) {
          return this.#g
            .findAll(e)
            .map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, i) {
          let r = this.defaultQueryOptions({ queryKey: e }),
            n = this.#g.get(r.queryHash),
            s = n?.state.data,
            a = "function" == typeof t ? t(s) : t;
          if (void 0 !== a)
            return this.#g.build(this, r).setData(a, { ...i, manual: !0 });
        }
        setQueriesData(e, t, i) {
          return v.batch(() =>
            this.#g
              .findAll(e)
              .map(({ queryKey: e }) => [e, this.setQueryData(e, t, i)])
          );
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#g.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#g;
          v.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let i = this.#g,
            r = { type: "active", ...e };
          return v.batch(
            () => (
              i.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries(r, t)
            )
          );
        }
        cancelQueries(e = {}, t = {}) {
          let i = { revert: !0, ...t };
          return Promise.all(
            v.batch(() => this.#g.findAll(e).map((e) => e.cancel(i)))
          )
            .then(n)
            .catch(n);
        }
        invalidateQueries(e = {}, t = {}) {
          return v.batch(() => {
            if (
              (this.#g.findAll(e).forEach((e) => {
                e.invalidate();
              }),
              "none" === e.refetchType)
            )
              return Promise.resolve();
            let i = { ...e, type: e.refetchType ?? e.type ?? "active" };
            return this.refetchQueries(i, t);
          });
        }
        refetchQueries(e = {}, t) {
          let i = { ...t, cancelRefetch: t?.cancelRefetch ?? !0 };
          return Promise.all(
            v.batch(() =>
              this.#g
                .findAll(e)
                .filter((e) => !e.isDisabled())
                .map((e) => {
                  let t = e.fetch(void 0, i);
                  return (
                    i.throwOnError || (t = t.catch(n)),
                    "paused" === e.state.fetchStatus ? Promise.resolve() : t
                  );
                })
            )
          ).then(n);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let i = this.#g.build(this, t);
          return i.isStaleByTime(s(t.staleTime, i))
            ? i.fetch(t)
            : Promise.resolve(i.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(n).catch(n);
        }
        fetchInfiniteQuery(e) {
          return (e.behavior = D(e.pages)), this.fetchQuery(e);
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(n).catch(n);
        }
        ensureInfiniteQueryData(e) {
          return (e.behavior = D(e.pages)), this.ensureQueryData(e);
        }
        resumePausedMutations() {
          return O.isOnline()
            ? this.#p.resumePausedMutations()
            : Promise.resolve();
        }
        getQueryCache() {
          return this.#g;
        }
        getMutationCache() {
          return this.#p;
        }
        getDefaultOptions() {
          return this.#l;
        }
        setDefaultOptions(e) {
          this.#l = e;
        }
        setQueryDefaults(e, t) {
          this.#v.set(l(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#v.values()],
            i = {};
          return (
            t.forEach((t) => {
              c(e, t.queryKey) && (i = { ...i, ...t.defaultOptions });
            }),
            i
          );
        }
        setMutationDefaults(e, t) {
          this.#b.set(l(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#b.values()],
            i = {};
          return (
            t.forEach((t) => {
              c(e, t.mutationKey) && (i = { ...i, ...t.defaultOptions });
            }),
            i
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = {
            ...this.#l.queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0,
          };
          return (
            t.queryHash || (t.queryHash = u(t.queryKey, t)),
            void 0 === t.refetchOnReconnect &&
              (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            !0 !== t.enabled && t.queryFn === m && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#l.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          this.#g.clear(), this.#p.clear();
        }
      };
    },
    5906: (e, t, i) => {
      i.d(t, { Ht: () => a });
      var r = i(2115),
        n = i(5155),
        s = r.createContext(void 0),
        a = (e) => {
          let { client: t, children: i } = e;
          return (
            r.useEffect(
              () => (
                t.mount(),
                () => {
                  t.unmount();
                }
              ),
              [t]
            ),
            (0, n.jsx)(s.Provider, { value: t, children: i })
          );
        };
    },
    6679: (e, t, i) => {
      let r;
      i.d(t, { Ay: () => ee });
      var n = i(2115),
        s = i(4236);
      let a = () => {},
        o = a(),
        u = Object,
        l = (e) => e === o,
        c = (e) => "function" == typeof e,
        d = (e, t) => ({ ...e, ...t }),
        h = (e) => c(e.then),
        f = new WeakMap(),
        p = 0,
        y = (e) => {
          let t, i;
          let r = typeof e,
            n = e && e.constructor,
            s = n == Date;
          if (u(e) !== e || s || n == RegExp)
            t = s
              ? e.toJSON()
              : "symbol" == r
              ? e.toString()
              : "string" == r
              ? JSON.stringify(e)
              : "" + e;
          else {
            if ((t = f.get(e))) return t;
            if (((t = ++p + "~"), f.set(e, t), n == Array)) {
              for (i = 0, t = "@"; i < e.length; i++) t += y(e[i]) + ",";
              f.set(e, t);
            }
            if (n == u) {
              t = "#";
              let r = u.keys(e).sort();
              for (; !l((i = r.pop())); )
                l(e[i]) || (t += i + ":" + y(e[i]) + ",");
              f.set(e, t);
            }
          }
          return t;
        },
        m = new WeakMap(),
        g = {},
        v = {},
        b = "undefined",
        w = typeof window != b,
        O = typeof document != b,
        C = () => w && typeof window.requestAnimationFrame != b,
        S = (e, t) => {
          let i = m.get(e);
          return [
            () => (!l(t) && e.get(t)) || g,
            (r) => {
              if (!l(t)) {
                let n = e.get(t);
                t in v || (v[t] = n), i[5](t, d(n, r), n || g);
              }
            },
            i[6],
            () => (!l(t) && t in v ? v[t] : (!l(t) && e.get(t)) || g),
          ];
        },
        E = !0,
        [_, P] =
          w && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [a, a],
        R = {
          initFocus: (e) => (
            O && document.addEventListener("visibilitychange", e),
            _("focus", e),
            () => {
              O && document.removeEventListener("visibilitychange", e),
                P("focus", e);
            }
          ),
          initReconnect: (e) => {
            let t = () => {
                (E = !0), e();
              },
              i = () => {
                E = !1;
              };
            return (
              _("online", t),
              _("offline", i),
              () => {
                P("online", t), P("offline", i);
              }
            );
          },
        },
        x = !n.useId,
        j = !w || "Deno" in window,
        M = (e) => (C() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
        q = j ? n.useEffect : n.useLayoutEffect,
        T = "undefined" != typeof navigator && navigator.connection,
        D =
          !j &&
          T &&
          (["slow-2g", "2g"].includes(T.effectiveType) || T.saveData),
        A = (e) => {
          if (c(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                ? y(e)
                : ""),
            t,
          ];
        },
        F = 0,
        k = () => ++F;
      var I = {
        ERROR_REVALIDATE_EVENT: 3,
        FOCUS_EVENT: 0,
        MUTATE_EVENT: 2,
        RECONNECT_EVENT: 1,
      };
      async function L(...e) {
        let [t, i, r, n] = e,
          s = d(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof n ? { revalidate: n } : n || {}
          ),
          a = s.populateCache,
          u = s.rollbackOnError,
          f = s.optimisticData,
          p = (e) => ("function" == typeof u ? u(e) : !1 !== u),
          y = s.throwOnError;
        if (c(i)) {
          let e = [];
          for (let r of t.keys())
            !/^\$(inf|sub)\$/.test(r) && i(t.get(r)._k) && e.push(r);
          return Promise.all(e.map(g));
        }
        return g(i);
        async function g(i) {
          let n;
          let [u] = A(i);
          if (!u) return;
          let [d, g] = S(t, u),
            [v, b, w, O] = m.get(t),
            C = () => {
              let e = v[u];
              return (c(s.revalidate)
                ? s.revalidate(d().data, i)
                : !1 !== s.revalidate) && (delete w[u], delete O[u], e && e[0])
                ? e[0](2).then(() => d().data)
                : d().data;
            };
          if (e.length < 3) return C();
          let E = r,
            _ = k();
          b[u] = [_, 0];
          let P = !l(f),
            R = d(),
            x = R.data,
            j = R._c,
            M = l(j) ? x : j;
          if ((P && g({ data: (f = c(f) ? f(M, x) : f), _c: M }), c(E)))
            try {
              E = E(M);
            } catch (e) {
              n = e;
            }
          if (E && h(E)) {
            if (
              ((E = await E.catch((e) => {
                n = e;
              })),
              _ !== b[u][0])
            ) {
              if (n) throw n;
              return E;
            }
            n && P && p(n) && ((a = !0), g({ data: M, _c: o }));
          }
          if (
            (a &&
              !n &&
              (c(a)
                ? g({ data: a(E, M), error: o, _c: o })
                : g({ data: E, error: o, _c: o })),
            (b[u][1] = k()),
            Promise.resolve(C()).then(() => {
              g({ _c: o });
            }),
            n)
          ) {
            if (y) throw n;
            return;
          }
          return E;
        }
      }
      let U = (e, t) => {
          for (let i in e) e[i][0] && e[i][0](t);
        },
        Q = (e, t) => {
          if (!m.has(e)) {
            let i = d(R, t),
              r = {},
              n = L.bind(o, e),
              s = a,
              u = {},
              l = (e, t) => {
                let i = u[e] || [];
                return (u[e] = i), i.push(t), () => i.splice(i.indexOf(t), 1);
              },
              c = (t, i, r) => {
                e.set(t, i);
                let n = u[t];
                if (n) for (let e of n) e(i, r);
              },
              h = () => {
                if (!m.has(e) && (m.set(e, [r, {}, {}, {}, n, c, l]), !j)) {
                  let t = i.initFocus(setTimeout.bind(o, U.bind(o, r, 0))),
                    n = i.initReconnect(setTimeout.bind(o, U.bind(o, r, 1)));
                  s = () => {
                    t && t(), n && n(), m.delete(e);
                  };
                }
              };
            return h(), [e, n, h, s];
          }
          return [e, m.get(e)[4]];
        },
        [N, V] = Q(new Map()),
        z = d(
          {
            onLoadingSlow: a,
            onSuccess: a,
            onError: a,
            onErrorRetry: (e, t, i, r, n) => {
              let s = i.errorRetryCount,
                a = n.retryCount,
                o =
                  ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) *
                  i.errorRetryInterval;
              (l(s) || !(a > s)) && setTimeout(r, o, n);
            },
            onDiscarded: a,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: D ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: D ? 5e3 : 3e3,
            compare: (e, t) => y(e) == y(t),
            isPaused: () => !1,
            cache: N,
            mutate: V,
            fallback: {},
          },
          {
            isOnline: () => E,
            isVisible: () => {
              let e = O && document.visibilityState;
              return l(e) || "hidden" !== e;
            },
          }
        ),
        G = (e, t) => {
          let i = d(e, t);
          if (t) {
            let { use: r, fallback: n } = e,
              { use: s, fallback: a } = t;
            r && s && (i.use = r.concat(s)), n && a && (i.fallback = d(n, a));
          }
          return i;
        },
        K = (0, n.createContext)({}),
        H = w && window.__SWR_DEVTOOLS_USE__,
        W = H ? window.__SWR_DEVTOOLS_USE__ : [],
        B = (e) =>
          c(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        $ = () => d(z, (0, n.useContext)(K)),
        J = W.concat((e) => (t, i, r) => {
          let n =
            i &&
            ((...e) => {
              let [r] = A(t),
                [, , , n] = m.get(N);
              if (r.startsWith("$inf$")) return i(...e);
              let s = n[r];
              return l(s) ? i(...e) : (delete n[r], s);
            });
          return e(t, n, r);
        }),
        X = (e, t, i) => {
          let r = t[e] || (t[e] = []);
          return (
            r.push(i),
            () => {
              let e = r.indexOf(i);
              e >= 0 && ((r[e] = r[r.length - 1]), r.pop());
            }
          );
        };
      H && (window.__SWR_DEVTOOLS_REACT__ = n);
      let Y =
          n.use ||
          ((e) => {
            if ("pending" === e.status) throw e;
            if ("fulfilled" === e.status) return e.value;
            if ("rejected" === e.status) throw e.reason;
            throw (
              ((e.status = "pending"),
              e.then(
                (t) => {
                  (e.status = "fulfilled"), (e.value = t);
                },
                (t) => {
                  (e.status = "rejected"), (e.reason = t);
                }
              ),
              e)
            );
          }),
        Z = { dedupe: !0 };
      u.defineProperty(
        (e) => {
          let { value: t } = e,
            i = (0, n.useContext)(K),
            r = c(t),
            s = (0, n.useMemo)(() => (r ? t(i) : t), [r, i, t]),
            a = (0, n.useMemo)(() => (r ? s : G(i, s)), [r, i, s]),
            u = s && s.provider,
            l = (0, n.useRef)(o);
          u && !l.current && (l.current = Q(u(a.cache || N), s));
          let h = l.current;
          return (
            h && ((a.cache = h[0]), (a.mutate = h[1])),
            q(() => {
              if (h) return h[2] && h[2](), h[3];
            }, []),
            (0, n.createElement)(K.Provider, d(e, { value: a }))
          );
        },
        "defaultValue",
        { value: z }
      );
      let ee =
        ((r = (e, t, i) => {
          let {
              cache: r,
              compare: a,
              suspense: u,
              fallbackData: h,
              revalidateOnMount: f,
              revalidateIfStale: p,
              refreshInterval: y,
              refreshWhenHidden: g,
              refreshWhenOffline: v,
              keepPreviousData: b,
            } = i,
            [w, O, C, E] = m.get(r),
            [_, P] = A(e),
            R = (0, n.useRef)(!1),
            T = (0, n.useRef)(!1),
            D = (0, n.useRef)(_),
            F = (0, n.useRef)(t),
            U = (0, n.useRef)(i),
            Q = () => U.current,
            N = () => Q().isVisible() && Q().isOnline(),
            [V, z, G, K] = S(r, _),
            H = (0, n.useRef)({}).current,
            W = l(h) ? i.fallback[_] : h,
            B = (e, t) => {
              for (let i in H)
                if ("data" === i) {
                  if (!a(e[i], t[i]) && (!l(e[i]) || !a(ea, t[i]))) return !1;
                } else if (t[i] !== e[i]) return !1;
              return !0;
            },
            $ = (0, n.useMemo)(() => {
              let e =
                  !!_ &&
                  !!t &&
                  (l(f) ? !Q().isPaused() && !u && (!!l(p) || p) : f),
                i = (t) => {
                  let i = d(t);
                  return (delete i._k, e)
                    ? { isValidating: !0, isLoading: !0, ...i }
                    : i;
                },
                r = V(),
                n = K(),
                s = i(r),
                a = r === n ? s : i(n),
                o = s;
              return [
                () => {
                  let e = i(V());
                  return B(e, o)
                    ? ((o.data = e.data),
                      (o.isLoading = e.isLoading),
                      (o.isValidating = e.isValidating),
                      (o.error = e.error),
                      o)
                    : ((o = e), e);
                },
                () => a,
              ];
            }, [r, _]),
            J = (0, s.useSyncExternalStore)(
              (0, n.useCallback)(
                (e) =>
                  G(_, (t, i) => {
                    B(i, t) || e();
                  }),
                [r, _]
              ),
              $[0],
              $[1]
            ),
            ee = !R.current,
            et = w[_] && w[_].length > 0,
            ei = J.data,
            er = l(ei) ? W : ei,
            en = J.error,
            es = (0, n.useRef)(er),
            ea = b ? (l(ei) ? es.current : ei) : er,
            eo =
              (!et || !!l(en)) &&
              (ee && !l(f)
                ? f
                : !Q().isPaused() && (u ? !l(er) && p : l(er) || p)),
            eu = !!(_ && t && ee && eo),
            el = l(J.isValidating) ? eu : J.isValidating,
            ec = l(J.isLoading) ? eu : J.isLoading,
            ed = (0, n.useCallback)(
              async (e) => {
                let t, r;
                let n = F.current;
                if (!_ || !n || T.current || Q().isPaused()) return !1;
                let s = !0,
                  u = e || {},
                  d = !C[_] || !u.dedupe,
                  h = () =>
                    x
                      ? !T.current && _ === D.current && R.current
                      : _ === D.current,
                  f = { isValidating: !1, isLoading: !1 },
                  p = () => {
                    z(f);
                  },
                  y = () => {
                    let e = C[_];
                    e && e[1] === r && delete C[_];
                  },
                  m = { isValidating: !0 };
                l(V().data) && (m.isLoading = !0);
                try {
                  if (
                    (d &&
                      (z(m),
                      i.loadingTimeout &&
                        l(V().data) &&
                        setTimeout(() => {
                          s && h() && Q().onLoadingSlow(_, i);
                        }, i.loadingTimeout),
                      (C[_] = [n(P), k()])),
                    ([t, r] = C[_]),
                    (t = await t),
                    d && setTimeout(y, i.dedupingInterval),
                    !C[_] || C[_][1] !== r)
                  )
                    return d && h() && Q().onDiscarded(_), !1;
                  f.error = o;
                  let e = O[_];
                  if (!l(e) && (r <= e[0] || r <= e[1] || 0 === e[1]))
                    return p(), d && h() && Q().onDiscarded(_), !1;
                  let u = V().data;
                  (f.data = a(u, t) ? u : t),
                    d && h() && Q().onSuccess(t, _, i);
                } catch (i) {
                  y();
                  let e = Q(),
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((f.error = i),
                    d &&
                      h() &&
                      (e.onError(i, _, e),
                      (!0 === t || (c(t) && t(i))) &&
                        (!Q().revalidateOnFocus ||
                          !Q().revalidateOnReconnect ||
                          N()) &&
                        e.onErrorRetry(
                          i,
                          _,
                          e,
                          (e) => {
                            let t = w[_];
                            t && t[0] && t[0](I.ERROR_REVALIDATE_EVENT, e);
                          },
                          { retryCount: (u.retryCount || 0) + 1, dedupe: !0 }
                        )));
                }
                return (s = !1), p(), !0;
              },
              [_, r]
            ),
            eh = (0, n.useCallback)((...e) => L(r, D.current, ...e), []);
          if (
            (q(() => {
              (F.current = t), (U.current = i), l(ei) || (es.current = ei);
            }),
            q(() => {
              if (!_) return;
              let e = ed.bind(o, Z),
                t = 0,
                i = X(_, w, (i, r = {}) => {
                  if (i == I.FOCUS_EVENT) {
                    let i = Date.now();
                    Q().revalidateOnFocus &&
                      i > t &&
                      N() &&
                      ((t = i + Q().focusThrottleInterval), e());
                  } else if (i == I.RECONNECT_EVENT)
                    Q().revalidateOnReconnect && N() && e();
                  else if (i == I.MUTATE_EVENT) return ed();
                  else if (i == I.ERROR_REVALIDATE_EVENT) return ed(r);
                });
              return (
                (T.current = !1),
                (D.current = _),
                (R.current = !0),
                z({ _k: P }),
                eo && (l(er) || j ? e() : M(e)),
                () => {
                  (T.current = !0), i();
                }
              );
            }, [_]),
            q(() => {
              let e;
              function t() {
                let t = c(y) ? y(V().data) : y;
                t && -1 !== e && (e = setTimeout(i, t));
              }
              function i() {
                !V().error && (g || Q().isVisible()) && (v || Q().isOnline())
                  ? ed(Z).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [y, g, v, _]),
            (0, n.useDebugValue)(ea),
            u && l(er) && _)
          ) {
            if (!x && j)
              throw Error(
                "Fallback data is required when using suspense in SSR."
              );
            (F.current = t), (U.current = i), (T.current = !1);
            let e = E[_];
            if ((l(e) || Y(eh(e)), l(en))) {
              let e = ed(Z);
              l(ea) || ((e.status = "fulfilled"), (e.value = !0)), Y(e);
            } else throw en;
          }
          return {
            mutate: eh,
            get data() {
              return (H.data = !0), ea;
            },
            get error() {
              return (H.error = !0), en;
            },
            get isValidating() {
              return (H.isValidating = !0), el;
            },
            get isLoading() {
              return (H.isLoading = !0), ec;
            },
          };
        }),
        function (...e) {
          let t = $(),
            [i, n, s] = B(e),
            a = G(t, s),
            o = r,
            { use: u } = a,
            l = (u || []).concat(J);
          for (let e = l.length; e--; ) o = l[e](o);
          return o(i, n || a.fetcher || null, a);
        });
    },
  },
]);
