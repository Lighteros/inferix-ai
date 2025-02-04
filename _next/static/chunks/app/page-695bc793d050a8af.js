(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    4356: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 4604));
    },
    4604: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => $ });
      var a = s(5155),
        l = s(383),
        i = s(5906);
      s(3783);
      var r = s(2115),
        n = s(8510),
        A = s(6046);
      let o = () => {
        let e = (0, A.useRouter)();
        return (
          (0, r.useEffect)(() => {
            Promise.all([s.e(367), s.e(831), s.e(812)]).then(s.bind(s, 9812));
          }, []),
          (0, a.jsx)("div", {
            className: "mvp",
            id: "mvp",
            children: (0, a.jsxs)("div", {
              className: "mvp-container",
              children: [
                (0, a.jsx)("model-viewer", {
                  src: "/_next/static/media/models_fan.10ac4d2e16f0953a80306aeea7da3f2d.glb",
                  alt: "A 3D model",
                  "auto-rotate": !0,
                  autoplay: !0,
                  "rotation-per-second": "1rad",
                  "disable-loading": !0,
                  className: "h-[350px] w-[200px] max-sm:hidden",
                  "camera-controls": !0,
                  "min-camera-orbit": "auto 70deg",
                  "max-camera-orbit": "auto 70deg",
                  "disable-pan": !0,
                  "disable-zoom": !0,
                }),
                (0, a.jsxs)("div", {
                  className: "content",
                  children: [
                    (0, a.jsxs)("span", {
                      children: [
                        "DePIN ",
                        (0, a.jsx)("br", {}),
                        " On-chain Verification Technology",
                      ],
                    }),
                    (0, a.jsx)(n.A, {
                      content: "Inferix Explorer",
                      onClick: () => {
                        e.push("https://app.inferixai.cc");
                      },
                      isActive: !0,
                      stylesContent: {
                        fontSize: "14px",
                        fontFamily: "Inter, sans-serif",
                      },
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
      var c = s(5752);
      let d = {
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #FFFFFF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Rubik, sans-serif",
        },
        m = {
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 8.85%, #FFFFFF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        x = () => {
          let e = (0, A.useRouter)();
          return (0, a.jsx)("div", {
            className: "w-full bg-black overflow-hidden",
            style: { fontFamily: "Inter, sans-serif" },
            children: (0, a.jsxs)("div", {
              className:
                "relative z-[21] w-full sm:w-[526px] lg:w-[1028px] max-w-[378px] sm:max-w-full lg:h-[404px] m-auto p-3.5 flex flex-col lg:flex-row gap-1.5 rounded-lg border border-white/10 bg-white/5 shadow-[inset_0px_0px_0px_6px_rgba(255,255,255,0.03)]",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "absolute top-1.5 left-1.5 flex gap-2 w-[calc(100%-12px)] sm:w-[512px] lg:w-[1014px] h-[calc(100%-12px)] lg:h-[388px] bg-black/35 backdrop-blur-[5px] rounded-lg",
                }),
                (0, a.jsxs)("div", {
                  className:
                    "w-full sm:w-[496px] h-[440px] sm:h-[374px] bg-[#76767629] backdrop-blur-[58px] flex justify-center rounded-[8px] border-b-[2px] sm:border-[0px] border-[#25272670] sm:shadow-none shadow-[inset_2px_4px_16px_2px_rgba(248,248,248,0.06)]",
                  children: [
                    (0, a.jsx)("img", {
                      className: "sm:hidden absolute",
                      src: "/assets/images/GPUsCard_bg_mobile.png",
                      alt: "GPUsCard",
                      width: 348,
                      height: 420,
                    }),
                    (0, a.jsx)("img", {
                      className: "hidden sm:block",
                      src: "/assets/images/GPUsCard.png",
                      alt: "GPUsCard",
                      width: 496,
                      height: 374,
                    }),
                    (0, a.jsx)("span", {
                      className:
                        "absolute max-sm:hidden font-bold top-[35px] sm:top-5 sm:left-16 text-white",
                      style: d,
                      children: "NVIDIA H100 GPUs",
                    }),
                    (0, a.jsx)("span", {
                      className:
                        "absolute max-sm:hidden font-normal top-[212px] sm:top-auto sm:bottom-[30px] sm:left-[70px]",
                      style: m,
                      children: "Already on board",
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "absolute top-[300px] sm:top-[108px] sm:left-[266px] w-full max-w-[270px] sm:w-[204px] flex flex-col items-center sm:items-start text-center sm:text-left gap-2",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "text-[#F8F8F8F2] font-medium text-[14px] sm:text-[18px]",
                          children: "NVIDIA H100 GPUs",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-[#9D9D9D] font-normal text-[12px] sm:text-[14px] sm:min-h-16",
                          children:
                            "The most advanced hardware system today with 320++ NVIDIA H100 GPUs",
                        }),
                        (0, a.jsx)("button", {
                          className:
                            "relative w-[112px] h-[34px] sm:w-[160px] sm:h-[50px] rounded-[96px] overflow-hidden mt-2 sm:mt-4",
                          style: {
                            border: "none",
                            background:
                              "linear-gradient(var(--a), #0effB3 5%, #7affB2 20%, #FFFFFF 50%, #7effB2 80%, #2CD9FF 95%)",
                            animation:
                              "rotateBackground 2s ease-in-out infinite",
                            boxShadow:
                              "0px 2px 26px 0px rgba(27, 118, 255, 0.37), 0px 2px 33px 0px rgba(0, 255, 56, 0.22)",
                          },
                          onClick: () => {
                            e.push("/mvp");
                          },
                          children: (0, a.jsx)("div", {
                            className:
                              "absolute top-0 left-0 translate-y-[1.5px] translate-x-[1.5px] w-[109px] h-[31px] sm:w-[157px] sm:h-[47px] rounded-[96px] bg-black flex justify-center items-center text-[12px] sm:text-[14px] text-white hover:bg-[#7EFFB2CF] hover:text-black",
                            children: "View MVP",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "w-full sm:w-[496px] h-[440px] sm:h-[374px] bg-[#76767629] backdrop-blur-[58px] flex justify-center rounded-[8px] border-[2px] lg:border-[0px] border-[#25272670] shadow-[inset_2px_4px_16px_0px_rgba(248,248,248,0.06)]",
                  children: [
                    (0, a.jsx)("img", {
                      className: "sm:hidden absolute",
                      src: "/assets/images/downloadCard_bg_mobile.png",
                      alt: "GPUsCard",
                      width: 344,
                      height: 415,
                    }),
                    (0, a.jsx)("img", {
                      className: "hidden sm:block absolute top-2 left-2",
                      src: "/assets/images/downloadCard_bg.png",
                      alt: "downloadCard",
                      width: 240,
                      height: 358,
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "absolute top-[300px] sm:top-[108px] sm:left-[266px] w-full sm:w-[204px] flex flex-col items-center sm:items-start text-center sm:text-left gap-2",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "text-[#F8F8F8F2] font-medium text-[14px] sm:text-[18px]",
                          children: "Visual Computing MVP",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "text-[#9D9D9D] font-normal text-[12px] sm:text-[14px] sm:min-h-16",
                          children:
                            "Superior technology for 10x rendering speed",
                        }),
                        (0, a.jsx)("button", {
                          className:
                            "relative w-[112px] h-[34px] sm:w-[160px] sm:h-[50px] rounded-[96px] overflow-hidden mt-2 sm:mt-4",
                          style: {
                            border: "none",
                            background:
                              "linear-gradient(var(--a), #0effB3 5%, #7affB2 20%, #FFFFFF 50%, #7effB2 80%, #2CD9FF 95%)",
                            animation:
                              "rotateBackground 2s ease-in-out infinite",
                            boxShadow:
                              "0px 2px 26px 0px rgba(27, 118, 255, 0.37), 0px 2px 33px 0px rgba(0, 255, 56, 0.22)",
                          },
                          onClick: () => {
                            e.push("https://app.inferixai.cc");
                          },
                          children: (0, a.jsx)("div", {
                            className:
                              "absolute top-0 left-0 translate-y-[1.5px] translate-x-[1.5px] w-[109px] h-[31px] sm:w-[157px] sm:h-[47px] rounded-[96px] bg-black flex justify-center items-center text-[12px] sm:text-[14px] text-white hover:bg-[#7EFFB2CF] hover:text-black",
                            children: "Launch App",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var p = s(9990),
        u = s.n(p);
      s(8689);
      var h = s(8114);
      let g = {
          url: "https://testnet.inferix.io",
          api_get_workers: "/api/v3/worker-mgt/workers",
        },
        b = () => {
          let e = (0, r.useRef)(null),
            t = (0, r.useRef)(null),
            [s, l] = (0, r.useState)(null),
            { data: i } = (0, h.A)("".concat(g.url).concat(g.api_get_workers)),
            n = (e) => {
              let t = {
                type: "FeatureCollection",
                features: e.workers.map((e) => ({
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [e.longitude, e.latitude],
                  },
                  properties: { id: e.id, name: e.name },
                })),
              };
              l(t), localStorage.setItem("myFeaturesData", JSON.stringify(t));
            };
          return (
            (0, r.useEffect)(() => {
              i && n(i);
            }, [i]),
            (0, r.useEffect)(() => {
              if (!u().supported()) {
                console.error("Your browser does not support Mapbox GL");
                return;
              }
              let s = null;
              u().accessToken =
                "pk.eyJ1Ijoic2FzZWVtZSIsImEiOiJjbTE3aTZqNW8wNWNiMmxvZjRxMm1qNGl1In0.vOrvAx3sdXExqlhglSjvvA";
              let a = new (u().Map)({
                container: e.current,
                style: "mapbox://styles/mapbox/dark-v11",
                center: [0, 14.0583],
                zoom: 0,
                maxZoom: 8,
                projection: "mercator",
              });
              (t.current = a),
                a.on("load", () => {
                  let e = localStorage.getItem("myFeaturesData"),
                    s = e ? JSON.parse(e) : null;
                  t.current && s
                    ? l(s)
                    : setTimeout(() => {
                        let e = localStorage.getItem("myFeaturesData"),
                          t = e ? JSON.parse(e) : null;
                        t && l(t);
                      }, 2e3);
                });
              let l = (e) => {
                var a, l, i, r, n, A, o, c;
                null === (a = t.current) ||
                  void 0 === a ||
                  a.addSource("earthquakes", {
                    type: "geojson",
                    data: e,
                    cluster: !0,
                    clusterMaxZoom: 14,
                    clusterRadius: 35,
                  }),
                  null === (l = t.current) ||
                    void 0 === l ||
                    l.addLayer({
                      id: "clusters",
                      type: "circle",
                      source: "earthquakes",
                      filter: ["has", "point_count"],
                      paint: {
                        "circle-color": [
                          "step",
                          ["get", "point_count"],
                          "#00C085",
                          100,
                          "#00C085",
                          750,
                          "#00C085",
                        ],
                        "circle-radius": [
                          "step",
                          ["get", "point_count"],
                          20,
                          100,
                          30,
                          750,
                          40,
                        ],
                      },
                    }),
                  null === (i = t.current) ||
                    void 0 === i ||
                    i.addLayer({
                      id: "clusters-outter",
                      type: "circle",
                      source: "earthquakes",
                      filter: ["has", "point_count"],
                      paint: {
                        "circle-color": [
                          "step",
                          ["get", "point_count"],
                          "#00C085",
                          100,
                          "#00C085",
                          750,
                          "#00C085",
                        ],
                        "circle-radius": [
                          "step",
                          ["get", "point_count"],
                          20,
                          100,
                          30,
                          750,
                          40,
                        ],
                      },
                    }),
                  null === (r = t.current) ||
                    void 0 === r ||
                    r.addLayer({
                      id: "unclustered-point-inner",
                      type: "circle",
                      source: "earthquakes",
                      filter: ["!", ["has", "point_count"]],
                      paint: { "circle-color": "#00C085", "circle-radius": 4 },
                    }),
                  null === (n = t.current) ||
                    void 0 === n ||
                    n.addLayer({
                      id: "unclustered-point-outter",
                      type: "circle",
                      source: "earthquakes",
                      filter: ["!", ["has", "point_count"]],
                      paint: { "circle-color": "#00C085", "circle-radius": 4 },
                    }),
                  null === (A = t.current) ||
                    void 0 === A ||
                    A.addLayer({
                      id: "cluster-count",
                      type: "symbol",
                      source: "earthquakes",
                      filter: ["has", "point_count"],
                      layout: {
                        "text-field": ["get", "point_count_abbreviated"],
                        "text-font": [
                          "DIN Offc Pro Medium",
                          "Arial Unicode MS Bold",
                        ],
                        "text-size": 12,
                      },
                    }),
                  (function () {
                    let e = null;
                    requestAnimationFrame(function s(a) {
                      var l, i;
                      e || (e = a);
                      let r = a - e,
                        n = Math.min(r / 2e3, 1),
                        A = 0 + 0.6 * (1 - Math.abs(1 - 2 * n));
                      null === (l = t.current) ||
                        void 0 === l ||
                        l.setPaintProperty(
                          "clusters-outter",
                          "circle-radius",
                          30 + 20 * n
                        ),
                        null === (i = t.current) ||
                          void 0 === i ||
                          i.setPaintProperty(
                            "clusters-outter",
                            "circle-opacity",
                            A
                          ),
                        r < 2e3
                          ? requestAnimationFrame(s)
                          : setTimeout(() => {
                              (e = null), requestAnimationFrame(s);
                            }, 900);
                    });
                  })(),
                  null === (o = t.current) ||
                    void 0 === o ||
                    o.on("click", "unclustered-point", (e) => {
                      if (e.features && e.features.length > 0) {
                        let s = e.features[0];
                        if ("Point" === s.geometry.type) {
                          let a = s.geometry.coordinates.slice();
                          if (s.properties) {
                            let l = s.properties.mag,
                              i = 1 === s.properties.tsunami ? "yes" : "no";
                            for (; Math.abs(e.lngLat.lng - a[0]) > 180; )
                              a[0] += e.lngLat.lng > a[0] ? 360 : -360;
                            t.current &&
                              new (u().Popup)()
                                .setLngLat([a[0], a[1]])
                                .setHTML(
                                  "Magnitude: "
                                    .concat(l, "<br>Was there a tsunami?: ")
                                    .concat(i)
                                )
                                .addTo(t.current);
                          }
                        }
                      }
                    }),
                  null === (c = t.current) ||
                    void 0 === c ||
                    c.on("click", "clusters", (e) => {
                      var s, a, l, i;
                      let r =
                          null === (s = t.current) || void 0 === s
                            ? void 0
                            : s.queryRenderedFeatures(e.point, {
                                layers: ["clusters"],
                              }),
                        n =
                          null == r
                            ? void 0
                            : null === (l = r[0]) || void 0 === l
                            ? void 0
                            : null === (a = l.properties) || void 0 === a
                            ? void 0
                            : a.cluster_id;
                      if (n && (null == r ? void 0 : r[0]) && t.current) {
                        let e = r[0].geometry;
                        if ("Point" === e.type) {
                          let s = e.coordinates;
                          if (Array.isArray(s) && 2 === s.length) {
                            let e =
                              null === (i = t.current) || void 0 === i
                                ? void 0
                                : i.getSource("earthquakes");
                            e &&
                              e.getClusterExpansionZoom(n, (e, a) => {
                                if (!e && null != a && t.current) {
                                  var l;
                                  null === (l = t.current) ||
                                    void 0 === l ||
                                    l.easeTo({ center: s, zoom: a });
                                }
                              });
                          } else
                            console.warn(
                              "Coordinates are not in the expected format:",
                              s
                            );
                        } else console.warn("Geometry is not a Point:", e);
                      }
                    }),
                  (() => {
                    let e = null,
                      a = (l) => {
                        if (!t.current) return;
                        e || (e = l);
                        let i = l - e,
                          r = Math.min(i / 2e3, 1),
                          n = 0 + 0.6 * (1 - Math.abs(1 - 2 * r));
                        t.current.setPaintProperty(
                          "unclustered-point-outter",
                          "circle-radius",
                          10 + 10 * r
                        ),
                          t.current.setPaintProperty(
                            "unclustered-point-outter",
                            "circle-opacity",
                            n
                          ),
                          i < 2e3
                            ? (s = requestAnimationFrame(a))
                            : setTimeout(() => {
                                (e = null), (s = requestAnimationFrame(a));
                              }, 900);
                      };
                    s = requestAnimationFrame(a);
                  })();
              };
              return () => {
                var e;
                s && cancelAnimationFrame(s),
                  null === (e = t.current) || void 0 === e || e.remove(),
                  (t.current = null);
              };
            }, []),
            (0, a.jsx)("div", {
              className:
                "bg-black flex w-full justify-center items-center pl-1.5 pr-1.5 ",
              children: (0, a.jsx)("div", {
                ref: e,
                className:
                  "mt-[20px] mb-2 sm:mb-6 rounded-[16px] w-full max-w-[1036px] h-[416px] sm:h-[428px]",
              }),
            })
          );
        },
        f = () =>
          (0, a.jsxs)("div", {
            className:
              "w-full max-w-full bg-black min-h-[850px] flex flex-col gap-2 sm:gap-6 pl-1.5 pr-1.5",
            style: { fontFamily: "Inter, sans-serif" },
            children: [
              (0, a.jsx)("div", {
                className:
                  "flex justify-center items-center w-full max-w-[1036px] h-[130px] sm:h-[230px] m-auto rounded-2xl bg-[url('/assets/images/technologies_bg_mobile.png')] sm:bg-[url('/assets/images/technologies_bg.png')] bg-cover bg-center",
                children: (0, a.jsx)("span", {
                  className:
                    "text-[24px] sm:text-[32px] lg:text-[40px] text-white font-normal align-middle z-10",
                  children: "Proven Technologies",
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "w-[1036px] max-w-full m-auto flex gap-2 sm:gap-6 flex-col lg:flex-row",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "w-full lg:w-1/2 flex flex-col justify-between gap-2 sm:gap-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "w-full h-1/2 bg-[#171717CC] rounded-2xl relative flex justify-center sm:justify-end items-center shadow-[inset_0px_-2px_8px_rgba(248,248,248,0.06)] sm:shadow-none",
                        children: [
                          (0, a.jsx)("img", {
                            className: "hidden sm:block",
                            src: "/assets/images/tech_1.png",
                            alt: "technologies",
                            width: 384,
                            height: 284,
                          }),
                          (0, a.jsx)("img", {
                            className: "sm:hidden",
                            src: "/assets/images/tech_1_mobile.png",
                            alt: "technologies",
                            width: 380,
                            height: 284,
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "absolute bottom-9 sm:bottom-auto sm:left-12 sm:max-w-[150px] text-white/70 font-normal text-[14px] sm:text-[24px]",
                            children: "Federated AI Training Platform",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-full h-1/2 bg-[#171717CC] rounded-2xl relative flex justify-center sm:justify-end items-center",
                        children: [
                          (0, a.jsx)("img", {
                            className: "hidden sm:block",
                            src: "/assets/images/tech_2.png",
                            alt: "technologies",
                            width: 376,
                            height: 284,
                          }),
                          (0, a.jsx)("div", {
                            className: "sm:hidden w-full flex justify-end",
                            children: (0, a.jsx)("img", {
                              src: "/assets/images/tech_2_mobile.png",
                              alt: "technologies",
                              width: 380,
                              height: 284,
                            }),
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "absolute bottom-9 sm:bottom-auto sm:left-12 sm:max-w-[150px] text-white/70 font-normal text-[14px] sm:text-[24px]",
                            children: "Decentralized Computing Framework",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "w-full lg:w-1/2 flex flex-col justify-between gap-2 sm:gap-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "w-full h-1/3 bg-[#171717CC] rounded-2xl relative flex justify-end items-center",
                        children: [
                          (0, a.jsx)("img", {
                            src: "/assets/images/tech_3.png",
                            alt: "technologies",
                            width: 285,
                            height: 182,
                          }),
                          (0, a.jsx)("img", {
                            className:
                              "absolute bottom-0 left-[calc(50%-135px)]",
                            src: "/assets/images/tech_bottom.svg",
                            alt: "technologies",
                            width: 270,
                            height: 32,
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "absolute left-10 text-white/70 font-normal text-[14px] sm:text-[24px]",
                            children: "Proof of Rendering",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-full h-1/3 bg-[#171717CC] rounded-2xl relative flex justify-end items-center",
                        children: [
                          (0, a.jsx)("img", {
                            src: "/assets/images/tech_4.png",
                            alt: "technologies",
                            width: 272,
                            height: 182,
                          }),
                          (0, a.jsx)("img", {
                            className:
                              "absolute bottom-0 left-[calc(50%-135px)]",
                            src: "/assets/images/tech_bottom.svg",
                            alt: "technologies",
                            width: 270,
                            height: 32,
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "absolute left-10 text-white/70 font-normal text-[14px] sm:text-[24px]",
                            children: "WebVR Auto-content",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-full h-1/3 bg-[#171717CC] rounded-2xl relative flex justify-end items-center",
                        children: [
                          (0, a.jsx)("img", {
                            src: "/assets/images/tech_5.png",
                            alt: "technologies",
                            width: 220,
                            height: 182,
                          }),
                          (0, a.jsx)("img", {
                            className:
                              "absolute bottom-0 left-[calc(50%-135px)]",
                            src: "/assets/images/tech_bottom.svg",
                            alt: "technologies",
                            width: 270,
                            height: 32,
                          }),
                          (0, a.jsx)("span", {
                            className:
                              "absolute left-10 text-white/70 font-normal text-[14px] sm:text-[24px]",
                            children: "Decentralized 3D Data",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
      s(1041);
      var w = s(3628);
      s(2252), s(1241);
      var v = s(5565);
      let j = (e) => {
        let { time: t, images: s, url: l, title: i, location: r } = e;
        return (0, a.jsxs)("div", {
          className: "card",
          onClick: () => {
            window.open(l, "_blank");
          },
          children: [
            (0, a.jsx)("div", { className: "card-header", children: t }),
            (0, a.jsxs)("div", {
              className: "card-body",
              children: [
                (0, a.jsxs)("div", {
                  className: "group-text",
                  children: [
                    (0, a.jsx)("span", { children: i }),
                    (0, a.jsx)("span", { children: r }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "group-image",
                  children: [
                    (0, a.jsx)(v.default, {
                      className: "rounded-[8px]",
                      src: s[0],
                      alt: "event",
                      width: 294,
                      height: 148,
                    }),
                    (0, a.jsx)(v.default, {
                      className: "rounded-[8px]",
                      src: s[1],
                      alt: "event",
                      width: 294,
                      height: 148,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var N = s(5476);
      let C = {
          src: "/_next/static/media/r3al_world_denver_1.d780c743.webp",
          height: 180,
          width: 320,
          blurDataURL:
            "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAkA4JZwAApzv893gAP71+x9hoLm64Svu7YUa+p0u7AXYrZlMagAAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        y = {
          src: "/_next/static/media/r3al_world_denver.a95d1677.png",
          height: 480,
          width: 862,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEUHCAgrLC8pMDIiJykwNTcRGBtbn6tvk5lkaE6KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nCXGuQEAMAjEMN9D2H/jFKgSo1YBUiu+WFdg3n4E9ABGNdNCBgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 4,
        },
        I = {
          src: "/_next/static/media/depin_meetup.d4a4b715.webp",
          height: 180,
          width: 320,
          blurDataURL:
            "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAADwAQCdASoIAAUAAkA4JbACdAD0kXw0mwAA/vxOJ5kM9LJCOVbZkyhE7tIrttSBC4p0CHwt9MEJuD/nyyB6Ov+64AA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        k = {
          src: "/_next/static/media/vn-depin-meetup-1.e4ed2f69.webp",
          height: 960,
          width: 1280,
          blurDataURL:
            "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAADQAQCdASoIAAYAAkA4JZQCdAD0PPBfEADwPyhQz6N/p6V5+wVWXvIn5vUZrJAZdNcLHzg/LvifvmLm2V+ufWCTuosgsneIAAA=",
          blurWidth: 8,
          blurHeight: 6,
        },
        E = {
          src: "/_next/static/media/consensus2024.8aee7f8a.webp",
          height: 180,
          width: 320,
          blurDataURL:
            "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAADQAQCdASoIAAUAAkA4JbACdADzfGRLwAD+xgKXv6refikc68Kr9OuTPEsFO9TX/iMaBO/wwm/vU5oWR9iF967gu+o9XJMmDIKvP5WpbAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        U = {
          src: "/_next/static/media/IOTEX-61464.7970e057.webp",
          height: 1080,
          width: 1620,
          blurDataURL:
            "data:image/webp;base64,UklGRkwAAABXRUJQVlA4IEAAAACwAQCdASoIAAUAAkA4JYwCdADze7hYAP734SNg0JGj/ieKjADc9wqv4SScakf0KvB0NaQKdndTbs987m+iggAA",
          blurWidth: 8,
          blurHeight: 5,
        },
        F = {
          src: "/_next/static/media/vn_depin_happy_hour.3ac3fd0b.webp",
          height: 180,
          width: 320,
          blurDataURL:
            "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JQBOgCIiq0tHAAD+97MvPMKZY99J1PPq15y5dtlgxJ93CMxwEbXMQAA=",
          blurWidth: 8,
          blurHeight: 5,
        },
        B = {
          src: "/_next/static/media/vn_depin_happy_hour_1.4f75b866.webp",
          height: 3744,
          width: 5616,
          blurDataURL:
            "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoIAAUAAkA4JZACdAEUmfTNAAD+9F+oqOPv0FWf7YxuKq+U6/D+s/1ny+brbG0M+6w0H3aAxA1d0lLAZm414QAA",
          blurWidth: 8,
          blurHeight: 5,
        },
        D = {
          src: "/_next/static/media/depin_house_ethcc.1a8b12b5.webp",
          height: 180,
          width: 320,
          blurDataURL:
            "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoIAAUAAkA4JbACdAEegKlJwAD+kacmJj1XHVBUvTZpZWpO9yjv/EYx2rwkEaf6G8wfc1m69KH6jtoIJ2mNIKvP3jjaAAAA",
          blurWidth: 8,
          blurHeight: 5,
        },
        _ = {
          src: "/_next/static/media/depin_house_ethcc_1.21e1270d.png",
          height: 480,
          width: 859,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAANlBMVEVHRkZyaV5qX1ZpX0ldXFZ7eXZ+gXzZ4+lfU0lOTU+VlZOBe148Ozo9OTZxa2lZTDenqaaRh2sC8/2XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nAXBhwEAIAgDsIJAwe3/z5pgdJK8D03Cw3eDIYHSg6lZMFkfEHkA1UzUEiUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 4,
        },
        R = {
          src: "/_next/static/media/GX_9i5wb0AAhTp4.51166f80.webp",
          height: 854,
          width: 1280,
          blurDataURL:
            "data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoIAAUAAkA4JZACdAEO+M4GwAD+t3o1CmPUsU2B76bR8Bx33BqWMIEN89/G3tMaWcvAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        Q = {
          src: "/_next/static/media/GX_9i6pb0AQE8BA.4bad35bc.webp",
          height: 854,
          width: 1280,
          blurDataURL:
            "data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAAAQAgCdASoIAAUAAkA4JbACdLoAAslMIPGgAP7ookhELTizMrTffH1JQIAZDopmNZQCZ8fNMinFf8YI+nSz/Z38Y+Ltb4mntQAAAA==",
          blurWidth: 8,
          blurHeight: 5,
        },
        M = {
          src: "/_next/static/media/devcon.995af655.jpg",
          height: 383,
          width: 680,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAVAQEBAAAAAAAAAAAAAAAAAAADBv/aAAwDAQACEAMQAAAAhBUB/8QAGxAAAgEFAAAAAAAAAAAAAAAAAQIAAwQTQXH/2gAIAQEAAT8Aa6DUiuFO7n//xAAZEQACAwEAAAAAAAAAAAAAAAACAwABMZH/2gAIAQIBAT8AJraxh9n/xAAWEQEBAQAAAAAAAAAAAAAAAAABAAL/2gAIAQMBAT8ANN//2Q==",
          blurWidth: 8,
          blurHeight: 5,
        },
        P = {
          src: "/_next/static/media/devcon_1.8bd11fcb.png",
          height: 626,
          width: 1122,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAM1BMVEV2ZleSeF12XEZkSjeAZE2fgVe2mG9NQzhsWUZwVTmNfWDFp32Vk5fV4OSIaFCttKqvrq/ufS1qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nAXBhwEAIAzAoFQ73f9fK7CvDjLgrSNUQoQkXRs+3YyoDw+nAMdQQGrvAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        V = {
          src: "/_next/static/media/iotex_real_talk.de7a43ec.webp",
          height: 345,
          width: 622,
          blurDataURL:
            "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoIAAQAAkA4JbACdADcy2SQAPzq3mYB7P3XrfoXQx/O6TuH/y1fYDn3tN/9mCaQn/wGC0e9972IrIfaxj4v+J34AAA=",
          blurWidth: 8,
          blurHeight: 4,
        },
        X = {
          src: "/_next/static/media/iotex_real_talk_1.b5b10c42.png",
          height: 475,
          width: 859,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEU3IBasoJD+/OxGJxs5PD9BLSNOMicwMz5CNDJVNyZkQDAiFA4uIR2EcmO4qpmvnIigg2qUg3OIc2Kf7YqzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhwEAIAgDsIJMF+r/x5pA3FM9JnrIeZGGZpt5KYAsoovxARGOAO5JySNZAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        L = {
          src: "/_next/static/media/dimo.f30cd8d2.png",
          height: 180,
          width: 320,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEW2s7PMy8vBwcHk4ePa2tvu6efc1NPU1NXLxsW+ubeuq6zq2doh60LIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBiQHAIAwDsbOdB+j++1YC4F0e3VlVPiqRjyEtWzPU7Or6/A1uAKKk7kO1AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        S = {
          src: "/_next/static/media/WW32.508afd50.png",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEUoRD0ZODESMywCBAUVIBU1OTsJHBA6TkZUgGtLZ1wELCMDIx86jGonclQnRinLHizVAAAACXBIWXMAAC4jAAAuIwF4pT92AAAALUlEQVR4nAXBiQHAMAgDsbOBPCTt/uNGoqrmvp9Q26wlON3/3ADyyExkj4iIBxPMAMN7o4HoAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        },
        W = {
          src: "/_next/static/media/depin_state_1.888b01b2.png",
          height: 180,
          width: 320,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEX8/fy0tLSnsLFwVI7U1Nrl5ub39vfv8O/JyMjz8/Pf4ODp59d/dpvl7OqpqanCyc46OzszNDSC6V3jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nAXBhwEAIAjAsIrIcPv/sybsoiOkBEkLA7iu07M5z7Uu6wlIPcAHFasA6lzKTZkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        G = {
          src: "/_next/static/media/depin_state.9bc2d764.png",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEUNFBU4VlgYGhsoXl9YiY4nKSgRQzgWISMjQEIaLCtHdnMsUFA6XWFAhXsXS0gxRkgeXV8jXEFRmYEfSDYcl66WAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAL0lEQVR4nAXBhwEAIAjAsKoo4B7//2qCWwhdWqSUuZOMR9RlXe4ho2nU6mTAmusHG/cBNg1akzoAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        T = {
          src: "/_next/static/media/depin_cohort.e145895a.png",
          height: 418,
          width: 749,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEVUg7FaTLRViqhakqNGbbpOV7hPe7ZmnKNrQrFidLxnj7NybbuBl8B0ir+XFb3WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nAXBhQEAMAwDoGR1+//dAZKcIRNWt3tlUEc3XIEnEfLwAQ6yALlgQd6jAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        },
        O = {
          src: "/_next/static/media/depin_surf.cacce8b2.png",
          height: 1080,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEUHFBcuTExBZ2BEcm0aTVAqNTYcMDQjQUYUREUMIyY0QUAcKh06T0AynYsbfG9biIMraWlhqKCDtqtDiYRqexjMAAAACXBIWXMAAC4jAAAuIwF4pT92AAAALklEQVR4nAXBhwEAIAjAsKoo4B7//2pCLusecTCb44UABdmxN1BNKapDze6iZh8brQEge5qZGgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        },
        J = () =>
          (0, a.jsxs)("div", {
            className: "events",
            id: "events",
            children: [
              (0, a.jsx)("div", { className: "background-star" }),
              (0, a.jsx)("div", { className: "background-matrix" }),
              (0, a.jsxs)("div", {}),
            ],
          });
      var H = s(4370);
      function Z(e) {
        let {
            data: t,
            direction: s = "right",
            speed: l = 1,
            renderItem: i,
            ...n
          } = e,
          A = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e;
            let t = A.current;
            if (!t) return;
            let a = () => {
              t &&
                ((t.scrollLeft += "right" === s ? l : -l),
                t.scrollLeft >= t.scrollWidth / 2
                  ? (t.scrollLeft = 0)
                  : t.scrollLeft <= 0 && (t.scrollLeft = t.scrollWidth / 2)),
                (e = requestAnimationFrame(a));
            };
            return (
              (() => {
                let e = t.clientWidth,
                  s = t.scrollWidth;
                for (; s < 2 * e; )
                  Array.from(t.children).forEach((e) => {
                    t.appendChild(e.cloneNode(!0));
                  }),
                    (s = t.scrollWidth);
              })(),
              (e = requestAnimationFrame(a)),
              () => cancelAnimationFrame(e)
            );
          }, [s, l]),
          (0, a.jsxs)("div", {
            className: "relative w-full overflow-hidden bg-black py-2",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none",
              }),
              (0, a.jsx)("div", {
                className:
                  "absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none",
              }),
              (0, a.jsx)("div", {
                className: "flex items-center cursor-pointer space-x-4",
                ref: A,
                style: { whiteSpace: "nowrap", overflow: "hidden" },
                children: t.map((e, t) =>
                  i
                    ? (0, a.jsx)("div", { ...n, children: i(e, t) }, t)
                    : (0, a.jsx)("div", { ...n, children: e }, t)
                ),
              }),
            ],
          })
        );
      }
      var K = s(7396);
      function q() {
        return (0, a.jsx)("div", {
          style: { fontFamily: "Inter, sans-serif" },
          className: "bg-black",
          children: (0, a.jsxs)("div", {
            className: "max-w-[1137px] mx-auto overflow-hidden",
            children: [
              (0, a.jsx)("h2", {
                className:
                  "text-white font-normal text-center text-[24px] md:text-[40px] mb-10",
                children: "Partner",
              }),
              (0, a.jsx)(Z, {
                data: [
                  { logo: "house3d.png", url: "https://house3d.com/" },
                  { logo: "depinx.png", url: "https://depinx.com/" },
                  { logo: "image 3412.png", url: "https://iotex.io/" },
                  { logo: "actif3d.png", url: "https://actif3d.com/" },
                  { logo: "aethir.png", url: "https://aethir.com/" },
                ],
                direction: "right",
                speed: 1,
                className:
                  "rounded-[8px] min-w-[154px] px-[22px] h-[52px] border border-[#333]",
                renderItem: (e) =>
                  (0, a.jsx)("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: (0, a.jsx)(K.default, {
                      href: e.url,
                      children: (0, a.jsx)("img", {
                        className: "object-cover",
                        src: "/assets/icons/".concat(e.logo),
                        alt: "",
                      }),
                    }),
                  }),
              }),
              (0, a.jsx)(Z, {
                data: [
                  { logo: "citiverse.png", url: "https://citiverse.io/" },
                  {
                    logo: "AgEye_nvidia_inception_logo_new-300x162.png",
                    url: "https://www.nvidia.com/en-us/startups/",
                  },
                  { logo: "network3.png", url: "https://network3.io/" },
                  { logo: "demr.png", url: "https://www.demr.xyz/#/" },
                  { logo: "AIxBlock.png", url: "https://aixblock.io/" },
                  { logo: "cudos.png", url: "https://www.cudos.org/" },
                ],
                direction: "left",
                speed: 1,
                className:
                  "rounded-[8px] flex items-center justify-center px-[22px] min-w-[154px] h-[52px] border border-[#333]",
                renderItem: (e) =>
                  (0, a.jsx)("div", {
                    className: "w-full h-full flex items-center justify-center",
                    children: (0, a.jsx)(K.default, {
                      href: e.url,
                      children: (0, a.jsx)("img", {
                        className: "object-cover",
                        src: "/assets/icons/".concat(e.logo),
                        alt: "",
                      }),
                    }),
                  }),
              }),
            ],
          }),
        });
      }
      let z = () => {
        let e = [
          { name: "DePIN X", logo: "depinx.png", url: "https://depinx.com/" },
          {
            name: "FBIG Capital",
            logo: "fibig-capital.png",
            url: "https://www.fbg.capital/",
          },
          {
            name: "LD Capital",
            logo: "ld-capital.png",
            url: "https://ldcap.com/",
          },
          {
            name: "Fenbushi Capital",
            logo: "fenbushi.png",
            url: "https://fenbushi.vc/",
          },
          {
            name: "Waterdrip Capital",
            logo: "waterdrip.png",
            url: "https://waterdrip.io/",
          },
          { name: "IoTeX", logo: "image 3412.png", url: "https://iotex.io/" },
          {
            name: "DePINSurf",
            logo: "depin-surf.png",
            url: "https://depin.surf/",
          },
          {
            name: "FutureMoney Group",
            logo: "futuremoney.png",
            url: "https://www.fmgroup.xyz/",
          },
          {
            name: "ForesightX",
            logo: "foresightx 1.png",
            url: "https://www.foresightx.net/#/",
          },
          {
            name: "Shima Capital",
            logo: "shima-capital.png",
            url: "https://shima.capital/",
          },
        ];
        return (0, a.jsx)("div", {});
      };
      function Y() {
        let e = (0, A.useRouter)();
        return (0, a.jsxs)("section", {
          className: "relative w-full max-h-screen",
          style: { height: "auto", fontFamily: "Inter, sans-serif" },
          children: [
            (0, a.jsx)("div", {
              className:
                "relative w-full h-full flex justify-center items-center overflow-x-hidden",
              children: (0, a.jsx)("video", {
                className:
                  "w-full h-auto max-h-screen object-cover min-w-[1024px] z-10 relative",
                playsInline: !0,
                autoPlay: !0,
                muted: !0,
                loop: !0,
                preload: "auto",
                crossOrigin: "anonymous",
                children: (0, a.jsx)("source", {
                  src: "/assets/videos/output_h264.mp4",
                  type: "video/mp4",
                }),
              }),
            }),
            (0, a.jsxs)("div", {
              className:
                "absolute w-full flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 items-center",
              children: [
                (0, a.jsxs)("div", {
                  style: {
                    background: "rgba(0, 0, 0, 0.40)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  },
                  className:
                    "flex mx-auto items-center justify-center rounded-[50px] px-4 py-2 shadow-lg max-w-max",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "flex items-center justify-center bg-[#55FFEB] text-[10px] text-black font-bold rounded-full h-[18px] w-[34px] mr-3",
                      children: "NEW",
                    }),
                    (0, a.jsx)("span", {
                      className: "text-white font-medium",
                      children: (0, a.jsx)("a", {
                        href: "https://docs.inferixai.cc",
                        target: "blank",
                        className: "underline text-[14px]",
                        children: "Doc is updated! ",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("span", {
                  style: {
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(255, 255, 255, 0.70) 12.62%, #FFF 90.65%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  },
                  className:
                    "font-normal hidden sm:flex text-center my-[39px] text-transparent text-[32px] sm:text-[40px] text-center max-w-[557px]",
                  children: "Decentralized GPUs & for AI & Visual Computing",
                }),
                (0, a.jsxs)("span", {
                  style: {
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(255, 255, 255, 0.70) 12.62%, #FFF 90.65%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                  },
                  className:
                    "font-normal block sm:hidden text-center my-[39px] text-transparent text-[32px] sm:text-[40px] text-center max-w-[507px]",
                  children: [
                    (0, a.jsx)("p", { children: "Decentralized" }),
                    (0, a.jsx)("p", { children: "GPUs" }),
                    (0, a.jsx)("p", { children: "for AI & Visual" }),
                    (0, a.jsx)("p", { children: "Computing" }),
                  ],
                }),
                (0, a.jsx)(n.A, {
                  content: "Buy FERIX",
                  onClick: () => {
                    e.push("https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000");
                  },
                  isActive: !0,
                  stylesContent: { fontFamily: "Inter, sans-serif" },
                }),
              ],
            }),
            (0, a.jsx)(v.default, {
              className: "absolute top-0 left-0 w-full h-full z-0",
              src: "/assets/images/filter_bg.svg",
              alt: "",
              width: 0,
              height: 0,
              priority: !0,
              style: { objectFit: "cover" },
            }),
            (0, a.jsx)(v.default, {
              className: "absolute top-0 left-0 w-full h-full z-[20]",
              src: "/assets/images/bright_pants.svg",
              alt: "",
              width: 0,
              height: 0,
              priority: !0,
              style: { objectFit: "cover", filter: "brightness(0.7)" },
            }),
            (0, a.jsx)(v.default, {
              className: "absolute left-1/2 transform -translate-x-1/2 z-[21]",
              src: "/assets/images/galaxy.svg",
              alt: "",
              width: 960,
              height: 540,
              priority: !0,
              style: { bottom: "0", transform: "translate(-50%, 50%)" },
            }),
            (0, a.jsx)(v.default, {
              className: "absolute z-[20]",
              src: "/assets/images/bg_gradient.png",
              alt: "",
              width: 0,
              height: 0,
              priority: !0,
              style: { width: "100%", height: "100%", bottom: "0px" },
            }),
          ],
        });
      }
      let $ = () => {
        let e = new l.E({ defaultOptions: { queries: { staleTime: 1 / 0 } } });
        return (0, a.jsxs)(i.Ht, {
          client: e,
          children: [
            (0, a.jsx)(c.A, {}),
            (0, a.jsx)(Y, {}),
            (0, a.jsx)(x, {}),
            (0, a.jsx)(o, {}),
            (0, a.jsx)(b, {}),
            (0, a.jsx)(f, {}),
            (0, a.jsx)(z, {}),
            (0, a.jsx)(q, {}),
            (0, a.jsx)(J, {}),
            (0, a.jsx)(H.A, {}),
          ],
        });
      };
    },
    3783: () => {},
    1041: () => {},
    1241: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [952, 304, 856, 240, 433, 816, 208, 441, 517, 358], () => t(4356)),
      (_N_E = e.O());
  },
]);
