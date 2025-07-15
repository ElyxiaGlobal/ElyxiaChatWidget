var a4 = Object.defineProperty;
var l4 = (e, t, n) => t in e ? a4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $s = (e, t, n) => l4(e, typeof t != "symbol" ? t + "" : t, n);
/*! Package version @n8n/chat@0.48.0 */
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Vu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Xe = {}, uo = [], Pt = () => {
}, c4 = () => !1, Li = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Uu = (e) => e.startsWith("onUpdate:"), Ct = Object.assign, Ku = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, u4 = Object.prototype.hasOwnProperty, Ue = (e, t) => u4.call(e, t), Me = Array.isArray, fo = (e) => Ii(e) === "[object Map]", c1 = (e) => Ii(e) === "[object Set]", Ce = (e) => typeof e == "function", He = (e) => typeof e == "string", ir = (e) => typeof e == "symbol", Pe = (e) => e !== null && typeof e == "object", u1 = (e) => (Pe(e) || Ce(e)) && Ce(e.then) && Ce(e.catch), f1 = Object.prototype.toString, Ii = (e) => f1.call(e), Js = (e) => Ii(e).slice(8, -1), d1 = (e) => Ii(e) === "[object Object]", Gu = (e) => He(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, jo = /* @__PURE__ */ Vu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Oi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, f4 = /-(\w)/g, dn = Oi(
  (e) => e.replace(f4, (t, n) => n ? n.toUpperCase() : "")
), d4 = /\B([A-Z])/g, Ar = Oi(
  (e) => e.replace(d4, "-$1").toLowerCase()
), Ri = Oi((e) => e.charAt(0).toUpperCase() + e.slice(1)), _a = Oi(
  (e) => e ? `on${Ri(e)}` : ""
), Er = (e, t) => !Object.is(e, t), Qs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, p1 = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, iu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, p4 = (e) => {
  const t = He(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let gd;
const Pi = () => gd || (gd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function tt(e) {
  if (Me(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = He(r) ? v4(r) : tt(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (He(e) || Pe(e))
    return e;
}
const h4 = /;(?![^(]*\))/g, g4 = /:([^]+)/, m4 = /\/\*[^]*?\*\//g;
function v4(e) {
  const t = {};
  return e.replace(m4, "").split(h4).forEach((n) => {
    if (n) {
      const r = n.split(g4);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Z(e) {
  let t = "";
  if (He(e))
    t = e;
  else if (Me(e))
    for (let n = 0; n < e.length; n++) {
      const r = Z(e[n]);
      r && (t += r + " ");
    }
  else if (Pe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function fi(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !He(t) && (e.class = Z(t)), n && (e.style = tt(n)), e;
}
const b4 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _4 = /* @__PURE__ */ Vu(b4);
function h1(e) {
  return !!e || e === "";
}
const g1 = (e) => !!(e && e.__v_isRef === !0), Ge = (e) => He(e) ? e : e == null ? "" : Me(e) || Pe(e) && (e.toString === f1 || !Ce(e.toString)) ? g1(e) ? Ge(e.value) : JSON.stringify(e, m1, 2) : String(e), m1 = (e, t) => g1(t) ? m1(e, t.value) : fo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, s], o) => (n[ya(r, o) + " =>"] = s, n),
    {}
  )
} : c1(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ya(n))
} : ir(t) ? ya(t) : Pe(t) && !Me(t) && !d1(t) ? String(t) : t, ya = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ir(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let zt;
class y4 {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = zt, !t && zt && (this.index = (zt.scopes || (zt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = zt;
      try {
        return zt = this, t();
      } finally {
        zt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    zt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    zt = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Wu() {
  return zt;
}
function v1(e, t = !1) {
  zt && zt.cleanups.push(e);
}
let st;
const wa = /* @__PURE__ */ new WeakSet();
class b1 {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, zt && zt.active && zt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, wa.has(this) && (wa.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || y1(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, md(this), w1(this);
    const t = st, n = kn;
    st = this, kn = !0;
    try {
      return this.fn();
    } finally {
      k1(this), st = t, kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Yu(t);
      this.deps = this.depsTail = void 0, md(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? wa.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    au(this) && this.run();
  }
  get dirty() {
    return au(this);
  }
}
let _1 = 0, Vo, Uo;
function y1(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Uo, Uo = e;
    return;
  }
  e.next = Vo, Vo = e;
}
function Zu() {
  _1++;
}
function Xu() {
  if (--_1 > 0)
    return;
  if (Uo) {
    let t = Uo;
    for (Uo = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Vo; ) {
    let t = Vo;
    for (Vo = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function w1(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function k1(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), Yu(r), w4(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function au(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (C1(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function C1(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === es))
    return;
  e.globalVersion = es;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !au(e)) {
    e.flags &= -3;
    return;
  }
  const n = st, r = kn;
  st = e, kn = !0;
  try {
    w1(e);
    const s = e.fn(e._value);
    (t.version === 0 || Er(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    st = n, kn = r, k1(e), e.flags &= -3;
  }
}
function Yu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      Yu(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function w4(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let kn = !0;
const x1 = [];
function Tr() {
  x1.push(kn), kn = !1;
}
function Mr() {
  const e = x1.pop();
  kn = e === void 0 ? !0 : e;
}
function md(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = st;
    st = void 0;
    try {
      t();
    } finally {
      st = n;
    }
  }
}
let es = 0;
class k4 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ju {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
  }
  track(t) {
    if (!st || !kn || st === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== st)
      n = this.activeLink = new k4(st, this), st.deps ? (n.prevDep = st.depsTail, st.depsTail.nextDep = n, st.depsTail = n) : st.deps = st.depsTail = n, E1(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = st.depsTail, n.nextDep = void 0, st.depsTail.nextDep = n, st.depsTail = n, st.deps === n && (st.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, es++, this.notify(t);
  }
  notify(t) {
    Zu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Xu();
    }
  }
}
function E1(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        E1(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const di = /* @__PURE__ */ new WeakMap(), Kr = Symbol(
  ""
), lu = Symbol(
  ""
), ts = Symbol(
  ""
);
function Lt(e, t, n) {
  if (kn && st) {
    let r = di.get(e);
    r || di.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new Ju()), s.map = r, s.key = n), s.track();
  }
}
function Wn(e, t, n, r, s, o) {
  const i = di.get(e);
  if (!i) {
    es++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Zu(), t === "clear")
    i.forEach(a);
  else {
    const l = Me(e), u = l && Gu(n);
    if (l && n === "length") {
      const f = Number(r);
      i.forEach((c, p) => {
        (p === "length" || p === ts || !ir(p) && p >= f) && a(c);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(ts)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(Kr)), fo(e) && a(i.get(lu)));
          break;
        case "delete":
          l || (a(i.get(Kr)), fo(e) && a(i.get(lu)));
          break;
        case "set":
          fo(e) && a(i.get(Kr));
          break;
      }
  }
  Xu();
}
function C4(e, t) {
  const n = di.get(e);
  return n && n.get(t);
}
function ro(e) {
  const t = Fe(e);
  return t === e ? t : (Lt(t, "iterate", ts), cn(e) ? t : t.map(It));
}
function Di(e) {
  return Lt(e = Fe(e), "iterate", ts), e;
}
const x4 = {
  __proto__: null,
  [Symbol.iterator]() {
    return ka(this, Symbol.iterator, It);
  },
  concat(...e) {
    return ro(this).concat(
      ...e.map((t) => Me(t) ? ro(t) : t)
    );
  },
  entries() {
    return ka(this, "entries", (e) => (e[1] = It(e[1]), e));
  },
  every(e, t) {
    return Hn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Hn(this, "filter", e, t, (n) => n.map(It), arguments);
  },
  find(e, t) {
    return Hn(this, "find", e, t, It, arguments);
  },
  findIndex(e, t) {
    return Hn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Hn(this, "findLast", e, t, It, arguments);
  },
  findLastIndex(e, t) {
    return Hn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Hn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ca(this, "includes", e);
  },
  indexOf(...e) {
    return Ca(this, "indexOf", e);
  },
  join(e) {
    return ro(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ca(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Hn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Lo(this, "pop");
  },
  push(...e) {
    return Lo(this, "push", e);
  },
  reduce(e, ...t) {
    return vd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return vd(this, "reduceRight", e, t);
  },
  shift() {
    return Lo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Hn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Lo(this, "splice", e);
  },
  toReversed() {
    return ro(this).toReversed();
  },
  toSorted(e) {
    return ro(this).toSorted(e);
  },
  toSpliced(...e) {
    return ro(this).toSpliced(...e);
  },
  unshift(...e) {
    return Lo(this, "unshift", e);
  },
  values() {
    return ka(this, "values", It);
  }
};
function ka(e, t, n) {
  const r = Di(e), s = r[t]();
  return r !== e && !cn(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.value && (o.value = n(o.value)), o;
  }), s;
}
const E4 = Array.prototype;
function Hn(e, t, n, r, s, o) {
  const i = Di(e), a = i !== e && !cn(e), l = i[t];
  if (l !== E4[t]) {
    const c = l.apply(e, o);
    return a ? It(c) : c;
  }
  let u = n;
  i !== e && (a ? u = function(c, p) {
    return n.call(this, It(c), p, e);
  } : n.length > 2 && (u = function(c, p) {
    return n.call(this, c, p, e);
  }));
  const f = l.call(i, u, r);
  return a && s ? s(f) : f;
}
function vd(e, t, n, r) {
  const s = Di(e);
  let o = n;
  return s !== e && (cn(e) ? n.length > 3 && (o = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : o = function(i, a, l) {
    return n.call(this, i, It(a), l, e);
  }), s[t](o, ...r);
}
function Ca(e, t, n) {
  const r = Fe(e);
  Lt(r, "iterate", ts);
  const s = r[t](...n);
  return (s === -1 || s === !1) && tf(n[0]) ? (n[0] = Fe(n[0]), r[t](...n)) : s;
}
function Lo(e, t, n = []) {
  Tr(), Zu();
  const r = Fe(e)[t].apply(e, n);
  return Xu(), Mr(), r;
}
const S4 = /* @__PURE__ */ Vu("__proto__,__v_isRef,__isVue"), S1 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ir)
);
function A4(e) {
  ir(e) || (e = String(e));
  const t = Fe(this);
  return Lt(t, "has", e), t.hasOwnProperty(e);
}
class A1 {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? N4 : L1 : o ? $1 : M1).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = Me(t);
    if (!s) {
      let l;
      if (i && (l = x4[n]))
        return l;
      if (n === "hasOwnProperty")
        return A4;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      vt(t) ? t : r
    );
    return (ir(n) ? S1.has(n) : S4(n)) || (s || Lt(t, "get", n), o) ? a : vt(a) ? i && Gu(n) ? a : a.value : Pe(a) ? s ? Ni(a) : Sn(a) : a;
  }
}
class T1 extends A1 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const l = Xr(o);
      if (!cn(r) && !Xr(r) && (o = Fe(o), r = Fe(r)), !Me(t) && vt(o) && !vt(r))
        return l ? !1 : (o.value = r, !0);
    }
    const i = Me(t) && Gu(n) ? Number(n) < t.length : Ue(t, n), a = Reflect.set(
      t,
      n,
      r,
      vt(t) ? t : s
    );
    return t === Fe(s) && (i ? Er(r, o) && Wn(t, "set", n, r) : Wn(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = Ue(t, n);
    t[n];
    const s = Reflect.deleteProperty(t, n);
    return s && r && Wn(t, "delete", n, void 0), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ir(n) || !S1.has(n)) && Lt(t, "has", n), r;
  }
  ownKeys(t) {
    return Lt(
      t,
      "iterate",
      Me(t) ? "length" : Kr
    ), Reflect.ownKeys(t);
  }
}
class T4 extends A1 {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const M4 = /* @__PURE__ */ new T1(), $4 = /* @__PURE__ */ new T4(), L4 = /* @__PURE__ */ new T1(!0);
const cu = (e) => e, Ls = (e) => Reflect.getPrototypeOf(e);
function I4(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = Fe(s), i = fo(o), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = s[e](...r), f = n ? cu : t ? uu : It;
    return !t && Lt(
      o,
      "iterate",
      l ? lu : Kr
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = u.next();
        return p ? { value: c, done: p } : {
          value: a ? [f(c[0]), f(c[1])] : f(c),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Is(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function O4(e, t) {
  const n = {
    get(s) {
      const o = this.__v_raw, i = Fe(o), a = Fe(s);
      e || (Er(s, a) && Lt(i, "get", s), Lt(i, "get", a));
      const { has: l } = Ls(i), u = t ? cu : e ? uu : It;
      if (l.call(i, s))
        return u(o.get(s));
      if (l.call(i, a))
        return u(o.get(a));
      o !== i && o.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && Lt(Fe(s), "iterate", Kr), Reflect.get(s, "size", s);
    },
    has(s) {
      const o = this.__v_raw, i = Fe(o), a = Fe(s);
      return e || (Er(s, a) && Lt(i, "has", s), Lt(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a);
    },
    forEach(s, o) {
      const i = this, a = i.__v_raw, l = Fe(a), u = t ? cu : e ? uu : It;
      return !e && Lt(l, "iterate", Kr), a.forEach((f, c) => s.call(o, u(f), u(c), i));
    }
  };
  return Ct(
    n,
    e ? {
      add: Is("add"),
      set: Is("set"),
      delete: Is("delete"),
      clear: Is("clear")
    } : {
      add(s) {
        !t && !cn(s) && !Xr(s) && (s = Fe(s));
        const o = Fe(this);
        return Ls(o).has.call(o, s) || (o.add(s), Wn(o, "add", s, s)), this;
      },
      set(s, o) {
        !t && !cn(o) && !Xr(o) && (o = Fe(o));
        const i = Fe(this), { has: a, get: l } = Ls(i);
        let u = a.call(i, s);
        u || (s = Fe(s), u = a.call(i, s));
        const f = l.call(i, s);
        return i.set(s, o), u ? Er(o, f) && Wn(i, "set", s, o) : Wn(i, "add", s, o), this;
      },
      delete(s) {
        const o = Fe(this), { has: i, get: a } = Ls(o);
        let l = i.call(o, s);
        l || (s = Fe(s), l = i.call(o, s)), a && a.call(o, s);
        const u = o.delete(s);
        return l && Wn(o, "delete", s, void 0), u;
      },
      clear() {
        const s = Fe(this), o = s.size !== 0, i = s.clear();
        return o && Wn(
          s,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = I4(s, e, t);
  }), n;
}
function Qu(e, t) {
  const n = O4(e, t);
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    Ue(n, s) && s in r ? n : r,
    s,
    o
  );
}
const R4 = {
  get: /* @__PURE__ */ Qu(!1, !1)
}, P4 = {
  get: /* @__PURE__ */ Qu(!1, !0)
}, D4 = {
  get: /* @__PURE__ */ Qu(!0, !1)
};
const M1 = /* @__PURE__ */ new WeakMap(), $1 = /* @__PURE__ */ new WeakMap(), L1 = /* @__PURE__ */ new WeakMap(), N4 = /* @__PURE__ */ new WeakMap();
function B4(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function F4(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : B4(Js(e));
}
function Sn(e) {
  return Xr(e) ? e : ef(
    e,
    !1,
    M4,
    R4,
    M1
  );
}
function q4(e) {
  return ef(
    e,
    !1,
    L4,
    P4,
    $1
  );
}
function Ni(e) {
  return ef(
    e,
    !0,
    $4,
    D4,
    L1
  );
}
function ef(e, t, n, r, s) {
  if (!Pe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = F4(e);
  if (i === 0)
    return e;
  const a = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, a), a;
}
function po(e) {
  return Xr(e) ? po(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xr(e) {
  return !!(e && e.__v_isReadonly);
}
function cn(e) {
  return !!(e && e.__v_isShallow);
}
function tf(e) {
  return e ? !!e.__v_raw : !1;
}
function Fe(e) {
  const t = e && e.__v_raw;
  return t ? Fe(t) : e;
}
function z4(e) {
  return !Ue(e, "__v_skip") && Object.isExtensible(e) && p1(e, "__v_skip", !0), e;
}
const It = (e) => Pe(e) ? Sn(e) : e, uu = (e) => Pe(e) ? Ni(e) : e;
function vt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function G(e) {
  return I1(e, !1);
}
function Yn(e) {
  return I1(e, !0);
}
function I1(e, t) {
  return vt(e) ? e : new H4(e, t);
}
class H4 {
  constructor(t, n) {
    this.dep = new Ju(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Fe(t), this._value = n ? t : It(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || cn(t) || Xr(t);
    t = r ? t : Fe(t), Er(t, n) && (this._rawValue = t, this._value = r ? t : It(t), this.dep.trigger());
  }
}
function Io(e) {
  e.dep && e.dep.trigger();
}
function b(e) {
  return vt(e) ? e.value : e;
}
const j4 = {
  get: (e, t, n) => t === "__v_raw" ? e : b(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return vt(s) && !vt(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function O1(e) {
  return po(e) ? e : new Proxy(e, j4);
}
function Bi(e) {
  const t = Me(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = R1(e, n);
  return t;
}
class V4 {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return C4(Fe(this._object), this._key);
  }
}
class U4 {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function yn(e, t, n) {
  return vt(e) ? e : Ce(e) ? new U4(e) : Pe(e) && arguments.length > 1 ? R1(e, t, n) : G(e);
}
function R1(e, t, n) {
  const r = e[t];
  return vt(r) ? r : new V4(e, t, n);
}
class K4 {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ju(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = es - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    st !== this)
      return y1(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return C1(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function G4(e, t, n = !1) {
  let r, s;
  return Ce(e) ? r = e : (r = e.get, s = e.set), new K4(r, s, n);
}
const Os = {}, pi = /* @__PURE__ */ new WeakMap();
let jr;
function W4(e, t = !1, n = jr) {
  if (n) {
    let r = pi.get(n);
    r || pi.set(n, r = []), r.push(e);
  }
}
function Z4(e, t, n = Xe) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n, u = (_) => s ? _ : cn(_) || s === !1 || s === 0 ? Zn(_, 1) : Zn(_);
  let f, c, p, d, m = !1, g = !1;
  if (vt(e) ? (c = () => e.value, m = cn(e)) : po(e) ? (c = () => u(e), m = !0) : Me(e) ? (g = !0, m = e.some((_) => po(_) || cn(_)), c = () => e.map((_) => {
    if (vt(_))
      return _.value;
    if (po(_))
      return u(_);
    if (Ce(_))
      return l ? l(_, 2) : _();
  })) : Ce(e) ? t ? c = l ? () => l(e, 2) : e : c = () => {
    if (p) {
      Tr();
      try {
        p();
      } finally {
        Mr();
      }
    }
    const _ = jr;
    jr = f;
    try {
      return l ? l(e, 3, [d]) : e(d);
    } finally {
      jr = _;
    }
  } : c = Pt, t && s) {
    const _ = c, S = s === !0 ? 1 / 0 : s;
    c = () => Zn(_(), S);
  }
  const C = Wu(), h = () => {
    f.stop(), C && C.active && Ku(C.effects, f);
  };
  if (o && t) {
    const _ = t;
    t = (...S) => {
      _(...S), h();
    };
  }
  let k = g ? new Array(e.length).fill(Os) : Os;
  const y = (_) => {
    if (!(!(f.flags & 1) || !f.dirty && !_))
      if (t) {
        const S = f.run();
        if (s || m || (g ? S.some((x, T) => Er(x, k[T])) : Er(S, k))) {
          p && p();
          const x = jr;
          jr = f;
          try {
            const T = [
              S,
              // pass undefined as the old value when it's changed for the first time
              k === Os ? void 0 : g && k[0] === Os ? [] : k,
              d
            ];
            l ? l(t, 3, T) : (
              // @ts-expect-error
              t(...T)
            ), k = S;
          } finally {
            jr = x;
          }
        }
      } else
        f.run();
  };
  return a && a(y), f = new b1(c), f.scheduler = i ? () => i(y, !1) : y, d = (_) => W4(_, !1, f), p = f.onStop = () => {
    const _ = pi.get(f);
    if (_) {
      if (l)
        l(_, 4);
      else
        for (const S of _) S();
      pi.delete(f);
    }
  }, t ? r ? y(!0) : k = f.run() : i ? i(y.bind(null, !0), !0) : f.run(), h.pause = f.pause.bind(f), h.resume = f.resume.bind(f), h.stop = h, h;
}
function Zn(e, t = 1 / 0, n) {
  if (t <= 0 || !Pe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, vt(e))
    Zn(e.value, t, n);
  else if (Me(e))
    for (let r = 0; r < e.length; r++)
      Zn(e[r], t, n);
  else if (c1(e) || fo(e))
    e.forEach((r) => {
      Zn(r, t, n);
    });
  else if (d1(e)) {
    for (const r in e)
      Zn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Zn(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function bs(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    Fi(s, t, n);
  }
}
function xn(e, t, n, r) {
  if (Ce(e)) {
    const s = bs(e, t, n, r);
    return s && u1(s) && s.catch((o) => {
      Fi(o, t, n);
    }), s;
  }
  if (Me(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(xn(e[o], t, n, r));
    return s;
  }
}
function Fi(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Xe;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const f = a.ec;
      if (f) {
        for (let c = 0; c < f.length; c++)
          if (f[c](e, l, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Tr(), bs(o, null, 10, [
        e,
        l,
        u
      ]), Mr();
      return;
    }
  }
  X4(e, n, s, r, i);
}
function X4(e, t, n, r = !0, s = !1) {
  if (s)
    throw e;
  console.error(e);
}
const Ht = [];
let Rn = -1;
const ho = [];
let br = null, io = 0;
const P1 = /* @__PURE__ */ Promise.resolve();
let hi = null;
function ze(e) {
  const t = hi || P1;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Y4(e) {
  let t = Rn + 1, n = Ht.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = Ht[r], o = ns(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function nf(e) {
  if (!(e.flags & 1)) {
    const t = ns(e), n = Ht[Ht.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ns(n) ? Ht.push(e) : Ht.splice(Y4(t), 0, e), e.flags |= 1, D1();
  }
}
function D1() {
  hi || (hi = P1.then(B1));
}
function J4(e) {
  Me(e) ? ho.push(...e) : br && e.id === -1 ? br.splice(io + 1, 0, e) : e.flags & 1 || (ho.push(e), e.flags |= 1), D1();
}
function bd(e, t, n = Rn + 1) {
  for (; n < Ht.length; n++) {
    const r = Ht[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Ht.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function N1(e) {
  if (ho.length) {
    const t = [...new Set(ho)].sort(
      (n, r) => ns(n) - ns(r)
    );
    if (ho.length = 0, br) {
      br.push(...t);
      return;
    }
    for (br = t, io = 0; io < br.length; io++) {
      const n = br[io];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    br = null, io = 0;
  }
}
const ns = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function B1(e) {
  try {
    for (Rn = 0; Rn < Ht.length; Rn++) {
      const t = Ht[Rn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Rn < Ht.length; Rn++) {
      const t = Ht[Rn];
      t && (t.flags &= -2);
    }
    Rn = -1, Ht.length = 0, N1(), hi = null, (Ht.length || ho.length) && B1();
  }
}
let kt = null, F1 = null;
function gi(e) {
  const t = kt;
  return kt = e, F1 = e && e.type.__scopeId || null, t;
}
function fe(e, t = kt, n) {
  if (!t || e._n)
    return e;
  const r = (...s) => {
    r._d && Id(-1);
    const o = gi(t);
    let i;
    try {
      i = e(...s);
    } finally {
      gi(o), r._d && Id(1);
    }
    return i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Vt(e, t) {
  if (kt === null)
    return e;
  const n = Ui(kt), r = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [o, i, a, l = Xe] = t[s];
    o && (Ce(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Zn(i), r.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function Pr(e, t, n, r) {
  const s = e.dirs, o = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    o && (a.oldValue = o[i].value);
    let l = a.dir[r];
    l && (Tr(), xn(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Mr());
  }
}
const q1 = Symbol("_vte"), z1 = (e) => e.__isTeleport, Ko = (e) => e && (e.disabled || e.disabled === ""), _d = (e) => e && (e.defer || e.defer === ""), yd = (e) => typeof SVGElement < "u" && e instanceof SVGElement, wd = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, fu = (e, t) => {
  const n = e && e.to;
  return He(n) ? t ? t(n) : null : n;
}, H1 = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, s, o, i, a, l, u) {
    const {
      mc: f,
      pc: c,
      pbc: p,
      o: { insert: d, querySelector: m, createText: g, createComment: C }
    } = u, h = Ko(t.props);
    let { shapeFlag: k, children: y, dynamicChildren: _ } = t;
    if (e == null) {
      const S = t.el = g(""), x = t.anchor = g("");
      d(S, n, r), d(x, n, r);
      const T = (I, P) => {
        k & 16 && (s && s.isCE && (s.ce._teleportTarget = I), f(
          y,
          I,
          P,
          s,
          o,
          i,
          a,
          l
        ));
      }, $ = () => {
        const I = t.target = fu(t.props, m), P = j1(I, t, g, d);
        I && (i !== "svg" && yd(I) ? i = "svg" : i !== "mathml" && wd(I) && (i = "mathml"), h || (T(I, P), ei(t, !1)));
      };
      h && (T(n, x), ei(t, !0)), _d(t.props) ? Ft(() => {
        $(), t.el.__isMounted = !0;
      }, o) : $();
    } else {
      if (_d(t.props) && !e.el.__isMounted) {
        Ft(() => {
          H1.process(
            e,
            t,
            n,
            r,
            s,
            o,
            i,
            a,
            l,
            u
          ), delete e.el.__isMounted;
        }, o);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const S = t.anchor = e.anchor, x = t.target = e.target, T = t.targetAnchor = e.targetAnchor, $ = Ko(e.props), I = $ ? n : x, P = $ ? S : T;
      if (i === "svg" || yd(x) ? i = "svg" : (i === "mathml" || wd(x)) && (i = "mathml"), _ ? (p(
        e.dynamicChildren,
        _,
        I,
        s,
        o,
        i,
        a
      ), af(e, t, !0)) : l || c(
        e,
        t,
        I,
        P,
        s,
        o,
        i,
        a,
        !1
      ), h)
        $ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Rs(
          t,
          n,
          S,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const N = t.target = fu(
          t.props,
          m
        );
        N && Rs(
          t,
          N,
          null,
          u,
          0
        );
      } else $ && Rs(
        t,
        x,
        T,
        u,
        1
      );
      ei(t, h);
    }
  },
  remove(e, t, n, { um: r, o: { remove: s } }, o) {
    const {
      shapeFlag: i,
      children: a,
      anchor: l,
      targetStart: u,
      targetAnchor: f,
      target: c,
      props: p
    } = e;
    if (c && (s(u), s(f)), o && s(l), i & 16) {
      const d = o || !Ko(p);
      for (let m = 0; m < a.length; m++) {
        const g = a[m];
        r(
          g,
          t,
          n,
          d,
          !!g.dynamicChildren
        );
      }
    }
  },
  move: Rs,
  hydrate: Q4
};
function Rs(e, t, n, { o: { insert: r }, m: s }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: i, anchor: a, shapeFlag: l, children: u, props: f } = e, c = o === 2;
  if (c && r(i, t, n), (!c || Ko(f)) && l & 16)
    for (let p = 0; p < u.length; p++)
      s(
        u[p],
        t,
        n,
        2
      );
  c && r(a, t, n);
}
function Q4(e, t, n, r, s, o, {
  o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: f }
}, c) {
  const p = t.target = fu(
    t.props,
    l
  );
  if (p) {
    const d = Ko(t.props), m = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (d)
        t.anchor = c(
          i(e),
          t,
          a(e),
          n,
          r,
          s,
          o
        ), t.targetStart = m, t.targetAnchor = m && i(m);
      else {
        t.anchor = i(e);
        let g = m;
        for (; g; ) {
          if (g && g.nodeType === 8) {
            if (g.data === "teleport start anchor")
              t.targetStart = g;
            else if (g.data === "teleport anchor") {
              t.targetAnchor = g, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          g = i(g);
        }
        t.targetAnchor || j1(p, t, f, u), c(
          m && i(m),
          t,
          p,
          n,
          r,
          s,
          o
        );
      }
    ei(t, d);
  }
  return t.anchor && i(t.anchor);
}
const ew = H1;
function ei(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, s;
    for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function j1(e, t, n, r) {
  const s = t.targetStart = n(""), o = t.targetAnchor = n("");
  return s[q1] = o, e && (r(s, e), r(o, e)), o;
}
const _r = Symbol("_leaveCb"), Ps = Symbol("_enterCb");
function tw() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return rt(() => {
    e.isMounted = !0;
  }), Xt(() => {
    e.isUnmounting = !0;
  }), e;
}
const ln = [Function, Array], V1 = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ln,
  onEnter: ln,
  onAfterEnter: ln,
  onEnterCancelled: ln,
  // leave
  onBeforeLeave: ln,
  onLeave: ln,
  onAfterLeave: ln,
  onLeaveCancelled: ln,
  // appear
  onBeforeAppear: ln,
  onAppear: ln,
  onAfterAppear: ln,
  onAppearCancelled: ln
}, U1 = (e) => {
  const t = e.subTree;
  return t.component ? U1(t.component) : t;
}, nw = {
  name: "BaseTransition",
  props: V1,
  setup(e, { slots: t }) {
    const n = bt(), r = tw();
    return () => {
      const s = t.default && W1(t.default(), !0);
      if (!s || !s.length)
        return;
      const o = K1(s), i = Fe(e), { mode: a } = i;
      if (r.isLeaving)
        return xa(o);
      const l = kd(o);
      if (!l)
        return xa(o);
      let u = du(
        l,
        i,
        r,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => u = c
      );
      l.type !== Ot && rs(l, u);
      let f = n.subTree && kd(n.subTree);
      if (f && f.type !== Ot && !Vr(l, f) && U1(n).type !== Ot) {
        let c = du(
          f,
          i,
          r,
          n
        );
        if (rs(f, c), a === "out-in" && l.type !== Ot)
          return r.isLeaving = !0, c.afterLeave = () => {
            r.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, f = void 0;
          }, xa(o);
        a === "in-out" && l.type !== Ot ? c.delayLeave = (p, d, m) => {
          const g = G1(
            r,
            f
          );
          g[String(f.key)] = f, p[_r] = () => {
            d(), p[_r] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            m(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return o;
    };
  }
};
function K1(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ot) {
        t = n;
        break;
      }
  }
  return t;
}
const rw = nw;
function G1(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function du(e, t, n, r, s) {
  const {
    appear: o,
    mode: i,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: c,
    onBeforeLeave: p,
    onLeave: d,
    onAfterLeave: m,
    onLeaveCancelled: g,
    onBeforeAppear: C,
    onAppear: h,
    onAfterAppear: k,
    onAppearCancelled: y
  } = t, _ = String(e.key), S = G1(n, e), x = (I, P) => {
    I && xn(
      I,
      r,
      9,
      P
    );
  }, T = (I, P) => {
    const N = P[1];
    x(I, P), Me(I) ? I.every((D) => D.length <= 1) && N() : I.length <= 1 && N();
  }, $ = {
    mode: i,
    persisted: a,
    beforeEnter(I) {
      let P = l;
      if (!n.isMounted)
        if (o)
          P = C || l;
        else
          return;
      I[_r] && I[_r](
        !0
        /* cancelled */
      );
      const N = S[_];
      N && Vr(e, N) && N.el[_r] && N.el[_r](), x(P, [I]);
    },
    enter(I) {
      let P = u, N = f, D = c;
      if (!n.isMounted)
        if (o)
          P = h || u, N = k || f, D = y || c;
        else
          return;
      let oe = !1;
      const F = I[Ps] = (U) => {
        oe || (oe = !0, U ? x(D, [I]) : x(N, [I]), $.delayedLeave && $.delayedLeave(), I[Ps] = void 0);
      };
      P ? T(P, [I, F]) : F();
    },
    leave(I, P) {
      const N = String(e.key);
      if (I[Ps] && I[Ps](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return P();
      x(p, [I]);
      let D = !1;
      const oe = I[_r] = (F) => {
        D || (D = !0, P(), F ? x(g, [I]) : x(m, [I]), I[_r] = void 0, S[N] === e && delete S[N]);
      };
      S[N] = e, d ? T(d, [I, oe]) : oe();
    },
    clone(I) {
      const P = du(
        I,
        t,
        n,
        r,
        s
      );
      return s && s(P), P;
    }
  };
  return $;
}
function xa(e) {
  if (qi(e))
    return e = er(e), e.children = null, e;
}
function kd(e) {
  if (!qi(e))
    return z1(e.type) && e.children ? K1(e.children) : e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Ce(n.default))
      return n.default();
  }
}
function rs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, rs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function W1(e, t = !1, n) {
  let r = [], s = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Ze ? (i.patchFlag & 128 && s++, r = r.concat(
      W1(i.children, t, a)
    )) : (t || i.type !== Ot) && r.push(a != null ? er(i, { key: a }) : i);
  }
  if (s > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ne(e, t) {
  return Ce(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ct({ name: e.name }, t, { setup: e })
  ) : e;
}
function Z1(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function mi(e, t, n, r, s = !1) {
  if (Me(e)) {
    e.forEach(
      (m, g) => mi(
        m,
        t && (Me(t) ? t[g] : t),
        n,
        r,
        s
      )
    );
    return;
  }
  if (go(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && mi(e, t, n, r.component.subTree);
    return;
  }
  const o = r.shapeFlag & 4 ? Ui(r.component) : r.el, i = s ? null : o, { i: a, r: l } = e, u = t && t.r, f = a.refs === Xe ? a.refs = {} : a.refs, c = a.setupState, p = Fe(c), d = c === Xe ? () => !1 : (m) => Ue(p, m);
  if (u != null && u !== l && (He(u) ? (f[u] = null, d(u) && (c[u] = null)) : vt(u) && (u.value = null)), Ce(l))
    bs(l, a, 12, [i, f]);
  else {
    const m = He(l), g = vt(l);
    if (m || g) {
      const C = () => {
        if (e.f) {
          const h = m ? d(l) ? c[l] : f[l] : l.value;
          s ? Me(h) && Ku(h, o) : Me(h) ? h.includes(o) || h.push(o) : m ? (f[l] = [o], d(l) && (c[l] = f[l])) : (l.value = [o], e.k && (f[e.k] = l.value));
        } else m ? (f[l] = i, d(l) && (c[l] = i)) : g && (l.value = i, e.k && (f[e.k] = i));
      };
      i ? (C.id = -1, Ft(C, n)) : C();
    }
  }
}
Pi().requestIdleCallback;
Pi().cancelIdleCallback;
const go = (e) => !!e.type.__asyncLoader, qi = (e) => e.type.__isKeepAlive;
function ow(e, t) {
  Y1(e, "a", t);
}
function X1(e, t) {
  Y1(e, "da", t);
}
function Y1(e, t, n = At) {
  const r = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (zi(t, r, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      qi(s.parent.vnode) && sw(r, t, n, s), s = s.parent;
  }
}
function sw(e, t, n, r) {
  const s = zi(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Hi(() => {
    Ku(r[t], s);
  }, n);
}
function zi(e, t, n = At, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      Tr();
      const a = _s(n), l = xn(t, n, e, i);
      return a(), Mr(), l;
    });
    return r ? s.unshift(o) : s.push(o), o;
  }
}
const ar = (e) => (t, n = At) => {
  (!is || e === "sp") && zi(e, (...r) => t(...r), n);
}, J1 = ar("bm"), rt = ar("m"), iw = ar(
  "bu"
), Q1 = ar("u"), Xt = ar(
  "bum"
), Hi = ar("um"), aw = ar(
  "sp"
), lw = ar("rtg"), cw = ar("rtc");
function uw(e, t = At) {
  zi("ec", e, t);
}
const rf = "components", fw = "directives";
function pr(e, t) {
  return of(rf, e, !0, t) || e;
}
const eg = Symbol.for("v-ndc");
function Rt(e) {
  return He(e) ? of(rf, e, !1) || e : e || eg;
}
function tg(e) {
  return of(fw, e);
}
function of(e, t, n = !0, r = !1) {
  const s = kt || At;
  if (s) {
    const o = s.type;
    if (e === rf) {
      const a = Ww(
        o,
        !1
      );
      if (a && (a === t || a === dn(t) || a === Ri(dn(t))))
        return o;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      Cd(s[e] || o[e], t) || // global registration
      Cd(s.appContext[e], t)
    );
    return !i && r ? o : i;
  }
}
function Cd(e, t) {
  return e && (e[t] || e[dn(t)] || e[Ri(dn(t))]);
}
function Cn(e, t, n, r) {
  let s;
  const o = n, i = Me(e);
  if (i || He(e)) {
    const a = i && po(e);
    let l = !1;
    a && (l = !cn(e), e = Di(e)), s = new Array(e.length);
    for (let u = 0, f = e.length; u < f; u++)
      s[u] = t(
        l ? It(e[u]) : e[u],
        u,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    s = new Array(e);
    for (let a = 0; a < e; a++)
      s[a] = t(a + 1, a, void 0, o);
  } else if (Pe(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const f = a[l];
        s[l] = t(e[f], f, l, o);
      }
    }
  else
    s = [];
  return s;
}
function vi(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Me(r))
      for (let s = 0; s < r.length; s++)
        e[r[s].name] = r[s].fn;
    else r && (e[r.name] = r.key ? (...s) => {
      const o = r.fn(...s);
      return o && (o.key = r.key), o;
    } : r.fn);
  }
  return e;
}
function _e(e, t, n = {}, r, s) {
  if (kt.ce || kt.parent && go(kt.parent) && kt.parent.ce)
    return t !== "default" && (n.name = t), w(), le(
      Ze,
      null,
      [we("slot", n, r && r())],
      64
    );
  let o = e[t];
  o && o._c && (o._d = !1), w();
  const i = o && ng(o(n)), a = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  i && i.key, l = le(
    Ze,
    {
      key: (a && !ir(a) ? a : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!i && r ? "_fb" : "")
    },
    i || (r ? r() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !s && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function ng(e) {
  return e.some((t) => ss(t) ? !(t.type === Ot || t.type === Ze && !ng(t.children)) : !0) ? e : null;
}
const pu = (e) => e ? Cg(e) ? Ui(e) : pu(e.parent) : null, Go = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ct(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pu(e.parent),
    $root: (e) => pu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ig(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      nf(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ze.bind(e.proxy)),
    $watch: (e) => Iw.bind(e)
  })
), Ea = (e, t) => e !== Xe && !e.__isScriptSetup && Ue(e, t), dw = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: l } = e;
    let u;
    if (t[0] !== "$") {
      const d = i[t];
      if (d !== void 0)
        switch (d) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Ea(r, t))
          return i[t] = 1, r[t];
        if (s !== Xe && Ue(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && Ue(u, t)
        )
          return i[t] = 3, o[t];
        if (n !== Xe && Ue(n, t))
          return i[t] = 4, n[t];
        hu && (i[t] = 0);
      }
    }
    const f = Go[t];
    let c, p;
    if (f)
      return t === "$attrs" && Lt(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (c = a.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== Xe && Ue(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = l.config.globalProperties, Ue(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return Ea(s, t) ? (s[t] = n, !0) : r !== Xe && Ue(r, t) ? (r[t] = n, !0) : Ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let a;
    return !!n[i] || e !== Xe && Ue(e, i) || Ea(t, i) || (a = o[0]) && Ue(a, i) || Ue(r, i) || Ue(Go, i) || Ue(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function rg() {
  return og().slots;
}
function ji() {
  return og().attrs;
}
function og() {
  const e = bt();
  return e.setupContext || (e.setupContext = Eg(e));
}
function xd(e) {
  return Me(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let hu = !0;
function pw(e) {
  const t = ig(e), n = e.proxy, r = e.ctx;
  hu = !1, t.beforeCreate && Ed(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: o,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    // lifecycle
    created: f,
    beforeMount: c,
    mounted: p,
    beforeUpdate: d,
    updated: m,
    activated: g,
    deactivated: C,
    beforeDestroy: h,
    beforeUnmount: k,
    destroyed: y,
    unmounted: _,
    render: S,
    renderTracked: x,
    renderTriggered: T,
    errorCaptured: $,
    serverPrefetch: I,
    // public API
    expose: P,
    inheritAttrs: N,
    // assets
    components: D,
    directives: oe,
    filters: F
  } = t;
  if (u && hw(u, r, null), i)
    for (const z in i) {
      const H = i[z];
      Ce(H) && (r[z] = H.bind(n));
    }
  if (s) {
    const z = s.call(n, n);
    Pe(z) && (e.data = Sn(z));
  }
  if (hu = !0, o)
    for (const z in o) {
      const H = o[z], Q = Ce(H) ? H.bind(n, n) : Ce(H.get) ? H.get.bind(n, n) : Pt, te = !Ce(H) && Ce(H.set) ? H.set.bind(n) : Pt, Ae = R({
        get: Q,
        set: te
      });
      Object.defineProperty(r, z, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (ve) => Ae.value = ve
      });
    }
  if (a)
    for (const z in a)
      sg(a[z], r, n, z);
  if (l) {
    const z = Ce(l) ? l.call(n) : l;
    Reflect.ownKeys(z).forEach((H) => {
      Ut(H, z[H]);
    });
  }
  f && Ed(f, e, "c");
  function q(z, H) {
    Me(H) ? H.forEach((Q) => z(Q.bind(n))) : H && z(H.bind(n));
  }
  if (q(J1, c), q(rt, p), q(iw, d), q(Q1, m), q(ow, g), q(X1, C), q(uw, $), q(cw, x), q(lw, T), q(Xt, k), q(Hi, _), q(aw, I), Me(P))
    if (P.length) {
      const z = e.exposed || (e.exposed = {});
      P.forEach((H) => {
        Object.defineProperty(z, H, {
          get: () => n[H],
          set: (Q) => n[H] = Q
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === Pt && (e.render = S), N != null && (e.inheritAttrs = N), D && (e.components = D), oe && (e.directives = oe), I && Z1(e);
}
function hw(e, t, n = Pt) {
  Me(e) && (e = gu(e));
  for (const r in e) {
    const s = e[r];
    let o;
    Pe(s) ? "default" in s ? o = De(
      s.from || r,
      s.default,
      !0
    ) : o = De(s.from || r) : o = De(s), vt(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[r] = o;
  }
}
function Ed(e, t, n) {
  xn(
    Me(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function sg(e, t, n, r) {
  let s = r.includes(".") ? bg(n, r) : () => n[r];
  if (He(e)) {
    const o = t[e];
    Ce(o) && Ee(s, o);
  } else if (Ce(e))
    Ee(s, e.bind(n));
  else if (Pe(e))
    if (Me(e))
      e.forEach((o) => sg(o, t, n, r));
    else {
      const o = Ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ce(o) && Ee(s, o, e);
    }
}
function ig(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(
    (u) => bi(l, u, i, !0)
  ), bi(l, t, i)), Pe(t) && o.set(t, l), l;
}
function bi(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && bi(e, o, n, !0), s && s.forEach(
    (i) => bi(e, i, n, !0)
  );
  for (const i in t)
    if (!(r && i === "expose")) {
      const a = gw[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const gw = {
  data: Sd,
  props: Ad,
  emits: Ad,
  // objects
  methods: qo,
  computed: qo,
  // lifecycle
  beforeCreate: Bt,
  created: Bt,
  beforeMount: Bt,
  mounted: Bt,
  beforeUpdate: Bt,
  updated: Bt,
  beforeDestroy: Bt,
  beforeUnmount: Bt,
  destroyed: Bt,
  unmounted: Bt,
  activated: Bt,
  deactivated: Bt,
  errorCaptured: Bt,
  serverPrefetch: Bt,
  // assets
  components: qo,
  directives: qo,
  // watch
  watch: vw,
  // provide / inject
  provide: Sd,
  inject: mw
};
function Sd(e, t) {
  return t ? e ? function() {
    return Ct(
      Ce(e) ? e.call(this, this) : e,
      Ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function mw(e, t) {
  return qo(gu(e), gu(t));
}
function gu(e) {
  if (Me(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Bt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function qo(e, t) {
  return e ? Ct(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ad(e, t) {
  return e ? Me(e) && Me(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ct(
    /* @__PURE__ */ Object.create(null),
    xd(e),
    xd(t ?? {})
  ) : t;
}
function vw(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ct(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Bt(e[r], t[r]);
  return n;
}
function ag() {
  return {
    app: null,
    config: {
      isNativeTag: c4,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let bw = 0;
function _w(e, t) {
  return function(r, s = null) {
    Ce(r) || (r = Ct({}, r)), s != null && !Pe(s) && (s = null);
    const o = ag(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = o.app = {
      _uid: bw++,
      _component: r,
      _props: s,
      _container: null,
      _context: o,
      _instance: null,
      version: Xw,
      get config() {
        return o.config;
      },
      set config(f) {
      },
      use(f, ...c) {
        return i.has(f) || (f && Ce(f.install) ? (i.add(f), f.install(u, ...c)) : Ce(f) && (i.add(f), f(u, ...c))), u;
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), u;
      },
      component(f, c) {
        return c ? (o.components[f] = c, u) : o.components[f];
      },
      directive(f, c) {
        return c ? (o.directives[f] = c, u) : o.directives[f];
      },
      mount(f, c, p) {
        if (!l) {
          const d = u._ceVNode || we(r, s);
          return d.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(d, f, p), l = !0, u._container = f, f.__vue_app__ = u, Ui(d.component);
        }
      },
      onUnmount(f) {
        a.push(f);
      },
      unmount() {
        l && (xn(
          a,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(f, c) {
        return o.provides[f] = c, u;
      },
      runWithContext(f) {
        const c = mo;
        mo = u;
        try {
          return f();
        } finally {
          mo = c;
        }
      }
    };
    return u;
  };
}
let mo = null;
function Ut(e, t) {
  if (At) {
    let n = At.provides;
    const r = At.parent && At.parent.provides;
    r === n && (n = At.provides = Object.create(r)), n[e] = t;
  }
}
function De(e, t, n = !1) {
  const r = At || kt;
  if (r || mo) {
    const s = mo ? mo._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && Ce(t) ? t.call(r && r.proxy) : t;
  }
}
const lg = {}, cg = () => Object.create(lg), ug = (e) => Object.getPrototypeOf(e) === lg;
function yw(e, t, n, r = !1) {
  const s = {}, o = cg();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fg(e, t, s, o);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  n ? e.props = r ? s : q4(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
}
function ww(e, t, n, r) {
  const {
    props: s,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, a = Fe(s), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let p = f[c];
        if (Vi(e.emitsOptions, p))
          continue;
        const d = t[p];
        if (l)
          if (Ue(o, p))
            d !== o[p] && (o[p] = d, u = !0);
          else {
            const m = dn(p);
            s[m] = mu(
              l,
              a,
              m,
              d,
              e,
              !1
            );
          }
        else
          d !== o[p] && (o[p] = d, u = !0);
      }
    }
  } else {
    fg(e, t, s, o) && (u = !0);
    let f;
    for (const c in a)
      (!t || // for camelCase
      !Ue(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Ar(c)) === c || !Ue(t, f))) && (l ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[f] !== void 0) && (s[c] = mu(
        l,
        a,
        c,
        void 0,
        e,
        !0
      )) : delete s[c]);
    if (o !== a)
      for (const c in o)
        (!t || !Ue(t, c)) && (delete o[c], u = !0);
  }
  u && Wn(e.attrs, "set", "");
}
function fg(e, t, n, r) {
  const [s, o] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (jo(l))
        continue;
      const u = t[l];
      let f;
      s && Ue(s, f = dn(l)) ? !o || !o.includes(f) ? n[f] = u : (a || (a = {}))[f] = u : Vi(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0);
    }
  if (o) {
    const l = Fe(n), u = a || Xe;
    for (let f = 0; f < o.length; f++) {
      const c = o[f];
      n[c] = mu(
        s,
        l,
        c,
        u[c],
        e,
        !Ue(u, c)
      );
    }
  }
  return i;
}
function mu(e, t, n, r, s, o) {
  const i = e[n];
  if (i != null) {
    const a = Ue(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && Ce(l)) {
        const { propsDefaults: u } = s;
        if (n in u)
          r = u[n];
        else {
          const f = _s(s);
          r = u[n] = l.call(
            null,
            t
          ), f();
        }
      } else
        r = l;
      s.ce && s.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ar(n)) && (r = !0));
  }
  return r;
}
const kw = /* @__PURE__ */ new WeakMap();
function dg(e, t, n = !1) {
  const r = n ? kw : t.propsCache, s = r.get(e);
  if (s)
    return s;
  const o = e.props, i = {}, a = [];
  let l = !1;
  if (!Ce(e)) {
    const f = (c) => {
      l = !0;
      const [p, d] = dg(c, t, !0);
      Ct(i, p), d && a.push(...d);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!o && !l)
    return Pe(e) && r.set(e, uo), uo;
  if (Me(o))
    for (let f = 0; f < o.length; f++) {
      const c = dn(o[f]);
      Td(c) && (i[c] = Xe);
    }
  else if (o)
    for (const f in o) {
      const c = dn(f);
      if (Td(c)) {
        const p = o[f], d = i[c] = Me(p) || Ce(p) ? { type: p } : Ct({}, p), m = d.type;
        let g = !1, C = !0;
        if (Me(m))
          for (let h = 0; h < m.length; ++h) {
            const k = m[h], y = Ce(k) && k.name;
            if (y === "Boolean") {
              g = !0;
              break;
            } else y === "String" && (C = !1);
          }
        else
          g = Ce(m) && m.name === "Boolean";
        d[
          0
          /* shouldCast */
        ] = g, d[
          1
          /* shouldCastTrue */
        ] = C, (g || Ue(d, "default")) && a.push(c);
      }
    }
  const u = [i, a];
  return Pe(e) && r.set(e, u), u;
}
function Td(e) {
  return e[0] !== "$" && !jo(e);
}
const pg = (e) => e[0] === "_" || e === "$stable", sf = (e) => Me(e) ? e.map(Pn) : [Pn(e)], Cw = (e, t, n) => {
  if (t._n)
    return t;
  const r = fe((...s) => sf(t(...s)), n);
  return r._c = !1, r;
}, hg = (e, t, n) => {
  const r = e._ctx;
  for (const s in e) {
    if (pg(s)) continue;
    const o = e[s];
    if (Ce(o))
      t[s] = Cw(s, o, r);
    else if (o != null) {
      const i = sf(o);
      t[s] = () => i;
    }
  }
}, gg = (e, t) => {
  const n = sf(t);
  e.slots.default = () => n;
}, mg = (e, t, n) => {
  for (const r in t)
    (n || r !== "_") && (e[r] = t[r]);
}, xw = (e, t, n) => {
  const r = e.slots = cg();
  if (e.vnode.shapeFlag & 32) {
    const s = t._;
    s ? (mg(r, t, n), n && p1(r, "_", s, !0)) : hg(t, r);
  } else t && gg(e, t);
}, Ew = (e, t, n) => {
  const { vnode: r, slots: s } = e;
  let o = !0, i = Xe;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? n && a === 1 ? o = !1 : mg(s, t, n) : (o = !t.$stable, hg(t, s)), i = t;
  } else t && (gg(e, t), i = { default: 1 });
  if (o)
    for (const a in s)
      !pg(a) && i[a] == null && delete s[a];
}, Ft = Fw;
function Sw(e) {
  return Aw(e);
}
function Aw(e, t) {
  const n = Pi();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: o,
    createElement: i,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: f,
    parentNode: c,
    nextSibling: p,
    setScopeId: d = Pt,
    insertStaticContent: m
  } = e, g = (M, L, j, J = null, W = null, X = null, se = void 0, re = null, ee = !!L.dynamicChildren) => {
    if (M === L)
      return;
    M && !Vr(M, L) && (J = ht(M), ve(M, W, X, !0), M = null), L.patchFlag === -2 && (ee = !1, L.dynamicChildren = null);
    const { type: Y, ref: be, shapeFlag: ce } = L;
    switch (Y) {
      case Ao:
        C(M, L, j, J);
        break;
      case Ot:
        h(M, L, j, J);
        break;
      case ti:
        M == null && k(L, j, J, se);
        break;
      case Ze:
        D(
          M,
          L,
          j,
          J,
          W,
          X,
          se,
          re,
          ee
        );
        break;
      default:
        ce & 1 ? S(
          M,
          L,
          j,
          J,
          W,
          X,
          se,
          re,
          ee
        ) : ce & 6 ? oe(
          M,
          L,
          j,
          J,
          W,
          X,
          se,
          re,
          ee
        ) : (ce & 64 || ce & 128) && Y.process(
          M,
          L,
          j,
          J,
          W,
          X,
          se,
          re,
          ee,
          me
        );
    }
    be != null && W && mi(be, M && M.ref, X, L || M, !L);
  }, C = (M, L, j, J) => {
    if (M == null)
      r(
        L.el = a(L.children),
        j,
        J
      );
    else {
      const W = L.el = M.el;
      L.children !== M.children && u(W, L.children);
    }
  }, h = (M, L, j, J) => {
    M == null ? r(
      L.el = l(L.children || ""),
      j,
      J
    ) : L.el = M.el;
  }, k = (M, L, j, J) => {
    [M.el, M.anchor] = m(
      M.children,
      L,
      j,
      J,
      M.el,
      M.anchor
    );
  }, y = ({ el: M, anchor: L }, j, J) => {
    let W;
    for (; M && M !== L; )
      W = p(M), r(M, j, J), M = W;
    r(L, j, J);
  }, _ = ({ el: M, anchor: L }) => {
    let j;
    for (; M && M !== L; )
      j = p(M), s(M), M = j;
    s(L);
  }, S = (M, L, j, J, W, X, se, re, ee) => {
    L.type === "svg" ? se = "svg" : L.type === "math" && (se = "mathml"), M == null ? x(
      L,
      j,
      J,
      W,
      X,
      se,
      re,
      ee
    ) : I(
      M,
      L,
      W,
      X,
      se,
      re,
      ee
    );
  }, x = (M, L, j, J, W, X, se, re) => {
    let ee, Y;
    const { props: be, shapeFlag: ce, transition: pe, dirs: V } = M;
    if (ee = M.el = i(
      M.type,
      X,
      be && be.is,
      be
    ), ce & 8 ? f(ee, M.children) : ce & 16 && $(
      M.children,
      ee,
      null,
      J,
      W,
      Sa(M, X),
      se,
      re
    ), V && Pr(M, null, J, "created"), T(ee, M, M.scopeId, se, J), be) {
      for (const xe in be)
        xe !== "value" && !jo(xe) && o(ee, xe, null, be[xe], X, J);
      "value" in be && o(ee, "value", null, be.value, X), (Y = be.onVnodeBeforeMount) && On(Y, J, M);
    }
    V && Pr(M, null, J, "beforeMount");
    const ie = Tw(W, pe);
    ie && pe.beforeEnter(ee), r(ee, L, j), ((Y = be && be.onVnodeMounted) || ie || V) && Ft(() => {
      Y && On(Y, J, M), ie && pe.enter(ee), V && Pr(M, null, J, "mounted");
    }, W);
  }, T = (M, L, j, J, W) => {
    if (j && d(M, j), J)
      for (let X = 0; X < J.length; X++)
        d(M, J[X]);
    if (W) {
      let X = W.subTree;
      if (L === X || yg(X.type) && (X.ssContent === L || X.ssFallback === L)) {
        const se = W.vnode;
        T(
          M,
          se,
          se.scopeId,
          se.slotScopeIds,
          W.parent
        );
      }
    }
  }, $ = (M, L, j, J, W, X, se, re, ee = 0) => {
    for (let Y = ee; Y < M.length; Y++) {
      const be = M[Y] = re ? yr(M[Y]) : Pn(M[Y]);
      g(
        null,
        be,
        L,
        j,
        J,
        W,
        X,
        se,
        re
      );
    }
  }, I = (M, L, j, J, W, X, se) => {
    const re = L.el = M.el;
    let { patchFlag: ee, dynamicChildren: Y, dirs: be } = L;
    ee |= M.patchFlag & 16;
    const ce = M.props || Xe, pe = L.props || Xe;
    let V;
    if (j && Dr(j, !1), (V = pe.onVnodeBeforeUpdate) && On(V, j, L, M), be && Pr(L, M, j, "beforeUpdate"), j && Dr(j, !0), (ce.innerHTML && pe.innerHTML == null || ce.textContent && pe.textContent == null) && f(re, ""), Y ? P(
      M.dynamicChildren,
      Y,
      re,
      j,
      J,
      Sa(L, W),
      X
    ) : se || H(
      M,
      L,
      re,
      null,
      j,
      J,
      Sa(L, W),
      X,
      !1
    ), ee > 0) {
      if (ee & 16)
        N(re, ce, pe, j, W);
      else if (ee & 2 && ce.class !== pe.class && o(re, "class", null, pe.class, W), ee & 4 && o(re, "style", ce.style, pe.style, W), ee & 8) {
        const ie = L.dynamicProps;
        for (let xe = 0; xe < ie.length; xe++) {
          const $e = ie[xe], it = ce[$e], dt = pe[$e];
          (dt !== it || $e === "value") && o(re, $e, it, dt, W, j);
        }
      }
      ee & 1 && M.children !== L.children && f(re, L.children);
    } else !se && Y == null && N(re, ce, pe, j, W);
    ((V = pe.onVnodeUpdated) || be) && Ft(() => {
      V && On(V, j, L, M), be && Pr(L, M, j, "updated");
    }, J);
  }, P = (M, L, j, J, W, X, se) => {
    for (let re = 0; re < L.length; re++) {
      const ee = M[re], Y = L[re], be = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ee.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ee.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Vr(ee, Y) || // - In the case of a component, it could contain anything.
        ee.shapeFlag & 70) ? c(ee.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          j
        )
      );
      g(
        ee,
        Y,
        be,
        null,
        J,
        W,
        X,
        se,
        !0
      );
    }
  }, N = (M, L, j, J, W) => {
    if (L !== j) {
      if (L !== Xe)
        for (const X in L)
          !jo(X) && !(X in j) && o(
            M,
            X,
            L[X],
            null,
            W,
            J
          );
      for (const X in j) {
        if (jo(X)) continue;
        const se = j[X], re = L[X];
        se !== re && X !== "value" && o(M, X, re, se, W, J);
      }
      "value" in j && o(M, "value", L.value, j.value, W);
    }
  }, D = (M, L, j, J, W, X, se, re, ee) => {
    const Y = L.el = M ? M.el : a(""), be = L.anchor = M ? M.anchor : a("");
    let { patchFlag: ce, dynamicChildren: pe, slotScopeIds: V } = L;
    V && (re = re ? re.concat(V) : V), M == null ? (r(Y, j, J), r(be, j, J), $(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      L.children || [],
      j,
      be,
      W,
      X,
      se,
      re,
      ee
    )) : ce > 0 && ce & 64 && pe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    M.dynamicChildren ? (P(
      M.dynamicChildren,
      pe,
      j,
      W,
      X,
      se,
      re
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (L.key != null || W && L === W.subTree) && af(
      M,
      L,
      !0
      /* shallow */
    )) : H(
      M,
      L,
      j,
      be,
      W,
      X,
      se,
      re,
      ee
    );
  }, oe = (M, L, j, J, W, X, se, re, ee) => {
    L.slotScopeIds = re, M == null ? L.shapeFlag & 512 ? W.ctx.activate(
      L,
      j,
      J,
      se,
      ee
    ) : F(
      L,
      j,
      J,
      W,
      X,
      se,
      ee
    ) : U(M, L, ee);
  }, F = (M, L, j, J, W, X, se) => {
    const re = M.component = Vw(
      M,
      J,
      W
    );
    if (qi(M) && (re.ctx.renderer = me), Uw(re, !1, se), re.asyncDep) {
      if (W && W.registerDep(re, q, se), !M.el) {
        const ee = re.subTree = we(Ot);
        h(null, ee, L, j);
      }
    } else
      q(
        re,
        M,
        L,
        j,
        W,
        X,
        se
      );
  }, U = (M, L, j) => {
    const J = L.component = M.component;
    if (Nw(M, L, j))
      if (J.asyncDep && !J.asyncResolved) {
        z(J, L, j);
        return;
      } else
        J.next = L, J.update();
    else
      L.el = M.el, J.vnode = L;
  }, q = (M, L, j, J, W, X, se) => {
    const re = () => {
      if (M.isMounted) {
        let { next: ce, bu: pe, u: V, parent: ie, vnode: xe } = M;
        {
          const xt = vg(M);
          if (xt) {
            ce && (ce.el = xe.el, z(M, ce, se)), xt.asyncDep.then(() => {
              M.isUnmounted || re();
            });
            return;
          }
        }
        let $e = ce, it;
        Dr(M, !1), ce ? (ce.el = xe.el, z(M, ce, se)) : ce = xe, pe && Qs(pe), (it = ce.props && ce.props.onVnodeBeforeUpdate) && On(it, ie, ce, xe), Dr(M, !0);
        const dt = $d(M), wt = M.subTree;
        M.subTree = dt, g(
          wt,
          dt,
          // parent may have changed if it's in a teleport
          c(wt.el),
          // anchor may have changed if it's in a fragment
          ht(wt),
          M,
          W,
          X
        ), ce.el = dt.el, $e === null && Bw(M, dt.el), V && Ft(V, W), (it = ce.props && ce.props.onVnodeUpdated) && Ft(
          () => On(it, ie, ce, xe),
          W
        );
      } else {
        let ce;
        const { el: pe, props: V } = L, { bm: ie, m: xe, parent: $e, root: it, type: dt } = M, wt = go(L);
        Dr(M, !1), ie && Qs(ie), !wt && (ce = V && V.onVnodeBeforeMount) && On(ce, $e, L), Dr(M, !0);
        {
          it.ce && it.ce._injectChildStyle(dt);
          const xt = M.subTree = $d(M);
          g(
            null,
            xt,
            j,
            J,
            M,
            W,
            X
          ), L.el = xt.el;
        }
        if (xe && Ft(xe, W), !wt && (ce = V && V.onVnodeMounted)) {
          const xt = L;
          Ft(
            () => On(ce, $e, xt),
            W
          );
        }
        (L.shapeFlag & 256 || $e && go($e.vnode) && $e.vnode.shapeFlag & 256) && M.a && Ft(M.a, W), M.isMounted = !0, L = j = J = null;
      }
    };
    M.scope.on();
    const ee = M.effect = new b1(re);
    M.scope.off();
    const Y = M.update = ee.run.bind(ee), be = M.job = ee.runIfDirty.bind(ee);
    be.i = M, be.id = M.uid, ee.scheduler = () => nf(be), Dr(M, !0), Y();
  }, z = (M, L, j) => {
    L.component = M;
    const J = M.vnode.props;
    M.vnode = L, M.next = null, ww(M, L.props, J, j), Ew(M, L.children, j), Tr(), bd(M), Mr();
  }, H = (M, L, j, J, W, X, se, re, ee = !1) => {
    const Y = M && M.children, be = M ? M.shapeFlag : 0, ce = L.children, { patchFlag: pe, shapeFlag: V } = L;
    if (pe > 0) {
      if (pe & 128) {
        te(
          Y,
          ce,
          j,
          J,
          W,
          X,
          se,
          re,
          ee
        );
        return;
      } else if (pe & 256) {
        Q(
          Y,
          ce,
          j,
          J,
          W,
          X,
          se,
          re,
          ee
        );
        return;
      }
    }
    V & 8 ? (be & 16 && ft(Y, W, X), ce !== Y && f(j, ce)) : be & 16 ? V & 16 ? te(
      Y,
      ce,
      j,
      J,
      W,
      X,
      se,
      re,
      ee
    ) : ft(Y, W, X, !0) : (be & 8 && f(j, ""), V & 16 && $(
      ce,
      j,
      J,
      W,
      X,
      se,
      re,
      ee
    ));
  }, Q = (M, L, j, J, W, X, se, re, ee) => {
    M = M || uo, L = L || uo;
    const Y = M.length, be = L.length, ce = Math.min(Y, be);
    let pe;
    for (pe = 0; pe < ce; pe++) {
      const V = L[pe] = ee ? yr(L[pe]) : Pn(L[pe]);
      g(
        M[pe],
        V,
        j,
        null,
        W,
        X,
        se,
        re,
        ee
      );
    }
    Y > be ? ft(
      M,
      W,
      X,
      !0,
      !1,
      ce
    ) : $(
      L,
      j,
      J,
      W,
      X,
      se,
      re,
      ee,
      ce
    );
  }, te = (M, L, j, J, W, X, se, re, ee) => {
    let Y = 0;
    const be = L.length;
    let ce = M.length - 1, pe = be - 1;
    for (; Y <= ce && Y <= pe; ) {
      const V = M[Y], ie = L[Y] = ee ? yr(L[Y]) : Pn(L[Y]);
      if (Vr(V, ie))
        g(
          V,
          ie,
          j,
          null,
          W,
          X,
          se,
          re,
          ee
        );
      else
        break;
      Y++;
    }
    for (; Y <= ce && Y <= pe; ) {
      const V = M[ce], ie = L[pe] = ee ? yr(L[pe]) : Pn(L[pe]);
      if (Vr(V, ie))
        g(
          V,
          ie,
          j,
          null,
          W,
          X,
          se,
          re,
          ee
        );
      else
        break;
      ce--, pe--;
    }
    if (Y > ce) {
      if (Y <= pe) {
        const V = pe + 1, ie = V < be ? L[V].el : J;
        for (; Y <= pe; )
          g(
            null,
            L[Y] = ee ? yr(L[Y]) : Pn(L[Y]),
            j,
            ie,
            W,
            X,
            se,
            re,
            ee
          ), Y++;
      }
    } else if (Y > pe)
      for (; Y <= ce; )
        ve(M[Y], W, X, !0), Y++;
    else {
      const V = Y, ie = Y, xe = /* @__PURE__ */ new Map();
      for (Y = ie; Y <= pe; Y++) {
        const gt = L[Y] = ee ? yr(L[Y]) : Pn(L[Y]);
        gt.key != null && xe.set(gt.key, Y);
      }
      let $e, it = 0;
      const dt = pe - ie + 1;
      let wt = !1, xt = 0;
      const gn = new Array(dt);
      for (Y = 0; Y < dt; Y++) gn[Y] = 0;
      for (Y = V; Y <= ce; Y++) {
        const gt = M[Y];
        if (it >= dt) {
          ve(gt, W, X, !0);
          continue;
        }
        let Mt;
        if (gt.key != null)
          Mt = xe.get(gt.key);
        else
          for ($e = ie; $e <= pe; $e++)
            if (gn[$e - ie] === 0 && Vr(gt, L[$e])) {
              Mt = $e;
              break;
            }
        Mt === void 0 ? ve(gt, W, X, !0) : (gn[Mt - ie] = Y + 1, Mt >= xt ? xt = Mt : wt = !0, g(
          gt,
          L[Mt],
          j,
          null,
          W,
          X,
          se,
          re,
          ee
        ), it++);
      }
      const an = wt ? Mw(gn) : uo;
      for ($e = an.length - 1, Y = dt - 1; Y >= 0; Y--) {
        const gt = ie + Y, Mt = L[gt], $n = gt + 1 < be ? L[gt + 1].el : J;
        gn[Y] === 0 ? g(
          null,
          Mt,
          j,
          $n,
          W,
          X,
          se,
          re,
          ee
        ) : wt && ($e < 0 || Y !== an[$e] ? Ae(Mt, j, $n, 2) : $e--);
      }
    }
  }, Ae = (M, L, j, J, W = null) => {
    const { el: X, type: se, transition: re, children: ee, shapeFlag: Y } = M;
    if (Y & 6) {
      Ae(M.component.subTree, L, j, J);
      return;
    }
    if (Y & 128) {
      M.suspense.move(L, j, J);
      return;
    }
    if (Y & 64) {
      se.move(M, L, j, me);
      return;
    }
    if (se === Ze) {
      r(X, L, j);
      for (let ce = 0; ce < ee.length; ce++)
        Ae(ee[ce], L, j, J);
      r(M.anchor, L, j);
      return;
    }
    if (se === ti) {
      y(M, L, j);
      return;
    }
    if (J !== 2 && Y & 1 && re)
      if (J === 0)
        re.beforeEnter(X), r(X, L, j), Ft(() => re.enter(X), W);
      else {
        const { leave: ce, delayLeave: pe, afterLeave: V } = re, ie = () => r(X, L, j), xe = () => {
          ce(X, () => {
            ie(), V && V();
          });
        };
        pe ? pe(X, ie, xe) : xe();
      }
    else
      r(X, L, j);
  }, ve = (M, L, j, J = !1, W = !1) => {
    const {
      type: X,
      props: se,
      ref: re,
      children: ee,
      dynamicChildren: Y,
      shapeFlag: be,
      patchFlag: ce,
      dirs: pe,
      cacheIndex: V
    } = M;
    if (ce === -2 && (W = !1), re != null && mi(re, null, j, M, !0), V != null && (L.renderCache[V] = void 0), be & 256) {
      L.ctx.deactivate(M);
      return;
    }
    const ie = be & 1 && pe, xe = !go(M);
    let $e;
    if (xe && ($e = se && se.onVnodeBeforeUnmount) && On($e, L, M), be & 6)
      nt(M.component, j, J);
    else {
      if (be & 128) {
        M.suspense.unmount(j, J);
        return;
      }
      ie && Pr(M, null, L, "beforeUnmount"), be & 64 ? M.type.remove(
        M,
        L,
        j,
        me,
        J
      ) : Y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (X !== Ze || ce > 0 && ce & 64) ? ft(
        Y,
        L,
        j,
        !1,
        !0
      ) : (X === Ze && ce & 384 || !W && be & 16) && ft(ee, L, j), J && Ne(M);
    }
    (xe && ($e = se && se.onVnodeUnmounted) || ie) && Ft(() => {
      $e && On($e, L, M), ie && Pr(M, null, L, "unmounted");
    }, j);
  }, Ne = (M) => {
    const { type: L, el: j, anchor: J, transition: W } = M;
    if (L === Ze) {
      Je(j, J);
      return;
    }
    if (L === ti) {
      _(M);
      return;
    }
    const X = () => {
      s(j), W && !W.persisted && W.afterLeave && W.afterLeave();
    };
    if (M.shapeFlag & 1 && W && !W.persisted) {
      const { leave: se, delayLeave: re } = W, ee = () => se(j, X);
      re ? re(M.el, X, ee) : ee();
    } else
      X();
  }, Je = (M, L) => {
    let j;
    for (; M !== L; )
      j = p(M), s(M), M = j;
    s(L);
  }, nt = (M, L, j) => {
    const { bum: J, scope: W, job: X, subTree: se, um: re, m: ee, a: Y } = M;
    Md(ee), Md(Y), J && Qs(J), W.stop(), X && (X.flags |= 8, ve(se, M, L, j)), re && Ft(re, L), Ft(() => {
      M.isUnmounted = !0;
    }, L), L && L.pendingBranch && !L.isUnmounted && M.asyncDep && !M.asyncResolved && M.suspenseId === L.pendingId && (L.deps--, L.deps === 0 && L.resolve());
  }, ft = (M, L, j, J = !1, W = !1, X = 0) => {
    for (let se = X; se < M.length; se++)
      ve(M[se], L, j, J, W);
  }, ht = (M) => {
    if (M.shapeFlag & 6)
      return ht(M.component.subTree);
    if (M.shapeFlag & 128)
      return M.suspense.next();
    const L = p(M.anchor || M.el), j = L && L[q1];
    return j ? p(j) : L;
  };
  let ct = !1;
  const Yt = (M, L, j) => {
    M == null ? L._vnode && ve(L._vnode, null, null, !0) : g(
      L._vnode || null,
      M,
      L,
      null,
      null,
      null,
      j
    ), L._vnode = M, ct || (ct = !0, bd(), N1(), ct = !1);
  }, me = {
    p: g,
    um: ve,
    m: Ae,
    r: Ne,
    mt: F,
    mc: $,
    pc: H,
    pbc: P,
    n: ht,
    o: e
  };
  return {
    render: Yt,
    hydrate: void 0,
    createApp: _w(Yt)
  };
}
function Sa({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Dr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Tw(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function af(e, t, n = !1) {
  const r = e.children, s = t.children;
  if (Me(r) && Me(s))
    for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = yr(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && af(i, a)), a.type === Ao && (a.el = i.el);
    }
}
function Mw(e) {
  const t = e.slice(), n = [0];
  let r, s, o, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (s = n[n.length - 1], e[s] < u) {
        t[r] = s, n.push(r);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        a = o + i >> 1, e[n[a]] < u ? o = a + 1 : i = a;
      u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function vg(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vg(t);
}
function Md(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const $w = Symbol.for("v-scx"), Lw = () => De($w);
function lf(e, t) {
  return cf(e, null, t);
}
function Ee(e, t, n) {
  return cf(e, t, n);
}
function cf(e, t, n = Xe) {
  const { immediate: r, deep: s, flush: o, once: i } = n, a = Ct({}, n), l = t && r || !t && o !== "post";
  let u;
  if (is) {
    if (o === "sync") {
      const d = Lw();
      u = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!l) {
      const d = () => {
      };
      return d.stop = Pt, d.resume = Pt, d.pause = Pt, d;
    }
  }
  const f = At;
  a.call = (d, m, g) => xn(d, f, m, g);
  let c = !1;
  o === "post" ? a.scheduler = (d) => {
    Ft(d, f && f.suspense);
  } : o !== "sync" && (c = !0, a.scheduler = (d, m) => {
    m ? d() : nf(d);
  }), a.augmentJob = (d) => {
    t && (d.flags |= 4), c && (d.flags |= 2, f && (d.id = f.uid, d.i = f));
  };
  const p = Z4(e, t, a);
  return is && (u ? u.push(p) : l && p()), p;
}
function Iw(e, t, n) {
  const r = this.proxy, s = He(e) ? e.includes(".") ? bg(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ce(t) ? o = t : (o = t.handler, n = t);
  const i = _s(this), a = cf(s, o.bind(r), n);
  return i(), a;
}
function bg(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const Ow = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${dn(t)}Modifiers`] || e[`${Ar(t)}Modifiers`];
function Rw(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Xe;
  let s = n;
  const o = t.startsWith("update:"), i = o && Ow(r, t.slice(7));
  i && (i.trim && (s = n.map((f) => He(f) ? f.trim() : f)), i.number && (s = n.map(iu)));
  let a, l = r[a = _a(t)] || // also try camelCase event handler (#2249)
  r[a = _a(dn(t))];
  !l && o && (l = r[a = _a(Ar(t))]), l && xn(
    l,
    e,
    6,
    s
  );
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, xn(
      u,
      e,
      6,
      s
    );
  }
}
function _g(e, t, n = !1) {
  const r = t.emitsCache, s = r.get(e);
  if (s !== void 0)
    return s;
  const o = e.emits;
  let i = {}, a = !1;
  if (!Ce(e)) {
    const l = (u) => {
      const f = _g(u, t, !0);
      f && (a = !0, Ct(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Pe(e) && r.set(e, null), null) : (Me(o) ? o.forEach((l) => i[l] = null) : Ct(i, o), Pe(e) && r.set(e, i), i);
}
function Vi(e, t) {
  return !e || !Li(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ue(e, t[0].toLowerCase() + t.slice(1)) || Ue(e, Ar(t)) || Ue(e, t));
}
function $d(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: s,
    propsOptions: [o],
    slots: i,
    attrs: a,
    emit: l,
    render: u,
    renderCache: f,
    props: c,
    data: p,
    setupState: d,
    ctx: m,
    inheritAttrs: g
  } = e, C = gi(e);
  let h, k;
  try {
    if (n.shapeFlag & 4) {
      const _ = s || r, S = _;
      h = Pn(
        u.call(
          S,
          _,
          f,
          c,
          d,
          p,
          m
        )
      ), k = a;
    } else {
      const _ = t;
      h = Pn(
        _.length > 1 ? _(
          c,
          { attrs: a, slots: i, emit: l }
        ) : _(
          c,
          null
        )
      ), k = t.props ? a : Pw(a);
    }
  } catch (_) {
    Wo.length = 0, Fi(_, e, 1), h = we(Ot);
  }
  let y = h;
  if (k && g !== !1) {
    const _ = Object.keys(k), { shapeFlag: S } = y;
    _.length && S & 7 && (o && _.some(Uu) && (k = Dw(
      k,
      o
    )), y = er(y, k, !1, !0));
  }
  return n.dirs && (y = er(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && rs(y, n.transition), h = y, gi(C), h;
}
const Pw = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Li(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Dw = (e, t) => {
  const n = {};
  for (const r in e)
    (!Uu(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Nw(e, t, n) {
  const { props: r, children: s, component: o } = e, { props: i, children: a, patchFlag: l } = t, u = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Ld(r, i, u) : !!i;
    if (l & 8) {
      const f = t.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const p = f[c];
        if (i[p] !== r[p] && !Vi(u, p))
          return !0;
      }
    }
  } else
    return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Ld(r, i, u) : !0 : !!i;
  return !1;
}
function Ld(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const o = r[s];
    if (t[o] !== e[o] && !Vi(n, o))
      return !0;
  }
  return !1;
}
function Bw({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const yg = (e) => e.__isSuspense;
function Fw(e, t) {
  t && t.pendingBranch ? Me(e) ? t.effects.push(...e) : t.effects.push(e) : J4(e);
}
const Ze = Symbol.for("v-fgt"), Ao = Symbol.for("v-txt"), Ot = Symbol.for("v-cmt"), ti = Symbol.for("v-stc"), Wo = [];
let on = null;
function w(e = !1) {
  Wo.push(on = e ? null : []);
}
function qw() {
  Wo.pop(), on = Wo[Wo.length - 1] || null;
}
let os = 1;
function Id(e, t = !1) {
  os += e, e < 0 && on && t && (on.hasOnce = !0);
}
function wg(e) {
  return e.dynamicChildren = os > 0 ? on || uo : null, qw(), os > 0 && on && on.push(e), e;
}
function A(e, t, n, r, s, o) {
  return wg(
    v(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function le(e, t, n, r, s) {
  return wg(
    we(
      e,
      t,
      n,
      r,
      s,
      !0
    )
  );
}
function ss(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Vr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const kg = ({ key: e }) => e ?? null, ni = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? He(e) || vt(e) || Ce(e) ? { i: kt, r: e, k: t, f: !!n } : e : null);
function v(e, t = null, n = null, r = 0, s = null, o = e === Ze ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && kg(t),
    ref: t && ni(t),
    scopeId: F1,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: kt
  };
  return a ? (ff(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= He(n) ? 8 : 16), os > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  on && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && on.push(l), l;
}
const we = zw;
function zw(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === eg) && (e = Ot), ss(e)) {
    const a = er(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ff(a, n), os > 0 && !o && on && (a.shapeFlag & 6 ? on[on.indexOf(e)] = a : on.push(a)), a.patchFlag = -2, a;
  }
  if (Zw(e) && (e = e.__vccOpts), t) {
    t = uf(t);
    let { class: a, style: l } = t;
    a && !He(a) && (t.class = Z(a)), Pe(l) && (tf(l) && !Me(l) && (l = Ct({}, l)), t.style = tt(l));
  }
  const i = He(e) ? 1 : yg(e) ? 128 : z1(e) ? 64 : Pe(e) ? 4 : Ce(e) ? 2 : 0;
  return v(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function uf(e) {
  return e ? tf(e) || ug(e) ? Ct({}, e) : e : null;
}
function er(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e, u = t ? pt(s || {}, t) : s, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && kg(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? Me(o) ? o.concat(ni(t)) : [o, ni(t)] : ni(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ze ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && er(e.ssContent),
    ssFallback: e.ssFallback && er(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && rs(
    f,
    l.clone(f)
  ), f;
}
function Yr(e = " ", t = 0) {
  return we(Ao, null, e, t);
}
function $r(e, t) {
  const n = we(ti, null, e);
  return n.staticCount = t, n;
}
function ge(e = "", t = !1) {
  return t ? (w(), le(Ot, null, e)) : we(Ot, null, e);
}
function Pn(e) {
  return e == null || typeof e == "boolean" ? we(Ot) : Me(e) ? we(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ss(e) ? yr(e) : we(Ao, null, String(e));
}
function yr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : er(e);
}
function ff(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Me(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ff(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !ug(t) ? t._ctx = kt : s === 3 && kt && (kt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ce(t) ? (t = { default: t, _ctx: kt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Yr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = Z([t.class, r.class]));
      else if (s === "style")
        t.style = tt([t.style, r.style]);
      else if (Li(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(Me(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
function On(e, t, n, r = null) {
  xn(e, t, 7, [
    n,
    r
  ]);
}
const Hw = ag();
let jw = 0;
function Vw(e, t, n) {
  const r = e.type, s = (t ? t.appContext : e.appContext) || Hw, o = {
    uid: jw++,
    vnode: e,
    type: r,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new y4(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: dg(r, s),
    emitsOptions: _g(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Xe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Xe,
    data: Xe,
    props: Xe,
    attrs: Xe,
    slots: Xe,
    refs: Xe,
    setupState: Xe,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Rw.bind(null, o), e.ce && e.ce(o), o;
}
let At = null;
const bt = () => At || kt;
let _i, vu;
{
  const e = Pi(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
    };
  };
  _i = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => At = n
  ), vu = t(
    "__VUE_SSR_SETTERS__",
    (n) => is = n
  );
}
const _s = (e) => {
  const t = At;
  return _i(e), e.scope.on(), () => {
    e.scope.off(), _i(t);
  };
}, Od = () => {
  At && At.scope.off(), _i(null);
};
function Cg(e) {
  return e.vnode.shapeFlag & 4;
}
let is = !1;
function Uw(e, t = !1, n = !1) {
  t && vu(t);
  const { props: r, children: s } = e.vnode, o = Cg(e);
  yw(e, r, o, t), xw(e, s, n);
  const i = o ? Kw(e, t) : void 0;
  return t && vu(!1), i;
}
function Kw(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, dw);
  const { setup: r } = n;
  if (r) {
    Tr();
    const s = e.setupContext = r.length > 1 ? Eg(e) : null, o = _s(e), i = bs(
      r,
      e,
      0,
      [
        e.props,
        s
      ]
    ), a = u1(i);
    if (Mr(), o(), (a || e.sp) && !go(e) && Z1(e), a) {
      if (i.then(Od, Od), t)
        return i.then((l) => {
          Rd(e, l);
        }).catch((l) => {
          Fi(l, e, 0);
        });
      e.asyncDep = i;
    } else
      Rd(e, i);
  } else
    xg(e);
}
function Rd(e, t, n) {
  Ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pe(t) && (e.setupState = O1(t)), xg(e);
}
function xg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Pt);
  {
    const s = _s(e);
    Tr();
    try {
      pw(e);
    } finally {
      Mr(), s();
    }
  }
}
const Gw = {
  get(e, t) {
    return Lt(e, "get", ""), e[t];
  }
};
function Eg(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Gw),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ui(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(O1(z4(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Go)
        return Go[n](e);
    },
    has(t, n) {
      return n in t || n in Go;
    }
  })) : e.proxy;
}
function Ww(e, t = !0) {
  return Ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Zw(e) {
  return Ce(e) && "__vccOpts" in e;
}
const R = (e, t) => G4(e, t, is);
function _n(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Pe(t) && !Me(t) ? ss(t) ? we(e, null, [t]) : we(e, t) : we(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && ss(n) && (n = [n]), we(e, t, n));
}
const Xw = "3.5.13", Yw = Pt;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bu;
const Pd = typeof window < "u" && window.trustedTypes;
if (Pd)
  try {
    bu = /* @__PURE__ */ Pd.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Sg = bu ? (e) => bu.createHTML(e) : (e) => e, Jw = "http://www.w3.org/2000/svg", Qw = "http://www.w3.org/1998/Math/MathML", Un = typeof document < "u" ? document : null, Dd = Un && /* @__PURE__ */ Un.createElement("template"), e3 = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const s = t === "svg" ? Un.createElementNS(Jw, e) : t === "mathml" ? Un.createElementNS(Qw, e) : n ? Un.createElement(e, { is: n }) : Un.createElement(e);
    return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (e) => Un.createTextNode(e),
  createComment: (e) => Un.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Un.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, s, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === o || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)); )
        ;
    else {
      Dd.innerHTML = Sg(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Dd.content;
      if (r === "svg" || r === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, hr = "transition", Oo = "animation", as = Symbol("_vtc"), Ag = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, t3 = /* @__PURE__ */ Ct(
  {},
  V1,
  Ag
), n3 = (e) => (e.displayName = "Transition", e.props = t3, e), Jr = /* @__PURE__ */ n3(
  (e, { slots: t }) => _n(rw, r3(e), t)
), Nr = (e, t = []) => {
  Me(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Nd = (e) => e ? Me(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function r3(e) {
  const t = {};
  for (const D in e)
    D in Ag || (t[D] = e[D]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: s,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: a = `${n}-enter-to`,
    appearFromClass: l = o,
    appearActiveClass: u = i,
    appearToClass: f = a,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: d = `${n}-leave-to`
  } = e, m = o3(s), g = m && m[0], C = m && m[1], {
    onBeforeEnter: h,
    onEnter: k,
    onEnterCancelled: y,
    onLeave: _,
    onLeaveCancelled: S,
    onBeforeAppear: x = h,
    onAppear: T = k,
    onAppearCancelled: $ = y
  } = t, I = (D, oe, F, U) => {
    D._enterCancelled = U, Br(D, oe ? f : a), Br(D, oe ? u : i), F && F();
  }, P = (D, oe) => {
    D._isLeaving = !1, Br(D, c), Br(D, d), Br(D, p), oe && oe();
  }, N = (D) => (oe, F) => {
    const U = D ? T : k, q = () => I(oe, D, F);
    Nr(U, [oe, q]), Bd(() => {
      Br(oe, D ? l : o), jn(oe, D ? f : a), Nd(U) || Fd(oe, r, g, q);
    });
  };
  return Ct(t, {
    onBeforeEnter(D) {
      Nr(h, [D]), jn(D, o), jn(D, i);
    },
    onBeforeAppear(D) {
      Nr(x, [D]), jn(D, l), jn(D, u);
    },
    onEnter: N(!1),
    onAppear: N(!0),
    onLeave(D, oe) {
      D._isLeaving = !0;
      const F = () => P(D, oe);
      jn(D, c), D._enterCancelled ? (jn(D, p), Hd()) : (Hd(), jn(D, p)), Bd(() => {
        D._isLeaving && (Br(D, c), jn(D, d), Nd(_) || Fd(D, r, C, F));
      }), Nr(_, [D, F]);
    },
    onEnterCancelled(D) {
      I(D, !1, void 0, !0), Nr(y, [D]);
    },
    onAppearCancelled(D) {
      I(D, !0, void 0, !0), Nr($, [D]);
    },
    onLeaveCancelled(D) {
      P(D), Nr(S, [D]);
    }
  });
}
function o3(e) {
  if (e == null)
    return null;
  if (Pe(e))
    return [Aa(e.enter), Aa(e.leave)];
  {
    const t = Aa(e);
    return [t, t];
  }
}
function Aa(e) {
  return p4(e);
}
function jn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[as] || (e[as] = /* @__PURE__ */ new Set())).add(t);
}
function Br(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[as];
  n && (n.delete(t), n.size || (e[as] = void 0));
}
function Bd(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let s3 = 0;
function Fd(e, t, n, r) {
  const s = e._endId = ++s3, o = () => {
    s === e._endId && r();
  };
  if (n != null)
    return setTimeout(o, n);
  const { type: i, timeout: a, propCount: l } = i3(e, t);
  if (!i)
    return r();
  const u = i + "end";
  let f = 0;
  const c = () => {
    e.removeEventListener(u, p), o();
  }, p = (d) => {
    d.target === e && ++f >= l && c();
  };
  setTimeout(() => {
    f < l && c();
  }, a + 1), e.addEventListener(u, p);
}
function i3(e, t) {
  const n = window.getComputedStyle(e), r = (m) => (n[m] || "").split(", "), s = r(`${hr}Delay`), o = r(`${hr}Duration`), i = qd(s, o), a = r(`${Oo}Delay`), l = r(`${Oo}Duration`), u = qd(a, l);
  let f = null, c = 0, p = 0;
  t === hr ? i > 0 && (f = hr, c = i, p = o.length) : t === Oo ? u > 0 && (f = Oo, c = u, p = l.length) : (c = Math.max(i, u), f = c > 0 ? i > u ? hr : Oo : null, p = f ? f === hr ? o.length : l.length : 0);
  const d = f === hr && /\b(transform|all)(,|$)/.test(
    r(`${hr}Property`).toString()
  );
  return {
    type: f,
    timeout: c,
    propCount: p,
    hasTransform: d
  };
}
function qd(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => zd(n) + zd(e[r])));
}
function zd(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Hd() {
  return document.body.offsetHeight;
}
function a3(e, t, n) {
  const r = e[as];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const yi = Symbol("_vod"), Tg = Symbol("_vsh"), tr = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[yi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ro(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Ro(e, !0), r.enter(e)) : r.leave(e, () => {
      Ro(e, !1);
    }) : Ro(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ro(e, t);
  }
};
function Ro(e, t) {
  e.style.display = t ? e[yi] : "none", e[Tg] = !t;
}
const l3 = Symbol(""), c3 = /(^|;)\s*display\s*:/;
function u3(e, t, n) {
  const r = e.style, s = He(n);
  let o = !1;
  if (n && !s) {
    if (t)
      if (He(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && ri(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && ri(r, i, "");
    for (const i in n)
      i === "display" && (o = !0), ri(r, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = r[l3];
      i && (n += ";" + i), r.cssText = n, o = c3.test(n);
    }
  } else t && e.removeAttribute("style");
  yi in e && (e[yi] = o ? r.display : "", e[Tg] && (r.display = "none"));
}
const jd = /\s*!important$/;
function ri(e, t, n) {
  if (Me(n))
    n.forEach((r) => ri(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = f3(e, t);
    jd.test(n) ? e.setProperty(
      Ar(r),
      n.replace(jd, ""),
      "important"
    ) : e[r] = n;
  }
}
const Vd = ["Webkit", "Moz", "ms"], Ta = {};
function f3(e, t) {
  const n = Ta[t];
  if (n)
    return n;
  let r = dn(t);
  if (r !== "filter" && r in e)
    return Ta[t] = r;
  r = Ri(r);
  for (let s = 0; s < Vd.length; s++) {
    const o = Vd[s] + r;
    if (o in e)
      return Ta[t] = o;
  }
  return t;
}
const Ud = "http://www.w3.org/1999/xlink";
function Kd(e, t, n, r, s, o = _4(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ud, t.slice(6, t.length)) : e.setAttributeNS(Ud, t, n) : n == null || o && !h1(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : ir(n) ? String(n) : n
  );
}
function Gd(e, t, n, r, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Sg(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = h1(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(s || t);
}
function ao(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function d3(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Wd = Symbol("_vei");
function p3(e, t, n, r, s = null) {
  const o = e[Wd] || (e[Wd] = {}), i = o[t];
  if (r && i)
    i.value = r;
  else {
    const [a, l] = h3(t);
    if (r) {
      const u = o[t] = v3(
        r,
        s
      );
      ao(e, a, u, l);
    } else i && (d3(e, a, i, l), o[t] = void 0);
  }
}
const Zd = /(?:Once|Passive|Capture)$/;
function h3(e) {
  let t;
  if (Zd.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Zd); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ar(e.slice(2)), t];
}
let Ma = 0;
const g3 = /* @__PURE__ */ Promise.resolve(), m3 = () => Ma || (g3.then(() => Ma = 0), Ma = Date.now());
function v3(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    xn(
      b3(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = m3(), n;
}
function b3(e, t) {
  if (Me(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (s) => !s._stopped && r && r(s)
    );
  } else
    return t;
}
const Xd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, _3 = (e, t, n, r, s, o) => {
  const i = s === "svg";
  t === "class" ? a3(e, r, i) : t === "style" ? u3(e, n, r) : Li(t) ? Uu(t) || p3(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : y3(e, t, r, i)) ? (Gd(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Kd(e, t, r, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !He(r)) ? Gd(e, dn(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Kd(e, t, r, i));
};
function y3(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Xd(t) && Ce(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Xd(t) && He(n) ? !1 : t in e;
}
function df(e = "$style") {
  {
    const t = bt();
    if (!t)
      return Xe;
    const n = t.type.__cssModules;
    if (!n)
      return Xe;
    const r = n[e];
    return r || Xe;
  }
}
const Yd = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Me(t) ? (n) => Qs(t, n) : t;
};
function w3(e) {
  e.target.composing = !0;
}
function Jd(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const $a = Symbol("_assign"), Mg = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
    e[$a] = Yd(s);
    const o = r || s.props && s.props.type === "number";
    ao(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), o && (a = iu(a)), e[$a](a);
    }), n && ao(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ao(e, "compositionstart", w3), ao(e, "compositionend", Jd), ao(e, "change", Jd));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
    if (e[$a] = Yd(i), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? iu(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l));
  }
}, k3 = ["ctrl", "shift", "alt", "meta"], C3 = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => k3.some((n) => e[`${n}Key`] && !t.includes(n))
}, nn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (s, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const a = C3[t[i]];
      if (a && a(s, t)) return;
    }
    return e(s, ...o);
  });
}, x3 = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, qt = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (s) => {
    if (!("key" in s))
      return;
    const o = Ar(s.key);
    if (t.some(
      (i) => i === o || x3[i] === o
    ))
      return e(s);
  });
}, E3 = /* @__PURE__ */ Ct({ patchProp: _3 }, e3);
let Qd;
function S3() {
  return Qd || (Qd = Sw(E3));
}
const A3 = (...e) => {
  const t = S3().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const s = M3(r);
    if (!s) return;
    const o = t._component;
    !Ce(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, T3(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function T3(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function M3(e) {
  return He(e) ? document.querySelector(e) : e;
}
const Po = {
  webhookUrl: "http://localhost:5678",
  webhookConfig: {
    method: "POST",
    headers: {}
  },
  target: "#n8n-chat",
  mode: "window",
  loadPreviousSession: !0,
  chatInputKey: "chatInput",
  chatSessionKey: "sessionId",
  defaultLanguage: "en",
  showWelcomeScreen: !1,
  initialMessages: ["Hi there! 👋", "My name is Nathan. How can I assist you today?"],
  i18n: {
    en: {
      title: "Hi there! 👋",
      subtitle: "Start a chat. We're here to help you 24/7.",
      footer: "",
      getStarted: "New Conversation",
      inputPlaceholder: "Type your question..",
      closeButtonTooltip: "Close chat"
    }
  },
  theme: {},
  enableStreaming: !1
}, $3 = "#n8n-chat", L3 = "n8n-chat", e0 = `${L3}/sessionId`, $g = "Chat", Lg = "ChatOptions";
var St = [];
for (var La = 0; La < 256; ++La)
  St.push((La + 256).toString(16).slice(1));
function I3(e, t = 0) {
  return (St[e[t + 0]] + St[e[t + 1]] + St[e[t + 2]] + St[e[t + 3]] + "-" + St[e[t + 4]] + St[e[t + 5]] + "-" + St[e[t + 6]] + St[e[t + 7]] + "-" + St[e[t + 8]] + St[e[t + 9]] + "-" + St[e[t + 10]] + St[e[t + 11]] + St[e[t + 12]] + St[e[t + 13]] + St[e[t + 14]] + St[e[t + 15]]).toLowerCase();
}
var Ds, O3 = new Uint8Array(16);
function R3() {
  if (!Ds && (Ds = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Ds))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Ds(O3);
}
var P3 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const t0 = {
  randomUUID: P3
};
function zo(e, t, n) {
  if (t0.randomUUID && !e)
    return t0.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || R3)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, I3(r);
}
async function D3() {
  return "";
}
async function pf(...e) {
  var o, i;
  const t = await D3(), n = (o = e[1]) == null ? void 0 : o.body, r = {
    ...t ? { authorization: `Bearer ${t}` } : {},
    ...(i = e[1]) == null ? void 0 : i.headers
  };
  return n instanceof FormData ? delete r["Content-Type"] : r["Content-Type"] = "application/json", await (await fetch(e[0], {
    ...e[1],
    mode: "cors",
    cache: "no-cache",
    headers: r
  })).json();
}
async function Ig(e, t = {}, n = {}) {
  let r = e;
  return Object.keys(t).length > 0 && (r = `${r}?${new URLSearchParams(
    t
  ).toString()}`), await pf(r, { ...n, method: "GET" });
}
async function Og(e, t = {}, n = {}) {
  return await pf(e, {
    ...n,
    method: "POST",
    body: JSON.stringify(t)
  });
}
async function N3(e, t = {}, n = [], r = {}) {
  const s = new FormData();
  for (const o in t)
    s.append(o, t[o]);
  for (const o of n)
    s.append("files", o);
  return await pf(e, {
    ...r,
    method: "POST",
    body: s
  });
}
async function B3(e, t) {
  var r, s;
  return await (((r = t.webhookConfig) == null ? void 0 : r.method) === "POST" ? Og : Ig)(
    `${t.webhookUrl}`,
    {
      action: "loadPreviousSession",
      [t.chatSessionKey]: e,
      ...t.metadata ? { metadata: t.metadata } : {}
    },
    {
      headers: (s = t.webhookConfig) == null ? void 0 : s.headers
    }
  );
}
async function F3(e, t, n, r) {
  var o, i, a;
  return t.length > 0 ? await N3(
    `${r.webhookUrl}`,
    {
      action: "sendMessage",
      [r.chatSessionKey]: n,
      [r.chatInputKey]: e,
      ...r.metadata ? { metadata: r.metadata } : {}
    },
    t,
    {
      headers: (o = r.webhookConfig) == null ? void 0 : o.headers
    }
  ) : await (((i = r.webhookConfig) == null ? void 0 : i.method) === "POST" ? Og : Ig)(
    `${r.webhookUrl}`,
    {
      action: "sendMessage",
      [r.chatSessionKey]: n,
      [r.chatInputKey]: e,
      ...r.metadata ? { metadata: r.metadata } : {}
    },
    {
      headers: (a = r.webhookConfig) == null ? void 0 : a.headers
    }
  );
}
function q3() {
  let e = "";
  const t = new TextDecoder();
  return new TransformStream({
    transform(n, r) {
      e += t.decode(n, { stream: !0 });
      const s = e.split(`
`);
      e = s.pop() ?? "";
      for (const o of s)
        if (o.trim())
          try {
            const i = JSON.parse(o);
            r.enqueue(i);
          } catch {
            r.enqueue({
              type: "item",
              content: o
            });
          }
    },
    flush(n) {
      if (e.trim())
        try {
          const r = JSON.parse(e);
          n.enqueue(r);
        } catch {
          n.enqueue({
            type: "item",
            content: e
          });
        }
    }
  });
}
async function z3(e, t, n, r, s) {
  var a, l;
  const o = await (t.length > 0 ? H3(e, t, n, r) : j3(e, n, r));
  if (!o.ok) {
    const u = await o.text();
    throw console.error("HTTP error response:", o.status, u), new Error(`Error while sending message. Error: ${u}`);
  }
  if (!o.body)
    throw new Error("Response body is not readable");
  const i = o.body.pipeThrough(q3()).getReader();
  try {
    for (; ; ) {
      const { done: u, value: f } = await i.read();
      if (u) break;
      const c = ((a = f.metadata) == null ? void 0 : a.nodeId) || "unknown", p = (l = f.metadata) == null ? void 0 : l.runIndex;
      switch (f.type) {
        case "begin":
          s.onBeginMessage(c, p);
          break;
        case "item":
          s.onChunk(f.content ?? "", c, p);
          break;
        case "end":
          s.onEndMessage(c, p);
          break;
        case "error":
          s.onChunk(`Error: ${f.content ?? "Unknown error"}`, c, p), s.onEndMessage(c, p);
          break;
      }
    }
  } finally {
    i.releaseLock();
  }
}
async function H3(e, t, n, r) {
  var o;
  const s = new FormData();
  s.append("action", "sendMessage"), s.append(r.chatSessionKey, n), s.append(r.chatInputKey, e), r.metadata && s.append("metadata", JSON.stringify(r.metadata));
  for (const i of t)
    s.append("files", i);
  return await fetch(r.webhookUrl, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      ...(o = r.webhookConfig) == null ? void 0 : o.headers
    },
    body: s
  });
}
async function j3(e, t, n) {
  var s;
  const r = {
    action: "sendMessage",
    [n.chatSessionKey]: t,
    [n.chatInputKey]: e,
    ...n.metadata ? { metadata: n.metadata } : {}
  };
  return await fetch(n.webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "text/plain",
      ...(s = n.webhookConfig) == null ? void 0 : s.headers
    },
    body: JSON.stringify(r)
  });
}
function V3() {
  const e = /* @__PURE__ */ new Map();
  function t(s, o) {
    const i = e.get(s);
    i && i.splice(i.indexOf(o) >>> 0, 1);
  }
  function n(s, o) {
    let i = e.get(s);
    return i ? i.push(o) : i = [o], e.set(s, i), () => t(s, o);
  }
  function r(s, o) {
    const i = e.get(s);
    i && i.slice().forEach(async (a) => {
      await a(o);
    });
  }
  return {
    on: n,
    off: t,
    emit: r
  };
}
function U3(e) {
  if (!document.querySelector(e)) {
    const n = document.createElement("div");
    e.startsWith("#") && (n.id = e.replace("#", "")), e.startsWith(".") && n.classList.add(e.replace(".", "")), document.body.appendChild(n);
  }
}
const jt = V3();
class K3 {
  constructor() {
    $s(this, "nodeRuns", /* @__PURE__ */ new Map());
    $s(this, "runOrder", []);
    $s(this, "activeRuns", /* @__PURE__ */ new Set());
  }
  getRunKey(t, n) {
    return n !== void 0 ? `${t}-${n}` : t;
  }
  initializeRun(t, n) {
    const r = this.getRunKey(t, n);
    if (!this.nodeRuns.has(r)) {
      const s = wi();
      return this.nodeRuns.set(r, {
        content: "",
        isComplete: !1,
        message: s
      }), this.runOrder.push(r), s;
    }
    return this.nodeRuns.get(r).message;
  }
  registerRunStart(t, n) {
    const r = this.getRunKey(t, n);
    this.activeRuns.add(r);
  }
  addRunToActive(t, n) {
    const r = this.getRunKey(t, n);
    return this.activeRuns.add(r), this.initializeRun(t, n);
  }
  removeRunFromActive(t, n) {
    const r = this.getRunKey(t, n);
    this.activeRuns.delete(r);
    const s = this.nodeRuns.get(r);
    s && (s.isComplete = !0);
  }
  addChunkToRun(t, n, r) {
    const s = this.getRunKey(t, r), o = this.nodeRuns.get(s);
    if (o) {
      o.content += n;
      const i = {
        ...o.message,
        text: o.content
      };
      return o.message = i, i;
    }
    return null;
  }
  getRunMessage(t, n) {
    const r = this.getRunKey(t, n), s = this.nodeRuns.get(r);
    return (s == null ? void 0 : s.message) ?? null;
  }
  areAllRunsComplete() {
    return Array.from(this.nodeRuns.values()).every((t) => t.isComplete);
  }
  getRunCount() {
    return this.runOrder.length;
  }
  getActiveRunCount() {
    return this.activeRuns.size;
  }
  getAllMessages() {
    return this.runOrder.map((t) => {
      var n;
      return (n = this.nodeRuns.get(t)) == null ? void 0 : n.message;
    }).filter((t) => t !== void 0);
  }
  reset() {
    this.nodeRuns.clear(), this.runOrder = [], this.activeRuns.clear();
  }
}
function wi(e) {
  return {
    id: e ?? zo(),
    type: "text",
    text: "",
    sender: "bot"
  };
}
function n0(e, t, n) {
  const r = e.findIndex((s) => s.id === t);
  if (r === -1)
    throw new Error(`Can't update message. No message with id ${t} found`);
  e[r] = n;
}
function G3(e, t, n, r, s, o) {
  try {
    if (!e.trim())
      return;
    if (t) {
      let i = n.getRunMessage(t, o);
      i || (i = n.addRunToActive(t, o), s.value.push(i));
      const a = n.addChunkToRun(t, e, o);
      a && n0(s.value, a.id, a);
    } else {
      r.value || (r.value = wi(), s.value.push(r.value));
      const i = {
        ...r.value,
        text: r.value.text + e
      };
      n0(s.value, r.value.id, i), r.value = i;
    }
    ze(() => {
      jt.emit("scrollToBottom");
    });
  } catch (i) {
    console.error("Error handling stream chunk:", i);
  }
}
function W3(e, t, n) {
  try {
    t.registerRunStart(e, n);
  } catch (r) {
    console.error("Error handling node start:", r);
  }
}
function Z3(e, t, n) {
  try {
    t.removeRunFromActive(e, n);
  } catch (r) {
    console.error("Error handling node complete:", r);
  }
}
const X3 = {
  install(e, t) {
    e.provide(Lg, t);
    const n = G([]), r = G(null), s = G(!1), o = R(
      () => (t.initialMessages ?? []).map((f) => ({
        id: zo(),
        text: f,
        sender: "bot"
      }))
    );
    async function i(f, c = []) {
      const p = {
        id: zo(),
        text: f,
        sender: "user",
        files: c
      };
      n.value.push(p), s.value = !0, ze(() => {
        jt.emit("scrollToBottom");
      });
      const d = G(null), m = new K3();
      try {
        if (t != null && t.enableStreaming) {
          const g = {
            onChunk: (C, h, k) => {
              G3(
                C,
                h,
                m,
                d,
                n,
                k
              );
            },
            onBeginMessage: (C, h) => {
              W3(C, m, h);
            },
            onEndMessage: (C, h) => {
              Z3(C, m, h);
            }
          };
          await z3(
            f,
            c,
            r.value,
            t,
            g
          );
        } else {
          d.value = wi();
          const g = await F3(
            f,
            c,
            r.value,
            t
          );
          let C = g.output ?? g.text ?? "";
          if (C === "" && Object.keys(g).length > 0)
            try {
              C = JSON.stringify(g, null, 2);
            } catch {
            }
          d.value.text = C, n.value.push(d.value);
        }
      } catch (g) {
        d.value || (d.value = wi(), n.value.push(d.value)), d.value && "text" in d.value && (d.value.text = "Error: Failed to receive response"), console.error("Chat API error:", g);
      } finally {
        s.value = !1;
      }
      ze(() => {
        jt.emit("scrollToBottom");
      });
    }
    async function a() {
      if (!t.loadPreviousSession)
        return;
      const f = localStorage.getItem(e0) ?? zo(), c = await B3(f, t);
      return n.value = ((c == null ? void 0 : c.data) || []).map((p, d) => ({
        id: `${d}`,
        text: p.kwargs.content,
        sender: p.id.includes("HumanMessage") ? "user" : "bot"
      })), n.value.length && (r.value = f), f;
    }
    async function l() {
      r.value = zo(), localStorage.setItem(e0, r.value);
    }
    const u = {
      initialMessages: o,
      messages: n,
      currentSessionId: r,
      waitingForResponse: s,
      loadPreviousSession: a,
      startNewSession: l,
      sendMessage: i
    };
    e.provide($g, u), e.config.globalProperties.$chat = u;
  }
};
var Ns = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Y3(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Ia, r0;
function J3() {
  if (r0) return Ia;
  r0 = 1;
  function e(E) {
    return E instanceof Map ? E.clear = E.delete = E.set = function() {
      throw new Error("map is read-only");
    } : E instanceof Set && (E.add = E.clear = E.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(E), Object.getOwnPropertyNames(E).forEach((O) => {
      const K = E[O], ye = typeof K;
      (ye === "object" || ye === "function") && !Object.isFrozen(K) && e(K);
    }), E;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(O) {
      O.data === void 0 && (O.data = {}), this.data = O.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(E) {
    return E.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(E, ...O) {
    const K = /* @__PURE__ */ Object.create(null);
    for (const ye in E)
      K[ye] = E[ye];
    return O.forEach(function(ye) {
      for (const Be in ye)
        K[Be] = ye[Be];
    }), /** @type {T} */
    K;
  }
  const s = "</span>", o = (E) => !!E.scope, i = (E, { prefix: O }) => {
    if (E.startsWith("language:"))
      return E.replace("language:", "language-");
    if (E.includes(".")) {
      const K = E.split(".");
      return [
        `${O}${K.shift()}`,
        ...K.map((ye, Be) => `${ye}${"_".repeat(Be + 1)}`)
      ].join(" ");
    }
    return `${O}${E}`;
  };
  class a {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(O, K) {
      this.buffer = "", this.classPrefix = K.classPrefix, O.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(O) {
      this.buffer += n(O);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(O) {
      if (!o(O)) return;
      const K = i(
        O.scope,
        { prefix: this.classPrefix }
      );
      this.span(K);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(O) {
      o(O) && (this.buffer += s);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(O) {
      this.buffer += `<span class="${O}">`;
    }
  }
  const l = (E = {}) => {
    const O = { children: [] };
    return Object.assign(O, E), O;
  };
  class u {
    constructor() {
      this.rootNode = l(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(O) {
      this.top.children.push(O);
    }
    /** @param {string} scope */
    openNode(O) {
      const K = l({ scope: O });
      this.add(K), this.stack.push(K);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(O) {
      return this.constructor._walk(O, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(O, K) {
      return typeof K == "string" ? O.addText(K) : K.children && (O.openNode(K), K.children.forEach((ye) => this._walk(O, ye)), O.closeNode(K)), O;
    }
    /**
     * @param {Node} node
     */
    static _collapse(O) {
      typeof O != "string" && O.children && (O.children.every((K) => typeof K == "string") ? O.children = [O.children.join("")] : O.children.forEach((K) => {
        u._collapse(K);
      }));
    }
  }
  class f extends u {
    /**
     * @param {*} options
     */
    constructor(O) {
      super(), this.options = O;
    }
    /**
     * @param {string} text
     */
    addText(O) {
      O !== "" && this.add(O);
    }
    /** @param {string} scope */
    startScope(O) {
      this.openNode(O);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(O, K) {
      const ye = O.root;
      K && (ye.scope = `language:${K}`), this.add(ye);
    }
    toHTML() {
      return new a(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function c(E) {
    return E ? typeof E == "string" ? E : E.source : null;
  }
  function p(E) {
    return g("(?=", E, ")");
  }
  function d(E) {
    return g("(?:", E, ")*");
  }
  function m(E) {
    return g("(?:", E, ")?");
  }
  function g(...E) {
    return E.map((K) => c(K)).join("");
  }
  function C(E) {
    const O = E[E.length - 1];
    return typeof O == "object" && O.constructor === Object ? (E.splice(E.length - 1, 1), O) : {};
  }
  function h(...E) {
    return "(" + (C(E).capture ? "" : "?:") + E.map((ye) => c(ye)).join("|") + ")";
  }
  function k(E) {
    return new RegExp(E.toString() + "|").exec("").length - 1;
  }
  function y(E, O) {
    const K = E && E.exec(O);
    return K && K.index === 0;
  }
  const _ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function S(E, { joinWith: O }) {
    let K = 0;
    return E.map((ye) => {
      K += 1;
      const Be = K;
      let je = c(ye), he = "";
      for (; je.length > 0; ) {
        const ue = _.exec(je);
        if (!ue) {
          he += je;
          break;
        }
        he += je.substring(0, ue.index), je = je.substring(ue.index + ue[0].length), ue[0][0] === "\\" && ue[1] ? he += "\\" + String(Number(ue[1]) + Be) : (he += ue[0], ue[0] === "(" && K++);
      }
      return he;
    }).map((ye) => `(${ye})`).join(O);
  }
  const x = /\b\B/, T = "[a-zA-Z]\\w*", $ = "[a-zA-Z_]\\w*", I = "\\b\\d+(\\.\\d+)?", P = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", N = "\\b(0b[01]+)", D = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", oe = (E = {}) => {
    const O = /^#![ ]*\//;
    return E.binary && (E.begin = g(
      O,
      /.*\b/,
      E.binary,
      /\b.*/
    )), r({
      scope: "meta",
      begin: O,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (K, ye) => {
        K.index !== 0 && ye.ignoreMatch();
      }
    }, E);
  }, F = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, U = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [F]
  }, q = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [F]
  }, z = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, H = function(E, O, K = {}) {
    const ye = r(
      {
        scope: "comment",
        begin: E,
        end: O,
        contains: []
      },
      K
    );
    ye.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const Be = h(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return ye.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: g(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          Be,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), ye;
  }, Q = H("//", "$"), te = H("/\\*", "\\*/"), Ae = H("#", "$"), ve = {
    scope: "number",
    begin: I,
    relevance: 0
  }, Ne = {
    scope: "number",
    begin: P,
    relevance: 0
  }, Je = {
    scope: "number",
    begin: N,
    relevance: 0
  }, nt = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      F,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [F]
      }
    ]
  }, ft = {
    scope: "title",
    begin: T,
    relevance: 0
  }, ht = {
    scope: "title",
    begin: $,
    relevance: 0
  }, ct = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + $,
    relevance: 0
  };
  var me = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: U,
    BACKSLASH_ESCAPE: F,
    BINARY_NUMBER_MODE: Je,
    BINARY_NUMBER_RE: N,
    COMMENT: H,
    C_BLOCK_COMMENT_MODE: te,
    C_LINE_COMMENT_MODE: Q,
    C_NUMBER_MODE: Ne,
    C_NUMBER_RE: P,
    END_SAME_AS_BEGIN: function(E) {
      return Object.assign(
        E,
        {
          /** @type {ModeCallback} */
          "on:begin": (O, K) => {
            K.data._beginMatch = O[1];
          },
          /** @type {ModeCallback} */
          "on:end": (O, K) => {
            K.data._beginMatch !== O[1] && K.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Ae,
    IDENT_RE: T,
    MATCH_NOTHING_RE: x,
    METHOD_GUARD: ct,
    NUMBER_MODE: ve,
    NUMBER_RE: I,
    PHRASAL_WORDS_MODE: z,
    QUOTE_STRING_MODE: q,
    REGEXP_MODE: nt,
    RE_STARTERS_RE: D,
    SHEBANG: oe,
    TITLE_MODE: ft,
    UNDERSCORE_IDENT_RE: $,
    UNDERSCORE_TITLE_MODE: ht
  });
  function Re(E, O) {
    E.input[E.index - 1] === "." && O.ignoreMatch();
  }
  function M(E, O) {
    E.className !== void 0 && (E.scope = E.className, delete E.className);
  }
  function L(E, O) {
    O && E.beginKeywords && (E.begin = "\\b(" + E.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", E.__beforeBegin = Re, E.keywords = E.keywords || E.beginKeywords, delete E.beginKeywords, E.relevance === void 0 && (E.relevance = 0));
  }
  function j(E, O) {
    Array.isArray(E.illegal) && (E.illegal = h(...E.illegal));
  }
  function J(E, O) {
    if (E.match) {
      if (E.begin || E.end) throw new Error("begin & end are not supported with match");
      E.begin = E.match, delete E.match;
    }
  }
  function W(E, O) {
    E.relevance === void 0 && (E.relevance = 1);
  }
  const X = (E, O) => {
    if (!E.beforeMatch) return;
    if (E.starts) throw new Error("beforeMatch cannot be used with starts");
    const K = Object.assign({}, E);
    Object.keys(E).forEach((ye) => {
      delete E[ye];
    }), E.keywords = K.keywords, E.begin = g(K.beforeMatch, p(K.begin)), E.starts = {
      relevance: 0,
      contains: [
        Object.assign(K, { endsParent: !0 })
      ]
    }, E.relevance = 0, delete K.beforeMatch;
  }, se = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], re = "keyword";
  function ee(E, O, K = re) {
    const ye = /* @__PURE__ */ Object.create(null);
    return typeof E == "string" ? Be(K, E.split(" ")) : Array.isArray(E) ? Be(K, E) : Object.keys(E).forEach(function(je) {
      Object.assign(
        ye,
        ee(E[je], O, je)
      );
    }), ye;
    function Be(je, he) {
      O && (he = he.map((ue) => ue.toLowerCase())), he.forEach(function(ue) {
        const Te = ue.split("|");
        ye[Te[0]] = [je, Y(Te[0], Te[1])];
      });
    }
  }
  function Y(E, O) {
    return O ? Number(O) : be(E) ? 0 : 1;
  }
  function be(E) {
    return se.includes(E.toLowerCase());
  }
  const ce = {}, pe = (E) => {
    console.error(E);
  }, V = (E, ...O) => {
    console.log(`WARN: ${E}`, ...O);
  }, ie = (E, O) => {
    ce[`${E}/${O}`] || (console.log(`Deprecated as of ${E}. ${O}`), ce[`${E}/${O}`] = !0);
  }, xe = new Error();
  function $e(E, O, { key: K }) {
    let ye = 0;
    const Be = E[K], je = {}, he = {};
    for (let ue = 1; ue <= O.length; ue++)
      he[ue + ye] = Be[ue], je[ue + ye] = !0, ye += k(O[ue - 1]);
    E[K] = he, E[K]._emit = je, E[K]._multi = !0;
  }
  function it(E) {
    if (Array.isArray(E.begin)) {
      if (E.skip || E.excludeBegin || E.returnBegin)
        throw pe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), xe;
      if (typeof E.beginScope != "object" || E.beginScope === null)
        throw pe("beginScope must be object"), xe;
      $e(E, E.begin, { key: "beginScope" }), E.begin = S(E.begin, { joinWith: "" });
    }
  }
  function dt(E) {
    if (Array.isArray(E.end)) {
      if (E.skip || E.excludeEnd || E.returnEnd)
        throw pe("skip, excludeEnd, returnEnd not compatible with endScope: {}"), xe;
      if (typeof E.endScope != "object" || E.endScope === null)
        throw pe("endScope must be object"), xe;
      $e(E, E.end, { key: "endScope" }), E.end = S(E.end, { joinWith: "" });
    }
  }
  function wt(E) {
    E.scope && typeof E.scope == "object" && E.scope !== null && (E.beginScope = E.scope, delete E.scope);
  }
  function xt(E) {
    wt(E), typeof E.beginScope == "string" && (E.beginScope = { _wrap: E.beginScope }), typeof E.endScope == "string" && (E.endScope = { _wrap: E.endScope }), it(E), dt(E);
  }
  function gn(E) {
    function O(he, ue) {
      return new RegExp(
        c(he),
        "m" + (E.case_insensitive ? "i" : "") + (E.unicodeRegex ? "u" : "") + (ue ? "g" : "")
      );
    }
    class K {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(ue, Te) {
        Te.position = this.position++, this.matchIndexes[this.matchAt] = Te, this.regexes.push([Te, ue]), this.matchAt += k(ue) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const ue = this.regexes.map((Te) => Te[1]);
        this.matcherRe = O(S(ue, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(ue) {
        this.matcherRe.lastIndex = this.lastIndex;
        const Te = this.matcherRe.exec(ue);
        if (!Te)
          return null;
        const _t = Te.findIndex((Jt, pa) => pa > 0 && Jt !== void 0), Ve = this.matchIndexes[_t];
        return Te.splice(0, _t), Object.assign(Te, Ve);
      }
    }
    class ye {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(ue) {
        if (this.multiRegexes[ue]) return this.multiRegexes[ue];
        const Te = new K();
        return this.rules.slice(ue).forEach(([_t, Ve]) => Te.addRule(_t, Ve)), Te.compile(), this.multiRegexes[ue] = Te, Te;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(ue, Te) {
        this.rules.push([ue, Te]), Te.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(ue) {
        const Te = this.getMatcher(this.regexIndex);
        Te.lastIndex = this.lastIndex;
        let _t = Te.exec(ue);
        if (this.resumingScanAtSamePosition() && !(_t && _t.index === this.lastIndex)) {
          const Ve = this.getMatcher(0);
          Ve.lastIndex = this.lastIndex + 1, _t = Ve.exec(ue);
        }
        return _t && (this.regexIndex += _t.position + 1, this.regexIndex === this.count && this.considerAll()), _t;
      }
    }
    function Be(he) {
      const ue = new ye();
      return he.contains.forEach((Te) => ue.addRule(Te.begin, { rule: Te, type: "begin" })), he.terminatorEnd && ue.addRule(he.terminatorEnd, { type: "end" }), he.illegal && ue.addRule(he.illegal, { type: "illegal" }), ue;
    }
    function je(he, ue) {
      const Te = (
        /** @type CompiledMode */
        he
      );
      if (he.isCompiled) return Te;
      [
        M,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        J,
        xt,
        X
      ].forEach((Ve) => Ve(he, ue)), E.compilerExtensions.forEach((Ve) => Ve(he, ue)), he.__beforeBegin = null, [
        L,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        j,
        // default to 1 relevance if not specified
        W
      ].forEach((Ve) => Ve(he, ue)), he.isCompiled = !0;
      let _t = null;
      return typeof he.keywords == "object" && he.keywords.$pattern && (he.keywords = Object.assign({}, he.keywords), _t = he.keywords.$pattern, delete he.keywords.$pattern), _t = _t || /\w+/, he.keywords && (he.keywords = ee(he.keywords, E.case_insensitive)), Te.keywordPatternRe = O(_t, !0), ue && (he.begin || (he.begin = /\B|\b/), Te.beginRe = O(Te.begin), !he.end && !he.endsWithParent && (he.end = /\B|\b/), he.end && (Te.endRe = O(Te.end)), Te.terminatorEnd = c(Te.end) || "", he.endsWithParent && ue.terminatorEnd && (Te.terminatorEnd += (he.end ? "|" : "") + ue.terminatorEnd)), he.illegal && (Te.illegalRe = O(
        /** @type {RegExp | string} */
        he.illegal
      )), he.contains || (he.contains = []), he.contains = [].concat(...he.contains.map(function(Ve) {
        return gt(Ve === "self" ? he : Ve);
      })), he.contains.forEach(function(Ve) {
        je(
          /** @type Mode */
          Ve,
          Te
        );
      }), he.starts && je(he.starts, ue), Te.matcher = Be(Te), Te;
    }
    if (E.compilerExtensions || (E.compilerExtensions = []), E.contains && E.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return E.classNameAliases = r(E.classNameAliases || {}), je(
      /** @type Mode */
      E
    );
  }
  function an(E) {
    return E ? E.endsWithParent || an(E.starts) : !1;
  }
  function gt(E) {
    return E.variants && !E.cachedVariants && (E.cachedVariants = E.variants.map(function(O) {
      return r(E, { variants: null }, O);
    })), E.cachedVariants ? E.cachedVariants : an(E) ? r(E, { starts: E.starts ? r(E.starts) : null }) : Object.isFrozen(E) ? r(E) : E;
  }
  var Mt = "11.9.0";
  class $n extends Error {
    constructor(O, K) {
      super(O), this.name = "HTMLInjectionError", this.html = K;
    }
  }
  const ur = n, to = r, Or = Symbol("nomatch"), $o = 7, no = function(E) {
    const O = /* @__PURE__ */ Object.create(null), K = /* @__PURE__ */ Object.create(null), ye = [];
    let Be = !0;
    const je = "Could not find the language '{}', did you forget to load/include a language module?", he = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let ue = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: f
    };
    function Te(ae) {
      return ue.noHighlightRe.test(ae);
    }
    function _t(ae) {
      let Se = ae.className + " ";
      Se += ae.parentNode ? ae.parentNode.className : "";
      const qe = ue.languageDetectRe.exec(Se);
      if (qe) {
        const ot = fr(qe[1]);
        return ot || (V(je.replace("{}", qe[1])), V("Falling back to no-highlight mode for this block.", ae)), ot ? qe[1] : "no-highlight";
      }
      return Se.split(/\s+/).find((ot) => Te(ot) || fr(ot));
    }
    function Ve(ae, Se, qe) {
      let ot = "", yt = "";
      typeof Se == "object" ? (ot = ae, qe = Se.ignoreIllegals, yt = Se.language) : (ie("10.7.0", "highlight(lang, code, ...args) has been deprecated."), ie("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), yt = ae, ot = Se), qe === void 0 && (qe = !0);
      const mn = {
        code: ot,
        language: yt
      };
      Ss("before:highlight", mn);
      const dr = mn.result ? mn.result : Jt(mn.language, mn.code, qe);
      return dr.code = mn.code, Ss("after:highlight", dr), dr;
    }
    function Jt(ae, Se, qe, ot) {
      const yt = /* @__PURE__ */ Object.create(null);
      function mn(de, ke) {
        return de.keywords[ke];
      }
      function dr() {
        if (!Le.keywords) {
          Et.addText(at);
          return;
        }
        let de = 0;
        Le.keywordPatternRe.lastIndex = 0;
        let ke = Le.keywordPatternRe.exec(at), Oe = "";
        for (; ke; ) {
          Oe += at.substring(de, ke.index);
          const Qe = In.case_insensitive ? ke[0].toLowerCase() : ke[0], $t = mn(Le, Qe);
          if ($t) {
            const [zn, s4] = $t;
            if (Et.addText(Oe), Oe = "", yt[Qe] = (yt[Qe] || 0) + 1, yt[Qe] <= $o && (Ms += s4), zn.startsWith("_"))
              Oe += ke[0];
            else {
              const i4 = In.classNameAliases[zn] || zn;
              Ln(ke[0], i4);
            }
          } else
            Oe += ke[0];
          de = Le.keywordPatternRe.lastIndex, ke = Le.keywordPatternRe.exec(at);
        }
        Oe += at.substring(de), Et.addText(Oe);
      }
      function As() {
        if (at === "") return;
        let de = null;
        if (typeof Le.subLanguage == "string") {
          if (!O[Le.subLanguage]) {
            Et.addText(at);
            return;
          }
          de = Jt(Le.subLanguage, at, !0, hd[Le.subLanguage]), hd[Le.subLanguage] = /** @type {CompiledMode} */
          de._top;
        } else
          de = ha(at, Le.subLanguage.length ? Le.subLanguage : null);
        Le.relevance > 0 && (Ms += de.relevance), Et.__addSublanguage(de._emitter, de.language);
      }
      function Qt() {
        Le.subLanguage != null ? As() : dr(), at = "";
      }
      function Ln(de, ke) {
        de !== "" && (Et.startScope(ke), Et.addText(de), Et.endScope());
      }
      function ud(de, ke) {
        let Oe = 1;
        const Qe = ke.length - 1;
        for (; Oe <= Qe; ) {
          if (!de._emit[Oe]) {
            Oe++;
            continue;
          }
          const $t = In.classNameAliases[de[Oe]] || de[Oe], zn = ke[Oe];
          $t ? Ln(zn, $t) : (at = zn, dr(), at = ""), Oe++;
        }
      }
      function fd(de, ke) {
        return de.scope && typeof de.scope == "string" && Et.openNode(In.classNameAliases[de.scope] || de.scope), de.beginScope && (de.beginScope._wrap ? (Ln(at, In.classNameAliases[de.beginScope._wrap] || de.beginScope._wrap), at = "") : de.beginScope._multi && (ud(de.beginScope, ke), at = "")), Le = Object.create(de, { parent: { value: Le } }), Le;
      }
      function dd(de, ke, Oe) {
        let Qe = y(de.endRe, Oe);
        if (Qe) {
          if (de["on:end"]) {
            const $t = new t(de);
            de["on:end"](ke, $t), $t.isMatchIgnored && (Qe = !1);
          }
          if (Qe) {
            for (; de.endsParent && de.parent; )
              de = de.parent;
            return de;
          }
        }
        if (de.endsWithParent)
          return dd(de.parent, ke, Oe);
      }
      function e4(de) {
        return Le.matcher.regexIndex === 0 ? (at += de[0], 1) : (ba = !0, 0);
      }
      function t4(de) {
        const ke = de[0], Oe = de.rule, Qe = new t(Oe), $t = [Oe.__beforeBegin, Oe["on:begin"]];
        for (const zn of $t)
          if (zn && (zn(de, Qe), Qe.isMatchIgnored))
            return e4(ke);
        return Oe.skip ? at += ke : (Oe.excludeBegin && (at += ke), Qt(), !Oe.returnBegin && !Oe.excludeBegin && (at = ke)), fd(Oe, de), Oe.returnBegin ? 0 : ke.length;
      }
      function n4(de) {
        const ke = de[0], Oe = Se.substring(de.index), Qe = dd(Le, de, Oe);
        if (!Qe)
          return Or;
        const $t = Le;
        Le.endScope && Le.endScope._wrap ? (Qt(), Ln(ke, Le.endScope._wrap)) : Le.endScope && Le.endScope._multi ? (Qt(), ud(Le.endScope, de)) : $t.skip ? at += ke : ($t.returnEnd || $t.excludeEnd || (at += ke), Qt(), $t.excludeEnd && (at = ke));
        do
          Le.scope && Et.closeNode(), !Le.skip && !Le.subLanguage && (Ms += Le.relevance), Le = Le.parent;
        while (Le !== Qe.parent);
        return Qe.starts && fd(Qe.starts, de), $t.returnEnd ? 0 : ke.length;
      }
      function r4() {
        const de = [];
        for (let ke = Le; ke !== In; ke = ke.parent)
          ke.scope && de.unshift(ke.scope);
        de.forEach((ke) => Et.openNode(ke));
      }
      let Ts = {};
      function pd(de, ke) {
        const Oe = ke && ke[0];
        if (at += de, Oe == null)
          return Qt(), 0;
        if (Ts.type === "begin" && ke.type === "end" && Ts.index === ke.index && Oe === "") {
          if (at += Se.slice(ke.index, ke.index + 1), !Be) {
            const Qe = new Error(`0 width match regex (${ae})`);
            throw Qe.languageName = ae, Qe.badRule = Ts.rule, Qe;
          }
          return 1;
        }
        if (Ts = ke, ke.type === "begin")
          return t4(ke);
        if (ke.type === "illegal" && !qe) {
          const Qe = new Error('Illegal lexeme "' + Oe + '" for mode "' + (Le.scope || "<unnamed>") + '"');
          throw Qe.mode = Le, Qe;
        } else if (ke.type === "end") {
          const Qe = n4(ke);
          if (Qe !== Or)
            return Qe;
        }
        if (ke.type === "illegal" && Oe === "")
          return 1;
        if (va > 1e5 && va > ke.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return at += Oe, Oe.length;
      }
      const In = fr(ae);
      if (!In)
        throw pe(je.replace("{}", ae)), new Error('Unknown language: "' + ae + '"');
      const o4 = gn(In);
      let ma = "", Le = ot || o4;
      const hd = {}, Et = new ue.__emitter(ue);
      r4();
      let at = "", Ms = 0, Rr = 0, va = 0, ba = !1;
      try {
        if (In.__emitTokens)
          In.__emitTokens(Se, Et);
        else {
          for (Le.matcher.considerAll(); ; ) {
            va++, ba ? ba = !1 : Le.matcher.considerAll(), Le.matcher.lastIndex = Rr;
            const de = Le.matcher.exec(Se);
            if (!de) break;
            const ke = Se.substring(Rr, de.index), Oe = pd(ke, de);
            Rr = de.index + Oe;
          }
          pd(Se.substring(Rr));
        }
        return Et.finalize(), ma = Et.toHTML(), {
          language: ae,
          value: ma,
          relevance: Ms,
          illegal: !1,
          _emitter: Et,
          _top: Le
        };
      } catch (de) {
        if (de.message && de.message.includes("Illegal"))
          return {
            language: ae,
            value: ur(Se),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: de.message,
              index: Rr,
              context: Se.slice(Rr - 100, Rr + 100),
              mode: de.mode,
              resultSoFar: ma
            },
            _emitter: Et
          };
        if (Be)
          return {
            language: ae,
            value: ur(Se),
            illegal: !1,
            relevance: 0,
            errorRaised: de,
            _emitter: Et,
            _top: Le
          };
        throw de;
      }
    }
    function pa(ae) {
      const Se = {
        value: ur(ae),
        illegal: !1,
        relevance: 0,
        _top: he,
        _emitter: new ue.__emitter(ue)
      };
      return Se._emitter.addText(ae), Se;
    }
    function ha(ae, Se) {
      Se = Se || ue.languages || Object.keys(O);
      const qe = pa(ae), ot = Se.filter(fr).filter(cd).map(
        (Qt) => Jt(Qt, ae, !1)
      );
      ot.unshift(qe);
      const yt = ot.sort((Qt, Ln) => {
        if (Qt.relevance !== Ln.relevance) return Ln.relevance - Qt.relevance;
        if (Qt.language && Ln.language) {
          if (fr(Qt.language).supersetOf === Ln.language)
            return 1;
          if (fr(Ln.language).supersetOf === Qt.language)
            return -1;
        }
        return 0;
      }), [mn, dr] = yt, As = mn;
      return As.secondBest = dr, As;
    }
    function Hy(ae, Se, qe) {
      const ot = Se && K[Se] || qe;
      ae.classList.add("hljs"), ae.classList.add(`language-${ot}`);
    }
    function ga(ae) {
      let Se = null;
      const qe = _t(ae);
      if (Te(qe)) return;
      if (Ss(
        "before:highlightElement",
        { el: ae, language: qe }
      ), ae.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", ae);
        return;
      }
      if (ae.children.length > 0 && (ue.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(ae)), ue.throwUnescapedHTML))
        throw new $n(
          "One of your code blocks includes unescaped HTML.",
          ae.innerHTML
        );
      Se = ae;
      const ot = Se.textContent, yt = qe ? Ve(ot, { language: qe, ignoreIllegals: !0 }) : ha(ot);
      ae.innerHTML = yt.value, ae.dataset.highlighted = "yes", Hy(ae, qe, yt.language), ae.result = {
        language: yt.language,
        // TODO: remove with version 11.0
        re: yt.relevance,
        relevance: yt.relevance
      }, yt.secondBest && (ae.secondBest = {
        language: yt.secondBest.language,
        relevance: yt.secondBest.relevance
      }), Ss("after:highlightElement", { el: ae, result: yt, text: ot });
    }
    function jy(ae) {
      ue = to(ue, ae);
    }
    const Vy = () => {
      Es(), ie("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Uy() {
      Es(), ie("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let ad = !1;
    function Es() {
      if (document.readyState === "loading") {
        ad = !0;
        return;
      }
      document.querySelectorAll(ue.cssSelector).forEach(ga);
    }
    function Ky() {
      ad && Es();
    }
    typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", Ky, !1);
    function Gy(ae, Se) {
      let qe = null;
      try {
        qe = Se(E);
      } catch (ot) {
        if (pe("Language definition for '{}' could not be registered.".replace("{}", ae)), Be)
          pe(ot);
        else
          throw ot;
        qe = he;
      }
      qe.name || (qe.name = ae), O[ae] = qe, qe.rawDefinition = Se.bind(null, E), qe.aliases && ld(qe.aliases, { languageName: ae });
    }
    function Wy(ae) {
      delete O[ae];
      for (const Se of Object.keys(K))
        K[Se] === ae && delete K[Se];
    }
    function Zy() {
      return Object.keys(O);
    }
    function fr(ae) {
      return ae = (ae || "").toLowerCase(), O[ae] || O[K[ae]];
    }
    function ld(ae, { languageName: Se }) {
      typeof ae == "string" && (ae = [ae]), ae.forEach((qe) => {
        K[qe.toLowerCase()] = Se;
      });
    }
    function cd(ae) {
      const Se = fr(ae);
      return Se && !Se.disableAutodetect;
    }
    function Xy(ae) {
      ae["before:highlightBlock"] && !ae["before:highlightElement"] && (ae["before:highlightElement"] = (Se) => {
        ae["before:highlightBlock"](
          Object.assign({ block: Se.el }, Se)
        );
      }), ae["after:highlightBlock"] && !ae["after:highlightElement"] && (ae["after:highlightElement"] = (Se) => {
        ae["after:highlightBlock"](
          Object.assign({ block: Se.el }, Se)
        );
      });
    }
    function Yy(ae) {
      Xy(ae), ye.push(ae);
    }
    function Jy(ae) {
      const Se = ye.indexOf(ae);
      Se !== -1 && ye.splice(Se, 1);
    }
    function Ss(ae, Se) {
      const qe = ae;
      ye.forEach(function(ot) {
        ot[qe] && ot[qe](Se);
      });
    }
    function Qy(ae) {
      return ie("10.7.0", "highlightBlock will be removed entirely in v12.0"), ie("10.7.0", "Please use highlightElement now."), ga(ae);
    }
    Object.assign(E, {
      highlight: Ve,
      highlightAuto: ha,
      highlightAll: Es,
      highlightElement: ga,
      // TODO: Remove with v12 API
      highlightBlock: Qy,
      configure: jy,
      initHighlighting: Vy,
      initHighlightingOnLoad: Uy,
      registerLanguage: Gy,
      unregisterLanguage: Wy,
      listLanguages: Zy,
      getLanguage: fr,
      registerAliases: ld,
      autoDetection: cd,
      inherit: to,
      addPlugin: Yy,
      removePlugin: Jy
    }), E.debugMode = function() {
      Be = !1;
    }, E.safeMode = function() {
      Be = !0;
    }, E.versionString = Mt, E.regex = {
      concat: g,
      lookahead: p,
      either: h,
      optional: m,
      anyNumberOfTimes: d
    };
    for (const ae in me)
      typeof me[ae] == "object" && e(me[ae]);
    return Object.assign(E, me), E;
  }, B = no({});
  return B.newInstance = () => no({}), Ia = B, B.HighlightJS = B, B.default = B, Ia;
}
var Q3 = /* @__PURE__ */ J3();
const Kn = /* @__PURE__ */ hf(Q3), o0 = "[A-Za-z$_][0-9A-Za-z$_]*", ek = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
], tk = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Rg = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Pg = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Dg = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], nk = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], rk = [].concat(
  Dg,
  Rg,
  Pg
);
function Ng(e) {
  const t = e.regex, n = (H, { after: Q }) => {
    const te = "</" + H[0].slice(1);
    return H.input.indexOf(te, Q) !== -1;
  }, r = o0, s = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, Q) => {
      const te = H[0].length + H.index, Ae = H.input[te];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ae === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ae === ","
      ) {
        Q.ignoreMatch();
        return;
      }
      Ae === ">" && (n(H, { after: te }) || Q.ignoreMatch());
      let ve;
      const Ne = H.input.substring(te);
      if (ve = Ne.match(/^\s*=/)) {
        Q.ignoreMatch();
        return;
      }
      if ((ve = Ne.match(/^\s+extends\s+/)) && ve.index === 0) {
        Q.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: o0,
    keyword: ek,
    literal: tk,
    built_in: rk,
    "variable.language": nk
  }, l = "[0-9](_?[0-9])*", u = `\\.(${l})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", c = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${f})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${f})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, d = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, m = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, g = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, C = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, k = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, y = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    d,
    m,
    g,
    C,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    c
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = y.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(y)
  });
  const _ = [].concat(k, p.contains), S = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(_)
    }
  ]), x = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: S
  }, T = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, $ = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Rg,
        ...Pg
      ]
    }
  }, I = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, P = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [x],
    illegal: /%/
  }, N = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function D(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const oe = {
    match: t.concat(
      /\b/,
      D([
        ...Dg,
        "super",
        "import"
      ]),
      r,
      t.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  }, F = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, U = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      x
    ]
  }, q = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", z = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(q)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      x
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: S, CLASS_REFERENCE: $ },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      I,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      d,
      m,
      g,
      C,
      k,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      c,
      $,
      {
        className: "attr",
        begin: r + t.lookahead(":"),
        relevance: 0
      },
      z,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          k,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: q,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: S
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: s.begin, end: s.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      P,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          x,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      F,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [x]
      },
      oe,
      N,
      T,
      U,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Bg(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, s = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, o = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, i = e.inherit(o, {
    begin: /\(/,
    end: /\)/
  }), a = e.inherit(e.APOS_STRING_MODE, { className: "string" }), l = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), u = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: r,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [s]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [s]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          o,
          l,
          a,
          i,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  o,
                  i,
                  l,
                  a
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      s,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              l
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [u],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [u],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: u
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const ok = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sk(e, t) {
  return w(), A("svg", ok, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    }, null, -1)
  ]));
}
const ik = { name: "mdi-close", render: sk }, Lr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, ak = {}, lk = { class: "chat-button" };
function ck(e, t) {
  return w(), A("button", lk, [
    _e(e.$slots, "default")
  ]);
}
const uk = /* @__PURE__ */ Lr(ak, [["render", ck]]);
function gf() {
  return De($g);
}
function ys() {
  return {
    options: De(Lg)
  };
}
function Ki() {
  const { options: e } = ys(), t = (e == null ? void 0 : e.defaultLanguage) ?? "en";
  function n(s) {
    var i, a;
    const o = (a = (i = e == null ? void 0 : e.i18n) == null ? void 0 : i[t]) == null ? void 0 : a[s];
    return vt(o) ? o.value : o ?? s;
  }
  function r(s) {
    var o, i;
    return !!((i = (o = e == null ? void 0 : e.i18n) == null ? void 0 : o[t]) != null && i[s]);
  }
  return { t: n, te: r };
}
const fk = { class: "chat-get-started" }, dk = /* @__PURE__ */ ne({
  __name: "GetStarted",
  setup(e) {
    const { t } = Ki();
    return (n, r) => (w(), A("div", fk, [
      we(uk, {
        onClick: r[0] || (r[0] = (s) => n.$emit("click:button"))
      }, {
        default: fe(() => [
          Yr(Ge(b(t)("getStarted")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), pk = {}, hk = { class: "chat-powered-by" };
function gk(e, t) {
  return w(), A("div", hk, t[0] || (t[0] = [
    Yr(" Powered by "),
    v("a", { href: "https://elyxia.uk" }, "Elyxia Global Limited", -1)
  ]));
}
const mk = /* @__PURE__ */ Lr(pk, [["render", gk]]), vk = { class: "chat-get-started-footer" }, bk = { key: 0 }, _k = /* @__PURE__ */ ne({
  __name: "GetStartedFooter",
  setup(e) {
    const { t, te: n } = Ki();
    return (r, s) => (w(), A("div", vk, [
      b(n)("footer") ? (w(), A("div", bk, Ge(b(t)("footer")), 1)) : ge("", !0),
      we(mk)
    ]));
  }
});
function yk(e) {
  return Wu() ? (v1(e), !0) : !1;
}
function wk() {
  const e = /* @__PURE__ */ new Set(), t = (s) => {
    e.delete(s);
  };
  return {
    on: (s) => {
      e.add(s);
      const o = () => t(s);
      return yk(o), {
        off: o
      };
    },
    off: t,
    trigger: (...s) => Promise.all(Array.from(e).map((o) => o(...s)))
  };
}
const kk = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ck = (e, t) => Object.prototype.hasOwnProperty.call(e, t), xk = kk ? window.document : void 0, Ek = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function Sk(e = {}) {
  const {
    document: t = xk
  } = e, n = G(null), { on: r, trigger: s } = wk();
  let o;
  t && (o = t.createElement("input"), o.type = "file", o.onchange = (l) => {
    const u = l.target;
    n.value = u.files, s(n.value);
  });
  const i = () => {
    n.value = null, o && o.value && (o.value = "", s(null));
  }, a = (l) => {
    if (!o)
      return;
    const u = {
      ...Ek,
      ...e,
      ...l
    };
    o.multiple = u.multiple, o.accept = u.accept, o.webkitdirectory = u.directory, Ck(u, "capture") && (o.capture = u.capture), u.reset && i(), o.click();
  };
  return {
    files: Ni(n),
    open: a,
    reset: i,
    onChange: r
  };
}
const Ak = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Tk(e, t) {
  return w(), A("svg", Ak, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
    }, null, -1)
  ]));
}
const Mk = { name: "mdi-paperclip", render: Tk }, $k = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Lk(e, t) {
  return w(), A("svg", $k, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ]));
}
const Ik = { name: "mdi-send", render: Lk }, Ok = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Rk(e, t) {
  return w(), A("svg", Ok, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
    }, null, -1)
  ]));
}
const Pk = { name: "mdi-closeThick", render: Rk }, Dk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Nk(e, t) {
  return w(), A("svg", Dk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
    }, null, -1)
  ]));
}
const Bk = { name: "mdi-fileImage", render: Nk }, Fk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qk(e, t) {
  return w(), A("svg", Fk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"
    }, null, -1)
  ]));
}
const zk = { name: "mdi-fileMusic", render: qk }, Hk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jk(e, t) {
  return w(), A("svg", Hk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
    }, null, -1)
  ]));
}
const s0 = { name: "mdi-fileText", render: jk }, Vk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Uk(e, t) {
  return w(), A("svg", Vk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"
    }, null, -1)
  ]));
}
const Kk = { name: "mdi-fileVideo", render: Uk }, Gk = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Wk(e, t) {
  return w(), A("svg", Gk, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
    }, null, -1)
  ]));
}
const Zk = { name: "mdi-openInNew", render: Wk }, Xk = { class: "chat-file-name" }, Yk = /* @__PURE__ */ ne({
  __name: "ChatFile",
  props: {
    file: {},
    isRemovable: { type: Boolean },
    isPreviewable: { type: Boolean }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = e, r = t, s = {
      document: s0,
      audio: zk,
      image: Bk,
      video: Kk
    }, o = R(() => {
      var u;
      const l = (u = n.file) == null ? void 0 : u.type.split("/")[0];
      return s[l] || s0;
    });
    function i() {
      n.isPreviewable && window.open(URL.createObjectURL(n.file));
    }
    function a() {
      r("remove", n.file);
    }
    return (l, u) => (w(), A("div", {
      class: "chat-file",
      onClick: i
    }, [
      we(b(o)),
      v("p", Xk, Ge(l.file.name), 1),
      l.isRemovable ? (w(), A("span", {
        key: 0,
        class: "chat-file-delete",
        onClick: nn(a, ["stop"])
      }, [
        we(b(Pk))
      ])) : l.isPreviewable ? (w(), le(b(Zk), {
        key: 1,
        class: "chat-file-preview"
      })) : ge("", !0)
    ]));
  }
}), Fg = /* @__PURE__ */ Lr(Yk, [["__scopeId", "data-v-9dc229e7"]]), Jk = { class: "chat-inputs" }, Qk = {
  key: 0,
  class: "chat-input-left-panel"
}, eC = ["disabled", "placeholder"], tC = { class: "chat-inputs-controls" }, nC = ["disabled"], rC = ["disabled"], oC = {
  key: 0,
  class: "chat-files"
}, sC = /* @__PURE__ */ ne({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Ki(), s = t, { options: o } = ys(), i = gf(), { waitingForResponse: a } = i, l = G(null), u = G(null), f = G(""), c = G(!1), p = G(null), d = R(() => {
      var U;
      return f.value === "" || b(a) || ((U = o.disabled) == null ? void 0 : U.value) === !0;
    }), m = R(() => {
      var U;
      return ((U = o.disabled) == null ? void 0 : U.value) === !0;
    }), g = R(
      () => {
        var U;
        return C.value && b(a) && !((U = o.disabled) != null && U.value);
      }
    ), C = R(() => b(o.allowFileUploads) === !0), h = R(() => b(o.allowedFilesMimeTypes)), k = R(() => ({
      "--controls-count": C.value ? 2 : 1
    })), {
      open: y,
      reset: _,
      onChange: S
    } = Sk({
      multiple: !0,
      reset: !1
    });
    S((U) => {
      if (!U) return;
      const q = new DataTransfer();
      if (l.value)
        for (let z = 0; z < l.value.length; z++)
          q.items.add(l.value[z]);
      for (let z = 0; z < U.length; z++)
        q.items.add(U[z]);
      l.value = q.files;
    }), rt(() => {
      jt.on("focusInput", T), jt.on("blurInput", x), jt.on("setInputValue", $), u.value && (p.value = new ResizeObserver((U) => {
        for (const q of U)
          q.target === u.value && F();
      }), p.value.observe(u.value));
    }), Hi(() => {
      jt.off("focusInput", T), jt.off("blurInput", x), jt.off("setInputValue", $), p.value && (p.value.disconnect(), p.value = null);
    });
    function x() {
      u.value && u.value.blur();
    }
    function T() {
      u.value && u.value.focus();
    }
    function $(U) {
      f.value = U, T();
    }
    async function I(U) {
      if (U.preventDefault(), d.value)
        return;
      const q = f.value;
      f.value = "", c.value = !0, await i.sendMessage(q, Array.from(l.value ?? [])), c.value = !1, _(), l.value = null;
    }
    async function P(U) {
      U.shiftKey || (await I(U), F());
    }
    function N(U) {
      if (!l.value) return;
      const q = new DataTransfer();
      for (let z = 0; z < l.value.length; z++) {
        const H = l.value[z];
        U.name !== H.name && q.items.add(H);
      }
      _(), l.value = q.files;
    }
    function D(U) {
      (U.key === "ArrowUp" || U.key === "ArrowDown") && (U.preventDefault(), s("arrowKeyDown", {
        key: U.key,
        currentInputValue: f.value
      }));
    }
    function oe() {
      g.value || y({ accept: b(h) });
    }
    function F() {
      const U = u.value;
      if (!U) return;
      U.style.height = "var(--chat--textarea--height)";
      const q = Math.min(U.scrollHeight, 480);
      U.style.height = `${q}px`;
    }
    return (U, q) => {
      var z;
      return w(), A("div", {
        class: "chat-input",
        style: tt(k.value),
        onKeydown: nn(D, ["stop"])
      }, [
        v("div", Jk, [
          U.$slots.leftPanel ? (w(), A("div", Qk, [
            _e(U.$slots, "leftPanel", {}, void 0, !0)
          ])) : ge("", !0),
          Vt(v("textarea", {
            ref_key: "chatTextArea",
            ref: u,
            "onUpdate:modelValue": q[0] || (q[0] = (H) => f.value = H),
            "data-test-id": "chat-input",
            disabled: m.value,
            placeholder: b(r)(n.placeholder),
            onKeydown: qt(P, ["enter"]),
            onInput: F,
            onMousedown: F,
            onFocus: F
          }, null, 40, eC), [
            [Mg, f.value]
          ]),
          v("div", tC, [
            C.value ? (w(), A("button", {
              key: 0,
              disabled: g.value,
              class: "chat-input-file-button",
              "data-test-id": "chat-attach-file-button",
              onClick: oe
            }, [
              we(b(Mk), {
                height: "24",
                width: "24"
              })
            ], 8, nC)) : ge("", !0),
            v("button", {
              disabled: d.value,
              class: "chat-input-send-button",
              onClick: I
            }, [
              we(b(Ik), {
                height: "24",
                width: "24"
              })
            ], 8, rC)
          ])
        ]),
        (z = l.value) != null && z.length && !c.value ? (w(), A("div", oC, [
          (w(!0), A(Ze, null, Cn(l.value, (H) => (w(), le(Fg, {
            key: H.name,
            file: H,
            "is-removable": !0,
            "is-previewable": !0,
            onRemove: N
          }, null, 8, ["file"]))), 128))
        ])) : ge("", !0)
      ], 36);
    };
  }
}), iC = /* @__PURE__ */ Lr(sC, [["__scopeId", "data-v-6a8287ea"]]), aC = { class: "chat-layout" }, lC = {
  key: 0,
  class: "chat-header"
}, cC = {
  key: 2,
  class: "chat-footer"
}, uC = /* @__PURE__ */ ne({
  __name: "Layout",
  setup(e) {
    const t = G(null);
    function n() {
      const r = t.value;
      r && (r.scrollTop = r.scrollHeight);
    }
    return rt(() => {
      jt.on("scrollToBottom", n), window.addEventListener("resize", n);
    }), Xt(() => {
      jt.off("scrollToBottom", n), window.removeEventListener("resize", n);
    }), (r, s) => (w(), A("main", aC, [
      r.$slots.header ? (w(), A("div", lC, [
        _e(r.$slots, "header")
      ])) : ge("", !0),
      r.$slots.default ? (w(), A("div", {
        key: 1,
        ref_key: "chatBodyRef",
        ref: t,
        class: "chat-body"
      }, [
        _e(r.$slots, "default")
      ], 512)) : ge("", !0),
      r.$slots.footer ? (w(), A("div", cC, [
        _e(r.$slots, "footer")
      ])) : ge("", !0)
    ]));
  }
}), Gn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (s) => {
  const o = e == null ? void 0 : e(s);
  if (n === !1 || !o)
    return t == null ? void 0 : t(s);
};
var i0;
const Dt = typeof window < "u", fC = (e) => typeof e == "string", qg = () => {
}, zg = Dt && ((i0 = window == null ? void 0 : window.navigator) == null ? void 0 : i0.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Hg(e) {
  return typeof e == "function" ? e() : b(e);
}
function dC(e) {
  return e;
}
function mf(e) {
  return Wu() ? (v1(e), !0) : !1;
}
function pC(e, t = !0) {
  bt() ? rt(e) : t ? e() : ze(e);
}
function Cr(e) {
  var t;
  const n = Hg(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const vf = Dt ? window : void 0;
function Gr(...e) {
  let t, n, r, s;
  if (fC(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = vf) : [t, n, r, s] = e, !t)
    return qg;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], i = () => {
    o.forEach((f) => f()), o.length = 0;
  }, a = (f, c, p, d) => (f.addEventListener(c, p, d), () => f.removeEventListener(c, p, d)), l = Ee(() => [Cr(t), Hg(s)], ([f, c]) => {
    i(), f && o.push(...n.flatMap((p) => r.map((d) => a(f, p, d, c))));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), i();
  };
  return mf(u), u;
}
let a0 = !1;
function hC(e, t, n = {}) {
  const { window: r = vf, ignore: s = [], capture: o = !0, detectIframe: i = !1 } = n;
  if (!r)
    return;
  zg && !a0 && (a0 = !0, Array.from(r.document.body.children).forEach((p) => p.addEventListener("click", qg)));
  let a = !0;
  const l = (p) => s.some((d) => {
    if (typeof d == "string")
      return Array.from(r.document.querySelectorAll(d)).some((m) => m === p.target || p.composedPath().includes(m));
    {
      const m = Cr(d);
      return m && (p.target === m || p.composedPath().includes(m));
    }
  }), f = [
    Gr(r, "click", (p) => {
      const d = Cr(e);
      if (!(!d || d === p.target || p.composedPath().includes(d))) {
        if (p.detail === 0 && (a = !l(p)), !a) {
          a = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: o }),
    Gr(r, "pointerdown", (p) => {
      const d = Cr(e);
      d && (a = !p.composedPath().includes(d) && !l(p));
    }, { passive: !0 }),
    i && Gr(r, "blur", (p) => {
      var d;
      const m = Cr(e);
      ((d = r.document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(m != null && m.contains(r.document.activeElement)) && t(p);
    })
  ].filter(Boolean);
  return () => f.forEach((p) => p());
}
function gC(e, t = !1) {
  const n = G(), r = () => n.value = !!e();
  return r(), pC(r, t), n;
}
const l0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, c0 = "__vueuse_ssr_handlers__";
l0[c0] = l0[c0] || {};
var u0 = Object.getOwnPropertySymbols, mC = Object.prototype.hasOwnProperty, vC = Object.prototype.propertyIsEnumerable, bC = (e, t) => {
  var n = {};
  for (var r in e)
    mC.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && u0)
    for (var r of u0(e))
      t.indexOf(r) < 0 && vC.call(e, r) && (n[r] = e[r]);
  return n;
};
function Gi(e, t, n = {}) {
  const r = n, { window: s = vf } = r, o = bC(r, ["window"]);
  let i;
  const a = gC(() => s && "ResizeObserver" in s), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = Ee(() => Cr(e), (c) => {
    l(), a.value && s && c && (i = new ResizeObserver(t), i.observe(c, o));
  }, { immediate: !0, flush: "post" }), f = () => {
    l(), u();
  };
  return mf(f), {
    isSupported: a,
    stop: f
  };
}
var f0;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(f0 || (f0 = {}));
var _C = Object.defineProperty, d0 = Object.getOwnPropertySymbols, yC = Object.prototype.hasOwnProperty, wC = Object.prototype.propertyIsEnumerable, p0 = (e, t, n) => t in e ? _C(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, kC = (e, t) => {
  for (var n in t || (t = {}))
    yC.call(t, n) && p0(e, n, t[n]);
  if (d0)
    for (var n of d0(t))
      wC.call(t, n) && p0(e, n, t[n]);
  return e;
};
const CC = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
kC({
  linear: dC
}, CC);
const xC = () => Dt && /firefox/i.test(window.navigator.userAgent), bf = (e) => {
  let t, n;
  return e.type === "touchend" ? (n = e.changedTouches[0].clientY, t = e.changedTouches[0].clientX) : e.type.startsWith("touch") ? (n = e.touches[0].clientY, t = e.touches[0].clientX) : (n = e.clientY, t = e.clientX), {
    clientX: t,
    clientY: n
  };
};
var jg = typeof global == "object" && global && global.Object === Object && global, EC = typeof self == "object" && self && self.Object === Object && self, qn = jg || EC || Function("return this")(), Sr = qn.Symbol, Vg = Object.prototype, SC = Vg.hasOwnProperty, AC = Vg.toString, Do = Sr ? Sr.toStringTag : void 0;
function TC(e) {
  var t = SC.call(e, Do), n = e[Do];
  try {
    e[Do] = void 0;
    var r = !0;
  } catch {
  }
  var s = AC.call(e);
  return r && (t ? e[Do] = n : delete e[Do]), s;
}
var MC = Object.prototype, $C = MC.toString;
function LC(e) {
  return $C.call(e);
}
var IC = "[object Null]", OC = "[object Undefined]", h0 = Sr ? Sr.toStringTag : void 0;
function To(e) {
  return e == null ? e === void 0 ? OC : IC : h0 && h0 in Object(e) ? TC(e) : LC(e);
}
function _o(e) {
  return e != null && typeof e == "object";
}
var RC = "[object Symbol]";
function Wi(e) {
  return typeof e == "symbol" || _o(e) && To(e) == RC;
}
function PC(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var nr = Array.isArray, g0 = Sr ? Sr.prototype : void 0, m0 = g0 ? g0.toString : void 0;
function Ug(e) {
  if (typeof e == "string")
    return e;
  if (nr(e))
    return PC(e, Ug) + "";
  if (Wi(e))
    return m0 ? m0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var DC = /\s/;
function NC(e) {
  for (var t = e.length; t-- && DC.test(e.charAt(t)); )
    ;
  return t;
}
var BC = /^\s+/;
function FC(e) {
  return e && e.slice(0, NC(e) + 1).replace(BC, "");
}
function yo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var v0 = NaN, qC = /^[-+]0x[0-9a-f]+$/i, zC = /^0b[01]+$/i, HC = /^0o[0-7]+$/i, jC = parseInt;
function b0(e) {
  if (typeof e == "number")
    return e;
  if (Wi(e))
    return v0;
  if (yo(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = yo(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = FC(e);
  var n = zC.test(e);
  return n || HC.test(e) ? jC(e.slice(2), n ? 2 : 8) : qC.test(e) ? v0 : +e;
}
function VC(e) {
  return e;
}
var UC = "[object AsyncFunction]", KC = "[object Function]", GC = "[object GeneratorFunction]", WC = "[object Proxy]";
function Kg(e) {
  if (!yo(e))
    return !1;
  var t = To(e);
  return t == KC || t == GC || t == UC || t == WC;
}
var Oa = qn["__core-js_shared__"], _0 = function() {
  var e = /[^.]+$/.exec(Oa && Oa.keys && Oa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ZC(e) {
  return !!_0 && _0 in e;
}
var XC = Function.prototype, YC = XC.toString;
function eo(e) {
  if (e != null) {
    try {
      return YC.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var JC = /[\\^$.*+?()[\]{}|]/g, QC = /^\[object .+?Constructor\]$/, e6 = Function.prototype, t6 = Object.prototype, n6 = e6.toString, r6 = t6.hasOwnProperty, o6 = RegExp(
  "^" + n6.call(r6).replace(JC, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function s6(e) {
  if (!yo(e) || ZC(e))
    return !1;
  var t = Kg(e) ? o6 : QC;
  return t.test(eo(e));
}
function i6(e, t) {
  return e == null ? void 0 : e[t];
}
function Mo(e, t) {
  var n = i6(e, t);
  return s6(n) ? n : void 0;
}
var _u = Mo(qn, "WeakMap");
function a6(e, t, n, r) {
  e.length;
  for (var s = n + 1; s--; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var l6 = 9007199254740991, c6 = /^(?:0|[1-9]\d*)$/;
function Gg(e, t) {
  var n = typeof e;
  return t = t ?? l6, !!t && (n == "number" || n != "symbol" && c6.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Wg(e, t) {
  return e === t || e !== e && t !== t;
}
var u6 = 9007199254740991;
function _f(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= u6;
}
function f6(e) {
  return e != null && _f(e.length) && !Kg(e);
}
var d6 = Object.prototype;
function p6(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || d6;
  return e === n;
}
function h6(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var g6 = "[object Arguments]";
function y0(e) {
  return _o(e) && To(e) == g6;
}
var Zg = Object.prototype, m6 = Zg.hasOwnProperty, v6 = Zg.propertyIsEnumerable, Xg = y0(/* @__PURE__ */ function() {
  return arguments;
}()) ? y0 : function(e) {
  return _o(e) && m6.call(e, "callee") && !v6.call(e, "callee");
};
function b6() {
  return !1;
}
var Yg = typeof exports == "object" && exports && !exports.nodeType && exports, w0 = Yg && typeof module == "object" && module && !module.nodeType && module, _6 = w0 && w0.exports === Yg, k0 = _6 ? qn.Buffer : void 0, y6 = k0 ? k0.isBuffer : void 0, yu = y6 || b6, w6 = "[object Arguments]", k6 = "[object Array]", C6 = "[object Boolean]", x6 = "[object Date]", E6 = "[object Error]", S6 = "[object Function]", A6 = "[object Map]", T6 = "[object Number]", M6 = "[object Object]", $6 = "[object RegExp]", L6 = "[object Set]", I6 = "[object String]", O6 = "[object WeakMap]", R6 = "[object ArrayBuffer]", P6 = "[object DataView]", D6 = "[object Float32Array]", N6 = "[object Float64Array]", B6 = "[object Int8Array]", F6 = "[object Int16Array]", q6 = "[object Int32Array]", z6 = "[object Uint8Array]", H6 = "[object Uint8ClampedArray]", j6 = "[object Uint16Array]", V6 = "[object Uint32Array]", lt = {};
lt[D6] = lt[N6] = lt[B6] = lt[F6] = lt[q6] = lt[z6] = lt[H6] = lt[j6] = lt[V6] = !0;
lt[w6] = lt[k6] = lt[R6] = lt[C6] = lt[P6] = lt[x6] = lt[E6] = lt[S6] = lt[A6] = lt[T6] = lt[M6] = lt[$6] = lt[L6] = lt[I6] = lt[O6] = !1;
function U6(e) {
  return _o(e) && _f(e.length) && !!lt[To(e)];
}
function K6(e) {
  return function(t) {
    return e(t);
  };
}
var Jg = typeof exports == "object" && exports && !exports.nodeType && exports, Zo = Jg && typeof module == "object" && module && !module.nodeType && module, G6 = Zo && Zo.exports === Jg, Ra = G6 && jg.process, C0 = function() {
  try {
    var e = Zo && Zo.require && Zo.require("util").types;
    return e || Ra && Ra.binding && Ra.binding("util");
  } catch {
  }
}(), x0 = C0 && C0.isTypedArray, Qg = x0 ? K6(x0) : U6, W6 = Object.prototype, Z6 = W6.hasOwnProperty;
function X6(e, t) {
  var n = nr(e), r = !n && Xg(e), s = !n && !r && yu(e), o = !n && !r && !s && Qg(e), i = n || r || s || o, a = i ? h6(e.length, String) : [], l = a.length;
  for (var u in e)
    Z6.call(e, u) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Gg(u, l))) && a.push(u);
  return a;
}
function Y6(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var J6 = Y6(Object.keys, Object), Q6 = Object.prototype, e5 = Q6.hasOwnProperty;
function t5(e) {
  if (!p6(e))
    return J6(e);
  var t = [];
  for (var n in Object(e))
    e5.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function em(e) {
  return f6(e) ? X6(e) : t5(e);
}
var n5 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r5 = /^\w*$/;
function yf(e, t) {
  if (nr(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Wi(e) ? !0 : r5.test(e) || !n5.test(e) || t != null && e in Object(t);
}
var ls = Mo(Object, "create");
function o5() {
  this.__data__ = ls ? ls(null) : {}, this.size = 0;
}
function s5(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var i5 = "__lodash_hash_undefined__", a5 = Object.prototype, l5 = a5.hasOwnProperty;
function c5(e) {
  var t = this.__data__;
  if (ls) {
    var n = t[e];
    return n === i5 ? void 0 : n;
  }
  return l5.call(t, e) ? t[e] : void 0;
}
var u5 = Object.prototype, f5 = u5.hasOwnProperty;
function d5(e) {
  var t = this.__data__;
  return ls ? t[e] !== void 0 : f5.call(t, e);
}
var p5 = "__lodash_hash_undefined__";
function h5(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ls && t === void 0 ? p5 : t, this;
}
function Qr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Qr.prototype.clear = o5;
Qr.prototype.delete = s5;
Qr.prototype.get = c5;
Qr.prototype.has = d5;
Qr.prototype.set = h5;
function g5() {
  this.__data__ = [], this.size = 0;
}
function Zi(e, t) {
  for (var n = e.length; n--; )
    if (Wg(e[n][0], t))
      return n;
  return -1;
}
var m5 = Array.prototype, v5 = m5.splice;
function b5(e) {
  var t = this.__data__, n = Zi(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : v5.call(t, n, 1), --this.size, !0;
}
function _5(e) {
  var t = this.__data__, n = Zi(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function y5(e) {
  return Zi(this.__data__, e) > -1;
}
function w5(e, t) {
  var n = this.__data__, r = Zi(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function lr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
lr.prototype.clear = g5;
lr.prototype.delete = b5;
lr.prototype.get = _5;
lr.prototype.has = y5;
lr.prototype.set = w5;
var cs = Mo(qn, "Map");
function k5() {
  this.size = 0, this.__data__ = {
    hash: new Qr(),
    map: new (cs || lr)(),
    string: new Qr()
  };
}
function C5(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xi(e, t) {
  var n = e.__data__;
  return C5(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function x5(e) {
  var t = Xi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function E5(e) {
  return Xi(this, e).get(e);
}
function S5(e) {
  return Xi(this, e).has(e);
}
function A5(e, t) {
  var n = Xi(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function cr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
cr.prototype.clear = k5;
cr.prototype.delete = x5;
cr.prototype.get = E5;
cr.prototype.has = S5;
cr.prototype.set = A5;
var T5 = "Expected a function";
function wf(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(T5);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var i = e.apply(this, r);
    return n.cache = o.set(s, i) || o, i;
  };
  return n.cache = new (wf.Cache || cr)(), n;
}
wf.Cache = cr;
var M5 = 500;
function $5(e) {
  var t = wf(e, function(r) {
    return n.size === M5 && n.clear(), r;
  }), n = t.cache;
  return t;
}
var L5 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, I5 = /\\(\\)?/g, O5 = $5(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(L5, function(n, r, s, o) {
    t.push(s ? o.replace(I5, "$1") : r || n);
  }), t;
});
function R5(e) {
  return e == null ? "" : Ug(e);
}
function tm(e, t) {
  return nr(e) ? e : yf(e, t) ? [e] : O5(R5(e));
}
function Yi(e) {
  if (typeof e == "string" || Wi(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function nm(e, t) {
  t = tm(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Yi(t[n++])];
  return n && n == r ? e : void 0;
}
function rn(e, t, n) {
  var r = e == null ? void 0 : nm(e, t);
  return r === void 0 ? n : r;
}
function P5(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
function D5() {
  this.__data__ = new lr(), this.size = 0;
}
function N5(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function B5(e) {
  return this.__data__.get(e);
}
function F5(e) {
  return this.__data__.has(e);
}
var q5 = 200;
function z5(e, t) {
  var n = this.__data__;
  if (n instanceof lr) {
    var r = n.__data__;
    if (!cs || r.length < q5 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new cr(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Jn(e) {
  var t = this.__data__ = new lr(e);
  this.size = t.size;
}
Jn.prototype.clear = D5;
Jn.prototype.delete = N5;
Jn.prototype.get = B5;
Jn.prototype.has = F5;
Jn.prototype.set = z5;
function H5(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, o = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (o[s++] = i);
  }
  return o;
}
function j5() {
  return [];
}
var V5 = Object.prototype, U5 = V5.propertyIsEnumerable, E0 = Object.getOwnPropertySymbols, K5 = E0 ? function(e) {
  return e == null ? [] : (e = Object(e), H5(E0(e), function(t) {
    return U5.call(e, t);
  }));
} : j5;
function G5(e, t, n) {
  var r = t(e);
  return nr(e) ? r : P5(r, n(e));
}
function S0(e) {
  return G5(e, em, K5);
}
var wu = Mo(qn, "DataView"), ku = Mo(qn, "Promise"), Cu = Mo(qn, "Set"), A0 = "[object Map]", W5 = "[object Object]", T0 = "[object Promise]", M0 = "[object Set]", $0 = "[object WeakMap]", L0 = "[object DataView]", Z5 = eo(wu), X5 = eo(cs), Y5 = eo(ku), J5 = eo(Cu), Q5 = eo(_u), wr = To;
(wu && wr(new wu(new ArrayBuffer(1))) != L0 || cs && wr(new cs()) != A0 || ku && wr(ku.resolve()) != T0 || Cu && wr(new Cu()) != M0 || _u && wr(new _u()) != $0) && (wr = function(e) {
  var t = To(e), n = t == W5 ? e.constructor : void 0, r = n ? eo(n) : "";
  if (r)
    switch (r) {
      case Z5:
        return L0;
      case X5:
        return A0;
      case Y5:
        return T0;
      case J5:
        return M0;
      case Q5:
        return $0;
    }
  return t;
});
var I0 = qn.Uint8Array, ex = "__lodash_hash_undefined__";
function tx(e) {
  return this.__data__.set(e, ex), this;
}
function nx(e) {
  return this.__data__.has(e);
}
function ki(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new cr(); ++t < n; )
    this.add(e[t]);
}
ki.prototype.add = ki.prototype.push = tx;
ki.prototype.has = nx;
function rx(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function ox(e, t) {
  return e.has(t);
}
var sx = 1, ix = 2;
function rm(e, t, n, r, s, o) {
  var i = n & sx, a = e.length, l = t.length;
  if (a != l && !(i && l > a))
    return !1;
  var u = o.get(e), f = o.get(t);
  if (u && f)
    return u == t && f == e;
  var c = -1, p = !0, d = n & ix ? new ki() : void 0;
  for (o.set(e, t), o.set(t, e); ++c < a; ) {
    var m = e[c], g = t[c];
    if (r)
      var C = i ? r(g, m, c, t, e, o) : r(m, g, c, e, t, o);
    if (C !== void 0) {
      if (C)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!rx(t, function(h, k) {
        if (!ox(d, k) && (m === h || s(m, h, n, r, o)))
          return d.push(k);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === g || s(m, g, n, r, o))) {
      p = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), p;
}
function ax(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r];
  }), n;
}
function lx(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var cx = 1, ux = 2, fx = "[object Boolean]", dx = "[object Date]", px = "[object Error]", hx = "[object Map]", gx = "[object Number]", mx = "[object RegExp]", vx = "[object Set]", bx = "[object String]", _x = "[object Symbol]", yx = "[object ArrayBuffer]", wx = "[object DataView]", O0 = Sr ? Sr.prototype : void 0, Pa = O0 ? O0.valueOf : void 0;
function kx(e, t, n, r, s, o, i) {
  switch (n) {
    case wx:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case yx:
      return !(e.byteLength != t.byteLength || !o(new I0(e), new I0(t)));
    case fx:
    case dx:
    case gx:
      return Wg(+e, +t);
    case px:
      return e.name == t.name && e.message == t.message;
    case mx:
    case bx:
      return e == t + "";
    case hx:
      var a = ax;
    case vx:
      var l = r & cx;
      if (a || (a = lx), e.size != t.size && !l)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= ux, i.set(e, t);
      var f = rm(a(e), a(t), r, s, o, i);
      return i.delete(e), f;
    case _x:
      if (Pa)
        return Pa.call(e) == Pa.call(t);
  }
  return !1;
}
var Cx = 1, xx = Object.prototype, Ex = xx.hasOwnProperty;
function Sx(e, t, n, r, s, o) {
  var i = n & Cx, a = S0(e), l = a.length, u = S0(t), f = u.length;
  if (l != f && !i)
    return !1;
  for (var c = l; c--; ) {
    var p = a[c];
    if (!(i ? p in t : Ex.call(t, p)))
      return !1;
  }
  var d = o.get(e), m = o.get(t);
  if (d && m)
    return d == t && m == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var C = i; ++c < l; ) {
    p = a[c];
    var h = e[p], k = t[p];
    if (r)
      var y = i ? r(k, h, p, t, e, o) : r(h, k, p, e, t, o);
    if (!(y === void 0 ? h === k || s(h, k, n, r, o) : y)) {
      g = !1;
      break;
    }
    C || (C = p == "constructor");
  }
  if (g && !C) {
    var _ = e.constructor, S = t.constructor;
    _ != S && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof S == "function" && S instanceof S) && (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var Ax = 1, R0 = "[object Arguments]", P0 = "[object Array]", Bs = "[object Object]", Tx = Object.prototype, D0 = Tx.hasOwnProperty;
function Mx(e, t, n, r, s, o) {
  var i = nr(e), a = nr(t), l = i ? P0 : wr(e), u = a ? P0 : wr(t);
  l = l == R0 ? Bs : l, u = u == R0 ? Bs : u;
  var f = l == Bs, c = u == Bs, p = l == u;
  if (p && yu(e)) {
    if (!yu(t))
      return !1;
    i = !0, f = !1;
  }
  if (p && !f)
    return o || (o = new Jn()), i || Qg(e) ? rm(e, t, n, r, s, o) : kx(e, t, l, n, r, s, o);
  if (!(n & Ax)) {
    var d = f && D0.call(e, "__wrapped__"), m = c && D0.call(t, "__wrapped__");
    if (d || m) {
      var g = d ? e.value() : e, C = m ? t.value() : t;
      return o || (o = new Jn()), s(g, C, n, r, o);
    }
  }
  return p ? (o || (o = new Jn()), Sx(e, t, n, r, s, o)) : !1;
}
function Ji(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !_o(e) && !_o(t) ? e !== e && t !== t : Mx(e, t, n, r, Ji, s);
}
var $x = 1, Lx = 2;
function Ix(e, t, n, r) {
  var s = n.length, o = s;
  if (e == null)
    return !o;
  for (e = Object(e); s--; ) {
    var i = n[s];
    if (i[2] ? i[1] !== e[i[0]] : !(i[0] in e))
      return !1;
  }
  for (; ++s < o; ) {
    i = n[s];
    var a = i[0], l = e[a], u = i[1];
    if (i[2]) {
      if (l === void 0 && !(a in e))
        return !1;
    } else {
      var f = new Jn(), c;
      if (!(c === void 0 ? Ji(u, l, $x | Lx, r, f) : c))
        return !1;
    }
  }
  return !0;
}
function om(e) {
  return e === e && !yo(e);
}
function Ox(e) {
  for (var t = em(e), n = t.length; n--; ) {
    var r = t[n], s = e[r];
    t[n] = [r, s, om(s)];
  }
  return t;
}
function sm(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Rx(e) {
  var t = Ox(e);
  return t.length == 1 && t[0][2] ? sm(t[0][0], t[0][1]) : function(n) {
    return n === e || Ix(n, e, t);
  };
}
function Px(e, t) {
  return e != null && t in Object(e);
}
function Dx(e, t, n) {
  t = tm(t, e);
  for (var r = -1, s = t.length, o = !1; ++r < s; ) {
    var i = Yi(t[r]);
    if (!(o = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return o || ++r != s ? o : (s = e == null ? 0 : e.length, !!s && _f(s) && Gg(i, s) && (nr(e) || Xg(e)));
}
function Nx(e, t) {
  return e != null && Dx(e, t, Px);
}
var Bx = 1, Fx = 2;
function qx(e, t) {
  return yf(e) && om(t) ? sm(Yi(e), t) : function(n) {
    var r = rn(n, e);
    return r === void 0 && r === t ? Nx(n, e) : Ji(t, r, Bx | Fx);
  };
}
function zx(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Hx(e) {
  return function(t) {
    return nm(t, e);
  };
}
function jx(e) {
  return yf(e) ? zx(Yi(e)) : Hx(e);
}
function Vx(e) {
  return typeof e == "function" ? e : e == null ? VC : typeof e == "object" ? nr(e) ? qx(e[0], e[1]) : Rx(e) : jx(e);
}
var Da = function() {
  return qn.Date.now();
}, Ux = "Expected a function", Kx = Math.max, Gx = Math.min;
function xu(e, t, n) {
  var r, s, o, i, a, l, u = 0, f = !1, c = !1, p = !0;
  if (typeof e != "function")
    throw new TypeError(Ux);
  t = b0(t) || 0, yo(n) && (f = !!n.leading, c = "maxWait" in n, o = c ? Kx(b0(n.maxWait) || 0, t) : o, p = "trailing" in n ? !!n.trailing : p);
  function d(x) {
    var T = r, $ = s;
    return r = s = void 0, u = x, i = e.apply($, T), i;
  }
  function m(x) {
    return u = x, a = setTimeout(h, t), f ? d(x) : i;
  }
  function g(x) {
    var T = x - l, $ = x - u, I = t - T;
    return c ? Gx(I, o - $) : I;
  }
  function C(x) {
    var T = x - l, $ = x - u;
    return l === void 0 || T >= t || T < 0 || c && $ >= o;
  }
  function h() {
    var x = Da();
    if (C(x))
      return k(x);
    a = setTimeout(h, g(x));
  }
  function k(x) {
    return a = void 0, p && r ? d(x) : (r = s = void 0, i);
  }
  function y() {
    a !== void 0 && clearTimeout(a), u = 0, r = l = s = a = void 0;
  }
  function _() {
    return a === void 0 ? i : k(Da());
  }
  function S() {
    var x = Da(), T = C(x);
    if (r = arguments, s = this, l = x, T) {
      if (a === void 0)
        return m(l);
      if (c)
        return clearTimeout(a), a = setTimeout(h, t), d(l);
    }
    return a === void 0 && (a = setTimeout(h, t)), i;
  }
  return S.cancel = y, S.flush = _, S;
}
function Wx(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var s = r - 1;
  return a6(e, Vx(t), s);
}
function Ci(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
function Eu(e, t) {
  return Ji(e, t);
}
function Wr(e) {
  return e == null;
}
function Zx(e) {
  return e === void 0;
}
const im = (e) => e === void 0, kf = (e) => typeof e == "boolean", mt = (e) => typeof e == "number", us = (e) => typeof Element > "u" ? !1 : e instanceof Element, Xx = (e) => He(e) ? !Number.isNaN(Number(e)) : !1, Yx = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
class Jx extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Qx(e, t) {
  throw new Jx(`[${e}] ${t}`);
}
function wo(e, t = "px") {
  if (!e)
    return "";
  if (mt(e) || Xx(e))
    return `${e}${t}`;
  if (He(e))
    return e;
}
function e8(e, t) {
  if (!Dt)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const s = t.offsetTop + n.reduce((l, u) => l + u.offsetTop, 0), o = s + t.offsetHeight, i = e.scrollTop, a = i + e.clientHeight;
  s < i ? e.scrollTop = s : o > a && (e.scrollTop = o - e.clientHeight);
}
/*! Element Plus Icons Vue v2.3.1 */
var t8 = /* @__PURE__ */ ne({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), am = t8, n8 = /* @__PURE__ */ ne({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), r8 = n8, o8 = /* @__PURE__ */ ne({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), s8 = o8, i8 = /* @__PURE__ */ ne({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      v("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), a8 = i8, l8 = /* @__PURE__ */ ne({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      v("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Cf = l8, c8 = /* @__PURE__ */ ne({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Su = c8, u8 = /* @__PURE__ */ ne({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
}), f8 = u8, d8 = /* @__PURE__ */ ne({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
}), p8 = d8, h8 = /* @__PURE__ */ ne({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      v("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), g8 = h8, m8 = /* @__PURE__ */ ne({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), lm = m8, v8 = /* @__PURE__ */ ne({
  name: "MoreFilled",
  __name: "more-filled",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
      })
    ]));
  }
}), N0 = v8, b8 = /* @__PURE__ */ ne({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (w(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), _8 = b8;
const cm = "__epPropKey", Ie = (e) => e, y8 = (e) => Pe(e) && !!e[cm], Qi = (e, t) => {
  if (!Pe(e) || y8(e))
    return e;
  const { values: n, required: r, default: s, type: o, validator: i } = e, l = {
    type: o,
    required: !!r,
    validator: n || i ? (u) => {
      let f = !1, c = [];
      if (n && (c = Array.from(n), Ue(e, "default") && c.push(s), f || (f = c.includes(u))), i && (f || (f = i(u))), !f && c.length > 0) {
        const p = [...new Set(c)].map((d) => JSON.stringify(d)).join(", ");
        Yw(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(u)}.`);
      }
      return f;
    } : void 0,
    [cm]: !0
  };
  return Ue(e, "default") && (l.default = s), l;
}, et = (e) => Ci(Object.entries(e).map(([t, n]) => [
  t,
  Qi(n, t)
])), En = Ie([
  String,
  Object,
  Function
]), um = {
  validating: lm,
  success: a8,
  error: Cf
}, An = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, w8 = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), xf = (e) => (e.install = Pt, e), Qn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, Kt = "update:modelValue", Ef = "change", ws = ["", "default", "small", "large"], k8 = {
  large: 40,
  default: 32,
  small: 24
}, C8 = (e) => k8[e || "default"], x8 = (e) => ["", ...ws].includes(e), fm = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), Sf = (e) => e, E8 = ["class", "style"], S8 = /^on[A-Z]/, A8 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = R(() => ((n == null ? void 0 : n.value) || []).concat(E8)), s = bt();
  return R(s ? () => {
    var o;
    return Ci(Object.entries((o = s.proxy) == null ? void 0 : o.$attrs).filter(([i]) => !r.value.includes(i) && !(t && S8.test(i))));
  } : () => ({}));
}, dm = ({ from: e, replacement: t, scope: n, version: r, ref: s, type: o = "API" }, i) => {
  Ee(() => b(i), (a) => {
  }, {
    immediate: !0
  });
};
var T8 = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const M8 = (e) => (t, n) => $8(t, n, b(e)), $8 = (e, t, n) => rn(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
  var o;
  return `${(o = t == null ? void 0 : t[s]) != null ? o : `{${s}}`}`;
}), L8 = (e) => {
  const t = R(() => b(e).name), n = vt(e) ? e : G(e);
  return {
    lang: t,
    locale: n,
    t: M8(e)
  };
}, I8 = Symbol("localeContextKey"), Tn = (e) => {
  const t = De(I8, G());
  return L8(R(() => t.value || T8));
}, Na = "el", O8 = "is-", Fr = (e, t, n, r, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), s && (o += `--${s}`), o;
}, R8 = Symbol("namespaceContextKey"), Af = (e) => {
  const t = bt() ? De(R8, G(Na)) : G(Na);
  return R(() => b(t) || Na);
}, We = (e, t) => {
  const n = Af();
  return {
    namespace: n,
    b: (g = "") => Fr(n.value, e, g, "", ""),
    e: (g) => g ? Fr(n.value, e, "", g, "") : "",
    m: (g) => g ? Fr(n.value, e, "", "", g) : "",
    be: (g, C) => g && C ? Fr(n.value, e, g, C, "") : "",
    em: (g, C) => g && C ? Fr(n.value, e, "", g, C) : "",
    bm: (g, C) => g && C ? Fr(n.value, e, g, "", C) : "",
    bem: (g, C, h) => g && C && h ? Fr(n.value, e, g, C, h) : "",
    is: (g, ...C) => {
      const h = C.length >= 1 ? C[0] : !0;
      return g && h ? `${O8}${g}` : "";
    },
    cssVar: (g) => {
      const C = {};
      for (const h in g)
        g[h] && (C[`--${n.value}-${h}`] = g[h]);
      return C;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const C = {};
      for (const h in g)
        g[h] && (C[`--${n.value}-${e}-${h}`] = g[h]);
      return C;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
}, P8 = Qi({
  type: Ie(Boolean),
  default: null
}), D8 = Qi({
  type: Ie(Function)
}), N8 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], s = {
    [e]: P8,
    [n]: D8
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: a,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: c
    }) => {
      const p = bt(), { emit: d } = p, m = p.props, g = R(() => Ce(m[n])), C = R(() => m[e] === null), h = (T) => {
        i.value !== !0 && (i.value = !0, a && (a.value = T), Ce(f) && f(T));
      }, k = (T) => {
        i.value !== !1 && (i.value = !1, a && (a.value = T), Ce(c) && c(T));
      }, y = (T) => {
        if (m.disabled === !0 || Ce(u) && !u())
          return;
        const $ = g.value && Dt;
        $ && d(t, !0), (C.value || !$) && h(T);
      }, _ = (T) => {
        if (m.disabled === !0 || !Dt)
          return;
        const $ = g.value && Dt;
        $ && d(t, !1), (C.value || !$) && k(T);
      }, S = (T) => {
        kf(T) && (m.disabled && T ? g.value && d(t, !1) : i.value !== T && (T ? h() : k()));
      }, x = () => {
        i.value ? _() : y();
      };
      return Ee(() => m[e], S), l && p.appContext.config.globalProperties.$route !== void 0 && Ee(() => ({
        ...p.proxy.$route
      }), () => {
        l.value && i.value && _();
      }), rt(() => {
        S(m[e]);
      }), {
        hide: _,
        show: y,
        toggle: x,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: s,
    useModelToggleEmits: r
  };
}, pm = (e) => {
  const t = bt();
  return R(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var Wt = "top", pn = "bottom", hn = "right", Zt = "left", Tf = "auto", ks = [Wt, pn, hn, Zt], ko = "start", fs = "end", B8 = "clippingParents", hm = "viewport", No = "popper", F8 = "reference", B0 = ks.reduce(function(e, t) {
  return e.concat([t + "-" + ko, t + "-" + fs]);
}, []), ea = [].concat(ks, [Tf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ko, t + "-" + fs]);
}, []), q8 = "beforeRead", z8 = "read", H8 = "afterRead", j8 = "beforeMain", V8 = "main", U8 = "afterMain", K8 = "beforeWrite", G8 = "write", W8 = "afterWrite", Z8 = [q8, z8, H8, j8, V8, U8, K8, G8, W8];
function Fn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Mn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Co(e) {
  var t = Mn(e).Element;
  return e instanceof t || e instanceof Element;
}
function un(e) {
  var t = Mn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Mf(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Mn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function X8(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !un(o) || !Fn(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(i) {
      var a = s[i];
      a === !1 ? o.removeAttribute(i) : o.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function Y8(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = i.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !un(s) || !Fn(s) || (Object.assign(s.style, a), Object.keys(o).forEach(function(l) {
        s.removeAttribute(l);
      }));
    });
  };
}
var gm = { name: "applyStyles", enabled: !0, phase: "write", fn: X8, effect: Y8, requires: ["computeStyles"] };
function Bn(e) {
  return e.split("-")[0];
}
var Zr = Math.max, xi = Math.min, xo = Math.round;
function Eo(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, s = 1;
  if (un(e) && t) {
    var o = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = xo(n.width) / i || 1), o > 0 && (s = xo(n.height) / o || 1);
  }
  return { width: n.width / r, height: n.height / s, top: n.top / s, right: n.right / r, bottom: n.bottom / s, left: n.left / r, x: n.left / r, y: n.top / s };
}
function $f(e) {
  var t = Eo(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function mm(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Mf(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function rr(e) {
  return Mn(e).getComputedStyle(e);
}
function J8(e) {
  return ["table", "td", "th"].indexOf(Fn(e)) >= 0;
}
function Ir(e) {
  return ((Co(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ta(e) {
  return Fn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Mf(e) ? e.host : null) || Ir(e);
}
function F0(e) {
  return !un(e) || rr(e).position === "fixed" ? null : e.offsetParent;
}
function Q8(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && un(e)) {
    var r = rr(e);
    if (r.position === "fixed") return null;
  }
  var s = ta(e);
  for (Mf(s) && (s = s.host); un(s) && ["html", "body"].indexOf(Fn(s)) < 0; ) {
    var o = rr(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function Cs(e) {
  for (var t = Mn(e), n = F0(e); n && J8(n) && rr(n).position === "static"; ) n = F0(n);
  return n && (Fn(n) === "html" || Fn(n) === "body" && rr(n).position === "static") ? t : n || Q8(e) || t;
}
function Lf(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xo(e, t, n) {
  return Zr(e, xi(t, n));
}
function e7(e, t, n) {
  var r = Xo(e, t, n);
  return r > n ? n : r;
}
function vm() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function bm(e) {
  return Object.assign({}, vm(), e);
}
function _m(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var t7 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, bm(typeof e != "number" ? e : _m(e, ks));
};
function n7(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, i = n.modifiersData.popperOffsets, a = Bn(n.placement), l = Lf(a), u = [Zt, hn].indexOf(a) >= 0, f = u ? "height" : "width";
  if (!(!o || !i)) {
    var c = t7(s.padding, n), p = $f(o), d = l === "y" ? Wt : Zt, m = l === "y" ? pn : hn, g = n.rects.reference[f] + n.rects.reference[l] - i[l] - n.rects.popper[f], C = i[l] - n.rects.reference[l], h = Cs(o), k = h ? l === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, y = g / 2 - C / 2, _ = c[d], S = k - p[f] - c[m], x = k / 2 - p[f] / 2 + y, T = Xo(_, x, S), $ = l;
    n.modifiersData[r] = (t = {}, t[$] = T, t.centerOffset = T - x, t);
  }
}
function r7(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !mm(t.elements.popper, s) || (t.elements.arrow = s));
}
var o7 = { name: "arrow", enabled: !0, phase: "main", fn: n7, effect: r7, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function So(e) {
  return e.split("-")[1];
}
var s7 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function i7(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return { x: xo(t * s) / s || 0, y: xo(n * s) / s || 0 };
}
function q0(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, i = e.offsets, a = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, c = e.isFixed, p = i.x, d = p === void 0 ? 0 : p, m = i.y, g = m === void 0 ? 0 : m, C = typeof f == "function" ? f({ x: d, y: g }) : { x: d, y: g };
  d = C.x, g = C.y;
  var h = i.hasOwnProperty("x"), k = i.hasOwnProperty("y"), y = Zt, _ = Wt, S = window;
  if (u) {
    var x = Cs(n), T = "clientHeight", $ = "clientWidth";
    if (x === Mn(n) && (x = Ir(n), rr(x).position !== "static" && a === "absolute" && (T = "scrollHeight", $ = "scrollWidth")), x = x, s === Wt || (s === Zt || s === hn) && o === fs) {
      _ = pn;
      var I = c && x === S && S.visualViewport ? S.visualViewport.height : x[T];
      g -= I - r.height, g *= l ? 1 : -1;
    }
    if (s === Zt || (s === Wt || s === pn) && o === fs) {
      y = hn;
      var P = c && x === S && S.visualViewport ? S.visualViewport.width : x[$];
      d -= P - r.width, d *= l ? 1 : -1;
    }
  }
  var N = Object.assign({ position: a }, u && s7), D = f === !0 ? i7({ x: d, y: g }) : { x: d, y: g };
  if (d = D.x, g = D.y, l) {
    var oe;
    return Object.assign({}, N, (oe = {}, oe[_] = k ? "0" : "", oe[y] = h ? "0" : "", oe.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + g + "px)" : "translate3d(" + d + "px, " + g + "px, 0)", oe));
  }
  return Object.assign({}, N, (t = {}, t[_] = k ? g + "px" : "", t[y] = h ? d + "px" : "", t.transform = "", t));
}
function a7(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, i = o === void 0 ? !0 : o, a = n.roundOffsets, l = a === void 0 ? !0 : a, u = { placement: Bn(t.placement), variation: So(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: s, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, q0(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, q0(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var ym = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: a7, data: {} }, Fs = { passive: !0 };
function l7(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, i = r.resize, a = i === void 0 ? !0 : i, l = Mn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Fs);
  }), a && l.addEventListener("resize", n.update, Fs), function() {
    o && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Fs);
    }), a && l.removeEventListener("resize", n.update, Fs);
  };
}
var wm = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: l7, data: {} }, c7 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function oi(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return c7[t];
  });
}
var u7 = { start: "end", end: "start" };
function z0(e) {
  return e.replace(/start|end/g, function(t) {
    return u7[t];
  });
}
function If(e) {
  var t = Mn(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Of(e) {
  return Eo(Ir(e)).left + If(e).scrollLeft;
}
function f7(e) {
  var t = Mn(e), n = Ir(e), r = t.visualViewport, s = n.clientWidth, o = n.clientHeight, i = 0, a = 0;
  return r && (s = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, a = r.offsetTop)), { width: s, height: o, x: i + Of(e), y: a };
}
function d7(e) {
  var t, n = Ir(e), r = If(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = Zr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), i = Zr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -r.scrollLeft + Of(e), l = -r.scrollTop;
  return rr(s || n).direction === "rtl" && (a += Zr(n.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: i, x: a, y: l };
}
function Rf(e) {
  var t = rr(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function km(e) {
  return ["html", "body", "#document"].indexOf(Fn(e)) >= 0 ? e.ownerDocument.body : un(e) && Rf(e) ? e : km(ta(e));
}
function Yo(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = km(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = Mn(r), i = s ? [o].concat(o.visualViewport || [], Rf(r) ? r : []) : r, a = t.concat(i);
  return s ? a : a.concat(Yo(ta(i)));
}
function Au(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function p7(e) {
  var t = Eo(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function H0(e, t) {
  return t === hm ? Au(f7(e)) : Co(t) ? p7(t) : Au(d7(Ir(e)));
}
function h7(e) {
  var t = Yo(ta(e)), n = ["absolute", "fixed"].indexOf(rr(e).position) >= 0, r = n && un(e) ? Cs(e) : e;
  return Co(r) ? t.filter(function(s) {
    return Co(s) && mm(s, r) && Fn(s) !== "body";
  }) : [];
}
function g7(e, t, n) {
  var r = t === "clippingParents" ? h7(e) : [].concat(t), s = [].concat(r, [n]), o = s[0], i = s.reduce(function(a, l) {
    var u = H0(e, l);
    return a.top = Zr(u.top, a.top), a.right = xi(u.right, a.right), a.bottom = xi(u.bottom, a.bottom), a.left = Zr(u.left, a.left), a;
  }, H0(e, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Cm(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? Bn(r) : null, o = r ? So(r) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (s) {
    case Wt:
      l = { x: i, y: t.y - n.height };
      break;
    case pn:
      l = { x: i, y: t.y + t.height };
      break;
    case hn:
      l = { x: t.x + t.width, y: a };
      break;
    case Zt:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = s ? Lf(s) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (o) {
      case ko:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case fs:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function ds(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.boundary, i = o === void 0 ? B8 : o, a = n.rootBoundary, l = a === void 0 ? hm : a, u = n.elementContext, f = u === void 0 ? No : u, c = n.altBoundary, p = c === void 0 ? !1 : c, d = n.padding, m = d === void 0 ? 0 : d, g = bm(typeof m != "number" ? m : _m(m, ks)), C = f === No ? F8 : No, h = e.rects.popper, k = e.elements[p ? C : f], y = g7(Co(k) ? k : k.contextElement || Ir(e.elements.popper), i, l), _ = Eo(e.elements.reference), S = Cm({ reference: _, element: h, placement: s }), x = Au(Object.assign({}, h, S)), T = f === No ? x : _, $ = { top: y.top - T.top + g.top, bottom: T.bottom - y.bottom + g.bottom, left: y.left - T.left + g.left, right: T.right - y.right + g.right }, I = e.modifiersData.offset;
  if (f === No && I) {
    var P = I[s];
    Object.keys($).forEach(function(N) {
      var D = [hn, pn].indexOf(N) >= 0 ? 1 : -1, oe = [Wt, pn].indexOf(N) >= 0 ? "y" : "x";
      $[N] += P[oe] * D;
    });
  }
  return $;
}
function m7(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, i = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? ea : l, f = So(r), c = f ? a ? B0 : B0.filter(function(m) {
    return So(m) === f;
  }) : ks, p = c.filter(function(m) {
    return u.indexOf(m) >= 0;
  });
  p.length === 0 && (p = c);
  var d = p.reduce(function(m, g) {
    return m[g] = ds(e, { placement: g, boundary: s, rootBoundary: o, padding: i })[Bn(g)], m;
  }, {});
  return Object.keys(d).sort(function(m, g) {
    return d[m] - d[g];
  });
}
function v7(e) {
  if (Bn(e) === Tf) return [];
  var t = oi(e);
  return [z0(e), t, z0(t)];
}
function b7(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, i = n.altAxis, a = i === void 0 ? !0 : i, l = n.fallbackPlacements, u = n.padding, f = n.boundary, c = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, m = d === void 0 ? !0 : d, g = n.allowedAutoPlacements, C = t.options.placement, h = Bn(C), k = h === C, y = l || (k || !m ? [oi(C)] : v7(C)), _ = [C].concat(y).reduce(function(Je, nt) {
      return Je.concat(Bn(nt) === Tf ? m7(t, { placement: nt, boundary: f, rootBoundary: c, padding: u, flipVariations: m, allowedAutoPlacements: g }) : nt);
    }, []), S = t.rects.reference, x = t.rects.popper, T = /* @__PURE__ */ new Map(), $ = !0, I = _[0], P = 0; P < _.length; P++) {
      var N = _[P], D = Bn(N), oe = So(N) === ko, F = [Wt, pn].indexOf(D) >= 0, U = F ? "width" : "height", q = ds(t, { placement: N, boundary: f, rootBoundary: c, altBoundary: p, padding: u }), z = F ? oe ? hn : Zt : oe ? pn : Wt;
      S[U] > x[U] && (z = oi(z));
      var H = oi(z), Q = [];
      if (o && Q.push(q[D] <= 0), a && Q.push(q[z] <= 0, q[H] <= 0), Q.every(function(Je) {
        return Je;
      })) {
        I = N, $ = !1;
        break;
      }
      T.set(N, Q);
    }
    if ($) for (var te = m ? 3 : 1, Ae = function(Je) {
      var nt = _.find(function(ft) {
        var ht = T.get(ft);
        if (ht) return ht.slice(0, Je).every(function(ct) {
          return ct;
        });
      });
      if (nt) return I = nt, "break";
    }, ve = te; ve > 0; ve--) {
      var Ne = Ae(ve);
      if (Ne === "break") break;
    }
    t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0);
  }
}
var _7 = { name: "flip", enabled: !0, phase: "main", fn: b7, requiresIfExists: ["offset"], data: { _skip: !1 } };
function j0(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function V0(e) {
  return [Wt, hn, pn, Zt].some(function(t) {
    return e[t] >= 0;
  });
}
function y7(e) {
  var t = e.state, n = e.name, r = t.rects.reference, s = t.rects.popper, o = t.modifiersData.preventOverflow, i = ds(t, { elementContext: "reference" }), a = ds(t, { altBoundary: !0 }), l = j0(i, r), u = j0(a, s, o), f = V0(l), c = V0(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: c }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": c });
}
var w7 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: y7 };
function k7(e, t, n) {
  var r = Bn(e), s = [Zt, Wt].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = o[0], a = o[1];
  return i = i || 0, a = (a || 0) * s, [Zt, hn].indexOf(r) >= 0 ? { x: a, y: i } : { x: i, y: a };
}
function C7(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, i = ea.reduce(function(f, c) {
    return f[c] = k7(c, t.rects, o), f;
  }, {}), a = i[t.placement], l = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
var x7 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: C7 };
function E7(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Cm({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var xm = { name: "popperOffsets", enabled: !0, phase: "read", fn: E7, data: {} };
function S7(e) {
  return e === "x" ? "y" : "x";
}
function A7(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, i = n.altAxis, a = i === void 0 ? !1 : i, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, c = n.padding, p = n.tether, d = p === void 0 ? !0 : p, m = n.tetherOffset, g = m === void 0 ? 0 : m, C = ds(t, { boundary: l, rootBoundary: u, padding: c, altBoundary: f }), h = Bn(t.placement), k = So(t.placement), y = !k, _ = Lf(h), S = S7(_), x = t.modifiersData.popperOffsets, T = t.rects.reference, $ = t.rects.popper, I = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, P = typeof I == "number" ? { mainAxis: I, altAxis: I } : Object.assign({ mainAxis: 0, altAxis: 0 }, I), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = { x: 0, y: 0 };
  if (x) {
    if (o) {
      var oe, F = _ === "y" ? Wt : Zt, U = _ === "y" ? pn : hn, q = _ === "y" ? "height" : "width", z = x[_], H = z + C[F], Q = z - C[U], te = d ? -$[q] / 2 : 0, Ae = k === ko ? T[q] : $[q], ve = k === ko ? -$[q] : -T[q], Ne = t.elements.arrow, Je = d && Ne ? $f(Ne) : { width: 0, height: 0 }, nt = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vm(), ft = nt[F], ht = nt[U], ct = Xo(0, T[q], Je[q]), Yt = y ? T[q] / 2 - te - ct - ft - P.mainAxis : Ae - ct - ft - P.mainAxis, me = y ? -T[q] / 2 + te + ct + ht + P.mainAxis : ve + ct + ht + P.mainAxis, Re = t.elements.arrow && Cs(t.elements.arrow), M = Re ? _ === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, L = (oe = N == null ? void 0 : N[_]) != null ? oe : 0, j = z + Yt - L - M, J = z + me - L, W = Xo(d ? xi(H, j) : H, z, d ? Zr(Q, J) : Q);
      x[_] = W, D[_] = W - z;
    }
    if (a) {
      var X, se = _ === "x" ? Wt : Zt, re = _ === "x" ? pn : hn, ee = x[S], Y = S === "y" ? "height" : "width", be = ee + C[se], ce = ee - C[re], pe = [Wt, Zt].indexOf(h) !== -1, V = (X = N == null ? void 0 : N[S]) != null ? X : 0, ie = pe ? be : ee - T[Y] - $[Y] - V + P.altAxis, xe = pe ? ee + T[Y] + $[Y] - V - P.altAxis : ce, $e = d && pe ? e7(ie, ee, xe) : Xo(d ? ie : be, ee, d ? xe : ce);
      x[S] = $e, D[S] = $e - ee;
    }
    t.modifiersData[r] = D;
  }
}
var T7 = { name: "preventOverflow", enabled: !0, phase: "main", fn: A7, requiresIfExists: ["offset"] };
function M7(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function $7(e) {
  return e === Mn(e) || !un(e) ? If(e) : M7(e);
}
function L7(e) {
  var t = e.getBoundingClientRect(), n = xo(t.width) / e.offsetWidth || 1, r = xo(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function I7(e, t, n) {
  n === void 0 && (n = !1);
  var r = un(t), s = un(t) && L7(t), o = Ir(t), i = Eo(e, s), a = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((Fn(t) !== "body" || Rf(o)) && (a = $7(t)), un(t) ? (l = Eo(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Of(o))), { x: i.left + a.scrollLeft - l.x, y: i.top + a.scrollTop - l.y, width: i.width, height: i.height };
}
function O7(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && s(l);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function R7(e) {
  var t = O7(e);
  return Z8.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function P7(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function D7(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, { options: Object.assign({}, s.options, r.options), data: Object.assign({}, s.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var U0 = { placement: "bottom", modifiers: [], strategy: "absolute" };
function K0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Pf(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? U0 : s;
  return function(i, a, l) {
    l === void 0 && (l = o);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, U0, o), modifiersData: {}, elements: { reference: i, popper: a }, attributes: {}, styles: {} }, f = [], c = !1, p = { state: u, setOptions: function(g) {
      var C = typeof g == "function" ? g(u.options) : g;
      m(), u.options = Object.assign({}, o, u.options, C), u.scrollParents = { reference: Co(i) ? Yo(i) : i.contextElement ? Yo(i.contextElement) : [], popper: Yo(a) };
      var h = R7(D7([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = h.filter(function(k) {
        return k.enabled;
      }), d(), p.update();
    }, forceUpdate: function() {
      if (!c) {
        var g = u.elements, C = g.reference, h = g.popper;
        if (K0(C, h)) {
          u.rects = { reference: I7(C, Cs(h), u.options.strategy === "fixed"), popper: $f(h) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
            return u.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var k = 0; k < u.orderedModifiers.length; k++) {
            if (u.reset === !0) {
              u.reset = !1, k = -1;
              continue;
            }
            var y = u.orderedModifiers[k], _ = y.fn, S = y.options, x = S === void 0 ? {} : S, T = y.name;
            typeof _ == "function" && (u = _({ state: u, options: x, name: T, instance: p }) || u);
          }
        }
      }
    }, update: P7(function() {
      return new Promise(function(g) {
        p.forceUpdate(), g(u);
      });
    }), destroy: function() {
      m(), c = !0;
    } };
    if (!K0(i, a)) return p;
    p.setOptions(l).then(function(g) {
      !c && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function d() {
      u.orderedModifiers.forEach(function(g) {
        var C = g.name, h = g.options, k = h === void 0 ? {} : h, y = g.effect;
        if (typeof y == "function") {
          var _ = y({ state: u, name: C, instance: p, options: k }), S = function() {
          };
          f.push(_ || S);
        }
      });
    }
    function m() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return p;
  };
}
Pf();
var N7 = [wm, xm, ym, gm];
Pf({ defaultModifiers: N7 });
var B7 = [wm, xm, ym, gm, x7, _7, T7, o7, w7], F7 = Pf({ defaultModifiers: B7 });
const q7 = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const u = z7(l);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, s = R(() => {
    const { onFirstUpdate: l, placement: u, strategy: f, modifiers: c } = b(n);
    return {
      onFirstUpdate: l,
      placement: u || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...c || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), o = Yn(), i = G({
    styles: {
      popper: {
        position: b(s).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), a = () => {
    o.value && (o.value.destroy(), o.value = void 0);
  };
  return Ee(s, (l) => {
    const u = b(o);
    u && u.setOptions(l);
  }, {
    deep: !0
  }), Ee([e, t], ([l, u]) => {
    a(), !(!l || !u) && (o.value = F7(l, u, b(s)));
  }), Xt(() => {
    a();
  }), {
    state: R(() => {
      var l;
      return { ...((l = b(o)) == null ? void 0 : l.state) || {} };
    }),
    styles: R(() => b(i).styles),
    attributes: R(() => b(i).attributes),
    update: () => {
      var l;
      return (l = b(o)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = b(o)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: R(() => b(o))
  };
};
function z7(e) {
  const t = Object.keys(e.elements), n = Ci(t.map((s) => [s, e.styles[s] || {}])), r = Ci(t.map((s) => [s, e.attributes[s]]));
  return {
    styles: n,
    attributes: r
  };
}
function G0() {
  let e;
  const t = (r, s) => {
    n(), e = window.setTimeout(r, s);
  }, n = () => window.clearTimeout(e);
  return mf(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const W0 = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, H7 = Symbol("elIdInjection"), Em = () => bt() ? De(H7, W0) : W0, na = (e) => {
  const t = Em(), n = Af();
  return R(() => b(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let lo = [];
const Z0 = (e) => {
  const t = e;
  t.key === Qn.esc && lo.forEach((n) => n(t));
}, j7 = (e) => {
  rt(() => {
    lo.length === 0 && document.addEventListener("keydown", Z0), Dt && lo.push(e);
  }), Xt(() => {
    lo = lo.filter((t) => t !== e), lo.length === 0 && Dt && document.removeEventListener("keydown", Z0);
  });
};
let X0;
const Sm = () => {
  const e = Af(), t = Em(), n = R(() => `${e.value}-popper-container-${t.prefix}`), r = R(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, V7 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, U7 = () => {
  const { id: e, selector: t } = Sm();
  return J1(() => {
    Dt && !X0 && !document.body.querySelector(t.value) && (X0 = V7(e.value));
  }), {
    id: e,
    selector: t
  };
}, K7 = et({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), G7 = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: s
}) => {
  const { registerTimeout: o } = G0(), {
    registerTimeout: i,
    cancelTimeout: a
  } = G0();
  return {
    onOpen: (f) => {
      o(() => {
        r(f);
        const c = b(n);
        mt(c) && c > 0 && i(() => {
          s(f);
        }, c);
      }, b(e));
    },
    onClose: (f) => {
      a(), o(() => {
        s(f);
      }, b(t));
    }
  };
}, Am = Symbol("elForwardRef"), W7 = (e) => {
  Ut(Am, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, Z7 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Y0 = G(0), X7 = 2e3, Y7 = Symbol("zIndexContextKey"), J7 = (e) => {
  const t = bt() ? De(Y7, void 0) : void 0, n = R(() => {
    const o = b(t);
    return mt(o) ? o : X7;
  }), r = R(() => n.value + Y0.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (Y0.value++, r.value)
  };
};
function Q7(e) {
  const t = G();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: s, selectionEnd: o, value: i } = e.value;
    if (s == null || o == null)
      return;
    const a = i.slice(0, Math.max(0, s)), l = i.slice(Math.max(0, o));
    t.value = {
      selectionStart: s,
      selectionEnd: o,
      value: i,
      beforeTxt: a,
      afterTxt: l
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: s } = e.value, { beforeTxt: o, afterTxt: i, selectionStart: a } = t.value;
    if (o == null || i == null || a == null)
      return;
    let l = s.length;
    if (s.endsWith(i))
      l = s.length - i.length;
    else if (s.startsWith(o))
      l = o.length;
    else {
      const u = o[a - 1], f = s.indexOf(u, a - 1);
      f !== -1 && (l = f + 1);
    }
    e.value.setSelectionRange(l, l);
  }
  return [n, r];
}
const Df = Qi({
  type: String,
  values: ws,
  required: !1
}), e9 = Symbol("size"), t9 = () => {
  const e = De(e9, {});
  return R(() => b(e.size) || "");
};
function Tm(e, { afterFocus: t, beforeBlur: n, afterBlur: r } = {}) {
  const s = bt(), { emit: o } = s, i = Yn(), a = G(!1), l = (c) => {
    a.value || (a.value = !0, o("focus", c), t == null || t());
  }, u = (c) => {
    var p;
    Ce(n) && n(c) || c.relatedTarget && ((p = i.value) != null && p.contains(c.relatedTarget)) || (a.value = !1, o("blur", c), r == null || r());
  }, f = () => {
    var c;
    (c = e.value) == null || c.focus();
  };
  return Ee(i, (c) => {
    c && c.setAttribute("tabindex", "-1");
  }), Gr(i, "click", f), {
    wrapperRef: i,
    isFocused: a,
    handleFocus: l,
    handleBlur: u
  };
}
const n9 = Symbol(), J0 = G();
function r9(e, t = void 0) {
  const n = bt() ? De(n9, J0) : J0;
  return R(() => {
    var r, s;
    return (s = (r = n.value) == null ? void 0 : r[e]) != null ? s : t;
  });
}
var Ke = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
const o9 = et({
  size: {
    type: Ie([Number, String])
  },
  color: {
    type: String
  }
}), s9 = /* @__PURE__ */ ne({
  name: "ElIcon",
  inheritAttrs: !1
}), i9 = /* @__PURE__ */ ne({
  ...s9,
  props: o9,
  setup(e) {
    const t = e, n = We("icon"), r = R(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: im(s) ? void 0 : wo(s),
        "--color": o
      };
    });
    return (s, o) => (w(), A("i", pt({
      class: b(n).b(),
      style: b(r)
    }, s.$attrs), [
      _e(s.$slots, "default")
    ], 16));
  }
});
var a9 = /* @__PURE__ */ Ke(i9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Gt = An(a9), Nf = Symbol("formContextKey"), Ei = Symbol("formItemContextKey"), xs = (e, t = {}) => {
  const n = G(void 0), r = t.prop ? n : pm("size"), s = t.global ? n : t9(), o = t.form ? { size: void 0 } : De(Nf, void 0), i = t.formItem ? { size: void 0 } : De(Ei, void 0);
  return R(() => r.value || b(e) || (i == null ? void 0 : i.size) || (o == null ? void 0 : o.size) || s.value || "");
}, ra = (e) => {
  const t = pm("disabled"), n = De(Nf, void 0);
  return R(() => t.value || b(e) || (n == null ? void 0 : n.disabled) || !1);
}, oa = () => {
  const e = De(Nf, void 0), t = De(Ei, void 0);
  return {
    form: e,
    formItem: t
  };
}, Mm = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = G(!1)), r || (r = G(!1));
  const s = G();
  let o;
  const i = R(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return rt(() => {
    o = Ee([yn(e, "id"), n], ([a, l]) => {
      const u = a ?? (l ? void 0 : na().value);
      u !== s.value && (t != null && t.removeInputId && (s.value && t.removeInputId(s.value), !(r != null && r.value) && !l && u && t.addInputId(u)), s.value = u);
    }, { immediate: !0 });
  }), Hi(() => {
    o && o(), t != null && t.removeInputId && s.value && t.removeInputId(s.value);
  }), {
    isLabeledByFormItem: i,
    inputId: s
  };
};
let vn;
const l9 = `
  height:0 !important;
  visibility:hidden !important;
  ${xC() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, c9 = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function u9(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), s = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: c9.map((i) => `${i}:${t.getPropertyValue(i)}`).join(";"), paddingSize: r, borderSize: s, boxSizing: n };
}
function Q0(e, t = 1, n) {
  var r;
  vn || (vn = document.createElement("textarea"), document.body.appendChild(vn));
  const { paddingSize: s, borderSize: o, boxSizing: i, contextStyle: a } = u9(e);
  vn.setAttribute("style", `${a};${l9}`), vn.value = e.value || e.placeholder || "";
  let l = vn.scrollHeight;
  const u = {};
  i === "border-box" ? l = l + o : i === "content-box" && (l = l - s), vn.value = "";
  const f = vn.scrollHeight - s;
  if (mt(t)) {
    let c = f * t;
    i === "border-box" && (c = c + s + o), l = Math.max(c, l), u.minHeight = `${c}px`;
  }
  if (mt(n)) {
    let c = f * n;
    i === "border-box" && (c = c + s + o), l = Math.min(c, l);
  }
  return u.height = `${l}px`, (r = vn.parentNode) == null || r.removeChild(vn), vn = void 0, u;
}
const f9 = et({
  id: {
    type: String,
    default: void 0
  },
  size: Df,
  disabled: Boolean,
  modelValue: {
    type: Ie([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: Ie([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: En
  },
  prefixIcon: {
    type: En
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: Ie([Object, Array, String]),
    default: () => Sf({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), d9 = {
  [Kt]: (e) => He(e),
  input: (e) => He(e),
  change: (e) => He(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, p9 = ["role"], h9 = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], g9 = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], m9 = /* @__PURE__ */ ne({
  name: "ElInput",
  inheritAttrs: !1
}), v9 = /* @__PURE__ */ ne({
  ...m9,
  props: f9,
  emits: d9,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = ji(), o = rg(), i = R(() => {
      const V = {};
      return r.containerRole === "combobox" && (V["aria-haspopup"] = s["aria-haspopup"], V["aria-owns"] = s["aria-owns"], V["aria-expanded"] = s["aria-expanded"]), V;
    }), a = R(() => [
      r.type === "textarea" ? C.b() : g.b(),
      g.m(d.value),
      g.is("disabled", m.value),
      g.is("exceed", Je.value),
      {
        [g.b("group")]: o.prepend || o.append,
        [g.bm("group", "append")]: o.append,
        [g.bm("group", "prepend")]: o.prepend,
        [g.m("prefix")]: o.prefix || r.prefixIcon,
        [g.m("suffix")]: o.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: te.value && Ae.value
      },
      s.class
    ]), l = R(() => [
      g.e("wrapper"),
      g.is("focus", P.value)
    ]), u = A8({
      excludeKeys: R(() => Object.keys(i.value))
    }), { form: f, formItem: c } = oa(), { inputId: p } = Mm(r, {
      formItemContext: c
    }), d = xs(), m = ra(), g = We("input"), C = We("textarea"), h = Yn(), k = Yn(), y = G(!1), _ = G(!1), S = G(!1), x = G(), T = Yn(r.inputStyle), $ = R(() => h.value || k.value), { wrapperRef: I, isFocused: P, handleFocus: N, handleBlur: D } = Tm($, {
      afterBlur() {
        var V;
        r.validateEvent && ((V = c == null ? void 0 : c.validate) == null || V.call(c, "blur").catch((ie) => void 0));
      }
    }), oe = R(() => {
      var V;
      return (V = f == null ? void 0 : f.statusIcon) != null ? V : !1;
    }), F = R(() => (c == null ? void 0 : c.validateState) || ""), U = R(() => F.value && um[F.value]), q = R(() => S.value ? _8 : g8), z = R(() => [
      s.style,
      r.inputStyle
    ]), H = R(() => [
      r.inputStyle,
      T.value,
      { resize: r.resize }
    ]), Q = R(() => Wr(r.modelValue) ? "" : String(r.modelValue)), te = R(() => r.clearable && !m.value && !r.readonly && !!Q.value && (P.value || y.value)), Ae = R(() => r.showPassword && !m.value && !r.readonly && !!Q.value && (!!Q.value || P.value)), ve = R(() => r.showWordLimit && !!u.value.maxlength && (r.type === "text" || r.type === "textarea") && !m.value && !r.readonly && !r.showPassword), Ne = R(() => Q.value.length), Je = R(() => !!ve.value && Ne.value > Number(u.value.maxlength)), nt = R(() => !!o.suffix || !!r.suffixIcon || te.value || r.showPassword || ve.value || !!F.value && oe.value), [ft, ht] = Q7(h);
    Gi(k, (V) => {
      if (me(), !ve.value || r.resize !== "both")
        return;
      const ie = V[0], { width: xe } = ie.contentRect;
      x.value = {
        right: `calc(100% - ${xe + 15 + 6}px)`
      };
    });
    const ct = () => {
      const { type: V, autosize: ie } = r;
      if (!(!Dt || V !== "textarea" || !k.value))
        if (ie) {
          const xe = Pe(ie) ? ie.minRows : void 0, $e = Pe(ie) ? ie.maxRows : void 0, it = Q0(k.value, xe, $e);
          T.value = {
            overflowY: "hidden",
            ...it
          }, ze(() => {
            k.value.offsetHeight, T.value = it;
          });
        } else
          T.value = {
            minHeight: Q0(k.value).minHeight
          };
    }, me = ((V) => {
      let ie = !1;
      return () => {
        var xe;
        if (ie || !r.autosize)
          return;
        ((xe = k.value) == null ? void 0 : xe.offsetParent) === null || (V(), ie = !0);
      };
    })(ct), Re = () => {
      const V = $.value, ie = r.formatter ? r.formatter(Q.value) : Q.value;
      !V || V.value === ie || (V.value = ie);
    }, M = async (V) => {
      ft();
      let { value: ie } = V.target;
      if (r.formatter && (ie = r.parser ? r.parser(ie) : ie), !_.value) {
        if (ie === Q.value) {
          Re();
          return;
        }
        n(Kt, ie), n("input", ie), await ze(), Re(), ht();
      }
    }, L = (V) => {
      n("change", V.target.value);
    }, j = (V) => {
      n("compositionstart", V), _.value = !0;
    }, J = (V) => {
      var ie;
      n("compositionupdate", V);
      const xe = (ie = V.target) == null ? void 0 : ie.value, $e = xe[xe.length - 1] || "";
      _.value = !fm($e);
    }, W = (V) => {
      n("compositionend", V), _.value && (_.value = !1, M(V));
    }, X = () => {
      S.value = !S.value, se();
    }, se = async () => {
      var V;
      await ze(), (V = $.value) == null || V.focus();
    }, re = () => {
      var V;
      return (V = $.value) == null ? void 0 : V.blur();
    }, ee = (V) => {
      y.value = !1, n("mouseleave", V);
    }, Y = (V) => {
      y.value = !0, n("mouseenter", V);
    }, be = (V) => {
      n("keydown", V);
    }, ce = () => {
      var V;
      (V = $.value) == null || V.select();
    }, pe = () => {
      n(Kt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return Ee(() => r.modelValue, () => {
      var V;
      ze(() => ct()), r.validateEvent && ((V = c == null ? void 0 : c.validate) == null || V.call(c, "change").catch((ie) => void 0));
    }), Ee(Q, () => Re()), Ee(() => r.type, async () => {
      await ze(), Re(), ct();
    }), rt(() => {
      !r.formatter && r.parser, Re(), ze(ct);
    }), t({
      input: h,
      textarea: k,
      ref: $,
      textareaStyle: H,
      autosize: yn(r, "autosize"),
      focus: se,
      blur: re,
      select: ce,
      clear: pe,
      resizeTextarea: ct
    }), (V, ie) => Vt((w(), A("div", pt(b(i), {
      class: b(a),
      style: b(z),
      role: V.containerRole,
      onMouseenter: Y,
      onMouseleave: ee
    }), [
      ge(" input "),
      V.type !== "textarea" ? (w(), A(Ze, { key: 0 }, [
        ge(" prepend slot "),
        V.$slots.prepend ? (w(), A("div", {
          key: 0,
          class: Z(b(g).be("group", "prepend"))
        }, [
          _e(V.$slots, "prepend")
        ], 2)) : ge("v-if", !0),
        v("div", {
          ref_key: "wrapperRef",
          ref: I,
          class: Z(b(l))
        }, [
          ge(" prefix slot "),
          V.$slots.prefix || V.prefixIcon ? (w(), A("span", {
            key: 0,
            class: Z(b(g).e("prefix"))
          }, [
            v("span", {
              class: Z(b(g).e("prefix-inner"))
            }, [
              _e(V.$slots, "prefix"),
              V.prefixIcon ? (w(), le(b(Gt), {
                key: 0,
                class: Z(b(g).e("icon"))
              }, {
                default: fe(() => [
                  (w(), le(Rt(V.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ge("v-if", !0)
            ], 2)
          ], 2)) : ge("v-if", !0),
          v("input", pt({
            id: b(p),
            ref_key: "input",
            ref: h,
            class: b(g).e("inner")
          }, b(u), {
            type: V.showPassword ? S.value ? "text" : "password" : V.type,
            disabled: b(m),
            formatter: V.formatter,
            parser: V.parser,
            readonly: V.readonly,
            autocomplete: V.autocomplete,
            tabindex: V.tabindex,
            "aria-label": V.label,
            placeholder: V.placeholder,
            style: V.inputStyle,
            form: r.form,
            autofocus: r.autofocus,
            onCompositionstart: j,
            onCompositionupdate: J,
            onCompositionend: W,
            onInput: M,
            onFocus: ie[0] || (ie[0] = (...xe) => b(N) && b(N)(...xe)),
            onBlur: ie[1] || (ie[1] = (...xe) => b(D) && b(D)(...xe)),
            onChange: L,
            onKeydown: be
          }), null, 16, h9),
          ge(" suffix slot "),
          b(nt) ? (w(), A("span", {
            key: 1,
            class: Z(b(g).e("suffix"))
          }, [
            v("span", {
              class: Z(b(g).e("suffix-inner"))
            }, [
              !b(te) || !b(Ae) || !b(ve) ? (w(), A(Ze, { key: 0 }, [
                _e(V.$slots, "suffix"),
                V.suffixIcon ? (w(), le(b(Gt), {
                  key: 0,
                  class: Z(b(g).e("icon"))
                }, {
                  default: fe(() => [
                    (w(), le(Rt(V.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ge("v-if", !0)
              ], 64)) : ge("v-if", !0),
              b(te) ? (w(), le(b(Gt), {
                key: 1,
                class: Z([b(g).e("icon"), b(g).e("clear")]),
                onMousedown: nn(b(Pt), ["prevent"]),
                onClick: pe
              }, {
                default: fe(() => [
                  we(b(Cf))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ge("v-if", !0),
              b(Ae) ? (w(), le(b(Gt), {
                key: 2,
                class: Z([b(g).e("icon"), b(g).e("password")]),
                onClick: X
              }, {
                default: fe(() => [
                  (w(), le(Rt(b(q))))
                ]),
                _: 1
              }, 8, ["class"])) : ge("v-if", !0),
              b(ve) ? (w(), A("span", {
                key: 3,
                class: Z(b(g).e("count"))
              }, [
                v("span", {
                  class: Z(b(g).e("count-inner"))
                }, Ge(b(Ne)) + " / " + Ge(b(u).maxlength), 3)
              ], 2)) : ge("v-if", !0),
              b(F) && b(U) && b(oe) ? (w(), le(b(Gt), {
                key: 4,
                class: Z([
                  b(g).e("icon"),
                  b(g).e("validateIcon"),
                  b(g).is("loading", b(F) === "validating")
                ])
              }, {
                default: fe(() => [
                  (w(), le(Rt(b(U))))
                ]),
                _: 1
              }, 8, ["class"])) : ge("v-if", !0)
            ], 2)
          ], 2)) : ge("v-if", !0)
        ], 2),
        ge(" append slot "),
        V.$slots.append ? (w(), A("div", {
          key: 1,
          class: Z(b(g).be("group", "append"))
        }, [
          _e(V.$slots, "append")
        ], 2)) : ge("v-if", !0)
      ], 64)) : (w(), A(Ze, { key: 1 }, [
        ge(" textarea "),
        v("textarea", pt({
          id: b(p),
          ref_key: "textarea",
          ref: k,
          class: b(C).e("inner")
        }, b(u), {
          tabindex: V.tabindex,
          disabled: b(m),
          readonly: V.readonly,
          autocomplete: V.autocomplete,
          style: b(H),
          "aria-label": V.label,
          placeholder: V.placeholder,
          form: r.form,
          autofocus: r.autofocus,
          onCompositionstart: j,
          onCompositionupdate: J,
          onCompositionend: W,
          onInput: M,
          onFocus: ie[2] || (ie[2] = (...xe) => b(N) && b(N)(...xe)),
          onBlur: ie[3] || (ie[3] = (...xe) => b(D) && b(D)(...xe)),
          onChange: L,
          onKeydown: be
        }), null, 16, g9),
        b(ve) ? (w(), A("span", {
          key: 0,
          style: tt(x.value),
          class: Z(b(g).e("count"))
        }, Ge(b(Ne)) + " / " + Ge(b(u).maxlength), 7)) : ge("v-if", !0)
      ], 64))
    ], 16, p9)), [
      [tr, V.type !== "hidden"]
    ]);
  }
});
var b9 = /* @__PURE__ */ Ke(v9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const sa = An(b9), co = 4, _9 = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, y9 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), $m = Symbol("scrollbarContextKey"), w9 = et({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), k9 = "Thumb", C9 = /* @__PURE__ */ ne({
  __name: "thumb",
  props: w9,
  setup(e) {
    const t = e, n = De($m), r = We("scrollbar");
    n || Qx(k9, "can not inject scrollbar context");
    const s = G(), o = G(), i = G({}), a = G(!1);
    let l = !1, u = !1, f = Dt ? document.onselectstart : null;
    const c = R(() => _9[t.vertical ? "vertical" : "horizontal"]), p = R(() => y9({
      size: t.size,
      move: t.move,
      bar: c.value
    })), d = R(() => s.value[c.value.offset] ** 2 / n.wrapElement[c.value.scrollSize] / t.ratio / o.value[c.value.offset]), m = (x) => {
      var T;
      if (x.stopPropagation(), x.ctrlKey || [1, 2].includes(x.button))
        return;
      (T = window.getSelection()) == null || T.removeAllRanges(), C(x);
      const $ = x.currentTarget;
      $ && (i.value[c.value.axis] = $[c.value.offset] - (x[c.value.client] - $.getBoundingClientRect()[c.value.direction]));
    }, g = (x) => {
      if (!o.value || !s.value || !n.wrapElement)
        return;
      const T = Math.abs(x.target.getBoundingClientRect()[c.value.direction] - x[c.value.client]), $ = o.value[c.value.offset] / 2, I = (T - $) * 100 * d.value / s.value[c.value.offset];
      n.wrapElement[c.value.scroll] = I * n.wrapElement[c.value.scrollSize] / 100;
    }, C = (x) => {
      x.stopImmediatePropagation(), l = !0, document.addEventListener("mousemove", h), document.addEventListener("mouseup", k), f = document.onselectstart, document.onselectstart = () => !1;
    }, h = (x) => {
      if (!s.value || !o.value || l === !1)
        return;
      const T = i.value[c.value.axis];
      if (!T)
        return;
      const $ = (s.value.getBoundingClientRect()[c.value.direction] - x[c.value.client]) * -1, I = o.value[c.value.offset] - T, P = ($ - I) * 100 * d.value / s.value[c.value.offset];
      n.wrapElement[c.value.scroll] = P * n.wrapElement[c.value.scrollSize] / 100;
    }, k = () => {
      l = !1, i.value[c.value.axis] = 0, document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", k), S(), u && (a.value = !1);
    }, y = () => {
      u = !1, a.value = !!t.size;
    }, _ = () => {
      u = !0, a.value = l;
    };
    Xt(() => {
      S(), document.removeEventListener("mouseup", k);
    });
    const S = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return Gr(yn(n, "scrollbarElement"), "mousemove", y), Gr(yn(n, "scrollbarElement"), "mouseleave", _), (x, T) => (w(), le(Jr, {
      name: b(r).b("fade"),
      persisted: ""
    }, {
      default: fe(() => [
        Vt(v("div", {
          ref_key: "instance",
          ref: s,
          class: Z([b(r).e("bar"), b(r).is(b(c).key)]),
          onMousedown: g
        }, [
          v("div", {
            ref_key: "thumb",
            ref: o,
            class: Z(b(r).e("thumb")),
            style: tt(b(p)),
            onMousedown: m
          }, null, 38)
        ], 34), [
          [tr, x.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ep = /* @__PURE__ */ Ke(C9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const x9 = et({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), E9 = /* @__PURE__ */ ne({
  __name: "bar",
  props: x9,
  setup(e, { expose: t }) {
    const n = e, r = G(0), s = G(0);
    return t({
      handleScroll: (i) => {
        if (i) {
          const a = i.offsetHeight - co, l = i.offsetWidth - co;
          s.value = i.scrollTop * 100 / a * n.ratioY, r.value = i.scrollLeft * 100 / l * n.ratioX;
        }
      }
    }), (i, a) => (w(), A(Ze, null, [
      we(ep, {
        move: r.value,
        ratio: i.ratioX,
        size: i.width,
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      we(ep, {
        move: s.value,
        ratio: i.ratioY,
        size: i.height,
        vertical: "",
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var S9 = /* @__PURE__ */ Ke(E9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const A9 = et({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: Ie([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  },
  id: String,
  role: String,
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical"]
  }
}), T9 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(mt)
}, M9 = "ElScrollbar", $9 = /* @__PURE__ */ ne({
  name: M9
}), L9 = /* @__PURE__ */ ne({
  ...$9,
  props: A9,
  emits: T9,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = We("scrollbar");
    let o, i;
    const a = G(), l = G(), u = G(), f = G("0"), c = G("0"), p = G(), d = G(1), m = G(1), g = R(() => {
      const T = {};
      return r.height && (T.height = wo(r.height)), r.maxHeight && (T.maxHeight = wo(r.maxHeight)), [r.wrapStyle, T];
    }), C = R(() => [
      r.wrapClass,
      s.e("wrap"),
      { [s.em("wrap", "hidden-default")]: !r.native }
    ]), h = R(() => [s.e("view"), r.viewClass]), k = () => {
      var T;
      l.value && ((T = p.value) == null || T.handleScroll(l.value), n("scroll", {
        scrollTop: l.value.scrollTop,
        scrollLeft: l.value.scrollLeft
      }));
    };
    function y(T, $) {
      Pe(T) ? l.value.scrollTo(T) : mt(T) && mt($) && l.value.scrollTo(T, $);
    }
    const _ = (T) => {
      mt(T) && (l.value.scrollTop = T);
    }, S = (T) => {
      mt(T) && (l.value.scrollLeft = T);
    }, x = () => {
      if (!l.value)
        return;
      const T = l.value.offsetHeight - co, $ = l.value.offsetWidth - co, I = T ** 2 / l.value.scrollHeight, P = $ ** 2 / l.value.scrollWidth, N = Math.max(I, r.minSize), D = Math.max(P, r.minSize);
      d.value = I / (T - I) / (N / (T - N)), m.value = P / ($ - P) / (D / ($ - D)), c.value = N + co < T ? `${N}px` : "", f.value = D + co < $ ? `${D}px` : "";
    };
    return Ee(() => r.noresize, (T) => {
      T ? (o == null || o(), i == null || i()) : ({ stop: o } = Gi(u, x), i = Gr("resize", x));
    }, { immediate: !0 }), Ee(() => [r.maxHeight, r.height], () => {
      r.native || ze(() => {
        var T;
        x(), l.value && ((T = p.value) == null || T.handleScroll(l.value));
      });
    }), Ut($m, Sn({
      scrollbarElement: a,
      wrapElement: l
    })), rt(() => {
      r.native || ze(() => {
        x();
      });
    }), Q1(() => x()), t({
      wrapRef: l,
      update: x,
      scrollTo: y,
      setScrollTop: _,
      setScrollLeft: S,
      handleScroll: k
    }), (T, $) => (w(), A("div", {
      ref_key: "scrollbarRef",
      ref: a,
      class: Z(b(s).b())
    }, [
      v("div", {
        ref_key: "wrapRef",
        ref: l,
        class: Z(b(C)),
        style: tt(b(g)),
        onScroll: k
      }, [
        (w(), le(Rt(T.tag), {
          id: T.id,
          ref_key: "resizeRef",
          ref: u,
          class: Z(b(h)),
          style: tt(T.viewStyle),
          role: T.role,
          "aria-label": T.ariaLabel,
          "aria-orientation": T.ariaOrientation
        }, {
          default: fe(() => [
            _e(T.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      T.native ? ge("v-if", !0) : (w(), le(S9, {
        key: 0,
        ref_key: "barRef",
        ref: p,
        height: c.value,
        width: f.value,
        always: T.always,
        "ratio-x": m.value,
        "ratio-y": d.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var I9 = /* @__PURE__ */ Ke(L9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const O9 = An(I9), Bf = Symbol("popper"), Lm = Symbol("popperContent"), R9 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Im = et({
  role: {
    type: String,
    values: R9,
    default: "tooltip"
  }
}), P9 = /* @__PURE__ */ ne({
  name: "ElPopper",
  inheritAttrs: !1
}), D9 = /* @__PURE__ */ ne({
  ...P9,
  props: Im,
  setup(e, { expose: t }) {
    const n = e, r = G(), s = G(), o = G(), i = G(), a = R(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: s,
      contentRef: o,
      referenceRef: i,
      role: a
    };
    return t(l), Ut(Bf, l), (u, f) => _e(u.$slots, "default");
  }
});
var N9 = /* @__PURE__ */ Ke(D9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Om = et({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), B9 = /* @__PURE__ */ ne({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), F9 = /* @__PURE__ */ ne({
  ...B9,
  props: Om,
  setup(e, { expose: t }) {
    const n = e, r = We("popper"), { arrowOffset: s, arrowRef: o, arrowStyle: i } = De(Lm, void 0);
    return Ee(() => n.arrowOffset, (a) => {
      s.value = a;
    }), Xt(() => {
      o.value = void 0;
    }), t({
      arrowRef: o
    }), (a, l) => (w(), A("span", {
      ref_key: "arrowRef",
      ref: o,
      class: Z(b(r).e("arrow")),
      style: tt(b(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var q9 = /* @__PURE__ */ Ke(F9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const z9 = "ElOnlyChild", H9 = /* @__PURE__ */ ne({
  name: z9,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const s = De(Am), o = Z7((r = s == null ? void 0 : s.setForwardRef) != null ? r : Pt);
    return () => {
      var i;
      const a = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!a || a.length > 1)
        return null;
      const l = Rm(a);
      return l ? Vt(er(l, n), [[o]]) : null;
    };
  }
});
function Rm(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Pe(n))
      switch (n.type) {
        case Ot:
          continue;
        case Ao:
        case "svg":
          return tp(n);
        case Ze:
          return Rm(n.children);
        default:
          return n;
      }
    return tp(n);
  }
  return null;
}
function tp(e) {
  const t = We("only-child");
  return we("span", {
    class: t.e("content")
  }, [e]);
}
const Pm = et({
  virtualRef: {
    type: Ie(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: Ie(Function)
  },
  onMouseleave: {
    type: Ie(Function)
  },
  onClick: {
    type: Ie(Function)
  },
  onKeydown: {
    type: Ie(Function)
  },
  onFocus: {
    type: Ie(Function)
  },
  onBlur: {
    type: Ie(Function)
  },
  onContextmenu: {
    type: Ie(Function)
  },
  id: String,
  open: Boolean
}), j9 = /* @__PURE__ */ ne({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), V9 = /* @__PURE__ */ ne({
  ...j9,
  props: Pm,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: s } = De(Bf, void 0);
    W7(s);
    const o = R(() => a.value ? n.id : void 0), i = R(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = R(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = R(() => a.value ? `${n.open}` : void 0);
    let u;
    return rt(() => {
      Ee(() => n.virtualRef, (f) => {
        f && (s.value = Cr(f));
      }, {
        immediate: !0
      }), Ee(s, (f, c) => {
        u == null || u(), u = void 0, us(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((p) => {
          var d;
          const m = n[p];
          m && (f.addEventListener(p.slice(2).toLowerCase(), m), (d = c == null ? void 0 : c.removeEventListener) == null || d.call(c, p.slice(2).toLowerCase(), m));
        }), u = Ee([o, i, a, l], (p) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((d, m) => {
            Wr(p[m]) ? f.removeAttribute(d) : f.setAttribute(d, p[m]);
          });
        }, { immediate: !0 })), us(c) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((p) => c.removeAttribute(p));
      }, {
        immediate: !0
      });
    }), Xt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: s
    }), (f, c) => f.virtualTriggering ? ge("v-if", !0) : (w(), le(b(H9), pt({ key: 0 }, f.$attrs, {
      "aria-controls": b(o),
      "aria-describedby": b(i),
      "aria-expanded": b(l),
      "aria-haspopup": b(a)
    }), {
      default: fe(() => [
        _e(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var U9 = /* @__PURE__ */ Ke(V9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Ba = "focus-trap.focus-after-trapped", Fa = "focus-trap.focus-after-released", K9 = "focus-trap.focusout-prevented", np = {
  cancelable: !0,
  bubbles: !1
}, G9 = {
  cancelable: !0,
  bubbles: !1
}, rp = "focusAfterTrapped", op = "focusAfterReleased", W9 = Symbol("elFocusTrap"), Ff = G(), ia = G(0), qf = G(0);
let qs = 0;
const Dm = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, sp = (e, t) => {
  for (const n of e)
    if (!Z9(n, t))
      return n;
}, Z9 = (e, t) => {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, X9 = (e) => {
  const t = Dm(e), n = sp(t, e), r = sp(t.reverse(), e);
  return [n, r];
}, Y9 = (e) => e instanceof HTMLInputElement && "select" in e, mr = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), qf.value = window.performance.now(), e !== n && Y9(e) && t && e.select();
  }
};
function ip(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const J9 = () => {
  let e = [];
  return {
    push: (r) => {
      const s = e[0];
      s && r !== s && s.pause(), e = ip(e, r), e.unshift(r);
    },
    remove: (r) => {
      var s, o;
      e = ip(e, r), (o = (s = e[0]) == null ? void 0 : s.resume) == null || o.call(s);
    }
  };
}, Q9 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (mr(r, t), document.activeElement !== n)
      return;
}, ap = J9(), eE = () => ia.value > qf.value, zs = () => {
  Ff.value = "pointer", ia.value = window.performance.now();
}, lp = () => {
  Ff.value = "keyboard", ia.value = window.performance.now();
}, tE = () => (rt(() => {
  qs === 0 && (document.addEventListener("mousedown", zs), document.addEventListener("touchstart", zs), document.addEventListener("keydown", lp)), qs++;
}), Xt(() => {
  qs--, qs <= 0 && (document.removeEventListener("mousedown", zs), document.removeEventListener("touchstart", zs), document.removeEventListener("keydown", lp));
}), {
  focusReason: Ff,
  lastUserFocusTimestamp: ia,
  lastAutomatedFocusTimestamp: qf
}), Hs = (e) => new CustomEvent(K9, {
  ...G9,
  detail: e
}), nE = /* @__PURE__ */ ne({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    rp,
    op,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = G();
    let r, s;
    const { focusReason: o } = tE();
    j7((m) => {
      e.trapped && !i.paused && t("release-requested", m);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, a = (m) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: g, altKey: C, ctrlKey: h, metaKey: k, currentTarget: y, shiftKey: _ } = m, { loop: S } = e, x = g === Qn.tab && !C && !h && !k, T = document.activeElement;
      if (x && T) {
        const $ = y, [I, P] = X9($);
        if (I && P) {
          if (!_ && T === P) {
            const D = Hs({
              focusReason: o.value
            });
            t("focusout-prevented", D), D.defaultPrevented || (m.preventDefault(), S && mr(I, !0));
          } else if (_ && [I, $].includes(T)) {
            const D = Hs({
              focusReason: o.value
            });
            t("focusout-prevented", D), D.defaultPrevented || (m.preventDefault(), S && mr(P, !0));
          }
        } else if (T === $) {
          const D = Hs({
            focusReason: o.value
          });
          t("focusout-prevented", D), D.defaultPrevented || m.preventDefault();
        }
      }
    };
    Ut(W9, {
      focusTrapRef: n,
      onKeydown: a
    }), Ee(() => e.focusTrapEl, (m) => {
      m && (n.value = m);
    }, { immediate: !0 }), Ee([n], ([m], [g]) => {
      m && (m.addEventListener("keydown", a), m.addEventListener("focusin", f), m.addEventListener("focusout", c)), g && (g.removeEventListener("keydown", a), g.removeEventListener("focusin", f), g.removeEventListener("focusout", c));
    });
    const l = (m) => {
      t(rp, m);
    }, u = (m) => t(op, m), f = (m) => {
      const g = b(n);
      if (!g)
        return;
      const C = m.target, h = m.relatedTarget, k = C && g.contains(C);
      e.trapped || h && g.contains(h) || (r = h), k && t("focusin", m), !i.paused && e.trapped && (k ? s = C : mr(s, !0));
    }, c = (m) => {
      const g = b(n);
      if (!(i.paused || !g))
        if (e.trapped) {
          const C = m.relatedTarget;
          !Wr(C) && !g.contains(C) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const h = Hs({
                focusReason: o.value
              });
              t("focusout-prevented", h), h.defaultPrevented || mr(s, !0);
            }
          }, 0);
        } else {
          const C = m.target;
          C && g.contains(C) || t("focusout", m);
        }
    };
    async function p() {
      await ze();
      const m = b(n);
      if (m) {
        ap.push(i);
        const g = m.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !m.contains(g)) {
          const h = new Event(Ba, np);
          m.addEventListener(Ba, l), m.dispatchEvent(h), h.defaultPrevented || ze(() => {
            let k = e.focusStartEl;
            He(k) || (mr(k), document.activeElement !== k && (k = "first")), k === "first" && Q9(Dm(m), !0), (document.activeElement === g || k === "container") && mr(m);
          });
        }
      }
    }
    function d() {
      const m = b(n);
      if (m) {
        m.removeEventListener(Ba, l);
        const g = new CustomEvent(Fa, {
          ...np,
          detail: {
            focusReason: o.value
          }
        });
        m.addEventListener(Fa, u), m.dispatchEvent(g), !g.defaultPrevented && (o.value == "keyboard" || !eE() || m.contains(document.activeElement)) && mr(r ?? document.body), m.removeEventListener(Fa, u), ap.remove(i);
      }
    }
    return rt(() => {
      e.trapped && p(), Ee(() => e.trapped, (m) => {
        m ? p() : d();
      });
    }), Xt(() => {
      e.trapped && d();
    }), {
      onKeydown: a
    };
  }
});
function rE(e, t, n, r, s, o) {
  return _e(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var oE = /* @__PURE__ */ Ke(nE, [["render", rE], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const sE = ["fixed", "absolute"], iE = et({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: Ie(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: ea,
    default: "bottom"
  },
  popperOptions: {
    type: Ie(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: sE,
    default: "absolute"
  }
}), Nm = et({
  ...iE,
  id: String,
  style: {
    type: Ie([String, Array, Object])
  },
  className: {
    type: Ie([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: Ie([String, Array, Object])
  },
  popperStyle: {
    type: Ie([String, Array, Object])
  },
  referenceEl: {
    type: Ie(Object)
  },
  triggerTargetEl: {
    type: Ie(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), aE = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, lE = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: s } = e, o = {
    placement: n,
    strategy: r,
    ...s,
    modifiers: [...uE(e), ...t]
  };
  return fE(o, s == null ? void 0 : s.modifiers), o;
}, cE = (e) => {
  if (Dt)
    return Cr(e);
};
function uE(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function fE(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const dE = 0, pE = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: s } = De(Bf, void 0), o = G(), i = G(), a = R(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = R(() => {
    var h;
    const k = b(o), y = (h = b(i)) != null ? h : dE;
    return {
      name: "arrow",
      enabled: !Zx(k),
      options: {
        element: k,
        padding: y
      }
    };
  }), u = R(() => ({
    onFirstUpdate: () => {
      m();
    },
    ...lE(e, [
      b(l),
      b(a)
    ])
  })), f = R(() => cE(e.referenceEl) || b(r)), { attributes: c, state: p, styles: d, update: m, forceUpdate: g, instanceRef: C } = q7(f, n, u);
  return Ee(C, (h) => t.value = h), rt(() => {
    Ee(() => {
      var h;
      return (h = b(f)) == null ? void 0 : h.getBoundingClientRect();
    }, () => {
      m();
    });
  }), {
    attributes: c,
    arrowRef: o,
    contentRef: n,
    instanceRef: C,
    state: p,
    styles: d,
    role: s,
    forceUpdate: g,
    update: m
  };
}, hE = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: s } = J7(), o = We("popper"), i = R(() => b(t).popper), a = G(mt(e.zIndex) ? e.zIndex : s()), l = R(() => [
    o.b(),
    o.is("pure", e.pure),
    o.is(e.effect),
    e.popperClass
  ]), u = R(() => [
    { zIndex: b(a) },
    b(n).popper,
    e.popperStyle || {}
  ]), f = R(() => r.value === "dialog" ? "false" : void 0), c = R(() => b(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: c,
    contentAttrs: i,
    contentClass: l,
    contentStyle: u,
    contentZIndex: a,
    updateZIndex: () => {
      a.value = mt(e.zIndex) ? e.zIndex : s();
    }
  };
}, gE = (e, t) => {
  const n = G(!1), r = G();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var f;
      ((f = u.detail) == null ? void 0 : f.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (u) => {
      e.visible && !n.value && (u.target && (r.value = u.target), n.value = !0);
    },
    onFocusoutPrevented: (u) => {
      e.trapping || (u.detail.focusReason === "pointer" && u.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, mE = /* @__PURE__ */ ne({
  name: "ElPopperContent"
}), vE = /* @__PURE__ */ ne({
  ...mE,
  props: Nm,
  emits: aE,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: s,
      trapped: o,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: a,
      onFocusInTrap: l,
      onFocusoutPrevented: u,
      onReleaseRequested: f
    } = gE(r, n), { attributes: c, arrowRef: p, contentRef: d, styles: m, instanceRef: g, role: C, update: h } = pE(r), {
      ariaModal: k,
      arrowStyle: y,
      contentAttrs: _,
      contentClass: S,
      contentStyle: x,
      updateZIndex: T
    } = hE(r, {
      styles: m,
      attributes: c,
      role: C
    }), $ = De(Ei, void 0), I = G();
    Ut(Lm, {
      arrowStyle: y,
      arrowRef: p,
      arrowOffset: I
    }), $ && ($.addInputId || $.removeInputId) && Ut(Ei, {
      ...$,
      addInputId: Pt,
      removeInputId: Pt
    });
    let P;
    const N = (oe = !0) => {
      h(), oe && T();
    }, D = () => {
      N(!1), r.visible && r.focusOnShow ? o.value = !0 : r.visible === !1 && (o.value = !1);
    };
    return rt(() => {
      Ee(() => r.triggerTargetEl, (oe, F) => {
        P == null || P(), P = void 0;
        const U = b(oe || d.value), q = b(F || d.value);
        us(U) && (P = Ee([C, () => r.ariaLabel, k, () => r.id], (z) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, Q) => {
            Wr(z[Q]) ? U.removeAttribute(H) : U.setAttribute(H, z[Q]);
          });
        }, { immediate: !0 })), q !== U && us(q) && ["role", "aria-label", "aria-modal", "id"].forEach((z) => {
          q.removeAttribute(z);
        });
      }, { immediate: !0 }), Ee(() => r.visible, D, { immediate: !0 });
    }), Xt(() => {
      P == null || P(), P = void 0;
    }), t({
      popperContentRef: d,
      popperInstanceRef: g,
      updatePopper: N,
      contentStyle: x
    }), (oe, F) => (w(), A("div", pt({
      ref_key: "contentRef",
      ref: d
    }, b(_), {
      style: b(x),
      class: b(S),
      tabindex: "-1",
      onMouseenter: F[0] || (F[0] = (U) => oe.$emit("mouseenter", U)),
      onMouseleave: F[1] || (F[1] = (U) => oe.$emit("mouseleave", U))
    }), [
      we(b(oE), {
        trapped: b(o),
        "trap-on-focus-in": !0,
        "focus-trap-el": b(d),
        "focus-start-el": b(s),
        onFocusAfterTrapped: b(a),
        onFocusAfterReleased: b(i),
        onFocusin: b(l),
        onFocusoutPrevented: b(u),
        onReleaseRequested: b(f)
      }, {
        default: fe(() => [
          _e(oe.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var bE = /* @__PURE__ */ Ke(vE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const _E = An(N9), zf = Symbol("elTooltip"), tn = et({
  ...K7,
  ...Nm,
  appendTo: {
    type: Ie([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: Ie(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), ps = et({
  ...Pm,
  disabled: Boolean,
  trigger: {
    type: Ie([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: Ie(Array),
    default: () => [Qn.enter, Qn.space]
  }
}), {
  useModelToggleProps: yE,
  useModelToggleEmits: wE,
  useModelToggle: kE
} = N8("visible"), CE = et({
  ...Im,
  ...yE,
  ...tn,
  ...ps,
  ...Om,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), xE = [
  ...wE,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], EE = (e, t) => Me(e) ? e.includes(t) : e === t, oo = (e, t, n) => (r) => {
  EE(b(e), t) && n(r);
}, SE = /* @__PURE__ */ ne({
  name: "ElTooltipTrigger"
}), AE = /* @__PURE__ */ ne({
  ...SE,
  props: ps,
  setup(e, { expose: t }) {
    const n = e, r = We("tooltip"), { controlled: s, id: o, open: i, onOpen: a, onClose: l, onToggle: u } = De(zf, void 0), f = G(null), c = () => {
      if (b(s) || n.disabled)
        return !0;
    }, p = yn(n, "trigger"), d = Gn(c, oo(p, "hover", a)), m = Gn(c, oo(p, "hover", l)), g = Gn(c, oo(p, "click", (_) => {
      _.button === 0 && u(_);
    })), C = Gn(c, oo(p, "focus", a)), h = Gn(c, oo(p, "focus", l)), k = Gn(c, oo(p, "contextmenu", (_) => {
      _.preventDefault(), u(_);
    })), y = Gn(c, (_) => {
      const { code: S } = _;
      n.triggerKeys.includes(S) && (_.preventDefault(), u(_));
    });
    return t({
      triggerRef: f
    }), (_, S) => (w(), le(b(U9), {
      id: b(o),
      "virtual-ref": _.virtualRef,
      open: b(i),
      "virtual-triggering": _.virtualTriggering,
      class: Z(b(r).e("trigger")),
      onBlur: b(h),
      onClick: b(g),
      onContextmenu: b(k),
      onFocus: b(C),
      onMouseenter: b(d),
      onMouseleave: b(m),
      onKeydown: b(y)
    }, {
      default: fe(() => [
        _e(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var TE = /* @__PURE__ */ Ke(AE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const ME = /* @__PURE__ */ ne({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), $E = /* @__PURE__ */ ne({
  ...ME,
  props: tn,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Sm(), s = We("tooltip"), o = G(null), i = G(!1), {
      controlled: a,
      id: l,
      open: u,
      trigger: f,
      onClose: c,
      onOpen: p,
      onShow: d,
      onHide: m,
      onBeforeShow: g,
      onBeforeHide: C
    } = De(zf, void 0), h = R(() => n.transition || `${s.namespace.value}-fade-in-linear`), k = R(() => n.persistent);
    Xt(() => {
      i.value = !0;
    });
    const y = R(() => b(k) ? !0 : b(u)), _ = R(() => n.disabled ? !1 : b(u)), S = R(() => n.appendTo || r.value), x = R(() => {
      var z;
      return (z = n.style) != null ? z : {};
    }), T = R(() => !b(u)), $ = () => {
      m();
    }, I = () => {
      if (b(a))
        return !0;
    }, P = Gn(I, () => {
      n.enterable && b(f) === "hover" && p();
    }), N = Gn(I, () => {
      b(f) === "hover" && c();
    }), D = () => {
      var z, H;
      (H = (z = o.value) == null ? void 0 : z.updatePopper) == null || H.call(z), g == null || g();
    }, oe = () => {
      C == null || C();
    }, F = () => {
      d(), q = hC(R(() => {
        var z;
        return (z = o.value) == null ? void 0 : z.popperContentRef;
      }), () => {
        if (b(a))
          return;
        b(f) !== "hover" && c();
      });
    }, U = () => {
      n.virtualTriggering || c();
    };
    let q;
    return Ee(() => b(u), (z) => {
      z || q == null || q();
    }, {
      flush: "post"
    }), Ee(() => n.content, () => {
      var z, H;
      (H = (z = o.value) == null ? void 0 : z.updatePopper) == null || H.call(z);
    }), t({
      contentRef: o
    }), (z, H) => (w(), le(ew, {
      disabled: !z.teleported,
      to: b(S)
    }, [
      we(Jr, {
        name: b(h),
        onAfterLeave: $,
        onBeforeEnter: D,
        onAfterEnter: F,
        onBeforeLeave: oe
      }, {
        default: fe(() => [
          b(y) ? Vt((w(), le(b(bE), pt({
            key: 0,
            id: b(l),
            ref_key: "contentRef",
            ref: o
          }, z.$attrs, {
            "aria-label": z.ariaLabel,
            "aria-hidden": b(T),
            "boundaries-padding": z.boundariesPadding,
            "fallback-placements": z.fallbackPlacements,
            "gpu-acceleration": z.gpuAcceleration,
            offset: z.offset,
            placement: z.placement,
            "popper-options": z.popperOptions,
            strategy: z.strategy,
            effect: z.effect,
            enterable: z.enterable,
            pure: z.pure,
            "popper-class": z.popperClass,
            "popper-style": [z.popperStyle, b(x)],
            "reference-el": z.referenceEl,
            "trigger-target-el": z.triggerTargetEl,
            visible: b(_),
            "z-index": z.zIndex,
            onMouseenter: b(P),
            onMouseleave: b(N),
            onBlur: U,
            onClose: b(c)
          }), {
            default: fe(() => [
              i.value ? ge("v-if", !0) : _e(z.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [tr, b(_)]
          ]) : ge("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var LE = /* @__PURE__ */ Ke($E, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const IE = ["innerHTML"], OE = { key: 1 }, RE = /* @__PURE__ */ ne({
  name: "ElTooltip"
}), PE = /* @__PURE__ */ ne({
  ...RE,
  props: CE,
  emits: xE,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    U7();
    const s = na(), o = G(), i = G(), a = () => {
      var h;
      const k = b(o);
      k && ((h = k.popperInstanceRef) == null || h.update());
    }, l = G(!1), u = G(), { show: f, hide: c, hasUpdateHandler: p } = kE({
      indicator: l,
      toggleReason: u
    }), { onOpen: d, onClose: m } = G7({
      showAfter: yn(r, "showAfter"),
      hideAfter: yn(r, "hideAfter"),
      autoClose: yn(r, "autoClose"),
      open: f,
      close: c
    }), g = R(() => kf(r.visible) && !p.value);
    Ut(zf, {
      controlled: g,
      id: s,
      open: Ni(l),
      trigger: yn(r, "trigger"),
      onOpen: (h) => {
        d(h);
      },
      onClose: (h) => {
        m(h);
      },
      onToggle: (h) => {
        b(l) ? m(h) : d(h);
      },
      onShow: () => {
        n("show", u.value);
      },
      onHide: () => {
        n("hide", u.value);
      },
      onBeforeShow: () => {
        n("before-show", u.value);
      },
      onBeforeHide: () => {
        n("before-hide", u.value);
      },
      updatePopper: a
    }), Ee(() => r.disabled, (h) => {
      h && l.value && (l.value = !1);
    });
    const C = (h) => {
      var k, y;
      const _ = (y = (k = i.value) == null ? void 0 : k.contentRef) == null ? void 0 : y.popperContentRef, S = (h == null ? void 0 : h.relatedTarget) || document.activeElement;
      return _ && _.contains(S);
    };
    return X1(() => l.value && c()), t({
      popperRef: o,
      contentRef: i,
      isFocusInsideContent: C,
      updatePopper: a,
      onOpen: d,
      onClose: m,
      hide: c
    }), (h, k) => (w(), le(b(_E), {
      ref_key: "popperRef",
      ref: o,
      role: h.role
    }, {
      default: fe(() => [
        we(TE, {
          disabled: h.disabled,
          trigger: h.trigger,
          "trigger-keys": h.triggerKeys,
          "virtual-ref": h.virtualRef,
          "virtual-triggering": h.virtualTriggering
        }, {
          default: fe(() => [
            h.$slots.default ? _e(h.$slots, "default", { key: 0 }) : ge("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        we(LE, {
          ref_key: "contentRef",
          ref: i,
          "aria-label": h.ariaLabel,
          "boundaries-padding": h.boundariesPadding,
          content: h.content,
          disabled: h.disabled,
          effect: h.effect,
          enterable: h.enterable,
          "fallback-placements": h.fallbackPlacements,
          "hide-after": h.hideAfter,
          "gpu-acceleration": h.gpuAcceleration,
          offset: h.offset,
          persistent: h.persistent,
          "popper-class": h.popperClass,
          "popper-style": h.popperStyle,
          placement: h.placement,
          "popper-options": h.popperOptions,
          pure: h.pure,
          "raw-content": h.rawContent,
          "reference-el": h.referenceEl,
          "trigger-target-el": h.triggerTargetEl,
          "show-after": h.showAfter,
          strategy: h.strategy,
          teleported: h.teleported,
          transition: h.transition,
          "virtual-triggering": h.virtualTriggering,
          "z-index": h.zIndex,
          "append-to": h.appendTo
        }, {
          default: fe(() => [
            _e(h.$slots, "content", {}, () => [
              h.rawContent ? (w(), A("span", {
                key: 0,
                innerHTML: h.content
              }, null, 8, IE)) : (w(), A("span", OE, Ge(h.content), 1))
            ]),
            h.showArrow ? (w(), le(b(q9), {
              key: 0,
              "arrow-offset": h.arrowOffset
            }, null, 8, ["arrow-offset"])) : ge("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var DE = /* @__PURE__ */ Ke(PE, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const hs = An(DE), Bm = Symbol("buttonGroupContextKey"), NE = (e, t) => {
  dm({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, R(() => e.type === "text"));
  const n = De(Bm, void 0), r = r9("button"), { form: s } = oa(), o = xs(R(() => n == null ? void 0 : n.size)), i = ra(), a = G(), l = rg(), u = R(() => e.type || (n == null ? void 0 : n.type) || ""), f = R(() => {
    var m, g, C;
    return (C = (g = e.autoInsertSpace) != null ? g : (m = r.value) == null ? void 0 : m.autoInsertSpace) != null ? C : !1;
  }), c = R(() => e.tag === "button" ? {
    ariaDisabled: i.value || e.loading,
    disabled: i.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), p = R(() => {
    var m;
    const g = (m = l.default) == null ? void 0 : m.call(l);
    if (f.value && (g == null ? void 0 : g.length) === 1) {
      const C = g[0];
      if ((C == null ? void 0 : C.type) === Ao) {
        const h = C.children;
        return new RegExp("^\\p{Unified_Ideograph}{2}$", "u").test(h.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: o,
    _type: u,
    _ref: a,
    _props: c,
    shouldAddSpace: p,
    handleClick: (m) => {
      e.nativeType === "reset" && (s == null || s.resetFields()), t("click", m);
    }
  };
}, BE = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], FE = ["button", "submit", "reset"], Tu = et({
  size: Df,
  disabled: Boolean,
  type: {
    type: String,
    values: BE,
    default: ""
  },
  icon: {
    type: En
  },
  nativeType: {
    type: String,
    values: FE,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: En,
    default: () => lm
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Ie([String, Object]),
    default: "button"
  }
}), qE = {
  click: (e) => e instanceof MouseEvent
};
function Tt(e, t) {
  zE(e) && (e = "100%");
  var n = HE(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function js(e) {
  return Math.min(1, Math.max(0, e));
}
function zE(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function HE(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Fm(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Vs(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Ur(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function jE(e, t, n) {
  return {
    r: Tt(e, 255) * 255,
    g: Tt(t, 255) * 255,
    b: Tt(n, 255) * 255
  };
}
function cp(e, t, n) {
  e = Tt(e, 255), t = Tt(t, 255), n = Tt(n, 255);
  var r = Math.max(e, t, n), s = Math.min(e, t, n), o = 0, i = 0, a = (r + s) / 2;
  if (r === s)
    i = 0, o = 0;
  else {
    var l = r - s;
    switch (i = a > 0.5 ? l / (2 - r - s) : l / (r + s), r) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / l + 2;
        break;
      case n:
        o = (e - t) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: a };
}
function qa(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function VE(e, t, n) {
  var r, s, o;
  if (e = Tt(e, 360), t = Tt(t, 100), n = Tt(n, 100), t === 0)
    s = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - i;
    r = qa(a, i, e + 1 / 3), s = qa(a, i, e), o = qa(a, i, e - 1 / 3);
  }
  return { r: r * 255, g: s * 255, b: o * 255 };
}
function up(e, t, n) {
  e = Tt(e, 255), t = Tt(t, 255), n = Tt(n, 255);
  var r = Math.max(e, t, n), s = Math.min(e, t, n), o = 0, i = r, a = r - s, l = r === 0 ? 0 : a / r;
  if (r === s)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: i };
}
function UE(e, t, n) {
  e = Tt(e, 360) * 6, t = Tt(t, 100), n = Tt(n, 100);
  var r = Math.floor(e), s = e - r, o = n * (1 - t), i = n * (1 - s * t), a = n * (1 - (1 - s) * t), l = r % 6, u = [n, i, o, o, a, n][l], f = [a, n, n, i, o, o][l], c = [o, o, a, n, n, i][l];
  return { r: u * 255, g: f * 255, b: c * 255 };
}
function fp(e, t, n, r) {
  var s = [
    Ur(Math.round(e).toString(16)),
    Ur(Math.round(t).toString(16)),
    Ur(Math.round(n).toString(16))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function KE(e, t, n, r, s) {
  var o = [
    Ur(Math.round(e).toString(16)),
    Ur(Math.round(t).toString(16)),
    Ur(Math.round(n).toString(16)),
    Ur(GE(r))
  ];
  return s && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function GE(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function dp(e) {
  return en(e) / 255;
}
function en(e) {
  return parseInt(e, 16);
}
function WE(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Mu = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function ZE(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, s = null, o = null, i = !1, a = !1;
  return typeof e == "string" && (e = JE(e)), typeof e == "object" && (Vn(e.r) && Vn(e.g) && Vn(e.b) ? (t = jE(e.r, e.g, e.b), i = !0, a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Vn(e.h) && Vn(e.s) && Vn(e.v) ? (r = Vs(e.s), s = Vs(e.v), t = UE(e.h, r, s), i = !0, a = "hsv") : Vn(e.h) && Vn(e.s) && Vn(e.l) && (r = Vs(e.s), o = Vs(e.l), t = VE(e.h, r, o), i = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Fm(n), {
    ok: i,
    format: e.format || a,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var XE = "[-\\+]?\\d+%?", YE = "[-\\+]?\\d*\\.\\d+%?", xr = "(?:".concat(YE, ")|(?:").concat(XE, ")"), za = "[\\s|\\(]+(".concat(xr, ")[,|\\s]+(").concat(xr, ")[,|\\s]+(").concat(xr, ")\\s*\\)?"), Ha = "[\\s|\\(]+(".concat(xr, ")[,|\\s]+(").concat(xr, ")[,|\\s]+(").concat(xr, ")[,|\\s]+(").concat(xr, ")\\s*\\)?"), bn = {
  CSS_UNIT: new RegExp(xr),
  rgb: new RegExp("rgb" + za),
  rgba: new RegExp("rgba" + Ha),
  hsl: new RegExp("hsl" + za),
  hsla: new RegExp("hsla" + Ha),
  hsv: new RegExp("hsv" + za),
  hsva: new RegExp("hsva" + Ha),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function JE(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Mu[e])
    e = Mu[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = bn.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = bn.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = bn.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = bn.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = bn.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = bn.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = bn.hex8.exec(e), n ? {
    r: en(n[1]),
    g: en(n[2]),
    b: en(n[3]),
    a: dp(n[4]),
    format: t ? "name" : "hex8"
  } : (n = bn.hex6.exec(e), n ? {
    r: en(n[1]),
    g: en(n[2]),
    b: en(n[3]),
    format: t ? "name" : "hex"
  } : (n = bn.hex4.exec(e), n ? {
    r: en(n[1] + n[1]),
    g: en(n[2] + n[2]),
    b: en(n[3] + n[3]),
    a: dp(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = bn.hex3.exec(e), n ? {
    r: en(n[1] + n[1]),
    g: en(n[2] + n[2]),
    b: en(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function Vn(e) {
  return !!bn.CSS_UNIT.exec(String(e));
}
var QE = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = WE(t)), this.originalInput = t;
      var s = ZE(t);
      this.originalInput = t, this.r = s.r, this.g = s.g, this.b = s.b, this.a = s.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : s.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = s.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, s, o = t.r / 255, i = t.g / 255, a = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? s = a / 12.92 : s = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * s;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Fm(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = up(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = up(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), s = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(s, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = cp(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = cp(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), s = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(s, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), fp(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), KE(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(Tt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(Tt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + fp(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Mu); n < r.length; n++) {
        var s = r[n], o = s[0], i = s[1];
        if (t === i)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, s = this.a < 1 && this.a >= 0, o = !n && s && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = js(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = js(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = js(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = js(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), s = new e(t).toRgb(), o = n / 100, i = {
        r: (s.r - r.r) * o + r.r,
        g: (s.g - r.g) * o + r.g,
        b: (s.b - r.b) * o + r.b,
        a: (s.a - r.a) * o + r.a
      };
      return new e(i);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), s = 360 / n, o = [this];
      for (r.h = (r.h - (s * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + s) % 360, o.push(new e(r));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, s = n.s, o = n.v, i = [], a = 1 / t; t--; )
        i.push(new e({ h: r, s, v: o })), o = (o + a) % 1;
      return i;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), s = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / s,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / s,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / s,
        a: s
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, s = [this], o = 360 / t, i = 1; i < t; i++)
        s.push(new e({ h: (r + i * o) % 360, s: n.s, l: n.l }));
      return s;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function gr(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function eS(e) {
  const t = ra(), n = We("button");
  return R(() => {
    let r = {};
    const s = e.color;
    if (s) {
      const o = new QE(s), i = e.dark ? o.tint(20).toString() : gr(o, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? gr(o, 90) : o.tint(90).toString(),
          "text-color": s,
          "border-color": e.dark ? gr(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": s,
          "hover-border-color": s,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? gr(o, 90) : o.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? gr(o, 50) : o.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? gr(o, 80) : o.tint(80).toString());
      else {
        const a = e.dark ? gr(o, 30) : o.tint(30).toString(), l = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": s,
          "text-color": l,
          "border-color": s,
          "hover-bg-color": a,
          "hover-text-color": l,
          "hover-border-color": a,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const u = e.dark ? gr(o, 50) : o.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = u, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return r;
  });
}
const tS = /* @__PURE__ */ ne({
  name: "ElButton"
}), nS = /* @__PURE__ */ ne({
  ...tS,
  props: Tu,
  emits: qE,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = eS(r), o = We("button"), { _ref: i, _size: a, _type: l, _disabled: u, _props: f, shouldAddSpace: c, handleClick: p } = NE(r, n);
    return t({
      ref: i,
      size: a,
      type: l,
      disabled: u,
      shouldAddSpace: c
    }), (d, m) => (w(), le(Rt(d.tag), pt({
      ref_key: "_ref",
      ref: i
    }, b(f), {
      class: [
        b(o).b(),
        b(o).m(b(l)),
        b(o).m(b(a)),
        b(o).is("disabled", b(u)),
        b(o).is("loading", d.loading),
        b(o).is("plain", d.plain),
        b(o).is("round", d.round),
        b(o).is("circle", d.circle),
        b(o).is("text", d.text),
        b(o).is("link", d.link),
        b(o).is("has-bg", d.bg)
      ],
      style: b(s),
      onClick: b(p)
    }), {
      default: fe(() => [
        d.loading ? (w(), A(Ze, { key: 0 }, [
          d.$slots.loading ? _e(d.$slots, "loading", { key: 0 }) : (w(), le(b(Gt), {
            key: 1,
            class: Z(b(o).is("loading"))
          }, {
            default: fe(() => [
              (w(), le(Rt(d.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : d.icon || d.$slots.icon ? (w(), le(b(Gt), { key: 1 }, {
          default: fe(() => [
            d.icon ? (w(), le(Rt(d.icon), { key: 0 })) : _e(d.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : ge("v-if", !0),
        d.$slots.default ? (w(), A("span", {
          key: 2,
          class: Z({ [b(o).em("text", "expand")]: b(c) })
        }, [
          _e(d.$slots, "default")
        ], 2)) : ge("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var rS = /* @__PURE__ */ Ke(nS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const oS = {
  size: Tu.size,
  type: Tu.type
}, sS = /* @__PURE__ */ ne({
  name: "ElButtonGroup"
}), iS = /* @__PURE__ */ ne({
  ...sS,
  props: oS,
  setup(e) {
    const t = e;
    Ut(Bm, Sn({
      size: yn(t, "size"),
      type: yn(t, "type")
    }));
    const n = We("button");
    return (r, s) => (w(), A("div", {
      class: Z(`${b(n).b("group")}`)
    }, [
      _e(r.$slots, "default")
    ], 2));
  }
});
var qm = /* @__PURE__ */ Ke(iS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const pp = An(rS, {
  ButtonGroup: qm
});
xf(qm);
const vr = /* @__PURE__ */ new Map();
let hp;
Dt && (document.addEventListener("mousedown", (e) => hp = e), document.addEventListener("mouseup", (e) => {
  for (const t of vr.values())
    for (const { documentHandler: n } of t)
      n(e, hp);
}));
function gp(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : us(t.arg) && n.push(t.arg), function(r, s) {
    const o = t.instance.popperRef, i = r.target, a = s == null ? void 0 : s.target, l = !t || !t.instance, u = !i || !a, f = e.contains(i) || e.contains(a), c = e === i, p = n.length && n.some((m) => m == null ? void 0 : m.contains(i)) || n.length && n.includes(a), d = o && (o.contains(i) || o.contains(a));
    l || u || f || c || p || d || t.value(r, s);
  };
}
const zm = {
  beforeMount(e, t) {
    vr.has(e) || vr.set(e, []), vr.get(e).push({
      documentHandler: gp(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    vr.has(e) || vr.set(e, []);
    const n = vr.get(e), r = n.findIndex((o) => o.bindingFn === t.oldValue), s = {
      documentHandler: gp(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, s) : n.push(s);
  },
  unmounted(e) {
    vr.delete(e);
  }
}, Hm = et({
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: ws,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), aS = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, lS = /* @__PURE__ */ ne({
  name: "ElTag"
}), cS = /* @__PURE__ */ ne({
  ...lS,
  props: Hm,
  emits: aS,
  setup(e, { emit: t }) {
    const n = e, r = xs(), s = We("tag"), o = R(() => {
      const { type: l, hit: u, effect: f, closable: c, round: p } = n;
      return [
        s.b(),
        s.is("closable", c),
        s.m(l),
        s.m(r.value),
        s.m(f),
        s.is("hit", u),
        s.is("round", p)
      ];
    }), i = (l) => {
      t("close", l);
    }, a = (l) => {
      t("click", l);
    };
    return (l, u) => l.disableTransitions ? (w(), A("span", {
      key: 0,
      class: Z(b(o)),
      style: tt({ backgroundColor: l.color }),
      onClick: a
    }, [
      v("span", {
        class: Z(b(s).e("content"))
      }, [
        _e(l.$slots, "default")
      ], 2),
      l.closable ? (w(), le(b(Gt), {
        key: 0,
        class: Z(b(s).e("close")),
        onClick: nn(i, ["stop"])
      }, {
        default: fe(() => [
          we(b(Su))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : ge("v-if", !0)
    ], 6)) : (w(), le(Jr, {
      key: 1,
      name: `${b(s).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: fe(() => [
        v("span", {
          class: Z(b(o)),
          style: tt({ backgroundColor: l.color }),
          onClick: a
        }, [
          v("span", {
            class: Z(b(s).e("content"))
          }, [
            _e(l.$slots, "default")
          ], 2),
          l.closable ? (w(), le(b(Gt), {
            key: 0,
            class: Z(b(s).e("close")),
            onClick: nn(i, ["stop"])
          }, {
            default: fe(() => [
              we(b(Su))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : ge("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var uS = /* @__PURE__ */ Ke(cS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const fS = An(uS), dS = et({
  color: {
    type: Ie(Object),
    required: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  }
});
let ja = !1;
function gs(e, t) {
  if (!Dt)
    return;
  const n = function(o) {
    var i;
    (i = t.drag) == null || i.call(t, o);
  }, r = function(o) {
    var i;
    document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r), document.removeEventListener("touchmove", n), document.removeEventListener("touchend", r), document.onselectstart = null, document.ondragstart = null, ja = !1, (i = t.end) == null || i.call(t, o);
  }, s = function(o) {
    var i;
    ja || (o.preventDefault(), document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", n), document.addEventListener("mouseup", r), document.addEventListener("touchmove", n), document.addEventListener("touchend", r), ja = !0, (i = t.start) == null || i.call(t, o));
  };
  e.addEventListener("mousedown", s), e.addEventListener("touchstart", s);
}
const pS = (e) => {
  const t = bt(), n = Yn(), r = Yn();
  function s(i) {
    i.target !== n.value && o(i);
  }
  function o(i) {
    if (!r.value || !n.value)
      return;
    const l = t.vnode.el.getBoundingClientRect(), { clientX: u, clientY: f } = bf(i);
    if (e.vertical) {
      let c = f - l.top;
      c = Math.max(n.value.offsetHeight / 2, c), c = Math.min(c, l.height - n.value.offsetHeight / 2), e.color.set("alpha", Math.round((c - n.value.offsetHeight / 2) / (l.height - n.value.offsetHeight) * 100));
    } else {
      let c = u - l.left;
      c = Math.max(n.value.offsetWidth / 2, c), c = Math.min(c, l.width - n.value.offsetWidth / 2), e.color.set("alpha", Math.round((c - n.value.offsetWidth / 2) / (l.width - n.value.offsetWidth) * 100));
    }
  }
  return {
    thumb: n,
    bar: r,
    handleDrag: o,
    handleClick: s
  };
}, hS = (e, {
  bar: t,
  thumb: n,
  handleDrag: r
}) => {
  const s = bt(), o = We("color-alpha-slider"), i = G(0), a = G(0), l = G();
  function u() {
    if (!n.value || e.vertical)
      return 0;
    const k = s.vnode.el, y = e.color.get("alpha");
    return k ? Math.round(y * (k.offsetWidth - n.value.offsetWidth / 2) / 100) : 0;
  }
  function f() {
    if (!n.value)
      return 0;
    const k = s.vnode.el;
    if (!e.vertical)
      return 0;
    const y = e.color.get("alpha");
    return k ? Math.round(y * (k.offsetHeight - n.value.offsetHeight / 2) / 100) : 0;
  }
  function c() {
    if (e.color && e.color.value) {
      const { r: k, g: y, b: _ } = e.color.toRgb();
      return `linear-gradient(to right, rgba(${k}, ${y}, ${_}, 0) 0%, rgba(${k}, ${y}, ${_}, 1) 100%)`;
    }
    return "";
  }
  function p() {
    i.value = u(), a.value = f(), l.value = c();
  }
  rt(() => {
    if (!t.value || !n.value)
      return;
    const k = {
      drag: (y) => {
        r(y);
      },
      end: (y) => {
        r(y);
      }
    };
    gs(t.value, k), gs(n.value, k), p();
  }), Ee(() => e.color.get("alpha"), () => p()), Ee(() => e.color.value, () => p());
  const d = R(() => [o.b(), o.is("vertical", e.vertical)]), m = R(() => o.e("bar")), g = R(() => o.e("thumb")), C = R(() => ({ background: l.value })), h = R(() => ({
    left: wo(i.value),
    top: wo(a.value)
  }));
  return { rootKls: d, barKls: m, barStyle: C, thumbKls: g, thumbStyle: h, update: p };
}, gS = "ElColorAlphaSlider", mS = /* @__PURE__ */ ne({
  name: gS
}), vS = /* @__PURE__ */ ne({
  ...mS,
  props: dS,
  setup(e, { expose: t }) {
    const n = e, { bar: r, thumb: s, handleDrag: o, handleClick: i } = pS(n), { rootKls: a, barKls: l, barStyle: u, thumbKls: f, thumbStyle: c, update: p } = hS(n, {
      bar: r,
      thumb: s,
      handleDrag: o
    });
    return t({
      update: p,
      bar: r,
      thumb: s
    }), (d, m) => (w(), A("div", {
      class: Z(b(a))
    }, [
      v("div", {
        ref_key: "bar",
        ref: r,
        class: Z(b(l)),
        style: tt(b(u)),
        onClick: m[0] || (m[0] = (...g) => b(i) && b(i)(...g))
      }, null, 6),
      v("div", {
        ref_key: "thumb",
        ref: s,
        class: Z(b(f)),
        style: tt(b(c))
      }, null, 6)
    ], 2));
  }
});
var bS = /* @__PURE__ */ Ke(vS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);
const _S = /* @__PURE__ */ ne({
  name: "ElColorHueSlider",
  props: {
    color: {
      type: Object,
      required: !0
    },
    vertical: Boolean
  },
  setup(e) {
    const t = We("color-hue-slider"), n = bt(), r = G(), s = G(), o = G(0), i = G(0), a = R(() => e.color.get("hue"));
    Ee(() => a.value, () => {
      p();
    });
    function l(d) {
      d.target !== r.value && u(d);
    }
    function u(d) {
      if (!s.value || !r.value)
        return;
      const g = n.vnode.el.getBoundingClientRect(), { clientX: C, clientY: h } = bf(d);
      let k;
      if (e.vertical) {
        let y = h - g.top;
        y = Math.min(y, g.height - r.value.offsetHeight / 2), y = Math.max(r.value.offsetHeight / 2, y), k = Math.round((y - r.value.offsetHeight / 2) / (g.height - r.value.offsetHeight) * 360);
      } else {
        let y = C - g.left;
        y = Math.min(y, g.width - r.value.offsetWidth / 2), y = Math.max(r.value.offsetWidth / 2, y), k = Math.round((y - r.value.offsetWidth / 2) / (g.width - r.value.offsetWidth) * 360);
      }
      e.color.set("hue", k);
    }
    function f() {
      if (!r.value)
        return 0;
      const d = n.vnode.el;
      if (e.vertical)
        return 0;
      const m = e.color.get("hue");
      return d ? Math.round(m * (d.offsetWidth - r.value.offsetWidth / 2) / 360) : 0;
    }
    function c() {
      if (!r.value)
        return 0;
      const d = n.vnode.el;
      if (!e.vertical)
        return 0;
      const m = e.color.get("hue");
      return d ? Math.round(m * (d.offsetHeight - r.value.offsetHeight / 2) / 360) : 0;
    }
    function p() {
      o.value = f(), i.value = c();
    }
    return rt(() => {
      if (!s.value || !r.value)
        return;
      const d = {
        drag: (m) => {
          u(m);
        },
        end: (m) => {
          u(m);
        }
      };
      gs(s.value, d), gs(r.value, d), p();
    }), {
      bar: s,
      thumb: r,
      thumbLeft: o,
      thumbTop: i,
      hueValue: a,
      handleClick: l,
      update: p,
      ns: t
    };
  }
});
function yS(e, t, n, r, s, o) {
  return w(), A("div", {
    class: Z([e.ns.b(), e.ns.is("vertical", e.vertical)])
  }, [
    v("div", {
      ref: "bar",
      class: Z(e.ns.e("bar")),
      onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
    }, null, 2),
    v("div", {
      ref: "thumb",
      class: Z(e.ns.e("thumb")),
      style: tt({
        left: e.thumbLeft + "px",
        top: e.thumbTop + "px"
      })
    }, null, 6)
  ], 2);
}
var wS = /* @__PURE__ */ Ke(_S, [["render", yS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);
const kS = et({
  modelValue: String,
  id: String,
  showAlpha: Boolean,
  colorFormat: String,
  disabled: Boolean,
  size: Df,
  popperClass: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  predefine: {
    type: Ie(Array)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), CS = {
  [Kt]: (e) => He(e) || Wr(e),
  [Ef]: (e) => He(e) || Wr(e),
  activeChange: (e) => He(e) || Wr(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent
}, jm = Symbol("colorPickerContextKey"), mp = function(e, t, n) {
  return [
    e,
    t * n / ((e = (2 - t) * n) < 1 ? e : 2 - e) || 0,
    e / 2
  ];
}, xS = function(e) {
  return typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1;
}, ES = function(e) {
  return typeof e == "string" && e.includes("%");
}, vo = function(e, t) {
  xS(e) && (e = "100%");
  const n = ES(e);
  return e = Math.min(t, Math.max(0, Number.parseFloat(`${e}`))), n && (e = Number.parseInt(`${e * t}`, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}, vp = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
}, si = (e) => {
  e = Math.min(Math.round(e), 255);
  const t = Math.floor(e / 16), n = e % 16;
  return `${vp[t] || t}${vp[n] || n}`;
}, bp = function({ r: e, g: t, b: n }) {
  return Number.isNaN(+e) || Number.isNaN(+t) || Number.isNaN(+n) ? "" : `#${si(e)}${si(t)}${si(n)}`;
}, Va = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}, qr = function(e) {
  return e.length === 2 ? (Va[e[0].toUpperCase()] || +e[0]) * 16 + (Va[e[1].toUpperCase()] || +e[1]) : Va[e[1].toUpperCase()] || +e[1];
}, SS = function(e, t, n) {
  t = t / 100, n = n / 100;
  let r = t;
  const s = Math.max(n, 0.01);
  n *= 2, t *= n <= 1 ? n : 2 - n, r *= s <= 1 ? s : 2 - s;
  const o = (n + t) / 2, i = n === 0 ? 2 * r / (s + r) : 2 * t / (n + t);
  return {
    h: e,
    s: i * 100,
    v: o * 100
  };
}, _p = (e, t, n) => {
  e = vo(e, 255), t = vo(t, 255), n = vo(n, 255);
  const r = Math.max(e, t, n), s = Math.min(e, t, n);
  let o;
  const i = r, a = r - s, l = r === 0 ? 0 : a / r;
  if (r === s)
    o = 0;
  else {
    switch (r) {
      case e: {
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      }
      case t: {
        o = (n - e) / a + 2;
        break;
      }
      case n: {
        o = (e - t) / a + 4;
        break;
      }
    }
    o /= 6;
  }
  return { h: o * 360, s: l * 100, v: i * 100 };
}, Bo = function(e, t, n) {
  e = vo(e, 360) * 6, t = vo(t, 100), n = vo(n, 100);
  const r = Math.floor(e), s = e - r, o = n * (1 - t), i = n * (1 - s * t), a = n * (1 - (1 - s) * t), l = r % 6, u = [n, i, o, o, a, n][l], f = [a, n, n, i, o, o][l], c = [o, o, a, n, n, i][l];
  return {
    r: Math.round(u * 255),
    g: Math.round(f * 255),
    b: Math.round(c * 255)
  };
};
class Jo {
  constructor(t = {}) {
    this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this.enableAlpha = !1, this.format = "hex", this.value = "";
    for (const n in t)
      Ue(t, n) && (this[n] = t[n]);
    t.value ? this.fromString(t.value) : this.doOnChange();
  }
  set(t, n) {
    if (arguments.length === 1 && typeof t == "object") {
      for (const r in t)
        Ue(t, r) && this.set(r, t[r]);
      return;
    }
    this[`_${t}`] = n, this.doOnChange();
  }
  get(t) {
    return t === "alpha" ? Math.floor(this[`_${t}`]) : this[`_${t}`];
  }
  toRgb() {
    return Bo(this._hue, this._saturation, this._value);
  }
  fromString(t) {
    if (!t) {
      this._hue = 0, this._saturation = 100, this._value = 100, this.doOnChange();
      return;
    }
    const n = (r, s, o) => {
      this._hue = Math.max(0, Math.min(360, r)), this._saturation = Math.max(0, Math.min(100, s)), this._value = Math.max(0, Math.min(100, o)), this.doOnChange();
    };
    if (t.includes("hsl")) {
      const r = t.replace(/hsla|hsl|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      if (r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3) {
        const { h: s, s: o, v: i } = SS(r[0], r[1], r[2]);
        n(s, o, i);
      }
    } else if (t.includes("hsv")) {
      const r = t.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3 && n(r[0], r[1], r[2]);
    } else if (t.includes("rgb")) {
      const r = t.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      if (r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3) {
        const { h: s, s: o, v: i } = _p(r[0], r[1], r[2]);
        n(s, o, i);
      }
    } else if (t.includes("#")) {
      const r = t.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(r))
        return;
      let s, o, i;
      r.length === 3 ? (s = qr(r[0] + r[0]), o = qr(r[1] + r[1]), i = qr(r[2] + r[2])) : (r.length === 6 || r.length === 8) && (s = qr(r.slice(0, 2)), o = qr(r.slice(2, 4)), i = qr(r.slice(4, 6))), r.length === 8 ? this._alpha = qr(r.slice(6)) / 255 * 100 : (r.length === 3 || r.length === 6) && (this._alpha = 100);
      const { h: a, s: l, v: u } = _p(s, o, i);
      n(a, l, u);
    }
  }
  compare(t) {
    return Math.abs(t._hue - this._hue) < 2 && Math.abs(t._saturation - this._saturation) < 1 && Math.abs(t._value - this._value) < 1 && Math.abs(t._alpha - this._alpha) < 1;
  }
  doOnChange() {
    const { _hue: t, _saturation: n, _value: r, _alpha: s, format: o } = this;
    if (this.enableAlpha)
      switch (o) {
        case "hsl": {
          const i = mp(t, n / 100, r / 100);
          this.value = `hsla(${t}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${t}, ${Math.round(n)}%, ${Math.round(r)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hex": {
          this.value = `${bp(Bo(t, n, r))}${si(s * 255 / 100)}`;
          break;
        }
        default: {
          const { r: i, g: a, b: l } = Bo(t, n, r);
          this.value = `rgba(${i}, ${a}, ${l}, ${this.get("alpha") / 100})`;
        }
      }
    else
      switch (o) {
        case "hsl": {
          const i = mp(t, n / 100, r / 100);
          this.value = `hsl(${t}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${t}, ${Math.round(n)}%, ${Math.round(r)}%)`;
          break;
        }
        case "rgb": {
          const { r: i, g: a, b: l } = Bo(t, n, r);
          this.value = `rgb(${i}, ${a}, ${l})`;
          break;
        }
        default:
          this.value = bp(Bo(t, n, r));
      }
  }
}
const AS = /* @__PURE__ */ ne({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = We("color-predefine"), { currentColor: n } = De(jm), r = G(o(e.colors, e.color));
    Ee(() => n.value, (i) => {
      const a = new Jo();
      a.fromString(i), r.value.forEach((l) => {
        l.selected = a.compare(l);
      });
    }), lf(() => {
      r.value = o(e.colors, e.color);
    });
    function s(i) {
      e.color.fromString(e.colors[i]);
    }
    function o(i, a) {
      return i.map((l) => {
        const u = new Jo();
        return u.enableAlpha = !0, u.format = "rgba", u.fromString(l), u.selected = u.value === a.value, u;
      });
    }
    return {
      rgbaColors: r,
      handleSelect: s,
      ns: t
    };
  }
}), TS = ["onClick"];
function MS(e, t, n, r, s, o) {
  return w(), A("div", {
    class: Z(e.ns.b())
  }, [
    v("div", {
      class: Z(e.ns.e("colors"))
    }, [
      (w(!0), A(Ze, null, Cn(e.rgbaColors, (i, a) => (w(), A("div", {
        key: e.colors[a],
        class: Z([
          e.ns.e("color-selector"),
          e.ns.is("alpha", i._alpha < 100),
          { selected: i.selected }
        ]),
        onClick: (l) => e.handleSelect(a)
      }, [
        v("div", {
          style: tt({ backgroundColor: i.value })
        }, null, 4)
      ], 10, TS))), 128))
    ], 2)
  ], 2);
}
var $S = /* @__PURE__ */ Ke(AS, [["render", MS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);
const LS = /* @__PURE__ */ ne({
  name: "ElSlPanel",
  props: {
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = We("color-svpanel"), n = bt(), r = G(0), s = G(0), o = G("hsl(0, 100%, 50%)"), i = R(() => {
      const u = e.color.get("hue"), f = e.color.get("value");
      return { hue: u, value: f };
    });
    function a() {
      const u = e.color.get("saturation"), f = e.color.get("value"), c = n.vnode.el, { clientWidth: p, clientHeight: d } = c;
      s.value = u * p / 100, r.value = (100 - f) * d / 100, o.value = `hsl(${e.color.get("hue")}, 100%, 50%)`;
    }
    function l(u) {
      const c = n.vnode.el.getBoundingClientRect(), { clientX: p, clientY: d } = bf(u);
      let m = p - c.left, g = d - c.top;
      m = Math.max(0, m), m = Math.min(m, c.width), g = Math.max(0, g), g = Math.min(g, c.height), s.value = m, r.value = g, e.color.set({
        saturation: m / c.width * 100,
        value: 100 - g / c.height * 100
      });
    }
    return Ee(() => i.value, () => {
      a();
    }), rt(() => {
      gs(n.vnode.el, {
        drag: (u) => {
          l(u);
        },
        end: (u) => {
          l(u);
        }
      }), a();
    }), {
      cursorTop: r,
      cursorLeft: s,
      background: o,
      colorValue: i,
      handleDrag: l,
      update: a,
      ns: t
    };
  }
}), IS = /* @__PURE__ */ v("div", null, null, -1), OS = [
  IS
];
function RS(e, t, n, r, s, o) {
  return w(), A("div", {
    class: Z(e.ns.b()),
    style: tt({
      backgroundColor: e.background
    })
  }, [
    v("div", {
      class: Z(e.ns.e("white"))
    }, null, 2),
    v("div", {
      class: Z(e.ns.e("black"))
    }, null, 2),
    v("div", {
      class: Z(e.ns.e("cursor")),
      style: tt({
        top: e.cursorTop + "px",
        left: e.cursorLeft + "px"
      })
    }, OS, 6)
  ], 6);
}
var PS = /* @__PURE__ */ Ke(LS, [["render", RS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);
const DS = ["onKeydown"], NS = ["id", "aria-label", "aria-labelledby", "aria-description", "aria-disabled", "tabindex"], BS = /* @__PURE__ */ ne({
  name: "ElColorPicker"
}), FS = /* @__PURE__ */ ne({
  ...BS,
  props: kS,
  emits: CS,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: s } = Tn(), o = We("color"), { formItem: i } = oa(), a = xs(), l = ra(), { inputId: u, isLabeledByFormItem: f } = Mm(r, {
      formItemContext: i
    }), c = G(), p = G(), d = G(), m = G(), g = G(), C = G(), {
      isFocused: h,
      handleFocus: k,
      handleBlur: y
    } = Tm(g, {
      beforeBlur(me) {
        var Re;
        return (Re = m.value) == null ? void 0 : Re.isFocusInsideContent(me);
      },
      afterBlur() {
        q(!1), te();
      }
    }), _ = (me) => {
      if (l.value)
        return Yt();
      k(me);
    };
    let S = !0;
    const x = Sn(new Jo({
      enableAlpha: r.showAlpha,
      format: r.colorFormat || "",
      value: r.modelValue
    })), T = G(!1), $ = G(!1), I = G(""), P = R(() => !r.modelValue && !$.value ? "transparent" : U(x, r.showAlpha)), N = R(() => !r.modelValue && !$.value ? "" : x.value), D = R(() => f.value ? void 0 : r.label || s("el.colorpicker.defaultLabel")), oe = R(() => f.value ? i == null ? void 0 : i.labelId : void 0), F = R(() => [
      o.b("picker"),
      o.is("disabled", l.value),
      o.bm("picker", a.value),
      o.is("focused", h.value)
    ]);
    function U(me, Re) {
      if (!(me instanceof Jo))
        throw new TypeError("color should be instance of _color Class");
      const { r: M, g: L, b: j } = me.toRgb();
      return Re ? `rgba(${M}, ${L}, ${j}, ${me.get("alpha") / 100})` : `rgb(${M}, ${L}, ${j})`;
    }
    function q(me) {
      T.value = me;
    }
    const z = xu(q, 100, { leading: !0 });
    function H() {
      l.value || q(!0);
    }
    function Q() {
      z(!1), te();
    }
    function te() {
      ze(() => {
        r.modelValue ? x.fromString(r.modelValue) : (x.value = "", ze(() => {
          $.value = !1;
        }));
      });
    }
    function Ae() {
      l.value || z(!T.value);
    }
    function ve() {
      x.fromString(I.value);
    }
    function Ne() {
      const me = x.value;
      n(Kt, me), n("change", me), r.validateEvent && (i == null || i.validate("change").catch((Re) => void 0)), z(!1), ze(() => {
        const Re = new Jo({
          enableAlpha: r.showAlpha,
          format: r.colorFormat || "",
          value: r.modelValue
        });
        x.compare(Re) || te();
      });
    }
    function Je() {
      z(!1), n(Kt, null), n("change", null), r.modelValue !== null && r.validateEvent && (i == null || i.validate("change").catch((me) => void 0)), te();
    }
    function nt(me) {
      if (T.value && (Q(), h.value)) {
        const Re = new FocusEvent("focus", me);
        y(Re);
      }
    }
    function ft(me) {
      me.preventDefault(), me.stopPropagation(), q(!1), te();
    }
    function ht(me) {
      switch (me.code) {
        case Qn.enter:
        case Qn.space:
          me.preventDefault(), me.stopPropagation(), H(), C.value.focus();
          break;
        case Qn.esc:
          ft(me);
          break;
      }
    }
    function ct() {
      g.value.focus();
    }
    function Yt() {
      g.value.blur();
    }
    return rt(() => {
      r.modelValue && (I.value = N.value);
    }), Ee(() => r.modelValue, (me) => {
      me ? me && me !== x.value && (S = !1, x.fromString(me)) : $.value = !1;
    }), Ee(() => N.value, (me) => {
      I.value = me, S && n("activeChange", me), S = !0;
    }), Ee(() => x.value, () => {
      !r.modelValue && !$.value && ($.value = !0);
    }), Ee(() => T.value, () => {
      ze(() => {
        var me, Re, M;
        (me = c.value) == null || me.update(), (Re = p.value) == null || Re.update(), (M = d.value) == null || M.update();
      });
    }), Ut(jm, {
      currentColor: N
    }), t({
      color: x,
      show: H,
      hide: Q,
      focus: ct,
      blur: Yt
    }), (me, Re) => (w(), le(b(hs), {
      ref_key: "popper",
      ref: m,
      visible: T.value,
      "show-arrow": !1,
      "fallback-placements": ["bottom", "top", "right", "left"],
      offset: 0,
      "gpu-acceleration": !1,
      "popper-class": [b(o).be("picker", "panel"), b(o).b("dropdown"), me.popperClass],
      "stop-popper-mouse-event": !1,
      effect: "light",
      trigger: "click",
      transition: `${b(o).namespace.value}-zoom-in-top`,
      persistent: "",
      onHide: Re[2] || (Re[2] = (M) => q(!1))
    }, {
      content: fe(() => [
        Vt((w(), A("div", {
          onKeydown: qt(ft, ["esc"])
        }, [
          v("div", {
            class: Z(b(o).be("dropdown", "main-wrapper"))
          }, [
            we(wS, {
              ref_key: "hue",
              ref: c,
              class: "hue-slider",
              color: b(x),
              vertical: ""
            }, null, 8, ["color"]),
            we(PS, {
              ref_key: "sv",
              ref: p,
              color: b(x)
            }, null, 8, ["color"])
          ], 2),
          me.showAlpha ? (w(), le(bS, {
            key: 0,
            ref_key: "alpha",
            ref: d,
            color: b(x)
          }, null, 8, ["color"])) : ge("v-if", !0),
          me.predefine ? (w(), le($S, {
            key: 1,
            ref: "predefine",
            color: b(x),
            colors: me.predefine
          }, null, 8, ["color", "colors"])) : ge("v-if", !0),
          v("div", {
            class: Z(b(o).be("dropdown", "btns"))
          }, [
            v("span", {
              class: Z(b(o).be("dropdown", "value"))
            }, [
              we(b(sa), {
                ref_key: "inputRef",
                ref: C,
                modelValue: I.value,
                "onUpdate:modelValue": Re[0] || (Re[0] = (M) => I.value = M),
                "validate-event": !1,
                size: "small",
                onKeyup: qt(ve, ["enter"]),
                onBlur: ve
              }, null, 8, ["modelValue", "onKeyup"])
            ], 2),
            we(b(pp), {
              class: Z(b(o).be("dropdown", "link-btn")),
              text: "",
              size: "small",
              onClick: Je
            }, {
              default: fe(() => [
                Yr(Ge(b(s)("el.colorpicker.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            we(b(pp), {
              plain: "",
              size: "small",
              class: Z(b(o).be("dropdown", "btn")),
              onClick: Ne
            }, {
              default: fe(() => [
                Yr(Ge(b(s)("el.colorpicker.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ], 2)
        ], 40, DS)), [
          [b(zm), nt]
        ])
      ]),
      default: fe(() => [
        v("div", {
          id: b(u),
          ref_key: "triggerRef",
          ref: g,
          class: Z(b(F)),
          role: "button",
          "aria-label": b(D),
          "aria-labelledby": b(oe),
          "aria-description": b(s)("el.colorpicker.description", { color: me.modelValue || "" }),
          "aria-disabled": b(l),
          tabindex: b(l) ? -1 : me.tabindex,
          onKeydown: ht,
          onFocus: _,
          onBlur: Re[1] || (Re[1] = (...M) => b(y) && b(y)(...M))
        }, [
          b(l) ? (w(), A("div", {
            key: 0,
            class: Z(b(o).be("picker", "mask"))
          }, null, 2)) : ge("v-if", !0),
          v("div", {
            class: Z(b(o).be("picker", "trigger")),
            onClick: Ae
          }, [
            v("span", {
              class: Z([b(o).be("picker", "color"), b(o).is("alpha", me.showAlpha)])
            }, [
              v("span", {
                class: Z(b(o).be("picker", "color-inner")),
                style: tt({
                  backgroundColor: b(P)
                })
              }, [
                Vt(we(b(Gt), {
                  class: Z([b(o).be("picker", "icon"), b(o).is("icon-arrow-down")])
                }, {
                  default: fe(() => [
                    we(b(am))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [tr, me.modelValue || $.value]
                ]),
                Vt(we(b(Gt), {
                  class: Z([b(o).be("picker", "empty"), b(o).is("icon-close")])
                }, {
                  default: fe(() => [
                    we(b(Su))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [tr, !me.modelValue && !$.value]
                ])
              ], 6)
            ], 2)
          ], 2)
        ], 42, NS)
      ]),
      _: 1
    }, 8, ["visible", "popper-class", "transition"]));
  }
});
var qS = /* @__PURE__ */ Ke(FS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]]);
const zS = An(qS), HS = /* @__PURE__ */ ne({
  inheritAttrs: !1
});
function jS(e, t, n, r, s, o) {
  return _e(e.$slots, "default");
}
var VS = /* @__PURE__ */ Ke(HS, [["render", jS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const US = /* @__PURE__ */ ne({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function KS(e, t, n, r, s, o) {
  return _e(e.$slots, "default");
}
var GS = /* @__PURE__ */ Ke(US, [["render", KS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const WS = "data-el-collection-item", ZS = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), s = Symbol(n), o = {
    ...VS,
    name: t,
    setup() {
      const a = G(null), l = /* @__PURE__ */ new Map();
      Ut(r, {
        itemMap: l,
        getItems: () => {
          const f = b(a);
          if (!f)
            return [];
          const c = Array.from(f.querySelectorAll(`[${WS}]`));
          return [...l.values()].sort((d, m) => c.indexOf(d.ref) - c.indexOf(m.ref));
        },
        collectionRef: a
      });
    }
  }, i = {
    ...GS,
    name: n,
    setup(a, { attrs: l }) {
      const u = G(null), f = De(r, void 0);
      Ut(s, {
        collectionItemRef: u
      }), rt(() => {
        const c = b(u);
        c && f.itemMap.set(c, {
          ref: c,
          ...l
        });
      }), Xt(() => {
        const c = b(u);
        f.itemMap.delete(c);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: s,
    ElCollection: o,
    ElCollectionItem: i
  };
}, Ua = et({
  trigger: ps.trigger,
  effect: {
    ...tn.effect,
    default: "light"
  },
  type: {
    type: Ie(String)
  },
  placement: {
    type: Ie(String),
    default: "bottom"
  },
  popperOptions: {
    type: Ie(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: Ie([Number, String]),
    default: 0
  },
  maxHeight: {
    type: Ie([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: Ie(Object)
  },
  teleported: tn.teleported
});
et({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: En
  }
});
et({
  onKeydown: { type: Ie(Function) }
});
ZS("Dropdown");
const Vm = Symbol("elPaginationKey"), XS = et({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: En
  }
}), YS = {
  click: (e) => e instanceof MouseEvent
}, JS = ["disabled", "aria-label", "aria-disabled"], QS = { key: 0 }, eA = /* @__PURE__ */ ne({
  name: "ElPaginationPrev"
}), tA = /* @__PURE__ */ ne({
  ...eA,
  props: XS,
  emits: YS,
  setup(e) {
    const t = e, { t: n } = Tn(), r = R(() => t.disabled || t.currentPage <= 1);
    return (s, o) => (w(), A("button", {
      type: "button",
      class: "btn-prev",
      disabled: b(r),
      "aria-label": s.prevText || b(n)("el.pagination.prev"),
      "aria-disabled": b(r),
      onClick: o[0] || (o[0] = (i) => s.$emit("click", i))
    }, [
      s.prevText ? (w(), A("span", QS, Ge(s.prevText), 1)) : (w(), le(b(Gt), { key: 1 }, {
        default: fe(() => [
          (w(), le(Rt(s.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, JS));
  }
});
var nA = /* @__PURE__ */ Ke(tA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const rA = et({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: En
  }
}), oA = ["disabled", "aria-label", "aria-disabled"], sA = { key: 0 }, iA = /* @__PURE__ */ ne({
  name: "ElPaginationNext"
}), aA = /* @__PURE__ */ ne({
  ...iA,
  props: rA,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = Tn(), r = R(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (s, o) => (w(), A("button", {
      type: "button",
      class: "btn-next",
      disabled: b(r),
      "aria-label": s.nextText || b(n)("el.pagination.next"),
      "aria-disabled": b(r),
      onClick: o[0] || (o[0] = (i) => s.$emit("click", i))
    }, [
      s.nextText ? (w(), A("span", sA, Ge(s.nextText), 1)) : (w(), le(b(Gt), { key: 1 }, {
        default: fe(() => [
          (w(), le(Rt(s.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, oA));
  }
});
var lA = /* @__PURE__ */ Ke(aA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const Um = Symbol("ElSelectGroup"), aa = Symbol("ElSelect");
function cA(e, t) {
  const n = De(aa), r = De(Um, { disabled: !1 }), s = R(() => Pe(e.value)), o = R(() => n.props.multiple ? c(n.props.modelValue, e.value) : p(e.value, n.props.modelValue)), i = R(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = R(() => e.label || (s.value ? "" : e.value)), l = R(() => e.value || e.label || ""), u = R(() => e.disabled || t.groupDisabled || i.value), f = bt(), c = (g = [], C) => {
    if (s.value) {
      const h = n.props.valueKey;
      return g && g.some((k) => Fe(rn(k, h)) === rn(C, h));
    } else
      return g && g.includes(C);
  }, p = (g, C) => {
    if (s.value) {
      const { valueKey: h } = n.props;
      return rn(g, h) === rn(C, h);
    } else
      return g === C;
  }, d = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  Ee(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), Ee(() => e.value, (g, C) => {
    const { remote: h, valueKey: k } = n.props;
    if (Object.is(g, C) || (n.onOptionDestroy(C, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !h) {
      if (k && Pe(g) && Pe(C) && g[k] === C[k])
        return;
      n.setSelected();
    }
  }), Ee(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: m } = Fe(n);
  return Ee(m, (g) => {
    const { query: C } = b(g), h = new RegExp(Yx(C), "i");
    t.visible = h.test(a.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: l,
    itemSelected: o,
    isDisabled: u,
    hoverItem: d
  };
}
const uA = /* @__PURE__ */ ne({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: Boolean
  },
  setup(e) {
    const t = We("select"), n = na(), r = R(() => [
      t.be("dropdown", "item"),
      t.is("disabled", b(a)),
      {
        selected: b(i),
        hover: b(c)
      }
    ]), s = Sn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: i, isDisabled: a, select: l, hoverItem: u } = cA(e, s), { visible: f, hover: c } = Bi(s), p = bt().proxy;
    l.onOptionCreate(p), Xt(() => {
      const m = p.value, { selected: g } = l, h = (l.props.multiple ? g : [g]).some((k) => k.value === p.value);
      ze(() => {
        l.cachedOptions.get(m) === p && !h && l.cachedOptions.delete(m);
      }), l.onOptionDestroy(m, p);
    });
    function d() {
      e.disabled !== !0 && s.groupDisabled !== !0 && l.handleOptionSelect(p);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: o,
      itemSelected: i,
      isDisabled: a,
      select: l,
      hoverItem: u,
      visible: f,
      hover: c,
      selectOptionClick: d,
      states: s
    };
  }
}), fA = ["id", "aria-disabled", "aria-selected"];
function dA(e, t, n, r, s, o) {
  return Vt((w(), A("li", {
    id: e.id,
    class: Z(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = nn((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    _e(e.$slots, "default", {}, () => [
      v("span", null, Ge(e.currentLabel), 1)
    ])
  ], 42, fA)), [
    [tr, e.visible]
  ]);
}
var Hf = /* @__PURE__ */ Ke(uA, [["render", dA], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const pA = /* @__PURE__ */ ne({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = De(aa), t = We("select"), n = R(() => e.props.popperClass), r = R(() => e.props.multiple), s = R(() => e.props.fitInputWidth), o = G("");
    function i() {
      var a;
      o.value = `${(a = e.selectWrapper) == null ? void 0 : a.offsetWidth}px`;
    }
    return rt(() => {
      i(), Gi(e.selectWrapper, i);
    }), {
      ns: t,
      minWidth: o,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: s
    };
  }
});
function hA(e, t, n, r, s, o) {
  return w(), A("div", {
    class: Z([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: tt({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (w(), A("div", {
      key: 0,
      class: Z(e.ns.be("dropdown", "header"))
    }, [
      _e(e.$slots, "header")
    ], 2)) : ge("v-if", !0),
    _e(e.$slots, "default"),
    e.$slots.footer ? (w(), A("div", {
      key: 1,
      class: Z(e.ns.be("dropdown", "footer"))
    }, [
      _e(e.$slots, "footer")
    ], 2)) : ge("v-if", !0)
  ], 6);
}
var gA = /* @__PURE__ */ Ke(pA, [["render", hA], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function mA(e) {
  const { t } = Tn();
  return Sn({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    disabledOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1,
    focused: !1
  });
}
const vA = (e, t, n) => {
  const { t: r } = Tn(), s = We("select");
  dm({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, R(() => e.suffixTransition === !1));
  const o = G(null), i = G(null), a = G(null), l = G(null), u = G(null), f = G(null), c = G(null), p = G(null), d = G(), m = Yn({ query: "" }), g = Yn(""), C = G([]);
  let h = 0;
  const { form: k, formItem: y } = oa(), _ = R(() => !e.filterable || e.multiple || !t.visible), S = R(() => e.disabled || (k == null ? void 0 : k.disabled)), x = R(() => {
    const B = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !S.value && t.inputHovering && B;
  }), T = R(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), $ = R(() => s.is("reverse", T.value && t.visible && e.suffixTransition)), I = R(() => (k == null ? void 0 : k.statusIcon) && (y == null ? void 0 : y.validateState) && um[y == null ? void 0 : y.validateState]), P = R(() => e.remote ? 300 : 0), N = R(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), D = R(() => {
    const B = Array.from(t.options.values()), E = [];
    return C.value.forEach((O) => {
      const K = B.findIndex((ye) => ye.currentLabel === O);
      K > -1 && E.push(B[K]);
    }), E.length >= B.length ? E : B;
  }), oe = R(() => Array.from(t.cachedOptions.values())), F = R(() => {
    const B = D.value.filter((E) => !E.created).some((E) => E.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !B;
  }), U = xs(), q = R(() => ["small"].includes(U.value) ? "small" : "default"), z = R({
    get() {
      return t.visible && N.value !== !1;
    },
    set(B) {
      t.visible = B;
    }
  });
  Ee([() => S.value, () => U.value, () => k == null ? void 0 : k.size], () => {
    ze(() => {
      H();
    });
  }), Ee(() => e.placeholder, (B) => {
    t.cachedPlaceHolder = t.currentPlaceholder = B, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), Ee(() => e.modelValue, (B, E) => {
    e.multiple && (H(), B && B.length > 0 || i.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", Q(t.query))), ve(), e.filterable && !e.multiple && (t.inputLength = 20), !Eu(B, E) && e.validateEvent && (y == null || y.validate("change").catch((O) => void 0));
  }, {
    flush: "post",
    deep: !0
  }), Ee(() => t.visible, (B) => {
    var E, O, K, ye, Be;
    B ? ((O = (E = l.value) == null ? void 0 : E.updatePopper) == null || O.call(E), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (ye = (K = a.value) == null ? void 0 : K.focus) == null || ye.call(K), e.multiple ? (Be = i.value) == null || Be.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), Q(t.query), !e.multiple && !e.remote && (m.value.query = "", Io(m), Io(g)))) : (e.filterable && (Ce(e.filterMethod) && e.filterMethod(""), Ce(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, Je(), ze(() => {
      i.value && i.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", B);
  }), Ee(() => t.options.entries(), () => {
    var B, E, O;
    if (!Dt)
      return;
    (E = (B = l.value) == null ? void 0 : B.updatePopper) == null || E.call(B), e.multiple && H();
    const K = ((O = c.value) == null ? void 0 : O.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !im(e.modelValue) || !Array.from(K).includes(document.activeElement)) && ve(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && Ae();
  }, {
    flush: "post"
  }), Ee(() => t.hoverIndex, (B) => {
    mt(B) && B > -1 ? d.value = D.value[B] || {} : d.value = {}, D.value.forEach((E) => {
      E.hover = d.value === E;
    });
  });
  const H = () => {
    ze(() => {
      var B, E;
      if (!o.value)
        return;
      const O = o.value.$el.querySelector("input");
      h = h || (O.clientHeight > 0 ? O.clientHeight + 2 : 0);
      const K = f.value, ye = getComputedStyle(O).getPropertyValue(s.cssVarName("input-height")), Be = Number.parseFloat(ye) || C8(U.value || (k == null ? void 0 : k.size)), je = U.value || Be === h || h <= 0 ? Be : h;
      !(O.offsetParent === null) && (O.style.height = `${(t.selected.length === 0 ? je : Math.max(K ? K.clientHeight + (K.clientHeight > je ? 6 : 0) : 0, je)) - 2}px`), t.visible && N.value !== !1 && ((E = (B = l.value) == null ? void 0 : B.updatePopper) == null || E.call(B));
    });
  }, Q = async (B) => {
    if (!(t.previousQuery === B || t.isOnComposition)) {
      if (t.previousQuery === null && (Ce(e.filterMethod) || Ce(e.remoteMethod))) {
        t.previousQuery = B;
        return;
      }
      t.previousQuery = B, ze(() => {
        var E, O;
        t.visible && ((O = (E = l.value) == null ? void 0 : E.updatePopper) == null || O.call(E));
      }), t.hoverIndex = -1, e.multiple && e.filterable && ze(() => {
        if (!S.value) {
          const E = i.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, E) : E, te();
        }
        H();
      }), e.remote && Ce(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(B)) : Ce(e.filterMethod) ? (e.filterMethod(B), Io(g)) : (t.filteredOptionsCount = t.optionsCount, m.value.query = B, Io(m), Io(g)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await ze(), Ae());
    }
  }, te = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = i.value.value ? "" : t.cachedPlaceHolder);
  }, Ae = () => {
    const B = D.value.filter((K) => K.visible && !K.disabled && !K.states.groupDisabled), E = B.find((K) => K.created), O = B[0];
    t.hoverIndex = W(D.value, E || O);
  }, ve = () => {
    var B;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const O = Ne(e.modelValue);
      (B = O.props) != null && B.created ? (t.createdLabel = O.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = O.currentLabel, t.selected = O, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const E = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((O) => {
      E.push(Ne(O));
    }), t.selected = E, ze(() => {
      H();
    });
  }, Ne = (B) => {
    let E;
    const O = Js(B).toLowerCase() === "object", K = Js(B).toLowerCase() === "null", ye = Js(B).toLowerCase() === "undefined";
    for (let he = t.cachedOptions.size - 1; he >= 0; he--) {
      const ue = oe.value[he];
      if (O ? rn(ue.value, e.valueKey) === rn(B, e.valueKey) : ue.value === B) {
        E = {
          value: B,
          currentLabel: ue.currentLabel,
          isDisabled: ue.isDisabled
        };
        break;
      }
    }
    if (E)
      return E;
    const Be = O ? B.label : !K && !ye ? B : "", je = {
      value: B,
      currentLabel: Be
    };
    return e.multiple && (je.hitState = !1), je;
  }, Je = () => {
    setTimeout(() => {
      const B = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((E) => D.value.findIndex((O) => rn(O, B) === rn(E, B)))) : t.hoverIndex = -1 : t.hoverIndex = D.value.findIndex((E) => an(E) === an(t.selected));
    }, 300);
  }, nt = () => {
    var B, E;
    ft(), (E = (B = l.value) == null ? void 0 : B.updatePopper) == null || E.call(B), e.multiple && H();
  }, ft = () => {
    var B;
    t.inputWidth = (B = o.value) == null ? void 0 : B.$el.offsetWidth;
  }, ht = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, Q(t.query));
  }, ct = xu(() => {
    ht();
  }, P.value), Yt = xu((B) => {
    Q(B.target.value);
  }, P.value), me = (B) => {
    Eu(e.modelValue, B) || n.emit(Ef, B);
  }, Re = (B) => Wx(B, (E) => !t.disabledOptions.has(E)), M = (B) => {
    if (B.code !== Qn.delete) {
      if (B.target.value.length <= 0 && !be()) {
        const E = e.modelValue.slice(), O = Re(E);
        if (O < 0)
          return;
        E.splice(O, 1), n.emit(Kt, E), me(E);
      }
      B.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, L = (B, E) => {
    const O = t.selected.indexOf(E);
    if (O > -1 && !S.value) {
      const K = e.modelValue.slice();
      K.splice(O, 1), n.emit(Kt, K), me(K), n.emit("remove-tag", E.value);
    }
    B.stopPropagation(), ie();
  }, j = (B) => {
    B.stopPropagation();
    const E = e.multiple ? [] : "";
    if (!He(E))
      for (const O of t.selected)
        O.isDisabled && E.push(O.value);
    n.emit(Kt, E), me(E), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), ie();
  }, J = (B) => {
    var E;
    if (e.multiple) {
      const O = (e.modelValue || []).slice(), K = W(O, B.value);
      K > -1 ? O.splice(K, 1) : (e.multipleLimit <= 0 || O.length < e.multipleLimit) && O.push(B.value), n.emit(Kt, O), me(O), B.created && (t.query = "", Q(""), t.inputLength = 20), e.filterable && ((E = i.value) == null || E.focus());
    } else
      n.emit(Kt, B.value), me(B.value), t.visible = !1;
    X(), !t.visible && ze(() => {
      se(B);
    });
  }, W = (B = [], E) => {
    if (!Pe(E))
      return B.indexOf(E);
    const O = e.valueKey;
    let K = -1;
    return B.some((ye, Be) => Fe(rn(ye, O)) === rn(E, O) ? (K = Be, !0) : !1), K;
  }, X = () => {
    const B = i.value || o.value;
    B && (B == null || B.focus());
  }, se = (B) => {
    var E, O, K, ye, Be;
    const je = Array.isArray(B) ? B[0] : B;
    let he = null;
    if (je != null && je.value) {
      const ue = D.value.filter((Te) => Te.value === je.value);
      ue.length > 0 && (he = ue[0].$el);
    }
    if (l.value && he) {
      const ue = (ye = (K = (O = (E = l.value) == null ? void 0 : E.popperRef) == null ? void 0 : O.contentRef) == null ? void 0 : K.querySelector) == null ? void 0 : ye.call(K, `.${s.be("dropdown", "wrap")}`);
      ue && e8(ue, he);
    }
    (Be = p.value) == null || Be.handleScroll();
  }, re = (B) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(B.value, B), t.cachedOptions.set(B.value, B), B.disabled && t.disabledOptions.set(B.value, B);
  }, ee = (B, E) => {
    t.options.get(B) === E && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(B));
  }, Y = (B) => {
    B.code !== Qn.backspace && be(!1), t.inputLength = i.value.value.length * 15 + 20, H();
  }, be = (B) => {
    if (!Array.isArray(t.selected))
      return;
    const E = Re(t.selected.map((K) => K.value)), O = t.selected[E];
    if (O)
      return B === !0 || B === !1 ? (O.hitState = B, B) : (O.hitState = !O.hitState, O.hitState);
  }, ce = (B) => {
    const E = B.target.value;
    if (B.type === "compositionend")
      t.isOnComposition = !1, ze(() => Q(E));
    else {
      const O = E[E.length - 1] || "";
      t.isOnComposition = !fm(O);
    }
  }, pe = () => {
    ze(() => se(t.selected));
  }, V = (B) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", B));
  }, ie = () => {
    var B, E;
    t.visible ? (B = i.value || o.value) == null || B.focus() : (E = o.value) == null || E.focus();
  }, xe = () => {
    var B, E, O;
    t.visible = !1, (B = o.value) == null || B.blur(), (O = (E = a.value) == null ? void 0 : E.blur) == null || O.call(E);
  }, $e = (B) => {
    var E, O, K;
    (E = l.value) != null && E.isFocusInsideContent(B) || (O = u.value) != null && O.isFocusInsideContent(B) || (K = c.value) != null && K.contains(B.relatedTarget) || (t.visible && dt(), t.focused = !1, n.emit("blur", B));
  }, it = (B) => {
    j(B);
  }, dt = () => {
    t.visible = !1;
  }, wt = (B) => {
    t.visible && (B.preventDefault(), B.stopPropagation(), t.visible = !1);
  }, xt = (B) => {
    B && !t.mouseEnter || S.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!l.value || !l.value.isFocusInsideContent()) && (t.visible = !t.visible), ie());
  }, gn = () => {
    t.visible ? D.value[t.hoverIndex] && J(D.value[t.hoverIndex]) : xt();
  }, an = (B) => Pe(B.value) ? rn(B.value, e.valueKey) : B.value, gt = R(() => D.value.filter((B) => B.visible).every((B) => B.disabled)), Mt = R(() => e.multiple ? t.selected.slice(0, e.maxCollapseTags) : []), $n = R(() => e.multiple ? t.selected.slice(e.maxCollapseTags) : []), ur = (B) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !gt.value) {
      B === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : B === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const E = D.value[t.hoverIndex];
      (E.disabled === !0 || E.states.groupDisabled === !0 || !E.visible) && ur(B), ze(() => se(d.value));
    }
  }, to = () => {
    t.mouseEnter = !0;
  }, Or = () => {
    t.mouseEnter = !1;
  }, $o = (B, E) => {
    var O, K;
    L(B, E), (K = (O = u.value) == null ? void 0 : O.updatePopper) == null || K.call(O);
  }, no = R(() => ({
    maxWidth: `${b(t.inputWidth) - 32 - (I.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: C,
    optionsArray: D,
    hoverOption: d,
    selectSize: U,
    handleResize: nt,
    debouncedOnInputChange: ct,
    debouncedQueryChange: Yt,
    deletePrevTag: M,
    deleteTag: L,
    deleteSelected: j,
    handleOptionSelect: J,
    scrollToOption: se,
    readonly: _,
    resetInputHeight: H,
    showClose: x,
    iconComponent: T,
    iconReverse: $,
    showNewOption: F,
    collapseTagSize: q,
    setSelected: ve,
    managePlaceholder: te,
    selectDisabled: S,
    emptyText: N,
    toggleLastOptionHitState: be,
    resetInputState: Y,
    handleComposition: ce,
    onOptionCreate: re,
    onOptionDestroy: ee,
    handleMenuEnter: pe,
    handleFocus: V,
    focus: ie,
    blur: xe,
    handleBlur: $e,
    handleClearClick: it,
    handleClose: dt,
    handleKeydownEscape: wt,
    toggleMenu: xt,
    selectOption: gn,
    getValueKey: an,
    navigateOptions: ur,
    handleDeleteTooltipTag: $o,
    dropMenuVisible: z,
    queryChange: m,
    groupQueryChange: g,
    showTagList: Mt,
    collapseTagList: $n,
    selectTagsStyle: no,
    reference: o,
    input: i,
    iOSInput: a,
    tooltipRef: l,
    tagTooltipRef: u,
    tags: f,
    selectWrapper: c,
    scrollbar: p,
    handleMouseEnter: to,
    handleMouseLeave: Or
  };
};
var bA = /* @__PURE__ */ ne({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let r = [];
    function s(o, i) {
      if (o.length !== i.length)
        return !1;
      for (const [a] of o.entries())
        if (o[a] != i[a])
          return !1;
      return !0;
    }
    return () => {
      var o, i;
      const a = (o = t.default) == null ? void 0 : o.call(t), l = [];
      function u(f) {
        Array.isArray(f) && f.forEach((c) => {
          var p, d, m, g;
          const C = (p = (c == null ? void 0 : c.type) || {}) == null ? void 0 : p.name;
          C === "ElOptionGroup" ? u(!He(c.children) && !Array.isArray(c.children) && Ce((d = c.children) == null ? void 0 : d.default) ? (m = c.children) == null ? void 0 : m.default() : c.children) : C === "ElOption" ? l.push((g = c.props) == null ? void 0 : g.label) : Array.isArray(c.children) && u(c.children);
        });
      }
      return a.length && u((i = a[0]) == null ? void 0 : i.children), s(l, r) || (r = l, n("update-options", l)), a;
    };
  }
});
const yp = "ElSelect", _A = /* @__PURE__ */ ne({
  name: yp,
  componentName: yp,
  components: {
    ElInput: sa,
    ElSelectMenu: gA,
    ElOption: Hf,
    ElOptions: bA,
    ElTag: fS,
    ElScrollbar: O9,
    ElTooltip: hs,
    ElIcon: Gt
  },
  directives: { ClickOutside: zm },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: x8
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: Boolean,
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: tn.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: En,
      default: Cf
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: En,
      default: am
    },
    tagType: { ...Hm.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: Boolean,
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: ea,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    Kt,
    Ef,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = We("select"), r = We("input"), { t: s } = Tn(), o = na(), i = mA(e), {
      optionList: a,
      optionsArray: l,
      hoverOption: u,
      selectSize: f,
      readonly: c,
      handleResize: p,
      collapseTagSize: d,
      debouncedOnInputChange: m,
      debouncedQueryChange: g,
      deletePrevTag: C,
      deleteTag: h,
      deleteSelected: k,
      handleOptionSelect: y,
      scrollToOption: _,
      setSelected: S,
      resetInputHeight: x,
      managePlaceholder: T,
      showClose: $,
      selectDisabled: I,
      iconComponent: P,
      iconReverse: N,
      showNewOption: D,
      emptyText: oe,
      toggleLastOptionHitState: F,
      resetInputState: U,
      handleComposition: q,
      onOptionCreate: z,
      onOptionDestroy: H,
      handleMenuEnter: Q,
      handleFocus: te,
      focus: Ae,
      blur: ve,
      handleBlur: Ne,
      handleClearClick: Je,
      handleClose: nt,
      handleKeydownEscape: ft,
      toggleMenu: ht,
      selectOption: ct,
      getValueKey: Yt,
      navigateOptions: me,
      handleDeleteTooltipTag: Re,
      dropMenuVisible: M,
      reference: L,
      input: j,
      iOSInput: J,
      tooltipRef: W,
      tagTooltipRef: X,
      tags: se,
      selectWrapper: re,
      scrollbar: ee,
      queryChange: Y,
      groupQueryChange: be,
      handleMouseEnter: ce,
      handleMouseLeave: pe,
      showTagList: V,
      collapseTagList: ie,
      selectTagsStyle: xe
    } = vA(e, i, t), {
      inputWidth: $e,
      selected: it,
      inputLength: dt,
      filteredOptionsCount: wt,
      visible: xt,
      selectedLabel: gn,
      hoverIndex: an,
      query: gt,
      inputHovering: Mt,
      currentPlaceholder: $n,
      menuVisibleOnFocus: ur,
      isOnComposition: to,
      options: Or,
      cachedOptions: $o,
      optionsCount: no,
      prefixWidth: B
    } = Bi(i), E = R(() => {
      const Ve = [n.b()], Jt = b(f);
      return Jt && Ve.push(n.m(Jt)), e.disabled && Ve.push(n.m("disabled")), Ve;
    }), O = R(() => [
      n.e("tags"),
      n.is("disabled", b(I))
    ]), K = R(() => [
      n.b("tags-wrapper"),
      { "has-prefix": b(B) && b(it).length }
    ]), ye = R(() => [
      n.e("input"),
      n.is(b(f)),
      n.is("disabled", b(I))
    ]), Be = R(() => [
      n.e("input"),
      n.is(b(f)),
      n.em("input", "iOS")
    ]), je = R(() => [
      n.is("empty", !e.allowCreate && !!b(gt) && b(wt) === 0)
    ]), he = R(() => ({ maxWidth: `${b($e) > 123 && b(it).length > e.maxCollapseTags ? b($e) - 123 : b($e) - 75}px` })), ue = R(() => ({
      marginLeft: `${b(B)}px`,
      flexGrow: 1,
      width: `${b(dt) / (b($e) - 32)}%`,
      maxWidth: `${b($e) - 42}px`
    }));
    Ut(aa, Sn({
      props: e,
      options: Or,
      optionsArray: l,
      cachedOptions: $o,
      optionsCount: no,
      filteredOptionsCount: wt,
      hoverIndex: an,
      handleOptionSelect: y,
      onOptionCreate: z,
      onOptionDestroy: H,
      selectWrapper: re,
      selected: it,
      setSelected: S,
      queryChange: Y,
      groupQueryChange: be
    })), rt(() => {
      i.cachedPlaceHolder = $n.value = e.placeholder || (() => s("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && ($n.value = ""), Gi(re, p), e.remote && e.multiple && x(), ze(() => {
        const Ve = L.value && L.value.$el;
        if (Ve && ($e.value = Ve.getBoundingClientRect().width, t.slots.prefix)) {
          const Jt = Ve.querySelector(`.${r.e("prefix")}`);
          B.value = Math.max(Jt.getBoundingClientRect().width + 11, 30);
        }
      }), S();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(Kt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(Kt, "");
    const Te = R(() => {
      var Ve, Jt;
      return (Jt = (Ve = W.value) == null ? void 0 : Ve.popperRef) == null ? void 0 : Jt.contentRef;
    });
    return {
      isIOS: zg,
      onOptionsRendered: (Ve) => {
        a.value = Ve;
      },
      prefixWidth: B,
      selectSize: f,
      readonly: c,
      handleResize: p,
      collapseTagSize: d,
      debouncedOnInputChange: m,
      debouncedQueryChange: g,
      deletePrevTag: C,
      deleteTag: h,
      handleDeleteTooltipTag: Re,
      deleteSelected: k,
      handleOptionSelect: y,
      scrollToOption: _,
      inputWidth: $e,
      selected: it,
      inputLength: dt,
      filteredOptionsCount: wt,
      visible: xt,
      selectedLabel: gn,
      hoverIndex: an,
      query: gt,
      inputHovering: Mt,
      currentPlaceholder: $n,
      menuVisibleOnFocus: ur,
      isOnComposition: to,
      options: Or,
      resetInputHeight: x,
      managePlaceholder: T,
      showClose: $,
      selectDisabled: I,
      iconComponent: P,
      iconReverse: N,
      showNewOption: D,
      emptyText: oe,
      toggleLastOptionHitState: F,
      resetInputState: U,
      handleComposition: q,
      handleMenuEnter: Q,
      handleFocus: te,
      focus: Ae,
      blur: ve,
      handleBlur: Ne,
      handleClearClick: Je,
      handleClose: nt,
      handleKeydownEscape: ft,
      toggleMenu: ht,
      selectOption: ct,
      getValueKey: Yt,
      navigateOptions: me,
      dropMenuVisible: M,
      reference: L,
      input: j,
      iOSInput: J,
      tooltipRef: W,
      popperPaneRef: Te,
      tags: se,
      selectWrapper: re,
      scrollbar: ee,
      wrapperKls: E,
      tagsKls: O,
      tagWrapperKls: K,
      inputKls: ye,
      iOSInputKls: Be,
      scrollbarKls: je,
      selectTagsStyle: xe,
      nsSelect: n,
      tagTextStyle: he,
      inputStyle: ue,
      handleMouseEnter: ce,
      handleMouseLeave: pe,
      showTagList: V,
      collapseTagList: ie,
      tagTooltipRef: X,
      contentId: o,
      hoverOption: u
    };
  }
}), yA = ["disabled", "autocomplete", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"], wA = ["disabled"], kA = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function CA(e, t, n, r, s, o) {
  const i = pr("el-tag"), a = pr("el-tooltip"), l = pr("el-icon"), u = pr("el-input"), f = pr("el-option"), c = pr("el-options"), p = pr("el-scrollbar"), d = pr("el-select-menu"), m = tg("click-outside");
  return Vt((w(), A("div", {
    ref: "selectWrapper",
    class: Z(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...g) => e.handleMouseEnter && e.handleMouseEnter(...g)),
    onMouseleave: t[23] || (t[23] = (...g) => e.handleMouseLeave && e.handleMouseLeave(...g)),
    onClick: t[24] || (t[24] = nn((...g) => e.toggleMenu && e.toggleMenu(...g), ["stop"]))
  }, [
    we(a, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: fe(() => {
        var g, C;
        return [
          v("div", {
            class: "select-trigger",
            onMouseenter: t[20] || (t[20] = (h) => e.inputHovering = !0),
            onMouseleave: t[21] || (t[21] = (h) => e.inputHovering = !1)
          }, [
            e.multiple ? (w(), A("div", {
              key: 0,
              ref: "tags",
              tabindex: "-1",
              class: Z(e.tagsKls),
              style: tt(e.selectTagsStyle),
              onClick: t[15] || (t[15] = (...h) => e.focus && e.focus(...h))
            }, [
              e.collapseTags && e.selected.length ? (w(), le(Jr, {
                key: 0,
                onAfterLeave: e.resetInputHeight
              }, {
                default: fe(() => [
                  v("span", {
                    class: Z(e.tagWrapperKls)
                  }, [
                    (w(!0), A(Ze, null, Cn(e.showTagList, (h) => (w(), le(i, {
                      key: e.getValueKey(h),
                      closable: !e.selectDisabled && !h.isDisabled,
                      size: e.collapseTagSize,
                      hit: h.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (k) => e.deleteTag(k, h)
                    }, {
                      default: fe(() => [
                        v("span", {
                          class: Z(e.nsSelect.e("tags-text")),
                          style: tt(e.tagTextStyle)
                        }, Ge(h.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                    e.selected.length > e.maxCollapseTags ? (w(), le(i, {
                      key: 0,
                      closable: !1,
                      size: e.collapseTagSize,
                      type: e.tagType,
                      "disable-transitions": ""
                    }, {
                      default: fe(() => [
                        e.collapseTagsTooltip ? (w(), le(a, {
                          key: 0,
                          ref: "tagTooltipRef",
                          disabled: e.dropMenuVisible,
                          "fallback-placements": ["bottom", "top", "right", "left"],
                          effect: e.effect,
                          placement: "bottom",
                          teleported: e.teleported
                        }, {
                          default: fe(() => [
                            v("span", {
                              class: Z(e.nsSelect.e("tags-text"))
                            }, "+ " + Ge(e.selected.length - e.maxCollapseTags), 3)
                          ]),
                          content: fe(() => [
                            v("div", {
                              class: Z(e.nsSelect.e("collapse-tags"))
                            }, [
                              (w(!0), A(Ze, null, Cn(e.collapseTagList, (h) => (w(), A("div", {
                                key: e.getValueKey(h),
                                class: Z(e.nsSelect.e("collapse-tag"))
                              }, [
                                we(i, {
                                  class: "in-tooltip",
                                  closable: !e.selectDisabled && !h.isDisabled,
                                  size: e.collapseTagSize,
                                  hit: h.hitState,
                                  type: e.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: (k) => e.handleDeleteTooltipTag(k, h)
                                }, {
                                  default: fe(() => [
                                    v("span", {
                                      class: Z(e.nsSelect.e("tags-text")),
                                      style: tt({
                                        maxWidth: e.inputWidth - 75 + "px"
                                      })
                                    }, Ge(h.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2))), 128))
                            ], 2)
                          ]),
                          _: 1
                        }, 8, ["disabled", "effect", "teleported"])) : (w(), A("span", {
                          key: 1,
                          class: Z(e.nsSelect.e("tags-text"))
                        }, "+ " + Ge(e.selected.length - e.maxCollapseTags), 3))
                      ]),
                      _: 1
                    }, 8, ["size", "type"])) : ge("v-if", !0)
                  ], 2)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])) : ge("v-if", !0),
              e.collapseTags ? ge("v-if", !0) : (w(), le(Jr, {
                key: 1,
                onAfterLeave: e.resetInputHeight
              }, {
                default: fe(() => [
                  v("span", {
                    class: Z(e.tagWrapperKls),
                    style: tt(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                  }, [
                    (w(!0), A(Ze, null, Cn(e.selected, (h) => (w(), le(i, {
                      key: e.getValueKey(h),
                      closable: !e.selectDisabled && !h.isDisabled,
                      size: e.collapseTagSize,
                      hit: h.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (k) => e.deleteTag(k, h)
                    }, {
                      default: fe(() => [
                        v("span", {
                          class: Z(e.nsSelect.e("tags-text")),
                          style: tt({ maxWidth: e.inputWidth - 75 + "px" })
                        }, Ge(h.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                  ], 6)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])),
              e.filterable && !e.selectDisabled ? Vt((w(), A("input", {
                key: 2,
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (h) => e.query = h),
                type: "text",
                class: Z(e.inputKls),
                disabled: e.selectDisabled,
                autocomplete: e.autocomplete,
                style: tt(e.inputStyle),
                role: "combobox",
                "aria-activedescendant": ((g = e.hoverOption) == null ? void 0 : g.id) || "",
                "aria-controls": e.contentId,
                "aria-expanded": e.dropMenuVisible,
                "aria-label": e.ariaLabel,
                "aria-autocomplete": "none",
                "aria-haspopup": "listbox",
                onFocus: t[1] || (t[1] = (...h) => e.handleFocus && e.handleFocus(...h)),
                onBlur: t[2] || (t[2] = (...h) => e.handleBlur && e.handleBlur(...h)),
                onKeyup: t[3] || (t[3] = (...h) => e.managePlaceholder && e.managePlaceholder(...h)),
                onKeydown: [
                  t[4] || (t[4] = (...h) => e.resetInputState && e.resetInputState(...h)),
                  t[5] || (t[5] = qt(nn((h) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                  t[6] || (t[6] = qt(nn((h) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                  t[7] || (t[7] = qt((...h) => e.handleKeydownEscape && e.handleKeydownEscape(...h), ["esc"])),
                  t[8] || (t[8] = qt(nn((...h) => e.selectOption && e.selectOption(...h), ["stop", "prevent"]), ["enter"])),
                  t[9] || (t[9] = qt((...h) => e.deletePrevTag && e.deletePrevTag(...h), ["delete"])),
                  t[10] || (t[10] = qt((h) => e.visible = !1, ["tab"]))
                ],
                onCompositionstart: t[11] || (t[11] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onCompositionupdate: t[12] || (t[12] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onCompositionend: t[13] || (t[13] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onInput: t[14] || (t[14] = (...h) => e.debouncedQueryChange && e.debouncedQueryChange(...h))
              }, null, 46, yA)), [
                [Mg, e.query]
              ]) : ge("v-if", !0)
            ], 6)) : ge("v-if", !0),
            e.isIOS && !e.multiple && e.filterable && e.readonly ? (w(), A("input", {
              key: 1,
              ref: "iOSInput",
              class: Z(e.iOSInputKls),
              disabled: e.selectDisabled,
              type: "text"
            }, null, 10, wA)) : ge("v-if", !0),
            we(u, {
              id: e.id,
              ref: "reference",
              modelValue: e.selectedLabel,
              "onUpdate:modelValue": t[16] || (t[16] = (h) => e.selectedLabel = h),
              type: "text",
              placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
              name: e.name,
              autocomplete: e.autocomplete,
              size: e.selectSize,
              disabled: e.selectDisabled,
              readonly: e.readonly,
              "validate-event": !1,
              class: Z([e.nsSelect.is("focus", e.visible)]),
              tabindex: e.multiple && e.filterable ? -1 : void 0,
              role: "combobox",
              "aria-activedescendant": ((C = e.hoverOption) == null ? void 0 : C.id) || "",
              "aria-controls": e.contentId,
              "aria-expanded": e.dropMenuVisible,
              label: e.ariaLabel,
              "aria-autocomplete": "none",
              "aria-haspopup": "listbox",
              onFocus: e.handleFocus,
              onBlur: e.handleBlur,
              onInput: e.debouncedOnInputChange,
              onPaste: e.debouncedOnInputChange,
              onCompositionstart: e.handleComposition,
              onCompositionupdate: e.handleComposition,
              onCompositionend: e.handleComposition,
              onKeydown: [
                t[17] || (t[17] = qt(nn((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                t[18] || (t[18] = qt(nn((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                qt(nn(e.selectOption, ["stop", "prevent"]), ["enter"]),
                qt(e.handleKeydownEscape, ["esc"]),
                t[19] || (t[19] = qt((h) => e.visible = !1, ["tab"]))
              ]
            }, vi({
              suffix: fe(() => [
                e.iconComponent && !e.showClose ? (w(), le(l, {
                  key: 0,
                  class: Z([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
                }, {
                  default: fe(() => [
                    (w(), le(Rt(e.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ge("v-if", !0),
                e.showClose && e.clearIcon ? (w(), le(l, {
                  key: 1,
                  class: Z([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                  onClick: e.handleClearClick
                }, {
                  default: fe(() => [
                    (w(), le(Rt(e.clearIcon)))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : ge("v-if", !0)
              ]),
              _: 2
            }, [
              e.$slots.prefix ? {
                name: "prefix",
                fn: fe(() => [
                  v("div", kA, [
                    _e(e.$slots, "prefix")
                  ])
                ])
              } : void 0
            ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "aria-activedescendant", "aria-controls", "aria-expanded", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
          ], 32)
        ];
      }),
      content: fe(() => [
        we(d, null, vi({
          default: fe(() => [
            Vt(we(p, {
              id: e.contentId,
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: Z(e.scrollbarKls),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: fe(() => [
                e.showNewOption ? (w(), le(f, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : ge("v-if", !0),
                we(c, { onUpdateOptions: e.onOptionsRendered }, {
                  default: fe(() => [
                    _e(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [tr, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (w(), A(Ze, { key: 0 }, [
              e.$slots.empty ? _e(e.$slots, "empty", { key: 0 }) : (w(), A("p", {
                key: 1,
                class: Z(e.nsSelect.be("dropdown", "empty"))
              }, Ge(e.emptyText), 3))
            ], 64)) : ge("v-if", !0)
          ]),
          _: 2
        }, [
          e.$slots.header ? {
            name: "header",
            fn: fe(() => [
              _e(e.$slots, "header")
            ])
          } : void 0,
          e.$slots.footer ? {
            name: "footer",
            fn: fe(() => [
              _e(e.$slots, "footer")
            ])
          } : void 0
        ]), 1024)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [m, e.handleClose, e.popperPaneRef]
  ]);
}
var xA = /* @__PURE__ */ Ke(_A, [["render", CA], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const EA = /* @__PURE__ */ ne({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = We("select"), n = G(!0), r = bt(), s = G([]);
    Ut(Um, Sn({
      ...Bi(e)
    }));
    const o = De(aa);
    rt(() => {
      s.value = i(r.subTree);
    });
    const i = (l) => {
      const u = [];
      return Array.isArray(l.children) && l.children.forEach((f) => {
        var c;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? u.push(f.component.proxy) : (c = f.children) != null && c.length && u.push(...i(f));
      }), u;
    }, { groupQueryChange: a } = Fe(o);
    return Ee(a, () => {
      n.value = s.value.some((l) => l.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function SA(e, t, n, r, s, o) {
  return Vt((w(), A("ul", {
    class: Z(e.ns.be("group", "wrap"))
  }, [
    v("li", {
      class: Z(e.ns.be("group", "title"))
    }, Ge(e.label), 3),
    v("li", null, [
      v("ul", {
        class: Z(e.ns.b("group"))
      }, [
        _e(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [tr, e.visible]
  ]);
}
var Km = /* @__PURE__ */ Ke(EA, [["render", SA], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const $u = An(xA, {
  Option: Hf,
  OptionGroup: Km
}), AA = xf(Hf);
xf(Km);
const jf = () => De(Vm, {}), TA = et({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: Ie(Array),
    default: () => Sf([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: ws
  }
}), MA = /* @__PURE__ */ ne({
  name: "ElPaginationSizes"
}), $A = /* @__PURE__ */ ne({
  ...MA,
  props: TA,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = Tn(), s = We("pagination"), o = jf(), i = G(n.pageSize);
    Ee(() => n.pageSizes, (u, f) => {
      if (!Eu(u, f) && Array.isArray(u)) {
        const c = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", c);
      }
    }), Ee(() => n.pageSize, (u) => {
      i.value = u;
    });
    const a = R(() => n.pageSizes);
    function l(u) {
      var f;
      u !== i.value && (i.value = u, (f = o.handleSizeChange) == null || f.call(o, Number(u)));
    }
    return (u, f) => (w(), A("span", {
      class: Z(b(s).e("sizes"))
    }, [
      we(b($u), {
        "model-value": i.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        teleported: u.teleported,
        "validate-event": !1,
        onChange: l
      }, {
        default: fe(() => [
          (w(!0), A(Ze, null, Cn(b(a), (c) => (w(), le(b(AA), {
            key: c,
            value: c,
            label: c + b(r)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size", "teleported"])
    ], 2));
  }
});
var LA = /* @__PURE__ */ Ke($A, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const IA = et({
  size: {
    type: String,
    values: ws
  }
}), OA = ["disabled"], RA = /* @__PURE__ */ ne({
  name: "ElPaginationJumper"
}), PA = /* @__PURE__ */ ne({
  ...RA,
  props: IA,
  setup(e) {
    const { t } = Tn(), n = We("pagination"), { pageCount: r, disabled: s, currentPage: o, changeEvent: i } = jf(), a = G(), l = R(() => {
      var c;
      return (c = a.value) != null ? c : o == null ? void 0 : o.value;
    });
    function u(c) {
      a.value = c ? +c : "";
    }
    function f(c) {
      c = Math.trunc(+c), i == null || i(c), a.value = void 0;
    }
    return (c, p) => (w(), A("span", {
      class: Z(b(n).e("jump")),
      disabled: b(s)
    }, [
      v("span", {
        class: Z([b(n).e("goto")])
      }, Ge(b(t)("el.pagination.goto")), 3),
      we(b(sa), {
        size: c.size,
        class: Z([b(n).e("editor"), b(n).is("in-pagination")]),
        min: 1,
        max: b(r),
        disabled: b(s),
        "model-value": b(l),
        "validate-event": !1,
        label: b(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": u,
        onChange: f
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      v("span", {
        class: Z([b(n).e("classifier")])
      }, Ge(b(t)("el.pagination.pageClassifier")), 3)
    ], 10, OA));
  }
});
var DA = /* @__PURE__ */ Ke(PA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const NA = et({
  total: {
    type: Number,
    default: 1e3
  }
}), BA = ["disabled"], FA = /* @__PURE__ */ ne({
  name: "ElPaginationTotal"
}), qA = /* @__PURE__ */ ne({
  ...FA,
  props: NA,
  setup(e) {
    const { t } = Tn(), n = We("pagination"), { disabled: r } = jf();
    return (s, o) => (w(), A("span", {
      class: Z(b(n).e("total")),
      disabled: b(r)
    }, Ge(b(t)("el.pagination.total", {
      total: s.total
    })), 11, BA));
  }
});
var zA = /* @__PURE__ */ Ke(qA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const HA = et({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: !0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
}), jA = ["onKeyup"], VA = ["aria-current", "aria-label", "tabindex"], UA = ["tabindex", "aria-label"], KA = ["aria-current", "aria-label", "tabindex"], GA = ["tabindex", "aria-label"], WA = ["aria-current", "aria-label", "tabindex"], ZA = /* @__PURE__ */ ne({
  name: "ElPaginationPager"
}), XA = /* @__PURE__ */ ne({
  ...ZA,
  props: HA,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, r = We("pager"), s = We("icon"), { t: o } = Tn(), i = G(!1), a = G(!1), l = G(!1), u = G(!1), f = G(!1), c = G(!1), p = R(() => {
      const _ = n.pagerCount, S = (_ - 1) / 2, x = Number(n.currentPage), T = Number(n.pageCount);
      let $ = !1, I = !1;
      T > _ && (x > _ - S && ($ = !0), x < T - S && (I = !0));
      const P = [];
      if ($ && !I) {
        const N = T - (_ - 2);
        for (let D = N; D < T; D++)
          P.push(D);
      } else if (!$ && I)
        for (let N = 2; N < _; N++)
          P.push(N);
      else if ($ && I) {
        const N = Math.floor(_ / 2) - 1;
        for (let D = x - N; D <= x + N; D++)
          P.push(D);
      } else
        for (let N = 2; N < T; N++)
          P.push(N);
      return P;
    }), d = R(() => [
      "more",
      "btn-quickprev",
      s.b(),
      r.is("disabled", n.disabled)
    ]), m = R(() => [
      "more",
      "btn-quicknext",
      s.b(),
      r.is("disabled", n.disabled)
    ]), g = R(() => n.disabled ? -1 : 0);
    lf(() => {
      const _ = (n.pagerCount - 1) / 2;
      i.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - _ && (i.value = !0), n.currentPage < n.pageCount - _ && (a.value = !0));
    });
    function C(_ = !1) {
      n.disabled || (_ ? l.value = !0 : u.value = !0);
    }
    function h(_ = !1) {
      _ ? f.value = !0 : c.value = !0;
    }
    function k(_) {
      const S = _.target;
      if (S.tagName.toLowerCase() === "li" && Array.from(S.classList).includes("number")) {
        const x = Number(S.textContent);
        x !== n.currentPage && t("change", x);
      } else S.tagName.toLowerCase() === "li" && Array.from(S.classList).includes("more") && y(_);
    }
    function y(_) {
      const S = _.target;
      if (S.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let x = Number(S.textContent);
      const T = n.pageCount, $ = n.currentPage, I = n.pagerCount - 2;
      S.className.includes("more") && (S.className.includes("quickprev") ? x = $ - I : S.className.includes("quicknext") && (x = $ + I)), Number.isNaN(+x) || (x < 1 && (x = 1), x > T && (x = T)), x !== $ && t("change", x);
    }
    return (_, S) => (w(), A("ul", {
      class: Z(b(r).b()),
      onClick: y,
      onKeyup: qt(k, ["enter"])
    }, [
      _.pageCount > 0 ? (w(), A("li", {
        key: 0,
        class: Z([[
          b(r).is("active", _.currentPage === 1),
          b(r).is("disabled", _.disabled)
        ], "number"]),
        "aria-current": _.currentPage === 1,
        "aria-label": b(o)("el.pagination.currentPage", { pager: 1 }),
        tabindex: b(g)
      }, " 1 ", 10, VA)) : ge("v-if", !0),
      i.value ? (w(), A("li", {
        key: 1,
        class: Z(b(d)),
        tabindex: b(g),
        "aria-label": b(o)("el.pagination.prevPages", { pager: _.pagerCount - 2 }),
        onMouseenter: S[0] || (S[0] = (x) => C(!0)),
        onMouseleave: S[1] || (S[1] = (x) => l.value = !1),
        onFocus: S[2] || (S[2] = (x) => h(!0)),
        onBlur: S[3] || (S[3] = (x) => f.value = !1)
      }, [
        (l.value || f.value) && !_.disabled ? (w(), le(b(f8), { key: 0 })) : (w(), le(b(N0), { key: 1 }))
      ], 42, UA)) : ge("v-if", !0),
      (w(!0), A(Ze, null, Cn(b(p), (x) => (w(), A("li", {
        key: x,
        class: Z([[
          b(r).is("active", _.currentPage === x),
          b(r).is("disabled", _.disabled)
        ], "number"]),
        "aria-current": _.currentPage === x,
        "aria-label": b(o)("el.pagination.currentPage", { pager: x }),
        tabindex: b(g)
      }, Ge(x), 11, KA))), 128)),
      a.value ? (w(), A("li", {
        key: 2,
        class: Z(b(m)),
        tabindex: b(g),
        "aria-label": b(o)("el.pagination.nextPages", { pager: _.pagerCount - 2 }),
        onMouseenter: S[4] || (S[4] = (x) => C()),
        onMouseleave: S[5] || (S[5] = (x) => u.value = !1),
        onFocus: S[6] || (S[6] = (x) => h()),
        onBlur: S[7] || (S[7] = (x) => c.value = !1)
      }, [
        (u.value || c.value) && !_.disabled ? (w(), le(b(p8), { key: 0 })) : (w(), le(b(N0), { key: 1 }))
      ], 42, GA)) : ge("v-if", !0),
      _.pageCount > 1 ? (w(), A("li", {
        key: 3,
        class: Z([[
          b(r).is("active", _.currentPage === _.pageCount),
          b(r).is("disabled", _.disabled)
        ], "number"]),
        "aria-current": _.currentPage === _.pageCount,
        "aria-label": b(o)("el.pagination.currentPage", { pager: _.pageCount }),
        tabindex: b(g)
      }, Ge(_.pageCount), 11, WA)) : ge("v-if", !0)
    ], 42, jA));
  }
});
var YA = /* @__PURE__ */ Ke(XA, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const Nt = (e) => typeof e != "number", Gm = et({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => mt(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: Ie(Array),
    default: () => Sf([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: En,
    default: () => r8
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: En,
    default: () => s8
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), JA = {
  "update:current-page": (e) => mt(e),
  "update:page-size": (e) => mt(e),
  "size-change": (e) => mt(e),
  "current-change": (e) => mt(e),
  "prev-click": (e) => mt(e),
  "next-click": (e) => mt(e)
}, wp = "ElPagination";
var QA = /* @__PURE__ */ ne({
  name: wp,
  props: Gm,
  emits: JA,
  setup(e, { emit: t, slots: n }) {
    const { t: r } = Tn(), s = We("pagination"), o = bt().vnode.props || {}, i = "onUpdate:currentPage" in o || "onUpdate:current-page" in o || "onCurrentChange" in o, a = "onUpdate:pageSize" in o || "onUpdate:page-size" in o || "onSizeChange" in o, l = R(() => {
      if (Nt(e.total) && Nt(e.pageCount) || !Nt(e.currentPage) && !i)
        return !1;
      if (e.layout.includes("sizes")) {
        if (Nt(e.pageCount)) {
          if (!Nt(e.total) && !Nt(e.pageSize) && !a)
            return !1;
        } else if (!a)
          return !1;
      }
      return !0;
    }), u = G(Nt(e.defaultPageSize) ? 10 : e.defaultPageSize), f = G(Nt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), c = R({
      get() {
        return Nt(e.pageSize) ? u.value : e.pageSize;
      },
      set(y) {
        Nt(e.pageSize) && (u.value = y), a && (t("update:page-size", y), t("size-change", y));
      }
    }), p = R(() => {
      let y = 0;
      return Nt(e.pageCount) ? Nt(e.total) || (y = Math.max(1, Math.ceil(e.total / c.value))) : y = e.pageCount, y;
    }), d = R({
      get() {
        return Nt(e.currentPage) ? f.value : e.currentPage;
      },
      set(y) {
        let _ = y;
        y < 1 ? _ = 1 : y > p.value && (_ = p.value), Nt(e.currentPage) && (f.value = _), i && (t("update:current-page", _), t("current-change", _));
      }
    });
    Ee(p, (y) => {
      d.value > y && (d.value = y);
    });
    function m(y) {
      d.value = y;
    }
    function g(y) {
      c.value = y;
      const _ = p.value;
      d.value > _ && (d.value = _);
    }
    function C() {
      e.disabled || (d.value -= 1, t("prev-click", d.value));
    }
    function h() {
      e.disabled || (d.value += 1, t("next-click", d.value));
    }
    function k(y, _) {
      y && (y.props || (y.props = {}), y.props.class = [y.props.class, _].join(" "));
    }
    return Ut(Vm, {
      pageCount: p,
      disabled: R(() => e.disabled),
      currentPage: d,
      changeEvent: m,
      handleSizeChange: g
    }), () => {
      var y, _;
      if (!l.value)
        return r("el.pagination.deprecationWarning"), null;
      if (!e.layout || e.hideOnSinglePage && p.value <= 1)
        return null;
      const S = [], x = [], T = _n("div", { class: s.e("rightwrapper") }, x), $ = {
        prev: _n(nA, {
          disabled: e.disabled,
          currentPage: d.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: C
        }),
        jumper: _n(DA, {
          size: e.small ? "small" : "default"
        }),
        pager: _n(YA, {
          currentPage: d.value,
          pageCount: p.value,
          pagerCount: e.pagerCount,
          onChange: m,
          disabled: e.disabled
        }),
        next: _n(lA, {
          disabled: e.disabled,
          currentPage: d.value,
          pageCount: p.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: h
        }),
        sizes: _n(LA, {
          pageSize: c.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          teleported: e.teleported,
          size: e.small ? "small" : "default"
        }),
        slot: (_ = (y = n == null ? void 0 : n.default) == null ? void 0 : y.call(n)) != null ? _ : null,
        total: _n(zA, { total: Nt(e.total) ? 0 : e.total })
      }, I = e.layout.split(",").map((N) => N.trim());
      let P = !1;
      return I.forEach((N) => {
        if (N === "->") {
          P = !0;
          return;
        }
        P ? x.push($[N]) : S.push($[N]);
      }), k(S[0], s.is("first")), k(S[S.length - 1], s.is("last")), P && x.length > 0 && (k(x[0], s.is("first")), k(x[x.length - 1], s.is("last")), S.push(T)), _n("div", {
        class: [
          s.b(),
          s.is("background", e.background),
          {
            [s.m("small")]: e.small
          }
        ]
      }, S);
    };
  }
});
const eT = An(QA), Wm = et({
  trigger: ps.trigger,
  placement: Ua.placement,
  disabled: ps.disabled,
  visible: tn.visible,
  transition: tn.transition,
  popperOptions: Ua.popperOptions,
  tabindex: Ua.tabindex,
  content: tn.content,
  popperStyle: tn.popperStyle,
  popperClass: tn.popperClass,
  enterable: {
    ...tn.enterable,
    default: !0
  },
  effect: {
    ...tn.effect,
    default: "light"
  },
  teleported: tn.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  "onUpdate:visible": {
    type: Function
  }
}), tT = {
  "update:visible": (e) => kf(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, nT = "onUpdate:visible", rT = /* @__PURE__ */ ne({
  name: "ElPopover"
}), oT = /* @__PURE__ */ ne({
  ...rT,
  props: Wm,
  emits: tT,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = R(() => r[nT]), o = We("popover"), i = G(), a = R(() => {
      var C;
      return (C = b(i)) == null ? void 0 : C.popperRef;
    }), l = R(() => [
      {
        width: wo(r.width)
      },
      r.popperStyle
    ]), u = R(() => [o.b(), r.popperClass, { [o.m("plain")]: !!r.content }]), f = R(() => r.transition === `${o.namespace.value}-fade-in-linear`), c = () => {
      var C;
      (C = i.value) == null || C.hide();
    }, p = () => {
      n("before-enter");
    }, d = () => {
      n("before-leave");
    }, m = () => {
      n("after-enter");
    }, g = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: a,
      hide: c
    }), (C, h) => (w(), le(b(hs), pt({
      ref_key: "tooltipRef",
      ref: i
    }, C.$attrs, {
      trigger: C.trigger,
      placement: C.placement,
      disabled: C.disabled,
      visible: C.visible,
      transition: C.transition,
      "popper-options": C.popperOptions,
      tabindex: C.tabindex,
      content: C.content,
      offset: C.offset,
      "show-after": C.showAfter,
      "hide-after": C.hideAfter,
      "auto-close": C.autoClose,
      "show-arrow": C.showArrow,
      "aria-label": C.title,
      effect: C.effect,
      enterable: C.enterable,
      "popper-class": b(u),
      "popper-style": b(l),
      teleported: C.teleported,
      persistent: C.persistent,
      "gpu-acceleration": b(f),
      "onUpdate:visible": b(s),
      onBeforeShow: p,
      onBeforeHide: d,
      onShow: m,
      onHide: g
    }), {
      content: fe(() => [
        C.title ? (w(), A("div", {
          key: 0,
          class: Z(b(o).e("title")),
          role: "title"
        }, Ge(C.title), 3)) : ge("v-if", !0),
        _e(C.$slots, "default", {}, () => [
          Yr(Ge(C.content), 1)
        ])
      ]),
      default: fe(() => [
        C.$slots.reference ? _e(C.$slots, "reference", { key: 0 }) : ge("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var sT = /* @__PURE__ */ Ke(oT, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);
const kp = (e, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = e);
};
var iT = {
  mounted(e, t) {
    kp(e, t);
  },
  updated(e, t) {
    kp(e, t);
  }
};
const aT = "popover", lT = w8(iT, aT), cT = An(sT, {
  directive: lT
}), uT = "TOOLTIP_APPEND_TO";
function fT() {
  return De(
    uT,
    R(() => {
    })
  );
}
const Zm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1%200.642857C1%200.287817%201.27473%200%201.61364%200H4.06818C4.40708%200%204.68182%200.287817%204.68182%200.642857V4.5C4.68182%204.85504%204.40708%205.14286%204.06818%205.14286H1.61364C1.27473%205.14286%201%204.85504%201%204.5V0.642857ZM2.22727%201.28571V3.85714H3.45455V1.28571H2.22727ZM6.31818%200.642857C6.31818%200.287817%206.59292%200%206.93182%200H8.15909C8.49799%200%208.77273%200.287817%208.77273%200.642857V3.85714H9.38636C9.72527%203.85714%2010%204.14496%2010%204.5C10%204.85504%209.72527%205.14286%209.38636%205.14286H6.93182C6.59292%205.14286%206.31818%204.85504%206.31818%204.5C6.31818%204.14496%206.59292%203.85714%206.93182%203.85714H7.54545V1.28571H6.93182C6.59292%201.28571%206.31818%200.997897%206.31818%200.642857ZM1%207.5C1%207.14496%201.27473%206.85714%201.61364%206.85714H2.84091C3.17981%206.85714%203.45455%207.14496%203.45455%207.5V10.7143H4.06818C4.40708%2010.7143%204.68182%2011.0021%204.68182%2011.3571C4.68182%2011.7122%204.40708%2012%204.06818%2012H1.61364C1.27473%2012%201%2011.7122%201%2011.3571C1%2011.0021%201.27473%2010.7143%201.61364%2010.7143H2.22727V8.14286H1.61364C1.27473%208.14286%201%207.85504%201%207.5ZM6.31818%207.5C6.31818%207.14496%206.59292%206.85714%206.93182%206.85714H9.38636C9.72527%206.85714%2010%207.14496%2010%207.5V11.3571C10%2011.7122%209.72527%2012%209.38636%2012H6.93182C6.59292%2012%206.31818%2011.7122%206.31818%2011.3571V7.5ZM7.54545%208.14286V10.7143H8.77273V8.14286H7.54545Z'%20/%3e%3c/svg%3e", dT = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.2251%201.02271C13.5179%200.968554%2013.8195%201.00233%2014.0913%201.11939L14.2055%201.17506L14.3149%201.23951C14.5275%201.37763%2014.7014%201.56758%2014.8208%201.79127L14.8764%201.90553L14.9214%202.02467C15.0145%202.30522%2015.0227%202.60793%2014.9438%202.89478C14.9403%202.90772%2014.9372%202.92106%2014.9331%202.93385L13.0132%208.95338L12.9965%209.00025H19.9995C20.3769%208.99952%2020.7471%209.10523%2021.0669%209.30592C21.3874%209.50712%2021.6437%209.79562%2021.8071%2010.137C21.9704%2010.4783%2022.0341%2010.8588%2021.9897%2011.2346C21.9453%2011.6105%2021.7946%2011.9661%2021.5561%2012.26C21.5375%2012.2829%2021.5181%2012.3052%2021.4975%2012.3264L11.5971%2022.5266L11.5962%2022.5256C11.3774%2022.7595%2011.0907%2022.9194%2010.7749%2022.9778C10.4403%2023.0397%2010.0944%2022.9859%209.7944%2022.8254C9.4944%2022.665%209.25775%2022.4066%209.1235%2022.094C8.98941%2021.7815%208.96593%2021.4327%209.05612%2021.1047L9.06686%2021.0657L10.9868%2015.0462L11.0034%2015.0003H3.99948C3.62236%2015.0008%203.25253%2014.8941%202.93307%2014.6936C2.61276%2014.4925%202.35617%2014.2047%202.19284%2013.8635C2.02947%2013.5221%201.96581%2013.1408%202.01022%2012.7649C2.05468%2012.3892%202.20544%2012.0333%202.44382%2011.7395C2.46238%2011.7167%202.4819%2011.6942%202.50241%2011.6731L12.4028%201.47389C12.6215%201.23984%2012.9091%201.08117%2013.2251%201.02271Z'%20fill='currentColor'%20fill-opacity='0.9'%20style='fill:currentColor;fill-opacity:0.9;'/%3e%3c/svg%3e", Xm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%203L9%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%203L15%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", Ym = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M10.3019%200C10.542%200%2010.7678%200.0476193%2010.9791%200.142858C11.1905%200.238096%2011.373%200.371429%2011.5267%200.542858C11.6805%200.714286%2011.8005%200.92381%2011.887%201.17143C11.9735%201.40952%2012.0167%201.67619%2012.0167%201.97143L12.0023%203.38571C12.0023%203.50952%2012.0023%203.61429%2012.0023%203.7C12.0119%203.78571%2012.0263%203.87143%2012.0455%203.95714C12.0647%204.04286%2012.0936%204.13333%2012.132%204.22857C12.18%204.31429%2012.2425%204.42857%2012.3193%204.57143L12.8237%205.24286C12.9198%205.4619%2012.9774%205.66667%2012.9966%205.85714C13.0158%206.0381%2012.9534%206.25238%2012.8093%206.5L12.3337%207.11429C12.2569%207.26667%2012.1944%207.39524%2012.1464%207.5C12.108%207.60476%2012.0791%207.70476%2012.0599%207.8C12.0407%207.89524%2012.0263%207.99524%2012.0167%208.1C12.0167%208.20476%2012.0167%208.33333%2012.0167%208.48571V9.7C12.0167%2010.0048%2011.9783%2010.2952%2011.9014%2010.5714C11.8342%2010.8381%2011.7333%2011.0714%2011.5988%2011.2714C11.4739%2011.4714%2011.3154%2011.6286%2011.1233%2011.7429C10.9311%2011.8571%2010.7198%2011.9143%2010.4892%2011.9143L9.49487%2012C9.48526%2012%209.42282%2012%209.30753%2012C9.19225%2012%209.05775%2011.9905%208.90404%2011.9714C8.75993%2011.9619%208.61103%2011.9381%208.45731%2011.9C8.31321%2011.8714%208.20273%2011.819%208.12587%2011.7429C8.06823%2011.6952%208.0202%2011.619%207.98177%2011.5143C7.95295%2011.4095%207.93854%2011.3095%207.93854%2011.2143C7.93854%2011.0238%208.00579%2010.8762%208.14028%2010.7714C8.27478%2010.6667%208.42369%2010.6%208.58701%2010.5714C8.75993%2010.5333%208.92806%2010.5143%209.09137%2010.5143H9.71102C10.0953%2010.5143%2010.2826%2010.1857%2010.273%209.52857L10.2586%208.22857C10.2586%207.94286%2010.2682%207.72381%2010.2874%207.57143C10.3163%207.40952%2010.3595%207.27619%2010.4171%207.17143C10.4844%207.06667%2010.566%206.9619%2010.6621%206.85714C10.7582%206.75238%2010.8735%206.60476%2011.008%206.41429C11.0944%206.29048%2011.1665%206.19048%2011.2241%206.11429C11.2818%206.02857%2011.3154%205.94762%2011.325%205.87143C11.3346%205.79524%2011.3154%205.70952%2011.2674%205.61429C11.2289%205.51905%2011.1569%205.39048%2011.0512%205.22857C10.8975%205%2010.7678%204.81905%2010.6621%204.68571C10.566%204.55238%2010.4844%204.42857%2010.4171%204.31429C10.3595%204.2%2010.3163%204.08095%2010.2874%203.95714C10.2682%203.83333%2010.2586%203.66191%2010.2586%203.44286V2.41429C10.2586%202.29048%2010.2538%202.17143%2010.2442%202.05714C10.2442%201.94286%2010.225%201.84286%2010.1866%201.75714C10.1481%201.67143%2010.0857%201.60476%209.99923%201.55714C9.92238%201.50952%209.8119%201.48571%209.66779%201.48571H9.01932C9.00972%201.48571%208.97129%201.48571%208.90404%201.48571C8.83679%201.48571%208.75513%201.48095%208.65906%201.47143C8.56299%201.45238%208.46212%201.42857%208.35644%201.4C8.25076%201.36191%208.1595%201.30476%208.08264%201.22857C8.025%201.18095%207.97697%201.10476%207.93854%201C7.90972%200.895238%207.89531%200.795238%207.89531%200.7C7.89531%200.509524%207.96256%200.361905%208.09705%200.257143C8.23155%200.152381%208.38526%200.0857146%208.55819%200.057143C8.73111%200.0190477%208.89924%200%209.06255%200H10.3019Z%20M3.93745%200C4.10077%200%204.26889%200.0190477%204.44181%200.057143C4.61474%200.0857146%204.76845%200.152381%204.90295%200.257143C5.03745%200.361905%205.10469%200.509524%205.10469%200.7C5.10469%200.795238%205.08548%200.895238%205.04705%201C5.01823%201.10476%204.975%201.18095%204.91736%201.22857C4.8405%201.30476%204.74924%201.36191%204.64356%201.4C4.53788%201.42857%204.43701%201.45238%204.34094%201.47143C4.24487%201.48095%204.16321%201.48571%204.09596%201.48571C4.02871%201.48571%203.99029%201.48571%203.98068%201.48571H3.33221C3.1881%201.48571%203.07282%201.50952%202.98636%201.55714C2.9095%201.60476%202.85186%201.67143%202.81343%201.75714C2.775%201.84286%202.75099%201.94286%202.74138%202.05714C2.74138%202.17143%202.74138%202.29048%202.74138%202.41429V3.44286C2.74138%203.66191%202.72697%203.83333%202.69815%203.95714C2.67893%204.08095%202.6357%204.2%202.56845%204.31429C2.51081%204.42857%202.42915%204.55238%202.32348%204.68571C2.22741%204.81905%202.10251%205%201.9488%205.22857C1.84313%205.39048%201.76627%205.51905%201.71824%205.61429C1.67981%205.70952%201.6654%205.79524%201.675%205.87143C1.68461%205.94762%201.71824%206.02857%201.77588%206.11429C1.83352%206.19048%201.90557%206.29048%201.99203%206.41429C2.12653%206.60476%202.24182%206.75238%202.33789%206.85714C2.43396%206.9619%202.51081%207.06667%202.56845%207.17143C2.6357%207.27619%202.67893%207.40952%202.69815%207.57143C2.72697%207.72381%202.74138%207.94286%202.74138%208.22857L2.72697%209.52857C2.71736%2010.1857%202.9047%2010.5143%203.28898%2010.5143H3.90863C4.07194%2010.5143%204.23526%2010.5333%204.39858%2010.5714C4.57151%2010.6%204.72522%2010.6667%204.85972%2010.7714C4.99421%2010.8762%205.06146%2011.0238%205.06146%2011.2143C5.06146%2011.3095%205.04225%2011.4095%205.00382%2011.5143C4.975%2011.619%204.93177%2011.6952%204.87413%2011.7429C4.79727%2011.819%204.68199%2011.8714%204.52828%2011.9C4.38417%2011.9381%204.23526%2011.9619%204.08155%2011.9714C3.93745%2011.9905%203.80775%2012%203.69247%2012C3.57719%2012%203.51474%2012%203.50513%2012L2.51081%2011.9143C2.28024%2011.9143%202.06889%2011.8571%201.87675%2011.7429C1.68461%2011.6286%201.52129%2011.4714%201.3868%2011.2714C1.2619%2011.0714%201.16103%2010.8381%201.08418%2010.5714C1.01693%2010.2952%200.983302%2010.0048%200.983302%209.7V8.48571C0.983302%208.33333%200.978499%208.20476%200.968892%208.1C0.968892%207.99524%200.959285%207.89524%200.940071%207.8C0.920857%207.70476%200.887232%207.60476%200.839198%207.5C0.80077%207.39524%200.743128%207.26667%200.666272%207.11429L0.190727%206.5C0.0466221%206.25238%20-0.0158233%206.0381%200.00339071%205.85714C0.0226046%205.66667%200.0802464%205.4619%200.176316%205.24286L0.680682%204.57143C0.757538%204.42857%200.81518%204.31429%200.853608%204.22857C0.901643%204.13333%200.935267%204.04286%200.954481%203.95714C0.973695%203.87143%200.983302%203.78571%200.983302%203.7C0.992909%203.61429%200.997712%203.50952%200.997712%203.38571L0.983302%201.97143C0.983302%201.67619%201.02653%201.40952%201.113%201.17143C1.19946%200.92381%201.31955%200.714286%201.47326%200.542858C1.62697%200.371429%201.8095%200.238096%202.02086%200.142858C2.23221%200.0476193%202.45797%200%202.69815%200H3.93745Z'%20/%3e%3c/svg%3e", Jm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.3333%2012.5525V12.4489C14.2278%2012.0756%2014.8571%2011.1925%2014.8571%2010.1632V3.61924C14.8571%202.96252%2014.5962%202.3327%2014.1318%201.86832C13.6675%201.40395%2013.0376%201.14307%2012.3809%201.14307H5.90473C5.38113%201.14296%204.87098%201.30883%204.44756%201.61684C4.02414%201.92485%203.70926%202.35915%203.54816%202.85734H3.39501C2.70016%202.85734%202.10892%203.10191%201.70206%203.5842C1.30739%204.05124%201.14282%204.67372%201.14282%205.33352V12.0002C1.14282%2012.8078%201.43463%2013.5346%201.98854%2014.0573C2.54168%2014.5777%203.30892%2014.8535%204.19044%2014.8535H7.17711L10.2826%2014.8573H10.2842C11.0278%2014.8611%2011.7645%2014.7049%2012.336%2014.3392C12.9303%2013.9582%2013.3333%2013.3525%2013.3333%2012.5525ZM3.39501%204.0002H3.42854V10.1625C3.42854%2010.8192%203.68942%2011.449%204.1538%2011.9134C4.61817%2012.3777%205.248%2012.6386%205.90473%2012.6386H12.1874C12.163%2012.9571%2012.003%2013.1948%2011.7196%2013.3761C11.3897%2013.588%2010.8891%2013.7175%2010.2887%2013.7144H10.2857L7.17558%2013.7106H4.19044C3.54816%2013.7106%203.07806%2013.5125%202.7733%2013.2253C2.47006%2012.9403%202.28568%2012.5259%202.28568%2012.0002V5.33352C2.28568%204.84971%202.40758%204.52057%202.5752%204.32096C2.73139%204.13658%202.98054%204.0002%203.39501%204.0002ZM8.01673%203.80972H11.619C11.7706%203.80972%2011.9159%203.86992%2012.0231%203.97709C12.1302%204.08425%2012.1904%204.22959%2012.1904%204.38115V7.98418C12.1904%208.13573%2012.1302%208.28107%2012.0231%208.38823C11.9159%208.4954%2011.7706%208.5556%2011.619%208.5556C11.4675%208.5556%2011.3221%208.4954%2011.215%208.38823C11.1078%208.28107%2011.0476%208.13573%2011.0476%207.98418V5.76019L7.07044%209.73731C7.0177%209.79186%206.95463%209.83536%206.8849%209.86528C6.81517%209.89519%206.74018%209.91092%206.6643%209.91154C6.58843%209.91217%206.51319%209.89767%206.44298%209.86891C6.37277%209.84014%206.30899%209.79768%206.25536%209.74401C6.20173%209.69033%206.15933%209.62651%206.13063%209.55627C6.10193%209.48603%206.08751%209.41078%206.0882%209.3349C6.0889%209.25903%206.1047%209.18406%206.13468%209.11435C6.16466%209.04465%206.20822%208.98162%206.26282%208.92893L10.24%204.95257H8.01673C7.86517%204.95257%207.71983%204.89237%207.61267%204.7852C7.5055%204.67804%207.4453%204.5327%207.4453%204.38115C7.4453%204.22959%207.5055%204.08425%207.61267%203.97709C7.71983%203.86992%207.86517%203.80972%208.01673%203.80972Z'%20/%3e%3c/svg%3e", Qm = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.63636%200H8.18182C9.08556%200%209.81818%200.732625%209.81818%201.63636C9.81818%202.5401%209.08556%203.27273%208.18182%203.27273H1.63636C0.732626%203.27273%200%202.5401%200%201.63636C0%200.732625%200.732625%200%201.63636%200ZM1.63636%201.09091C1.33512%201.09091%201.09091%201.33512%201.09091%201.63636C1.09091%201.93761%201.33512%202.18182%201.63636%202.18182H8.18182C8.48306%202.18182%208.72727%201.93761%208.72727%201.63636C8.72727%201.33512%208.48306%201.09091%208.18182%201.09091H1.63636Z%20M7.09091%204.36353H11.4545C12.3583%204.36353%2013.0909%205.09615%2013.0909%205.99989C13.0909%206.90363%2012.3583%207.63625%2011.4545%207.63625H7.09091C6.18717%207.63625%205.45454%206.90363%205.45454%205.99989C5.45454%205.09615%206.18717%204.36353%207.09091%204.36353ZM7.09091%205.45443C6.78966%205.45443%206.54545%205.69864%206.54545%205.99989C6.54545%206.30114%206.78966%206.54534%207.09091%206.54534H11.4545C11.7558%206.54534%2012%206.30114%2012%205.99989C12%205.69864%2011.7558%205.45443%2011.4545%205.45443H7.09091Z%20M7.09091%208.72729H11.4545C12.3583%208.72729%2013.0909%209.45992%2013.0909%2010.3637C13.0909%2011.2674%2012.3583%2012%2011.4545%2012H7.09091C6.18717%2012%205.45454%2011.2674%205.45454%2010.3637C5.45454%209.45992%206.18717%208.72729%207.09091%208.72729ZM7.09091%209.8182C6.78966%209.8182%206.54545%2010.0624%206.54545%2010.3637C6.54545%2010.6649%206.78966%2010.9091%207.09091%2010.9091H11.4545C11.7558%2010.9091%2012%2010.6649%2012%2010.3637C12%2010.0624%2011.7558%209.8182%2011.4545%209.8182H7.09091Z'%20/%3e%3c/svg%3e", ev = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M22.005%2011.9951L19.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M5.005%2011.9951L2.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M19.0796%2019.0676L16.9583%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M7.05884%207.04688L4.93752%204.92555'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4.9375%2019.0676L7.05882%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M16.9583%207.04688L19.0796%204.92556'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", tv = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%2011.243%206%20L%202.758%206%20L%202.758%208%20L%2011.243%208%20L%2011.243%206%20Z'%20/%3e%3c/svg%3e", nv = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%202.575%207.728%20L%205.782%2010.935%20L%2011.489%205.228%20L%2010.075%203.814%20L%205.782%208.107%20L%203.989%206.314%20L%202.575%207.728%20Z'%20/%3e%3c/svg%3e", rv = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%204.207%202.793%20L%207%205.586%20L%209.793%202.793%20L%2011.207%204.207%20L%208.414%207%20L%2011.207%209.793%20L%209.793%2011.207%20L%207%208.414%20L%204.207%2011.207%20L%202.793%209.793%20L%205.586%207%20L%202.793%204.207%20L%204.207%202.793%20Z%20M%207%200%20C%203.134%200%200%203.134%200%207%20C%200%2010.866%203.134%2014%207%2014%20C%2010.866%2014%2014%2010.866%2014%207%20C%2014%203.134%2010.866%200%207%200%20Z'%20/%3e%3c/svg%3e", ov = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207.006%20C%2014%208.867%2013.162%2010.744%2011.95%2011.956%20C%2010.738%2013.168%208.861%2014.006%207%2014.006%20C%205.139%2014.006%203.262%2013.168%202.05%2011.956%20C%200.838%2010.744%200%208.867%200%207.006%20C%200%205.145%200.838%203.268%202.05%202.056%20C%203.262%200.844%205.139%200.006%207%200.006%20C%208.861%200.006%2010.738%200.844%2011.95%202.056%20C%2013.162%203.268%2014%205.145%2014%207.006%20Z%20M%2010.536%203.47%20C%209.576%202.511%208.453%202.006%207%202.006%20C%205.547%202.006%204.424%202.511%203.464%203.47%20C%202.505%204.43%202%205.553%202%207.006%20C%202%208.459%202.505%209.582%203.464%2010.542%20C%204.424%2011.501%205.547%2012.006%207%2012.006%20C%208.453%2012.006%209.576%2011.501%2010.536%2010.542%20C%2011.495%209.582%2012%208.459%2012%207.006%20C%2012%205.553%2011.495%204.43%2010.536%203.47%20Z'%20/%3e%3c/svg%3e", sv = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.8668%208.36613L11.9048%207.978C11.967%207.66329%2012%207.33649%2012%207C12%206.66351%2011.967%206.3367%2011.9048%206.022L13.8668%205.63387C13.9542%206.07571%2014%206.5325%2014%207C14%207.4675%2013.9542%207.92429%2013.8668%208.36613ZM12.821%203.11069L11.159%204.22333C10.7934%203.67721%2010.3228%203.2066%209.77667%202.84098L10.8893%201.17904C11.6527%201.6901%2012.3099%202.34733%2012.821%203.11069ZM8.36613%200.133238L7.978%202.09521C7.66329%202.03296%207.33649%202%207%202C6.66351%202%206.3367%202.03296%206.022%202.09521L5.63387%200.133238C6.07571%200.0458286%206.5325%200%207%200C7.4675%200%207.92429%200.0458285%208.36613%200.133238ZM3.11069%201.17904L4.22333%202.84098C3.67721%203.2066%203.2066%203.67721%202.84098%204.22333L1.17904%203.11069C1.6901%202.34733%202.34733%201.6901%203.11069%201.17904ZM0.133238%205.63387C0.0458285%206.07571%200%206.5325%200%207C0%207.4675%200.0458286%207.92429%200.133238%208.36613L2.09521%207.978C2.03296%207.6633%202%207.33649%202%207C2%206.66351%202.03296%206.33671%202.09521%206.022L0.133238%205.63387ZM1.17904%2010.8893L2.84098%209.77667C3.2066%2010.3228%203.67721%2010.7934%204.22333%2011.159L3.11069%2012.821C2.34733%2012.3099%201.6901%2011.6527%201.17904%2010.8893ZM5.63387%2013.8668L6.022%2011.9048C6.33671%2011.967%206.66351%2012%207%2012C7.33649%2012%207.6633%2011.967%207.978%2011.9048L8.36613%2013.8668C7.92429%2013.9542%207.4675%2014%207%2014C6.5325%2014%206.07571%2013.9542%205.63387%2013.8668ZM10.8893%2012.821L9.77667%2011.159C10.3228%2010.7934%2010.7934%2010.3228%2011.159%209.77667L12.821%2010.8893C12.3099%2011.6527%2011.6527%2012.3099%2010.8893%2012.821Z'%20/%3e%3c/svg%3e", iv = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M7%2014C10.866%2014%2014%2010.866%2014%207C14%203.13401%2010.866%200%207%200C3.13401%200%200%203.13401%200%207C0%2010.866%203.13401%2014%207%2014ZM7%2012C4.23858%2012%202%209.76142%202%207C2%204.23858%204.23858%202%207%202C9.76142%202%2012%204.23858%2012%207C12%209.76142%209.76142%2012%207%2012ZM6%203V8H11C11%205.23858%208.76142%203%206%203Z'%20/%3e%3c/svg%3e", av = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%206.5%209%20C%206.224%209%206%209.224%206%209.5%20L%206%2010.5%20C%206%2010.776%206.224%2011%206.5%2011%20L%207.5%2011%20C%207.776%2011%208%2010.776%208%2010.5%20L%208%209.5%20C%208%209.224%207.776%209%207.5%209%20L%206.5%209%20Z%20M%206.5%203%20C%206.224%203%206%203.224%206%203.5%20L%206%207.5%20C%206%207.776%206.224%208%206.5%208%20L%207.5%208%20C%207.776%208%208%207.776%208%207.5%20L%208%203.5%20C%208%203.224%207.776%203%207.5%203%20L%206.5%203%20Z'%20/%3e%3c/svg%3e", lv = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.78814e-07%200.666667C1.78814e-07%200.298477%200.298477%200%200.666667%200H11.3333C11.7015%200%2012%200.298477%2012%200.666667C12%201.03486%2011.7015%201.33333%2011.3333%201.33333H0.666667C0.298477%201.33333%201.78814e-07%201.03486%201.78814e-07%200.666667ZM1.78814e-07%203.62963C1.78814e-07%203.26144%200.298477%202.96296%200.666667%202.96296H11.3333C11.7015%202.96296%2012%203.26144%2012%203.62963C12%203.99782%2011.7015%204.2963%2011.3333%204.2963H0.666667C0.298477%204.2963%201.78814e-07%203.99782%201.78814e-07%203.62963ZM0%206.59259C0%206.2244%200.298477%205.92593%200.666667%205.92593H11.3333C11.7015%205.92593%2012%206.2244%2012%206.59259C12%206.96078%2011.7015%207.25926%2011.3333%207.25926H0.666667C0.298477%207.25926%200%206.96078%200%206.59259ZM0%209.55556C0%209.18737%200.298477%208.88889%200.666667%208.88889H8.66667C9.03486%208.88889%209.33333%209.18737%209.33333%209.55556C9.33333%209.92375%209.03486%2010.2222%208.66667%2010.2222H0.666667C0.298477%2010.2222%200%209.92375%200%209.55556Z'%20/%3e%3c/svg%3e", cv = "data:image/svg+xml,%3csvg%20aria-hidden='true'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20style='stroke:currentColor;stroke-opacity:%201;'%20d='M8%208V4a2%202%200%200%201%202-2h4a2%202%200%200%201%202%202v4m6%2012V10a2%202%200%200%200-2-2H4a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2ZM8%2013v4m8-4v4M2%2015h20'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", uv = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M214.433%2056C232.908%2023.9999%20279.096%2024.0001%20297.571%2056L477.704%20368C496.18%20400%20473.085%20440%20436.135%20440H75.8685C38.918%20440%2015.8241%20400%2034.2993%20368L214.433%2056ZM256.002%20144L131.294%20360H380.709L256.002%20144Z'%20/%3e%3c/svg%3e", fv = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='2'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='7'%20y='3'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='7'%20y='19'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='3'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='19'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3c/svg%3e", pT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hT(e, t) {
  return w(), A("svg", pT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 12H9m12 6H7M21 6H3"
    }, null, -1)
  ]));
}
const dv = { name: "lucide-align-right", render: hT }, gT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mT(e, t) {
  return w(), A("svg", gT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "20",
        height: "5",
        x: "2",
        y: "3",
        rx: "1"
      }),
      v("path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4" })
    ], -1)
  ]));
}
const pv = { name: "lucide-archive", render: mT }, vT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bT(e, t) {
  return w(), A("svg", vT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 5v14m7-7l-7 7l-7-7"
    }, null, -1)
  ]));
}
const hv = { name: "lucide-arrow-down", render: bT }, _T = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function yT(e, t) {
  return w(), A("svg", _T, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m12 19l-7-7l7-7m7 7H5"
    }, null, -1)
  ]));
}
const Lu = { name: "lucide-arrow-left", render: yT }, wT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function kT(e, t) {
  return w(), A("svg", wT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
    }, null, -1)
  ]));
}
const gv = { name: "lucide-arrow-left-right", render: kT }, CT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xT(e, t) {
  return w(), A("svg", CT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7l7 7l-7 7"
    }, null, -1)
  ]));
}
const mv = { name: "lucide-arrow-right", render: xT }, ET = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ST(e, t) {
  return w(), A("svg", ET, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 5v14m18-7H7m8 6l6-6l-6-6"
    }, null, -1)
  ]));
}
const AT = { name: "lucide-arrow-right-from-line", render: ST }, TT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function MT(e, t) {
  return w(), A("svg", TT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 12H3m8 6l6-6l-6-6m10-1v14"
    }, null, -1)
  ]));
}
const $T = { name: "lucide-arrow-right-to-line", render: MT }, LT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function IT(e, t) {
  return w(), A("svg", LT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 12l7-7l7 7m-7 7V5"
    }, null, -1)
  ]));
}
const vv = { name: "lucide-arrow-up", render: IT }, OT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function RT(e, t) {
  return w(), A("svg", OT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      v("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })
    ], -1)
  ]));
}
const bv = { name: "lucide-at-sign", render: RT }, PT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function DT(e, t) {
  return w(), A("svg", PT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "m4.9 4.9l14.2 14.2" })
    ], -1)
  ]));
}
const _v = { name: "lucide-ban", render: DT }, NT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function BT(e, t) {
  return w(), A("svg", NT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    }, null, -1)
  ]));
}
const yv = { name: "lucide-bell", render: BT }, FT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qT(e, t) {
  return w(), A("svg", FT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }, null, -1)
  ]));
}
const wv = { name: "lucide-book", render: qT }, zT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function HT(e, t) {
  return w(), A("svg", zT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 8V4H8" }),
      v("rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2"
      }),
      v("path", { d: "M2 14h2m16 0h2m-7-1v2m-6-2v2" })
    ], -1)
  ]));
}
const kv = { name: "lucide-bot", render: HT }, jT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function VT(e, t) {
  return w(), A("svg", jT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
      v("path", { d: "m3.3 7l8.7 5l8.7-5M12 22V12" })
    ], -1)
  ]));
}
const Cv = { name: "lucide-box", render: VT }, UT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function KT(e, t) {
  return w(), A("svg", UT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }),
      v("path", { d: "M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" }),
      v("path", { d: "M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18" })
    ], -1)
  ]));
}
const xv = { name: "lucide-brain", render: KT }, GT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function WT(e, t) {
  return w(), A("svg", GT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m8 2l1.88 1.88m4.24 0L16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }),
      v("path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6m0 0v-9" }),
      v("path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5m3 8H2m1 8c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4m-.8 4c2.1.1 3.8 1.9 3.8 4" })
    ], -1)
  ]));
}
const Ev = { name: "lucide-bug", render: WT }, ZT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function XT(e, t) {
  return w(), A("svg", ZT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "16",
        height: "20",
        x: "4",
        y: "2",
        rx: "2"
      }),
      v("path", { d: "M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" })
    ], -1)
  ]));
}
const Sv = { name: "lucide-calculator", render: XT }, YT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function JT(e, t) {
  return w(), A("svg", YT, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M8 2v4m8-4v4" }),
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2"
      }),
      v("path", { d: "M3 10h18" })
    ], -1)
  ]));
}
const Av = { name: "lucide-calendar", render: JT }, QT = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function eM(e, t) {
  return w(), A("svg", QT, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3 15l4-8l4 8m-7-2h6m5-2h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"
    }, null, -1)
  ]));
}
const Tv = { name: "lucide-case-upper", render: eM }, tM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nM(e, t) {
  return w(), A("svg", tM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5"
    }, null, -1)
  ]));
}
const Mv = { name: "lucide-chart-column-decreasing", render: nM }, rM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function oM(e, t) {
  return w(), A("svg", rM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 6L9 17l-5-5"
    }, null, -1)
  ]));
}
const $v = { name: "lucide-check", render: oM }, sM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function iM(e, t) {
  return w(), A("svg", sM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"
    }, null, -1)
  ]));
}
const Lv = { name: "lucide-check-check", render: iM }, aM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lM(e, t) {
  return w(), A("svg", aM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 9l6 6l6-6"
    }, null, -1)
  ]));
}
const ii = { name: "lucide-chevron-down", render: lM }, cM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function uM(e, t) {
  return w(), A("svg", cM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 18l-6-6l6-6"
    }, null, -1)
  ]));
}
const ai = { name: "lucide-chevron-left", render: uM }, fM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dM(e, t) {
  return w(), A("svg", fM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m9 18l6-6l-6-6"
    }, null, -1)
  ]));
}
const li = { name: "lucide-chevron-right", render: dM }, pM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hM(e, t) {
  return w(), A("svg", pM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18 15l-6-6l-6 6"
    }, null, -1)
  ]));
}
const ci = { name: "lucide-chevron-up", render: hM }, gM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mM(e, t) {
  return w(), A("svg", gM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 20l5-5l5 5M7 4l5 5l5-5"
    }, null, -1)
  ]));
}
const vM = { name: "lucide-chevrons-down-up", render: mM }, bM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _M(e, t) {
  return w(), A("svg", bM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m11 17l-5-5l5-5m7 10l-5-5l5-5"
    }, null, -1)
  ]));
}
const Iv = { name: "lucide-chevrons-left", render: _M }, yM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wM(e, t) {
  return w(), A("svg", yM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 15l5 5l5-5M7 9l5-5l5 5"
    }, null, -1)
  ]));
}
const Ov = { name: "lucide-chevrons-up-down", render: wM }, kM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function CM(e, t) {
  return w(), A("svg", kM, t[0] || (t[0] = [
    v("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, null, -1)
  ]));
}
const Rv = { name: "lucide-circle", render: CM }, xM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function EM(e, t) {
  return w(), A("svg", xM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M12 8v4m0 4h.01" })
    ], -1)
  ]));
}
const Pv = { name: "lucide-circle-alert", render: EM }, SM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AM(e, t) {
  return w(), A("svg", SM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
const Dv = { name: "lucide-circle-check", render: AM }, TM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function MM(e, t) {
  return w(), A("svg", TM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      })
    ], -1)
  ]));
}
const Nv = { name: "lucide-circle-dot", render: MM }, $M = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function LM(e, t) {
  return w(), A("svg", $M, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" })
    ], -1)
  ]));
}
const Iu = { name: "lucide-circle-help", render: LM }, IM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function OM(e, t) {
  return w(), A("svg", IM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M8 12h8" })
    ], -1)
  ]));
}
const Bv = { name: "lucide-circle-minus", render: OM }, RM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function PM(e, t) {
  return w(), A("svg", RM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M10 15V9m4 6V9" })
    ], -1)
  ]));
}
const Fv = { name: "lucide-circle-pause", render: PM }, DM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function NM(e, t) {
  return w(), A("svg", DM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "m10 8l6 4l-6 4z" })
    ], -1)
  ]));
}
const qv = { name: "lucide-circle-play", render: NM }, BM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function FM(e, t) {
  return w(), A("svg", BM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ]));
}
const zv = { name: "lucide-circle-plus", render: FM }, qM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zM(e, t) {
  return w(), A("svg", qM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M18 20a6 6 0 0 0-12 0" }),
      v("circle", {
        cx: "12",
        cy: "10",
        r: "4"
      }),
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const Hv = { name: "lucide-circle-user-round", render: zM }, HM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jM(e, t) {
  return w(), A("svg", HM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "m15 9l-6 6m0-6l6 6" })
    ], -1)
  ]));
}
const jv = { name: "lucide-circle-x", render: jM }, VM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function UM(e, t) {
  return w(), A("svg", VM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      v("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01" })
    ], -1)
  ]));
}
const Vv = { name: "lucide-clipboard-list", render: UM }, KM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function GM(e, t) {
  return w(), A("svg", KM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 6v6l4 2" }),
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const Uv = { name: "lucide-clock", render: GM }, WM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ZM(e, t) {
  return w(), A("svg", WM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
    }, null, -1)
  ]));
}
const Kv = { name: "lucide-cloud", render: ZM }, XM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YM(e, t) {
  return w(), A("svg", XM, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 13v8l-4-4m4 4l4-4" }),
      v("path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" })
    ], -1)
  ]));
}
const Gv = { name: "lucide-cloud-download", render: YM }, JM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QM(e, t) {
  return w(), A("svg", JM, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 18l6-6l-6-6M8 6l-6 6l6 6"
    }, null, -1)
  ]));
}
const Wv = { name: "lucide-code", render: QM }, e$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function t$(e, t) {
  return w(), A("svg", e$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16" }),
      v("path", { d: "M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-12v2m0 18v-2m5 .66l-1-1.73m-5-8.66L7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2m16.66-5l-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66l-4 6.93" })
    ], -1)
  ]));
}
const Ou = { name: "lucide-cog", render: t$ }, n$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function r$(e, t) {
  return w(), A("svg", n$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M12 18a6 6 0 0 0 0-12z" })
    ], -1)
  ]));
}
const Zv = { name: "lucide-contrast", render: r$ }, o$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function s$(e, t) {
  return w(), A("svg", o$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2"
      }),
      v("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
    ], -1)
  ]));
}
const Xv = { name: "lucide-copy", render: s$ }, i$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function a$(e, t) {
  return w(), A("svg", i$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M22 12h-4M6 12H2m10-6V2m0 20v-4" })
    ], -1)
  ]));
}
const l$ = { name: "lucide-crosshair", render: a$ }, c$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function u$(e, t) {
  return w(), A("svg", c$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }),
      v("path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }),
      v("path", { d: "M3 12a9 3 0 0 0 18 0" })
    ], -1)
  ]));
}
const Yv = { name: "lucide-database", render: u$ }, f$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function d$(e, t) {
  return w(), A("svg", f$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }),
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const Jv = { name: "lucide-earth", render: d$ }, p$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h$(e, t) {
  return w(), A("svg", p$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      v("circle", {
        cx: "19",
        cy: "12",
        r: "1"
      }),
      v("circle", {
        cx: "5",
        cy: "12",
        r: "1"
      })
    ], -1)
  ]));
}
const Qv = { name: "lucide-ellipsis", render: h$ }, g$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m$(e, t) {
  return w(), A("svg", g$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      v("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }),
      v("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
const eb = { name: "lucide-ellipsis-vertical", render: m$ }, v$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function b$(e, t) {
  return w(), A("svg", v$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 9h14M5 15h14"
    }, null, -1)
  ]));
}
const tb = { name: "lucide-equal", render: b$ }, _$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y$(e, t) {
  return w(), A("svg", _$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }, null, -1)
  ]));
}
const nb = { name: "lucide-external-link", render: y$ }, w$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k$(e, t) {
  return w(), A("svg", w$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" }),
      v("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ], -1)
  ]));
}
const rb = { name: "lucide-eye", render: k$ }, C$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x$(e, t) {
  return w(), A("svg", C$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242" }),
      v("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20" })
    ], -1)
  ]));
}
const ob = { name: "lucide-eye-off", render: x$ }, E$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function S$(e, t) {
  return w(), A("svg", E$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      v("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ]));
}
const sb = { name: "lucide-file", render: S$ }, A$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T$(e, t) {
  return w(), A("svg", A$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M10 12v-1m0 7v-2m0-9V6m4-4v4a2 2 0 0 0 2 2h4" }),
      v("path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }),
      v("circle", {
        cx: "10",
        cy: "20",
        r: "2"
      })
    ], -1)
  ]));
}
const ib = { name: "lucide-file-archive", render: T$ }, M$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $$(e, t) {
  return w(), A("svg", M$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M10 12.5L8 15l2 2.5m4-5l2 2.5l-2 2.5M14 2v4a2 2 0 0 0 2 2h4" }),
      v("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" })
    ], -1)
  ]));
}
const ab = { name: "lucide-file-code", render: $$ }, L$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I$(e, t) {
  return w(), A("svg", L$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      v("path", { d: "M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3l3 3l3-3" })
    ], -1)
  ]));
}
const lb = { name: "lucide-file-down", render: I$ }, O$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function R$(e, t) {
  return w(), A("svg", O$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
      v("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M2 15h10m-3 3l3-3l-3-3" })
    ], -1)
  ]));
}
const cb = { name: "lucide-file-input", render: R$ }, P$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function D$(e, t) {
  return w(), A("svg", P$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2a2 2 0 0 0-2 2" }),
      v("path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6m-1 9l-3 3" }),
      v("path", { d: "m5 17l-3-3h10" })
    ], -1)
  ]));
}
const ub = { name: "lucide-file-output", render: D$ }, N$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B$(e, t) {
  return w(), A("svg", N$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      v("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8" })
    ], -1)
  ]));
}
const Ru = { name: "lucide-file-text", render: B$ }, F$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q$(e, t) {
  return w(), A("svg", F$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }),
      v("path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" }),
      v("path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" })
    ], -1)
  ]));
}
const fb = { name: "lucide-files", render: q$ }, z$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function H$(e, t) {
  return w(), A("svg", z$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6" }),
      v("path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2" })
    ], -1)
  ]));
}
const db = { name: "lucide-fingerprint", render: H$ }, j$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function V$(e, t) {
  return w(), A("svg", j$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"
    }, null, -1)
  ]));
}
const pb = { name: "lucide-flask-conical", render: V$ }, U$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function K$(e, t) {
  return w(), A("svg", U$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
const hb = { name: "lucide-folder", render: K$ }, G$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W$(e, t) {
  return w(), A("svg", G$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
    }, null, -1)
  ]));
}
const gb = { name: "lucide-folder-open", render: W$ }, Z$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function X$(e, t) {
  return w(), A("svg", Z$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 10v6m-3-3h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
const mb = { name: "lucide-folder-plus", render: X$ }, Y$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function J$(e, t) {
  return w(), A("svg", Y$, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
    }, null, -1)
  ]));
}
const vb = { name: "lucide-funnel", render: J$ }, Q$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function eL(e, t) {
  return w(), A("svg", Q$, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M6 3h12l4 6l-10 13L2 9Z" }),
      v("path", { d: "M11 3L8 9l4 13l4-13l-3-6M2 9h20" })
    ], -1)
  ]));
}
const bb = { name: "lucide-gem", render: eL }, tL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nL(e, t) {
  return w(), A("svg", tL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "4",
        x: "3",
        y: "8",
        rx: "1"
      }),
      v("path", { d: "M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5" })
    ], -1)
  ]));
}
const _b = { name: "lucide-gift", render: nL }, rL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function oL(e, t) {
  return w(), A("svg", rL, t[0] || (t[0] = [
    $r('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></g>', 1)
  ]));
}
const yb = { name: "lucide-git-branch", render: oL }, sL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function iL(e, t) {
  return w(), A("svg", sL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" })
    ], -1)
  ]));
}
const wb = { name: "lucide-globe", render: iL }, aL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lL(e, t) {
  return w(), A("svg", aL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6" }),
      v("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })
    ], -1)
  ]));
}
const kb = { name: "lucide-graduation-cap", render: lL }, cL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function uL(e, t) {
  return w(), A("svg", cL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 3v18m-9-9h18" }),
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      })
    ], -1)
  ]));
}
const Cb = { name: "lucide-grid-2x2", render: uL }, fL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dL(e, t) {
  return w(), A("svg", fL, t[0] || (t[0] = [
    $r('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></g>', 1)
  ]));
}
const xb = { name: "lucide-grip-vertical", render: dL }, pL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hL(e, t) {
  return w(), A("svg", pL, t[0] || (t[0] = [
    $r('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></g>', 1)
  ]));
}
const Eb = { name: "lucide-hand-coins", render: hL }, gL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mL(e, t) {
  return w(), A("svg", gL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m11 17l2 2a1 1 0 1 0 3-3" }),
      v("path", { d: "m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }),
      v("path", { d: "m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" })
    ], -1)
  ]));
}
const Sb = { name: "lucide-handshake", render: mL }, vL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bL(e, t) {
  return w(), A("svg", vL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01"
    }, null, -1)
  ]));
}
const Ab = { name: "lucide-hard-drive", render: bL }, _L = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function yL(e, t) {
  return w(), A("svg", _L, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 2v8m4-4l-4 4l-4-4" }),
      v("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2"
      }),
      v("path", { d: "M6 18h.01M10 18h.01" })
    ], -1)
  ]));
}
const Tb = { name: "lucide-hard-drive-download", render: yL }, wL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function kL(e, t) {
  return w(), A("svg", wL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 9h16M4 15h16M10 3L8 21m8-18l-2 18"
    }, null, -1)
  ]));
}
const Mb = { name: "lucide-hash", render: kL }, CL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xL(e, t) {
  return w(), A("svg", CL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" }),
      v("path", { d: "M3 3v5h5m4-1v5l4 2" })
    ], -1)
  ]));
}
const $b = { name: "lucide-history", render: xL }, EL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function SL(e, t) {
  return w(), A("svg", EL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
    }, null, -1)
  ]));
}
const Lb = { name: "lucide-hourglass", render: SL }, AL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function TL(e, t) {
  return w(), A("svg", AL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
      v("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
    ], -1)
  ]));
}
const Ib = { name: "lucide-house", render: TL }, ML = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $L(e, t) {
  return w(), A("svg", ML, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2"
      }),
      v("circle", {
        cx: "9",
        cy: "9",
        r: "2"
      }),
      v("path", { d: "m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
    ], -1)
  ]));
}
const Ob = { name: "lucide-image", render: $L }, LL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function IL(e, t) {
  return w(), A("svg", LL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }),
      v("path", { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11" })
    ], -1)
  ]));
}
const Rb = { name: "lucide-inbox", render: IL }, OL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function RL(e, t) {
  return w(), A("svg", OL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M12 16v-4m0-4h.01" })
    ], -1)
  ]));
}
const Pu = { name: "lucide-info", render: RL }, PL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function DL(e, t) {
  return w(), A("svg", PL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }),
      v("circle", {
        cx: "16.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
const Pb = { name: "lucide-key-round", render: DL }, NL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function BL(e, t) {
  return w(), A("svg", NL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
    }, null, -1)
  ]));
}
const Db = { name: "lucide-languages", render: BL }, FL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qL(e, t) {
  return w(), A("svg", FL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }),
      v("path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }),
      v("path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" })
    ], -1)
  ]));
}
const Nb = { name: "lucide-layers", render: qL }, zL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function HL(e, t) {
  return w(), A("svg", zL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
    }, null, -1)
  ]));
}
const Bb = { name: "lucide-lightbulb", render: HL }, jL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function VL(e, t) {
  return w(), A("svg", jL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      v("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    ], -1)
  ]));
}
const Fb = { name: "lucide-link", render: VL }, UL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function KL(e, t) {
  return w(), A("svg", UL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13"
    }, null, -1)
  ]));
}
const qb = { name: "lucide-list", render: KL }, GL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function WL(e, t) {
  return w(), A("svg", GL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3 17l2 2l4-4M3 7l2 2l4-4m4 1h8m-8 6h8m-8 6h8"
    }, null, -1)
  ]));
}
const zb = { name: "lucide-list-checks", render: WL }, ZL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function XL(e, t) {
  return w(), A("svg", ZL, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2"
      }),
      v("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
    ], -1)
  ]));
}
const Hb = { name: "lucide-lock", render: XL }, YL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function JL(e, t) {
  return w(), A("svg", YL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    }, null, -1)
  ]));
}
const jb = { name: "lucide-log-in", render: JL }, QL = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function eI(e, t) {
  return w(), A("svg", QL, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }, null, -1)
  ]));
}
const Vb = { name: "lucide-log-out", render: eI }, tI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nI(e, t) {
  return w(), A("svg", tI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }),
      v("rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2"
      })
    ], -1)
  ]));
}
const Ub = { name: "lucide-mail", render: nI }, rI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function oI(e, t) {
  return w(), A("svg", rI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"
    }, null, -1)
  ]));
}
const Kb = { name: "lucide-maximize", render: oI }, sI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function iI(e, t) {
  return w(), A("svg", sI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"
    }, null, -1)
  ]));
}
const Gb = { name: "lucide-maximize-2", render: iI }, aI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lI(e, t) {
  return w(), A("svg", aI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 12h16M4 18h16M4 6h16"
    }, null, -1)
  ]));
}
const Wb = { name: "lucide-menu", render: lI }, cI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function uI(e, t) {
  return w(), A("svg", cI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
    }, null, -1)
  ]));
}
const Zb = { name: "lucide-message-circle", render: uI }, fI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dI(e, t) {
  return w(), A("svg", fI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm4 0h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
    }, null, -1)
  ]));
}
const Xb = { name: "lucide-messages-square", render: dI }, pI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hI(e, t) {
  return w(), A("svg", pI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 13v8m0-18v3M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
    }, null, -1)
  ]));
}
const Yb = { name: "lucide-milestone", render: hI }, gI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mI(e, t) {
  return w(), A("svg", gI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"
    }, null, -1)
  ]));
}
const vI = { name: "lucide-minimize-2", render: mI }, bI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _I(e, t) {
  return w(), A("svg", bI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
    }, null, -1)
  ]));
}
const Jb = { name: "lucide-mouse-pointer", render: _I }, yI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wI(e, t) {
  return w(), A("svg", yI, t[0] || (t[0] = [
    $r('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="6" height="6" x="16" y="16" rx="1"></rect><rect width="6" height="6" x="2" y="16" rx="1"></rect><rect width="6" height="6" x="9" y="2" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g>', 1)
  ]));
}
const Qb = { name: "lucide-network", render: wI }, kI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function CI(e, t) {
  return w(), A("svg", kI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }),
      v("path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }),
      v("path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z" })
    ], -1)
  ]));
}
const e_ = { name: "lucide-package-open", render: CI }, xI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function EI(e, t) {
  return w(), A("svg", xI, t[0] || (t[0] = [
    $r('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></g>', 1)
  ]));
}
const t_ = { name: "lucide-palette", render: EI }, SI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AI(e, t) {
  return w(), A("svg", SI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "4",
        height: "16",
        x: "14",
        y: "4",
        rx: "1"
      }),
      v("rect", {
        width: "4",
        height: "16",
        x: "6",
        y: "4",
        rx: "1"
      })
    ], -1)
  ]));
}
const n_ = { name: "lucide-pause", render: AI }, TI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function MI(e, t) {
  return w(), A("svg", TI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }, null, -1)
  ]));
}
const r_ = { name: "lucide-pen", render: MI }, $I = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function LI(e, t) {
  return w(), A("svg", $I, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"
    }, null, -1)
  ]));
}
const o_ = { name: "lucide-pencil", render: LI }, II = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function OI(e, t) {
  return w(), A("svg", II, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4a1 1 0 0 1 1 1z"
    }, null, -1)
  ]));
}
const s_ = { name: "lucide-pin", render: OI }, RI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function PI(e, t) {
  return w(), A("svg", RI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 3l14 9l-14 9z"
    }, null, -1)
  ]));
}
const i_ = { name: "lucide-play", render: PI }, DI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function NI(e, t) {
  return w(), A("svg", DI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 22v-5M9 8V2m6 6V2m3 6v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
    }, null, -1)
  ]));
}
const a_ = { name: "lucide-plug", render: NI }, BI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function FI(e, t) {
  return w(), A("svg", BI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7v14"
    }, null, -1)
  ]));
}
const l_ = { name: "lucide-plus", render: FI }, qI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zI(e, t) {
  return w(), A("svg", qI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }),
      v("path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" })
    ], -1)
  ]));
}
const c_ = { name: "lucide-pocket-knife", render: zI }, HI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jI(e, t) {
  return w(), A("svg", HI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"
    }, null, -1)
  ]));
}
const u_ = { name: "lucide-power", render: jI }, VI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function UI(e, t) {
  return w(), A("svg", VI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m15 14l5-5l-5-5" }),
      v("path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" })
    ], -1)
  ]));
}
const f_ = { name: "lucide-redo-2", render: UI }, KI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function GI(e, t) {
  return w(), A("svg", KI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" }),
      v("path", { d: "M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" }),
      v("path", { d: "M8 16H3v5" })
    ], -1)
  ]));
}
const ui = { name: "lucide-refresh-cw", render: GI }, WI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ZI(e, t) {
  return w(), A("svg", WI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 7V4h16v3M5 20h6m2-16L8 20m7-5l5 5m0-5l-5 5"
    }, null, -1)
  ]));
}
const d_ = { name: "lucide-remove-formatting", render: ZI }, XI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YI(e, t) {
  return w(), A("svg", XI, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" }),
      v("circle", {
        cx: "5",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
const p_ = { name: "lucide-rss", render: YI }, JI = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QI(e, t) {
  return w(), A("svg", JI, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"
    }, null, -1)
  ]));
}
const h_ = { name: "lucide-satellite-dish", render: QI }, eO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tO(e, t) {
  return w(), A("svg", eO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }),
      v("path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7" })
    ], -1)
  ]));
}
const g_ = { name: "lucide-save", render: tO }, nO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rO(e, t) {
  return w(), A("svg", nO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h2c2 0 5-1 7-2c2 1 5 2 7 2h2"
    }, null, -1)
  ]));
}
const m_ = { name: "lucide-scale", render: rO }, oO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sO(e, t) {
  return w(), A("svg", oO, t[0] || (t[0] = [
    $r('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g>', 1)
  ]));
}
const Du = { name: "lucide-scissors", render: sO }, iO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aO(e, t) {
  return w(), A("svg", iO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m21 21l-4.34-4.34" }),
      v("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      })
    ], -1)
  ]));
}
const v_ = { name: "lucide-search", render: aO }, lO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cO(e, t) {
  return w(), A("svg", lO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
    }, null, -1)
  ]));
}
const b_ = { name: "lucide-send", render: cO }, uO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fO(e, t) {
  return w(), A("svg", uO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2"
      }),
      v("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2"
      }),
      v("path", { d: "M6 6h.01M6 18h.01" })
    ], -1)
  ]));
}
const __ = { name: "lucide-server", render: fO }, dO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pO(e, t) {
  return w(), A("svg", dO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
    }, null, -1)
  ]));
}
const y_ = { name: "lucide-share", render: pO }, hO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gO(e, t) {
  return w(), A("svg", hO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 4h-7m-4 0H3m18 8h-9m-4 0H3m18 8h-5m-4 0H3M14 2v4m-6 4v4m8 4v4"
    }, null, -1)
  ]));
}
const w_ = { name: "lucide-sliders-horizontal", render: gO }, mO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vO(e, t) {
  return w(), A("svg", mO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      v("path", { d: "M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" })
    ], -1)
  ]));
}
const k_ = { name: "lucide-smile", render: vO }, bO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _O(e, t) {
  return w(), A("svg", bO, t[0] || (t[0] = [
    v("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      rx: "2"
    }, null, -1)
  ]));
}
const C_ = { name: "lucide-square", render: _O }, yO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wO(e, t) {
  return w(), A("svg", yO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      v("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
const x_ = { name: "lucide-square-check", render: wO }, kO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function CO(e, t) {
  return w(), A("svg", kO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
      v("path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" })
    ], -1)
  ]));
}
const E_ = { name: "lucide-square-pen", render: CO }, xO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function EO(e, t) {
  return w(), A("svg", xO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      v("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ]));
}
const S_ = { name: "lucide-square-plus", render: EO }, SO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AO(e, t) {
  return w(), A("svg", SO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }),
      v("path", { d: "M15 3v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ]));
}
const A_ = { name: "lucide-sticky-note", render: AO }, TO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function MO(e, t) {
  return w(), A("svg", TO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      v("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
    ], -1)
  ]));
}
const T_ = { name: "lucide-sun", render: MO }, $O = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function LO(e, t) {
  return w(), A("svg", $O, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M12 3v18" }),
      v("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      v("path", { d: "M3 9h18M3 15h18" })
    ], -1)
  ]));
}
const M_ = { name: "lucide-table", render: LO }, IO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function OO(e, t) {
  return w(), A("svg", IO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m15 5l6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }),
      v("path", { d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" }),
      v("circle", {
        cx: "6.5",
        cy: "9.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
const $_ = { name: "lucide-tags", render: OO }, RO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function PO(e, t) {
  return w(), A("svg", RO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 19h8M4 17l6-6l-6-6"
    }, null, -1)
  ]));
}
const L_ = { name: "lucide-terminal", render: PO }, DO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function NO(e, t) {
  return w(), A("svg", DO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 14V2M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88"
    }, null, -1)
  ]));
}
const I_ = { name: "lucide-thumbs-down", render: NO }, BO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function FO(e, t) {
  return w(), A("svg", BO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"
    }, null, -1)
  ]));
}
const O_ = { name: "lucide-thumbs-up", render: FO }, qO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zO(e, t) {
  return w(), A("svg", qO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"
    }, null, -1)
  ]));
}
const R_ = { name: "lucide-trash-2", render: zO }, HO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jO(e, t) {
  return w(), A("svg", HO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3"
    }, null, -1)
  ]));
}
const P_ = { name: "lucide-tree-pine", render: jO }, VO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function UO(e, t) {
  return w(), A("svg", VO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"
    }, null, -1)
  ]));
}
const D_ = { name: "lucide-triangle-alert", render: UO }, KO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function GO(e, t) {
  return w(), A("svg", KO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M9 14L4 9l5-5" }),
      v("path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" })
    ], -1)
  ]));
}
const N_ = { name: "lucide-undo-2", render: GO }, WO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ZO(e, t) {
  return w(), A("svg", WO, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07a5.006 5.006 0 0 0-6.95 0l-1.72 1.71m-6.58 6.57l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07a5.006 5.006 0 0 0 6.95 0l1.71-1.71M8 2v3M2 8h3m11 11v3m3-6h3"
    }, null, -1)
  ]));
}
const B_ = { name: "lucide-unlink", render: ZO }, XO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YO(e, t) {
  return w(), A("svg", XO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
      v("circle", {
        cx: "12",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const F_ = { name: "lucide-user", render: YO }, JO = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QO(e, t) {
  return w(), A("svg", JO, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      v("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const q_ = { name: "lucide-user-check", render: QO }, eR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tR(e, t) {
  return w(), A("svg", eR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "10",
        cy: "7",
        r: "4"
      }),
      v("path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2m12-5.5V14a2 2 0 0 1 4 0v1.5" }),
      v("rect", {
        width: "8",
        height: "5",
        x: "13",
        y: "16",
        rx: ".899"
      })
    ], -1)
  ]));
}
const z_ = { name: "lucide-user-lock", render: tR }, nR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rR(e, t) {
  return w(), A("svg", nR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "12",
        cy: "8",
        r: "5"
      }),
      v("path", { d: "M20 21a8 8 0 0 0-16 0" })
    ], -1)
  ]));
}
const H_ = { name: "lucide-user-round", render: rR }, oR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sR(e, t) {
  return w(), A("svg", oR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" }),
      v("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const j_ = { name: "lucide-users", render: sR }, iR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aR(e, t) {
  return w(), A("svg", iR, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9M15 9l-6 6m0-6l6 6"
    }, null, -1)
  ]));
}
const V_ = { name: "lucide-variable", render: aR }, lR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cR(e, t) {
  return w(), A("svg", lR, t[0] || (t[0] = [
    $r('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m7.9 7.9l2.7 2.7"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m13.4 10.6l2.7-2.7"></path><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m7.9 16.1l2.7-2.7"></path><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m13.4 13.4l2.7 2.7"></path><circle cx="12" cy="12" r="2"></circle></g>', 1)
  ]));
}
const U_ = { name: "lucide-vault", render: cR }, uR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fR(e, t) {
  return w(), A("svg", uR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("path", { d: "m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
      v("rect", {
        width: "14",
        height: "12",
        x: "2",
        y: "6",
        rx: "2"
      })
    ], -1)
  ]));
}
const K_ = { name: "lucide-video", render: fR }, dR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pR(e, t) {
  return w(), A("svg", dR, t[0] || (t[0] = [
    $r('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3l-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7l3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></g>', 1)
  ]));
}
const G_ = { name: "lucide-waypoints", render: pR }, hR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gR(e, t) {
  return w(), A("svg", hR, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    }, null, -1)
  ]));
}
const W_ = { name: "lucide-wrench", render: gR }, mR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vR(e, t) {
  return w(), A("svg", mR, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L6 18M6 6l12 12"
    }, null, -1)
  ]));
}
const Nu = { name: "lucide-x", render: vR }, bR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _R(e, t) {
  return w(), A("svg", bR, t[0] || (t[0] = [
    v("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
    }, null, -1)
  ]));
}
const Z_ = { name: "lucide-zap", render: _R }, yR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wR(e, t) {
  return w(), A("svg", yR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      v("path", { d: "m21 21l-4.35-4.35M11 8v6m-3-3h6" })
    ], -1)
  ]));
}
const X_ = { name: "lucide-zoom-in", render: wR }, kR = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function CR(e, t) {
  return w(), A("svg", kR, t[0] || (t[0] = [
    v("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      v("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      v("path", { d: "m21 21l-4.35-4.35M8 11h6" })
    ], -1)
  ]));
}
const Y_ = { name: "lucide-zoom-out", render: CR }, Cp = {
  // customIcons
  variable: V_,
  "pop-out": Jm,
  triangle: uv,
  "status-completed": nv,
  "status-waiting": iv,
  "status-error": rv,
  "status-canceled": tv,
  "status-new": ov,
  "status-unknown": sv,
  "status-warning": av,
  "vector-square": fv,
  schema: Qm,
  json: Ym,
  binary: Zm,
  text: lv,
  toolbox: cv,
  spinner: ev,
  xmark: Nu,
  // fontAwesomeIcons
  "caret-up": ci,
  "caret-down": ii,
  "caret-right": li,
  "caret-left": ai,
  "folder-plus": mb,
  share: y_,
  "user-check": q_,
  "check-double": Lv,
  "exclamation-circle": Pv,
  circle: Rv,
  "eye-slash": ob,
  folder: hb,
  "minus-circle": Bv,
  adjust: Zv,
  refresh: ui,
  vault: U_,
  "angle-double-left": Iv,
  "angle-down": ii,
  "angle-left": ai,
  "angle-right": li,
  "angle-up": ci,
  archive: pv,
  "arrow-left": Lu,
  "arrow-right": mv,
  "arrow-up": vv,
  "arrow-down": hv,
  at: bv,
  ban: _v,
  "balance-scale-left": m_,
  bars: Wb,
  bolt: Z_,
  book: wv,
  "box-open": e_,
  bug: Ev,
  brain: xv,
  calculator: Sv,
  calendar: Av,
  "chart-bar": Mv,
  check: $v,
  "check-circle": Dv,
  "check-square": x_,
  "chevron-left": ai,
  "chevron-right": li,
  "chevron-down": ii,
  "chevron-up": ci,
  code: Wv,
  "code-branch": yb,
  cog: Ou,
  cogs: Ou,
  comment: Zb,
  comments: Xb,
  "clipboard-list": Vv,
  clock: Uv,
  clone: Xv,
  cloud: Kv,
  "cloud-download-alt": Gv,
  compress: Ov,
  copy: fb,
  cube: Cv,
  cut: Du,
  database: Yv,
  "dot-circle": Nv,
  "grip-lines-vertical": Xm,
  "grip-vertical": xb,
  edit: E_,
  "ellipsis-h": Qv,
  "ellipsis-v": eb,
  envelope: Ub,
  equals: tb,
  eye: rb,
  "exclamation-triangle": D_,
  expand: Kb,
  "expand-alt": Gb,
  "external-link-alt": nb,
  "exchange-alt": gv,
  file: sb,
  "file-alt": Ru,
  "file-archive": ib,
  "file-code": ab,
  "file-download": lb,
  "file-export": ub,
  "file-import": cb,
  "file-pdf": Ru,
  filter: vb,
  fingerprint: db,
  flask: pb,
  "folder-open": gb,
  font: Tv,
  gift: _b,
  globe: wb,
  "globe-americas": Jv,
  "graduation-cap": kb,
  "hand-holding-usd": Eb,
  "hand-scissors": Du,
  handshake: Sb,
  "hand-point-left": Lu,
  hashtag: Mb,
  hdd: Ab,
  history: $b,
  home: Ib,
  hourglass: Lb,
  image: Ob,
  inbox: Rb,
  info: Pu,
  "info-circle": Pu,
  key: Pb,
  language: Db,
  "layer-group": Nb,
  link: Fb,
  list: qb,
  lightbulb: Bb,
  lock: Hb,
  "map-signs": Yb,
  "mouse-pointer": Jb,
  "network-wired": Qb,
  palette: t_,
  pause: n_,
  "pause-circle": Fv,
  pen: r_,
  "pencil-alt": o_,
  play: i_,
  "play-circle": qv,
  plug: a_,
  plus: l_,
  "plus-circle": zv,
  "plus-square": S_,
  "project-diagram": G_,
  question: Iu,
  "question-circle": Iu,
  redo: f_,
  "remove-format": d_,
  robot: kv,
  rss: p_,
  save: g_,
  "satellite-dish": h_,
  search: v_,
  "search-minus": Y_,
  "search-plus": X_,
  server: __,
  screwdriver: c_,
  smile: k_,
  "sign-in-alt": jb,
  "sign-out-alt": Vb,
  "sliders-h": w_,
  "sticky-note": A_,
  stop: C_,
  stream: dv,
  sun: T_,
  sync: ui,
  "sync-alt": ui,
  table: M_,
  tags: $_,
  tasks: zb,
  terminal: L_,
  "th-large": Cb,
  thumbtack: s_,
  "thumbs-down": I_,
  "thumbs-up": O_,
  times: Nu,
  "times-circle": jv,
  tools: W_,
  trash: R_,
  undo: N_,
  unlink: B_,
  user: F_,
  "user-circle": Hv,
  "user-friends": H_,
  users: j_,
  video: K_,
  tree: P_,
  "user-lock": z_,
  gem: bb,
  download: Tb,
  "power-off": u_,
  "paper-plane": b_,
  bell: yv
}, xp = {
  // custom icons
  // NOTE: ensure to replace any colors with "currentColor" in SVG
  "bolt-filled": dT,
  "grip-lines-vertical": Xm,
  variable: V_,
  "pop-out": Jm,
  triangle: uv,
  "status-completed": nv,
  "status-waiting": iv,
  "status-error": rv,
  "status-canceled": tv,
  "status-new": ov,
  "status-unknown": sv,
  "status-warning": av,
  "vector-square": fv,
  schema: Qm,
  json: Ym,
  binary: Zm,
  text: lv,
  toolbox: cv,
  spinner: ev,
  // lucide
  "align-right": dv,
  archive: pv,
  "arrow-down": hv,
  "arrow-left": Lu,
  "arrow-left-right": gv,
  "arrow-right": mv,
  "arrow-right-from-line": AT,
  "arrow-right-to-line": $T,
  "arrow-up": vv,
  "at-sign": bv,
  ban: _v,
  bell: yv,
  book: wv,
  bot: kv,
  box: Cv,
  brain: xv,
  bug: Ev,
  calculator: Sv,
  calendar: Av,
  "case-upper": Tv,
  "chart-column-decreasing": Mv,
  check: $v,
  "check-check": Lv,
  "chevron-down": ii,
  "chevron-left": ai,
  "chevron-right": li,
  "chevron-up": ci,
  "chevrons-left": Iv,
  "chevrons-down-up": vM,
  "chevrons-up-down": Ov,
  circle: Rv,
  "circle-alert": Pv,
  "circle-check": Dv,
  "circle-dot": Nv,
  "circle-help": Iu,
  "circle-minus": Bv,
  "circle-pause": Fv,
  "circle-play": qv,
  "circle-plus": zv,
  "circle-user-round": Hv,
  "circle-x": jv,
  "clipboard-list": Vv,
  clock: Uv,
  cloud: Kv,
  "cloud-download": Gv,
  code: Wv,
  cog: Ou,
  contrast: Zv,
  copy: Xv,
  crosshair: l$,
  database: Yv,
  earth: Jv,
  ellipsis: Qv,
  "ellipsis-vertical": eb,
  equal: tb,
  "external-link": nb,
  eye: rb,
  "eye-off": ob,
  file: sb,
  "file-archive": ib,
  "file-code": ab,
  "file-down": lb,
  "file-input": cb,
  "file-output": ub,
  "file-text": Ru,
  files: fb,
  fingerprint: db,
  "flask-conical": pb,
  folder: hb,
  "folder-open": gb,
  "folder-plus": mb,
  funnel: vb,
  gem: bb,
  gift: _b,
  "git-branch": yb,
  globe: wb,
  "graduation-cap": kb,
  "grid-2x2": Cb,
  "grip-vertical": xb,
  "hand-coins": Eb,
  handshake: Sb,
  "hard-drive": Ab,
  "hard-drive-download": Tb,
  hash: Mb,
  history: $b,
  hourglass: Lb,
  house: Ib,
  image: Ob,
  inbox: Rb,
  info: Pu,
  "key-round": Pb,
  languages: Db,
  layers: Nb,
  lightbulb: Bb,
  link: Fb,
  list: qb,
  "list-checks": zb,
  lock: Hb,
  "log-in": jb,
  "log-out": Vb,
  mail: Ub,
  "minimize-2": vI,
  maximize: Kb,
  "maximize-2": Gb,
  menu: Wb,
  "message-circle": Zb,
  "messages-square": Xb,
  milestone: Yb,
  "mouse-pointer": Jb,
  network: Qb,
  "package-open": e_,
  palette: t_,
  pause: n_,
  pen: r_,
  pencil: o_,
  pin: s_,
  play: i_,
  plug: a_,
  plus: l_,
  "pocket-knife": c_,
  power: u_,
  "redo-2": f_,
  "refresh-cw": ui,
  "remove-formatting": d_,
  rss: p_,
  "satellite-dish": h_,
  save: g_,
  scale: m_,
  scissors: Du,
  search: v_,
  send: b_,
  server: __,
  share: y_,
  "sliders-horizontal": w_,
  smile: k_,
  square: C_,
  "square-check": x_,
  "square-pen": E_,
  "square-plus": S_,
  "sticky-note": A_,
  sun: T_,
  table: M_,
  tags: $_,
  terminal: L_,
  "thumbs-down": I_,
  "thumbs-up": O_,
  "trash-2": R_,
  "tree-pine": P_,
  "triangle-alert": D_,
  "undo-2": N_,
  unlink: B_,
  user: F_,
  "user-check": q_,
  "user-lock": z_,
  "user-round": H_,
  users: j_,
  vault: U_,
  video: K_,
  waypoints: G_,
  wrench: W_,
  x: Nu,
  zap: Z_,
  "zoom-in": X_,
  "zoom-out": Y_
}, xR = /* @__PURE__ */ ne({
  name: "N8nIcon",
  __name: "Icon",
  props: {
    icon: {},
    size: { default: void 0 },
    spin: { type: Boolean, default: !1 },
    color: { default: void 0 },
    strokeWidth: {}
  },
  setup(e) {
    const t = e, n = df(), r = R(() => {
      const a = [];
      return t.spin && a.push("spin"), t.strokeWidth && a.push("strokeWidth"), ["n8n-icon", ...a.map((l) => n[l])];
    }), s = {
      xsmall: 10,
      small: 12,
      medium: 14,
      large: 16,
      xlarge: 20
    }, o = R(() => {
      let a = "1em";
      return t.size && (a = `${typeof t.size == "number" ? t.size : s[t.size]}px`), {
        height: a,
        width: a
      };
    }), i = R(() => {
      const a = {};
      return t.color && (a.color = `var(--color-${t.color})`), t.strokeWidth && (a["--n8n-icon-stroke-width"] = `${t.strokeWidth}px`), a;
    });
    return (a, l) => b(xp)[a.icon] ?? b(Cp)[a.icon] ? (w(), le(Rt(
      b(xp)[a.icon] ?? b(Cp)[a.icon]
    ), {
      key: 0,
      class: Z(r.value),
      "aria-hidden": "true",
      focusable: "false",
      role: "img",
      height: o.value.height,
      width: o.value.width,
      "data-icon": t.icon,
      style: tt(i.value)
    }, null, 8, ["class", "height", "width", "data-icon", "style"])) : ge("", !0);
  }
}), ER = "_strokeWidth_fqxq5_1", SR = "_spin_fqxq5_6", AR = {
  strokeWidth: ER,
  spin: SR
}, TR = {
  $style: AR
}, Vf = /* @__PURE__ */ Lr(xR, [["__cssModules", TR]]), MR = { class: "n8n-spinner" }, $R = {
  key: 0,
  class: "lds-ring"
}, LR = /* @__PURE__ */ ne({
  name: "N8nSpinner",
  __name: "Spinner",
  props: {
    size: { default: "medium" },
    type: { default: "dots" }
  },
  setup(e) {
    return (t, n) => (w(), A("span", MR, [
      t.type === "ring" ? (w(), A("div", $R, n[0] || (n[0] = [
        v("div", null, null, -1),
        v("div", null, null, -1),
        v("div", null, null, -1),
        v("div", null, null, -1)
      ]))) : (w(), le(b(Vf), {
        key: 1,
        icon: "spinner",
        size: t.size,
        spin: ""
      }, null, 8, ["size"]))
    ]));
  }
}), IR = { key: 1 }, OR = /* @__PURE__ */ ne({
  name: "N8nButton",
  __name: "Button",
  props: {
    block: { type: Boolean, default: !1 },
    element: { default: "button" },
    href: {},
    label: { default: "" },
    square: { type: Boolean, default: !1 },
    active: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    float: {},
    icon: {},
    loading: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 },
    size: { default: "medium" },
    iconSize: {},
    text: { type: Boolean, default: !1 },
    type: { default: "primary" },
    nativeType: {}
  },
  setup(e) {
    const t = df(), n = ji(), r = e;
    lf(() => {
      r.element === "a" && !r.href && console.error("n8n-button:href is required for link buttons");
    });
    const s = R(() => r.loading ? "true" : void 0), o = R(() => r.disabled ? "true" : void 0), i = R(() => r.disabled || r.loading), a = R(
      () => r.iconSize ?? (r.size === "xmini" || r.size === "mini" ? "xsmall" : r.size)
    ), l = R(() => `button ${t.button} ${t[r.type]}${r.size ? ` ${t[r.size]}` : ""}${r.outline ? ` ${t.outline}` : ""}${r.loading ? ` ${t.loading}` : ""}${r.float ? ` ${t[`float-${r.float}`]}` : ""}${r.text ? ` ${t.text}` : ""}${r.disabled ? ` ${t.disabled}` : ""}${r.block ? ` ${t.block}` : ""}${r.active ? ` ${t.active}` : ""}${r.icon || r.loading ? ` ${t.withIcon}` : ""}${r.square ? ` ${t.square}` : ""}`);
    return (u, f) => (w(), le(Rt(u.element), pt({
      class: l.value,
      disabled: i.value,
      "aria-disabled": o.value,
      "aria-busy": s.value,
      href: u.href,
      "aria-live": "polite"
    }, {
      ...b(n),
      ...r.nativeType ? { type: r.nativeType } : {}
    }), {
      default: fe(() => [
        u.loading || u.icon ? (w(), A("span", {
          key: 0,
          class: Z(b(t).icon)
        }, [
          u.loading ? (w(), le(b(LR), {
            key: 0,
            size: a.value
          }, null, 8, ["size"])) : u.icon ? (w(), le(b(Vf), {
            key: 1,
            icon: u.icon,
            size: a.value
          }, null, 8, ["icon", "size"])) : ge("", !0)
        ], 2)) : ge("", !0),
        u.label ? (w(), A("span", IR, Ge(u.label), 1)) : u.$slots.default ? _e(u.$slots, "default", { key: 2 }) : ge("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled", "aria-disabled", "aria-busy", "href"]));
  }
}), RR = "_button_mdqve_229", PR = "_active_mdqve_263", DR = "_disabled_mdqve_281", NR = "_loading_mdqve_289", BR = "_secondary_mdqve_312", FR = "_tertiary_mdqve_334", qR = "_success_mdqve_356", zR = "_warning_mdqve_378", HR = "_danger_mdqve_400", jR = "_xmini_mdqve_425", VR = "_square_mdqve_430", UR = "_mini_mdqve_435", KR = "_small_mdqve_445", GR = "_medium_mdqve_455", WR = "_large_mdqve_465", ZR = "_xlarge_mdqve_470", XR = "_outline_mdqve_483", YR = "_primary_mdqve_487", JR = "_text_mdqve_524", QR = "_transparent_mdqve_592", eP = "_withIcon_mdqve_597", tP = "_icon_mdqve_603", nP = "_block_mdqve_612", rP = {
  button: RR,
  active: PR,
  disabled: DR,
  loading: NR,
  secondary: BR,
  tertiary: FR,
  success: qR,
  warning: zR,
  danger: HR,
  xmini: jR,
  square: VR,
  mini: UR,
  small: KR,
  medium: GR,
  large: WR,
  xlarge: ZR,
  outline: XR,
  primary: YR,
  text: JR,
  transparent: QR,
  withIcon: eP,
  icon: tP,
  block: nP,
  "float-left": "_float-left_mdqve_616",
  "float-right": "_float-right_mdqve_620"
}, oP = {
  $style: rP
}, sP = /* @__PURE__ */ Lr(OR, [["__cssModules", oP]]);
({
  ...hs.props
});
const iP = /* @__PURE__ */ ne({
  name: "N8nText",
  __name: "Text",
  props: {
    bold: { type: Boolean, default: !1 },
    size: { default: "medium" },
    color: {},
    align: {},
    compact: { type: Boolean, default: !1 },
    tag: { default: "span" }
  },
  setup(e) {
    const t = e, n = df(), r = R(() => {
      const s = [];
      return t.align && s.push(`align-${t.align}`), t.color && s.push(t.color), t.compact && s.push("compact"), s.push(`size-${t.size}`), s.push(t.bold ? "bold" : "regular"), s.map((o) => n[o]);
    });
    return (s, o) => (w(), le(Rt(s.tag), pt({
      class: ["n8n-text", ...r.value]
    }, s.$attrs), {
      default: fe(() => [
        _e(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), aP = "_bold_ushv1_1", lP = "_regular_ushv1_5", cP = "_compact_ushv1_34", uP = "_primary_ushv1_38", fP = "_secondary_ushv1_42", dP = "_danger_ushv1_62", pP = "_success_ushv1_66", hP = "_warning_ushv1_70", gP = {
  bold: aP,
  regular: lP,
  "size-xlarge": "_size-xlarge_ushv1_9",
  "size-large": "_size-large_ushv1_14",
  "size-medium": "_size-medium_ushv1_19",
  "size-small": "_size-small_ushv1_24",
  "size-xsmall": "_size-xsmall_ushv1_29",
  compact: cP,
  primary: uP,
  secondary: fP,
  "text-dark": "_text-dark_ushv1_46",
  "text-base": "_text-base_ushv1_50",
  "text-light": "_text-light_ushv1_54",
  "text-xlight": "_text-xlight_ushv1_58",
  danger: dP,
  success: pP,
  warning: hP,
  "foreground-dark": "_foreground-dark_ushv1_74",
  "foreground-xdark": "_foreground-xdark_ushv1_78",
  "align-left": "_align-left_ushv1_82",
  "align-right": "_align-right_ushv1_86",
  "align-center": "_align-center_ushv1_90"
}, mP = {
  $style: gP
}, vP = /* @__PURE__ */ Lr(iP, [["__cssModules", mP]]);
function bP(e, t) {
  return /^on[A-Z]/.test(t);
}
function J_(e) {
  return `${e ? `${e}-` : ""}${Math.random().toString(36).substring(2, 11)}`;
}
const _P = /* @__PURE__ */ ne({
  name: "N8nInput",
  __name: "Input",
  props: {
    modelValue: { default: "" },
    type: { default: "text" },
    size: { default: "large" },
    placeholder: { default: "" },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    rows: { default: 2 },
    maxlength: { default: void 0 },
    title: { default: "" },
    name: { default: () => J_("input") },
    autocomplete: { default: "off" }
  },
  setup(e, { expose: t }) {
    const n = e, r = R(
      () => n.size === "medium" ? "default" : n.size
    ), s = R(() => {
      const f = [];
      return n.size === "xlarge" && f.push("xlarge"), n.type === "password" && f.push("ph-no-capture"), f;
    }), o = G(), i = R(() => {
      if (!(o != null && o.value)) return;
      const f = n.type === "textarea" ? "textarea" : "input";
      return o.value.$el.querySelector(f);
    });
    return t({ focus: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.focus();
    }, blur: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.blur();
    }, select: () => {
      var f;
      return (f = i.value) == null ? void 0 : f.select();
    } }), (f, c) => (w(), le(b(sa), pt({
      ref_key: "innerInput",
      ref: o,
      "model-value": f.modelValue,
      type: f.type,
      size: r.value,
      class: ["n8n-input", ...s.value],
      autocomplete: f.autocomplete,
      name: f.name,
      placeholder: f.placeholder,
      disabled: f.disabled,
      readonly: f.readonly,
      clearable: f.clearable,
      rows: f.rows,
      title: f.title,
      maxlength: f.maxlength
    }, f.$attrs), vi({ _: 2 }, [
      f.$slots.prepend ? {
        name: "prepend",
        fn: fe(() => [
          _e(f.$slots, "prepend")
        ]),
        key: "0"
      } : void 0,
      f.$slots.append ? {
        name: "append",
        fn: fe(() => [
          _e(f.$slots, "append")
        ]),
        key: "1"
      } : void 0,
      f.$slots.prefix ? {
        name: "prefix",
        fn: fe(() => [
          _e(f.$slots, "prefix")
        ]),
        key: "2"
      } : void 0,
      f.$slots.suffix ? {
        name: "suffix",
        fn: fe(() => [
          _e(f.$slots, "suffix")
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["model-value", "type", "size", "class", "autocomplete", "name", "placeholder", "disabled", "readonly", "clearable", "rows", "title", "maxlength"]));
  }
}), yP = "_xlarge_ddtui_1", wP = {
  xlarge: yP
}, kP = {
  $style: wP
}, CP = /* @__PURE__ */ Lr(_P, [["__cssModules", kP]]);
J_("color-picker");
({
  ...Gm
});
({
  ...$u.props
});
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const xP = () => {
}, Si = Array.isArray;
function Ep(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function EP(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!SP(e[n], t[n]))
      return !1;
  return !0;
}
function SP(e, t) {
  return Si(e) ? Sp(e, t) : Si(t) ? Sp(t, e) : e === t;
}
function Sp(e, t) {
  return Si(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
var Ap;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Ap || (Ap = {}));
var Tp;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Tp || (Tp = {}));
var Mp;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Mp || (Mp = {}));
const Q_ = Symbol(""), AP = Symbol("");
function $p(e) {
  const t = De(Q_), n = De(AP), r = R(() => {
    const l = b(e.to);
    return t.resolve(l);
  }), s = R(() => {
    const { matched: l } = r.value, { length: u } = l, f = l[u - 1], c = n.matched;
    if (!f || !c.length)
      return -1;
    const p = c.findIndex(Ep.bind(null, f));
    if (p > -1)
      return p;
    const d = Ip(l[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Ip(f) === d && // avoid comparing the child with its parent
      c[c.length - 1].path !== d ? c.findIndex(Ep.bind(null, l[u - 2])) : p
    );
  }), o = R(() => s.value > -1 && LP(n.params, r.value.params)), i = R(() => s.value > -1 && s.value === n.matched.length - 1 && EP(n.params, r.value.params));
  function a(l = {}) {
    if ($P(l)) {
      const u = t[b(e.replace) ? "replace" : "push"](
        b(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(xP);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: R(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a
  };
}
function TP(e) {
  return e.length === 1 ? e[0] : e;
}
const MP = /* @__PURE__ */ ne({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: $p,
  setup(e, { slots: t }) {
    const n = Sn($p(e)), { options: r } = De(Q_), s = R(() => ({
      [Op(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Op(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const o = t.default && TP(t.default(n));
      return e.custom ? o : _n("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, o);
    };
  }
}), Lp = MP;
function $P(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function LP(e, t) {
  for (const n in t) {
    const r = t[n], s = e[n];
    if (typeof r == "string") {
      if (r !== s)
        return !1;
    } else if (!Si(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function Ip(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Op = (e, t, n) => e ?? t ?? n;
var Ka = {};
const IP = "Á", OP = "á", RP = "Ă", PP = "ă", DP = "∾", NP = "∿", BP = "∾̳", FP = "Â", qP = "â", zP = "´", HP = "А", jP = "а", VP = "Æ", UP = "æ", KP = "⁡", GP = "𝔄", WP = "𝔞", ZP = "À", XP = "à", YP = "ℵ", JP = "ℵ", QP = "Α", eD = "α", tD = "Ā", nD = "ā", rD = "⨿", oD = "&", sD = "&", iD = "⩕", aD = "⩓", lD = "∧", cD = "⩜", uD = "⩘", fD = "⩚", dD = "∠", pD = "⦤", hD = "∠", gD = "⦨", mD = "⦩", vD = "⦪", bD = "⦫", _D = "⦬", yD = "⦭", wD = "⦮", kD = "⦯", CD = "∡", xD = "∟", ED = "⊾", SD = "⦝", AD = "∢", TD = "Å", MD = "⍼", $D = "Ą", LD = "ą", ID = "𝔸", OD = "𝕒", RD = "⩯", PD = "≈", DD = "⩰", ND = "≊", BD = "≋", FD = "'", qD = "⁡", zD = "≈", HD = "≊", jD = "Å", VD = "å", UD = "𝒜", KD = "𝒶", GD = "≔", WD = "*", ZD = "≈", XD = "≍", YD = "Ã", JD = "ã", QD = "Ä", eN = "ä", tN = "∳", nN = "⨑", rN = "≌", oN = "϶", sN = "‵", iN = "∽", aN = "⋍", lN = "∖", cN = "⫧", uN = "⊽", fN = "⌅", dN = "⌆", pN = "⌅", hN = "⎵", gN = "⎶", mN = "≌", vN = "Б", bN = "б", _N = "„", yN = "∵", wN = "∵", kN = "∵", CN = "⦰", xN = "϶", EN = "ℬ", SN = "ℬ", AN = "Β", TN = "β", MN = "ℶ", $N = "≬", LN = "𝔅", IN = "𝔟", ON = "⋂", RN = "◯", PN = "⋃", DN = "⨀", NN = "⨁", BN = "⨂", FN = "⨆", qN = "★", zN = "▽", HN = "△", jN = "⨄", VN = "⋁", UN = "⋀", KN = "⤍", GN = "⧫", WN = "▪", ZN = "▴", XN = "▾", YN = "◂", JN = "▸", QN = "␣", eB = "▒", tB = "░", nB = "▓", rB = "█", oB = "=⃥", sB = "≡⃥", iB = "⫭", aB = "⌐", lB = "𝔹", cB = "𝕓", uB = "⊥", fB = "⊥", dB = "⋈", pB = "⧉", hB = "┐", gB = "╕", mB = "╖", vB = "╗", bB = "┌", _B = "╒", yB = "╓", wB = "╔", kB = "─", CB = "═", xB = "┬", EB = "╤", SB = "╥", AB = "╦", TB = "┴", MB = "╧", $B = "╨", LB = "╩", IB = "⊟", OB = "⊞", RB = "⊠", PB = "┘", DB = "╛", NB = "╜", BB = "╝", FB = "└", qB = "╘", zB = "╙", HB = "╚", jB = "│", VB = "║", UB = "┼", KB = "╪", GB = "╫", WB = "╬", ZB = "┤", XB = "╡", YB = "╢", JB = "╣", QB = "├", eF = "╞", tF = "╟", nF = "╠", rF = "‵", oF = "˘", sF = "˘", iF = "¦", aF = "𝒷", lF = "ℬ", cF = "⁏", uF = "∽", fF = "⋍", dF = "⧅", pF = "\\", hF = "⟈", gF = "•", mF = "•", vF = "≎", bF = "⪮", _F = "≏", yF = "≎", wF = "≏", kF = "Ć", CF = "ć", xF = "⩄", EF = "⩉", SF = "⩋", AF = "∩", TF = "⋒", MF = "⩇", $F = "⩀", LF = "ⅅ", IF = "∩︀", OF = "⁁", RF = "ˇ", PF = "ℭ", DF = "⩍", NF = "Č", BF = "č", FF = "Ç", qF = "ç", zF = "Ĉ", HF = "ĉ", jF = "∰", VF = "⩌", UF = "⩐", KF = "Ċ", GF = "ċ", WF = "¸", ZF = "¸", XF = "⦲", YF = "¢", JF = "·", QF = "·", eq = "𝔠", tq = "ℭ", nq = "Ч", rq = "ч", oq = "✓", sq = "✓", iq = "Χ", aq = "χ", lq = "ˆ", cq = "≗", uq = "↺", fq = "↻", dq = "⊛", pq = "⊚", hq = "⊝", gq = "⊙", mq = "®", vq = "Ⓢ", bq = "⊖", _q = "⊕", yq = "⊗", wq = "○", kq = "⧃", Cq = "≗", xq = "⨐", Eq = "⫯", Sq = "⧂", Aq = "∲", Tq = "”", Mq = "’", $q = "♣", Lq = "♣", Iq = ":", Oq = "∷", Rq = "⩴", Pq = "≔", Dq = "≔", Nq = ",", Bq = "@", Fq = "∁", qq = "∘", zq = "∁", Hq = "ℂ", jq = "≅", Vq = "⩭", Uq = "≡", Kq = "∮", Gq = "∯", Wq = "∮", Zq = "𝕔", Xq = "ℂ", Yq = "∐", Jq = "∐", Qq = "©", ez = "©", tz = "℗", nz = "∳", rz = "↵", oz = "✗", sz = "⨯", iz = "𝒞", az = "𝒸", lz = "⫏", cz = "⫑", uz = "⫐", fz = "⫒", dz = "⋯", pz = "⤸", hz = "⤵", gz = "⋞", mz = "⋟", vz = "↶", bz = "⤽", _z = "⩈", yz = "⩆", wz = "≍", kz = "∪", Cz = "⋓", xz = "⩊", Ez = "⊍", Sz = "⩅", Az = "∪︀", Tz = "↷", Mz = "⤼", $z = "⋞", Lz = "⋟", Iz = "⋎", Oz = "⋏", Rz = "¤", Pz = "↶", Dz = "↷", Nz = "⋎", Bz = "⋏", Fz = "∲", qz = "∱", zz = "⌭", Hz = "†", jz = "‡", Vz = "ℸ", Uz = "↓", Kz = "↡", Gz = "⇓", Wz = "‐", Zz = "⫤", Xz = "⊣", Yz = "⤏", Jz = "˝", Qz = "Ď", eH = "ď", tH = "Д", nH = "д", rH = "‡", oH = "⇊", sH = "ⅅ", iH = "ⅆ", aH = "⤑", lH = "⩷", cH = "°", uH = "∇", fH = "Δ", dH = "δ", pH = "⦱", hH = "⥿", gH = "𝔇", mH = "𝔡", vH = "⥥", bH = "⇃", _H = "⇂", yH = "´", wH = "˙", kH = "˝", CH = "`", xH = "˜", EH = "⋄", SH = "⋄", AH = "⋄", TH = "♦", MH = "♦", $H = "¨", LH = "ⅆ", IH = "ϝ", OH = "⋲", RH = "÷", PH = "÷", DH = "⋇", NH = "⋇", BH = "Ђ", FH = "ђ", qH = "⌞", zH = "⌍", HH = "$", jH = "𝔻", VH = "𝕕", UH = "¨", KH = "˙", GH = "⃜", WH = "≐", ZH = "≑", XH = "≐", YH = "∸", JH = "∔", QH = "⊡", ej = "⌆", tj = "∯", nj = "¨", rj = "⇓", oj = "⇐", sj = "⇔", ij = "⫤", aj = "⟸", lj = "⟺", cj = "⟹", uj = "⇒", fj = "⊨", dj = "⇑", pj = "⇕", hj = "∥", gj = "⤓", mj = "↓", vj = "↓", bj = "⇓", _j = "⇵", yj = "̑", wj = "⇊", kj = "⇃", Cj = "⇂", xj = "⥐", Ej = "⥞", Sj = "⥖", Aj = "↽", Tj = "⥟", Mj = "⥗", $j = "⇁", Lj = "↧", Ij = "⊤", Oj = "⤐", Rj = "⌟", Pj = "⌌", Dj = "𝒟", Nj = "𝒹", Bj = "Ѕ", Fj = "ѕ", qj = "⧶", zj = "Đ", Hj = "đ", jj = "⋱", Vj = "▿", Uj = "▾", Kj = "⇵", Gj = "⥯", Wj = "⦦", Zj = "Џ", Xj = "џ", Yj = "⟿", Jj = "É", Qj = "é", eV = "⩮", tV = "Ě", nV = "ě", rV = "Ê", oV = "ê", sV = "≖", iV = "≕", aV = "Э", lV = "э", cV = "⩷", uV = "Ė", fV = "ė", dV = "≑", pV = "ⅇ", hV = "≒", gV = "𝔈", mV = "𝔢", vV = "⪚", bV = "È", _V = "è", yV = "⪖", wV = "⪘", kV = "⪙", CV = "∈", xV = "⏧", EV = "ℓ", SV = "⪕", AV = "⪗", TV = "Ē", MV = "ē", $V = "∅", LV = "∅", IV = "◻", OV = "∅", RV = "▫", PV = " ", DV = " ", NV = " ", BV = "Ŋ", FV = "ŋ", qV = " ", zV = "Ę", HV = "ę", jV = "𝔼", VV = "𝕖", UV = "⋕", KV = "⧣", GV = "⩱", WV = "ε", ZV = "Ε", XV = "ε", YV = "ϵ", JV = "≖", QV = "≕", eU = "≂", tU = "⪖", nU = "⪕", rU = "⩵", oU = "=", sU = "≂", iU = "≟", aU = "⇌", lU = "≡", cU = "⩸", uU = "⧥", fU = "⥱", dU = "≓", pU = "ℯ", hU = "ℰ", gU = "≐", mU = "⩳", vU = "≂", bU = "Η", _U = "η", yU = "Ð", wU = "ð", kU = "Ë", CU = "ë", xU = "€", EU = "!", SU = "∃", AU = "∃", TU = "ℰ", MU = "ⅇ", $U = "ⅇ", LU = "≒", IU = "Ф", OU = "ф", RU = "♀", PU = "ﬃ", DU = "ﬀ", NU = "ﬄ", BU = "𝔉", FU = "𝔣", qU = "ﬁ", zU = "◼", HU = "▪", jU = "fj", VU = "♭", UU = "ﬂ", KU = "▱", GU = "ƒ", WU = "𝔽", ZU = "𝕗", XU = "∀", YU = "∀", JU = "⋔", QU = "⫙", eK = "ℱ", tK = "⨍", nK = "½", rK = "⅓", oK = "¼", sK = "⅕", iK = "⅙", aK = "⅛", lK = "⅔", cK = "⅖", uK = "¾", fK = "⅗", dK = "⅜", pK = "⅘", hK = "⅚", gK = "⅝", mK = "⅞", vK = "⁄", bK = "⌢", _K = "𝒻", yK = "ℱ", wK = "ǵ", kK = "Γ", CK = "γ", xK = "Ϝ", EK = "ϝ", SK = "⪆", AK = "Ğ", TK = "ğ", MK = "Ģ", $K = "Ĝ", LK = "ĝ", IK = "Г", OK = "г", RK = "Ġ", PK = "ġ", DK = "≥", NK = "≧", BK = "⪌", FK = "⋛", qK = "≥", zK = "≧", HK = "⩾", jK = "⪩", VK = "⩾", UK = "⪀", KK = "⪂", GK = "⪄", WK = "⋛︀", ZK = "⪔", XK = "𝔊", YK = "𝔤", JK = "≫", QK = "⋙", eG = "⋙", tG = "ℷ", nG = "Ѓ", rG = "ѓ", oG = "⪥", sG = "≷", iG = "⪒", aG = "⪤", lG = "⪊", cG = "⪊", uG = "⪈", fG = "≩", dG = "⪈", pG = "≩", hG = "⋧", gG = "𝔾", mG = "𝕘", vG = "`", bG = "≥", _G = "⋛", yG = "≧", wG = "⪢", kG = "≷", CG = "⩾", xG = "≳", EG = "𝒢", SG = "ℊ", AG = "≳", TG = "⪎", MG = "⪐", $G = "⪧", LG = "⩺", IG = ">", OG = ">", RG = "≫", PG = "⋗", DG = "⦕", NG = "⩼", BG = "⪆", FG = "⥸", qG = "⋗", zG = "⋛", HG = "⪌", jG = "≷", VG = "≳", UG = "≩︀", KG = "≩︀", GG = "ˇ", WG = " ", ZG = "½", XG = "ℋ", YG = "Ъ", JG = "ъ", QG = "⥈", eW = "↔", tW = "⇔", nW = "↭", rW = "^", oW = "ℏ", sW = "Ĥ", iW = "ĥ", aW = "♥", lW = "♥", cW = "…", uW = "⊹", fW = "𝔥", dW = "ℌ", pW = "ℋ", hW = "⤥", gW = "⤦", mW = "⇿", vW = "∻", bW = "↩", _W = "↪", yW = "𝕙", wW = "ℍ", kW = "―", CW = "─", xW = "𝒽", EW = "ℋ", SW = "ℏ", AW = "Ħ", TW = "ħ", MW = "≎", $W = "≏", LW = "⁃", IW = "‐", OW = "Í", RW = "í", PW = "⁣", DW = "Î", NW = "î", BW = "И", FW = "и", qW = "İ", zW = "Е", HW = "е", jW = "¡", VW = "⇔", UW = "𝔦", KW = "ℑ", GW = "Ì", WW = "ì", ZW = "ⅈ", XW = "⨌", YW = "∭", JW = "⧜", QW = "℩", eZ = "Ĳ", tZ = "ĳ", nZ = "Ī", rZ = "ī", oZ = "ℑ", sZ = "ⅈ", iZ = "ℐ", aZ = "ℑ", lZ = "ı", cZ = "ℑ", uZ = "⊷", fZ = "Ƶ", dZ = "⇒", pZ = "℅", hZ = "∞", gZ = "⧝", mZ = "ı", vZ = "⊺", bZ = "∫", _Z = "∬", yZ = "ℤ", wZ = "∫", kZ = "⊺", CZ = "⋂", xZ = "⨗", EZ = "⨼", SZ = "⁣", AZ = "⁢", TZ = "Ё", MZ = "ё", $Z = "Į", LZ = "į", IZ = "𝕀", OZ = "𝕚", RZ = "Ι", PZ = "ι", DZ = "⨼", NZ = "¿", BZ = "𝒾", FZ = "ℐ", qZ = "∈", zZ = "⋵", HZ = "⋹", jZ = "⋴", VZ = "⋳", UZ = "∈", KZ = "⁢", GZ = "Ĩ", WZ = "ĩ", ZZ = "І", XZ = "і", YZ = "Ï", JZ = "ï", QZ = "Ĵ", eX = "ĵ", tX = "Й", nX = "й", rX = "𝔍", oX = "𝔧", sX = "ȷ", iX = "𝕁", aX = "𝕛", lX = "𝒥", cX = "𝒿", uX = "Ј", fX = "ј", dX = "Є", pX = "є", hX = "Κ", gX = "κ", mX = "ϰ", vX = "Ķ", bX = "ķ", _X = "К", yX = "к", wX = "𝔎", kX = "𝔨", CX = "ĸ", xX = "Х", EX = "х", SX = "Ќ", AX = "ќ", TX = "𝕂", MX = "𝕜", $X = "𝒦", LX = "𝓀", IX = "⇚", OX = "Ĺ", RX = "ĺ", PX = "⦴", DX = "ℒ", NX = "Λ", BX = "λ", FX = "⟨", qX = "⟪", zX = "⦑", HX = "⟨", jX = "⪅", VX = "ℒ", UX = "«", KX = "⇤", GX = "⤟", WX = "←", ZX = "↞", XX = "⇐", YX = "⤝", JX = "↩", QX = "↫", eY = "⤹", tY = "⥳", nY = "↢", rY = "⤙", oY = "⤛", sY = "⪫", iY = "⪭", aY = "⪭︀", lY = "⤌", cY = "⤎", uY = "❲", fY = "{", dY = "[", pY = "⦋", hY = "⦏", gY = "⦍", mY = "Ľ", vY = "ľ", bY = "Ļ", _Y = "ļ", yY = "⌈", wY = "{", kY = "Л", CY = "л", xY = "⤶", EY = "“", SY = "„", AY = "⥧", TY = "⥋", MY = "↲", $Y = "≤", LY = "≦", IY = "⟨", OY = "⇤", RY = "←", PY = "←", DY = "⇐", NY = "⇆", BY = "↢", FY = "⌈", qY = "⟦", zY = "⥡", HY = "⥙", jY = "⇃", VY = "⌊", UY = "↽", KY = "↼", GY = "⇇", WY = "↔", ZY = "↔", XY = "⇔", YY = "⇆", JY = "⇋", QY = "↭", eJ = "⥎", tJ = "↤", nJ = "⊣", rJ = "⥚", oJ = "⋋", sJ = "⧏", iJ = "⊲", aJ = "⊴", lJ = "⥑", cJ = "⥠", uJ = "⥘", fJ = "↿", dJ = "⥒", pJ = "↼", hJ = "⪋", gJ = "⋚", mJ = "≤", vJ = "≦", bJ = "⩽", _J = "⪨", yJ = "⩽", wJ = "⩿", kJ = "⪁", CJ = "⪃", xJ = "⋚︀", EJ = "⪓", SJ = "⪅", AJ = "⋖", TJ = "⋚", MJ = "⪋", $J = "⋚", LJ = "≦", IJ = "≶", OJ = "≶", RJ = "⪡", PJ = "≲", DJ = "⩽", NJ = "≲", BJ = "⥼", FJ = "⌊", qJ = "𝔏", zJ = "𝔩", HJ = "≶", jJ = "⪑", VJ = "⥢", UJ = "↽", KJ = "↼", GJ = "⥪", WJ = "▄", ZJ = "Љ", XJ = "љ", YJ = "⇇", JJ = "≪", QJ = "⋘", eQ = "⌞", tQ = "⇚", nQ = "⥫", rQ = "◺", oQ = "Ŀ", sQ = "ŀ", iQ = "⎰", aQ = "⎰", lQ = "⪉", cQ = "⪉", uQ = "⪇", fQ = "≨", dQ = "⪇", pQ = "≨", hQ = "⋦", gQ = "⟬", mQ = "⇽", vQ = "⟦", bQ = "⟵", _Q = "⟵", yQ = "⟸", wQ = "⟷", kQ = "⟷", CQ = "⟺", xQ = "⟼", EQ = "⟶", SQ = "⟶", AQ = "⟹", TQ = "↫", MQ = "↬", $Q = "⦅", LQ = "𝕃", IQ = "𝕝", OQ = "⨭", RQ = "⨴", PQ = "∗", DQ = "_", NQ = "↙", BQ = "↘", FQ = "◊", qQ = "◊", zQ = "⧫", HQ = "(", jQ = "⦓", VQ = "⇆", UQ = "⌟", KQ = "⇋", GQ = "⥭", WQ = "‎", ZQ = "⊿", XQ = "‹", YQ = "𝓁", JQ = "ℒ", QQ = "↰", eee = "↰", tee = "≲", nee = "⪍", ree = "⪏", oee = "[", see = "‘", iee = "‚", aee = "Ł", lee = "ł", cee = "⪦", uee = "⩹", fee = "<", dee = "<", pee = "≪", hee = "⋖", gee = "⋋", mee = "⋉", vee = "⥶", bee = "⩻", _ee = "◃", yee = "⊴", wee = "◂", kee = "⦖", Cee = "⥊", xee = "⥦", Eee = "≨︀", See = "≨︀", Aee = "¯", Tee = "♂", Mee = "✠", $ee = "✠", Lee = "↦", Iee = "↦", Oee = "↧", Ree = "↤", Pee = "↥", Dee = "▮", Nee = "⨩", Bee = "М", Fee = "м", qee = "—", zee = "∺", Hee = "∡", jee = " ", Vee = "ℳ", Uee = "𝔐", Kee = "𝔪", Gee = "℧", Wee = "µ", Zee = "*", Xee = "⫰", Yee = "∣", Jee = "·", Qee = "⊟", ete = "−", tte = "∸", nte = "⨪", rte = "∓", ote = "⫛", ste = "…", ite = "∓", ate = "⊧", lte = "𝕄", cte = "𝕞", ute = "∓", fte = "𝓂", dte = "ℳ", pte = "∾", hte = "Μ", gte = "μ", mte = "⊸", vte = "⊸", bte = "∇", _te = "Ń", yte = "ń", wte = "∠⃒", kte = "≉", Cte = "⩰̸", xte = "≋̸", Ete = "ŉ", Ste = "≉", Ate = "♮", Tte = "ℕ", Mte = "♮", $te = " ", Lte = "≎̸", Ite = "≏̸", Ote = "⩃", Rte = "Ň", Pte = "ň", Dte = "Ņ", Nte = "ņ", Bte = "≇", Fte = "⩭̸", qte = "⩂", zte = "Н", Hte = "н", jte = "–", Vte = "⤤", Ute = "↗", Kte = "⇗", Gte = "↗", Wte = "≠", Zte = "≐̸", Xte = "​", Yte = "​", Jte = "​", Qte = "​", ene = "≢", tne = "⤨", nne = "≂̸", rne = "≫", one = "≪", sne = `
`, ine = "∄", ane = "∄", lne = "𝔑", cne = "𝔫", une = "≧̸", fne = "≱", dne = "≱", pne = "≧̸", hne = "⩾̸", gne = "⩾̸", mne = "⋙̸", vne = "≵", bne = "≫⃒", _ne = "≯", yne = "≯", wne = "≫̸", kne = "↮", Cne = "⇎", xne = "⫲", Ene = "∋", Sne = "⋼", Ane = "⋺", Tne = "∋", Mne = "Њ", $ne = "њ", Lne = "↚", Ine = "⇍", One = "‥", Rne = "≦̸", Pne = "≰", Dne = "↚", Nne = "⇍", Bne = "↮", Fne = "⇎", qne = "≰", zne = "≦̸", Hne = "⩽̸", jne = "⩽̸", Vne = "≮", Une = "⋘̸", Kne = "≴", Gne = "≪⃒", Wne = "≮", Zne = "⋪", Xne = "⋬", Yne = "≪̸", Jne = "∤", Qne = "⁠", ere = " ", tre = "𝕟", nre = "ℕ", rre = "⫬", ore = "¬", sre = "≢", ire = "≭", are = "∦", lre = "∉", cre = "≠", ure = "≂̸", fre = "∄", dre = "≯", pre = "≱", hre = "≧̸", gre = "≫̸", mre = "≹", vre = "⩾̸", bre = "≵", _re = "≎̸", yre = "≏̸", wre = "∉", kre = "⋵̸", Cre = "⋹̸", xre = "∉", Ere = "⋷", Sre = "⋶", Are = "⧏̸", Tre = "⋪", Mre = "⋬", $re = "≮", Lre = "≰", Ire = "≸", Ore = "≪̸", Rre = "⩽̸", Pre = "≴", Dre = "⪢̸", Nre = "⪡̸", Bre = "∌", Fre = "∌", qre = "⋾", zre = "⋽", Hre = "⊀", jre = "⪯̸", Vre = "⋠", Ure = "∌", Kre = "⧐̸", Gre = "⋫", Wre = "⋭", Zre = "⊏̸", Xre = "⋢", Yre = "⊐̸", Jre = "⋣", Qre = "⊂⃒", eoe = "⊈", toe = "⊁", noe = "⪰̸", roe = "⋡", ooe = "≿̸", soe = "⊃⃒", ioe = "⊉", aoe = "≁", loe = "≄", coe = "≇", uoe = "≉", foe = "∤", doe = "∦", poe = "∦", hoe = "⫽⃥", goe = "∂̸", moe = "⨔", voe = "⊀", boe = "⋠", _oe = "⊀", yoe = "⪯̸", woe = "⪯̸", koe = "⤳̸", Coe = "↛", xoe = "⇏", Eoe = "↝̸", Soe = "↛", Aoe = "⇏", Toe = "⋫", Moe = "⋭", $oe = "⊁", Loe = "⋡", Ioe = "⪰̸", Ooe = "𝒩", Roe = "𝓃", Poe = "∤", Doe = "∦", Noe = "≁", Boe = "≄", Foe = "≄", qoe = "∤", zoe = "∦", Hoe = "⋢", joe = "⋣", Voe = "⊄", Uoe = "⫅̸", Koe = "⊈", Goe = "⊂⃒", Woe = "⊈", Zoe = "⫅̸", Xoe = "⊁", Yoe = "⪰̸", Joe = "⊅", Qoe = "⫆̸", ese = "⊉", tse = "⊃⃒", nse = "⊉", rse = "⫆̸", ose = "≹", sse = "Ñ", ise = "ñ", ase = "≸", lse = "⋪", cse = "⋬", use = "⋫", fse = "⋭", dse = "Ν", pse = "ν", hse = "#", gse = "№", mse = " ", vse = "≍⃒", bse = "⊬", _se = "⊭", yse = "⊮", wse = "⊯", kse = "≥⃒", Cse = ">⃒", xse = "⤄", Ese = "⧞", Sse = "⤂", Ase = "≤⃒", Tse = "<⃒", Mse = "⊴⃒", $se = "⤃", Lse = "⊵⃒", Ise = "∼⃒", Ose = "⤣", Rse = "↖", Pse = "⇖", Dse = "↖", Nse = "⤧", Bse = "Ó", Fse = "ó", qse = "⊛", zse = "Ô", Hse = "ô", jse = "⊚", Vse = "О", Use = "о", Kse = "⊝", Gse = "Ő", Wse = "ő", Zse = "⨸", Xse = "⊙", Yse = "⦼", Jse = "Œ", Qse = "œ", eie = "⦿", tie = "𝔒", nie = "𝔬", rie = "˛", oie = "Ò", sie = "ò", iie = "⧁", aie = "⦵", lie = "Ω", cie = "∮", uie = "↺", fie = "⦾", die = "⦻", pie = "‾", hie = "⧀", gie = "Ō", mie = "ō", vie = "Ω", bie = "ω", _ie = "Ο", yie = "ο", wie = "⦶", kie = "⊖", Cie = "𝕆", xie = "𝕠", Eie = "⦷", Sie = "“", Aie = "‘", Tie = "⦹", Mie = "⊕", $ie = "↻", Lie = "⩔", Iie = "∨", Oie = "⩝", Rie = "ℴ", Pie = "ℴ", Die = "ª", Nie = "º", Bie = "⊶", Fie = "⩖", qie = "⩗", zie = "⩛", Hie = "Ⓢ", jie = "𝒪", Vie = "ℴ", Uie = "Ø", Kie = "ø", Gie = "⊘", Wie = "Õ", Zie = "õ", Xie = "⨶", Yie = "⨷", Jie = "⊗", Qie = "Ö", eae = "ö", tae = "⌽", nae = "‾", rae = "⏞", oae = "⎴", sae = "⏜", iae = "¶", aae = "∥", lae = "∥", cae = "⫳", uae = "⫽", fae = "∂", dae = "∂", pae = "П", hae = "п", gae = "%", mae = ".", vae = "‰", bae = "⊥", _ae = "‱", yae = "𝔓", wae = "𝔭", kae = "Φ", Cae = "φ", xae = "ϕ", Eae = "ℳ", Sae = "☎", Aae = "Π", Tae = "π", Mae = "⋔", $ae = "ϖ", Lae = "ℏ", Iae = "ℎ", Oae = "ℏ", Rae = "⨣", Pae = "⊞", Dae = "⨢", Nae = "+", Bae = "∔", Fae = "⨥", qae = "⩲", zae = "±", Hae = "±", jae = "⨦", Vae = "⨧", Uae = "±", Kae = "ℌ", Gae = "⨕", Wae = "𝕡", Zae = "ℙ", Xae = "£", Yae = "⪷", Jae = "⪻", Qae = "≺", ele = "≼", tle = "⪷", nle = "≺", rle = "≼", ole = "≺", sle = "⪯", ile = "≼", ale = "≾", lle = "⪯", cle = "⪹", ule = "⪵", fle = "⋨", dle = "⪯", ple = "⪳", hle = "≾", gle = "′", mle = "″", vle = "ℙ", ble = "⪹", _le = "⪵", yle = "⋨", wle = "∏", kle = "∏", Cle = "⌮", xle = "⌒", Ele = "⌓", Sle = "∝", Ale = "∝", Tle = "∷", Mle = "∝", $le = "≾", Lle = "⊰", Ile = "𝒫", Ole = "𝓅", Rle = "Ψ", Ple = "ψ", Dle = " ", Nle = "𝔔", Ble = "𝔮", Fle = "⨌", qle = "𝕢", zle = "ℚ", Hle = "⁗", jle = "𝒬", Vle = "𝓆", Ule = "ℍ", Kle = "⨖", Gle = "?", Wle = "≟", Zle = '"', Xle = '"', Yle = "⇛", Jle = "∽̱", Qle = "Ŕ", ece = "ŕ", tce = "√", nce = "⦳", rce = "⟩", oce = "⟫", sce = "⦒", ice = "⦥", ace = "⟩", lce = "»", cce = "⥵", uce = "⇥", fce = "⤠", dce = "⤳", pce = "→", hce = "↠", gce = "⇒", mce = "⤞", vce = "↪", bce = "↬", _ce = "⥅", yce = "⥴", wce = "⤖", kce = "↣", Cce = "↝", xce = "⤚", Ece = "⤜", Sce = "∶", Ace = "ℚ", Tce = "⤍", Mce = "⤏", $ce = "⤐", Lce = "❳", Ice = "}", Oce = "]", Rce = "⦌", Pce = "⦎", Dce = "⦐", Nce = "Ř", Bce = "ř", Fce = "Ŗ", qce = "ŗ", zce = "⌉", Hce = "}", jce = "Р", Vce = "р", Uce = "⤷", Kce = "⥩", Gce = "”", Wce = "”", Zce = "↳", Xce = "ℜ", Yce = "ℛ", Jce = "ℜ", Qce = "ℝ", eue = "ℜ", tue = "▭", nue = "®", rue = "®", oue = "∋", sue = "⇋", iue = "⥯", aue = "⥽", lue = "⌋", cue = "𝔯", uue = "ℜ", fue = "⥤", due = "⇁", pue = "⇀", hue = "⥬", gue = "Ρ", mue = "ρ", vue = "ϱ", bue = "⟩", _ue = "⇥", yue = "→", wue = "→", kue = "⇒", Cue = "⇄", xue = "↣", Eue = "⌉", Sue = "⟧", Aue = "⥝", Tue = "⥕", Mue = "⇂", $ue = "⌋", Lue = "⇁", Iue = "⇀", Oue = "⇄", Rue = "⇌", Pue = "⇉", Due = "↝", Nue = "↦", Bue = "⊢", Fue = "⥛", que = "⋌", zue = "⧐", Hue = "⊳", jue = "⊵", Vue = "⥏", Uue = "⥜", Kue = "⥔", Gue = "↾", Wue = "⥓", Zue = "⇀", Xue = "˚", Yue = "≓", Jue = "⇄", Que = "⇌", efe = "‏", tfe = "⎱", nfe = "⎱", rfe = "⫮", ofe = "⟭", sfe = "⇾", ife = "⟧", afe = "⦆", lfe = "𝕣", cfe = "ℝ", ufe = "⨮", ffe = "⨵", dfe = "⥰", pfe = ")", hfe = "⦔", gfe = "⨒", mfe = "⇉", vfe = "⇛", bfe = "›", _fe = "𝓇", yfe = "ℛ", wfe = "↱", kfe = "↱", Cfe = "]", xfe = "’", Efe = "’", Sfe = "⋌", Afe = "⋊", Tfe = "▹", Mfe = "⊵", $fe = "▸", Lfe = "⧎", Ife = "⧴", Ofe = "⥨", Rfe = "℞", Pfe = "Ś", Dfe = "ś", Nfe = "‚", Bfe = "⪸", Ffe = "Š", qfe = "š", zfe = "⪼", Hfe = "≻", jfe = "≽", Vfe = "⪰", Ufe = "⪴", Kfe = "Ş", Gfe = "ş", Wfe = "Ŝ", Zfe = "ŝ", Xfe = "⪺", Yfe = "⪶", Jfe = "⋩", Qfe = "⨓", ede = "≿", tde = "С", nde = "с", rde = "⊡", ode = "⋅", sde = "⩦", ide = "⤥", ade = "↘", lde = "⇘", cde = "↘", ude = "§", fde = ";", dde = "⤩", pde = "∖", hde = "∖", gde = "✶", mde = "𝔖", vde = "𝔰", bde = "⌢", _de = "♯", yde = "Щ", wde = "щ", kde = "Ш", Cde = "ш", xde = "↓", Ede = "←", Sde = "∣", Ade = "∥", Tde = "→", Mde = "↑", $de = "­", Lde = "Σ", Ide = "σ", Ode = "ς", Rde = "ς", Pde = "∼", Dde = "⩪", Nde = "≃", Bde = "≃", Fde = "⪞", qde = "⪠", zde = "⪝", Hde = "⪟", jde = "≆", Vde = "⨤", Ude = "⥲", Kde = "←", Gde = "∘", Wde = "∖", Zde = "⨳", Xde = "⧤", Yde = "∣", Jde = "⌣", Qde = "⪪", e0e = "⪬", t0e = "⪬︀", n0e = "Ь", r0e = "ь", o0e = "⌿", s0e = "⧄", i0e = "/", a0e = "𝕊", l0e = "𝕤", c0e = "♠", u0e = "♠", f0e = "∥", d0e = "⊓", p0e = "⊓︀", h0e = "⊔", g0e = "⊔︀", m0e = "√", v0e = "⊏", b0e = "⊑", _0e = "⊏", y0e = "⊑", w0e = "⊐", k0e = "⊒", C0e = "⊐", x0e = "⊒", E0e = "□", S0e = "□", A0e = "⊓", T0e = "⊏", M0e = "⊑", $0e = "⊐", L0e = "⊒", I0e = "⊔", O0e = "▪", R0e = "□", P0e = "▪", D0e = "→", N0e = "𝒮", B0e = "𝓈", F0e = "∖", q0e = "⌣", z0e = "⋆", H0e = "⋆", j0e = "☆", V0e = "★", U0e = "ϵ", K0e = "ϕ", G0e = "¯", W0e = "⊂", Z0e = "⋐", X0e = "⪽", Y0e = "⫅", J0e = "⊆", Q0e = "⫃", epe = "⫁", tpe = "⫋", npe = "⊊", rpe = "⪿", ope = "⥹", spe = "⊂", ipe = "⋐", ape = "⊆", lpe = "⫅", cpe = "⊆", upe = "⊊", fpe = "⫋", dpe = "⫇", ppe = "⫕", hpe = "⫓", gpe = "⪸", mpe = "≻", vpe = "≽", bpe = "≻", _pe = "⪰", ype = "≽", wpe = "≿", kpe = "⪰", Cpe = "⪺", xpe = "⪶", Epe = "⋩", Spe = "≿", Ape = "∋", Tpe = "∑", Mpe = "∑", $pe = "♪", Lpe = "¹", Ipe = "²", Ope = "³", Rpe = "⊃", Ppe = "⋑", Dpe = "⪾", Npe = "⫘", Bpe = "⫆", Fpe = "⊇", qpe = "⫄", zpe = "⊃", Hpe = "⊇", jpe = "⟉", Vpe = "⫗", Upe = "⥻", Kpe = "⫂", Gpe = "⫌", Wpe = "⊋", Zpe = "⫀", Xpe = "⊃", Ype = "⋑", Jpe = "⊇", Qpe = "⫆", ehe = "⊋", the = "⫌", nhe = "⫈", rhe = "⫔", ohe = "⫖", she = "⤦", ihe = "↙", ahe = "⇙", lhe = "↙", che = "⤪", uhe = "ß", fhe = "	", dhe = "⌖", phe = "Τ", hhe = "τ", ghe = "⎴", mhe = "Ť", vhe = "ť", bhe = "Ţ", _he = "ţ", yhe = "Т", whe = "т", khe = "⃛", Che = "⌕", xhe = "𝔗", Ehe = "𝔱", She = "∴", Ahe = "∴", The = "∴", Mhe = "Θ", $he = "θ", Lhe = "ϑ", Ihe = "ϑ", Ohe = "≈", Rhe = "∼", Phe = "  ", Dhe = " ", Nhe = " ", Bhe = "≈", Fhe = "∼", qhe = "Þ", zhe = "þ", Hhe = "˜", jhe = "∼", Vhe = "≃", Uhe = "≅", Khe = "≈", Ghe = "⨱", Whe = "⊠", Zhe = "×", Xhe = "⨰", Yhe = "∭", Jhe = "⤨", Qhe = "⌶", e2e = "⫱", t2e = "⊤", n2e = "𝕋", r2e = "𝕥", o2e = "⫚", s2e = "⤩", i2e = "‴", a2e = "™", l2e = "™", c2e = "▵", u2e = "▿", f2e = "◃", d2e = "⊴", p2e = "≜", h2e = "▹", g2e = "⊵", m2e = "◬", v2e = "≜", b2e = "⨺", _2e = "⃛", y2e = "⨹", w2e = "⧍", k2e = "⨻", C2e = "⏢", x2e = "𝒯", E2e = "𝓉", S2e = "Ц", A2e = "ц", T2e = "Ћ", M2e = "ћ", $2e = "Ŧ", L2e = "ŧ", I2e = "≬", O2e = "↞", R2e = "↠", P2e = "Ú", D2e = "ú", N2e = "↑", B2e = "↟", F2e = "⇑", q2e = "⥉", z2e = "Ў", H2e = "ў", j2e = "Ŭ", V2e = "ŭ", U2e = "Û", K2e = "û", G2e = "У", W2e = "у", Z2e = "⇅", X2e = "Ű", Y2e = "ű", J2e = "⥮", Q2e = "⥾", e1e = "𝔘", t1e = "𝔲", n1e = "Ù", r1e = "ù", o1e = "⥣", s1e = "↿", i1e = "↾", a1e = "▀", l1e = "⌜", c1e = "⌜", u1e = "⌏", f1e = "◸", d1e = "Ū", p1e = "ū", h1e = "¨", g1e = "_", m1e = "⏟", v1e = "⎵", b1e = "⏝", _1e = "⋃", y1e = "⊎", w1e = "Ų", k1e = "ų", C1e = "𝕌", x1e = "𝕦", E1e = "⤒", S1e = "↑", A1e = "↑", T1e = "⇑", M1e = "⇅", $1e = "↕", L1e = "↕", I1e = "⇕", O1e = "⥮", R1e = "↿", P1e = "↾", D1e = "⊎", N1e = "↖", B1e = "↗", F1e = "υ", q1e = "ϒ", z1e = "ϒ", H1e = "Υ", j1e = "υ", V1e = "↥", U1e = "⊥", K1e = "⇈", G1e = "⌝", W1e = "⌝", Z1e = "⌎", X1e = "Ů", Y1e = "ů", J1e = "◹", Q1e = "𝒰", ege = "𝓊", tge = "⋰", nge = "Ũ", rge = "ũ", oge = "▵", sge = "▴", ige = "⇈", age = "Ü", lge = "ü", cge = "⦧", uge = "⦜", fge = "ϵ", dge = "ϰ", pge = "∅", hge = "ϕ", gge = "ϖ", mge = "∝", vge = "↕", bge = "⇕", _ge = "ϱ", yge = "ς", wge = "⊊︀", kge = "⫋︀", Cge = "⊋︀", xge = "⫌︀", Ege = "ϑ", Sge = "⊲", Age = "⊳", Tge = "⫨", Mge = "⫫", $ge = "⫩", Lge = "В", Ige = "в", Oge = "⊢", Rge = "⊨", Pge = "⊩", Dge = "⊫", Nge = "⫦", Bge = "⊻", Fge = "∨", qge = "⋁", zge = "≚", Hge = "⋮", jge = "|", Vge = "‖", Uge = "|", Kge = "‖", Gge = "∣", Wge = "|", Zge = "❘", Xge = "≀", Yge = " ", Jge = "𝔙", Qge = "𝔳", eme = "⊲", tme = "⊂⃒", nme = "⊃⃒", rme = "𝕍", ome = "𝕧", sme = "∝", ime = "⊳", ame = "𝒱", lme = "𝓋", cme = "⫋︀", ume = "⊊︀", fme = "⫌︀", dme = "⊋︀", pme = "⊪", hme = "⦚", gme = "Ŵ", mme = "ŵ", vme = "⩟", bme = "∧", _me = "⋀", yme = "≙", wme = "℘", kme = "𝔚", Cme = "𝔴", xme = "𝕎", Eme = "𝕨", Sme = "℘", Ame = "≀", Tme = "≀", Mme = "𝒲", $me = "𝓌", Lme = "⋂", Ime = "◯", Ome = "⋃", Rme = "▽", Pme = "𝔛", Dme = "𝔵", Nme = "⟷", Bme = "⟺", Fme = "Ξ", qme = "ξ", zme = "⟵", Hme = "⟸", jme = "⟼", Vme = "⋻", Ume = "⨀", Kme = "𝕏", Gme = "𝕩", Wme = "⨁", Zme = "⨂", Xme = "⟶", Yme = "⟹", Jme = "𝒳", Qme = "𝓍", eve = "⨆", tve = "⨄", nve = "△", rve = "⋁", ove = "⋀", sve = "Ý", ive = "ý", ave = "Я", lve = "я", cve = "Ŷ", uve = "ŷ", fve = "Ы", dve = "ы", pve = "¥", hve = "𝔜", gve = "𝔶", mve = "Ї", vve = "ї", bve = "𝕐", _ve = "𝕪", yve = "𝒴", wve = "𝓎", kve = "Ю", Cve = "ю", xve = "ÿ", Eve = "Ÿ", Sve = "Ź", Ave = "ź", Tve = "Ž", Mve = "ž", $ve = "З", Lve = "з", Ive = "Ż", Ove = "ż", Rve = "ℨ", Pve = "​", Dve = "Ζ", Nve = "ζ", Bve = "𝔷", Fve = "ℨ", qve = "Ж", zve = "ж", Hve = "⇝", jve = "𝕫", Vve = "ℤ", Uve = "𝒵", Kve = "𝓏", Gve = "‍", Wve = "‌", Zve = {
  Aacute: IP,
  aacute: OP,
  Abreve: RP,
  abreve: PP,
  ac: DP,
  acd: NP,
  acE: BP,
  Acirc: FP,
  acirc: qP,
  acute: zP,
  Acy: HP,
  acy: jP,
  AElig: VP,
  aelig: UP,
  af: KP,
  Afr: GP,
  afr: WP,
  Agrave: ZP,
  agrave: XP,
  alefsym: YP,
  aleph: JP,
  Alpha: QP,
  alpha: eD,
  Amacr: tD,
  amacr: nD,
  amalg: rD,
  amp: oD,
  AMP: sD,
  andand: iD,
  And: aD,
  and: lD,
  andd: cD,
  andslope: uD,
  andv: fD,
  ang: dD,
  ange: pD,
  angle: hD,
  angmsdaa: gD,
  angmsdab: mD,
  angmsdac: vD,
  angmsdad: bD,
  angmsdae: _D,
  angmsdaf: yD,
  angmsdag: wD,
  angmsdah: kD,
  angmsd: CD,
  angrt: xD,
  angrtvb: ED,
  angrtvbd: SD,
  angsph: AD,
  angst: TD,
  angzarr: MD,
  Aogon: $D,
  aogon: LD,
  Aopf: ID,
  aopf: OD,
  apacir: RD,
  ap: PD,
  apE: DD,
  ape: ND,
  apid: BD,
  apos: FD,
  ApplyFunction: qD,
  approx: zD,
  approxeq: HD,
  Aring: jD,
  aring: VD,
  Ascr: UD,
  ascr: KD,
  Assign: GD,
  ast: WD,
  asymp: ZD,
  asympeq: XD,
  Atilde: YD,
  atilde: JD,
  Auml: QD,
  auml: eN,
  awconint: tN,
  awint: nN,
  backcong: rN,
  backepsilon: oN,
  backprime: sN,
  backsim: iN,
  backsimeq: aN,
  Backslash: lN,
  Barv: cN,
  barvee: uN,
  barwed: fN,
  Barwed: dN,
  barwedge: pN,
  bbrk: hN,
  bbrktbrk: gN,
  bcong: mN,
  Bcy: vN,
  bcy: bN,
  bdquo: _N,
  becaus: yN,
  because: wN,
  Because: kN,
  bemptyv: CN,
  bepsi: xN,
  bernou: EN,
  Bernoullis: SN,
  Beta: AN,
  beta: TN,
  beth: MN,
  between: $N,
  Bfr: LN,
  bfr: IN,
  bigcap: ON,
  bigcirc: RN,
  bigcup: PN,
  bigodot: DN,
  bigoplus: NN,
  bigotimes: BN,
  bigsqcup: FN,
  bigstar: qN,
  bigtriangledown: zN,
  bigtriangleup: HN,
  biguplus: jN,
  bigvee: VN,
  bigwedge: UN,
  bkarow: KN,
  blacklozenge: GN,
  blacksquare: WN,
  blacktriangle: ZN,
  blacktriangledown: XN,
  blacktriangleleft: YN,
  blacktriangleright: JN,
  blank: QN,
  blk12: eB,
  blk14: tB,
  blk34: nB,
  block: rB,
  bne: oB,
  bnequiv: sB,
  bNot: iB,
  bnot: aB,
  Bopf: lB,
  bopf: cB,
  bot: uB,
  bottom: fB,
  bowtie: dB,
  boxbox: pB,
  boxdl: hB,
  boxdL: gB,
  boxDl: mB,
  boxDL: vB,
  boxdr: bB,
  boxdR: _B,
  boxDr: yB,
  boxDR: wB,
  boxh: kB,
  boxH: CB,
  boxhd: xB,
  boxHd: EB,
  boxhD: SB,
  boxHD: AB,
  boxhu: TB,
  boxHu: MB,
  boxhU: $B,
  boxHU: LB,
  boxminus: IB,
  boxplus: OB,
  boxtimes: RB,
  boxul: PB,
  boxuL: DB,
  boxUl: NB,
  boxUL: BB,
  boxur: FB,
  boxuR: qB,
  boxUr: zB,
  boxUR: HB,
  boxv: jB,
  boxV: VB,
  boxvh: UB,
  boxvH: KB,
  boxVh: GB,
  boxVH: WB,
  boxvl: ZB,
  boxvL: XB,
  boxVl: YB,
  boxVL: JB,
  boxvr: QB,
  boxvR: eF,
  boxVr: tF,
  boxVR: nF,
  bprime: rF,
  breve: oF,
  Breve: sF,
  brvbar: iF,
  bscr: aF,
  Bscr: lF,
  bsemi: cF,
  bsim: uF,
  bsime: fF,
  bsolb: dF,
  bsol: pF,
  bsolhsub: hF,
  bull: gF,
  bullet: mF,
  bump: vF,
  bumpE: bF,
  bumpe: _F,
  Bumpeq: yF,
  bumpeq: wF,
  Cacute: kF,
  cacute: CF,
  capand: xF,
  capbrcup: EF,
  capcap: SF,
  cap: AF,
  Cap: TF,
  capcup: MF,
  capdot: $F,
  CapitalDifferentialD: LF,
  caps: IF,
  caret: OF,
  caron: RF,
  Cayleys: PF,
  ccaps: DF,
  Ccaron: NF,
  ccaron: BF,
  Ccedil: FF,
  ccedil: qF,
  Ccirc: zF,
  ccirc: HF,
  Cconint: jF,
  ccups: VF,
  ccupssm: UF,
  Cdot: KF,
  cdot: GF,
  cedil: WF,
  Cedilla: ZF,
  cemptyv: XF,
  cent: YF,
  centerdot: JF,
  CenterDot: QF,
  cfr: eq,
  Cfr: tq,
  CHcy: nq,
  chcy: rq,
  check: oq,
  checkmark: sq,
  Chi: iq,
  chi: aq,
  circ: lq,
  circeq: cq,
  circlearrowleft: uq,
  circlearrowright: fq,
  circledast: dq,
  circledcirc: pq,
  circleddash: hq,
  CircleDot: gq,
  circledR: mq,
  circledS: vq,
  CircleMinus: bq,
  CirclePlus: _q,
  CircleTimes: yq,
  cir: wq,
  cirE: kq,
  cire: Cq,
  cirfnint: xq,
  cirmid: Eq,
  cirscir: Sq,
  ClockwiseContourIntegral: Aq,
  CloseCurlyDoubleQuote: Tq,
  CloseCurlyQuote: Mq,
  clubs: $q,
  clubsuit: Lq,
  colon: Iq,
  Colon: Oq,
  Colone: Rq,
  colone: Pq,
  coloneq: Dq,
  comma: Nq,
  commat: Bq,
  comp: Fq,
  compfn: qq,
  complement: zq,
  complexes: Hq,
  cong: jq,
  congdot: Vq,
  Congruent: Uq,
  conint: Kq,
  Conint: Gq,
  ContourIntegral: Wq,
  copf: Zq,
  Copf: Xq,
  coprod: Yq,
  Coproduct: Jq,
  copy: Qq,
  COPY: ez,
  copysr: tz,
  CounterClockwiseContourIntegral: nz,
  crarr: rz,
  cross: oz,
  Cross: sz,
  Cscr: iz,
  cscr: az,
  csub: lz,
  csube: cz,
  csup: uz,
  csupe: fz,
  ctdot: dz,
  cudarrl: pz,
  cudarrr: hz,
  cuepr: gz,
  cuesc: mz,
  cularr: vz,
  cularrp: bz,
  cupbrcap: _z,
  cupcap: yz,
  CupCap: wz,
  cup: kz,
  Cup: Cz,
  cupcup: xz,
  cupdot: Ez,
  cupor: Sz,
  cups: Az,
  curarr: Tz,
  curarrm: Mz,
  curlyeqprec: $z,
  curlyeqsucc: Lz,
  curlyvee: Iz,
  curlywedge: Oz,
  curren: Rz,
  curvearrowleft: Pz,
  curvearrowright: Dz,
  cuvee: Nz,
  cuwed: Bz,
  cwconint: Fz,
  cwint: qz,
  cylcty: zz,
  dagger: Hz,
  Dagger: jz,
  daleth: Vz,
  darr: Uz,
  Darr: Kz,
  dArr: Gz,
  dash: Wz,
  Dashv: Zz,
  dashv: Xz,
  dbkarow: Yz,
  dblac: Jz,
  Dcaron: Qz,
  dcaron: eH,
  Dcy: tH,
  dcy: nH,
  ddagger: rH,
  ddarr: oH,
  DD: sH,
  dd: iH,
  DDotrahd: aH,
  ddotseq: lH,
  deg: cH,
  Del: uH,
  Delta: fH,
  delta: dH,
  demptyv: pH,
  dfisht: hH,
  Dfr: gH,
  dfr: mH,
  dHar: vH,
  dharl: bH,
  dharr: _H,
  DiacriticalAcute: yH,
  DiacriticalDot: wH,
  DiacriticalDoubleAcute: kH,
  DiacriticalGrave: CH,
  DiacriticalTilde: xH,
  diam: EH,
  diamond: SH,
  Diamond: AH,
  diamondsuit: TH,
  diams: MH,
  die: $H,
  DifferentialD: LH,
  digamma: IH,
  disin: OH,
  div: RH,
  divide: PH,
  divideontimes: DH,
  divonx: NH,
  DJcy: BH,
  djcy: FH,
  dlcorn: qH,
  dlcrop: zH,
  dollar: HH,
  Dopf: jH,
  dopf: VH,
  Dot: UH,
  dot: KH,
  DotDot: GH,
  doteq: WH,
  doteqdot: ZH,
  DotEqual: XH,
  dotminus: YH,
  dotplus: JH,
  dotsquare: QH,
  doublebarwedge: ej,
  DoubleContourIntegral: tj,
  DoubleDot: nj,
  DoubleDownArrow: rj,
  DoubleLeftArrow: oj,
  DoubleLeftRightArrow: sj,
  DoubleLeftTee: ij,
  DoubleLongLeftArrow: aj,
  DoubleLongLeftRightArrow: lj,
  DoubleLongRightArrow: cj,
  DoubleRightArrow: uj,
  DoubleRightTee: fj,
  DoubleUpArrow: dj,
  DoubleUpDownArrow: pj,
  DoubleVerticalBar: hj,
  DownArrowBar: gj,
  downarrow: mj,
  DownArrow: vj,
  Downarrow: bj,
  DownArrowUpArrow: _j,
  DownBreve: yj,
  downdownarrows: wj,
  downharpoonleft: kj,
  downharpoonright: Cj,
  DownLeftRightVector: xj,
  DownLeftTeeVector: Ej,
  DownLeftVectorBar: Sj,
  DownLeftVector: Aj,
  DownRightTeeVector: Tj,
  DownRightVectorBar: Mj,
  DownRightVector: $j,
  DownTeeArrow: Lj,
  DownTee: Ij,
  drbkarow: Oj,
  drcorn: Rj,
  drcrop: Pj,
  Dscr: Dj,
  dscr: Nj,
  DScy: Bj,
  dscy: Fj,
  dsol: qj,
  Dstrok: zj,
  dstrok: Hj,
  dtdot: jj,
  dtri: Vj,
  dtrif: Uj,
  duarr: Kj,
  duhar: Gj,
  dwangle: Wj,
  DZcy: Zj,
  dzcy: Xj,
  dzigrarr: Yj,
  Eacute: Jj,
  eacute: Qj,
  easter: eV,
  Ecaron: tV,
  ecaron: nV,
  Ecirc: rV,
  ecirc: oV,
  ecir: sV,
  ecolon: iV,
  Ecy: aV,
  ecy: lV,
  eDDot: cV,
  Edot: uV,
  edot: fV,
  eDot: dV,
  ee: pV,
  efDot: hV,
  Efr: gV,
  efr: mV,
  eg: vV,
  Egrave: bV,
  egrave: _V,
  egs: yV,
  egsdot: wV,
  el: kV,
  Element: CV,
  elinters: xV,
  ell: EV,
  els: SV,
  elsdot: AV,
  Emacr: TV,
  emacr: MV,
  empty: $V,
  emptyset: LV,
  EmptySmallSquare: IV,
  emptyv: OV,
  EmptyVerySmallSquare: RV,
  emsp13: PV,
  emsp14: DV,
  emsp: NV,
  ENG: BV,
  eng: FV,
  ensp: qV,
  Eogon: zV,
  eogon: HV,
  Eopf: jV,
  eopf: VV,
  epar: UV,
  eparsl: KV,
  eplus: GV,
  epsi: WV,
  Epsilon: ZV,
  epsilon: XV,
  epsiv: YV,
  eqcirc: JV,
  eqcolon: QV,
  eqsim: eU,
  eqslantgtr: tU,
  eqslantless: nU,
  Equal: rU,
  equals: oU,
  EqualTilde: sU,
  equest: iU,
  Equilibrium: aU,
  equiv: lU,
  equivDD: cU,
  eqvparsl: uU,
  erarr: fU,
  erDot: dU,
  escr: pU,
  Escr: hU,
  esdot: gU,
  Esim: mU,
  esim: vU,
  Eta: bU,
  eta: _U,
  ETH: yU,
  eth: wU,
  Euml: kU,
  euml: CU,
  euro: xU,
  excl: EU,
  exist: SU,
  Exists: AU,
  expectation: TU,
  exponentiale: MU,
  ExponentialE: $U,
  fallingdotseq: LU,
  Fcy: IU,
  fcy: OU,
  female: RU,
  ffilig: PU,
  fflig: DU,
  ffllig: NU,
  Ffr: BU,
  ffr: FU,
  filig: qU,
  FilledSmallSquare: zU,
  FilledVerySmallSquare: HU,
  fjlig: jU,
  flat: VU,
  fllig: UU,
  fltns: KU,
  fnof: GU,
  Fopf: WU,
  fopf: ZU,
  forall: XU,
  ForAll: YU,
  fork: JU,
  forkv: QU,
  Fouriertrf: eK,
  fpartint: tK,
  frac12: nK,
  frac13: rK,
  frac14: oK,
  frac15: sK,
  frac16: iK,
  frac18: aK,
  frac23: lK,
  frac25: cK,
  frac34: uK,
  frac35: fK,
  frac38: dK,
  frac45: pK,
  frac56: hK,
  frac58: gK,
  frac78: mK,
  frasl: vK,
  frown: bK,
  fscr: _K,
  Fscr: yK,
  gacute: wK,
  Gamma: kK,
  gamma: CK,
  Gammad: xK,
  gammad: EK,
  gap: SK,
  Gbreve: AK,
  gbreve: TK,
  Gcedil: MK,
  Gcirc: $K,
  gcirc: LK,
  Gcy: IK,
  gcy: OK,
  Gdot: RK,
  gdot: PK,
  ge: DK,
  gE: NK,
  gEl: BK,
  gel: FK,
  geq: qK,
  geqq: zK,
  geqslant: HK,
  gescc: jK,
  ges: VK,
  gesdot: UK,
  gesdoto: KK,
  gesdotol: GK,
  gesl: WK,
  gesles: ZK,
  Gfr: XK,
  gfr: YK,
  gg: JK,
  Gg: QK,
  ggg: eG,
  gimel: tG,
  GJcy: nG,
  gjcy: rG,
  gla: oG,
  gl: sG,
  glE: iG,
  glj: aG,
  gnap: lG,
  gnapprox: cG,
  gne: uG,
  gnE: fG,
  gneq: dG,
  gneqq: pG,
  gnsim: hG,
  Gopf: gG,
  gopf: mG,
  grave: vG,
  GreaterEqual: bG,
  GreaterEqualLess: _G,
  GreaterFullEqual: yG,
  GreaterGreater: wG,
  GreaterLess: kG,
  GreaterSlantEqual: CG,
  GreaterTilde: xG,
  Gscr: EG,
  gscr: SG,
  gsim: AG,
  gsime: TG,
  gsiml: MG,
  gtcc: $G,
  gtcir: LG,
  gt: IG,
  GT: OG,
  Gt: RG,
  gtdot: PG,
  gtlPar: DG,
  gtquest: NG,
  gtrapprox: BG,
  gtrarr: FG,
  gtrdot: qG,
  gtreqless: zG,
  gtreqqless: HG,
  gtrless: jG,
  gtrsim: VG,
  gvertneqq: UG,
  gvnE: KG,
  Hacek: GG,
  hairsp: WG,
  half: ZG,
  hamilt: XG,
  HARDcy: YG,
  hardcy: JG,
  harrcir: QG,
  harr: eW,
  hArr: tW,
  harrw: nW,
  Hat: rW,
  hbar: oW,
  Hcirc: sW,
  hcirc: iW,
  hearts: aW,
  heartsuit: lW,
  hellip: cW,
  hercon: uW,
  hfr: fW,
  Hfr: dW,
  HilbertSpace: pW,
  hksearow: hW,
  hkswarow: gW,
  hoarr: mW,
  homtht: vW,
  hookleftarrow: bW,
  hookrightarrow: _W,
  hopf: yW,
  Hopf: wW,
  horbar: kW,
  HorizontalLine: CW,
  hscr: xW,
  Hscr: EW,
  hslash: SW,
  Hstrok: AW,
  hstrok: TW,
  HumpDownHump: MW,
  HumpEqual: $W,
  hybull: LW,
  hyphen: IW,
  Iacute: OW,
  iacute: RW,
  ic: PW,
  Icirc: DW,
  icirc: NW,
  Icy: BW,
  icy: FW,
  Idot: qW,
  IEcy: zW,
  iecy: HW,
  iexcl: jW,
  iff: VW,
  ifr: UW,
  Ifr: KW,
  Igrave: GW,
  igrave: WW,
  ii: ZW,
  iiiint: XW,
  iiint: YW,
  iinfin: JW,
  iiota: QW,
  IJlig: eZ,
  ijlig: tZ,
  Imacr: nZ,
  imacr: rZ,
  image: oZ,
  ImaginaryI: sZ,
  imagline: iZ,
  imagpart: aZ,
  imath: lZ,
  Im: cZ,
  imof: uZ,
  imped: fZ,
  Implies: dZ,
  incare: pZ,
  in: "∈",
  infin: hZ,
  infintie: gZ,
  inodot: mZ,
  intcal: vZ,
  int: bZ,
  Int: _Z,
  integers: yZ,
  Integral: wZ,
  intercal: kZ,
  Intersection: CZ,
  intlarhk: xZ,
  intprod: EZ,
  InvisibleComma: SZ,
  InvisibleTimes: AZ,
  IOcy: TZ,
  iocy: MZ,
  Iogon: $Z,
  iogon: LZ,
  Iopf: IZ,
  iopf: OZ,
  Iota: RZ,
  iota: PZ,
  iprod: DZ,
  iquest: NZ,
  iscr: BZ,
  Iscr: FZ,
  isin: qZ,
  isindot: zZ,
  isinE: HZ,
  isins: jZ,
  isinsv: VZ,
  isinv: UZ,
  it: KZ,
  Itilde: GZ,
  itilde: WZ,
  Iukcy: ZZ,
  iukcy: XZ,
  Iuml: YZ,
  iuml: JZ,
  Jcirc: QZ,
  jcirc: eX,
  Jcy: tX,
  jcy: nX,
  Jfr: rX,
  jfr: oX,
  jmath: sX,
  Jopf: iX,
  jopf: aX,
  Jscr: lX,
  jscr: cX,
  Jsercy: uX,
  jsercy: fX,
  Jukcy: dX,
  jukcy: pX,
  Kappa: hX,
  kappa: gX,
  kappav: mX,
  Kcedil: vX,
  kcedil: bX,
  Kcy: _X,
  kcy: yX,
  Kfr: wX,
  kfr: kX,
  kgreen: CX,
  KHcy: xX,
  khcy: EX,
  KJcy: SX,
  kjcy: AX,
  Kopf: TX,
  kopf: MX,
  Kscr: $X,
  kscr: LX,
  lAarr: IX,
  Lacute: OX,
  lacute: RX,
  laemptyv: PX,
  lagran: DX,
  Lambda: NX,
  lambda: BX,
  lang: FX,
  Lang: qX,
  langd: zX,
  langle: HX,
  lap: jX,
  Laplacetrf: VX,
  laquo: UX,
  larrb: KX,
  larrbfs: GX,
  larr: WX,
  Larr: ZX,
  lArr: XX,
  larrfs: YX,
  larrhk: JX,
  larrlp: QX,
  larrpl: eY,
  larrsim: tY,
  larrtl: nY,
  latail: rY,
  lAtail: oY,
  lat: sY,
  late: iY,
  lates: aY,
  lbarr: lY,
  lBarr: cY,
  lbbrk: uY,
  lbrace: fY,
  lbrack: dY,
  lbrke: pY,
  lbrksld: hY,
  lbrkslu: gY,
  Lcaron: mY,
  lcaron: vY,
  Lcedil: bY,
  lcedil: _Y,
  lceil: yY,
  lcub: wY,
  Lcy: kY,
  lcy: CY,
  ldca: xY,
  ldquo: EY,
  ldquor: SY,
  ldrdhar: AY,
  ldrushar: TY,
  ldsh: MY,
  le: $Y,
  lE: LY,
  LeftAngleBracket: IY,
  LeftArrowBar: OY,
  leftarrow: RY,
  LeftArrow: PY,
  Leftarrow: DY,
  LeftArrowRightArrow: NY,
  leftarrowtail: BY,
  LeftCeiling: FY,
  LeftDoubleBracket: qY,
  LeftDownTeeVector: zY,
  LeftDownVectorBar: HY,
  LeftDownVector: jY,
  LeftFloor: VY,
  leftharpoondown: UY,
  leftharpoonup: KY,
  leftleftarrows: GY,
  leftrightarrow: WY,
  LeftRightArrow: ZY,
  Leftrightarrow: XY,
  leftrightarrows: YY,
  leftrightharpoons: JY,
  leftrightsquigarrow: QY,
  LeftRightVector: eJ,
  LeftTeeArrow: tJ,
  LeftTee: nJ,
  LeftTeeVector: rJ,
  leftthreetimes: oJ,
  LeftTriangleBar: sJ,
  LeftTriangle: iJ,
  LeftTriangleEqual: aJ,
  LeftUpDownVector: lJ,
  LeftUpTeeVector: cJ,
  LeftUpVectorBar: uJ,
  LeftUpVector: fJ,
  LeftVectorBar: dJ,
  LeftVector: pJ,
  lEg: hJ,
  leg: gJ,
  leq: mJ,
  leqq: vJ,
  leqslant: bJ,
  lescc: _J,
  les: yJ,
  lesdot: wJ,
  lesdoto: kJ,
  lesdotor: CJ,
  lesg: xJ,
  lesges: EJ,
  lessapprox: SJ,
  lessdot: AJ,
  lesseqgtr: TJ,
  lesseqqgtr: MJ,
  LessEqualGreater: $J,
  LessFullEqual: LJ,
  LessGreater: IJ,
  lessgtr: OJ,
  LessLess: RJ,
  lesssim: PJ,
  LessSlantEqual: DJ,
  LessTilde: NJ,
  lfisht: BJ,
  lfloor: FJ,
  Lfr: qJ,
  lfr: zJ,
  lg: HJ,
  lgE: jJ,
  lHar: VJ,
  lhard: UJ,
  lharu: KJ,
  lharul: GJ,
  lhblk: WJ,
  LJcy: ZJ,
  ljcy: XJ,
  llarr: YJ,
  ll: JJ,
  Ll: QJ,
  llcorner: eQ,
  Lleftarrow: tQ,
  llhard: nQ,
  lltri: rQ,
  Lmidot: oQ,
  lmidot: sQ,
  lmoustache: iQ,
  lmoust: aQ,
  lnap: lQ,
  lnapprox: cQ,
  lne: uQ,
  lnE: fQ,
  lneq: dQ,
  lneqq: pQ,
  lnsim: hQ,
  loang: gQ,
  loarr: mQ,
  lobrk: vQ,
  longleftarrow: bQ,
  LongLeftArrow: _Q,
  Longleftarrow: yQ,
  longleftrightarrow: wQ,
  LongLeftRightArrow: kQ,
  Longleftrightarrow: CQ,
  longmapsto: xQ,
  longrightarrow: EQ,
  LongRightArrow: SQ,
  Longrightarrow: AQ,
  looparrowleft: TQ,
  looparrowright: MQ,
  lopar: $Q,
  Lopf: LQ,
  lopf: IQ,
  loplus: OQ,
  lotimes: RQ,
  lowast: PQ,
  lowbar: DQ,
  LowerLeftArrow: NQ,
  LowerRightArrow: BQ,
  loz: FQ,
  lozenge: qQ,
  lozf: zQ,
  lpar: HQ,
  lparlt: jQ,
  lrarr: VQ,
  lrcorner: UQ,
  lrhar: KQ,
  lrhard: GQ,
  lrm: WQ,
  lrtri: ZQ,
  lsaquo: XQ,
  lscr: YQ,
  Lscr: JQ,
  lsh: QQ,
  Lsh: eee,
  lsim: tee,
  lsime: nee,
  lsimg: ree,
  lsqb: oee,
  lsquo: see,
  lsquor: iee,
  Lstrok: aee,
  lstrok: lee,
  ltcc: cee,
  ltcir: uee,
  lt: fee,
  LT: dee,
  Lt: pee,
  ltdot: hee,
  lthree: gee,
  ltimes: mee,
  ltlarr: vee,
  ltquest: bee,
  ltri: _ee,
  ltrie: yee,
  ltrif: wee,
  ltrPar: kee,
  lurdshar: Cee,
  luruhar: xee,
  lvertneqq: Eee,
  lvnE: See,
  macr: Aee,
  male: Tee,
  malt: Mee,
  maltese: $ee,
  Map: "⤅",
  map: Lee,
  mapsto: Iee,
  mapstodown: Oee,
  mapstoleft: Ree,
  mapstoup: Pee,
  marker: Dee,
  mcomma: Nee,
  Mcy: Bee,
  mcy: Fee,
  mdash: qee,
  mDDot: zee,
  measuredangle: Hee,
  MediumSpace: jee,
  Mellintrf: Vee,
  Mfr: Uee,
  mfr: Kee,
  mho: Gee,
  micro: Wee,
  midast: Zee,
  midcir: Xee,
  mid: Yee,
  middot: Jee,
  minusb: Qee,
  minus: ete,
  minusd: tte,
  minusdu: nte,
  MinusPlus: rte,
  mlcp: ote,
  mldr: ste,
  mnplus: ite,
  models: ate,
  Mopf: lte,
  mopf: cte,
  mp: ute,
  mscr: fte,
  Mscr: dte,
  mstpos: pte,
  Mu: hte,
  mu: gte,
  multimap: mte,
  mumap: vte,
  nabla: bte,
  Nacute: _te,
  nacute: yte,
  nang: wte,
  nap: kte,
  napE: Cte,
  napid: xte,
  napos: Ete,
  napprox: Ste,
  natural: Ate,
  naturals: Tte,
  natur: Mte,
  nbsp: $te,
  nbump: Lte,
  nbumpe: Ite,
  ncap: Ote,
  Ncaron: Rte,
  ncaron: Pte,
  Ncedil: Dte,
  ncedil: Nte,
  ncong: Bte,
  ncongdot: Fte,
  ncup: qte,
  Ncy: zte,
  ncy: Hte,
  ndash: jte,
  nearhk: Vte,
  nearr: Ute,
  neArr: Kte,
  nearrow: Gte,
  ne: Wte,
  nedot: Zte,
  NegativeMediumSpace: Xte,
  NegativeThickSpace: Yte,
  NegativeThinSpace: Jte,
  NegativeVeryThinSpace: Qte,
  nequiv: ene,
  nesear: tne,
  nesim: nne,
  NestedGreaterGreater: rne,
  NestedLessLess: one,
  NewLine: sne,
  nexist: ine,
  nexists: ane,
  Nfr: lne,
  nfr: cne,
  ngE: une,
  nge: fne,
  ngeq: dne,
  ngeqq: pne,
  ngeqslant: hne,
  nges: gne,
  nGg: mne,
  ngsim: vne,
  nGt: bne,
  ngt: _ne,
  ngtr: yne,
  nGtv: wne,
  nharr: kne,
  nhArr: Cne,
  nhpar: xne,
  ni: Ene,
  nis: Sne,
  nisd: Ane,
  niv: Tne,
  NJcy: Mne,
  njcy: $ne,
  nlarr: Lne,
  nlArr: Ine,
  nldr: One,
  nlE: Rne,
  nle: Pne,
  nleftarrow: Dne,
  nLeftarrow: Nne,
  nleftrightarrow: Bne,
  nLeftrightarrow: Fne,
  nleq: qne,
  nleqq: zne,
  nleqslant: Hne,
  nles: jne,
  nless: Vne,
  nLl: Une,
  nlsim: Kne,
  nLt: Gne,
  nlt: Wne,
  nltri: Zne,
  nltrie: Xne,
  nLtv: Yne,
  nmid: Jne,
  NoBreak: Qne,
  NonBreakingSpace: ere,
  nopf: tre,
  Nopf: nre,
  Not: rre,
  not: ore,
  NotCongruent: sre,
  NotCupCap: ire,
  NotDoubleVerticalBar: are,
  NotElement: lre,
  NotEqual: cre,
  NotEqualTilde: ure,
  NotExists: fre,
  NotGreater: dre,
  NotGreaterEqual: pre,
  NotGreaterFullEqual: hre,
  NotGreaterGreater: gre,
  NotGreaterLess: mre,
  NotGreaterSlantEqual: vre,
  NotGreaterTilde: bre,
  NotHumpDownHump: _re,
  NotHumpEqual: yre,
  notin: wre,
  notindot: kre,
  notinE: Cre,
  notinva: xre,
  notinvb: Ere,
  notinvc: Sre,
  NotLeftTriangleBar: Are,
  NotLeftTriangle: Tre,
  NotLeftTriangleEqual: Mre,
  NotLess: $re,
  NotLessEqual: Lre,
  NotLessGreater: Ire,
  NotLessLess: Ore,
  NotLessSlantEqual: Rre,
  NotLessTilde: Pre,
  NotNestedGreaterGreater: Dre,
  NotNestedLessLess: Nre,
  notni: Bre,
  notniva: Fre,
  notnivb: qre,
  notnivc: zre,
  NotPrecedes: Hre,
  NotPrecedesEqual: jre,
  NotPrecedesSlantEqual: Vre,
  NotReverseElement: Ure,
  NotRightTriangleBar: Kre,
  NotRightTriangle: Gre,
  NotRightTriangleEqual: Wre,
  NotSquareSubset: Zre,
  NotSquareSubsetEqual: Xre,
  NotSquareSuperset: Yre,
  NotSquareSupersetEqual: Jre,
  NotSubset: Qre,
  NotSubsetEqual: eoe,
  NotSucceeds: toe,
  NotSucceedsEqual: noe,
  NotSucceedsSlantEqual: roe,
  NotSucceedsTilde: ooe,
  NotSuperset: soe,
  NotSupersetEqual: ioe,
  NotTilde: aoe,
  NotTildeEqual: loe,
  NotTildeFullEqual: coe,
  NotTildeTilde: uoe,
  NotVerticalBar: foe,
  nparallel: doe,
  npar: poe,
  nparsl: hoe,
  npart: goe,
  npolint: moe,
  npr: voe,
  nprcue: boe,
  nprec: _oe,
  npreceq: yoe,
  npre: woe,
  nrarrc: koe,
  nrarr: Coe,
  nrArr: xoe,
  nrarrw: Eoe,
  nrightarrow: Soe,
  nRightarrow: Aoe,
  nrtri: Toe,
  nrtrie: Moe,
  nsc: $oe,
  nsccue: Loe,
  nsce: Ioe,
  Nscr: Ooe,
  nscr: Roe,
  nshortmid: Poe,
  nshortparallel: Doe,
  nsim: Noe,
  nsime: Boe,
  nsimeq: Foe,
  nsmid: qoe,
  nspar: zoe,
  nsqsube: Hoe,
  nsqsupe: joe,
  nsub: Voe,
  nsubE: Uoe,
  nsube: Koe,
  nsubset: Goe,
  nsubseteq: Woe,
  nsubseteqq: Zoe,
  nsucc: Xoe,
  nsucceq: Yoe,
  nsup: Joe,
  nsupE: Qoe,
  nsupe: ese,
  nsupset: tse,
  nsupseteq: nse,
  nsupseteqq: rse,
  ntgl: ose,
  Ntilde: sse,
  ntilde: ise,
  ntlg: ase,
  ntriangleleft: lse,
  ntrianglelefteq: cse,
  ntriangleright: use,
  ntrianglerighteq: fse,
  Nu: dse,
  nu: pse,
  num: hse,
  numero: gse,
  numsp: mse,
  nvap: vse,
  nvdash: bse,
  nvDash: _se,
  nVdash: yse,
  nVDash: wse,
  nvge: kse,
  nvgt: Cse,
  nvHarr: xse,
  nvinfin: Ese,
  nvlArr: Sse,
  nvle: Ase,
  nvlt: Tse,
  nvltrie: Mse,
  nvrArr: $se,
  nvrtrie: Lse,
  nvsim: Ise,
  nwarhk: Ose,
  nwarr: Rse,
  nwArr: Pse,
  nwarrow: Dse,
  nwnear: Nse,
  Oacute: Bse,
  oacute: Fse,
  oast: qse,
  Ocirc: zse,
  ocirc: Hse,
  ocir: jse,
  Ocy: Vse,
  ocy: Use,
  odash: Kse,
  Odblac: Gse,
  odblac: Wse,
  odiv: Zse,
  odot: Xse,
  odsold: Yse,
  OElig: Jse,
  oelig: Qse,
  ofcir: eie,
  Ofr: tie,
  ofr: nie,
  ogon: rie,
  Ograve: oie,
  ograve: sie,
  ogt: iie,
  ohbar: aie,
  ohm: lie,
  oint: cie,
  olarr: uie,
  olcir: fie,
  olcross: die,
  oline: pie,
  olt: hie,
  Omacr: gie,
  omacr: mie,
  Omega: vie,
  omega: bie,
  Omicron: _ie,
  omicron: yie,
  omid: wie,
  ominus: kie,
  Oopf: Cie,
  oopf: xie,
  opar: Eie,
  OpenCurlyDoubleQuote: Sie,
  OpenCurlyQuote: Aie,
  operp: Tie,
  oplus: Mie,
  orarr: $ie,
  Or: Lie,
  or: Iie,
  ord: Oie,
  order: Rie,
  orderof: Pie,
  ordf: Die,
  ordm: Nie,
  origof: Bie,
  oror: Fie,
  orslope: qie,
  orv: zie,
  oS: Hie,
  Oscr: jie,
  oscr: Vie,
  Oslash: Uie,
  oslash: Kie,
  osol: Gie,
  Otilde: Wie,
  otilde: Zie,
  otimesas: Xie,
  Otimes: Yie,
  otimes: Jie,
  Ouml: Qie,
  ouml: eae,
  ovbar: tae,
  OverBar: nae,
  OverBrace: rae,
  OverBracket: oae,
  OverParenthesis: sae,
  para: iae,
  parallel: aae,
  par: lae,
  parsim: cae,
  parsl: uae,
  part: fae,
  PartialD: dae,
  Pcy: pae,
  pcy: hae,
  percnt: gae,
  period: mae,
  permil: vae,
  perp: bae,
  pertenk: _ae,
  Pfr: yae,
  pfr: wae,
  Phi: kae,
  phi: Cae,
  phiv: xae,
  phmmat: Eae,
  phone: Sae,
  Pi: Aae,
  pi: Tae,
  pitchfork: Mae,
  piv: $ae,
  planck: Lae,
  planckh: Iae,
  plankv: Oae,
  plusacir: Rae,
  plusb: Pae,
  pluscir: Dae,
  plus: Nae,
  plusdo: Bae,
  plusdu: Fae,
  pluse: qae,
  PlusMinus: zae,
  plusmn: Hae,
  plussim: jae,
  plustwo: Vae,
  pm: Uae,
  Poincareplane: Kae,
  pointint: Gae,
  popf: Wae,
  Popf: Zae,
  pound: Xae,
  prap: Yae,
  Pr: Jae,
  pr: Qae,
  prcue: ele,
  precapprox: tle,
  prec: nle,
  preccurlyeq: rle,
  Precedes: ole,
  PrecedesEqual: sle,
  PrecedesSlantEqual: ile,
  PrecedesTilde: ale,
  preceq: lle,
  precnapprox: cle,
  precneqq: ule,
  precnsim: fle,
  pre: dle,
  prE: ple,
  precsim: hle,
  prime: gle,
  Prime: mle,
  primes: vle,
  prnap: ble,
  prnE: _le,
  prnsim: yle,
  prod: wle,
  Product: kle,
  profalar: Cle,
  profline: xle,
  profsurf: Ele,
  prop: Sle,
  Proportional: Ale,
  Proportion: Tle,
  propto: Mle,
  prsim: $le,
  prurel: Lle,
  Pscr: Ile,
  pscr: Ole,
  Psi: Rle,
  psi: Ple,
  puncsp: Dle,
  Qfr: Nle,
  qfr: Ble,
  qint: Fle,
  qopf: qle,
  Qopf: zle,
  qprime: Hle,
  Qscr: jle,
  qscr: Vle,
  quaternions: Ule,
  quatint: Kle,
  quest: Gle,
  questeq: Wle,
  quot: Zle,
  QUOT: Xle,
  rAarr: Yle,
  race: Jle,
  Racute: Qle,
  racute: ece,
  radic: tce,
  raemptyv: nce,
  rang: rce,
  Rang: oce,
  rangd: sce,
  range: ice,
  rangle: ace,
  raquo: lce,
  rarrap: cce,
  rarrb: uce,
  rarrbfs: fce,
  rarrc: dce,
  rarr: pce,
  Rarr: hce,
  rArr: gce,
  rarrfs: mce,
  rarrhk: vce,
  rarrlp: bce,
  rarrpl: _ce,
  rarrsim: yce,
  Rarrtl: wce,
  rarrtl: kce,
  rarrw: Cce,
  ratail: xce,
  rAtail: Ece,
  ratio: Sce,
  rationals: Ace,
  rbarr: Tce,
  rBarr: Mce,
  RBarr: $ce,
  rbbrk: Lce,
  rbrace: Ice,
  rbrack: Oce,
  rbrke: Rce,
  rbrksld: Pce,
  rbrkslu: Dce,
  Rcaron: Nce,
  rcaron: Bce,
  Rcedil: Fce,
  rcedil: qce,
  rceil: zce,
  rcub: Hce,
  Rcy: jce,
  rcy: Vce,
  rdca: Uce,
  rdldhar: Kce,
  rdquo: Gce,
  rdquor: Wce,
  rdsh: Zce,
  real: Xce,
  realine: Yce,
  realpart: Jce,
  reals: Qce,
  Re: eue,
  rect: tue,
  reg: nue,
  REG: rue,
  ReverseElement: oue,
  ReverseEquilibrium: sue,
  ReverseUpEquilibrium: iue,
  rfisht: aue,
  rfloor: lue,
  rfr: cue,
  Rfr: uue,
  rHar: fue,
  rhard: due,
  rharu: pue,
  rharul: hue,
  Rho: gue,
  rho: mue,
  rhov: vue,
  RightAngleBracket: bue,
  RightArrowBar: _ue,
  rightarrow: yue,
  RightArrow: wue,
  Rightarrow: kue,
  RightArrowLeftArrow: Cue,
  rightarrowtail: xue,
  RightCeiling: Eue,
  RightDoubleBracket: Sue,
  RightDownTeeVector: Aue,
  RightDownVectorBar: Tue,
  RightDownVector: Mue,
  RightFloor: $ue,
  rightharpoondown: Lue,
  rightharpoonup: Iue,
  rightleftarrows: Oue,
  rightleftharpoons: Rue,
  rightrightarrows: Pue,
  rightsquigarrow: Due,
  RightTeeArrow: Nue,
  RightTee: Bue,
  RightTeeVector: Fue,
  rightthreetimes: que,
  RightTriangleBar: zue,
  RightTriangle: Hue,
  RightTriangleEqual: jue,
  RightUpDownVector: Vue,
  RightUpTeeVector: Uue,
  RightUpVectorBar: Kue,
  RightUpVector: Gue,
  RightVectorBar: Wue,
  RightVector: Zue,
  ring: Xue,
  risingdotseq: Yue,
  rlarr: Jue,
  rlhar: Que,
  rlm: efe,
  rmoustache: tfe,
  rmoust: nfe,
  rnmid: rfe,
  roang: ofe,
  roarr: sfe,
  robrk: ife,
  ropar: afe,
  ropf: lfe,
  Ropf: cfe,
  roplus: ufe,
  rotimes: ffe,
  RoundImplies: dfe,
  rpar: pfe,
  rpargt: hfe,
  rppolint: gfe,
  rrarr: mfe,
  Rrightarrow: vfe,
  rsaquo: bfe,
  rscr: _fe,
  Rscr: yfe,
  rsh: wfe,
  Rsh: kfe,
  rsqb: Cfe,
  rsquo: xfe,
  rsquor: Efe,
  rthree: Sfe,
  rtimes: Afe,
  rtri: Tfe,
  rtrie: Mfe,
  rtrif: $fe,
  rtriltri: Lfe,
  RuleDelayed: Ife,
  ruluhar: Ofe,
  rx: Rfe,
  Sacute: Pfe,
  sacute: Dfe,
  sbquo: Nfe,
  scap: Bfe,
  Scaron: Ffe,
  scaron: qfe,
  Sc: zfe,
  sc: Hfe,
  sccue: jfe,
  sce: Vfe,
  scE: Ufe,
  Scedil: Kfe,
  scedil: Gfe,
  Scirc: Wfe,
  scirc: Zfe,
  scnap: Xfe,
  scnE: Yfe,
  scnsim: Jfe,
  scpolint: Qfe,
  scsim: ede,
  Scy: tde,
  scy: nde,
  sdotb: rde,
  sdot: ode,
  sdote: sde,
  searhk: ide,
  searr: ade,
  seArr: lde,
  searrow: cde,
  sect: ude,
  semi: fde,
  seswar: dde,
  setminus: pde,
  setmn: hde,
  sext: gde,
  Sfr: mde,
  sfr: vde,
  sfrown: bde,
  sharp: _de,
  SHCHcy: yde,
  shchcy: wde,
  SHcy: kde,
  shcy: Cde,
  ShortDownArrow: xde,
  ShortLeftArrow: Ede,
  shortmid: Sde,
  shortparallel: Ade,
  ShortRightArrow: Tde,
  ShortUpArrow: Mde,
  shy: $de,
  Sigma: Lde,
  sigma: Ide,
  sigmaf: Ode,
  sigmav: Rde,
  sim: Pde,
  simdot: Dde,
  sime: Nde,
  simeq: Bde,
  simg: Fde,
  simgE: qde,
  siml: zde,
  simlE: Hde,
  simne: jde,
  simplus: Vde,
  simrarr: Ude,
  slarr: Kde,
  SmallCircle: Gde,
  smallsetminus: Wde,
  smashp: Zde,
  smeparsl: Xde,
  smid: Yde,
  smile: Jde,
  smt: Qde,
  smte: e0e,
  smtes: t0e,
  SOFTcy: n0e,
  softcy: r0e,
  solbar: o0e,
  solb: s0e,
  sol: i0e,
  Sopf: a0e,
  sopf: l0e,
  spades: c0e,
  spadesuit: u0e,
  spar: f0e,
  sqcap: d0e,
  sqcaps: p0e,
  sqcup: h0e,
  sqcups: g0e,
  Sqrt: m0e,
  sqsub: v0e,
  sqsube: b0e,
  sqsubset: _0e,
  sqsubseteq: y0e,
  sqsup: w0e,
  sqsupe: k0e,
  sqsupset: C0e,
  sqsupseteq: x0e,
  square: E0e,
  Square: S0e,
  SquareIntersection: A0e,
  SquareSubset: T0e,
  SquareSubsetEqual: M0e,
  SquareSuperset: $0e,
  SquareSupersetEqual: L0e,
  SquareUnion: I0e,
  squarf: O0e,
  squ: R0e,
  squf: P0e,
  srarr: D0e,
  Sscr: N0e,
  sscr: B0e,
  ssetmn: F0e,
  ssmile: q0e,
  sstarf: z0e,
  Star: H0e,
  star: j0e,
  starf: V0e,
  straightepsilon: U0e,
  straightphi: K0e,
  strns: G0e,
  sub: W0e,
  Sub: Z0e,
  subdot: X0e,
  subE: Y0e,
  sube: J0e,
  subedot: Q0e,
  submult: epe,
  subnE: tpe,
  subne: npe,
  subplus: rpe,
  subrarr: ope,
  subset: spe,
  Subset: ipe,
  subseteq: ape,
  subseteqq: lpe,
  SubsetEqual: cpe,
  subsetneq: upe,
  subsetneqq: fpe,
  subsim: dpe,
  subsub: ppe,
  subsup: hpe,
  succapprox: gpe,
  succ: mpe,
  succcurlyeq: vpe,
  Succeeds: bpe,
  SucceedsEqual: _pe,
  SucceedsSlantEqual: ype,
  SucceedsTilde: wpe,
  succeq: kpe,
  succnapprox: Cpe,
  succneqq: xpe,
  succnsim: Epe,
  succsim: Spe,
  SuchThat: Ape,
  sum: Tpe,
  Sum: Mpe,
  sung: $pe,
  sup1: Lpe,
  sup2: Ipe,
  sup3: Ope,
  sup: Rpe,
  Sup: Ppe,
  supdot: Dpe,
  supdsub: Npe,
  supE: Bpe,
  supe: Fpe,
  supedot: qpe,
  Superset: zpe,
  SupersetEqual: Hpe,
  suphsol: jpe,
  suphsub: Vpe,
  suplarr: Upe,
  supmult: Kpe,
  supnE: Gpe,
  supne: Wpe,
  supplus: Zpe,
  supset: Xpe,
  Supset: Ype,
  supseteq: Jpe,
  supseteqq: Qpe,
  supsetneq: ehe,
  supsetneqq: the,
  supsim: nhe,
  supsub: rhe,
  supsup: ohe,
  swarhk: she,
  swarr: ihe,
  swArr: ahe,
  swarrow: lhe,
  swnwar: che,
  szlig: uhe,
  Tab: fhe,
  target: dhe,
  Tau: phe,
  tau: hhe,
  tbrk: ghe,
  Tcaron: mhe,
  tcaron: vhe,
  Tcedil: bhe,
  tcedil: _he,
  Tcy: yhe,
  tcy: whe,
  tdot: khe,
  telrec: Che,
  Tfr: xhe,
  tfr: Ehe,
  there4: She,
  therefore: Ahe,
  Therefore: The,
  Theta: Mhe,
  theta: $he,
  thetasym: Lhe,
  thetav: Ihe,
  thickapprox: Ohe,
  thicksim: Rhe,
  ThickSpace: Phe,
  ThinSpace: Dhe,
  thinsp: Nhe,
  thkap: Bhe,
  thksim: Fhe,
  THORN: qhe,
  thorn: zhe,
  tilde: Hhe,
  Tilde: jhe,
  TildeEqual: Vhe,
  TildeFullEqual: Uhe,
  TildeTilde: Khe,
  timesbar: Ghe,
  timesb: Whe,
  times: Zhe,
  timesd: Xhe,
  tint: Yhe,
  toea: Jhe,
  topbot: Qhe,
  topcir: e2e,
  top: t2e,
  Topf: n2e,
  topf: r2e,
  topfork: o2e,
  tosa: s2e,
  tprime: i2e,
  trade: a2e,
  TRADE: l2e,
  triangle: c2e,
  triangledown: u2e,
  triangleleft: f2e,
  trianglelefteq: d2e,
  triangleq: p2e,
  triangleright: h2e,
  trianglerighteq: g2e,
  tridot: m2e,
  trie: v2e,
  triminus: b2e,
  TripleDot: _2e,
  triplus: y2e,
  trisb: w2e,
  tritime: k2e,
  trpezium: C2e,
  Tscr: x2e,
  tscr: E2e,
  TScy: S2e,
  tscy: A2e,
  TSHcy: T2e,
  tshcy: M2e,
  Tstrok: $2e,
  tstrok: L2e,
  twixt: I2e,
  twoheadleftarrow: O2e,
  twoheadrightarrow: R2e,
  Uacute: P2e,
  uacute: D2e,
  uarr: N2e,
  Uarr: B2e,
  uArr: F2e,
  Uarrocir: q2e,
  Ubrcy: z2e,
  ubrcy: H2e,
  Ubreve: j2e,
  ubreve: V2e,
  Ucirc: U2e,
  ucirc: K2e,
  Ucy: G2e,
  ucy: W2e,
  udarr: Z2e,
  Udblac: X2e,
  udblac: Y2e,
  udhar: J2e,
  ufisht: Q2e,
  Ufr: e1e,
  ufr: t1e,
  Ugrave: n1e,
  ugrave: r1e,
  uHar: o1e,
  uharl: s1e,
  uharr: i1e,
  uhblk: a1e,
  ulcorn: l1e,
  ulcorner: c1e,
  ulcrop: u1e,
  ultri: f1e,
  Umacr: d1e,
  umacr: p1e,
  uml: h1e,
  UnderBar: g1e,
  UnderBrace: m1e,
  UnderBracket: v1e,
  UnderParenthesis: b1e,
  Union: _1e,
  UnionPlus: y1e,
  Uogon: w1e,
  uogon: k1e,
  Uopf: C1e,
  uopf: x1e,
  UpArrowBar: E1e,
  uparrow: S1e,
  UpArrow: A1e,
  Uparrow: T1e,
  UpArrowDownArrow: M1e,
  updownarrow: $1e,
  UpDownArrow: L1e,
  Updownarrow: I1e,
  UpEquilibrium: O1e,
  upharpoonleft: R1e,
  upharpoonright: P1e,
  uplus: D1e,
  UpperLeftArrow: N1e,
  UpperRightArrow: B1e,
  upsi: F1e,
  Upsi: q1e,
  upsih: z1e,
  Upsilon: H1e,
  upsilon: j1e,
  UpTeeArrow: V1e,
  UpTee: U1e,
  upuparrows: K1e,
  urcorn: G1e,
  urcorner: W1e,
  urcrop: Z1e,
  Uring: X1e,
  uring: Y1e,
  urtri: J1e,
  Uscr: Q1e,
  uscr: ege,
  utdot: tge,
  Utilde: nge,
  utilde: rge,
  utri: oge,
  utrif: sge,
  uuarr: ige,
  Uuml: age,
  uuml: lge,
  uwangle: cge,
  vangrt: uge,
  varepsilon: fge,
  varkappa: dge,
  varnothing: pge,
  varphi: hge,
  varpi: gge,
  varpropto: mge,
  varr: vge,
  vArr: bge,
  varrho: _ge,
  varsigma: yge,
  varsubsetneq: wge,
  varsubsetneqq: kge,
  varsupsetneq: Cge,
  varsupsetneqq: xge,
  vartheta: Ege,
  vartriangleleft: Sge,
  vartriangleright: Age,
  vBar: Tge,
  Vbar: Mge,
  vBarv: $ge,
  Vcy: Lge,
  vcy: Ige,
  vdash: Oge,
  vDash: Rge,
  Vdash: Pge,
  VDash: Dge,
  Vdashl: Nge,
  veebar: Bge,
  vee: Fge,
  Vee: qge,
  veeeq: zge,
  vellip: Hge,
  verbar: jge,
  Verbar: Vge,
  vert: Uge,
  Vert: Kge,
  VerticalBar: Gge,
  VerticalLine: Wge,
  VerticalSeparator: Zge,
  VerticalTilde: Xge,
  VeryThinSpace: Yge,
  Vfr: Jge,
  vfr: Qge,
  vltri: eme,
  vnsub: tme,
  vnsup: nme,
  Vopf: rme,
  vopf: ome,
  vprop: sme,
  vrtri: ime,
  Vscr: ame,
  vscr: lme,
  vsubnE: cme,
  vsubne: ume,
  vsupnE: fme,
  vsupne: dme,
  Vvdash: pme,
  vzigzag: hme,
  Wcirc: gme,
  wcirc: mme,
  wedbar: vme,
  wedge: bme,
  Wedge: _me,
  wedgeq: yme,
  weierp: wme,
  Wfr: kme,
  wfr: Cme,
  Wopf: xme,
  wopf: Eme,
  wp: Sme,
  wr: Ame,
  wreath: Tme,
  Wscr: Mme,
  wscr: $me,
  xcap: Lme,
  xcirc: Ime,
  xcup: Ome,
  xdtri: Rme,
  Xfr: Pme,
  xfr: Dme,
  xharr: Nme,
  xhArr: Bme,
  Xi: Fme,
  xi: qme,
  xlarr: zme,
  xlArr: Hme,
  xmap: jme,
  xnis: Vme,
  xodot: Ume,
  Xopf: Kme,
  xopf: Gme,
  xoplus: Wme,
  xotime: Zme,
  xrarr: Xme,
  xrArr: Yme,
  Xscr: Jme,
  xscr: Qme,
  xsqcup: eve,
  xuplus: tve,
  xutri: nve,
  xvee: rve,
  xwedge: ove,
  Yacute: sve,
  yacute: ive,
  YAcy: ave,
  yacy: lve,
  Ycirc: cve,
  ycirc: uve,
  Ycy: fve,
  ycy: dve,
  yen: pve,
  Yfr: hve,
  yfr: gve,
  YIcy: mve,
  yicy: vve,
  Yopf: bve,
  yopf: _ve,
  Yscr: yve,
  yscr: wve,
  YUcy: kve,
  yucy: Cve,
  yuml: xve,
  Yuml: Eve,
  Zacute: Sve,
  zacute: Ave,
  Zcaron: Tve,
  zcaron: Mve,
  Zcy: $ve,
  zcy: Lve,
  Zdot: Ive,
  zdot: Ove,
  zeetrf: Rve,
  ZeroWidthSpace: Pve,
  Zeta: Dve,
  zeta: Nve,
  zfr: Bve,
  Zfr: Fve,
  ZHcy: qve,
  zhcy: zve,
  zigrarr: Hve,
  zopf: jve,
  Zopf: Vve,
  Zscr: Uve,
  zscr: Kve,
  zwj: Gve,
  zwnj: Wve
};
var Ga, Rp;
function ey() {
  return Rp || (Rp = 1, Ga = Zve), Ga;
}
var Wa, Pp;
function Uf() {
  return Pp || (Pp = 1, Wa = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/), Wa;
}
var so = {}, Za, Dp;
function Xve() {
  if (Dp) return Za;
  Dp = 1;
  var e = {};
  function t(r) {
    var s, o, i = e[r];
    if (i)
      return i;
    for (i = e[r] = [], s = 0; s < 128; s++)
      o = String.fromCharCode(s), /^[0-9a-z]$/i.test(o) ? i.push(o) : i.push("%" + ("0" + s.toString(16).toUpperCase()).slice(-2));
    for (s = 0; s < r.length; s++)
      i[r.charCodeAt(s)] = r[s];
    return i;
  }
  function n(r, s, o) {
    var i, a, l, u, f, c = "";
    for (typeof s != "string" && (o = s, s = n.defaultChars), typeof o > "u" && (o = !0), f = t(s), i = 0, a = r.length; i < a; i++) {
      if (l = r.charCodeAt(i), o && l === 37 && i + 2 < a && /^[0-9a-f]{2}$/i.test(r.slice(i + 1, i + 3))) {
        c += r.slice(i, i + 3), i += 2;
        continue;
      }
      if (l < 128) {
        c += f[l];
        continue;
      }
      if (l >= 55296 && l <= 57343) {
        if (l >= 55296 && l <= 56319 && i + 1 < a && (u = r.charCodeAt(i + 1), u >= 56320 && u <= 57343)) {
          c += encodeURIComponent(r[i] + r[i + 1]), i++;
          continue;
        }
        c += "%EF%BF%BD";
        continue;
      }
      c += encodeURIComponent(r[i]);
    }
    return c;
  }
  return n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", Za = n, Za;
}
var Xa, Np;
function Yve() {
  if (Np) return Xa;
  Np = 1;
  var e = {};
  function t(r) {
    var s, o, i = e[r];
    if (i)
      return i;
    for (i = e[r] = [], s = 0; s < 128; s++)
      o = String.fromCharCode(s), i.push(o);
    for (s = 0; s < r.length; s++)
      o = r.charCodeAt(s), i[o] = "%" + ("0" + o.toString(16).toUpperCase()).slice(-2);
    return i;
  }
  function n(r, s) {
    var o;
    return typeof s != "string" && (s = n.defaultChars), o = t(s), r.replace(/(%[a-f0-9]{2})+/gi, function(i) {
      var a, l, u, f, c, p, d, m = "";
      for (a = 0, l = i.length; a < l; a += 3) {
        if (u = parseInt(i.slice(a + 1, a + 3), 16), u < 128) {
          m += o[u];
          continue;
        }
        if ((u & 224) === 192 && a + 3 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), (f & 192) === 128)) {
          d = u << 6 & 1984 | f & 63, d < 128 ? m += "��" : m += String.fromCharCode(d), a += 3;
          continue;
        }
        if ((u & 240) === 224 && a + 6 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), c = parseInt(i.slice(a + 7, a + 9), 16), (f & 192) === 128 && (c & 192) === 128)) {
          d = u << 12 & 61440 | f << 6 & 4032 | c & 63, d < 2048 || d >= 55296 && d <= 57343 ? m += "���" : m += String.fromCharCode(d), a += 6;
          continue;
        }
        if ((u & 248) === 240 && a + 9 < l && (f = parseInt(i.slice(a + 4, a + 6), 16), c = parseInt(i.slice(a + 7, a + 9), 16), p = parseInt(i.slice(a + 10, a + 12), 16), (f & 192) === 128 && (c & 192) === 128 && (p & 192) === 128)) {
          d = u << 18 & 1835008 | f << 12 & 258048 | c << 6 & 4032 | p & 63, d < 65536 || d > 1114111 ? m += "����" : (d -= 65536, m += String.fromCharCode(55296 + (d >> 10), 56320 + (d & 1023))), a += 9;
          continue;
        }
        m += "�";
      }
      return m;
    });
  }
  return n.defaultChars = ";/?:@&=+$,#", n.componentChars = "", Xa = n, Xa;
}
var Ya, Bp;
function Jve() {
  return Bp || (Bp = 1, Ya = function(t) {
    var n = "";
    return n += t.protocol || "", n += t.slashes ? "//" : "", n += t.auth ? t.auth + "@" : "", t.hostname && t.hostname.indexOf(":") !== -1 ? n += "[" + t.hostname + "]" : n += t.hostname || "", n += t.port ? ":" + t.port : "", n += t.pathname || "", n += t.search || "", n += t.hash || "", n;
  }), Ya;
}
var Ja, Fp;
function Qve() {
  if (Fp) return Ja;
  Fp = 1;
  function e() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
  }
  var t = /^([a-z0-9.+-]+:)/i, n = /:[0-9]*$/, r = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, s = ["<", ">", '"', "`", " ", "\r", `
`, "	"], o = ["{", "}", "|", "\\", "^", "`"].concat(s), i = ["'"].concat(o), a = ["%", "/", "?", ";", "#"].concat(i), l = ["/", "?", "#"], u = 255, f = /^[+a-z0-9A-Z_-]{0,63}$/, c = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, p = {
    javascript: !0,
    "javascript:": !0
  }, d = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
  };
  function m(g, C) {
    if (g && g instanceof e)
      return g;
    var h = new e();
    return h.parse(g, C), h;
  }
  return e.prototype.parse = function(g, C) {
    var h, k, y, _, S, x = g;
    if (x = x.trim(), !C && g.split("#").length === 1) {
      var T = r.exec(x);
      if (T)
        return this.pathname = T[1], T[2] && (this.search = T[2]), this;
    }
    var $ = t.exec(x);
    if ($ && ($ = $[0], y = $.toLowerCase(), this.protocol = $, x = x.substr($.length)), (C || $ || x.match(/^\/\/[^@\/]+@[^@\/]+/)) && (S = x.substr(0, 2) === "//", S && !($ && p[$]) && (x = x.substr(2), this.slashes = !0)), !p[$] && (S || $ && !d[$])) {
      var I = -1;
      for (h = 0; h < l.length; h++)
        _ = x.indexOf(l[h]), _ !== -1 && (I === -1 || _ < I) && (I = _);
      var P, N;
      for (I === -1 ? N = x.lastIndexOf("@") : N = x.lastIndexOf("@", I), N !== -1 && (P = x.slice(0, N), x = x.slice(N + 1), this.auth = P), I = -1, h = 0; h < a.length; h++)
        _ = x.indexOf(a[h]), _ !== -1 && (I === -1 || _ < I) && (I = _);
      I === -1 && (I = x.length), x[I - 1] === ":" && I--;
      var D = x.slice(0, I);
      x = x.slice(I), this.parseHost(D), this.hostname = this.hostname || "";
      var oe = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!oe) {
        var F = this.hostname.split(/\./);
        for (h = 0, k = F.length; h < k; h++) {
          var U = F[h];
          if (U && !U.match(f)) {
            for (var q = "", z = 0, H = U.length; z < H; z++)
              U.charCodeAt(z) > 127 ? q += "x" : q += U[z];
            if (!q.match(f)) {
              var Q = F.slice(0, h), te = F.slice(h + 1), Ae = U.match(c);
              Ae && (Q.push(Ae[1]), te.unshift(Ae[2])), te.length && (x = te.join(".") + x), this.hostname = Q.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > u && (this.hostname = ""), oe && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var ve = x.indexOf("#");
    ve !== -1 && (this.hash = x.substr(ve), x = x.slice(0, ve));
    var Ne = x.indexOf("?");
    return Ne !== -1 && (this.search = x.substr(Ne), x = x.slice(0, Ne)), x && (this.pathname = x), d[y] && this.hostname && !this.pathname && (this.pathname = ""), this;
  }, e.prototype.parseHost = function(g) {
    var C = n.exec(g);
    C && (C = C[0], C !== ":" && (this.port = C.substr(1)), g = g.substr(0, g.length - C.length)), g && (this.hostname = g);
  }, Ja = m, Ja;
}
var qp;
function ty() {
  return qp || (qp = 1, so.encode = Xve(), so.decode = Yve(), so.format = Jve(), so.parse = Qve()), so;
}
var zr = {}, Qa, zp;
function ny() {
  return zp || (zp = 1, Qa = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), Qa;
}
var el, Hp;
function ry() {
  return Hp || (Hp = 1, el = /[\0-\x1F\x7F-\x9F]/), el;
}
var tl, jp;
function ebe() {
  return jp || (jp = 1, tl = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), tl;
}
var nl, Vp;
function oy() {
  return Vp || (Vp = 1, nl = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), nl;
}
var Up;
function tbe() {
  return Up || (Up = 1, zr.Any = ny(), zr.Cc = ry(), zr.Cf = ebe(), zr.P = Uf(), zr.Z = oy()), zr;
}
var Kp;
function Ye() {
  return Kp || (Kp = 1, function(e) {
    function t(F) {
      return Object.prototype.toString.call(F);
    }
    function n(F) {
      return t(F) === "[object String]";
    }
    var r = Object.prototype.hasOwnProperty;
    function s(F, U) {
      return r.call(F, U);
    }
    function o(F) {
      var U = Array.prototype.slice.call(arguments, 1);
      return U.forEach(function(q) {
        if (q) {
          if (typeof q != "object")
            throw new TypeError(q + "must be object");
          Object.keys(q).forEach(function(z) {
            F[z] = q[z];
          });
        }
      }), F;
    }
    function i(F, U, q) {
      return [].concat(F.slice(0, U), q, F.slice(U + 1));
    }
    function a(F) {
      return !(F >= 55296 && F <= 57343 || F >= 64976 && F <= 65007 || (F & 65535) === 65535 || (F & 65535) === 65534 || F >= 0 && F <= 8 || F === 11 || F >= 14 && F <= 31 || F >= 127 && F <= 159 || F > 1114111);
    }
    function l(F) {
      if (F > 65535) {
        F -= 65536;
        var U = 55296 + (F >> 10), q = 56320 + (F & 1023);
        return String.fromCharCode(U, q);
      }
      return String.fromCharCode(F);
    }
    var u = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, f = /&([a-z#][a-z0-9]{1,31});/gi, c = new RegExp(u.source + "|" + f.source, "gi"), p = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, d = ey();
    function m(F, U) {
      var q;
      return s(d, U) ? d[U] : U.charCodeAt(0) === 35 && p.test(U) && (q = U[1].toLowerCase() === "x" ? parseInt(U.slice(2), 16) : parseInt(U.slice(1), 10), a(q)) ? l(q) : F;
    }
    function g(F) {
      return F.indexOf("\\") < 0 ? F : F.replace(u, "$1");
    }
    function C(F) {
      return F.indexOf("\\") < 0 && F.indexOf("&") < 0 ? F : F.replace(c, function(U, q, z) {
        return q || m(U, z);
      });
    }
    var h = /[&<>"]/, k = /[&<>"]/g, y = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function _(F) {
      return y[F];
    }
    function S(F) {
      return h.test(F) ? F.replace(k, _) : F;
    }
    var x = /[.?*+^$[\]\\(){}|-]/g;
    function T(F) {
      return F.replace(x, "\\$&");
    }
    function $(F) {
      switch (F) {
        case 9:
        case 32:
          return !0;
      }
      return !1;
    }
    function I(F) {
      if (F >= 8192 && F <= 8202)
        return !0;
      switch (F) {
        case 9:
        // \t
        case 10:
        // \n
        case 11:
        // \v
        case 12:
        // \f
        case 13:
        // \r
        case 32:
        case 160:
        case 5760:
        case 8239:
        case 8287:
        case 12288:
          return !0;
      }
      return !1;
    }
    var P = Uf();
    function N(F) {
      return P.test(F);
    }
    function D(F) {
      switch (F) {
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
        case 63:
        case 64:
        case 91:
        case 92:
        case 93:
        case 94:
        case 95:
        case 96:
        case 123:
        case 124:
        case 125:
        case 126:
          return !0;
        default:
          return !1;
      }
    }
    function oe(F) {
      return F = F.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (F = F.replace(/ẞ/g, "ß")), F.toLowerCase().toUpperCase();
    }
    e.lib = {}, e.lib.mdurl = ty(), e.lib.ucmicro = tbe(), e.assign = o, e.isString = n, e.has = s, e.unescapeMd = g, e.unescapeAll = C, e.isValidEntityCode = a, e.fromCodePoint = l, e.escapeHtml = S, e.arrayReplaceAt = i, e.isSpace = $, e.isWhiteSpace = I, e.isMdAsciiPunct = D, e.isPunctChar = N, e.escapeRE = T, e.normalizeReference = oe;
  }(Ka)), Ka;
}
var Fo = {}, rl, Gp;
function nbe() {
  return Gp || (Gp = 1, rl = function(t, n, r) {
    var s, o, i, a, l = -1, u = t.posMax, f = t.pos;
    for (t.pos = n + 1, s = 1; t.pos < u; ) {
      if (i = t.src.charCodeAt(t.pos), i === 93 && (s--, s === 0)) {
        o = !0;
        break;
      }
      if (a = t.pos, t.md.inline.skipToken(t), i === 91) {
        if (a === t.pos - 1)
          s++;
        else if (r)
          return t.pos = f, -1;
      }
    }
    return o && (l = t.pos), t.pos = f, l;
  }), rl;
}
var ol, Wp;
function rbe() {
  if (Wp) return ol;
  Wp = 1;
  var e = Ye().unescapeAll;
  return ol = function(n, r, s) {
    var o, i, a = r, l = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (n.charCodeAt(a) === 60) {
      for (a++; a < s; ) {
        if (o = n.charCodeAt(a), o === 10 || o === 60)
          return l;
        if (o === 62)
          return l.pos = a + 1, l.str = e(n.slice(r + 1, a)), l.ok = !0, l;
        if (o === 92 && a + 1 < s) {
          a += 2;
          continue;
        }
        a++;
      }
      return l;
    }
    for (i = 0; a < s && (o = n.charCodeAt(a), !(o === 32 || o < 32 || o === 127)); ) {
      if (o === 92 && a + 1 < s) {
        if (n.charCodeAt(a + 1) === 32)
          break;
        a += 2;
        continue;
      }
      if (o === 40 && (i++, i > 32))
        return l;
      if (o === 41) {
        if (i === 0)
          break;
        i--;
      }
      a++;
    }
    return r === a || i !== 0 || (l.str = e(n.slice(r, a)), l.pos = a, l.ok = !0), l;
  }, ol;
}
var sl, Zp;
function obe() {
  if (Zp) return sl;
  Zp = 1;
  var e = Ye().unescapeAll;
  return sl = function(n, r, s) {
    var o, i, a = 0, l = r, u = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (l >= s || (i = n.charCodeAt(l), i !== 34 && i !== 39 && i !== 40))
      return u;
    for (l++, i === 40 && (i = 41); l < s; ) {
      if (o = n.charCodeAt(l), o === i)
        return u.pos = l + 1, u.lines = a, u.str = e(n.slice(r + 1, l)), u.ok = !0, u;
      if (o === 40 && i === 41)
        return u;
      o === 10 ? a++ : o === 92 && l + 1 < s && (l++, n.charCodeAt(l) === 10 && a++), l++;
    }
    return u;
  }, sl;
}
var Xp;
function sbe() {
  return Xp || (Xp = 1, Fo.parseLinkLabel = nbe(), Fo.parseLinkDestination = rbe(), Fo.parseLinkTitle = obe()), Fo;
}
var il, Yp;
function ibe() {
  if (Yp) return il;
  Yp = 1;
  var e = Ye().assign, t = Ye().unescapeAll, n = Ye().escapeHtml, r = {};
  r.code_inline = function(o, i, a, l, u) {
    var f = o[i];
    return "<code" + u.renderAttrs(f) + ">" + n(f.content) + "</code>";
  }, r.code_block = function(o, i, a, l, u) {
    var f = o[i];
    return "<pre" + u.renderAttrs(f) + "><code>" + n(o[i].content) + `</code></pre>
`;
  }, r.fence = function(o, i, a, l, u) {
    var f = o[i], c = f.info ? t(f.info).trim() : "", p = "", d = "", m, g, C, h, k;
    return c && (C = c.split(/(\s+)/g), p = C[0], d = C.slice(2).join("")), a.highlight ? m = a.highlight(f.content, p, d) || n(f.content) : m = n(f.content), m.indexOf("<pre") === 0 ? m + `
` : c ? (g = f.attrIndex("class"), h = f.attrs ? f.attrs.slice() : [], g < 0 ? h.push(["class", a.langPrefix + p]) : (h[g] = h[g].slice(), h[g][1] += " " + a.langPrefix + p), k = {
      attrs: h
    }, "<pre><code" + u.renderAttrs(k) + ">" + m + `</code></pre>
`) : "<pre><code" + u.renderAttrs(f) + ">" + m + `</code></pre>
`;
  }, r.image = function(o, i, a, l, u) {
    var f = o[i];
    return f.attrs[f.attrIndex("alt")][1] = u.renderInlineAsText(f.children, a, l), u.renderToken(o, i, a);
  }, r.hardbreak = function(o, i, a) {
    return a.xhtmlOut ? `<br />
` : `<br>
`;
  }, r.softbreak = function(o, i, a) {
    return a.breaks ? a.xhtmlOut ? `<br />
` : `<br>
` : `
`;
  }, r.text = function(o, i) {
    return n(o[i].content);
  }, r.html_block = function(o, i) {
    return o[i].content;
  }, r.html_inline = function(o, i) {
    return o[i].content;
  };
  function s() {
    this.rules = e({}, r);
  }
  return s.prototype.renderAttrs = function(i) {
    var a, l, u;
    if (!i.attrs)
      return "";
    for (u = "", a = 0, l = i.attrs.length; a < l; a++)
      u += " " + n(i.attrs[a][0]) + '="' + n(i.attrs[a][1]) + '"';
    return u;
  }, s.prototype.renderToken = function(i, a, l) {
    var u, f = "", c = !1, p = i[a];
    return p.hidden ? "" : (p.block && p.nesting !== -1 && a && i[a - 1].hidden && (f += `
`), f += (p.nesting === -1 ? "</" : "<") + p.tag, f += this.renderAttrs(p), p.nesting === 0 && l.xhtmlOut && (f += " /"), p.block && (c = !0, p.nesting === 1 && a + 1 < i.length && (u = i[a + 1], (u.type === "inline" || u.hidden || u.nesting === -1 && u.tag === p.tag) && (c = !1))), f += c ? `>
` : ">", f);
  }, s.prototype.renderInline = function(o, i, a) {
    for (var l, u = "", f = this.rules, c = 0, p = o.length; c < p; c++)
      l = o[c].type, typeof f[l] < "u" ? u += f[l](o, c, i, a, this) : u += this.renderToken(o, c, i);
    return u;
  }, s.prototype.renderInlineAsText = function(o, i, a) {
    for (var l = "", u = 0, f = o.length; u < f; u++)
      o[u].type === "text" ? l += o[u].content : o[u].type === "image" ? l += this.renderInlineAsText(o[u].children, i, a) : o[u].type === "softbreak" && (l += `
`);
    return l;
  }, s.prototype.render = function(o, i, a) {
    var l, u, f, c = "", p = this.rules;
    for (l = 0, u = o.length; l < u; l++)
      f = o[l].type, f === "inline" ? c += this.renderInline(o[l].children, i, a) : typeof p[f] < "u" ? c += p[f](o, l, i, a, this) : c += this.renderToken(o, l, i, a);
    return c;
  }, il = s, il;
}
var al, Jp;
function Kf() {
  if (Jp) return al;
  Jp = 1;
  function e() {
    this.__rules__ = [], this.__cache__ = null;
  }
  return e.prototype.__find__ = function(t) {
    for (var n = 0; n < this.__rules__.length; n++)
      if (this.__rules__[n].name === t)
        return n;
    return -1;
  }, e.prototype.__compile__ = function() {
    var t = this, n = [""];
    t.__rules__.forEach(function(r) {
      r.enabled && r.alt.forEach(function(s) {
        n.indexOf(s) < 0 && n.push(s);
      });
    }), t.__cache__ = {}, n.forEach(function(r) {
      t.__cache__[r] = [], t.__rules__.forEach(function(s) {
        s.enabled && (r && s.alt.indexOf(r) < 0 || t.__cache__[r].push(s.fn));
      });
    });
  }, e.prototype.at = function(t, n, r) {
    var s = this.__find__(t), o = r || {};
    if (s === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__[s].fn = n, this.__rules__[s].alt = o.alt || [], this.__cache__ = null;
  }, e.prototype.before = function(t, n, r, s) {
    var o = this.__find__(t), i = s || {};
    if (o === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(o, 0, {
      name: n,
      enabled: !0,
      fn: r,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, e.prototype.after = function(t, n, r, s) {
    var o = this.__find__(t), i = s || {};
    if (o === -1)
      throw new Error("Parser rule not found: " + t);
    this.__rules__.splice(o + 1, 0, {
      name: n,
      enabled: !0,
      fn: r,
      alt: i.alt || []
    }), this.__cache__ = null;
  }, e.prototype.push = function(t, n, r) {
    var s = r || {};
    this.__rules__.push({
      name: t,
      enabled: !0,
      fn: n,
      alt: s.alt || []
    }), this.__cache__ = null;
  }, e.prototype.enable = function(t, n) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function(s) {
      var o = this.__find__(s);
      if (o < 0) {
        if (n)
          return;
        throw new Error("Rules manager: invalid rule name " + s);
      }
      this.__rules__[o].enabled = !0, r.push(s);
    }, this), this.__cache__ = null, r;
  }, e.prototype.enableOnly = function(t, n) {
    Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(r) {
      r.enabled = !1;
    }), this.enable(t, n);
  }, e.prototype.disable = function(t, n) {
    Array.isArray(t) || (t = [t]);
    var r = [];
    return t.forEach(function(s) {
      var o = this.__find__(s);
      if (o < 0) {
        if (n)
          return;
        throw new Error("Rules manager: invalid rule name " + s);
      }
      this.__rules__[o].enabled = !1, r.push(s);
    }, this), this.__cache__ = null, r;
  }, e.prototype.getRules = function(t) {
    return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
  }, al = e, al;
}
var ll, Qp;
function abe() {
  if (Qp) return ll;
  Qp = 1;
  var e = /\r\n?|\n/g, t = /\0/g;
  return ll = function(r) {
    var s;
    s = r.src.replace(e, `
`), s = s.replace(t, "�"), r.src = s;
  }, ll;
}
var cl, eh;
function lbe() {
  return eh || (eh = 1, cl = function(t) {
    var n;
    t.inlineMode ? (n = new t.Token("inline", "", 0), n.content = t.src, n.map = [0, 1], n.children = [], t.tokens.push(n)) : t.md.block.parse(t.src, t.md, t.env, t.tokens);
  }), cl;
}
var ul, th;
function cbe() {
  return th || (th = 1, ul = function(t) {
    var n = t.tokens, r, s, o;
    for (s = 0, o = n.length; s < o; s++)
      r = n[s], r.type === "inline" && t.md.inline.parse(r.content, t.md, t.env, r.children);
  }), ul;
}
var fl, nh;
function ube() {
  if (nh) return fl;
  nh = 1;
  var e = Ye().arrayReplaceAt;
  function t(r) {
    return /^<a[>\s]/i.test(r);
  }
  function n(r) {
    return /^<\/a\s*>/i.test(r);
  }
  return fl = function(s) {
    var o, i, a, l, u, f, c, p, d, m, g, C, h, k, y, _, S = s.tokens, x;
    if (s.md.options.linkify) {
      for (i = 0, a = S.length; i < a; i++)
        if (!(S[i].type !== "inline" || !s.md.linkify.pretest(S[i].content)))
          for (l = S[i].children, h = 0, o = l.length - 1; o >= 0; o--) {
            if (f = l[o], f.type === "link_close") {
              for (o--; l[o].level !== f.level && l[o].type !== "link_open"; )
                o--;
              continue;
            }
            if (f.type === "html_inline" && (t(f.content) && h > 0 && h--, n(f.content) && h++), !(h > 0) && f.type === "text" && s.md.linkify.test(f.content)) {
              for (d = f.content, x = s.md.linkify.match(d), c = [], C = f.level, g = 0, x.length > 0 && x[0].index === 0 && o > 0 && l[o - 1].type === "text_special" && (x = x.slice(1)), p = 0; p < x.length; p++)
                k = x[p].url, y = s.md.normalizeLink(k), s.md.validateLink(y) && (_ = x[p].text, x[p].schema ? x[p].schema === "mailto:" && !/^mailto:/i.test(_) ? _ = s.md.normalizeLinkText("mailto:" + _).replace(/^mailto:/, "") : _ = s.md.normalizeLinkText(_) : _ = s.md.normalizeLinkText("http://" + _).replace(/^http:\/\//, ""), m = x[p].index, m > g && (u = new s.Token("text", "", 0), u.content = d.slice(g, m), u.level = C, c.push(u)), u = new s.Token("link_open", "a", 1), u.attrs = [["href", y]], u.level = C++, u.markup = "linkify", u.info = "auto", c.push(u), u = new s.Token("text", "", 0), u.content = _, u.level = C, c.push(u), u = new s.Token("link_close", "a", -1), u.level = --C, u.markup = "linkify", u.info = "auto", c.push(u), g = x[p].lastIndex);
              g < d.length && (u = new s.Token("text", "", 0), u.content = d.slice(g), u.level = C, c.push(u)), S[i].children = l = e(l, o, c);
            }
          }
    }
  }, fl;
}
var dl, rh;
function fbe() {
  if (rh) return dl;
  rh = 1;
  var e = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, t = /\((c|tm|r)\)/i, n = /\((c|tm|r)\)/ig, r = {
    c: "©",
    r: "®",
    tm: "™"
  };
  function s(a, l) {
    return r[l.toLowerCase()];
  }
  function o(a) {
    var l, u, f = 0;
    for (l = a.length - 1; l >= 0; l--)
      u = a[l], u.type === "text" && !f && (u.content = u.content.replace(n, s)), u.type === "link_open" && u.info === "auto" && f--, u.type === "link_close" && u.info === "auto" && f++;
  }
  function i(a) {
    var l, u, f = 0;
    for (l = a.length - 1; l >= 0; l--)
      u = a[l], u.type === "text" && !f && e.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), u.type === "link_open" && u.info === "auto" && f--, u.type === "link_close" && u.info === "auto" && f++;
  }
  return dl = function(l) {
    var u;
    if (l.md.options.typographer)
      for (u = l.tokens.length - 1; u >= 0; u--)
        l.tokens[u].type === "inline" && (t.test(l.tokens[u].content) && o(l.tokens[u].children), e.test(l.tokens[u].content) && i(l.tokens[u].children));
  }, dl;
}
var pl, oh;
function dbe() {
  if (oh) return pl;
  oh = 1;
  var e = Ye().isWhiteSpace, t = Ye().isPunctChar, n = Ye().isMdAsciiPunct, r = /['"]/, s = /['"]/g, o = "’";
  function i(l, u, f) {
    return l.slice(0, u) + f + l.slice(u + 1);
  }
  function a(l, u) {
    var f, c, p, d, m, g, C, h, k, y, _, S, x, T, $, I, P, N, D, oe, F;
    for (D = [], f = 0; f < l.length; f++) {
      for (c = l[f], C = l[f].level, P = D.length - 1; P >= 0 && !(D[P].level <= C); P--)
        ;
      if (D.length = P + 1, c.type === "text") {
        p = c.content, m = 0, g = p.length;
        e:
          for (; m < g && (s.lastIndex = m, d = s.exec(p), !!d); ) {
            if ($ = I = !0, m = d.index + 1, N = d[0] === "'", k = 32, d.index - 1 >= 0)
              k = p.charCodeAt(d.index - 1);
            else
              for (P = f - 1; P >= 0 && !(l[P].type === "softbreak" || l[P].type === "hardbreak"); P--)
                if (l[P].content) {
                  k = l[P].content.charCodeAt(l[P].content.length - 1);
                  break;
                }
            if (y = 32, m < g)
              y = p.charCodeAt(m);
            else
              for (P = f + 1; P < l.length && !(l[P].type === "softbreak" || l[P].type === "hardbreak"); P++)
                if (l[P].content) {
                  y = l[P].content.charCodeAt(0);
                  break;
                }
            if (_ = n(k) || t(String.fromCharCode(k)), S = n(y) || t(String.fromCharCode(y)), x = e(k), T = e(y), T ? $ = !1 : S && (x || _ || ($ = !1)), x ? I = !1 : _ && (T || S || (I = !1)), y === 34 && d[0] === '"' && k >= 48 && k <= 57 && (I = $ = !1), $ && I && ($ = _, I = S), !$ && !I) {
              N && (c.content = i(c.content, d.index, o));
              continue;
            }
            if (I) {
              for (P = D.length - 1; P >= 0 && (h = D[P], !(D[P].level < C)); P--)
                if (h.single === N && D[P].level === C) {
                  h = D[P], N ? (oe = u.md.options.quotes[2], F = u.md.options.quotes[3]) : (oe = u.md.options.quotes[0], F = u.md.options.quotes[1]), c.content = i(c.content, d.index, F), l[h.token].content = i(
                    l[h.token].content,
                    h.pos,
                    oe
                  ), m += F.length - 1, h.token === f && (m += oe.length - 1), p = c.content, g = p.length, D.length = P;
                  continue e;
                }
            }
            $ ? D.push({
              token: f,
              pos: d.index,
              single: N,
              level: C
            }) : I && N && (c.content = i(c.content, d.index, o));
          }
      }
    }
  }
  return pl = function(u) {
    var f;
    if (u.md.options.typographer)
      for (f = u.tokens.length - 1; f >= 0; f--)
        u.tokens[f].type !== "inline" || !r.test(u.tokens[f].content) || a(u.tokens[f].children, u);
  }, pl;
}
var hl, sh;
function pbe() {
  return sh || (sh = 1, hl = function(t) {
    var n, r, s, o, i, a, l = t.tokens;
    for (n = 0, r = l.length; n < r; n++)
      if (l[n].type === "inline") {
        for (s = l[n].children, i = s.length, o = 0; o < i; o++)
          s[o].type === "text_special" && (s[o].type = "text");
        for (o = a = 0; o < i; o++)
          s[o].type === "text" && o + 1 < i && s[o + 1].type === "text" ? s[o + 1].content = s[o].content + s[o + 1].content : (o !== a && (s[a] = s[o]), a++);
        o !== a && (s.length = a);
      }
  }), hl;
}
var gl, ih;
function Gf() {
  if (ih) return gl;
  ih = 1;
  function e(t, n, r) {
    this.type = t, this.tag = n, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
  }
  return e.prototype.attrIndex = function(n) {
    var r, s, o;
    if (!this.attrs)
      return -1;
    for (r = this.attrs, s = 0, o = r.length; s < o; s++)
      if (r[s][0] === n)
        return s;
    return -1;
  }, e.prototype.attrPush = function(n) {
    this.attrs ? this.attrs.push(n) : this.attrs = [n];
  }, e.prototype.attrSet = function(n, r) {
    var s = this.attrIndex(n), o = [n, r];
    s < 0 ? this.attrPush(o) : this.attrs[s] = o;
  }, e.prototype.attrGet = function(n) {
    var r = this.attrIndex(n), s = null;
    return r >= 0 && (s = this.attrs[r][1]), s;
  }, e.prototype.attrJoin = function(n, r) {
    var s = this.attrIndex(n);
    s < 0 ? this.attrPush([n, r]) : this.attrs[s][1] = this.attrs[s][1] + " " + r;
  }, gl = e, gl;
}
var ml, ah;
function hbe() {
  if (ah) return ml;
  ah = 1;
  var e = Gf();
  function t(n, r, s) {
    this.src = n, this.env = s, this.tokens = [], this.inlineMode = !1, this.md = r;
  }
  return t.prototype.Token = e, ml = t, ml;
}
var vl, lh;
function gbe() {
  if (lh) return vl;
  lh = 1;
  var e = Kf(), t = [
    ["normalize", abe()],
    ["block", lbe()],
    ["inline", cbe()],
    ["linkify", ube()],
    ["replacements", fbe()],
    ["smartquotes", dbe()],
    // `text_join` finds `text_special` tokens (for escape sequences)
    // and joins them with the rest of the text
    ["text_join", pbe()]
  ];
  function n() {
    this.ruler = new e();
    for (var r = 0; r < t.length; r++)
      this.ruler.push(t[r][0], t[r][1]);
  }
  return n.prototype.process = function(r) {
    var s, o, i;
    for (i = this.ruler.getRules(""), s = 0, o = i.length; s < o; s++)
      i[s](r);
  }, n.prototype.State = hbe(), vl = n, vl;
}
var bl, ch;
function mbe() {
  if (ch) return bl;
  ch = 1;
  var e = Ye().isSpace;
  function t(r, s) {
    var o = r.bMarks[s] + r.tShift[s], i = r.eMarks[s];
    return r.src.slice(o, i);
  }
  function n(r) {
    var s = [], o = 0, i = r.length, a, l = !1, u = 0, f = "";
    for (a = r.charCodeAt(o); o < i; )
      a === 124 && (l ? (f += r.substring(u, o - 1), u = o) : (s.push(f + r.substring(u, o)), f = "", u = o + 1)), l = a === 92, o++, a = r.charCodeAt(o);
    return s.push(f + r.substring(u)), s;
  }
  return bl = function(s, o, i, a) {
    var l, u, f, c, p, d, m, g, C, h, k, y, _, S, x, T, $, I;
    if (o + 2 > i || (d = o + 1, s.sCount[d] < s.blkIndent) || s.sCount[d] - s.blkIndent >= 4 || (f = s.bMarks[d] + s.tShift[d], f >= s.eMarks[d]) || ($ = s.src.charCodeAt(f++), $ !== 124 && $ !== 45 && $ !== 58) || f >= s.eMarks[d] || (I = s.src.charCodeAt(f++), I !== 124 && I !== 45 && I !== 58 && !e(I)) || $ === 45 && e(I))
      return !1;
    for (; f < s.eMarks[d]; ) {
      if (l = s.src.charCodeAt(f), l !== 124 && l !== 45 && l !== 58 && !e(l))
        return !1;
      f++;
    }
    for (u = t(s, o + 1), m = u.split("|"), h = [], c = 0; c < m.length; c++) {
      if (k = m[c].trim(), !k) {
        if (c === 0 || c === m.length - 1)
          continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(k))
        return !1;
      k.charCodeAt(k.length - 1) === 58 ? h.push(k.charCodeAt(0) === 58 ? "center" : "right") : k.charCodeAt(0) === 58 ? h.push("left") : h.push("");
    }
    if (u = t(s, o).trim(), u.indexOf("|") === -1 || s.sCount[o] - s.blkIndent >= 4 || (m = n(u), m.length && m[0] === "" && m.shift(), m.length && m[m.length - 1] === "" && m.pop(), g = m.length, g === 0 || g !== h.length))
      return !1;
    if (a)
      return !0;
    for (S = s.parentType, s.parentType = "table", T = s.md.block.ruler.getRules("blockquote"), C = s.push("table_open", "table", 1), C.map = y = [o, 0], C = s.push("thead_open", "thead", 1), C.map = [o, o + 1], C = s.push("tr_open", "tr", 1), C.map = [o, o + 1], c = 0; c < m.length; c++)
      C = s.push("th_open", "th", 1), h[c] && (C.attrs = [["style", "text-align:" + h[c]]]), C = s.push("inline", "", 0), C.content = m[c].trim(), C.children = [], C = s.push("th_close", "th", -1);
    for (C = s.push("tr_close", "tr", -1), C = s.push("thead_close", "thead", -1), d = o + 2; d < i && !(s.sCount[d] < s.blkIndent); d++) {
      for (x = !1, c = 0, p = T.length; c < p; c++)
        if (T[c](s, d, i, !0)) {
          x = !0;
          break;
        }
      if (x || (u = t(s, d).trim(), !u) || s.sCount[d] - s.blkIndent >= 4)
        break;
      for (m = n(u), m.length && m[0] === "" && m.shift(), m.length && m[m.length - 1] === "" && m.pop(), d === o + 2 && (C = s.push("tbody_open", "tbody", 1), C.map = _ = [o + 2, 0]), C = s.push("tr_open", "tr", 1), C.map = [d, d + 1], c = 0; c < g; c++)
        C = s.push("td_open", "td", 1), h[c] && (C.attrs = [["style", "text-align:" + h[c]]]), C = s.push("inline", "", 0), C.content = m[c] ? m[c].trim() : "", C.children = [], C = s.push("td_close", "td", -1);
      C = s.push("tr_close", "tr", -1);
    }
    return _ && (C = s.push("tbody_close", "tbody", -1), _[1] = d), C = s.push("table_close", "table", -1), y[1] = d, s.parentType = S, s.line = d, !0;
  }, bl;
}
var _l, uh;
function vbe() {
  return uh || (uh = 1, _l = function(t, n, r) {
    var s, o, i;
    if (t.sCount[n] - t.blkIndent < 4)
      return !1;
    for (o = s = n + 1; s < r; ) {
      if (t.isEmpty(s)) {
        s++;
        continue;
      }
      if (t.sCount[s] - t.blkIndent >= 4) {
        s++, o = s;
        continue;
      }
      break;
    }
    return t.line = o, i = t.push("code_block", "code", 0), i.content = t.getLines(n, o, 4 + t.blkIndent, !1) + `
`, i.map = [n, t.line], !0;
  }), _l;
}
var yl, fh;
function bbe() {
  return fh || (fh = 1, yl = function(t, n, r, s) {
    var o, i, a, l, u, f, c, p = !1, d = t.bMarks[n] + t.tShift[n], m = t.eMarks[n];
    if (t.sCount[n] - t.blkIndent >= 4 || d + 3 > m || (o = t.src.charCodeAt(d), o !== 126 && o !== 96) || (u = d, d = t.skipChars(d, o), i = d - u, i < 3) || (c = t.src.slice(u, d), a = t.src.slice(d, m), o === 96 && a.indexOf(String.fromCharCode(o)) >= 0))
      return !1;
    if (s)
      return !0;
    for (l = n; l++, !(l >= r || (d = u = t.bMarks[l] + t.tShift[l], m = t.eMarks[l], d < m && t.sCount[l] < t.blkIndent)); )
      if (t.src.charCodeAt(d) === o && !(t.sCount[l] - t.blkIndent >= 4) && (d = t.skipChars(d, o), !(d - u < i) && (d = t.skipSpaces(d), !(d < m)))) {
        p = !0;
        break;
      }
    return i = t.sCount[n], t.line = l + (p ? 1 : 0), f = t.push("fence", "code", 0), f.info = a, f.content = t.getLines(n + 1, l, i, !0), f.markup = c, f.map = [n, t.line], !0;
  }), yl;
}
var wl, dh;
function _be() {
  if (dh) return wl;
  dh = 1;
  var e = Ye().isSpace;
  return wl = function(n, r, s, o) {
    var i, a, l, u, f, c, p, d, m, g, C, h, k, y, _, S, x, T, $, I, P = n.lineMax, N = n.bMarks[r] + n.tShift[r], D = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || n.src.charCodeAt(N) !== 62)
      return !1;
    if (o)
      return !0;
    for (g = [], C = [], y = [], _ = [], T = n.md.block.ruler.getRules("blockquote"), k = n.parentType, n.parentType = "blockquote", d = r; d < s && (I = n.sCount[d] < n.blkIndent, N = n.bMarks[d] + n.tShift[d], D = n.eMarks[d], !(N >= D)); d++) {
      if (n.src.charCodeAt(N++) === 62 && !I) {
        for (u = n.sCount[d] + 1, n.src.charCodeAt(N) === 32 ? (N++, u++, i = !1, S = !0) : n.src.charCodeAt(N) === 9 ? (S = !0, (n.bsCount[d] + u) % 4 === 3 ? (N++, u++, i = !1) : i = !0) : S = !1, m = u, g.push(n.bMarks[d]), n.bMarks[d] = N; N < D && (a = n.src.charCodeAt(N), e(a)); ) {
          a === 9 ? m += 4 - (m + n.bsCount[d] + (i ? 1 : 0)) % 4 : m++;
          N++;
        }
        c = N >= D, C.push(n.bsCount[d]), n.bsCount[d] = n.sCount[d] + 1 + (S ? 1 : 0), y.push(n.sCount[d]), n.sCount[d] = m - u, _.push(n.tShift[d]), n.tShift[d] = N - n.bMarks[d];
        continue;
      }
      if (c)
        break;
      for (x = !1, l = 0, f = T.length; l < f; l++)
        if (T[l](n, d, s, !0)) {
          x = !0;
          break;
        }
      if (x) {
        n.lineMax = d, n.blkIndent !== 0 && (g.push(n.bMarks[d]), C.push(n.bsCount[d]), _.push(n.tShift[d]), y.push(n.sCount[d]), n.sCount[d] -= n.blkIndent);
        break;
      }
      g.push(n.bMarks[d]), C.push(n.bsCount[d]), _.push(n.tShift[d]), y.push(n.sCount[d]), n.sCount[d] = -1;
    }
    for (h = n.blkIndent, n.blkIndent = 0, $ = n.push("blockquote_open", "blockquote", 1), $.markup = ">", $.map = p = [r, 0], n.md.block.tokenize(n, r, d), $ = n.push("blockquote_close", "blockquote", -1), $.markup = ">", n.lineMax = P, n.parentType = k, p[1] = n.line, l = 0; l < _.length; l++)
      n.bMarks[l + r] = g[l], n.tShift[l + r] = _[l], n.sCount[l + r] = y[l], n.bsCount[l + r] = C[l];
    return n.blkIndent = h, !0;
  }, wl;
}
var kl, ph;
function ybe() {
  if (ph) return kl;
  ph = 1;
  var e = Ye().isSpace;
  return kl = function(n, r, s, o) {
    var i, a, l, u, f = n.bMarks[r] + n.tShift[r], c = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || (i = n.src.charCodeAt(f++), i !== 42 && i !== 45 && i !== 95))
      return !1;
    for (a = 1; f < c; ) {
      if (l = n.src.charCodeAt(f++), l !== i && !e(l))
        return !1;
      l === i && a++;
    }
    return a < 3 ? !1 : (o || (n.line = r + 1, u = n.push("hr", "hr", 0), u.map = [r, n.line], u.markup = Array(a + 1).join(String.fromCharCode(i))), !0);
  }, kl;
}
var Cl, hh;
function wbe() {
  if (hh) return Cl;
  hh = 1;
  var e = Ye().isSpace;
  function t(s, o) {
    var i, a, l, u;
    return a = s.bMarks[o] + s.tShift[o], l = s.eMarks[o], i = s.src.charCodeAt(a++), i !== 42 && i !== 45 && i !== 43 || a < l && (u = s.src.charCodeAt(a), !e(u)) ? -1 : a;
  }
  function n(s, o) {
    var i, a = s.bMarks[o] + s.tShift[o], l = a, u = s.eMarks[o];
    if (l + 1 >= u || (i = s.src.charCodeAt(l++), i < 48 || i > 57))
      return -1;
    for (; ; ) {
      if (l >= u)
        return -1;
      if (i = s.src.charCodeAt(l++), i >= 48 && i <= 57) {
        if (l - a >= 10)
          return -1;
        continue;
      }
      if (i === 41 || i === 46)
        break;
      return -1;
    }
    return l < u && (i = s.src.charCodeAt(l), !e(i)) ? -1 : l;
  }
  function r(s, o) {
    var i, a, l = s.level + 2;
    for (i = o + 2, a = s.tokens.length - 2; i < a; i++)
      s.tokens[i].level === l && s.tokens[i].type === "paragraph_open" && (s.tokens[i + 2].hidden = !0, s.tokens[i].hidden = !0, i += 2);
  }
  return Cl = function(o, i, a, l) {
    var u, f, c, p, d, m, g, C, h, k, y, _, S, x, T, $, I, P, N, D, oe, F, U, q, z, H, Q, te = i, Ae = !1, ve = !0;
    if (o.sCount[te] - o.blkIndent >= 4 || o.listIndent >= 0 && o.sCount[te] - o.listIndent >= 4 && o.sCount[te] < o.blkIndent)
      return !1;
    if (l && o.parentType === "paragraph" && o.sCount[te] >= o.blkIndent && (Ae = !0), (F = n(o, te)) >= 0) {
      if (g = !0, q = o.bMarks[te] + o.tShift[te], S = Number(o.src.slice(q, F - 1)), Ae && S !== 1) return !1;
    } else if ((F = t(o, te)) >= 0)
      g = !1;
    else
      return !1;
    if (Ae && o.skipSpaces(F) >= o.eMarks[te])
      return !1;
    if (l)
      return !0;
    for (_ = o.src.charCodeAt(F - 1), y = o.tokens.length, g ? (Q = o.push("ordered_list_open", "ol", 1), S !== 1 && (Q.attrs = [["start", S]])) : Q = o.push("bullet_list_open", "ul", 1), Q.map = k = [te, 0], Q.markup = String.fromCharCode(_), U = !1, H = o.md.block.ruler.getRules("list"), I = o.parentType, o.parentType = "list"; te < a; ) {
      for (oe = F, x = o.eMarks[te], m = T = o.sCount[te] + F - (o.bMarks[te] + o.tShift[te]); oe < x; ) {
        if (u = o.src.charCodeAt(oe), u === 9)
          T += 4 - (T + o.bsCount[te]) % 4;
        else if (u === 32)
          T++;
        else
          break;
        oe++;
      }
      if (f = oe, f >= x ? d = 1 : d = T - m, d > 4 && (d = 1), p = m + d, Q = o.push("list_item_open", "li", 1), Q.markup = String.fromCharCode(_), Q.map = C = [te, 0], g && (Q.info = o.src.slice(q, F - 1)), D = o.tight, N = o.tShift[te], P = o.sCount[te], $ = o.listIndent, o.listIndent = o.blkIndent, o.blkIndent = p, o.tight = !0, o.tShift[te] = f - o.bMarks[te], o.sCount[te] = T, f >= x && o.isEmpty(te + 1) ? o.line = Math.min(o.line + 2, a) : o.md.block.tokenize(o, te, a, !0), (!o.tight || U) && (ve = !1), U = o.line - te > 1 && o.isEmpty(o.line - 1), o.blkIndent = o.listIndent, o.listIndent = $, o.tShift[te] = N, o.sCount[te] = P, o.tight = D, Q = o.push("list_item_close", "li", -1), Q.markup = String.fromCharCode(_), te = o.line, C[1] = te, te >= a || o.sCount[te] < o.blkIndent || o.sCount[te] - o.blkIndent >= 4)
        break;
      for (z = !1, c = 0, h = H.length; c < h; c++)
        if (H[c](o, te, a, !0)) {
          z = !0;
          break;
        }
      if (z)
        break;
      if (g) {
        if (F = n(o, te), F < 0)
          break;
        q = o.bMarks[te] + o.tShift[te];
      } else if (F = t(o, te), F < 0)
        break;
      if (_ !== o.src.charCodeAt(F - 1))
        break;
    }
    return g ? Q = o.push("ordered_list_close", "ol", -1) : Q = o.push("bullet_list_close", "ul", -1), Q.markup = String.fromCharCode(_), k[1] = te, o.line = te, o.parentType = I, ve && r(o, y), !0;
  }, Cl;
}
var xl, gh;
function kbe() {
  if (gh) return xl;
  gh = 1;
  var e = Ye().normalizeReference, t = Ye().isSpace;
  return xl = function(r, s, o, i) {
    var a, l, u, f, c, p, d, m, g, C, h, k, y, _, S, x, T = 0, $ = r.bMarks[s] + r.tShift[s], I = r.eMarks[s], P = s + 1;
    if (r.sCount[s] - r.blkIndent >= 4 || r.src.charCodeAt($) !== 91)
      return !1;
    for (; ++$ < I; )
      if (r.src.charCodeAt($) === 93 && r.src.charCodeAt($ - 1) !== 92) {
        if ($ + 1 === I || r.src.charCodeAt($ + 1) !== 58)
          return !1;
        break;
      }
    for (f = r.lineMax, S = r.md.block.ruler.getRules("reference"), C = r.parentType, r.parentType = "reference"; P < f && !r.isEmpty(P); P++)
      if (!(r.sCount[P] - r.blkIndent > 3) && !(r.sCount[P] < 0)) {
        for (_ = !1, p = 0, d = S.length; p < d; p++)
          if (S[p](r, P, f, !0)) {
            _ = !0;
            break;
          }
        if (_)
          break;
      }
    for (y = r.getLines(s, P, r.blkIndent, !1).trim(), I = y.length, $ = 1; $ < I; $++) {
      if (a = y.charCodeAt($), a === 91)
        return !1;
      if (a === 93) {
        g = $;
        break;
      } else a === 10 ? T++ : a === 92 && ($++, $ < I && y.charCodeAt($) === 10 && T++);
    }
    if (g < 0 || y.charCodeAt(g + 1) !== 58)
      return !1;
    for ($ = g + 2; $ < I; $++)
      if (a = y.charCodeAt($), a === 10)
        T++;
      else if (!t(a)) break;
    if (h = r.md.helpers.parseLinkDestination(y, $, I), !h.ok || (c = r.md.normalizeLink(h.str), !r.md.validateLink(c)))
      return !1;
    for ($ = h.pos, T += h.lines, l = $, u = T, k = $; $ < I; $++)
      if (a = y.charCodeAt($), a === 10)
        T++;
      else if (!t(a)) break;
    for (h = r.md.helpers.parseLinkTitle(y, $, I), $ < I && k !== $ && h.ok ? (x = h.str, $ = h.pos, T += h.lines) : (x = "", $ = l, T = u); $ < I && (a = y.charCodeAt($), !!t(a)); )
      $++;
    if ($ < I && y.charCodeAt($) !== 10 && x)
      for (x = "", $ = l, T = u; $ < I && (a = y.charCodeAt($), !!t(a)); )
        $++;
    return $ < I && y.charCodeAt($) !== 10 || (m = e(y.slice(1, g)), !m) ? !1 : (i || (typeof r.env.references > "u" && (r.env.references = {}), typeof r.env.references[m] > "u" && (r.env.references[m] = { title: x, href: c }), r.parentType = C, r.line = s + T + 1), !0);
  }, xl;
}
var El, mh;
function Cbe() {
  return mh || (mh = 1, El = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "section",
    "source",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ]), El;
}
var Us = {}, vh;
function sy() {
  if (vh) return Us;
  vh = 1;
  var e = "[a-zA-Z_:][a-zA-Z0-9:._-]*", t = "[^\"'=<>`\\x00-\\x20]+", n = "'[^']*'", r = '"[^"]*"', s = "(?:" + t + "|" + n + "|" + r + ")", o = "(?:\\s+" + e + "(?:\\s*=\\s*" + s + ")?)", i = "<[A-Za-z][A-Za-z0-9\\-]*" + o + "*\\s*\\/?>", a = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", l = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", u = "<[?][\\s\\S]*?[?]>", f = "<![A-Z]+\\s+[^>]*>", c = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", p = new RegExp("^(?:" + i + "|" + a + "|" + l + "|" + u + "|" + f + "|" + c + ")"), d = new RegExp("^(?:" + i + "|" + a + ")");
  return Us.HTML_TAG_RE = p, Us.HTML_OPEN_CLOSE_TAG_RE = d, Us;
}
var Sl, bh;
function xbe() {
  if (bh) return Sl;
  bh = 1;
  var e = Cbe(), t = sy().HTML_OPEN_CLOSE_TAG_RE, n = [
    [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
    [/^<!--/, /-->/, !0],
    [/^<\?/, /\?>/, !0],
    [/^<![A-Z]/, />/, !0],
    [/^<!\[CDATA\[/, /\]\]>/, !0],
    [new RegExp("^</?(" + e.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
    [new RegExp(t.source + "\\s*$"), /^$/, !1]
  ];
  return Sl = function(s, o, i, a) {
    var l, u, f, c, p = s.bMarks[o] + s.tShift[o], d = s.eMarks[o];
    if (s.sCount[o] - s.blkIndent >= 4 || !s.md.options.html || s.src.charCodeAt(p) !== 60)
      return !1;
    for (c = s.src.slice(p, d), l = 0; l < n.length && !n[l][0].test(c); l++)
      ;
    if (l === n.length)
      return !1;
    if (a)
      return n[l][2];
    if (u = o + 1, !n[l][1].test(c)) {
      for (; u < i && !(s.sCount[u] < s.blkIndent); u++)
        if (p = s.bMarks[u] + s.tShift[u], d = s.eMarks[u], c = s.src.slice(p, d), n[l][1].test(c)) {
          c.length !== 0 && u++;
          break;
        }
    }
    return s.line = u, f = s.push("html_block", "", 0), f.map = [o, u], f.content = s.getLines(o, u, s.blkIndent, !0), !0;
  }, Sl;
}
var Al, _h;
function Ebe() {
  if (_h) return Al;
  _h = 1;
  var e = Ye().isSpace;
  return Al = function(n, r, s, o) {
    var i, a, l, u, f = n.bMarks[r] + n.tShift[r], c = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || (i = n.src.charCodeAt(f), i !== 35 || f >= c))
      return !1;
    for (a = 1, i = n.src.charCodeAt(++f); i === 35 && f < c && a <= 6; )
      a++, i = n.src.charCodeAt(++f);
    return a > 6 || f < c && !e(i) ? !1 : (o || (c = n.skipSpacesBack(c, f), l = n.skipCharsBack(c, 35, f), l > f && e(n.src.charCodeAt(l - 1)) && (c = l), n.line = r + 1, u = n.push("heading_open", "h" + String(a), 1), u.markup = "########".slice(0, a), u.map = [r, n.line], u = n.push("inline", "", 0), u.content = n.src.slice(f, c).trim(), u.map = [r, n.line], u.children = [], u = n.push("heading_close", "h" + String(a), -1), u.markup = "########".slice(0, a)), !0);
  }, Al;
}
var Tl, yh;
function Sbe() {
  return yh || (yh = 1, Tl = function(t, n, r) {
    var s, o, i, a, l, u, f, c, p, d = n + 1, m, g = t.md.block.ruler.getRules("paragraph");
    if (t.sCount[n] - t.blkIndent >= 4)
      return !1;
    for (m = t.parentType, t.parentType = "paragraph"; d < r && !t.isEmpty(d); d++)
      if (!(t.sCount[d] - t.blkIndent > 3)) {
        if (t.sCount[d] >= t.blkIndent && (u = t.bMarks[d] + t.tShift[d], f = t.eMarks[d], u < f && (p = t.src.charCodeAt(u), (p === 45 || p === 61) && (u = t.skipChars(u, p), u = t.skipSpaces(u), u >= f)))) {
          c = p === 61 ? 1 : 2;
          break;
        }
        if (!(t.sCount[d] < 0)) {
          for (o = !1, i = 0, a = g.length; i < a; i++)
            if (g[i](t, d, r, !0)) {
              o = !0;
              break;
            }
          if (o)
            break;
        }
      }
    return c ? (s = t.getLines(n, d, t.blkIndent, !1).trim(), t.line = d + 1, l = t.push("heading_open", "h" + String(c), 1), l.markup = String.fromCharCode(p), l.map = [n, t.line], l = t.push("inline", "", 0), l.content = s, l.map = [n, t.line - 1], l.children = [], l = t.push("heading_close", "h" + String(c), -1), l.markup = String.fromCharCode(p), t.parentType = m, !0) : !1;
  }), Tl;
}
var Ml, wh;
function Abe() {
  return wh || (wh = 1, Ml = function(t, n, r) {
    var s, o, i, a, l, u, f = n + 1, c = t.md.block.ruler.getRules("paragraph");
    for (u = t.parentType, t.parentType = "paragraph"; f < r && !t.isEmpty(f); f++)
      if (!(t.sCount[f] - t.blkIndent > 3) && !(t.sCount[f] < 0)) {
        for (o = !1, i = 0, a = c.length; i < a; i++)
          if (c[i](t, f, r, !0)) {
            o = !0;
            break;
          }
        if (o)
          break;
      }
    return s = t.getLines(n, f, t.blkIndent, !1).trim(), t.line = f, l = t.push("paragraph_open", "p", 1), l.map = [n, t.line], l = t.push("inline", "", 0), l.content = s, l.map = [n, t.line], l.children = [], l = t.push("paragraph_close", "p", -1), t.parentType = u, !0;
  }), Ml;
}
var $l, kh;
function Tbe() {
  if (kh) return $l;
  kh = 1;
  var e = Gf(), t = Ye().isSpace;
  function n(r, s, o, i) {
    var a, l, u, f, c, p, d, m;
    for (this.src = r, this.md = s, this.env = o, this.tokens = i, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", l = this.src, m = !1, u = f = p = d = 0, c = l.length; f < c; f++) {
      if (a = l.charCodeAt(f), !m)
        if (t(a)) {
          p++, a === 9 ? d += 4 - d % 4 : d++;
          continue;
        } else
          m = !0;
      (a === 10 || f === c - 1) && (a !== 10 && f++, this.bMarks.push(u), this.eMarks.push(f), this.tShift.push(p), this.sCount.push(d), this.bsCount.push(0), m = !1, p = 0, d = 0, u = f + 1);
    }
    this.bMarks.push(l.length), this.eMarks.push(l.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
  }
  return n.prototype.push = function(r, s, o) {
    var i = new e(r, s, o);
    return i.block = !0, o < 0 && this.level--, i.level = this.level, o > 0 && this.level++, this.tokens.push(i), i;
  }, n.prototype.isEmpty = function(s) {
    return this.bMarks[s] + this.tShift[s] >= this.eMarks[s];
  }, n.prototype.skipEmptyLines = function(s) {
    for (var o = this.lineMax; s < o && !(this.bMarks[s] + this.tShift[s] < this.eMarks[s]); s++)
      ;
    return s;
  }, n.prototype.skipSpaces = function(s) {
    for (var o, i = this.src.length; s < i && (o = this.src.charCodeAt(s), !!t(o)); s++)
      ;
    return s;
  }, n.prototype.skipSpacesBack = function(s, o) {
    if (s <= o)
      return s;
    for (; s > o; )
      if (!t(this.src.charCodeAt(--s)))
        return s + 1;
    return s;
  }, n.prototype.skipChars = function(s, o) {
    for (var i = this.src.length; s < i && this.src.charCodeAt(s) === o; s++)
      ;
    return s;
  }, n.prototype.skipCharsBack = function(s, o, i) {
    if (s <= i)
      return s;
    for (; s > i; )
      if (o !== this.src.charCodeAt(--s))
        return s + 1;
    return s;
  }, n.prototype.getLines = function(s, o, i, a) {
    var l, u, f, c, p, d, m, g = s;
    if (s >= o)
      return "";
    for (d = new Array(o - s), l = 0; g < o; g++, l++) {
      for (u = 0, m = c = this.bMarks[g], g + 1 < o || a ? p = this.eMarks[g] + 1 : p = this.eMarks[g]; c < p && u < i; ) {
        if (f = this.src.charCodeAt(c), t(f))
          f === 9 ? u += 4 - (u + this.bsCount[g]) % 4 : u++;
        else if (c - m < this.tShift[g])
          u++;
        else
          break;
        c++;
      }
      u > i ? d[l] = new Array(u - i + 1).join(" ") + this.src.slice(c, p) : d[l] = this.src.slice(c, p);
    }
    return d.join("");
  }, n.prototype.Token = e, $l = n, $l;
}
var Ll, Ch;
function Mbe() {
  if (Ch) return Ll;
  Ch = 1;
  var e = Kf(), t = [
    // First 2 params - rule name & source. Secondary array - list of rules,
    // which can be terminated by this one.
    ["table", mbe(), ["paragraph", "reference"]],
    ["code", vbe()],
    ["fence", bbe(), ["paragraph", "reference", "blockquote", "list"]],
    ["blockquote", _be(), ["paragraph", "reference", "blockquote", "list"]],
    ["hr", ybe(), ["paragraph", "reference", "blockquote", "list"]],
    ["list", wbe(), ["paragraph", "reference", "blockquote"]],
    ["reference", kbe()],
    ["html_block", xbe(), ["paragraph", "reference", "blockquote"]],
    ["heading", Ebe(), ["paragraph", "reference", "blockquote"]],
    ["lheading", Sbe()],
    ["paragraph", Abe()]
  ];
  function n() {
    this.ruler = new e();
    for (var r = 0; r < t.length; r++)
      this.ruler.push(t[r][0], t[r][1], { alt: (t[r][2] || []).slice() });
  }
  return n.prototype.tokenize = function(r, s, o) {
    for (var i, a, l, u = this.ruler.getRules(""), f = u.length, c = s, p = !1, d = r.md.options.maxNesting; c < o && (r.line = c = r.skipEmptyLines(c), !(c >= o || r.sCount[c] < r.blkIndent)); ) {
      if (r.level >= d) {
        r.line = o;
        break;
      }
      for (l = r.line, a = 0; a < f; a++)
        if (i = u[a](r, c, o, !1), i) {
          if (l >= r.line)
            throw new Error("block rule didn't increment state.line");
          break;
        }
      if (!i) throw new Error("none of the block rules matched");
      r.tight = !p, r.isEmpty(r.line - 1) && (p = !0), c = r.line, c < o && r.isEmpty(c) && (p = !0, c++, r.line = c);
    }
  }, n.prototype.parse = function(r, s, o, i) {
    var a;
    r && (a = new this.State(r, s, o, i), this.tokenize(a, a.line, a.lineMax));
  }, n.prototype.State = Tbe(), Ll = n, Ll;
}
var Il, xh;
function $be() {
  if (xh) return Il;
  xh = 1;
  function e(t) {
    switch (t) {
      case 10:
      case 33:
      case 35:
      case 36:
      case 37:
      case 38:
      case 42:
      case 43:
      case 45:
      case 58:
      case 60:
      case 61:
      case 62:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  return Il = function(n, r) {
    for (var s = n.pos; s < n.posMax && !e(n.src.charCodeAt(s)); )
      s++;
    return s === n.pos ? !1 : (r || (n.pending += n.src.slice(n.pos, s)), n.pos = s, !0);
  }, Il;
}
var Ol, Eh;
function Lbe() {
  if (Eh) return Ol;
  Eh = 1;
  var e = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  return Ol = function(n, r) {
    var s, o, i, a, l, u, f, c;
    return !n.md.options.linkify || n.linkLevel > 0 || (s = n.pos, o = n.posMax, s + 3 > o) || n.src.charCodeAt(s) !== 58 || n.src.charCodeAt(s + 1) !== 47 || n.src.charCodeAt(s + 2) !== 47 || (i = n.pending.match(e), !i) || (a = i[1], l = n.md.linkify.matchAtStart(n.src.slice(s - a.length)), !l) || (u = l.url, u.length <= a.length) || (u = u.replace(/\*+$/, ""), f = n.md.normalizeLink(u), !n.md.validateLink(f)) ? !1 : (r || (n.pending = n.pending.slice(0, -a.length), c = n.push("link_open", "a", 1), c.attrs = [["href", f]], c.markup = "linkify", c.info = "auto", c = n.push("text", "", 0), c.content = n.md.normalizeLinkText(u), c = n.push("link_close", "a", -1), c.markup = "linkify", c.info = "auto"), n.pos += u.length - a.length, !0);
  }, Ol;
}
var Rl, Sh;
function Ibe() {
  if (Sh) return Rl;
  Sh = 1;
  var e = Ye().isSpace;
  return Rl = function(n, r) {
    var s, o, i, a = n.pos;
    if (n.src.charCodeAt(a) !== 10)
      return !1;
    if (s = n.pending.length - 1, o = n.posMax, !r)
      if (s >= 0 && n.pending.charCodeAt(s) === 32)
        if (s >= 1 && n.pending.charCodeAt(s - 1) === 32) {
          for (i = s - 1; i >= 1 && n.pending.charCodeAt(i - 1) === 32; ) i--;
          n.pending = n.pending.slice(0, i), n.push("hardbreak", "br", 0);
        } else
          n.pending = n.pending.slice(0, -1), n.push("softbreak", "br", 0);
      else
        n.push("softbreak", "br", 0);
    for (a++; a < o && e(n.src.charCodeAt(a)); )
      a++;
    return n.pos = a, !0;
  }, Rl;
}
var Pl, Ah;
function Obe() {
  if (Ah) return Pl;
  Ah = 1;
  for (var e = Ye().isSpace, t = [], n = 0; n < 256; n++)
    t.push(0);
  return "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(r) {
    t[r.charCodeAt(0)] = 1;
  }), Pl = function(s, o) {
    var i, a, l, u, f, c = s.pos, p = s.posMax;
    if (s.src.charCodeAt(c) !== 92 || (c++, c >= p)) return !1;
    if (i = s.src.charCodeAt(c), i === 10) {
      for (o || s.push("hardbreak", "br", 0), c++; c < p && (i = s.src.charCodeAt(c), !!e(i)); )
        c++;
      return s.pos = c, !0;
    }
    return u = s.src[c], i >= 55296 && i <= 56319 && c + 1 < p && (a = s.src.charCodeAt(c + 1), a >= 56320 && a <= 57343 && (u += s.src[c + 1], c++)), l = "\\" + u, o || (f = s.push("text_special", "", 0), i < 256 && t[i] !== 0 ? f.content = u : f.content = l, f.markup = l, f.info = "escape"), s.pos = c + 1, !0;
  }, Pl;
}
var Dl, Th;
function Rbe() {
  return Th || (Th = 1, Dl = function(t, n) {
    var r, s, o, i, a, l, u, f, c = t.pos, p = t.src.charCodeAt(c);
    if (p !== 96)
      return !1;
    for (r = c, c++, s = t.posMax; c < s && t.src.charCodeAt(c) === 96; )
      c++;
    if (o = t.src.slice(r, c), u = o.length, t.backticksScanned && (t.backticks[u] || 0) <= r)
      return n || (t.pending += o), t.pos += u, !0;
    for (l = c; (a = t.src.indexOf("`", l)) !== -1; ) {
      for (l = a + 1; l < s && t.src.charCodeAt(l) === 96; )
        l++;
      if (f = l - a, f === u)
        return n || (i = t.push("code_inline", "code", 0), i.markup = o, i.content = t.src.slice(c, a).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), t.pos = l, !0;
      t.backticks[f] = a;
    }
    return t.backticksScanned = !0, n || (t.pending += o), t.pos += u, !0;
  }), Dl;
}
var Ks = {}, Mh;
function $h() {
  if (Mh) return Ks;
  Mh = 1, Ks.tokenize = function(n, r) {
    var s, o, i, a, l, u = n.pos, f = n.src.charCodeAt(u);
    if (r || f !== 126 || (o = n.scanDelims(n.pos, !0), a = o.length, l = String.fromCharCode(f), a < 2))
      return !1;
    for (a % 2 && (i = n.push("text", "", 0), i.content = l, a--), s = 0; s < a; s += 2)
      i = n.push("text", "", 0), i.content = l + l, n.delimiters.push({
        marker: f,
        length: 0,
        // disable "rule of 3" length checks meant for emphasis
        token: n.tokens.length - 1,
        end: -1,
        open: o.can_open,
        close: o.can_close
      });
    return n.pos += o.length, !0;
  };
  function e(t, n) {
    var r, s, o, i, a, l = [], u = n.length;
    for (r = 0; r < u; r++)
      o = n[r], o.marker === 126 && o.end !== -1 && (i = n[o.end], a = t.tokens[o.token], a.type = "s_open", a.tag = "s", a.nesting = 1, a.markup = "~~", a.content = "", a = t.tokens[i.token], a.type = "s_close", a.tag = "s", a.nesting = -1, a.markup = "~~", a.content = "", t.tokens[i.token - 1].type === "text" && t.tokens[i.token - 1].content === "~" && l.push(i.token - 1));
    for (; l.length; ) {
      for (r = l.pop(), s = r + 1; s < t.tokens.length && t.tokens[s].type === "s_close"; )
        s++;
      s--, r !== s && (a = t.tokens[s], t.tokens[s] = t.tokens[r], t.tokens[r] = a);
    }
  }
  return Ks.postProcess = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(n, s[r].delimiters);
  }, Ks;
}
var Gs = {}, Lh;
function Ih() {
  if (Lh) return Gs;
  Lh = 1, Gs.tokenize = function(n, r) {
    var s, o, i, a = n.pos, l = n.src.charCodeAt(a);
    if (r || l !== 95 && l !== 42)
      return !1;
    for (o = n.scanDelims(n.pos, l === 42), s = 0; s < o.length; s++)
      i = n.push("text", "", 0), i.content = String.fromCharCode(l), n.delimiters.push({
        // Char code of the starting marker (number).
        //
        marker: l,
        // Total length of these series of delimiters.
        //
        length: o.length,
        // A position of the token this delimiter corresponds to.
        //
        token: n.tokens.length - 1,
        // If this delimiter is matched as a valid opener, `end` will be
        // equal to its position, otherwise it's `-1`.
        //
        end: -1,
        // Boolean flags that determine if this delimiter could open or close
        // an emphasis.
        //
        open: o.can_open,
        close: o.can_close
      });
    return n.pos += o.length, !0;
  };
  function e(t, n) {
    var r, s, o, i, a, l, u = n.length;
    for (r = u - 1; r >= 0; r--)
      s = n[r], !(s.marker !== 95 && s.marker !== 42) && s.end !== -1 && (o = n[s.end], l = r > 0 && n[r - 1].end === s.end + 1 && // check that first two markers match and adjacent
      n[r - 1].marker === s.marker && n[r - 1].token === s.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
      n[s.end + 1].token === o.token + 1, a = String.fromCharCode(s.marker), i = t.tokens[s.token], i.type = l ? "strong_open" : "em_open", i.tag = l ? "strong" : "em", i.nesting = 1, i.markup = l ? a + a : a, i.content = "", i = t.tokens[o.token], i.type = l ? "strong_close" : "em_close", i.tag = l ? "strong" : "em", i.nesting = -1, i.markup = l ? a + a : a, i.content = "", l && (t.tokens[n[r - 1].token].content = "", t.tokens[n[s.end + 1].token].content = "", r--));
  }
  return Gs.postProcess = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(n, s[r].delimiters);
  }, Gs;
}
var Nl, Oh;
function Pbe() {
  if (Oh) return Nl;
  Oh = 1;
  var e = Ye().normalizeReference, t = Ye().isSpace;
  return Nl = function(r, s) {
    var o, i, a, l, u, f, c, p, d, m = "", g = "", C = r.pos, h = r.posMax, k = r.pos, y = !0;
    if (r.src.charCodeAt(r.pos) !== 91 || (u = r.pos + 1, l = r.md.helpers.parseLinkLabel(r, r.pos, !0), l < 0))
      return !1;
    if (f = l + 1, f < h && r.src.charCodeAt(f) === 40) {
      for (y = !1, f++; f < h && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
        ;
      if (f >= h)
        return !1;
      if (k = f, c = r.md.helpers.parseLinkDestination(r.src, f, r.posMax), c.ok) {
        for (m = r.md.normalizeLink(c.str), r.md.validateLink(m) ? f = c.pos : m = "", k = f; f < h && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
          ;
        if (c = r.md.helpers.parseLinkTitle(r.src, f, r.posMax), f < h && k !== f && c.ok)
          for (g = c.str, f = c.pos; f < h && (i = r.src.charCodeAt(f), !(!t(i) && i !== 10)); f++)
            ;
      }
      (f >= h || r.src.charCodeAt(f) !== 41) && (y = !0), f++;
    }
    if (y) {
      if (typeof r.env.references > "u")
        return !1;
      if (f < h && r.src.charCodeAt(f) === 91 ? (k = f + 1, f = r.md.helpers.parseLinkLabel(r, f), f >= 0 ? a = r.src.slice(k, f++) : f = l + 1) : f = l + 1, a || (a = r.src.slice(u, l)), p = r.env.references[e(a)], !p)
        return r.pos = C, !1;
      m = p.href, g = p.title;
    }
    return s || (r.pos = u, r.posMax = l, d = r.push("link_open", "a", 1), d.attrs = o = [["href", m]], g && o.push(["title", g]), r.linkLevel++, r.md.inline.tokenize(r), r.linkLevel--, d = r.push("link_close", "a", -1)), r.pos = f, r.posMax = h, !0;
  }, Nl;
}
var Bl, Rh;
function Dbe() {
  if (Rh) return Bl;
  Rh = 1;
  var e = Ye().normalizeReference, t = Ye().isSpace;
  return Bl = function(r, s) {
    var o, i, a, l, u, f, c, p, d, m, g, C, h, k = "", y = r.pos, _ = r.posMax;
    if (r.src.charCodeAt(r.pos) !== 33 || r.src.charCodeAt(r.pos + 1) !== 91 || (f = r.pos + 2, u = r.md.helpers.parseLinkLabel(r, r.pos + 1, !1), u < 0))
      return !1;
    if (c = u + 1, c < _ && r.src.charCodeAt(c) === 40) {
      for (c++; c < _ && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
        ;
      if (c >= _)
        return !1;
      for (h = c, d = r.md.helpers.parseLinkDestination(r.src, c, r.posMax), d.ok && (k = r.md.normalizeLink(d.str), r.md.validateLink(k) ? c = d.pos : k = ""), h = c; c < _ && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
        ;
      if (d = r.md.helpers.parseLinkTitle(r.src, c, r.posMax), c < _ && h !== c && d.ok)
        for (m = d.str, c = d.pos; c < _ && (i = r.src.charCodeAt(c), !(!t(i) && i !== 10)); c++)
          ;
      else
        m = "";
      if (c >= _ || r.src.charCodeAt(c) !== 41)
        return r.pos = y, !1;
      c++;
    } else {
      if (typeof r.env.references > "u")
        return !1;
      if (c < _ && r.src.charCodeAt(c) === 91 ? (h = c + 1, c = r.md.helpers.parseLinkLabel(r, c), c >= 0 ? l = r.src.slice(h, c++) : c = u + 1) : c = u + 1, l || (l = r.src.slice(f, u)), p = r.env.references[e(l)], !p)
        return r.pos = y, !1;
      k = p.href, m = p.title;
    }
    return s || (a = r.src.slice(f, u), r.md.inline.parse(
      a,
      r.md,
      r.env,
      C = []
    ), g = r.push("image", "img", 0), g.attrs = o = [["src", k], ["alt", ""]], g.children = C, g.content = a, m && o.push(["title", m])), r.pos = c, r.posMax = _, !0;
  }, Bl;
}
var Fl, Ph;
function Nbe() {
  if (Ph) return Fl;
  Ph = 1;
  var e = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, t = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  return Fl = function(r, s) {
    var o, i, a, l, u, f, c = r.pos;
    if (r.src.charCodeAt(c) !== 60)
      return !1;
    for (u = r.pos, f = r.posMax; ; ) {
      if (++c >= f || (l = r.src.charCodeAt(c), l === 60)) return !1;
      if (l === 62) break;
    }
    return o = r.src.slice(u + 1, c), t.test(o) ? (i = r.md.normalizeLink(o), r.md.validateLink(i) ? (s || (a = r.push("link_open", "a", 1), a.attrs = [["href", i]], a.markup = "autolink", a.info = "auto", a = r.push("text", "", 0), a.content = r.md.normalizeLinkText(o), a = r.push("link_close", "a", -1), a.markup = "autolink", a.info = "auto"), r.pos += o.length + 2, !0) : !1) : e.test(o) ? (i = r.md.normalizeLink("mailto:" + o), r.md.validateLink(i) ? (s || (a = r.push("link_open", "a", 1), a.attrs = [["href", i]], a.markup = "autolink", a.info = "auto", a = r.push("text", "", 0), a.content = r.md.normalizeLinkText(o), a = r.push("link_close", "a", -1), a.markup = "autolink", a.info = "auto"), r.pos += o.length + 2, !0) : !1) : !1;
  }, Fl;
}
var ql, Dh;
function Bbe() {
  if (Dh) return ql;
  Dh = 1;
  var e = sy().HTML_TAG_RE;
  function t(s) {
    return /^<a[>\s]/i.test(s);
  }
  function n(s) {
    return /^<\/a\s*>/i.test(s);
  }
  function r(s) {
    var o = s | 32;
    return o >= 97 && o <= 122;
  }
  return ql = function(o, i) {
    var a, l, u, f, c = o.pos;
    return !o.md.options.html || (u = o.posMax, o.src.charCodeAt(c) !== 60 || c + 2 >= u) || (a = o.src.charCodeAt(c + 1), a !== 33 && a !== 63 && a !== 47 && !r(a)) || (l = o.src.slice(c).match(e), !l) ? !1 : (i || (f = o.push("html_inline", "", 0), f.content = l[0], t(f.content) && o.linkLevel++, n(f.content) && o.linkLevel--), o.pos += l[0].length, !0);
  }, ql;
}
var zl, Nh;
function Fbe() {
  if (Nh) return zl;
  Nh = 1;
  var e = ey(), t = Ye().has, n = Ye().isValidEntityCode, r = Ye().fromCodePoint, s = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, o = /^&([a-z][a-z0-9]{1,31});/i;
  return zl = function(a, l) {
    var u, f, c, p, d = a.pos, m = a.posMax;
    if (a.src.charCodeAt(d) !== 38 || d + 1 >= m) return !1;
    if (u = a.src.charCodeAt(d + 1), u === 35) {
      if (c = a.src.slice(d).match(s), c)
        return l || (f = c[1][0].toLowerCase() === "x" ? parseInt(c[1].slice(1), 16) : parseInt(c[1], 10), p = a.push("text_special", "", 0), p.content = n(f) ? r(f) : r(65533), p.markup = c[0], p.info = "entity"), a.pos += c[0].length, !0;
    } else if (c = a.src.slice(d).match(o), c && t(e, c[1]))
      return l || (p = a.push("text_special", "", 0), p.content = e[c[1]], p.markup = c[0], p.info = "entity"), a.pos += c[0].length, !0;
    return !1;
  }, zl;
}
var Hl, Bh;
function qbe() {
  if (Bh) return Hl;
  Bh = 1;
  function e(t) {
    var n, r, s, o, i, a, l, u, f = {}, c = t.length;
    if (c) {
      var p = 0, d = -2, m = [];
      for (n = 0; n < c; n++)
        if (s = t[n], m.push(0), (t[p].marker !== s.marker || d !== s.token - 1) && (p = n), d = s.token, s.length = s.length || 0, !!s.close) {
          for (f.hasOwnProperty(s.marker) || (f[s.marker] = [-1, -1, -1, -1, -1, -1]), i = f[s.marker][(s.open ? 3 : 0) + s.length % 3], r = p - m[p] - 1, a = r; r > i; r -= m[r] + 1)
            if (o = t[r], o.marker === s.marker && o.open && o.end < 0 && (l = !1, (o.close || s.open) && (o.length + s.length) % 3 === 0 && (o.length % 3 !== 0 || s.length % 3 !== 0) && (l = !0), !l)) {
              u = r > 0 && !t[r - 1].open ? m[r - 1] + 1 : 0, m[n] = n - r + u, m[r] = u, s.open = !1, o.end = n, o.close = !1, a = -1, d = -2;
              break;
            }
          a !== -1 && (f[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = a);
        }
    }
  }
  return Hl = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(s[r].delimiters);
  }, Hl;
}
var jl, Fh;
function zbe() {
  return Fh || (Fh = 1, jl = function(t) {
    var n, r, s = 0, o = t.tokens, i = t.tokens.length;
    for (n = r = 0; n < i; n++)
      o[n].nesting < 0 && s--, o[n].level = s, o[n].nesting > 0 && s++, o[n].type === "text" && n + 1 < i && o[n + 1].type === "text" ? o[n + 1].content = o[n].content + o[n + 1].content : (n !== r && (o[r] = o[n]), r++);
    n !== r && (o.length = r);
  }), jl;
}
var Vl, qh;
function Hbe() {
  if (qh) return Vl;
  qh = 1;
  var e = Gf(), t = Ye().isWhiteSpace, n = Ye().isPunctChar, r = Ye().isMdAsciiPunct;
  function s(o, i, a, l) {
    this.src = o, this.env = a, this.md = i, this.tokens = l, this.tokens_meta = Array(l.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
  }
  return s.prototype.pushPending = function() {
    var o = new e("text", "", 0);
    return o.content = this.pending, o.level = this.pendingLevel, this.tokens.push(o), this.pending = "", o;
  }, s.prototype.push = function(o, i, a) {
    this.pending && this.pushPending();
    var l = new e(o, i, a), u = null;
    return a < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), l.level = this.level, a > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], u = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(l), this.tokens_meta.push(u), l;
  }, s.prototype.scanDelims = function(o, i) {
    var a = o, l, u, f, c, p, d, m, g, C, h = !0, k = !0, y = this.posMax, _ = this.src.charCodeAt(o);
    for (l = o > 0 ? this.src.charCodeAt(o - 1) : 32; a < y && this.src.charCodeAt(a) === _; )
      a++;
    return f = a - o, u = a < y ? this.src.charCodeAt(a) : 32, m = r(l) || n(String.fromCharCode(l)), C = r(u) || n(String.fromCharCode(u)), d = t(l), g = t(u), g ? h = !1 : C && (d || m || (h = !1)), d ? k = !1 : m && (g || C || (k = !1)), i ? (c = h, p = k) : (c = h && (!k || m), p = k && (!h || C)), {
      can_open: c,
      can_close: p,
      length: f
    };
  }, s.prototype.Token = e, Vl = s, Vl;
}
var Ul, zh;
function jbe() {
  if (zh) return Ul;
  zh = 1;
  var e = Kf(), t = [
    ["text", $be()],
    ["linkify", Lbe()],
    ["newline", Ibe()],
    ["escape", Obe()],
    ["backticks", Rbe()],
    ["strikethrough", $h().tokenize],
    ["emphasis", Ih().tokenize],
    ["link", Pbe()],
    ["image", Dbe()],
    ["autolink", Nbe()],
    ["html_inline", Bbe()],
    ["entity", Fbe()]
  ], n = [
    ["balance_pairs", qbe()],
    ["strikethrough", $h().postProcess],
    ["emphasis", Ih().postProcess],
    // rules for pairs separate '**' into its own text tokens, which may be left unused,
    // rule below merges unused segments back with the rest of the text
    ["fragments_join", zbe()]
  ];
  function r() {
    var s;
    for (this.ruler = new e(), s = 0; s < t.length; s++)
      this.ruler.push(t[s][0], t[s][1]);
    for (this.ruler2 = new e(), s = 0; s < n.length; s++)
      this.ruler2.push(n[s][0], n[s][1]);
  }
  return r.prototype.skipToken = function(s) {
    var o, i, a = s.pos, l = this.ruler.getRules(""), u = l.length, f = s.md.options.maxNesting, c = s.cache;
    if (typeof c[a] < "u") {
      s.pos = c[a];
      return;
    }
    if (s.level < f) {
      for (i = 0; i < u; i++)
        if (s.level++, o = l[i](s, !0), s.level--, o) {
          if (a >= s.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    } else
      s.pos = s.posMax;
    o || s.pos++, c[a] = s.pos;
  }, r.prototype.tokenize = function(s) {
    for (var o, i, a, l = this.ruler.getRules(""), u = l.length, f = s.posMax, c = s.md.options.maxNesting; s.pos < f; ) {
      if (a = s.pos, s.level < c) {
        for (i = 0; i < u; i++)
          if (o = l[i](s, !1), o) {
            if (a >= s.pos)
              throw new Error("inline rule didn't increment state.pos");
            break;
          }
      }
      if (o) {
        if (s.pos >= f)
          break;
        continue;
      }
      s.pending += s.src[s.pos++];
    }
    s.pending && s.pushPending();
  }, r.prototype.parse = function(s, o, i, a) {
    var l, u, f, c = new this.State(s, o, i, a);
    for (this.tokenize(c), u = this.ruler2.getRules(""), f = u.length, l = 0; l < f; l++)
      u[l](c);
  }, r.prototype.State = Hbe(), Ul = r, Ul;
}
var Kl, Hh;
function Vbe() {
  return Hh || (Hh = 1, Kl = function(e) {
    var t = {};
    e = e || {}, t.src_Any = ny().source, t.src_Cc = ry().source, t.src_Z = oy().source, t.src_P = Uf().source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    var n = "[><｜]";
    return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
  }), Kl;
}
var Gl, jh;
function Ube() {
  if (jh) return Gl;
  jh = 1;
  function e(y) {
    var _ = Array.prototype.slice.call(arguments, 1);
    return _.forEach(function(S) {
      S && Object.keys(S).forEach(function(x) {
        y[x] = S[x];
      });
    }), y;
  }
  function t(y) {
    return Object.prototype.toString.call(y);
  }
  function n(y) {
    return t(y) === "[object String]";
  }
  function r(y) {
    return t(y) === "[object Object]";
  }
  function s(y) {
    return t(y) === "[object RegExp]";
  }
  function o(y) {
    return t(y) === "[object Function]";
  }
  function i(y) {
    return y.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var a = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
  };
  function l(y) {
    return Object.keys(y || {}).reduce(function(_, S) {
      return _ || a.hasOwnProperty(S);
    }, !1);
  }
  var u = {
    "http:": {
      validate: function(y, _, S) {
        var x = y.slice(_);
        return S.re.http || (S.re.http = new RegExp(
          "^\\/\\/" + S.re.src_auth + S.re.src_host_port_strict + S.re.src_path,
          "i"
        )), S.re.http.test(x) ? x.match(S.re.http)[0].length : 0;
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function(y, _, S) {
        var x = y.slice(_);
        return S.re.no_http || (S.re.no_http = new RegExp(
          "^" + S.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + S.re.src_domain + ")\\.)+" + S.re.src_domain_root + ")" + S.re.src_port + S.re.src_host_terminator + S.re.src_path,
          "i"
        )), S.re.no_http.test(x) ? _ >= 3 && y[_ - 3] === ":" || _ >= 3 && y[_ - 3] === "/" ? 0 : x.match(S.re.no_http)[0].length : 0;
      }
    },
    "mailto:": {
      validate: function(y, _, S) {
        var x = y.slice(_);
        return S.re.mailto || (S.re.mailto = new RegExp(
          "^" + S.re.src_email_name + "@" + S.re.src_host_strict,
          "i"
        )), S.re.mailto.test(x) ? x.match(S.re.mailto)[0].length : 0;
      }
    }
  }, f = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function p(y) {
    y.__index__ = -1, y.__text_cache__ = "";
  }
  function d(y) {
    return function(_, S) {
      var x = _.slice(S);
      return y.test(x) ? x.match(y)[0].length : 0;
    };
  }
  function m() {
    return function(y, _) {
      _.normalize(y);
    };
  }
  function g(y) {
    var _ = y.re = Vbe()(y.__opts__), S = y.__tlds__.slice();
    y.onCompile(), y.__tlds_replaced__ || S.push(f), S.push(_.src_xn), _.src_tlds = S.join("|");
    function x(P) {
      return P.replace("%TLDS%", _.src_tlds);
    }
    _.email_fuzzy = RegExp(x(_.tpl_email_fuzzy), "i"), _.link_fuzzy = RegExp(x(_.tpl_link_fuzzy), "i"), _.link_no_ip_fuzzy = RegExp(x(_.tpl_link_no_ip_fuzzy), "i"), _.host_fuzzy_test = RegExp(x(_.tpl_host_fuzzy_test), "i");
    var T = [];
    y.__compiled__ = {};
    function $(P, N) {
      throw new Error('(LinkifyIt) Invalid schema "' + P + '": ' + N);
    }
    Object.keys(y.__schemas__).forEach(function(P) {
      var N = y.__schemas__[P];
      if (N !== null) {
        var D = { validate: null, link: null };
        if (y.__compiled__[P] = D, r(N)) {
          s(N.validate) ? D.validate = d(N.validate) : o(N.validate) ? D.validate = N.validate : $(P, N), o(N.normalize) ? D.normalize = N.normalize : N.normalize ? $(P, N) : D.normalize = m();
          return;
        }
        if (n(N)) {
          T.push(P);
          return;
        }
        $(P, N);
      }
    }), T.forEach(function(P) {
      y.__compiled__[y.__schemas__[P]] && (y.__compiled__[P].validate = y.__compiled__[y.__schemas__[P]].validate, y.__compiled__[P].normalize = y.__compiled__[y.__schemas__[P]].normalize);
    }), y.__compiled__[""] = { validate: null, normalize: m() };
    var I = Object.keys(y.__compiled__).filter(function(P) {
      return P.length > 0 && y.__compiled__[P];
    }).map(i).join("|");
    y.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + _.src_ZPCc + "))(" + I + ")", "i"), y.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + _.src_ZPCc + "))(" + I + ")", "ig"), y.re.schema_at_start = RegExp("^" + y.re.schema_search.source, "i"), y.re.pretest = RegExp(
      "(" + y.re.schema_test.source + ")|(" + y.re.host_fuzzy_test.source + ")|@",
      "i"
    ), p(y);
  }
  function C(y, _) {
    var S = y.__index__, x = y.__last_index__, T = y.__text_cache__.slice(S, x);
    this.schema = y.__schema__.toLowerCase(), this.index = S + _, this.lastIndex = x + _, this.raw = T, this.text = T, this.url = T;
  }
  function h(y, _) {
    var S = new C(y, _);
    return y.__compiled__[S.schema].normalize(S, y), S;
  }
  function k(y, _) {
    if (!(this instanceof k))
      return new k(y, _);
    _ || l(y) && (_ = y, y = {}), this.__opts__ = e({}, a, _), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = e({}, u, y), this.__compiled__ = {}, this.__tlds__ = c, this.__tlds_replaced__ = !1, this.re = {}, g(this);
  }
  return k.prototype.add = function(_, S) {
    return this.__schemas__[_] = S, g(this), this;
  }, k.prototype.set = function(_) {
    return this.__opts__ = e(this.__opts__, _), this;
  }, k.prototype.test = function(_) {
    if (this.__text_cache__ = _, this.__index__ = -1, !_.length)
      return !1;
    var S, x, T, $, I, P, N, D, oe;
    if (this.re.schema_test.test(_)) {
      for (N = this.re.schema_search, N.lastIndex = 0; (S = N.exec(_)) !== null; )
        if ($ = this.testSchemaAt(_, S[2], N.lastIndex), $) {
          this.__schema__ = S[2], this.__index__ = S.index + S[1].length, this.__last_index__ = S.index + S[0].length + $;
          break;
        }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (D = _.search(this.re.host_fuzzy_test), D >= 0 && (this.__index__ < 0 || D < this.__index__) && (x = _.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (I = x.index + x[1].length, (this.__index__ < 0 || I < this.__index__) && (this.__schema__ = "", this.__index__ = I, this.__last_index__ = x.index + x[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (oe = _.indexOf("@"), oe >= 0 && (T = _.match(this.re.email_fuzzy)) !== null && (I = T.index + T[1].length, P = T.index + T[0].length, (this.__index__ < 0 || I < this.__index__ || I === this.__index__ && P > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = I, this.__last_index__ = P))), this.__index__ >= 0;
  }, k.prototype.pretest = function(_) {
    return this.re.pretest.test(_);
  }, k.prototype.testSchemaAt = function(_, S, x) {
    return this.__compiled__[S.toLowerCase()] ? this.__compiled__[S.toLowerCase()].validate(_, x, this) : 0;
  }, k.prototype.match = function(_) {
    var S = 0, x = [];
    this.__index__ >= 0 && this.__text_cache__ === _ && (x.push(h(this, S)), S = this.__last_index__);
    for (var T = S ? _.slice(S) : _; this.test(T); )
      x.push(h(this, S)), T = T.slice(this.__last_index__), S += this.__last_index__;
    return x.length ? x : null;
  }, k.prototype.matchAtStart = function(_) {
    if (this.__text_cache__ = _, this.__index__ = -1, !_.length) return null;
    var S = this.re.schema_at_start.exec(_);
    if (!S) return null;
    var x = this.testSchemaAt(_, S[2], S[0].length);
    return x ? (this.__schema__ = S[2], this.__index__ = S.index + S[1].length, this.__last_index__ = S.index + S[0].length + x, h(this, 0)) : null;
  }, k.prototype.tlds = function(_, S) {
    return _ = Array.isArray(_) ? _ : [_], S ? (this.__tlds__ = this.__tlds__.concat(_).sort().filter(function(x, T, $) {
      return x !== $[T - 1];
    }).reverse(), g(this), this) : (this.__tlds__ = _.slice(), this.__tlds_replaced__ = !0, g(this), this);
  }, k.prototype.normalize = function(_) {
    _.schema || (_.url = "http://" + _.url), _.schema === "mailto:" && !/^mailto:/i.test(_.url) && (_.url = "mailto:" + _.url);
  }, k.prototype.onCompile = function() {
  }, Gl = k, Gl;
}
const bo = 2147483647, Dn = 36, Wf = 1, ms = 26, Kbe = 38, Gbe = 700, iy = 72, ay = 128, ly = "-", Wbe = /^xn--/, Zbe = /[^\0-\x7F]/, Xbe = /[\x2E\u3002\uFF0E\uFF61]/g, Ybe = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Wl = Dn - Wf, Nn = Math.floor, Zl = String.fromCharCode;
function kr(e) {
  throw new RangeError(Ybe[e]);
}
function Jbe(e, t) {
  const n = [];
  let r = e.length;
  for (; r--; )
    n[r] = t(e[r]);
  return n;
}
function cy(e, t) {
  const n = e.split("@");
  let r = "";
  n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(Xbe, ".");
  const s = e.split("."), o = Jbe(s, t).join(".");
  return r + o;
}
function Zf(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const s = e.charCodeAt(n++);
    if (s >= 55296 && s <= 56319 && n < r) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((s & 1023) << 10) + (o & 1023) + 65536) : (t.push(s), n--);
    } else
      t.push(s);
  }
  return t;
}
const uy = (e) => String.fromCodePoint(...e), Qbe = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : Dn;
}, Vh = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, fy = function(e, t, n) {
  let r = 0;
  for (e = n ? Nn(e / Gbe) : e >> 1, e += Nn(e / t); e > Wl * ms >> 1; r += Dn)
    e = Nn(e / Wl);
  return Nn(r + (Wl + 1) * e / (e + Kbe));
}, Xf = function(e) {
  const t = [], n = e.length;
  let r = 0, s = ay, o = iy, i = e.lastIndexOf(ly);
  i < 0 && (i = 0);
  for (let a = 0; a < i; ++a)
    e.charCodeAt(a) >= 128 && kr("not-basic"), t.push(e.charCodeAt(a));
  for (let a = i > 0 ? i + 1 : 0; a < n; ) {
    const l = r;
    for (let f = 1, c = Dn; ; c += Dn) {
      a >= n && kr("invalid-input");
      const p = Qbe(e.charCodeAt(a++));
      p >= Dn && kr("invalid-input"), p > Nn((bo - r) / f) && kr("overflow"), r += p * f;
      const d = c <= o ? Wf : c >= o + ms ? ms : c - o;
      if (p < d)
        break;
      const m = Dn - d;
      f > Nn(bo / m) && kr("overflow"), f *= m;
    }
    const u = t.length + 1;
    o = fy(r - l, u, l == 0), Nn(r / u) > bo - s && kr("overflow"), s += Nn(r / u), r %= u, t.splice(r++, 0, s);
  }
  return String.fromCodePoint(...t);
}, Yf = function(e) {
  const t = [];
  e = Zf(e);
  const n = e.length;
  let r = ay, s = 0, o = iy;
  for (const l of e)
    l < 128 && t.push(Zl(l));
  const i = t.length;
  let a = i;
  for (i && t.push(ly); a < n; ) {
    let l = bo;
    for (const f of e)
      f >= r && f < l && (l = f);
    const u = a + 1;
    l - r > Nn((bo - s) / u) && kr("overflow"), s += (l - r) * u, r = l;
    for (const f of e)
      if (f < r && ++s > bo && kr("overflow"), f === r) {
        let c = s;
        for (let p = Dn; ; p += Dn) {
          const d = p <= o ? Wf : p >= o + ms ? ms : p - o;
          if (c < d)
            break;
          const m = c - d, g = Dn - d;
          t.push(
            Zl(Vh(d + m % g, 0))
          ), c = Nn(m / g);
        }
        t.push(Zl(Vh(c, 0))), o = fy(s, u, a === i), s = 0, ++a;
      }
    ++s, ++r;
  }
  return t.join("");
}, dy = function(e) {
  return cy(e, function(t) {
    return Wbe.test(t) ? Xf(t.slice(4).toLowerCase()) : t;
  });
}, py = function(e) {
  return cy(e, function(t) {
    return Zbe.test(t) ? "xn--" + Yf(t) : t;
  });
}, e_e = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Zf,
    encode: uy
  },
  decode: Xf,
  encode: Yf,
  toASCII: py,
  toUnicode: dy
}, t_e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Xf,
  default: e_e,
  encode: Yf,
  toASCII: py,
  toUnicode: dy,
  ucs2decode: Zf,
  ucs2encode: uy
}, Symbol.toStringTag, { value: "Module" })), n_e = /* @__PURE__ */ Y3(t_e);
var Xl, Uh;
function r_e() {
  return Uh || (Uh = 1, Xl = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 100
      // Internal protection, recursion limit
    },
    components: {
      core: {},
      block: {},
      inline: {}
    }
  }), Xl;
}
var Yl, Kh;
function o_e() {
  return Kh || (Kh = 1, Yl = {
    options: {
      html: !1,
      // Enable HTML tags in source
      xhtmlOut: !1,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "text"
        ],
        rules2: [
          "balance_pairs",
          "fragments_join"
        ]
      }
    }
  }), Yl;
}
var Jl, Gh;
function s_e() {
  return Gh || (Gh = 1, Jl = {
    options: {
      html: !0,
      // Enable HTML tags in source
      xhtmlOut: !0,
      // Use '/' to close single tags (<br />)
      breaks: !1,
      // Convert '\n' in paragraphs into <br>
      langPrefix: "language-",
      // CSS language prefix for fenced blocks
      linkify: !1,
      // autoconvert URL-like texts to links
      // Enable some language-neutral replacements + quotes beautification
      typographer: !1,
      // Double + single quotes replacement pairs, when typographer enabled,
      // and smartquotes on. Could be either a String or an Array.
      //
      // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
      // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
      quotes: "“”‘’",
      /* “”‘’ */
      // Highlighter function. Should return escaped HTML,
      // or '' if the source string is not changed and should be escaped externaly.
      // If result starts with <pre... internal wrapper is skipped.
      //
      // function (/*str, lang*/) { return ''; }
      //
      highlight: null,
      maxNesting: 20
      // Internal protection, recursion limit
    },
    components: {
      core: {
        rules: [
          "normalize",
          "block",
          "inline",
          "text_join"
        ]
      },
      block: {
        rules: [
          "blockquote",
          "code",
          "fence",
          "heading",
          "hr",
          "html_block",
          "lheading",
          "list",
          "reference",
          "paragraph"
        ]
      },
      inline: {
        rules: [
          "autolink",
          "backticks",
          "emphasis",
          "entity",
          "escape",
          "html_inline",
          "image",
          "link",
          "newline",
          "text"
        ],
        rules2: [
          "balance_pairs",
          "emphasis",
          "fragments_join"
        ]
      }
    }
  }), Jl;
}
var Ql, Wh;
function i_e() {
  if (Wh) return Ql;
  Wh = 1;
  var e = Ye(), t = sbe(), n = ibe(), r = gbe(), s = Mbe(), o = jbe(), i = Ube(), a = ty(), l = n_e, u = {
    default: r_e(),
    zero: o_e(),
    commonmark: s_e()
  }, f = /^(vbscript|javascript|file|data):/, c = /^data:image\/(gif|png|jpeg|webp);/;
  function p(h) {
    var k = h.trim().toLowerCase();
    return f.test(k) ? !!c.test(k) : !0;
  }
  var d = ["http:", "https:", "mailto:"];
  function m(h) {
    var k = a.parse(h, !0);
    if (k.hostname && (!k.protocol || d.indexOf(k.protocol) >= 0))
      try {
        k.hostname = l.toASCII(k.hostname);
      } catch {
      }
    return a.encode(a.format(k));
  }
  function g(h) {
    var k = a.parse(h, !0);
    if (k.hostname && (!k.protocol || d.indexOf(k.protocol) >= 0))
      try {
        k.hostname = l.toUnicode(k.hostname);
      } catch {
      }
    return a.decode(a.format(k), a.decode.defaultChars + "%");
  }
  function C(h, k) {
    if (!(this instanceof C))
      return new C(h, k);
    k || e.isString(h) || (k = h || {}, h = "default"), this.inline = new o(), this.block = new s(), this.core = new r(), this.renderer = new n(), this.linkify = new i(), this.validateLink = p, this.normalizeLink = m, this.normalizeLinkText = g, this.utils = e, this.helpers = e.assign({}, t), this.options = {}, this.configure(h), k && this.set(k);
  }
  return C.prototype.set = function(h) {
    return e.assign(this.options, h), this;
  }, C.prototype.configure = function(h) {
    var k = this, y;
    if (e.isString(h) && (y = h, h = u[y], !h))
      throw new Error('Wrong `markdown-it` preset "' + y + '", check name');
    if (!h)
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    return h.options && k.set(h.options), h.components && Object.keys(h.components).forEach(function(_) {
      h.components[_].rules && k[_].ruler.enableOnly(h.components[_].rules), h.components[_].rules2 && k[_].ruler2.enableOnly(h.components[_].rules2);
    }), this;
  }, C.prototype.enable = function(h, k) {
    var y = [];
    Array.isArray(h) || (h = [h]), ["core", "block", "inline"].forEach(function(S) {
      y = y.concat(this[S].ruler.enable(h, !0));
    }, this), y = y.concat(this.inline.ruler2.enable(h, !0));
    var _ = h.filter(function(S) {
      return y.indexOf(S) < 0;
    });
    if (_.length && !k)
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + _);
    return this;
  }, C.prototype.disable = function(h, k) {
    var y = [];
    Array.isArray(h) || (h = [h]), ["core", "block", "inline"].forEach(function(S) {
      y = y.concat(this[S].ruler.disable(h, !0));
    }, this), y = y.concat(this.inline.ruler2.disable(h, !0));
    var _ = h.filter(function(S) {
      return y.indexOf(S) < 0;
    });
    if (_.length && !k)
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + _);
    return this;
  }, C.prototype.use = function(h) {
    var k = [this].concat(Array.prototype.slice.call(arguments, 1));
    return h.apply(h, k), this;
  }, C.prototype.parse = function(h, k) {
    if (typeof h != "string")
      throw new Error("Input data should be a String");
    var y = new this.core.State(h, this, k);
    return this.core.process(y), y.tokens;
  }, C.prototype.render = function(h, k) {
    return k = k || {}, this.renderer.render(this.parse(h, k), this.options, k);
  }, C.prototype.parseInline = function(h, k) {
    var y = new this.core.State(h, this, k);
    return y.inlineMode = !0, this.core.process(y), y.tokens;
  }, C.prototype.renderInline = function(h, k) {
    return k = k || {}, this.renderer.render(this.parseInline(h, k), this.options, k);
  }, Ql = C, Ql;
}
var ec, Zh;
function a_e() {
  return Zh || (Zh = 1, ec = i_e()), ec;
}
var l_e = a_e();
const c_e = /* @__PURE__ */ hf(l_e);
var tc, Xh;
function u_e() {
  if (Xh) return tc;
  Xh = 1;
  function e(r, s) {
    var o, i, a = r.attrs[r.attrIndex("href")][1];
    for (o = 0; o < s.length; ++o) {
      if (i = s[o], typeof i.matcher == "function") {
        if (i.matcher(a, i))
          return i;
        continue;
      }
      return i;
    }
  }
  function t(r, s, o) {
    Object.keys(o).forEach(function(i) {
      var a, l = o[i];
      i === "className" && (i = "class"), a = s[r].attrIndex(i), a < 0 ? s[r].attrPush([i, l]) : s[r].attrs[a][1] = l;
    });
  }
  function n(r, s) {
    s ? s = Array.isArray(s) ? s : [s] : s = [], Object.freeze(s);
    var o = r.renderer.rules.link_open || this.defaultRender;
    r.renderer.rules.link_open = function(i, a, l, u, f) {
      var c = e(i[a], s), p = c && c.attrs;
      return p && t(a, i, p), o(i, a, l, u, f);
    };
  }
  return n.defaultRender = function(r, s, o, i, a) {
    return a.renderToken(r, s, o);
  }, tc = n, tc;
}
var f_e = u_e();
const d_e = /* @__PURE__ */ hf(f_e);
var Ws = { exports: {} }, ut = {}, Zs = { exports: {} }, Hr = {}, Yh;
function hy() {
  if (Yh) return Hr;
  Yh = 1;
  function e() {
    var o = {};
    return o["align-content"] = !1, o["align-items"] = !1, o["align-self"] = !1, o["alignment-adjust"] = !1, o["alignment-baseline"] = !1, o.all = !1, o["anchor-point"] = !1, o.animation = !1, o["animation-delay"] = !1, o["animation-direction"] = !1, o["animation-duration"] = !1, o["animation-fill-mode"] = !1, o["animation-iteration-count"] = !1, o["animation-name"] = !1, o["animation-play-state"] = !1, o["animation-timing-function"] = !1, o.azimuth = !1, o["backface-visibility"] = !1, o.background = !0, o["background-attachment"] = !0, o["background-clip"] = !0, o["background-color"] = !0, o["background-image"] = !0, o["background-origin"] = !0, o["background-position"] = !0, o["background-repeat"] = !0, o["background-size"] = !0, o["baseline-shift"] = !1, o.binding = !1, o.bleed = !1, o["bookmark-label"] = !1, o["bookmark-level"] = !1, o["bookmark-state"] = !1, o.border = !0, o["border-bottom"] = !0, o["border-bottom-color"] = !0, o["border-bottom-left-radius"] = !0, o["border-bottom-right-radius"] = !0, o["border-bottom-style"] = !0, o["border-bottom-width"] = !0, o["border-collapse"] = !0, o["border-color"] = !0, o["border-image"] = !0, o["border-image-outset"] = !0, o["border-image-repeat"] = !0, o["border-image-slice"] = !0, o["border-image-source"] = !0, o["border-image-width"] = !0, o["border-left"] = !0, o["border-left-color"] = !0, o["border-left-style"] = !0, o["border-left-width"] = !0, o["border-radius"] = !0, o["border-right"] = !0, o["border-right-color"] = !0, o["border-right-style"] = !0, o["border-right-width"] = !0, o["border-spacing"] = !0, o["border-style"] = !0, o["border-top"] = !0, o["border-top-color"] = !0, o["border-top-left-radius"] = !0, o["border-top-right-radius"] = !0, o["border-top-style"] = !0, o["border-top-width"] = !0, o["border-width"] = !0, o.bottom = !1, o["box-decoration-break"] = !0, o["box-shadow"] = !0, o["box-sizing"] = !0, o["box-snap"] = !0, o["box-suppress"] = !0, o["break-after"] = !0, o["break-before"] = !0, o["break-inside"] = !0, o["caption-side"] = !1, o.chains = !1, o.clear = !0, o.clip = !1, o["clip-path"] = !1, o["clip-rule"] = !1, o.color = !0, o["color-interpolation-filters"] = !0, o["column-count"] = !1, o["column-fill"] = !1, o["column-gap"] = !1, o["column-rule"] = !1, o["column-rule-color"] = !1, o["column-rule-style"] = !1, o["column-rule-width"] = !1, o["column-span"] = !1, o["column-width"] = !1, o.columns = !1, o.contain = !1, o.content = !1, o["counter-increment"] = !1, o["counter-reset"] = !1, o["counter-set"] = !1, o.crop = !1, o.cue = !1, o["cue-after"] = !1, o["cue-before"] = !1, o.cursor = !1, o.direction = !1, o.display = !0, o["display-inside"] = !0, o["display-list"] = !0, o["display-outside"] = !0, o["dominant-baseline"] = !1, o.elevation = !1, o["empty-cells"] = !1, o.filter = !1, o.flex = !1, o["flex-basis"] = !1, o["flex-direction"] = !1, o["flex-flow"] = !1, o["flex-grow"] = !1, o["flex-shrink"] = !1, o["flex-wrap"] = !1, o.float = !1, o["float-offset"] = !1, o["flood-color"] = !1, o["flood-opacity"] = !1, o["flow-from"] = !1, o["flow-into"] = !1, o.font = !0, o["font-family"] = !0, o["font-feature-settings"] = !0, o["font-kerning"] = !0, o["font-language-override"] = !0, o["font-size"] = !0, o["font-size-adjust"] = !0, o["font-stretch"] = !0, o["font-style"] = !0, o["font-synthesis"] = !0, o["font-variant"] = !0, o["font-variant-alternates"] = !0, o["font-variant-caps"] = !0, o["font-variant-east-asian"] = !0, o["font-variant-ligatures"] = !0, o["font-variant-numeric"] = !0, o["font-variant-position"] = !0, o["font-weight"] = !0, o.grid = !1, o["grid-area"] = !1, o["grid-auto-columns"] = !1, o["grid-auto-flow"] = !1, o["grid-auto-rows"] = !1, o["grid-column"] = !1, o["grid-column-end"] = !1, o["grid-column-start"] = !1, o["grid-row"] = !1, o["grid-row-end"] = !1, o["grid-row-start"] = !1, o["grid-template"] = !1, o["grid-template-areas"] = !1, o["grid-template-columns"] = !1, o["grid-template-rows"] = !1, o["hanging-punctuation"] = !1, o.height = !0, o.hyphens = !1, o.icon = !1, o["image-orientation"] = !1, o["image-resolution"] = !1, o["ime-mode"] = !1, o["initial-letters"] = !1, o["inline-box-align"] = !1, o["justify-content"] = !1, o["justify-items"] = !1, o["justify-self"] = !1, o.left = !1, o["letter-spacing"] = !0, o["lighting-color"] = !0, o["line-box-contain"] = !1, o["line-break"] = !1, o["line-grid"] = !1, o["line-height"] = !1, o["line-snap"] = !1, o["line-stacking"] = !1, o["line-stacking-ruby"] = !1, o["line-stacking-shift"] = !1, o["line-stacking-strategy"] = !1, o["list-style"] = !0, o["list-style-image"] = !0, o["list-style-position"] = !0, o["list-style-type"] = !0, o.margin = !0, o["margin-bottom"] = !0, o["margin-left"] = !0, o["margin-right"] = !0, o["margin-top"] = !0, o["marker-offset"] = !1, o["marker-side"] = !1, o.marks = !1, o.mask = !1, o["mask-box"] = !1, o["mask-box-outset"] = !1, o["mask-box-repeat"] = !1, o["mask-box-slice"] = !1, o["mask-box-source"] = !1, o["mask-box-width"] = !1, o["mask-clip"] = !1, o["mask-image"] = !1, o["mask-origin"] = !1, o["mask-position"] = !1, o["mask-repeat"] = !1, o["mask-size"] = !1, o["mask-source-type"] = !1, o["mask-type"] = !1, o["max-height"] = !0, o["max-lines"] = !1, o["max-width"] = !0, o["min-height"] = !0, o["min-width"] = !0, o["move-to"] = !1, o["nav-down"] = !1, o["nav-index"] = !1, o["nav-left"] = !1, o["nav-right"] = !1, o["nav-up"] = !1, o["object-fit"] = !1, o["object-position"] = !1, o.opacity = !1, o.order = !1, o.orphans = !1, o.outline = !1, o["outline-color"] = !1, o["outline-offset"] = !1, o["outline-style"] = !1, o["outline-width"] = !1, o.overflow = !1, o["overflow-wrap"] = !1, o["overflow-x"] = !1, o["overflow-y"] = !1, o.padding = !0, o["padding-bottom"] = !0, o["padding-left"] = !0, o["padding-right"] = !0, o["padding-top"] = !0, o.page = !1, o["page-break-after"] = !1, o["page-break-before"] = !1, o["page-break-inside"] = !1, o["page-policy"] = !1, o.pause = !1, o["pause-after"] = !1, o["pause-before"] = !1, o.perspective = !1, o["perspective-origin"] = !1, o.pitch = !1, o["pitch-range"] = !1, o["play-during"] = !1, o.position = !1, o["presentation-level"] = !1, o.quotes = !1, o["region-fragment"] = !1, o.resize = !1, o.rest = !1, o["rest-after"] = !1, o["rest-before"] = !1, o.richness = !1, o.right = !1, o.rotation = !1, o["rotation-point"] = !1, o["ruby-align"] = !1, o["ruby-merge"] = !1, o["ruby-position"] = !1, o["shape-image-threshold"] = !1, o["shape-outside"] = !1, o["shape-margin"] = !1, o.size = !1, o.speak = !1, o["speak-as"] = !1, o["speak-header"] = !1, o["speak-numeral"] = !1, o["speak-punctuation"] = !1, o["speech-rate"] = !1, o.stress = !1, o["string-set"] = !1, o["tab-size"] = !1, o["table-layout"] = !1, o["text-align"] = !0, o["text-align-last"] = !0, o["text-combine-upright"] = !0, o["text-decoration"] = !0, o["text-decoration-color"] = !0, o["text-decoration-line"] = !0, o["text-decoration-skip"] = !0, o["text-decoration-style"] = !0, o["text-emphasis"] = !0, o["text-emphasis-color"] = !0, o["text-emphasis-position"] = !0, o["text-emphasis-style"] = !0, o["text-height"] = !0, o["text-indent"] = !0, o["text-justify"] = !0, o["text-orientation"] = !0, o["text-overflow"] = !0, o["text-shadow"] = !0, o["text-space-collapse"] = !0, o["text-transform"] = !0, o["text-underline-position"] = !0, o["text-wrap"] = !0, o.top = !1, o.transform = !1, o["transform-origin"] = !1, o["transform-style"] = !1, o.transition = !1, o["transition-delay"] = !1, o["transition-duration"] = !1, o["transition-property"] = !1, o["transition-timing-function"] = !1, o["unicode-bidi"] = !1, o["vertical-align"] = !1, o.visibility = !1, o["voice-balance"] = !1, o["voice-duration"] = !1, o["voice-family"] = !1, o["voice-pitch"] = !1, o["voice-range"] = !1, o["voice-rate"] = !1, o["voice-stress"] = !1, o["voice-volume"] = !1, o.volume = !1, o["white-space"] = !1, o.widows = !1, o.width = !0, o["will-change"] = !1, o["word-break"] = !0, o["word-spacing"] = !0, o["word-wrap"] = !0, o["wrap-flow"] = !1, o["wrap-through"] = !1, o["writing-mode"] = !1, o["z-index"] = !1, o;
  }
  function t(o, i, a) {
  }
  function n(o, i, a) {
  }
  var r = /javascript\s*\:/img;
  function s(o, i) {
    return r.test(i) ? "" : i;
  }
  return Hr.whiteList = e(), Hr.getDefaultWhiteList = e, Hr.onAttr = t, Hr.onIgnoreAttr = n, Hr.safeAttrValue = s, Hr;
}
var nc, Jh;
function gy() {
  return Jh || (Jh = 1, nc = {
    indexOf: function(e, t) {
      var n, r;
      if (Array.prototype.indexOf)
        return e.indexOf(t);
      for (n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
          return n;
      return -1;
    },
    forEach: function(e, t, n) {
      var r, s;
      if (Array.prototype.forEach)
        return e.forEach(t, n);
      for (r = 0, s = e.length; r < s; r++)
        t.call(n, e[r], r, e);
    },
    trim: function(e) {
      return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
    },
    trimRight: function(e) {
      return String.prototype.trimRight ? e.trimRight() : e.replace(/(\s*$)/g, "");
    }
  }), nc;
}
var rc, Qh;
function p_e() {
  if (Qh) return rc;
  Qh = 1;
  var e = gy();
  function t(n, r) {
    n = e.trimRight(n), n[n.length - 1] !== ";" && (n += ";");
    var s = n.length, o = !1, i = 0, a = 0, l = "";
    function u() {
      if (!o) {
        var p = e.trim(n.slice(i, a)), d = p.indexOf(":");
        if (d !== -1) {
          var m = e.trim(p.slice(0, d)), g = e.trim(p.slice(d + 1));
          if (m) {
            var C = r(i, l.length, m, g, p);
            C && (l += C + "; ");
          }
        }
      }
      i = a + 1;
    }
    for (; a < s; a++) {
      var f = n[a];
      if (f === "/" && n[a + 1] === "*") {
        var c = n.indexOf("*/", a + 2);
        if (c === -1) break;
        a = c + 1, i = a + 1, o = !1;
      } else f === "(" ? o = !0 : f === ")" ? o = !1 : f === ";" ? o || u() : f === `
` && u();
    }
    return e.trim(l);
  }
  return rc = t, rc;
}
var oc, e2;
function h_e() {
  if (e2) return oc;
  e2 = 1;
  var e = hy(), t = p_e();
  gy();
  function n(o) {
    return o == null;
  }
  function r(o) {
    var i = {};
    for (var a in o)
      i[a] = o[a];
    return i;
  }
  function s(o) {
    o = r(o || {}), o.whiteList = o.whiteList || e.whiteList, o.onAttr = o.onAttr || e.onAttr, o.onIgnoreAttr = o.onIgnoreAttr || e.onIgnoreAttr, o.safeAttrValue = o.safeAttrValue || e.safeAttrValue, this.options = o;
  }
  return s.prototype.process = function(o) {
    if (o = o || "", o = o.toString(), !o) return "";
    var i = this, a = i.options, l = a.whiteList, u = a.onAttr, f = a.onIgnoreAttr, c = a.safeAttrValue, p = t(o, function(d, m, g, C, h) {
      var k = l[g], y = !1;
      if (k === !0 ? y = k : typeof k == "function" ? y = k(C) : k instanceof RegExp && (y = k.test(C)), y !== !0 && (y = !1), C = c(g, C), !!C) {
        var _ = {
          position: m,
          sourcePosition: d,
          source: h,
          isWhite: y
        };
        if (y) {
          var S = u(g, C, _);
          return n(S) ? g + ":" + C : S;
        } else {
          var S = f(g, C, _);
          if (!n(S))
            return S;
        }
      }
    });
    return p;
  }, oc = s, oc;
}
var t2;
function Bu() {
  return t2 || (t2 = 1, function(e, t) {
    var n = hy(), r = h_e();
    function s(i, a) {
      var l = new r(a);
      return l.process(i);
    }
    t = e.exports = s, t.FilterCSS = r;
    for (var o in n) t[o] = n[o];
    typeof window < "u" && (window.filterCSS = e.exports);
  }(Zs, Zs.exports)), Zs.exports;
}
var sc, n2;
function Jf() {
  return n2 || (n2 = 1, sc = {
    indexOf: function(e, t) {
      var n, r;
      if (Array.prototype.indexOf)
        return e.indexOf(t);
      for (n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
          return n;
      return -1;
    },
    forEach: function(e, t, n) {
      var r, s;
      if (Array.prototype.forEach)
        return e.forEach(t, n);
      for (r = 0, s = e.length; r < s; r++)
        t.call(n, e[r], r, e);
    },
    trim: function(e) {
      return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function(e) {
      var t = /\s|\n|\t/, n = t.exec(e);
      return n ? n.index : -1;
    }
  }), sc;
}
var r2;
function my() {
  if (r2) return ut;
  r2 = 1;
  var e = Bu().FilterCSS, t = Bu().getDefaultWhiteList, n = Jf();
  function r() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src"
      ],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      figcaption: [],
      figure: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height", "loading"],
      ins: ["datetime"],
      kbd: [],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      summary: [],
      sup: [],
      strong: [],
      strike: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "height",
        "width"
      ]
    };
  }
  var s = new e();
  function o(q, z, H) {
  }
  function i(q, z, H) {
  }
  function a(q, z, H) {
  }
  function l(q, z, H) {
  }
  function u(q) {
    return q.replace(c, "&lt;").replace(p, "&gt;");
  }
  function f(q, z, H, Q) {
    if (H = P(H), z === "href" || z === "src") {
      if (H = n.trim(H), H === "#") return "#";
      if (!(H.substr(0, 7) === "http://" || H.substr(0, 8) === "https://" || H.substr(0, 7) === "mailto:" || H.substr(0, 4) === "tel:" || H.substr(0, 11) === "data:image/" || H.substr(0, 6) === "ftp://" || H.substr(0, 2) === "./" || H.substr(0, 3) === "../" || H[0] === "#" || H[0] === "/"))
        return "";
    } else if (z === "background") {
      if (k.lastIndex = 0, k.test(H))
        return "";
    } else if (z === "style") {
      if (y.lastIndex = 0, y.test(H) || (_.lastIndex = 0, _.test(H) && (k.lastIndex = 0, k.test(H))))
        return "";
      Q !== !1 && (Q = Q || s, H = Q.process(H));
    }
    return H = N(H), H;
  }
  var c = /</g, p = />/g, d = /"/g, m = /&quot;/g, g = /&#([a-zA-Z0-9]*);?/gim, C = /&colon;?/gim, h = /&newline;?/gim, k = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, y = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, _ = /u\s*r\s*l\s*\(.*/gi;
  function S(q) {
    return q.replace(d, "&quot;");
  }
  function x(q) {
    return q.replace(m, '"');
  }
  function T(q) {
    return q.replace(g, function(H, Q) {
      return Q[0] === "x" || Q[0] === "X" ? String.fromCharCode(parseInt(Q.substr(1), 16)) : String.fromCharCode(parseInt(Q, 10));
    });
  }
  function $(q) {
    return q.replace(C, ":").replace(h, " ");
  }
  function I(q) {
    for (var z = "", H = 0, Q = q.length; H < Q; H++)
      z += q.charCodeAt(H) < 32 ? " " : q.charAt(H);
    return n.trim(z);
  }
  function P(q) {
    return q = x(q), q = T(q), q = $(q), q = I(q), q;
  }
  function N(q) {
    return q = S(q), q = u(q), q;
  }
  function D() {
    return "";
  }
  function oe(q, z) {
    typeof z != "function" && (z = function() {
    });
    var H = !Array.isArray(q);
    function Q(ve) {
      return H ? !0 : n.indexOf(q, ve) !== -1;
    }
    var te = [], Ae = !1;
    return {
      onIgnoreTag: function(ve, Ne, Je) {
        if (Q(ve))
          if (Je.isClosing) {
            var nt = "[/removed]", ft = Je.position + nt.length;
            return te.push([
              Ae !== !1 ? Ae : Je.position,
              ft
            ]), Ae = !1, nt;
          } else
            return Ae || (Ae = Je.position), "[removed]";
        else
          return z(ve, Ne, Je);
      },
      remove: function(ve) {
        var Ne = "", Je = 0;
        return n.forEach(te, function(nt) {
          Ne += ve.slice(Je, nt[0]), Je = nt[1];
        }), Ne += ve.slice(Je), Ne;
      }
    };
  }
  function F(q) {
    for (var z = "", H = 0; H < q.length; ) {
      var Q = q.indexOf("<!--", H);
      if (Q === -1) {
        z += q.slice(H);
        break;
      }
      z += q.slice(H, Q);
      var te = q.indexOf("-->", Q);
      if (te === -1)
        break;
      H = te + 3;
    }
    return z;
  }
  function U(q) {
    var z = q.split("");
    return z = z.filter(function(H) {
      var Q = H.charCodeAt(0);
      return Q === 127 ? !1 : Q <= 31 ? Q === 10 || Q === 13 : !0;
    }), z.join("");
  }
  return ut.whiteList = r(), ut.getDefaultWhiteList = r, ut.onTag = o, ut.onIgnoreTag = i, ut.onTagAttr = a, ut.onIgnoreTagAttr = l, ut.safeAttrValue = f, ut.escapeHtml = u, ut.escapeQuote = S, ut.unescapeQuote = x, ut.escapeHtmlEntities = T, ut.escapeDangerHtml5Entities = $, ut.clearNonPrintableCharacter = I, ut.friendlyAttrValue = P, ut.escapeAttrValue = N, ut.onIgnoreTagStripAll = D, ut.StripTagBody = oe, ut.stripCommentTag = F, ut.stripBlankChar = U, ut.attributeWrapSign = '"', ut.cssFilter = s, ut.getDefaultCSSWhiteList = t, ut;
}
var Xs = {}, o2;
function vy() {
  if (o2) return Xs;
  o2 = 1;
  var e = Jf();
  function t(c) {
    var p = e.spaceIndex(c), d;
    return p === -1 ? d = c.slice(1, -1) : d = c.slice(1, p + 1), d = e.trim(d).toLowerCase(), d.slice(0, 1) === "/" && (d = d.slice(1)), d.slice(-1) === "/" && (d = d.slice(0, -1)), d;
  }
  function n(c) {
    return c.slice(0, 2) === "</";
  }
  function r(c, p, d) {
    var m = "", g = 0, C = !1, h = !1, k = 0, y = c.length, _ = "", S = "";
    e: for (k = 0; k < y; k++) {
      var x = c.charAt(k);
      if (C === !1) {
        if (x === "<") {
          C = k;
          continue;
        }
      } else if (h === !1) {
        if (x === "<") {
          m += d(c.slice(g, k)), C = k, g = k;
          continue;
        }
        if (x === ">" || k === y - 1) {
          m += d(c.slice(g, C)), S = c.slice(C, k + 1), _ = t(S), m += p(
            C,
            m.length,
            _,
            S,
            n(S)
          ), g = k + 1, C = !1;
          continue;
        }
        if (x === '"' || x === "'")
          for (var T = 1, $ = c.charAt(k - T); $.trim() === "" || $ === "="; ) {
            if ($ === "=") {
              h = x;
              continue e;
            }
            $ = c.charAt(k - ++T);
          }
      } else if (x === h) {
        h = !1;
        continue;
      }
    }
    return g < y && (m += d(c.substr(g))), m;
  }
  var s = /[^a-zA-Z0-9\\_:.-]/gim;
  function o(c, p) {
    var d = 0, m = 0, g = [], C = !1, h = c.length;
    function k(T, $) {
      if (T = e.trim(T), T = T.replace(s, "").toLowerCase(), !(T.length < 1)) {
        var I = p(T, $ || "");
        I && g.push(I);
      }
    }
    for (var y = 0; y < h; y++) {
      var _ = c.charAt(y), S, x;
      if (C === !1 && _ === "=") {
        C = c.slice(d, y), d = y + 1, m = c.charAt(d) === '"' || c.charAt(d) === "'" ? d : a(c, y + 1);
        continue;
      }
      if (C !== !1 && y === m) {
        if (x = c.indexOf(_, y + 1), x === -1)
          break;
        S = e.trim(c.slice(m + 1, x)), k(C, S), C = !1, y = x, d = y + 1;
        continue;
      }
      if (/\s|\n|\t/.test(_))
        if (c = c.replace(/\s|\n|\t/g, " "), C === !1)
          if (x = i(c, y), x === -1) {
            S = e.trim(c.slice(d, y)), k(S), C = !1, d = y + 1;
            continue;
          } else {
            y = x - 1;
            continue;
          }
        else if (x = l(c, y - 1), x === -1) {
          S = e.trim(c.slice(d, y)), S = f(S), k(C, S), C = !1, d = y + 1;
          continue;
        } else
          continue;
    }
    return d < c.length && (C === !1 ? k(c.slice(d)) : k(C, f(e.trim(c.slice(d))))), e.trim(g.join(" "));
  }
  function i(c, p) {
    for (; p < c.length; p++) {
      var d = c[p];
      if (d !== " ")
        return d === "=" ? p : -1;
    }
  }
  function a(c, p) {
    for (; p < c.length; p++) {
      var d = c[p];
      if (d !== " ")
        return d === "'" || d === '"' ? p : -1;
    }
  }
  function l(c, p) {
    for (; p > 0; p--) {
      var d = c[p];
      if (d !== " ")
        return d === "=" ? p : -1;
    }
  }
  function u(c) {
    return c[0] === '"' && c[c.length - 1] === '"' || c[0] === "'" && c[c.length - 1] === "'";
  }
  function f(c) {
    return u(c) ? c.substr(1, c.length - 2) : c;
  }
  return Xs.parseTag = r, Xs.parseAttr = o, Xs;
}
var ic, s2;
function g_e() {
  if (s2) return ic;
  s2 = 1;
  var e = Bu().FilterCSS, t = my(), n = vy(), r = n.parseTag, s = n.parseAttr, o = Jf();
  function i(c) {
    return c == null;
  }
  function a(c) {
    var p = o.spaceIndex(c);
    if (p === -1)
      return {
        html: "",
        closing: c[c.length - 2] === "/"
      };
    c = o.trim(c.slice(p + 1, -1));
    var d = c[c.length - 1] === "/";
    return d && (c = o.trim(c.slice(0, -1))), {
      html: c,
      closing: d
    };
  }
  function l(c) {
    var p = {};
    for (var d in c)
      p[d] = c[d];
    return p;
  }
  function u(c) {
    var p = {};
    for (var d in c)
      Array.isArray(c[d]) ? p[d.toLowerCase()] = c[d].map(function(m) {
        return m.toLowerCase();
      }) : p[d.toLowerCase()] = c[d];
    return p;
  }
  function f(c) {
    c = l(c || {}), c.stripIgnoreTag && (c.onIgnoreTag && console.error(
      'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
    ), c.onIgnoreTag = t.onIgnoreTagStripAll), c.whiteList || c.allowList ? c.whiteList = u(c.whiteList || c.allowList) : c.whiteList = t.whiteList, this.attributeWrapSign = c.singleQuotedAttributeValue === !0 ? "'" : t.attributeWrapSign, c.onTag = c.onTag || t.onTag, c.onTagAttr = c.onTagAttr || t.onTagAttr, c.onIgnoreTag = c.onIgnoreTag || t.onIgnoreTag, c.onIgnoreTagAttr = c.onIgnoreTagAttr || t.onIgnoreTagAttr, c.safeAttrValue = c.safeAttrValue || t.safeAttrValue, c.escapeHtml = c.escapeHtml || t.escapeHtml, this.options = c, c.css === !1 ? this.cssFilter = !1 : (c.css = c.css || {}, this.cssFilter = new e(c.css));
  }
  return f.prototype.process = function(c) {
    if (c = c || "", c = c.toString(), !c) return "";
    var p = this, d = p.options, m = d.whiteList, g = d.onTag, C = d.onIgnoreTag, h = d.onTagAttr, k = d.onIgnoreTagAttr, y = d.safeAttrValue, _ = d.escapeHtml, S = p.attributeWrapSign, x = p.cssFilter;
    d.stripBlankChar && (c = t.stripBlankChar(c)), d.allowCommentTag || (c = t.stripCommentTag(c));
    var T = !1;
    d.stripIgnoreTagBody && (T = t.StripTagBody(
      d.stripIgnoreTagBody,
      C
    ), C = T.onIgnoreTag);
    var $ = r(
      c,
      function(I, P, N, D, oe) {
        var F = {
          sourcePosition: I,
          position: P,
          isClosing: oe,
          isWhite: Object.prototype.hasOwnProperty.call(m, N)
        }, U = g(N, D, F);
        if (!i(U)) return U;
        if (F.isWhite) {
          if (F.isClosing)
            return "</" + N + ">";
          var q = a(D), z = m[N], H = s(q.html, function(Q, te) {
            var Ae = o.indexOf(z, Q) !== -1, ve = h(N, Q, te, Ae);
            return i(ve) ? Ae ? (te = y(N, Q, te, x), te ? Q + "=" + S + te + S : Q) : (ve = k(N, Q, te, Ae), i(ve) ? void 0 : ve) : ve;
          });
          return D = "<" + N, H && (D += " " + H), q.closing && (D += " /"), D += ">", D;
        } else
          return U = C(N, D, F), i(U) ? _(D) : U;
      },
      _
    );
    return T && ($ = T.remove($)), $;
  }, ic = f, ic;
}
var i2;
function m_e() {
  return i2 || (i2 = 1, function(e, t) {
    var n = my(), r = vy(), s = g_e();
    function o(a, l) {
      var u = new s(l);
      return u.process(a);
    }
    t = e.exports = o, t.filterXSS = o, t.FilterXSS = s, function() {
      for (var a in n)
        t[a] = n[a];
      for (var l in r)
        t[l] = r[l];
    }(), typeof window < "u" && (window.filterXSS = e.exports);
    function i() {
      return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
    }
    i() && (self.filterXSS = e.exports);
  }(Ws, Ws.exports)), Ws.exports;
}
m_e();
({
  // @ts-expect-error TS doesn't understand this but it works
  ...Lp.props
  // <a> element "props" are passed as attributes
});
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function Qo(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qo = function(t) {
    return typeof t;
  } : Qo = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qo(e);
}
function v_e(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function b_e(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function __e(e, t, n) {
  return t && b_e(e.prototype, t), e;
}
function y_e(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function sn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    }))), r.forEach(function(s) {
      y_e(e, s, n[s]);
    });
  }
  return e;
}
function w_e(e, t) {
  return k_e(e) || C_e(e, t) || x_e();
}
function k_e(e) {
  if (Array.isArray(e)) return e;
}
function C_e(e, t) {
  var n = [], r = !0, s = !1, o = void 0;
  try {
    for (var i = e[Symbol.iterator](), a; !(r = (a = i.next()).done) && (n.push(a.value), !(t && n.length === t)); r = !0)
      ;
  } catch (l) {
    s = !0, o = l;
  } finally {
    try {
      !r && i.return != null && i.return();
    } finally {
      if (s) throw o;
    }
  }
  return n;
}
function x_e() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
var a2 = function() {
}, Qf = {}, by = {}, E_e = null, _y = {
  mark: a2,
  measure: a2
};
try {
  typeof window < "u" && (Qf = window), typeof document < "u" && (by = document), typeof MutationObserver < "u" && (E_e = MutationObserver), typeof performance < "u" && (_y = performance);
} catch {
}
var S_e = Qf.navigator || {}, l2 = S_e.userAgent, c2 = l2 === void 0 ? "" : l2, la = Qf, wn = by, Ys = _y;
la.document;
var A_e = !!wn.documentElement && !!wn.head && typeof wn.addEventListener == "function" && typeof wn.createElement == "function";
~c2.indexOf("MSIE") || ~c2.indexOf("Trident/");
var or = "___FONT_AWESOME___", T_e = "fa", M_e = "svg-inline--fa";
(function() {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
var yy = la.FontAwesomeConfig || {};
function $_e(e) {
  var t = wn.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function L_e(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (wn && typeof wn.querySelector == "function") {
  var I_e = [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  I_e.forEach(function(e) {
    var t = w_e(e, 2), n = t[0], r = t[1], s = L_e($_e(n));
    s != null && (yy[r] = s);
  });
}
var O_e = {
  familyPrefix: T_e,
  replacementClass: M_e,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
}, Fu = sn({}, O_e, yy);
Fu.autoReplaceSvg || (Fu.observeMutations = !1);
var wy = sn({}, Fu);
la.FontAwesomeConfig = wy;
var sr = la || {};
sr[or] || (sr[or] = {});
sr[or].styles || (sr[or].styles = {});
sr[or].hooks || (sr[or].hooks = {});
sr[or].shims || (sr[or].shims = []);
var Xn = sr[or], R_e = [], P_e = function e() {
  wn.removeEventListener("DOMContentLoaded", e), qu = 1, R_e.map(function(t) {
    return t();
  });
}, qu = !1;
A_e && (qu = (wn.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(wn.readyState), qu || wn.addEventListener("DOMContentLoaded", P_e));
var ed = "pending", ky = "settled", Ai = "fulfilled", Ti = "rejected", D_e = function() {
}, Cy = typeof global < "u" && typeof global.process < "u" && typeof global.process.emit == "function", N_e = typeof setImmediate > "u" ? setTimeout : setImmediate, Ho = [], zu;
function B_e() {
  for (var e = 0; e < Ho.length; e++)
    Ho[e][0](Ho[e][1]);
  Ho = [], zu = !1;
}
function Mi(e, t) {
  Ho.push([e, t]), zu || (zu = !0, N_e(B_e, 0));
}
function F_e(e, t) {
  function n(s) {
    td(t, s);
  }
  function r(s) {
    vs(t, s);
  }
  try {
    e(n, r);
  } catch (s) {
    r(s);
  }
}
function xy(e) {
  var t = e.owner, n = t._state, r = t._data, s = e[n], o = e.then;
  if (typeof s == "function") {
    n = Ai;
    try {
      r = s(r);
    } catch (i) {
      vs(o, i);
    }
  }
  Ey(o, r) || (n === Ai && td(o, r), n === Ti && vs(o, r));
}
function Ey(e, t) {
  var n;
  try {
    if (e === t)
      throw new TypeError("A promises callback cannot return that same promise.");
    if (t && (typeof t == "function" || Qo(t) === "object")) {
      var r = t.then;
      if (typeof r == "function")
        return r.call(t, function(s) {
          n || (n = !0, t === s ? Sy(e, s) : td(e, s));
        }, function(s) {
          n || (n = !0, vs(e, s));
        }), !0;
    }
  } catch (s) {
    return n || vs(e, s), !0;
  }
  return !1;
}
function td(e, t) {
  (e === t || !Ey(e, t)) && Sy(e, t);
}
function Sy(e, t) {
  e._state === ed && (e._state = ky, e._data = t, Mi(q_e, e));
}
function vs(e, t) {
  e._state === ed && (e._state = ky, e._data = t, Mi(z_e, e));
}
function Ay(e) {
  e._then = e._then.forEach(xy);
}
function q_e(e) {
  e._state = Ai, Ay(e);
}
function z_e(e) {
  e._state = Ti, Ay(e), !e._handled && Cy && global.process.emit("unhandledRejection", e._data, e);
}
function H_e(e) {
  global.process.emit("rejectionHandled", e);
}
function fn(e) {
  if (typeof e != "function")
    throw new TypeError("Promise resolver " + e + " is not a function");
  if (!(this instanceof fn))
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  this._then = [], F_e(e, this);
}
fn.prototype = {
  constructor: fn,
  _state: ed,
  _then: null,
  _data: void 0,
  _handled: !1,
  then: function(t, n) {
    var r = {
      owner: this,
      then: new this.constructor(D_e),
      fulfilled: t,
      rejected: n
    };
    return (n || t) && !this._handled && (this._handled = !0, this._state === Ti && Cy && Mi(H_e, this)), this._state === Ai || this._state === Ti ? Mi(xy, r) : this._then.push(r), r.then;
  },
  catch: function(t) {
    return this.then(null, t);
  }
};
fn.all = function(e) {
  if (!Array.isArray(e))
    throw new TypeError("You must pass an array to Promise.all().");
  return new fn(function(t, n) {
    var r = [], s = 0;
    function o(l) {
      return s++, function(u) {
        r[l] = u, --s || t(r);
      };
    }
    for (var i = 0, a; i < e.length; i++)
      a = e[i], a && typeof a.then == "function" ? a.then(o(i), n) : r[i] = a;
    s || t(r);
  });
};
fn.race = function(e) {
  if (!Array.isArray(e))
    throw new TypeError("You must pass an array to Promise.race().");
  return new fn(function(t, n) {
    for (var r = 0, s; r < e.length; r++)
      s = e[r], s && typeof s.then == "function" ? s.then(t, n) : t(s);
  });
};
fn.resolve = function(e) {
  return e && Qo(e) === "object" && e.constructor === fn ? e : new fn(function(t) {
    t(e);
  });
};
fn.reject = function(e) {
  return new fn(function(t, n) {
    n(e);
  });
};
wy.measurePerformance && Ys && Ys.mark && Ys.measure;
var ac = function(t, n, r, s) {
  var o = Object.keys(t), i = o.length, a = n, l, u, f;
  for (r === void 0 ? (l = 1, f = t[o[0]]) : (l = 0, f = r); l < i; l++)
    u = o[l], f = a(f, t[u], u, t);
  return f;
};
function Ty(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, s = r === void 0 ? !1 : r, o = Object.keys(t).reduce(function(i, a) {
    var l = t[a], u = !!l.icon;
    return u ? i[l.iconName] = l.icon : i[a] = l, i;
  }, {});
  typeof Xn.hooks.addPack == "function" && !s ? Xn.hooks.addPack(e, o) : Xn.styles[e] = sn({}, Xn.styles[e] || {}, o), e === "fas" && Ty("fa", t);
}
var u2 = Xn.styles, j_e = Xn.shims, My = function() {
  var t = function(s) {
    return ac(u2, function(o, i, a) {
      return o[a] = ac(i, s, {}), o;
    }, {});
  };
  t(function(r, s, o) {
    return s[3] && (r[s[3]] = o), r;
  }), t(function(r, s, o) {
    var i = s[2];
    return r[o] = o, i.forEach(function(a) {
      r[a] = o;
    }), r;
  });
  var n = "far" in u2;
  ac(j_e, function(r, s) {
    var o = s[0], i = s[1], a = s[2];
    return i === "far" && !n && (i = "fas"), r[o] = {
      prefix: i,
      iconName: a
    }, r;
  }, {});
};
My();
Xn.styles;
function Hu(e) {
  this.name = "MissingIcon", this.message = e || "Icon unavailable", this.stack = new Error().stack;
}
Hu.prototype = Object.create(Error.prototype);
Hu.prototype.constructor = Hu;
var ca = {
  fill: "currentColor"
}, $y = {
  attributeType: "XML",
  repeatCount: "indefinite",
  dur: "2s"
};
sn({}, ca, {
  d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
});
var nd = sn({}, $y, {
  attributeName: "opacity"
});
sn({}, ca, {
  cx: "256",
  cy: "364",
  r: "28"
}), sn({}, $y, {
  attributeName: "r",
  values: "28;14;28;28;14;28;"
}), sn({}, nd, {
  values: "1;0;1;1;0;1;"
});
sn({}, ca, {
  opacity: "1",
  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
}), sn({}, nd, {
  values: "1;0;0;0;0;1;"
});
sn({}, ca, {
  opacity: "0",
  d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
}), sn({}, nd, {
  values: "0;0;1;1;0;0;"
});
Xn.styles;
Xn.styles;
var V_e = /* @__PURE__ */ function() {
  function e() {
    v_e(this, e), this.definitions = {};
  }
  return __e(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, s = new Array(r), o = 0; o < r; o++)
        s[o] = arguments[o];
      var i = s.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(a) {
        n.definitions[a] = sn({}, n.definitions[a] || {}, i[a]), Ty(a, i[a]), My();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var s = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(s).map(function(o) {
        var i = s[o], a = i.prefix, l = i.iconName, u = i.icon;
        n[a] || (n[a] = {}), n[a][l] = u;
      }), n;
    }
  }]), e;
}();
new V_e();
var U_e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, K_e = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(h, k, y) {
      if (!u(k) || c(k) || p(k) || d(k) || l(k))
        return k;
      var _, S = 0, x = 0;
      if (f(k))
        for (_ = [], x = k.length; S < x; S++)
          _.push(n(h, k[S], y));
      else {
        _ = {};
        for (var T in k)
          Object.prototype.hasOwnProperty.call(k, T) && (_[h(T, y)] = n(h, k[T], y));
      }
      return _;
    }, r = function(h, k) {
      k = k || {};
      var y = k.separator || "_", _ = k.split || /(?=[A-Z])/;
      return h.split(_).join(y);
    }, s = function(h) {
      return m(h) ? h : (h = h.replace(/[\-_\s]+(.)?/g, function(k, y) {
        return y ? y.toUpperCase() : "";
      }), h.substr(0, 1).toLowerCase() + h.substr(1));
    }, o = function(h) {
      var k = s(h);
      return k.substr(0, 1).toUpperCase() + k.substr(1);
    }, i = function(h, k) {
      return r(h, k).toLowerCase();
    }, a = Object.prototype.toString, l = function(h) {
      return typeof h == "function";
    }, u = function(h) {
      return h === Object(h);
    }, f = function(h) {
      return a.call(h) == "[object Array]";
    }, c = function(h) {
      return a.call(h) == "[object Date]";
    }, p = function(h) {
      return a.call(h) == "[object RegExp]";
    }, d = function(h) {
      return a.call(h) == "[object Boolean]";
    }, m = function(h) {
      return h = h - 0, h === h;
    }, g = function(h, k) {
      var y = k && "process" in k ? k.process : k;
      return typeof y != "function" ? h : function(_, S) {
        return y(_, h, S);
      };
    }, C = {
      camelize: s,
      decamelize: i,
      pascalize: o,
      depascalize: i,
      camelizeKeys: function(h, k) {
        return n(g(s, k), h);
      },
      decamelizeKeys: function(h, k) {
        return n(g(i, k), h, k);
      },
      pascalizeKeys: function(h, k) {
        return n(g(o, k), h);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = C : t.humps = C;
  })(U_e);
})(K_e);
var G_e = !1;
try {
  G_e = !0;
} catch {
}
({
  ...Wm
});
var lc, f2;
function rd() {
  if (f2) return lc;
  f2 = 1;
  var e = Array.isArray;
  return lc = e, lc;
}
var cc, d2;
function W_e() {
  if (d2) return cc;
  d2 = 1;
  var e = typeof Ns == "object" && Ns && Ns.Object === Object && Ns;
  return cc = e, cc;
}
var uc, p2;
function od() {
  if (p2) return uc;
  p2 = 1;
  var e = W_e(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return uc = n, uc;
}
var fc, h2;
function sd() {
  if (h2) return fc;
  h2 = 1;
  var e = od(), t = e.Symbol;
  return fc = t, fc;
}
var dc, g2;
function Z_e() {
  if (g2) return dc;
  g2 = 1;
  var e = sd(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, s = e ? e.toStringTag : void 0;
  function o(i) {
    var a = n.call(i, s), l = i[s];
    try {
      i[s] = void 0;
      var u = !0;
    } catch {
    }
    var f = r.call(i);
    return u && (a ? i[s] = l : delete i[s]), f;
  }
  return dc = o, dc;
}
var pc, m2;
function X_e() {
  if (m2) return pc;
  m2 = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return pc = n, pc;
}
var hc, v2;
function Ly() {
  if (v2) return hc;
  v2 = 1;
  var e = sd(), t = Z_e(), n = X_e(), r = "[object Null]", s = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function i(a) {
    return a == null ? a === void 0 ? s : r : o && o in Object(a) ? t(a) : n(a);
  }
  return hc = i, hc;
}
var gc, b2;
function Y_e() {
  if (b2) return gc;
  b2 = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return gc = e, gc;
}
var mc, _2;
function id() {
  if (_2) return mc;
  _2 = 1;
  var e = Ly(), t = Y_e(), n = "[object Symbol]";
  function r(s) {
    return typeof s == "symbol" || t(s) && e(s) == n;
  }
  return mc = r, mc;
}
var vc, y2;
function J_e() {
  if (y2) return vc;
  y2 = 1;
  var e = rd(), t = id(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function s(o, i) {
    if (e(o))
      return !1;
    var a = typeof o;
    return a == "number" || a == "symbol" || a == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || i != null && o in Object(i);
  }
  return vc = s, vc;
}
var bc, w2;
function Iy() {
  if (w2) return bc;
  w2 = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return bc = e, bc;
}
var _c, k2;
function Q_e() {
  if (k2) return _c;
  k2 = 1;
  var e = Ly(), t = Iy(), n = "[object AsyncFunction]", r = "[object Function]", s = "[object GeneratorFunction]", o = "[object Proxy]";
  function i(a) {
    if (!t(a))
      return !1;
    var l = e(a);
    return l == r || l == s || l == n || l == o;
  }
  return _c = i, _c;
}
var yc, C2;
function eye() {
  if (C2) return yc;
  C2 = 1;
  var e = od(), t = e["__core-js_shared__"];
  return yc = t, yc;
}
var wc, x2;
function tye() {
  if (x2) return wc;
  x2 = 1;
  var e = eye(), t = function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }();
  function n(r) {
    return !!t && t in r;
  }
  return wc = n, wc;
}
var kc, E2;
function nye() {
  if (E2) return kc;
  E2 = 1;
  var e = Function.prototype, t = e.toString;
  function n(r) {
    if (r != null) {
      try {
        return t.call(r);
      } catch {
      }
      try {
        return r + "";
      } catch {
      }
    }
    return "";
  }
  return kc = n, kc;
}
var Cc, S2;
function rye() {
  if (S2) return Cc;
  S2 = 1;
  var e = Q_e(), t = tye(), n = Iy(), r = nye(), s = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, i = Function.prototype, a = Object.prototype, l = i.toString, u = a.hasOwnProperty, f = RegExp(
    "^" + l.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function c(p) {
    if (!n(p) || t(p))
      return !1;
    var d = e(p) ? f : o;
    return d.test(r(p));
  }
  return Cc = c, Cc;
}
var xc, A2;
function oye() {
  if (A2) return xc;
  A2 = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return xc = e, xc;
}
var Ec, T2;
function Oy() {
  if (T2) return Ec;
  T2 = 1;
  var e = rye(), t = oye();
  function n(r, s) {
    var o = t(r, s);
    return e(o) ? o : void 0;
  }
  return Ec = n, Ec;
}
var Sc, M2;
function ua() {
  if (M2) return Sc;
  M2 = 1;
  var e = Oy(), t = e(Object, "create");
  return Sc = t, Sc;
}
var Ac, $2;
function sye() {
  if ($2) return Ac;
  $2 = 1;
  var e = ua();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ac = t, Ac;
}
var Tc, L2;
function iye() {
  if (L2) return Tc;
  L2 = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return Tc = e, Tc;
}
var Mc, I2;
function aye() {
  if (I2) return Mc;
  I2 = 1;
  var e = ua(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function s(o) {
    var i = this.__data__;
    if (e) {
      var a = i[o];
      return a === t ? void 0 : a;
    }
    return r.call(i, o) ? i[o] : void 0;
  }
  return Mc = s, Mc;
}
var $c, O2;
function lye() {
  if (O2) return $c;
  O2 = 1;
  var e = ua(), t = Object.prototype, n = t.hasOwnProperty;
  function r(s) {
    var o = this.__data__;
    return e ? o[s] !== void 0 : n.call(o, s);
  }
  return $c = r, $c;
}
var Lc, R2;
function cye() {
  if (R2) return Lc;
  R2 = 1;
  var e = ua(), t = "__lodash_hash_undefined__";
  function n(r, s) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && s === void 0 ? t : s, this;
  }
  return Lc = n, Lc;
}
var Ic, P2;
function uye() {
  if (P2) return Ic;
  P2 = 1;
  var e = sye(), t = iye(), n = aye(), r = lye(), s = cye();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, Ic = o, Ic;
}
var Oc, D2;
function fye() {
  if (D2) return Oc;
  D2 = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Oc = e, Oc;
}
var Rc, N2;
function dye() {
  if (N2) return Rc;
  N2 = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Rc = e, Rc;
}
var Pc, B2;
function fa() {
  if (B2) return Pc;
  B2 = 1;
  var e = dye();
  function t(n, r) {
    for (var s = n.length; s--; )
      if (e(n[s][0], r))
        return s;
    return -1;
  }
  return Pc = t, Pc;
}
var Dc, F2;
function pye() {
  if (F2) return Dc;
  F2 = 1;
  var e = fa(), t = Array.prototype, n = t.splice;
  function r(s) {
    var o = this.__data__, i = e(o, s);
    if (i < 0)
      return !1;
    var a = o.length - 1;
    return i == a ? o.pop() : n.call(o, i, 1), --this.size, !0;
  }
  return Dc = r, Dc;
}
var Nc, q2;
function hye() {
  if (q2) return Nc;
  q2 = 1;
  var e = fa();
  function t(n) {
    var r = this.__data__, s = e(r, n);
    return s < 0 ? void 0 : r[s][1];
  }
  return Nc = t, Nc;
}
var Bc, z2;
function gye() {
  if (z2) return Bc;
  z2 = 1;
  var e = fa();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return Bc = t, Bc;
}
var Fc, H2;
function mye() {
  if (H2) return Fc;
  H2 = 1;
  var e = fa();
  function t(n, r) {
    var s = this.__data__, o = e(s, n);
    return o < 0 ? (++this.size, s.push([n, r])) : s[o][1] = r, this;
  }
  return Fc = t, Fc;
}
var qc, j2;
function vye() {
  if (j2) return qc;
  j2 = 1;
  var e = fye(), t = pye(), n = hye(), r = gye(), s = mye();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, qc = o, qc;
}
var zc, V2;
function bye() {
  if (V2) return zc;
  V2 = 1;
  var e = Oy(), t = od(), n = e(t, "Map");
  return zc = n, zc;
}
var Hc, U2;
function _ye() {
  if (U2) return Hc;
  U2 = 1;
  var e = uye(), t = vye(), n = bye();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return Hc = r, Hc;
}
var jc, K2;
function yye() {
  if (K2) return jc;
  K2 = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return jc = e, jc;
}
var Vc, G2;
function da() {
  if (G2) return Vc;
  G2 = 1;
  var e = yye();
  function t(n, r) {
    var s = n.__data__;
    return e(r) ? s[typeof r == "string" ? "string" : "hash"] : s.map;
  }
  return Vc = t, Vc;
}
var Uc, W2;
function wye() {
  if (W2) return Uc;
  W2 = 1;
  var e = da();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return Uc = t, Uc;
}
var Kc, Z2;
function kye() {
  if (Z2) return Kc;
  Z2 = 1;
  var e = da();
  function t(n) {
    return e(this, n).get(n);
  }
  return Kc = t, Kc;
}
var Gc, X2;
function Cye() {
  if (X2) return Gc;
  X2 = 1;
  var e = da();
  function t(n) {
    return e(this, n).has(n);
  }
  return Gc = t, Gc;
}
var Wc, Y2;
function xye() {
  if (Y2) return Wc;
  Y2 = 1;
  var e = da();
  function t(n, r) {
    var s = e(this, n), o = s.size;
    return s.set(n, r), this.size += s.size == o ? 0 : 1, this;
  }
  return Wc = t, Wc;
}
var Zc, J2;
function Eye() {
  if (J2) return Zc;
  J2 = 1;
  var e = _ye(), t = wye(), n = kye(), r = Cye(), s = xye();
  function o(i) {
    var a = -1, l = i == null ? 0 : i.length;
    for (this.clear(); ++a < l; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, Zc = o, Zc;
}
var Xc, Q2;
function Sye() {
  if (Q2) return Xc;
  Q2 = 1;
  var e = Eye(), t = "Expected a function";
  function n(r, s) {
    if (typeof r != "function" || s != null && typeof s != "function")
      throw new TypeError(t);
    var o = function() {
      var i = arguments, a = s ? s.apply(this, i) : i[0], l = o.cache;
      if (l.has(a))
        return l.get(a);
      var u = r.apply(this, i);
      return o.cache = l.set(a, u) || l, u;
    };
    return o.cache = new (n.Cache || e)(), o;
  }
  return n.Cache = e, Xc = n, Xc;
}
var Yc, e1;
function Aye() {
  if (e1) return Yc;
  e1 = 1;
  var e = Sye(), t = 500;
  function n(r) {
    var s = e(r, function(i) {
      return o.size === t && o.clear(), i;
    }), o = s.cache;
    return s;
  }
  return Yc = n, Yc;
}
var Jc, t1;
function Tye() {
  if (t1) return Jc;
  t1 = 1;
  var e = Aye(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(s) {
    var o = [];
    return s.charCodeAt(0) === 46 && o.push(""), s.replace(t, function(i, a, l, u) {
      o.push(l ? u.replace(n, "$1") : a || i);
    }), o;
  });
  return Jc = r, Jc;
}
var Qc, n1;
function Mye() {
  if (n1) return Qc;
  n1 = 1;
  function e(t, n) {
    for (var r = -1, s = t == null ? 0 : t.length, o = Array(s); ++r < s; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return Qc = e, Qc;
}
var eu, r1;
function $ye() {
  if (r1) return eu;
  r1 = 1;
  var e = sd(), t = Mye(), n = rd(), r = id(), s = e ? e.prototype : void 0, o = s ? s.toString : void 0;
  function i(a) {
    if (typeof a == "string")
      return a;
    if (n(a))
      return t(a, i) + "";
    if (r(a))
      return o ? o.call(a) : "";
    var l = a + "";
    return l == "0" && 1 / a == -1 / 0 ? "-0" : l;
  }
  return eu = i, eu;
}
var tu, o1;
function Lye() {
  if (o1) return tu;
  o1 = 1;
  var e = $ye();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return tu = t, tu;
}
var nu, s1;
function Iye() {
  if (s1) return nu;
  s1 = 1;
  var e = rd(), t = J_e(), n = Tye(), r = Lye();
  function s(o, i) {
    return e(o) ? o : t(o, i) ? [o] : n(r(o));
  }
  return nu = s, nu;
}
var ru, i1;
function Oye() {
  if (i1) return ru;
  i1 = 1;
  var e = id();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return ru = t, ru;
}
var ou, a1;
function Rye() {
  if (a1) return ou;
  a1 = 1;
  var e = Iye(), t = Oye();
  function n(r, s) {
    s = e(s, r);
    for (var o = 0, i = s.length; r != null && o < i; )
      r = r[t(s[o++])];
    return o && o == i ? r : void 0;
  }
  return ou = n, ou;
}
var su, l1;
function Pye() {
  if (l1) return su;
  l1 = 1;
  var e = Rye();
  function t(n, r, s) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? s : o;
  }
  return su = t, su;
}
Pye();
function Dye(e) {
  const t = e.regex, n = {}, r = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [n]
      }
      // default values
    ]
  };
  Object.assign(n, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      r
    ]
  });
  const s = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, o = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, i = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      n,
      s
    ]
  };
  s.contains.push(i);
  const a = {
    match: /\\"/
  }, l = {
    className: "string",
    begin: /'/,
    end: /'/
  }, u = {
    match: /\\'/
  }, f = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      n
    ]
  }, c = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], p = e.SHEBANG({
    binary: `(${c.join("|")})`,
    relevance: 10
  }), d = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, m = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "function",
    "select"
  ], g = [
    "true",
    "false"
  ], C = { match: /(\/[a-z._-]+)+/ }, h = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], k = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], y = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], _ = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: ["sh"],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: m,
      literal: g,
      built_in: [
        ...h,
        ...k,
        // Shell modifiers
        "set",
        "shopt",
        ...y,
        ..._
      ]
    },
    contains: [
      p,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      d,
      f,
      e.HASH_COMMENT_MODE,
      o,
      C,
      i,
      a,
      l,
      u,
      n
    ]
  };
}
function Nye(e) {
  const t = e.regex, n = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), r = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], a = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: r,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, l = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, u = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: a,
    illegal: /#/
  }, f = {
    begin: /\{\{/,
    relevance: 0
  }, c = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          f,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          f,
          u
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          f,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          f,
          u
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, p = "[0-9](_?[0-9])*", d = `(\\b(${p}))?\\.(${p})|\\b(${p})\\.`, m = `\\b|${r.join("|")}`, g = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${p})|(${d}))[eE][+-]?(${p})[jJ]?(?=${m})`
      },
      {
        begin: `(${d})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${m})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${m})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${m})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${m})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${p})[jJ](?=${m})`
      }
    ]
  }, C = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: a,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, h = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: a,
        contains: [
          "self",
          l,
          g,
          c,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return u.contains = [
    c,
    g,
    l
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: a,
    illegal: /(<\/|\?)|=>/,
    contains: [
      l,
      g,
      {
        // very common convention
        begin: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      c,
      C,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [h]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              n,
              /\s*/,
              /\(\s*/,
              n,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              n
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          g,
          h,
          c
        ]
      }
    ]
  };
}
const $i = "[A-Za-z$_][0-9A-Za-z$_]*", Ry = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
], Py = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Dy = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Ny = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], By = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Fy = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], qy = [].concat(
  By,
  Dy,
  Ny
);
function Bye(e) {
  const t = e.regex, n = (H, { after: Q }) => {
    const te = "</" + H[0].slice(1);
    return H.input.indexOf(te, Q) !== -1;
  }, r = $i, s = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, Q) => {
      const te = H[0].length + H.index, Ae = H.input[te];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ae === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ae === ","
      ) {
        Q.ignoreMatch();
        return;
      }
      Ae === ">" && (n(H, { after: te }) || Q.ignoreMatch());
      let ve;
      const Ne = H.input.substring(te);
      if (ve = Ne.match(/^\s*=/)) {
        Q.ignoreMatch();
        return;
      }
      if ((ve = Ne.match(/^\s+extends\s+/)) && ve.index === 0) {
        Q.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: $i,
    keyword: Ry,
    literal: Py,
    built_in: qy,
    "variable.language": Fy
  }, l = "[0-9](_?[0-9])*", u = `\\.(${l})`, f = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", c = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${f})((${u})|\\.)?|(${u}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${f})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, p = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, d = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "xml"
    }
  }, m = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "css"
    }
  }, g = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        p
      ],
      subLanguage: "graphql"
    }
  }, C = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      p
    ]
  }, k = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, y = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    d,
    m,
    g,
    C,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    c
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  p.contains = y.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(y)
  });
  const _ = [].concat(k, p.contains), S = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(_)
    }
  ]), x = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: S
  }, T = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, $ = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Dy,
        ...Ny
      ]
    }
  }, I = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, P = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [x],
    illegal: /%/
  }, N = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function D(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const oe = {
    match: t.concat(
      /\b/,
      D([
        ...By,
        "super",
        "import"
      ]),
      r,
      t.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  }, F = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, U = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      x
    ]
  }, q = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", z = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(q)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      x
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: S, CLASS_REFERENCE: $ },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      I,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      d,
      m,
      g,
      C,
      k,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      c,
      $,
      {
        className: "attr",
        begin: r + t.lookahead(":"),
        relevance: 0
      },
      z,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          k,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: q,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: S
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: s.begin, end: s.end },
              { match: o },
              {
                begin: i.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": i.isTrulyOpeningTag,
                end: i.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: i.begin,
                end: i.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      P,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          x,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      F,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [x]
      },
      oe,
      N,
      T,
      U,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Fye(e) {
  const t = Bye(e), n = $i, r = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], s = {
    beginKeywords: "namespace",
    end: /\{/,
    excludeEnd: !0,
    contains: [t.exports.CLASS_REFERENCE]
  }, o = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: r
    },
    contains: [t.exports.CLASS_REFERENCE]
  }, i = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, a = [
    "type",
    "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override"
  ], l = {
    $pattern: $i,
    keyword: Ry.concat(a),
    literal: Py,
    built_in: qy.concat(r),
    "variable.language": Fy
  }, u = {
    className: "meta",
    begin: "@" + n
  }, f = (p, d, m) => {
    const g = p.contains.findIndex((C) => C.label === d);
    if (g === -1)
      throw new Error("can not find mode to replace");
    p.contains.splice(g, 1, m);
  };
  Object.assign(t.keywords, l), t.exports.PARAMS_CONTAINS.push(u), t.contains = t.contains.concat([
    u,
    s,
    o
  ]), f(t, "shebang", e.SHEBANG()), f(t, "use_strict", i);
  const c = t.contains.find((p) => p.label === "func.def");
  return c.relevance = 0, Object.assign(t, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), t;
}
const qye = /* @__PURE__ */ ne({
  name: "VueMarkdown",
  props: {
    source: {
      type: String,
      required: !0
    },
    options: {
      type: Object,
      required: !1
    },
    plugins: {
      type: Array,
      required: !1
    }
  },
  setup(e) {
    const t = G(new c_e(e.options ?? {}));
    for (const r of e.plugins ?? [])
      t.value.use(r);
    const n = R(() => t.value.render(e.source));
    return () => _n("div", { innerHTML: n.value });
  }
}), zye = {
  key: 0,
  class: "chat-message-actions"
}, Hye = {
  key: 2,
  class: "chat-message-files"
}, ju = /* @__PURE__ */ ne({
  __name: "Message",
  props: {
    message: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    Kn.registerLanguage("javascript", Ng), Kn.registerLanguage("typescript", Fye), Kn.registerLanguage("python", Nye), Kn.registerLanguage("xml", Bg), Kn.registerLanguage("bash", Dye);
    const { message: r } = Bi(n), { options: s } = ys(), o = G(null), i = G({}), a = R(() => r.value.text || "&lt;Empty response&gt;"), l = R(() => ({
      "chat-message-from-user": r.value.sender === "user",
      "chat-message-from-bot": r.value.sender === "bot",
      "chat-message-transparent": r.value.transparent === !0
    })), u = (m) => {
      m.use(d_e, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    }, f = () => {
      var m;
      (m = o.value) != null && m.scrollIntoView && o.value.scrollIntoView({
        block: "start"
      });
    }, c = {
      highlight(m, g) {
        if (g && Kn.getLanguage(g))
          try {
            return Kn.highlight(m, { language: g }).value;
          } catch {
          }
        return "";
      }
    }, p = { ...(s == null ? void 0 : s.messageComponents) ?? {} };
    t({ scrollToView: f });
    const d = async (m) => await new Promise((g, C) => {
      const h = new FileReader();
      h.onload = () => g(h.result), h.onerror = C, h.readAsDataURL(m);
    });
    return rt(async () => {
      if (r.value.files)
        for (const m of r.value.files)
          try {
            const g = await d(m);
            i.value[m.name] = g;
          } catch (g) {
            console.error("Error reading file:", g);
          }
    }), (m, g) => (w(), A("div", {
      ref_key: "messageContainer",
      ref: o,
      class: Z(["chat-message", l.value])
    }, [
      m.$slots.beforeMessage ? (w(), A("div", zye, [
        _e(m.$slots, "beforeMessage", fi(uf({ message: b(r) })))
      ])) : ge("", !0),
      _e(m.$slots, "default", {}, () => [
        b(r).type === "component" && p[b(r).key] ? (w(), le(Rt(p[b(r).key]), fi(pt({ key: 0 }, b(r).arguments)), null, 16)) : (w(), le(b(qye), {
          key: 1,
          class: "chat-message-markdown",
          source: a.value,
          options: c,
          plugins: [u]
        }, null, 8, ["source", "plugins"])),
        (b(r).files ?? []).length > 0 ? (w(), A("div", Hye, [
          (w(!0), A(Ze, null, Cn(b(r).files ?? [], (C) => (w(), A("div", {
            key: C.name,
            class: "chat-message-file"
          }, [
            we(Fg, {
              file: C,
              "is-removable": !1,
              "is-previewable": !0
            }, null, 8, ["file"])
          ]))), 128))
        ])) : ge("", !0)
      ])
    ], 2));
  }
}), jye = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Vye(e, t) {
  return w(), A("svg", jye, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"
    }, null, -1)
  ]));
}
const Uye = { name: "mdi-chat", render: Vye }, Kye = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Gye(e, t) {
  return w(), A("svg", Kye, t[0] || (t[0] = [
    v("path", {
      fill: "currentColor",
      d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
    }, null, -1)
  ]));
}
const Wye = { name: "mdi-chevron-down", render: Gye }, Zye = { class: "chat-window-wrapper" }, Xye = { class: "chat-window" }, Yye = /* @__PURE__ */ ne({
  __name: "ChatWindow",
  setup(e) {
    const t = G(!1);
    function n() {
      t.value = !t.value, t.value && ze(() => {
        jt.emit("scrollToBottom");
      });
    }
    return (r, s) => (w(), A("div", Zye, [
      we(Jr, { name: "chat-window-transition" }, {
        default: fe(() => [
          Vt(v("div", Xye, [
            we(zy)
          ], 512), [
            [tr, t.value]
          ])
        ]),
        _: 1
      }),
      v("div", {
        class: "chat-window-toggle",
        onClick: n
      }, [
        we(Jr, {
          name: "chat-window-toggle-transition",
          mode: "out-in"
        }, {
          default: fe(() => [
            t.value ? (w(), le(b(Wye), {
              key: 1,
              height: "32",
              width: "32"
            })) : (w(), le(b(Uye), {
              key: 0,
              height: "32",
              width: "32"
            }))
          ]),
          _: 1
        })
      ])
    ]));
  }
}), Jye = /* @__PURE__ */ ne({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(e) {
    const t = e, n = {
      id: "typing",
      text: "",
      sender: "bot"
    }, r = G(), s = R(() => ({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "chat-message-typing": !0,
      [`chat-message-typing-animation-${t.animation}`]: !0
    }));
    return rt(() => {
      var o;
      (o = r.value) == null || o.scrollToView();
    }), (o, i) => (w(), le(b(ju), {
      ref_key: "messageContainer",
      ref: r,
      class: Z(s.value),
      message: n,
      "data-test-id": "chat-message-typing"
    }, {
      default: fe(() => i[0] || (i[0] = [
        v("div", { class: "chat-message-typing-body" }, [
          v("span", { class: "chat-message-typing-circle" }),
          v("span", { class: "chat-message-typing-circle" }),
          v("span", { class: "chat-message-typing-circle" })
        ], -1)
      ])),
      _: 1
    }, 8, ["class"]));
  }
}), Qye = {
  key: 0,
  class: "empty-container"
}, e4e = {
  class: "empty",
  "data-test-id": "chat-messages-empty"
}, t4e = {
  key: 1,
  class: "chat-messages-list"
}, n4e = /* @__PURE__ */ ne({
  __name: "MessagesList",
  props: {
    messages: {},
    emptyText: {}
  },
  setup(e) {
    const t = gf(), n = G([]), { initialMessages: r, waitingForResponse: s } = t;
    return Ee(
      () => n.value.length,
      () => {
        const o = n.value[n.value.length - 1];
        o && o.scrollToView();
      }
    ), (o, i) => o.emptyText && b(r).length === 0 && o.messages.length === 0 ? (w(), A("div", Qye, [
      v("div", e4e, [
        we(b(Vf), {
          icon: "message-circle",
          size: "large",
          class: "emptyIcon"
        }),
        we(b(vP), {
          tag: "p",
          size: "medium",
          color: "text-base"
        }, {
          default: fe(() => [
            Yr(Ge(o.emptyText), 1)
          ]),
          _: 1
        })
      ])
    ])) : (w(), A("div", t4e, [
      (w(!0), A(Ze, null, Cn(b(r), (a) => (w(), le(ju, {
        key: a.id,
        message: a
      }, null, 8, ["message"]))), 128)),
      (w(!0), A(Ze, null, Cn(o.messages, (a) => (w(), le(ju, {
        key: a.id,
        ref_for: !0,
        ref_key: "messageComponents",
        ref: n,
        message: a
      }, {
        beforeMessage: fe(({ message: l }) => [
          _e(o.$slots, "beforeMessage", pt({ ref_for: !0 }, { message: l }))
        ]),
        _: 2
      }, 1032, ["message"]))), 128)),
      b(s) ? (w(), le(Jye, { key: 0 })) : ge("", !0)
    ]));
  }
}), r4e = { class: "chat-heading" }, o4e = ["title"], s4e = { key: 0 }, zy = /* @__PURE__ */ ne({
  __name: "Chat",
  setup(e) {
    const { t } = Ki(), n = gf(), { messages: r, currentSessionId: s } = n, { options: o } = ys(), i = R(() => o.mode === "window" && o.showWindowCloseButton);
    async function a() {
      n.startNewSession && (n.startNewSession(), ze(() => {
        jt.emit("scrollToBottom");
      }));
    }
    async function l() {
      n.loadPreviousSession && (await n.loadPreviousSession(), ze(() => {
        jt.emit("scrollToBottom");
      }));
    }
    function u() {
      jt.emit("close");
    }
    return rt(async () => {
      await l(), !o.showWelcomeScreen && !s.value && await a();
    }), (f, c) => (w(), le(uC, { class: "chat-wrapper" }, {
      header: fe(() => [
        v("div", r4e, [
          v("h1", null, Ge(b(t)("title")), 1),
          i.value ? (w(), A("button", {
            key: 0,
            class: "chat-close-button",
            title: b(t)("closeButtonTooltip"),
            onClick: u
          }, [
            we(b(ik), {
              height: "18",
              width: "18"
            })
          ], 8, o4e)) : ge("", !0)
        ]),
        b(t)("subtitle") ? (w(), A("p", s4e, Ge(b(t)("subtitle")), 1)) : ge("", !0)
      ]),
      footer: fe(() => [
        b(s) ? (w(), le(iC, { key: 0 })) : (w(), le(_k, { key: 1 }))
      ]),
      default: fe(() => [
        !b(s) && b(o).showWelcomeScreen ? (w(), le(dk, {
          key: 0,
          "onClick:button": a
        })) : (w(), le(n4e, {
          key: 1,
          messages: b(r)
        }, null, 8, ["messages"]))
      ]),
      _: 1
    }));
  }
}), i4e = /* @__PURE__ */ ne({
  __name: "App",
  props: {},
  setup(e) {
    const { options: t } = ys(), n = R(() => t.mode === "fullscreen");
    return rt(() => {
      Kn.registerLanguage("xml", Bg), Kn.registerLanguage("javascript", Ng);
    }), (r, s) => n.value ? (w(), le(zy, {
      key: 0,
      class: "n8n-chat"
    })) : (w(), le(Yye, {
      key: 1,
      class: "n8n-chat"
    }));
  }
});
function l4e(e) {
  var s, o;
  const t = {
    ...Po,
    ...e,
    webhookConfig: {
      ...Po.webhookConfig,
      ...e == null ? void 0 : e.webhookConfig
    },
    i18n: {
      ...Po.i18n,
      ...e == null ? void 0 : e.i18n,
      en: {
        ...(s = Po.i18n) == null ? void 0 : s.en,
        ...(o = e == null ? void 0 : e.i18n) == null ? void 0 : o.en
      }
    },
    theme: {
      ...Po.theme,
      ...e == null ? void 0 : e.theme
    }
  }, n = t.target ?? $3;
  typeof n == "string" && U3(n);
  const r = A3(i4e);
  return r.use(X3, t), r.mount(n), r;
}
export {
  l4e as createChat
};
