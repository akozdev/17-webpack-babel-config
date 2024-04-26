(() => {
  "use strict";
  console.log("Exporting module");
  var t = [];

  function e(e, o) {
    t.push({product: e, quantity: o}), console.log("".concat(o, " ").concat(e, " added to cart"))
  }

  function o(t) {
    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, o(t)
  }

  function n(t, e) {
    for (var o = 0; o < e.length; o++) {
      var n = e[o];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, i(n.key), n)
    }
  }

  function r(t, e, o) {
    return e && n(t.prototype, e), o && n(t, o), Object.defineProperty(t, "prototype", {writable: !1}), t
  }

  function i(t) {
    var e = function (t, e) {
      if ("object" != o(t) || !t) return t;
      var n = t[Symbol.toPrimitive];
      if (void 0 !== n) {
        var r = n.call(t, "string");
        if ("object" != o(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
      }
      return String(t)
    }(t);
    return "symbol" == o(e) ? e : e + ""
  }

  console.log("Importing module"), e("pizza", 2), e("bread", 5), e("apples", 4), console.log(t);
  var a = new WeakMap;
  new (r((function t(e) {
    var o, n, r, i, c;
    !function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, t), c = "Hey", function (t, e) {
      if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
    }(r = this, i = a), i.set(r, c), this.name = e, console.log("".concat((o = a, n = this, o.get(function (t, e, o) {
      if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : o;
      throw new TypeError("Private element is not present on this object")
    }(o, n))), ", ").concat(this.name))
  })))("Jonas")
})();