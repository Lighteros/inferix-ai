(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [208],
  {
    4370: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => n });
      var r = s(5155),
        i = s(2115),
        l = s(5565),
        a = s(8114);
      let n = () => {
        let { data: e, error: t, isLoading: s } = (0, a.A)("/api/year"),
          [n, o] = (0, i.useState)(null);
        return (
          (0, i.useEffect)(() => {
            e && e.year && null === n && o(e.year);
          }, [e, n]),
          (0, r.jsx)("div", {
            className:
              "bg-cover bg-center bg-no-repeat w-[100%] h-[606px] flex flex-col items-center justify-center mt-[-190px] relative",
            style: { backgroundImage: "url('/assets/images/bg-footer.png')" },
            children: (0, r.jsxs)("div", {
              className: "absolute bottom-0 w-full max-w-[1036px] px-5",
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row justify-between w-full h-[72px] items-center mb-[125px] sm:mb-[0]",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "flex flex-col gap-[32px] sm:gap-4 items-center sm:items-start",
                      children: [
                        (0, r.jsx)(l.default, {
                          src: "/assets/images/layer_footer.svg",
                          alt: "logo",
                          width: 158,
                          height: 32,
                        }),
                        (0, r.jsx)("span", {
                          style: { fontFamily: "Inter" },
                          className:
                            "text-white font-medium text-[16px] leading-[24px] cursor-default",
                          children: "Decentralized GPU Network",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "flex gap-[40px] mt-[32px] sm:mt-[0]",
                      children: [
                        {
                          href: "https://twitter.com/InferixAI_ETH",
                          src: "/assets/icons/icon-x.svg",
                          alt: "Twitter",
                        },
                        {
                          href: "https://t.me/InferixAI_ETH",
                          src: "/assets/images/logo_tg.png",
                          alt: "Medium",
                        },
                        {
                          href: "https://alexeys-organization-9.gitbook.io/inferix-ai",
                          src: "/assets/images/logo_docs.png",
                          alt: "Docs",
                        },
                      ].map((e) => {
                        let { href: t, src: s, alt: i } = e;
                        return (0, r.jsx)(
                          "a",
                          {
                            href: t,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: (0, r.jsx)(l.default, {
                              src: s,
                              alt: i,
                              width: 32,
                              height: 32,
                              className: "cursor-pointer",
                            }),
                          },
                          i
                        );
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className: "flex items-center",
                  children: (0, r.jsxs)("div", {
                    style: { fontFamily: "Inter" },
                    className:
                      "w-full max-w-[1036px] px-5 mt-[30px] items-center flex sm:flex-row flex-col-reverse justify-between p-5 border-t border-[#FFFFFF33] text-[14px] font-normal leading-[24px] text-white gap-[10px]",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "flex w-[286px] justify-between items-center order-1 sm:order-2 ",
                        children: [
                          (0, r.jsx)("span", {
                            href: "https://docs.inferix.io/terms-of-service/airdrop-terms-of-service",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: { fontFamily: "Inter" },
                            className:
                              "text-white text-[14px] font-normal leading-[24px] cursor-pointer",
                            children: "@ 2025 Inferix AI",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "w-[1px] h-[18px] bg-white cursor-default",
                          }),
                          (0, r.jsx)("span", {
                            href: "https://docs.inferix.io/terms-of-service/privacy-policy",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            style: { fontFamily: "Inter" },
                            className:
                              "text-white text-[14px] font-normal leading-[24px] cursor-pointer order-1 sm:order-2",
                            children: "All rights reserved.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    8510: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var r = s(5155);
      s(4515);
      let i = (e) => {
        let { content: t, onClick: s, isActive: i, stylesContent: l } = e;
        return (0, r.jsx)("button", {
          className:
            "relative w-[160px] h-[50px] rounded-[96px] overflow-hidden",
          style: {
            border: "none",
            background:
              "linear-gradient(var(--a), #0effB3 5%, #7affB2 20%, #FFFFFF 50%, #7effB2 80%, #2CD9FF 95%)",
            animation: "rotateBackground 2s ease-in-out infinite",
            boxShadow:
              "0px 2px 26px 0px rgba(27, 118, 255, 0.37), 0px 2px 33px 0px rgba(0, 255, 56, 0.22)",
          },
          onClick: s,
          disabled: !i,
          type: "button",
          children: (0, r.jsx)("div", {
            className:
              "absolute top-0 left-0 translate-y-[1.5px] translate-x-[1.5px] w-[157px] h-[47px] rounded-[96px] bg-black flex justify-center items-center text-[12px] sm:text-[14px] text-white hover:bg-[#7EFFB2CF] hover:text-black",
            style: l,
            children: t,
          }),
        });
      };
    },
    5752: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => f });
      var r = s(5155),
        i = s(5565),
        l = s(2115),
        a = s(6046);
      let n = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        o = () => {
          window.open("https://inferix-ai-app-cs.vercel.app/");
        },
        c = () => {
          let e = document.getElementById("backer");
          e && e.scrollIntoView({ behavior: "smooth" });
        },
        x = () => {
          window.open("/MVP");
        },
        d = () => {
          window.open("https://alexeys-organization-9.gitbook.io/inferix-ai");
        },
        p = () => {
          window.open("/");
        },
        h = [
          {
            href: "https://twitter.com/inferixgpu",
            src: "/assets/icons/icon-x.svg",
            alt: "Twitter",
          },
          {
            href: "https://medium.com/@inferixgpu",
            src: "/assets/icons/icon-m.svg",
            alt: "Medium",
          },
          {
            href: "https://discord.gg/NJvcWYcB9W",
            src: "/assets/icons/icon-discord.svg",
            alt: "Discord",
          },
          {
            href: "https://www.youtube.com/@InferixGPU",
            src: "/assets/icons/icon-youtube.svg",
            alt: "YouTube",
          },
          {
            href: "https://warpcast.com/inferixgpu",
            src: "/assets/icons/warpcast.svg",
            alt: "WarpCast",
          },
        ],
        f = () => {
          let e = (0, a.useRouter)(),
            t = (0, a.usePathname)(),
            [s, f] = (0, l.useState)(0),
            [m, u] = (0, l.useState)(!1),
            [g, w] = (0, l.useState)(!1);
          (0, l.useEffect)(() => {
            {
              let e = () => f(window.innerWidth);
              return (
                f(window.innerWidth),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }
          }, []),
            (0, l.useEffect)(() => {
              m
                ? setTimeout(() => {
                    w(m);
                  }, 400)
                : w(m);
            }, [m]);
          let j = () => {
              "/" === t ? n() : e.push("/");
            },
            b = () => {
              "/" === t
                ? c()
                : (e.push("/"),
                  setTimeout(() => {
                    c();
                  }, 1e3));
            };
          return (0, r.jsx)("div", {
            className: "fixed w-full top-2 sm:top-3 z-40 max-w-full",
            style: { fontFamily: "Inter, sans-serif" },
            children:
              s > 640
                ? (0, r.jsxs)("div", {
                    className:
                      "flex m-auto w-full sm:w-[calc(100%-24px)] lg:w-[1248px] h-[54px] lg:max-w-[calc(100%-24px)] justify-center items-center p-2 sm:rounded-[14px] border border-white/15 bg-white/1 backdrop-blur-[20.5px]",
                    children: [
                      (0, r.jsx)(i.default, {
                        className: "absolute top-2 left-2 cursor-pointer",
                        src: "/assets/icons/logo.svg",
                        alt: "logo",
                        width: 44,
                        height: 44,
                        priority: !0,
                        onClick: j,
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex gap-8",
                        children: [
                          (0, r.jsx)("button", {
                            className:
                              "text-white/60 text-[14px] font-normal leading-[26px]",
                            onClick: p,
                            children: "Home",
                          }),
                          (0, r.jsx)("button", {
                            className:
                              "text-white/60 text-[14px] font-normal leading-[26px]",
                            onClick: x,
                            children: "MVP",
                          }),
                          (0, r.jsx)("button", {
                            className:
                              "text-white/60 text-[14px] font-normal leading-[26px]",
                            onClick: o,
                            children: "Explorer",
                          }),
                          (0, r.jsx)("button", {
                            className:
                              "text-white/60 text-[14px] font-normal leading-[26px]",
                            onClick: d,
                            children: "Docs",
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, r.jsxs)("div", {
                    className:
                      "w-[calc(100%-32px)] flex flex-col gap-8 justify-center items-center rounded-[14px] border border-white/15 backdrop-blur-[41px] m-auto transition-all duration-500",
                    style: { height: "".concat(m ? 490 : 54, "px") },
                    children: [
                      (0, r.jsx)(i.default, {
                        className:
                          "absolute cursor-pointer transition-all duration-500 ".concat(
                            m ? "top-8 left-[calc(50%-19px)]" : "top-2 left-2"
                          ),
                        src: "/assets/icons/logo.svg",
                        alt: "logo",
                        width: 44,
                        height: 44,
                        priority: !0,
                        onClick: j,
                      }),
                      g &&
                        (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsxs)("div", {
                              className: "flex flex-col gap-4",
                              children: [
                                (0, r.jsx)("button", {
                                  className:
                                    "text-white/60 text-[14px] font-normal leading-[26px]",
                                  onClick: () => {
                                    o(), u(!1);
                                  },
                                  children: "GPU Network",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "text-white/60 text-[14px] font-normal leading-[26px]",
                                  onClick: () => {
                                    b(), u(!1);
                                  },
                                  children: "Partner",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "text-white/60 text-[14px] font-normal leading-[26px]",
                                  onClick: () => {
                                    x(), u(!1);
                                  },
                                  children: "Node Sale",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "text-white/60 text-[14px] font-normal leading-[26px]",
                                  onClick: () => {
                                    d(), u(!1);
                                  },
                                  children: "Docs",
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "text-white/60 text-[14px] font-normal leading-[26px]",
                                  onClick: () => {
                                    p(), u(!1);
                                  },
                                  children: "Blog",
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "flex gap-4",
                              children: h.map((e) => {
                                let { href: t, src: s, alt: l } = e;
                                return (0, r.jsx)(
                                  "a",
                                  {
                                    href: t,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: (0, r.jsx)(i.default, {
                                      src: s,
                                      alt: l,
                                      width: 32,
                                      height: 32,
                                      className: "cursor-pointer rounded-full",
                                    }),
                                  },
                                  l
                                );
                              }),
                            }),
                          ],
                        }),
                      (0, r.jsx)("button", {
                        className:
                          "absolute transition-all duration-500 ".concat(
                            m
                              ? "top-[420px] right-[calc(50%-19px)]"
                              : "top-2 right-2"
                          ),
                        onClick: () => {
                          u(!m);
                        },
                        children: g
                          ? (0, r.jsxs)("svg", {
                              width: "38",
                              height: "38",
                              viewBox: "0 0 38 38",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  fill: "black",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  fill: "url(#paint0_radial_3389_22498)",
                                  fillOpacity: "0.13",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  stroke: "#272728",
                                }),
                                (0, r.jsx)("path", {
                                  d: "M14.3333 14.3333L23.6666 23.6666M23.6666 14.3333L14.3333 23.6666",
                                  stroke: "#F8F8F8",
                                  strokeOpacity: "0.7",
                                  strokeWidth: "2",
                                  strokeLinecap: "square",
                                }),
                                (0, r.jsx)("defs", {
                                  children: (0, r.jsxs)("radialGradient", {
                                    id: "paint0_radial_3389_22498",
                                    cx: "0",
                                    cy: "0",
                                    r: "1",
                                    gradientUnits: "userSpaceOnUse",
                                    gradientTransform:
                                      "translate(12 8) rotate(53.1301) scale(37.5)",
                                    children: [
                                      (0, r.jsx)("stop", {
                                        stopColor: "white",
                                        stopOpacity: "0",
                                      }),
                                      (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "white",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                          : (0, r.jsxs)("svg", {
                              width: "38",
                              height: "38",
                              viewBox: "0 0 38 38",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: [
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  fill: "black",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  fill: "url(#paint0_radial_3389_22526)",
                                  fillOpacity: "0.13",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "0.5",
                                  y: "0.5",
                                  width: "37",
                                  height: "37",
                                  rx: "9.5",
                                  stroke: "#272728",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "11",
                                  y: "12",
                                  width: "16",
                                  height: "2",
                                  fill: "#D9D9D9",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "11",
                                  y: "18",
                                  width: "16",
                                  height: "2",
                                  fill: "#D9D9D9",
                                }),
                                (0, r.jsx)("rect", {
                                  x: "11",
                                  y: "24",
                                  width: "16",
                                  height: "2",
                                  fill: "#D9D9D9",
                                }),
                                (0, r.jsx)("defs", {
                                  children: (0, r.jsxs)("radialGradient", {
                                    id: "paint0_radial_3389_22526",
                                    cx: "0",
                                    cy: "0",
                                    r: "1",
                                    gradientUnits: "userSpaceOnUse",
                                    gradientTransform:
                                      "translate(12 8) rotate(53.1301) scale(37.5)",
                                    children: [
                                      (0, r.jsx)("stop", {
                                        stopColor: "white",
                                        stopOpacity: "0",
                                      }),
                                      (0, r.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "white",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                      }),
                    ],
                  }),
          });
        };
    },
    8114: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => l });
      var r = s(6679);
      let i = (e) => fetch(e).then((e) => e.json()),
        l = (e) => {
          let { data: t, error: s, isLoading: l } = (0, r.Ay)(e, i);
          return { data: t, error: s, isLoading: l };
        };
    },
    4515: () => {},
  },
]);
