(function (e) {
  function t(t) {
    for (
      var A, s, o = t[0], r = t[1], l = t[2], u = 0, d = [];
      u < o.length;
      u++
    )
      (s = o[u]),
        Object.prototype.hasOwnProperty.call(c, s) && c[s] && d.push(c[s][0]),
        (c[s] = 0);
    for (A in r) Object.prototype.hasOwnProperty.call(r, A) && (e[A] = r[A]);
    i && i(t);
    while (d.length) d.shift()();
    return a.push.apply(a, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], A = !0, o = 1; o < n.length; o++) {
        var r = n[o];
        0 !== c[r] && (A = !1);
      }
      A && (a.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var A = {},
    c = { app: 0 },
    a = [];
  function s(t) {
    if (A[t]) return A[t].exports;
    var n = (A[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = A),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var A in e)
          s.d(
            n,
            A,
            function (t) {
              return e[t];
            }.bind(null, A)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    r = o.push.bind(o);
  (o.push = t), (o = o.slice());
  for (var l = 0; l < o.length; l++) t(o[l]);
  var i = r;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function (e, t, n) {
    e.exports = n("56d7");
  },
  "4ec1": function (e, t, n) {
    "use strict";
    n("f9d8");
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var A = n("7a23"),
      c = n("e359"),
      a = n.n(c),
      s = n("f9a7"),
      o = n.n(s),
      r = n("c8e4"),
      l = n.n(r),
      i = { class: "container" },
      u = Object(A["e"])("h2", { class: "app-heading" }, "My Task List", -1),
      d = Object(A["e"])(
        "p",
        { class: "author" },
        [
          Object(A["f"])("Made by "),
          Object(A["e"])(
            "a",
            { href: "https://andyalu.github.io/portfolio", target: "_blank" },
            "andyalu"
          ),
        ],
        -1
      ),
      f = { class: "input-wrapper" },
      b = { class: "actions-wrapper" },
      g = Object(A["e"])(
        "button",
        { class: "btn add" },
        [Object(A["e"])("img", { src: a.a, alt: "add", class: "btn-icon" })],
        -1
      ),
      p = { class: "btn-group" },
      O = Object(A["e"])(
        "img",
        { src: o.a, alt: "add", class: "btn-icon" },
        null,
        -1
      ),
      m = Object(A["f"])(" ALL "),
      j = [O, m],
      v = Object(A["e"])(
        "img",
        { src: l.a, alt: "add", class: "btn-icon" },
        null,
        -1
      ),
      w = Object(A["f"])(" ALL "),
      k = [v, w],
      C = Object(A["e"])("div", { class: "divider" }, null, -1),
      y = { class: "task-list" },
      B = ["onClick"],
      h = { class: "task-card-content" },
      S = { class: "task-number" },
      E = { class: "task-card-actions" },
      J = ["onClick"],
      R = Object(A["e"])(
        "img",
        { src: l.a, alt: "add", class: "btn-icon" },
        null,
        -1
      ),
      Y = [R];
    function T(e, t, n, c, a, s) {
      return (
        Object(A["i"])(),
        Object(A["d"])("div", i, [
          u,
          d,
          Object(A["e"])(
            "form",
            {
              onSubmit:
                t[3] ||
                (t[3] = Object(A["o"])(
                  function (e) {
                    return c.addNewTask();
                  },
                  ["prevent"]
                )),
              class: "task-form",
            },
            [
              Object(A["e"])("div", f, [
                Object(A["n"])(
                  Object(A["e"])(
                    "input",
                    {
                      type: "text",
                      class: "input",
                      "onUpdate:modelValue":
                        t[0] ||
                        (t[0] = function (e) {
                          return (c.newTask = e);
                        }),
                      placeholder: "Enter the task",
                    },
                    null,
                    512
                  ),
                  [[A["m"], c.newTask]]
                ),
              ]),
              Object(A["e"])("div", b, [
                g,
                Object(A["e"])("div", p, [
                  Object(A["e"])(
                    "button",
                    {
                      class: "btn mark",
                      onClick:
                        t[1] ||
                        (t[1] = function (e) {
                          return c.markAll();
                        }),
                    },
                    j
                  ),
                  Object(A["e"])(
                    "button",
                    {
                      class: "btn delete",
                      onClick:
                        t[2] ||
                        (t[2] = function (e) {
                          return c.deleteAll();
                        }),
                    },
                    k
                  ),
                ]),
              ]),
            ],
            32
          ),
          C,
          Object(A["e"])("div", y, [
            (Object(A["i"])(!0),
            Object(A["d"])(
              A["a"],
              null,
              Object(A["k"])(c.tasks, function (e) {
                return (
                  Object(A["i"])(),
                  Object(A["d"])(
                    "div",
                    {
                      class: Object(A["g"])([
                        "task-card",
                        { completed: e.isCompleted },
                      ]),
                      key: e.id,
                      onClick: function (t) {
                        return c.taskIsCompleted(e);
                      },
                    },
                    [
                      Object(A["e"])("div", h, [
                        Object(A["e"])(
                          "div",
                          S,
                          Object(A["l"])(c.tasks.indexOf(e) + 1),
                          1
                        ),
                        Object(A["e"])(
                          "p",
                          {
                            class: Object(A["g"])([
                              "task-text",
                              { "line-through": e.isCompleted },
                            ]),
                          },
                          Object(A["l"])(e.text),
                          3
                        ),
                      ]),
                      Object(A["e"])("div", E, [
                        e.isCompleted
                          ? (Object(A["i"])(),
                            Object(A["d"])(
                              "button",
                              {
                                key: 0,
                                class: "btn delete",
                                onClick: function (t) {
                                  return c.deleteTask(e);
                                },
                              },
                              Y,
                              8,
                              J
                            ))
                          : Object(A["c"])("", !0),
                      ]),
                    ],
                    10,
                    B
                  )
                );
              }),
              128
            )),
          ]),
        ])
      );
    }
    n("d3b7"), n("159b"), n("498a"), n("e9c4"), n("4de4");
    var Q = {
        name: "App",
        setup: function () {
          var e = Object(A["j"])(""),
            t = Object(A["j"])([]);
          function n() {
            e.value.trim() &&
              (t.value.push({ id: Date.now(), text: e.value, isCompleted: !1 }),
              (e.value = ""),
              localStorage.setItem("myTasks", JSON.stringify(t.value)));
          }
          function c(e) {
            (e.isCompleted = !e.isCompleted),
              localStorage.setItem("myTasks", JSON.stringify(t.value));
          }
          function a(e) {
            t.value = t.value.filter(function (t) {
              return t != e;
            });
          }
          function s() {
            t.value.forEach(function (e) {
              e.isCompleted = !0;
            });
          }
          function o() {
            t.value.forEach(function (e) {
              a(e);
            }),
              localStorage.removeItem("myTasks");
          }
          return (
            Object(A["h"])(function () {
              if (localStorage.getItem("myTasks")) {
                var e = JSON.parse(localStorage.getItem("myTasks"));
                e.forEach(function (e) {
                  t.value.push(e);
                });
              }
            }),
            {
              newTask: e,
              tasks: t,
              addNewTask: n,
              taskIsCompleted: c,
              deleteTask: a,
              markAll: s,
              deleteAll: o,
            }
          );
        },
      },
      x = (n("4ec1"), n("6b0d")),
      D = n.n(x);
    const I = D()(Q, [["render", T]]);
    var M = I;
    Object(A["b"])(M).mount("#app");
  },
  c8e4: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAdcAAAHXAYySCGgAAANCSURBVHhe7ZvdjtJQEMdBCJQ0gTsTuCC8h/oaeusDuL6CvoEf+wreaGJ8AL1SjAm8gfKVED5K2GiLuHoDzrTDumA/psvp5sy2v6SZOeT0dPo/0/Z0GnJJst1uG7ZtPxyPxyPwYwH7DHBfcBs0nCww8Nls9sw9myOgMeSJQLOnBByLhpUBxNy4StoHgZcDmESyIE9WKRDsfTCvvdY/IJ1f1uv1z9T0BfrcgT6PqXmZB/l8/g35eoMC4MxdZjqdvgATOYvYB/qeujvtg6Iq5xbZxMGZhxmcUjMQ7AN9P1EzcSIvAVAeZ+2u12JzG7ZTz73gBLaF50Zy7P472hzRA8GTHwwGX9wEFAjE3gZztZsn7rhYLL67IwnGsqwzMPFEwB0kz/whYZngew+Azr6PMeH4Pkav7SmgK5kAZFNLJgDZ1JIJQPaQ9nA4vLb1eNLAOuAjmLbX2ifwXYAWDnHfAXTluHeCjBtMUq/DuhCZ+hwBJL8XRJbRsscg2dSSiADz+fw5VoCpGYjqfomA9wDY2Oyqv7gFVHddVPcL4PhKMgzScBzn3BuPxcVB0fd+8kV1vz1s28aYI0thkZcAPkZ6vZ64VVS/359wVn+se8Bms/lNrhgg5j/khsISAFKJNZhOcCeNmwHn5IoBJo0VM/cx+IusGOD6Z8XMEgAG+0muJNZkQ+EKwBpMJ7gxswQoFAriMqBYLK7IDYUlAHcwneBOGkuAUqkkTgDDMBxyQ2EJYJqmTa4YIOYf5IbCEqBarYoToFarqcsAEEDcOgAyQOlC6MaSCUA2tWQCkE0tmQBkUwtXgPZqtRJTFnMcB2P1/Rx+CEsALC5KKoxyC6II+xKQVBjlFkQRtgCSCqNxJitOBogpjHILoghbAID1QoT/+MAvMriBf49+/g/V/Q5QP1mdTucdBMECv+dxvuOp7rcDY6Ww1dHtdl/R+NqDsVLYkbAvAUmF0Tg1TLYAhmEsydWecrl8Rm4kbAGazeY3crWn1Wp9JTcStgCmab5fr9farwVwyV6pVD5QMxK2ALi0tCzrKTW1ZblcPuEug2MDN9jGaDR6691r9YNii/cHqbjgASaTyQlkw9I9qgZgLLBIegRuzJPP5f4C4bCcI4sizLcAAAAASUVORK5CYII=";
  },
  e359: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAYIAAAGCARcdOD0AAAF9SURBVHhe7ZtBSsNAFIYz2XXZLgRzFs9RsKg3cK/n8ARexJUnULtOikkXHmBKICW+l/l3Cm2hLZr//yB8LyGzeD+BtJmZ7Fz0fV/EGG/WhtW/0jRN7fdYWWDYeGjbdpHa3E3XddcYNg6sp6Isy2VqbzdVVX2YxvMUWDPzobPDmGP4SclhWhQATIsCgGlRADAtCgCmRQHAtCgAmBYFANOiAGBaFABMiwKAaQnw8OnadJXOjs6FHU+p3Jt7O75SeXReQwjrofLGfdLikO/2/x2fd/DJFyuLEGO8m0wmz0MaZGw2m9vgc3WXBq5RYa03wR8JnFOi1yBMiwKAaVEA/ipATYcvycmn0+kDzumYzWaPuf0KfNlut4vVarXE9dFjvb57z967/gydAwtXa4T+KgoApkUBwLQoAJgWBQDTogBgWhQATIsCgGlRADAtCgCmRQHA4pT0fV9gO+xe2L1vpnFtoMaanL0Y3eZpx/oats/7fFxq8yd1XX+ed/t8ln0DmMS+6iOfaBsAAAAASUVORK5CYII=";
  },
  f9a7: function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAAiEAAAIhAT4REJMAAAKwSURBVHhe7Zu7jtpAFIadiCaigNr7KnmOKH2qdCm22VTbp46ipEuZJ0iXKmXeYCVAXJaLiLgESAGSc/5oZmXDMfgyY5/B/qWPMxy0aP9PK2EQ+ywIAq/Kea5mZVMLULOyqQWoWdlcqwCfeKXm2VydgN1ud9Pv93/Q8dtqtXrodDp3dI4XgeuAa2G73d4sl8sdnSMZjUYfafjEyc+cLFwlrrzOYDD4RONEQuSOq1wqr8NJiDyRiyQtrzMcDj/TeJJw8oQukba8TlgC+8QukLW8jpbg5LtBvNTt9/uHVqv1Qq0yhV4dvjgnwFR5HacuhEyXR5wRYKP8fD5fOiHARnmk0Wjcihdgqzy9irxvt9vfRQuwWb7ZbH6l46NYAUWUx32RAooqjyQRkPjDBRMpsvz/4EIoBp/ePb2bTqe/6Rx0u91f2KnHrEC/ZK7L27hsNps7GuzvfrJQ+JPJ5APNSGaz2YKGFQlllAfcki2vY0NCWeXB8eJseR2TEsosD8J3EpXXMSGh7PJAH1KV18kjQUJ5gJtM5XWySJBSHni9Xu+WDrmSRoKk8sBbr9d/6ZA7SSRIKw9wYyznJEgsD7zFYvGHDsbCSZBaHnh0qfuWDkYTliC5PMCNT38F9zSNBhIOh8NryeWBPliRYCMmy4PwHfESTJcHxwuxEmyUB9xSnARb5QG7JMRIsFkesEtF6RJslwfsMkRpEoooD9jlEYVLKKo8YJcMhUkosjxglzFYl1B0ecAuz2BNQhnlAbu8gHEJZZUH7DIBxiSUWR6wy4TkllB2ecAuU5BZgoTygF2mJLUEKeUBu8xAYgmSygN2mZGLEqSVB+wyB7ESJJYH7DInPj5oJeZ0Dsbj8YSkvMFePS4Km98UxTdKXhI/iei3MgSl/s9RNSubWoCalU0tQM2KxvP+ARyEdWOoEAtIAAAAAElFTkSuQmCC";
  },
  f9d8: function (e, t, n) {},
});
//# sourceMappingURL=app.8364a7df.js.map
