var zv = Object.defineProperty;
var Dv = (e, t, n) => t in e ? zv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var wo = (e, t, n) => Dv(e, typeof t != "symbol" ? t + "" : t, n);
import { nextTick as xe, ref as D, computed as T, createElementBlock as x, openBlock as y, createElementVNode as p, renderSlot as ne, inject as $e, isRef as Rp, defineComponent as H, createVNode as ue, withCtx as Y, createTextVNode as _r, toDisplayString as ve, unref as _, createCommentVNode as Q, getCurrentScope as Pp, onScopeDispose as Bp, readonly as zp, createBlock as X, withModifiers as Ke, onMounted as Be, onUnmounted as Dp, normalizeStyle as qe, withDirectives as Ye, withKeys as at, vModelText as Np, Fragment as Pe, renderList as Je, onBeforeUnmount as Nt, getCurrentInstance as ot, watch as ae, warn as Nv, shallowRef as _n, onBeforeMount as qv, provide as kt, mergeProps as je, toRef as Rt, useAttrs as lo, useSlots as qp, normalizeClass as j, resolveDynamicComponent as lt, vShow as Jt, Transition as nr, reactive as qn, onUpdated as Fv, cloneVNode as jv, Text as Fp, Comment as Hv, Teleport as Vv, onDeactivated as Uv, watchEffect as el, toRaw as Wo, toRefs as ls, triggerRef as Pr, resolveComponent as Tn, resolveDirective as tl, createSlots as Xr, h as Lt, normalizeProps as Yr, createStaticVNode as Fn, useCssModule as us, pushScopeId as Zv, popScopeId as Wv, guardReactiveProps as jp, mergeDefaults as Hp, createApp as Gv } from "vue";
/*! Package version @n8n/chat@0.48.0 */
const Br = {
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
}, Kv = "#n8n-chat", Xv = "n8n-chat", iu = `${Xv}/sessionId`, Vp = "Chat", Up = "ChatOptions";
var nt = [];
for (var Ns = 0; Ns < 256; ++Ns)
  nt.push((Ns + 256).toString(16).slice(1));
function Yv(e, t = 0) {
  return (nt[e[t + 0]] + nt[e[t + 1]] + nt[e[t + 2]] + nt[e[t + 3]] + "-" + nt[e[t + 4]] + nt[e[t + 5]] + "-" + nt[e[t + 6]] + nt[e[t + 7]] + "-" + nt[e[t + 8]] + nt[e[t + 9]] + "-" + nt[e[t + 10]] + nt[e[t + 11]] + nt[e[t + 12]] + nt[e[t + 13]] + nt[e[t + 14]] + nt[e[t + 15]]).toLowerCase();
}
var ko, Jv = new Uint8Array(16);
function Qv() {
  if (!ko && (ko = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ko))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return ko(Jv);
}
var e_ = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const au = {
  randomUUID: e_
};
function jr(e, t, n) {
  if (au.randomUUID && !e)
    return au.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || Qv)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Yv(r);
}
async function t_() {
  return "";
}
async function nl(...e) {
  var o, i;
  const t = await t_(), n = (o = e[1]) == null ? void 0 : o.body, r = {
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
async function Zp(e, t = {}, n = {}) {
  let r = e;
  return Object.keys(t).length > 0 && (r = `${r}?${new URLSearchParams(
    t
  ).toString()}`), await nl(r, { ...n, method: "GET" });
}
async function Wp(e, t = {}, n = {}) {
  return await nl(e, {
    ...n,
    method: "POST",
    body: JSON.stringify(t)
  });
}
async function n_(e, t = {}, n = [], r = {}) {
  const s = new FormData();
  for (const o in t)
    s.append(o, t[o]);
  for (const o of n)
    s.append("files", o);
  return await nl(e, {
    ...r,
    method: "POST",
    body: s
  });
}
async function r_(e, t) {
  var r, s;
  return await (((r = t.webhookConfig) == null ? void 0 : r.method) === "POST" ? Wp : Zp)(
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
async function o_(e, t, n, r) {
  var o, i, a;
  return t.length > 0 ? await n_(
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
  ) : await (((i = r.webhookConfig) == null ? void 0 : i.method) === "POST" ? Wp : Zp)(
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
function s_() {
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
async function i_(e, t, n, r, s) {
  var a, c;
  const o = await (t.length > 0 ? a_(e, t, n, r) : c_(e, n, r));
  if (!o.ok) {
    const u = await o.text();
    throw console.error("HTTP error response:", o.status, u), new Error(`Error while sending message. Error: ${u}`);
  }
  if (!o.body)
    throw new Error("Response body is not readable");
  const i = o.body.pipeThrough(s_()).getReader();
  try {
    for (; ; ) {
      const { done: u, value: d } = await i.read();
      if (u) break;
      const l = ((a = d.metadata) == null ? void 0 : a.nodeId) || "unknown", m = (c = d.metadata) == null ? void 0 : c.runIndex;
      switch (d.type) {
        case "begin":
          s.onBeginMessage(l, m);
          break;
        case "item":
          s.onChunk(d.content ?? "", l, m);
          break;
        case "end":
          s.onEndMessage(l, m);
          break;
        case "error":
          s.onChunk(`Error: ${d.content ?? "Unknown error"}`, l, m), s.onEndMessage(l, m);
          break;
      }
    }
  } finally {
    i.releaseLock();
  }
}
async function a_(e, t, n, r) {
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
async function c_(e, t, n) {
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
function l_() {
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
function u_(e) {
  if (!document.querySelector(e)) {
    const n = document.createElement("div");
    e.startsWith("#") && (n.id = e.replace("#", "")), e.startsWith(".") && n.classList.add(e.replace(".", "")), document.body.appendChild(n);
  }
}
const ht = l_();
class d_ {
  constructor() {
    wo(this, "nodeRuns", /* @__PURE__ */ new Map());
    wo(this, "runOrder", []);
    wo(this, "activeRuns", /* @__PURE__ */ new Set());
  }
  getRunKey(t, n) {
    return n !== void 0 ? `${t}-${n}` : t;
  }
  initializeRun(t, n) {
    const r = this.getRunKey(t, n);
    if (!this.nodeRuns.has(r)) {
      const s = Go();
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
function Go(e) {
  return {
    id: e ?? jr(),
    type: "text",
    text: "",
    sender: "bot"
  };
}
function cu(e, t, n) {
  const r = e.findIndex((s) => s.id === t);
  if (r === -1)
    throw new Error(`Can't update message. No message with id ${t} found`);
  e[r] = n;
}
function f_(e, t, n, r, s, o) {
  try {
    if (!e.trim())
      return;
    if (t) {
      let i = n.getRunMessage(t, o);
      i || (i = n.addRunToActive(t, o), s.value.push(i));
      const a = n.addChunkToRun(t, e, o);
      a && cu(s.value, a.id, a);
    } else {
      r.value || (r.value = Go(), s.value.push(r.value));
      const i = {
        ...r.value,
        text: r.value.text + e
      };
      cu(s.value, r.value.id, i), r.value = i;
    }
    xe(() => {
      ht.emit("scrollToBottom");
    });
  } catch (i) {
    console.error("Error handling stream chunk:", i);
  }
}
function p_(e, t, n) {
  try {
    t.registerRunStart(e, n);
  } catch (r) {
    console.error("Error handling node start:", r);
  }
}
function h_(e, t, n) {
  try {
    t.removeRunFromActive(e, n);
  } catch (r) {
    console.error("Error handling node complete:", r);
  }
}
const g_ = {
  install(e, t) {
    e.provide(Up, t);
    const n = D([]), r = D(null), s = D(!1), o = T(
      () => (t.initialMessages ?? []).map((d) => ({
        id: jr(),
        text: d,
        sender: "bot"
      }))
    );
    async function i(d, l = []) {
      const m = {
        id: jr(),
        text: d,
        sender: "user",
        files: l
      };
      n.value.push(m), s.value = !0, xe(() => {
        ht.emit("scrollToBottom");
      });
      const f = D(null), v = new d_();
      try {
        if (t != null && t.enableStreaming) {
          const g = {
            onChunk: (b, h, w) => {
              f_(
                b,
                h,
                v,
                f,
                n,
                w
              );
            },
            onBeginMessage: (b, h) => {
              p_(b, v, h);
            },
            onEndMessage: (b, h) => {
              h_(b, v, h);
            }
          };
          await i_(
            d,
            l,
            r.value,
            t,
            g
          );
        } else {
          f.value = Go();
          const g = await o_(
            d,
            l,
            r.value,
            t
          );
          let b = g.output ?? g.text ?? "";
          if (b === "" && Object.keys(g).length > 0)
            try {
              b = JSON.stringify(g, null, 2);
            } catch {
            }
          f.value.text = b, n.value.push(f.value);
        }
      } catch (g) {
        f.value || (f.value = Go(), n.value.push(f.value)), f.value && "text" in f.value && (f.value.text = "Error: Failed to receive response"), console.error("Chat API error:", g);
      } finally {
        s.value = !1;
      }
      xe(() => {
        ht.emit("scrollToBottom");
      });
    }
    async function a() {
      if (!t.loadPreviousSession)
        return;
      const d = localStorage.getItem(iu) ?? jr(), l = await r_(d, t);
      return n.value = ((l == null ? void 0 : l.data) || []).map((m, f) => ({
        id: `${f}`,
        text: m.kwargs.content,
        sender: m.id.includes("HumanMessage") ? "user" : "bot"
      })), n.value.length && (r.value = d), d;
    }
    async function c() {
      r.value = jr(), localStorage.setItem(iu, r.value);
    }
    const u = {
      initialMessages: o,
      messages: n,
      currentSessionId: r,
      waitingForResponse: s,
      loadPreviousSession: a,
      startNewSession: c,
      sendMessage: i
    };
    e.provide(Vp, u), e.config.globalProperties.$chat = u;
  }
};
var Co = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ar(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function m_(e) {
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
var qs, lu;
function v_() {
  if (lu) return qs;
  lu = 1;
  function e(S) {
    return S instanceof Map ? S.clear = S.delete = S.set = function() {
      throw new Error("map is read-only");
    } : S instanceof Set && (S.add = S.clear = S.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(S), Object.getOwnPropertyNames(S).forEach((I) => {
      const q = S[I], se = typeof q;
      (se === "object" || se === "function") && !Object.isFrozen(q) && e(q);
    }), S;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(I) {
      I.data === void 0 && (I.data = {}), this.data = I.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(S) {
    return S.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(S, ...I) {
    const q = /* @__PURE__ */ Object.create(null);
    for (const se in S)
      q[se] = S[se];
    return I.forEach(function(se) {
      for (const be in se)
        q[be] = se[be];
    }), /** @type {T} */
    q;
  }
  const s = "</span>", o = (S) => !!S.scope, i = (S, { prefix: I }) => {
    if (S.startsWith("language:"))
      return S.replace("language:", "language-");
    if (S.includes(".")) {
      const q = S.split(".");
      return [
        `${I}${q.shift()}`,
        ...q.map((se, be) => `${se}${"_".repeat(be + 1)}`)
      ].join(" ");
    }
    return `${I}${S}`;
  };
  class a {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(I, q) {
      this.buffer = "", this.classPrefix = q.classPrefix, I.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(I) {
      this.buffer += n(I);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(I) {
      if (!o(I)) return;
      const q = i(
        I.scope,
        { prefix: this.classPrefix }
      );
      this.span(q);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(I) {
      o(I) && (this.buffer += s);
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
    span(I) {
      this.buffer += `<span class="${I}">`;
    }
  }
  const c = (S = {}) => {
    const I = { children: [] };
    return Object.assign(I, S), I;
  };
  class u {
    constructor() {
      this.rootNode = c(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(I) {
      this.top.children.push(I);
    }
    /** @param {string} scope */
    openNode(I) {
      const q = c({ scope: I });
      this.add(q), this.stack.push(q);
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
    walk(I) {
      return this.constructor._walk(I, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(I, q) {
      return typeof q == "string" ? I.addText(q) : q.children && (I.openNode(q), q.children.forEach((se) => this._walk(I, se)), I.closeNode(q)), I;
    }
    /**
     * @param {Node} node
     */
    static _collapse(I) {
      typeof I != "string" && I.children && (I.children.every((q) => typeof q == "string") ? I.children = [I.children.join("")] : I.children.forEach((q) => {
        u._collapse(q);
      }));
    }
  }
  class d extends u {
    /**
     * @param {*} options
     */
    constructor(I) {
      super(), this.options = I;
    }
    /**
     * @param {string} text
     */
    addText(I) {
      I !== "" && this.add(I);
    }
    /** @param {string} scope */
    startScope(I) {
      this.openNode(I);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(I, q) {
      const se = I.root;
      q && (se.scope = `language:${q}`), this.add(se);
    }
    toHTML() {
      return new a(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function l(S) {
    return S ? typeof S == "string" ? S : S.source : null;
  }
  function m(S) {
    return g("(?=", S, ")");
  }
  function f(S) {
    return g("(?:", S, ")*");
  }
  function v(S) {
    return g("(?:", S, ")?");
  }
  function g(...S) {
    return S.map((q) => l(q)).join("");
  }
  function b(S) {
    const I = S[S.length - 1];
    return typeof I == "object" && I.constructor === Object ? (S.splice(S.length - 1, 1), I) : {};
  }
  function h(...S) {
    return "(" + (b(S).capture ? "" : "?:") + S.map((se) => l(se)).join("|") + ")";
  }
  function w(S) {
    return new RegExp(S.toString() + "|").exec("").length - 1;
  }
  function k(S, I) {
    const q = S && S.exec(I);
    return q && q.index === 0;
  }
  const C = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function A(S, { joinWith: I }) {
    let q = 0;
    return S.map((se) => {
      q += 1;
      const be = q;
      let ke = l(se), te = "";
      for (; ke.length > 0; ) {
        const J = C.exec(ke);
        if (!J) {
          te += ke;
          break;
        }
        te += ke.substring(0, J.index), ke = ke.substring(J.index + J[0].length), J[0][0] === "\\" && J[1] ? te += "\\" + String(Number(J[1]) + be) : (te += J[0], J[0] === "(" && q++);
      }
      return te;
    }).map((se) => `(${se})`).join(I);
  }
  const E = /\b\B/, $ = "[a-zA-Z]\\w*", M = "[a-zA-Z_]\\w*", O = "\\b\\d+(\\.\\d+)?", R = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", B = "\\b(0b[01]+)", V = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", re = (S = {}) => {
    const I = /^#![ ]*\//;
    return S.binary && (S.begin = g(
      I,
      /.*\b/,
      S.binary,
      /\b.*/
    )), r({
      scope: "meta",
      begin: I,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (q, se) => {
        q.index !== 0 && se.ignoreMatch();
      }
    }, S);
  }, P = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, U = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [P]
  }, z = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [P]
  }, N = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, F = function(S, I, q = {}) {
    const se = r(
      {
        scope: "comment",
        begin: S,
        end: I,
        contains: []
      },
      q
    );
    se.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const be = h(
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
    return se.contains.push(
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
          be,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), se;
  }, Z = F("//", "$"), W = F("/\\*", "\\*/"), pe = F("#", "$"), le = {
    scope: "number",
    begin: O,
    relevance: 0
  }, Ae = {
    scope: "number",
    begin: R,
    relevance: 0
  }, Oe = {
    scope: "number",
    begin: B,
    relevance: 0
  }, ze = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      P,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [P]
      }
    ]
  }, Qe = {
    scope: "title",
    begin: $,
    relevance: 0
  }, ft = {
    scope: "title",
    begin: M,
    relevance: 0
  }, Ve = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + M,
    relevance: 0
  };
  var oe = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: U,
    BACKSLASH_ESCAPE: P,
    BINARY_NUMBER_MODE: Oe,
    BINARY_NUMBER_RE: B,
    COMMENT: F,
    C_BLOCK_COMMENT_MODE: W,
    C_LINE_COMMENT_MODE: Z,
    C_NUMBER_MODE: Ae,
    C_NUMBER_RE: R,
    END_SAME_AS_BEGIN: function(S) {
      return Object.assign(
        S,
        {
          /** @type {ModeCallback} */
          "on:begin": (I, q) => {
            q.data._beginMatch = I[1];
          },
          /** @type {ModeCallback} */
          "on:end": (I, q) => {
            q.data._beginMatch !== I[1] && q.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: pe,
    IDENT_RE: $,
    MATCH_NOTHING_RE: E,
    METHOD_GUARD: Ve,
    NUMBER_MODE: le,
    NUMBER_RE: O,
    PHRASAL_WORDS_MODE: N,
    QUOTE_STRING_MODE: z,
    REGEXP_MODE: ze,
    RE_STARTERS_RE: V,
    SHEBANG: re,
    TITLE_MODE: Qe,
    UNDERSCORE_IDENT_RE: M,
    UNDERSCORE_TITLE_MODE: ft
  });
  function _e(S, I) {
    S.input[S.index - 1] === "." && I.ignoreMatch();
  }
  function He(S, I) {
    S.className !== void 0 && (S.scope = S.className, delete S.className);
  }
  function et(S, I) {
    I && S.beginKeywords && (S.begin = "\\b(" + S.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", S.__beforeBegin = _e, S.keywords = S.keywords || S.beginKeywords, delete S.beginKeywords, S.relevance === void 0 && (S.relevance = 0));
  }
  function mt(S, I) {
    Array.isArray(S.illegal) && (S.illegal = h(...S.illegal));
  }
  function jt(S, I) {
    if (S.match) {
      if (S.begin || S.end) throw new Error("begin & end are not supported with match");
      S.begin = S.match, delete S.match;
    }
  }
  function Ct(S, I) {
    S.relevance === void 0 && (S.relevance = 1);
  }
  const rn = (S, I) => {
    if (!S.beforeMatch) return;
    if (S.starts) throw new Error("beforeMatch cannot be used with starts");
    const q = Object.assign({}, S);
    Object.keys(S).forEach((se) => {
      delete S[se];
    }), S.keywords = q.keywords, S.begin = g(q.beforeMatch, m(q.begin)), S.starts = {
      relevance: 0,
      contains: [
        Object.assign(q, { endsParent: !0 })
      ]
    }, S.relevance = 0, delete q.beforeMatch;
  }, xt = [
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
  ], Ht = "keyword";
  function st(S, I, q = Ht) {
    const se = /* @__PURE__ */ Object.create(null);
    return typeof S == "string" ? be(q, S.split(" ")) : Array.isArray(S) ? be(q, S) : Object.keys(S).forEach(function(ke) {
      Object.assign(
        se,
        st(S[ke], I, ke)
      );
    }), se;
    function be(ke, te) {
      I && (te = te.map((J) => J.toLowerCase())), te.forEach(function(J) {
        const fe = J.split("|");
        se[fe[0]] = [ke, It(fe[0], fe[1])];
      });
    }
  }
  function It(S, I) {
    return I ? Number(I) : St(S) ? 0 : 1;
  }
  function St(S) {
    return xt.includes(S.toLowerCase());
  }
  const Vt = {}, Xe = (S) => {
    console.error(S);
  }, G = (S, ...I) => {
    console.log(`WARN: ${S}`, ...I);
  }, de = (S, I) => {
    Vt[`${S}/${I}`] || (console.log(`Deprecated as of ${S}. ${I}`), Vt[`${S}/${I}`] = !0);
  }, Ie = new Error();
  function Ue(S, I, { key: q }) {
    let se = 0;
    const be = S[q], ke = {}, te = {};
    for (let J = 1; J <= I.length; J++)
      te[J + se] = be[J], ke[J + se] = !0, se += w(I[J - 1]);
    S[q] = te, S[q]._emit = ke, S[q]._multi = !0;
  }
  function Ut(S) {
    if (Array.isArray(S.begin)) {
      if (S.skip || S.excludeBegin || S.returnBegin)
        throw Xe("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Ie;
      if (typeof S.beginScope != "object" || S.beginScope === null)
        throw Xe("beginScope must be object"), Ie;
      Ue(S, S.begin, { key: "beginScope" }), S.begin = A(S.begin, { joinWith: "" });
    }
  }
  function Hn(S) {
    if (Array.isArray(S.end)) {
      if (S.skip || S.excludeEnd || S.returnEnd)
        throw Xe("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Ie;
      if (typeof S.endScope != "object" || S.endScope === null)
        throw Xe("endScope must be object"), Ie;
      Ue(S, S.end, { key: "endScope" }), S.end = A(S.end, { joinWith: "" });
    }
  }
  function Vn(S) {
    S.scope && typeof S.scope == "object" && S.scope !== null && (S.beginScope = S.scope, delete S.scope);
  }
  function ir(S) {
    Vn(S), typeof S.beginScope == "string" && (S.beginScope = { _wrap: S.beginScope }), typeof S.endScope == "string" && (S.endScope = { _wrap: S.endScope }), Ut(S), Hn(S);
  }
  function Lr(S) {
    function I(te, J) {
      return new RegExp(
        l(te),
        "m" + (S.case_insensitive ? "i" : "") + (S.unicodeRegex ? "u" : "") + (J ? "g" : "")
      );
    }
    class q {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(J, fe) {
        fe.position = this.position++, this.matchIndexes[this.matchAt] = fe, this.regexes.push([fe, J]), this.matchAt += w(J) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const J = this.regexes.map((fe) => fe[1]);
        this.matcherRe = I(A(J, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(J) {
        this.matcherRe.lastIndex = this.lastIndex;
        const fe = this.matcherRe.exec(J);
        if (!fe)
          return null;
        const We = fe.findIndex((Et, Os) => Os > 0 && Et !== void 0), Ce = this.matchIndexes[We];
        return fe.splice(0, We), Object.assign(fe, Ce);
      }
    }
    class se {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(J) {
        if (this.multiRegexes[J]) return this.multiRegexes[J];
        const fe = new q();
        return this.rules.slice(J).forEach(([We, Ce]) => fe.addRule(We, Ce)), fe.compile(), this.multiRegexes[J] = fe, fe;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(J, fe) {
        this.rules.push([J, fe]), fe.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(J) {
        const fe = this.getMatcher(this.regexIndex);
        fe.lastIndex = this.lastIndex;
        let We = fe.exec(J);
        if (this.resumingScanAtSamePosition() && !(We && We.index === this.lastIndex)) {
          const Ce = this.getMatcher(0);
          Ce.lastIndex = this.lastIndex + 1, We = Ce.exec(J);
        }
        return We && (this.regexIndex += We.position + 1, this.regexIndex === this.count && this.considerAll()), We;
      }
    }
    function be(te) {
      const J = new se();
      return te.contains.forEach((fe) => J.addRule(fe.begin, { rule: fe, type: "begin" })), te.terminatorEnd && J.addRule(te.terminatorEnd, { type: "end" }), te.illegal && J.addRule(te.illegal, { type: "illegal" }), J;
    }
    function ke(te, J) {
      const fe = (
        /** @type CompiledMode */
        te
      );
      if (te.isCompiled) return fe;
      [
        He,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        jt,
        ir,
        rn
      ].forEach((Ce) => Ce(te, J)), S.compilerExtensions.forEach((Ce) => Ce(te, J)), te.__beforeBegin = null, [
        et,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        mt,
        // default to 1 relevance if not specified
        Ct
      ].forEach((Ce) => Ce(te, J)), te.isCompiled = !0;
      let We = null;
      return typeof te.keywords == "object" && te.keywords.$pattern && (te.keywords = Object.assign({}, te.keywords), We = te.keywords.$pattern, delete te.keywords.$pattern), We = We || /\w+/, te.keywords && (te.keywords = st(te.keywords, S.case_insensitive)), fe.keywordPatternRe = I(We, !0), J && (te.begin || (te.begin = /\B|\b/), fe.beginRe = I(fe.begin), !te.end && !te.endsWithParent && (te.end = /\B|\b/), te.end && (fe.endRe = I(fe.end)), fe.terminatorEnd = l(fe.end) || "", te.endsWithParent && J.terminatorEnd && (fe.terminatorEnd += (te.end ? "|" : "") + J.terminatorEnd)), te.illegal && (fe.illegalRe = I(
        /** @type {RegExp | string} */
        te.illegal
      )), te.contains || (te.contains = []), te.contains = [].concat(...te.contains.map(function(Ce) {
        return ar(Ce === "self" ? te : Ce);
      })), te.contains.forEach(function(Ce) {
        ke(
          /** @type Mode */
          Ce,
          fe
        );
      }), te.starts && ke(te.starts, J), fe.matcher = be(fe), fe;
    }
    if (S.compilerExtensions || (S.compilerExtensions = []), S.contains && S.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return S.classNameAliases = r(S.classNameAliases || {}), ke(
      /** @type Mode */
      S
    );
  }
  function pn(S) {
    return S ? S.endsWithParent || pn(S.starts) : !1;
  }
  function ar(S) {
    return S.variants && !S.cachedVariants && (S.cachedVariants = S.variants.map(function(I) {
      return r(S, { variants: null }, I);
    })), S.cachedVariants ? S.cachedVariants : pn(S) ? r(S, { starts: S.starts ? r(S.starts) : null }) : Object.isFrozen(S) ? r(S) : S;
  }
  var Or = "11.9.0";
  class Un extends Error {
    constructor(I, q) {
      super(I), this.name = "HTMLInjectionError", this.html = q;
    }
  }
  const An = n, cr = r, Zn = Symbol("nomatch"), Rr = 7, lr = function(S) {
    const I = /* @__PURE__ */ Object.create(null), q = /* @__PURE__ */ Object.create(null), se = [];
    let be = !0;
    const ke = "Could not find the language '{}', did you forget to load/include a language module?", te = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let J = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: d
    };
    function fe(K) {
      return J.noHighlightRe.test(K);
    }
    function We(K) {
      let ce = K.className + " ";
      ce += K.parentNode ? K.parentNode.className : "";
      const we = J.languageDetectRe.exec(ce);
      if (we) {
        const Re = $n(we[1]);
        return Re || (G(ke.replace("{}", we[1])), G("Falling back to no-highlight mode for this block.", K)), Re ? we[1] : "no-highlight";
      }
      return ce.split(/\s+/).find((Re) => fe(Re) || $n(Re));
    }
    function Ce(K, ce, we) {
      let Re = "", Ge = "";
      typeof ce == "object" ? (Re = K, we = ce.ignoreIllegals, Ge = ce.language) : (de("10.7.0", "highlight(lang, code, ...args) has been deprecated."), de("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), Ge = K, Re = ce), we === void 0 && (we = !0);
      const Zt = {
        code: Re,
        language: Ge
      };
      vo("before:highlight", Zt);
      const Mn = Zt.result ? Zt.result : Et(Zt.language, Zt.code, we);
      return Mn.code = Zt.code, vo("after:highlight", Mn), Mn;
    }
    function Et(K, ce, we, Re) {
      const Ge = /* @__PURE__ */ Object.create(null);
      function Zt(ee, ie) {
        return ee.keywords[ie];
      }
      function Mn() {
        if (!he.keywords) {
          tt.addText(De);
          return;
        }
        let ee = 0;
        he.keywordPatternRe.lastIndex = 0;
        let ie = he.keywordPatternRe.exec(De), me = "";
        for (; ie; ) {
          me += De.substring(ee, ie.index);
          const Le = sn.case_insensitive ? ie[0].toLowerCase() : ie[0], it = Zt(he, Le);
          if (it) {
            const [hn, Pv] = it;
            if (tt.addText(me), me = "", Ge[Le] = (Ge[Le] || 0) + 1, Ge[Le] <= Rr && (yo += Pv), hn.startsWith("_"))
              me += ie[0];
            else {
              const Bv = sn.classNameAliases[hn] || hn;
              on(ie[0], Bv);
            }
          } else
            me += ie[0];
          ee = he.keywordPatternRe.lastIndex, ie = he.keywordPatternRe.exec(De);
        }
        me += De.substring(ee), tt.addText(me);
      }
      function _o() {
        if (De === "") return;
        let ee = null;
        if (typeof he.subLanguage == "string") {
          if (!I[he.subLanguage]) {
            tt.addText(De);
            return;
          }
          ee = Et(he.subLanguage, De, !0, su[he.subLanguage]), su[he.subLanguage] = /** @type {CompiledMode} */
          ee._top;
        } else
          ee = Rs(De, he.subLanguage.length ? he.subLanguage : null);
        he.relevance > 0 && (yo += ee.relevance), tt.__addSublanguage(ee._emitter, ee.language);
      }
      function At() {
        he.subLanguage != null ? _o() : Mn(), De = "";
      }
      function on(ee, ie) {
        ee !== "" && (tt.startScope(ie), tt.addText(ee), tt.endScope());
      }
      function tu(ee, ie) {
        let me = 1;
        const Le = ie.length - 1;
        for (; me <= Le; ) {
          if (!ee._emit[me]) {
            me++;
            continue;
          }
          const it = sn.classNameAliases[ee[me]] || ee[me], hn = ie[me];
          it ? on(hn, it) : (De = hn, Mn(), De = ""), me++;
        }
      }
      function nu(ee, ie) {
        return ee.scope && typeof ee.scope == "string" && tt.openNode(sn.classNameAliases[ee.scope] || ee.scope), ee.beginScope && (ee.beginScope._wrap ? (on(De, sn.classNameAliases[ee.beginScope._wrap] || ee.beginScope._wrap), De = "") : ee.beginScope._multi && (tu(ee.beginScope, ie), De = "")), he = Object.create(ee, { parent: { value: he } }), he;
      }
      function ru(ee, ie, me) {
        let Le = k(ee.endRe, me);
        if (Le) {
          if (ee["on:end"]) {
            const it = new t(ee);
            ee["on:end"](ie, it), it.isMatchIgnored && (Le = !1);
          }
          if (Le) {
            for (; ee.endsParent && ee.parent; )
              ee = ee.parent;
            return ee;
          }
        }
        if (ee.endsWithParent)
          return ru(ee.parent, ie, me);
      }
      function Tv(ee) {
        return he.matcher.regexIndex === 0 ? (De += ee[0], 1) : (Ds = !0, 0);
      }
      function Iv(ee) {
        const ie = ee[0], me = ee.rule, Le = new t(me), it = [me.__beforeBegin, me["on:begin"]];
        for (const hn of it)
          if (hn && (hn(ee, Le), Le.isMatchIgnored))
            return Tv(ie);
        return me.skip ? De += ie : (me.excludeBegin && (De += ie), At(), !me.returnBegin && !me.excludeBegin && (De = ie)), nu(me, ee), me.returnBegin ? 0 : ie.length;
      }
      function Lv(ee) {
        const ie = ee[0], me = ce.substring(ee.index), Le = ru(he, ee, me);
        if (!Le)
          return Zn;
        const it = he;
        he.endScope && he.endScope._wrap ? (At(), on(ie, he.endScope._wrap)) : he.endScope && he.endScope._multi ? (At(), tu(he.endScope, ee)) : it.skip ? De += ie : (it.returnEnd || it.excludeEnd || (De += ie), At(), it.excludeEnd && (De = ie));
        do
          he.scope && tt.closeNode(), !he.skip && !he.subLanguage && (yo += he.relevance), he = he.parent;
        while (he !== Le.parent);
        return Le.starts && nu(Le.starts, ee), it.returnEnd ? 0 : ie.length;
      }
      function Ov() {
        const ee = [];
        for (let ie = he; ie !== sn; ie = ie.parent)
          ie.scope && ee.unshift(ie.scope);
        ee.forEach((ie) => tt.openNode(ie));
      }
      let bo = {};
      function ou(ee, ie) {
        const me = ie && ie[0];
        if (De += ee, me == null)
          return At(), 0;
        if (bo.type === "begin" && ie.type === "end" && bo.index === ie.index && me === "") {
          if (De += ce.slice(ie.index, ie.index + 1), !be) {
            const Le = new Error(`0 width match regex (${K})`);
            throw Le.languageName = K, Le.badRule = bo.rule, Le;
          }
          return 1;
        }
        if (bo = ie, ie.type === "begin")
          return Iv(ie);
        if (ie.type === "illegal" && !we) {
          const Le = new Error('Illegal lexeme "' + me + '" for mode "' + (he.scope || "<unnamed>") + '"');
          throw Le.mode = he, Le;
        } else if (ie.type === "end") {
          const Le = Lv(ie);
          if (Le !== Zn)
            return Le;
        }
        if (ie.type === "illegal" && me === "")
          return 1;
        if (zs > 1e5 && zs > ie.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return De += me, me.length;
      }
      const sn = $n(K);
      if (!sn)
        throw Xe(ke.replace("{}", K)), new Error('Unknown language: "' + K + '"');
      const Rv = Lr(sn);
      let Bs = "", he = Re || Rv;
      const su = {}, tt = new J.__emitter(J);
      Ov();
      let De = "", yo = 0, Wn = 0, zs = 0, Ds = !1;
      try {
        if (sn.__emitTokens)
          sn.__emitTokens(ce, tt);
        else {
          for (he.matcher.considerAll(); ; ) {
            zs++, Ds ? Ds = !1 : he.matcher.considerAll(), he.matcher.lastIndex = Wn;
            const ee = he.matcher.exec(ce);
            if (!ee) break;
            const ie = ce.substring(Wn, ee.index), me = ou(ie, ee);
            Wn = ee.index + me;
          }
          ou(ce.substring(Wn));
        }
        return tt.finalize(), Bs = tt.toHTML(), {
          language: K,
          value: Bs,
          relevance: yo,
          illegal: !1,
          _emitter: tt,
          _top: he
        };
      } catch (ee) {
        if (ee.message && ee.message.includes("Illegal"))
          return {
            language: K,
            value: An(ce),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: ee.message,
              index: Wn,
              context: ce.slice(Wn - 100, Wn + 100),
              mode: ee.mode,
              resultSoFar: Bs
            },
            _emitter: tt
          };
        if (be)
          return {
            language: K,
            value: An(ce),
            illegal: !1,
            relevance: 0,
            errorRaised: ee,
            _emitter: tt,
            _top: he
          };
        throw ee;
      }
    }
    function Os(K) {
      const ce = {
        value: An(K),
        illegal: !1,
        relevance: 0,
        _top: te,
        _emitter: new J.__emitter(J)
      };
      return ce._emitter.addText(K), ce;
    }
    function Rs(K, ce) {
      ce = ce || J.languages || Object.keys(I);
      const we = Os(K), Re = ce.filter($n).filter(eu).map(
        (At) => Et(At, K, !1)
      );
      Re.unshift(we);
      const Ge = Re.sort((At, on) => {
        if (At.relevance !== on.relevance) return on.relevance - At.relevance;
        if (At.language && on.language) {
          if ($n(At.language).supersetOf === on.language)
            return 1;
          if ($n(on.language).supersetOf === At.language)
            return -1;
        }
        return 0;
      }), [Zt, Mn] = Ge, _o = Zt;
      return _o.secondBest = Mn, _o;
    }
    function _v(K, ce, we) {
      const Re = ce && q[ce] || we;
      K.classList.add("hljs"), K.classList.add(`language-${Re}`);
    }
    function Ps(K) {
      let ce = null;
      const we = We(K);
      if (fe(we)) return;
      if (vo(
        "before:highlightElement",
        { el: K, language: we }
      ), K.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", K);
        return;
      }
      if (K.children.length > 0 && (J.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(K)), J.throwUnescapedHTML))
        throw new Un(
          "One of your code blocks includes unescaped HTML.",
          K.innerHTML
        );
      ce = K;
      const Re = ce.textContent, Ge = we ? Ce(Re, { language: we, ignoreIllegals: !0 }) : Rs(Re);
      K.innerHTML = Ge.value, K.dataset.highlighted = "yes", _v(K, we, Ge.language), K.result = {
        language: Ge.language,
        // TODO: remove with version 11.0
        re: Ge.relevance,
        relevance: Ge.relevance
      }, Ge.secondBest && (K.secondBest = {
        language: Ge.secondBest.language,
        relevance: Ge.secondBest.relevance
      }), vo("after:highlightElement", { el: K, result: Ge, text: Re });
    }
    function bv(K) {
      J = cr(J, K);
    }
    const yv = () => {
      mo(), de("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function wv() {
      mo(), de("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Jl = !1;
    function mo() {
      if (document.readyState === "loading") {
        Jl = !0;
        return;
      }
      document.querySelectorAll(J.cssSelector).forEach(Ps);
    }
    function kv() {
      Jl && mo();
    }
    typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", kv, !1);
    function Cv(K, ce) {
      let we = null;
      try {
        we = ce(S);
      } catch (Re) {
        if (Xe("Language definition for '{}' could not be registered.".replace("{}", K)), be)
          Xe(Re);
        else
          throw Re;
        we = te;
      }
      we.name || (we.name = K), I[K] = we, we.rawDefinition = ce.bind(null, S), we.aliases && Ql(we.aliases, { languageName: K });
    }
    function xv(K) {
      delete I[K];
      for (const ce of Object.keys(q))
        q[ce] === K && delete q[ce];
    }
    function Sv() {
      return Object.keys(I);
    }
    function $n(K) {
      return K = (K || "").toLowerCase(), I[K] || I[q[K]];
    }
    function Ql(K, { languageName: ce }) {
      typeof K == "string" && (K = [K]), K.forEach((we) => {
        q[we.toLowerCase()] = ce;
      });
    }
    function eu(K) {
      const ce = $n(K);
      return ce && !ce.disableAutodetect;
    }
    function Ev(K) {
      K["before:highlightBlock"] && !K["before:highlightElement"] && (K["before:highlightElement"] = (ce) => {
        K["before:highlightBlock"](
          Object.assign({ block: ce.el }, ce)
        );
      }), K["after:highlightBlock"] && !K["after:highlightElement"] && (K["after:highlightElement"] = (ce) => {
        K["after:highlightBlock"](
          Object.assign({ block: ce.el }, ce)
        );
      });
    }
    function Av(K) {
      Ev(K), se.push(K);
    }
    function $v(K) {
      const ce = se.indexOf(K);
      ce !== -1 && se.splice(ce, 1);
    }
    function vo(K, ce) {
      const we = K;
      se.forEach(function(Re) {
        Re[we] && Re[we](ce);
      });
    }
    function Mv(K) {
      return de("10.7.0", "highlightBlock will be removed entirely in v12.0"), de("10.7.0", "Please use highlightElement now."), Ps(K);
    }
    Object.assign(S, {
      highlight: Ce,
      highlightAuto: Rs,
      highlightAll: mo,
      highlightElement: Ps,
      // TODO: Remove with v12 API
      highlightBlock: Mv,
      configure: bv,
      initHighlighting: yv,
      initHighlightingOnLoad: wv,
      registerLanguage: Cv,
      unregisterLanguage: xv,
      listLanguages: Sv,
      getLanguage: $n,
      registerAliases: Ql,
      autoDetection: eu,
      inherit: cr,
      addPlugin: Av,
      removePlugin: $v
    }), S.debugMode = function() {
      be = !1;
    }, S.safeMode = function() {
      be = !0;
    }, S.versionString = Or, S.regex = {
      concat: g,
      lookahead: m,
      either: h,
      optional: v,
      anyNumberOfTimes: f
    };
    for (const K in oe)
      typeof oe[K] == "object" && e(oe[K]);
    return Object.assign(S, oe), S;
  }, L = lr({});
  return L.newInstance = () => lr({}), qs = L, L.HighlightJS = L, L.default = L, qs;
}
var __ = /* @__PURE__ */ v_();
const mn = /* @__PURE__ */ Ar(__), uu = "[A-Za-z$_][0-9A-Za-z$_]*", b_ = [
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
], y_ = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Gp = [
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
], Kp = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Xp = [
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
], w_ = [
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
], k_ = [].concat(
  Xp,
  Gp,
  Kp
);
function Yp(e) {
  const t = e.regex, n = (F, { after: Z }) => {
    const W = "</" + F[0].slice(1);
    return F.input.indexOf(W, Z) !== -1;
  }, r = uu, s = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (F, Z) => {
      const W = F[0].length + F.index, pe = F.input[W];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        pe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        pe === ","
      ) {
        Z.ignoreMatch();
        return;
      }
      pe === ">" && (n(F, { after: W }) || Z.ignoreMatch());
      let le;
      const Ae = F.input.substring(W);
      if (le = Ae.match(/^\s*=/)) {
        Z.ignoreMatch();
        return;
      }
      if ((le = Ae.match(/^\s+extends\s+/)) && le.index === 0) {
        Z.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: uu,
    keyword: b_,
    literal: y_,
    built_in: k_,
    "variable.language": w_
  }, c = "[0-9](_?[0-9])*", u = `\\.(${c})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", l = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${u})|\\.)?|(${u}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${d})\\b((${u})\\b|\\.)?|(${u})\\b` },
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
  }, m = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, f = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        m
      ],
      subLanguage: "xml"
    }
  }, v = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        m
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
        m
      ],
      subLanguage: "graphql"
    }
  }, b = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      m
    ]
  }, w = {
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
  }, k = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    f,
    v,
    g,
    b,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    l
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  m.contains = k.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(k)
  });
  const C = [].concat(w, m.contains), A = C.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(C)
    }
  ]), E = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: A
  }, $ = {
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
  }, M = {
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
        ...Gp,
        ...Kp
      ]
    }
  }, O = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, R = {
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
    contains: [E],
    illegal: /%/
  }, B = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function V(F) {
    return t.concat("(?!", F.join("|"), ")");
  }
  const re = {
    match: t.concat(
      /\b/,
      V([
        ...Xp,
        "super",
        "import"
      ]),
      r,
      t.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  }, P = {
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
      E
    ]
  }, z = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", N = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(z)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      E
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: A, CLASS_REFERENCE: M },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      f,
      v,
      g,
      b,
      w,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      l,
      M,
      {
        className: "attr",
        begin: r + t.lookahead(":"),
        relevance: 0
      },
      N,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          w,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: z,
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
                    contains: A
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
      R,
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
          E,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      P,
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
        contains: [E]
      },
      re,
      B,
      $,
      U,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Jp(e) {
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
  }), a = e.inherit(e.APOS_STRING_MODE, { className: "string" }), c = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), u = {
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
          c,
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
                  c,
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
              c
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
const C_ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x_(e, t) {
  return y(), x("svg", C_, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
    }, null, -1)
  ]));
}
const S_ = { name: "mdi-close", render: x_ }, qt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, E_ = {}, A_ = { class: "chat-button" };
function $_(e, t) {
  return y(), x("button", A_, [
    ne(e.$slots, "default")
  ]);
}
const M_ = /* @__PURE__ */ qt(E_, [["render", $_]]);
function rl() {
  return $e(Vp);
}
function uo() {
  return {
    options: $e(Up)
  };
}
function ds() {
  const { options: e } = uo(), t = (e == null ? void 0 : e.defaultLanguage) ?? "en";
  function n(s) {
    var i, a;
    const o = (a = (i = e == null ? void 0 : e.i18n) == null ? void 0 : i[t]) == null ? void 0 : a[s];
    return Rp(o) ? o.value : o ?? s;
  }
  function r(s) {
    var o, i;
    return !!((i = (o = e == null ? void 0 : e.i18n) == null ? void 0 : o[t]) != null && i[s]);
  }
  return { t: n, te: r };
}
const T_ = { class: "chat-get-started" }, I_ = /* @__PURE__ */ H({
  __name: "GetStarted",
  setup(e) {
    const { t } = ds();
    return (n, r) => (y(), x("div", T_, [
      ue(M_, {
        onClick: r[0] || (r[0] = (s) => n.$emit("click:button"))
      }, {
        default: Y(() => [
          _r(ve(_(t)("getStarted")), 1)
        ]),
        _: 1
      })
    ]));
  }
}), L_ = {}, O_ = { class: "chat-powered-by" };
function R_(e, t) {
  return y(), x("div", O_, t[0] || (t[0] = [
    _r(" Powered by "),
    p("a", { href: "https://elyxia.uk" }, "Elyxia Global Limited", -1)
  ]));
}
const P_ = /* @__PURE__ */ qt(L_, [["render", R_]]), B_ = { class: "chat-get-started-footer" }, z_ = { key: 0 }, D_ = /* @__PURE__ */ H({
  __name: "GetStartedFooter",
  setup(e) {
    const { t, te: n } = ds();
    return (r, s) => (y(), x("div", B_, [
      _(n)("footer") ? (y(), x("div", z_, ve(_(t)("footer")), 1)) : Q("", !0),
      ue(P_)
    ]));
  }
});
function N_(e) {
  return Pp() ? (Bp(e), !0) : !1;
}
function q_() {
  const e = /* @__PURE__ */ new Set(), t = (s) => {
    e.delete(s);
  };
  return {
    on: (s) => {
      e.add(s);
      const o = () => t(s);
      return N_(o), {
        off: o
      };
    },
    off: t,
    trigger: (...s) => Promise.all(Array.from(e).map((o) => o(...s)))
  };
}
const F_ = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const j_ = (e, t) => Object.prototype.hasOwnProperty.call(e, t), H_ = F_ ? window.document : void 0, V_ = {
  multiple: !0,
  accept: "*",
  reset: !1,
  directory: !1
};
function U_(e = {}) {
  const {
    document: t = H_
  } = e, n = D(null), { on: r, trigger: s } = q_();
  let o;
  t && (o = t.createElement("input"), o.type = "file", o.onchange = (c) => {
    const u = c.target;
    n.value = u.files, s(n.value);
  });
  const i = () => {
    n.value = null, o && o.value && (o.value = "", s(null));
  }, a = (c) => {
    if (!o)
      return;
    const u = {
      ...V_,
      ...e,
      ...c
    };
    o.multiple = u.multiple, o.accept = u.accept, o.webkitdirectory = u.directory, j_(u, "capture") && (o.capture = u.capture), u.reset && i(), o.click();
  };
  return {
    files: zp(n),
    open: a,
    reset: i,
    onChange: r
  };
}
const Z_ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W_(e, t) {
  return y(), x("svg", Z_, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
    }, null, -1)
  ]));
}
const G_ = { name: "mdi-paperclip", render: W_ }, K_ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function X_(e, t) {
  return y(), x("svg", K_, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ]));
}
const Y_ = { name: "mdi-send", render: X_ }, J_ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Q_(e, t) {
  return y(), x("svg", J_, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
    }, null, -1)
  ]));
}
const eb = { name: "mdi-closeThick", render: Q_ }, tb = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nb(e, t) {
  return y(), x("svg", tb, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
    }, null, -1)
  ]));
}
const rb = { name: "mdi-fileImage", render: nb }, ob = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sb(e, t) {
  return y(), x("svg", ob, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"
    }, null, -1)
  ]));
}
const ib = { name: "mdi-fileMusic", render: sb }, ab = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cb(e, t) {
  return y(), x("svg", ab, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
    }, null, -1)
  ]));
}
const du = { name: "mdi-fileText", render: cb }, lb = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ub(e, t) {
  return y(), x("svg", lb, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"
    }, null, -1)
  ]));
}
const db = { name: "mdi-fileVideo", render: ub }, fb = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pb(e, t) {
  return y(), x("svg", fb, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
    }, null, -1)
  ]));
}
const hb = { name: "mdi-openInNew", render: pb }, gb = { class: "chat-file-name" }, mb = /* @__PURE__ */ H({
  __name: "ChatFile",
  props: {
    file: {},
    isRemovable: { type: Boolean },
    isPreviewable: { type: Boolean }
  },
  emits: ["remove"],
  setup(e, { emit: t }) {
    const n = e, r = t, s = {
      document: du,
      audio: ib,
      image: rb,
      video: db
    }, o = T(() => {
      var u;
      const c = (u = n.file) == null ? void 0 : u.type.split("/")[0];
      return s[c] || du;
    });
    function i() {
      n.isPreviewable && window.open(URL.createObjectURL(n.file));
    }
    function a() {
      r("remove", n.file);
    }
    return (c, u) => (y(), x("div", {
      class: "chat-file",
      onClick: i
    }, [
      ue(_(o)),
      p("p", gb, ve(c.file.name), 1),
      c.isRemovable ? (y(), x("span", {
        key: 0,
        class: "chat-file-delete",
        onClick: Ke(a, ["stop"])
      }, [
        ue(_(eb))
      ])) : c.isPreviewable ? (y(), X(_(hb), {
        key: 1,
        class: "chat-file-preview"
      })) : Q("", !0)
    ]));
  }
}), Qp = /* @__PURE__ */ qt(mb, [["__scopeId", "data-v-9dc229e7"]]), vb = { class: "chat-inputs" }, _b = {
  key: 0,
  class: "chat-input-left-panel"
}, bb = ["disabled", "placeholder"], yb = { class: "chat-inputs-controls" }, wb = ["disabled"], kb = ["disabled"], Cb = {
  key: 0,
  class: "chat-files"
}, xb = /* @__PURE__ */ H({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = ds(), s = t, { options: o } = uo(), i = rl(), { waitingForResponse: a } = i, c = D(null), u = D(null), d = D(""), l = D(!1), m = D(null), f = T(() => {
      var U;
      return d.value === "" || _(a) || ((U = o.disabled) == null ? void 0 : U.value) === !0;
    }), v = T(() => {
      var U;
      return ((U = o.disabled) == null ? void 0 : U.value) === !0;
    }), g = T(
      () => {
        var U;
        return b.value && _(a) && !((U = o.disabled) != null && U.value);
      }
    ), b = T(() => _(o.allowFileUploads) === !0), h = T(() => _(o.allowedFilesMimeTypes)), w = T(() => ({
      "--controls-count": b.value ? 2 : 1
    })), {
      open: k,
      reset: C,
      onChange: A
    } = U_({
      multiple: !0,
      reset: !1
    });
    A((U) => {
      if (!U) return;
      const z = new DataTransfer();
      if (c.value)
        for (let N = 0; N < c.value.length; N++)
          z.items.add(c.value[N]);
      for (let N = 0; N < U.length; N++)
        z.items.add(U[N]);
      c.value = z.files;
    }), Be(() => {
      ht.on("focusInput", $), ht.on("blurInput", E), ht.on("setInputValue", M), u.value && (m.value = new ResizeObserver((U) => {
        for (const z of U)
          z.target === u.value && P();
      }), m.value.observe(u.value));
    }), Dp(() => {
      ht.off("focusInput", $), ht.off("blurInput", E), ht.off("setInputValue", M), m.value && (m.value.disconnect(), m.value = null);
    });
    function E() {
      u.value && u.value.blur();
    }
    function $() {
      u.value && u.value.focus();
    }
    function M(U) {
      d.value = U, $();
    }
    async function O(U) {
      if (U.preventDefault(), f.value)
        return;
      const z = d.value;
      d.value = "", l.value = !0, await i.sendMessage(z, Array.from(c.value ?? [])), l.value = !1, C(), c.value = null;
    }
    async function R(U) {
      U.shiftKey || (await O(U), P());
    }
    function B(U) {
      if (!c.value) return;
      const z = new DataTransfer();
      for (let N = 0; N < c.value.length; N++) {
        const F = c.value[N];
        U.name !== F.name && z.items.add(F);
      }
      C(), c.value = z.files;
    }
    function V(U) {
      (U.key === "ArrowUp" || U.key === "ArrowDown") && (U.preventDefault(), s("arrowKeyDown", {
        key: U.key,
        currentInputValue: d.value
      }));
    }
    function re() {
      g.value || k({ accept: _(h) });
    }
    function P() {
      const U = u.value;
      if (!U) return;
      U.style.height = "var(--chat--textarea--height)";
      const z = Math.min(U.scrollHeight, 480);
      U.style.height = `${z}px`;
    }
    return (U, z) => {
      var N;
      return y(), x("div", {
        class: "chat-input",
        style: qe(w.value),
        onKeydown: Ke(V, ["stop"])
      }, [
        p("div", vb, [
          U.$slots.leftPanel ? (y(), x("div", _b, [
            ne(U.$slots, "leftPanel", {}, void 0, !0)
          ])) : Q("", !0),
          Ye(p("textarea", {
            ref_key: "chatTextArea",
            ref: u,
            "onUpdate:modelValue": z[0] || (z[0] = (F) => d.value = F),
            "data-test-id": "chat-input",
            disabled: v.value,
            placeholder: _(r)(n.placeholder),
            onKeydown: at(R, ["enter"]),
            onInput: P,
            onMousedown: P,
            onFocus: P
          }, null, 40, bb), [
            [Np, d.value]
          ]),
          p("div", yb, [
            b.value ? (y(), x("button", {
              key: 0,
              disabled: g.value,
              class: "chat-input-file-button",
              "data-test-id": "chat-attach-file-button",
              onClick: re
            }, [
              ue(_(G_), {
                height: "24",
                width: "24"
              })
            ], 8, wb)) : Q("", !0),
            p("button", {
              disabled: f.value,
              class: "chat-input-send-button",
              onClick: O
            }, [
              ue(_(Y_), {
                height: "24",
                width: "24"
              })
            ], 8, kb)
          ])
        ]),
        (N = c.value) != null && N.length && !l.value ? (y(), x("div", Cb, [
          (y(!0), x(Pe, null, Je(c.value, (F) => (y(), X(Qp, {
            key: F.name,
            file: F,
            "is-removable": !0,
            "is-previewable": !0,
            onRemove: B
          }, null, 8, ["file"]))), 128))
        ])) : Q("", !0)
      ], 36);
    };
  }
}), Sb = /* @__PURE__ */ qt(xb, [["__scopeId", "data-v-6a8287ea"]]), Eb = { class: "chat-layout" }, Ab = {
  key: 0,
  class: "chat-header"
}, $b = {
  key: 2,
  class: "chat-footer"
}, Mb = /* @__PURE__ */ H({
  __name: "Layout",
  setup(e) {
    const t = D(null);
    function n() {
      const r = t.value;
      r && (r.scrollTop = r.scrollHeight);
    }
    return Be(() => {
      ht.on("scrollToBottom", n), window.addEventListener("resize", n);
    }), Nt(() => {
      ht.off("scrollToBottom", n), window.removeEventListener("resize", n);
    }), (r, s) => (y(), x("main", Eb, [
      r.$slots.header ? (y(), x("div", Ab, [
        ne(r.$slots, "header")
      ])) : Q("", !0),
      r.$slots.default ? (y(), x("div", {
        key: 1,
        ref_key: "chatBodyRef",
        ref: t,
        class: "chat-body"
      }, [
        ne(r.$slots, "default")
      ], 512)) : Q("", !0),
      r.$slots.footer ? (y(), x("div", $b, [
        ne(r.$slots, "footer")
      ])) : Q("", !0)
    ]));
  }
}), Tb = /(%|)\{([0-9a-zA-Z_]+)\}/g;
function Ib() {
  const e = (n, r) => r in n;
  function t(n, ...r) {
    if (typeof n == "function")
      return n(r);
    const s = n;
    let o = r;
    return r.length === 1 && typeof r[0] == "object" && (o = r[0]), o != null && o.hasOwnProperty || (o = {}), s.replace(Tb, (i, a, c, u) => {
      let d;
      return s[u - 1] === "{" && s[u + i.length] === "}" ? `${c}` : (d = e(o, c) ? `${o[c]}` : null, d ?? "");
    });
  }
  return t;
}
const Lb = {
  "generic.retry": "Retry",
  "nds.auth.roles.owner": "Owner",
  "nds.userInfo.you": "(you)",
  "nds.userSelect.selectUser": "Select User",
  "nds.userSelect.noMatchingUsers": "No matching users",
  "notice.showMore": "Show more",
  "notice.showLess": "Show less",
  "formInput.validator.fieldRequired": "This field is required",
  "formInput.validator.minCharactersRequired": "Must be at least {minimum} characters",
  "formInput.validator.maxCharactersRequired": "Must be at most {maximum} characters",
  "formInput.validator.oneNumbersRequired": (e) => `Must have at least ${e.minimum} number${e.minimum > 1 ? "s" : ""}`,
  "formInput.validator.validEmailRequired": "Must be a valid email",
  "formInput.validator.uppercaseCharsRequired": (e) => `Must have at least ${e.minimum} uppercase character${e.minimum > 1 ? "s" : ""}`,
  "formInput.validator.defaultPasswordRequirements": "8+ characters, at least 1 number and 1 capital letter",
  "sticky.markdownHint": 'You can style with <a href="https://docs.n8n.io/workflows/sticky-notes/" target="_blank">Markdown</a>',
  "tags.showMore": (e) => `+${e} more`,
  "datatable.pageSize": "Page size",
  "codeDiff.couldNotReplace": "Could not replace code",
  "codeDiff.codeReplaced": "Code replaced",
  "codeDiff.replaceMyCode": "Replace my code",
  "codeDiff.replacing": "Replacing...",
  "codeDiff.undo": "Undo",
  "betaTag.beta": "beta",
  "askAssistantButton.askAssistant": "Ask Assistant",
  "assistantChat.builder.name": "AI Builder",
  "assistantChat.builder.generatingFinalWorkflow": "Generating final workflow...",
  "assistantChat.builder.configuredNodes": "Configured nodes",
  "assistantChat.builder.thumbsUp": "Helpful",
  "assistantChat.builder.thumbsDown": "Not helpful",
  "assistantChat.builder.feedbackPlaceholder": "Tell us about your experience",
  "assistantChat.builder.success": "Thank you for your feedback!",
  "assistantChat.builder.submit": "Submit feedback",
  "assistantChat.builder.workflowGenerated1": "Your workflow was created successfully!",
  "assistantChat.builder.workflowGenerated2": "Fix any missing credentials before testing it.",
  "assistantChat.builder.configuringNodes": "Configuring nodes...",
  "assistantChat.builder.selectedNodes": "Selected workflow nodes",
  "assistantChat.builder.selectingNodes": "Selecting nodes...",
  "assistantChat.builder.generatedNodes": "Generated workflow nodes",
  "assistantChat.errorParsingMarkdown": "Error parsing markdown content",
  "assistantChat.aiAssistantLabel": "AI Assistant",
  "assistantChat.aiAssistantName": "Assistant",
  "assistantChat.sessionEndMessage.1": "This Assistant session has ended. To start a new session with the Assistant, click an",
  "assistantChat.sessionEndMessage.2": "button in n8n",
  "assistantChat.you": "You",
  "assistantChat.quickRepliesTitle": "Quick reply 👇",
  "assistantChat.placeholder.1": () => "I can answer most questions about building workflows in n8n.",
  "assistantChat.placeholder.2": "For specific tasks, you’ll see the",
  "assistantChat.placeholder.3": "button in the UI.",
  "assistantChat.placeholder.4": "How can I help?",
  "assistantChat.inputPlaceholder": "Enter your response...",
  "assistantChat.copy": "Copy",
  "assistantChat.copied": "Copied",
  "inlineAskAssistantButton.asked": "Asked",
  "iconPicker.button.defaultToolTip": "Choose icon",
  "iconPicker.tabs.icons": "Icons",
  "iconPicker.tabs.emojis": "Emojis",
  "selectableList.addDefault": "+ Add a",
  "auth.changePassword.passwordsMustMatchError": "Passwords must match"
}, Ob = Ib();
let fu = Lb;
const Rb = function(e, t) {
  return fu[e] !== void 0 ? Ob(fu[e], ...t ? [t] : []) : "";
}, vn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (s) => {
  const o = e == null ? void 0 : e(s);
  if (n === !1 || !o)
    return t == null ? void 0 : t(s);
};
var pu;
const ut = typeof window < "u", Pb = (e) => typeof e == "string", eh = () => {
}, th = ut && ((pu = window == null ? void 0 : window.navigator) == null ? void 0 : pu.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function nh(e) {
  return typeof e == "function" ? e() : _(e);
}
function Bb(e) {
  return e;
}
function ol(e) {
  return Pp() ? (Bp(e), !0) : !1;
}
function zb(e, t = !0) {
  ot() ? Be(e) : t ? e() : xe(e);
}
function Bn(e) {
  var t;
  const n = nh(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const sl = ut ? window : void 0;
function Qn(...e) {
  let t, n, r, s;
  if (Pb(e[0]) || Array.isArray(e[0]) ? ([n, r, s] = e, t = sl) : [t, n, r, s] = e, !t)
    return eh;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], i = () => {
    o.forEach((d) => d()), o.length = 0;
  }, a = (d, l, m, f) => (d.addEventListener(l, m, f), () => d.removeEventListener(l, m, f)), c = ae(() => [Bn(t), nh(s)], ([d, l]) => {
    i(), d && o.push(...n.flatMap((m) => r.map((f) => a(d, m, f, l))));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), i();
  };
  return ol(u), u;
}
let hu = !1;
function Db(e, t, n = {}) {
  const { window: r = sl, ignore: s = [], capture: o = !0, detectIframe: i = !1 } = n;
  if (!r)
    return;
  th && !hu && (hu = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", eh)));
  let a = !0;
  const c = (m) => s.some((f) => {
    if (typeof f == "string")
      return Array.from(r.document.querySelectorAll(f)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = Bn(f);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), d = [
    Qn(r, "click", (m) => {
      const f = Bn(e);
      if (!(!f || f === m.target || m.composedPath().includes(f))) {
        if (m.detail === 0 && (a = !c(m)), !a) {
          a = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: o }),
    Qn(r, "pointerdown", (m) => {
      const f = Bn(e);
      f && (a = !m.composedPath().includes(f) && !c(m));
    }, { passive: !0 }),
    i && Qn(r, "blur", (m) => {
      var f;
      const v = Bn(e);
      ((f = r.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !(v != null && v.contains(r.document.activeElement)) && t(m);
    })
  ].filter(Boolean);
  return () => d.forEach((m) => m());
}
function Nb(e, t = !1) {
  const n = D(), r = () => n.value = !!e();
  return r(), zb(r, t), n;
}
const gu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, mu = "__vueuse_ssr_handlers__";
gu[mu] = gu[mu] || {};
var vu = Object.getOwnPropertySymbols, qb = Object.prototype.hasOwnProperty, Fb = Object.prototype.propertyIsEnumerable, jb = (e, t) => {
  var n = {};
  for (var r in e)
    qb.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && vu)
    for (var r of vu(e))
      t.indexOf(r) < 0 && Fb.call(e, r) && (n[r] = e[r]);
  return n;
};
function fs(e, t, n = {}) {
  const r = n, { window: s = sl } = r, o = jb(r, ["window"]);
  let i;
  const a = Nb(() => s && "ResizeObserver" in s), c = () => {
    i && (i.disconnect(), i = void 0);
  }, u = ae(() => Bn(e), (l) => {
    c(), a.value && s && l && (i = new ResizeObserver(t), i.observe(l, o));
  }, { immediate: !0, flush: "post" }), d = () => {
    c(), u();
  };
  return ol(d), {
    isSupported: a,
    stop: d
  };
}
var _u;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(_u || (_u = {}));
var Hb = Object.defineProperty, bu = Object.getOwnPropertySymbols, Vb = Object.prototype.hasOwnProperty, Ub = Object.prototype.propertyIsEnumerable, yu = (e, t, n) => t in e ? Hb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Zb = (e, t) => {
  for (var n in t || (t = {}))
    Vb.call(t, n) && yu(e, n, t[n]);
  if (bu)
    for (var n of bu(t))
      Ub.call(t, n) && yu(e, n, t[n]);
  return e;
};
const Wb = {
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
Zb({
  linear: Bb
}, Wb);
const Gb = () => ut && /firefox/i.test(window.navigator.userAgent), il = (e) => {
  let t, n;
  return e.type === "touchend" ? (n = e.changedTouches[0].clientY, t = e.changedTouches[0].clientX) : e.type.startsWith("touch") ? (n = e.touches[0].clientY, t = e.touches[0].clientX) : (n = e.clientY, t = e.clientX), {
    clientX: t,
    clientY: n
  };
};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Jr = () => {
}, Kb = Object.prototype.hasOwnProperty, Ko = (e, t) => Kb.call(e, t), Xb = Array.isArray, Ot = (e) => typeof e == "function", Xt = (e) => typeof e == "string", Yt = (e) => e !== null && typeof e == "object", Yb = Object.prototype.toString, Jb = (e) => Yb.call(e), Fs = (e) => Jb(e).slice(8, -1);
var rh = typeof global == "object" && global && global.Object === Object && global, Qb = typeof self == "object" && self && self.Object === Object && self, fn = rh || Qb || Function("return this")(), Nn = fn.Symbol, oh = Object.prototype, ey = oh.hasOwnProperty, ty = oh.toString, zr = Nn ? Nn.toStringTag : void 0;
function ny(e) {
  var t = ey.call(e, zr), n = e[zr];
  try {
    e[zr] = void 0;
    var r = !0;
  } catch {
  }
  var s = ty.call(e);
  return r && (t ? e[zr] = n : delete e[zr]), s;
}
var ry = Object.prototype, oy = ry.toString;
function sy(e) {
  return oy.call(e);
}
var iy = "[object Null]", ay = "[object Undefined]", wu = Nn ? Nn.toStringTag : void 0;
function $r(e) {
  return e == null ? e === void 0 ? ay : iy : wu && wu in Object(e) ? ny(e) : sy(e);
}
function br(e) {
  return e != null && typeof e == "object";
}
var cy = "[object Symbol]";
function ps(e) {
  return typeof e == "symbol" || br(e) && $r(e) == cy;
}
function ly(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = Array(r); ++n < r; )
    s[n] = t(e[n], n, e);
  return s;
}
var wn = Array.isArray, ku = Nn ? Nn.prototype : void 0, Cu = ku ? ku.toString : void 0;
function sh(e) {
  if (typeof e == "string")
    return e;
  if (wn(e))
    return ly(e, sh) + "";
  if (ps(e))
    return Cu ? Cu.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
var uy = /\s/;
function dy(e) {
  for (var t = e.length; t-- && uy.test(e.charAt(t)); )
    ;
  return t;
}
var fy = /^\s+/;
function py(e) {
  return e && e.slice(0, dy(e) + 1).replace(fy, "");
}
function yr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var xu = NaN, hy = /^[-+]0x[0-9a-f]+$/i, gy = /^0b[01]+$/i, my = /^0o[0-7]+$/i, vy = parseInt;
function Su(e) {
  if (typeof e == "number")
    return e;
  if (ps(e))
    return xu;
  if (yr(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = yr(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = py(e);
  var n = gy.test(e);
  return n || my.test(e) ? vy(e.slice(2), n ? 2 : 8) : hy.test(e) ? xu : +e;
}
function _y(e) {
  return e;
}
var by = "[object AsyncFunction]", yy = "[object Function]", wy = "[object GeneratorFunction]", ky = "[object Proxy]";
function ih(e) {
  if (!yr(e))
    return !1;
  var t = $r(e);
  return t == yy || t == wy || t == by || t == ky;
}
var js = fn["__core-js_shared__"], Eu = function() {
  var e = /[^.]+$/.exec(js && js.keys && js.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Cy(e) {
  return !!Eu && Eu in e;
}
var xy = Function.prototype, Sy = xy.toString;
function sr(e) {
  if (e != null) {
    try {
      return Sy.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ey = /[\\^$.*+?()[\]{}|]/g, Ay = /^\[object .+?Constructor\]$/, $y = Function.prototype, My = Object.prototype, Ty = $y.toString, Iy = My.hasOwnProperty, Ly = RegExp(
  "^" + Ty.call(Iy).replace(Ey, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Oy(e) {
  if (!yr(e) || Cy(e))
    return !1;
  var t = ih(e) ? Ly : Ay;
  return t.test(sr(e));
}
function Ry(e, t) {
  return e == null ? void 0 : e[t];
}
function Mr(e, t) {
  var n = Ry(e, t);
  return Oy(n) ? n : void 0;
}
var xc = Mr(fn, "WeakMap");
function Py(e, t, n, r) {
  e.length;
  for (var s = n + 1; s--; )
    if (t(e[s], s, e))
      return s;
  return -1;
}
var By = 9007199254740991, zy = /^(?:0|[1-9]\d*)$/;
function ah(e, t) {
  var n = typeof e;
  return t = t ?? By, !!t && (n == "number" || n != "symbol" && zy.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ch(e, t) {
  return e === t || e !== e && t !== t;
}
var Dy = 9007199254740991;
function al(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Dy;
}
function Ny(e) {
  return e != null && al(e.length) && !ih(e);
}
var qy = Object.prototype;
function Fy(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || qy;
  return e === n;
}
function jy(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Hy = "[object Arguments]";
function Au(e) {
  return br(e) && $r(e) == Hy;
}
var lh = Object.prototype, Vy = lh.hasOwnProperty, Uy = lh.propertyIsEnumerable, uh = Au(/* @__PURE__ */ function() {
  return arguments;
}()) ? Au : function(e) {
  return br(e) && Vy.call(e, "callee") && !Uy.call(e, "callee");
};
function Zy() {
  return !1;
}
var dh = typeof exports == "object" && exports && !exports.nodeType && exports, $u = dh && typeof module == "object" && module && !module.nodeType && module, Wy = $u && $u.exports === dh, Mu = Wy ? fn.Buffer : void 0, Gy = Mu ? Mu.isBuffer : void 0, Sc = Gy || Zy, Ky = "[object Arguments]", Xy = "[object Array]", Yy = "[object Boolean]", Jy = "[object Date]", Qy = "[object Error]", ew = "[object Function]", tw = "[object Map]", nw = "[object Number]", rw = "[object Object]", ow = "[object RegExp]", sw = "[object Set]", iw = "[object String]", aw = "[object WeakMap]", cw = "[object ArrayBuffer]", lw = "[object DataView]", uw = "[object Float32Array]", dw = "[object Float64Array]", fw = "[object Int8Array]", pw = "[object Int16Array]", hw = "[object Int32Array]", gw = "[object Uint8Array]", mw = "[object Uint8ClampedArray]", vw = "[object Uint16Array]", _w = "[object Uint32Array]", Ne = {};
Ne[uw] = Ne[dw] = Ne[fw] = Ne[pw] = Ne[hw] = Ne[gw] = Ne[mw] = Ne[vw] = Ne[_w] = !0;
Ne[Ky] = Ne[Xy] = Ne[cw] = Ne[Yy] = Ne[lw] = Ne[Jy] = Ne[Qy] = Ne[ew] = Ne[tw] = Ne[nw] = Ne[rw] = Ne[ow] = Ne[sw] = Ne[iw] = Ne[aw] = !1;
function bw(e) {
  return br(e) && al(e.length) && !!Ne[$r(e)];
}
function yw(e) {
  return function(t) {
    return e(t);
  };
}
var fh = typeof exports == "object" && exports && !exports.nodeType && exports, Vr = fh && typeof module == "object" && module && !module.nodeType && module, ww = Vr && Vr.exports === fh, Hs = ww && rh.process, Tu = function() {
  try {
    var e = Vr && Vr.require && Vr.require("util").types;
    return e || Hs && Hs.binding && Hs.binding("util");
  } catch {
  }
}(), Iu = Tu && Tu.isTypedArray, ph = Iu ? yw(Iu) : bw, kw = Object.prototype, Cw = kw.hasOwnProperty;
function xw(e, t) {
  var n = wn(e), r = !n && uh(e), s = !n && !r && Sc(e), o = !n && !r && !s && ph(e), i = n || r || s || o, a = i ? jy(e.length, String) : [], c = a.length;
  for (var u in e)
    Cw.call(e, u) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    ah(u, c))) && a.push(u);
  return a;
}
function Sw(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ew = Sw(Object.keys, Object), Aw = Object.prototype, $w = Aw.hasOwnProperty;
function Mw(e) {
  if (!Fy(e))
    return Ew(e);
  var t = [];
  for (var n in Object(e))
    $w.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function hh(e) {
  return Ny(e) ? xw(e) : Mw(e);
}
var Tw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Iw = /^\w*$/;
function cl(e, t) {
  if (wn(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ps(e) ? !0 : Iw.test(e) || !Tw.test(e) || t != null && e in Object(t);
}
var Qr = Mr(Object, "create");
function Lw() {
  this.__data__ = Qr ? Qr(null) : {}, this.size = 0;
}
function Ow(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Rw = "__lodash_hash_undefined__", Pw = Object.prototype, Bw = Pw.hasOwnProperty;
function zw(e) {
  var t = this.__data__;
  if (Qr) {
    var n = t[e];
    return n === Rw ? void 0 : n;
  }
  return Bw.call(t, e) ? t[e] : void 0;
}
var Dw = Object.prototype, Nw = Dw.hasOwnProperty;
function qw(e) {
  var t = this.__data__;
  return Qr ? t[e] !== void 0 : Nw.call(t, e);
}
var Fw = "__lodash_hash_undefined__";
function jw(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Qr && t === void 0 ? Fw : t, this;
}
function rr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
rr.prototype.clear = Lw;
rr.prototype.delete = Ow;
rr.prototype.get = zw;
rr.prototype.has = qw;
rr.prototype.set = jw;
function Hw() {
  this.__data__ = [], this.size = 0;
}
function hs(e, t) {
  for (var n = e.length; n--; )
    if (ch(e[n][0], t))
      return n;
  return -1;
}
var Vw = Array.prototype, Uw = Vw.splice;
function Zw(e) {
  var t = this.__data__, n = hs(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Uw.call(t, n, 1), --this.size, !0;
}
function Ww(e) {
  var t = this.__data__, n = hs(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Gw(e) {
  return hs(this.__data__, e) > -1;
}
function Kw(e, t) {
  var n = this.__data__, r = hs(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Sn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Sn.prototype.clear = Hw;
Sn.prototype.delete = Zw;
Sn.prototype.get = Ww;
Sn.prototype.has = Gw;
Sn.prototype.set = Kw;
var eo = Mr(fn, "Map");
function Xw() {
  this.size = 0, this.__data__ = {
    hash: new rr(),
    map: new (eo || Sn)(),
    string: new rr()
  };
}
function Yw(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function gs(e, t) {
  var n = e.__data__;
  return Yw(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Jw(e) {
  var t = gs(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Qw(e) {
  return gs(this, e).get(e);
}
function ek(e) {
  return gs(this, e).has(e);
}
function tk(e, t) {
  var n = gs(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function En(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
En.prototype.clear = Xw;
En.prototype.delete = Jw;
En.prototype.get = Qw;
En.prototype.has = ek;
En.prototype.set = tk;
var nk = "Expected a function";
function ll(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(nk);
  var n = function() {
    var r = arguments, s = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(s))
      return o.get(s);
    var i = e.apply(this, r);
    return n.cache = o.set(s, i) || o, i;
  };
  return n.cache = new (ll.Cache || En)(), n;
}
ll.Cache = En;
var rk = 500;
function ok(e) {
  var t = ll(e, function(r) {
    return n.size === rk && n.clear(), r;
  }), n = t.cache;
  return t;
}
var sk = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ik = /\\(\\)?/g, ak = ok(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(sk, function(n, r, s, o) {
    t.push(s ? o.replace(ik, "$1") : r || n);
  }), t;
});
function ck(e) {
  return e == null ? "" : sh(e);
}
function gh(e, t) {
  return wn(e) ? e : cl(e, t) ? [e] : ak(ck(e));
}
function ms(e) {
  if (typeof e == "string" || ps(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function mh(e, t) {
  t = gh(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ms(t[n++])];
  return n && n == r ? e : void 0;
}
function Tt(e, t, n) {
  var r = e == null ? void 0 : mh(e, t);
  return r === void 0 ? n : r;
}
function lk(e, t) {
  for (var n = -1, r = t.length, s = e.length; ++n < r; )
    e[s + n] = t[n];
  return e;
}
function uk() {
  this.__data__ = new Sn(), this.size = 0;
}
function dk(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function fk(e) {
  return this.__data__.get(e);
}
function pk(e) {
  return this.__data__.has(e);
}
var hk = 200;
function gk(e, t) {
  var n = this.__data__;
  if (n instanceof Sn) {
    var r = n.__data__;
    if (!eo || r.length < hk - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new En(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function bn(e) {
  var t = this.__data__ = new Sn(e);
  this.size = t.size;
}
bn.prototype.clear = uk;
bn.prototype.delete = dk;
bn.prototype.get = fk;
bn.prototype.has = pk;
bn.prototype.set = gk;
function mk(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, s = 0, o = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (o[s++] = i);
  }
  return o;
}
function vk() {
  return [];
}
var _k = Object.prototype, bk = _k.propertyIsEnumerable, Lu = Object.getOwnPropertySymbols, yk = Lu ? function(e) {
  return e == null ? [] : (e = Object(e), mk(Lu(e), function(t) {
    return bk.call(e, t);
  }));
} : vk;
function wk(e, t, n) {
  var r = t(e);
  return wn(e) ? r : lk(r, n(e));
}
function Ou(e) {
  return wk(e, hh, yk);
}
var Ec = Mr(fn, "DataView"), Ac = Mr(fn, "Promise"), $c = Mr(fn, "Set"), Ru = "[object Map]", kk = "[object Object]", Pu = "[object Promise]", Bu = "[object Set]", zu = "[object WeakMap]", Du = "[object DataView]", Ck = sr(Ec), xk = sr(eo), Sk = sr(Ac), Ek = sr($c), Ak = sr(xc), Rn = $r;
(Ec && Rn(new Ec(new ArrayBuffer(1))) != Du || eo && Rn(new eo()) != Ru || Ac && Rn(Ac.resolve()) != Pu || $c && Rn(new $c()) != Bu || xc && Rn(new xc()) != zu) && (Rn = function(e) {
  var t = $r(e), n = t == kk ? e.constructor : void 0, r = n ? sr(n) : "";
  if (r)
    switch (r) {
      case Ck:
        return Du;
      case xk:
        return Ru;
      case Sk:
        return Pu;
      case Ek:
        return Bu;
      case Ak:
        return zu;
    }
  return t;
});
var Nu = fn.Uint8Array, $k = "__lodash_hash_undefined__";
function Mk(e) {
  return this.__data__.set(e, $k), this;
}
function Tk(e) {
  return this.__data__.has(e);
}
function Xo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new En(); ++t < n; )
    this.add(e[t]);
}
Xo.prototype.add = Xo.prototype.push = Mk;
Xo.prototype.has = Tk;
function Ik(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Lk(e, t) {
  return e.has(t);
}
var Ok = 1, Rk = 2;
function vh(e, t, n, r, s, o) {
  var i = n & Ok, a = e.length, c = t.length;
  if (a != c && !(i && c > a))
    return !1;
  var u = o.get(e), d = o.get(t);
  if (u && d)
    return u == t && d == e;
  var l = -1, m = !0, f = n & Rk ? new Xo() : void 0;
  for (o.set(e, t), o.set(t, e); ++l < a; ) {
    var v = e[l], g = t[l];
    if (r)
      var b = i ? r(g, v, l, t, e, o) : r(v, g, l, e, t, o);
    if (b !== void 0) {
      if (b)
        continue;
      m = !1;
      break;
    }
    if (f) {
      if (!Ik(t, function(h, w) {
        if (!Lk(f, w) && (v === h || s(v, h, n, r, o)))
          return f.push(w);
      })) {
        m = !1;
        break;
      }
    } else if (!(v === g || s(v, g, n, r, o))) {
      m = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), m;
}
function Pk(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, s) {
    n[++t] = [s, r];
  }), n;
}
function Bk(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var zk = 1, Dk = 2, Nk = "[object Boolean]", qk = "[object Date]", Fk = "[object Error]", jk = "[object Map]", Hk = "[object Number]", Vk = "[object RegExp]", Uk = "[object Set]", Zk = "[object String]", Wk = "[object Symbol]", Gk = "[object ArrayBuffer]", Kk = "[object DataView]", qu = Nn ? Nn.prototype : void 0, Vs = qu ? qu.valueOf : void 0;
function Xk(e, t, n, r, s, o, i) {
  switch (n) {
    case Kk:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Gk:
      return !(e.byteLength != t.byteLength || !o(new Nu(e), new Nu(t)));
    case Nk:
    case qk:
    case Hk:
      return ch(+e, +t);
    case Fk:
      return e.name == t.name && e.message == t.message;
    case Vk:
    case Zk:
      return e == t + "";
    case jk:
      var a = Pk;
    case Uk:
      var c = r & zk;
      if (a || (a = Bk), e.size != t.size && !c)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      r |= Dk, i.set(e, t);
      var d = vh(a(e), a(t), r, s, o, i);
      return i.delete(e), d;
    case Wk:
      if (Vs)
        return Vs.call(e) == Vs.call(t);
  }
  return !1;
}
var Yk = 1, Jk = Object.prototype, Qk = Jk.hasOwnProperty;
function e4(e, t, n, r, s, o) {
  var i = n & Yk, a = Ou(e), c = a.length, u = Ou(t), d = u.length;
  if (c != d && !i)
    return !1;
  for (var l = c; l--; ) {
    var m = a[l];
    if (!(i ? m in t : Qk.call(t, m)))
      return !1;
  }
  var f = o.get(e), v = o.get(t);
  if (f && v)
    return f == t && v == e;
  var g = !0;
  o.set(e, t), o.set(t, e);
  for (var b = i; ++l < c; ) {
    m = a[l];
    var h = e[m], w = t[m];
    if (r)
      var k = i ? r(w, h, m, t, e, o) : r(h, w, m, e, t, o);
    if (!(k === void 0 ? h === w || s(h, w, n, r, o) : k)) {
      g = !1;
      break;
    }
    b || (b = m == "constructor");
  }
  if (g && !b) {
    var C = e.constructor, A = t.constructor;
    C != A && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof A == "function" && A instanceof A) && (g = !1);
  }
  return o.delete(e), o.delete(t), g;
}
var t4 = 1, Fu = "[object Arguments]", ju = "[object Array]", xo = "[object Object]", n4 = Object.prototype, Hu = n4.hasOwnProperty;
function r4(e, t, n, r, s, o) {
  var i = wn(e), a = wn(t), c = i ? ju : Rn(e), u = a ? ju : Rn(t);
  c = c == Fu ? xo : c, u = u == Fu ? xo : u;
  var d = c == xo, l = u == xo, m = c == u;
  if (m && Sc(e)) {
    if (!Sc(t))
      return !1;
    i = !0, d = !1;
  }
  if (m && !d)
    return o || (o = new bn()), i || ph(e) ? vh(e, t, n, r, s, o) : Xk(e, t, c, n, r, s, o);
  if (!(n & t4)) {
    var f = d && Hu.call(e, "__wrapped__"), v = l && Hu.call(t, "__wrapped__");
    if (f || v) {
      var g = f ? e.value() : e, b = v ? t.value() : t;
      return o || (o = new bn()), s(g, b, n, r, o);
    }
  }
  return m ? (o || (o = new bn()), e4(e, t, n, r, s, o)) : !1;
}
function vs(e, t, n, r, s) {
  return e === t ? !0 : e == null || t == null || !br(e) && !br(t) ? e !== e && t !== t : r4(e, t, n, r, vs, s);
}
var o4 = 1, s4 = 2;
function i4(e, t, n, r) {
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
    var a = i[0], c = e[a], u = i[1];
    if (i[2]) {
      if (c === void 0 && !(a in e))
        return !1;
    } else {
      var d = new bn(), l;
      if (!(l === void 0 ? vs(u, c, o4 | s4, r, d) : l))
        return !1;
    }
  }
  return !0;
}
function _h(e) {
  return e === e && !yr(e);
}
function a4(e) {
  for (var t = hh(e), n = t.length; n--; ) {
    var r = t[n], s = e[r];
    t[n] = [r, s, _h(s)];
  }
  return t;
}
function bh(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function c4(e) {
  var t = a4(e);
  return t.length == 1 && t[0][2] ? bh(t[0][0], t[0][1]) : function(n) {
    return n === e || i4(n, e, t);
  };
}
function l4(e, t) {
  return e != null && t in Object(e);
}
function u4(e, t, n) {
  t = gh(t, e);
  for (var r = -1, s = t.length, o = !1; ++r < s; ) {
    var i = ms(t[r]);
    if (!(o = e != null && n(e, i)))
      break;
    e = e[i];
  }
  return o || ++r != s ? o : (s = e == null ? 0 : e.length, !!s && al(s) && ah(i, s) && (wn(e) || uh(e)));
}
function d4(e, t) {
  return e != null && u4(e, t, l4);
}
var f4 = 1, p4 = 2;
function h4(e, t) {
  return cl(e) && _h(t) ? bh(ms(e), t) : function(n) {
    var r = Tt(n, e);
    return r === void 0 && r === t ? d4(n, e) : vs(t, r, f4 | p4);
  };
}
function g4(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function m4(e) {
  return function(t) {
    return mh(t, e);
  };
}
function v4(e) {
  return cl(e) ? g4(ms(e)) : m4(e);
}
function _4(e) {
  return typeof e == "function" ? e : e == null ? _y : typeof e == "object" ? wn(e) ? h4(e[0], e[1]) : c4(e) : v4(e);
}
var Us = function() {
  return fn.Date.now();
}, b4 = "Expected a function", y4 = Math.max, w4 = Math.min;
function Mc(e, t, n) {
  var r, s, o, i, a, c, u = 0, d = !1, l = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(b4);
  t = Su(t) || 0, yr(n) && (d = !!n.leading, l = "maxWait" in n, o = l ? y4(Su(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m);
  function f(E) {
    var $ = r, M = s;
    return r = s = void 0, u = E, i = e.apply(M, $), i;
  }
  function v(E) {
    return u = E, a = setTimeout(h, t), d ? f(E) : i;
  }
  function g(E) {
    var $ = E - c, M = E - u, O = t - $;
    return l ? w4(O, o - M) : O;
  }
  function b(E) {
    var $ = E - c, M = E - u;
    return c === void 0 || $ >= t || $ < 0 || l && M >= o;
  }
  function h() {
    var E = Us();
    if (b(E))
      return w(E);
    a = setTimeout(h, g(E));
  }
  function w(E) {
    return a = void 0, m && r ? f(E) : (r = s = void 0, i);
  }
  function k() {
    a !== void 0 && clearTimeout(a), u = 0, r = c = s = a = void 0;
  }
  function C() {
    return a === void 0 ? i : w(Us());
  }
  function A() {
    var E = Us(), $ = b(E);
    if (r = arguments, s = this, c = E, $) {
      if (a === void 0)
        return v(c);
      if (l)
        return clearTimeout(a), a = setTimeout(h, t), f(c);
    }
    return a === void 0 && (a = setTimeout(h, t)), i;
  }
  return A.cancel = k, A.flush = C, A;
}
function k4(e, t, n) {
  var r = e == null ? 0 : e.length;
  if (!r)
    return -1;
  var s = r - 1;
  return Py(e, _4(t), s);
}
function Yo(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var s = e[t];
    r[s[0]] = s[1];
  }
  return r;
}
function Tc(e, t) {
  return vs(e, t);
}
function er(e) {
  return e == null;
}
function C4(e) {
  return e === void 0;
}
const yh = (e) => e === void 0, ul = (e) => typeof e == "boolean", Ze = (e) => typeof e == "number", to = (e) => typeof Element > "u" ? !1 : e instanceof Element, x4 = (e) => Xt(e) ? !Number.isNaN(Number(e)) : !1, S4 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
class E4 extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function A4(e, t) {
  throw new E4(`[${e}] ${t}`);
}
function wr(e, t = "px") {
  if (!e)
    return "";
  if (Ze(e) || x4(e))
    return `${e}${t}`;
  if (Xt(e))
    return e;
}
function $4(e, t) {
  if (!ut)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const s = t.offsetTop + n.reduce((c, u) => c + u.offsetTop, 0), o = s + t.offsetHeight, i = e.scrollTop, a = i + e.clientHeight;
  s < i ? e.scrollTop = s : o > a && (e.scrollTop = o - e.clientHeight);
}
/*! Element Plus Icons Vue v2.3.1 */
var M4 = /* @__PURE__ */ H({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), wh = M4, T4 = /* @__PURE__ */ H({
  name: "ArrowLeft",
  __name: "arrow-left",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), I4 = T4, L4 = /* @__PURE__ */ H({
  name: "ArrowRight",
  __name: "arrow-right",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
      })
    ]));
  }
}), O4 = L4, R4 = /* @__PURE__ */ H({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      p("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), P4 = R4, B4 = /* @__PURE__ */ H({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      p("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), dl = B4, z4 = /* @__PURE__ */ H({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Ic = z4, D4 = /* @__PURE__ */ H({
  name: "DArrowLeft",
  __name: "d-arrow-left",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
      })
    ]));
  }
}), N4 = D4, q4 = /* @__PURE__ */ H({
  name: "DArrowRight",
  __name: "d-arrow-right",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
      })
    ]));
  }
}), F4 = q4, j4 = /* @__PURE__ */ H({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      p("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), H4 = j4, V4 = /* @__PURE__ */ H({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), kh = V4, U4 = /* @__PURE__ */ H({
  name: "MoreFilled",
  __name: "more-filled",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
      })
    ]));
  }
}), Vu = U4, Z4 = /* @__PURE__ */ H({
  name: "PictureFilled",
  __name: "picture-filled",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384"
      })
    ]));
  }
}), W4 = Z4, G4 = /* @__PURE__ */ H({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      p("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), K4 = G4;
const Ch = "__epPropKey", ge = (e) => e, X4 = (e) => Yt(e) && !!e[Ch], _s = (e, t) => {
  if (!Yt(e) || X4(e))
    return e;
  const { values: n, required: r, default: s, type: o, validator: i } = e, c = {
    type: o,
    required: !!r,
    validator: n || i ? (u) => {
      let d = !1, l = [];
      if (n && (l = Array.from(n), Ko(e, "default") && l.push(s), d || (d = l.includes(u))), i && (d || (d = i(u))), !d && l.length > 0) {
        const m = [...new Set(l)].map((f) => JSON.stringify(f)).join(", ");
        Nv(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(u)}.`);
      }
      return d;
    } : void 0,
    [Ch]: !0
  };
  return Ko(e, "default") && (c.default = s), c;
}, Me = (e) => Yo(Object.entries(e).map(([t, n]) => [
  t,
  _s(n, t)
])), Qt = ge([
  String,
  Object,
  Function
]), xh = {
  validating: kh,
  success: P4,
  error: dl
}, Ft = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Y4 = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), bs = (e) => (e.install = Jr, e), yn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace"
}, _t = "update:modelValue", fl = "change", fo = ["", "default", "small", "large"], J4 = {
  large: 40,
  default: 32,
  small: 24
}, Q4 = (e) => J4[e || "default"], e3 = (e) => ["", ...fo].includes(e), Sh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), pl = (e) => e, t3 = ["class", "style"], n3 = /^on[A-Z]/, r3 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = T(() => ((n == null ? void 0 : n.value) || []).concat(t3)), s = ot();
  return s ? T(() => {
    var o;
    return Yo(Object.entries((o = s.proxy) == null ? void 0 : o.$attrs).filter(([i]) => !r.value.includes(i) && !(t && n3.test(i))));
  }) : T(() => ({}));
}, Eh = ({ from: e, replacement: t, scope: n, version: r, ref: s, type: o = "API" }, i) => {
  ae(() => _(i), (a) => {
  }, {
    immediate: !0
  });
};
var o3 = {
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
const s3 = (e) => (t, n) => i3(t, n, _(e)), i3 = (e, t, n) => Tt(n, e, e).replace(/\{(\w+)\}/g, (r, s) => {
  var o;
  return `${(o = t == null ? void 0 : t[s]) != null ? o : `{${s}}`}`;
}), a3 = (e) => {
  const t = T(() => _(e).name), n = Rp(e) ? e : D(e);
  return {
    lang: t,
    locale: n,
    t: s3(e)
  };
}, c3 = Symbol("localeContextKey"), en = (e) => {
  const t = $e(c3, D());
  return a3(T(() => t.value || o3));
}, Zs = "el", l3 = "is-", Gn = (e, t, n, r, s) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), s && (o += `--${s}`), o;
}, u3 = Symbol("namespaceContextKey"), hl = (e) => {
  const t = ot() ? $e(u3, D(Zs)) : D(Zs);
  return T(() => _(t) || Zs);
}, Ee = (e, t) => {
  const n = hl();
  return {
    namespace: n,
    b: (g = "") => Gn(n.value, e, g, "", ""),
    e: (g) => g ? Gn(n.value, e, "", g, "") : "",
    m: (g) => g ? Gn(n.value, e, "", "", g) : "",
    be: (g, b) => g && b ? Gn(n.value, e, g, b, "") : "",
    em: (g, b) => g && b ? Gn(n.value, e, "", g, b) : "",
    bm: (g, b) => g && b ? Gn(n.value, e, g, "", b) : "",
    bem: (g, b, h) => g && b && h ? Gn(n.value, e, g, b, h) : "",
    is: (g, ...b) => {
      const h = b.length >= 1 ? b[0] : !0;
      return g && h ? `${l3}${g}` : "";
    },
    cssVar: (g) => {
      const b = {};
      for (const h in g)
        g[h] && (b[`--${n.value}-${h}`] = g[h]);
      return b;
    },
    cssVarName: (g) => `--${n.value}-${g}`,
    cssVarBlock: (g) => {
      const b = {};
      for (const h in g)
        g[h] && (b[`--${n.value}-${e}-${h}`] = g[h]);
      return b;
    },
    cssVarBlockName: (g) => `--${n.value}-${e}-${g}`
  };
}, d3 = _s({
  type: ge(Boolean),
  default: null
}), f3 = _s({
  type: ge(Function)
}), p3 = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], s = {
    [e]: d3,
    [n]: f3
  };
  return {
    useModelToggle: ({
      indicator: i,
      toggleReason: a,
      shouldHideWhenRouteChanges: c,
      shouldProceed: u,
      onShow: d,
      onHide: l
    }) => {
      const m = ot(), { emit: f } = m, v = m.props, g = T(() => Ot(v[n])), b = T(() => v[e] === null), h = ($) => {
        i.value !== !0 && (i.value = !0, a && (a.value = $), Ot(d) && d($));
      }, w = ($) => {
        i.value !== !1 && (i.value = !1, a && (a.value = $), Ot(l) && l($));
      }, k = ($) => {
        if (v.disabled === !0 || Ot(u) && !u())
          return;
        const M = g.value && ut;
        M && f(t, !0), (b.value || !M) && h($);
      }, C = ($) => {
        if (v.disabled === !0 || !ut)
          return;
        const M = g.value && ut;
        M && f(t, !1), (b.value || !M) && w($);
      }, A = ($) => {
        ul($) && (v.disabled && $ ? g.value && f(t, !1) : i.value !== $ && ($ ? h() : w()));
      }, E = () => {
        i.value ? C() : k();
      };
      return ae(() => v[e], A), c && m.appContext.config.globalProperties.$route !== void 0 && ae(() => ({
        ...m.proxy.$route
      }), () => {
        c.value && i.value && C();
      }), Be(() => {
        A(v[e]);
      }), {
        hide: C,
        show: k,
        toggle: E,
        hasUpdateHandler: g
      };
    },
    useModelToggleProps: s,
    useModelToggleEmits: r
  };
}, Ah = (e) => {
  const t = ot();
  return T(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var yt = "top", zt = "bottom", Dt = "right", wt = "left", gl = "auto", po = [yt, zt, Dt, wt], kr = "start", no = "end", h3 = "clippingParents", $h = "viewport", Dr = "popper", g3 = "reference", Uu = po.reduce(function(e, t) {
  return e.concat([t + "-" + kr, t + "-" + no]);
}, []), ys = [].concat(po, [gl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + kr, t + "-" + no]);
}, []), m3 = "beforeRead", v3 = "read", _3 = "afterRead", b3 = "beforeMain", y3 = "main", w3 = "afterMain", k3 = "beforeWrite", C3 = "write", x3 = "afterWrite", S3 = [m3, v3, _3, b3, y3, w3, k3, C3, x3];
function dn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function tn(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Cr(e) {
  var t = tn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Pt(e) {
  var t = tn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ml(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = tn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function E3(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, s = t.attributes[n] || {}, o = t.elements[n];
    !Pt(o) || !dn(o) || (Object.assign(o.style, r), Object.keys(s).forEach(function(i) {
      var a = s[i];
      a === !1 ? o.removeAttribute(i) : o.setAttribute(i, a === !0 ? "" : a);
    }));
  });
}
function A3(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var s = t.elements[r], o = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = i.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !Pt(s) || !dn(s) || (Object.assign(s.style, a), Object.keys(o).forEach(function(c) {
        s.removeAttribute(c);
      }));
    });
  };
}
var Mh = { name: "applyStyles", enabled: !0, phase: "write", fn: E3, effect: A3, requires: ["computeStyles"] };
function un(e) {
  return e.split("-")[0];
}
var tr = Math.max, Jo = Math.min, xr = Math.round;
function Sr(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, s = 1;
  if (Pt(e) && t) {
    var o = e.offsetHeight, i = e.offsetWidth;
    i > 0 && (r = xr(n.width) / i || 1), o > 0 && (s = xr(n.height) / o || 1);
  }
  return { width: n.width / r, height: n.height / s, top: n.top / s, right: n.right / r, bottom: n.bottom / s, left: n.left / r, x: n.left / r, y: n.top / s };
}
function vl(e) {
  var t = Sr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Th(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && ml(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function kn(e) {
  return tn(e).getComputedStyle(e);
}
function $3(e) {
  return ["table", "td", "th"].indexOf(dn(e)) >= 0;
}
function jn(e) {
  return ((Cr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ws(e) {
  return dn(e) === "html" ? e : e.assignedSlot || e.parentNode || (ml(e) ? e.host : null) || jn(e);
}
function Zu(e) {
  return !Pt(e) || kn(e).position === "fixed" ? null : e.offsetParent;
}
function M3(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Pt(e)) {
    var r = kn(e);
    if (r.position === "fixed") return null;
  }
  var s = ws(e);
  for (ml(s) && (s = s.host); Pt(s) && ["html", "body"].indexOf(dn(s)) < 0; ) {
    var o = kn(s);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return s;
    s = s.parentNode;
  }
  return null;
}
function ho(e) {
  for (var t = tn(e), n = Zu(e); n && $3(n) && kn(n).position === "static"; ) n = Zu(n);
  return n && (dn(n) === "html" || dn(n) === "body" && kn(n).position === "static") ? t : n || M3(e) || t;
}
function _l(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ur(e, t, n) {
  return tr(e, Jo(t, n));
}
function T3(e, t, n) {
  var r = Ur(e, t, n);
  return r > n ? n : r;
}
function Ih() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Lh(e) {
  return Object.assign({}, Ih(), e);
}
function Oh(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var I3 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Lh(typeof e != "number" ? e : Oh(e, po));
};
function L3(e) {
  var t, n = e.state, r = e.name, s = e.options, o = n.elements.arrow, i = n.modifiersData.popperOffsets, a = un(n.placement), c = _l(a), u = [wt, Dt].indexOf(a) >= 0, d = u ? "height" : "width";
  if (!(!o || !i)) {
    var l = I3(s.padding, n), m = vl(o), f = c === "y" ? yt : wt, v = c === "y" ? zt : Dt, g = n.rects.reference[d] + n.rects.reference[c] - i[c] - n.rects.popper[d], b = i[c] - n.rects.reference[c], h = ho(o), w = h ? c === "y" ? h.clientHeight || 0 : h.clientWidth || 0 : 0, k = g / 2 - b / 2, C = l[f], A = w - m[d] - l[v], E = w / 2 - m[d] / 2 + k, $ = Ur(C, E, A), M = c;
    n.modifiersData[r] = (t = {}, t[M] = $, t.centerOffset = $ - E, t);
  }
}
function O3(e) {
  var t = e.state, n = e.options, r = n.element, s = r === void 0 ? "[data-popper-arrow]" : r;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || !Th(t.elements.popper, s) || (t.elements.arrow = s));
}
var R3 = { name: "arrow", enabled: !0, phase: "main", fn: L3, effect: O3, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Er(e) {
  return e.split("-")[1];
}
var P3 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function B3(e) {
  var t = e.x, n = e.y, r = window, s = r.devicePixelRatio || 1;
  return { x: xr(t * s) / s || 0, y: xr(n * s) / s || 0 };
}
function Wu(e) {
  var t, n = e.popper, r = e.popperRect, s = e.placement, o = e.variation, i = e.offsets, a = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, l = e.isFixed, m = i.x, f = m === void 0 ? 0 : m, v = i.y, g = v === void 0 ? 0 : v, b = typeof d == "function" ? d({ x: f, y: g }) : { x: f, y: g };
  f = b.x, g = b.y;
  var h = i.hasOwnProperty("x"), w = i.hasOwnProperty("y"), k = wt, C = yt, A = window;
  if (u) {
    var E = ho(n), $ = "clientHeight", M = "clientWidth";
    if (E === tn(n) && (E = jn(n), kn(E).position !== "static" && a === "absolute" && ($ = "scrollHeight", M = "scrollWidth")), E = E, s === yt || (s === wt || s === Dt) && o === no) {
      C = zt;
      var O = l && E === A && A.visualViewport ? A.visualViewport.height : E[$];
      g -= O - r.height, g *= c ? 1 : -1;
    }
    if (s === wt || (s === yt || s === zt) && o === no) {
      k = Dt;
      var R = l && E === A && A.visualViewport ? A.visualViewport.width : E[M];
      f -= R - r.width, f *= c ? 1 : -1;
    }
  }
  var B = Object.assign({ position: a }, u && P3), V = d === !0 ? B3({ x: f, y: g }) : { x: f, y: g };
  if (f = V.x, g = V.y, c) {
    var re;
    return Object.assign({}, B, (re = {}, re[C] = w ? "0" : "", re[k] = h ? "0" : "", re.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", re));
  }
  return Object.assign({}, B, (t = {}, t[C] = w ? g + "px" : "", t[k] = h ? f + "px" : "", t.transform = "", t));
}
function z3(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, s = r === void 0 ? !0 : r, o = n.adaptive, i = o === void 0 ? !0 : o, a = n.roundOffsets, c = a === void 0 ? !0 : a, u = { placement: un(t.placement), variation: Er(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: s, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Wu(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: c })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Wu(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Rh = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: z3, data: {} }, So = { passive: !0 };
function D3(e) {
  var t = e.state, n = e.instance, r = e.options, s = r.scroll, o = s === void 0 ? !0 : s, i = r.resize, a = i === void 0 ? !0 : i, c = tn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, So);
  }), a && c.addEventListener("resize", n.update, So), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, So);
    }), a && c.removeEventListener("resize", n.update, So);
  };
}
var Ph = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: D3, data: {} }, N3 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Do(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return N3[t];
  });
}
var q3 = { start: "end", end: "start" };
function Gu(e) {
  return e.replace(/start|end/g, function(t) {
    return q3[t];
  });
}
function bl(e) {
  var t = tn(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function yl(e) {
  return Sr(jn(e)).left + bl(e).scrollLeft;
}
function F3(e) {
  var t = tn(e), n = jn(e), r = t.visualViewport, s = n.clientWidth, o = n.clientHeight, i = 0, a = 0;
  return r && (s = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (i = r.offsetLeft, a = r.offsetTop)), { width: s, height: o, x: i + yl(e), y: a };
}
function j3(e) {
  var t, n = jn(e), r = bl(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, o = tr(n.scrollWidth, n.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), i = tr(n.scrollHeight, n.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -r.scrollLeft + yl(e), c = -r.scrollTop;
  return kn(s || n).direction === "rtl" && (a += tr(n.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: i, x: a, y: c };
}
function wl(e) {
  var t = kn(e), n = t.overflow, r = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + s + r);
}
function Bh(e) {
  return ["html", "body", "#document"].indexOf(dn(e)) >= 0 ? e.ownerDocument.body : Pt(e) && wl(e) ? e : Bh(ws(e));
}
function Zr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Bh(e), s = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = tn(r), i = s ? [o].concat(o.visualViewport || [], wl(r) ? r : []) : r, a = t.concat(i);
  return s ? a : a.concat(Zr(ws(i)));
}
function Lc(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function H3(e) {
  var t = Sr(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Ku(e, t) {
  return t === $h ? Lc(F3(e)) : Cr(t) ? H3(t) : Lc(j3(jn(e)));
}
function V3(e) {
  var t = Zr(ws(e)), n = ["absolute", "fixed"].indexOf(kn(e).position) >= 0, r = n && Pt(e) ? ho(e) : e;
  return Cr(r) ? t.filter(function(s) {
    return Cr(s) && Th(s, r) && dn(s) !== "body";
  }) : [];
}
function U3(e, t, n) {
  var r = t === "clippingParents" ? V3(e) : [].concat(t), s = [].concat(r, [n]), o = s[0], i = s.reduce(function(a, c) {
    var u = Ku(e, c);
    return a.top = tr(u.top, a.top), a.right = Jo(u.right, a.right), a.bottom = Jo(u.bottom, a.bottom), a.left = tr(u.left, a.left), a;
  }, Ku(e, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function zh(e) {
  var t = e.reference, n = e.element, r = e.placement, s = r ? un(r) : null, o = r ? Er(r) : null, i = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, c;
  switch (s) {
    case yt:
      c = { x: i, y: t.y - n.height };
      break;
    case zt:
      c = { x: i, y: t.y + t.height };
      break;
    case Dt:
      c = { x: t.x + t.width, y: a };
      break;
    case wt:
      c = { x: t.x - n.width, y: a };
      break;
    default:
      c = { x: t.x, y: t.y };
  }
  var u = s ? _l(s) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case kr:
        c[u] = c[u] - (t[d] / 2 - n[d] / 2);
        break;
      case no:
        c[u] = c[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return c;
}
function ro(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = r === void 0 ? e.placement : r, o = n.boundary, i = o === void 0 ? h3 : o, a = n.rootBoundary, c = a === void 0 ? $h : a, u = n.elementContext, d = u === void 0 ? Dr : u, l = n.altBoundary, m = l === void 0 ? !1 : l, f = n.padding, v = f === void 0 ? 0 : f, g = Lh(typeof v != "number" ? v : Oh(v, po)), b = d === Dr ? g3 : Dr, h = e.rects.popper, w = e.elements[m ? b : d], k = U3(Cr(w) ? w : w.contextElement || jn(e.elements.popper), i, c), C = Sr(e.elements.reference), A = zh({ reference: C, element: h, placement: s }), E = Lc(Object.assign({}, h, A)), $ = d === Dr ? E : C, M = { top: k.top - $.top + g.top, bottom: $.bottom - k.bottom + g.bottom, left: k.left - $.left + g.left, right: $.right - k.right + g.right }, O = e.modifiersData.offset;
  if (d === Dr && O) {
    var R = O[s];
    Object.keys(M).forEach(function(B) {
      var V = [Dt, zt].indexOf(B) >= 0 ? 1 : -1, re = [yt, zt].indexOf(B) >= 0 ? "y" : "x";
      M[B] += R[re] * V;
    });
  }
  return M;
}
function Z3(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, s = n.boundary, o = n.rootBoundary, i = n.padding, a = n.flipVariations, c = n.allowedAutoPlacements, u = c === void 0 ? ys : c, d = Er(r), l = d ? a ? Uu : Uu.filter(function(v) {
    return Er(v) === d;
  }) : po, m = l.filter(function(v) {
    return u.indexOf(v) >= 0;
  });
  m.length === 0 && (m = l);
  var f = m.reduce(function(v, g) {
    return v[g] = ro(e, { placement: g, boundary: s, rootBoundary: o, padding: i })[un(g)], v;
  }, {});
  return Object.keys(f).sort(function(v, g) {
    return f[v] - f[g];
  });
}
function W3(e) {
  if (un(e) === gl) return [];
  var t = Do(e);
  return [Gu(e), t, Gu(t)];
}
function G3(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var s = n.mainAxis, o = s === void 0 ? !0 : s, i = n.altAxis, a = i === void 0 ? !0 : i, c = n.fallbackPlacements, u = n.padding, d = n.boundary, l = n.rootBoundary, m = n.altBoundary, f = n.flipVariations, v = f === void 0 ? !0 : f, g = n.allowedAutoPlacements, b = t.options.placement, h = un(b), w = h === b, k = c || (w || !v ? [Do(b)] : W3(b)), C = [b].concat(k).reduce(function(Oe, ze) {
      return Oe.concat(un(ze) === gl ? Z3(t, { placement: ze, boundary: d, rootBoundary: l, padding: u, flipVariations: v, allowedAutoPlacements: g }) : ze);
    }, []), A = t.rects.reference, E = t.rects.popper, $ = /* @__PURE__ */ new Map(), M = !0, O = C[0], R = 0; R < C.length; R++) {
      var B = C[R], V = un(B), re = Er(B) === kr, P = [yt, zt].indexOf(V) >= 0, U = P ? "width" : "height", z = ro(t, { placement: B, boundary: d, rootBoundary: l, altBoundary: m, padding: u }), N = P ? re ? Dt : wt : re ? zt : yt;
      A[U] > E[U] && (N = Do(N));
      var F = Do(N), Z = [];
      if (o && Z.push(z[V] <= 0), a && Z.push(z[N] <= 0, z[F] <= 0), Z.every(function(Oe) {
        return Oe;
      })) {
        O = B, M = !1;
        break;
      }
      $.set(B, Z);
    }
    if (M) for (var W = v ? 3 : 1, pe = function(Oe) {
      var ze = C.find(function(Qe) {
        var ft = $.get(Qe);
        if (ft) return ft.slice(0, Oe).every(function(Ve) {
          return Ve;
        });
      });
      if (ze) return O = ze, "break";
    }, le = W; le > 0; le--) {
      var Ae = pe(le);
      if (Ae === "break") break;
    }
    t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0);
  }
}
var K3 = { name: "flip", enabled: !0, phase: "main", fn: G3, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Xu(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Yu(e) {
  return [yt, Dt, zt, wt].some(function(t) {
    return e[t] >= 0;
  });
}
function X3(e) {
  var t = e.state, n = e.name, r = t.rects.reference, s = t.rects.popper, o = t.modifiersData.preventOverflow, i = ro(t, { elementContext: "reference" }), a = ro(t, { altBoundary: !0 }), c = Xu(i, r), u = Xu(a, s, o), d = Yu(c), l = Yu(u);
  t.modifiersData[n] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: l }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": l });
}
var Y3 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: X3 };
function J3(e, t, n) {
  var r = un(e), s = [wt, yt].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, i = o[0], a = o[1];
  return i = i || 0, a = (a || 0) * s, [wt, Dt].indexOf(r) >= 0 ? { x: a, y: i } : { x: i, y: a };
}
function Q3(e) {
  var t = e.state, n = e.options, r = e.name, s = n.offset, o = s === void 0 ? [0, 0] : s, i = ys.reduce(function(d, l) {
    return d[l] = J3(l, t.rects, o), d;
  }, {}), a = i[t.placement], c = a.x, u = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i;
}
var e5 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Q3 };
function t5(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = zh({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
var Dh = { name: "popperOffsets", enabled: !0, phase: "read", fn: t5, data: {} };
function n5(e) {
  return e === "x" ? "y" : "x";
}
function r5(e) {
  var t = e.state, n = e.options, r = e.name, s = n.mainAxis, o = s === void 0 ? !0 : s, i = n.altAxis, a = i === void 0 ? !1 : i, c = n.boundary, u = n.rootBoundary, d = n.altBoundary, l = n.padding, m = n.tether, f = m === void 0 ? !0 : m, v = n.tetherOffset, g = v === void 0 ? 0 : v, b = ro(t, { boundary: c, rootBoundary: u, padding: l, altBoundary: d }), h = un(t.placement), w = Er(t.placement), k = !w, C = _l(h), A = n5(C), E = t.modifiersData.popperOffsets, $ = t.rects.reference, M = t.rects.popper, O = typeof g == "function" ? g(Object.assign({}, t.rects, { placement: t.placement })) : g, R = typeof O == "number" ? { mainAxis: O, altAxis: O } : Object.assign({ mainAxis: 0, altAxis: 0 }, O), B = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, V = { x: 0, y: 0 };
  if (E) {
    if (o) {
      var re, P = C === "y" ? yt : wt, U = C === "y" ? zt : Dt, z = C === "y" ? "height" : "width", N = E[C], F = N + b[P], Z = N - b[U], W = f ? -M[z] / 2 : 0, pe = w === kr ? $[z] : M[z], le = w === kr ? -M[z] : -$[z], Ae = t.elements.arrow, Oe = f && Ae ? vl(Ae) : { width: 0, height: 0 }, ze = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ih(), Qe = ze[P], ft = ze[U], Ve = Ur(0, $[z], Oe[z]), nn = k ? $[z] / 2 - W - Ve - Qe - R.mainAxis : pe - Ve - Qe - R.mainAxis, oe = k ? -$[z] / 2 + W + Ve + ft + R.mainAxis : le + Ve + ft + R.mainAxis, _e = t.elements.arrow && ho(t.elements.arrow), He = _e ? C === "y" ? _e.clientTop || 0 : _e.clientLeft || 0 : 0, et = (re = B == null ? void 0 : B[C]) != null ? re : 0, mt = N + nn - et - He, jt = N + oe - et, Ct = Ur(f ? Jo(F, mt) : F, N, f ? tr(Z, jt) : Z);
      E[C] = Ct, V[C] = Ct - N;
    }
    if (a) {
      var rn, xt = C === "x" ? yt : wt, Ht = C === "x" ? zt : Dt, st = E[A], It = A === "y" ? "height" : "width", St = st + b[xt], Vt = st - b[Ht], Xe = [yt, wt].indexOf(h) !== -1, G = (rn = B == null ? void 0 : B[A]) != null ? rn : 0, de = Xe ? St : st - $[It] - M[It] - G + R.altAxis, Ie = Xe ? st + $[It] + M[It] - G - R.altAxis : Vt, Ue = f && Xe ? T3(de, st, Ie) : Ur(f ? de : St, st, f ? Ie : Vt);
      E[A] = Ue, V[A] = Ue - st;
    }
    t.modifiersData[r] = V;
  }
}
var o5 = { name: "preventOverflow", enabled: !0, phase: "main", fn: r5, requiresIfExists: ["offset"] };
function s5(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function i5(e) {
  return e === tn(e) || !Pt(e) ? bl(e) : s5(e);
}
function a5(e) {
  var t = e.getBoundingClientRect(), n = xr(t.width) / e.offsetWidth || 1, r = xr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function c5(e, t, n) {
  n === void 0 && (n = !1);
  var r = Pt(t), s = Pt(t) && a5(t), o = jn(t), i = Sr(e, s), a = { scrollLeft: 0, scrollTop: 0 }, c = { x: 0, y: 0 };
  return (r || !r && !n) && ((dn(t) !== "body" || wl(o)) && (a = i5(t)), Pt(t) ? (c = Sr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : o && (c.x = yl(o))), { x: i.left + a.scrollLeft - c.x, y: i.top + a.scrollTop - c.y, width: i.width, height: i.height };
}
function l5(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function s(o) {
    n.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(a) {
      if (!n.has(a)) {
        var c = t.get(a);
        c && s(c);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || s(o);
  }), r;
}
function u5(e) {
  var t = l5(e);
  return S3.reduce(function(n, r) {
    return n.concat(t.filter(function(s) {
      return s.phase === r;
    }));
  }, []);
}
function d5(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function f5(e) {
  var t = e.reduce(function(n, r) {
    var s = n[r.name];
    return n[r.name] = s ? Object.assign({}, s, r, { options: Object.assign({}, s.options, r.options), data: Object.assign({}, s.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Ju = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Qu() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function kl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, s = t.defaultOptions, o = s === void 0 ? Ju : s;
  return function(i, a, c) {
    c === void 0 && (c = o);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ju, o), modifiersData: {}, elements: { reference: i, popper: a }, attributes: {}, styles: {} }, d = [], l = !1, m = { state: u, setOptions: function(g) {
      var b = typeof g == "function" ? g(u.options) : g;
      v(), u.options = Object.assign({}, o, u.options, b), u.scrollParents = { reference: Cr(i) ? Zr(i) : i.contextElement ? Zr(i.contextElement) : [], popper: Zr(a) };
      var h = u5(f5([].concat(r, u.options.modifiers)));
      return u.orderedModifiers = h.filter(function(w) {
        return w.enabled;
      }), f(), m.update();
    }, forceUpdate: function() {
      if (!l) {
        var g = u.elements, b = g.reference, h = g.popper;
        if (Qu(b, h)) {
          u.rects = { reference: c5(b, ho(h), u.options.strategy === "fixed"), popper: vl(h) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(M) {
            return u.modifiersData[M.name] = Object.assign({}, M.data);
          });
          for (var w = 0; w < u.orderedModifiers.length; w++) {
            if (u.reset === !0) {
              u.reset = !1, w = -1;
              continue;
            }
            var k = u.orderedModifiers[w], C = k.fn, A = k.options, E = A === void 0 ? {} : A, $ = k.name;
            typeof C == "function" && (u = C({ state: u, options: E, name: $, instance: m }) || u);
          }
        }
      }
    }, update: d5(function() {
      return new Promise(function(g) {
        m.forceUpdate(), g(u);
      });
    }), destroy: function() {
      v(), l = !0;
    } };
    if (!Qu(i, a)) return m;
    m.setOptions(c).then(function(g) {
      !l && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function f() {
      u.orderedModifiers.forEach(function(g) {
        var b = g.name, h = g.options, w = h === void 0 ? {} : h, k = g.effect;
        if (typeof k == "function") {
          var C = k({ state: u, name: b, instance: m, options: w }), A = function() {
          };
          d.push(C || A);
        }
      });
    }
    function v() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return m;
  };
}
kl();
var p5 = [Ph, Dh, Rh, Mh];
kl({ defaultModifiers: p5 });
var h5 = [Ph, Dh, Rh, Mh, e5, K3, o5, R3, Y3], g5 = kl({ defaultModifiers: h5 });
const m5 = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: c }) => {
      const u = v5(c);
      Object.assign(i.value, u);
    },
    requires: ["computeStyles"]
  }, s = T(() => {
    const { onFirstUpdate: c, placement: u, strategy: d, modifiers: l } = _(n);
    return {
      onFirstUpdate: c,
      placement: u || "bottom",
      strategy: d || "absolute",
      modifiers: [
        ...l || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), o = _n(), i = D({
    styles: {
      popper: {
        position: _(s).strategy,
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
  return ae(s, (c) => {
    const u = _(o);
    u && u.setOptions(c);
  }, {
    deep: !0
  }), ae([e, t], ([c, u]) => {
    a(), !(!c || !u) && (o.value = g5(c, u, _(s)));
  }), Nt(() => {
    a();
  }), {
    state: T(() => {
      var c;
      return { ...((c = _(o)) == null ? void 0 : c.state) || {} };
    }),
    styles: T(() => _(i).styles),
    attributes: T(() => _(i).attributes),
    update: () => {
      var c;
      return (c = _(o)) == null ? void 0 : c.update();
    },
    forceUpdate: () => {
      var c;
      return (c = _(o)) == null ? void 0 : c.forceUpdate();
    },
    instanceRef: T(() => _(o))
  };
};
function v5(e) {
  const t = Object.keys(e.elements), n = Yo(t.map((s) => [s, e.styles[s] || {}])), r = Yo(t.map((s) => [s, e.attributes[s]]));
  return {
    styles: n,
    attributes: r
  };
}
const _5 = (e, t = 0) => {
  if (t === 0)
    return e;
  const n = D(!1);
  let r = 0;
  const s = () => {
    r && clearTimeout(r), r = window.setTimeout(() => {
      n.value = e.value;
    }, t);
  };
  return Be(s), ae(() => e.value, (o) => {
    o ? s() : n.value = o;
  }), n;
};
function ed() {
  let e;
  const t = (r, s) => {
    n(), e = window.setTimeout(r, s);
  }, n = () => window.clearTimeout(e);
  return ol(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const td = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, b5 = Symbol("elIdInjection"), Nh = () => ot() ? $e(b5, td) : td, ks = (e) => {
  const t = Nh(), n = hl();
  return T(() => _(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let pr = [];
const nd = (e) => {
  const t = e;
  t.key === yn.esc && pr.forEach((n) => n(t));
}, y5 = (e) => {
  Be(() => {
    pr.length === 0 && document.addEventListener("keydown", nd), ut && pr.push(e);
  }), Nt(() => {
    pr = pr.filter((t) => t !== e), pr.length === 0 && ut && document.removeEventListener("keydown", nd);
  });
};
let rd;
const qh = () => {
  const e = hl(), t = Nh(), n = T(() => `${e.value}-popper-container-${t.prefix}`), r = T(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, w5 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, k5 = () => {
  const { id: e, selector: t } = qh();
  return qv(() => {
    ut && !rd && !document.body.querySelector(t.value) && (rd = w5(e.value));
  }), {
    id: e,
    selector: t
  };
}, C5 = Me({
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
}), x5 = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: s
}) => {
  const { registerTimeout: o } = ed(), {
    registerTimeout: i,
    cancelTimeout: a
  } = ed();
  return {
    onOpen: (d) => {
      o(() => {
        r(d);
        const l = _(n);
        Ze(l) && l > 0 && i(() => {
          s(d);
        }, l);
      }, _(e));
    },
    onClose: (d) => {
      a(), o(() => {
        s(d);
      }, _(t));
    }
  };
}, Fh = Symbol("elForwardRef"), S5 = (e) => {
  kt(Fh, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, E5 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), od = D(0), A5 = 2e3, $5 = Symbol("zIndexContextKey"), M5 = (e) => {
  const t = ot() ? $e($5, void 0) : void 0, n = T(() => {
    const o = _(t);
    return Ze(o) ? o : A5;
  }), r = T(() => n.value + od.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (od.value++, r.value)
  };
};
function T5(e) {
  const t = D();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: s, selectionEnd: o, value: i } = e.value;
    if (s == null || o == null)
      return;
    const a = i.slice(0, Math.max(0, s)), c = i.slice(Math.max(0, o));
    t.value = {
      selectionStart: s,
      selectionEnd: o,
      value: i,
      beforeTxt: a,
      afterTxt: c
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: s } = e.value, { beforeTxt: o, afterTxt: i, selectionStart: a } = t.value;
    if (o == null || i == null || a == null)
      return;
    let c = s.length;
    if (s.endsWith(i))
      c = s.length - i.length;
    else if (s.startsWith(o))
      c = o.length;
    else {
      const u = o[a - 1], d = s.indexOf(u, a - 1);
      d !== -1 && (c = d + 1);
    }
    e.value.setSelectionRange(c, c);
  }
  return [n, r];
}
const Cl = _s({
  type: String,
  values: fo,
  required: !1
}), I5 = Symbol("size"), L5 = () => {
  const e = $e(I5, {});
  return T(() => _(e.size) || "");
};
function jh(e, { afterFocus: t, beforeBlur: n, afterBlur: r } = {}) {
  const s = ot(), { emit: o } = s, i = _n(), a = D(!1), c = (l) => {
    a.value || (a.value = !0, o("focus", l), t == null || t());
  }, u = (l) => {
    var m;
    Ot(n) && n(l) || l.relatedTarget && ((m = i.value) != null && m.contains(l.relatedTarget)) || (a.value = !1, o("blur", l), r == null || r());
  }, d = () => {
    var l;
    (l = e.value) == null || l.focus();
  };
  return ae(i, (l) => {
    l && l.setAttribute("tabindex", "-1");
  }), Qn(i, "click", d), {
    wrapperRef: i,
    isFocused: a,
    handleFocus: c,
    handleBlur: u
  };
}
const O5 = Symbol(), sd = D();
function R5(e, t = void 0) {
  const n = ot() ? $e(O5, sd) : sd;
  return T(() => {
    var r, s;
    return (s = (r = n.value) == null ? void 0 : r[e]) != null ? s : t;
  });
}
var ye = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
};
const P5 = Me({
  size: {
    type: ge([Number, String])
  },
  color: {
    type: String
  }
}), B5 = H({
  name: "ElIcon",
  inheritAttrs: !1
}), z5 = /* @__PURE__ */ H({
  ...B5,
  props: P5,
  setup(e) {
    const t = e, n = Ee("icon"), r = T(() => {
      const { size: s, color: o } = t;
      return !s && !o ? {} : {
        fontSize: yh(s) ? void 0 : wr(s),
        "--color": o
      };
    });
    return (s, o) => (y(), x("i", je({
      class: _(n).b(),
      style: _(r)
    }, s.$attrs), [
      ne(s.$slots, "default")
    ], 16));
  }
});
var D5 = /* @__PURE__ */ ye(z5, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const bt = Ft(D5), xl = Symbol("formContextKey"), Qo = Symbol("formItemContextKey"), go = (e, t = {}) => {
  const n = D(void 0), r = t.prop ? n : Ah("size"), s = t.global ? n : L5(), o = t.form ? { size: void 0 } : $e(xl, void 0), i = t.formItem ? { size: void 0 } : $e(Qo, void 0);
  return T(() => r.value || _(e) || (i == null ? void 0 : i.size) || (o == null ? void 0 : o.size) || s.value || "");
}, Cs = (e) => {
  const t = Ah("disabled"), n = $e(xl, void 0);
  return T(() => t.value || _(e) || (n == null ? void 0 : n.disabled) || !1);
}, xs = () => {
  const e = $e(xl, void 0), t = $e(Qo, void 0);
  return {
    form: e,
    formItem: t
  };
}, Hh = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = D(!1)), r || (r = D(!1));
  const s = D();
  let o;
  const i = T(() => {
    var a;
    return !!(!e.label && t && t.inputIds && ((a = t.inputIds) == null ? void 0 : a.length) <= 1);
  });
  return Be(() => {
    o = ae([Rt(e, "id"), n], ([a, c]) => {
      const u = a ?? (c ? void 0 : ks().value);
      u !== s.value && (t != null && t.removeInputId && (s.value && t.removeInputId(s.value), !(r != null && r.value) && !c && u && t.addInputId(u)), s.value = u);
    }, { immediate: !0 });
  }), Dp(() => {
    o && o(), t != null && t.removeInputId && s.value && t.removeInputId(s.value);
  }), {
    isLabeledByFormItem: i,
    inputId: s
  };
};
let Wt;
const N5 = `
  height:0 !important;
  visibility:hidden !important;
  ${Gb() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, q5 = [
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
function F5(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), s = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: q5.map((i) => `${i}:${t.getPropertyValue(i)}`).join(";"), paddingSize: r, borderSize: s, boxSizing: n };
}
function id(e, t = 1, n) {
  var r;
  Wt || (Wt = document.createElement("textarea"), document.body.appendChild(Wt));
  const { paddingSize: s, borderSize: o, boxSizing: i, contextStyle: a } = F5(e);
  Wt.setAttribute("style", `${a};${N5}`), Wt.value = e.value || e.placeholder || "";
  let c = Wt.scrollHeight;
  const u = {};
  i === "border-box" ? c = c + o : i === "content-box" && (c = c - s), Wt.value = "";
  const d = Wt.scrollHeight - s;
  if (Ze(t)) {
    let l = d * t;
    i === "border-box" && (l = l + s + o), c = Math.max(l, c), u.minHeight = `${l}px`;
  }
  if (Ze(n)) {
    let l = d * n;
    i === "border-box" && (l = l + s + o), c = Math.min(l, c);
  }
  return u.height = `${c}px`, (r = Wt.parentNode) == null || r.removeChild(Wt), Wt = void 0, u;
}
const j5 = Me({
  id: {
    type: String,
    default: void 0
  },
  size: Cl,
  disabled: Boolean,
  modelValue: {
    type: ge([
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
    type: ge([Boolean, Object]),
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
    type: Qt
  },
  prefixIcon: {
    type: Qt
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
    type: ge([Object, Array, String]),
    default: () => pl({})
  },
  autofocus: {
    type: Boolean,
    default: !1
  }
}), H5 = {
  [_t]: (e) => Xt(e),
  input: (e) => Xt(e),
  change: (e) => Xt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, V5 = ["role"], U5 = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus"], Z5 = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus"], W5 = H({
  name: "ElInput",
  inheritAttrs: !1
}), G5 = /* @__PURE__ */ H({
  ...W5,
  props: j5,
  emits: H5,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = lo(), o = qp(), i = T(() => {
      const G = {};
      return r.containerRole === "combobox" && (G["aria-haspopup"] = s["aria-haspopup"], G["aria-owns"] = s["aria-owns"], G["aria-expanded"] = s["aria-expanded"]), G;
    }), a = T(() => [
      r.type === "textarea" ? b.b() : g.b(),
      g.m(f.value),
      g.is("disabled", v.value),
      g.is("exceed", Oe.value),
      {
        [g.b("group")]: o.prepend || o.append,
        [g.bm("group", "append")]: o.append,
        [g.bm("group", "prepend")]: o.prepend,
        [g.m("prefix")]: o.prefix || r.prefixIcon,
        [g.m("suffix")]: o.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [g.bm("suffix", "password-clear")]: W.value && pe.value
      },
      s.class
    ]), c = T(() => [
      g.e("wrapper"),
      g.is("focus", R.value)
    ]), u = r3({
      excludeKeys: T(() => Object.keys(i.value))
    }), { form: d, formItem: l } = xs(), { inputId: m } = Hh(r, {
      formItemContext: l
    }), f = go(), v = Cs(), g = Ee("input"), b = Ee("textarea"), h = _n(), w = _n(), k = D(!1), C = D(!1), A = D(!1), E = D(), $ = _n(r.inputStyle), M = T(() => h.value || w.value), { wrapperRef: O, isFocused: R, handleFocus: B, handleBlur: V } = jh(M, {
      afterBlur() {
        var G;
        r.validateEvent && ((G = l == null ? void 0 : l.validate) == null || G.call(l, "blur").catch((de) => void 0));
      }
    }), re = T(() => {
      var G;
      return (G = d == null ? void 0 : d.statusIcon) != null ? G : !1;
    }), P = T(() => (l == null ? void 0 : l.validateState) || ""), U = T(() => P.value && xh[P.value]), z = T(() => A.value ? K4 : H4), N = T(() => [
      s.style,
      r.inputStyle
    ]), F = T(() => [
      r.inputStyle,
      $.value,
      { resize: r.resize }
    ]), Z = T(() => er(r.modelValue) ? "" : String(r.modelValue)), W = T(() => r.clearable && !v.value && !r.readonly && !!Z.value && (R.value || k.value)), pe = T(() => r.showPassword && !v.value && !r.readonly && !!Z.value && (!!Z.value || R.value)), le = T(() => r.showWordLimit && !!u.value.maxlength && (r.type === "text" || r.type === "textarea") && !v.value && !r.readonly && !r.showPassword), Ae = T(() => Z.value.length), Oe = T(() => !!le.value && Ae.value > Number(u.value.maxlength)), ze = T(() => !!o.suffix || !!r.suffixIcon || W.value || r.showPassword || le.value || !!P.value && re.value), [Qe, ft] = T5(h);
    fs(w, (G) => {
      if (oe(), !le.value || r.resize !== "both")
        return;
      const de = G[0], { width: Ie } = de.contentRect;
      E.value = {
        right: `calc(100% - ${Ie + 15 + 6}px)`
      };
    });
    const Ve = () => {
      const { type: G, autosize: de } = r;
      if (!(!ut || G !== "textarea" || !w.value))
        if (de) {
          const Ie = Yt(de) ? de.minRows : void 0, Ue = Yt(de) ? de.maxRows : void 0, Ut = id(w.value, Ie, Ue);
          $.value = {
            overflowY: "hidden",
            ...Ut
          }, xe(() => {
            w.value.offsetHeight, $.value = Ut;
          });
        } else
          $.value = {
            minHeight: id(w.value).minHeight
          };
    }, oe = ((G) => {
      let de = !1;
      return () => {
        var Ie;
        if (de || !r.autosize)
          return;
        ((Ie = w.value) == null ? void 0 : Ie.offsetParent) === null || (G(), de = !0);
      };
    })(Ve), _e = () => {
      const G = M.value, de = r.formatter ? r.formatter(Z.value) : Z.value;
      !G || G.value === de || (G.value = de);
    }, He = async (G) => {
      Qe();
      let { value: de } = G.target;
      if (r.formatter && (de = r.parser ? r.parser(de) : de), !C.value) {
        if (de === Z.value) {
          _e();
          return;
        }
        n(_t, de), n("input", de), await xe(), _e(), ft();
      }
    }, et = (G) => {
      n("change", G.target.value);
    }, mt = (G) => {
      n("compositionstart", G), C.value = !0;
    }, jt = (G) => {
      var de;
      n("compositionupdate", G);
      const Ie = (de = G.target) == null ? void 0 : de.value, Ue = Ie[Ie.length - 1] || "";
      C.value = !Sh(Ue);
    }, Ct = (G) => {
      n("compositionend", G), C.value && (C.value = !1, He(G));
    }, rn = () => {
      A.value = !A.value, xt();
    }, xt = async () => {
      var G;
      await xe(), (G = M.value) == null || G.focus();
    }, Ht = () => {
      var G;
      return (G = M.value) == null ? void 0 : G.blur();
    }, st = (G) => {
      k.value = !1, n("mouseleave", G);
    }, It = (G) => {
      k.value = !0, n("mouseenter", G);
    }, St = (G) => {
      n("keydown", G);
    }, Vt = () => {
      var G;
      (G = M.value) == null || G.select();
    }, Xe = () => {
      n(_t, ""), n("change", ""), n("clear"), n("input", "");
    };
    return ae(() => r.modelValue, () => {
      var G;
      xe(() => Ve()), r.validateEvent && ((G = l == null ? void 0 : l.validate) == null || G.call(l, "change").catch((de) => void 0));
    }), ae(Z, () => _e()), ae(() => r.type, async () => {
      await xe(), _e(), Ve();
    }), Be(() => {
      !r.formatter && r.parser, _e(), xe(Ve);
    }), t({
      input: h,
      textarea: w,
      ref: M,
      textareaStyle: F,
      autosize: Rt(r, "autosize"),
      focus: xt,
      blur: Ht,
      select: Vt,
      clear: Xe,
      resizeTextarea: Ve
    }), (G, de) => Ye((y(), x("div", je(_(i), {
      class: _(a),
      style: _(N),
      role: G.containerRole,
      onMouseenter: It,
      onMouseleave: st
    }), [
      Q(" input "),
      G.type !== "textarea" ? (y(), x(Pe, { key: 0 }, [
        Q(" prepend slot "),
        G.$slots.prepend ? (y(), x("div", {
          key: 0,
          class: j(_(g).be("group", "prepend"))
        }, [
          ne(G.$slots, "prepend")
        ], 2)) : Q("v-if", !0),
        p("div", {
          ref_key: "wrapperRef",
          ref: O,
          class: j(_(c))
        }, [
          Q(" prefix slot "),
          G.$slots.prefix || G.prefixIcon ? (y(), x("span", {
            key: 0,
            class: j(_(g).e("prefix"))
          }, [
            p("span", {
              class: j(_(g).e("prefix-inner"))
            }, [
              ne(G.$slots, "prefix"),
              G.prefixIcon ? (y(), X(_(bt), {
                key: 0,
                class: j(_(g).e("icon"))
              }, {
                default: Y(() => [
                  (y(), X(lt(G.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0),
          p("input", je({
            id: _(m),
            ref_key: "input",
            ref: h,
            class: _(g).e("inner")
          }, _(u), {
            type: G.showPassword ? A.value ? "text" : "password" : G.type,
            disabled: _(v),
            formatter: G.formatter,
            parser: G.parser,
            readonly: G.readonly,
            autocomplete: G.autocomplete,
            tabindex: G.tabindex,
            "aria-label": G.label,
            placeholder: G.placeholder,
            style: G.inputStyle,
            form: r.form,
            autofocus: r.autofocus,
            onCompositionstart: mt,
            onCompositionupdate: jt,
            onCompositionend: Ct,
            onInput: He,
            onFocus: de[0] || (de[0] = (...Ie) => _(B) && _(B)(...Ie)),
            onBlur: de[1] || (de[1] = (...Ie) => _(V) && _(V)(...Ie)),
            onChange: et,
            onKeydown: St
          }), null, 16, U5),
          Q(" suffix slot "),
          _(ze) ? (y(), x("span", {
            key: 1,
            class: j(_(g).e("suffix"))
          }, [
            p("span", {
              class: j(_(g).e("suffix-inner"))
            }, [
              !_(W) || !_(pe) || !_(le) ? (y(), x(Pe, { key: 0 }, [
                ne(G.$slots, "suffix"),
                G.suffixIcon ? (y(), X(_(bt), {
                  key: 0,
                  class: j(_(g).e("icon"))
                }, {
                  default: Y(() => [
                    (y(), X(lt(G.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Q("v-if", !0)
              ], 64)) : Q("v-if", !0),
              _(W) ? (y(), X(_(bt), {
                key: 1,
                class: j([_(g).e("icon"), _(g).e("clear")]),
                onMousedown: Ke(_(Jr), ["prevent"]),
                onClick: Xe
              }, {
                default: Y(() => [
                  ue(_(dl))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Q("v-if", !0),
              _(pe) ? (y(), X(_(bt), {
                key: 2,
                class: j([_(g).e("icon"), _(g).e("password")]),
                onClick: rn
              }, {
                default: Y(() => [
                  (y(), X(lt(_(z))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0),
              _(le) ? (y(), x("span", {
                key: 3,
                class: j(_(g).e("count"))
              }, [
                p("span", {
                  class: j(_(g).e("count-inner"))
                }, ve(_(Ae)) + " / " + ve(_(u).maxlength), 3)
              ], 2)) : Q("v-if", !0),
              _(P) && _(U) && _(re) ? (y(), X(_(bt), {
                key: 4,
                class: j([
                  _(g).e("icon"),
                  _(g).e("validateIcon"),
                  _(g).is("loading", _(P) === "validating")
                ])
              }, {
                default: Y(() => [
                  (y(), X(lt(_(U))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0)
        ], 2),
        Q(" append slot "),
        G.$slots.append ? (y(), x("div", {
          key: 1,
          class: j(_(g).be("group", "append"))
        }, [
          ne(G.$slots, "append")
        ], 2)) : Q("v-if", !0)
      ], 64)) : (y(), x(Pe, { key: 1 }, [
        Q(" textarea "),
        p("textarea", je({
          id: _(m),
          ref_key: "textarea",
          ref: w,
          class: _(b).e("inner")
        }, _(u), {
          tabindex: G.tabindex,
          disabled: _(v),
          readonly: G.readonly,
          autocomplete: G.autocomplete,
          style: _(F),
          "aria-label": G.label,
          placeholder: G.placeholder,
          form: r.form,
          autofocus: r.autofocus,
          onCompositionstart: mt,
          onCompositionupdate: jt,
          onCompositionend: Ct,
          onInput: He,
          onFocus: de[2] || (de[2] = (...Ie) => _(B) && _(B)(...Ie)),
          onBlur: de[3] || (de[3] = (...Ie) => _(V) && _(V)(...Ie)),
          onChange: et,
          onKeydown: St
        }), null, 16, Z5),
        _(le) ? (y(), x("span", {
          key: 0,
          style: qe(E.value),
          class: j(_(g).e("count"))
        }, ve(_(Ae)) + " / " + ve(_(u).maxlength), 7)) : Q("v-if", !0)
      ], 64))
    ], 16, V5)), [
      [Jt, G.type !== "hidden"]
    ]);
  }
});
var K5 = /* @__PURE__ */ ye(G5, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Ss = Ft(K5), gr = 4, X5 = {
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
}, Y5 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), Vh = Symbol("scrollbarContextKey"), J5 = Me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), Q5 = "Thumb", e6 = /* @__PURE__ */ H({
  __name: "thumb",
  props: J5,
  setup(e) {
    const t = e, n = $e(Vh), r = Ee("scrollbar");
    n || A4(Q5, "can not inject scrollbar context");
    const s = D(), o = D(), i = D({}), a = D(!1);
    let c = !1, u = !1, d = ut ? document.onselectstart : null;
    const l = T(() => X5[t.vertical ? "vertical" : "horizontal"]), m = T(() => Y5({
      size: t.size,
      move: t.move,
      bar: l.value
    })), f = T(() => s.value[l.value.offset] ** 2 / n.wrapElement[l.value.scrollSize] / t.ratio / o.value[l.value.offset]), v = (E) => {
      var $;
      if (E.stopPropagation(), E.ctrlKey || [1, 2].includes(E.button))
        return;
      ($ = window.getSelection()) == null || $.removeAllRanges(), b(E);
      const M = E.currentTarget;
      M && (i.value[l.value.axis] = M[l.value.offset] - (E[l.value.client] - M.getBoundingClientRect()[l.value.direction]));
    }, g = (E) => {
      if (!o.value || !s.value || !n.wrapElement)
        return;
      const $ = Math.abs(E.target.getBoundingClientRect()[l.value.direction] - E[l.value.client]), M = o.value[l.value.offset] / 2, O = ($ - M) * 100 * f.value / s.value[l.value.offset];
      n.wrapElement[l.value.scroll] = O * n.wrapElement[l.value.scrollSize] / 100;
    }, b = (E) => {
      E.stopImmediatePropagation(), c = !0, document.addEventListener("mousemove", h), document.addEventListener("mouseup", w), d = document.onselectstart, document.onselectstart = () => !1;
    }, h = (E) => {
      if (!s.value || !o.value || c === !1)
        return;
      const $ = i.value[l.value.axis];
      if (!$)
        return;
      const M = (s.value.getBoundingClientRect()[l.value.direction] - E[l.value.client]) * -1, O = o.value[l.value.offset] - $, R = (M - O) * 100 * f.value / s.value[l.value.offset];
      n.wrapElement[l.value.scroll] = R * n.wrapElement[l.value.scrollSize] / 100;
    }, w = () => {
      c = !1, i.value[l.value.axis] = 0, document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", w), A(), u && (a.value = !1);
    }, k = () => {
      u = !1, a.value = !!t.size;
    }, C = () => {
      u = !0, a.value = c;
    };
    Nt(() => {
      A(), document.removeEventListener("mouseup", w);
    });
    const A = () => {
      document.onselectstart !== d && (document.onselectstart = d);
    };
    return Qn(Rt(n, "scrollbarElement"), "mousemove", k), Qn(Rt(n, "scrollbarElement"), "mouseleave", C), (E, $) => (y(), X(nr, {
      name: _(r).b("fade"),
      persisted: ""
    }, {
      default: Y(() => [
        Ye(p("div", {
          ref_key: "instance",
          ref: s,
          class: j([_(r).e("bar"), _(r).is(_(l).key)]),
          onMousedown: g
        }, [
          p("div", {
            ref_key: "thumb",
            ref: o,
            class: j(_(r).e("thumb")),
            style: qe(_(m)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [Jt, E.always || a.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ad = /* @__PURE__ */ ye(e6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const t6 = Me({
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
}), n6 = /* @__PURE__ */ H({
  __name: "bar",
  props: t6,
  setup(e, { expose: t }) {
    const n = e, r = D(0), s = D(0);
    return t({
      handleScroll: (i) => {
        if (i) {
          const a = i.offsetHeight - gr, c = i.offsetWidth - gr;
          s.value = i.scrollTop * 100 / a * n.ratioY, r.value = i.scrollLeft * 100 / c * n.ratioX;
        }
      }
    }), (i, a) => (y(), x(Pe, null, [
      ue(ad, {
        move: r.value,
        ratio: i.ratioX,
        size: i.width,
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      ue(ad, {
        move: s.value,
        ratio: i.ratioY,
        size: i.height,
        vertical: "",
        always: i.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var r6 = /* @__PURE__ */ ye(n6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const o6 = Me({
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
    type: ge([String, Object, Array]),
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
}), s6 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(Ze)
}, i6 = "ElScrollbar", a6 = H({
  name: i6
}), c6 = /* @__PURE__ */ H({
  ...a6,
  props: o6,
  emits: s6,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = Ee("scrollbar");
    let o, i;
    const a = D(), c = D(), u = D(), d = D("0"), l = D("0"), m = D(), f = D(1), v = D(1), g = T(() => {
      const $ = {};
      return r.height && ($.height = wr(r.height)), r.maxHeight && ($.maxHeight = wr(r.maxHeight)), [r.wrapStyle, $];
    }), b = T(() => [
      r.wrapClass,
      s.e("wrap"),
      { [s.em("wrap", "hidden-default")]: !r.native }
    ]), h = T(() => [s.e("view"), r.viewClass]), w = () => {
      var $;
      c.value && (($ = m.value) == null || $.handleScroll(c.value), n("scroll", {
        scrollTop: c.value.scrollTop,
        scrollLeft: c.value.scrollLeft
      }));
    };
    function k($, M) {
      Yt($) ? c.value.scrollTo($) : Ze($) && Ze(M) && c.value.scrollTo($, M);
    }
    const C = ($) => {
      Ze($) && (c.value.scrollTop = $);
    }, A = ($) => {
      Ze($) && (c.value.scrollLeft = $);
    }, E = () => {
      if (!c.value)
        return;
      const $ = c.value.offsetHeight - gr, M = c.value.offsetWidth - gr, O = $ ** 2 / c.value.scrollHeight, R = M ** 2 / c.value.scrollWidth, B = Math.max(O, r.minSize), V = Math.max(R, r.minSize);
      f.value = O / ($ - O) / (B / ($ - B)), v.value = R / (M - R) / (V / (M - V)), l.value = B + gr < $ ? `${B}px` : "", d.value = V + gr < M ? `${V}px` : "";
    };
    return ae(() => r.noresize, ($) => {
      $ ? (o == null || o(), i == null || i()) : ({ stop: o } = fs(u, E), i = Qn("resize", E));
    }, { immediate: !0 }), ae(() => [r.maxHeight, r.height], () => {
      r.native || xe(() => {
        var $;
        E(), c.value && (($ = m.value) == null || $.handleScroll(c.value));
      });
    }), kt(Vh, qn({
      scrollbarElement: a,
      wrapElement: c
    })), Be(() => {
      r.native || xe(() => {
        E();
      });
    }), Fv(() => E()), t({
      wrapRef: c,
      update: E,
      scrollTo: k,
      setScrollTop: C,
      setScrollLeft: A,
      handleScroll: w
    }), ($, M) => (y(), x("div", {
      ref_key: "scrollbarRef",
      ref: a,
      class: j(_(s).b())
    }, [
      p("div", {
        ref_key: "wrapRef",
        ref: c,
        class: j(_(b)),
        style: qe(_(g)),
        onScroll: w
      }, [
        (y(), X(lt($.tag), {
          id: $.id,
          ref_key: "resizeRef",
          ref: u,
          class: j(_(h)),
          style: qe($.viewStyle),
          role: $.role,
          "aria-label": $.ariaLabel,
          "aria-orientation": $.ariaOrientation
        }, {
          default: Y(() => [
            ne($.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "class", "style", "role", "aria-label", "aria-orientation"]))
      ], 38),
      $.native ? Q("v-if", !0) : (y(), X(r6, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        height: l.value,
        width: d.value,
        always: $.always,
        "ratio-x": v.value,
        "ratio-y": f.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var l6 = /* @__PURE__ */ ye(c6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const u6 = Ft(l6), Sl = Symbol("popper"), Uh = Symbol("popperContent"), d6 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Zh = Me({
  role: {
    type: String,
    values: d6,
    default: "tooltip"
  }
}), f6 = H({
  name: "ElPopper",
  inheritAttrs: !1
}), p6 = /* @__PURE__ */ H({
  ...f6,
  props: Zh,
  setup(e, { expose: t }) {
    const n = e, r = D(), s = D(), o = D(), i = D(), a = T(() => n.role), c = {
      triggerRef: r,
      popperInstanceRef: s,
      contentRef: o,
      referenceRef: i,
      role: a
    };
    return t(c), kt(Sl, c), (u, d) => ne(u.$slots, "default");
  }
});
var h6 = /* @__PURE__ */ ye(p6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const Wh = Me({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), g6 = H({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), m6 = /* @__PURE__ */ H({
  ...g6,
  props: Wh,
  setup(e, { expose: t }) {
    const n = e, r = Ee("popper"), { arrowOffset: s, arrowRef: o, arrowStyle: i } = $e(Uh, void 0);
    return ae(() => n.arrowOffset, (a) => {
      s.value = a;
    }), Nt(() => {
      o.value = void 0;
    }), t({
      arrowRef: o
    }), (a, c) => (y(), x("span", {
      ref_key: "arrowRef",
      ref: o,
      class: j(_(r).e("arrow")),
      style: qe(_(i)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var v6 = /* @__PURE__ */ ye(m6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const _6 = "ElOnlyChild", b6 = H({
  name: _6,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const s = $e(Fh), o = E5((r = s == null ? void 0 : s.setForwardRef) != null ? r : Jr);
    return () => {
      var i;
      const a = (i = t.default) == null ? void 0 : i.call(t, n);
      if (!a || a.length > 1)
        return null;
      const c = Gh(a);
      return c ? Ye(jv(c, n), [[o]]) : null;
    };
  }
});
function Gh(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Yt(n))
      switch (n.type) {
        case Hv:
          continue;
        case Fp:
        case "svg":
          return cd(n);
        case Pe:
          return Gh(n.children);
        default:
          return n;
      }
    return cd(n);
  }
  return null;
}
function cd(e) {
  const t = Ee("only-child");
  return ue("span", {
    class: t.e("content")
  }, [e]);
}
const Kh = Me({
  virtualRef: {
    type: ge(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: ge(Function)
  },
  onMouseleave: {
    type: ge(Function)
  },
  onClick: {
    type: ge(Function)
  },
  onKeydown: {
    type: ge(Function)
  },
  onFocus: {
    type: ge(Function)
  },
  onBlur: {
    type: ge(Function)
  },
  onContextmenu: {
    type: ge(Function)
  },
  id: String,
  open: Boolean
}), y6 = H({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), w6 = /* @__PURE__ */ H({
  ...y6,
  props: Kh,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: s } = $e(Sl, void 0);
    S5(s);
    const o = T(() => a.value ? n.id : void 0), i = T(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), a = T(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), c = T(() => a.value ? `${n.open}` : void 0);
    let u;
    return Be(() => {
      ae(() => n.virtualRef, (d) => {
        d && (s.value = Bn(d));
      }, {
        immediate: !0
      }), ae(s, (d, l) => {
        u == null || u(), u = void 0, to(d) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((m) => {
          var f;
          const v = n[m];
          v && (d.addEventListener(m.slice(2).toLowerCase(), v), (f = l == null ? void 0 : l.removeEventListener) == null || f.call(l, m.slice(2).toLowerCase(), v));
        }), u = ae([o, i, a, c], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((f, v) => {
            er(m[v]) ? d.removeAttribute(f) : d.setAttribute(f, m[v]);
          });
        }, { immediate: !0 })), to(l) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => l.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), Nt(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: s
    }), (d, l) => d.virtualTriggering ? Q("v-if", !0) : (y(), X(_(b6), je({ key: 0 }, d.$attrs, {
      "aria-controls": _(o),
      "aria-describedby": _(i),
      "aria-expanded": _(c),
      "aria-haspopup": _(a)
    }), {
      default: Y(() => [
        ne(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var k6 = /* @__PURE__ */ ye(w6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const Ws = "focus-trap.focus-after-trapped", Gs = "focus-trap.focus-after-released", C6 = "focus-trap.focusout-prevented", ld = {
  cancelable: !0,
  bubbles: !1
}, x6 = {
  cancelable: !0,
  bubbles: !1
}, ud = "focusAfterTrapped", dd = "focusAfterReleased", S6 = Symbol("elFocusTrap"), El = D(), Es = D(0), Al = D(0);
let Eo = 0;
const Xh = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, fd = (e, t) => {
  for (const n of e)
    if (!E6(n, t))
      return n;
}, E6 = (e, t) => {
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
}, A6 = (e) => {
  const t = Xh(e), n = fd(t, e), r = fd(t.reverse(), e);
  return [n, r];
}, $6 = (e) => e instanceof HTMLInputElement && "select" in e, Ln = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Al.value = window.performance.now(), e !== n && $6(e) && t && e.select();
  }
};
function pd(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const M6 = () => {
  let e = [];
  return {
    push: (r) => {
      const s = e[0];
      s && r !== s && s.pause(), e = pd(e, r), e.unshift(r);
    },
    remove: (r) => {
      var s, o;
      e = pd(e, r), (o = (s = e[0]) == null ? void 0 : s.resume) == null || o.call(s);
    }
  };
}, T6 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Ln(r, t), document.activeElement !== n)
      return;
}, hd = M6(), I6 = () => Es.value > Al.value, Ao = () => {
  El.value = "pointer", Es.value = window.performance.now();
}, gd = () => {
  El.value = "keyboard", Es.value = window.performance.now();
}, L6 = () => (Be(() => {
  Eo === 0 && (document.addEventListener("mousedown", Ao), document.addEventListener("touchstart", Ao), document.addEventListener("keydown", gd)), Eo++;
}), Nt(() => {
  Eo--, Eo <= 0 && (document.removeEventListener("mousedown", Ao), document.removeEventListener("touchstart", Ao), document.removeEventListener("keydown", gd));
}), {
  focusReason: El,
  lastUserFocusTimestamp: Es,
  lastAutomatedFocusTimestamp: Al
}), $o = (e) => new CustomEvent(C6, {
  ...x6,
  detail: e
}), O6 = H({
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
    ud,
    dd,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = D();
    let r, s;
    const { focusReason: o } = L6();
    y5((v) => {
      e.trapped && !i.paused && t("release-requested", v);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, a = (v) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: g, altKey: b, ctrlKey: h, metaKey: w, currentTarget: k, shiftKey: C } = v, { loop: A } = e, E = g === yn.tab && !b && !h && !w, $ = document.activeElement;
      if (E && $) {
        const M = k, [O, R] = A6(M);
        if (O && R) {
          if (!C && $ === R) {
            const V = $o({
              focusReason: o.value
            });
            t("focusout-prevented", V), V.defaultPrevented || (v.preventDefault(), A && Ln(O, !0));
          } else if (C && [O, M].includes($)) {
            const V = $o({
              focusReason: o.value
            });
            t("focusout-prevented", V), V.defaultPrevented || (v.preventDefault(), A && Ln(R, !0));
          }
        } else if ($ === M) {
          const V = $o({
            focusReason: o.value
          });
          t("focusout-prevented", V), V.defaultPrevented || v.preventDefault();
        }
      }
    };
    kt(S6, {
      focusTrapRef: n,
      onKeydown: a
    }), ae(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), ae([n], ([v], [g]) => {
      v && (v.addEventListener("keydown", a), v.addEventListener("focusin", d), v.addEventListener("focusout", l)), g && (g.removeEventListener("keydown", a), g.removeEventListener("focusin", d), g.removeEventListener("focusout", l));
    });
    const c = (v) => {
      t(ud, v);
    }, u = (v) => t(dd, v), d = (v) => {
      const g = _(n);
      if (!g)
        return;
      const b = v.target, h = v.relatedTarget, w = b && g.contains(b);
      e.trapped || h && g.contains(h) || (r = h), w && t("focusin", v), !i.paused && e.trapped && (w ? s = b : Ln(s, !0));
    }, l = (v) => {
      const g = _(n);
      if (!(i.paused || !g))
        if (e.trapped) {
          const b = v.relatedTarget;
          !er(b) && !g.contains(b) && setTimeout(() => {
            if (!i.paused && e.trapped) {
              const h = $o({
                focusReason: o.value
              });
              t("focusout-prevented", h), h.defaultPrevented || Ln(s, !0);
            }
          }, 0);
        } else {
          const b = v.target;
          b && g.contains(b) || t("focusout", v);
        }
    };
    async function m() {
      await xe();
      const v = _(n);
      if (v) {
        hd.push(i);
        const g = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = g, !v.contains(g)) {
          const h = new Event(Ws, ld);
          v.addEventListener(Ws, c), v.dispatchEvent(h), h.defaultPrevented || xe(() => {
            let w = e.focusStartEl;
            Xt(w) || (Ln(w), document.activeElement !== w && (w = "first")), w === "first" && T6(Xh(v), !0), (document.activeElement === g || w === "container") && Ln(v);
          });
        }
      }
    }
    function f() {
      const v = _(n);
      if (v) {
        v.removeEventListener(Ws, c);
        const g = new CustomEvent(Gs, {
          ...ld,
          detail: {
            focusReason: o.value
          }
        });
        v.addEventListener(Gs, u), v.dispatchEvent(g), !g.defaultPrevented && (o.value == "keyboard" || !I6() || v.contains(document.activeElement)) && Ln(r ?? document.body), v.removeEventListener(Gs, u), hd.remove(i);
      }
    }
    return Be(() => {
      e.trapped && m(), ae(() => e.trapped, (v) => {
        v ? m() : f();
      });
    }), Nt(() => {
      e.trapped && f();
    }), {
      onKeydown: a
    };
  }
});
function R6(e, t, n, r, s, o) {
  return ne(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var P6 = /* @__PURE__ */ ye(O6, [["render", R6], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const B6 = ["fixed", "absolute"], z6 = Me({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: ge(Array),
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
    values: ys,
    default: "bottom"
  },
  popperOptions: {
    type: ge(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: B6,
    default: "absolute"
  }
}), Yh = Me({
  ...z6,
  id: String,
  style: {
    type: ge([String, Array, Object])
  },
  className: {
    type: ge([String, Array, Object])
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
    type: ge([String, Array, Object])
  },
  popperStyle: {
    type: ge([String, Array, Object])
  },
  referenceEl: {
    type: ge(Object)
  },
  triggerTargetEl: {
    type: ge(Object)
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
}), D6 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, N6 = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: s } = e, o = {
    placement: n,
    strategy: r,
    ...s,
    modifiers: [...F6(e), ...t]
  };
  return j6(o, s == null ? void 0 : s.modifiers), o;
}, q6 = (e) => {
  if (ut)
    return Bn(e);
};
function F6(e) {
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
function j6(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const H6 = 0, V6 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: s } = $e(Sl, void 0), o = D(), i = D(), a = T(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), c = T(() => {
    var h;
    const w = _(o), k = (h = _(i)) != null ? h : H6;
    return {
      name: "arrow",
      enabled: !C4(w),
      options: {
        element: w,
        padding: k
      }
    };
  }), u = T(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...N6(e, [
      _(c),
      _(a)
    ])
  })), d = T(() => q6(e.referenceEl) || _(r)), { attributes: l, state: m, styles: f, update: v, forceUpdate: g, instanceRef: b } = m5(d, n, u);
  return ae(b, (h) => t.value = h), Be(() => {
    ae(() => {
      var h;
      return (h = _(d)) == null ? void 0 : h.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: l,
    arrowRef: o,
    contentRef: n,
    instanceRef: b,
    state: m,
    styles: f,
    role: s,
    forceUpdate: g,
    update: v
  };
}, U6 = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: s } = M5(), o = Ee("popper"), i = T(() => _(t).popper), a = D(Ze(e.zIndex) ? e.zIndex : s()), c = T(() => [
    o.b(),
    o.is("pure", e.pure),
    o.is(e.effect),
    e.popperClass
  ]), u = T(() => [
    { zIndex: _(a) },
    _(n).popper,
    e.popperStyle || {}
  ]), d = T(() => r.value === "dialog" ? "false" : void 0), l = T(() => _(n).arrow || {});
  return {
    ariaModal: d,
    arrowStyle: l,
    contentAttrs: i,
    contentClass: c,
    contentStyle: u,
    contentZIndex: a,
    updateZIndex: () => {
      a.value = Ze(e.zIndex) ? e.zIndex : s();
    }
  };
}, Z6 = (e, t) => {
  const n = D(!1), r = D();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (u) => {
      var d;
      ((d = u.detail) == null ? void 0 : d.focusReason) !== "pointer" && (r.value = "first", t("blur"));
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
}, W6 = H({
  name: "ElPopperContent"
}), G6 = /* @__PURE__ */ H({
  ...W6,
  props: Yh,
  emits: D6,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: s,
      trapped: o,
      onFocusAfterReleased: i,
      onFocusAfterTrapped: a,
      onFocusInTrap: c,
      onFocusoutPrevented: u,
      onReleaseRequested: d
    } = Z6(r, n), { attributes: l, arrowRef: m, contentRef: f, styles: v, instanceRef: g, role: b, update: h } = V6(r), {
      ariaModal: w,
      arrowStyle: k,
      contentAttrs: C,
      contentClass: A,
      contentStyle: E,
      updateZIndex: $
    } = U6(r, {
      styles: v,
      attributes: l,
      role: b
    }), M = $e(Qo, void 0), O = D();
    kt(Uh, {
      arrowStyle: k,
      arrowRef: m,
      arrowOffset: O
    }), M && (M.addInputId || M.removeInputId) && kt(Qo, {
      ...M,
      addInputId: Jr,
      removeInputId: Jr
    });
    let R;
    const B = (re = !0) => {
      h(), re && $();
    }, V = () => {
      B(!1), r.visible && r.focusOnShow ? o.value = !0 : r.visible === !1 && (o.value = !1);
    };
    return Be(() => {
      ae(() => r.triggerTargetEl, (re, P) => {
        R == null || R(), R = void 0;
        const U = _(re || f.value), z = _(P || f.value);
        to(U) && (R = ae([b, () => r.ariaLabel, w, () => r.id], (N) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((F, Z) => {
            er(N[Z]) ? U.removeAttribute(F) : U.setAttribute(F, N[Z]);
          });
        }, { immediate: !0 })), z !== U && to(z) && ["role", "aria-label", "aria-modal", "id"].forEach((N) => {
          z.removeAttribute(N);
        });
      }, { immediate: !0 }), ae(() => r.visible, V, { immediate: !0 });
    }), Nt(() => {
      R == null || R(), R = void 0;
    }), t({
      popperContentRef: f,
      popperInstanceRef: g,
      updatePopper: B,
      contentStyle: E
    }), (re, P) => (y(), x("div", je({
      ref_key: "contentRef",
      ref: f
    }, _(C), {
      style: _(E),
      class: _(A),
      tabindex: "-1",
      onMouseenter: P[0] || (P[0] = (U) => re.$emit("mouseenter", U)),
      onMouseleave: P[1] || (P[1] = (U) => re.$emit("mouseleave", U))
    }), [
      ue(_(P6), {
        trapped: _(o),
        "trap-on-focus-in": !0,
        "focus-trap-el": _(f),
        "focus-start-el": _(s),
        onFocusAfterTrapped: _(a),
        onFocusAfterReleased: _(i),
        onFocusin: _(c),
        onFocusoutPrevented: _(u),
        onReleaseRequested: _(d)
      }, {
        default: Y(() => [
          ne(re.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var K6 = /* @__PURE__ */ ye(G6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const X6 = Ft(h6), $l = Symbol("elTooltip"), Mt = Me({
  ...C5,
  ...Yh,
  appendTo: {
    type: ge([String, Object])
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
    type: ge(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), oo = Me({
  ...Kh,
  disabled: Boolean,
  trigger: {
    type: ge([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: ge(Array),
    default: () => [yn.enter, yn.space]
  }
}), {
  useModelToggleProps: Y6,
  useModelToggleEmits: J6,
  useModelToggle: Q6
} = p3("visible"), eC = Me({
  ...Zh,
  ...Y6,
  ...Mt,
  ...oo,
  ...Wh,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), tC = [
  ...J6,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], nC = (e, t) => Xb(e) ? e.includes(t) : e === t, ur = (e, t, n) => (r) => {
  nC(_(e), t) && n(r);
}, rC = H({
  name: "ElTooltipTrigger"
}), oC = /* @__PURE__ */ H({
  ...rC,
  props: oo,
  setup(e, { expose: t }) {
    const n = e, r = Ee("tooltip"), { controlled: s, id: o, open: i, onOpen: a, onClose: c, onToggle: u } = $e($l, void 0), d = D(null), l = () => {
      if (_(s) || n.disabled)
        return !0;
    }, m = Rt(n, "trigger"), f = vn(l, ur(m, "hover", a)), v = vn(l, ur(m, "hover", c)), g = vn(l, ur(m, "click", (C) => {
      C.button === 0 && u(C);
    })), b = vn(l, ur(m, "focus", a)), h = vn(l, ur(m, "focus", c)), w = vn(l, ur(m, "contextmenu", (C) => {
      C.preventDefault(), u(C);
    })), k = vn(l, (C) => {
      const { code: A } = C;
      n.triggerKeys.includes(A) && (C.preventDefault(), u(C));
    });
    return t({
      triggerRef: d
    }), (C, A) => (y(), X(_(k6), {
      id: _(o),
      "virtual-ref": C.virtualRef,
      open: _(i),
      "virtual-triggering": C.virtualTriggering,
      class: j(_(r).e("trigger")),
      onBlur: _(h),
      onClick: _(g),
      onContextmenu: _(w),
      onFocus: _(b),
      onMouseenter: _(f),
      onMouseleave: _(v),
      onKeydown: _(k)
    }, {
      default: Y(() => [
        ne(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var sC = /* @__PURE__ */ ye(oC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const iC = H({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), aC = /* @__PURE__ */ H({
  ...iC,
  props: Mt,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = qh(), s = Ee("tooltip"), o = D(null), i = D(!1), {
      controlled: a,
      id: c,
      open: u,
      trigger: d,
      onClose: l,
      onOpen: m,
      onShow: f,
      onHide: v,
      onBeforeShow: g,
      onBeforeHide: b
    } = $e($l, void 0), h = T(() => n.transition || `${s.namespace.value}-fade-in-linear`), w = T(() => n.persistent);
    Nt(() => {
      i.value = !0;
    });
    const k = T(() => _(w) ? !0 : _(u)), C = T(() => n.disabled ? !1 : _(u)), A = T(() => n.appendTo || r.value), E = T(() => {
      var N;
      return (N = n.style) != null ? N : {};
    }), $ = T(() => !_(u)), M = () => {
      v();
    }, O = () => {
      if (_(a))
        return !0;
    }, R = vn(O, () => {
      n.enterable && _(d) === "hover" && m();
    }), B = vn(O, () => {
      _(d) === "hover" && l();
    }), V = () => {
      var N, F;
      (F = (N = o.value) == null ? void 0 : N.updatePopper) == null || F.call(N), g == null || g();
    }, re = () => {
      b == null || b();
    }, P = () => {
      f(), z = Db(T(() => {
        var N;
        return (N = o.value) == null ? void 0 : N.popperContentRef;
      }), () => {
        if (_(a))
          return;
        _(d) !== "hover" && l();
      });
    }, U = () => {
      n.virtualTriggering || l();
    };
    let z;
    return ae(() => _(u), (N) => {
      N || z == null || z();
    }, {
      flush: "post"
    }), ae(() => n.content, () => {
      var N, F;
      (F = (N = o.value) == null ? void 0 : N.updatePopper) == null || F.call(N);
    }), t({
      contentRef: o
    }), (N, F) => (y(), X(Vv, {
      disabled: !N.teleported,
      to: _(A)
    }, [
      ue(nr, {
        name: _(h),
        onAfterLeave: M,
        onBeforeEnter: V,
        onAfterEnter: P,
        onBeforeLeave: re
      }, {
        default: Y(() => [
          _(k) ? Ye((y(), X(_(K6), je({
            key: 0,
            id: _(c),
            ref_key: "contentRef",
            ref: o
          }, N.$attrs, {
            "aria-label": N.ariaLabel,
            "aria-hidden": _($),
            "boundaries-padding": N.boundariesPadding,
            "fallback-placements": N.fallbackPlacements,
            "gpu-acceleration": N.gpuAcceleration,
            offset: N.offset,
            placement: N.placement,
            "popper-options": N.popperOptions,
            strategy: N.strategy,
            effect: N.effect,
            enterable: N.enterable,
            pure: N.pure,
            "popper-class": N.popperClass,
            "popper-style": [N.popperStyle, _(E)],
            "reference-el": N.referenceEl,
            "trigger-target-el": N.triggerTargetEl,
            visible: _(C),
            "z-index": N.zIndex,
            onMouseenter: _(R),
            onMouseleave: _(B),
            onBlur: U,
            onClose: _(l)
          }), {
            default: Y(() => [
              i.value ? Q("v-if", !0) : ne(N.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [Jt, _(C)]
          ]) : Q("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var cC = /* @__PURE__ */ ye(aC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const lC = ["innerHTML"], uC = { key: 1 }, dC = H({
  name: "ElTooltip"
}), fC = /* @__PURE__ */ H({
  ...dC,
  props: eC,
  emits: tC,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    k5();
    const s = ks(), o = D(), i = D(), a = () => {
      var h;
      const w = _(o);
      w && ((h = w.popperInstanceRef) == null || h.update());
    }, c = D(!1), u = D(), { show: d, hide: l, hasUpdateHandler: m } = Q6({
      indicator: c,
      toggleReason: u
    }), { onOpen: f, onClose: v } = x5({
      showAfter: Rt(r, "showAfter"),
      hideAfter: Rt(r, "hideAfter"),
      autoClose: Rt(r, "autoClose"),
      open: d,
      close: l
    }), g = T(() => ul(r.visible) && !m.value);
    kt($l, {
      controlled: g,
      id: s,
      open: zp(c),
      trigger: Rt(r, "trigger"),
      onOpen: (h) => {
        f(h);
      },
      onClose: (h) => {
        v(h);
      },
      onToggle: (h) => {
        _(c) ? v(h) : f(h);
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
    }), ae(() => r.disabled, (h) => {
      h && c.value && (c.value = !1);
    });
    const b = (h) => {
      var w, k;
      const C = (k = (w = i.value) == null ? void 0 : w.contentRef) == null ? void 0 : k.popperContentRef, A = (h == null ? void 0 : h.relatedTarget) || document.activeElement;
      return C && C.contains(A);
    };
    return Uv(() => c.value && l()), t({
      popperRef: o,
      contentRef: i,
      isFocusInsideContent: b,
      updatePopper: a,
      onOpen: f,
      onClose: v,
      hide: l
    }), (h, w) => (y(), X(_(X6), {
      ref_key: "popperRef",
      ref: o,
      role: h.role
    }, {
      default: Y(() => [
        ue(sC, {
          disabled: h.disabled,
          trigger: h.trigger,
          "trigger-keys": h.triggerKeys,
          "virtual-ref": h.virtualRef,
          "virtual-triggering": h.virtualTriggering
        }, {
          default: Y(() => [
            h.$slots.default ? ne(h.$slots, "default", { key: 0 }) : Q("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ue(cC, {
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
          default: Y(() => [
            ne(h.$slots, "content", {}, () => [
              h.rawContent ? (y(), x("span", {
                key: 0,
                innerHTML: h.content
              }, null, 8, lC)) : (y(), x("span", uC, ve(h.content), 1))
            ]),
            h.showArrow ? (y(), X(_(v6), {
              key: 0,
              "arrow-offset": h.arrowOffset
            }, null, 8, ["arrow-offset"])) : Q("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var pC = /* @__PURE__ */ ye(fC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const so = Ft(pC), Jh = Symbol("buttonGroupContextKey"), hC = (e, t) => {
  Eh({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, T(() => e.type === "text"));
  const n = $e(Jh, void 0), r = R5("button"), { form: s } = xs(), o = go(T(() => n == null ? void 0 : n.size)), i = Cs(), a = D(), c = qp(), u = T(() => e.type || (n == null ? void 0 : n.type) || ""), d = T(() => {
    var v, g, b;
    return (b = (g = e.autoInsertSpace) != null ? g : (v = r.value) == null ? void 0 : v.autoInsertSpace) != null ? b : !1;
  }), l = T(() => e.tag === "button" ? {
    ariaDisabled: i.value || e.loading,
    disabled: i.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), m = T(() => {
    var v;
    const g = (v = c.default) == null ? void 0 : v.call(c);
    if (d.value && (g == null ? void 0 : g.length) === 1) {
      const b = g[0];
      if ((b == null ? void 0 : b.type) === Fp) {
        const h = b.children;
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
    _props: l,
    shouldAddSpace: m,
    handleClick: (v) => {
      e.nativeType === "reset" && (s == null || s.resetFields()), t("click", v);
    }
  };
}, gC = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], mC = ["button", "submit", "reset"], Oc = Me({
  size: Cl,
  disabled: Boolean,
  type: {
    type: String,
    values: gC,
    default: ""
  },
  icon: {
    type: Qt
  },
  nativeType: {
    type: String,
    values: mC,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Qt,
    default: () => kh
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
    type: ge([String, Object]),
    default: "button"
  }
}), vC = {
  click: (e) => e instanceof MouseEvent
};
function rt(e, t) {
  _C(e) && (e = "100%");
  var n = bC(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Mo(e) {
  return Math.min(1, Math.max(0, e));
}
function _C(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function bC(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Qh(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function To(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Jn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function yC(e, t, n) {
  return {
    r: rt(e, 255) * 255,
    g: rt(t, 255) * 255,
    b: rt(n, 255) * 255
  };
}
function md(e, t, n) {
  e = rt(e, 255), t = rt(t, 255), n = rt(n, 255);
  var r = Math.max(e, t, n), s = Math.min(e, t, n), o = 0, i = 0, a = (r + s) / 2;
  if (r === s)
    i = 0, o = 0;
  else {
    var c = r - s;
    switch (i = a > 0.5 ? c / (2 - r - s) : c / (r + s), r) {
      case e:
        o = (t - n) / c + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / c + 2;
        break;
      case n:
        o = (e - t) / c + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: i, l: a };
}
function Ks(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function wC(e, t, n) {
  var r, s, o;
  if (e = rt(e, 360), t = rt(t, 100), n = rt(n, 100), t === 0)
    s = n, o = n, r = n;
  else {
    var i = n < 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - i;
    r = Ks(a, i, e + 1 / 3), s = Ks(a, i, e), o = Ks(a, i, e - 1 / 3);
  }
  return { r: r * 255, g: s * 255, b: o * 255 };
}
function vd(e, t, n) {
  e = rt(e, 255), t = rt(t, 255), n = rt(n, 255);
  var r = Math.max(e, t, n), s = Math.min(e, t, n), o = 0, i = r, a = r - s, c = r === 0 ? 0 : a / r;
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
  return { h: o, s: c, v: i };
}
function kC(e, t, n) {
  e = rt(e, 360) * 6, t = rt(t, 100), n = rt(n, 100);
  var r = Math.floor(e), s = e - r, o = n * (1 - t), i = n * (1 - s * t), a = n * (1 - (1 - s) * t), c = r % 6, u = [n, i, o, o, a, n][c], d = [a, n, n, i, o, o][c], l = [o, o, a, n, n, i][c];
  return { r: u * 255, g: d * 255, b: l * 255 };
}
function _d(e, t, n, r) {
  var s = [
    Jn(Math.round(e).toString(16)),
    Jn(Math.round(t).toString(16)),
    Jn(Math.round(n).toString(16))
  ];
  return r && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) : s.join("");
}
function CC(e, t, n, r, s) {
  var o = [
    Jn(Math.round(e).toString(16)),
    Jn(Math.round(t).toString(16)),
    Jn(Math.round(n).toString(16)),
    Jn(xC(r))
  ];
  return s && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function xC(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function bd(e) {
  return $t(e) / 255;
}
function $t(e) {
  return parseInt(e, 16);
}
function SC(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Rc = {
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
function EC(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, s = null, o = null, i = !1, a = !1;
  return typeof e == "string" && (e = MC(e)), typeof e == "object" && (gn(e.r) && gn(e.g) && gn(e.b) ? (t = yC(e.r, e.g, e.b), i = !0, a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : gn(e.h) && gn(e.s) && gn(e.v) ? (r = To(e.s), s = To(e.v), t = kC(e.h, r, s), i = !0, a = "hsv") : gn(e.h) && gn(e.s) && gn(e.l) && (r = To(e.s), o = To(e.l), t = wC(e.h, r, o), i = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Qh(n), {
    ok: i,
    format: e.format || a,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var AC = "[-\\+]?\\d+%?", $C = "[-\\+]?\\d*\\.\\d+%?", zn = "(?:".concat($C, ")|(?:").concat(AC, ")"), Xs = "[\\s|\\(]+(".concat(zn, ")[,|\\s]+(").concat(zn, ")[,|\\s]+(").concat(zn, ")\\s*\\)?"), Ys = "[\\s|\\(]+(".concat(zn, ")[,|\\s]+(").concat(zn, ")[,|\\s]+(").concat(zn, ")[,|\\s]+(").concat(zn, ")\\s*\\)?"), Gt = {
  CSS_UNIT: new RegExp(zn),
  rgb: new RegExp("rgb" + Xs),
  rgba: new RegExp("rgba" + Ys),
  hsl: new RegExp("hsl" + Xs),
  hsla: new RegExp("hsla" + Ys),
  hsv: new RegExp("hsv" + Xs),
  hsva: new RegExp("hsva" + Ys),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function MC(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Rc[e])
    e = Rc[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Gt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Gt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Gt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Gt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Gt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Gt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Gt.hex8.exec(e), n ? {
    r: $t(n[1]),
    g: $t(n[2]),
    b: $t(n[3]),
    a: bd(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Gt.hex6.exec(e), n ? {
    r: $t(n[1]),
    g: $t(n[2]),
    b: $t(n[3]),
    format: t ? "name" : "hex"
  } : (n = Gt.hex4.exec(e), n ? {
    r: $t(n[1] + n[1]),
    g: $t(n[2] + n[2]),
    b: $t(n[3] + n[3]),
    a: bd(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Gt.hex3.exec(e), n ? {
    r: $t(n[1] + n[1]),
    g: $t(n[2] + n[2]),
    b: $t(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function gn(e) {
  return !!Gt.CSS_UNIT.exec(String(e));
}
var TC = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = SC(t)), this.originalInput = t;
      var s = EC(t);
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
      return this.a = Qh(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = vd(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = vd(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), s = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(s, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = md(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = md(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), s = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(s, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(s, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), _d(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), CC(this.r, this.g, this.b, this.a, t);
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
        return "".concat(Math.round(rt(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(rt(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + _d(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Rc); n < r.length; n++) {
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
      return n.l += t / 100, n.l = Mo(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = Mo(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = Mo(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = Mo(n.s), new e(n);
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
function In(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function IC(e) {
  const t = Cs(), n = Ee("button");
  return T(() => {
    let r = {};
    const s = e.color;
    if (s) {
      const o = new TC(s), i = e.dark ? o.tint(20).toString() : In(o, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? In(o, 90) : o.tint(90).toString(),
          "text-color": s,
          "border-color": e.dark ? In(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": s,
          "hover-border-color": s,
          "active-bg-color": i,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": i
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? In(o, 90) : o.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? In(o, 50) : o.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? In(o, 80) : o.tint(80).toString());
      else {
        const a = e.dark ? In(o, 30) : o.tint(30).toString(), c = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": s,
          "text-color": c,
          "border-color": s,
          "hover-bg-color": a,
          "hover-text-color": c,
          "hover-border-color": a,
          "active-bg-color": i,
          "active-border-color": i
        }), t.value) {
          const u = e.dark ? In(o, 50) : o.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = u, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return r;
  });
}
const LC = H({
  name: "ElButton"
}), OC = /* @__PURE__ */ H({
  ...LC,
  props: Oc,
  emits: vC,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = IC(r), o = Ee("button"), { _ref: i, _size: a, _type: c, _disabled: u, _props: d, shouldAddSpace: l, handleClick: m } = hC(r, n);
    return t({
      ref: i,
      size: a,
      type: c,
      disabled: u,
      shouldAddSpace: l
    }), (f, v) => (y(), X(lt(f.tag), je({
      ref_key: "_ref",
      ref: i
    }, _(d), {
      class: [
        _(o).b(),
        _(o).m(_(c)),
        _(o).m(_(a)),
        _(o).is("disabled", _(u)),
        _(o).is("loading", f.loading),
        _(o).is("plain", f.plain),
        _(o).is("round", f.round),
        _(o).is("circle", f.circle),
        _(o).is("text", f.text),
        _(o).is("link", f.link),
        _(o).is("has-bg", f.bg)
      ],
      style: _(s),
      onClick: _(m)
    }), {
      default: Y(() => [
        f.loading ? (y(), x(Pe, { key: 0 }, [
          f.$slots.loading ? ne(f.$slots, "loading", { key: 0 }) : (y(), X(_(bt), {
            key: 1,
            class: j(_(o).is("loading"))
          }, {
            default: Y(() => [
              (y(), X(lt(f.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : f.icon || f.$slots.icon ? (y(), X(_(bt), { key: 1 }, {
          default: Y(() => [
            f.icon ? (y(), X(lt(f.icon), { key: 0 })) : ne(f.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : Q("v-if", !0),
        f.$slots.default ? (y(), x("span", {
          key: 2,
          class: j({ [_(o).em("text", "expand")]: _(l) })
        }, [
          ne(f.$slots, "default")
        ], 2)) : Q("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var RC = /* @__PURE__ */ ye(OC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const PC = {
  size: Oc.size,
  type: Oc.type
}, BC = H({
  name: "ElButtonGroup"
}), zC = /* @__PURE__ */ H({
  ...BC,
  props: PC,
  setup(e) {
    const t = e;
    kt(Jh, qn({
      size: Rt(t, "size"),
      type: Rt(t, "type")
    }));
    const n = Ee("button");
    return (r, s) => (y(), x("div", {
      class: j(`${_(n).b("group")}`)
    }, [
      ne(r.$slots, "default")
    ], 2));
  }
});
var e2 = /* @__PURE__ */ ye(zC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const yd = Ft(RC, {
  ButtonGroup: e2
});
bs(e2);
const On = /* @__PURE__ */ new Map();
let wd;
ut && (document.addEventListener("mousedown", (e) => wd = e), document.addEventListener("mouseup", (e) => {
  for (const t of On.values())
    for (const { documentHandler: n } of t)
      n(e, wd);
}));
function kd(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : to(t.arg) && n.push(t.arg), function(r, s) {
    const o = t.instance.popperRef, i = r.target, a = s == null ? void 0 : s.target, c = !t || !t.instance, u = !i || !a, d = e.contains(i) || e.contains(a), l = e === i, m = n.length && n.some((v) => v == null ? void 0 : v.contains(i)) || n.length && n.includes(a), f = o && (o.contains(i) || o.contains(a));
    c || u || d || l || m || f || t.value(r, s);
  };
}
const t2 = {
  beforeMount(e, t) {
    On.has(e) || On.set(e, []), On.get(e).push({
      documentHandler: kd(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    On.has(e) || On.set(e, []);
    const n = On.get(e), r = n.findIndex((o) => o.bindingFn === t.oldValue), s = {
      documentHandler: kd(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, s) : n.push(s);
  },
  unmounted(e) {
    On.delete(e);
  }
}, n2 = Me({
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
    values: fo,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), DC = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, NC = H({
  name: "ElTag"
}), qC = /* @__PURE__ */ H({
  ...NC,
  props: n2,
  emits: DC,
  setup(e, { emit: t }) {
    const n = e, r = go(), s = Ee("tag"), o = T(() => {
      const { type: c, hit: u, effect: d, closable: l, round: m } = n;
      return [
        s.b(),
        s.is("closable", l),
        s.m(c),
        s.m(r.value),
        s.m(d),
        s.is("hit", u),
        s.is("round", m)
      ];
    }), i = (c) => {
      t("close", c);
    }, a = (c) => {
      t("click", c);
    };
    return (c, u) => c.disableTransitions ? (y(), x("span", {
      key: 0,
      class: j(_(o)),
      style: qe({ backgroundColor: c.color }),
      onClick: a
    }, [
      p("span", {
        class: j(_(s).e("content"))
      }, [
        ne(c.$slots, "default")
      ], 2),
      c.closable ? (y(), X(_(bt), {
        key: 0,
        class: j(_(s).e("close")),
        onClick: Ke(i, ["stop"])
      }, {
        default: Y(() => [
          ue(_(Ic))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : Q("v-if", !0)
    ], 6)) : (y(), X(nr, {
      key: 1,
      name: `${_(s).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: Y(() => [
        p("span", {
          class: j(_(o)),
          style: qe({ backgroundColor: c.color }),
          onClick: a
        }, [
          p("span", {
            class: j(_(s).e("content"))
          }, [
            ne(c.$slots, "default")
          ], 2),
          c.closable ? (y(), X(_(bt), {
            key: 0,
            class: j(_(s).e("close")),
            onClick: Ke(i, ["stop"])
          }, {
            default: Y(() => [
              ue(_(Ic))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : Q("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var FC = /* @__PURE__ */ ye(qC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const jC = Ft(FC), HC = Me({
  color: {
    type: ge(Object),
    required: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  }
});
let Js = !1;
function io(e, t) {
  if (!ut)
    return;
  const n = function(o) {
    var i;
    (i = t.drag) == null || i.call(t, o);
  }, r = function(o) {
    var i;
    document.removeEventListener("mousemove", n), document.removeEventListener("mouseup", r), document.removeEventListener("touchmove", n), document.removeEventListener("touchend", r), document.onselectstart = null, document.ondragstart = null, Js = !1, (i = t.end) == null || i.call(t, o);
  }, s = function(o) {
    var i;
    Js || (o.preventDefault(), document.onselectstart = () => !1, document.ondragstart = () => !1, document.addEventListener("mousemove", n), document.addEventListener("mouseup", r), document.addEventListener("touchmove", n), document.addEventListener("touchend", r), Js = !0, (i = t.start) == null || i.call(t, o));
  };
  e.addEventListener("mousedown", s), e.addEventListener("touchstart", s);
}
const VC = (e) => {
  const t = ot(), n = _n(), r = _n();
  function s(i) {
    i.target !== n.value && o(i);
  }
  function o(i) {
    if (!r.value || !n.value)
      return;
    const c = t.vnode.el.getBoundingClientRect(), { clientX: u, clientY: d } = il(i);
    if (e.vertical) {
      let l = d - c.top;
      l = Math.max(n.value.offsetHeight / 2, l), l = Math.min(l, c.height - n.value.offsetHeight / 2), e.color.set("alpha", Math.round((l - n.value.offsetHeight / 2) / (c.height - n.value.offsetHeight) * 100));
    } else {
      let l = u - c.left;
      l = Math.max(n.value.offsetWidth / 2, l), l = Math.min(l, c.width - n.value.offsetWidth / 2), e.color.set("alpha", Math.round((l - n.value.offsetWidth / 2) / (c.width - n.value.offsetWidth) * 100));
    }
  }
  return {
    thumb: n,
    bar: r,
    handleDrag: o,
    handleClick: s
  };
}, UC = (e, {
  bar: t,
  thumb: n,
  handleDrag: r
}) => {
  const s = ot(), o = Ee("color-alpha-slider"), i = D(0), a = D(0), c = D();
  function u() {
    if (!n.value || e.vertical)
      return 0;
    const w = s.vnode.el, k = e.color.get("alpha");
    return w ? Math.round(k * (w.offsetWidth - n.value.offsetWidth / 2) / 100) : 0;
  }
  function d() {
    if (!n.value)
      return 0;
    const w = s.vnode.el;
    if (!e.vertical)
      return 0;
    const k = e.color.get("alpha");
    return w ? Math.round(k * (w.offsetHeight - n.value.offsetHeight / 2) / 100) : 0;
  }
  function l() {
    if (e.color && e.color.value) {
      const { r: w, g: k, b: C } = e.color.toRgb();
      return `linear-gradient(to right, rgba(${w}, ${k}, ${C}, 0) 0%, rgba(${w}, ${k}, ${C}, 1) 100%)`;
    }
    return "";
  }
  function m() {
    i.value = u(), a.value = d(), c.value = l();
  }
  Be(() => {
    if (!t.value || !n.value)
      return;
    const w = {
      drag: (k) => {
        r(k);
      },
      end: (k) => {
        r(k);
      }
    };
    io(t.value, w), io(n.value, w), m();
  }), ae(() => e.color.get("alpha"), () => m()), ae(() => e.color.value, () => m());
  const f = T(() => [o.b(), o.is("vertical", e.vertical)]), v = T(() => o.e("bar")), g = T(() => o.e("thumb")), b = T(() => ({ background: c.value })), h = T(() => ({
    left: wr(i.value),
    top: wr(a.value)
  }));
  return { rootKls: f, barKls: v, barStyle: b, thumbKls: g, thumbStyle: h, update: m };
}, ZC = "ElColorAlphaSlider", WC = H({
  name: ZC
}), GC = /* @__PURE__ */ H({
  ...WC,
  props: HC,
  setup(e, { expose: t }) {
    const n = e, { bar: r, thumb: s, handleDrag: o, handleClick: i } = VC(n), { rootKls: a, barKls: c, barStyle: u, thumbKls: d, thumbStyle: l, update: m } = UC(n, {
      bar: r,
      thumb: s,
      handleDrag: o
    });
    return t({
      update: m,
      bar: r,
      thumb: s
    }), (f, v) => (y(), x("div", {
      class: j(_(a))
    }, [
      p("div", {
        ref_key: "bar",
        ref: r,
        class: j(_(c)),
        style: qe(_(u)),
        onClick: v[0] || (v[0] = (...g) => _(i) && _(i)(...g))
      }, null, 6),
      p("div", {
        ref_key: "thumb",
        ref: s,
        class: j(_(d)),
        style: qe(_(l))
      }, null, 6)
    ], 2));
  }
});
var KC = /* @__PURE__ */ ye(GC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/alpha-slider.vue"]]);
const XC = H({
  name: "ElColorHueSlider",
  props: {
    color: {
      type: Object,
      required: !0
    },
    vertical: Boolean
  },
  setup(e) {
    const t = Ee("color-hue-slider"), n = ot(), r = D(), s = D(), o = D(0), i = D(0), a = T(() => e.color.get("hue"));
    ae(() => a.value, () => {
      m();
    });
    function c(f) {
      f.target !== r.value && u(f);
    }
    function u(f) {
      if (!s.value || !r.value)
        return;
      const g = n.vnode.el.getBoundingClientRect(), { clientX: b, clientY: h } = il(f);
      let w;
      if (e.vertical) {
        let k = h - g.top;
        k = Math.min(k, g.height - r.value.offsetHeight / 2), k = Math.max(r.value.offsetHeight / 2, k), w = Math.round((k - r.value.offsetHeight / 2) / (g.height - r.value.offsetHeight) * 360);
      } else {
        let k = b - g.left;
        k = Math.min(k, g.width - r.value.offsetWidth / 2), k = Math.max(r.value.offsetWidth / 2, k), w = Math.round((k - r.value.offsetWidth / 2) / (g.width - r.value.offsetWidth) * 360);
      }
      e.color.set("hue", w);
    }
    function d() {
      if (!r.value)
        return 0;
      const f = n.vnode.el;
      if (e.vertical)
        return 0;
      const v = e.color.get("hue");
      return f ? Math.round(v * (f.offsetWidth - r.value.offsetWidth / 2) / 360) : 0;
    }
    function l() {
      if (!r.value)
        return 0;
      const f = n.vnode.el;
      if (!e.vertical)
        return 0;
      const v = e.color.get("hue");
      return f ? Math.round(v * (f.offsetHeight - r.value.offsetHeight / 2) / 360) : 0;
    }
    function m() {
      o.value = d(), i.value = l();
    }
    return Be(() => {
      if (!s.value || !r.value)
        return;
      const f = {
        drag: (v) => {
          u(v);
        },
        end: (v) => {
          u(v);
        }
      };
      io(s.value, f), io(r.value, f), m();
    }), {
      bar: s,
      thumb: r,
      thumbLeft: o,
      thumbTop: i,
      hueValue: a,
      handleClick: c,
      update: m,
      ns: t
    };
  }
});
function YC(e, t, n, r, s, o) {
  return y(), x("div", {
    class: j([e.ns.b(), e.ns.is("vertical", e.vertical)])
  }, [
    p("div", {
      ref: "bar",
      class: j(e.ns.e("bar")),
      onClick: t[0] || (t[0] = (...i) => e.handleClick && e.handleClick(...i))
    }, null, 2),
    p("div", {
      ref: "thumb",
      class: j(e.ns.e("thumb")),
      style: qe({
        left: e.thumbLeft + "px",
        top: e.thumbTop + "px"
      })
    }, null, 6)
  ], 2);
}
var JC = /* @__PURE__ */ ye(XC, [["render", YC], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/hue-slider.vue"]]);
const QC = Me({
  modelValue: String,
  id: String,
  showAlpha: Boolean,
  colorFormat: String,
  disabled: Boolean,
  size: Cl,
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
    type: ge(Array)
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), e8 = {
  [_t]: (e) => Xt(e) || er(e),
  [fl]: (e) => Xt(e) || er(e),
  activeChange: (e) => Xt(e) || er(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent
}, r2 = Symbol("colorPickerContextKey"), Cd = function(e, t, n) {
  return [
    e,
    t * n / ((e = (2 - t) * n) < 1 ? e : 2 - e) || 0,
    e / 2
  ];
}, t8 = function(e) {
  return typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1;
}, n8 = function(e) {
  return typeof e == "string" && e.includes("%");
}, mr = function(e, t) {
  t8(e) && (e = "100%");
  const n = n8(e);
  return e = Math.min(t, Math.max(0, Number.parseFloat(`${e}`))), n && (e = Number.parseInt(`${e * t}`, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}, xd = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F"
}, No = (e) => {
  e = Math.min(Math.round(e), 255);
  const t = Math.floor(e / 16), n = e % 16;
  return `${xd[t] || t}${xd[n] || n}`;
}, Sd = function({ r: e, g: t, b: n }) {
  return Number.isNaN(+e) || Number.isNaN(+t) || Number.isNaN(+n) ? "" : `#${No(e)}${No(t)}${No(n)}`;
}, Qs = {
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}, Kn = function(e) {
  return e.length === 2 ? (Qs[e[0].toUpperCase()] || +e[0]) * 16 + (Qs[e[1].toUpperCase()] || +e[1]) : Qs[e[1].toUpperCase()] || +e[1];
}, r8 = function(e, t, n) {
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
}, Ed = (e, t, n) => {
  e = mr(e, 255), t = mr(t, 255), n = mr(n, 255);
  const r = Math.max(e, t, n), s = Math.min(e, t, n);
  let o;
  const i = r, a = r - s, c = r === 0 ? 0 : a / r;
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
  return { h: o * 360, s: c * 100, v: i * 100 };
}, Nr = function(e, t, n) {
  e = mr(e, 360) * 6, t = mr(t, 100), n = mr(n, 100);
  const r = Math.floor(e), s = e - r, o = n * (1 - t), i = n * (1 - s * t), a = n * (1 - (1 - s) * t), c = r % 6, u = [n, i, o, o, a, n][c], d = [a, n, n, i, o, o][c], l = [o, o, a, n, n, i][c];
  return {
    r: Math.round(u * 255),
    g: Math.round(d * 255),
    b: Math.round(l * 255)
  };
};
class Wr {
  constructor(t = {}) {
    this._hue = 0, this._saturation = 100, this._value = 100, this._alpha = 100, this.enableAlpha = !1, this.format = "hex", this.value = "";
    for (const n in t)
      Ko(t, n) && (this[n] = t[n]);
    t.value ? this.fromString(t.value) : this.doOnChange();
  }
  set(t, n) {
    if (arguments.length === 1 && typeof t == "object") {
      for (const r in t)
        Ko(t, r) && this.set(r, t[r]);
      return;
    }
    this[`_${t}`] = n, this.doOnChange();
  }
  get(t) {
    return t === "alpha" ? Math.floor(this[`_${t}`]) : this[`_${t}`];
  }
  toRgb() {
    return Nr(this._hue, this._saturation, this._value);
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
        const { h: s, s: o, v: i } = r8(r[0], r[1], r[2]);
        n(s, o, i);
      }
    } else if (t.includes("hsv")) {
      const r = t.replace(/hsva|hsv|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3 && n(r[0], r[1], r[2]);
    } else if (t.includes("rgb")) {
      const r = t.replace(/rgba|rgb|\(|\)/gm, "").split(/\s|,/g).filter((s) => s !== "").map((s, o) => o > 2 ? Number.parseFloat(s) : Number.parseInt(s, 10));
      if (r.length === 4 ? this._alpha = Number.parseFloat(r[3]) * 100 : r.length === 3 && (this._alpha = 100), r.length >= 3) {
        const { h: s, s: o, v: i } = Ed(r[0], r[1], r[2]);
        n(s, o, i);
      }
    } else if (t.includes("#")) {
      const r = t.replace("#", "").trim();
      if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{8}$/.test(r))
        return;
      let s, o, i;
      r.length === 3 ? (s = Kn(r[0] + r[0]), o = Kn(r[1] + r[1]), i = Kn(r[2] + r[2])) : (r.length === 6 || r.length === 8) && (s = Kn(r.slice(0, 2)), o = Kn(r.slice(2, 4)), i = Kn(r.slice(4, 6))), r.length === 8 ? this._alpha = Kn(r.slice(6)) / 255 * 100 : (r.length === 3 || r.length === 6) && (this._alpha = 100);
      const { h: a, s: c, v: u } = Ed(s, o, i);
      n(a, c, u);
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
          const i = Cd(t, n / 100, r / 100);
          this.value = `hsla(${t}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hsv": {
          this.value = `hsva(${t}, ${Math.round(n)}%, ${Math.round(r)}%, ${this.get("alpha") / 100})`;
          break;
        }
        case "hex": {
          this.value = `${Sd(Nr(t, n, r))}${No(s * 255 / 100)}`;
          break;
        }
        default: {
          const { r: i, g: a, b: c } = Nr(t, n, r);
          this.value = `rgba(${i}, ${a}, ${c}, ${this.get("alpha") / 100})`;
        }
      }
    else
      switch (o) {
        case "hsl": {
          const i = Cd(t, n / 100, r / 100);
          this.value = `hsl(${t}, ${Math.round(i[1] * 100)}%, ${Math.round(i[2] * 100)}%)`;
          break;
        }
        case "hsv": {
          this.value = `hsv(${t}, ${Math.round(n)}%, ${Math.round(r)}%)`;
          break;
        }
        case "rgb": {
          const { r: i, g: a, b: c } = Nr(t, n, r);
          this.value = `rgb(${i}, ${a}, ${c})`;
          break;
        }
        default:
          this.value = Sd(Nr(t, n, r));
      }
  }
}
const o8 = H({
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
    const t = Ee("color-predefine"), { currentColor: n } = $e(r2), r = D(o(e.colors, e.color));
    ae(() => n.value, (i) => {
      const a = new Wr();
      a.fromString(i), r.value.forEach((c) => {
        c.selected = a.compare(c);
      });
    }), el(() => {
      r.value = o(e.colors, e.color);
    });
    function s(i) {
      e.color.fromString(e.colors[i]);
    }
    function o(i, a) {
      return i.map((c) => {
        const u = new Wr();
        return u.enableAlpha = !0, u.format = "rgba", u.fromString(c), u.selected = u.value === a.value, u;
      });
    }
    return {
      rgbaColors: r,
      handleSelect: s,
      ns: t
    };
  }
}), s8 = ["onClick"];
function i8(e, t, n, r, s, o) {
  return y(), x("div", {
    class: j(e.ns.b())
  }, [
    p("div", {
      class: j(e.ns.e("colors"))
    }, [
      (y(!0), x(Pe, null, Je(e.rgbaColors, (i, a) => (y(), x("div", {
        key: e.colors[a],
        class: j([
          e.ns.e("color-selector"),
          e.ns.is("alpha", i._alpha < 100),
          { selected: i.selected }
        ]),
        onClick: (c) => e.handleSelect(a)
      }, [
        p("div", {
          style: qe({ backgroundColor: i.value })
        }, null, 4)
      ], 10, s8))), 128))
    ], 2)
  ], 2);
}
var a8 = /* @__PURE__ */ ye(o8, [["render", i8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/predefine.vue"]]);
const c8 = H({
  name: "ElSlPanel",
  props: {
    color: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = Ee("color-svpanel"), n = ot(), r = D(0), s = D(0), o = D("hsl(0, 100%, 50%)"), i = T(() => {
      const u = e.color.get("hue"), d = e.color.get("value");
      return { hue: u, value: d };
    });
    function a() {
      const u = e.color.get("saturation"), d = e.color.get("value"), l = n.vnode.el, { clientWidth: m, clientHeight: f } = l;
      s.value = u * m / 100, r.value = (100 - d) * f / 100, o.value = `hsl(${e.color.get("hue")}, 100%, 50%)`;
    }
    function c(u) {
      const l = n.vnode.el.getBoundingClientRect(), { clientX: m, clientY: f } = il(u);
      let v = m - l.left, g = f - l.top;
      v = Math.max(0, v), v = Math.min(v, l.width), g = Math.max(0, g), g = Math.min(g, l.height), s.value = v, r.value = g, e.color.set({
        saturation: v / l.width * 100,
        value: 100 - g / l.height * 100
      });
    }
    return ae(() => i.value, () => {
      a();
    }), Be(() => {
      io(n.vnode.el, {
        drag: (u) => {
          c(u);
        },
        end: (u) => {
          c(u);
        }
      }), a();
    }), {
      cursorTop: r,
      cursorLeft: s,
      background: o,
      colorValue: i,
      handleDrag: c,
      update: a,
      ns: t
    };
  }
}), l8 = /* @__PURE__ */ p("div", null, null, -1), u8 = [
  l8
];
function d8(e, t, n, r, s, o) {
  return y(), x("div", {
    class: j(e.ns.b()),
    style: qe({
      backgroundColor: e.background
    })
  }, [
    p("div", {
      class: j(e.ns.e("white"))
    }, null, 2),
    p("div", {
      class: j(e.ns.e("black"))
    }, null, 2),
    p("div", {
      class: j(e.ns.e("cursor")),
      style: qe({
        top: e.cursorTop + "px",
        left: e.cursorLeft + "px"
      })
    }, u8, 6)
  ], 6);
}
var f8 = /* @__PURE__ */ ye(c8, [["render", d8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/components/sv-panel.vue"]]);
const p8 = ["onKeydown"], h8 = ["id", "aria-label", "aria-labelledby", "aria-description", "aria-disabled", "tabindex"], g8 = H({
  name: "ElColorPicker"
}), m8 = /* @__PURE__ */ H({
  ...g8,
  props: QC,
  emits: e8,
  setup(e, { expose: t, emit: n }) {
    const r = e, { t: s } = en(), o = Ee("color"), { formItem: i } = xs(), a = go(), c = Cs(), { inputId: u, isLabeledByFormItem: d } = Hh(r, {
      formItemContext: i
    }), l = D(), m = D(), f = D(), v = D(), g = D(), b = D(), {
      isFocused: h,
      handleFocus: w,
      handleBlur: k
    } = jh(g, {
      beforeBlur(oe) {
        var _e;
        return (_e = v.value) == null ? void 0 : _e.isFocusInsideContent(oe);
      },
      afterBlur() {
        z(!1), W();
      }
    }), C = (oe) => {
      if (c.value)
        return nn();
      w(oe);
    };
    let A = !0;
    const E = qn(new Wr({
      enableAlpha: r.showAlpha,
      format: r.colorFormat || "",
      value: r.modelValue
    })), $ = D(!1), M = D(!1), O = D(""), R = T(() => !r.modelValue && !M.value ? "transparent" : U(E, r.showAlpha)), B = T(() => !r.modelValue && !M.value ? "" : E.value), V = T(() => d.value ? void 0 : r.label || s("el.colorpicker.defaultLabel")), re = T(() => d.value ? i == null ? void 0 : i.labelId : void 0), P = T(() => [
      o.b("picker"),
      o.is("disabled", c.value),
      o.bm("picker", a.value),
      o.is("focused", h.value)
    ]);
    function U(oe, _e) {
      if (!(oe instanceof Wr))
        throw new TypeError("color should be instance of _color Class");
      const { r: He, g: et, b: mt } = oe.toRgb();
      return _e ? `rgba(${He}, ${et}, ${mt}, ${oe.get("alpha") / 100})` : `rgb(${He}, ${et}, ${mt})`;
    }
    function z(oe) {
      $.value = oe;
    }
    const N = Mc(z, 100, { leading: !0 });
    function F() {
      c.value || z(!0);
    }
    function Z() {
      N(!1), W();
    }
    function W() {
      xe(() => {
        r.modelValue ? E.fromString(r.modelValue) : (E.value = "", xe(() => {
          M.value = !1;
        }));
      });
    }
    function pe() {
      c.value || N(!$.value);
    }
    function le() {
      E.fromString(O.value);
    }
    function Ae() {
      const oe = E.value;
      n(_t, oe), n("change", oe), r.validateEvent && (i == null || i.validate("change").catch((_e) => void 0)), N(!1), xe(() => {
        const _e = new Wr({
          enableAlpha: r.showAlpha,
          format: r.colorFormat || "",
          value: r.modelValue
        });
        E.compare(_e) || W();
      });
    }
    function Oe() {
      N(!1), n(_t, null), n("change", null), r.modelValue !== null && r.validateEvent && (i == null || i.validate("change").catch((oe) => void 0)), W();
    }
    function ze(oe) {
      if ($.value && (Z(), h.value)) {
        const _e = new FocusEvent("focus", oe);
        k(_e);
      }
    }
    function Qe(oe) {
      oe.preventDefault(), oe.stopPropagation(), z(!1), W();
    }
    function ft(oe) {
      switch (oe.code) {
        case yn.enter:
        case yn.space:
          oe.preventDefault(), oe.stopPropagation(), F(), b.value.focus();
          break;
        case yn.esc:
          Qe(oe);
          break;
      }
    }
    function Ve() {
      g.value.focus();
    }
    function nn() {
      g.value.blur();
    }
    return Be(() => {
      r.modelValue && (O.value = B.value);
    }), ae(() => r.modelValue, (oe) => {
      oe ? oe && oe !== E.value && (A = !1, E.fromString(oe)) : M.value = !1;
    }), ae(() => B.value, (oe) => {
      O.value = oe, A && n("activeChange", oe), A = !0;
    }), ae(() => E.value, () => {
      !r.modelValue && !M.value && (M.value = !0);
    }), ae(() => $.value, () => {
      xe(() => {
        var oe, _e, He;
        (oe = l.value) == null || oe.update(), (_e = m.value) == null || _e.update(), (He = f.value) == null || He.update();
      });
    }), kt(r2, {
      currentColor: B
    }), t({
      color: E,
      show: F,
      hide: Z,
      focus: Ve,
      blur: nn
    }), (oe, _e) => (y(), X(_(so), {
      ref_key: "popper",
      ref: v,
      visible: $.value,
      "show-arrow": !1,
      "fallback-placements": ["bottom", "top", "right", "left"],
      offset: 0,
      "gpu-acceleration": !1,
      "popper-class": [_(o).be("picker", "panel"), _(o).b("dropdown"), oe.popperClass],
      "stop-popper-mouse-event": !1,
      effect: "light",
      trigger: "click",
      transition: `${_(o).namespace.value}-zoom-in-top`,
      persistent: "",
      onHide: _e[2] || (_e[2] = (He) => z(!1))
    }, {
      content: Y(() => [
        Ye((y(), x("div", {
          onKeydown: at(Qe, ["esc"])
        }, [
          p("div", {
            class: j(_(o).be("dropdown", "main-wrapper"))
          }, [
            ue(JC, {
              ref_key: "hue",
              ref: l,
              class: "hue-slider",
              color: _(E),
              vertical: ""
            }, null, 8, ["color"]),
            ue(f8, {
              ref_key: "sv",
              ref: m,
              color: _(E)
            }, null, 8, ["color"])
          ], 2),
          oe.showAlpha ? (y(), X(KC, {
            key: 0,
            ref_key: "alpha",
            ref: f,
            color: _(E)
          }, null, 8, ["color"])) : Q("v-if", !0),
          oe.predefine ? (y(), X(a8, {
            key: 1,
            ref: "predefine",
            color: _(E),
            colors: oe.predefine
          }, null, 8, ["color", "colors"])) : Q("v-if", !0),
          p("div", {
            class: j(_(o).be("dropdown", "btns"))
          }, [
            p("span", {
              class: j(_(o).be("dropdown", "value"))
            }, [
              ue(_(Ss), {
                ref_key: "inputRef",
                ref: b,
                modelValue: O.value,
                "onUpdate:modelValue": _e[0] || (_e[0] = (He) => O.value = He),
                "validate-event": !1,
                size: "small",
                onKeyup: at(le, ["enter"]),
                onBlur: le
              }, null, 8, ["modelValue", "onKeyup"])
            ], 2),
            ue(_(yd), {
              class: j(_(o).be("dropdown", "link-btn")),
              text: "",
              size: "small",
              onClick: Oe
            }, {
              default: Y(() => [
                _r(ve(_(s)("el.colorpicker.clear")), 1)
              ]),
              _: 1
            }, 8, ["class"]),
            ue(_(yd), {
              plain: "",
              size: "small",
              class: j(_(o).be("dropdown", "btn")),
              onClick: Ae
            }, {
              default: Y(() => [
                _r(ve(_(s)("el.colorpicker.confirm")), 1)
              ]),
              _: 1
            }, 8, ["class"])
          ], 2)
        ], 40, p8)), [
          [_(t2), ze]
        ])
      ]),
      default: Y(() => [
        p("div", {
          id: _(u),
          ref_key: "triggerRef",
          ref: g,
          class: j(_(P)),
          role: "button",
          "aria-label": _(V),
          "aria-labelledby": _(re),
          "aria-description": _(s)("el.colorpicker.description", { color: oe.modelValue || "" }),
          "aria-disabled": _(c),
          tabindex: _(c) ? -1 : oe.tabindex,
          onKeydown: ft,
          onFocus: C,
          onBlur: _e[1] || (_e[1] = (...He) => _(k) && _(k)(...He))
        }, [
          _(c) ? (y(), x("div", {
            key: 0,
            class: j(_(o).be("picker", "mask"))
          }, null, 2)) : Q("v-if", !0),
          p("div", {
            class: j(_(o).be("picker", "trigger")),
            onClick: pe
          }, [
            p("span", {
              class: j([_(o).be("picker", "color"), _(o).is("alpha", oe.showAlpha)])
            }, [
              p("span", {
                class: j(_(o).be("picker", "color-inner")),
                style: qe({
                  backgroundColor: _(R)
                })
              }, [
                Ye(ue(_(bt), {
                  class: j([_(o).be("picker", "icon"), _(o).is("icon-arrow-down")])
                }, {
                  default: Y(() => [
                    ue(_(wh))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [Jt, oe.modelValue || M.value]
                ]),
                Ye(ue(_(bt), {
                  class: j([_(o).be("picker", "empty"), _(o).is("icon-close")])
                }, {
                  default: Y(() => [
                    ue(_(Ic))
                  ]),
                  _: 1
                }, 8, ["class"]), [
                  [Jt, !oe.modelValue && !M.value]
                ])
              ], 6)
            ], 2)
          ], 2)
        ], 42, h8)
      ]),
      _: 1
    }, 8, ["visible", "popper-class", "transition"]));
  }
});
var v8 = /* @__PURE__ */ ye(m8, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]]);
const _8 = Ft(v8), b8 = /* @__PURE__ */ H({
  inheritAttrs: !1
});
function y8(e, t, n, r, s, o) {
  return ne(e.$slots, "default");
}
var w8 = /* @__PURE__ */ ye(b8, [["render", y8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const k8 = /* @__PURE__ */ H({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function C8(e, t, n, r, s, o) {
  return ne(e.$slots, "default");
}
var x8 = /* @__PURE__ */ ye(k8, [["render", C8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const S8 = "data-el-collection-item", E8 = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, r = Symbol(t), s = Symbol(n), o = {
    ...w8,
    name: t,
    setup() {
      const a = D(null), c = /* @__PURE__ */ new Map();
      kt(r, {
        itemMap: c,
        getItems: () => {
          const d = _(a);
          if (!d)
            return [];
          const l = Array.from(d.querySelectorAll(`[${S8}]`));
          return [...c.values()].sort((f, v) => l.indexOf(f.ref) - l.indexOf(v.ref));
        },
        collectionRef: a
      });
    }
  }, i = {
    ...x8,
    name: n,
    setup(a, { attrs: c }) {
      const u = D(null), d = $e(r, void 0);
      kt(s, {
        collectionItemRef: u
      }), Be(() => {
        const l = _(u);
        l && d.itemMap.set(l, {
          ref: l,
          ...c
        });
      }), Nt(() => {
        const l = _(u);
        d.itemMap.delete(l);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: s,
    ElCollection: o,
    ElCollectionItem: i
  };
}, ei = Me({
  trigger: oo.trigger,
  effect: {
    ...Mt.effect,
    default: "light"
  },
  type: {
    type: ge(String)
  },
  placement: {
    type: ge(String),
    default: "bottom"
  },
  popperOptions: {
    type: ge(Object),
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
    type: ge([Number, String]),
    default: 0
  },
  maxHeight: {
    type: ge([Number, String]),
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
    type: ge(Object)
  },
  teleported: Mt.teleported
});
Me({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: Qt
  }
});
Me({
  onKeydown: { type: ge(Function) }
});
E8("Dropdown");
const o2 = Symbol("elPaginationKey"), A8 = Me({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: Qt
  }
}), $8 = {
  click: (e) => e instanceof MouseEvent
}, M8 = ["disabled", "aria-label", "aria-disabled"], T8 = { key: 0 }, I8 = H({
  name: "ElPaginationPrev"
}), L8 = /* @__PURE__ */ H({
  ...I8,
  props: A8,
  emits: $8,
  setup(e) {
    const t = e, { t: n } = en(), r = T(() => t.disabled || t.currentPage <= 1);
    return (s, o) => (y(), x("button", {
      type: "button",
      class: "btn-prev",
      disabled: _(r),
      "aria-label": s.prevText || _(n)("el.pagination.prev"),
      "aria-disabled": _(r),
      onClick: o[0] || (o[0] = (i) => s.$emit("click", i))
    }, [
      s.prevText ? (y(), x("span", T8, ve(s.prevText), 1)) : (y(), X(_(bt), { key: 1 }, {
        default: Y(() => [
          (y(), X(lt(s.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, M8));
  }
});
var O8 = /* @__PURE__ */ ye(L8, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const R8 = Me({
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
    type: Qt
  }
}), P8 = ["disabled", "aria-label", "aria-disabled"], B8 = { key: 0 }, z8 = H({
  name: "ElPaginationNext"
}), D8 = /* @__PURE__ */ H({
  ...z8,
  props: R8,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = en(), r = T(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (s, o) => (y(), x("button", {
      type: "button",
      class: "btn-next",
      disabled: _(r),
      "aria-label": s.nextText || _(n)("el.pagination.next"),
      "aria-disabled": _(r),
      onClick: o[0] || (o[0] = (i) => s.$emit("click", i))
    }, [
      s.nextText ? (y(), x("span", B8, ve(s.nextText), 1)) : (y(), X(_(bt), { key: 1 }, {
        default: Y(() => [
          (y(), X(lt(s.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, P8));
  }
});
var N8 = /* @__PURE__ */ ye(D8, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const s2 = Symbol("ElSelectGroup"), As = Symbol("ElSelect");
function q8(e, t) {
  const n = $e(As), r = $e(s2, { disabled: !1 }), s = T(() => Yt(e.value)), o = T(() => n.props.multiple ? l(n.props.modelValue, e.value) : m(e.value, n.props.modelValue)), i = T(() => {
    if (n.props.multiple) {
      const g = n.props.modelValue || [];
      return !o.value && g.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), a = T(() => e.label || (s.value ? "" : e.value)), c = T(() => e.value || e.label || ""), u = T(() => e.disabled || t.groupDisabled || i.value), d = ot(), l = (g = [], b) => {
    if (s.value) {
      const h = n.props.valueKey;
      return g && g.some((w) => Wo(Tt(w, h)) === Tt(b, h));
    } else
      return g && g.includes(b);
  }, m = (g, b) => {
    if (s.value) {
      const { valueKey: h } = n.props;
      return Tt(g, h) === Tt(b, h);
    } else
      return g === b;
  }, f = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(d.proxy));
  };
  ae(() => a.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), ae(() => e.value, (g, b) => {
    const { remote: h, valueKey: w } = n.props;
    if (Object.is(g, b) || (n.onOptionDestroy(b, d.proxy), n.onOptionCreate(d.proxy)), !e.created && !h) {
      if (w && Yt(g) && Yt(b) && g[w] === b[w])
        return;
      n.setSelected();
    }
  }), ae(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: v } = Wo(n);
  return ae(v, (g) => {
    const { query: b } = _(g), h = new RegExp(S4(b), "i");
    t.visible = h.test(a.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: a,
    currentValue: c,
    itemSelected: o,
    isDisabled: u,
    hoverItem: f
  };
}
const F8 = H({
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
    const t = Ee("select"), n = ks(), r = T(() => [
      t.be("dropdown", "item"),
      t.is("disabled", _(a)),
      {
        selected: _(i),
        hover: _(l)
      }
    ]), s = qn({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: o, itemSelected: i, isDisabled: a, select: c, hoverItem: u } = q8(e, s), { visible: d, hover: l } = ls(s), m = ot().proxy;
    c.onOptionCreate(m), Nt(() => {
      const v = m.value, { selected: g } = c, h = (c.props.multiple ? g : [g]).some((w) => w.value === m.value);
      xe(() => {
        c.cachedOptions.get(v) === m && !h && c.cachedOptions.delete(v);
      }), c.onOptionDestroy(v, m);
    });
    function f() {
      e.disabled !== !0 && s.groupDisabled !== !0 && c.handleOptionSelect(m);
    }
    return {
      ns: t,
      id: n,
      containerKls: r,
      currentLabel: o,
      itemSelected: i,
      isDisabled: a,
      select: c,
      hoverItem: u,
      visible: d,
      hover: l,
      selectOptionClick: f,
      states: s
    };
  }
}), j8 = ["id", "aria-disabled", "aria-selected"];
function H8(e, t, n, r, s, o) {
  return Ye((y(), x("li", {
    id: e.id,
    class: j(e.containerKls),
    role: "option",
    "aria-disabled": e.isDisabled || void 0,
    "aria-selected": e.itemSelected,
    onMouseenter: t[0] || (t[0] = (...i) => e.hoverItem && e.hoverItem(...i)),
    onClick: t[1] || (t[1] = Ke((...i) => e.selectOptionClick && e.selectOptionClick(...i), ["stop"]))
  }, [
    ne(e.$slots, "default", {}, () => [
      p("span", null, ve(e.currentLabel), 1)
    ])
  ], 42, j8)), [
    [Jt, e.visible]
  ]);
}
var Ml = /* @__PURE__ */ ye(F8, [["render", H8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const V8 = H({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = $e(As), t = Ee("select"), n = T(() => e.props.popperClass), r = T(() => e.props.multiple), s = T(() => e.props.fitInputWidth), o = D("");
    function i() {
      var a;
      o.value = `${(a = e.selectWrapper) == null ? void 0 : a.offsetWidth}px`;
    }
    return Be(() => {
      i(), fs(e.selectWrapper, i);
    }), {
      ns: t,
      minWidth: o,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: s
    };
  }
});
function U8(e, t, n, r, s, o) {
  return y(), x("div", {
    class: j([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: qe({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    e.$slots.header ? (y(), x("div", {
      key: 0,
      class: j(e.ns.be("dropdown", "header"))
    }, [
      ne(e.$slots, "header")
    ], 2)) : Q("v-if", !0),
    ne(e.$slots, "default"),
    e.$slots.footer ? (y(), x("div", {
      key: 1,
      class: j(e.ns.be("dropdown", "footer"))
    }, [
      ne(e.$slots, "footer")
    ], 2)) : Q("v-if", !0)
  ], 6);
}
var Z8 = /* @__PURE__ */ ye(V8, [["render", U8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function W8(e) {
  const { t } = en();
  return qn({
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
const G8 = (e, t, n) => {
  const { t: r } = en(), s = Ee("select");
  Eh({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, T(() => e.suffixTransition === !1));
  const o = D(null), i = D(null), a = D(null), c = D(null), u = D(null), d = D(null), l = D(null), m = D(null), f = D(), v = _n({ query: "" }), g = _n(""), b = D([]);
  let h = 0;
  const { form: w, formItem: k } = xs(), C = T(() => !e.filterable || e.multiple || !t.visible), A = T(() => e.disabled || (w == null ? void 0 : w.disabled)), E = T(() => {
    const L = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !A.value && t.inputHovering && L;
  }), $ = T(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), M = T(() => s.is("reverse", $.value && t.visible && e.suffixTransition)), O = T(() => (w == null ? void 0 : w.statusIcon) && (k == null ? void 0 : k.validateState) && xh[k == null ? void 0 : k.validateState]), R = T(() => e.remote ? 300 : 0), B = T(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), V = T(() => {
    const L = Array.from(t.options.values()), S = [];
    return b.value.forEach((I) => {
      const q = L.findIndex((se) => se.currentLabel === I);
      q > -1 && S.push(L[q]);
    }), S.length >= L.length ? S : L;
  }), re = T(() => Array.from(t.cachedOptions.values())), P = T(() => {
    const L = V.value.filter((S) => !S.created).some((S) => S.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !L;
  }), U = go(), z = T(() => ["small"].includes(U.value) ? "small" : "default"), N = T({
    get() {
      return t.visible && B.value !== !1;
    },
    set(L) {
      t.visible = L;
    }
  });
  ae([() => A.value, () => U.value, () => w == null ? void 0 : w.size], () => {
    xe(() => {
      F();
    });
  }), ae(() => e.placeholder, (L) => {
    t.cachedPlaceHolder = t.currentPlaceholder = L, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), ae(() => e.modelValue, (L, S) => {
    e.multiple && (F(), L && L.length > 0 || i.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", Z(t.query))), le(), e.filterable && !e.multiple && (t.inputLength = 20), !Tc(L, S) && e.validateEvent && (k == null || k.validate("change").catch((I) => void 0));
  }, {
    flush: "post",
    deep: !0
  }), ae(() => t.visible, (L) => {
    var S, I, q, se, be;
    L ? ((I = (S = c.value) == null ? void 0 : S.updatePopper) == null || I.call(S), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (se = (q = a.value) == null ? void 0 : q.focus) == null || se.call(q), e.multiple ? (be = i.value) == null || be.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), Z(t.query), !e.multiple && !e.remote && (v.value.query = "", Pr(v), Pr(g)))) : (e.filterable && (Ot(e.filterMethod) && e.filterMethod(""), Ot(e.remoteMethod) && e.remoteMethod("")), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, Oe(), xe(() => {
      i.value && i.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", L);
  }), ae(() => t.options.entries(), () => {
    var L, S, I;
    if (!ut)
      return;
    (S = (L = c.value) == null ? void 0 : L.updatePopper) == null || S.call(L), e.multiple && F();
    const q = ((I = l.value) == null ? void 0 : I.querySelectorAll("input")) || [];
    (!e.filterable && !e.defaultFirstOption && !yh(e.modelValue) || !Array.from(q).includes(document.activeElement)) && le(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && pe();
  }, {
    flush: "post"
  }), ae(() => t.hoverIndex, (L) => {
    Ze(L) && L > -1 ? f.value = V.value[L] || {} : f.value = {}, V.value.forEach((S) => {
      S.hover = f.value === S;
    });
  });
  const F = () => {
    xe(() => {
      var L, S;
      if (!o.value)
        return;
      const I = o.value.$el.querySelector("input");
      h = h || (I.clientHeight > 0 ? I.clientHeight + 2 : 0);
      const q = d.value, se = getComputedStyle(I).getPropertyValue(s.cssVarName("input-height")), be = Number.parseFloat(se) || Q4(U.value || (w == null ? void 0 : w.size)), ke = U.value || be === h || h <= 0 ? be : h;
      !(I.offsetParent === null) && (I.style.height = `${(t.selected.length === 0 ? ke : Math.max(q ? q.clientHeight + (q.clientHeight > ke ? 6 : 0) : 0, ke)) - 2}px`), t.visible && B.value !== !1 && ((S = (L = c.value) == null ? void 0 : L.updatePopper) == null || S.call(L));
    });
  }, Z = async (L) => {
    if (!(t.previousQuery === L || t.isOnComposition)) {
      if (t.previousQuery === null && (Ot(e.filterMethod) || Ot(e.remoteMethod))) {
        t.previousQuery = L;
        return;
      }
      t.previousQuery = L, xe(() => {
        var S, I;
        t.visible && ((I = (S = c.value) == null ? void 0 : S.updatePopper) == null || I.call(S));
      }), t.hoverIndex = -1, e.multiple && e.filterable && xe(() => {
        if (!A.value) {
          const S = i.value.value.length * 15 + 20;
          t.inputLength = e.collapseTags ? Math.min(50, S) : S, W();
        }
        F();
      }), e.remote && Ot(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(L)) : Ot(e.filterMethod) ? (e.filterMethod(L), Pr(g)) : (t.filteredOptionsCount = t.optionsCount, v.value.query = L, Pr(v), Pr(g)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await xe(), pe());
    }
  }, W = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = i.value.value ? "" : t.cachedPlaceHolder);
  }, pe = () => {
    const L = V.value.filter((q) => q.visible && !q.disabled && !q.states.groupDisabled), S = L.find((q) => q.created), I = L[0];
    t.hoverIndex = Ct(V.value, S || I);
  }, le = () => {
    var L;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const I = Ae(e.modelValue);
      (L = I.props) != null && L.created ? (t.createdLabel = I.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = I.currentLabel, t.selected = I, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const S = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((I) => {
      S.push(Ae(I));
    }), t.selected = S, xe(() => {
      F();
    });
  }, Ae = (L) => {
    let S;
    const I = Fs(L).toLowerCase() === "object", q = Fs(L).toLowerCase() === "null", se = Fs(L).toLowerCase() === "undefined";
    for (let te = t.cachedOptions.size - 1; te >= 0; te--) {
      const J = re.value[te];
      if (I ? Tt(J.value, e.valueKey) === Tt(L, e.valueKey) : J.value === L) {
        S = {
          value: L,
          currentLabel: J.currentLabel,
          isDisabled: J.isDisabled
        };
        break;
      }
    }
    if (S)
      return S;
    const be = I ? L.label : !q && !se ? L : "", ke = {
      value: L,
      currentLabel: be
    };
    return e.multiple && (ke.hitState = !1), ke;
  }, Oe = () => {
    setTimeout(() => {
      const L = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((S) => V.value.findIndex((I) => Tt(I, L) === Tt(S, L)))) : t.hoverIndex = -1 : t.hoverIndex = V.value.findIndex((S) => pn(S) === pn(t.selected));
    }, 300);
  }, ze = () => {
    var L, S;
    Qe(), (S = (L = c.value) == null ? void 0 : L.updatePopper) == null || S.call(L), e.multiple && F();
  }, Qe = () => {
    var L;
    t.inputWidth = (L = o.value) == null ? void 0 : L.$el.offsetWidth;
  }, ft = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, Z(t.query));
  }, Ve = Mc(() => {
    ft();
  }, R.value), nn = Mc((L) => {
    Z(L.target.value);
  }, R.value), oe = (L) => {
    Tc(e.modelValue, L) || n.emit(fl, L);
  }, _e = (L) => k4(L, (S) => !t.disabledOptions.has(S)), He = (L) => {
    if (L.code !== yn.delete) {
      if (L.target.value.length <= 0 && !St()) {
        const S = e.modelValue.slice(), I = _e(S);
        if (I < 0)
          return;
        S.splice(I, 1), n.emit(_t, S), oe(S);
      }
      L.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, et = (L, S) => {
    const I = t.selected.indexOf(S);
    if (I > -1 && !A.value) {
      const q = e.modelValue.slice();
      q.splice(I, 1), n.emit(_t, q), oe(q), n.emit("remove-tag", S.value);
    }
    L.stopPropagation(), de();
  }, mt = (L) => {
    L.stopPropagation();
    const S = e.multiple ? [] : "";
    if (!Xt(S))
      for (const I of t.selected)
        I.isDisabled && S.push(I.value);
    n.emit(_t, S), oe(S), t.hoverIndex = -1, t.visible = !1, n.emit("clear"), de();
  }, jt = (L) => {
    var S;
    if (e.multiple) {
      const I = (e.modelValue || []).slice(), q = Ct(I, L.value);
      q > -1 ? I.splice(q, 1) : (e.multipleLimit <= 0 || I.length < e.multipleLimit) && I.push(L.value), n.emit(_t, I), oe(I), L.created && (t.query = "", Z(""), t.inputLength = 20), e.filterable && ((S = i.value) == null || S.focus());
    } else
      n.emit(_t, L.value), oe(L.value), t.visible = !1;
    rn(), !t.visible && xe(() => {
      xt(L);
    });
  }, Ct = (L = [], S) => {
    if (!Yt(S))
      return L.indexOf(S);
    const I = e.valueKey;
    let q = -1;
    return L.some((se, be) => Wo(Tt(se, I)) === Tt(S, I) ? (q = be, !0) : !1), q;
  }, rn = () => {
    const L = i.value || o.value;
    L && (L == null || L.focus());
  }, xt = (L) => {
    var S, I, q, se, be;
    const ke = Array.isArray(L) ? L[0] : L;
    let te = null;
    if (ke != null && ke.value) {
      const J = V.value.filter((fe) => fe.value === ke.value);
      J.length > 0 && (te = J[0].$el);
    }
    if (c.value && te) {
      const J = (se = (q = (I = (S = c.value) == null ? void 0 : S.popperRef) == null ? void 0 : I.contentRef) == null ? void 0 : q.querySelector) == null ? void 0 : se.call(q, `.${s.be("dropdown", "wrap")}`);
      J && $4(J, te);
    }
    (be = m.value) == null || be.handleScroll();
  }, Ht = (L) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(L.value, L), t.cachedOptions.set(L.value, L), L.disabled && t.disabledOptions.set(L.value, L);
  }, st = (L, S) => {
    t.options.get(L) === S && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(L));
  }, It = (L) => {
    L.code !== yn.backspace && St(!1), t.inputLength = i.value.value.length * 15 + 20, F();
  }, St = (L) => {
    if (!Array.isArray(t.selected))
      return;
    const S = _e(t.selected.map((q) => q.value)), I = t.selected[S];
    if (I)
      return L === !0 || L === !1 ? (I.hitState = L, L) : (I.hitState = !I.hitState, I.hitState);
  }, Vt = (L) => {
    const S = L.target.value;
    if (L.type === "compositionend")
      t.isOnComposition = !1, xe(() => Z(S));
    else {
      const I = S[S.length - 1] || "";
      t.isOnComposition = !Sh(I);
    }
  }, Xe = () => {
    xe(() => xt(t.selected));
  }, G = (L) => {
    t.focused || ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), t.focused = !0, n.emit("focus", L));
  }, de = () => {
    var L, S;
    t.visible ? (L = i.value || o.value) == null || L.focus() : (S = o.value) == null || S.focus();
  }, Ie = () => {
    var L, S, I;
    t.visible = !1, (L = o.value) == null || L.blur(), (I = (S = a.value) == null ? void 0 : S.blur) == null || I.call(S);
  }, Ue = (L) => {
    var S, I, q;
    (S = c.value) != null && S.isFocusInsideContent(L) || (I = u.value) != null && I.isFocusInsideContent(L) || (q = l.value) != null && q.contains(L.relatedTarget) || (t.visible && Hn(), t.focused = !1, n.emit("blur", L));
  }, Ut = (L) => {
    mt(L);
  }, Hn = () => {
    t.visible = !1;
  }, Vn = (L) => {
    t.visible && (L.preventDefault(), L.stopPropagation(), t.visible = !1);
  }, ir = (L) => {
    L && !t.mouseEnter || A.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!c.value || !c.value.isFocusInsideContent()) && (t.visible = !t.visible), de());
  }, Lr = () => {
    t.visible ? V.value[t.hoverIndex] && jt(V.value[t.hoverIndex]) : ir();
  }, pn = (L) => Yt(L.value) ? Tt(L.value, e.valueKey) : L.value, ar = T(() => V.value.filter((L) => L.visible).every((L) => L.disabled)), Or = T(() => e.multiple ? t.selected.slice(0, e.maxCollapseTags) : []), Un = T(() => e.multiple ? t.selected.slice(e.maxCollapseTags) : []), An = (L) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !ar.value) {
      L === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : L === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const S = V.value[t.hoverIndex];
      (S.disabled === !0 || S.states.groupDisabled === !0 || !S.visible) && An(L), xe(() => xt(f.value));
    }
  }, cr = () => {
    t.mouseEnter = !0;
  }, Zn = () => {
    t.mouseEnter = !1;
  }, Rr = (L, S) => {
    var I, q;
    et(L, S), (q = (I = u.value) == null ? void 0 : I.updatePopper) == null || q.call(I);
  }, lr = T(() => ({
    maxWidth: `${_(t.inputWidth) - 32 - (O.value ? 22 : 0)}px`,
    width: "100%"
  }));
  return {
    optionList: b,
    optionsArray: V,
    hoverOption: f,
    selectSize: U,
    handleResize: ze,
    debouncedOnInputChange: Ve,
    debouncedQueryChange: nn,
    deletePrevTag: He,
    deleteTag: et,
    deleteSelected: mt,
    handleOptionSelect: jt,
    scrollToOption: xt,
    readonly: C,
    resetInputHeight: F,
    showClose: E,
    iconComponent: $,
    iconReverse: M,
    showNewOption: P,
    collapseTagSize: z,
    setSelected: le,
    managePlaceholder: W,
    selectDisabled: A,
    emptyText: B,
    toggleLastOptionHitState: St,
    resetInputState: It,
    handleComposition: Vt,
    onOptionCreate: Ht,
    onOptionDestroy: st,
    handleMenuEnter: Xe,
    handleFocus: G,
    focus: de,
    blur: Ie,
    handleBlur: Ue,
    handleClearClick: Ut,
    handleClose: Hn,
    handleKeydownEscape: Vn,
    toggleMenu: ir,
    selectOption: Lr,
    getValueKey: pn,
    navigateOptions: An,
    handleDeleteTooltipTag: Rr,
    dropMenuVisible: N,
    queryChange: v,
    groupQueryChange: g,
    showTagList: Or,
    collapseTagList: Un,
    selectTagsStyle: lr,
    reference: o,
    input: i,
    iOSInput: a,
    tooltipRef: c,
    tagTooltipRef: u,
    tags: d,
    selectWrapper: l,
    scrollbar: m,
    handleMouseEnter: cr,
    handleMouseLeave: Zn
  };
};
var K8 = H({
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
      const a = (o = t.default) == null ? void 0 : o.call(t), c = [];
      function u(d) {
        Array.isArray(d) && d.forEach((l) => {
          var m, f, v, g;
          const b = (m = (l == null ? void 0 : l.type) || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? u(!Xt(l.children) && !Array.isArray(l.children) && Ot((f = l.children) == null ? void 0 : f.default) ? (v = l.children) == null ? void 0 : v.default() : l.children) : b === "ElOption" ? c.push((g = l.props) == null ? void 0 : g.label) : Array.isArray(l.children) && u(l.children);
        });
      }
      return a.length && u((i = a[0]) == null ? void 0 : i.children), s(c, r) || (r = c, n("update-options", c)), a;
    };
  }
});
const Ad = "ElSelect", X8 = H({
  name: Ad,
  componentName: Ad,
  components: {
    ElInput: Ss,
    ElSelectMenu: Z8,
    ElOption: Ml,
    ElOptions: K8,
    ElTag: jC,
    ElScrollbar: u6,
    ElTooltip: so,
    ElIcon: bt
  },
  directives: { ClickOutside: t2 },
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
      validator: e3
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
    teleported: Mt.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: Qt,
      default: dl
    },
    fitInputWidth: Boolean,
    suffixIcon: {
      type: Qt,
      default: wh
    },
    tagType: { ...n2.type, default: "info" },
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
      values: ys,
      default: "bottom-start"
    },
    ariaLabel: {
      type: String,
      default: void 0
    }
  },
  emits: [
    _t,
    fl,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = Ee("select"), r = Ee("input"), { t: s } = en(), o = ks(), i = W8(e), {
      optionList: a,
      optionsArray: c,
      hoverOption: u,
      selectSize: d,
      readonly: l,
      handleResize: m,
      collapseTagSize: f,
      debouncedOnInputChange: v,
      debouncedQueryChange: g,
      deletePrevTag: b,
      deleteTag: h,
      deleteSelected: w,
      handleOptionSelect: k,
      scrollToOption: C,
      setSelected: A,
      resetInputHeight: E,
      managePlaceholder: $,
      showClose: M,
      selectDisabled: O,
      iconComponent: R,
      iconReverse: B,
      showNewOption: V,
      emptyText: re,
      toggleLastOptionHitState: P,
      resetInputState: U,
      handleComposition: z,
      onOptionCreate: N,
      onOptionDestroy: F,
      handleMenuEnter: Z,
      handleFocus: W,
      focus: pe,
      blur: le,
      handleBlur: Ae,
      handleClearClick: Oe,
      handleClose: ze,
      handleKeydownEscape: Qe,
      toggleMenu: ft,
      selectOption: Ve,
      getValueKey: nn,
      navigateOptions: oe,
      handleDeleteTooltipTag: _e,
      dropMenuVisible: He,
      reference: et,
      input: mt,
      iOSInput: jt,
      tooltipRef: Ct,
      tagTooltipRef: rn,
      tags: xt,
      selectWrapper: Ht,
      scrollbar: st,
      queryChange: It,
      groupQueryChange: St,
      handleMouseEnter: Vt,
      handleMouseLeave: Xe,
      showTagList: G,
      collapseTagList: de,
      selectTagsStyle: Ie
    } = G8(e, i, t), {
      inputWidth: Ue,
      selected: Ut,
      inputLength: Hn,
      filteredOptionsCount: Vn,
      visible: ir,
      selectedLabel: Lr,
      hoverIndex: pn,
      query: ar,
      inputHovering: Or,
      currentPlaceholder: Un,
      menuVisibleOnFocus: An,
      isOnComposition: cr,
      options: Zn,
      cachedOptions: Rr,
      optionsCount: lr,
      prefixWidth: L
    } = ls(i), S = T(() => {
      const Ce = [n.b()], Et = _(d);
      return Et && Ce.push(n.m(Et)), e.disabled && Ce.push(n.m("disabled")), Ce;
    }), I = T(() => [
      n.e("tags"),
      n.is("disabled", _(O))
    ]), q = T(() => [
      n.b("tags-wrapper"),
      { "has-prefix": _(L) && _(Ut).length }
    ]), se = T(() => [
      n.e("input"),
      n.is(_(d)),
      n.is("disabled", _(O))
    ]), be = T(() => [
      n.e("input"),
      n.is(_(d)),
      n.em("input", "iOS")
    ]), ke = T(() => [
      n.is("empty", !e.allowCreate && !!_(ar) && _(Vn) === 0)
    ]), te = T(() => ({ maxWidth: `${_(Ue) > 123 && _(Ut).length > e.maxCollapseTags ? _(Ue) - 123 : _(Ue) - 75}px` })), J = T(() => ({
      marginLeft: `${_(L)}px`,
      flexGrow: 1,
      width: `${_(Hn) / (_(Ue) - 32)}%`,
      maxWidth: `${_(Ue) - 42}px`
    }));
    kt(As, qn({
      props: e,
      options: Zn,
      optionsArray: c,
      cachedOptions: Rr,
      optionsCount: lr,
      filteredOptionsCount: Vn,
      hoverIndex: pn,
      handleOptionSelect: k,
      onOptionCreate: N,
      onOptionDestroy: F,
      selectWrapper: Ht,
      selected: Ut,
      setSelected: A,
      queryChange: It,
      groupQueryChange: St
    })), Be(() => {
      i.cachedPlaceHolder = Un.value = e.placeholder || (() => s("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (Un.value = ""), fs(Ht, m), e.remote && e.multiple && E(), xe(() => {
        const Ce = et.value && et.value.$el;
        if (Ce && (Ue.value = Ce.getBoundingClientRect().width, t.slots.prefix)) {
          const Et = Ce.querySelector(`.${r.e("prefix")}`);
          L.value = Math.max(Et.getBoundingClientRect().width + 11, 30);
        }
      }), A();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(_t, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(_t, "");
    const fe = T(() => {
      var Ce, Et;
      return (Et = (Ce = Ct.value) == null ? void 0 : Ce.popperRef) == null ? void 0 : Et.contentRef;
    });
    return {
      isIOS: th,
      onOptionsRendered: (Ce) => {
        a.value = Ce;
      },
      prefixWidth: L,
      selectSize: d,
      readonly: l,
      handleResize: m,
      collapseTagSize: f,
      debouncedOnInputChange: v,
      debouncedQueryChange: g,
      deletePrevTag: b,
      deleteTag: h,
      handleDeleteTooltipTag: _e,
      deleteSelected: w,
      handleOptionSelect: k,
      scrollToOption: C,
      inputWidth: Ue,
      selected: Ut,
      inputLength: Hn,
      filteredOptionsCount: Vn,
      visible: ir,
      selectedLabel: Lr,
      hoverIndex: pn,
      query: ar,
      inputHovering: Or,
      currentPlaceholder: Un,
      menuVisibleOnFocus: An,
      isOnComposition: cr,
      options: Zn,
      resetInputHeight: E,
      managePlaceholder: $,
      showClose: M,
      selectDisabled: O,
      iconComponent: R,
      iconReverse: B,
      showNewOption: V,
      emptyText: re,
      toggleLastOptionHitState: P,
      resetInputState: U,
      handleComposition: z,
      handleMenuEnter: Z,
      handleFocus: W,
      focus: pe,
      blur: le,
      handleBlur: Ae,
      handleClearClick: Oe,
      handleClose: ze,
      handleKeydownEscape: Qe,
      toggleMenu: ft,
      selectOption: Ve,
      getValueKey: nn,
      navigateOptions: oe,
      dropMenuVisible: He,
      reference: et,
      input: mt,
      iOSInput: jt,
      tooltipRef: Ct,
      popperPaneRef: fe,
      tags: xt,
      selectWrapper: Ht,
      scrollbar: st,
      wrapperKls: S,
      tagsKls: I,
      tagWrapperKls: q,
      inputKls: se,
      iOSInputKls: be,
      scrollbarKls: ke,
      selectTagsStyle: Ie,
      nsSelect: n,
      tagTextStyle: te,
      inputStyle: J,
      handleMouseEnter: Vt,
      handleMouseLeave: Xe,
      showTagList: G,
      collapseTagList: de,
      tagTooltipRef: rn,
      contentId: o,
      hoverOption: u
    };
  }
}), Y8 = ["disabled", "autocomplete", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"], J8 = ["disabled"], Q8 = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function ex(e, t, n, r, s, o) {
  const i = Tn("el-tag"), a = Tn("el-tooltip"), c = Tn("el-icon"), u = Tn("el-input"), d = Tn("el-option"), l = Tn("el-options"), m = Tn("el-scrollbar"), f = Tn("el-select-menu"), v = tl("click-outside");
  return Ye((y(), x("div", {
    ref: "selectWrapper",
    class: j(e.wrapperKls),
    onMouseenter: t[22] || (t[22] = (...g) => e.handleMouseEnter && e.handleMouseEnter(...g)),
    onMouseleave: t[23] || (t[23] = (...g) => e.handleMouseLeave && e.handleMouseLeave(...g)),
    onClick: t[24] || (t[24] = Ke((...g) => e.toggleMenu && e.toggleMenu(...g), ["stop"]))
  }, [
    ue(a, {
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
      default: Y(() => {
        var g, b;
        return [
          p("div", {
            class: "select-trigger",
            onMouseenter: t[20] || (t[20] = (h) => e.inputHovering = !0),
            onMouseleave: t[21] || (t[21] = (h) => e.inputHovering = !1)
          }, [
            e.multiple ? (y(), x("div", {
              key: 0,
              ref: "tags",
              tabindex: "-1",
              class: j(e.tagsKls),
              style: qe(e.selectTagsStyle),
              onClick: t[15] || (t[15] = (...h) => e.focus && e.focus(...h))
            }, [
              e.collapseTags && e.selected.length ? (y(), X(nr, {
                key: 0,
                onAfterLeave: e.resetInputHeight
              }, {
                default: Y(() => [
                  p("span", {
                    class: j(e.tagWrapperKls)
                  }, [
                    (y(!0), x(Pe, null, Je(e.showTagList, (h) => (y(), X(i, {
                      key: e.getValueKey(h),
                      closable: !e.selectDisabled && !h.isDisabled,
                      size: e.collapseTagSize,
                      hit: h.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (w) => e.deleteTag(w, h)
                    }, {
                      default: Y(() => [
                        p("span", {
                          class: j(e.nsSelect.e("tags-text")),
                          style: qe(e.tagTextStyle)
                        }, ve(h.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                    e.selected.length > e.maxCollapseTags ? (y(), X(i, {
                      key: 0,
                      closable: !1,
                      size: e.collapseTagSize,
                      type: e.tagType,
                      "disable-transitions": ""
                    }, {
                      default: Y(() => [
                        e.collapseTagsTooltip ? (y(), X(a, {
                          key: 0,
                          ref: "tagTooltipRef",
                          disabled: e.dropMenuVisible,
                          "fallback-placements": ["bottom", "top", "right", "left"],
                          effect: e.effect,
                          placement: "bottom",
                          teleported: e.teleported
                        }, {
                          default: Y(() => [
                            p("span", {
                              class: j(e.nsSelect.e("tags-text"))
                            }, "+ " + ve(e.selected.length - e.maxCollapseTags), 3)
                          ]),
                          content: Y(() => [
                            p("div", {
                              class: j(e.nsSelect.e("collapse-tags"))
                            }, [
                              (y(!0), x(Pe, null, Je(e.collapseTagList, (h) => (y(), x("div", {
                                key: e.getValueKey(h),
                                class: j(e.nsSelect.e("collapse-tag"))
                              }, [
                                ue(i, {
                                  class: "in-tooltip",
                                  closable: !e.selectDisabled && !h.isDisabled,
                                  size: e.collapseTagSize,
                                  hit: h.hitState,
                                  type: e.tagType,
                                  "disable-transitions": "",
                                  style: { margin: "2px" },
                                  onClose: (w) => e.handleDeleteTooltipTag(w, h)
                                }, {
                                  default: Y(() => [
                                    p("span", {
                                      class: j(e.nsSelect.e("tags-text")),
                                      style: qe({
                                        maxWidth: e.inputWidth - 75 + "px"
                                      })
                                    }, ve(h.currentLabel), 7)
                                  ]),
                                  _: 2
                                }, 1032, ["closable", "size", "hit", "type", "onClose"])
                              ], 2))), 128))
                            ], 2)
                          ]),
                          _: 1
                        }, 8, ["disabled", "effect", "teleported"])) : (y(), x("span", {
                          key: 1,
                          class: j(e.nsSelect.e("tags-text"))
                        }, "+ " + ve(e.selected.length - e.maxCollapseTags), 3))
                      ]),
                      _: 1
                    }, 8, ["size", "type"])) : Q("v-if", !0)
                  ], 2)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])) : Q("v-if", !0),
              e.collapseTags ? Q("v-if", !0) : (y(), X(nr, {
                key: 1,
                onAfterLeave: e.resetInputHeight
              }, {
                default: Y(() => [
                  p("span", {
                    class: j(e.tagWrapperKls),
                    style: qe(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                  }, [
                    (y(!0), x(Pe, null, Je(e.selected, (h) => (y(), X(i, {
                      key: e.getValueKey(h),
                      closable: !e.selectDisabled && !h.isDisabled,
                      size: e.collapseTagSize,
                      hit: h.hitState,
                      type: e.tagType,
                      "disable-transitions": "",
                      onClose: (w) => e.deleteTag(w, h)
                    }, {
                      default: Y(() => [
                        p("span", {
                          class: j(e.nsSelect.e("tags-text")),
                          style: qe({ maxWidth: e.inputWidth - 75 + "px" })
                        }, ve(h.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                  ], 6)
                ]),
                _: 1
              }, 8, ["onAfterLeave"])),
              e.filterable && !e.selectDisabled ? Ye((y(), x("input", {
                key: 2,
                ref: "input",
                "onUpdate:modelValue": t[0] || (t[0] = (h) => e.query = h),
                type: "text",
                class: j(e.inputKls),
                disabled: e.selectDisabled,
                autocomplete: e.autocomplete,
                style: qe(e.inputStyle),
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
                  t[5] || (t[5] = at(Ke((h) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                  t[6] || (t[6] = at(Ke((h) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                  t[7] || (t[7] = at((...h) => e.handleKeydownEscape && e.handleKeydownEscape(...h), ["esc"])),
                  t[8] || (t[8] = at(Ke((...h) => e.selectOption && e.selectOption(...h), ["stop", "prevent"]), ["enter"])),
                  t[9] || (t[9] = at((...h) => e.deletePrevTag && e.deletePrevTag(...h), ["delete"])),
                  t[10] || (t[10] = at((h) => e.visible = !1, ["tab"]))
                ],
                onCompositionstart: t[11] || (t[11] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onCompositionupdate: t[12] || (t[12] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onCompositionend: t[13] || (t[13] = (...h) => e.handleComposition && e.handleComposition(...h)),
                onInput: t[14] || (t[14] = (...h) => e.debouncedQueryChange && e.debouncedQueryChange(...h))
              }, null, 46, Y8)), [
                [Np, e.query]
              ]) : Q("v-if", !0)
            ], 6)) : Q("v-if", !0),
            e.isIOS && !e.multiple && e.filterable && e.readonly ? (y(), x("input", {
              key: 1,
              ref: "iOSInput",
              class: j(e.iOSInputKls),
              disabled: e.selectDisabled,
              type: "text"
            }, null, 10, J8)) : Q("v-if", !0),
            ue(u, {
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
              class: j([e.nsSelect.is("focus", e.visible)]),
              tabindex: e.multiple && e.filterable ? -1 : void 0,
              role: "combobox",
              "aria-activedescendant": ((b = e.hoverOption) == null ? void 0 : b.id) || "",
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
                t[17] || (t[17] = at(Ke((h) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
                t[18] || (t[18] = at(Ke((h) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
                at(Ke(e.selectOption, ["stop", "prevent"]), ["enter"]),
                at(e.handleKeydownEscape, ["esc"]),
                t[19] || (t[19] = at((h) => e.visible = !1, ["tab"]))
              ]
            }, Xr({
              suffix: Y(() => [
                e.iconComponent && !e.showClose ? (y(), X(c, {
                  key: 0,
                  class: j([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
                }, {
                  default: Y(() => [
                    (y(), X(lt(e.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Q("v-if", !0),
                e.showClose && e.clearIcon ? (y(), X(c, {
                  key: 1,
                  class: j([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                  onClick: e.handleClearClick
                }, {
                  default: Y(() => [
                    (y(), X(lt(e.clearIcon)))
                  ]),
                  _: 1
                }, 8, ["class", "onClick"])) : Q("v-if", !0)
              ]),
              _: 2
            }, [
              e.$slots.prefix ? {
                name: "prefix",
                fn: Y(() => [
                  p("div", Q8, [
                    ne(e.$slots, "prefix")
                  ])
                ])
              } : void 0
            ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "aria-activedescendant", "aria-controls", "aria-expanded", "label", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
          ], 32)
        ];
      }),
      content: Y(() => [
        ue(f, null, Xr({
          default: Y(() => [
            Ye(ue(m, {
              id: e.contentId,
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: j(e.scrollbarKls),
              role: "listbox",
              "aria-label": e.ariaLabel,
              "aria-orientation": "vertical"
            }, {
              default: Y(() => [
                e.showNewOption ? (y(), X(d, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : Q("v-if", !0),
                ue(l, { onUpdateOptions: e.onOptionsRendered }, {
                  default: Y(() => [
                    ne(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["id", "wrap-class", "view-class", "class", "aria-label"]), [
              [Jt, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (y(), x(Pe, { key: 0 }, [
              e.$slots.empty ? ne(e.$slots, "empty", { key: 0 }) : (y(), x("p", {
                key: 1,
                class: j(e.nsSelect.be("dropdown", "empty"))
              }, ve(e.emptyText), 3))
            ], 64)) : Q("v-if", !0)
          ]),
          _: 2
        }, [
          e.$slots.header ? {
            name: "header",
            fn: Y(() => [
              ne(e.$slots, "header")
            ])
          } : void 0,
          e.$slots.footer ? {
            name: "footer",
            fn: Y(() => [
              ne(e.$slots, "footer")
            ])
          } : void 0
        ]), 1024)
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [v, e.handleClose, e.popperPaneRef]
  ]);
}
var tx = /* @__PURE__ */ ye(X8, [["render", ex], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const nx = H({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(e) {
    const t = Ee("select"), n = D(!0), r = ot(), s = D([]);
    kt(s2, qn({
      ...ls(e)
    }));
    const o = $e(As);
    Be(() => {
      s.value = i(r.subTree);
    });
    const i = (c) => {
      const u = [];
      return Array.isArray(c.children) && c.children.forEach((d) => {
        var l;
        d.type && d.type.name === "ElOption" && d.component && d.component.proxy ? u.push(d.component.proxy) : (l = d.children) != null && l.length && u.push(...i(d));
      }), u;
    }, { groupQueryChange: a } = Wo(o);
    return ae(a, () => {
      n.value = s.value.some((c) => c.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function rx(e, t, n, r, s, o) {
  return Ye((y(), x("ul", {
    class: j(e.ns.be("group", "wrap"))
  }, [
    p("li", {
      class: j(e.ns.be("group", "title"))
    }, ve(e.label), 3),
    p("li", null, [
      p("ul", {
        class: j(e.ns.b("group"))
      }, [
        ne(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [Jt, e.visible]
  ]);
}
var i2 = /* @__PURE__ */ ye(nx, [["render", rx], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const Pc = Ft(tx, {
  Option: Ml,
  OptionGroup: i2
}), ox = bs(Ml);
bs(i2);
const Tl = () => $e(o2, {}), sx = Me({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: ge(Array),
    default: () => pl([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: fo
  }
}), ix = H({
  name: "ElPaginationSizes"
}), ax = /* @__PURE__ */ H({
  ...ix,
  props: sx,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = en(), s = Ee("pagination"), o = Tl(), i = D(n.pageSize);
    ae(() => n.pageSizes, (u, d) => {
      if (!Tc(u, d) && Array.isArray(u)) {
        const l = u.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", l);
      }
    }), ae(() => n.pageSize, (u) => {
      i.value = u;
    });
    const a = T(() => n.pageSizes);
    function c(u) {
      var d;
      u !== i.value && (i.value = u, (d = o.handleSizeChange) == null || d.call(o, Number(u)));
    }
    return (u, d) => (y(), x("span", {
      class: j(_(s).e("sizes"))
    }, [
      ue(_(Pc), {
        "model-value": i.value,
        disabled: u.disabled,
        "popper-class": u.popperClass,
        size: u.size,
        teleported: u.teleported,
        "validate-event": !1,
        onChange: c
      }, {
        default: Y(() => [
          (y(!0), x(Pe, null, Je(_(a), (l) => (y(), X(_(ox), {
            key: l,
            value: l,
            label: l + _(r)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size", "teleported"])
    ], 2));
  }
});
var cx = /* @__PURE__ */ ye(ax, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const lx = Me({
  size: {
    type: String,
    values: fo
  }
}), ux = ["disabled"], dx = H({
  name: "ElPaginationJumper"
}), fx = /* @__PURE__ */ H({
  ...dx,
  props: lx,
  setup(e) {
    const { t } = en(), n = Ee("pagination"), { pageCount: r, disabled: s, currentPage: o, changeEvent: i } = Tl(), a = D(), c = T(() => {
      var l;
      return (l = a.value) != null ? l : o == null ? void 0 : o.value;
    });
    function u(l) {
      a.value = l ? +l : "";
    }
    function d(l) {
      l = Math.trunc(+l), i == null || i(l), a.value = void 0;
    }
    return (l, m) => (y(), x("span", {
      class: j(_(n).e("jump")),
      disabled: _(s)
    }, [
      p("span", {
        class: j([_(n).e("goto")])
      }, ve(_(t)("el.pagination.goto")), 3),
      ue(_(Ss), {
        size: l.size,
        class: j([_(n).e("editor"), _(n).is("in-pagination")]),
        min: 1,
        max: _(r),
        disabled: _(s),
        "model-value": _(c),
        "validate-event": !1,
        label: _(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": u,
        onChange: d
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      p("span", {
        class: j([_(n).e("classifier")])
      }, ve(_(t)("el.pagination.pageClassifier")), 3)
    ], 10, ux));
  }
});
var px = /* @__PURE__ */ ye(fx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const hx = Me({
  total: {
    type: Number,
    default: 1e3
  }
}), gx = ["disabled"], mx = H({
  name: "ElPaginationTotal"
}), vx = /* @__PURE__ */ H({
  ...mx,
  props: hx,
  setup(e) {
    const { t } = en(), n = Ee("pagination"), { disabled: r } = Tl();
    return (s, o) => (y(), x("span", {
      class: j(_(n).e("total")),
      disabled: _(r)
    }, ve(_(t)("el.pagination.total", {
      total: s.total
    })), 11, gx));
  }
});
var _x = /* @__PURE__ */ ye(vx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const bx = Me({
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
}), yx = ["onKeyup"], wx = ["aria-current", "aria-label", "tabindex"], kx = ["tabindex", "aria-label"], Cx = ["aria-current", "aria-label", "tabindex"], xx = ["tabindex", "aria-label"], Sx = ["aria-current", "aria-label", "tabindex"], Ex = H({
  name: "ElPaginationPager"
}), Ax = /* @__PURE__ */ H({
  ...Ex,
  props: bx,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, r = Ee("pager"), s = Ee("icon"), { t: o } = en(), i = D(!1), a = D(!1), c = D(!1), u = D(!1), d = D(!1), l = D(!1), m = T(() => {
      const C = n.pagerCount, A = (C - 1) / 2, E = Number(n.currentPage), $ = Number(n.pageCount);
      let M = !1, O = !1;
      $ > C && (E > C - A && (M = !0), E < $ - A && (O = !0));
      const R = [];
      if (M && !O) {
        const B = $ - (C - 2);
        for (let V = B; V < $; V++)
          R.push(V);
      } else if (!M && O)
        for (let B = 2; B < C; B++)
          R.push(B);
      else if (M && O) {
        const B = Math.floor(C / 2) - 1;
        for (let V = E - B; V <= E + B; V++)
          R.push(V);
      } else
        for (let B = 2; B < $; B++)
          R.push(B);
      return R;
    }), f = T(() => [
      "more",
      "btn-quickprev",
      s.b(),
      r.is("disabled", n.disabled)
    ]), v = T(() => [
      "more",
      "btn-quicknext",
      s.b(),
      r.is("disabled", n.disabled)
    ]), g = T(() => n.disabled ? -1 : 0);
    el(() => {
      const C = (n.pagerCount - 1) / 2;
      i.value = !1, a.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - C && (i.value = !0), n.currentPage < n.pageCount - C && (a.value = !0));
    });
    function b(C = !1) {
      n.disabled || (C ? c.value = !0 : u.value = !0);
    }
    function h(C = !1) {
      C ? d.value = !0 : l.value = !0;
    }
    function w(C) {
      const A = C.target;
      if (A.tagName.toLowerCase() === "li" && Array.from(A.classList).includes("number")) {
        const E = Number(A.textContent);
        E !== n.currentPage && t("change", E);
      } else A.tagName.toLowerCase() === "li" && Array.from(A.classList).includes("more") && k(C);
    }
    function k(C) {
      const A = C.target;
      if (A.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let E = Number(A.textContent);
      const $ = n.pageCount, M = n.currentPage, O = n.pagerCount - 2;
      A.className.includes("more") && (A.className.includes("quickprev") ? E = M - O : A.className.includes("quicknext") && (E = M + O)), Number.isNaN(+E) || (E < 1 && (E = 1), E > $ && (E = $)), E !== M && t("change", E);
    }
    return (C, A) => (y(), x("ul", {
      class: j(_(r).b()),
      onClick: k,
      onKeyup: at(w, ["enter"])
    }, [
      C.pageCount > 0 ? (y(), x("li", {
        key: 0,
        class: j([[
          _(r).is("active", C.currentPage === 1),
          _(r).is("disabled", C.disabled)
        ], "number"]),
        "aria-current": C.currentPage === 1,
        "aria-label": _(o)("el.pagination.currentPage", { pager: 1 }),
        tabindex: _(g)
      }, " 1 ", 10, wx)) : Q("v-if", !0),
      i.value ? (y(), x("li", {
        key: 1,
        class: j(_(f)),
        tabindex: _(g),
        "aria-label": _(o)("el.pagination.prevPages", { pager: C.pagerCount - 2 }),
        onMouseenter: A[0] || (A[0] = (E) => b(!0)),
        onMouseleave: A[1] || (A[1] = (E) => c.value = !1),
        onFocus: A[2] || (A[2] = (E) => h(!0)),
        onBlur: A[3] || (A[3] = (E) => d.value = !1)
      }, [
        (c.value || d.value) && !C.disabled ? (y(), X(_(N4), { key: 0 })) : (y(), X(_(Vu), { key: 1 }))
      ], 42, kx)) : Q("v-if", !0),
      (y(!0), x(Pe, null, Je(_(m), (E) => (y(), x("li", {
        key: E,
        class: j([[
          _(r).is("active", C.currentPage === E),
          _(r).is("disabled", C.disabled)
        ], "number"]),
        "aria-current": C.currentPage === E,
        "aria-label": _(o)("el.pagination.currentPage", { pager: E }),
        tabindex: _(g)
      }, ve(E), 11, Cx))), 128)),
      a.value ? (y(), x("li", {
        key: 2,
        class: j(_(v)),
        tabindex: _(g),
        "aria-label": _(o)("el.pagination.nextPages", { pager: C.pagerCount - 2 }),
        onMouseenter: A[4] || (A[4] = (E) => b()),
        onMouseleave: A[5] || (A[5] = (E) => u.value = !1),
        onFocus: A[6] || (A[6] = (E) => h()),
        onBlur: A[7] || (A[7] = (E) => l.value = !1)
      }, [
        (u.value || l.value) && !C.disabled ? (y(), X(_(F4), { key: 0 })) : (y(), X(_(Vu), { key: 1 }))
      ], 42, xx)) : Q("v-if", !0),
      C.pageCount > 1 ? (y(), x("li", {
        key: 3,
        class: j([[
          _(r).is("active", C.currentPage === C.pageCount),
          _(r).is("disabled", C.disabled)
        ], "number"]),
        "aria-current": C.currentPage === C.pageCount,
        "aria-label": _(o)("el.pagination.currentPage", { pager: C.pageCount }),
        tabindex: _(g)
      }, ve(C.pageCount), 11, Sx)) : Q("v-if", !0)
    ], 42, yx));
  }
});
var $x = /* @__PURE__ */ ye(Ax, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const pt = (e) => typeof e != "number", a2 = Me({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => Ze(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: ge(Array),
    default: () => pl([10, 20, 30, 40, 50, 100])
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
    type: Qt,
    default: () => I4
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: Qt,
    default: () => O4
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), Mx = {
  "update:current-page": (e) => Ze(e),
  "update:page-size": (e) => Ze(e),
  "size-change": (e) => Ze(e),
  "current-change": (e) => Ze(e),
  "prev-click": (e) => Ze(e),
  "next-click": (e) => Ze(e)
}, $d = "ElPagination";
var Tx = H({
  name: $d,
  props: a2,
  emits: Mx,
  setup(e, { emit: t, slots: n }) {
    const { t: r } = en(), s = Ee("pagination"), o = ot().vnode.props || {}, i = "onUpdate:currentPage" in o || "onUpdate:current-page" in o || "onCurrentChange" in o, a = "onUpdate:pageSize" in o || "onUpdate:page-size" in o || "onSizeChange" in o, c = T(() => {
      if (pt(e.total) && pt(e.pageCount) || !pt(e.currentPage) && !i)
        return !1;
      if (e.layout.includes("sizes")) {
        if (pt(e.pageCount)) {
          if (!pt(e.total) && !pt(e.pageSize) && !a)
            return !1;
        } else if (!a)
          return !1;
      }
      return !0;
    }), u = D(pt(e.defaultPageSize) ? 10 : e.defaultPageSize), d = D(pt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), l = T({
      get() {
        return pt(e.pageSize) ? u.value : e.pageSize;
      },
      set(k) {
        pt(e.pageSize) && (u.value = k), a && (t("update:page-size", k), t("size-change", k));
      }
    }), m = T(() => {
      let k = 0;
      return pt(e.pageCount) ? pt(e.total) || (k = Math.max(1, Math.ceil(e.total / l.value))) : k = e.pageCount, k;
    }), f = T({
      get() {
        return pt(e.currentPage) ? d.value : e.currentPage;
      },
      set(k) {
        let C = k;
        k < 1 ? C = 1 : k > m.value && (C = m.value), pt(e.currentPage) && (d.value = C), i && (t("update:current-page", C), t("current-change", C));
      }
    });
    ae(m, (k) => {
      f.value > k && (f.value = k);
    });
    function v(k) {
      f.value = k;
    }
    function g(k) {
      l.value = k;
      const C = m.value;
      f.value > C && (f.value = C);
    }
    function b() {
      e.disabled || (f.value -= 1, t("prev-click", f.value));
    }
    function h() {
      e.disabled || (f.value += 1, t("next-click", f.value));
    }
    function w(k, C) {
      k && (k.props || (k.props = {}), k.props.class = [k.props.class, C].join(" "));
    }
    return kt(o2, {
      pageCount: m,
      disabled: T(() => e.disabled),
      currentPage: f,
      changeEvent: v,
      handleSizeChange: g
    }), () => {
      var k, C;
      if (!c.value)
        return r("el.pagination.deprecationWarning"), null;
      if (!e.layout || e.hideOnSinglePage && m.value <= 1)
        return null;
      const A = [], E = [], $ = Lt("div", { class: s.e("rightwrapper") }, E), M = {
        prev: Lt(O8, {
          disabled: e.disabled,
          currentPage: f.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: b
        }),
        jumper: Lt(px, {
          size: e.small ? "small" : "default"
        }),
        pager: Lt($x, {
          currentPage: f.value,
          pageCount: m.value,
          pagerCount: e.pagerCount,
          onChange: v,
          disabled: e.disabled
        }),
        next: Lt(N8, {
          disabled: e.disabled,
          currentPage: f.value,
          pageCount: m.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: h
        }),
        sizes: Lt(cx, {
          pageSize: l.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          teleported: e.teleported,
          size: e.small ? "small" : "default"
        }),
        slot: (C = (k = n == null ? void 0 : n.default) == null ? void 0 : k.call(n)) != null ? C : null,
        total: Lt(_x, { total: pt(e.total) ? 0 : e.total })
      }, O = e.layout.split(",").map((B) => B.trim());
      let R = !1;
      return O.forEach((B) => {
        if (B === "->") {
          R = !0;
          return;
        }
        R ? E.push(M[B]) : A.push(M[B]);
      }), w(A[0], s.is("first")), w(A[A.length - 1], s.is("last")), R && E.length > 0 && (w(E[0], s.is("first")), w(E[E.length - 1], s.is("last")), A.push($)), Lt("div", {
        class: [
          s.b(),
          s.is("background", e.background),
          {
            [s.m("small")]: e.small
          }
        ]
      }, A);
    };
  }
});
const Ix = Ft(Tx), c2 = Me({
  trigger: oo.trigger,
  placement: ei.placement,
  disabled: oo.disabled,
  visible: Mt.visible,
  transition: Mt.transition,
  popperOptions: ei.popperOptions,
  tabindex: ei.tabindex,
  content: Mt.content,
  popperStyle: Mt.popperStyle,
  popperClass: Mt.popperClass,
  enterable: {
    ...Mt.enterable,
    default: !0
  },
  effect: {
    ...Mt.effect,
    default: "light"
  },
  teleported: Mt.teleported,
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
}), Lx = {
  "update:visible": (e) => ul(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, Ox = "onUpdate:visible", Rx = H({
  name: "ElPopover"
}), Px = /* @__PURE__ */ H({
  ...Rx,
  props: c2,
  emits: Lx,
  setup(e, { expose: t, emit: n }) {
    const r = e, s = T(() => r[Ox]), o = Ee("popover"), i = D(), a = T(() => {
      var b;
      return (b = _(i)) == null ? void 0 : b.popperRef;
    }), c = T(() => [
      {
        width: wr(r.width)
      },
      r.popperStyle
    ]), u = T(() => [o.b(), r.popperClass, { [o.m("plain")]: !!r.content }]), d = T(() => r.transition === `${o.namespace.value}-fade-in-linear`), l = () => {
      var b;
      (b = i.value) == null || b.hide();
    }, m = () => {
      n("before-enter");
    }, f = () => {
      n("before-leave");
    }, v = () => {
      n("after-enter");
    }, g = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: a,
      hide: l
    }), (b, h) => (y(), X(_(so), je({
      ref_key: "tooltipRef",
      ref: i
    }, b.$attrs, {
      trigger: b.trigger,
      placement: b.placement,
      disabled: b.disabled,
      visible: b.visible,
      transition: b.transition,
      "popper-options": b.popperOptions,
      tabindex: b.tabindex,
      content: b.content,
      offset: b.offset,
      "show-after": b.showAfter,
      "hide-after": b.hideAfter,
      "auto-close": b.autoClose,
      "show-arrow": b.showArrow,
      "aria-label": b.title,
      effect: b.effect,
      enterable: b.enterable,
      "popper-class": _(u),
      "popper-style": _(c),
      teleported: b.teleported,
      persistent: b.persistent,
      "gpu-acceleration": _(d),
      "onUpdate:visible": _(s),
      onBeforeShow: m,
      onBeforeHide: f,
      onShow: v,
      onHide: g
    }), {
      content: Y(() => [
        b.title ? (y(), x("div", {
          key: 0,
          class: j(_(o).e("title")),
          role: "title"
        }, ve(b.title), 3)) : Q("v-if", !0),
        ne(b.$slots, "default", {}, () => [
          _r(ve(b.content), 1)
        ])
      ]),
      default: Y(() => [
        b.$slots.reference ? ne(b.$slots, "reference", { key: 0 }) : Q("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var Bx = /* @__PURE__ */ ye(Px, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);
const Md = (e, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = e);
};
var zx = {
  mounted(e, t) {
    Md(e, t);
  },
  updated(e, t) {
    Md(e, t);
  }
};
const Dx = "popover", Nx = Y4(zx, Dx), qx = Ft(Bx, {
  directive: Nx
}), Fx = Me({
  animated: {
    type: Boolean,
    default: !1
  },
  count: {
    type: Number,
    default: 1
  },
  rows: {
    type: Number,
    default: 3
  },
  loading: {
    type: Boolean,
    default: !0
  },
  throttle: {
    type: Number
  }
}), jx = Me({
  variant: {
    type: String,
    values: [
      "circle",
      "rect",
      "h1",
      "h3",
      "text",
      "caption",
      "p",
      "image",
      "button"
    ],
    default: "text"
  }
}), Hx = H({
  name: "ElSkeletonItem"
}), Vx = /* @__PURE__ */ H({
  ...Hx,
  props: jx,
  setup(e) {
    const t = Ee("skeleton");
    return (n, r) => (y(), x("div", {
      class: j([_(t).e("item"), _(t).e(n.variant)])
    }, [
      n.variant === "image" ? (y(), X(_(W4), { key: 0 })) : Q("v-if", !0)
    ], 2));
  }
});
var es = /* @__PURE__ */ ye(Vx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton-item.vue"]]);
const Ux = H({
  name: "ElSkeleton"
}), Zx = /* @__PURE__ */ H({
  ...Ux,
  props: Fx,
  setup(e, { expose: t }) {
    const n = e, r = Ee("skeleton"), s = _5(Rt(n, "loading"), n.throttle);
    return t({
      uiLoading: s
    }), (o, i) => _(s) ? (y(), x("div", je({
      key: 0,
      class: [_(r).b(), _(r).is("animated", o.animated)]
    }, o.$attrs), [
      (y(!0), x(Pe, null, Je(o.count, (a) => (y(), x(Pe, { key: a }, [
        o.loading ? ne(o.$slots, "template", { key: a }, () => [
          ue(es, {
            class: j(_(r).is("first")),
            variant: "p"
          }, null, 8, ["class"]),
          (y(!0), x(Pe, null, Je(o.rows, (c) => (y(), X(es, {
            key: c,
            class: j([
              _(r).e("paragraph"),
              _(r).is("last", c === o.rows && o.rows > 1)
            ]),
            variant: "p"
          }, null, 8, ["class"]))), 128))
        ]) : Q("v-if", !0)
      ], 64))), 128))
    ], 16)) : ne(o.$slots, "default", Yr(je({ key: 1 }, o.$attrs)));
  }
});
var Wx = /* @__PURE__ */ ye(Zx, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/skeleton/src/skeleton.vue"]]);
const Gx = Ft(Wx, {
  SkeletonItem: es
}), qr = bs(es), Kx = "TOOLTIP_APPEND_TO";
function Xx() {
  return $e(
    Kx,
    T(() => {
    })
  );
}
const l2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1%200.642857C1%200.287817%201.27473%200%201.61364%200H4.06818C4.40708%200%204.68182%200.287817%204.68182%200.642857V4.5C4.68182%204.85504%204.40708%205.14286%204.06818%205.14286H1.61364C1.27473%205.14286%201%204.85504%201%204.5V0.642857ZM2.22727%201.28571V3.85714H3.45455V1.28571H2.22727ZM6.31818%200.642857C6.31818%200.287817%206.59292%200%206.93182%200H8.15909C8.49799%200%208.77273%200.287817%208.77273%200.642857V3.85714H9.38636C9.72527%203.85714%2010%204.14496%2010%204.5C10%204.85504%209.72527%205.14286%209.38636%205.14286H6.93182C6.59292%205.14286%206.31818%204.85504%206.31818%204.5C6.31818%204.14496%206.59292%203.85714%206.93182%203.85714H7.54545V1.28571H6.93182C6.59292%201.28571%206.31818%200.997897%206.31818%200.642857ZM1%207.5C1%207.14496%201.27473%206.85714%201.61364%206.85714H2.84091C3.17981%206.85714%203.45455%207.14496%203.45455%207.5V10.7143H4.06818C4.40708%2010.7143%204.68182%2011.0021%204.68182%2011.3571C4.68182%2011.7122%204.40708%2012%204.06818%2012H1.61364C1.27473%2012%201%2011.7122%201%2011.3571C1%2011.0021%201.27473%2010.7143%201.61364%2010.7143H2.22727V8.14286H1.61364C1.27473%208.14286%201%207.85504%201%207.5ZM6.31818%207.5C6.31818%207.14496%206.59292%206.85714%206.93182%206.85714H9.38636C9.72527%206.85714%2010%207.14496%2010%207.5V11.3571C10%2011.7122%209.72527%2012%209.38636%2012H6.93182C6.59292%2012%206.31818%2011.7122%206.31818%2011.3571V7.5ZM7.54545%208.14286V10.7143H8.77273V8.14286H7.54545Z'%20/%3e%3c/svg%3e", Yx = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.2251%201.02271C13.5179%200.968554%2013.8195%201.00233%2014.0913%201.11939L14.2055%201.17506L14.3149%201.23951C14.5275%201.37763%2014.7014%201.56758%2014.8208%201.79127L14.8764%201.90553L14.9214%202.02467C15.0145%202.30522%2015.0227%202.60793%2014.9438%202.89478C14.9403%202.90772%2014.9372%202.92106%2014.9331%202.93385L13.0132%208.95338L12.9965%209.00025H19.9995C20.3769%208.99952%2020.7471%209.10523%2021.0669%209.30592C21.3874%209.50712%2021.6437%209.79562%2021.8071%2010.137C21.9704%2010.4783%2022.0341%2010.8588%2021.9897%2011.2346C21.9453%2011.6105%2021.7946%2011.9661%2021.5561%2012.26C21.5375%2012.2829%2021.5181%2012.3052%2021.4975%2012.3264L11.5971%2022.5266L11.5962%2022.5256C11.3774%2022.7595%2011.0907%2022.9194%2010.7749%2022.9778C10.4403%2023.0397%2010.0944%2022.9859%209.7944%2022.8254C9.4944%2022.665%209.25775%2022.4066%209.1235%2022.094C8.98941%2021.7815%208.96593%2021.4327%209.05612%2021.1047L9.06686%2021.0657L10.9868%2015.0462L11.0034%2015.0003H3.99948C3.62236%2015.0008%203.25253%2014.8941%202.93307%2014.6936C2.61276%2014.4925%202.35617%2014.2047%202.19284%2013.8635C2.02947%2013.5221%201.96581%2013.1408%202.01022%2012.7649C2.05468%2012.3892%202.20544%2012.0333%202.44382%2011.7395C2.46238%2011.7167%202.4819%2011.6942%202.50241%2011.6731L12.4028%201.47389C12.6215%201.23984%2012.9091%201.08117%2013.2251%201.02271Z'%20fill='currentColor'%20fill-opacity='0.9'%20style='fill:currentColor;fill-opacity:0.9;'/%3e%3c/svg%3e", u2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9%203L9%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15%203L15%2021'%20stroke='currentColor'%20style='stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", d2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M10.3019%200C10.542%200%2010.7678%200.0476193%2010.9791%200.142858C11.1905%200.238096%2011.373%200.371429%2011.5267%200.542858C11.6805%200.714286%2011.8005%200.92381%2011.887%201.17143C11.9735%201.40952%2012.0167%201.67619%2012.0167%201.97143L12.0023%203.38571C12.0023%203.50952%2012.0023%203.61429%2012.0023%203.7C12.0119%203.78571%2012.0263%203.87143%2012.0455%203.95714C12.0647%204.04286%2012.0936%204.13333%2012.132%204.22857C12.18%204.31429%2012.2425%204.42857%2012.3193%204.57143L12.8237%205.24286C12.9198%205.4619%2012.9774%205.66667%2012.9966%205.85714C13.0158%206.0381%2012.9534%206.25238%2012.8093%206.5L12.3337%207.11429C12.2569%207.26667%2012.1944%207.39524%2012.1464%207.5C12.108%207.60476%2012.0791%207.70476%2012.0599%207.8C12.0407%207.89524%2012.0263%207.99524%2012.0167%208.1C12.0167%208.20476%2012.0167%208.33333%2012.0167%208.48571V9.7C12.0167%2010.0048%2011.9783%2010.2952%2011.9014%2010.5714C11.8342%2010.8381%2011.7333%2011.0714%2011.5988%2011.2714C11.4739%2011.4714%2011.3154%2011.6286%2011.1233%2011.7429C10.9311%2011.8571%2010.7198%2011.9143%2010.4892%2011.9143L9.49487%2012C9.48526%2012%209.42282%2012%209.30753%2012C9.19225%2012%209.05775%2011.9905%208.90404%2011.9714C8.75993%2011.9619%208.61103%2011.9381%208.45731%2011.9C8.31321%2011.8714%208.20273%2011.819%208.12587%2011.7429C8.06823%2011.6952%208.0202%2011.619%207.98177%2011.5143C7.95295%2011.4095%207.93854%2011.3095%207.93854%2011.2143C7.93854%2011.0238%208.00579%2010.8762%208.14028%2010.7714C8.27478%2010.6667%208.42369%2010.6%208.58701%2010.5714C8.75993%2010.5333%208.92806%2010.5143%209.09137%2010.5143H9.71102C10.0953%2010.5143%2010.2826%2010.1857%2010.273%209.52857L10.2586%208.22857C10.2586%207.94286%2010.2682%207.72381%2010.2874%207.57143C10.3163%207.40952%2010.3595%207.27619%2010.4171%207.17143C10.4844%207.06667%2010.566%206.9619%2010.6621%206.85714C10.7582%206.75238%2010.8735%206.60476%2011.008%206.41429C11.0944%206.29048%2011.1665%206.19048%2011.2241%206.11429C11.2818%206.02857%2011.3154%205.94762%2011.325%205.87143C11.3346%205.79524%2011.3154%205.70952%2011.2674%205.61429C11.2289%205.51905%2011.1569%205.39048%2011.0512%205.22857C10.8975%205%2010.7678%204.81905%2010.6621%204.68571C10.566%204.55238%2010.4844%204.42857%2010.4171%204.31429C10.3595%204.2%2010.3163%204.08095%2010.2874%203.95714C10.2682%203.83333%2010.2586%203.66191%2010.2586%203.44286V2.41429C10.2586%202.29048%2010.2538%202.17143%2010.2442%202.05714C10.2442%201.94286%2010.225%201.84286%2010.1866%201.75714C10.1481%201.67143%2010.0857%201.60476%209.99923%201.55714C9.92238%201.50952%209.8119%201.48571%209.66779%201.48571H9.01932C9.00972%201.48571%208.97129%201.48571%208.90404%201.48571C8.83679%201.48571%208.75513%201.48095%208.65906%201.47143C8.56299%201.45238%208.46212%201.42857%208.35644%201.4C8.25076%201.36191%208.1595%201.30476%208.08264%201.22857C8.025%201.18095%207.97697%201.10476%207.93854%201C7.90972%200.895238%207.89531%200.795238%207.89531%200.7C7.89531%200.509524%207.96256%200.361905%208.09705%200.257143C8.23155%200.152381%208.38526%200.0857146%208.55819%200.057143C8.73111%200.0190477%208.89924%200%209.06255%200H10.3019Z%20M3.93745%200C4.10077%200%204.26889%200.0190477%204.44181%200.057143C4.61474%200.0857146%204.76845%200.152381%204.90295%200.257143C5.03745%200.361905%205.10469%200.509524%205.10469%200.7C5.10469%200.795238%205.08548%200.895238%205.04705%201C5.01823%201.10476%204.975%201.18095%204.91736%201.22857C4.8405%201.30476%204.74924%201.36191%204.64356%201.4C4.53788%201.42857%204.43701%201.45238%204.34094%201.47143C4.24487%201.48095%204.16321%201.48571%204.09596%201.48571C4.02871%201.48571%203.99029%201.48571%203.98068%201.48571H3.33221C3.1881%201.48571%203.07282%201.50952%202.98636%201.55714C2.9095%201.60476%202.85186%201.67143%202.81343%201.75714C2.775%201.84286%202.75099%201.94286%202.74138%202.05714C2.74138%202.17143%202.74138%202.29048%202.74138%202.41429V3.44286C2.74138%203.66191%202.72697%203.83333%202.69815%203.95714C2.67893%204.08095%202.6357%204.2%202.56845%204.31429C2.51081%204.42857%202.42915%204.55238%202.32348%204.68571C2.22741%204.81905%202.10251%205%201.9488%205.22857C1.84313%205.39048%201.76627%205.51905%201.71824%205.61429C1.67981%205.70952%201.6654%205.79524%201.675%205.87143C1.68461%205.94762%201.71824%206.02857%201.77588%206.11429C1.83352%206.19048%201.90557%206.29048%201.99203%206.41429C2.12653%206.60476%202.24182%206.75238%202.33789%206.85714C2.43396%206.9619%202.51081%207.06667%202.56845%207.17143C2.6357%207.27619%202.67893%207.40952%202.69815%207.57143C2.72697%207.72381%202.74138%207.94286%202.74138%208.22857L2.72697%209.52857C2.71736%2010.1857%202.9047%2010.5143%203.28898%2010.5143H3.90863C4.07194%2010.5143%204.23526%2010.5333%204.39858%2010.5714C4.57151%2010.6%204.72522%2010.6667%204.85972%2010.7714C4.99421%2010.8762%205.06146%2011.0238%205.06146%2011.2143C5.06146%2011.3095%205.04225%2011.4095%205.00382%2011.5143C4.975%2011.619%204.93177%2011.6952%204.87413%2011.7429C4.79727%2011.819%204.68199%2011.8714%204.52828%2011.9C4.38417%2011.9381%204.23526%2011.9619%204.08155%2011.9714C3.93745%2011.9905%203.80775%2012%203.69247%2012C3.57719%2012%203.51474%2012%203.50513%2012L2.51081%2011.9143C2.28024%2011.9143%202.06889%2011.8571%201.87675%2011.7429C1.68461%2011.6286%201.52129%2011.4714%201.3868%2011.2714C1.2619%2011.0714%201.16103%2010.8381%201.08418%2010.5714C1.01693%2010.2952%200.983302%2010.0048%200.983302%209.7V8.48571C0.983302%208.33333%200.978499%208.20476%200.968892%208.1C0.968892%207.99524%200.959285%207.89524%200.940071%207.8C0.920857%207.70476%200.887232%207.60476%200.839198%207.5C0.80077%207.39524%200.743128%207.26667%200.666272%207.11429L0.190727%206.5C0.0466221%206.25238%20-0.0158233%206.0381%200.00339071%205.85714C0.0226046%205.66667%200.0802464%205.4619%200.176316%205.24286L0.680682%204.57143C0.757538%204.42857%200.81518%204.31429%200.853608%204.22857C0.901643%204.13333%200.935267%204.04286%200.954481%203.95714C0.973695%203.87143%200.983302%203.78571%200.983302%203.7C0.992909%203.61429%200.997712%203.50952%200.997712%203.38571L0.983302%201.97143C0.983302%201.67619%201.02653%201.40952%201.113%201.17143C1.19946%200.92381%201.31955%200.714286%201.47326%200.542858C1.62697%200.371429%201.8095%200.238096%202.02086%200.142858C2.23221%200.0476193%202.45797%200%202.69815%200H3.93745Z'%20/%3e%3c/svg%3e", f2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.3333%2012.5525V12.4489C14.2278%2012.0756%2014.8571%2011.1925%2014.8571%2010.1632V3.61924C14.8571%202.96252%2014.5962%202.3327%2014.1318%201.86832C13.6675%201.40395%2013.0376%201.14307%2012.3809%201.14307H5.90473C5.38113%201.14296%204.87098%201.30883%204.44756%201.61684C4.02414%201.92485%203.70926%202.35915%203.54816%202.85734H3.39501C2.70016%202.85734%202.10892%203.10191%201.70206%203.5842C1.30739%204.05124%201.14282%204.67372%201.14282%205.33352V12.0002C1.14282%2012.8078%201.43463%2013.5346%201.98854%2014.0573C2.54168%2014.5777%203.30892%2014.8535%204.19044%2014.8535H7.17711L10.2826%2014.8573H10.2842C11.0278%2014.8611%2011.7645%2014.7049%2012.336%2014.3392C12.9303%2013.9582%2013.3333%2013.3525%2013.3333%2012.5525ZM3.39501%204.0002H3.42854V10.1625C3.42854%2010.8192%203.68942%2011.449%204.1538%2011.9134C4.61817%2012.3777%205.248%2012.6386%205.90473%2012.6386H12.1874C12.163%2012.9571%2012.003%2013.1948%2011.7196%2013.3761C11.3897%2013.588%2010.8891%2013.7175%2010.2887%2013.7144H10.2857L7.17558%2013.7106H4.19044C3.54816%2013.7106%203.07806%2013.5125%202.7733%2013.2253C2.47006%2012.9403%202.28568%2012.5259%202.28568%2012.0002V5.33352C2.28568%204.84971%202.40758%204.52057%202.5752%204.32096C2.73139%204.13658%202.98054%204.0002%203.39501%204.0002ZM8.01673%203.80972H11.619C11.7706%203.80972%2011.9159%203.86992%2012.0231%203.97709C12.1302%204.08425%2012.1904%204.22959%2012.1904%204.38115V7.98418C12.1904%208.13573%2012.1302%208.28107%2012.0231%208.38823C11.9159%208.4954%2011.7706%208.5556%2011.619%208.5556C11.4675%208.5556%2011.3221%208.4954%2011.215%208.38823C11.1078%208.28107%2011.0476%208.13573%2011.0476%207.98418V5.76019L7.07044%209.73731C7.0177%209.79186%206.95463%209.83536%206.8849%209.86528C6.81517%209.89519%206.74018%209.91092%206.6643%209.91154C6.58843%209.91217%206.51319%209.89767%206.44298%209.86891C6.37277%209.84014%206.30899%209.79768%206.25536%209.74401C6.20173%209.69033%206.15933%209.62651%206.13063%209.55627C6.10193%209.48603%206.08751%209.41078%206.0882%209.3349C6.0889%209.25903%206.1047%209.18406%206.13468%209.11435C6.16466%209.04465%206.20822%208.98162%206.26282%208.92893L10.24%204.95257H8.01673C7.86517%204.95257%207.71983%204.89237%207.61267%204.7852C7.5055%204.67804%207.4453%204.5327%207.4453%204.38115C7.4453%204.22959%207.5055%204.08425%207.61267%203.97709C7.71983%203.86992%207.86517%203.80972%208.01673%203.80972Z'%20/%3e%3c/svg%3e", p2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.63636%200H8.18182C9.08556%200%209.81818%200.732625%209.81818%201.63636C9.81818%202.5401%209.08556%203.27273%208.18182%203.27273H1.63636C0.732626%203.27273%200%202.5401%200%201.63636C0%200.732625%200.732625%200%201.63636%200ZM1.63636%201.09091C1.33512%201.09091%201.09091%201.33512%201.09091%201.63636C1.09091%201.93761%201.33512%202.18182%201.63636%202.18182H8.18182C8.48306%202.18182%208.72727%201.93761%208.72727%201.63636C8.72727%201.33512%208.48306%201.09091%208.18182%201.09091H1.63636Z%20M7.09091%204.36353H11.4545C12.3583%204.36353%2013.0909%205.09615%2013.0909%205.99989C13.0909%206.90363%2012.3583%207.63625%2011.4545%207.63625H7.09091C6.18717%207.63625%205.45454%206.90363%205.45454%205.99989C5.45454%205.09615%206.18717%204.36353%207.09091%204.36353ZM7.09091%205.45443C6.78966%205.45443%206.54545%205.69864%206.54545%205.99989C6.54545%206.30114%206.78966%206.54534%207.09091%206.54534H11.4545C11.7558%206.54534%2012%206.30114%2012%205.99989C12%205.69864%2011.7558%205.45443%2011.4545%205.45443H7.09091Z%20M7.09091%208.72729H11.4545C12.3583%208.72729%2013.0909%209.45992%2013.0909%2010.3637C13.0909%2011.2674%2012.3583%2012%2011.4545%2012H7.09091C6.18717%2012%205.45454%2011.2674%205.45454%2010.3637C5.45454%209.45992%206.18717%208.72729%207.09091%208.72729ZM7.09091%209.8182C6.78966%209.8182%206.54545%2010.0624%206.54545%2010.3637C6.54545%2010.6649%206.78966%2010.9091%207.09091%2010.9091H11.4545C11.7558%2010.9091%2012%2010.6649%2012%2010.3637C12%2010.0624%2011.7558%209.8182%2011.4545%209.8182H7.09091Z'%20/%3e%3c/svg%3e", h2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%202V5'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2019V22'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M22.005%2011.9951L19.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M5.005%2011.9951L2.005%2011.9951'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M19.0796%2019.0676L16.9583%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M7.05884%207.04688L4.93752%204.92555'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M4.9375%2019.0676L7.05882%2016.9463'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M16.9583%207.04688L19.0796%204.92556'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", g2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%2011.243%206%20L%202.758%206%20L%202.758%208%20L%2011.243%208%20L%2011.243%206%20Z'%20/%3e%3c/svg%3e", m2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%202.575%207.728%20L%205.782%2010.935%20L%2011.489%205.228%20L%2010.075%203.814%20L%205.782%208.107%20L%203.989%206.314%20L%202.575%207.728%20Z'%20/%3e%3c/svg%3e", v2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%204.207%202.793%20L%207%205.586%20L%209.793%202.793%20L%2011.207%204.207%20L%208.414%207%20L%2011.207%209.793%20L%209.793%2011.207%20L%207%208.414%20L%204.207%2011.207%20L%202.793%209.793%20L%205.586%207%20L%202.793%204.207%20L%204.207%202.793%20Z%20M%207%200%20C%203.134%200%200%203.134%200%207%20C%200%2010.866%203.134%2014%207%2014%20C%2010.866%2014%2014%2010.866%2014%207%20C%2014%203.134%2010.866%200%207%200%20Z'%20/%3e%3c/svg%3e", _2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207.006%20C%2014%208.867%2013.162%2010.744%2011.95%2011.956%20C%2010.738%2013.168%208.861%2014.006%207%2014.006%20C%205.139%2014.006%203.262%2013.168%202.05%2011.956%20C%200.838%2010.744%200%208.867%200%207.006%20C%200%205.145%200.838%203.268%202.05%202.056%20C%203.262%200.844%205.139%200.006%207%200.006%20C%208.861%200.006%2010.738%200.844%2011.95%202.056%20C%2013.162%203.268%2014%205.145%2014%207.006%20Z%20M%2010.536%203.47%20C%209.576%202.511%208.453%202.006%207%202.006%20C%205.547%202.006%204.424%202.511%203.464%203.47%20C%202.505%204.43%202%205.553%202%207.006%20C%202%208.459%202.505%209.582%203.464%2010.542%20C%204.424%2011.501%205.547%2012.006%207%2012.006%20C%208.453%2012.006%209.576%2011.501%2010.536%2010.542%20C%2011.495%209.582%2012%208.459%2012%207.006%20C%2012%205.553%2011.495%204.43%2010.536%203.47%20Z'%20/%3e%3c/svg%3e", b2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M13.8668%208.36613L11.9048%207.978C11.967%207.66329%2012%207.33649%2012%207C12%206.66351%2011.967%206.3367%2011.9048%206.022L13.8668%205.63387C13.9542%206.07571%2014%206.5325%2014%207C14%207.4675%2013.9542%207.92429%2013.8668%208.36613ZM12.821%203.11069L11.159%204.22333C10.7934%203.67721%2010.3228%203.2066%209.77667%202.84098L10.8893%201.17904C11.6527%201.6901%2012.3099%202.34733%2012.821%203.11069ZM8.36613%200.133238L7.978%202.09521C7.66329%202.03296%207.33649%202%207%202C6.66351%202%206.3367%202.03296%206.022%202.09521L5.63387%200.133238C6.07571%200.0458286%206.5325%200%207%200C7.4675%200%207.92429%200.0458285%208.36613%200.133238ZM3.11069%201.17904L4.22333%202.84098C3.67721%203.2066%203.2066%203.67721%202.84098%204.22333L1.17904%203.11069C1.6901%202.34733%202.34733%201.6901%203.11069%201.17904ZM0.133238%205.63387C0.0458285%206.07571%200%206.5325%200%207C0%207.4675%200.0458286%207.92429%200.133238%208.36613L2.09521%207.978C2.03296%207.6633%202%207.33649%202%207C2%206.66351%202.03296%206.33671%202.09521%206.022L0.133238%205.63387ZM1.17904%2010.8893L2.84098%209.77667C3.2066%2010.3228%203.67721%2010.7934%204.22333%2011.159L3.11069%2012.821C2.34733%2012.3099%201.6901%2011.6527%201.17904%2010.8893ZM5.63387%2013.8668L6.022%2011.9048C6.33671%2011.967%206.66351%2012%207%2012C7.33649%2012%207.6633%2011.967%207.978%2011.9048L8.36613%2013.8668C7.92429%2013.9542%207.4675%2014%207%2014C6.5325%2014%206.07571%2013.9542%205.63387%2013.8668ZM10.8893%2012.821L9.77667%2011.159C10.3228%2010.7934%2010.7934%2010.3228%2011.159%209.77667L12.821%2010.8893C12.3099%2011.6527%2011.6527%2012.3099%2010.8893%2012.821Z'%20/%3e%3c/svg%3e", y2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M7%2014C10.866%2014%2014%2010.866%2014%207C14%203.13401%2010.866%200%207%200C3.13401%200%200%203.13401%200%207C0%2010.866%203.13401%2014%207%2014ZM7%2012C4.23858%2012%202%209.76142%202%207C2%204.23858%204.23858%202%207%202C9.76142%202%2012%204.23858%2012%207C12%209.76142%209.76142%2012%207%2012ZM6%203V8H11C11%205.23858%208.76142%203%206%203Z'%20/%3e%3c/svg%3e", w2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2014%2014'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M%2014%207%20C%2014%2010.866%2010.866%2014%207%2014%20C%203.134%2014%200%2010.866%200%207%20C%200%203.134%203.134%200%207%200%20C%2010.866%200%2014%203.134%2014%207%20Z%20M%206.5%209%20C%206.224%209%206%209.224%206%209.5%20L%206%2010.5%20C%206%2010.776%206.224%2011%206.5%2011%20L%207.5%2011%20C%207.776%2011%208%2010.776%208%2010.5%20L%208%209.5%20C%208%209.224%207.776%209%207.5%209%20L%206.5%209%20Z%20M%206.5%203%20C%206.224%203%206%203.224%206%203.5%20L%206%207.5%20C%206%207.776%206.224%208%206.5%208%20L%207.5%208%20C%207.776%208%208%207.776%208%207.5%20L%208%203.5%20C%208%203.224%207.776%203%207.5%203%20L%206.5%203%20Z'%20/%3e%3c/svg%3e", k2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M1.78814e-07%200.666667C1.78814e-07%200.298477%200.298477%200%200.666667%200H11.3333C11.7015%200%2012%200.298477%2012%200.666667C12%201.03486%2011.7015%201.33333%2011.3333%201.33333H0.666667C0.298477%201.33333%201.78814e-07%201.03486%201.78814e-07%200.666667ZM1.78814e-07%203.62963C1.78814e-07%203.26144%200.298477%202.96296%200.666667%202.96296H11.3333C11.7015%202.96296%2012%203.26144%2012%203.62963C12%203.99782%2011.7015%204.2963%2011.3333%204.2963H0.666667C0.298477%204.2963%201.78814e-07%203.99782%201.78814e-07%203.62963ZM0%206.59259C0%206.2244%200.298477%205.92593%200.666667%205.92593H11.3333C11.7015%205.92593%2012%206.2244%2012%206.59259C12%206.96078%2011.7015%207.25926%2011.3333%207.25926H0.666667C0.298477%207.25926%200%206.96078%200%206.59259ZM0%209.55556C0%209.18737%200.298477%208.88889%200.666667%208.88889H8.66667C9.03486%208.88889%209.33333%209.18737%209.33333%209.55556C9.33333%209.92375%209.03486%2010.2222%208.66667%2010.2222H0.666667C0.298477%2010.2222%200%209.92375%200%209.55556Z'%20/%3e%3c/svg%3e", C2 = "data:image/svg+xml,%3csvg%20aria-hidden='true'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20style='stroke:currentColor;stroke-opacity:%201;'%20d='M8%208V4a2%202%200%200%201%202-2h4a2%202%200%200%201%202%202v4m6%2012V10a2%202%200%200%200-2-2H4a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2ZM8%2013v4m8-4v4M2%2015h20'%20stroke='currentColor'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e", x2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='currentColor'%20d='M214.433%2056C232.908%2023.9999%20279.096%2024.0001%20297.571%2056L477.704%20368C496.18%20400%20473.085%20440%20436.135%20440H75.8685C38.918%20440%2015.8241%20400%2034.2993%20368L214.433%2056ZM256.002%20144L131.294%20360H380.709L256.002%20144Z'%20/%3e%3c/svg%3e", S2 = "data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='2'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='17'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='2'%20y='17'%20width='5'%20height='5'%20rx='1'%20stroke='currentColor'%20style='stroke:currentColor;stroke-opacity:1;'%20stroke-width='2'/%3e%3crect%20x='7'%20y='3'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='7'%20y='19'%20width='10'%20height='2'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='3'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3crect%20x='19'%20y='7'%20width='2'%20height='10'%20fill='currentColor'%20style='fill:currentColor;fill-opacity:1;'/%3e%3c/svg%3e", Jx = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Qx(e, t) {
  return y(), x("svg", Jx, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 12H9m12 6H7M21 6H3"
    }, null, -1)
  ]));
}
const E2 = { name: "lucide-align-right", render: Qx }, e7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function t7(e, t) {
  return y(), x("svg", e7, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "20",
        height: "5",
        x: "2",
        y: "3",
        rx: "1"
      }),
      p("path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4" })
    ], -1)
  ]));
}
const A2 = { name: "lucide-archive", render: t7 }, n7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function r7(e, t) {
  return y(), x("svg", n7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 5v14m7-7l-7 7l-7-7"
    }, null, -1)
  ]));
}
const $2 = { name: "lucide-arrow-down", render: r7 }, o7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function s7(e, t) {
  return y(), x("svg", o7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m12 19l-7-7l7-7m7 7H5"
    }, null, -1)
  ]));
}
const Bc = { name: "lucide-arrow-left", render: s7 }, i7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function a7(e, t) {
  return y(), x("svg", i7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4"
    }, null, -1)
  ]));
}
const M2 = { name: "lucide-arrow-left-right", render: a7 }, c7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function l7(e, t) {
  return y(), x("svg", c7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7l7 7l-7 7"
    }, null, -1)
  ]));
}
const T2 = { name: "lucide-arrow-right", render: l7 }, u7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function d7(e, t) {
  return y(), x("svg", u7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 5v14m18-7H7m8 6l6-6l-6-6"
    }, null, -1)
  ]));
}
const f7 = { name: "lucide-arrow-right-from-line", render: d7 }, p7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h7(e, t) {
  return y(), x("svg", p7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 12H3m8 6l6-6l-6-6m10-1v14"
    }, null, -1)
  ]));
}
const g7 = { name: "lucide-arrow-right-to-line", render: h7 }, m7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function v7(e, t) {
  return y(), x("svg", m7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 12l7-7l7 7m-7 7V5"
    }, null, -1)
  ]));
}
const I2 = { name: "lucide-arrow-up", render: v7 }, _7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function b7(e, t) {
  return y(), x("svg", _7, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      p("path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })
    ], -1)
  ]));
}
const L2 = { name: "lucide-at-sign", render: b7 }, y7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function w7(e, t) {
  return y(), x("svg", y7, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "m4.9 4.9l14.2 14.2" })
    ], -1)
  ]));
}
const O2 = { name: "lucide-ban", render: w7 }, k7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function C7(e, t) {
  return y(), x("svg", k7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    }, null, -1)
  ]));
}
const R2 = { name: "lucide-bell", render: C7 }, x7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function S7(e, t) {
  return y(), x("svg", x7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }, null, -1)
  ]));
}
const P2 = { name: "lucide-book", render: S7 }, E7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function A7(e, t) {
  return y(), x("svg", E7, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 8V4H8" }),
      p("rect", {
        width: "16",
        height: "12",
        x: "4",
        y: "8",
        rx: "2"
      }),
      p("path", { d: "M2 14h2m16 0h2m-7-1v2m-6-2v2" })
    ], -1)
  ]));
}
const B2 = { name: "lucide-bot", render: A7 }, $7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function M7(e, t) {
  return y(), x("svg", $7, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
      p("path", { d: "m3.3 7l8.7 5l8.7-5M12 22V12" })
    ], -1)
  ]));
}
const z2 = { name: "lucide-box", render: M7 }, T7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function I7(e, t) {
  return y(), x("svg", T7, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }),
      p("path", { d: "M12 5a3 3 0 1 1 5.997.125a4 4 0 0 1 2.526 5.77a4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" }),
      p("path", { d: "M15 13a4.5 4.5 0 0 1-3-4a4.5 4.5 0 0 1-3 4m8.599-6.5a3 3 0 0 0 .399-1.375m-11.995 0A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396m15.876 0a4 4 0 0 1 .585.396M6 18a4 4 0 0 1-1.967-.516m15.934 0A4 4 0 0 1 18 18" })
    ], -1)
  ]));
}
const D2 = { name: "lucide-brain", render: I7 }, L7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function O7(e, t) {
  return y(), x("svg", L7, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "m8 2l1.88 1.88m4.24 0L16 2M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }),
      p("path", { d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6m0 0v-9" }),
      p("path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5m3 8H2m1 8c0-2.1 1.7-3.9 3.8-4M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4m-.8 4c2.1.1 3.8 1.9 3.8 4" })
    ], -1)
  ]));
}
const N2 = { name: "lucide-bug", render: O7 }, R7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function P7(e, t) {
  return y(), x("svg", R7, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "16",
        height: "20",
        x: "4",
        y: "2",
        rx: "2"
      }),
      p("path", { d: "M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" })
    ], -1)
  ]));
}
const q2 = { name: "lucide-calculator", render: P7 }, B7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function z7(e, t) {
  return y(), x("svg", B7, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M8 2v4m8-4v4" }),
      p("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "4",
        rx: "2"
      }),
      p("path", { d: "M3 10h18" })
    ], -1)
  ]));
}
const F2 = { name: "lucide-calendar", render: z7 }, D7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function N7(e, t) {
  return y(), x("svg", D7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3 15l4-8l4 8m-7-2h6m5-2h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"
    }, null, -1)
  ]));
}
const j2 = { name: "lucide-case-upper", render: N7 }, q7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function F7(e, t) {
  return y(), x("svg", q7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 17V9m5 8v-3M3 3v16a2 2 0 0 0 2 2h16M8 17V5"
    }, null, -1)
  ]));
}
const H2 = { name: "lucide-chart-column-decreasing", render: F7 }, j7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function H7(e, t) {
  return y(), x("svg", j7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 6L9 17l-5-5"
    }, null, -1)
  ]));
}
const V2 = { name: "lucide-check", render: H7 }, V7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function U7(e, t) {
  return y(), x("svg", V7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L7 17l-5-5m20-2l-7.5 7.5L13 16"
    }, null, -1)
  ]));
}
const U2 = { name: "lucide-check-check", render: U7 }, Z7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function W7(e, t) {
  return y(), x("svg", Z7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 9l6 6l6-6"
    }, null, -1)
  ]));
}
const qo = { name: "lucide-chevron-down", render: W7 }, G7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function K7(e, t) {
  return y(), x("svg", G7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 18l-6-6l6-6"
    }, null, -1)
  ]));
}
const Fo = { name: "lucide-chevron-left", render: K7 }, X7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Y7(e, t) {
  return y(), x("svg", X7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m9 18l6-6l-6-6"
    }, null, -1)
  ]));
}
const jo = { name: "lucide-chevron-right", render: Y7 }, J7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Q7(e, t) {
  return y(), x("svg", J7, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18 15l-6-6l-6 6"
    }, null, -1)
  ]));
}
const Ho = { name: "lucide-chevron-up", render: Q7 }, e9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function t9(e, t) {
  return y(), x("svg", e9, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 20l5-5l5 5M7 4l5 5l5-5"
    }, null, -1)
  ]));
}
const n9 = { name: "lucide-chevrons-down-up", render: t9 }, r9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function o9(e, t) {
  return y(), x("svg", r9, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m11 17l-5-5l5-5m7 10l-5-5l5-5"
    }, null, -1)
  ]));
}
const Z2 = { name: "lucide-chevrons-left", render: o9 }, s9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function i9(e, t) {
  return y(), x("svg", s9, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m7 15l5 5l5-5M7 9l5-5l5 5"
    }, null, -1)
  ]));
}
const W2 = { name: "lucide-chevrons-up-down", render: i9 }, a9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function c9(e, t) {
  return y(), x("svg", a9, t[0] || (t[0] = [
    p("circle", {
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
const G2 = { name: "lucide-circle", render: c9 }, l9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function u9(e, t) {
  return y(), x("svg", l9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "M12 8v4m0 4h.01" })
    ], -1)
  ]));
}
const K2 = { name: "lucide-circle-alert", render: u9 }, d9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function f9(e, t) {
  return y(), x("svg", d9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
const X2 = { name: "lucide-circle-check", render: f9 }, p9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h9(e, t) {
  return y(), x("svg", p9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      })
    ], -1)
  ]));
}
const Y2 = { name: "lucide-circle-dot", render: h9 }, g9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m9(e, t) {
  return y(), x("svg", g9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01" })
    ], -1)
  ]));
}
const zc = { name: "lucide-circle-help", render: m9 }, v9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _9(e, t) {
  return y(), x("svg", v9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "M8 12h8" })
    ], -1)
  ]));
}
const J2 = { name: "lucide-circle-minus", render: _9 }, b9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y9(e, t) {
  return y(), x("svg", b9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "M10 15V9m4 6V9" })
    ], -1)
  ]));
}
const Q2 = { name: "lucide-circle-pause", render: y9 }, w9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k9(e, t) {
  return y(), x("svg", w9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "m10 8l6 4l-6 4z" })
    ], -1)
  ]));
}
const e1 = { name: "lucide-circle-play", render: k9 }, C9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x9(e, t) {
  return y(), x("svg", C9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ]));
}
const t1 = { name: "lucide-circle-plus", render: x9 }, S9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function E9(e, t) {
  return y(), x("svg", S9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M18 20a6 6 0 0 0-12 0" }),
      p("circle", {
        cx: "12",
        cy: "10",
        r: "4"
      }),
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const n1 = { name: "lucide-circle-user-round", render: E9 }, A9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $9(e, t) {
  return y(), x("svg", A9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "m15 9l-6 6m0-6l6 6" })
    ], -1)
  ]));
}
const r1 = { name: "lucide-circle-x", render: $9 }, M9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T9(e, t) {
  return y(), x("svg", M9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1"
      }),
      p("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01" })
    ], -1)
  ]));
}
const o1 = { name: "lucide-clipboard-list", render: T9 }, I9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L9(e, t) {
  return y(), x("svg", I9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 6v6l4 2" }),
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const s1 = { name: "lucide-clock", render: L9 }, O9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function R9(e, t) {
  return y(), x("svg", O9, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
    }, null, -1)
  ]));
}
const i1 = { name: "lucide-cloud", render: R9 }, P9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B9(e, t) {
  return y(), x("svg", P9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 13v8l-4-4m4 4l4-4" }),
      p("path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" })
    ], -1)
  ]));
}
const a1 = { name: "lucide-cloud-download", render: B9 }, z9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function D9(e, t) {
  return y(), x("svg", z9, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 18l6-6l-6-6M8 6l-6 6l6 6"
    }, null, -1)
  ]));
}
const c1 = { name: "lucide-code", render: D9 }, N9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q9(e, t) {
  return y(), x("svg", N9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16" }),
      p("path", { d: "M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-12v2m0 18v-2m5 .66l-1-1.73m-5-8.66L7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2m16.66-5l-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66l-4 6.93" })
    ], -1)
  ]));
}
const Dc = { name: "lucide-cog", render: q9 }, F9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j9(e, t) {
  return y(), x("svg", F9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "M12 18a6 6 0 0 0 0-12z" })
    ], -1)
  ]));
}
const l1 = { name: "lucide-contrast", render: j9 }, H9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function V9(e, t) {
  return y(), x("svg", H9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2"
      }),
      p("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
    ], -1)
  ]));
}
const u1 = { name: "lucide-copy", render: V9 }, U9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Z9(e, t) {
  return y(), x("svg", U9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "M22 12h-4M6 12H2m10-6V2m0 20v-4" })
    ], -1)
  ]));
}
const W9 = { name: "lucide-crosshair", render: Z9 }, G9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function K9(e, t) {
  return y(), x("svg", G9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3"
      }),
      p("path", { d: "M3 5v14a9 3 0 0 0 18 0V5" }),
      p("path", { d: "M3 12a9 3 0 0 0 18 0" })
    ], -1)
  ]));
}
const d1 = { name: "lucide-database", render: K9 }, X9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Y9(e, t) {
  return y(), x("svg", X9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }),
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      })
    ], -1)
  ]));
}
const f1 = { name: "lucide-earth", render: Y9 }, J9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Q9(e, t) {
  return y(), x("svg", J9, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      p("circle", {
        cx: "19",
        cy: "12",
        r: "1"
      }),
      p("circle", {
        cx: "5",
        cy: "12",
        r: "1"
      })
    ], -1)
  ]));
}
const p1 = { name: "lucide-ellipsis", render: Q9 }, eS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tS(e, t) {
  return y(), x("svg", eS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "1"
      }),
      p("circle", {
        cx: "12",
        cy: "5",
        r: "1"
      }),
      p("circle", {
        cx: "12",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
const h1 = { name: "lucide-ellipsis-vertical", render: tS }, nS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rS(e, t) {
  return y(), x("svg", nS, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 9h14M5 15h14"
    }, null, -1)
  ]));
}
const g1 = { name: "lucide-equal", render: rS }, oS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sS(e, t) {
  return y(), x("svg", oS, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
    }, null, -1)
  ]));
}
const m1 = { name: "lucide-external-link", render: sS }, iS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aS(e, t) {
  return y(), x("svg", iS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0" }),
      p("circle", {
        cx: "12",
        cy: "12",
        r: "3"
      })
    ], -1)
  ]));
}
const v1 = { name: "lucide-eye", render: aS }, cS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lS(e, t) {
  return y(), x("svg", cS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575a1 1 0 0 1 0 .696a10.8 10.8 0 0 1-1.444 2.49m-6.41-.679a3 3 0 0 1-4.242-4.242" }),
      p("path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 4.446-5.143M2 2l20 20" })
    ], -1)
  ]));
}
const _1 = { name: "lucide-eye-off", render: lS }, uS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dS(e, t) {
  return y(), x("svg", uS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      p("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ]));
}
const b1 = { name: "lucide-file", render: dS }, fS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pS(e, t) {
  return y(), x("svg", fS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M10 12v-1m0 7v-2m0-9V6m4-4v4a2 2 0 0 0 2 2h4" }),
      p("path", { d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01" }),
      p("circle", {
        cx: "10",
        cy: "20",
        r: "2"
      })
    ], -1)
  ]));
}
const y1 = { name: "lucide-file-archive", render: pS }, hS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gS(e, t) {
  return y(), x("svg", hS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M10 12.5L8 15l2 2.5m4-5l2 2.5l-2 2.5M14 2v4a2 2 0 0 0 2 2h4" }),
      p("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" })
    ], -1)
  ]));
}
const w1 = { name: "lucide-file-code", render: gS }, mS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vS(e, t) {
  return y(), x("svg", mS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      p("path", { d: "M14 2v4a2 2 0 0 0 2 2h4m-8 10v-6m-3 3l3 3l3-3" })
    ], -1)
  ]));
}
const k1 = { name: "lucide-file-down", render: vS }, _S = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bS(e, t) {
  return y(), x("svg", _S, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
      p("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M2 15h10m-3 3l3-3l-3-3" })
    ], -1)
  ]));
}
const C1 = { name: "lucide-file-input", render: bS }, yS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wS(e, t) {
  return y(), x("svg", yS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2a2 2 0 0 0-2 2" }),
      p("path", { d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6m-1 9l-3 3" }),
      p("path", { d: "m5 17l-3-3h10" })
    ], -1)
  ]));
}
const x1 = { name: "lucide-file-output", render: wS }, kS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function CS(e, t) {
  return y(), x("svg", kS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
      p("path", { d: "M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8" })
    ], -1)
  ]));
}
const Nc = { name: "lucide-file-text", render: CS }, xS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function SS(e, t) {
  return y(), x("svg", xS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M20 7h-3a2 2 0 0 1-2-2V2" }),
      p("path", { d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" }),
      p("path", { d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" })
    ], -1)
  ]));
}
const S1 = { name: "lucide-files", render: SS }, ES = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AS(e, t) {
  return y(), x("svg", ES, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6" }),
      p("path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2" })
    ], -1)
  ]));
}
const E1 = { name: "lucide-fingerprint", render: AS }, $S = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function MS(e, t) {
  return y(), x("svg", $S, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7"
    }, null, -1)
  ]));
}
const A1 = { name: "lucide-flask-conical", render: MS }, TS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function IS(e, t) {
  return y(), x("svg", TS, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
const $1 = { name: "lucide-folder", render: IS }, LS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function OS(e, t) {
  return y(), x("svg", LS, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
    }, null, -1)
  ]));
}
const M1 = { name: "lucide-folder-open", render: OS }, RS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function PS(e, t) {
  return y(), x("svg", RS, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 10v6m-3-3h6m5 7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }, null, -1)
  ]));
}
const T1 = { name: "lucide-folder-plus", render: PS }, BS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zS(e, t) {
  return y(), x("svg", BS, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
    }, null, -1)
  ]));
}
const I1 = { name: "lucide-funnel", render: zS }, DS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function NS(e, t) {
  return y(), x("svg", DS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M6 3h12l4 6l-10 13L2 9Z" }),
      p("path", { d: "M11 3L8 9l4 13l4-13l-3-6M2 9h20" })
    ], -1)
  ]));
}
const L1 = { name: "lucide-gem", render: NS }, qS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function FS(e, t) {
  return y(), x("svg", qS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "18",
        height: "4",
        x: "3",
        y: "8",
        rx: "1"
      }),
      p("path", { d: "M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5" })
    ], -1)
  ]));
}
const O1 = { name: "lucide-gift", render: FS }, jS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function HS(e, t) {
  return y(), x("svg", jS, t[0] || (t[0] = [
    Fn('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></g>', 1)
  ]));
}
const R1 = { name: "lucide-git-branch", render: HS }, VS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function US(e, t) {
  return y(), x("svg", VS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" })
    ], -1)
  ]));
}
const P1 = { name: "lucide-globe", render: US }, ZS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function WS(e, t) {
  return y(), x("svg", ZS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6" }),
      p("path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })
    ], -1)
  ]));
}
const B1 = { name: "lucide-graduation-cap", render: WS }, GS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function KS(e, t) {
  return y(), x("svg", GS, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 3v18m-9-9h18" }),
      p("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      })
    ], -1)
  ]));
}
const z1 = { name: "lucide-grid-2x2", render: KS }, XS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YS(e, t) {
  return y(), x("svg", XS, t[0] || (t[0] = [
    Fn('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="9" cy="12" r="1"></circle><circle cx="9" cy="5" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="15" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></g>', 1)
  ]));
}
const D1 = { name: "lucide-grip-vertical", render: YS }, JS = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QS(e, t) {
  return y(), x("svg", JS, t[0] || (t[0] = [
    Fn('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9M2 16l6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></g>', 1)
  ]));
}
const N1 = { name: "lucide-hand-coins", render: QS }, eE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tE(e, t) {
  return y(), x("svg", eE, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "m11 17l2 2a1 1 0 1 0 3-3" }),
      p("path", { d: "m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }),
      p("path", { d: "m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8" })
    ], -1)
  ]));
}
const q1 = { name: "lucide-handshake", render: tE }, nE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function rE(e, t) {
  return y(), x("svg", nE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M22 12H2m3.45-6.89L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11M6 16h.01M10 16h.01"
    }, null, -1)
  ]));
}
const F1 = { name: "lucide-hard-drive", render: rE }, oE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function sE(e, t) {
  return y(), x("svg", oE, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 2v8m4-4l-4 4l-4-4" }),
      p("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2"
      }),
      p("path", { d: "M6 18h.01M10 18h.01" })
    ], -1)
  ]));
}
const j1 = { name: "lucide-hard-drive-download", render: sE }, iE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function aE(e, t) {
  return y(), x("svg", iE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 9h16M4 15h16M10 3L8 21m8-18l-2 18"
    }, null, -1)
  ]));
}
const H1 = { name: "lucide-hash", render: aE }, cE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function lE(e, t) {
  return y(), x("svg", cE, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8" }),
      p("path", { d: "M3 3v5h5m4-1v5l4 2" })
    ], -1)
  ]));
}
const V1 = { name: "lucide-history", render: lE }, uE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function dE(e, t) {
  return y(), x("svg", uE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 22h14M5 2h14m-2 20v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
    }, null, -1)
  ]));
}
const U1 = { name: "lucide-hourglass", render: dE }, fE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function pE(e, t) {
  return y(), x("svg", fE, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
      p("path", { d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })
    ], -1)
  ]));
}
const Z1 = { name: "lucide-house", render: pE }, hE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function gE(e, t) {
  return y(), x("svg", hE, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2"
      }),
      p("circle", {
        cx: "9",
        cy: "9",
        r: "2"
      }),
      p("path", { d: "m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
    ], -1)
  ]));
}
const W1 = { name: "lucide-image", render: gE }, mE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function vE(e, t) {
  return y(), x("svg", mE, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M22 12h-6l-2 3h-4l-2-3H2" }),
      p("path", { d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11" })
    ], -1)
  ]));
}
const G1 = { name: "lucide-inbox", render: vE }, _E = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function bE(e, t) {
  return y(), x("svg", _E, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "M12 16v-4m0-4h.01" })
    ], -1)
  ]));
}
const qc = { name: "lucide-info", render: bE }, yE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function wE(e, t) {
  return y(), x("svg", yE, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }),
      p("circle", {
        cx: "16.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
const K1 = { name: "lucide-key-round", render: wE }, kE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function CE(e, t) {
  return y(), x("svg", kE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m5 8l6 6m-7 0l6-6l2-3M2 5h12M7 2h1m14 20l-5-10l-5 10m2-4h6"
    }, null, -1)
  ]));
}
const X1 = { name: "lucide-languages", render: CE }, xE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function SE(e, t) {
  return y(), x("svg", xE, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }),
      p("path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }),
      p("path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" })
    ], -1)
  ]));
}
const Y1 = { name: "lucide-layers", render: SE }, EE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function AE(e, t) {
  return y(), x("svg", EE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4"
    }, null, -1)
  ]));
}
const J1 = { name: "lucide-lightbulb", render: AE }, $E = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ME(e, t) {
  return y(), x("svg", $E, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
      p("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
    ], -1)
  ]));
}
const Q1 = { name: "lucide-link", render: ME }, TE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function IE(e, t) {
  return y(), x("svg", TE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13"
    }, null, -1)
  ]));
}
const eg = { name: "lucide-list", render: IE }, LE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function OE(e, t) {
  return y(), x("svg", LE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m3 17l2 2l4-4M3 7l2 2l4-4m4 1h8m-8 6h8m-8 6h8"
    }, null, -1)
  ]));
}
const tg = { name: "lucide-list-checks", render: OE }, RE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function PE(e, t) {
  return y(), x("svg", RE, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2"
      }),
      p("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
    ], -1)
  ]));
}
const ng = { name: "lucide-lock", render: PE }, BE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function zE(e, t) {
  return y(), x("svg", BE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
    }, null, -1)
  ]));
}
const rg = { name: "lucide-log-in", render: zE }, DE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function NE(e, t) {
  return y(), x("svg", DE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
    }, null, -1)
  ]));
}
const og = { name: "lucide-log-out", render: NE }, qE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function FE(e, t) {
  return y(), x("svg", qE, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }),
      p("rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2"
      })
    ], -1)
  ]));
}
const sg = { name: "lucide-mail", render: FE }, jE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function HE(e, t) {
  return y(), x("svg", jE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3"
    }, null, -1)
  ]));
}
const ig = { name: "lucide-maximize", render: HE }, VE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function UE(e, t) {
  return y(), x("svg", VE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6"
    }, null, -1)
  ]));
}
const ag = { name: "lucide-maximize-2", render: UE }, ZE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function WE(e, t) {
  return y(), x("svg", ZE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 12h16M4 18h16M4 6h16"
    }, null, -1)
  ]));
}
const cg = { name: "lucide-menu", render: WE }, GE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function KE(e, t) {
  return y(), x("svg", GE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
    }, null, -1)
  ]));
}
const lg = { name: "lucide-message-circle", render: KE }, XE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YE(e, t) {
  return y(), x("svg", XE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zm4 0h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
    }, null, -1)
  ]));
}
const ug = { name: "lucide-messages-square", render: YE }, JE = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function QE(e, t) {
  return y(), x("svg", JE, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 13v8m0-18v3M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
    }, null, -1)
  ]));
}
const dg = { name: "lucide-milestone", render: QE }, eA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function tA(e, t) {
  return y(), x("svg", eA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m14 10l7-7m-1 7h-6V4M3 21l7-7m-6 0h6v6"
    }, null, -1)
  ]));
}
const nA = { name: "lucide-minimize-2", render: tA }, rA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function oA(e, t) {
  return y(), x("svg", rA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.586 12.586L19 19M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
    }, null, -1)
  ]));
}
const fg = { name: "lucide-mouse-pointer", render: oA }, sA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function iA(e, t) {
  return y(), x("svg", sA, t[0] || (t[0] = [
    Fn('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="6" height="6" x="16" y="16" rx="1"></rect><rect width="6" height="6" x="2" y="16" rx="1"></rect><rect width="6" height="6" x="9" y="2" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g>', 1)
  ]));
}
const pg = { name: "lucide-network", render: iA }, aA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cA(e, t) {
  return y(), x("svg", aA, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 22v-9m3.17-10.79a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.66 1.66 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }),
      p("path", { d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }),
      p("path", { d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.64 1.64 0 0 0 1.63 0z" })
    ], -1)
  ]));
}
const hg = { name: "lucide-package-open", render: cA }, lA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function uA(e, t) {
  return y(), x("svg", lA, t[0] || (t[0] = [
    Fn('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></g>', 1)
  ]));
}
const gg = { name: "lucide-palette", render: uA }, dA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function fA(e, t) {
  return y(), x("svg", dA, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "4",
        height: "16",
        x: "14",
        y: "4",
        rx: "1"
      }),
      p("rect", {
        width: "4",
        height: "16",
        x: "6",
        y: "4",
        rx: "1"
      })
    ], -1)
  ]));
}
const mg = { name: "lucide-pause", render: fA }, pA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function hA(e, t) {
  return y(), x("svg", pA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }, null, -1)
  ]));
}
const vg = { name: "lucide-pen", render: hA }, gA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function mA(e, t) {
  return y(), x("svg", gA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"
    }, null, -1)
  ]));
}
const _g = { name: "lucide-pencil", render: mA }, vA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _A(e, t) {
  return y(), x("svg", vA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4a1 1 0 0 1 1 1z"
    }, null, -1)
  ]));
}
const bg = { name: "lucide-pin", render: _A }, bA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function yA(e, t) {
  return y(), x("svg", bA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 3l14 9l-14 9z"
    }, null, -1)
  ]));
}
const yg = { name: "lucide-play", render: yA }, wA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function kA(e, t) {
  return y(), x("svg", wA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 22v-5M9 8V2m6 6V2m3 6v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
    }, null, -1)
  ]));
}
const wg = { name: "lucide-plug", render: kA }, CA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function xA(e, t) {
  return y(), x("svg", CA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 12h14m-7-7v14"
    }, null, -1)
  ]));
}
const kg = { name: "lucide-plus", render: xA }, SA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function EA(e, t) {
  return y(), x("svg", SA, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2s-2 1-2 2s2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }),
      p("path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6" })
    ], -1)
  ]));
}
const Cg = { name: "lucide-pocket-knife", render: EA }, AA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $A(e, t) {
  return y(), x("svg", AA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v10m6.4-5.4a9 9 0 1 1-12.77.04"
    }, null, -1)
  ]));
}
const xg = { name: "lucide-power", render: $A }, MA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function TA(e, t) {
  return y(), x("svg", MA, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "m15 14l5-5l-5-5" }),
      p("path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" })
    ], -1)
  ]));
}
const Sg = { name: "lucide-redo-2", render: TA }, IA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function LA(e, t) {
  return y(), x("svg", IA, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" }),
      p("path", { d: "M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" }),
      p("path", { d: "M8 16H3v5" })
    ], -1)
  ]));
}
const Vo = { name: "lucide-refresh-cw", render: LA }, OA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function RA(e, t) {
  return y(), x("svg", OA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 7V4h16v3M5 20h6m2-16L8 20m7-5l5 5m0-5l-5 5"
    }, null, -1)
  ]));
}
const Eg = { name: "lucide-remove-formatting", render: RA }, PA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function BA(e, t) {
  return y(), x("svg", PA, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" }),
      p("circle", {
        cx: "5",
        cy: "19",
        r: "1"
      })
    ], -1)
  ]));
}
const Ag = { name: "lucide-rss", render: BA }, zA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function DA(e, t) {
  return y(), x("svg", zA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 10a7.31 7.31 0 0 0 10 10Zm5 5l3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"
    }, null, -1)
  ]));
}
const $g = { name: "lucide-satellite-dish", render: DA }, NA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function qA(e, t) {
  return y(), x("svg", NA, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }),
      p("path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7" })
    ], -1)
  ]));
}
const Mg = { name: "lucide-save", render: qA }, FA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function jA(e, t) {
  return y(), x("svg", FA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h2c2 0 5-1 7-2c2 1 5 2 7 2h2"
    }, null, -1)
  ]));
}
const Tg = { name: "lucide-scale", render: jA }, HA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function VA(e, t) {
  return y(), x("svg", HA, t[0] || (t[0] = [
    Fn('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g>', 1)
  ]));
}
const Fc = { name: "lucide-scissors", render: VA }, UA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function ZA(e, t) {
  return y(), x("svg", UA, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "m21 21l-4.34-4.34" }),
      p("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      })
    ], -1)
  ]));
}
const Ig = { name: "lucide-search", render: ZA }, WA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function GA(e, t) {
  return y(), x("svg", WA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
    }, null, -1)
  ]));
}
const Lg = { name: "lucide-send", render: GA }, KA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function XA(e, t) {
  return y(), x("svg", KA, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2"
      }),
      p("rect", {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2"
      }),
      p("path", { d: "M6 6h.01M6 18h.01" })
    ], -1)
  ]));
}
const Og = { name: "lucide-server", render: XA }, YA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function JA(e, t) {
  return y(), x("svg", YA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
    }, null, -1)
  ]));
}
const Rg = { name: "lucide-share", render: JA }, QA = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function e$(e, t) {
  return y(), x("svg", QA, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M21 4h-7m-4 0H3m18 8h-9m-4 0H3m18 8h-5m-4 0H3M14 2v4m-6 4v4m8 4v4"
    }, null, -1)
  ]));
}
const Pg = { name: "lucide-sliders-horizontal", render: e$ }, t$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function n$(e, t) {
  return y(), x("svg", t$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" })
    ], -1)
  ]));
}
const Bg = { name: "lucide-smile", render: n$ }, r$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function o$(e, t) {
  return y(), x("svg", r$, t[0] || (t[0] = [
    p("rect", {
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
const zg = { name: "lucide-square", render: o$ }, s$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function i$(e, t) {
  return y(), x("svg", s$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      p("path", { d: "m9 12l2 2l4-4" })
    ], -1)
  ]));
}
const Dg = { name: "lucide-square-check", render: i$ }, a$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function c$(e, t) {
  return y(), x("svg", a$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
      p("path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" })
    ], -1)
  ]));
}
const Ng = { name: "lucide-square-pen", render: c$ }, l$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function u$(e, t) {
  return y(), x("svg", l$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      p("path", { d: "M8 12h8m-4-4v8" })
    ], -1)
  ]));
}
const qg = { name: "lucide-square-plus", render: u$ }, d$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function f$(e, t) {
  return y(), x("svg", d$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }),
      p("path", { d: "M15 3v4a2 2 0 0 0 2 2h4" })
    ], -1)
  ]));
}
const Fg = { name: "lucide-sticky-note", render: f$ }, p$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function h$(e, t) {
  return y(), x("svg", p$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }),
      p("path", { d: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" })
    ], -1)
  ]));
}
const jg = { name: "lucide-sun", render: h$ }, g$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function m$(e, t) {
  return y(), x("svg", g$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M12 3v18" }),
      p("rect", {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2"
      }),
      p("path", { d: "M3 9h18M3 15h18" })
    ], -1)
  ]));
}
const Hg = { name: "lucide-table", render: m$ }, v$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function _$(e, t) {
  return y(), x("svg", v$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "m15 5l6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }),
      p("path", { d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" }),
      p("circle", {
        cx: "6.5",
        cy: "9.5",
        r: ".5",
        fill: "currentColor"
      })
    ], -1)
  ]));
}
const Vg = { name: "lucide-tags", render: _$ }, b$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function y$(e, t) {
  return y(), x("svg", b$, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 19h8M4 17l6-6l-6-6"
    }, null, -1)
  ]));
}
const Ug = { name: "lucide-terminal", render: y$ }, w$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function k$(e, t) {
  return y(), x("svg", w$, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M17 14V2M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88"
    }, null, -1)
  ]));
}
const Zg = { name: "lucide-thumbs-down", render: k$ }, C$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function x$(e, t) {
  return y(), x("svg", C$, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88"
    }, null, -1)
  ]));
}
const Wg = { name: "lucide-thumbs-up", render: x$ }, S$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function E$(e, t) {
  return y(), x("svg", S$, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"
    }, null, -1)
  ]));
}
const Gg = { name: "lucide-trash-2", render: E$ }, A$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function $$(e, t) {
  return y(), x("svg", A$, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m17 14l3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7zm-5 8v-3"
    }, null, -1)
  ]));
}
const Kg = { name: "lucide-tree-pine", render: $$ }, M$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function T$(e, t) {
  return y(), x("svg", M$, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01"
    }, null, -1)
  ]));
}
const Xg = { name: "lucide-triangle-alert", render: T$ }, I$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function L$(e, t) {
  return y(), x("svg", I$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M9 14L4 9l5-5" }),
      p("path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" })
    ], -1)
  ]));
}
const Yg = { name: "lucide-undo-2", render: L$ }, O$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function R$(e, t) {
  return y(), x("svg", O$, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07a5.006 5.006 0 0 0-6.95 0l-1.72 1.71m-6.58 6.57l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07a5.006 5.006 0 0 0 6.95 0l1.71-1.71M8 2v3M2 8h3m11 11v3m3-6h3"
    }, null, -1)
  ]));
}
const Jg = { name: "lucide-unlink", render: R$ }, P$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function B$(e, t) {
  return y(), x("svg", P$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
      p("circle", {
        cx: "12",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const Qg = { name: "lucide-user", render: B$ }, z$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function D$(e, t) {
  return y(), x("svg", z$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      p("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const em = { name: "lucide-user-check", render: D$ }, N$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function q$(e, t) {
  return y(), x("svg", N$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "10",
        cy: "7",
        r: "4"
      }),
      p("path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2m12-5.5V14a2 2 0 0 1 4 0v1.5" }),
      p("rect", {
        width: "8",
        height: "5",
        x: "13",
        y: "16",
        rx: ".899"
      })
    ], -1)
  ]));
}
const tm = { name: "lucide-user-lock", render: q$ }, F$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function j$(e, t) {
  return y(), x("svg", F$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "12",
        cy: "8",
        r: "5"
      }),
      p("path", { d: "M20 21a8 8 0 0 0-16 0" })
    ], -1)
  ]));
}
const nm = { name: "lucide-user-round", render: j$ }, H$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function V$(e, t) {
  return y(), x("svg", H$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" }),
      p("circle", {
        cx: "9",
        cy: "7",
        r: "4"
      })
    ], -1)
  ]));
}
const rm = { name: "lucide-users", render: V$ }, U$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function Z$(e, t) {
  return y(), x("svg", U$, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8 21s-4-3-4-9s4-9 4-9m8 0s4 3 4 9s-4 9-4 9M15 9l-6 6m0-6l6 6"
    }, null, -1)
  ]));
}
const om = { name: "lucide-variable", render: Z$ }, W$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function G$(e, t) {
  return y(), x("svg", W$, t[0] || (t[0] = [
    Fn('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m7.9 7.9l2.7 2.7"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle><path d="m13.4 10.6l2.7-2.7"></path><circle cx="7.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m7.9 16.1l2.7-2.7"></path><circle cx="16.5" cy="16.5" r=".5" fill="currentColor"></circle><path d="m13.4 13.4l2.7 2.7"></path><circle cx="12" cy="12" r="2"></circle></g>', 1)
  ]));
}
const sm = { name: "lucide-vault", render: G$ }, K$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function X$(e, t) {
  return y(), x("svg", K$, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("path", { d: "m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
      p("rect", {
        width: "14",
        height: "12",
        x: "2",
        y: "6",
        rx: "2"
      })
    ], -1)
  ]));
}
const im = { name: "lucide-video", render: X$ }, Y$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function J$(e, t) {
  return y(), x("svg", Y$, t[0] || (t[0] = [
    Fn('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="4.5" r="2.5"></circle><path d="m10.2 6.3l-3.9 3.9"></path><circle cx="4.5" cy="12" r="2.5"></circle><path d="M7 12h10"></path><circle cx="19.5" cy="12" r="2.5"></circle><path d="m13.8 17.7l3.9-3.9"></path><circle cx="12" cy="19.5" r="2.5"></circle></g>', 1)
  ]));
}
const am = { name: "lucide-waypoints", render: J$ }, Q$ = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function eM(e, t) {
  return y(), x("svg", Q$, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    }, null, -1)
  ]));
}
const cm = { name: "lucide-wrench", render: eM }, tM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function nM(e, t) {
  return y(), x("svg", tM, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M18 6L6 18M6 6l12 12"
    }, null, -1)
  ]));
}
const jc = { name: "lucide-x", render: nM }, rM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function oM(e, t) {
  return y(), x("svg", rM, t[0] || (t[0] = [
    p("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
    }, null, -1)
  ]));
}
const lm = { name: "lucide-zap", render: oM }, sM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function iM(e, t) {
  return y(), x("svg", sM, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      p("path", { d: "m21 21l-4.35-4.35M11 8v6m-3-3h6" })
    ], -1)
  ]));
}
const um = { name: "lucide-zoom-in", render: iM }, aM = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function cM(e, t) {
  return y(), x("svg", aM, t[0] || (t[0] = [
    p("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      p("circle", {
        cx: "11",
        cy: "11",
        r: "8"
      }),
      p("path", { d: "m21 21l-4.35-4.35M8 11h6" })
    ], -1)
  ]));
}
const dm = { name: "lucide-zoom-out", render: cM }, Td = {
  // customIcons
  variable: om,
  "pop-out": f2,
  triangle: x2,
  "status-completed": m2,
  "status-waiting": y2,
  "status-error": v2,
  "status-canceled": g2,
  "status-new": _2,
  "status-unknown": b2,
  "status-warning": w2,
  "vector-square": S2,
  schema: p2,
  json: d2,
  binary: l2,
  text: k2,
  toolbox: C2,
  spinner: h2,
  xmark: jc,
  // fontAwesomeIcons
  "caret-up": Ho,
  "caret-down": qo,
  "caret-right": jo,
  "caret-left": Fo,
  "folder-plus": T1,
  share: Rg,
  "user-check": em,
  "check-double": U2,
  "exclamation-circle": K2,
  circle: G2,
  "eye-slash": _1,
  folder: $1,
  "minus-circle": J2,
  adjust: l1,
  refresh: Vo,
  vault: sm,
  "angle-double-left": Z2,
  "angle-down": qo,
  "angle-left": Fo,
  "angle-right": jo,
  "angle-up": Ho,
  archive: A2,
  "arrow-left": Bc,
  "arrow-right": T2,
  "arrow-up": I2,
  "arrow-down": $2,
  at: L2,
  ban: O2,
  "balance-scale-left": Tg,
  bars: cg,
  bolt: lm,
  book: P2,
  "box-open": hg,
  bug: N2,
  brain: D2,
  calculator: q2,
  calendar: F2,
  "chart-bar": H2,
  check: V2,
  "check-circle": X2,
  "check-square": Dg,
  "chevron-left": Fo,
  "chevron-right": jo,
  "chevron-down": qo,
  "chevron-up": Ho,
  code: c1,
  "code-branch": R1,
  cog: Dc,
  cogs: Dc,
  comment: lg,
  comments: ug,
  "clipboard-list": o1,
  clock: s1,
  clone: u1,
  cloud: i1,
  "cloud-download-alt": a1,
  compress: W2,
  copy: S1,
  cube: z2,
  cut: Fc,
  database: d1,
  "dot-circle": Y2,
  "grip-lines-vertical": u2,
  "grip-vertical": D1,
  edit: Ng,
  "ellipsis-h": p1,
  "ellipsis-v": h1,
  envelope: sg,
  equals: g1,
  eye: v1,
  "exclamation-triangle": Xg,
  expand: ig,
  "expand-alt": ag,
  "external-link-alt": m1,
  "exchange-alt": M2,
  file: b1,
  "file-alt": Nc,
  "file-archive": y1,
  "file-code": w1,
  "file-download": k1,
  "file-export": x1,
  "file-import": C1,
  "file-pdf": Nc,
  filter: I1,
  fingerprint: E1,
  flask: A1,
  "folder-open": M1,
  font: j2,
  gift: O1,
  globe: P1,
  "globe-americas": f1,
  "graduation-cap": B1,
  "hand-holding-usd": N1,
  "hand-scissors": Fc,
  handshake: q1,
  "hand-point-left": Bc,
  hashtag: H1,
  hdd: F1,
  history: V1,
  home: Z1,
  hourglass: U1,
  image: W1,
  inbox: G1,
  info: qc,
  "info-circle": qc,
  key: K1,
  language: X1,
  "layer-group": Y1,
  link: Q1,
  list: eg,
  lightbulb: J1,
  lock: ng,
  "map-signs": dg,
  "mouse-pointer": fg,
  "network-wired": pg,
  palette: gg,
  pause: mg,
  "pause-circle": Q2,
  pen: vg,
  "pencil-alt": _g,
  play: yg,
  "play-circle": e1,
  plug: wg,
  plus: kg,
  "plus-circle": t1,
  "plus-square": qg,
  "project-diagram": am,
  question: zc,
  "question-circle": zc,
  redo: Sg,
  "remove-format": Eg,
  robot: B2,
  rss: Ag,
  save: Mg,
  "satellite-dish": $g,
  search: Ig,
  "search-minus": dm,
  "search-plus": um,
  server: Og,
  screwdriver: Cg,
  smile: Bg,
  "sign-in-alt": rg,
  "sign-out-alt": og,
  "sliders-h": Pg,
  "sticky-note": Fg,
  stop: zg,
  stream: E2,
  sun: jg,
  sync: Vo,
  "sync-alt": Vo,
  table: Hg,
  tags: Vg,
  tasks: tg,
  terminal: Ug,
  "th-large": z1,
  thumbtack: bg,
  "thumbs-down": Zg,
  "thumbs-up": Wg,
  times: jc,
  "times-circle": r1,
  tools: cm,
  trash: Gg,
  undo: Yg,
  unlink: Jg,
  user: Qg,
  "user-circle": n1,
  "user-friends": nm,
  users: rm,
  video: im,
  tree: Kg,
  "user-lock": tm,
  gem: L1,
  download: j1,
  "power-off": xg,
  "paper-plane": Lg,
  bell: R2
}, Id = {
  // custom icons
  // NOTE: ensure to replace any colors with "currentColor" in SVG
  "bolt-filled": Yx,
  "grip-lines-vertical": u2,
  variable: om,
  "pop-out": f2,
  triangle: x2,
  "status-completed": m2,
  "status-waiting": y2,
  "status-error": v2,
  "status-canceled": g2,
  "status-new": _2,
  "status-unknown": b2,
  "status-warning": w2,
  "vector-square": S2,
  schema: p2,
  json: d2,
  binary: l2,
  text: k2,
  toolbox: C2,
  spinner: h2,
  // lucide
  "align-right": E2,
  archive: A2,
  "arrow-down": $2,
  "arrow-left": Bc,
  "arrow-left-right": M2,
  "arrow-right": T2,
  "arrow-right-from-line": f7,
  "arrow-right-to-line": g7,
  "arrow-up": I2,
  "at-sign": L2,
  ban: O2,
  bell: R2,
  book: P2,
  bot: B2,
  box: z2,
  brain: D2,
  bug: N2,
  calculator: q2,
  calendar: F2,
  "case-upper": j2,
  "chart-column-decreasing": H2,
  check: V2,
  "check-check": U2,
  "chevron-down": qo,
  "chevron-left": Fo,
  "chevron-right": jo,
  "chevron-up": Ho,
  "chevrons-left": Z2,
  "chevrons-down-up": n9,
  "chevrons-up-down": W2,
  circle: G2,
  "circle-alert": K2,
  "circle-check": X2,
  "circle-dot": Y2,
  "circle-help": zc,
  "circle-minus": J2,
  "circle-pause": Q2,
  "circle-play": e1,
  "circle-plus": t1,
  "circle-user-round": n1,
  "circle-x": r1,
  "clipboard-list": o1,
  clock: s1,
  cloud: i1,
  "cloud-download": a1,
  code: c1,
  cog: Dc,
  contrast: l1,
  copy: u1,
  crosshair: W9,
  database: d1,
  earth: f1,
  ellipsis: p1,
  "ellipsis-vertical": h1,
  equal: g1,
  "external-link": m1,
  eye: v1,
  "eye-off": _1,
  file: b1,
  "file-archive": y1,
  "file-code": w1,
  "file-down": k1,
  "file-input": C1,
  "file-output": x1,
  "file-text": Nc,
  files: S1,
  fingerprint: E1,
  "flask-conical": A1,
  folder: $1,
  "folder-open": M1,
  "folder-plus": T1,
  funnel: I1,
  gem: L1,
  gift: O1,
  "git-branch": R1,
  globe: P1,
  "graduation-cap": B1,
  "grid-2x2": z1,
  "grip-vertical": D1,
  "hand-coins": N1,
  handshake: q1,
  "hard-drive": F1,
  "hard-drive-download": j1,
  hash: H1,
  history: V1,
  hourglass: U1,
  house: Z1,
  image: W1,
  inbox: G1,
  info: qc,
  "key-round": K1,
  languages: X1,
  layers: Y1,
  lightbulb: J1,
  link: Q1,
  list: eg,
  "list-checks": tg,
  lock: ng,
  "log-in": rg,
  "log-out": og,
  mail: sg,
  "minimize-2": nA,
  maximize: ig,
  "maximize-2": ag,
  menu: cg,
  "message-circle": lg,
  "messages-square": ug,
  milestone: dg,
  "mouse-pointer": fg,
  network: pg,
  "package-open": hg,
  palette: gg,
  pause: mg,
  pen: vg,
  pencil: _g,
  pin: bg,
  play: yg,
  plug: wg,
  plus: kg,
  "pocket-knife": Cg,
  power: xg,
  "redo-2": Sg,
  "refresh-cw": Vo,
  "remove-formatting": Eg,
  rss: Ag,
  "satellite-dish": $g,
  save: Mg,
  scale: Tg,
  scissors: Fc,
  search: Ig,
  send: Lg,
  server: Og,
  share: Rg,
  "sliders-horizontal": Pg,
  smile: Bg,
  square: zg,
  "square-check": Dg,
  "square-pen": Ng,
  "square-plus": qg,
  "sticky-note": Fg,
  sun: jg,
  table: Hg,
  tags: Vg,
  terminal: Ug,
  "thumbs-down": Zg,
  "thumbs-up": Wg,
  "trash-2": Gg,
  "tree-pine": Kg,
  "triangle-alert": Xg,
  "undo-2": Yg,
  unlink: Jg,
  user: Qg,
  "user-check": em,
  "user-lock": tm,
  "user-round": nm,
  users: rm,
  vault: sm,
  video: im,
  waypoints: am,
  wrench: cm,
  x: jc,
  zap: lm,
  "zoom-in": um,
  "zoom-out": dm
}, lM = /* @__PURE__ */ H({
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
    const t = e, n = us(), r = T(() => {
      const a = [];
      return t.spin && a.push("spin"), t.strokeWidth && a.push("strokeWidth"), ["n8n-icon", ...a.map((c) => n[c])];
    }), s = {
      xsmall: 10,
      small: 12,
      medium: 14,
      large: 16,
      xlarge: 20
    }, o = T(() => {
      let a = "1em";
      return t.size && (a = `${typeof t.size == "number" ? t.size : s[t.size]}px`), {
        height: a,
        width: a
      };
    }), i = T(() => {
      const a = {};
      return t.color && (a.color = `var(--color-${t.color})`), t.strokeWidth && (a["--n8n-icon-stroke-width"] = `${t.strokeWidth}px`), a;
    });
    return (a, c) => _(Id)[a.icon] ?? _(Td)[a.icon] ? (y(), X(lt(
      _(Id)[a.icon] ?? _(Td)[a.icon]
    ), {
      key: 0,
      class: j(r.value),
      "aria-hidden": "true",
      focusable: "false",
      role: "img",
      height: o.value.height,
      width: o.value.width,
      "data-icon": t.icon,
      style: qe(i.value)
    }, null, 8, ["class", "height", "width", "data-icon", "style"])) : Q("", !0);
  }
}), uM = "_strokeWidth_fqxq5_1", dM = "_spin_fqxq5_6", fM = {
  strokeWidth: uM,
  spin: dM
}, pM = {
  $style: fM
}, Il = /* @__PURE__ */ qt(lM, [["__cssModules", pM]]), hM = { class: "n8n-spinner" }, gM = {
  key: 0,
  class: "lds-ring"
}, mM = /* @__PURE__ */ H({
  name: "N8nSpinner",
  __name: "Spinner",
  props: {
    size: { default: "medium" },
    type: { default: "dots" }
  },
  setup(e) {
    return (t, n) => (y(), x("span", hM, [
      t.type === "ring" ? (y(), x("div", gM, n[0] || (n[0] = [
        p("div", null, null, -1),
        p("div", null, null, -1),
        p("div", null, null, -1),
        p("div", null, null, -1)
      ]))) : (y(), X(_(Il), {
        key: 1,
        icon: "spinner",
        size: t.size,
        spin: ""
      }, null, 8, ["size"]))
    ]));
  }
}), vM = { key: 1 }, _M = /* @__PURE__ */ H({
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
    const t = us(), n = lo(), r = e;
    el(() => {
      r.element === "a" && !r.href && console.error("n8n-button:href is required for link buttons");
    });
    const s = T(() => r.loading ? "true" : void 0), o = T(() => r.disabled ? "true" : void 0), i = T(() => r.disabled || r.loading), a = T(
      () => r.iconSize ?? (r.size === "xmini" || r.size === "mini" ? "xsmall" : r.size)
    ), c = T(() => `button ${t.button} ${t[r.type]}${r.size ? ` ${t[r.size]}` : ""}${r.outline ? ` ${t.outline}` : ""}${r.loading ? ` ${t.loading}` : ""}${r.float ? ` ${t[`float-${r.float}`]}` : ""}${r.text ? ` ${t.text}` : ""}${r.disabled ? ` ${t.disabled}` : ""}${r.block ? ` ${t.block}` : ""}${r.active ? ` ${t.active}` : ""}${r.icon || r.loading ? ` ${t.withIcon}` : ""}${r.square ? ` ${t.square}` : ""}`);
    return (u, d) => (y(), X(lt(u.element), je({
      class: c.value,
      disabled: i.value,
      "aria-disabled": o.value,
      "aria-busy": s.value,
      href: u.href,
      "aria-live": "polite"
    }, {
      ..._(n),
      ...r.nativeType ? { type: r.nativeType } : {}
    }), {
      default: Y(() => [
        u.loading || u.icon ? (y(), x("span", {
          key: 0,
          class: j(_(t).icon)
        }, [
          u.loading ? (y(), X(_(mM), {
            key: 0,
            size: a.value
          }, null, 8, ["size"])) : u.icon ? (y(), X(_(Il), {
            key: 1,
            icon: u.icon,
            size: a.value
          }, null, 8, ["icon", "size"])) : Q("", !0)
        ], 2)) : Q("", !0),
        u.label ? (y(), x("span", vM, ve(u.label), 1)) : u.$slots.default ? ne(u.$slots, "default", { key: 2 }) : Q("", !0)
      ]),
      _: 3
    }, 16, ["class", "disabled", "aria-disabled", "aria-busy", "href"]));
  }
}), bM = "_button_mdqve_229", yM = "_active_mdqve_263", wM = "_disabled_mdqve_281", kM = "_loading_mdqve_289", CM = "_secondary_mdqve_312", xM = "_tertiary_mdqve_334", SM = "_success_mdqve_356", EM = "_warning_mdqve_378", AM = "_danger_mdqve_400", $M = "_xmini_mdqve_425", MM = "_square_mdqve_430", TM = "_mini_mdqve_435", IM = "_small_mdqve_445", LM = "_medium_mdqve_455", OM = "_large_mdqve_465", RM = "_xlarge_mdqve_470", PM = "_outline_mdqve_483", BM = "_primary_mdqve_487", zM = "_text_mdqve_524", DM = "_transparent_mdqve_592", NM = "_withIcon_mdqve_597", qM = "_icon_mdqve_603", FM = "_block_mdqve_612", jM = {
  button: bM,
  active: yM,
  disabled: wM,
  loading: kM,
  secondary: CM,
  tertiary: xM,
  success: SM,
  warning: EM,
  danger: AM,
  xmini: $M,
  square: MM,
  mini: TM,
  small: IM,
  medium: LM,
  large: OM,
  xlarge: RM,
  outline: PM,
  primary: BM,
  text: zM,
  transparent: DM,
  withIcon: NM,
  icon: qM,
  block: FM,
  "float-left": "_float-left_mdqve_616",
  "float-right": "_float-right_mdqve_620"
}, HM = {
  $style: jM
}, VM = /* @__PURE__ */ qt(_M, [["__cssModules", HM]]);
({
  ...so.props
});
const UM = /* @__PURE__ */ H({
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
    const t = e, n = us(), r = T(() => {
      const s = [];
      return t.align && s.push(`align-${t.align}`), t.color && s.push(t.color), t.compact && s.push("compact"), s.push(`size-${t.size}`), s.push(t.bold ? "bold" : "regular"), s.map((o) => n[o]);
    });
    return (s, o) => (y(), X(lt(s.tag), je({
      class: ["n8n-text", ...r.value]
    }, s.$attrs), {
      default: Y(() => [
        ne(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
}), ZM = "_bold_ushv1_1", WM = "_regular_ushv1_5", GM = "_compact_ushv1_34", KM = "_primary_ushv1_38", XM = "_secondary_ushv1_42", YM = "_danger_ushv1_62", JM = "_success_ushv1_66", QM = "_warning_ushv1_70", eT = {
  bold: ZM,
  regular: WM,
  "size-xlarge": "_size-xlarge_ushv1_9",
  "size-large": "_size-large_ushv1_14",
  "size-medium": "_size-medium_ushv1_19",
  "size-small": "_size-small_ushv1_24",
  "size-xsmall": "_size-xsmall_ushv1_29",
  compact: GM,
  primary: KM,
  secondary: XM,
  "text-dark": "_text-dark_ushv1_46",
  "text-base": "_text-base_ushv1_50",
  "text-light": "_text-light_ushv1_54",
  "text-xlight": "_text-xlight_ushv1_58",
  danger: YM,
  success: JM,
  warning: QM,
  "foreground-dark": "_foreground-dark_ushv1_74",
  "foreground-xdark": "_foreground-xdark_ushv1_78",
  "align-left": "_align-left_ushv1_82",
  "align-right": "_align-right_ushv1_86",
  "align-center": "_align-center_ushv1_90"
}, tT = {
  $style: eT
}, fm = /* @__PURE__ */ qt(UM, [["__cssModules", tT]]), nT = { key: 0 }, rT = { key: 1 }, oT = /* @__PURE__ */ H({
  __name: "Loading",
  props: {
    animated: { type: Boolean, default: !0 },
    loading: { type: Boolean, default: !0 },
    rows: { default: 1 },
    cols: { default: 0 },
    shrinkLast: { type: Boolean, default: !0 },
    variant: { default: "p" }
  },
  setup(e) {
    return (t, n) => (y(), X(_(Gx), {
      loading: t.loading,
      animated: t.animated,
      class: j(["n8n-loading", `n8n-loading-${t.variant}`])
    }, Xr({ _: 2 }, [
      t.cols ? {
        name: "template",
        fn: Y(() => [
          (y(!0), x(Pe, null, Je(t.cols, (r) => (y(), X(_(qr), { key: r }))), 128))
        ]),
        key: "0"
      } : {
        name: "template",
        fn: Y(() => [
          t.variant === "h1" ? (y(), x("div", nT, [
            (y(!0), x(Pe, null, Je(t.rows, (r, s) => (y(), x("div", {
              key: s,
              class: j({
                [t.$style.h1Last]: r === t.rows && t.rows > 1 && t.shrinkLast
              })
            }, [
              ue(_(qr), { variant: t.variant }, null, 8, ["variant"])
            ], 2))), 128))
          ])) : t.variant === "p" ? (y(), x("div", rT, [
            (y(!0), x(Pe, null, Je(t.rows, (r, s) => (y(), x("div", {
              key: s,
              class: j({
                [t.$style.pLast]: r === t.rows && t.rows > 1 && t.shrinkLast
              })
            }, [
              ue(_(qr), { variant: t.variant }, null, 8, ["variant"])
            ], 2))), 128))
          ])) : t.variant === "custom" ? (y(), x("div", {
            key: 2,
            class: j(t.$style.custom)
          }, [
            ue(_(qr))
          ], 2)) : (y(), X(_(qr), {
            key: 3,
            variant: t.variant
          }, null, 8, ["variant"]))
        ]),
        key: "1"
      }
    ]), 1032, ["loading", "animated", "class"]));
  }
}), sT = "_h1Last_1sdbr_1", iT = "_pLast_1sdbr_5", aT = "_custom_1sdbr_9", cT = {
  h1Last: sT,
  pLast: iT,
  custom: aT
}, lT = {
  $style: cT
}, uT = /* @__PURE__ */ qt(oT, [["__cssModules", lT]]), Tr = (e) => {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    t = (t << 5) - t + r, t = t & t;
  }
  return Math.abs(t);
}, pm = (e, t) => Math.floor(e / Math.pow(10, t) % 10), Hc = (e, t) => !(pm(e, t) % 2), ct = (e, t, n) => {
  const r = e % t;
  return n && pm(e, n) % 2 === 0 ? -r : r;
}, or = (e, t, n) => t[e % n], dT = (e) => {
  e.slice(0, 1) === "#" && (e = e.slice(1));
  const t = parseInt(e.substring(0, 2), 16), n = parseInt(e.substring(2, 4), 16), r = parseInt(e.substring(4, 6), 16);
  return (t * 299 + n * 587 + r * 114) / 1e3 >= 128 ? "#000000" : "#FFFFFF";
}, fT = 4, Vc = 80;
function pT(e, t) {
  const n = Tr(e), r = t && t.length;
  return Array.from({ length: fT }, (s, o) => ({
    color: or(n + o, t, r),
    translateX: ct(n * (o + 1), Vc / 2 - (o + 17), 1),
    translateY: ct(n * (o + 1), Vc / 2 - (o + 17), 2),
    rotate: ct(n * (o + 1), 360),
    isSquare: Hc(n, 2)
  }));
}
const hT = H({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    square: {
      type: Boolean,
      required: !1,
      default: !1
    },
    size: {
      type: Number,
      required: !0
    },
    title: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    return { properties: T(() => pT(e.name, e.colors)), SIZE: Vc };
  }
}), Ir = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, gT = ["viewBox", "width", "height"], mT = { key: 0 }, vT = ["width", "height"], _T = ["width", "height", "rx"], bT = { mask: "url(#mask__bauhaus)" }, yT = ["width", "height", "fill"], wT = ["x", "y", "width", "height", "fill", "transform"], kT = ["cx", "cy", "fill", "r", "transform"], CT = ["y1", "x2", "y2", "stroke", "transform"];
function xT(e, t, n, r, s, o) {
  return y(), x("svg", {
    viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    width: e.size,
    height: e.size
  }, [
    e.title ? (y(), x("title", mT, ve(e.name), 1)) : Q("", !0),
    p("mask", {
      id: "mask__bauhaus",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: e.SIZE,
      height: e.SIZE
    }, [
      p("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
      }, null, 8, _T)
    ], 8, vT),
    p("g", bT, [
      p("rect", {
        width: e.SIZE,
        height: e.SIZE,
        fill: e.properties[0].color
      }, null, 8, yT),
      p("rect", {
        x: (e.SIZE - 60) / 2,
        y: (e.SIZE - 20) / 2,
        width: e.SIZE,
        height: e.properties[1].isSquare ? e.SIZE : e.SIZE / 8,
        fill: e.properties[1].color,
        transform: `translate(${e.properties[1].translateX} ${e.properties[1].translateY}) rotate(${e.properties[1].rotate} ${e.SIZE / 2} ${e.SIZE / 2})`
      }, null, 8, wT),
      p("circle", {
        cx: e.SIZE / 2,
        cy: e.SIZE / 2,
        fill: e.properties[2].color,
        r: e.SIZE / 5,
        transform: `translate(${e.properties[2].translateX} ${e.properties[2].translateY})`
      }, null, 8, kT),
      p("line", {
        x1: 0,
        y1: e.SIZE / 2,
        x2: e.SIZE,
        y2: e.SIZE / 2,
        "stroke-width": 2,
        stroke: e.properties[3].color,
        transform: `translate(${e.properties[3].translateX} ${e.properties[3].translateY}) rotate(${e.properties[3].rotate} ${e.SIZE / 2} ${e.SIZE / 2})`
      }, null, 8, CT)
    ])
  ], 8, gT);
}
const ST = /* @__PURE__ */ Ir(hT, [["render", xT]]), hr = 36;
function ET(e, t) {
  const n = Tr(e), r = t && t.length, s = or(n, t, r), o = ct(n, 10, 1), i = o < 5 ? o + hr / 9 : o, a = ct(n, 10, 2), c = a < 5 ? a + hr / 9 : a;
  return {
    wrapperColor: s,
    faceColor: dT(s),
    backgroundColor: or(n + 13, t, r),
    wrapperTranslateX: i,
    wrapperTranslateY: c,
    wrapperRotate: ct(n, 360),
    wrapperScale: 1 + ct(n, hr / 12) / 10,
    isMouthOpen: Hc(n, 2),
    isCircle: Hc(n, 1),
    eyeSpread: ct(n, 5),
    mouthSpread: ct(n, 3),
    faceRotate: ct(n, 10, 3),
    faceTranslateX: i > hr / 6 ? i / 2 : ct(n, 8, 1),
    faceTranslateY: c > hr / 6 ? c / 2 : ct(n, 7, 2)
  };
}
const AT = H({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    square: {
      type: Boolean,
      required: !1,
      default: !1
    },
    size: {
      type: Number,
      required: !0
    },
    title: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    return { data: T(() => ET(e.name, e.colors)), SIZE: hr };
  }
}), $T = ["viewBox", "width", "height"], MT = { key: 0 }, TT = ["width", "height"], IT = ["width", "height", "rx"], LT = { mask: "url(#mask__beam)" }, OT = ["width", "height", "fill"], RT = ["width", "height", "transform", "fill", "rx"], PT = ["transform"], BT = ["d", "stroke"], zT = ["d", "fill"], DT = ["x", "width", "fill"], NT = ["x", "width", "fill"];
function qT(e, t, n, r, s, o) {
  return y(), x("svg", {
    viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    width: e.size,
    height: e.size
  }, [
    e.title ? (y(), x("title", MT, ve(e.name), 1)) : Q("", !0),
    p("mask", {
      id: "mask__beam",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: e.SIZE,
      height: e.SIZE
    }, [
      p("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
      }, null, 8, IT)
    ], 8, TT),
    p("g", LT, [
      p("rect", {
        width: e.SIZE,
        height: e.SIZE,
        fill: e.data.backgroundColor
      }, null, 8, OT),
      p("rect", {
        x: 0,
        y: 0,
        width: e.SIZE,
        height: e.SIZE,
        transform: `translate(${e.data.wrapperTranslateX} ${e.data.wrapperTranslateY}) rotate(${e.data.wrapperRotate} ${e.SIZE / 2} ${e.SIZE / 2}) scale(${e.data.wrapperScale})`,
        fill: e.data.wrapperColor,
        rx: e.data.isCircle ? e.SIZE : e.SIZE / 6
      }, null, 8, RT),
      p("g", {
        transform: `translate(${e.data.faceTranslateX} ${e.data.faceTranslateY}) rotate(${e.data.faceRotate} ${e.SIZE / 2} ${e.SIZE / 2})`
      }, [
        e.data.isMouthOpen ? (y(), x("path", {
          key: 0,
          d: `M15 ${19 + e.data.mouthSpread}c2 1
        4 1 6 0`,
          stroke: e.data.faceColor,
          fill: "none",
          "stroke-linecap": "round"
        }, null, 8, BT)) : (y(), x("path", {
          key: 1,
          d: `M13,${19 + e.data.mouthSpread} a1,0.75 0 0,0 10,0`,
          fill: e.data.faceColor
        }, null, 8, zT)),
        p("rect", {
          x: 14 - e.data.eyeSpread,
          y: 14,
          width: 1.5,
          height: 2,
          rx: 1,
          stroke: "none",
          fill: e.data.faceColor
        }, null, 8, DT),
        p("rect", {
          x: 20 + e.data.eyeSpread,
          y: 14,
          width: 1.5,
          height: 2,
          rx: 1,
          stroke: "none",
          fill: e.data.faceColor
        }, null, 8, NT)
      ], 8, PT)
    ])
  ], 8, $T);
}
const FT = /* @__PURE__ */ Ir(AT, [["render", qT]]), jT = 3, Uo = 80;
function HT(e, t) {
  const n = Tr(e), r = t && t.length;
  return Array.from({ length: jT }, (s, o) => ({
    color: or(n + o, t, r),
    translateX: ct(n * (o + 1), Uo / 10, 1),
    translateY: ct(n * (o + 1), Uo / 10, 2),
    scale: 1.2 + ct(n * (o + 1), Uo / 20) / 10,
    rotate: ct(n * (o + 1), 360, 1)
  }));
}
const VT = H({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    square: {
      type: Boolean,
      required: !1,
      default: !1
    },
    size: {
      type: Number,
      required: !0
    },
    title: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    return { properties: T(() => HT(e.name, e.colors)), SIZE: Uo };
  }
}), UT = (e) => (Zv("data-v-3c8b58b0"), e = e(), Wv(), e), ZT = ["viewBox", "width", "height"], WT = { key: 0 }, GT = ["width", "height"], KT = ["width", "height", "rx"], XT = { mask: "url(#mask__marble)" }, YT = ["width", "height", "fill"], JT = ["fill", "transform"], QT = ["fill", "transform"], eI = /* @__PURE__ */ UT(() => /* @__PURE__ */ p("defs", null, [
  /* @__PURE__ */ p("filter", {
    id: "prefix__filter0_f",
    filterUnits: "userSpaceOnUse",
    "color-interpolation-filters": "sRGB"
  }, [
    /* @__PURE__ */ p("feFlood", {
      "flood-opacity": 0,
      result: "BackgroundImageFix"
    }),
    /* @__PURE__ */ p("feBlend", {
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }),
    /* @__PURE__ */ p("feGaussianBlur", {
      stdDeviation: 7,
      result: "effect1_foregroundBlur"
    })
  ])
], -1));
function tI(e, t, n, r, s, o) {
  return y(), x("svg", {
    viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    width: e.size,
    height: e.size
  }, [
    e.title ? (y(), x("title", WT, ve(e.name), 1)) : Q("", !0),
    p("mask", {
      id: "mask__marble",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: e.SIZE,
      height: e.SIZE
    }, [
      p("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
      }, null, 8, KT)
    ], 8, GT),
    p("g", XT, [
      p("rect", {
        width: e.SIZE,
        height: e.SIZE,
        fill: e.properties[0].color
      }, null, 8, YT),
      p("path", {
        filter: "url(#prefix__filter0_f)",
        d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z",
        fill: e.properties[1].color,
        transform: `translate(${e.properties[1].translateX} ${e.properties[1].translateY}) rotate(${e.properties[1].rotate} ${e.SIZE / 2} ${e.SIZE / 2}) scale(${e.properties[2].scale})`
      }, null, 8, JT),
      p("path", {
        filter: "url(#prefix__filter0_f)",
        class: "mix-blend-overlay",
        d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z",
        fill: e.properties[2].color,
        transform: `translate(${e.properties[2].translateX} ${e.properties[2].translateY}) rotate(${e.properties[2].rotate} ${e.SIZE / 2} ${e.SIZE / 2}) scale(${e.properties[2].scale})`
      }, null, 8, QT)
    ]),
    eI
  ], 8, ZT);
}
const nI = /* @__PURE__ */ Ir(VT, [["render", tI], ["__scopeId", "data-v-3c8b58b0"]]), rI = 64, oI = 80;
function sI(e, t) {
  const n = Tr(e), r = t && t.length;
  return Array.from(
    { length: rI },
    (s, o) => or(n % o, t, r)
  );
}
const iI = H({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    square: {
      type: Boolean,
      required: !1,
      default: !1
    },
    size: {
      type: Number,
      required: !0
    },
    title: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    return { pixelColors: T(
      () => sI(e.name, e.colors)
    ), SIZE: oI };
  }
}), aI = ["viewBox", "width", "height"], cI = { key: 0 }, lI = ["width", "height"], uI = ["width", "height", "rx"], dI = { mask: "url(#mask__pixel)" }, fI = ["fill"], pI = ["fill"], hI = ["fill"], gI = ["fill"], mI = ["fill"], vI = ["fill"], _I = ["fill"], bI = ["fill"], yI = ["fill"], wI = ["fill"], kI = ["fill"], CI = ["fill"], xI = ["fill"], SI = ["fill"], EI = ["fill"], AI = ["fill"], $I = ["fill"], MI = ["fill"], TI = ["fill"], II = ["fill"], LI = ["fill"], OI = ["fill"], RI = ["fill"], PI = ["fill"], BI = ["fill"], zI = ["fill"], DI = ["fill"], NI = ["fill"], qI = ["fill"], FI = ["fill"], jI = ["fill"], HI = ["fill"], VI = ["fill"], UI = ["fill"], ZI = ["fill"], WI = ["fill"], GI = ["fill"], KI = ["fill"], XI = ["fill"], YI = ["fill"], JI = ["fill"], QI = ["fill"], eL = ["fill"], tL = ["fill"], nL = ["fill"], rL = ["fill"], oL = ["fill"], sL = ["fill"], iL = ["fill"], aL = ["fill"], cL = ["fill"], lL = ["fill"], uL = ["fill"], dL = ["fill"], fL = ["fill"], pL = ["fill"], hL = ["fill"], gL = ["fill"], mL = ["fill"], vL = ["fill"], _L = ["fill"], bL = ["fill"], yL = ["fill"], wL = ["fill"];
function kL(e, t, n, r, s, o) {
  return y(), x("svg", {
    viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    width: e.size,
    height: e.size
  }, [
    e.title ? (y(), x("title", cI, ve(e.name), 1)) : Q("", !0),
    p("mask", {
      id: "mask__pixel",
      "mask-type": "alpha",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: e.SIZE,
      height: e.SIZE
    }, [
      p("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
      }, null, 8, uI)
    ], 8, lI),
    p("g", dI, [
      p("rect", {
        width: 10,
        height: 10,
        fill: e.pixelColors[0]
      }, null, 8, fI),
      p("rect", {
        x: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[1]
      }, null, 8, pI),
      p("rect", {
        x: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[2]
      }, null, 8, hI),
      p("rect", {
        x: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[3]
      }, null, 8, gI),
      p("rect", {
        x: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[4]
      }, null, 8, mI),
      p("rect", {
        x: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[5]
      }, null, 8, vI),
      p("rect", {
        x: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[6]
      }, null, 8, _I),
      p("rect", {
        x: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[7]
      }, null, 8, bI),
      p("rect", {
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[8]
      }, null, 8, yI),
      p("rect", {
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[9]
      }, null, 8, wI),
      p("rect", {
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[10]
      }, null, 8, kI),
      p("rect", {
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[11]
      }, null, 8, CI),
      p("rect", {
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[12]
      }, null, 8, xI),
      p("rect", {
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[13]
      }, null, 8, SI),
      p("rect", {
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[14]
      }, null, 8, EI),
      p("rect", {
        x: 20,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[15]
      }, null, 8, AI),
      p("rect", {
        x: 20,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[16]
      }, null, 8, $I),
      p("rect", {
        x: 20,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[17]
      }, null, 8, MI),
      p("rect", {
        x: 20,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[18]
      }, null, 8, TI),
      p("rect", {
        x: 20,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[19]
      }, null, 8, II),
      p("rect", {
        x: 20,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[20]
      }, null, 8, LI),
      p("rect", {
        x: 20,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[21]
      }, null, 8, OI),
      p("rect", {
        x: 40,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[22]
      }, null, 8, RI),
      p("rect", {
        x: 40,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[23]
      }, null, 8, PI),
      p("rect", {
        x: 40,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[24]
      }, null, 8, BI),
      p("rect", {
        x: 40,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[25]
      }, null, 8, zI),
      p("rect", {
        x: 40,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[26]
      }, null, 8, DI),
      p("rect", {
        x: 40,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[27]
      }, null, 8, NI),
      p("rect", {
        x: 40,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[28]
      }, null, 8, qI),
      p("rect", {
        x: 60,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[29]
      }, null, 8, FI),
      p("rect", {
        x: 60,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[30]
      }, null, 8, jI),
      p("rect", {
        x: 60,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[31]
      }, null, 8, HI),
      p("rect", {
        x: 60,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[32]
      }, null, 8, VI),
      p("rect", {
        x: 60,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[33]
      }, null, 8, UI),
      p("rect", {
        x: 60,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[34]
      }, null, 8, ZI),
      p("rect", {
        x: 60,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[35]
      }, null, 8, WI),
      p("rect", {
        x: 10,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[36]
      }, null, 8, GI),
      p("rect", {
        x: 10,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[37]
      }, null, 8, KI),
      p("rect", {
        x: 10,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[38]
      }, null, 8, XI),
      p("rect", {
        x: 10,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[39]
      }, null, 8, YI),
      p("rect", {
        x: 10,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[40]
      }, null, 8, JI),
      p("rect", {
        x: 10,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[41]
      }, null, 8, QI),
      p("rect", {
        x: 10,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[42]
      }, null, 8, eL),
      p("rect", {
        x: 30,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[43]
      }, null, 8, tL),
      p("rect", {
        x: 30,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[44]
      }, null, 8, nL),
      p("rect", {
        x: 30,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[45]
      }, null, 8, rL),
      p("rect", {
        x: 30,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[46]
      }, null, 8, oL),
      p("rect", {
        x: 30,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[47]
      }, null, 8, sL),
      p("rect", {
        x: 30,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[48]
      }, null, 8, iL),
      p("rect", {
        x: 30,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[49]
      }, null, 8, aL),
      p("rect", {
        x: 50,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[50]
      }, null, 8, cL),
      p("rect", {
        x: 50,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[51]
      }, null, 8, lL),
      p("rect", {
        x: 50,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[52]
      }, null, 8, uL),
      p("rect", {
        x: 50,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[53]
      }, null, 8, dL),
      p("rect", {
        x: 50,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[54]
      }, null, 8, fL),
      p("rect", {
        x: 50,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[55]
      }, null, 8, pL),
      p("rect", {
        x: 50,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[56]
      }, null, 8, hL),
      p("rect", {
        x: 70,
        y: 10,
        width: 10,
        height: 10,
        fill: e.pixelColors[57]
      }, null, 8, gL),
      p("rect", {
        x: 70,
        y: 20,
        width: 10,
        height: 10,
        fill: e.pixelColors[58]
      }, null, 8, mL),
      p("rect", {
        x: 70,
        y: 30,
        width: 10,
        height: 10,
        fill: e.pixelColors[59]
      }, null, 8, vL),
      p("rect", {
        x: 70,
        y: 40,
        width: 10,
        height: 10,
        fill: e.pixelColors[60]
      }, null, 8, _L),
      p("rect", {
        x: 70,
        y: 50,
        width: 10,
        height: 10,
        fill: e.pixelColors[61]
      }, null, 8, bL),
      p("rect", {
        x: 70,
        y: 60,
        width: 10,
        height: 10,
        fill: e.pixelColors[62]
      }, null, 8, yL),
      p("rect", {
        x: 70,
        y: 70,
        width: 10,
        height: 10,
        fill: e.pixelColors[63]
      }, null, 8, wL)
    ])
  ], 8, aI);
}
const CL = /* @__PURE__ */ Ir(iI, [["render", kL]]), xL = 90, SL = 5;
function EL(e, t) {
  const n = Tr(e), r = t && t.length, s = Array.from(
    { length: SL },
    (i, a) => or(n + a, t, r)
  ), o = [];
  return o[0] = s[0], o[1] = s[1], o[2] = s[1], o[3] = s[2], o[4] = s[2], o[5] = s[3], o[6] = s[3], o[7] = s[0], o[8] = s[4], o;
}
const AL = H({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    square: {
      type: Boolean,
      required: !1,
      default: !1
    },
    size: {
      type: Number,
      required: !0
    },
    title: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    return { ringColors: T(() => EL(e.name, e.colors)), SIZE: xL };
  }
}), $L = ["viewBox", "width", "height"], ML = { key: 0 }, TL = ["width", "height"], IL = ["width", "height", "rx"], LL = { mask: "url(#mask__ring)" }, OL = ["fill"], RL = ["fill"], PL = ["fill"], BL = ["fill"], zL = ["fill"], DL = ["fill"], NL = ["fill"], qL = ["fill"], FL = ["fill"];
function jL(e, t, n, r, s, o) {
  return y(), x("svg", {
    viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    width: e.size,
    height: e.size
  }, [
    e.title ? (y(), x("title", ML, ve(e.name), 1)) : Q("", !0),
    p("mask", {
      id: "mask__ring",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: e.SIZE,
      height: e.SIZE
    }, [
      p("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
      }, null, 8, IL)
    ], 8, TL),
    p("g", LL, [
      p("path", {
        d: "M0 0h90v45H0z",
        fill: e.ringColors[0]
      }, null, 8, OL),
      p("path", {
        d: "M0 45h90v45H0z",
        fill: e.ringColors[1]
      }, null, 8, RL),
      p("path", {
        d: "M83 45a38 38 0 00-76 0h76z",
        fill: e.ringColors[2]
      }, null, 8, PL),
      p("path", {
        d: "M83 45a38 38 0 01-76 0h76z",
        fill: e.ringColors[3]
      }, null, 8, BL),
      p("path", {
        d: "M77 45a32 32 0 10-64 0h64z",
        fill: e.ringColors[4]
      }, null, 8, zL),
      p("path", {
        d: "M77 45a32 32 0 11-64 0h64z",
        fill: e.ringColors[5]
      }, null, 8, DL),
      p("path", {
        d: "M71 45a26 26 0 00-52 0h52z",
        fill: e.ringColors[6]
      }, null, 8, NL),
      p("path", {
        d: "M71 45a26 26 0 01-52 0h52z",
        fill: e.ringColors[7]
      }, null, 8, qL),
      p("circle", {
        cx: 45,
        cy: 45,
        r: 23,
        fill: e.ringColors[8]
      }, null, 8, FL)
    ])
  ], 8, $L);
}
const HL = /* @__PURE__ */ Ir(AL, [["render", jL]]), VL = 4, UL = 80;
function ZL(e, t) {
  const n = Tr(e), r = t && t.length;
  return Array.from(
    { length: VL },
    (s, o) => or(n + o, t, r)
  );
}
const WL = H({
  props: {
    colors: {
      type: Array,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    square: {
      type: Boolean,
      required: !1,
      default: !1
    },
    size: {
      type: Number,
      required: !0
    },
    title: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup(e) {
    const t = T(
      () => ZL(e.name, e.colors)
    ), n = T(() => e.name.replace(/\s/g, ""));
    return { sunsetColors: t, formattedName: n, SIZE: UL };
  }
}), GL = ["viewBox", "width", "height"], KL = { key: 0 }, XL = ["width", "height"], YL = ["width", "height", "rx"], JL = { mask: "url(#mask__sunset)" }, QL = ["fill"], eO = ["fill"], tO = ["id", "x1", "x2", "y2"], nO = ["stop-color"], rO = ["stop-color"], oO = ["id", "x1", "y1", "x2", "y2"], sO = ["stop-color"], iO = ["stop-color"];
function aO(e, t, n, r, s, o) {
  return y(), x("svg", {
    viewBox: `0 0 ${e.SIZE} ${e.SIZE}`,
    fill: "none",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    width: e.size,
    height: e.size
  }, [
    e.title ? (y(), x("title", KL, ve(e.name), 1)) : Q("", !0),
    p("mask", {
      id: "mask__sunset",
      maskUnits: "userSpaceOnUse",
      x: 0,
      y: 0,
      width: e.SIZE,
      height: e.SIZE
    }, [
      p("rect", {
        width: e.SIZE,
        height: e.SIZE,
        rx: e.square ? void 0 : e.SIZE * 2,
        fill: "#FFFFFF"
      }, null, 8, YL)
    ], 8, XL),
    p("g", JL, [
      p("path", {
        fill: `url(#gradient_paint0_linear_${e.formattedName})`,
        d: "M0 0h80v40H0z"
      }, null, 8, QL),
      p("path", {
        fill: `url(#gradient_paint1_linear_${e.formattedName})`,
        d: "M0 40h80v40H0z"
      }, null, 8, eO)
    ]),
    p("defs", null, [
      p("linearGradient", {
        id: `gradient_paint0_linear_${e.formattedName}`,
        x1: e.SIZE / 2,
        y1: 0,
        x2: e.SIZE / 2,
        y2: e.SIZE / 2,
        gradientUnits: "userSpaceOnUse"
      }, [
        p("stop", {
          "stop-color": e.sunsetColors[0]
        }, null, 8, nO),
        p("stop", {
          offset: 1,
          "stop-color": e.sunsetColors[1]
        }, null, 8, rO)
      ], 8, tO),
      p("linearGradient", {
        id: `gradient_paint1_linear_${e.formattedName}`,
        x1: e.SIZE / 2,
        y1: e.SIZE / 2,
        x2: e.SIZE / 2,
        y2: e.SIZE,
        gradientUnits: "userSpaceOnUse"
      }, [
        p("stop", {
          "stop-color": e.sunsetColors[2]
        }, null, 8, sO),
        p("stop", {
          offset: 1,
          "stop-color": e.sunsetColors[3]
        }, null, 8, iO)
      ], 8, oO)
    ])
  ], 8, GL);
}
const cO = /* @__PURE__ */ Ir(WL, [["render", aO]]);
H({
  name: "Avatar",
  props: {
    variant: {
      type: String,
      required: !1,
      default: "marble",
      validator(e) {
        return [
          "bauhaus",
          "beam",
          "marble",
          "pixel",
          "ring",
          "sunset"
        ].includes(e);
      }
    },
    colors: {
      type: Array,
      required: !1,
      default: () => ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]
    },
    name: {
      type: String,
      required: !1,
      default: "Clara Barton"
    },
    square: {
      type: Boolean,
      required: !1,
      default: !1
    },
    size: {
      type: Number,
      required: !1,
      default: 40
    },
    title: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  setup() {
    return {};
  },
  components: {
    AvatarBauhaus: ST,
    AvatarBeam: FT,
    AvatarMarble: nI,
    AvatarPixel: CL,
    AvatarRing: HL,
    AvatarSunset: cO
  }
});
const Ld = /(\*|-) \[x\]/, Od = /(\*|-) \[\s\]/, lO = (e, t) => {
  let n = 0;
  const r = e.split(`
`);
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = Ld.test(o), a = Od.test(o);
    if (i || a) {
      if (n === t) {
        const c = i ? Ld : Od, u = i ? "[ ]" : "[x]";
        r[s] = o.replace(c, `$1 ${u}`);
        break;
      }
      n++;
    }
  }
  return r.join(`
`);
};
function uO(e, t) {
  return /^on[A-Z]/.test(t);
}
function hm(e) {
  return `${e ? `${e}-` : ""}${Math.random().toString(36).substring(2, 11)}`;
}
const dO = /* @__PURE__ */ H({
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
    name: { default: () => hm("input") },
    autocomplete: { default: "off" }
  },
  setup(e, { expose: t }) {
    const n = e, r = T(
      () => n.size === "medium" ? "default" : n.size
    ), s = T(() => {
      const d = [];
      return n.size === "xlarge" && d.push("xlarge"), n.type === "password" && d.push("ph-no-capture"), d;
    }), o = D(), i = T(() => {
      if (!(o != null && o.value)) return;
      const d = n.type === "textarea" ? "textarea" : "input";
      return o.value.$el.querySelector(d);
    });
    return t({ focus: () => {
      var d;
      return (d = i.value) == null ? void 0 : d.focus();
    }, blur: () => {
      var d;
      return (d = i.value) == null ? void 0 : d.blur();
    }, select: () => {
      var d;
      return (d = i.value) == null ? void 0 : d.select();
    } }), (d, l) => (y(), X(_(Ss), je({
      ref_key: "innerInput",
      ref: o,
      "model-value": d.modelValue,
      type: d.type,
      size: r.value,
      class: ["n8n-input", ...s.value],
      autocomplete: d.autocomplete,
      name: d.name,
      placeholder: d.placeholder,
      disabled: d.disabled,
      readonly: d.readonly,
      clearable: d.clearable,
      rows: d.rows,
      title: d.title,
      maxlength: d.maxlength
    }, d.$attrs), Xr({ _: 2 }, [
      d.$slots.prepend ? {
        name: "prepend",
        fn: Y(() => [
          ne(d.$slots, "prepend")
        ]),
        key: "0"
      } : void 0,
      d.$slots.append ? {
        name: "append",
        fn: Y(() => [
          ne(d.$slots, "append")
        ]),
        key: "1"
      } : void 0,
      d.$slots.prefix ? {
        name: "prefix",
        fn: Y(() => [
          ne(d.$slots, "prefix")
        ]),
        key: "2"
      } : void 0,
      d.$slots.suffix ? {
        name: "suffix",
        fn: Y(() => [
          ne(d.$slots, "suffix")
        ]),
        key: "3"
      } : void 0
    ]), 1040, ["model-value", "type", "size", "class", "autocomplete", "name", "placeholder", "disabled", "readonly", "clearable", "rows", "title", "maxlength"]));
  }
}), fO = "_xlarge_ddtui_1", pO = {
  xlarge: fO
}, hO = {
  $style: pO
}, gm = /* @__PURE__ */ qt(dO, [["__cssModules", hO]]);
hm("color-picker");
function gO() {
  return {
    t: (e, t = []) => Rb(e, t)
  };
}
({
  ...a2
});
({
  ...Pc.props
});
/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const mO = () => {
}, ts = Array.isArray;
function Rd(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function vO(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!_O(e[n], t[n]))
      return !1;
  return !0;
}
function _O(e, t) {
  return ts(e) ? Pd(e, t) : ts(t) ? Pd(t, e) : e === t;
}
function Pd(e, t) {
  return ts(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
}
var Bd;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Bd || (Bd = {}));
var zd;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(zd || (zd = {}));
var Dd;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Dd || (Dd = {}));
const mm = Symbol(""), bO = Symbol("");
function Nd(e) {
  const t = $e(mm), n = $e(bO), r = T(() => {
    const c = _(e.to);
    return t.resolve(c);
  }), s = T(() => {
    const { matched: c } = r.value, { length: u } = c, d = c[u - 1], l = n.matched;
    if (!d || !l.length)
      return -1;
    const m = l.findIndex(Rd.bind(null, d));
    if (m > -1)
      return m;
    const f = Fd(c[u - 2]);
    return (
      // we are dealing with nested routes
      u > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      Fd(d) === f && // avoid comparing the child with its parent
      l[l.length - 1].path !== f ? l.findIndex(Rd.bind(null, c[u - 2])) : m
    );
  }), o = T(() => s.value > -1 && CO(n.params, r.value.params)), i = T(() => s.value > -1 && s.value === n.matched.length - 1 && vO(n.params, r.value.params));
  function a(c = {}) {
    if (kO(c)) {
      const u = t[_(e.replace) ? "replace" : "push"](
        _(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(mO);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
    }
    return Promise.resolve();
  }
  return {
    route: r,
    href: T(() => r.value.href),
    isActive: o,
    isExactActive: i,
    navigate: a
  };
}
function yO(e) {
  return e.length === 1 ? e[0] : e;
}
const wO = /* @__PURE__ */ H({
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
  useLink: Nd,
  setup(e, { slots: t }) {
    const n = qn(Nd(e)), { options: r } = $e(mm), s = T(() => ({
      [jd(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [jd(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const o = t.default && yO(t.default(n));
      return e.custom ? o : Lt("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, o);
    };
  }
}), qd = wO;
function kO(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function CO(e, t) {
  for (const n in t) {
    const r = t[n], s = e[n];
    if (typeof r == "string") {
      if (r !== s)
        return !1;
    } else if (!ts(s) || s.length !== r.length || r.some((o, i) => o !== s[i]))
      return !1;
  }
  return !0;
}
function Fd(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const jd = (e, t, n) => e ?? t ?? n;
var ti = {};
const xO = "Á", SO = "á", EO = "Ă", AO = "ă", $O = "∾", MO = "∿", TO = "∾̳", IO = "Â", LO = "â", OO = "´", RO = "А", PO = "а", BO = "Æ", zO = "æ", DO = "⁡", NO = "𝔄", qO = "𝔞", FO = "À", jO = "à", HO = "ℵ", VO = "ℵ", UO = "Α", ZO = "α", WO = "Ā", GO = "ā", KO = "⨿", XO = "&", YO = "&", JO = "⩕", QO = "⩓", eR = "∧", tR = "⩜", nR = "⩘", rR = "⩚", oR = "∠", sR = "⦤", iR = "∠", aR = "⦨", cR = "⦩", lR = "⦪", uR = "⦫", dR = "⦬", fR = "⦭", pR = "⦮", hR = "⦯", gR = "∡", mR = "∟", vR = "⊾", _R = "⦝", bR = "∢", yR = "Å", wR = "⍼", kR = "Ą", CR = "ą", xR = "𝔸", SR = "𝕒", ER = "⩯", AR = "≈", $R = "⩰", MR = "≊", TR = "≋", IR = "'", LR = "⁡", OR = "≈", RR = "≊", PR = "Å", BR = "å", zR = "𝒜", DR = "𝒶", NR = "≔", qR = "*", FR = "≈", jR = "≍", HR = "Ã", VR = "ã", UR = "Ä", ZR = "ä", WR = "∳", GR = "⨑", KR = "≌", XR = "϶", YR = "‵", JR = "∽", QR = "⋍", eP = "∖", tP = "⫧", nP = "⊽", rP = "⌅", oP = "⌆", sP = "⌅", iP = "⎵", aP = "⎶", cP = "≌", lP = "Б", uP = "б", dP = "„", fP = "∵", pP = "∵", hP = "∵", gP = "⦰", mP = "϶", vP = "ℬ", _P = "ℬ", bP = "Β", yP = "β", wP = "ℶ", kP = "≬", CP = "𝔅", xP = "𝔟", SP = "⋂", EP = "◯", AP = "⋃", $P = "⨀", MP = "⨁", TP = "⨂", IP = "⨆", LP = "★", OP = "▽", RP = "△", PP = "⨄", BP = "⋁", zP = "⋀", DP = "⤍", NP = "⧫", qP = "▪", FP = "▴", jP = "▾", HP = "◂", VP = "▸", UP = "␣", ZP = "▒", WP = "░", GP = "▓", KP = "█", XP = "=⃥", YP = "≡⃥", JP = "⫭", QP = "⌐", eB = "𝔹", tB = "𝕓", nB = "⊥", rB = "⊥", oB = "⋈", sB = "⧉", iB = "┐", aB = "╕", cB = "╖", lB = "╗", uB = "┌", dB = "╒", fB = "╓", pB = "╔", hB = "─", gB = "═", mB = "┬", vB = "╤", _B = "╥", bB = "╦", yB = "┴", wB = "╧", kB = "╨", CB = "╩", xB = "⊟", SB = "⊞", EB = "⊠", AB = "┘", $B = "╛", MB = "╜", TB = "╝", IB = "└", LB = "╘", OB = "╙", RB = "╚", PB = "│", BB = "║", zB = "┼", DB = "╪", NB = "╫", qB = "╬", FB = "┤", jB = "╡", HB = "╢", VB = "╣", UB = "├", ZB = "╞", WB = "╟", GB = "╠", KB = "‵", XB = "˘", YB = "˘", JB = "¦", QB = "𝒷", ez = "ℬ", tz = "⁏", nz = "∽", rz = "⋍", oz = "⧅", sz = "\\", iz = "⟈", az = "•", cz = "•", lz = "≎", uz = "⪮", dz = "≏", fz = "≎", pz = "≏", hz = "Ć", gz = "ć", mz = "⩄", vz = "⩉", _z = "⩋", bz = "∩", yz = "⋒", wz = "⩇", kz = "⩀", Cz = "ⅅ", xz = "∩︀", Sz = "⁁", Ez = "ˇ", Az = "ℭ", $z = "⩍", Mz = "Č", Tz = "č", Iz = "Ç", Lz = "ç", Oz = "Ĉ", Rz = "ĉ", Pz = "∰", Bz = "⩌", zz = "⩐", Dz = "Ċ", Nz = "ċ", qz = "¸", Fz = "¸", jz = "⦲", Hz = "¢", Vz = "·", Uz = "·", Zz = "𝔠", Wz = "ℭ", Gz = "Ч", Kz = "ч", Xz = "✓", Yz = "✓", Jz = "Χ", Qz = "χ", eD = "ˆ", tD = "≗", nD = "↺", rD = "↻", oD = "⊛", sD = "⊚", iD = "⊝", aD = "⊙", cD = "®", lD = "Ⓢ", uD = "⊖", dD = "⊕", fD = "⊗", pD = "○", hD = "⧃", gD = "≗", mD = "⨐", vD = "⫯", _D = "⧂", bD = "∲", yD = "”", wD = "’", kD = "♣", CD = "♣", xD = ":", SD = "∷", ED = "⩴", AD = "≔", $D = "≔", MD = ",", TD = "@", ID = "∁", LD = "∘", OD = "∁", RD = "ℂ", PD = "≅", BD = "⩭", zD = "≡", DD = "∮", ND = "∯", qD = "∮", FD = "𝕔", jD = "ℂ", HD = "∐", VD = "∐", UD = "©", ZD = "©", WD = "℗", GD = "∳", KD = "↵", XD = "✗", YD = "⨯", JD = "𝒞", QD = "𝒸", eN = "⫏", tN = "⫑", nN = "⫐", rN = "⫒", oN = "⋯", sN = "⤸", iN = "⤵", aN = "⋞", cN = "⋟", lN = "↶", uN = "⤽", dN = "⩈", fN = "⩆", pN = "≍", hN = "∪", gN = "⋓", mN = "⩊", vN = "⊍", _N = "⩅", bN = "∪︀", yN = "↷", wN = "⤼", kN = "⋞", CN = "⋟", xN = "⋎", SN = "⋏", EN = "¤", AN = "↶", $N = "↷", MN = "⋎", TN = "⋏", IN = "∲", LN = "∱", ON = "⌭", RN = "†", PN = "‡", BN = "ℸ", zN = "↓", DN = "↡", NN = "⇓", qN = "‐", FN = "⫤", jN = "⊣", HN = "⤏", VN = "˝", UN = "Ď", ZN = "ď", WN = "Д", GN = "д", KN = "‡", XN = "⇊", YN = "ⅅ", JN = "ⅆ", QN = "⤑", eq = "⩷", tq = "°", nq = "∇", rq = "Δ", oq = "δ", sq = "⦱", iq = "⥿", aq = "𝔇", cq = "𝔡", lq = "⥥", uq = "⇃", dq = "⇂", fq = "´", pq = "˙", hq = "˝", gq = "`", mq = "˜", vq = "⋄", _q = "⋄", bq = "⋄", yq = "♦", wq = "♦", kq = "¨", Cq = "ⅆ", xq = "ϝ", Sq = "⋲", Eq = "÷", Aq = "÷", $q = "⋇", Mq = "⋇", Tq = "Ђ", Iq = "ђ", Lq = "⌞", Oq = "⌍", Rq = "$", Pq = "𝔻", Bq = "𝕕", zq = "¨", Dq = "˙", Nq = "⃜", qq = "≐", Fq = "≑", jq = "≐", Hq = "∸", Vq = "∔", Uq = "⊡", Zq = "⌆", Wq = "∯", Gq = "¨", Kq = "⇓", Xq = "⇐", Yq = "⇔", Jq = "⫤", Qq = "⟸", eF = "⟺", tF = "⟹", nF = "⇒", rF = "⊨", oF = "⇑", sF = "⇕", iF = "∥", aF = "⤓", cF = "↓", lF = "↓", uF = "⇓", dF = "⇵", fF = "̑", pF = "⇊", hF = "⇃", gF = "⇂", mF = "⥐", vF = "⥞", _F = "⥖", bF = "↽", yF = "⥟", wF = "⥗", kF = "⇁", CF = "↧", xF = "⊤", SF = "⤐", EF = "⌟", AF = "⌌", $F = "𝒟", MF = "𝒹", TF = "Ѕ", IF = "ѕ", LF = "⧶", OF = "Đ", RF = "đ", PF = "⋱", BF = "▿", zF = "▾", DF = "⇵", NF = "⥯", qF = "⦦", FF = "Џ", jF = "џ", HF = "⟿", VF = "É", UF = "é", ZF = "⩮", WF = "Ě", GF = "ě", KF = "Ê", XF = "ê", YF = "≖", JF = "≕", QF = "Э", ej = "э", tj = "⩷", nj = "Ė", rj = "ė", oj = "≑", sj = "ⅇ", ij = "≒", aj = "𝔈", cj = "𝔢", lj = "⪚", uj = "È", dj = "è", fj = "⪖", pj = "⪘", hj = "⪙", gj = "∈", mj = "⏧", vj = "ℓ", _j = "⪕", bj = "⪗", yj = "Ē", wj = "ē", kj = "∅", Cj = "∅", xj = "◻", Sj = "∅", Ej = "▫", Aj = " ", $j = " ", Mj = " ", Tj = "Ŋ", Ij = "ŋ", Lj = " ", Oj = "Ę", Rj = "ę", Pj = "𝔼", Bj = "𝕖", zj = "⋕", Dj = "⧣", Nj = "⩱", qj = "ε", Fj = "Ε", jj = "ε", Hj = "ϵ", Vj = "≖", Uj = "≕", Zj = "≂", Wj = "⪖", Gj = "⪕", Kj = "⩵", Xj = "=", Yj = "≂", Jj = "≟", Qj = "⇌", eH = "≡", tH = "⩸", nH = "⧥", rH = "⥱", oH = "≓", sH = "ℯ", iH = "ℰ", aH = "≐", cH = "⩳", lH = "≂", uH = "Η", dH = "η", fH = "Ð", pH = "ð", hH = "Ë", gH = "ë", mH = "€", vH = "!", _H = "∃", bH = "∃", yH = "ℰ", wH = "ⅇ", kH = "ⅇ", CH = "≒", xH = "Ф", SH = "ф", EH = "♀", AH = "ﬃ", $H = "ﬀ", MH = "ﬄ", TH = "𝔉", IH = "𝔣", LH = "ﬁ", OH = "◼", RH = "▪", PH = "fj", BH = "♭", zH = "ﬂ", DH = "▱", NH = "ƒ", qH = "𝔽", FH = "𝕗", jH = "∀", HH = "∀", VH = "⋔", UH = "⫙", ZH = "ℱ", WH = "⨍", GH = "½", KH = "⅓", XH = "¼", YH = "⅕", JH = "⅙", QH = "⅛", eV = "⅔", tV = "⅖", nV = "¾", rV = "⅗", oV = "⅜", sV = "⅘", iV = "⅚", aV = "⅝", cV = "⅞", lV = "⁄", uV = "⌢", dV = "𝒻", fV = "ℱ", pV = "ǵ", hV = "Γ", gV = "γ", mV = "Ϝ", vV = "ϝ", _V = "⪆", bV = "Ğ", yV = "ğ", wV = "Ģ", kV = "Ĝ", CV = "ĝ", xV = "Г", SV = "г", EV = "Ġ", AV = "ġ", $V = "≥", MV = "≧", TV = "⪌", IV = "⋛", LV = "≥", OV = "≧", RV = "⩾", PV = "⪩", BV = "⩾", zV = "⪀", DV = "⪂", NV = "⪄", qV = "⋛︀", FV = "⪔", jV = "𝔊", HV = "𝔤", VV = "≫", UV = "⋙", ZV = "⋙", WV = "ℷ", GV = "Ѓ", KV = "ѓ", XV = "⪥", YV = "≷", JV = "⪒", QV = "⪤", eU = "⪊", tU = "⪊", nU = "⪈", rU = "≩", oU = "⪈", sU = "≩", iU = "⋧", aU = "𝔾", cU = "𝕘", lU = "`", uU = "≥", dU = "⋛", fU = "≧", pU = "⪢", hU = "≷", gU = "⩾", mU = "≳", vU = "𝒢", _U = "ℊ", bU = "≳", yU = "⪎", wU = "⪐", kU = "⪧", CU = "⩺", xU = ">", SU = ">", EU = "≫", AU = "⋗", $U = "⦕", MU = "⩼", TU = "⪆", IU = "⥸", LU = "⋗", OU = "⋛", RU = "⪌", PU = "≷", BU = "≳", zU = "≩︀", DU = "≩︀", NU = "ˇ", qU = " ", FU = "½", jU = "ℋ", HU = "Ъ", VU = "ъ", UU = "⥈", ZU = "↔", WU = "⇔", GU = "↭", KU = "^", XU = "ℏ", YU = "Ĥ", JU = "ĥ", QU = "♥", eZ = "♥", tZ = "…", nZ = "⊹", rZ = "𝔥", oZ = "ℌ", sZ = "ℋ", iZ = "⤥", aZ = "⤦", cZ = "⇿", lZ = "∻", uZ = "↩", dZ = "↪", fZ = "𝕙", pZ = "ℍ", hZ = "―", gZ = "─", mZ = "𝒽", vZ = "ℋ", _Z = "ℏ", bZ = "Ħ", yZ = "ħ", wZ = "≎", kZ = "≏", CZ = "⁃", xZ = "‐", SZ = "Í", EZ = "í", AZ = "⁣", $Z = "Î", MZ = "î", TZ = "И", IZ = "и", LZ = "İ", OZ = "Е", RZ = "е", PZ = "¡", BZ = "⇔", zZ = "𝔦", DZ = "ℑ", NZ = "Ì", qZ = "ì", FZ = "ⅈ", jZ = "⨌", HZ = "∭", VZ = "⧜", UZ = "℩", ZZ = "Ĳ", WZ = "ĳ", GZ = "Ī", KZ = "ī", XZ = "ℑ", YZ = "ⅈ", JZ = "ℐ", QZ = "ℑ", eW = "ı", tW = "ℑ", nW = "⊷", rW = "Ƶ", oW = "⇒", sW = "℅", iW = "∞", aW = "⧝", cW = "ı", lW = "⊺", uW = "∫", dW = "∬", fW = "ℤ", pW = "∫", hW = "⊺", gW = "⋂", mW = "⨗", vW = "⨼", _W = "⁣", bW = "⁢", yW = "Ё", wW = "ё", kW = "Į", CW = "į", xW = "𝕀", SW = "𝕚", EW = "Ι", AW = "ι", $W = "⨼", MW = "¿", TW = "𝒾", IW = "ℐ", LW = "∈", OW = "⋵", RW = "⋹", PW = "⋴", BW = "⋳", zW = "∈", DW = "⁢", NW = "Ĩ", qW = "ĩ", FW = "І", jW = "і", HW = "Ï", VW = "ï", UW = "Ĵ", ZW = "ĵ", WW = "Й", GW = "й", KW = "𝔍", XW = "𝔧", YW = "ȷ", JW = "𝕁", QW = "𝕛", eG = "𝒥", tG = "𝒿", nG = "Ј", rG = "ј", oG = "Є", sG = "є", iG = "Κ", aG = "κ", cG = "ϰ", lG = "Ķ", uG = "ķ", dG = "К", fG = "к", pG = "𝔎", hG = "𝔨", gG = "ĸ", mG = "Х", vG = "х", _G = "Ќ", bG = "ќ", yG = "𝕂", wG = "𝕜", kG = "𝒦", CG = "𝓀", xG = "⇚", SG = "Ĺ", EG = "ĺ", AG = "⦴", $G = "ℒ", MG = "Λ", TG = "λ", IG = "⟨", LG = "⟪", OG = "⦑", RG = "⟨", PG = "⪅", BG = "ℒ", zG = "«", DG = "⇤", NG = "⤟", qG = "←", FG = "↞", jG = "⇐", HG = "⤝", VG = "↩", UG = "↫", ZG = "⤹", WG = "⥳", GG = "↢", KG = "⤙", XG = "⤛", YG = "⪫", JG = "⪭", QG = "⪭︀", eK = "⤌", tK = "⤎", nK = "❲", rK = "{", oK = "[", sK = "⦋", iK = "⦏", aK = "⦍", cK = "Ľ", lK = "ľ", uK = "Ļ", dK = "ļ", fK = "⌈", pK = "{", hK = "Л", gK = "л", mK = "⤶", vK = "“", _K = "„", bK = "⥧", yK = "⥋", wK = "↲", kK = "≤", CK = "≦", xK = "⟨", SK = "⇤", EK = "←", AK = "←", $K = "⇐", MK = "⇆", TK = "↢", IK = "⌈", LK = "⟦", OK = "⥡", RK = "⥙", PK = "⇃", BK = "⌊", zK = "↽", DK = "↼", NK = "⇇", qK = "↔", FK = "↔", jK = "⇔", HK = "⇆", VK = "⇋", UK = "↭", ZK = "⥎", WK = "↤", GK = "⊣", KK = "⥚", XK = "⋋", YK = "⧏", JK = "⊲", QK = "⊴", eX = "⥑", tX = "⥠", nX = "⥘", rX = "↿", oX = "⥒", sX = "↼", iX = "⪋", aX = "⋚", cX = "≤", lX = "≦", uX = "⩽", dX = "⪨", fX = "⩽", pX = "⩿", hX = "⪁", gX = "⪃", mX = "⋚︀", vX = "⪓", _X = "⪅", bX = "⋖", yX = "⋚", wX = "⪋", kX = "⋚", CX = "≦", xX = "≶", SX = "≶", EX = "⪡", AX = "≲", $X = "⩽", MX = "≲", TX = "⥼", IX = "⌊", LX = "𝔏", OX = "𝔩", RX = "≶", PX = "⪑", BX = "⥢", zX = "↽", DX = "↼", NX = "⥪", qX = "▄", FX = "Љ", jX = "љ", HX = "⇇", VX = "≪", UX = "⋘", ZX = "⌞", WX = "⇚", GX = "⥫", KX = "◺", XX = "Ŀ", YX = "ŀ", JX = "⎰", QX = "⎰", eY = "⪉", tY = "⪉", nY = "⪇", rY = "≨", oY = "⪇", sY = "≨", iY = "⋦", aY = "⟬", cY = "⇽", lY = "⟦", uY = "⟵", dY = "⟵", fY = "⟸", pY = "⟷", hY = "⟷", gY = "⟺", mY = "⟼", vY = "⟶", _Y = "⟶", bY = "⟹", yY = "↫", wY = "↬", kY = "⦅", CY = "𝕃", xY = "𝕝", SY = "⨭", EY = "⨴", AY = "∗", $Y = "_", MY = "↙", TY = "↘", IY = "◊", LY = "◊", OY = "⧫", RY = "(", PY = "⦓", BY = "⇆", zY = "⌟", DY = "⇋", NY = "⥭", qY = "‎", FY = "⊿", jY = "‹", HY = "𝓁", VY = "ℒ", UY = "↰", ZY = "↰", WY = "≲", GY = "⪍", KY = "⪏", XY = "[", YY = "‘", JY = "‚", QY = "Ł", eJ = "ł", tJ = "⪦", nJ = "⩹", rJ = "<", oJ = "<", sJ = "≪", iJ = "⋖", aJ = "⋋", cJ = "⋉", lJ = "⥶", uJ = "⩻", dJ = "◃", fJ = "⊴", pJ = "◂", hJ = "⦖", gJ = "⥊", mJ = "⥦", vJ = "≨︀", _J = "≨︀", bJ = "¯", yJ = "♂", wJ = "✠", kJ = "✠", CJ = "↦", xJ = "↦", SJ = "↧", EJ = "↤", AJ = "↥", $J = "▮", MJ = "⨩", TJ = "М", IJ = "м", LJ = "—", OJ = "∺", RJ = "∡", PJ = " ", BJ = "ℳ", zJ = "𝔐", DJ = "𝔪", NJ = "℧", qJ = "µ", FJ = "*", jJ = "⫰", HJ = "∣", VJ = "·", UJ = "⊟", ZJ = "−", WJ = "∸", GJ = "⨪", KJ = "∓", XJ = "⫛", YJ = "…", JJ = "∓", QJ = "⊧", eQ = "𝕄", tQ = "𝕞", nQ = "∓", rQ = "𝓂", oQ = "ℳ", sQ = "∾", iQ = "Μ", aQ = "μ", cQ = "⊸", lQ = "⊸", uQ = "∇", dQ = "Ń", fQ = "ń", pQ = "∠⃒", hQ = "≉", gQ = "⩰̸", mQ = "≋̸", vQ = "ŉ", _Q = "≉", bQ = "♮", yQ = "ℕ", wQ = "♮", kQ = " ", CQ = "≎̸", xQ = "≏̸", SQ = "⩃", EQ = "Ň", AQ = "ň", $Q = "Ņ", MQ = "ņ", TQ = "≇", IQ = "⩭̸", LQ = "⩂", OQ = "Н", RQ = "н", PQ = "–", BQ = "⤤", zQ = "↗", DQ = "⇗", NQ = "↗", qQ = "≠", FQ = "≐̸", jQ = "​", HQ = "​", VQ = "​", UQ = "​", ZQ = "≢", WQ = "⤨", GQ = "≂̸", KQ = "≫", XQ = "≪", YQ = `
`, JQ = "∄", QQ = "∄", eee = "𝔑", tee = "𝔫", nee = "≧̸", ree = "≱", oee = "≱", see = "≧̸", iee = "⩾̸", aee = "⩾̸", cee = "⋙̸", lee = "≵", uee = "≫⃒", dee = "≯", fee = "≯", pee = "≫̸", hee = "↮", gee = "⇎", mee = "⫲", vee = "∋", _ee = "⋼", bee = "⋺", yee = "∋", wee = "Њ", kee = "њ", Cee = "↚", xee = "⇍", See = "‥", Eee = "≦̸", Aee = "≰", $ee = "↚", Mee = "⇍", Tee = "↮", Iee = "⇎", Lee = "≰", Oee = "≦̸", Ree = "⩽̸", Pee = "⩽̸", Bee = "≮", zee = "⋘̸", Dee = "≴", Nee = "≪⃒", qee = "≮", Fee = "⋪", jee = "⋬", Hee = "≪̸", Vee = "∤", Uee = "⁠", Zee = " ", Wee = "𝕟", Gee = "ℕ", Kee = "⫬", Xee = "¬", Yee = "≢", Jee = "≭", Qee = "∦", ete = "∉", tte = "≠", nte = "≂̸", rte = "∄", ote = "≯", ste = "≱", ite = "≧̸", ate = "≫̸", cte = "≹", lte = "⩾̸", ute = "≵", dte = "≎̸", fte = "≏̸", pte = "∉", hte = "⋵̸", gte = "⋹̸", mte = "∉", vte = "⋷", _te = "⋶", bte = "⧏̸", yte = "⋪", wte = "⋬", kte = "≮", Cte = "≰", xte = "≸", Ste = "≪̸", Ete = "⩽̸", Ate = "≴", $te = "⪢̸", Mte = "⪡̸", Tte = "∌", Ite = "∌", Lte = "⋾", Ote = "⋽", Rte = "⊀", Pte = "⪯̸", Bte = "⋠", zte = "∌", Dte = "⧐̸", Nte = "⋫", qte = "⋭", Fte = "⊏̸", jte = "⋢", Hte = "⊐̸", Vte = "⋣", Ute = "⊂⃒", Zte = "⊈", Wte = "⊁", Gte = "⪰̸", Kte = "⋡", Xte = "≿̸", Yte = "⊃⃒", Jte = "⊉", Qte = "≁", ene = "≄", tne = "≇", nne = "≉", rne = "∤", one = "∦", sne = "∦", ine = "⫽⃥", ane = "∂̸", cne = "⨔", lne = "⊀", une = "⋠", dne = "⊀", fne = "⪯̸", pne = "⪯̸", hne = "⤳̸", gne = "↛", mne = "⇏", vne = "↝̸", _ne = "↛", bne = "⇏", yne = "⋫", wne = "⋭", kne = "⊁", Cne = "⋡", xne = "⪰̸", Sne = "𝒩", Ene = "𝓃", Ane = "∤", $ne = "∦", Mne = "≁", Tne = "≄", Ine = "≄", Lne = "∤", One = "∦", Rne = "⋢", Pne = "⋣", Bne = "⊄", zne = "⫅̸", Dne = "⊈", Nne = "⊂⃒", qne = "⊈", Fne = "⫅̸", jne = "⊁", Hne = "⪰̸", Vne = "⊅", Une = "⫆̸", Zne = "⊉", Wne = "⊃⃒", Gne = "⊉", Kne = "⫆̸", Xne = "≹", Yne = "Ñ", Jne = "ñ", Qne = "≸", ere = "⋪", tre = "⋬", nre = "⋫", rre = "⋭", ore = "Ν", sre = "ν", ire = "#", are = "№", cre = " ", lre = "≍⃒", ure = "⊬", dre = "⊭", fre = "⊮", pre = "⊯", hre = "≥⃒", gre = ">⃒", mre = "⤄", vre = "⧞", _re = "⤂", bre = "≤⃒", yre = "<⃒", wre = "⊴⃒", kre = "⤃", Cre = "⊵⃒", xre = "∼⃒", Sre = "⤣", Ere = "↖", Are = "⇖", $re = "↖", Mre = "⤧", Tre = "Ó", Ire = "ó", Lre = "⊛", Ore = "Ô", Rre = "ô", Pre = "⊚", Bre = "О", zre = "о", Dre = "⊝", Nre = "Ő", qre = "ő", Fre = "⨸", jre = "⊙", Hre = "⦼", Vre = "Œ", Ure = "œ", Zre = "⦿", Wre = "𝔒", Gre = "𝔬", Kre = "˛", Xre = "Ò", Yre = "ò", Jre = "⧁", Qre = "⦵", eoe = "Ω", toe = "∮", noe = "↺", roe = "⦾", ooe = "⦻", soe = "‾", ioe = "⧀", aoe = "Ō", coe = "ō", loe = "Ω", uoe = "ω", doe = "Ο", foe = "ο", poe = "⦶", hoe = "⊖", goe = "𝕆", moe = "𝕠", voe = "⦷", _oe = "“", boe = "‘", yoe = "⦹", woe = "⊕", koe = "↻", Coe = "⩔", xoe = "∨", Soe = "⩝", Eoe = "ℴ", Aoe = "ℴ", $oe = "ª", Moe = "º", Toe = "⊶", Ioe = "⩖", Loe = "⩗", Ooe = "⩛", Roe = "Ⓢ", Poe = "𝒪", Boe = "ℴ", zoe = "Ø", Doe = "ø", Noe = "⊘", qoe = "Õ", Foe = "õ", joe = "⨶", Hoe = "⨷", Voe = "⊗", Uoe = "Ö", Zoe = "ö", Woe = "⌽", Goe = "‾", Koe = "⏞", Xoe = "⎴", Yoe = "⏜", Joe = "¶", Qoe = "∥", ese = "∥", tse = "⫳", nse = "⫽", rse = "∂", ose = "∂", sse = "П", ise = "п", ase = "%", cse = ".", lse = "‰", use = "⊥", dse = "‱", fse = "𝔓", pse = "𝔭", hse = "Φ", gse = "φ", mse = "ϕ", vse = "ℳ", _se = "☎", bse = "Π", yse = "π", wse = "⋔", kse = "ϖ", Cse = "ℏ", xse = "ℎ", Sse = "ℏ", Ese = "⨣", Ase = "⊞", $se = "⨢", Mse = "+", Tse = "∔", Ise = "⨥", Lse = "⩲", Ose = "±", Rse = "±", Pse = "⨦", Bse = "⨧", zse = "±", Dse = "ℌ", Nse = "⨕", qse = "𝕡", Fse = "ℙ", jse = "£", Hse = "⪷", Vse = "⪻", Use = "≺", Zse = "≼", Wse = "⪷", Gse = "≺", Kse = "≼", Xse = "≺", Yse = "⪯", Jse = "≼", Qse = "≾", eie = "⪯", tie = "⪹", nie = "⪵", rie = "⋨", oie = "⪯", sie = "⪳", iie = "≾", aie = "′", cie = "″", lie = "ℙ", uie = "⪹", die = "⪵", fie = "⋨", pie = "∏", hie = "∏", gie = "⌮", mie = "⌒", vie = "⌓", _ie = "∝", bie = "∝", yie = "∷", wie = "∝", kie = "≾", Cie = "⊰", xie = "𝒫", Sie = "𝓅", Eie = "Ψ", Aie = "ψ", $ie = " ", Mie = "𝔔", Tie = "𝔮", Iie = "⨌", Lie = "𝕢", Oie = "ℚ", Rie = "⁗", Pie = "𝒬", Bie = "𝓆", zie = "ℍ", Die = "⨖", Nie = "?", qie = "≟", Fie = '"', jie = '"', Hie = "⇛", Vie = "∽̱", Uie = "Ŕ", Zie = "ŕ", Wie = "√", Gie = "⦳", Kie = "⟩", Xie = "⟫", Yie = "⦒", Jie = "⦥", Qie = "⟩", eae = "»", tae = "⥵", nae = "⇥", rae = "⤠", oae = "⤳", sae = "→", iae = "↠", aae = "⇒", cae = "⤞", lae = "↪", uae = "↬", dae = "⥅", fae = "⥴", pae = "⤖", hae = "↣", gae = "↝", mae = "⤚", vae = "⤜", _ae = "∶", bae = "ℚ", yae = "⤍", wae = "⤏", kae = "⤐", Cae = "❳", xae = "}", Sae = "]", Eae = "⦌", Aae = "⦎", $ae = "⦐", Mae = "Ř", Tae = "ř", Iae = "Ŗ", Lae = "ŗ", Oae = "⌉", Rae = "}", Pae = "Р", Bae = "р", zae = "⤷", Dae = "⥩", Nae = "”", qae = "”", Fae = "↳", jae = "ℜ", Hae = "ℛ", Vae = "ℜ", Uae = "ℝ", Zae = "ℜ", Wae = "▭", Gae = "®", Kae = "®", Xae = "∋", Yae = "⇋", Jae = "⥯", Qae = "⥽", ece = "⌋", tce = "𝔯", nce = "ℜ", rce = "⥤", oce = "⇁", sce = "⇀", ice = "⥬", ace = "Ρ", cce = "ρ", lce = "ϱ", uce = "⟩", dce = "⇥", fce = "→", pce = "→", hce = "⇒", gce = "⇄", mce = "↣", vce = "⌉", _ce = "⟧", bce = "⥝", yce = "⥕", wce = "⇂", kce = "⌋", Cce = "⇁", xce = "⇀", Sce = "⇄", Ece = "⇌", Ace = "⇉", $ce = "↝", Mce = "↦", Tce = "⊢", Ice = "⥛", Lce = "⋌", Oce = "⧐", Rce = "⊳", Pce = "⊵", Bce = "⥏", zce = "⥜", Dce = "⥔", Nce = "↾", qce = "⥓", Fce = "⇀", jce = "˚", Hce = "≓", Vce = "⇄", Uce = "⇌", Zce = "‏", Wce = "⎱", Gce = "⎱", Kce = "⫮", Xce = "⟭", Yce = "⇾", Jce = "⟧", Qce = "⦆", ele = "𝕣", tle = "ℝ", nle = "⨮", rle = "⨵", ole = "⥰", sle = ")", ile = "⦔", ale = "⨒", cle = "⇉", lle = "⇛", ule = "›", dle = "𝓇", fle = "ℛ", ple = "↱", hle = "↱", gle = "]", mle = "’", vle = "’", _le = "⋌", ble = "⋊", yle = "▹", wle = "⊵", kle = "▸", Cle = "⧎", xle = "⧴", Sle = "⥨", Ele = "℞", Ale = "Ś", $le = "ś", Mle = "‚", Tle = "⪸", Ile = "Š", Lle = "š", Ole = "⪼", Rle = "≻", Ple = "≽", Ble = "⪰", zle = "⪴", Dle = "Ş", Nle = "ş", qle = "Ŝ", Fle = "ŝ", jle = "⪺", Hle = "⪶", Vle = "⋩", Ule = "⨓", Zle = "≿", Wle = "С", Gle = "с", Kle = "⊡", Xle = "⋅", Yle = "⩦", Jle = "⤥", Qle = "↘", eue = "⇘", tue = "↘", nue = "§", rue = ";", oue = "⤩", sue = "∖", iue = "∖", aue = "✶", cue = "𝔖", lue = "𝔰", uue = "⌢", due = "♯", fue = "Щ", pue = "щ", hue = "Ш", gue = "ш", mue = "↓", vue = "←", _ue = "∣", bue = "∥", yue = "→", wue = "↑", kue = "­", Cue = "Σ", xue = "σ", Sue = "ς", Eue = "ς", Aue = "∼", $ue = "⩪", Mue = "≃", Tue = "≃", Iue = "⪞", Lue = "⪠", Oue = "⪝", Rue = "⪟", Pue = "≆", Bue = "⨤", zue = "⥲", Due = "←", Nue = "∘", que = "∖", Fue = "⨳", jue = "⧤", Hue = "∣", Vue = "⌣", Uue = "⪪", Zue = "⪬", Wue = "⪬︀", Gue = "Ь", Kue = "ь", Xue = "⌿", Yue = "⧄", Jue = "/", Que = "𝕊", ede = "𝕤", tde = "♠", nde = "♠", rde = "∥", ode = "⊓", sde = "⊓︀", ide = "⊔", ade = "⊔︀", cde = "√", lde = "⊏", ude = "⊑", dde = "⊏", fde = "⊑", pde = "⊐", hde = "⊒", gde = "⊐", mde = "⊒", vde = "□", _de = "□", bde = "⊓", yde = "⊏", wde = "⊑", kde = "⊐", Cde = "⊒", xde = "⊔", Sde = "▪", Ede = "□", Ade = "▪", $de = "→", Mde = "𝒮", Tde = "𝓈", Ide = "∖", Lde = "⌣", Ode = "⋆", Rde = "⋆", Pde = "☆", Bde = "★", zde = "ϵ", Dde = "ϕ", Nde = "¯", qde = "⊂", Fde = "⋐", jde = "⪽", Hde = "⫅", Vde = "⊆", Ude = "⫃", Zde = "⫁", Wde = "⫋", Gde = "⊊", Kde = "⪿", Xde = "⥹", Yde = "⊂", Jde = "⋐", Qde = "⊆", efe = "⫅", tfe = "⊆", nfe = "⊊", rfe = "⫋", ofe = "⫇", sfe = "⫕", ife = "⫓", afe = "⪸", cfe = "≻", lfe = "≽", ufe = "≻", dfe = "⪰", ffe = "≽", pfe = "≿", hfe = "⪰", gfe = "⪺", mfe = "⪶", vfe = "⋩", _fe = "≿", bfe = "∋", yfe = "∑", wfe = "∑", kfe = "♪", Cfe = "¹", xfe = "²", Sfe = "³", Efe = "⊃", Afe = "⋑", $fe = "⪾", Mfe = "⫘", Tfe = "⫆", Ife = "⊇", Lfe = "⫄", Ofe = "⊃", Rfe = "⊇", Pfe = "⟉", Bfe = "⫗", zfe = "⥻", Dfe = "⫂", Nfe = "⫌", qfe = "⊋", Ffe = "⫀", jfe = "⊃", Hfe = "⋑", Vfe = "⊇", Ufe = "⫆", Zfe = "⊋", Wfe = "⫌", Gfe = "⫈", Kfe = "⫔", Xfe = "⫖", Yfe = "⤦", Jfe = "↙", Qfe = "⇙", e0e = "↙", t0e = "⤪", n0e = "ß", r0e = "	", o0e = "⌖", s0e = "Τ", i0e = "τ", a0e = "⎴", c0e = "Ť", l0e = "ť", u0e = "Ţ", d0e = "ţ", f0e = "Т", p0e = "т", h0e = "⃛", g0e = "⌕", m0e = "𝔗", v0e = "𝔱", _0e = "∴", b0e = "∴", y0e = "∴", w0e = "Θ", k0e = "θ", C0e = "ϑ", x0e = "ϑ", S0e = "≈", E0e = "∼", A0e = "  ", $0e = " ", M0e = " ", T0e = "≈", I0e = "∼", L0e = "Þ", O0e = "þ", R0e = "˜", P0e = "∼", B0e = "≃", z0e = "≅", D0e = "≈", N0e = "⨱", q0e = "⊠", F0e = "×", j0e = "⨰", H0e = "∭", V0e = "⤨", U0e = "⌶", Z0e = "⫱", W0e = "⊤", G0e = "𝕋", K0e = "𝕥", X0e = "⫚", Y0e = "⤩", J0e = "‴", Q0e = "™", epe = "™", tpe = "▵", npe = "▿", rpe = "◃", ope = "⊴", spe = "≜", ipe = "▹", ape = "⊵", cpe = "◬", lpe = "≜", upe = "⨺", dpe = "⃛", fpe = "⨹", ppe = "⧍", hpe = "⨻", gpe = "⏢", mpe = "𝒯", vpe = "𝓉", _pe = "Ц", bpe = "ц", ype = "Ћ", wpe = "ћ", kpe = "Ŧ", Cpe = "ŧ", xpe = "≬", Spe = "↞", Epe = "↠", Ape = "Ú", $pe = "ú", Mpe = "↑", Tpe = "↟", Ipe = "⇑", Lpe = "⥉", Ope = "Ў", Rpe = "ў", Ppe = "Ŭ", Bpe = "ŭ", zpe = "Û", Dpe = "û", Npe = "У", qpe = "у", Fpe = "⇅", jpe = "Ű", Hpe = "ű", Vpe = "⥮", Upe = "⥾", Zpe = "𝔘", Wpe = "𝔲", Gpe = "Ù", Kpe = "ù", Xpe = "⥣", Ype = "↿", Jpe = "↾", Qpe = "▀", ehe = "⌜", the = "⌜", nhe = "⌏", rhe = "◸", ohe = "Ū", she = "ū", ihe = "¨", ahe = "_", che = "⏟", lhe = "⎵", uhe = "⏝", dhe = "⋃", fhe = "⊎", phe = "Ų", hhe = "ų", ghe = "𝕌", mhe = "𝕦", vhe = "⤒", _he = "↑", bhe = "↑", yhe = "⇑", whe = "⇅", khe = "↕", Che = "↕", xhe = "⇕", She = "⥮", Ehe = "↿", Ahe = "↾", $he = "⊎", Mhe = "↖", The = "↗", Ihe = "υ", Lhe = "ϒ", Ohe = "ϒ", Rhe = "Υ", Phe = "υ", Bhe = "↥", zhe = "⊥", Dhe = "⇈", Nhe = "⌝", qhe = "⌝", Fhe = "⌎", jhe = "Ů", Hhe = "ů", Vhe = "◹", Uhe = "𝒰", Zhe = "𝓊", Whe = "⋰", Ghe = "Ũ", Khe = "ũ", Xhe = "▵", Yhe = "▴", Jhe = "⇈", Qhe = "Ü", e2e = "ü", t2e = "⦧", n2e = "⦜", r2e = "ϵ", o2e = "ϰ", s2e = "∅", i2e = "ϕ", a2e = "ϖ", c2e = "∝", l2e = "↕", u2e = "⇕", d2e = "ϱ", f2e = "ς", p2e = "⊊︀", h2e = "⫋︀", g2e = "⊋︀", m2e = "⫌︀", v2e = "ϑ", _2e = "⊲", b2e = "⊳", y2e = "⫨", w2e = "⫫", k2e = "⫩", C2e = "В", x2e = "в", S2e = "⊢", E2e = "⊨", A2e = "⊩", $2e = "⊫", M2e = "⫦", T2e = "⊻", I2e = "∨", L2e = "⋁", O2e = "≚", R2e = "⋮", P2e = "|", B2e = "‖", z2e = "|", D2e = "‖", N2e = "∣", q2e = "|", F2e = "❘", j2e = "≀", H2e = " ", V2e = "𝔙", U2e = "𝔳", Z2e = "⊲", W2e = "⊂⃒", G2e = "⊃⃒", K2e = "𝕍", X2e = "𝕧", Y2e = "∝", J2e = "⊳", Q2e = "𝒱", e1e = "𝓋", t1e = "⫋︀", n1e = "⊊︀", r1e = "⫌︀", o1e = "⊋︀", s1e = "⊪", i1e = "⦚", a1e = "Ŵ", c1e = "ŵ", l1e = "⩟", u1e = "∧", d1e = "⋀", f1e = "≙", p1e = "℘", h1e = "𝔚", g1e = "𝔴", m1e = "𝕎", v1e = "𝕨", _1e = "℘", b1e = "≀", y1e = "≀", w1e = "𝒲", k1e = "𝓌", C1e = "⋂", x1e = "◯", S1e = "⋃", E1e = "▽", A1e = "𝔛", $1e = "𝔵", M1e = "⟷", T1e = "⟺", I1e = "Ξ", L1e = "ξ", O1e = "⟵", R1e = "⟸", P1e = "⟼", B1e = "⋻", z1e = "⨀", D1e = "𝕏", N1e = "𝕩", q1e = "⨁", F1e = "⨂", j1e = "⟶", H1e = "⟹", V1e = "𝒳", U1e = "𝓍", Z1e = "⨆", W1e = "⨄", G1e = "△", K1e = "⋁", X1e = "⋀", Y1e = "Ý", J1e = "ý", Q1e = "Я", ege = "я", tge = "Ŷ", nge = "ŷ", rge = "Ы", oge = "ы", sge = "¥", ige = "𝔜", age = "𝔶", cge = "Ї", lge = "ї", uge = "𝕐", dge = "𝕪", fge = "𝒴", pge = "𝓎", hge = "Ю", gge = "ю", mge = "ÿ", vge = "Ÿ", _ge = "Ź", bge = "ź", yge = "Ž", wge = "ž", kge = "З", Cge = "з", xge = "Ż", Sge = "ż", Ege = "ℨ", Age = "​", $ge = "Ζ", Mge = "ζ", Tge = "𝔷", Ige = "ℨ", Lge = "Ж", Oge = "ж", Rge = "⇝", Pge = "𝕫", Bge = "ℤ", zge = "𝒵", Dge = "𝓏", Nge = "‍", qge = "‌", Fge = {
  Aacute: xO,
  aacute: SO,
  Abreve: EO,
  abreve: AO,
  ac: $O,
  acd: MO,
  acE: TO,
  Acirc: IO,
  acirc: LO,
  acute: OO,
  Acy: RO,
  acy: PO,
  AElig: BO,
  aelig: zO,
  af: DO,
  Afr: NO,
  afr: qO,
  Agrave: FO,
  agrave: jO,
  alefsym: HO,
  aleph: VO,
  Alpha: UO,
  alpha: ZO,
  Amacr: WO,
  amacr: GO,
  amalg: KO,
  amp: XO,
  AMP: YO,
  andand: JO,
  And: QO,
  and: eR,
  andd: tR,
  andslope: nR,
  andv: rR,
  ang: oR,
  ange: sR,
  angle: iR,
  angmsdaa: aR,
  angmsdab: cR,
  angmsdac: lR,
  angmsdad: uR,
  angmsdae: dR,
  angmsdaf: fR,
  angmsdag: pR,
  angmsdah: hR,
  angmsd: gR,
  angrt: mR,
  angrtvb: vR,
  angrtvbd: _R,
  angsph: bR,
  angst: yR,
  angzarr: wR,
  Aogon: kR,
  aogon: CR,
  Aopf: xR,
  aopf: SR,
  apacir: ER,
  ap: AR,
  apE: $R,
  ape: MR,
  apid: TR,
  apos: IR,
  ApplyFunction: LR,
  approx: OR,
  approxeq: RR,
  Aring: PR,
  aring: BR,
  Ascr: zR,
  ascr: DR,
  Assign: NR,
  ast: qR,
  asymp: FR,
  asympeq: jR,
  Atilde: HR,
  atilde: VR,
  Auml: UR,
  auml: ZR,
  awconint: WR,
  awint: GR,
  backcong: KR,
  backepsilon: XR,
  backprime: YR,
  backsim: JR,
  backsimeq: QR,
  Backslash: eP,
  Barv: tP,
  barvee: nP,
  barwed: rP,
  Barwed: oP,
  barwedge: sP,
  bbrk: iP,
  bbrktbrk: aP,
  bcong: cP,
  Bcy: lP,
  bcy: uP,
  bdquo: dP,
  becaus: fP,
  because: pP,
  Because: hP,
  bemptyv: gP,
  bepsi: mP,
  bernou: vP,
  Bernoullis: _P,
  Beta: bP,
  beta: yP,
  beth: wP,
  between: kP,
  Bfr: CP,
  bfr: xP,
  bigcap: SP,
  bigcirc: EP,
  bigcup: AP,
  bigodot: $P,
  bigoplus: MP,
  bigotimes: TP,
  bigsqcup: IP,
  bigstar: LP,
  bigtriangledown: OP,
  bigtriangleup: RP,
  biguplus: PP,
  bigvee: BP,
  bigwedge: zP,
  bkarow: DP,
  blacklozenge: NP,
  blacksquare: qP,
  blacktriangle: FP,
  blacktriangledown: jP,
  blacktriangleleft: HP,
  blacktriangleright: VP,
  blank: UP,
  blk12: ZP,
  blk14: WP,
  blk34: GP,
  block: KP,
  bne: XP,
  bnequiv: YP,
  bNot: JP,
  bnot: QP,
  Bopf: eB,
  bopf: tB,
  bot: nB,
  bottom: rB,
  bowtie: oB,
  boxbox: sB,
  boxdl: iB,
  boxdL: aB,
  boxDl: cB,
  boxDL: lB,
  boxdr: uB,
  boxdR: dB,
  boxDr: fB,
  boxDR: pB,
  boxh: hB,
  boxH: gB,
  boxhd: mB,
  boxHd: vB,
  boxhD: _B,
  boxHD: bB,
  boxhu: yB,
  boxHu: wB,
  boxhU: kB,
  boxHU: CB,
  boxminus: xB,
  boxplus: SB,
  boxtimes: EB,
  boxul: AB,
  boxuL: $B,
  boxUl: MB,
  boxUL: TB,
  boxur: IB,
  boxuR: LB,
  boxUr: OB,
  boxUR: RB,
  boxv: PB,
  boxV: BB,
  boxvh: zB,
  boxvH: DB,
  boxVh: NB,
  boxVH: qB,
  boxvl: FB,
  boxvL: jB,
  boxVl: HB,
  boxVL: VB,
  boxvr: UB,
  boxvR: ZB,
  boxVr: WB,
  boxVR: GB,
  bprime: KB,
  breve: XB,
  Breve: YB,
  brvbar: JB,
  bscr: QB,
  Bscr: ez,
  bsemi: tz,
  bsim: nz,
  bsime: rz,
  bsolb: oz,
  bsol: sz,
  bsolhsub: iz,
  bull: az,
  bullet: cz,
  bump: lz,
  bumpE: uz,
  bumpe: dz,
  Bumpeq: fz,
  bumpeq: pz,
  Cacute: hz,
  cacute: gz,
  capand: mz,
  capbrcup: vz,
  capcap: _z,
  cap: bz,
  Cap: yz,
  capcup: wz,
  capdot: kz,
  CapitalDifferentialD: Cz,
  caps: xz,
  caret: Sz,
  caron: Ez,
  Cayleys: Az,
  ccaps: $z,
  Ccaron: Mz,
  ccaron: Tz,
  Ccedil: Iz,
  ccedil: Lz,
  Ccirc: Oz,
  ccirc: Rz,
  Cconint: Pz,
  ccups: Bz,
  ccupssm: zz,
  Cdot: Dz,
  cdot: Nz,
  cedil: qz,
  Cedilla: Fz,
  cemptyv: jz,
  cent: Hz,
  centerdot: Vz,
  CenterDot: Uz,
  cfr: Zz,
  Cfr: Wz,
  CHcy: Gz,
  chcy: Kz,
  check: Xz,
  checkmark: Yz,
  Chi: Jz,
  chi: Qz,
  circ: eD,
  circeq: tD,
  circlearrowleft: nD,
  circlearrowright: rD,
  circledast: oD,
  circledcirc: sD,
  circleddash: iD,
  CircleDot: aD,
  circledR: cD,
  circledS: lD,
  CircleMinus: uD,
  CirclePlus: dD,
  CircleTimes: fD,
  cir: pD,
  cirE: hD,
  cire: gD,
  cirfnint: mD,
  cirmid: vD,
  cirscir: _D,
  ClockwiseContourIntegral: bD,
  CloseCurlyDoubleQuote: yD,
  CloseCurlyQuote: wD,
  clubs: kD,
  clubsuit: CD,
  colon: xD,
  Colon: SD,
  Colone: ED,
  colone: AD,
  coloneq: $D,
  comma: MD,
  commat: TD,
  comp: ID,
  compfn: LD,
  complement: OD,
  complexes: RD,
  cong: PD,
  congdot: BD,
  Congruent: zD,
  conint: DD,
  Conint: ND,
  ContourIntegral: qD,
  copf: FD,
  Copf: jD,
  coprod: HD,
  Coproduct: VD,
  copy: UD,
  COPY: ZD,
  copysr: WD,
  CounterClockwiseContourIntegral: GD,
  crarr: KD,
  cross: XD,
  Cross: YD,
  Cscr: JD,
  cscr: QD,
  csub: eN,
  csube: tN,
  csup: nN,
  csupe: rN,
  ctdot: oN,
  cudarrl: sN,
  cudarrr: iN,
  cuepr: aN,
  cuesc: cN,
  cularr: lN,
  cularrp: uN,
  cupbrcap: dN,
  cupcap: fN,
  CupCap: pN,
  cup: hN,
  Cup: gN,
  cupcup: mN,
  cupdot: vN,
  cupor: _N,
  cups: bN,
  curarr: yN,
  curarrm: wN,
  curlyeqprec: kN,
  curlyeqsucc: CN,
  curlyvee: xN,
  curlywedge: SN,
  curren: EN,
  curvearrowleft: AN,
  curvearrowright: $N,
  cuvee: MN,
  cuwed: TN,
  cwconint: IN,
  cwint: LN,
  cylcty: ON,
  dagger: RN,
  Dagger: PN,
  daleth: BN,
  darr: zN,
  Darr: DN,
  dArr: NN,
  dash: qN,
  Dashv: FN,
  dashv: jN,
  dbkarow: HN,
  dblac: VN,
  Dcaron: UN,
  dcaron: ZN,
  Dcy: WN,
  dcy: GN,
  ddagger: KN,
  ddarr: XN,
  DD: YN,
  dd: JN,
  DDotrahd: QN,
  ddotseq: eq,
  deg: tq,
  Del: nq,
  Delta: rq,
  delta: oq,
  demptyv: sq,
  dfisht: iq,
  Dfr: aq,
  dfr: cq,
  dHar: lq,
  dharl: uq,
  dharr: dq,
  DiacriticalAcute: fq,
  DiacriticalDot: pq,
  DiacriticalDoubleAcute: hq,
  DiacriticalGrave: gq,
  DiacriticalTilde: mq,
  diam: vq,
  diamond: _q,
  Diamond: bq,
  diamondsuit: yq,
  diams: wq,
  die: kq,
  DifferentialD: Cq,
  digamma: xq,
  disin: Sq,
  div: Eq,
  divide: Aq,
  divideontimes: $q,
  divonx: Mq,
  DJcy: Tq,
  djcy: Iq,
  dlcorn: Lq,
  dlcrop: Oq,
  dollar: Rq,
  Dopf: Pq,
  dopf: Bq,
  Dot: zq,
  dot: Dq,
  DotDot: Nq,
  doteq: qq,
  doteqdot: Fq,
  DotEqual: jq,
  dotminus: Hq,
  dotplus: Vq,
  dotsquare: Uq,
  doublebarwedge: Zq,
  DoubleContourIntegral: Wq,
  DoubleDot: Gq,
  DoubleDownArrow: Kq,
  DoubleLeftArrow: Xq,
  DoubleLeftRightArrow: Yq,
  DoubleLeftTee: Jq,
  DoubleLongLeftArrow: Qq,
  DoubleLongLeftRightArrow: eF,
  DoubleLongRightArrow: tF,
  DoubleRightArrow: nF,
  DoubleRightTee: rF,
  DoubleUpArrow: oF,
  DoubleUpDownArrow: sF,
  DoubleVerticalBar: iF,
  DownArrowBar: aF,
  downarrow: cF,
  DownArrow: lF,
  Downarrow: uF,
  DownArrowUpArrow: dF,
  DownBreve: fF,
  downdownarrows: pF,
  downharpoonleft: hF,
  downharpoonright: gF,
  DownLeftRightVector: mF,
  DownLeftTeeVector: vF,
  DownLeftVectorBar: _F,
  DownLeftVector: bF,
  DownRightTeeVector: yF,
  DownRightVectorBar: wF,
  DownRightVector: kF,
  DownTeeArrow: CF,
  DownTee: xF,
  drbkarow: SF,
  drcorn: EF,
  drcrop: AF,
  Dscr: $F,
  dscr: MF,
  DScy: TF,
  dscy: IF,
  dsol: LF,
  Dstrok: OF,
  dstrok: RF,
  dtdot: PF,
  dtri: BF,
  dtrif: zF,
  duarr: DF,
  duhar: NF,
  dwangle: qF,
  DZcy: FF,
  dzcy: jF,
  dzigrarr: HF,
  Eacute: VF,
  eacute: UF,
  easter: ZF,
  Ecaron: WF,
  ecaron: GF,
  Ecirc: KF,
  ecirc: XF,
  ecir: YF,
  ecolon: JF,
  Ecy: QF,
  ecy: ej,
  eDDot: tj,
  Edot: nj,
  edot: rj,
  eDot: oj,
  ee: sj,
  efDot: ij,
  Efr: aj,
  efr: cj,
  eg: lj,
  Egrave: uj,
  egrave: dj,
  egs: fj,
  egsdot: pj,
  el: hj,
  Element: gj,
  elinters: mj,
  ell: vj,
  els: _j,
  elsdot: bj,
  Emacr: yj,
  emacr: wj,
  empty: kj,
  emptyset: Cj,
  EmptySmallSquare: xj,
  emptyv: Sj,
  EmptyVerySmallSquare: Ej,
  emsp13: Aj,
  emsp14: $j,
  emsp: Mj,
  ENG: Tj,
  eng: Ij,
  ensp: Lj,
  Eogon: Oj,
  eogon: Rj,
  Eopf: Pj,
  eopf: Bj,
  epar: zj,
  eparsl: Dj,
  eplus: Nj,
  epsi: qj,
  Epsilon: Fj,
  epsilon: jj,
  epsiv: Hj,
  eqcirc: Vj,
  eqcolon: Uj,
  eqsim: Zj,
  eqslantgtr: Wj,
  eqslantless: Gj,
  Equal: Kj,
  equals: Xj,
  EqualTilde: Yj,
  equest: Jj,
  Equilibrium: Qj,
  equiv: eH,
  equivDD: tH,
  eqvparsl: nH,
  erarr: rH,
  erDot: oH,
  escr: sH,
  Escr: iH,
  esdot: aH,
  Esim: cH,
  esim: lH,
  Eta: uH,
  eta: dH,
  ETH: fH,
  eth: pH,
  Euml: hH,
  euml: gH,
  euro: mH,
  excl: vH,
  exist: _H,
  Exists: bH,
  expectation: yH,
  exponentiale: wH,
  ExponentialE: kH,
  fallingdotseq: CH,
  Fcy: xH,
  fcy: SH,
  female: EH,
  ffilig: AH,
  fflig: $H,
  ffllig: MH,
  Ffr: TH,
  ffr: IH,
  filig: LH,
  FilledSmallSquare: OH,
  FilledVerySmallSquare: RH,
  fjlig: PH,
  flat: BH,
  fllig: zH,
  fltns: DH,
  fnof: NH,
  Fopf: qH,
  fopf: FH,
  forall: jH,
  ForAll: HH,
  fork: VH,
  forkv: UH,
  Fouriertrf: ZH,
  fpartint: WH,
  frac12: GH,
  frac13: KH,
  frac14: XH,
  frac15: YH,
  frac16: JH,
  frac18: QH,
  frac23: eV,
  frac25: tV,
  frac34: nV,
  frac35: rV,
  frac38: oV,
  frac45: sV,
  frac56: iV,
  frac58: aV,
  frac78: cV,
  frasl: lV,
  frown: uV,
  fscr: dV,
  Fscr: fV,
  gacute: pV,
  Gamma: hV,
  gamma: gV,
  Gammad: mV,
  gammad: vV,
  gap: _V,
  Gbreve: bV,
  gbreve: yV,
  Gcedil: wV,
  Gcirc: kV,
  gcirc: CV,
  Gcy: xV,
  gcy: SV,
  Gdot: EV,
  gdot: AV,
  ge: $V,
  gE: MV,
  gEl: TV,
  gel: IV,
  geq: LV,
  geqq: OV,
  geqslant: RV,
  gescc: PV,
  ges: BV,
  gesdot: zV,
  gesdoto: DV,
  gesdotol: NV,
  gesl: qV,
  gesles: FV,
  Gfr: jV,
  gfr: HV,
  gg: VV,
  Gg: UV,
  ggg: ZV,
  gimel: WV,
  GJcy: GV,
  gjcy: KV,
  gla: XV,
  gl: YV,
  glE: JV,
  glj: QV,
  gnap: eU,
  gnapprox: tU,
  gne: nU,
  gnE: rU,
  gneq: oU,
  gneqq: sU,
  gnsim: iU,
  Gopf: aU,
  gopf: cU,
  grave: lU,
  GreaterEqual: uU,
  GreaterEqualLess: dU,
  GreaterFullEqual: fU,
  GreaterGreater: pU,
  GreaterLess: hU,
  GreaterSlantEqual: gU,
  GreaterTilde: mU,
  Gscr: vU,
  gscr: _U,
  gsim: bU,
  gsime: yU,
  gsiml: wU,
  gtcc: kU,
  gtcir: CU,
  gt: xU,
  GT: SU,
  Gt: EU,
  gtdot: AU,
  gtlPar: $U,
  gtquest: MU,
  gtrapprox: TU,
  gtrarr: IU,
  gtrdot: LU,
  gtreqless: OU,
  gtreqqless: RU,
  gtrless: PU,
  gtrsim: BU,
  gvertneqq: zU,
  gvnE: DU,
  Hacek: NU,
  hairsp: qU,
  half: FU,
  hamilt: jU,
  HARDcy: HU,
  hardcy: VU,
  harrcir: UU,
  harr: ZU,
  hArr: WU,
  harrw: GU,
  Hat: KU,
  hbar: XU,
  Hcirc: YU,
  hcirc: JU,
  hearts: QU,
  heartsuit: eZ,
  hellip: tZ,
  hercon: nZ,
  hfr: rZ,
  Hfr: oZ,
  HilbertSpace: sZ,
  hksearow: iZ,
  hkswarow: aZ,
  hoarr: cZ,
  homtht: lZ,
  hookleftarrow: uZ,
  hookrightarrow: dZ,
  hopf: fZ,
  Hopf: pZ,
  horbar: hZ,
  HorizontalLine: gZ,
  hscr: mZ,
  Hscr: vZ,
  hslash: _Z,
  Hstrok: bZ,
  hstrok: yZ,
  HumpDownHump: wZ,
  HumpEqual: kZ,
  hybull: CZ,
  hyphen: xZ,
  Iacute: SZ,
  iacute: EZ,
  ic: AZ,
  Icirc: $Z,
  icirc: MZ,
  Icy: TZ,
  icy: IZ,
  Idot: LZ,
  IEcy: OZ,
  iecy: RZ,
  iexcl: PZ,
  iff: BZ,
  ifr: zZ,
  Ifr: DZ,
  Igrave: NZ,
  igrave: qZ,
  ii: FZ,
  iiiint: jZ,
  iiint: HZ,
  iinfin: VZ,
  iiota: UZ,
  IJlig: ZZ,
  ijlig: WZ,
  Imacr: GZ,
  imacr: KZ,
  image: XZ,
  ImaginaryI: YZ,
  imagline: JZ,
  imagpart: QZ,
  imath: eW,
  Im: tW,
  imof: nW,
  imped: rW,
  Implies: oW,
  incare: sW,
  in: "∈",
  infin: iW,
  infintie: aW,
  inodot: cW,
  intcal: lW,
  int: uW,
  Int: dW,
  integers: fW,
  Integral: pW,
  intercal: hW,
  Intersection: gW,
  intlarhk: mW,
  intprod: vW,
  InvisibleComma: _W,
  InvisibleTimes: bW,
  IOcy: yW,
  iocy: wW,
  Iogon: kW,
  iogon: CW,
  Iopf: xW,
  iopf: SW,
  Iota: EW,
  iota: AW,
  iprod: $W,
  iquest: MW,
  iscr: TW,
  Iscr: IW,
  isin: LW,
  isindot: OW,
  isinE: RW,
  isins: PW,
  isinsv: BW,
  isinv: zW,
  it: DW,
  Itilde: NW,
  itilde: qW,
  Iukcy: FW,
  iukcy: jW,
  Iuml: HW,
  iuml: VW,
  Jcirc: UW,
  jcirc: ZW,
  Jcy: WW,
  jcy: GW,
  Jfr: KW,
  jfr: XW,
  jmath: YW,
  Jopf: JW,
  jopf: QW,
  Jscr: eG,
  jscr: tG,
  Jsercy: nG,
  jsercy: rG,
  Jukcy: oG,
  jukcy: sG,
  Kappa: iG,
  kappa: aG,
  kappav: cG,
  Kcedil: lG,
  kcedil: uG,
  Kcy: dG,
  kcy: fG,
  Kfr: pG,
  kfr: hG,
  kgreen: gG,
  KHcy: mG,
  khcy: vG,
  KJcy: _G,
  kjcy: bG,
  Kopf: yG,
  kopf: wG,
  Kscr: kG,
  kscr: CG,
  lAarr: xG,
  Lacute: SG,
  lacute: EG,
  laemptyv: AG,
  lagran: $G,
  Lambda: MG,
  lambda: TG,
  lang: IG,
  Lang: LG,
  langd: OG,
  langle: RG,
  lap: PG,
  Laplacetrf: BG,
  laquo: zG,
  larrb: DG,
  larrbfs: NG,
  larr: qG,
  Larr: FG,
  lArr: jG,
  larrfs: HG,
  larrhk: VG,
  larrlp: UG,
  larrpl: ZG,
  larrsim: WG,
  larrtl: GG,
  latail: KG,
  lAtail: XG,
  lat: YG,
  late: JG,
  lates: QG,
  lbarr: eK,
  lBarr: tK,
  lbbrk: nK,
  lbrace: rK,
  lbrack: oK,
  lbrke: sK,
  lbrksld: iK,
  lbrkslu: aK,
  Lcaron: cK,
  lcaron: lK,
  Lcedil: uK,
  lcedil: dK,
  lceil: fK,
  lcub: pK,
  Lcy: hK,
  lcy: gK,
  ldca: mK,
  ldquo: vK,
  ldquor: _K,
  ldrdhar: bK,
  ldrushar: yK,
  ldsh: wK,
  le: kK,
  lE: CK,
  LeftAngleBracket: xK,
  LeftArrowBar: SK,
  leftarrow: EK,
  LeftArrow: AK,
  Leftarrow: $K,
  LeftArrowRightArrow: MK,
  leftarrowtail: TK,
  LeftCeiling: IK,
  LeftDoubleBracket: LK,
  LeftDownTeeVector: OK,
  LeftDownVectorBar: RK,
  LeftDownVector: PK,
  LeftFloor: BK,
  leftharpoondown: zK,
  leftharpoonup: DK,
  leftleftarrows: NK,
  leftrightarrow: qK,
  LeftRightArrow: FK,
  Leftrightarrow: jK,
  leftrightarrows: HK,
  leftrightharpoons: VK,
  leftrightsquigarrow: UK,
  LeftRightVector: ZK,
  LeftTeeArrow: WK,
  LeftTee: GK,
  LeftTeeVector: KK,
  leftthreetimes: XK,
  LeftTriangleBar: YK,
  LeftTriangle: JK,
  LeftTriangleEqual: QK,
  LeftUpDownVector: eX,
  LeftUpTeeVector: tX,
  LeftUpVectorBar: nX,
  LeftUpVector: rX,
  LeftVectorBar: oX,
  LeftVector: sX,
  lEg: iX,
  leg: aX,
  leq: cX,
  leqq: lX,
  leqslant: uX,
  lescc: dX,
  les: fX,
  lesdot: pX,
  lesdoto: hX,
  lesdotor: gX,
  lesg: mX,
  lesges: vX,
  lessapprox: _X,
  lessdot: bX,
  lesseqgtr: yX,
  lesseqqgtr: wX,
  LessEqualGreater: kX,
  LessFullEqual: CX,
  LessGreater: xX,
  lessgtr: SX,
  LessLess: EX,
  lesssim: AX,
  LessSlantEqual: $X,
  LessTilde: MX,
  lfisht: TX,
  lfloor: IX,
  Lfr: LX,
  lfr: OX,
  lg: RX,
  lgE: PX,
  lHar: BX,
  lhard: zX,
  lharu: DX,
  lharul: NX,
  lhblk: qX,
  LJcy: FX,
  ljcy: jX,
  llarr: HX,
  ll: VX,
  Ll: UX,
  llcorner: ZX,
  Lleftarrow: WX,
  llhard: GX,
  lltri: KX,
  Lmidot: XX,
  lmidot: YX,
  lmoustache: JX,
  lmoust: QX,
  lnap: eY,
  lnapprox: tY,
  lne: nY,
  lnE: rY,
  lneq: oY,
  lneqq: sY,
  lnsim: iY,
  loang: aY,
  loarr: cY,
  lobrk: lY,
  longleftarrow: uY,
  LongLeftArrow: dY,
  Longleftarrow: fY,
  longleftrightarrow: pY,
  LongLeftRightArrow: hY,
  Longleftrightarrow: gY,
  longmapsto: mY,
  longrightarrow: vY,
  LongRightArrow: _Y,
  Longrightarrow: bY,
  looparrowleft: yY,
  looparrowright: wY,
  lopar: kY,
  Lopf: CY,
  lopf: xY,
  loplus: SY,
  lotimes: EY,
  lowast: AY,
  lowbar: $Y,
  LowerLeftArrow: MY,
  LowerRightArrow: TY,
  loz: IY,
  lozenge: LY,
  lozf: OY,
  lpar: RY,
  lparlt: PY,
  lrarr: BY,
  lrcorner: zY,
  lrhar: DY,
  lrhard: NY,
  lrm: qY,
  lrtri: FY,
  lsaquo: jY,
  lscr: HY,
  Lscr: VY,
  lsh: UY,
  Lsh: ZY,
  lsim: WY,
  lsime: GY,
  lsimg: KY,
  lsqb: XY,
  lsquo: YY,
  lsquor: JY,
  Lstrok: QY,
  lstrok: eJ,
  ltcc: tJ,
  ltcir: nJ,
  lt: rJ,
  LT: oJ,
  Lt: sJ,
  ltdot: iJ,
  lthree: aJ,
  ltimes: cJ,
  ltlarr: lJ,
  ltquest: uJ,
  ltri: dJ,
  ltrie: fJ,
  ltrif: pJ,
  ltrPar: hJ,
  lurdshar: gJ,
  luruhar: mJ,
  lvertneqq: vJ,
  lvnE: _J,
  macr: bJ,
  male: yJ,
  malt: wJ,
  maltese: kJ,
  Map: "⤅",
  map: CJ,
  mapsto: xJ,
  mapstodown: SJ,
  mapstoleft: EJ,
  mapstoup: AJ,
  marker: $J,
  mcomma: MJ,
  Mcy: TJ,
  mcy: IJ,
  mdash: LJ,
  mDDot: OJ,
  measuredangle: RJ,
  MediumSpace: PJ,
  Mellintrf: BJ,
  Mfr: zJ,
  mfr: DJ,
  mho: NJ,
  micro: qJ,
  midast: FJ,
  midcir: jJ,
  mid: HJ,
  middot: VJ,
  minusb: UJ,
  minus: ZJ,
  minusd: WJ,
  minusdu: GJ,
  MinusPlus: KJ,
  mlcp: XJ,
  mldr: YJ,
  mnplus: JJ,
  models: QJ,
  Mopf: eQ,
  mopf: tQ,
  mp: nQ,
  mscr: rQ,
  Mscr: oQ,
  mstpos: sQ,
  Mu: iQ,
  mu: aQ,
  multimap: cQ,
  mumap: lQ,
  nabla: uQ,
  Nacute: dQ,
  nacute: fQ,
  nang: pQ,
  nap: hQ,
  napE: gQ,
  napid: mQ,
  napos: vQ,
  napprox: _Q,
  natural: bQ,
  naturals: yQ,
  natur: wQ,
  nbsp: kQ,
  nbump: CQ,
  nbumpe: xQ,
  ncap: SQ,
  Ncaron: EQ,
  ncaron: AQ,
  Ncedil: $Q,
  ncedil: MQ,
  ncong: TQ,
  ncongdot: IQ,
  ncup: LQ,
  Ncy: OQ,
  ncy: RQ,
  ndash: PQ,
  nearhk: BQ,
  nearr: zQ,
  neArr: DQ,
  nearrow: NQ,
  ne: qQ,
  nedot: FQ,
  NegativeMediumSpace: jQ,
  NegativeThickSpace: HQ,
  NegativeThinSpace: VQ,
  NegativeVeryThinSpace: UQ,
  nequiv: ZQ,
  nesear: WQ,
  nesim: GQ,
  NestedGreaterGreater: KQ,
  NestedLessLess: XQ,
  NewLine: YQ,
  nexist: JQ,
  nexists: QQ,
  Nfr: eee,
  nfr: tee,
  ngE: nee,
  nge: ree,
  ngeq: oee,
  ngeqq: see,
  ngeqslant: iee,
  nges: aee,
  nGg: cee,
  ngsim: lee,
  nGt: uee,
  ngt: dee,
  ngtr: fee,
  nGtv: pee,
  nharr: hee,
  nhArr: gee,
  nhpar: mee,
  ni: vee,
  nis: _ee,
  nisd: bee,
  niv: yee,
  NJcy: wee,
  njcy: kee,
  nlarr: Cee,
  nlArr: xee,
  nldr: See,
  nlE: Eee,
  nle: Aee,
  nleftarrow: $ee,
  nLeftarrow: Mee,
  nleftrightarrow: Tee,
  nLeftrightarrow: Iee,
  nleq: Lee,
  nleqq: Oee,
  nleqslant: Ree,
  nles: Pee,
  nless: Bee,
  nLl: zee,
  nlsim: Dee,
  nLt: Nee,
  nlt: qee,
  nltri: Fee,
  nltrie: jee,
  nLtv: Hee,
  nmid: Vee,
  NoBreak: Uee,
  NonBreakingSpace: Zee,
  nopf: Wee,
  Nopf: Gee,
  Not: Kee,
  not: Xee,
  NotCongruent: Yee,
  NotCupCap: Jee,
  NotDoubleVerticalBar: Qee,
  NotElement: ete,
  NotEqual: tte,
  NotEqualTilde: nte,
  NotExists: rte,
  NotGreater: ote,
  NotGreaterEqual: ste,
  NotGreaterFullEqual: ite,
  NotGreaterGreater: ate,
  NotGreaterLess: cte,
  NotGreaterSlantEqual: lte,
  NotGreaterTilde: ute,
  NotHumpDownHump: dte,
  NotHumpEqual: fte,
  notin: pte,
  notindot: hte,
  notinE: gte,
  notinva: mte,
  notinvb: vte,
  notinvc: _te,
  NotLeftTriangleBar: bte,
  NotLeftTriangle: yte,
  NotLeftTriangleEqual: wte,
  NotLess: kte,
  NotLessEqual: Cte,
  NotLessGreater: xte,
  NotLessLess: Ste,
  NotLessSlantEqual: Ete,
  NotLessTilde: Ate,
  NotNestedGreaterGreater: $te,
  NotNestedLessLess: Mte,
  notni: Tte,
  notniva: Ite,
  notnivb: Lte,
  notnivc: Ote,
  NotPrecedes: Rte,
  NotPrecedesEqual: Pte,
  NotPrecedesSlantEqual: Bte,
  NotReverseElement: zte,
  NotRightTriangleBar: Dte,
  NotRightTriangle: Nte,
  NotRightTriangleEqual: qte,
  NotSquareSubset: Fte,
  NotSquareSubsetEqual: jte,
  NotSquareSuperset: Hte,
  NotSquareSupersetEqual: Vte,
  NotSubset: Ute,
  NotSubsetEqual: Zte,
  NotSucceeds: Wte,
  NotSucceedsEqual: Gte,
  NotSucceedsSlantEqual: Kte,
  NotSucceedsTilde: Xte,
  NotSuperset: Yte,
  NotSupersetEqual: Jte,
  NotTilde: Qte,
  NotTildeEqual: ene,
  NotTildeFullEqual: tne,
  NotTildeTilde: nne,
  NotVerticalBar: rne,
  nparallel: one,
  npar: sne,
  nparsl: ine,
  npart: ane,
  npolint: cne,
  npr: lne,
  nprcue: une,
  nprec: dne,
  npreceq: fne,
  npre: pne,
  nrarrc: hne,
  nrarr: gne,
  nrArr: mne,
  nrarrw: vne,
  nrightarrow: _ne,
  nRightarrow: bne,
  nrtri: yne,
  nrtrie: wne,
  nsc: kne,
  nsccue: Cne,
  nsce: xne,
  Nscr: Sne,
  nscr: Ene,
  nshortmid: Ane,
  nshortparallel: $ne,
  nsim: Mne,
  nsime: Tne,
  nsimeq: Ine,
  nsmid: Lne,
  nspar: One,
  nsqsube: Rne,
  nsqsupe: Pne,
  nsub: Bne,
  nsubE: zne,
  nsube: Dne,
  nsubset: Nne,
  nsubseteq: qne,
  nsubseteqq: Fne,
  nsucc: jne,
  nsucceq: Hne,
  nsup: Vne,
  nsupE: Une,
  nsupe: Zne,
  nsupset: Wne,
  nsupseteq: Gne,
  nsupseteqq: Kne,
  ntgl: Xne,
  Ntilde: Yne,
  ntilde: Jne,
  ntlg: Qne,
  ntriangleleft: ere,
  ntrianglelefteq: tre,
  ntriangleright: nre,
  ntrianglerighteq: rre,
  Nu: ore,
  nu: sre,
  num: ire,
  numero: are,
  numsp: cre,
  nvap: lre,
  nvdash: ure,
  nvDash: dre,
  nVdash: fre,
  nVDash: pre,
  nvge: hre,
  nvgt: gre,
  nvHarr: mre,
  nvinfin: vre,
  nvlArr: _re,
  nvle: bre,
  nvlt: yre,
  nvltrie: wre,
  nvrArr: kre,
  nvrtrie: Cre,
  nvsim: xre,
  nwarhk: Sre,
  nwarr: Ere,
  nwArr: Are,
  nwarrow: $re,
  nwnear: Mre,
  Oacute: Tre,
  oacute: Ire,
  oast: Lre,
  Ocirc: Ore,
  ocirc: Rre,
  ocir: Pre,
  Ocy: Bre,
  ocy: zre,
  odash: Dre,
  Odblac: Nre,
  odblac: qre,
  odiv: Fre,
  odot: jre,
  odsold: Hre,
  OElig: Vre,
  oelig: Ure,
  ofcir: Zre,
  Ofr: Wre,
  ofr: Gre,
  ogon: Kre,
  Ograve: Xre,
  ograve: Yre,
  ogt: Jre,
  ohbar: Qre,
  ohm: eoe,
  oint: toe,
  olarr: noe,
  olcir: roe,
  olcross: ooe,
  oline: soe,
  olt: ioe,
  Omacr: aoe,
  omacr: coe,
  Omega: loe,
  omega: uoe,
  Omicron: doe,
  omicron: foe,
  omid: poe,
  ominus: hoe,
  Oopf: goe,
  oopf: moe,
  opar: voe,
  OpenCurlyDoubleQuote: _oe,
  OpenCurlyQuote: boe,
  operp: yoe,
  oplus: woe,
  orarr: koe,
  Or: Coe,
  or: xoe,
  ord: Soe,
  order: Eoe,
  orderof: Aoe,
  ordf: $oe,
  ordm: Moe,
  origof: Toe,
  oror: Ioe,
  orslope: Loe,
  orv: Ooe,
  oS: Roe,
  Oscr: Poe,
  oscr: Boe,
  Oslash: zoe,
  oslash: Doe,
  osol: Noe,
  Otilde: qoe,
  otilde: Foe,
  otimesas: joe,
  Otimes: Hoe,
  otimes: Voe,
  Ouml: Uoe,
  ouml: Zoe,
  ovbar: Woe,
  OverBar: Goe,
  OverBrace: Koe,
  OverBracket: Xoe,
  OverParenthesis: Yoe,
  para: Joe,
  parallel: Qoe,
  par: ese,
  parsim: tse,
  parsl: nse,
  part: rse,
  PartialD: ose,
  Pcy: sse,
  pcy: ise,
  percnt: ase,
  period: cse,
  permil: lse,
  perp: use,
  pertenk: dse,
  Pfr: fse,
  pfr: pse,
  Phi: hse,
  phi: gse,
  phiv: mse,
  phmmat: vse,
  phone: _se,
  Pi: bse,
  pi: yse,
  pitchfork: wse,
  piv: kse,
  planck: Cse,
  planckh: xse,
  plankv: Sse,
  plusacir: Ese,
  plusb: Ase,
  pluscir: $se,
  plus: Mse,
  plusdo: Tse,
  plusdu: Ise,
  pluse: Lse,
  PlusMinus: Ose,
  plusmn: Rse,
  plussim: Pse,
  plustwo: Bse,
  pm: zse,
  Poincareplane: Dse,
  pointint: Nse,
  popf: qse,
  Popf: Fse,
  pound: jse,
  prap: Hse,
  Pr: Vse,
  pr: Use,
  prcue: Zse,
  precapprox: Wse,
  prec: Gse,
  preccurlyeq: Kse,
  Precedes: Xse,
  PrecedesEqual: Yse,
  PrecedesSlantEqual: Jse,
  PrecedesTilde: Qse,
  preceq: eie,
  precnapprox: tie,
  precneqq: nie,
  precnsim: rie,
  pre: oie,
  prE: sie,
  precsim: iie,
  prime: aie,
  Prime: cie,
  primes: lie,
  prnap: uie,
  prnE: die,
  prnsim: fie,
  prod: pie,
  Product: hie,
  profalar: gie,
  profline: mie,
  profsurf: vie,
  prop: _ie,
  Proportional: bie,
  Proportion: yie,
  propto: wie,
  prsim: kie,
  prurel: Cie,
  Pscr: xie,
  pscr: Sie,
  Psi: Eie,
  psi: Aie,
  puncsp: $ie,
  Qfr: Mie,
  qfr: Tie,
  qint: Iie,
  qopf: Lie,
  Qopf: Oie,
  qprime: Rie,
  Qscr: Pie,
  qscr: Bie,
  quaternions: zie,
  quatint: Die,
  quest: Nie,
  questeq: qie,
  quot: Fie,
  QUOT: jie,
  rAarr: Hie,
  race: Vie,
  Racute: Uie,
  racute: Zie,
  radic: Wie,
  raemptyv: Gie,
  rang: Kie,
  Rang: Xie,
  rangd: Yie,
  range: Jie,
  rangle: Qie,
  raquo: eae,
  rarrap: tae,
  rarrb: nae,
  rarrbfs: rae,
  rarrc: oae,
  rarr: sae,
  Rarr: iae,
  rArr: aae,
  rarrfs: cae,
  rarrhk: lae,
  rarrlp: uae,
  rarrpl: dae,
  rarrsim: fae,
  Rarrtl: pae,
  rarrtl: hae,
  rarrw: gae,
  ratail: mae,
  rAtail: vae,
  ratio: _ae,
  rationals: bae,
  rbarr: yae,
  rBarr: wae,
  RBarr: kae,
  rbbrk: Cae,
  rbrace: xae,
  rbrack: Sae,
  rbrke: Eae,
  rbrksld: Aae,
  rbrkslu: $ae,
  Rcaron: Mae,
  rcaron: Tae,
  Rcedil: Iae,
  rcedil: Lae,
  rceil: Oae,
  rcub: Rae,
  Rcy: Pae,
  rcy: Bae,
  rdca: zae,
  rdldhar: Dae,
  rdquo: Nae,
  rdquor: qae,
  rdsh: Fae,
  real: jae,
  realine: Hae,
  realpart: Vae,
  reals: Uae,
  Re: Zae,
  rect: Wae,
  reg: Gae,
  REG: Kae,
  ReverseElement: Xae,
  ReverseEquilibrium: Yae,
  ReverseUpEquilibrium: Jae,
  rfisht: Qae,
  rfloor: ece,
  rfr: tce,
  Rfr: nce,
  rHar: rce,
  rhard: oce,
  rharu: sce,
  rharul: ice,
  Rho: ace,
  rho: cce,
  rhov: lce,
  RightAngleBracket: uce,
  RightArrowBar: dce,
  rightarrow: fce,
  RightArrow: pce,
  Rightarrow: hce,
  RightArrowLeftArrow: gce,
  rightarrowtail: mce,
  RightCeiling: vce,
  RightDoubleBracket: _ce,
  RightDownTeeVector: bce,
  RightDownVectorBar: yce,
  RightDownVector: wce,
  RightFloor: kce,
  rightharpoondown: Cce,
  rightharpoonup: xce,
  rightleftarrows: Sce,
  rightleftharpoons: Ece,
  rightrightarrows: Ace,
  rightsquigarrow: $ce,
  RightTeeArrow: Mce,
  RightTee: Tce,
  RightTeeVector: Ice,
  rightthreetimes: Lce,
  RightTriangleBar: Oce,
  RightTriangle: Rce,
  RightTriangleEqual: Pce,
  RightUpDownVector: Bce,
  RightUpTeeVector: zce,
  RightUpVectorBar: Dce,
  RightUpVector: Nce,
  RightVectorBar: qce,
  RightVector: Fce,
  ring: jce,
  risingdotseq: Hce,
  rlarr: Vce,
  rlhar: Uce,
  rlm: Zce,
  rmoustache: Wce,
  rmoust: Gce,
  rnmid: Kce,
  roang: Xce,
  roarr: Yce,
  robrk: Jce,
  ropar: Qce,
  ropf: ele,
  Ropf: tle,
  roplus: nle,
  rotimes: rle,
  RoundImplies: ole,
  rpar: sle,
  rpargt: ile,
  rppolint: ale,
  rrarr: cle,
  Rrightarrow: lle,
  rsaquo: ule,
  rscr: dle,
  Rscr: fle,
  rsh: ple,
  Rsh: hle,
  rsqb: gle,
  rsquo: mle,
  rsquor: vle,
  rthree: _le,
  rtimes: ble,
  rtri: yle,
  rtrie: wle,
  rtrif: kle,
  rtriltri: Cle,
  RuleDelayed: xle,
  ruluhar: Sle,
  rx: Ele,
  Sacute: Ale,
  sacute: $le,
  sbquo: Mle,
  scap: Tle,
  Scaron: Ile,
  scaron: Lle,
  Sc: Ole,
  sc: Rle,
  sccue: Ple,
  sce: Ble,
  scE: zle,
  Scedil: Dle,
  scedil: Nle,
  Scirc: qle,
  scirc: Fle,
  scnap: jle,
  scnE: Hle,
  scnsim: Vle,
  scpolint: Ule,
  scsim: Zle,
  Scy: Wle,
  scy: Gle,
  sdotb: Kle,
  sdot: Xle,
  sdote: Yle,
  searhk: Jle,
  searr: Qle,
  seArr: eue,
  searrow: tue,
  sect: nue,
  semi: rue,
  seswar: oue,
  setminus: sue,
  setmn: iue,
  sext: aue,
  Sfr: cue,
  sfr: lue,
  sfrown: uue,
  sharp: due,
  SHCHcy: fue,
  shchcy: pue,
  SHcy: hue,
  shcy: gue,
  ShortDownArrow: mue,
  ShortLeftArrow: vue,
  shortmid: _ue,
  shortparallel: bue,
  ShortRightArrow: yue,
  ShortUpArrow: wue,
  shy: kue,
  Sigma: Cue,
  sigma: xue,
  sigmaf: Sue,
  sigmav: Eue,
  sim: Aue,
  simdot: $ue,
  sime: Mue,
  simeq: Tue,
  simg: Iue,
  simgE: Lue,
  siml: Oue,
  simlE: Rue,
  simne: Pue,
  simplus: Bue,
  simrarr: zue,
  slarr: Due,
  SmallCircle: Nue,
  smallsetminus: que,
  smashp: Fue,
  smeparsl: jue,
  smid: Hue,
  smile: Vue,
  smt: Uue,
  smte: Zue,
  smtes: Wue,
  SOFTcy: Gue,
  softcy: Kue,
  solbar: Xue,
  solb: Yue,
  sol: Jue,
  Sopf: Que,
  sopf: ede,
  spades: tde,
  spadesuit: nde,
  spar: rde,
  sqcap: ode,
  sqcaps: sde,
  sqcup: ide,
  sqcups: ade,
  Sqrt: cde,
  sqsub: lde,
  sqsube: ude,
  sqsubset: dde,
  sqsubseteq: fde,
  sqsup: pde,
  sqsupe: hde,
  sqsupset: gde,
  sqsupseteq: mde,
  square: vde,
  Square: _de,
  SquareIntersection: bde,
  SquareSubset: yde,
  SquareSubsetEqual: wde,
  SquareSuperset: kde,
  SquareSupersetEqual: Cde,
  SquareUnion: xde,
  squarf: Sde,
  squ: Ede,
  squf: Ade,
  srarr: $de,
  Sscr: Mde,
  sscr: Tde,
  ssetmn: Ide,
  ssmile: Lde,
  sstarf: Ode,
  Star: Rde,
  star: Pde,
  starf: Bde,
  straightepsilon: zde,
  straightphi: Dde,
  strns: Nde,
  sub: qde,
  Sub: Fde,
  subdot: jde,
  subE: Hde,
  sube: Vde,
  subedot: Ude,
  submult: Zde,
  subnE: Wde,
  subne: Gde,
  subplus: Kde,
  subrarr: Xde,
  subset: Yde,
  Subset: Jde,
  subseteq: Qde,
  subseteqq: efe,
  SubsetEqual: tfe,
  subsetneq: nfe,
  subsetneqq: rfe,
  subsim: ofe,
  subsub: sfe,
  subsup: ife,
  succapprox: afe,
  succ: cfe,
  succcurlyeq: lfe,
  Succeeds: ufe,
  SucceedsEqual: dfe,
  SucceedsSlantEqual: ffe,
  SucceedsTilde: pfe,
  succeq: hfe,
  succnapprox: gfe,
  succneqq: mfe,
  succnsim: vfe,
  succsim: _fe,
  SuchThat: bfe,
  sum: yfe,
  Sum: wfe,
  sung: kfe,
  sup1: Cfe,
  sup2: xfe,
  sup3: Sfe,
  sup: Efe,
  Sup: Afe,
  supdot: $fe,
  supdsub: Mfe,
  supE: Tfe,
  supe: Ife,
  supedot: Lfe,
  Superset: Ofe,
  SupersetEqual: Rfe,
  suphsol: Pfe,
  suphsub: Bfe,
  suplarr: zfe,
  supmult: Dfe,
  supnE: Nfe,
  supne: qfe,
  supplus: Ffe,
  supset: jfe,
  Supset: Hfe,
  supseteq: Vfe,
  supseteqq: Ufe,
  supsetneq: Zfe,
  supsetneqq: Wfe,
  supsim: Gfe,
  supsub: Kfe,
  supsup: Xfe,
  swarhk: Yfe,
  swarr: Jfe,
  swArr: Qfe,
  swarrow: e0e,
  swnwar: t0e,
  szlig: n0e,
  Tab: r0e,
  target: o0e,
  Tau: s0e,
  tau: i0e,
  tbrk: a0e,
  Tcaron: c0e,
  tcaron: l0e,
  Tcedil: u0e,
  tcedil: d0e,
  Tcy: f0e,
  tcy: p0e,
  tdot: h0e,
  telrec: g0e,
  Tfr: m0e,
  tfr: v0e,
  there4: _0e,
  therefore: b0e,
  Therefore: y0e,
  Theta: w0e,
  theta: k0e,
  thetasym: C0e,
  thetav: x0e,
  thickapprox: S0e,
  thicksim: E0e,
  ThickSpace: A0e,
  ThinSpace: $0e,
  thinsp: M0e,
  thkap: T0e,
  thksim: I0e,
  THORN: L0e,
  thorn: O0e,
  tilde: R0e,
  Tilde: P0e,
  TildeEqual: B0e,
  TildeFullEqual: z0e,
  TildeTilde: D0e,
  timesbar: N0e,
  timesb: q0e,
  times: F0e,
  timesd: j0e,
  tint: H0e,
  toea: V0e,
  topbot: U0e,
  topcir: Z0e,
  top: W0e,
  Topf: G0e,
  topf: K0e,
  topfork: X0e,
  tosa: Y0e,
  tprime: J0e,
  trade: Q0e,
  TRADE: epe,
  triangle: tpe,
  triangledown: npe,
  triangleleft: rpe,
  trianglelefteq: ope,
  triangleq: spe,
  triangleright: ipe,
  trianglerighteq: ape,
  tridot: cpe,
  trie: lpe,
  triminus: upe,
  TripleDot: dpe,
  triplus: fpe,
  trisb: ppe,
  tritime: hpe,
  trpezium: gpe,
  Tscr: mpe,
  tscr: vpe,
  TScy: _pe,
  tscy: bpe,
  TSHcy: ype,
  tshcy: wpe,
  Tstrok: kpe,
  tstrok: Cpe,
  twixt: xpe,
  twoheadleftarrow: Spe,
  twoheadrightarrow: Epe,
  Uacute: Ape,
  uacute: $pe,
  uarr: Mpe,
  Uarr: Tpe,
  uArr: Ipe,
  Uarrocir: Lpe,
  Ubrcy: Ope,
  ubrcy: Rpe,
  Ubreve: Ppe,
  ubreve: Bpe,
  Ucirc: zpe,
  ucirc: Dpe,
  Ucy: Npe,
  ucy: qpe,
  udarr: Fpe,
  Udblac: jpe,
  udblac: Hpe,
  udhar: Vpe,
  ufisht: Upe,
  Ufr: Zpe,
  ufr: Wpe,
  Ugrave: Gpe,
  ugrave: Kpe,
  uHar: Xpe,
  uharl: Ype,
  uharr: Jpe,
  uhblk: Qpe,
  ulcorn: ehe,
  ulcorner: the,
  ulcrop: nhe,
  ultri: rhe,
  Umacr: ohe,
  umacr: she,
  uml: ihe,
  UnderBar: ahe,
  UnderBrace: che,
  UnderBracket: lhe,
  UnderParenthesis: uhe,
  Union: dhe,
  UnionPlus: fhe,
  Uogon: phe,
  uogon: hhe,
  Uopf: ghe,
  uopf: mhe,
  UpArrowBar: vhe,
  uparrow: _he,
  UpArrow: bhe,
  Uparrow: yhe,
  UpArrowDownArrow: whe,
  updownarrow: khe,
  UpDownArrow: Che,
  Updownarrow: xhe,
  UpEquilibrium: She,
  upharpoonleft: Ehe,
  upharpoonright: Ahe,
  uplus: $he,
  UpperLeftArrow: Mhe,
  UpperRightArrow: The,
  upsi: Ihe,
  Upsi: Lhe,
  upsih: Ohe,
  Upsilon: Rhe,
  upsilon: Phe,
  UpTeeArrow: Bhe,
  UpTee: zhe,
  upuparrows: Dhe,
  urcorn: Nhe,
  urcorner: qhe,
  urcrop: Fhe,
  Uring: jhe,
  uring: Hhe,
  urtri: Vhe,
  Uscr: Uhe,
  uscr: Zhe,
  utdot: Whe,
  Utilde: Ghe,
  utilde: Khe,
  utri: Xhe,
  utrif: Yhe,
  uuarr: Jhe,
  Uuml: Qhe,
  uuml: e2e,
  uwangle: t2e,
  vangrt: n2e,
  varepsilon: r2e,
  varkappa: o2e,
  varnothing: s2e,
  varphi: i2e,
  varpi: a2e,
  varpropto: c2e,
  varr: l2e,
  vArr: u2e,
  varrho: d2e,
  varsigma: f2e,
  varsubsetneq: p2e,
  varsubsetneqq: h2e,
  varsupsetneq: g2e,
  varsupsetneqq: m2e,
  vartheta: v2e,
  vartriangleleft: _2e,
  vartriangleright: b2e,
  vBar: y2e,
  Vbar: w2e,
  vBarv: k2e,
  Vcy: C2e,
  vcy: x2e,
  vdash: S2e,
  vDash: E2e,
  Vdash: A2e,
  VDash: $2e,
  Vdashl: M2e,
  veebar: T2e,
  vee: I2e,
  Vee: L2e,
  veeeq: O2e,
  vellip: R2e,
  verbar: P2e,
  Verbar: B2e,
  vert: z2e,
  Vert: D2e,
  VerticalBar: N2e,
  VerticalLine: q2e,
  VerticalSeparator: F2e,
  VerticalTilde: j2e,
  VeryThinSpace: H2e,
  Vfr: V2e,
  vfr: U2e,
  vltri: Z2e,
  vnsub: W2e,
  vnsup: G2e,
  Vopf: K2e,
  vopf: X2e,
  vprop: Y2e,
  vrtri: J2e,
  Vscr: Q2e,
  vscr: e1e,
  vsubnE: t1e,
  vsubne: n1e,
  vsupnE: r1e,
  vsupne: o1e,
  Vvdash: s1e,
  vzigzag: i1e,
  Wcirc: a1e,
  wcirc: c1e,
  wedbar: l1e,
  wedge: u1e,
  Wedge: d1e,
  wedgeq: f1e,
  weierp: p1e,
  Wfr: h1e,
  wfr: g1e,
  Wopf: m1e,
  wopf: v1e,
  wp: _1e,
  wr: b1e,
  wreath: y1e,
  Wscr: w1e,
  wscr: k1e,
  xcap: C1e,
  xcirc: x1e,
  xcup: S1e,
  xdtri: E1e,
  Xfr: A1e,
  xfr: $1e,
  xharr: M1e,
  xhArr: T1e,
  Xi: I1e,
  xi: L1e,
  xlarr: O1e,
  xlArr: R1e,
  xmap: P1e,
  xnis: B1e,
  xodot: z1e,
  Xopf: D1e,
  xopf: N1e,
  xoplus: q1e,
  xotime: F1e,
  xrarr: j1e,
  xrArr: H1e,
  Xscr: V1e,
  xscr: U1e,
  xsqcup: Z1e,
  xuplus: W1e,
  xutri: G1e,
  xvee: K1e,
  xwedge: X1e,
  Yacute: Y1e,
  yacute: J1e,
  YAcy: Q1e,
  yacy: ege,
  Ycirc: tge,
  ycirc: nge,
  Ycy: rge,
  ycy: oge,
  yen: sge,
  Yfr: ige,
  yfr: age,
  YIcy: cge,
  yicy: lge,
  Yopf: uge,
  yopf: dge,
  Yscr: fge,
  yscr: pge,
  YUcy: hge,
  yucy: gge,
  yuml: mge,
  Yuml: vge,
  Zacute: _ge,
  zacute: bge,
  Zcaron: yge,
  zcaron: wge,
  Zcy: kge,
  zcy: Cge,
  Zdot: xge,
  zdot: Sge,
  zeetrf: Ege,
  ZeroWidthSpace: Age,
  Zeta: $ge,
  zeta: Mge,
  zfr: Tge,
  Zfr: Ige,
  ZHcy: Lge,
  zhcy: Oge,
  zigrarr: Rge,
  zopf: Pge,
  Zopf: Bge,
  Zscr: zge,
  zscr: Dge,
  zwj: Nge,
  zwnj: qge
};
var ni, Hd;
function vm() {
  return Hd || (Hd = 1, ni = Fge), ni;
}
var ri, Vd;
function Ll() {
  return Vd || (Vd = 1, ri = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/), ri;
}
var dr = {}, oi, Ud;
function jge() {
  if (Ud) return oi;
  Ud = 1;
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
    var i, a, c, u, d, l = "";
    for (typeof s != "string" && (o = s, s = n.defaultChars), typeof o > "u" && (o = !0), d = t(s), i = 0, a = r.length; i < a; i++) {
      if (c = r.charCodeAt(i), o && c === 37 && i + 2 < a && /^[0-9a-f]{2}$/i.test(r.slice(i + 1, i + 3))) {
        l += r.slice(i, i + 3), i += 2;
        continue;
      }
      if (c < 128) {
        l += d[c];
        continue;
      }
      if (c >= 55296 && c <= 57343) {
        if (c >= 55296 && c <= 56319 && i + 1 < a && (u = r.charCodeAt(i + 1), u >= 56320 && u <= 57343)) {
          l += encodeURIComponent(r[i] + r[i + 1]), i++;
          continue;
        }
        l += "%EF%BF%BD";
        continue;
      }
      l += encodeURIComponent(r[i]);
    }
    return l;
  }
  return n.defaultChars = ";/?:@&=+$,-_.!~*'()#", n.componentChars = "-_.!~*'()", oi = n, oi;
}
var si, Zd;
function Hge() {
  if (Zd) return si;
  Zd = 1;
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
      var a, c, u, d, l, m, f, v = "";
      for (a = 0, c = i.length; a < c; a += 3) {
        if (u = parseInt(i.slice(a + 1, a + 3), 16), u < 128) {
          v += o[u];
          continue;
        }
        if ((u & 224) === 192 && a + 3 < c && (d = parseInt(i.slice(a + 4, a + 6), 16), (d & 192) === 128)) {
          f = u << 6 & 1984 | d & 63, f < 128 ? v += "��" : v += String.fromCharCode(f), a += 3;
          continue;
        }
        if ((u & 240) === 224 && a + 6 < c && (d = parseInt(i.slice(a + 4, a + 6), 16), l = parseInt(i.slice(a + 7, a + 9), 16), (d & 192) === 128 && (l & 192) === 128)) {
          f = u << 12 & 61440 | d << 6 & 4032 | l & 63, f < 2048 || f >= 55296 && f <= 57343 ? v += "���" : v += String.fromCharCode(f), a += 6;
          continue;
        }
        if ((u & 248) === 240 && a + 9 < c && (d = parseInt(i.slice(a + 4, a + 6), 16), l = parseInt(i.slice(a + 7, a + 9), 16), m = parseInt(i.slice(a + 10, a + 12), 16), (d & 192) === 128 && (l & 192) === 128 && (m & 192) === 128)) {
          f = u << 18 & 1835008 | d << 12 & 258048 | l << 6 & 4032 | m & 63, f < 65536 || f > 1114111 ? v += "����" : (f -= 65536, v += String.fromCharCode(55296 + (f >> 10), 56320 + (f & 1023))), a += 9;
          continue;
        }
        v += "�";
      }
      return v;
    });
  }
  return n.defaultChars = ";/?:@&=+$,#", n.componentChars = "", si = n, si;
}
var ii, Wd;
function Vge() {
  return Wd || (Wd = 1, ii = function(t) {
    var n = "";
    return n += t.protocol || "", n += t.slashes ? "//" : "", n += t.auth ? t.auth + "@" : "", t.hostname && t.hostname.indexOf(":") !== -1 ? n += "[" + t.hostname + "]" : n += t.hostname || "", n += t.port ? ":" + t.port : "", n += t.pathname || "", n += t.search || "", n += t.hash || "", n;
  }), ii;
}
var ai, Gd;
function Uge() {
  if (Gd) return ai;
  Gd = 1;
  function e() {
    this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
  }
  var t = /^([a-z0-9.+-]+:)/i, n = /:[0-9]*$/, r = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, s = ["<", ">", '"', "`", " ", "\r", `
`, "	"], o = ["{", "}", "|", "\\", "^", "`"].concat(s), i = ["'"].concat(o), a = ["%", "/", "?", ";", "#"].concat(i), c = ["/", "?", "#"], u = 255, d = /^[+a-z0-9A-Z_-]{0,63}$/, l = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, m = {
    javascript: !0,
    "javascript:": !0
  }, f = {
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
  function v(g, b) {
    if (g && g instanceof e)
      return g;
    var h = new e();
    return h.parse(g, b), h;
  }
  return e.prototype.parse = function(g, b) {
    var h, w, k, C, A, E = g;
    if (E = E.trim(), !b && g.split("#").length === 1) {
      var $ = r.exec(E);
      if ($)
        return this.pathname = $[1], $[2] && (this.search = $[2]), this;
    }
    var M = t.exec(E);
    if (M && (M = M[0], k = M.toLowerCase(), this.protocol = M, E = E.substr(M.length)), (b || M || E.match(/^\/\/[^@\/]+@[^@\/]+/)) && (A = E.substr(0, 2) === "//", A && !(M && m[M]) && (E = E.substr(2), this.slashes = !0)), !m[M] && (A || M && !f[M])) {
      var O = -1;
      for (h = 0; h < c.length; h++)
        C = E.indexOf(c[h]), C !== -1 && (O === -1 || C < O) && (O = C);
      var R, B;
      for (O === -1 ? B = E.lastIndexOf("@") : B = E.lastIndexOf("@", O), B !== -1 && (R = E.slice(0, B), E = E.slice(B + 1), this.auth = R), O = -1, h = 0; h < a.length; h++)
        C = E.indexOf(a[h]), C !== -1 && (O === -1 || C < O) && (O = C);
      O === -1 && (O = E.length), E[O - 1] === ":" && O--;
      var V = E.slice(0, O);
      E = E.slice(O), this.parseHost(V), this.hostname = this.hostname || "";
      var re = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
      if (!re) {
        var P = this.hostname.split(/\./);
        for (h = 0, w = P.length; h < w; h++) {
          var U = P[h];
          if (U && !U.match(d)) {
            for (var z = "", N = 0, F = U.length; N < F; N++)
              U.charCodeAt(N) > 127 ? z += "x" : z += U[N];
            if (!z.match(d)) {
              var Z = P.slice(0, h), W = P.slice(h + 1), pe = U.match(l);
              pe && (Z.push(pe[1]), W.unshift(pe[2])), W.length && (E = W.join(".") + E), this.hostname = Z.join(".");
              break;
            }
          }
        }
      }
      this.hostname.length > u && (this.hostname = ""), re && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
    }
    var le = E.indexOf("#");
    le !== -1 && (this.hash = E.substr(le), E = E.slice(0, le));
    var Ae = E.indexOf("?");
    return Ae !== -1 && (this.search = E.substr(Ae), E = E.slice(0, Ae)), E && (this.pathname = E), f[k] && this.hostname && !this.pathname && (this.pathname = ""), this;
  }, e.prototype.parseHost = function(g) {
    var b = n.exec(g);
    b && (b = b[0], b !== ":" && (this.port = b.substr(1)), g = g.substr(0, g.length - b.length)), g && (this.hostname = g);
  }, ai = v, ai;
}
var Kd;
function _m() {
  return Kd || (Kd = 1, dr.encode = jge(), dr.decode = Hge(), dr.format = Vge(), dr.parse = Uge()), dr;
}
var Xn = {}, ci, Xd;
function bm() {
  return Xd || (Xd = 1, ci = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), ci;
}
var li, Yd;
function ym() {
  return Yd || (Yd = 1, li = /[\0-\x1F\x7F-\x9F]/), li;
}
var ui, Jd;
function Zge() {
  return Jd || (Jd = 1, ui = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), ui;
}
var di, Qd;
function wm() {
  return Qd || (Qd = 1, di = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), di;
}
var ef;
function Wge() {
  return ef || (ef = 1, Xn.Any = bm(), Xn.Cc = ym(), Xn.Cf = Zge(), Xn.P = Ll(), Xn.Z = wm()), Xn;
}
var tf;
function Te() {
  return tf || (tf = 1, function(e) {
    function t(P) {
      return Object.prototype.toString.call(P);
    }
    function n(P) {
      return t(P) === "[object String]";
    }
    var r = Object.prototype.hasOwnProperty;
    function s(P, U) {
      return r.call(P, U);
    }
    function o(P) {
      var U = Array.prototype.slice.call(arguments, 1);
      return U.forEach(function(z) {
        if (z) {
          if (typeof z != "object")
            throw new TypeError(z + "must be object");
          Object.keys(z).forEach(function(N) {
            P[N] = z[N];
          });
        }
      }), P;
    }
    function i(P, U, z) {
      return [].concat(P.slice(0, U), z, P.slice(U + 1));
    }
    function a(P) {
      return !(P >= 55296 && P <= 57343 || P >= 64976 && P <= 65007 || (P & 65535) === 65535 || (P & 65535) === 65534 || P >= 0 && P <= 8 || P === 11 || P >= 14 && P <= 31 || P >= 127 && P <= 159 || P > 1114111);
    }
    function c(P) {
      if (P > 65535) {
        P -= 65536;
        var U = 55296 + (P >> 10), z = 56320 + (P & 1023);
        return String.fromCharCode(U, z);
      }
      return String.fromCharCode(P);
    }
    var u = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, d = /&([a-z#][a-z0-9]{1,31});/gi, l = new RegExp(u.source + "|" + d.source, "gi"), m = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i, f = vm();
    function v(P, U) {
      var z;
      return s(f, U) ? f[U] : U.charCodeAt(0) === 35 && m.test(U) && (z = U[1].toLowerCase() === "x" ? parseInt(U.slice(2), 16) : parseInt(U.slice(1), 10), a(z)) ? c(z) : P;
    }
    function g(P) {
      return P.indexOf("\\") < 0 ? P : P.replace(u, "$1");
    }
    function b(P) {
      return P.indexOf("\\") < 0 && P.indexOf("&") < 0 ? P : P.replace(l, function(U, z, N) {
        return z || v(U, N);
      });
    }
    var h = /[&<>"]/, w = /[&<>"]/g, k = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    function C(P) {
      return k[P];
    }
    function A(P) {
      return h.test(P) ? P.replace(w, C) : P;
    }
    var E = /[.?*+^$[\]\\(){}|-]/g;
    function $(P) {
      return P.replace(E, "\\$&");
    }
    function M(P) {
      switch (P) {
        case 9:
        case 32:
          return !0;
      }
      return !1;
    }
    function O(P) {
      if (P >= 8192 && P <= 8202)
        return !0;
      switch (P) {
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
    var R = Ll();
    function B(P) {
      return R.test(P);
    }
    function V(P) {
      switch (P) {
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
    function re(P) {
      return P = P.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (P = P.replace(/ẞ/g, "ß")), P.toLowerCase().toUpperCase();
    }
    e.lib = {}, e.lib.mdurl = _m(), e.lib.ucmicro = Wge(), e.assign = o, e.isString = n, e.has = s, e.unescapeMd = g, e.unescapeAll = b, e.isValidEntityCode = a, e.fromCodePoint = c, e.escapeHtml = A, e.arrayReplaceAt = i, e.isSpace = M, e.isWhiteSpace = O, e.isMdAsciiPunct = V, e.isPunctChar = B, e.escapeRE = $, e.normalizeReference = re;
  }(ti)), ti;
}
var Fr = {}, fi, nf;
function Gge() {
  return nf || (nf = 1, fi = function(t, n, r) {
    var s, o, i, a, c = -1, u = t.posMax, d = t.pos;
    for (t.pos = n + 1, s = 1; t.pos < u; ) {
      if (i = t.src.charCodeAt(t.pos), i === 93 && (s--, s === 0)) {
        o = !0;
        break;
      }
      if (a = t.pos, t.md.inline.skipToken(t), i === 91) {
        if (a === t.pos - 1)
          s++;
        else if (r)
          return t.pos = d, -1;
      }
    }
    return o && (c = t.pos), t.pos = d, c;
  }), fi;
}
var pi, rf;
function Kge() {
  if (rf) return pi;
  rf = 1;
  var e = Te().unescapeAll;
  return pi = function(n, r, s) {
    var o, i, a = r, c = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (n.charCodeAt(a) === 60) {
      for (a++; a < s; ) {
        if (o = n.charCodeAt(a), o === 10 || o === 60)
          return c;
        if (o === 62)
          return c.pos = a + 1, c.str = e(n.slice(r + 1, a)), c.ok = !0, c;
        if (o === 92 && a + 1 < s) {
          a += 2;
          continue;
        }
        a++;
      }
      return c;
    }
    for (i = 0; a < s && (o = n.charCodeAt(a), !(o === 32 || o < 32 || o === 127)); ) {
      if (o === 92 && a + 1 < s) {
        if (n.charCodeAt(a + 1) === 32)
          break;
        a += 2;
        continue;
      }
      if (o === 40 && (i++, i > 32))
        return c;
      if (o === 41) {
        if (i === 0)
          break;
        i--;
      }
      a++;
    }
    return r === a || i !== 0 || (c.str = e(n.slice(r, a)), c.pos = a, c.ok = !0), c;
  }, pi;
}
var hi, of;
function Xge() {
  if (of) return hi;
  of = 1;
  var e = Te().unescapeAll;
  return hi = function(n, r, s) {
    var o, i, a = 0, c = r, u = {
      ok: !1,
      pos: 0,
      lines: 0,
      str: ""
    };
    if (c >= s || (i = n.charCodeAt(c), i !== 34 && i !== 39 && i !== 40))
      return u;
    for (c++, i === 40 && (i = 41); c < s; ) {
      if (o = n.charCodeAt(c), o === i)
        return u.pos = c + 1, u.lines = a, u.str = e(n.slice(r + 1, c)), u.ok = !0, u;
      if (o === 40 && i === 41)
        return u;
      o === 10 ? a++ : o === 92 && c + 1 < s && (c++, n.charCodeAt(c) === 10 && a++), c++;
    }
    return u;
  }, hi;
}
var sf;
function Yge() {
  return sf || (sf = 1, Fr.parseLinkLabel = Gge(), Fr.parseLinkDestination = Kge(), Fr.parseLinkTitle = Xge()), Fr;
}
var gi, af;
function Jge() {
  if (af) return gi;
  af = 1;
  var e = Te().assign, t = Te().unescapeAll, n = Te().escapeHtml, r = {};
  r.code_inline = function(o, i, a, c, u) {
    var d = o[i];
    return "<code" + u.renderAttrs(d) + ">" + n(d.content) + "</code>";
  }, r.code_block = function(o, i, a, c, u) {
    var d = o[i];
    return "<pre" + u.renderAttrs(d) + "><code>" + n(o[i].content) + `</code></pre>
`;
  }, r.fence = function(o, i, a, c, u) {
    var d = o[i], l = d.info ? t(d.info).trim() : "", m = "", f = "", v, g, b, h, w;
    return l && (b = l.split(/(\s+)/g), m = b[0], f = b.slice(2).join("")), a.highlight ? v = a.highlight(d.content, m, f) || n(d.content) : v = n(d.content), v.indexOf("<pre") === 0 ? v + `
` : l ? (g = d.attrIndex("class"), h = d.attrs ? d.attrs.slice() : [], g < 0 ? h.push(["class", a.langPrefix + m]) : (h[g] = h[g].slice(), h[g][1] += " " + a.langPrefix + m), w = {
      attrs: h
    }, "<pre><code" + u.renderAttrs(w) + ">" + v + `</code></pre>
`) : "<pre><code" + u.renderAttrs(d) + ">" + v + `</code></pre>
`;
  }, r.image = function(o, i, a, c, u) {
    var d = o[i];
    return d.attrs[d.attrIndex("alt")][1] = u.renderInlineAsText(d.children, a, c), u.renderToken(o, i, a);
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
    var a, c, u;
    if (!i.attrs)
      return "";
    for (u = "", a = 0, c = i.attrs.length; a < c; a++)
      u += " " + n(i.attrs[a][0]) + '="' + n(i.attrs[a][1]) + '"';
    return u;
  }, s.prototype.renderToken = function(i, a, c) {
    var u, d = "", l = !1, m = i[a];
    return m.hidden ? "" : (m.block && m.nesting !== -1 && a && i[a - 1].hidden && (d += `
`), d += (m.nesting === -1 ? "</" : "<") + m.tag, d += this.renderAttrs(m), m.nesting === 0 && c.xhtmlOut && (d += " /"), m.block && (l = !0, m.nesting === 1 && a + 1 < i.length && (u = i[a + 1], (u.type === "inline" || u.hidden || u.nesting === -1 && u.tag === m.tag) && (l = !1))), d += l ? `>
` : ">", d);
  }, s.prototype.renderInline = function(o, i, a) {
    for (var c, u = "", d = this.rules, l = 0, m = o.length; l < m; l++)
      c = o[l].type, typeof d[c] < "u" ? u += d[c](o, l, i, a, this) : u += this.renderToken(o, l, i);
    return u;
  }, s.prototype.renderInlineAsText = function(o, i, a) {
    for (var c = "", u = 0, d = o.length; u < d; u++)
      o[u].type === "text" ? c += o[u].content : o[u].type === "image" ? c += this.renderInlineAsText(o[u].children, i, a) : o[u].type === "softbreak" && (c += `
`);
    return c;
  }, s.prototype.render = function(o, i, a) {
    var c, u, d, l = "", m = this.rules;
    for (c = 0, u = o.length; c < u; c++)
      d = o[c].type, d === "inline" ? l += this.renderInline(o[c].children, i, a) : typeof m[d] < "u" ? l += m[d](o, c, i, a, this) : l += this.renderToken(o, c, i, a);
    return l;
  }, gi = s, gi;
}
var mi, cf;
function Ol() {
  if (cf) return mi;
  cf = 1;
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
  }, mi = e, mi;
}
var vi, lf;
function Qge() {
  if (lf) return vi;
  lf = 1;
  var e = /\r\n?|\n/g, t = /\0/g;
  return vi = function(r) {
    var s;
    s = r.src.replace(e, `
`), s = s.replace(t, "�"), r.src = s;
  }, vi;
}
var _i, uf;
function eme() {
  return uf || (uf = 1, _i = function(t) {
    var n;
    t.inlineMode ? (n = new t.Token("inline", "", 0), n.content = t.src, n.map = [0, 1], n.children = [], t.tokens.push(n)) : t.md.block.parse(t.src, t.md, t.env, t.tokens);
  }), _i;
}
var bi, df;
function tme() {
  return df || (df = 1, bi = function(t) {
    var n = t.tokens, r, s, o;
    for (s = 0, o = n.length; s < o; s++)
      r = n[s], r.type === "inline" && t.md.inline.parse(r.content, t.md, t.env, r.children);
  }), bi;
}
var yi, ff;
function nme() {
  if (ff) return yi;
  ff = 1;
  var e = Te().arrayReplaceAt;
  function t(r) {
    return /^<a[>\s]/i.test(r);
  }
  function n(r) {
    return /^<\/a\s*>/i.test(r);
  }
  return yi = function(s) {
    var o, i, a, c, u, d, l, m, f, v, g, b, h, w, k, C, A = s.tokens, E;
    if (s.md.options.linkify) {
      for (i = 0, a = A.length; i < a; i++)
        if (!(A[i].type !== "inline" || !s.md.linkify.pretest(A[i].content)))
          for (c = A[i].children, h = 0, o = c.length - 1; o >= 0; o--) {
            if (d = c[o], d.type === "link_close") {
              for (o--; c[o].level !== d.level && c[o].type !== "link_open"; )
                o--;
              continue;
            }
            if (d.type === "html_inline" && (t(d.content) && h > 0 && h--, n(d.content) && h++), !(h > 0) && d.type === "text" && s.md.linkify.test(d.content)) {
              for (f = d.content, E = s.md.linkify.match(f), l = [], b = d.level, g = 0, E.length > 0 && E[0].index === 0 && o > 0 && c[o - 1].type === "text_special" && (E = E.slice(1)), m = 0; m < E.length; m++)
                w = E[m].url, k = s.md.normalizeLink(w), s.md.validateLink(k) && (C = E[m].text, E[m].schema ? E[m].schema === "mailto:" && !/^mailto:/i.test(C) ? C = s.md.normalizeLinkText("mailto:" + C).replace(/^mailto:/, "") : C = s.md.normalizeLinkText(C) : C = s.md.normalizeLinkText("http://" + C).replace(/^http:\/\//, ""), v = E[m].index, v > g && (u = new s.Token("text", "", 0), u.content = f.slice(g, v), u.level = b, l.push(u)), u = new s.Token("link_open", "a", 1), u.attrs = [["href", k]], u.level = b++, u.markup = "linkify", u.info = "auto", l.push(u), u = new s.Token("text", "", 0), u.content = C, u.level = b, l.push(u), u = new s.Token("link_close", "a", -1), u.level = --b, u.markup = "linkify", u.info = "auto", l.push(u), g = E[m].lastIndex);
              g < f.length && (u = new s.Token("text", "", 0), u.content = f.slice(g), u.level = b, l.push(u)), A[i].children = c = e(c, o, l);
            }
          }
    }
  }, yi;
}
var wi, pf;
function rme() {
  if (pf) return wi;
  pf = 1;
  var e = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, t = /\((c|tm|r)\)/i, n = /\((c|tm|r)\)/ig, r = {
    c: "©",
    r: "®",
    tm: "™"
  };
  function s(a, c) {
    return r[c.toLowerCase()];
  }
  function o(a) {
    var c, u, d = 0;
    for (c = a.length - 1; c >= 0; c--)
      u = a[c], u.type === "text" && !d && (u.content = u.content.replace(n, s)), u.type === "link_open" && u.info === "auto" && d--, u.type === "link_close" && u.info === "auto" && d++;
  }
  function i(a) {
    var c, u, d = 0;
    for (c = a.length - 1; c >= 0; c--)
      u = a[c], u.type === "text" && !d && e.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), u.type === "link_open" && u.info === "auto" && d--, u.type === "link_close" && u.info === "auto" && d++;
  }
  return wi = function(c) {
    var u;
    if (c.md.options.typographer)
      for (u = c.tokens.length - 1; u >= 0; u--)
        c.tokens[u].type === "inline" && (t.test(c.tokens[u].content) && o(c.tokens[u].children), e.test(c.tokens[u].content) && i(c.tokens[u].children));
  }, wi;
}
var ki, hf;
function ome() {
  if (hf) return ki;
  hf = 1;
  var e = Te().isWhiteSpace, t = Te().isPunctChar, n = Te().isMdAsciiPunct, r = /['"]/, s = /['"]/g, o = "’";
  function i(c, u, d) {
    return c.slice(0, u) + d + c.slice(u + 1);
  }
  function a(c, u) {
    var d, l, m, f, v, g, b, h, w, k, C, A, E, $, M, O, R, B, V, re, P;
    for (V = [], d = 0; d < c.length; d++) {
      for (l = c[d], b = c[d].level, R = V.length - 1; R >= 0 && !(V[R].level <= b); R--)
        ;
      if (V.length = R + 1, l.type === "text") {
        m = l.content, v = 0, g = m.length;
        e:
          for (; v < g && (s.lastIndex = v, f = s.exec(m), !!f); ) {
            if (M = O = !0, v = f.index + 1, B = f[0] === "'", w = 32, f.index - 1 >= 0)
              w = m.charCodeAt(f.index - 1);
            else
              for (R = d - 1; R >= 0 && !(c[R].type === "softbreak" || c[R].type === "hardbreak"); R--)
                if (c[R].content) {
                  w = c[R].content.charCodeAt(c[R].content.length - 1);
                  break;
                }
            if (k = 32, v < g)
              k = m.charCodeAt(v);
            else
              for (R = d + 1; R < c.length && !(c[R].type === "softbreak" || c[R].type === "hardbreak"); R++)
                if (c[R].content) {
                  k = c[R].content.charCodeAt(0);
                  break;
                }
            if (C = n(w) || t(String.fromCharCode(w)), A = n(k) || t(String.fromCharCode(k)), E = e(w), $ = e(k), $ ? M = !1 : A && (E || C || (M = !1)), E ? O = !1 : C && ($ || A || (O = !1)), k === 34 && f[0] === '"' && w >= 48 && w <= 57 && (O = M = !1), M && O && (M = C, O = A), !M && !O) {
              B && (l.content = i(l.content, f.index, o));
              continue;
            }
            if (O) {
              for (R = V.length - 1; R >= 0 && (h = V[R], !(V[R].level < b)); R--)
                if (h.single === B && V[R].level === b) {
                  h = V[R], B ? (re = u.md.options.quotes[2], P = u.md.options.quotes[3]) : (re = u.md.options.quotes[0], P = u.md.options.quotes[1]), l.content = i(l.content, f.index, P), c[h.token].content = i(
                    c[h.token].content,
                    h.pos,
                    re
                  ), v += P.length - 1, h.token === d && (v += re.length - 1), m = l.content, g = m.length, V.length = R;
                  continue e;
                }
            }
            M ? V.push({
              token: d,
              pos: f.index,
              single: B,
              level: b
            }) : O && B && (l.content = i(l.content, f.index, o));
          }
      }
    }
  }
  return ki = function(u) {
    var d;
    if (u.md.options.typographer)
      for (d = u.tokens.length - 1; d >= 0; d--)
        u.tokens[d].type !== "inline" || !r.test(u.tokens[d].content) || a(u.tokens[d].children, u);
  }, ki;
}
var Ci, gf;
function sme() {
  return gf || (gf = 1, Ci = function(t) {
    var n, r, s, o, i, a, c = t.tokens;
    for (n = 0, r = c.length; n < r; n++)
      if (c[n].type === "inline") {
        for (s = c[n].children, i = s.length, o = 0; o < i; o++)
          s[o].type === "text_special" && (s[o].type = "text");
        for (o = a = 0; o < i; o++)
          s[o].type === "text" && o + 1 < i && s[o + 1].type === "text" ? s[o + 1].content = s[o].content + s[o + 1].content : (o !== a && (s[a] = s[o]), a++);
        o !== a && (s.length = a);
      }
  }), Ci;
}
var xi, mf;
function Rl() {
  if (mf) return xi;
  mf = 1;
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
  }, xi = e, xi;
}
var Si, vf;
function ime() {
  if (vf) return Si;
  vf = 1;
  var e = Rl();
  function t(n, r, s) {
    this.src = n, this.env = s, this.tokens = [], this.inlineMode = !1, this.md = r;
  }
  return t.prototype.Token = e, Si = t, Si;
}
var Ei, _f;
function ame() {
  if (_f) return Ei;
  _f = 1;
  var e = Ol(), t = [
    ["normalize", Qge()],
    ["block", eme()],
    ["inline", tme()],
    ["linkify", nme()],
    ["replacements", rme()],
    ["smartquotes", ome()],
    // `text_join` finds `text_special` tokens (for escape sequences)
    // and joins them with the rest of the text
    ["text_join", sme()]
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
  }, n.prototype.State = ime(), Ei = n, Ei;
}
var Ai, bf;
function cme() {
  if (bf) return Ai;
  bf = 1;
  var e = Te().isSpace;
  function t(r, s) {
    var o = r.bMarks[s] + r.tShift[s], i = r.eMarks[s];
    return r.src.slice(o, i);
  }
  function n(r) {
    var s = [], o = 0, i = r.length, a, c = !1, u = 0, d = "";
    for (a = r.charCodeAt(o); o < i; )
      a === 124 && (c ? (d += r.substring(u, o - 1), u = o) : (s.push(d + r.substring(u, o)), d = "", u = o + 1)), c = a === 92, o++, a = r.charCodeAt(o);
    return s.push(d + r.substring(u)), s;
  }
  return Ai = function(s, o, i, a) {
    var c, u, d, l, m, f, v, g, b, h, w, k, C, A, E, $, M, O;
    if (o + 2 > i || (f = o + 1, s.sCount[f] < s.blkIndent) || s.sCount[f] - s.blkIndent >= 4 || (d = s.bMarks[f] + s.tShift[f], d >= s.eMarks[f]) || (M = s.src.charCodeAt(d++), M !== 124 && M !== 45 && M !== 58) || d >= s.eMarks[f] || (O = s.src.charCodeAt(d++), O !== 124 && O !== 45 && O !== 58 && !e(O)) || M === 45 && e(O))
      return !1;
    for (; d < s.eMarks[f]; ) {
      if (c = s.src.charCodeAt(d), c !== 124 && c !== 45 && c !== 58 && !e(c))
        return !1;
      d++;
    }
    for (u = t(s, o + 1), v = u.split("|"), h = [], l = 0; l < v.length; l++) {
      if (w = v[l].trim(), !w) {
        if (l === 0 || l === v.length - 1)
          continue;
        return !1;
      }
      if (!/^:?-+:?$/.test(w))
        return !1;
      w.charCodeAt(w.length - 1) === 58 ? h.push(w.charCodeAt(0) === 58 ? "center" : "right") : w.charCodeAt(0) === 58 ? h.push("left") : h.push("");
    }
    if (u = t(s, o).trim(), u.indexOf("|") === -1 || s.sCount[o] - s.blkIndent >= 4 || (v = n(u), v.length && v[0] === "" && v.shift(), v.length && v[v.length - 1] === "" && v.pop(), g = v.length, g === 0 || g !== h.length))
      return !1;
    if (a)
      return !0;
    for (A = s.parentType, s.parentType = "table", $ = s.md.block.ruler.getRules("blockquote"), b = s.push("table_open", "table", 1), b.map = k = [o, 0], b = s.push("thead_open", "thead", 1), b.map = [o, o + 1], b = s.push("tr_open", "tr", 1), b.map = [o, o + 1], l = 0; l < v.length; l++)
      b = s.push("th_open", "th", 1), h[l] && (b.attrs = [["style", "text-align:" + h[l]]]), b = s.push("inline", "", 0), b.content = v[l].trim(), b.children = [], b = s.push("th_close", "th", -1);
    for (b = s.push("tr_close", "tr", -1), b = s.push("thead_close", "thead", -1), f = o + 2; f < i && !(s.sCount[f] < s.blkIndent); f++) {
      for (E = !1, l = 0, m = $.length; l < m; l++)
        if ($[l](s, f, i, !0)) {
          E = !0;
          break;
        }
      if (E || (u = t(s, f).trim(), !u) || s.sCount[f] - s.blkIndent >= 4)
        break;
      for (v = n(u), v.length && v[0] === "" && v.shift(), v.length && v[v.length - 1] === "" && v.pop(), f === o + 2 && (b = s.push("tbody_open", "tbody", 1), b.map = C = [o + 2, 0]), b = s.push("tr_open", "tr", 1), b.map = [f, f + 1], l = 0; l < g; l++)
        b = s.push("td_open", "td", 1), h[l] && (b.attrs = [["style", "text-align:" + h[l]]]), b = s.push("inline", "", 0), b.content = v[l] ? v[l].trim() : "", b.children = [], b = s.push("td_close", "td", -1);
      b = s.push("tr_close", "tr", -1);
    }
    return C && (b = s.push("tbody_close", "tbody", -1), C[1] = f), b = s.push("table_close", "table", -1), k[1] = f, s.parentType = A, s.line = f, !0;
  }, Ai;
}
var $i, yf;
function lme() {
  return yf || (yf = 1, $i = function(t, n, r) {
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
  }), $i;
}
var Mi, wf;
function ume() {
  return wf || (wf = 1, Mi = function(t, n, r, s) {
    var o, i, a, c, u, d, l, m = !1, f = t.bMarks[n] + t.tShift[n], v = t.eMarks[n];
    if (t.sCount[n] - t.blkIndent >= 4 || f + 3 > v || (o = t.src.charCodeAt(f), o !== 126 && o !== 96) || (u = f, f = t.skipChars(f, o), i = f - u, i < 3) || (l = t.src.slice(u, f), a = t.src.slice(f, v), o === 96 && a.indexOf(String.fromCharCode(o)) >= 0))
      return !1;
    if (s)
      return !0;
    for (c = n; c++, !(c >= r || (f = u = t.bMarks[c] + t.tShift[c], v = t.eMarks[c], f < v && t.sCount[c] < t.blkIndent)); )
      if (t.src.charCodeAt(f) === o && !(t.sCount[c] - t.blkIndent >= 4) && (f = t.skipChars(f, o), !(f - u < i) && (f = t.skipSpaces(f), !(f < v)))) {
        m = !0;
        break;
      }
    return i = t.sCount[n], t.line = c + (m ? 1 : 0), d = t.push("fence", "code", 0), d.info = a, d.content = t.getLines(n + 1, c, i, !0), d.markup = l, d.map = [n, t.line], !0;
  }), Mi;
}
var Ti, kf;
function dme() {
  if (kf) return Ti;
  kf = 1;
  var e = Te().isSpace;
  return Ti = function(n, r, s, o) {
    var i, a, c, u, d, l, m, f, v, g, b, h, w, k, C, A, E, $, M, O, R = n.lineMax, B = n.bMarks[r] + n.tShift[r], V = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || n.src.charCodeAt(B) !== 62)
      return !1;
    if (o)
      return !0;
    for (g = [], b = [], k = [], C = [], $ = n.md.block.ruler.getRules("blockquote"), w = n.parentType, n.parentType = "blockquote", f = r; f < s && (O = n.sCount[f] < n.blkIndent, B = n.bMarks[f] + n.tShift[f], V = n.eMarks[f], !(B >= V)); f++) {
      if (n.src.charCodeAt(B++) === 62 && !O) {
        for (u = n.sCount[f] + 1, n.src.charCodeAt(B) === 32 ? (B++, u++, i = !1, A = !0) : n.src.charCodeAt(B) === 9 ? (A = !0, (n.bsCount[f] + u) % 4 === 3 ? (B++, u++, i = !1) : i = !0) : A = !1, v = u, g.push(n.bMarks[f]), n.bMarks[f] = B; B < V && (a = n.src.charCodeAt(B), e(a)); ) {
          a === 9 ? v += 4 - (v + n.bsCount[f] + (i ? 1 : 0)) % 4 : v++;
          B++;
        }
        l = B >= V, b.push(n.bsCount[f]), n.bsCount[f] = n.sCount[f] + 1 + (A ? 1 : 0), k.push(n.sCount[f]), n.sCount[f] = v - u, C.push(n.tShift[f]), n.tShift[f] = B - n.bMarks[f];
        continue;
      }
      if (l)
        break;
      for (E = !1, c = 0, d = $.length; c < d; c++)
        if ($[c](n, f, s, !0)) {
          E = !0;
          break;
        }
      if (E) {
        n.lineMax = f, n.blkIndent !== 0 && (g.push(n.bMarks[f]), b.push(n.bsCount[f]), C.push(n.tShift[f]), k.push(n.sCount[f]), n.sCount[f] -= n.blkIndent);
        break;
      }
      g.push(n.bMarks[f]), b.push(n.bsCount[f]), C.push(n.tShift[f]), k.push(n.sCount[f]), n.sCount[f] = -1;
    }
    for (h = n.blkIndent, n.blkIndent = 0, M = n.push("blockquote_open", "blockquote", 1), M.markup = ">", M.map = m = [r, 0], n.md.block.tokenize(n, r, f), M = n.push("blockquote_close", "blockquote", -1), M.markup = ">", n.lineMax = R, n.parentType = w, m[1] = n.line, c = 0; c < C.length; c++)
      n.bMarks[c + r] = g[c], n.tShift[c + r] = C[c], n.sCount[c + r] = k[c], n.bsCount[c + r] = b[c];
    return n.blkIndent = h, !0;
  }, Ti;
}
var Ii, Cf;
function fme() {
  if (Cf) return Ii;
  Cf = 1;
  var e = Te().isSpace;
  return Ii = function(n, r, s, o) {
    var i, a, c, u, d = n.bMarks[r] + n.tShift[r], l = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || (i = n.src.charCodeAt(d++), i !== 42 && i !== 45 && i !== 95))
      return !1;
    for (a = 1; d < l; ) {
      if (c = n.src.charCodeAt(d++), c !== i && !e(c))
        return !1;
      c === i && a++;
    }
    return a < 3 ? !1 : (o || (n.line = r + 1, u = n.push("hr", "hr", 0), u.map = [r, n.line], u.markup = Array(a + 1).join(String.fromCharCode(i))), !0);
  }, Ii;
}
var Li, xf;
function pme() {
  if (xf) return Li;
  xf = 1;
  var e = Te().isSpace;
  function t(s, o) {
    var i, a, c, u;
    return a = s.bMarks[o] + s.tShift[o], c = s.eMarks[o], i = s.src.charCodeAt(a++), i !== 42 && i !== 45 && i !== 43 || a < c && (u = s.src.charCodeAt(a), !e(u)) ? -1 : a;
  }
  function n(s, o) {
    var i, a = s.bMarks[o] + s.tShift[o], c = a, u = s.eMarks[o];
    if (c + 1 >= u || (i = s.src.charCodeAt(c++), i < 48 || i > 57))
      return -1;
    for (; ; ) {
      if (c >= u)
        return -1;
      if (i = s.src.charCodeAt(c++), i >= 48 && i <= 57) {
        if (c - a >= 10)
          return -1;
        continue;
      }
      if (i === 41 || i === 46)
        break;
      return -1;
    }
    return c < u && (i = s.src.charCodeAt(c), !e(i)) ? -1 : c;
  }
  function r(s, o) {
    var i, a, c = s.level + 2;
    for (i = o + 2, a = s.tokens.length - 2; i < a; i++)
      s.tokens[i].level === c && s.tokens[i].type === "paragraph_open" && (s.tokens[i + 2].hidden = !0, s.tokens[i].hidden = !0, i += 2);
  }
  return Li = function(o, i, a, c) {
    var u, d, l, m, f, v, g, b, h, w, k, C, A, E, $, M, O, R, B, V, re, P, U, z, N, F, Z, W = i, pe = !1, le = !0;
    if (o.sCount[W] - o.blkIndent >= 4 || o.listIndent >= 0 && o.sCount[W] - o.listIndent >= 4 && o.sCount[W] < o.blkIndent)
      return !1;
    if (c && o.parentType === "paragraph" && o.sCount[W] >= o.blkIndent && (pe = !0), (P = n(o, W)) >= 0) {
      if (g = !0, z = o.bMarks[W] + o.tShift[W], A = Number(o.src.slice(z, P - 1)), pe && A !== 1) return !1;
    } else if ((P = t(o, W)) >= 0)
      g = !1;
    else
      return !1;
    if (pe && o.skipSpaces(P) >= o.eMarks[W])
      return !1;
    if (c)
      return !0;
    for (C = o.src.charCodeAt(P - 1), k = o.tokens.length, g ? (Z = o.push("ordered_list_open", "ol", 1), A !== 1 && (Z.attrs = [["start", A]])) : Z = o.push("bullet_list_open", "ul", 1), Z.map = w = [W, 0], Z.markup = String.fromCharCode(C), U = !1, F = o.md.block.ruler.getRules("list"), O = o.parentType, o.parentType = "list"; W < a; ) {
      for (re = P, E = o.eMarks[W], v = $ = o.sCount[W] + P - (o.bMarks[W] + o.tShift[W]); re < E; ) {
        if (u = o.src.charCodeAt(re), u === 9)
          $ += 4 - ($ + o.bsCount[W]) % 4;
        else if (u === 32)
          $++;
        else
          break;
        re++;
      }
      if (d = re, d >= E ? f = 1 : f = $ - v, f > 4 && (f = 1), m = v + f, Z = o.push("list_item_open", "li", 1), Z.markup = String.fromCharCode(C), Z.map = b = [W, 0], g && (Z.info = o.src.slice(z, P - 1)), V = o.tight, B = o.tShift[W], R = o.sCount[W], M = o.listIndent, o.listIndent = o.blkIndent, o.blkIndent = m, o.tight = !0, o.tShift[W] = d - o.bMarks[W], o.sCount[W] = $, d >= E && o.isEmpty(W + 1) ? o.line = Math.min(o.line + 2, a) : o.md.block.tokenize(o, W, a, !0), (!o.tight || U) && (le = !1), U = o.line - W > 1 && o.isEmpty(o.line - 1), o.blkIndent = o.listIndent, o.listIndent = M, o.tShift[W] = B, o.sCount[W] = R, o.tight = V, Z = o.push("list_item_close", "li", -1), Z.markup = String.fromCharCode(C), W = o.line, b[1] = W, W >= a || o.sCount[W] < o.blkIndent || o.sCount[W] - o.blkIndent >= 4)
        break;
      for (N = !1, l = 0, h = F.length; l < h; l++)
        if (F[l](o, W, a, !0)) {
          N = !0;
          break;
        }
      if (N)
        break;
      if (g) {
        if (P = n(o, W), P < 0)
          break;
        z = o.bMarks[W] + o.tShift[W];
      } else if (P = t(o, W), P < 0)
        break;
      if (C !== o.src.charCodeAt(P - 1))
        break;
    }
    return g ? Z = o.push("ordered_list_close", "ol", -1) : Z = o.push("bullet_list_close", "ul", -1), Z.markup = String.fromCharCode(C), w[1] = W, o.line = W, o.parentType = O, le && r(o, k), !0;
  }, Li;
}
var Oi, Sf;
function hme() {
  if (Sf) return Oi;
  Sf = 1;
  var e = Te().normalizeReference, t = Te().isSpace;
  return Oi = function(r, s, o, i) {
    var a, c, u, d, l, m, f, v, g, b, h, w, k, C, A, E, $ = 0, M = r.bMarks[s] + r.tShift[s], O = r.eMarks[s], R = s + 1;
    if (r.sCount[s] - r.blkIndent >= 4 || r.src.charCodeAt(M) !== 91)
      return !1;
    for (; ++M < O; )
      if (r.src.charCodeAt(M) === 93 && r.src.charCodeAt(M - 1) !== 92) {
        if (M + 1 === O || r.src.charCodeAt(M + 1) !== 58)
          return !1;
        break;
      }
    for (d = r.lineMax, A = r.md.block.ruler.getRules("reference"), b = r.parentType, r.parentType = "reference"; R < d && !r.isEmpty(R); R++)
      if (!(r.sCount[R] - r.blkIndent > 3) && !(r.sCount[R] < 0)) {
        for (C = !1, m = 0, f = A.length; m < f; m++)
          if (A[m](r, R, d, !0)) {
            C = !0;
            break;
          }
        if (C)
          break;
      }
    for (k = r.getLines(s, R, r.blkIndent, !1).trim(), O = k.length, M = 1; M < O; M++) {
      if (a = k.charCodeAt(M), a === 91)
        return !1;
      if (a === 93) {
        g = M;
        break;
      } else a === 10 ? $++ : a === 92 && (M++, M < O && k.charCodeAt(M) === 10 && $++);
    }
    if (g < 0 || k.charCodeAt(g + 1) !== 58)
      return !1;
    for (M = g + 2; M < O; M++)
      if (a = k.charCodeAt(M), a === 10)
        $++;
      else if (!t(a)) break;
    if (h = r.md.helpers.parseLinkDestination(k, M, O), !h.ok || (l = r.md.normalizeLink(h.str), !r.md.validateLink(l)))
      return !1;
    for (M = h.pos, $ += h.lines, c = M, u = $, w = M; M < O; M++)
      if (a = k.charCodeAt(M), a === 10)
        $++;
      else if (!t(a)) break;
    for (h = r.md.helpers.parseLinkTitle(k, M, O), M < O && w !== M && h.ok ? (E = h.str, M = h.pos, $ += h.lines) : (E = "", M = c, $ = u); M < O && (a = k.charCodeAt(M), !!t(a)); )
      M++;
    if (M < O && k.charCodeAt(M) !== 10 && E)
      for (E = "", M = c, $ = u; M < O && (a = k.charCodeAt(M), !!t(a)); )
        M++;
    return M < O && k.charCodeAt(M) !== 10 || (v = e(k.slice(1, g)), !v) ? !1 : (i || (typeof r.env.references > "u" && (r.env.references = {}), typeof r.env.references[v] > "u" && (r.env.references[v] = { title: E, href: l }), r.parentType = b, r.line = s + $ + 1), !0);
  }, Oi;
}
var Ri, Ef;
function gme() {
  return Ef || (Ef = 1, Ri = [
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
  ]), Ri;
}
var Io = {}, Af;
function km() {
  if (Af) return Io;
  Af = 1;
  var e = "[a-zA-Z_:][a-zA-Z0-9:._-]*", t = "[^\"'=<>`\\x00-\\x20]+", n = "'[^']*'", r = '"[^"]*"', s = "(?:" + t + "|" + n + "|" + r + ")", o = "(?:\\s+" + e + "(?:\\s*=\\s*" + s + ")?)", i = "<[A-Za-z][A-Za-z0-9\\-]*" + o + "*\\s*\\/?>", a = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", c = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", u = "<[?][\\s\\S]*?[?]>", d = "<![A-Z]+\\s+[^>]*>", l = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", m = new RegExp("^(?:" + i + "|" + a + "|" + c + "|" + u + "|" + d + "|" + l + ")"), f = new RegExp("^(?:" + i + "|" + a + ")");
  return Io.HTML_TAG_RE = m, Io.HTML_OPEN_CLOSE_TAG_RE = f, Io;
}
var Pi, $f;
function mme() {
  if ($f) return Pi;
  $f = 1;
  var e = gme(), t = km().HTML_OPEN_CLOSE_TAG_RE, n = [
    [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
    [/^<!--/, /-->/, !0],
    [/^<\?/, /\?>/, !0],
    [/^<![A-Z]/, />/, !0],
    [/^<!\[CDATA\[/, /\]\]>/, !0],
    [new RegExp("^</?(" + e.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
    [new RegExp(t.source + "\\s*$"), /^$/, !1]
  ];
  return Pi = function(s, o, i, a) {
    var c, u, d, l, m = s.bMarks[o] + s.tShift[o], f = s.eMarks[o];
    if (s.sCount[o] - s.blkIndent >= 4 || !s.md.options.html || s.src.charCodeAt(m) !== 60)
      return !1;
    for (l = s.src.slice(m, f), c = 0; c < n.length && !n[c][0].test(l); c++)
      ;
    if (c === n.length)
      return !1;
    if (a)
      return n[c][2];
    if (u = o + 1, !n[c][1].test(l)) {
      for (; u < i && !(s.sCount[u] < s.blkIndent); u++)
        if (m = s.bMarks[u] + s.tShift[u], f = s.eMarks[u], l = s.src.slice(m, f), n[c][1].test(l)) {
          l.length !== 0 && u++;
          break;
        }
    }
    return s.line = u, d = s.push("html_block", "", 0), d.map = [o, u], d.content = s.getLines(o, u, s.blkIndent, !0), !0;
  }, Pi;
}
var Bi, Mf;
function vme() {
  if (Mf) return Bi;
  Mf = 1;
  var e = Te().isSpace;
  return Bi = function(n, r, s, o) {
    var i, a, c, u, d = n.bMarks[r] + n.tShift[r], l = n.eMarks[r];
    if (n.sCount[r] - n.blkIndent >= 4 || (i = n.src.charCodeAt(d), i !== 35 || d >= l))
      return !1;
    for (a = 1, i = n.src.charCodeAt(++d); i === 35 && d < l && a <= 6; )
      a++, i = n.src.charCodeAt(++d);
    return a > 6 || d < l && !e(i) ? !1 : (o || (l = n.skipSpacesBack(l, d), c = n.skipCharsBack(l, 35, d), c > d && e(n.src.charCodeAt(c - 1)) && (l = c), n.line = r + 1, u = n.push("heading_open", "h" + String(a), 1), u.markup = "########".slice(0, a), u.map = [r, n.line], u = n.push("inline", "", 0), u.content = n.src.slice(d, l).trim(), u.map = [r, n.line], u.children = [], u = n.push("heading_close", "h" + String(a), -1), u.markup = "########".slice(0, a)), !0);
  }, Bi;
}
var zi, Tf;
function _me() {
  return Tf || (Tf = 1, zi = function(t, n, r) {
    var s, o, i, a, c, u, d, l, m, f = n + 1, v, g = t.md.block.ruler.getRules("paragraph");
    if (t.sCount[n] - t.blkIndent >= 4)
      return !1;
    for (v = t.parentType, t.parentType = "paragraph"; f < r && !t.isEmpty(f); f++)
      if (!(t.sCount[f] - t.blkIndent > 3)) {
        if (t.sCount[f] >= t.blkIndent && (u = t.bMarks[f] + t.tShift[f], d = t.eMarks[f], u < d && (m = t.src.charCodeAt(u), (m === 45 || m === 61) && (u = t.skipChars(u, m), u = t.skipSpaces(u), u >= d)))) {
          l = m === 61 ? 1 : 2;
          break;
        }
        if (!(t.sCount[f] < 0)) {
          for (o = !1, i = 0, a = g.length; i < a; i++)
            if (g[i](t, f, r, !0)) {
              o = !0;
              break;
            }
          if (o)
            break;
        }
      }
    return l ? (s = t.getLines(n, f, t.blkIndent, !1).trim(), t.line = f + 1, c = t.push("heading_open", "h" + String(l), 1), c.markup = String.fromCharCode(m), c.map = [n, t.line], c = t.push("inline", "", 0), c.content = s, c.map = [n, t.line - 1], c.children = [], c = t.push("heading_close", "h" + String(l), -1), c.markup = String.fromCharCode(m), t.parentType = v, !0) : !1;
  }), zi;
}
var Di, If;
function bme() {
  return If || (If = 1, Di = function(t, n, r) {
    var s, o, i, a, c, u, d = n + 1, l = t.md.block.ruler.getRules("paragraph");
    for (u = t.parentType, t.parentType = "paragraph"; d < r && !t.isEmpty(d); d++)
      if (!(t.sCount[d] - t.blkIndent > 3) && !(t.sCount[d] < 0)) {
        for (o = !1, i = 0, a = l.length; i < a; i++)
          if (l[i](t, d, r, !0)) {
            o = !0;
            break;
          }
        if (o)
          break;
      }
    return s = t.getLines(n, d, t.blkIndent, !1).trim(), t.line = d, c = t.push("paragraph_open", "p", 1), c.map = [n, t.line], c = t.push("inline", "", 0), c.content = s, c.map = [n, t.line], c.children = [], c = t.push("paragraph_close", "p", -1), t.parentType = u, !0;
  }), Di;
}
var Ni, Lf;
function yme() {
  if (Lf) return Ni;
  Lf = 1;
  var e = Rl(), t = Te().isSpace;
  function n(r, s, o, i) {
    var a, c, u, d, l, m, f, v;
    for (this.src = r, this.md = s, this.env = o, this.tokens = i, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", c = this.src, v = !1, u = d = m = f = 0, l = c.length; d < l; d++) {
      if (a = c.charCodeAt(d), !v)
        if (t(a)) {
          m++, a === 9 ? f += 4 - f % 4 : f++;
          continue;
        } else
          v = !0;
      (a === 10 || d === l - 1) && (a !== 10 && d++, this.bMarks.push(u), this.eMarks.push(d), this.tShift.push(m), this.sCount.push(f), this.bsCount.push(0), v = !1, m = 0, f = 0, u = d + 1);
    }
    this.bMarks.push(c.length), this.eMarks.push(c.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
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
    var c, u, d, l, m, f, v, g = s;
    if (s >= o)
      return "";
    for (f = new Array(o - s), c = 0; g < o; g++, c++) {
      for (u = 0, v = l = this.bMarks[g], g + 1 < o || a ? m = this.eMarks[g] + 1 : m = this.eMarks[g]; l < m && u < i; ) {
        if (d = this.src.charCodeAt(l), t(d))
          d === 9 ? u += 4 - (u + this.bsCount[g]) % 4 : u++;
        else if (l - v < this.tShift[g])
          u++;
        else
          break;
        l++;
      }
      u > i ? f[c] = new Array(u - i + 1).join(" ") + this.src.slice(l, m) : f[c] = this.src.slice(l, m);
    }
    return f.join("");
  }, n.prototype.Token = e, Ni = n, Ni;
}
var qi, Of;
function wme() {
  if (Of) return qi;
  Of = 1;
  var e = Ol(), t = [
    // First 2 params - rule name & source. Secondary array - list of rules,
    // which can be terminated by this one.
    ["table", cme(), ["paragraph", "reference"]],
    ["code", lme()],
    ["fence", ume(), ["paragraph", "reference", "blockquote", "list"]],
    ["blockquote", dme(), ["paragraph", "reference", "blockquote", "list"]],
    ["hr", fme(), ["paragraph", "reference", "blockquote", "list"]],
    ["list", pme(), ["paragraph", "reference", "blockquote"]],
    ["reference", hme()],
    ["html_block", mme(), ["paragraph", "reference", "blockquote"]],
    ["heading", vme(), ["paragraph", "reference", "blockquote"]],
    ["lheading", _me()],
    ["paragraph", bme()]
  ];
  function n() {
    this.ruler = new e();
    for (var r = 0; r < t.length; r++)
      this.ruler.push(t[r][0], t[r][1], { alt: (t[r][2] || []).slice() });
  }
  return n.prototype.tokenize = function(r, s, o) {
    for (var i, a, c, u = this.ruler.getRules(""), d = u.length, l = s, m = !1, f = r.md.options.maxNesting; l < o && (r.line = l = r.skipEmptyLines(l), !(l >= o || r.sCount[l] < r.blkIndent)); ) {
      if (r.level >= f) {
        r.line = o;
        break;
      }
      for (c = r.line, a = 0; a < d; a++)
        if (i = u[a](r, l, o, !1), i) {
          if (c >= r.line)
            throw new Error("block rule didn't increment state.line");
          break;
        }
      if (!i) throw new Error("none of the block rules matched");
      r.tight = !m, r.isEmpty(r.line - 1) && (m = !0), l = r.line, l < o && r.isEmpty(l) && (m = !0, l++, r.line = l);
    }
  }, n.prototype.parse = function(r, s, o, i) {
    var a;
    r && (a = new this.State(r, s, o, i), this.tokenize(a, a.line, a.lineMax));
  }, n.prototype.State = yme(), qi = n, qi;
}
var Fi, Rf;
function kme() {
  if (Rf) return Fi;
  Rf = 1;
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
  return Fi = function(n, r) {
    for (var s = n.pos; s < n.posMax && !e(n.src.charCodeAt(s)); )
      s++;
    return s === n.pos ? !1 : (r || (n.pending += n.src.slice(n.pos, s)), n.pos = s, !0);
  }, Fi;
}
var ji, Pf;
function Cme() {
  if (Pf) return ji;
  Pf = 1;
  var e = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
  return ji = function(n, r) {
    var s, o, i, a, c, u, d, l;
    return !n.md.options.linkify || n.linkLevel > 0 || (s = n.pos, o = n.posMax, s + 3 > o) || n.src.charCodeAt(s) !== 58 || n.src.charCodeAt(s + 1) !== 47 || n.src.charCodeAt(s + 2) !== 47 || (i = n.pending.match(e), !i) || (a = i[1], c = n.md.linkify.matchAtStart(n.src.slice(s - a.length)), !c) || (u = c.url, u.length <= a.length) || (u = u.replace(/\*+$/, ""), d = n.md.normalizeLink(u), !n.md.validateLink(d)) ? !1 : (r || (n.pending = n.pending.slice(0, -a.length), l = n.push("link_open", "a", 1), l.attrs = [["href", d]], l.markup = "linkify", l.info = "auto", l = n.push("text", "", 0), l.content = n.md.normalizeLinkText(u), l = n.push("link_close", "a", -1), l.markup = "linkify", l.info = "auto"), n.pos += u.length - a.length, !0);
  }, ji;
}
var Hi, Bf;
function xme() {
  if (Bf) return Hi;
  Bf = 1;
  var e = Te().isSpace;
  return Hi = function(n, r) {
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
  }, Hi;
}
var Vi, zf;
function Sme() {
  if (zf) return Vi;
  zf = 1;
  for (var e = Te().isSpace, t = [], n = 0; n < 256; n++)
    t.push(0);
  return "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(r) {
    t[r.charCodeAt(0)] = 1;
  }), Vi = function(s, o) {
    var i, a, c, u, d, l = s.pos, m = s.posMax;
    if (s.src.charCodeAt(l) !== 92 || (l++, l >= m)) return !1;
    if (i = s.src.charCodeAt(l), i === 10) {
      for (o || s.push("hardbreak", "br", 0), l++; l < m && (i = s.src.charCodeAt(l), !!e(i)); )
        l++;
      return s.pos = l, !0;
    }
    return u = s.src[l], i >= 55296 && i <= 56319 && l + 1 < m && (a = s.src.charCodeAt(l + 1), a >= 56320 && a <= 57343 && (u += s.src[l + 1], l++)), c = "\\" + u, o || (d = s.push("text_special", "", 0), i < 256 && t[i] !== 0 ? d.content = u : d.content = c, d.markup = c, d.info = "escape"), s.pos = l + 1, !0;
  }, Vi;
}
var Ui, Df;
function Eme() {
  return Df || (Df = 1, Ui = function(t, n) {
    var r, s, o, i, a, c, u, d, l = t.pos, m = t.src.charCodeAt(l);
    if (m !== 96)
      return !1;
    for (r = l, l++, s = t.posMax; l < s && t.src.charCodeAt(l) === 96; )
      l++;
    if (o = t.src.slice(r, l), u = o.length, t.backticksScanned && (t.backticks[u] || 0) <= r)
      return n || (t.pending += o), t.pos += u, !0;
    for (c = l; (a = t.src.indexOf("`", c)) !== -1; ) {
      for (c = a + 1; c < s && t.src.charCodeAt(c) === 96; )
        c++;
      if (d = c - a, d === u)
        return n || (i = t.push("code_inline", "code", 0), i.markup = o, i.content = t.src.slice(l, a).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), t.pos = c, !0;
      t.backticks[d] = a;
    }
    return t.backticksScanned = !0, n || (t.pending += o), t.pos += u, !0;
  }), Ui;
}
var Lo = {}, Nf;
function qf() {
  if (Nf) return Lo;
  Nf = 1, Lo.tokenize = function(n, r) {
    var s, o, i, a, c, u = n.pos, d = n.src.charCodeAt(u);
    if (r || d !== 126 || (o = n.scanDelims(n.pos, !0), a = o.length, c = String.fromCharCode(d), a < 2))
      return !1;
    for (a % 2 && (i = n.push("text", "", 0), i.content = c, a--), s = 0; s < a; s += 2)
      i = n.push("text", "", 0), i.content = c + c, n.delimiters.push({
        marker: d,
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
    var r, s, o, i, a, c = [], u = n.length;
    for (r = 0; r < u; r++)
      o = n[r], o.marker === 126 && o.end !== -1 && (i = n[o.end], a = t.tokens[o.token], a.type = "s_open", a.tag = "s", a.nesting = 1, a.markup = "~~", a.content = "", a = t.tokens[i.token], a.type = "s_close", a.tag = "s", a.nesting = -1, a.markup = "~~", a.content = "", t.tokens[i.token - 1].type === "text" && t.tokens[i.token - 1].content === "~" && c.push(i.token - 1));
    for (; c.length; ) {
      for (r = c.pop(), s = r + 1; s < t.tokens.length && t.tokens[s].type === "s_close"; )
        s++;
      s--, r !== s && (a = t.tokens[s], t.tokens[s] = t.tokens[r], t.tokens[r] = a);
    }
  }
  return Lo.postProcess = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(n, s[r].delimiters);
  }, Lo;
}
var Oo = {}, Ff;
function jf() {
  if (Ff) return Oo;
  Ff = 1, Oo.tokenize = function(n, r) {
    var s, o, i, a = n.pos, c = n.src.charCodeAt(a);
    if (r || c !== 95 && c !== 42)
      return !1;
    for (o = n.scanDelims(n.pos, c === 42), s = 0; s < o.length; s++)
      i = n.push("text", "", 0), i.content = String.fromCharCode(c), n.delimiters.push({
        // Char code of the starting marker (number).
        //
        marker: c,
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
    var r, s, o, i, a, c, u = n.length;
    for (r = u - 1; r >= 0; r--)
      s = n[r], !(s.marker !== 95 && s.marker !== 42) && s.end !== -1 && (o = n[s.end], c = r > 0 && n[r - 1].end === s.end + 1 && // check that first two markers match and adjacent
      n[r - 1].marker === s.marker && n[r - 1].token === s.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
      n[s.end + 1].token === o.token + 1, a = String.fromCharCode(s.marker), i = t.tokens[s.token], i.type = c ? "strong_open" : "em_open", i.tag = c ? "strong" : "em", i.nesting = 1, i.markup = c ? a + a : a, i.content = "", i = t.tokens[o.token], i.type = c ? "strong_close" : "em_close", i.tag = c ? "strong" : "em", i.nesting = -1, i.markup = c ? a + a : a, i.content = "", c && (t.tokens[n[r - 1].token].content = "", t.tokens[n[s.end + 1].token].content = "", r--));
  }
  return Oo.postProcess = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n, n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(n, s[r].delimiters);
  }, Oo;
}
var Zi, Hf;
function Ame() {
  if (Hf) return Zi;
  Hf = 1;
  var e = Te().normalizeReference, t = Te().isSpace;
  return Zi = function(r, s) {
    var o, i, a, c, u, d, l, m, f, v = "", g = "", b = r.pos, h = r.posMax, w = r.pos, k = !0;
    if (r.src.charCodeAt(r.pos) !== 91 || (u = r.pos + 1, c = r.md.helpers.parseLinkLabel(r, r.pos, !0), c < 0))
      return !1;
    if (d = c + 1, d < h && r.src.charCodeAt(d) === 40) {
      for (k = !1, d++; d < h && (i = r.src.charCodeAt(d), !(!t(i) && i !== 10)); d++)
        ;
      if (d >= h)
        return !1;
      if (w = d, l = r.md.helpers.parseLinkDestination(r.src, d, r.posMax), l.ok) {
        for (v = r.md.normalizeLink(l.str), r.md.validateLink(v) ? d = l.pos : v = "", w = d; d < h && (i = r.src.charCodeAt(d), !(!t(i) && i !== 10)); d++)
          ;
        if (l = r.md.helpers.parseLinkTitle(r.src, d, r.posMax), d < h && w !== d && l.ok)
          for (g = l.str, d = l.pos; d < h && (i = r.src.charCodeAt(d), !(!t(i) && i !== 10)); d++)
            ;
      }
      (d >= h || r.src.charCodeAt(d) !== 41) && (k = !0), d++;
    }
    if (k) {
      if (typeof r.env.references > "u")
        return !1;
      if (d < h && r.src.charCodeAt(d) === 91 ? (w = d + 1, d = r.md.helpers.parseLinkLabel(r, d), d >= 0 ? a = r.src.slice(w, d++) : d = c + 1) : d = c + 1, a || (a = r.src.slice(u, c)), m = r.env.references[e(a)], !m)
        return r.pos = b, !1;
      v = m.href, g = m.title;
    }
    return s || (r.pos = u, r.posMax = c, f = r.push("link_open", "a", 1), f.attrs = o = [["href", v]], g && o.push(["title", g]), r.linkLevel++, r.md.inline.tokenize(r), r.linkLevel--, f = r.push("link_close", "a", -1)), r.pos = d, r.posMax = h, !0;
  }, Zi;
}
var Wi, Vf;
function $me() {
  if (Vf) return Wi;
  Vf = 1;
  var e = Te().normalizeReference, t = Te().isSpace;
  return Wi = function(r, s) {
    var o, i, a, c, u, d, l, m, f, v, g, b, h, w = "", k = r.pos, C = r.posMax;
    if (r.src.charCodeAt(r.pos) !== 33 || r.src.charCodeAt(r.pos + 1) !== 91 || (d = r.pos + 2, u = r.md.helpers.parseLinkLabel(r, r.pos + 1, !1), u < 0))
      return !1;
    if (l = u + 1, l < C && r.src.charCodeAt(l) === 40) {
      for (l++; l < C && (i = r.src.charCodeAt(l), !(!t(i) && i !== 10)); l++)
        ;
      if (l >= C)
        return !1;
      for (h = l, f = r.md.helpers.parseLinkDestination(r.src, l, r.posMax), f.ok && (w = r.md.normalizeLink(f.str), r.md.validateLink(w) ? l = f.pos : w = ""), h = l; l < C && (i = r.src.charCodeAt(l), !(!t(i) && i !== 10)); l++)
        ;
      if (f = r.md.helpers.parseLinkTitle(r.src, l, r.posMax), l < C && h !== l && f.ok)
        for (v = f.str, l = f.pos; l < C && (i = r.src.charCodeAt(l), !(!t(i) && i !== 10)); l++)
          ;
      else
        v = "";
      if (l >= C || r.src.charCodeAt(l) !== 41)
        return r.pos = k, !1;
      l++;
    } else {
      if (typeof r.env.references > "u")
        return !1;
      if (l < C && r.src.charCodeAt(l) === 91 ? (h = l + 1, l = r.md.helpers.parseLinkLabel(r, l), l >= 0 ? c = r.src.slice(h, l++) : l = u + 1) : l = u + 1, c || (c = r.src.slice(d, u)), m = r.env.references[e(c)], !m)
        return r.pos = k, !1;
      w = m.href, v = m.title;
    }
    return s || (a = r.src.slice(d, u), r.md.inline.parse(
      a,
      r.md,
      r.env,
      b = []
    ), g = r.push("image", "img", 0), g.attrs = o = [["src", w], ["alt", ""]], g.children = b, g.content = a, v && o.push(["title", v])), r.pos = l, r.posMax = C, !0;
  }, Wi;
}
var Gi, Uf;
function Mme() {
  if (Uf) return Gi;
  Uf = 1;
  var e = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, t = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
  return Gi = function(r, s) {
    var o, i, a, c, u, d, l = r.pos;
    if (r.src.charCodeAt(l) !== 60)
      return !1;
    for (u = r.pos, d = r.posMax; ; ) {
      if (++l >= d || (c = r.src.charCodeAt(l), c === 60)) return !1;
      if (c === 62) break;
    }
    return o = r.src.slice(u + 1, l), t.test(o) ? (i = r.md.normalizeLink(o), r.md.validateLink(i) ? (s || (a = r.push("link_open", "a", 1), a.attrs = [["href", i]], a.markup = "autolink", a.info = "auto", a = r.push("text", "", 0), a.content = r.md.normalizeLinkText(o), a = r.push("link_close", "a", -1), a.markup = "autolink", a.info = "auto"), r.pos += o.length + 2, !0) : !1) : e.test(o) ? (i = r.md.normalizeLink("mailto:" + o), r.md.validateLink(i) ? (s || (a = r.push("link_open", "a", 1), a.attrs = [["href", i]], a.markup = "autolink", a.info = "auto", a = r.push("text", "", 0), a.content = r.md.normalizeLinkText(o), a = r.push("link_close", "a", -1), a.markup = "autolink", a.info = "auto"), r.pos += o.length + 2, !0) : !1) : !1;
  }, Gi;
}
var Ki, Zf;
function Tme() {
  if (Zf) return Ki;
  Zf = 1;
  var e = km().HTML_TAG_RE;
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
  return Ki = function(o, i) {
    var a, c, u, d, l = o.pos;
    return !o.md.options.html || (u = o.posMax, o.src.charCodeAt(l) !== 60 || l + 2 >= u) || (a = o.src.charCodeAt(l + 1), a !== 33 && a !== 63 && a !== 47 && !r(a)) || (c = o.src.slice(l).match(e), !c) ? !1 : (i || (d = o.push("html_inline", "", 0), d.content = c[0], t(d.content) && o.linkLevel++, n(d.content) && o.linkLevel--), o.pos += c[0].length, !0);
  }, Ki;
}
var Xi, Wf;
function Ime() {
  if (Wf) return Xi;
  Wf = 1;
  var e = vm(), t = Te().has, n = Te().isValidEntityCode, r = Te().fromCodePoint, s = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, o = /^&([a-z][a-z0-9]{1,31});/i;
  return Xi = function(a, c) {
    var u, d, l, m, f = a.pos, v = a.posMax;
    if (a.src.charCodeAt(f) !== 38 || f + 1 >= v) return !1;
    if (u = a.src.charCodeAt(f + 1), u === 35) {
      if (l = a.src.slice(f).match(s), l)
        return c || (d = l[1][0].toLowerCase() === "x" ? parseInt(l[1].slice(1), 16) : parseInt(l[1], 10), m = a.push("text_special", "", 0), m.content = n(d) ? r(d) : r(65533), m.markup = l[0], m.info = "entity"), a.pos += l[0].length, !0;
    } else if (l = a.src.slice(f).match(o), l && t(e, l[1]))
      return c || (m = a.push("text_special", "", 0), m.content = e[l[1]], m.markup = l[0], m.info = "entity"), a.pos += l[0].length, !0;
    return !1;
  }, Xi;
}
var Yi, Gf;
function Lme() {
  if (Gf) return Yi;
  Gf = 1;
  function e(t) {
    var n, r, s, o, i, a, c, u, d = {}, l = t.length;
    if (l) {
      var m = 0, f = -2, v = [];
      for (n = 0; n < l; n++)
        if (s = t[n], v.push(0), (t[m].marker !== s.marker || f !== s.token - 1) && (m = n), f = s.token, s.length = s.length || 0, !!s.close) {
          for (d.hasOwnProperty(s.marker) || (d[s.marker] = [-1, -1, -1, -1, -1, -1]), i = d[s.marker][(s.open ? 3 : 0) + s.length % 3], r = m - v[m] - 1, a = r; r > i; r -= v[r] + 1)
            if (o = t[r], o.marker === s.marker && o.open && o.end < 0 && (c = !1, (o.close || s.open) && (o.length + s.length) % 3 === 0 && (o.length % 3 !== 0 || s.length % 3 !== 0) && (c = !0), !c)) {
              u = r > 0 && !t[r - 1].open ? v[r - 1] + 1 : 0, v[n] = n - r + u, v[r] = u, s.open = !1, o.end = n, o.close = !1, a = -1, f = -2;
              break;
            }
          a !== -1 && (d[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = a);
        }
    }
  }
  return Yi = function(n) {
    var r, s = n.tokens_meta, o = n.tokens_meta.length;
    for (e(n.delimiters), r = 0; r < o; r++)
      s[r] && s[r].delimiters && e(s[r].delimiters);
  }, Yi;
}
var Ji, Kf;
function Ome() {
  return Kf || (Kf = 1, Ji = function(t) {
    var n, r, s = 0, o = t.tokens, i = t.tokens.length;
    for (n = r = 0; n < i; n++)
      o[n].nesting < 0 && s--, o[n].level = s, o[n].nesting > 0 && s++, o[n].type === "text" && n + 1 < i && o[n + 1].type === "text" ? o[n + 1].content = o[n].content + o[n + 1].content : (n !== r && (o[r] = o[n]), r++);
    n !== r && (o.length = r);
  }), Ji;
}
var Qi, Xf;
function Rme() {
  if (Xf) return Qi;
  Xf = 1;
  var e = Rl(), t = Te().isWhiteSpace, n = Te().isPunctChar, r = Te().isMdAsciiPunct;
  function s(o, i, a, c) {
    this.src = o, this.env = a, this.md = i, this.tokens = c, this.tokens_meta = Array(c.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
  }
  return s.prototype.pushPending = function() {
    var o = new e("text", "", 0);
    return o.content = this.pending, o.level = this.pendingLevel, this.tokens.push(o), this.pending = "", o;
  }, s.prototype.push = function(o, i, a) {
    this.pending && this.pushPending();
    var c = new e(o, i, a), u = null;
    return a < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), c.level = this.level, a > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], u = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(c), this.tokens_meta.push(u), c;
  }, s.prototype.scanDelims = function(o, i) {
    var a = o, c, u, d, l, m, f, v, g, b, h = !0, w = !0, k = this.posMax, C = this.src.charCodeAt(o);
    for (c = o > 0 ? this.src.charCodeAt(o - 1) : 32; a < k && this.src.charCodeAt(a) === C; )
      a++;
    return d = a - o, u = a < k ? this.src.charCodeAt(a) : 32, v = r(c) || n(String.fromCharCode(c)), b = r(u) || n(String.fromCharCode(u)), f = t(c), g = t(u), g ? h = !1 : b && (f || v || (h = !1)), f ? w = !1 : v && (g || b || (w = !1)), i ? (l = h, m = w) : (l = h && (!w || v), m = w && (!h || b)), {
      can_open: l,
      can_close: m,
      length: d
    };
  }, s.prototype.Token = e, Qi = s, Qi;
}
var ea, Yf;
function Pme() {
  if (Yf) return ea;
  Yf = 1;
  var e = Ol(), t = [
    ["text", kme()],
    ["linkify", Cme()],
    ["newline", xme()],
    ["escape", Sme()],
    ["backticks", Eme()],
    ["strikethrough", qf().tokenize],
    ["emphasis", jf().tokenize],
    ["link", Ame()],
    ["image", $me()],
    ["autolink", Mme()],
    ["html_inline", Tme()],
    ["entity", Ime()]
  ], n = [
    ["balance_pairs", Lme()],
    ["strikethrough", qf().postProcess],
    ["emphasis", jf().postProcess],
    // rules for pairs separate '**' into its own text tokens, which may be left unused,
    // rule below merges unused segments back with the rest of the text
    ["fragments_join", Ome()]
  ];
  function r() {
    var s;
    for (this.ruler = new e(), s = 0; s < t.length; s++)
      this.ruler.push(t[s][0], t[s][1]);
    for (this.ruler2 = new e(), s = 0; s < n.length; s++)
      this.ruler2.push(n[s][0], n[s][1]);
  }
  return r.prototype.skipToken = function(s) {
    var o, i, a = s.pos, c = this.ruler.getRules(""), u = c.length, d = s.md.options.maxNesting, l = s.cache;
    if (typeof l[a] < "u") {
      s.pos = l[a];
      return;
    }
    if (s.level < d) {
      for (i = 0; i < u; i++)
        if (s.level++, o = c[i](s, !0), s.level--, o) {
          if (a >= s.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    } else
      s.pos = s.posMax;
    o || s.pos++, l[a] = s.pos;
  }, r.prototype.tokenize = function(s) {
    for (var o, i, a, c = this.ruler.getRules(""), u = c.length, d = s.posMax, l = s.md.options.maxNesting; s.pos < d; ) {
      if (a = s.pos, s.level < l) {
        for (i = 0; i < u; i++)
          if (o = c[i](s, !1), o) {
            if (a >= s.pos)
              throw new Error("inline rule didn't increment state.pos");
            break;
          }
      }
      if (o) {
        if (s.pos >= d)
          break;
        continue;
      }
      s.pending += s.src[s.pos++];
    }
    s.pending && s.pushPending();
  }, r.prototype.parse = function(s, o, i, a) {
    var c, u, d, l = new this.State(s, o, i, a);
    for (this.tokenize(l), u = this.ruler2.getRules(""), d = u.length, c = 0; c < d; c++)
      u[c](l);
  }, r.prototype.State = Rme(), ea = r, ea;
}
var ta, Jf;
function Bme() {
  return Jf || (Jf = 1, ta = function(e) {
    var t = {};
    e = e || {}, t.src_Any = bm().source, t.src_Cc = ym().source, t.src_Z = wm().source, t.src_P = Ll().source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
    var n = "[><｜]";
    return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
  }), ta;
}
var na, Qf;
function zme() {
  if (Qf) return na;
  Qf = 1;
  function e(k) {
    var C = Array.prototype.slice.call(arguments, 1);
    return C.forEach(function(A) {
      A && Object.keys(A).forEach(function(E) {
        k[E] = A[E];
      });
    }), k;
  }
  function t(k) {
    return Object.prototype.toString.call(k);
  }
  function n(k) {
    return t(k) === "[object String]";
  }
  function r(k) {
    return t(k) === "[object Object]";
  }
  function s(k) {
    return t(k) === "[object RegExp]";
  }
  function o(k) {
    return t(k) === "[object Function]";
  }
  function i(k) {
    return k.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  var a = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
  };
  function c(k) {
    return Object.keys(k || {}).reduce(function(C, A) {
      return C || a.hasOwnProperty(A);
    }, !1);
  }
  var u = {
    "http:": {
      validate: function(k, C, A) {
        var E = k.slice(C);
        return A.re.http || (A.re.http = new RegExp(
          "^\\/\\/" + A.re.src_auth + A.re.src_host_port_strict + A.re.src_path,
          "i"
        )), A.re.http.test(E) ? E.match(A.re.http)[0].length : 0;
      }
    },
    "https:": "http:",
    "ftp:": "http:",
    "//": {
      validate: function(k, C, A) {
        var E = k.slice(C);
        return A.re.no_http || (A.re.no_http = new RegExp(
          "^" + A.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
          // with code comments
          "(?:localhost|(?:(?:" + A.re.src_domain + ")\\.)+" + A.re.src_domain_root + ")" + A.re.src_port + A.re.src_host_terminator + A.re.src_path,
          "i"
        )), A.re.no_http.test(E) ? C >= 3 && k[C - 3] === ":" || C >= 3 && k[C - 3] === "/" ? 0 : E.match(A.re.no_http)[0].length : 0;
      }
    },
    "mailto:": {
      validate: function(k, C, A) {
        var E = k.slice(C);
        return A.re.mailto || (A.re.mailto = new RegExp(
          "^" + A.re.src_email_name + "@" + A.re.src_host_strict,
          "i"
        )), A.re.mailto.test(E) ? E.match(A.re.mailto)[0].length : 0;
      }
    }
  }, d = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
  function m(k) {
    k.__index__ = -1, k.__text_cache__ = "";
  }
  function f(k) {
    return function(C, A) {
      var E = C.slice(A);
      return k.test(E) ? E.match(k)[0].length : 0;
    };
  }
  function v() {
    return function(k, C) {
      C.normalize(k);
    };
  }
  function g(k) {
    var C = k.re = Bme()(k.__opts__), A = k.__tlds__.slice();
    k.onCompile(), k.__tlds_replaced__ || A.push(d), A.push(C.src_xn), C.src_tlds = A.join("|");
    function E(R) {
      return R.replace("%TLDS%", C.src_tlds);
    }
    C.email_fuzzy = RegExp(E(C.tpl_email_fuzzy), "i"), C.link_fuzzy = RegExp(E(C.tpl_link_fuzzy), "i"), C.link_no_ip_fuzzy = RegExp(E(C.tpl_link_no_ip_fuzzy), "i"), C.host_fuzzy_test = RegExp(E(C.tpl_host_fuzzy_test), "i");
    var $ = [];
    k.__compiled__ = {};
    function M(R, B) {
      throw new Error('(LinkifyIt) Invalid schema "' + R + '": ' + B);
    }
    Object.keys(k.__schemas__).forEach(function(R) {
      var B = k.__schemas__[R];
      if (B !== null) {
        var V = { validate: null, link: null };
        if (k.__compiled__[R] = V, r(B)) {
          s(B.validate) ? V.validate = f(B.validate) : o(B.validate) ? V.validate = B.validate : M(R, B), o(B.normalize) ? V.normalize = B.normalize : B.normalize ? M(R, B) : V.normalize = v();
          return;
        }
        if (n(B)) {
          $.push(R);
          return;
        }
        M(R, B);
      }
    }), $.forEach(function(R) {
      k.__compiled__[k.__schemas__[R]] && (k.__compiled__[R].validate = k.__compiled__[k.__schemas__[R]].validate, k.__compiled__[R].normalize = k.__compiled__[k.__schemas__[R]].normalize);
    }), k.__compiled__[""] = { validate: null, normalize: v() };
    var O = Object.keys(k.__compiled__).filter(function(R) {
      return R.length > 0 && k.__compiled__[R];
    }).map(i).join("|");
    k.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + C.src_ZPCc + "))(" + O + ")", "i"), k.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + C.src_ZPCc + "))(" + O + ")", "ig"), k.re.schema_at_start = RegExp("^" + k.re.schema_search.source, "i"), k.re.pretest = RegExp(
      "(" + k.re.schema_test.source + ")|(" + k.re.host_fuzzy_test.source + ")|@",
      "i"
    ), m(k);
  }
  function b(k, C) {
    var A = k.__index__, E = k.__last_index__, $ = k.__text_cache__.slice(A, E);
    this.schema = k.__schema__.toLowerCase(), this.index = A + C, this.lastIndex = E + C, this.raw = $, this.text = $, this.url = $;
  }
  function h(k, C) {
    var A = new b(k, C);
    return k.__compiled__[A.schema].normalize(A, k), A;
  }
  function w(k, C) {
    if (!(this instanceof w))
      return new w(k, C);
    C || c(k) && (C = k, k = {}), this.__opts__ = e({}, a, C), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = e({}, u, k), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = !1, this.re = {}, g(this);
  }
  return w.prototype.add = function(C, A) {
    return this.__schemas__[C] = A, g(this), this;
  }, w.prototype.set = function(C) {
    return this.__opts__ = e(this.__opts__, C), this;
  }, w.prototype.test = function(C) {
    if (this.__text_cache__ = C, this.__index__ = -1, !C.length)
      return !1;
    var A, E, $, M, O, R, B, V, re;
    if (this.re.schema_test.test(C)) {
      for (B = this.re.schema_search, B.lastIndex = 0; (A = B.exec(C)) !== null; )
        if (M = this.testSchemaAt(C, A[2], B.lastIndex), M) {
          this.__schema__ = A[2], this.__index__ = A.index + A[1].length, this.__last_index__ = A.index + A[0].length + M;
          break;
        }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (V = C.search(this.re.host_fuzzy_test), V >= 0 && (this.__index__ < 0 || V < this.__index__) && (E = C.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (O = E.index + E[1].length, (this.__index__ < 0 || O < this.__index__) && (this.__schema__ = "", this.__index__ = O, this.__last_index__ = E.index + E[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (re = C.indexOf("@"), re >= 0 && ($ = C.match(this.re.email_fuzzy)) !== null && (O = $.index + $[1].length, R = $.index + $[0].length, (this.__index__ < 0 || O < this.__index__ || O === this.__index__ && R > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = O, this.__last_index__ = R))), this.__index__ >= 0;
  }, w.prototype.pretest = function(C) {
    return this.re.pretest.test(C);
  }, w.prototype.testSchemaAt = function(C, A, E) {
    return this.__compiled__[A.toLowerCase()] ? this.__compiled__[A.toLowerCase()].validate(C, E, this) : 0;
  }, w.prototype.match = function(C) {
    var A = 0, E = [];
    this.__index__ >= 0 && this.__text_cache__ === C && (E.push(h(this, A)), A = this.__last_index__);
    for (var $ = A ? C.slice(A) : C; this.test($); )
      E.push(h(this, A)), $ = $.slice(this.__last_index__), A += this.__last_index__;
    return E.length ? E : null;
  }, w.prototype.matchAtStart = function(C) {
    if (this.__text_cache__ = C, this.__index__ = -1, !C.length) return null;
    var A = this.re.schema_at_start.exec(C);
    if (!A) return null;
    var E = this.testSchemaAt(C, A[2], A[0].length);
    return E ? (this.__schema__ = A[2], this.__index__ = A.index + A[1].length, this.__last_index__ = A.index + A[0].length + E, h(this, 0)) : null;
  }, w.prototype.tlds = function(C, A) {
    return C = Array.isArray(C) ? C : [C], A ? (this.__tlds__ = this.__tlds__.concat(C).sort().filter(function(E, $, M) {
      return E !== M[$ - 1];
    }).reverse(), g(this), this) : (this.__tlds__ = C.slice(), this.__tlds_replaced__ = !0, g(this), this);
  }, w.prototype.normalize = function(C) {
    C.schema || (C.url = "http://" + C.url), C.schema === "mailto:" && !/^mailto:/i.test(C.url) && (C.url = "mailto:" + C.url);
  }, w.prototype.onCompile = function() {
  }, na = w, na;
}
const vr = 2147483647, an = 36, Pl = 1, ao = 26, Dme = 38, Nme = 700, Cm = 72, xm = 128, Sm = "-", qme = /^xn--/, Fme = /[^\0-\x7F]/, jme = /[\x2E\u3002\uFF0E\uFF61]/g, Hme = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, ra = an - Pl, cn = Math.floor, oa = String.fromCharCode;
function Pn(e) {
  throw new RangeError(Hme[e]);
}
function Vme(e, t) {
  const n = [];
  let r = e.length;
  for (; r--; )
    n[r] = t(e[r]);
  return n;
}
function Em(e, t) {
  const n = e.split("@");
  let r = "";
  n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(jme, ".");
  const s = e.split("."), o = Vme(s, t).join(".");
  return r + o;
}
function Bl(e) {
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
const Am = (e) => String.fromCodePoint(...e), Ume = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : an;
}, e0 = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, $m = function(e, t, n) {
  let r = 0;
  for (e = n ? cn(e / Nme) : e >> 1, e += cn(e / t); e > ra * ao >> 1; r += an)
    e = cn(e / ra);
  return cn(r + (ra + 1) * e / (e + Dme));
}, zl = function(e) {
  const t = [], n = e.length;
  let r = 0, s = xm, o = Cm, i = e.lastIndexOf(Sm);
  i < 0 && (i = 0);
  for (let a = 0; a < i; ++a)
    e.charCodeAt(a) >= 128 && Pn("not-basic"), t.push(e.charCodeAt(a));
  for (let a = i > 0 ? i + 1 : 0; a < n; ) {
    const c = r;
    for (let d = 1, l = an; ; l += an) {
      a >= n && Pn("invalid-input");
      const m = Ume(e.charCodeAt(a++));
      m >= an && Pn("invalid-input"), m > cn((vr - r) / d) && Pn("overflow"), r += m * d;
      const f = l <= o ? Pl : l >= o + ao ? ao : l - o;
      if (m < f)
        break;
      const v = an - f;
      d > cn(vr / v) && Pn("overflow"), d *= v;
    }
    const u = t.length + 1;
    o = $m(r - c, u, c == 0), cn(r / u) > vr - s && Pn("overflow"), s += cn(r / u), r %= u, t.splice(r++, 0, s);
  }
  return String.fromCodePoint(...t);
}, Dl = function(e) {
  const t = [];
  e = Bl(e);
  const n = e.length;
  let r = xm, s = 0, o = Cm;
  for (const c of e)
    c < 128 && t.push(oa(c));
  const i = t.length;
  let a = i;
  for (i && t.push(Sm); a < n; ) {
    let c = vr;
    for (const d of e)
      d >= r && d < c && (c = d);
    const u = a + 1;
    c - r > cn((vr - s) / u) && Pn("overflow"), s += (c - r) * u, r = c;
    for (const d of e)
      if (d < r && ++s > vr && Pn("overflow"), d === r) {
        let l = s;
        for (let m = an; ; m += an) {
          const f = m <= o ? Pl : m >= o + ao ? ao : m - o;
          if (l < f)
            break;
          const v = l - f, g = an - f;
          t.push(
            oa(e0(f + v % g, 0))
          ), l = cn(v / g);
        }
        t.push(oa(e0(l, 0))), o = $m(s, u, a === i), s = 0, ++a;
      }
    ++s, ++r;
  }
  return t.join("");
}, Mm = function(e) {
  return Em(e, function(t) {
    return qme.test(t) ? zl(t.slice(4).toLowerCase()) : t;
  });
}, Tm = function(e) {
  return Em(e, function(t) {
    return Fme.test(t) ? "xn--" + Dl(t) : t;
  });
}, Zme = {
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
    decode: Bl,
    encode: Am
  },
  decode: zl,
  encode: Dl,
  toASCII: Tm,
  toUnicode: Mm
}, Wme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: zl,
  default: Zme,
  encode: Dl,
  toASCII: Tm,
  toUnicode: Mm,
  ucs2decode: Bl,
  ucs2encode: Am
}, Symbol.toStringTag, { value: "Module" })), Gme = /* @__PURE__ */ m_(Wme);
var sa, t0;
function Kme() {
  return t0 || (t0 = 1, sa = {
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
  }), sa;
}
var ia, n0;
function Xme() {
  return n0 || (n0 = 1, ia = {
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
  }), ia;
}
var aa, r0;
function Yme() {
  return r0 || (r0 = 1, aa = {
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
  }), aa;
}
var ca, o0;
function Jme() {
  if (o0) return ca;
  o0 = 1;
  var e = Te(), t = Yge(), n = Jge(), r = ame(), s = wme(), o = Pme(), i = zme(), a = _m(), c = Gme, u = {
    default: Kme(),
    zero: Xme(),
    commonmark: Yme()
  }, d = /^(vbscript|javascript|file|data):/, l = /^data:image\/(gif|png|jpeg|webp);/;
  function m(h) {
    var w = h.trim().toLowerCase();
    return d.test(w) ? !!l.test(w) : !0;
  }
  var f = ["http:", "https:", "mailto:"];
  function v(h) {
    var w = a.parse(h, !0);
    if (w.hostname && (!w.protocol || f.indexOf(w.protocol) >= 0))
      try {
        w.hostname = c.toASCII(w.hostname);
      } catch {
      }
    return a.encode(a.format(w));
  }
  function g(h) {
    var w = a.parse(h, !0);
    if (w.hostname && (!w.protocol || f.indexOf(w.protocol) >= 0))
      try {
        w.hostname = c.toUnicode(w.hostname);
      } catch {
      }
    return a.decode(a.format(w), a.decode.defaultChars + "%");
  }
  function b(h, w) {
    if (!(this instanceof b))
      return new b(h, w);
    w || e.isString(h) || (w = h || {}, h = "default"), this.inline = new o(), this.block = new s(), this.core = new r(), this.renderer = new n(), this.linkify = new i(), this.validateLink = m, this.normalizeLink = v, this.normalizeLinkText = g, this.utils = e, this.helpers = e.assign({}, t), this.options = {}, this.configure(h), w && this.set(w);
  }
  return b.prototype.set = function(h) {
    return e.assign(this.options, h), this;
  }, b.prototype.configure = function(h) {
    var w = this, k;
    if (e.isString(h) && (k = h, h = u[k], !h))
      throw new Error('Wrong `markdown-it` preset "' + k + '", check name');
    if (!h)
      throw new Error("Wrong `markdown-it` preset, can't be empty");
    return h.options && w.set(h.options), h.components && Object.keys(h.components).forEach(function(C) {
      h.components[C].rules && w[C].ruler.enableOnly(h.components[C].rules), h.components[C].rules2 && w[C].ruler2.enableOnly(h.components[C].rules2);
    }), this;
  }, b.prototype.enable = function(h, w) {
    var k = [];
    Array.isArray(h) || (h = [h]), ["core", "block", "inline"].forEach(function(A) {
      k = k.concat(this[A].ruler.enable(h, !0));
    }, this), k = k.concat(this.inline.ruler2.enable(h, !0));
    var C = h.filter(function(A) {
      return k.indexOf(A) < 0;
    });
    if (C.length && !w)
      throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + C);
    return this;
  }, b.prototype.disable = function(h, w) {
    var k = [];
    Array.isArray(h) || (h = [h]), ["core", "block", "inline"].forEach(function(A) {
      k = k.concat(this[A].ruler.disable(h, !0));
    }, this), k = k.concat(this.inline.ruler2.disable(h, !0));
    var C = h.filter(function(A) {
      return k.indexOf(A) < 0;
    });
    if (C.length && !w)
      throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + C);
    return this;
  }, b.prototype.use = function(h) {
    var w = [this].concat(Array.prototype.slice.call(arguments, 1));
    return h.apply(h, w), this;
  }, b.prototype.parse = function(h, w) {
    if (typeof h != "string")
      throw new Error("Input data should be a String");
    var k = new this.core.State(h, this, w);
    return this.core.process(k), k.tokens;
  }, b.prototype.render = function(h, w) {
    return w = w || {}, this.renderer.render(this.parse(h, w), this.options, w);
  }, b.prototype.parseInline = function(h, w) {
    var k = new this.core.State(h, this, w);
    return k.inlineMode = !0, this.core.process(k), k.tokens;
  }, b.prototype.renderInline = function(h, w) {
    return w = w || {}, this.renderer.render(this.parseInline(h, w), this.options, w);
  }, ca = b, ca;
}
var la, s0;
function Qme() {
  return s0 || (s0 = 1, la = Jme()), la;
}
var eve = Qme();
const Im = /* @__PURE__ */ Ar(eve), tve = "😀", nve = "😃", rve = "😄", ove = "😁", sve = "😆", ive = "😆", ave = "😅", cve = "🤣", lve = "😂", uve = "🙂", dve = "🙃", fve = "😉", pve = "😊", hve = "😇", gve = "🥰", mve = "😍", vve = "🤩", _ve = "😘", bve = "😗", yve = "☺️", wve = "😚", kve = "😙", Cve = "🥲", xve = "😋", Sve = "😛", Eve = "😜", Ave = "🤪", $ve = "😝", Mve = "🤑", Tve = "🤗", Ive = "🤭", Lve = "🤫", Ove = "🤔", Rve = "🤐", Pve = "🤨", Bve = "😐", zve = "😑", Dve = "😶", Nve = "😏", qve = "😒", Fve = "🙄", jve = "😬", Hve = "🤥", Vve = "😌", Uve = "😔", Zve = "😪", Wve = "🤤", Gve = "😴", Kve = "😷", Xve = "🤒", Yve = "🤕", Jve = "🤢", Qve = "🤮", e_e = "🤧", t_e = "🥵", n_e = "🥶", r_e = "🥴", o_e = "😵", s_e = "🤯", i_e = "🤠", a_e = "🥳", c_e = "🥸", l_e = "😎", u_e = "🤓", d_e = "🧐", f_e = "😕", p_e = "😟", h_e = "🙁", g_e = "☹️", m_e = "😮", v_e = "😯", __e = "😲", b_e = "😳", y_e = "🥺", w_e = "😦", k_e = "😧", C_e = "😨", x_e = "😰", S_e = "😥", E_e = "😢", A_e = "😭", $_e = "😱", M_e = "😖", T_e = "😣", I_e = "😞", L_e = "😓", O_e = "😩", R_e = "😫", P_e = "🥱", B_e = "😤", z_e = "😡", D_e = "😡", N_e = "😠", q_e = "🤬", F_e = "😈", j_e = "👿", H_e = "💀", V_e = "☠️", U_e = "💩", Z_e = "💩", W_e = "💩", G_e = "🤡", K_e = "👹", X_e = "👺", Y_e = "👻", J_e = "👽", Q_e = "👾", ebe = "🤖", tbe = "😺", nbe = "😸", rbe = "😹", obe = "😻", sbe = "😼", ibe = "😽", abe = "🙀", cbe = "😿", lbe = "😾", ube = "🙈", dbe = "🙉", fbe = "🙊", pbe = "💋", hbe = "💌", gbe = "💘", mbe = "💝", vbe = "💖", _be = "💗", bbe = "💓", ybe = "💞", wbe = "💕", kbe = "💟", Cbe = "❣️", xbe = "💔", Sbe = "❤️", Ebe = "🧡", Abe = "💛", $be = "💚", Mbe = "💙", Tbe = "💜", Ibe = "🤎", Lbe = "🖤", Obe = "🤍", Rbe = "💢", Pbe = "💥", Bbe = "💥", zbe = "💫", Dbe = "💦", Nbe = "💨", qbe = "🕳️", Fbe = "💣", jbe = "💬", Hbe = "👁️‍🗨️", Vbe = "🗨️", Ube = "🗯️", Zbe = "💭", Wbe = "💤", Gbe = "👋", Kbe = "🤚", Xbe = "🖐️", Ybe = "✋", Jbe = "✋", Qbe = "🖖", eye = "👌", tye = "🤌", nye = "🤏", rye = "✌️", oye = "🤞", sye = "🤟", iye = "🤘", aye = "🤙", cye = "👈", lye = "👉", uye = "👆", dye = "🖕", fye = "🖕", pye = "👇", hye = "☝️", gye = "👍", mye = "👎", vye = "✊", _ye = "✊", bye = "👊", yye = "👊", wye = "👊", kye = "🤛", Cye = "🤜", xye = "👏", Sye = "🙌", Eye = "👐", Aye = "🤲", $ye = "🤝", Mye = "🙏", Tye = "✍️", Iye = "💅", Lye = "🤳", Oye = "💪", Rye = "🦾", Pye = "🦿", Bye = "🦵", zye = "🦶", Dye = "👂", Nye = "🦻", qye = "👃", Fye = "🧠", jye = "🫀", Hye = "🫁", Vye = "🦷", Uye = "🦴", Zye = "👀", Wye = "👁️", Gye = "👅", Kye = "👄", Xye = "👶", Yye = "🧒", Jye = "👦", Qye = "👧", ewe = "🧑", twe = "👱", nwe = "👨", rwe = "🧔", owe = "👨‍🦰", swe = "👨‍🦱", iwe = "👨‍🦳", awe = "👨‍🦲", cwe = "👩", lwe = "👩‍🦰", uwe = "🧑‍🦰", dwe = "👩‍🦱", fwe = "🧑‍🦱", pwe = "👩‍🦳", hwe = "🧑‍🦳", gwe = "👩‍🦲", mwe = "🧑‍🦲", vwe = "👱‍♀️", _we = "👱‍♀️", bwe = "👱‍♂️", ywe = "🧓", wwe = "👴", kwe = "👵", Cwe = "🙍", xwe = "🙍‍♂️", Swe = "🙍‍♀️", Ewe = "🙎", Awe = "🙎‍♂️", $we = "🙎‍♀️", Mwe = "🙅", Twe = "🙅‍♂️", Iwe = "🙅‍♂️", Lwe = "🙅‍♀️", Owe = "🙅‍♀️", Rwe = "🙆", Pwe = "🙆‍♂️", Bwe = "🙆‍♀️", zwe = "💁", Dwe = "💁", Nwe = "💁‍♂️", qwe = "💁‍♂️", Fwe = "💁‍♀️", jwe = "💁‍♀️", Hwe = "🙋", Vwe = "🙋‍♂️", Uwe = "🙋‍♀️", Zwe = "🧏", Wwe = "🧏‍♂️", Gwe = "🧏‍♀️", Kwe = "🙇", Xwe = "🙇‍♂️", Ywe = "🙇‍♀️", Jwe = "🤦", Qwe = "🤦‍♂️", eke = "🤦‍♀️", tke = "🤷", nke = "🤷‍♂️", rke = "🤷‍♀️", oke = "🧑‍⚕️", ske = "👨‍⚕️", ike = "👩‍⚕️", ake = "🧑‍🎓", cke = "👨‍🎓", lke = "👩‍🎓", uke = "🧑‍🏫", dke = "👨‍🏫", fke = "👩‍🏫", pke = "🧑‍⚖️", hke = "👨‍⚖️", gke = "👩‍⚖️", mke = "🧑‍🌾", vke = "👨‍🌾", _ke = "👩‍🌾", bke = "🧑‍🍳", yke = "👨‍🍳", wke = "👩‍🍳", kke = "🧑‍🔧", Cke = "👨‍🔧", xke = "👩‍🔧", Ske = "🧑‍🏭", Eke = "👨‍🏭", Ake = "👩‍🏭", $ke = "🧑‍💼", Mke = "👨‍💼", Tke = "👩‍💼", Ike = "🧑‍🔬", Lke = "👨‍🔬", Oke = "👩‍🔬", Rke = "🧑‍💻", Pke = "👨‍💻", Bke = "👩‍💻", zke = "🧑‍🎤", Dke = "👨‍🎤", Nke = "👩‍🎤", qke = "🧑‍🎨", Fke = "👨‍🎨", jke = "👩‍🎨", Hke = "🧑‍✈️", Vke = "👨‍✈️", Uke = "👩‍✈️", Zke = "🧑‍🚀", Wke = "👨‍🚀", Gke = "👩‍🚀", Kke = "🧑‍🚒", Xke = "👨‍🚒", Yke = "👩‍🚒", Jke = "👮", Qke = "👮", e4e = "👮‍♂️", t4e = "👮‍♀️", n4e = "🕵️", r4e = "🕵️‍♂️", o4e = "🕵️‍♀️", s4e = "💂", i4e = "💂‍♂️", a4e = "💂‍♀️", c4e = "🥷", l4e = "👷", u4e = "👷‍♂️", d4e = "👷‍♀️", f4e = "🤴", p4e = "👸", h4e = "👳", g4e = "👳‍♂️", m4e = "👳‍♀️", v4e = "👲", _4e = "🧕", b4e = "🤵", y4e = "🤵‍♂️", w4e = "🤵‍♀️", k4e = "👰", C4e = "👰‍♂️", x4e = "👰‍♀️", S4e = "👰‍♀️", E4e = "🤰", A4e = "🤱", $4e = "👩‍🍼", M4e = "👨‍🍼", T4e = "🧑‍🍼", I4e = "👼", L4e = "🎅", O4e = "🤶", R4e = "🧑‍🎄", P4e = "🦸", B4e = "🦸‍♂️", z4e = "🦸‍♀️", D4e = "🦹", N4e = "🦹‍♂️", q4e = "🦹‍♀️", F4e = "🧙", j4e = "🧙‍♂️", H4e = "🧙‍♀️", V4e = "🧚", U4e = "🧚‍♂️", Z4e = "🧚‍♀️", W4e = "🧛", G4e = "🧛‍♂️", K4e = "🧛‍♀️", X4e = "🧜", Y4e = "🧜‍♂️", J4e = "🧜‍♀️", Q4e = "🧝", e3e = "🧝‍♂️", t3e = "🧝‍♀️", n3e = "🧞", r3e = "🧞‍♂️", o3e = "🧞‍♀️", s3e = "🧟", i3e = "🧟‍♂️", a3e = "🧟‍♀️", c3e = "💆", l3e = "💆‍♂️", u3e = "💆‍♀️", d3e = "💇", f3e = "💇‍♂️", p3e = "💇‍♀️", h3e = "🚶", g3e = "🚶‍♂️", m3e = "🚶‍♀️", v3e = "🧍", _3e = "🧍‍♂️", b3e = "🧍‍♀️", y3e = "🧎", w3e = "🧎‍♂️", k3e = "🧎‍♀️", C3e = "🧑‍🦯", x3e = "👨‍🦯", S3e = "👩‍🦯", E3e = "🧑‍🦼", A3e = "👨‍🦼", $3e = "👩‍🦼", M3e = "🧑‍🦽", T3e = "👨‍🦽", I3e = "👩‍🦽", L3e = "🏃", O3e = "🏃", R3e = "🏃‍♂️", P3e = "🏃‍♀️", B3e = "💃", z3e = "💃", D3e = "🕺", N3e = "🕴️", q3e = "👯", F3e = "👯‍♂️", j3e = "👯‍♀️", H3e = "🧖", V3e = "🧖‍♂️", U3e = "🧖‍♀️", Z3e = "🧗", W3e = "🧗‍♂️", G3e = "🧗‍♀️", K3e = "🤺", X3e = "🏇", Y3e = "⛷️", J3e = "🏂", Q3e = "🏌️", e5e = "🏌️‍♂️", t5e = "🏌️‍♀️", n5e = "🏄", r5e = "🏄‍♂️", o5e = "🏄‍♀️", s5e = "🚣", i5e = "🚣‍♂️", a5e = "🚣‍♀️", c5e = "🏊", l5e = "🏊‍♂️", u5e = "🏊‍♀️", d5e = "⛹️", f5e = "⛹️‍♂️", p5e = "⛹️‍♂️", h5e = "⛹️‍♀️", g5e = "⛹️‍♀️", m5e = "🏋️", v5e = "🏋️‍♂️", _5e = "🏋️‍♀️", b5e = "🚴", y5e = "🚴‍♂️", w5e = "🚴‍♀️", k5e = "🚵", C5e = "🚵‍♂️", x5e = "🚵‍♀️", S5e = "🤸", E5e = "🤸‍♂️", A5e = "🤸‍♀️", $5e = "🤼", M5e = "🤼‍♂️", T5e = "🤼‍♀️", I5e = "🤽", L5e = "🤽‍♂️", O5e = "🤽‍♀️", R5e = "🤾", P5e = "🤾‍♂️", B5e = "🤾‍♀️", z5e = "🤹", D5e = "🤹‍♂️", N5e = "🤹‍♀️", q5e = "🧘", F5e = "🧘‍♂️", j5e = "🧘‍♀️", H5e = "🛀", V5e = "🛌", U5e = "🧑‍🤝‍🧑", Z5e = "👭", W5e = "👫", G5e = "👬", K5e = "💏", X5e = "👩‍❤️‍💋‍👨", Y5e = "👨‍❤️‍💋‍👨", J5e = "👩‍❤️‍💋‍👩", Q5e = "💑", e6e = "👩‍❤️‍👨", t6e = "👨‍❤️‍👨", n6e = "👩‍❤️‍👩", r6e = "👪", o6e = "👨‍👩‍👦", s6e = "👨‍👩‍👧", i6e = "👨‍👩‍👧‍👦", a6e = "👨‍👩‍👦‍👦", c6e = "👨‍👩‍👧‍👧", l6e = "👨‍👨‍👦", u6e = "👨‍👨‍👧", d6e = "👨‍👨‍👧‍👦", f6e = "👨‍👨‍👦‍👦", p6e = "👨‍👨‍👧‍👧", h6e = "👩‍👩‍👦", g6e = "👩‍👩‍👧", m6e = "👩‍👩‍👧‍👦", v6e = "👩‍👩‍👦‍👦", _6e = "👩‍👩‍👧‍👧", b6e = "👨‍👦", y6e = "👨‍👦‍👦", w6e = "👨‍👧", k6e = "👨‍👧‍👦", C6e = "👨‍👧‍👧", x6e = "👩‍👦", S6e = "👩‍👦‍👦", E6e = "👩‍👧", A6e = "👩‍👧‍👦", $6e = "👩‍👧‍👧", M6e = "🗣️", T6e = "👤", I6e = "👥", L6e = "🫂", O6e = "👣", R6e = "🐵", P6e = "🐒", B6e = "🦍", z6e = "🦧", D6e = "🐶", N6e = "🐕", q6e = "🦮", F6e = "🐕‍🦺", j6e = "🐩", H6e = "🐺", V6e = "🦊", U6e = "🦝", Z6e = "🐱", W6e = "🐈", G6e = "🐈‍⬛", K6e = "🦁", X6e = "🐯", Y6e = "🐅", J6e = "🐆", Q6e = "🐴", eCe = "🐎", tCe = "🦄", nCe = "🦓", rCe = "🦌", oCe = "🦬", sCe = "🐮", iCe = "🐂", aCe = "🐃", cCe = "🐄", lCe = "🐷", uCe = "🐖", dCe = "🐗", fCe = "🐽", pCe = "🐏", hCe = "🐑", gCe = "🐐", mCe = "🐪", vCe = "🐫", _Ce = "🦙", bCe = "🦒", yCe = "🐘", wCe = "🦣", kCe = "🦏", CCe = "🦛", xCe = "🐭", SCe = "🐁", ECe = "🐀", ACe = "🐹", $Ce = "🐰", MCe = "🐇", TCe = "🐿️", ICe = "🦫", LCe = "🦔", OCe = "🦇", RCe = "🐻", PCe = "🐻‍❄️", BCe = "🐨", zCe = "🐼", DCe = "🦥", NCe = "🦦", qCe = "🦨", FCe = "🦘", jCe = "🦡", HCe = "🐾", VCe = "🐾", UCe = "🦃", ZCe = "🐔", WCe = "🐓", GCe = "🐣", KCe = "🐤", XCe = "🐥", YCe = "🐦", JCe = "🐧", QCe = "🕊️", e8e = "🦅", t8e = "🦆", n8e = "🦢", r8e = "🦉", o8e = "🦤", s8e = "🪶", i8e = "🦩", a8e = "🦚", c8e = "🦜", l8e = "🐸", u8e = "🐊", d8e = "🐢", f8e = "🦎", p8e = "🐍", h8e = "🐲", g8e = "🐉", m8e = "🦕", v8e = "🐳", _8e = "🐋", b8e = "🐬", y8e = "🐬", w8e = "🦭", k8e = "🐟", C8e = "🐠", x8e = "🐡", S8e = "🦈", E8e = "🐙", A8e = "🐚", $8e = "🐌", M8e = "🦋", T8e = "🐛", I8e = "🐜", L8e = "🐝", O8e = "🐝", R8e = "🪲", P8e = "🐞", B8e = "🦗", z8e = "🪳", D8e = "🕷️", N8e = "🕸️", q8e = "🦂", F8e = "🦟", j8e = "🪰", H8e = "🪱", V8e = "🦠", U8e = "💐", Z8e = "🌸", W8e = "💮", G8e = "🏵️", K8e = "🌹", X8e = "🥀", Y8e = "🌺", J8e = "🌻", Q8e = "🌼", exe = "🌷", txe = "🌱", nxe = "🪴", rxe = "🌲", oxe = "🌳", sxe = "🌴", ixe = "🌵", axe = "🌾", cxe = "🌿", lxe = "☘️", uxe = "🍀", dxe = "🍁", fxe = "🍂", pxe = "🍃", hxe = "🍇", gxe = "🍈", mxe = "🍉", vxe = "🍊", _xe = "🍊", bxe = "🍊", yxe = "🍋", wxe = "🍌", kxe = "🍍", Cxe = "🥭", xxe = "🍎", Sxe = "🍏", Exe = "🍐", Axe = "🍑", $xe = "🍒", Mxe = "🍓", Txe = "🫐", Ixe = "🥝", Lxe = "🍅", Oxe = "🫒", Rxe = "🥥", Pxe = "🥑", Bxe = "🍆", zxe = "🥔", Dxe = "🥕", Nxe = "🌽", qxe = "🌶️", Fxe = "🫑", jxe = "🥒", Hxe = "🥬", Vxe = "🥦", Uxe = "🧄", Zxe = "🧅", Wxe = "🍄", Gxe = "🥜", Kxe = "🌰", Xxe = "🍞", Yxe = "🥐", Jxe = "🥖", Qxe = "🫓", e7e = "🥨", t7e = "🥯", n7e = "🥞", r7e = "🧇", o7e = "🧀", s7e = "🍖", i7e = "🍗", a7e = "🥩", c7e = "🥓", l7e = "🍔", u7e = "🍟", d7e = "🍕", f7e = "🌭", p7e = "🥪", h7e = "🌮", g7e = "🌯", m7e = "🫔", v7e = "🥙", _7e = "🧆", b7e = "🥚", y7e = "🍳", w7e = "🥘", k7e = "🍲", C7e = "🫕", x7e = "🥣", S7e = "🥗", E7e = "🍿", A7e = "🧈", $7e = "🧂", M7e = "🥫", T7e = "🍱", I7e = "🍘", L7e = "🍙", O7e = "🍚", R7e = "🍛", P7e = "🍜", B7e = "🍝", z7e = "🍠", D7e = "🍢", N7e = "🍣", q7e = "🍤", F7e = "🍥", j7e = "🥮", H7e = "🍡", V7e = "🥟", U7e = "🥠", Z7e = "🥡", W7e = "🦀", G7e = "🦞", K7e = "🦐", X7e = "🦑", Y7e = "🦪", J7e = "🍦", Q7e = "🍧", e9e = "🍨", t9e = "🍩", n9e = "🍪", r9e = "🎂", o9e = "🍰", s9e = "🧁", i9e = "🥧", a9e = "🍫", c9e = "🍬", l9e = "🍭", u9e = "🍮", d9e = "🍯", f9e = "🍼", p9e = "🥛", h9e = "☕", g9e = "🫖", m9e = "🍵", v9e = "🍶", _9e = "🍾", b9e = "🍷", y9e = "🍸", w9e = "🍹", k9e = "🍺", C9e = "🍻", x9e = "🥂", S9e = "🥃", E9e = "🥤", A9e = "🧋", $9e = "🧃", M9e = "🧉", T9e = "🧊", I9e = "🥢", L9e = "🍽️", O9e = "🍴", R9e = "🥄", P9e = "🔪", B9e = "🔪", z9e = "🏺", D9e = "🌍", N9e = "🌎", q9e = "🌏", F9e = "🌐", j9e = "🗺️", H9e = "🗾", V9e = "🧭", U9e = "🏔️", Z9e = "⛰️", W9e = "🌋", G9e = "🗻", K9e = "🏕️", X9e = "🏖️", Y9e = "🏜️", J9e = "🏝️", Q9e = "🏞️", eSe = "🏟️", tSe = "🏛️", nSe = "🏗️", rSe = "🧱", oSe = "🪨", sSe = "🪵", iSe = "🛖", aSe = "🏘️", cSe = "🏚️", lSe = "🏠", uSe = "🏡", dSe = "🏢", fSe = "🏣", pSe = "🏤", hSe = "🏥", gSe = "🏦", mSe = "🏨", vSe = "🏩", _Se = "🏪", bSe = "🏫", ySe = "🏬", wSe = "🏭", kSe = "🏯", CSe = "🏰", xSe = "💒", SSe = "🗼", ESe = "🗽", ASe = "⛪", $Se = "🕌", MSe = "🛕", TSe = "🕍", ISe = "⛩️", LSe = "🕋", OSe = "⛲", RSe = "⛺", PSe = "🌁", BSe = "🌃", zSe = "🏙️", DSe = "🌄", NSe = "🌅", qSe = "🌆", FSe = "🌇", jSe = "🌉", HSe = "♨️", VSe = "🎠", USe = "🎡", ZSe = "🎢", WSe = "💈", GSe = "🎪", KSe = "🚂", XSe = "🚃", YSe = "🚄", JSe = "🚅", QSe = "🚆", eEe = "🚇", tEe = "🚈", nEe = "🚉", rEe = "🚊", oEe = "🚝", sEe = "🚞", iEe = "🚋", aEe = "🚌", cEe = "🚍", lEe = "🚎", uEe = "🚐", dEe = "🚑", fEe = "🚒", pEe = "🚓", hEe = "🚔", gEe = "🚕", mEe = "🚖", vEe = "🚗", _Ee = "🚗", bEe = "🚘", yEe = "🚙", wEe = "🛻", kEe = "🚚", CEe = "🚛", xEe = "🚜", SEe = "🏎️", EEe = "🏍️", AEe = "🛵", $Ee = "🦽", MEe = "🦼", TEe = "🛺", IEe = "🚲", LEe = "🛴", OEe = "🛹", REe = "🛼", PEe = "🚏", BEe = "🛣️", zEe = "🛤️", DEe = "🛢️", NEe = "⛽", qEe = "🚨", FEe = "🚥", jEe = "🚦", HEe = "🛑", VEe = "🚧", UEe = "⚓", ZEe = "⛵", WEe = "⛵", GEe = "🛶", KEe = "🚤", XEe = "🛳️", YEe = "⛴️", JEe = "🛥️", QEe = "🚢", eAe = "✈️", tAe = "🛩️", nAe = "🛫", rAe = "🛬", oAe = "🪂", sAe = "💺", iAe = "🚁", aAe = "🚟", cAe = "🚠", lAe = "🚡", uAe = "🛰️", dAe = "🚀", fAe = "🛸", pAe = "🛎️", hAe = "🧳", gAe = "⌛", mAe = "⏳", vAe = "⌚", _Ae = "⏰", bAe = "⏱️", yAe = "⏲️", wAe = "🕰️", kAe = "🕛", CAe = "🕧", xAe = "🕐", SAe = "🕜", EAe = "🕑", AAe = "🕝", $Ae = "🕒", MAe = "🕞", TAe = "🕓", IAe = "🕟", LAe = "🕔", OAe = "🕠", RAe = "🕕", PAe = "🕡", BAe = "🕖", zAe = "🕢", DAe = "🕗", NAe = "🕣", qAe = "🕘", FAe = "🕤", jAe = "🕙", HAe = "🕥", VAe = "🕚", UAe = "🕦", ZAe = "🌑", WAe = "🌒", GAe = "🌓", KAe = "🌔", XAe = "🌔", YAe = "🌕", JAe = "🌖", QAe = "🌗", e$e = "🌘", t$e = "🌙", n$e = "🌚", r$e = "🌛", o$e = "🌜", s$e = "🌡️", i$e = "☀️", a$e = "🌝", c$e = "🌞", l$e = "🪐", u$e = "⭐", d$e = "🌟", f$e = "🌠", p$e = "🌌", h$e = "☁️", g$e = "⛅", m$e = "⛈️", v$e = "🌤️", _$e = "🌥️", b$e = "🌦️", y$e = "🌧️", w$e = "🌨️", k$e = "🌩️", C$e = "🌪️", x$e = "🌫️", S$e = "🌬️", E$e = "🌀", A$e = "🌈", $$e = "🌂", M$e = "☂️", T$e = "☔", I$e = "⛱️", L$e = "⚡", O$e = "❄️", R$e = "☃️", P$e = "⛄", B$e = "☄️", z$e = "🔥", D$e = "💧", N$e = "🌊", q$e = "🎃", F$e = "🎄", j$e = "🎆", H$e = "🎇", V$e = "🧨", U$e = "✨", Z$e = "🎈", W$e = "🎉", G$e = "🎊", K$e = "🎋", X$e = "🎍", Y$e = "🎎", J$e = "🎏", Q$e = "🎐", eMe = "🎑", tMe = "🧧", nMe = "🎀", rMe = "🎁", oMe = "🎗️", sMe = "🎟️", iMe = "🎫", aMe = "🎖️", cMe = "🏆", lMe = "🏅", uMe = "⚽", dMe = "⚾", fMe = "🥎", pMe = "🏀", hMe = "🏐", gMe = "🏈", mMe = "🏉", vMe = "🎾", _Me = "🥏", bMe = "🎳", yMe = "🏏", wMe = "🏑", kMe = "🏒", CMe = "🥍", xMe = "🏓", SMe = "🏸", EMe = "🥊", AMe = "🥋", $Me = "🥅", MMe = "⛳", TMe = "⛸️", IMe = "🎣", LMe = "🤿", OMe = "🎽", RMe = "🎿", PMe = "🛷", BMe = "🥌", zMe = "🎯", DMe = "🪀", NMe = "🪁", qMe = "🔮", FMe = "🪄", jMe = "🧿", HMe = "🎮", VMe = "🕹️", UMe = "🎰", ZMe = "🎲", WMe = "🧩", GMe = "🧸", KMe = "🪅", XMe = "🪆", YMe = "♠️", JMe = "♥️", QMe = "♦️", eTe = "♣️", tTe = "♟️", nTe = "🃏", rTe = "🀄", oTe = "🎴", sTe = "🎭", iTe = "🖼️", aTe = "🎨", cTe = "🧵", lTe = "🪡", uTe = "🧶", dTe = "🪢", fTe = "👓", pTe = "🕶️", hTe = "🥽", gTe = "🥼", mTe = "🦺", vTe = "👔", _Te = "👕", bTe = "👕", yTe = "👖", wTe = "🧣", kTe = "🧤", CTe = "🧥", xTe = "🧦", STe = "👗", ETe = "👘", ATe = "🥻", $Te = "🩱", MTe = "🩲", TTe = "🩳", ITe = "👙", LTe = "👚", OTe = "👛", RTe = "👜", PTe = "👝", BTe = "🛍️", zTe = "🎒", DTe = "🩴", NTe = "👞", qTe = "👞", FTe = "👟", jTe = "🥾", HTe = "🥿", VTe = "👠", UTe = "👡", ZTe = "🩰", WTe = "👢", GTe = "👑", KTe = "👒", XTe = "🎩", YTe = "🎓", JTe = "🧢", QTe = "🪖", eIe = "⛑️", tIe = "📿", nIe = "💄", rIe = "💍", oIe = "💎", sIe = "🔇", iIe = "🔈", aIe = "🔉", cIe = "🔊", lIe = "📢", uIe = "📣", dIe = "📯", fIe = "🔔", pIe = "🔕", hIe = "🎼", gIe = "🎵", mIe = "🎶", vIe = "🎙️", _Ie = "🎚️", bIe = "🎛️", yIe = "🎤", wIe = "🎧", kIe = "📻", CIe = "🎷", xIe = "🪗", SIe = "🎸", EIe = "🎹", AIe = "🎺", $Ie = "🎻", MIe = "🪕", TIe = "🥁", IIe = "🪘", LIe = "📱", OIe = "📲", RIe = "☎️", PIe = "☎️", BIe = "📞", zIe = "📟", DIe = "📠", NIe = "🔋", qIe = "🔌", FIe = "💻", jIe = "🖥️", HIe = "🖨️", VIe = "⌨️", UIe = "🖱️", ZIe = "🖲️", WIe = "💽", GIe = "💾", KIe = "💿", XIe = "📀", YIe = "🧮", JIe = "🎥", QIe = "🎞️", eLe = "📽️", tLe = "🎬", nLe = "📺", rLe = "📷", oLe = "📸", sLe = "📹", iLe = "📼", aLe = "🔍", cLe = "🔎", lLe = "🕯️", uLe = "💡", dLe = "🔦", fLe = "🏮", pLe = "🏮", hLe = "🪔", gLe = "📔", mLe = "📕", vLe = "📖", _Le = "📖", bLe = "📗", yLe = "📘", wLe = "📙", kLe = "📚", CLe = "📓", xLe = "📒", SLe = "📃", ELe = "📜", ALe = "📄", $Le = "📰", MLe = "🗞️", TLe = "📑", ILe = "🔖", LLe = "🏷️", OLe = "💰", RLe = "🪙", PLe = "💴", BLe = "💵", zLe = "💶", DLe = "💷", NLe = "💸", qLe = "💳", FLe = "🧾", jLe = "💹", HLe = "✉️", VLe = "📧", ULe = "📨", ZLe = "📩", WLe = "📤", GLe = "📥", KLe = "📫", XLe = "📪", YLe = "📬", JLe = "📭", QLe = "📮", eOe = "🗳️", tOe = "✏️", nOe = "✒️", rOe = "🖋️", oOe = "🖊️", sOe = "🖌️", iOe = "🖍️", aOe = "📝", cOe = "📝", lOe = "💼", uOe = "📁", dOe = "📂", fOe = "🗂️", pOe = "📅", hOe = "📆", gOe = "🗒️", mOe = "🗓️", vOe = "📇", _Oe = "📈", bOe = "📉", yOe = "📊", wOe = "📋", kOe = "📌", COe = "📍", xOe = "📎", SOe = "🖇️", EOe = "📏", AOe = "📐", $Oe = "✂️", MOe = "🗃️", TOe = "🗄️", IOe = "🗑️", LOe = "🔒", OOe = "🔓", ROe = "🔏", POe = "🔐", BOe = "🔑", zOe = "🗝️", DOe = "🔨", NOe = "🪓", qOe = "⛏️", FOe = "⚒️", jOe = "🛠️", HOe = "🗡️", VOe = "⚔️", UOe = "🔫", ZOe = "🪃", WOe = "🏹", GOe = "🛡️", KOe = "🪚", XOe = "🔧", YOe = "🪛", JOe = "🔩", QOe = "⚙️", eRe = "🗜️", tRe = "⚖️", nRe = "🦯", rRe = "🔗", oRe = "⛓️", sRe = "🪝", iRe = "🧰", aRe = "🧲", cRe = "🪜", lRe = "⚗️", uRe = "🧪", dRe = "🧫", fRe = "🧬", pRe = "🔬", hRe = "🔭", gRe = "📡", mRe = "💉", vRe = "🩸", _Re = "💊", bRe = "🩹", yRe = "🩺", wRe = "🚪", kRe = "🛗", CRe = "🪞", xRe = "🪟", SRe = "🛏️", ERe = "🛋️", ARe = "🪑", $Re = "🚽", MRe = "🪠", TRe = "🚿", IRe = "🛁", LRe = "🪤", ORe = "🪒", RRe = "🧴", PRe = "🧷", BRe = "🧹", zRe = "🧺", DRe = "🧻", NRe = "🪣", qRe = "🧼", FRe = "🪥", jRe = "🧽", HRe = "🧯", VRe = "🛒", URe = "🚬", ZRe = "⚰️", WRe = "🪦", GRe = "⚱️", KRe = "🗿", XRe = "🪧", YRe = "🏧", JRe = "🚮", QRe = "🚰", ePe = "♿", tPe = "🚹", nPe = "🚺", rPe = "🚻", oPe = "🚼", sPe = "🚾", iPe = "🛂", aPe = "🛃", cPe = "🛄", lPe = "🛅", uPe = "⚠️", dPe = "🚸", fPe = "⛔", pPe = "🚫", hPe = "🚳", gPe = "🚭", mPe = "🚯", vPe = "🚷", _Pe = "📵", bPe = "🔞", yPe = "☢️", wPe = "☣️", kPe = "⬆️", CPe = "↗️", xPe = "➡️", SPe = "↘️", EPe = "⬇️", APe = "↙️", $Pe = "⬅️", MPe = "↖️", TPe = "↕️", IPe = "↔️", LPe = "↩️", OPe = "↪️", RPe = "⤴️", PPe = "⤵️", BPe = "🔃", zPe = "🔄", DPe = "🔙", NPe = "🔚", qPe = "🔛", FPe = "🔜", jPe = "🔝", HPe = "🛐", VPe = "⚛️", UPe = "🕉️", ZPe = "✡️", WPe = "☸️", GPe = "☯️", KPe = "✝️", XPe = "☦️", YPe = "☪️", JPe = "☮️", QPe = "🕎", eBe = "🔯", tBe = "♈", nBe = "♉", rBe = "♊", oBe = "♋", sBe = "♌", iBe = "♍", aBe = "♎", cBe = "♏", lBe = "♐", uBe = "♑", dBe = "♒", fBe = "♓", pBe = "⛎", hBe = "🔀", gBe = "🔁", mBe = "🔂", vBe = "▶️", _Be = "⏩", bBe = "⏭️", yBe = "⏯️", wBe = "◀️", kBe = "⏪", CBe = "⏮️", xBe = "🔼", SBe = "⏫", EBe = "🔽", ABe = "⏬", $Be = "⏸️", MBe = "⏹️", TBe = "⏺️", IBe = "⏏️", LBe = "🎦", OBe = "🔅", RBe = "🔆", PBe = "📶", BBe = "📳", zBe = "📴", DBe = "♀️", NBe = "♂️", qBe = "⚧️", FBe = "✖️", jBe = "➕", HBe = "➖", VBe = "➗", UBe = "♾️", ZBe = "‼️", WBe = "⁉️", GBe = "❓", KBe = "❔", XBe = "❕", YBe = "❗", JBe = "❗", QBe = "〰️", eze = "💱", tze = "💲", nze = "⚕️", rze = "♻️", oze = "⚜️", sze = "🔱", ize = "📛", aze = "🔰", cze = "⭕", lze = "✅", uze = "☑️", dze = "✔️", fze = "❌", pze = "❎", hze = "➰", gze = "➿", mze = "〽️", vze = "✳️", _ze = "✴️", bze = "❇️", yze = "©️", wze = "®️", kze = "™️", Cze = "#️⃣", xze = "*️⃣", Sze = "0️⃣", Eze = "1️⃣", Aze = "2️⃣", $ze = "3️⃣", Mze = "4️⃣", Tze = "5️⃣", Ize = "6️⃣", Lze = "7️⃣", Oze = "8️⃣", Rze = "9️⃣", Pze = "🔟", Bze = "🔠", zze = "🔡", Dze = "🔣", Nze = "🔤", qze = "🅰️", Fze = "🆎", jze = "🅱️", Hze = "🆑", Vze = "🆒", Uze = "🆓", Zze = "ℹ️", Wze = "🆔", Gze = "Ⓜ️", Kze = "🆖", Xze = "🅾️", Yze = "🆗", Jze = "🅿️", Qze = "🆘", eDe = "🆙", tDe = "🆚", nDe = "🈁", rDe = "🈂️", oDe = "🉐", sDe = "🉑", iDe = "㊗️", aDe = "㊙️", cDe = "🈵", lDe = "🔴", uDe = "🟠", dDe = "🟡", fDe = "🟢", pDe = "🔵", hDe = "🟣", gDe = "🟤", mDe = "⚫", vDe = "⚪", _De = "🟥", bDe = "🟧", yDe = "🟨", wDe = "🟩", kDe = "🟦", CDe = "🟪", xDe = "🟫", SDe = "⬛", EDe = "⬜", ADe = "◼️", $De = "◻️", MDe = "◾", TDe = "◽", IDe = "▪️", LDe = "▫️", ODe = "🔶", RDe = "🔷", PDe = "🔸", BDe = "🔹", zDe = "🔺", DDe = "🔻", NDe = "💠", qDe = "🔘", FDe = "🔳", jDe = "🔲", HDe = "🏁", VDe = "🚩", UDe = "🎌", ZDe = "🏴", WDe = "🏳️", GDe = "🏳️‍🌈", KDe = "🏳️‍⚧️", XDe = "🏴‍☠️", YDe = "🇦🇨", JDe = "🇦🇩", QDe = "🇦🇪", eNe = "🇦🇫", tNe = "🇦🇬", nNe = "🇦🇮", rNe = "🇦🇱", oNe = "🇦🇲", sNe = "🇦🇴", iNe = "🇦🇶", aNe = "🇦🇷", cNe = "🇦🇸", lNe = "🇦🇹", uNe = "🇦🇺", dNe = "🇦🇼", fNe = "🇦🇽", pNe = "🇦🇿", hNe = "🇧🇦", gNe = "🇧🇧", mNe = "🇧🇩", vNe = "🇧🇪", _Ne = "🇧🇫", bNe = "🇧🇬", yNe = "🇧🇭", wNe = "🇧🇮", kNe = "🇧🇯", CNe = "🇧🇱", xNe = "🇧🇲", SNe = "🇧🇳", ENe = "🇧🇴", ANe = "🇧🇶", $Ne = "🇧🇷", MNe = "🇧🇸", TNe = "🇧🇹", INe = "🇧🇻", LNe = "🇧🇼", ONe = "🇧🇾", RNe = "🇧🇿", PNe = "🇨🇦", BNe = "🇨🇨", zNe = "🇨🇩", DNe = "🇨🇫", NNe = "🇨🇬", qNe = "🇨🇭", FNe = "🇨🇮", jNe = "🇨🇰", HNe = "🇨🇱", VNe = "🇨🇲", UNe = "🇨🇳", ZNe = "🇨🇴", WNe = "🇨🇵", GNe = "🇨🇷", KNe = "🇨🇺", XNe = "🇨🇻", YNe = "🇨🇼", JNe = "🇨🇽", QNe = "🇨🇾", eqe = "🇨🇿", tqe = "🇩🇪", nqe = "🇩🇬", rqe = "🇩🇯", oqe = "🇩🇰", sqe = "🇩🇲", iqe = "🇩🇴", aqe = "🇩🇿", cqe = "🇪🇦", lqe = "🇪🇨", uqe = "🇪🇪", dqe = "🇪🇬", fqe = "🇪🇭", pqe = "🇪🇷", hqe = "🇪🇸", gqe = "🇪🇹", mqe = "🇪🇺", vqe = "🇪🇺", _qe = "🇫🇮", bqe = "🇫🇯", yqe = "🇫🇰", wqe = "🇫🇲", kqe = "🇫🇴", Cqe = "🇫🇷", xqe = "🇬🇦", Sqe = "🇬🇧", Eqe = "🇬🇧", Aqe = "🇬🇩", $qe = "🇬🇪", Mqe = "🇬🇫", Tqe = "🇬🇬", Iqe = "🇬🇭", Lqe = "🇬🇮", Oqe = "🇬🇱", Rqe = "🇬🇲", Pqe = "🇬🇳", Bqe = "🇬🇵", zqe = "🇬🇶", Dqe = "🇬🇷", Nqe = "🇬🇸", qqe = "🇬🇹", Fqe = "🇬🇺", jqe = "🇬🇼", Hqe = "🇬🇾", Vqe = "🇭🇰", Uqe = "🇭🇲", Zqe = "🇭🇳", Wqe = "🇭🇷", Gqe = "🇭🇹", Kqe = "🇭🇺", Xqe = "🇮🇨", Yqe = "🇮🇩", Jqe = "🇮🇪", Qqe = "🇮🇱", eFe = "🇮🇲", tFe = "🇮🇳", nFe = "🇮🇴", rFe = "🇮🇶", oFe = "🇮🇷", sFe = "🇮🇸", iFe = "🇮🇹", aFe = "🇯🇪", cFe = "🇯🇲", lFe = "🇯🇴", uFe = "🇯🇵", dFe = "🇰🇪", fFe = "🇰🇬", pFe = "🇰🇭", hFe = "🇰🇮", gFe = "🇰🇲", mFe = "🇰🇳", vFe = "🇰🇵", _Fe = "🇰🇷", bFe = "🇰🇼", yFe = "🇰🇾", wFe = "🇰🇿", kFe = "🇱🇦", CFe = "🇱🇧", xFe = "🇱🇨", SFe = "🇱🇮", EFe = "🇱🇰", AFe = "🇱🇷", $Fe = "🇱🇸", MFe = "🇱🇹", TFe = "🇱🇺", IFe = "🇱🇻", LFe = "🇱🇾", OFe = "🇲🇦", RFe = "🇲🇨", PFe = "🇲🇩", BFe = "🇲🇪", zFe = "🇲🇫", DFe = "🇲🇬", NFe = "🇲🇭", qFe = "🇲🇰", FFe = "🇲🇱", jFe = "🇲🇲", HFe = "🇲🇳", VFe = "🇲🇴", UFe = "🇲🇵", ZFe = "🇲🇶", WFe = "🇲🇷", GFe = "🇲🇸", KFe = "🇲🇹", XFe = "🇲🇺", YFe = "🇲🇻", JFe = "🇲🇼", QFe = "🇲🇽", eje = "🇲🇾", tje = "🇲🇿", nje = "🇳🇦", rje = "🇳🇨", oje = "🇳🇪", sje = "🇳🇫", ije = "🇳🇬", aje = "🇳🇮", cje = "🇳🇱", lje = "🇳🇴", uje = "🇳🇵", dje = "🇳🇷", fje = "🇳🇺", pje = "🇳🇿", hje = "🇴🇲", gje = "🇵🇦", mje = "🇵🇪", vje = "🇵🇫", _je = "🇵🇬", bje = "🇵🇭", yje = "🇵🇰", wje = "🇵🇱", kje = "🇵🇲", Cje = "🇵🇳", xje = "🇵🇷", Sje = "🇵🇸", Eje = "🇵🇹", Aje = "🇵🇼", $je = "🇵🇾", Mje = "🇶🇦", Tje = "🇷🇪", Ije = "🇷🇴", Lje = "🇷🇸", Oje = "🇷🇺", Rje = "🇷🇼", Pje = "🇸🇦", Bje = "🇸🇧", zje = "🇸🇨", Dje = "🇸🇩", Nje = "🇸🇪", qje = "🇸🇬", Fje = "🇸🇭", jje = "🇸🇮", Hje = "🇸🇯", Vje = "🇸🇰", Uje = "🇸🇱", Zje = "🇸🇲", Wje = "🇸🇳", Gje = "🇸🇴", Kje = "🇸🇷", Xje = "🇸🇸", Yje = "🇸🇹", Jje = "🇸🇻", Qje = "🇸🇽", eHe = "🇸🇾", tHe = "🇸🇿", nHe = "🇹🇦", rHe = "🇹🇨", oHe = "🇹🇩", sHe = "🇹🇫", iHe = "🇹🇬", aHe = "🇹🇭", cHe = "🇹🇯", lHe = "🇹🇰", uHe = "🇹🇱", dHe = "🇹🇲", fHe = "🇹🇳", pHe = "🇹🇴", hHe = "🇹🇷", gHe = "🇹🇹", mHe = "🇹🇻", vHe = "🇹🇼", _He = "🇹🇿", bHe = "🇺🇦", yHe = "🇺🇬", wHe = "🇺🇲", kHe = "🇺🇳", CHe = "🇺🇸", xHe = "🇺🇾", SHe = "🇺🇿", EHe = "🇻🇦", AHe = "🇻🇨", $He = "🇻🇪", MHe = "🇻🇬", THe = "🇻🇮", IHe = "🇻🇳", LHe = "🇻🇺", OHe = "🇼🇫", RHe = "🇼🇸", PHe = "🇽🇰", BHe = "🇾🇪", zHe = "🇾🇹", DHe = "🇿🇦", NHe = "🇿🇲", qHe = "🇿🇼", FHe = "🏴󠁧󠁢󠁥󠁮󠁧󠁿", jHe = "🏴󠁧󠁢󠁳󠁣󠁴󠁿", HHe = "🏴󠁧󠁢󠁷󠁬󠁳󠁿", VHe = {
  100: "💯",
  1234: "🔢",
  grinning: tve,
  smiley: nve,
  smile: rve,
  grin: ove,
  laughing: sve,
  satisfied: ive,
  sweat_smile: ave,
  rofl: cve,
  joy: lve,
  slightly_smiling_face: uve,
  upside_down_face: dve,
  wink: fve,
  blush: pve,
  innocent: hve,
  smiling_face_with_three_hearts: gve,
  heart_eyes: mve,
  star_struck: vve,
  kissing_heart: _ve,
  kissing: bve,
  relaxed: yve,
  kissing_closed_eyes: wve,
  kissing_smiling_eyes: kve,
  smiling_face_with_tear: Cve,
  yum: xve,
  stuck_out_tongue: Sve,
  stuck_out_tongue_winking_eye: Eve,
  zany_face: Ave,
  stuck_out_tongue_closed_eyes: $ve,
  money_mouth_face: Mve,
  hugs: Tve,
  hand_over_mouth: Ive,
  shushing_face: Lve,
  thinking: Ove,
  zipper_mouth_face: Rve,
  raised_eyebrow: Pve,
  neutral_face: Bve,
  expressionless: zve,
  no_mouth: Dve,
  smirk: Nve,
  unamused: qve,
  roll_eyes: Fve,
  grimacing: jve,
  lying_face: Hve,
  relieved: Vve,
  pensive: Uve,
  sleepy: Zve,
  drooling_face: Wve,
  sleeping: Gve,
  mask: Kve,
  face_with_thermometer: Xve,
  face_with_head_bandage: Yve,
  nauseated_face: Jve,
  vomiting_face: Qve,
  sneezing_face: e_e,
  hot_face: t_e,
  cold_face: n_e,
  woozy_face: r_e,
  dizzy_face: o_e,
  exploding_head: s_e,
  cowboy_hat_face: i_e,
  partying_face: a_e,
  disguised_face: c_e,
  sunglasses: l_e,
  nerd_face: u_e,
  monocle_face: d_e,
  confused: f_e,
  worried: p_e,
  slightly_frowning_face: h_e,
  frowning_face: g_e,
  open_mouth: m_e,
  hushed: v_e,
  astonished: __e,
  flushed: b_e,
  pleading_face: y_e,
  frowning: w_e,
  anguished: k_e,
  fearful: C_e,
  cold_sweat: x_e,
  disappointed_relieved: S_e,
  cry: E_e,
  sob: A_e,
  scream: $_e,
  confounded: M_e,
  persevere: T_e,
  disappointed: I_e,
  sweat: L_e,
  weary: O_e,
  tired_face: R_e,
  yawning_face: P_e,
  triumph: B_e,
  rage: z_e,
  pout: D_e,
  angry: N_e,
  cursing_face: q_e,
  smiling_imp: F_e,
  imp: j_e,
  skull: H_e,
  skull_and_crossbones: V_e,
  hankey: U_e,
  poop: Z_e,
  shit: W_e,
  clown_face: G_e,
  japanese_ogre: K_e,
  japanese_goblin: X_e,
  ghost: Y_e,
  alien: J_e,
  space_invader: Q_e,
  robot: ebe,
  smiley_cat: tbe,
  smile_cat: nbe,
  joy_cat: rbe,
  heart_eyes_cat: obe,
  smirk_cat: sbe,
  kissing_cat: ibe,
  scream_cat: abe,
  crying_cat_face: cbe,
  pouting_cat: lbe,
  see_no_evil: ube,
  hear_no_evil: dbe,
  speak_no_evil: fbe,
  kiss: pbe,
  love_letter: hbe,
  cupid: gbe,
  gift_heart: mbe,
  sparkling_heart: vbe,
  heartpulse: _be,
  heartbeat: bbe,
  revolving_hearts: ybe,
  two_hearts: wbe,
  heart_decoration: kbe,
  heavy_heart_exclamation: Cbe,
  broken_heart: xbe,
  heart: Sbe,
  orange_heart: Ebe,
  yellow_heart: Abe,
  green_heart: $be,
  blue_heart: Mbe,
  purple_heart: Tbe,
  brown_heart: Ibe,
  black_heart: Lbe,
  white_heart: Obe,
  anger: Rbe,
  boom: Pbe,
  collision: Bbe,
  dizzy: zbe,
  sweat_drops: Dbe,
  dash: Nbe,
  hole: qbe,
  bomb: Fbe,
  speech_balloon: jbe,
  eye_speech_bubble: Hbe,
  left_speech_bubble: Vbe,
  right_anger_bubble: Ube,
  thought_balloon: Zbe,
  zzz: Wbe,
  wave: Gbe,
  raised_back_of_hand: Kbe,
  raised_hand_with_fingers_splayed: Xbe,
  hand: Ybe,
  raised_hand: Jbe,
  vulcan_salute: Qbe,
  ok_hand: eye,
  pinched_fingers: tye,
  pinching_hand: nye,
  v: rye,
  crossed_fingers: oye,
  love_you_gesture: sye,
  metal: iye,
  call_me_hand: aye,
  point_left: cye,
  point_right: lye,
  point_up_2: uye,
  middle_finger: dye,
  fu: fye,
  point_down: pye,
  point_up: hye,
  "+1": "👍",
  thumbsup: gye,
  "-1": "👎",
  thumbsdown: mye,
  fist_raised: vye,
  fist: _ye,
  fist_oncoming: bye,
  facepunch: yye,
  punch: wye,
  fist_left: kye,
  fist_right: Cye,
  clap: xye,
  raised_hands: Sye,
  open_hands: Eye,
  palms_up_together: Aye,
  handshake: $ye,
  pray: Mye,
  writing_hand: Tye,
  nail_care: Iye,
  selfie: Lye,
  muscle: Oye,
  mechanical_arm: Rye,
  mechanical_leg: Pye,
  leg: Bye,
  foot: zye,
  ear: Dye,
  ear_with_hearing_aid: Nye,
  nose: qye,
  brain: Fye,
  anatomical_heart: jye,
  lungs: Hye,
  tooth: Vye,
  bone: Uye,
  eyes: Zye,
  eye: Wye,
  tongue: Gye,
  lips: Kye,
  baby: Xye,
  child: Yye,
  boy: Jye,
  girl: Qye,
  adult: ewe,
  blond_haired_person: twe,
  man: nwe,
  bearded_person: rwe,
  red_haired_man: owe,
  curly_haired_man: swe,
  white_haired_man: iwe,
  bald_man: awe,
  woman: cwe,
  red_haired_woman: lwe,
  person_red_hair: uwe,
  curly_haired_woman: dwe,
  person_curly_hair: fwe,
  white_haired_woman: pwe,
  person_white_hair: hwe,
  bald_woman: gwe,
  person_bald: mwe,
  blond_haired_woman: vwe,
  blonde_woman: _we,
  blond_haired_man: bwe,
  older_adult: ywe,
  older_man: wwe,
  older_woman: kwe,
  frowning_person: Cwe,
  frowning_man: xwe,
  frowning_woman: Swe,
  pouting_face: Ewe,
  pouting_man: Awe,
  pouting_woman: $we,
  no_good: Mwe,
  no_good_man: Twe,
  ng_man: Iwe,
  no_good_woman: Lwe,
  ng_woman: Owe,
  ok_person: Rwe,
  ok_man: Pwe,
  ok_woman: Bwe,
  tipping_hand_person: zwe,
  information_desk_person: Dwe,
  tipping_hand_man: Nwe,
  sassy_man: qwe,
  tipping_hand_woman: Fwe,
  sassy_woman: jwe,
  raising_hand: Hwe,
  raising_hand_man: Vwe,
  raising_hand_woman: Uwe,
  deaf_person: Zwe,
  deaf_man: Wwe,
  deaf_woman: Gwe,
  bow: Kwe,
  bowing_man: Xwe,
  bowing_woman: Ywe,
  facepalm: Jwe,
  man_facepalming: Qwe,
  woman_facepalming: eke,
  shrug: tke,
  man_shrugging: nke,
  woman_shrugging: rke,
  health_worker: oke,
  man_health_worker: ske,
  woman_health_worker: ike,
  student: ake,
  man_student: cke,
  woman_student: lke,
  teacher: uke,
  man_teacher: dke,
  woman_teacher: fke,
  judge: pke,
  man_judge: hke,
  woman_judge: gke,
  farmer: mke,
  man_farmer: vke,
  woman_farmer: _ke,
  cook: bke,
  man_cook: yke,
  woman_cook: wke,
  mechanic: kke,
  man_mechanic: Cke,
  woman_mechanic: xke,
  factory_worker: Ske,
  man_factory_worker: Eke,
  woman_factory_worker: Ake,
  office_worker: $ke,
  man_office_worker: Mke,
  woman_office_worker: Tke,
  scientist: Ike,
  man_scientist: Lke,
  woman_scientist: Oke,
  technologist: Rke,
  man_technologist: Pke,
  woman_technologist: Bke,
  singer: zke,
  man_singer: Dke,
  woman_singer: Nke,
  artist: qke,
  man_artist: Fke,
  woman_artist: jke,
  pilot: Hke,
  man_pilot: Vke,
  woman_pilot: Uke,
  astronaut: Zke,
  man_astronaut: Wke,
  woman_astronaut: Gke,
  firefighter: Kke,
  man_firefighter: Xke,
  woman_firefighter: Yke,
  police_officer: Jke,
  cop: Qke,
  policeman: e4e,
  policewoman: t4e,
  detective: n4e,
  male_detective: r4e,
  female_detective: o4e,
  guard: s4e,
  guardsman: i4e,
  guardswoman: a4e,
  ninja: c4e,
  construction_worker: l4e,
  construction_worker_man: u4e,
  construction_worker_woman: d4e,
  prince: f4e,
  princess: p4e,
  person_with_turban: h4e,
  man_with_turban: g4e,
  woman_with_turban: m4e,
  man_with_gua_pi_mao: v4e,
  woman_with_headscarf: _4e,
  person_in_tuxedo: b4e,
  man_in_tuxedo: y4e,
  woman_in_tuxedo: w4e,
  person_with_veil: k4e,
  man_with_veil: C4e,
  woman_with_veil: x4e,
  bride_with_veil: S4e,
  pregnant_woman: E4e,
  breast_feeding: A4e,
  woman_feeding_baby: $4e,
  man_feeding_baby: M4e,
  person_feeding_baby: T4e,
  angel: I4e,
  santa: L4e,
  mrs_claus: O4e,
  mx_claus: R4e,
  superhero: P4e,
  superhero_man: B4e,
  superhero_woman: z4e,
  supervillain: D4e,
  supervillain_man: N4e,
  supervillain_woman: q4e,
  mage: F4e,
  mage_man: j4e,
  mage_woman: H4e,
  fairy: V4e,
  fairy_man: U4e,
  fairy_woman: Z4e,
  vampire: W4e,
  vampire_man: G4e,
  vampire_woman: K4e,
  merperson: X4e,
  merman: Y4e,
  mermaid: J4e,
  elf: Q4e,
  elf_man: e3e,
  elf_woman: t3e,
  genie: n3e,
  genie_man: r3e,
  genie_woman: o3e,
  zombie: s3e,
  zombie_man: i3e,
  zombie_woman: a3e,
  massage: c3e,
  massage_man: l3e,
  massage_woman: u3e,
  haircut: d3e,
  haircut_man: f3e,
  haircut_woman: p3e,
  walking: h3e,
  walking_man: g3e,
  walking_woman: m3e,
  standing_person: v3e,
  standing_man: _3e,
  standing_woman: b3e,
  kneeling_person: y3e,
  kneeling_man: w3e,
  kneeling_woman: k3e,
  person_with_probing_cane: C3e,
  man_with_probing_cane: x3e,
  woman_with_probing_cane: S3e,
  person_in_motorized_wheelchair: E3e,
  man_in_motorized_wheelchair: A3e,
  woman_in_motorized_wheelchair: $3e,
  person_in_manual_wheelchair: M3e,
  man_in_manual_wheelchair: T3e,
  woman_in_manual_wheelchair: I3e,
  runner: L3e,
  running: O3e,
  running_man: R3e,
  running_woman: P3e,
  woman_dancing: B3e,
  dancer: z3e,
  man_dancing: D3e,
  business_suit_levitating: N3e,
  dancers: q3e,
  dancing_men: F3e,
  dancing_women: j3e,
  sauna_person: H3e,
  sauna_man: V3e,
  sauna_woman: U3e,
  climbing: Z3e,
  climbing_man: W3e,
  climbing_woman: G3e,
  person_fencing: K3e,
  horse_racing: X3e,
  skier: Y3e,
  snowboarder: J3e,
  golfing: Q3e,
  golfing_man: e5e,
  golfing_woman: t5e,
  surfer: n5e,
  surfing_man: r5e,
  surfing_woman: o5e,
  rowboat: s5e,
  rowing_man: i5e,
  rowing_woman: a5e,
  swimmer: c5e,
  swimming_man: l5e,
  swimming_woman: u5e,
  bouncing_ball_person: d5e,
  bouncing_ball_man: f5e,
  basketball_man: p5e,
  bouncing_ball_woman: h5e,
  basketball_woman: g5e,
  weight_lifting: m5e,
  weight_lifting_man: v5e,
  weight_lifting_woman: _5e,
  bicyclist: b5e,
  biking_man: y5e,
  biking_woman: w5e,
  mountain_bicyclist: k5e,
  mountain_biking_man: C5e,
  mountain_biking_woman: x5e,
  cartwheeling: S5e,
  man_cartwheeling: E5e,
  woman_cartwheeling: A5e,
  wrestling: $5e,
  men_wrestling: M5e,
  women_wrestling: T5e,
  water_polo: I5e,
  man_playing_water_polo: L5e,
  woman_playing_water_polo: O5e,
  handball_person: R5e,
  man_playing_handball: P5e,
  woman_playing_handball: B5e,
  juggling_person: z5e,
  man_juggling: D5e,
  woman_juggling: N5e,
  lotus_position: q5e,
  lotus_position_man: F5e,
  lotus_position_woman: j5e,
  bath: H5e,
  sleeping_bed: V5e,
  people_holding_hands: U5e,
  two_women_holding_hands: Z5e,
  couple: W5e,
  two_men_holding_hands: G5e,
  couplekiss: K5e,
  couplekiss_man_woman: X5e,
  couplekiss_man_man: Y5e,
  couplekiss_woman_woman: J5e,
  couple_with_heart: Q5e,
  couple_with_heart_woman_man: e6e,
  couple_with_heart_man_man: t6e,
  couple_with_heart_woman_woman: n6e,
  family: r6e,
  family_man_woman_boy: o6e,
  family_man_woman_girl: s6e,
  family_man_woman_girl_boy: i6e,
  family_man_woman_boy_boy: a6e,
  family_man_woman_girl_girl: c6e,
  family_man_man_boy: l6e,
  family_man_man_girl: u6e,
  family_man_man_girl_boy: d6e,
  family_man_man_boy_boy: f6e,
  family_man_man_girl_girl: p6e,
  family_woman_woman_boy: h6e,
  family_woman_woman_girl: g6e,
  family_woman_woman_girl_boy: m6e,
  family_woman_woman_boy_boy: v6e,
  family_woman_woman_girl_girl: _6e,
  family_man_boy: b6e,
  family_man_boy_boy: y6e,
  family_man_girl: w6e,
  family_man_girl_boy: k6e,
  family_man_girl_girl: C6e,
  family_woman_boy: x6e,
  family_woman_boy_boy: S6e,
  family_woman_girl: E6e,
  family_woman_girl_boy: A6e,
  family_woman_girl_girl: $6e,
  speaking_head: M6e,
  bust_in_silhouette: T6e,
  busts_in_silhouette: I6e,
  people_hugging: L6e,
  footprints: O6e,
  monkey_face: R6e,
  monkey: P6e,
  gorilla: B6e,
  orangutan: z6e,
  dog: D6e,
  dog2: N6e,
  guide_dog: q6e,
  service_dog: F6e,
  poodle: j6e,
  wolf: H6e,
  fox_face: V6e,
  raccoon: U6e,
  cat: Z6e,
  cat2: W6e,
  black_cat: G6e,
  lion: K6e,
  tiger: X6e,
  tiger2: Y6e,
  leopard: J6e,
  horse: Q6e,
  racehorse: eCe,
  unicorn: tCe,
  zebra: nCe,
  deer: rCe,
  bison: oCe,
  cow: sCe,
  ox: iCe,
  water_buffalo: aCe,
  cow2: cCe,
  pig: lCe,
  pig2: uCe,
  boar: dCe,
  pig_nose: fCe,
  ram: pCe,
  sheep: hCe,
  goat: gCe,
  dromedary_camel: mCe,
  camel: vCe,
  llama: _Ce,
  giraffe: bCe,
  elephant: yCe,
  mammoth: wCe,
  rhinoceros: kCe,
  hippopotamus: CCe,
  mouse: xCe,
  mouse2: SCe,
  rat: ECe,
  hamster: ACe,
  rabbit: $Ce,
  rabbit2: MCe,
  chipmunk: TCe,
  beaver: ICe,
  hedgehog: LCe,
  bat: OCe,
  bear: RCe,
  polar_bear: PCe,
  koala: BCe,
  panda_face: zCe,
  sloth: DCe,
  otter: NCe,
  skunk: qCe,
  kangaroo: FCe,
  badger: jCe,
  feet: HCe,
  paw_prints: VCe,
  turkey: UCe,
  chicken: ZCe,
  rooster: WCe,
  hatching_chick: GCe,
  baby_chick: KCe,
  hatched_chick: XCe,
  bird: YCe,
  penguin: JCe,
  dove: QCe,
  eagle: e8e,
  duck: t8e,
  swan: n8e,
  owl: r8e,
  dodo: o8e,
  feather: s8e,
  flamingo: i8e,
  peacock: a8e,
  parrot: c8e,
  frog: l8e,
  crocodile: u8e,
  turtle: d8e,
  lizard: f8e,
  snake: p8e,
  dragon_face: h8e,
  dragon: g8e,
  sauropod: m8e,
  "t-rex": "🦖",
  whale: v8e,
  whale2: _8e,
  dolphin: b8e,
  flipper: y8e,
  seal: w8e,
  fish: k8e,
  tropical_fish: C8e,
  blowfish: x8e,
  shark: S8e,
  octopus: E8e,
  shell: A8e,
  snail: $8e,
  butterfly: M8e,
  bug: T8e,
  ant: I8e,
  bee: L8e,
  honeybee: O8e,
  beetle: R8e,
  lady_beetle: P8e,
  cricket: B8e,
  cockroach: z8e,
  spider: D8e,
  spider_web: N8e,
  scorpion: q8e,
  mosquito: F8e,
  fly: j8e,
  worm: H8e,
  microbe: V8e,
  bouquet: U8e,
  cherry_blossom: Z8e,
  white_flower: W8e,
  rosette: G8e,
  rose: K8e,
  wilted_flower: X8e,
  hibiscus: Y8e,
  sunflower: J8e,
  blossom: Q8e,
  tulip: exe,
  seedling: txe,
  potted_plant: nxe,
  evergreen_tree: rxe,
  deciduous_tree: oxe,
  palm_tree: sxe,
  cactus: ixe,
  ear_of_rice: axe,
  herb: cxe,
  shamrock: lxe,
  four_leaf_clover: uxe,
  maple_leaf: dxe,
  fallen_leaf: fxe,
  leaves: pxe,
  grapes: hxe,
  melon: gxe,
  watermelon: mxe,
  tangerine: vxe,
  orange: _xe,
  mandarin: bxe,
  lemon: yxe,
  banana: wxe,
  pineapple: kxe,
  mango: Cxe,
  apple: xxe,
  green_apple: Sxe,
  pear: Exe,
  peach: Axe,
  cherries: $xe,
  strawberry: Mxe,
  blueberries: Txe,
  kiwi_fruit: Ixe,
  tomato: Lxe,
  olive: Oxe,
  coconut: Rxe,
  avocado: Pxe,
  eggplant: Bxe,
  potato: zxe,
  carrot: Dxe,
  corn: Nxe,
  hot_pepper: qxe,
  bell_pepper: Fxe,
  cucumber: jxe,
  leafy_green: Hxe,
  broccoli: Vxe,
  garlic: Uxe,
  onion: Zxe,
  mushroom: Wxe,
  peanuts: Gxe,
  chestnut: Kxe,
  bread: Xxe,
  croissant: Yxe,
  baguette_bread: Jxe,
  flatbread: Qxe,
  pretzel: e7e,
  bagel: t7e,
  pancakes: n7e,
  waffle: r7e,
  cheese: o7e,
  meat_on_bone: s7e,
  poultry_leg: i7e,
  cut_of_meat: a7e,
  bacon: c7e,
  hamburger: l7e,
  fries: u7e,
  pizza: d7e,
  hotdog: f7e,
  sandwich: p7e,
  taco: h7e,
  burrito: g7e,
  tamale: m7e,
  stuffed_flatbread: v7e,
  falafel: _7e,
  egg: b7e,
  fried_egg: y7e,
  shallow_pan_of_food: w7e,
  stew: k7e,
  fondue: C7e,
  bowl_with_spoon: x7e,
  green_salad: S7e,
  popcorn: E7e,
  butter: A7e,
  salt: $7e,
  canned_food: M7e,
  bento: T7e,
  rice_cracker: I7e,
  rice_ball: L7e,
  rice: O7e,
  curry: R7e,
  ramen: P7e,
  spaghetti: B7e,
  sweet_potato: z7e,
  oden: D7e,
  sushi: N7e,
  fried_shrimp: q7e,
  fish_cake: F7e,
  moon_cake: j7e,
  dango: H7e,
  dumpling: V7e,
  fortune_cookie: U7e,
  takeout_box: Z7e,
  crab: W7e,
  lobster: G7e,
  shrimp: K7e,
  squid: X7e,
  oyster: Y7e,
  icecream: J7e,
  shaved_ice: Q7e,
  ice_cream: e9e,
  doughnut: t9e,
  cookie: n9e,
  birthday: r9e,
  cake: o9e,
  cupcake: s9e,
  pie: i9e,
  chocolate_bar: a9e,
  candy: c9e,
  lollipop: l9e,
  custard: u9e,
  honey_pot: d9e,
  baby_bottle: f9e,
  milk_glass: p9e,
  coffee: h9e,
  teapot: g9e,
  tea: m9e,
  sake: v9e,
  champagne: _9e,
  wine_glass: b9e,
  cocktail: y9e,
  tropical_drink: w9e,
  beer: k9e,
  beers: C9e,
  clinking_glasses: x9e,
  tumbler_glass: S9e,
  cup_with_straw: E9e,
  bubble_tea: A9e,
  beverage_box: $9e,
  mate: M9e,
  ice_cube: T9e,
  chopsticks: I9e,
  plate_with_cutlery: L9e,
  fork_and_knife: O9e,
  spoon: R9e,
  hocho: P9e,
  knife: B9e,
  amphora: z9e,
  earth_africa: D9e,
  earth_americas: N9e,
  earth_asia: q9e,
  globe_with_meridians: F9e,
  world_map: j9e,
  japan: H9e,
  compass: V9e,
  mountain_snow: U9e,
  mountain: Z9e,
  volcano: W9e,
  mount_fuji: G9e,
  camping: K9e,
  beach_umbrella: X9e,
  desert: Y9e,
  desert_island: J9e,
  national_park: Q9e,
  stadium: eSe,
  classical_building: tSe,
  building_construction: nSe,
  bricks: rSe,
  rock: oSe,
  wood: sSe,
  hut: iSe,
  houses: aSe,
  derelict_house: cSe,
  house: lSe,
  house_with_garden: uSe,
  office: dSe,
  post_office: fSe,
  european_post_office: pSe,
  hospital: hSe,
  bank: gSe,
  hotel: mSe,
  love_hotel: vSe,
  convenience_store: _Se,
  school: bSe,
  department_store: ySe,
  factory: wSe,
  japanese_castle: kSe,
  european_castle: CSe,
  wedding: xSe,
  tokyo_tower: SSe,
  statue_of_liberty: ESe,
  church: ASe,
  mosque: $Se,
  hindu_temple: MSe,
  synagogue: TSe,
  shinto_shrine: ISe,
  kaaba: LSe,
  fountain: OSe,
  tent: RSe,
  foggy: PSe,
  night_with_stars: BSe,
  cityscape: zSe,
  sunrise_over_mountains: DSe,
  sunrise: NSe,
  city_sunset: qSe,
  city_sunrise: FSe,
  bridge_at_night: jSe,
  hotsprings: HSe,
  carousel_horse: VSe,
  ferris_wheel: USe,
  roller_coaster: ZSe,
  barber: WSe,
  circus_tent: GSe,
  steam_locomotive: KSe,
  railway_car: XSe,
  bullettrain_side: YSe,
  bullettrain_front: JSe,
  train2: QSe,
  metro: eEe,
  light_rail: tEe,
  station: nEe,
  tram: rEe,
  monorail: oEe,
  mountain_railway: sEe,
  train: iEe,
  bus: aEe,
  oncoming_bus: cEe,
  trolleybus: lEe,
  minibus: uEe,
  ambulance: dEe,
  fire_engine: fEe,
  police_car: pEe,
  oncoming_police_car: hEe,
  taxi: gEe,
  oncoming_taxi: mEe,
  car: vEe,
  red_car: _Ee,
  oncoming_automobile: bEe,
  blue_car: yEe,
  pickup_truck: wEe,
  truck: kEe,
  articulated_lorry: CEe,
  tractor: xEe,
  racing_car: SEe,
  motorcycle: EEe,
  motor_scooter: AEe,
  manual_wheelchair: $Ee,
  motorized_wheelchair: MEe,
  auto_rickshaw: TEe,
  bike: IEe,
  kick_scooter: LEe,
  skateboard: OEe,
  roller_skate: REe,
  busstop: PEe,
  motorway: BEe,
  railway_track: zEe,
  oil_drum: DEe,
  fuelpump: NEe,
  rotating_light: qEe,
  traffic_light: FEe,
  vertical_traffic_light: jEe,
  stop_sign: HEe,
  construction: VEe,
  anchor: UEe,
  boat: ZEe,
  sailboat: WEe,
  canoe: GEe,
  speedboat: KEe,
  passenger_ship: XEe,
  ferry: YEe,
  motor_boat: JEe,
  ship: QEe,
  airplane: eAe,
  small_airplane: tAe,
  flight_departure: nAe,
  flight_arrival: rAe,
  parachute: oAe,
  seat: sAe,
  helicopter: iAe,
  suspension_railway: aAe,
  mountain_cableway: cAe,
  aerial_tramway: lAe,
  artificial_satellite: uAe,
  rocket: dAe,
  flying_saucer: fAe,
  bellhop_bell: pAe,
  luggage: hAe,
  hourglass: gAe,
  hourglass_flowing_sand: mAe,
  watch: vAe,
  alarm_clock: _Ae,
  stopwatch: bAe,
  timer_clock: yAe,
  mantelpiece_clock: wAe,
  clock12: kAe,
  clock1230: CAe,
  clock1: xAe,
  clock130: SAe,
  clock2: EAe,
  clock230: AAe,
  clock3: $Ae,
  clock330: MAe,
  clock4: TAe,
  clock430: IAe,
  clock5: LAe,
  clock530: OAe,
  clock6: RAe,
  clock630: PAe,
  clock7: BAe,
  clock730: zAe,
  clock8: DAe,
  clock830: NAe,
  clock9: qAe,
  clock930: FAe,
  clock10: jAe,
  clock1030: HAe,
  clock11: VAe,
  clock1130: UAe,
  new_moon: ZAe,
  waxing_crescent_moon: WAe,
  first_quarter_moon: GAe,
  moon: KAe,
  waxing_gibbous_moon: XAe,
  full_moon: YAe,
  waning_gibbous_moon: JAe,
  last_quarter_moon: QAe,
  waning_crescent_moon: e$e,
  crescent_moon: t$e,
  new_moon_with_face: n$e,
  first_quarter_moon_with_face: r$e,
  last_quarter_moon_with_face: o$e,
  thermometer: s$e,
  sunny: i$e,
  full_moon_with_face: a$e,
  sun_with_face: c$e,
  ringed_planet: l$e,
  star: u$e,
  star2: d$e,
  stars: f$e,
  milky_way: p$e,
  cloud: h$e,
  partly_sunny: g$e,
  cloud_with_lightning_and_rain: m$e,
  sun_behind_small_cloud: v$e,
  sun_behind_large_cloud: _$e,
  sun_behind_rain_cloud: b$e,
  cloud_with_rain: y$e,
  cloud_with_snow: w$e,
  cloud_with_lightning: k$e,
  tornado: C$e,
  fog: x$e,
  wind_face: S$e,
  cyclone: E$e,
  rainbow: A$e,
  closed_umbrella: $$e,
  open_umbrella: M$e,
  umbrella: T$e,
  parasol_on_ground: I$e,
  zap: L$e,
  snowflake: O$e,
  snowman_with_snow: R$e,
  snowman: P$e,
  comet: B$e,
  fire: z$e,
  droplet: D$e,
  ocean: N$e,
  jack_o_lantern: q$e,
  christmas_tree: F$e,
  fireworks: j$e,
  sparkler: H$e,
  firecracker: V$e,
  sparkles: U$e,
  balloon: Z$e,
  tada: W$e,
  confetti_ball: G$e,
  tanabata_tree: K$e,
  bamboo: X$e,
  dolls: Y$e,
  flags: J$e,
  wind_chime: Q$e,
  rice_scene: eMe,
  red_envelope: tMe,
  ribbon: nMe,
  gift: rMe,
  reminder_ribbon: oMe,
  tickets: sMe,
  ticket: iMe,
  medal_military: aMe,
  trophy: cMe,
  medal_sports: lMe,
  "1st_place_medal": "🥇",
  "2nd_place_medal": "🥈",
  "3rd_place_medal": "🥉",
  soccer: uMe,
  baseball: dMe,
  softball: fMe,
  basketball: pMe,
  volleyball: hMe,
  football: gMe,
  rugby_football: mMe,
  tennis: vMe,
  flying_disc: _Me,
  bowling: bMe,
  cricket_game: yMe,
  field_hockey: wMe,
  ice_hockey: kMe,
  lacrosse: CMe,
  ping_pong: xMe,
  badminton: SMe,
  boxing_glove: EMe,
  martial_arts_uniform: AMe,
  goal_net: $Me,
  golf: MMe,
  ice_skate: TMe,
  fishing_pole_and_fish: IMe,
  diving_mask: LMe,
  running_shirt_with_sash: OMe,
  ski: RMe,
  sled: PMe,
  curling_stone: BMe,
  dart: zMe,
  yo_yo: DMe,
  kite: NMe,
  "8ball": "🎱",
  crystal_ball: qMe,
  magic_wand: FMe,
  nazar_amulet: jMe,
  video_game: HMe,
  joystick: VMe,
  slot_machine: UMe,
  game_die: ZMe,
  jigsaw: WMe,
  teddy_bear: GMe,
  pinata: KMe,
  nesting_dolls: XMe,
  spades: YMe,
  hearts: JMe,
  diamonds: QMe,
  clubs: eTe,
  chess_pawn: tTe,
  black_joker: nTe,
  mahjong: rTe,
  flower_playing_cards: oTe,
  performing_arts: sTe,
  framed_picture: iTe,
  art: aTe,
  thread: cTe,
  sewing_needle: lTe,
  yarn: uTe,
  knot: dTe,
  eyeglasses: fTe,
  dark_sunglasses: pTe,
  goggles: hTe,
  lab_coat: gTe,
  safety_vest: mTe,
  necktie: vTe,
  shirt: _Te,
  tshirt: bTe,
  jeans: yTe,
  scarf: wTe,
  gloves: kTe,
  coat: CTe,
  socks: xTe,
  dress: STe,
  kimono: ETe,
  sari: ATe,
  one_piece_swimsuit: $Te,
  swim_brief: MTe,
  shorts: TTe,
  bikini: ITe,
  womans_clothes: LTe,
  purse: OTe,
  handbag: RTe,
  pouch: PTe,
  shopping: BTe,
  school_satchel: zTe,
  thong_sandal: DTe,
  mans_shoe: NTe,
  shoe: qTe,
  athletic_shoe: FTe,
  hiking_boot: jTe,
  flat_shoe: HTe,
  high_heel: VTe,
  sandal: UTe,
  ballet_shoes: ZTe,
  boot: WTe,
  crown: GTe,
  womans_hat: KTe,
  tophat: XTe,
  mortar_board: YTe,
  billed_cap: JTe,
  military_helmet: QTe,
  rescue_worker_helmet: eIe,
  prayer_beads: tIe,
  lipstick: nIe,
  ring: rIe,
  gem: oIe,
  mute: sIe,
  speaker: iIe,
  sound: aIe,
  loud_sound: cIe,
  loudspeaker: lIe,
  mega: uIe,
  postal_horn: dIe,
  bell: fIe,
  no_bell: pIe,
  musical_score: hIe,
  musical_note: gIe,
  notes: mIe,
  studio_microphone: vIe,
  level_slider: _Ie,
  control_knobs: bIe,
  microphone: yIe,
  headphones: wIe,
  radio: kIe,
  saxophone: CIe,
  accordion: xIe,
  guitar: SIe,
  musical_keyboard: EIe,
  trumpet: AIe,
  violin: $Ie,
  banjo: MIe,
  drum: TIe,
  long_drum: IIe,
  iphone: LIe,
  calling: OIe,
  phone: RIe,
  telephone: PIe,
  telephone_receiver: BIe,
  pager: zIe,
  fax: DIe,
  battery: NIe,
  electric_plug: qIe,
  computer: FIe,
  desktop_computer: jIe,
  printer: HIe,
  keyboard: VIe,
  computer_mouse: UIe,
  trackball: ZIe,
  minidisc: WIe,
  floppy_disk: GIe,
  cd: KIe,
  dvd: XIe,
  abacus: YIe,
  movie_camera: JIe,
  film_strip: QIe,
  film_projector: eLe,
  clapper: tLe,
  tv: nLe,
  camera: rLe,
  camera_flash: oLe,
  video_camera: sLe,
  vhs: iLe,
  mag: aLe,
  mag_right: cLe,
  candle: lLe,
  bulb: uLe,
  flashlight: dLe,
  izakaya_lantern: fLe,
  lantern: pLe,
  diya_lamp: hLe,
  notebook_with_decorative_cover: gLe,
  closed_book: mLe,
  book: vLe,
  open_book: _Le,
  green_book: bLe,
  blue_book: yLe,
  orange_book: wLe,
  books: kLe,
  notebook: CLe,
  ledger: xLe,
  page_with_curl: SLe,
  scroll: ELe,
  page_facing_up: ALe,
  newspaper: $Le,
  newspaper_roll: MLe,
  bookmark_tabs: TLe,
  bookmark: ILe,
  label: LLe,
  moneybag: OLe,
  coin: RLe,
  yen: PLe,
  dollar: BLe,
  euro: zLe,
  pound: DLe,
  money_with_wings: NLe,
  credit_card: qLe,
  receipt: FLe,
  chart: jLe,
  envelope: HLe,
  email: VLe,
  "e-mail": "📧",
  incoming_envelope: ULe,
  envelope_with_arrow: ZLe,
  outbox_tray: WLe,
  inbox_tray: GLe,
  package: "📦",
  mailbox: KLe,
  mailbox_closed: XLe,
  mailbox_with_mail: YLe,
  mailbox_with_no_mail: JLe,
  postbox: QLe,
  ballot_box: eOe,
  pencil2: tOe,
  black_nib: nOe,
  fountain_pen: rOe,
  pen: oOe,
  paintbrush: sOe,
  crayon: iOe,
  memo: aOe,
  pencil: cOe,
  briefcase: lOe,
  file_folder: uOe,
  open_file_folder: dOe,
  card_index_dividers: fOe,
  date: pOe,
  calendar: hOe,
  spiral_notepad: gOe,
  spiral_calendar: mOe,
  card_index: vOe,
  chart_with_upwards_trend: _Oe,
  chart_with_downwards_trend: bOe,
  bar_chart: yOe,
  clipboard: wOe,
  pushpin: kOe,
  round_pushpin: COe,
  paperclip: xOe,
  paperclips: SOe,
  straight_ruler: EOe,
  triangular_ruler: AOe,
  scissors: $Oe,
  card_file_box: MOe,
  file_cabinet: TOe,
  wastebasket: IOe,
  lock: LOe,
  unlock: OOe,
  lock_with_ink_pen: ROe,
  closed_lock_with_key: POe,
  key: BOe,
  old_key: zOe,
  hammer: DOe,
  axe: NOe,
  pick: qOe,
  hammer_and_pick: FOe,
  hammer_and_wrench: jOe,
  dagger: HOe,
  crossed_swords: VOe,
  gun: UOe,
  boomerang: ZOe,
  bow_and_arrow: WOe,
  shield: GOe,
  carpentry_saw: KOe,
  wrench: XOe,
  screwdriver: YOe,
  nut_and_bolt: JOe,
  gear: QOe,
  clamp: eRe,
  balance_scale: tRe,
  probing_cane: nRe,
  link: rRe,
  chains: oRe,
  hook: sRe,
  toolbox: iRe,
  magnet: aRe,
  ladder: cRe,
  alembic: lRe,
  test_tube: uRe,
  petri_dish: dRe,
  dna: fRe,
  microscope: pRe,
  telescope: hRe,
  satellite: gRe,
  syringe: mRe,
  drop_of_blood: vRe,
  pill: _Re,
  adhesive_bandage: bRe,
  stethoscope: yRe,
  door: wRe,
  elevator: kRe,
  mirror: CRe,
  window: xRe,
  bed: SRe,
  couch_and_lamp: ERe,
  chair: ARe,
  toilet: $Re,
  plunger: MRe,
  shower: TRe,
  bathtub: IRe,
  mouse_trap: LRe,
  razor: ORe,
  lotion_bottle: RRe,
  safety_pin: PRe,
  broom: BRe,
  basket: zRe,
  roll_of_paper: DRe,
  bucket: NRe,
  soap: qRe,
  toothbrush: FRe,
  sponge: jRe,
  fire_extinguisher: HRe,
  shopping_cart: VRe,
  smoking: URe,
  coffin: ZRe,
  headstone: WRe,
  funeral_urn: GRe,
  moyai: KRe,
  placard: XRe,
  atm: YRe,
  put_litter_in_its_place: JRe,
  potable_water: QRe,
  wheelchair: ePe,
  mens: tPe,
  womens: nPe,
  restroom: rPe,
  baby_symbol: oPe,
  wc: sPe,
  passport_control: iPe,
  customs: aPe,
  baggage_claim: cPe,
  left_luggage: lPe,
  warning: uPe,
  children_crossing: dPe,
  no_entry: fPe,
  no_entry_sign: pPe,
  no_bicycles: hPe,
  no_smoking: gPe,
  do_not_litter: mPe,
  "non-potable_water": "🚱",
  no_pedestrians: vPe,
  no_mobile_phones: _Pe,
  underage: bPe,
  radioactive: yPe,
  biohazard: wPe,
  arrow_up: kPe,
  arrow_upper_right: CPe,
  arrow_right: xPe,
  arrow_lower_right: SPe,
  arrow_down: EPe,
  arrow_lower_left: APe,
  arrow_left: $Pe,
  arrow_upper_left: MPe,
  arrow_up_down: TPe,
  left_right_arrow: IPe,
  leftwards_arrow_with_hook: LPe,
  arrow_right_hook: OPe,
  arrow_heading_up: RPe,
  arrow_heading_down: PPe,
  arrows_clockwise: BPe,
  arrows_counterclockwise: zPe,
  back: DPe,
  end: NPe,
  on: qPe,
  soon: FPe,
  top: jPe,
  place_of_worship: HPe,
  atom_symbol: VPe,
  om: UPe,
  star_of_david: ZPe,
  wheel_of_dharma: WPe,
  yin_yang: GPe,
  latin_cross: KPe,
  orthodox_cross: XPe,
  star_and_crescent: YPe,
  peace_symbol: JPe,
  menorah: QPe,
  six_pointed_star: eBe,
  aries: tBe,
  taurus: nBe,
  gemini: rBe,
  cancer: oBe,
  leo: sBe,
  virgo: iBe,
  libra: aBe,
  scorpius: cBe,
  sagittarius: lBe,
  capricorn: uBe,
  aquarius: dBe,
  pisces: fBe,
  ophiuchus: pBe,
  twisted_rightwards_arrows: hBe,
  repeat: gBe,
  repeat_one: mBe,
  arrow_forward: vBe,
  fast_forward: _Be,
  next_track_button: bBe,
  play_or_pause_button: yBe,
  arrow_backward: wBe,
  rewind: kBe,
  previous_track_button: CBe,
  arrow_up_small: xBe,
  arrow_double_up: SBe,
  arrow_down_small: EBe,
  arrow_double_down: ABe,
  pause_button: $Be,
  stop_button: MBe,
  record_button: TBe,
  eject_button: IBe,
  cinema: LBe,
  low_brightness: OBe,
  high_brightness: RBe,
  signal_strength: PBe,
  vibration_mode: BBe,
  mobile_phone_off: zBe,
  female_sign: DBe,
  male_sign: NBe,
  transgender_symbol: qBe,
  heavy_multiplication_x: FBe,
  heavy_plus_sign: jBe,
  heavy_minus_sign: HBe,
  heavy_division_sign: VBe,
  infinity: UBe,
  bangbang: ZBe,
  interrobang: WBe,
  question: GBe,
  grey_question: KBe,
  grey_exclamation: XBe,
  exclamation: YBe,
  heavy_exclamation_mark: JBe,
  wavy_dash: QBe,
  currency_exchange: eze,
  heavy_dollar_sign: tze,
  medical_symbol: nze,
  recycle: rze,
  fleur_de_lis: oze,
  trident: sze,
  name_badge: ize,
  beginner: aze,
  o: cze,
  white_check_mark: lze,
  ballot_box_with_check: uze,
  heavy_check_mark: dze,
  x: fze,
  negative_squared_cross_mark: pze,
  curly_loop: hze,
  loop: gze,
  part_alternation_mark: mze,
  eight_spoked_asterisk: vze,
  eight_pointed_black_star: _ze,
  sparkle: bze,
  copyright: yze,
  registered: wze,
  tm: kze,
  hash: Cze,
  asterisk: xze,
  zero: Sze,
  one: Eze,
  two: Aze,
  three: $ze,
  four: Mze,
  five: Tze,
  six: Ize,
  seven: Lze,
  eight: Oze,
  nine: Rze,
  keycap_ten: Pze,
  capital_abcd: Bze,
  abcd: zze,
  symbols: Dze,
  abc: Nze,
  a: qze,
  ab: Fze,
  b: jze,
  cl: Hze,
  cool: Vze,
  free: Uze,
  information_source: Zze,
  id: Wze,
  m: Gze,
  new: "🆕",
  ng: Kze,
  o2: Xze,
  ok: Yze,
  parking: Jze,
  sos: Qze,
  up: eDe,
  vs: tDe,
  koko: nDe,
  sa: rDe,
  ideograph_advantage: oDe,
  accept: sDe,
  congratulations: iDe,
  secret: aDe,
  u6e80: cDe,
  red_circle: lDe,
  orange_circle: uDe,
  yellow_circle: dDe,
  green_circle: fDe,
  large_blue_circle: pDe,
  purple_circle: hDe,
  brown_circle: gDe,
  black_circle: mDe,
  white_circle: vDe,
  red_square: _De,
  orange_square: bDe,
  yellow_square: yDe,
  green_square: wDe,
  blue_square: kDe,
  purple_square: CDe,
  brown_square: xDe,
  black_large_square: SDe,
  white_large_square: EDe,
  black_medium_square: ADe,
  white_medium_square: $De,
  black_medium_small_square: MDe,
  white_medium_small_square: TDe,
  black_small_square: IDe,
  white_small_square: LDe,
  large_orange_diamond: ODe,
  large_blue_diamond: RDe,
  small_orange_diamond: PDe,
  small_blue_diamond: BDe,
  small_red_triangle: zDe,
  small_red_triangle_down: DDe,
  diamond_shape_with_a_dot_inside: NDe,
  radio_button: qDe,
  white_square_button: FDe,
  black_square_button: jDe,
  checkered_flag: HDe,
  triangular_flag_on_post: VDe,
  crossed_flags: UDe,
  black_flag: ZDe,
  white_flag: WDe,
  rainbow_flag: GDe,
  transgender_flag: KDe,
  pirate_flag: XDe,
  ascension_island: YDe,
  andorra: JDe,
  united_arab_emirates: QDe,
  afghanistan: eNe,
  antigua_barbuda: tNe,
  anguilla: nNe,
  albania: rNe,
  armenia: oNe,
  angola: sNe,
  antarctica: iNe,
  argentina: aNe,
  american_samoa: cNe,
  austria: lNe,
  australia: uNe,
  aruba: dNe,
  aland_islands: fNe,
  azerbaijan: pNe,
  bosnia_herzegovina: hNe,
  barbados: gNe,
  bangladesh: mNe,
  belgium: vNe,
  burkina_faso: _Ne,
  bulgaria: bNe,
  bahrain: yNe,
  burundi: wNe,
  benin: kNe,
  st_barthelemy: CNe,
  bermuda: xNe,
  brunei: SNe,
  bolivia: ENe,
  caribbean_netherlands: ANe,
  brazil: $Ne,
  bahamas: MNe,
  bhutan: TNe,
  bouvet_island: INe,
  botswana: LNe,
  belarus: ONe,
  belize: RNe,
  canada: PNe,
  cocos_islands: BNe,
  congo_kinshasa: zNe,
  central_african_republic: DNe,
  congo_brazzaville: NNe,
  switzerland: qNe,
  cote_divoire: FNe,
  cook_islands: jNe,
  chile: HNe,
  cameroon: VNe,
  cn: UNe,
  colombia: ZNe,
  clipperton_island: WNe,
  costa_rica: GNe,
  cuba: KNe,
  cape_verde: XNe,
  curacao: YNe,
  christmas_island: JNe,
  cyprus: QNe,
  czech_republic: eqe,
  de: tqe,
  diego_garcia: nqe,
  djibouti: rqe,
  denmark: oqe,
  dominica: sqe,
  dominican_republic: iqe,
  algeria: aqe,
  ceuta_melilla: cqe,
  ecuador: lqe,
  estonia: uqe,
  egypt: dqe,
  western_sahara: fqe,
  eritrea: pqe,
  es: hqe,
  ethiopia: gqe,
  eu: mqe,
  european_union: vqe,
  finland: _qe,
  fiji: bqe,
  falkland_islands: yqe,
  micronesia: wqe,
  faroe_islands: kqe,
  fr: Cqe,
  gabon: xqe,
  gb: Sqe,
  uk: Eqe,
  grenada: Aqe,
  georgia: $qe,
  french_guiana: Mqe,
  guernsey: Tqe,
  ghana: Iqe,
  gibraltar: Lqe,
  greenland: Oqe,
  gambia: Rqe,
  guinea: Pqe,
  guadeloupe: Bqe,
  equatorial_guinea: zqe,
  greece: Dqe,
  south_georgia_south_sandwich_islands: Nqe,
  guatemala: qqe,
  guam: Fqe,
  guinea_bissau: jqe,
  guyana: Hqe,
  hong_kong: Vqe,
  heard_mcdonald_islands: Uqe,
  honduras: Zqe,
  croatia: Wqe,
  haiti: Gqe,
  hungary: Kqe,
  canary_islands: Xqe,
  indonesia: Yqe,
  ireland: Jqe,
  israel: Qqe,
  isle_of_man: eFe,
  india: tFe,
  british_indian_ocean_territory: nFe,
  iraq: rFe,
  iran: oFe,
  iceland: sFe,
  it: iFe,
  jersey: aFe,
  jamaica: cFe,
  jordan: lFe,
  jp: uFe,
  kenya: dFe,
  kyrgyzstan: fFe,
  cambodia: pFe,
  kiribati: hFe,
  comoros: gFe,
  st_kitts_nevis: mFe,
  north_korea: vFe,
  kr: _Fe,
  kuwait: bFe,
  cayman_islands: yFe,
  kazakhstan: wFe,
  laos: kFe,
  lebanon: CFe,
  st_lucia: xFe,
  liechtenstein: SFe,
  sri_lanka: EFe,
  liberia: AFe,
  lesotho: $Fe,
  lithuania: MFe,
  luxembourg: TFe,
  latvia: IFe,
  libya: LFe,
  morocco: OFe,
  monaco: RFe,
  moldova: PFe,
  montenegro: BFe,
  st_martin: zFe,
  madagascar: DFe,
  marshall_islands: NFe,
  macedonia: qFe,
  mali: FFe,
  myanmar: jFe,
  mongolia: HFe,
  macau: VFe,
  northern_mariana_islands: UFe,
  martinique: ZFe,
  mauritania: WFe,
  montserrat: GFe,
  malta: KFe,
  mauritius: XFe,
  maldives: YFe,
  malawi: JFe,
  mexico: QFe,
  malaysia: eje,
  mozambique: tje,
  namibia: nje,
  new_caledonia: rje,
  niger: oje,
  norfolk_island: sje,
  nigeria: ije,
  nicaragua: aje,
  netherlands: cje,
  norway: lje,
  nepal: uje,
  nauru: dje,
  niue: fje,
  new_zealand: pje,
  oman: hje,
  panama: gje,
  peru: mje,
  french_polynesia: vje,
  papua_new_guinea: _je,
  philippines: bje,
  pakistan: yje,
  poland: wje,
  st_pierre_miquelon: kje,
  pitcairn_islands: Cje,
  puerto_rico: xje,
  palestinian_territories: Sje,
  portugal: Eje,
  palau: Aje,
  paraguay: $je,
  qatar: Mje,
  reunion: Tje,
  romania: Ije,
  serbia: Lje,
  ru: Oje,
  rwanda: Rje,
  saudi_arabia: Pje,
  solomon_islands: Bje,
  seychelles: zje,
  sudan: Dje,
  sweden: Nje,
  singapore: qje,
  st_helena: Fje,
  slovenia: jje,
  svalbard_jan_mayen: Hje,
  slovakia: Vje,
  sierra_leone: Uje,
  san_marino: Zje,
  senegal: Wje,
  somalia: Gje,
  suriname: Kje,
  south_sudan: Xje,
  sao_tome_principe: Yje,
  el_salvador: Jje,
  sint_maarten: Qje,
  syria: eHe,
  swaziland: tHe,
  tristan_da_cunha: nHe,
  turks_caicos_islands: rHe,
  chad: oHe,
  french_southern_territories: sHe,
  togo: iHe,
  thailand: aHe,
  tajikistan: cHe,
  tokelau: lHe,
  timor_leste: uHe,
  turkmenistan: dHe,
  tunisia: fHe,
  tonga: pHe,
  tr: hHe,
  trinidad_tobago: gHe,
  tuvalu: mHe,
  taiwan: vHe,
  tanzania: _He,
  ukraine: bHe,
  uganda: yHe,
  us_outlying_islands: wHe,
  united_nations: kHe,
  us: CHe,
  uruguay: xHe,
  uzbekistan: SHe,
  vatican_city: EHe,
  st_vincent_grenadines: AHe,
  venezuela: $He,
  british_virgin_islands: MHe,
  us_virgin_islands: THe,
  vietnam: IHe,
  vanuatu: LHe,
  wallis_futuna: OHe,
  samoa: RHe,
  kosovo: PHe,
  yemen: BHe,
  mayotte: zHe,
  south_africa: DHe,
  zambia: NHe,
  zimbabwe: qHe,
  england: FHe,
  scotland: jHe,
  wales: HHe
};
var ua, i0;
function UHe() {
  return i0 || (i0 = 1, ua = {
    angry: [">:(", ">:-("],
    blush: [':")', ':-")'],
    broken_heart: ["</3", "<\\3"],
    // :\ and :-\ not used because of conflict with markdown escaping
    confused: [":/", ":-/"],
    // twemoji shows question
    cry: [":'(", ":'-(", ":,(", ":,-("],
    frowning: [":(", ":-("],
    heart: ["<3"],
    imp: ["]:(", "]:-("],
    innocent: ["o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)"],
    joy: [":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D"],
    kissing: [":*", ":-*"],
    laughing: ["x-)", "X-)"],
    neutral_face: [":|", ":-|"],
    open_mouth: [":o", ":-o", ":O", ":-O"],
    rage: [":@", ":-@"],
    smile: [":D", ":-D"],
    smiley: [":)", ":-)"],
    smiling_imp: ["]:)", "]:-)"],
    sob: [":,'(", ":,'-(", ";(", ";-("],
    stuck_out_tongue: [":P", ":-P"],
    sunglasses: ["8-)", "B-)"],
    sweat: [",:(", ",:-("],
    sweat_smile: [",:)", ",:-)"],
    unamused: [":s", ":-S", ":z", ":-Z", ":$", ":-$"],
    wink: [";)", ";-)"]
  }), ua;
}
var da, a0;
function ZHe() {
  return a0 || (a0 = 1, da = function(t, n) {
    return t[n].content;
  }), da;
}
var fa, c0;
function WHe() {
  return c0 || (c0 = 1, fa = function(t, n, r, s, o) {
    var i = t.utils.arrayReplaceAt, a = t.utils.lib.ucmicro, c = new RegExp([a.Z.source, a.P.source, a.Cc.source].join("|"));
    function u(d, l, m) {
      var f, v = 0, g = [];
      return d.replace(o, function(b, h, w) {
        var k;
        if (r.hasOwnProperty(b)) {
          if (k = r[b], h > 0 && !c.test(w[h - 1]) || h + b.length < w.length && !c.test(w[h + b.length]))
            return;
        } else
          k = b.slice(1, -1);
        h > v && (f = new m("text", "", 0), f.content = d.slice(v, h), g.push(f)), f = new m("emoji", "", 0), f.markup = k, f.content = n[k], g.push(f), v = h + b.length;
      }), v < d.length && (f = new m("text", "", 0), f.content = d.slice(v), g.push(f)), g;
    }
    return function(l) {
      var m, f, v, g, b, h = l.tokens, w = 0;
      for (f = 0, v = h.length; f < v; f++)
        if (h[f].type === "inline")
          for (g = h[f].children, m = g.length - 1; m >= 0; m--)
            b = g[m], (b.type === "link_open" || b.type === "link_close") && b.info === "auto" && (w -= b.nesting), b.type === "text" && w === 0 && s.test(b.content) && (h[f].children = g = i(
              g,
              m,
              u(b.content, b.level, l.Token)
            ));
    };
  }), fa;
}
var pa, l0;
function GHe() {
  if (l0) return pa;
  l0 = 1;
  function e(t) {
    return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
  }
  return pa = function(n) {
    var r = n.defs, s;
    n.enabled.length && (r = Object.keys(r).reduce(function(u, d) {
      return n.enabled.indexOf(d) >= 0 && (u[d] = r[d]), u;
    }, {})), s = Object.keys(n.shortcuts).reduce(function(u, d) {
      return r[d] ? Array.isArray(n.shortcuts[d]) ? (n.shortcuts[d].forEach(function(l) {
        u[l] = d;
      }), u) : (u[n.shortcuts[d]] = d, u) : u;
    }, {});
    var o = Object.keys(r), i;
    o.length === 0 ? i = "^$" : i = o.map(function(u) {
      return ":" + u + ":";
    }).concat(Object.keys(s)).sort().reverse().map(function(u) {
      return e(u);
    }).join("|");
    var a = RegExp(i), c = RegExp(i, "g");
    return {
      defs: r,
      shortcuts: s,
      scanRE: a,
      replaceRE: c
    };
  }, pa;
}
var ha, u0;
function KHe() {
  if (u0) return ha;
  u0 = 1;
  var e = ZHe(), t = WHe(), n = GHe();
  return ha = function(s, o) {
    var i = {
      defs: {},
      shortcuts: {},
      enabled: []
    }, a = n(s.utils.assign({}, i, o || {}));
    s.renderer.rules.emoji = e, s.core.ruler.after(
      "linkify",
      "emoji",
      t(s, a.defs, a.shortcuts, a.scanRE, a.replaceRE)
    );
  }, ha;
}
var ga, d0;
function XHe() {
  if (d0) return ga;
  d0 = 1;
  var e = VHe, t = UHe(), n = KHe();
  return ga = function(s, o) {
    var i = {
      defs: e,
      shortcuts: t,
      enabled: []
    }, a = s.utils.assign({}, i, o || {});
    n(s, a);
  }, ga;
}
var YHe = XHe();
const JHe = /* @__PURE__ */ Ar(YHe);
var ma, f0;
function QHe() {
  if (f0) return ma;
  f0 = 1;
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
      var a, c = o[i];
      i === "className" && (i = "class"), a = s[r].attrIndex(i), a < 0 ? s[r].attrPush([i, c]) : s[r].attrs[a][1] = c;
    });
  }
  function n(r, s) {
    s ? s = Array.isArray(s) ? s : [s] : s = [], Object.freeze(s);
    var o = r.renderer.rules.link_open || this.defaultRender;
    r.renderer.rules.link_open = function(i, a, c, u, d) {
      var l = e(i[a], s), m = l && l.attrs;
      return m && t(a, i, m), o(i, a, c, u, d);
    };
  }
  return n.defaultRender = function(r, s, o, i, a) {
    return a.renderToken(r, s, o);
  }, ma = n, ma;
}
var eVe = QHe();
const Lm = /* @__PURE__ */ Ar(eVe);
var va, p0;
function tVe() {
  if (p0) return va;
  p0 = 1;
  var e = !0, t = !1, n = !1;
  va = function(g, b) {
    b && (e = !b.enabled, t = !!b.label, n = !!b.labelAfter), g.core.ruler.after("inline", "github-task-lists", function(h) {
      for (var w = h.tokens, k = 2; k < w.length; k++)
        o(w, k) && (i(w[k], h.Token), r(w[k - 2], "class", "task-list-item" + (e ? "" : " enabled")), r(w[s(w, k - 2)], "class", "contains-task-list"));
    });
  };
  function r(g, b, h) {
    var w = g.attrIndex(b), k = [b, h];
    w < 0 ? g.attrPush(k) : g.attrs[w] = k;
  }
  function s(g, b) {
    for (var h = g[b].level - 1, w = b - 1; w >= 0; w--)
      if (g[w].level === h)
        return w;
    return -1;
  }
  function o(g, b) {
    return l(g[b]) && m(g[b - 1]) && f(g[b - 2]) && v(g[b]);
  }
  function i(g, b) {
    if (g.children.unshift(a(g, b)), g.children[1].content = g.children[1].content.slice(3), g.content = g.content.slice(3), t)
      if (n) {
        g.children.pop();
        var h = "task-item-" + Math.ceil(Math.random() * (1e4 * 1e3) - 1e3);
        g.children[0].content = g.children[0].content.slice(0, -1) + ' id="' + h + '">', g.children.push(d(g.content, h, b));
      } else
        g.children.unshift(c(b)), g.children.push(u(b));
  }
  function a(g, b) {
    var h = new b("html_inline", "", 0), w = e ? ' disabled="" ' : "";
    return g.content.indexOf("[ ] ") === 0 ? h.content = '<input class="task-list-item-checkbox"' + w + 'type="checkbox">' : (g.content.indexOf("[x] ") === 0 || g.content.indexOf("[X] ") === 0) && (h.content = '<input class="task-list-item-checkbox" checked=""' + w + 'type="checkbox">'), h;
  }
  function c(g) {
    var b = new g("html_inline", "", 0);
    return b.content = "<label>", b;
  }
  function u(g) {
    var b = new g("html_inline", "", 0);
    return b.content = "</label>", b;
  }
  function d(g, b, h) {
    var w = new h("html_inline", "", 0);
    return w.content = '<label class="task-list-item-label" for="' + b + '">' + g + "</label>", w.attrs = [{ for: b }], w;
  }
  function l(g) {
    return g.type === "inline";
  }
  function m(g) {
    return g.type === "paragraph_open";
  }
  function f(g) {
    return g.type === "list_item_open";
  }
  function v(g) {
    return g.content.indexOf("[ ] ") === 0 || g.content.indexOf("[x] ") === 0 || g.content.indexOf("[X] ") === 0;
  }
  return va;
}
var nVe = tVe();
const rVe = /* @__PURE__ */ Ar(nVe);
var Ro = { exports: {} }, Fe = {}, Po = { exports: {} }, Yn = {}, h0;
function Om() {
  if (h0) return Yn;
  h0 = 1;
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
  return Yn.whiteList = e(), Yn.getDefaultWhiteList = e, Yn.onAttr = t, Yn.onIgnoreAttr = n, Yn.safeAttrValue = s, Yn;
}
var _a, g0;
function Rm() {
  return g0 || (g0 = 1, _a = {
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
  }), _a;
}
var ba, m0;
function oVe() {
  if (m0) return ba;
  m0 = 1;
  var e = Rm();
  function t(n, r) {
    n = e.trimRight(n), n[n.length - 1] !== ";" && (n += ";");
    var s = n.length, o = !1, i = 0, a = 0, c = "";
    function u() {
      if (!o) {
        var m = e.trim(n.slice(i, a)), f = m.indexOf(":");
        if (f !== -1) {
          var v = e.trim(m.slice(0, f)), g = e.trim(m.slice(f + 1));
          if (v) {
            var b = r(i, c.length, v, g, m);
            b && (c += b + "; ");
          }
        }
      }
      i = a + 1;
    }
    for (; a < s; a++) {
      var d = n[a];
      if (d === "/" && n[a + 1] === "*") {
        var l = n.indexOf("*/", a + 2);
        if (l === -1) break;
        a = l + 1, i = a + 1, o = !1;
      } else d === "(" ? o = !0 : d === ")" ? o = !1 : d === ";" ? o || u() : d === `
` && u();
    }
    return e.trim(c);
  }
  return ba = t, ba;
}
var ya, v0;
function sVe() {
  if (v0) return ya;
  v0 = 1;
  var e = Om(), t = oVe();
  Rm();
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
    var i = this, a = i.options, c = a.whiteList, u = a.onAttr, d = a.onIgnoreAttr, l = a.safeAttrValue, m = t(o, function(f, v, g, b, h) {
      var w = c[g], k = !1;
      if (w === !0 ? k = w : typeof w == "function" ? k = w(b) : w instanceof RegExp && (k = w.test(b)), k !== !0 && (k = !1), b = l(g, b), !!b) {
        var C = {
          position: v,
          sourcePosition: f,
          source: h,
          isWhite: k
        };
        if (k) {
          var A = u(g, b, C);
          return n(A) ? g + ":" + b : A;
        } else {
          var A = d(g, b, C);
          if (!n(A))
            return A;
        }
      }
    });
    return m;
  }, ya = s, ya;
}
var _0;
function Uc() {
  return _0 || (_0 = 1, function(e, t) {
    var n = Om(), r = sVe();
    function s(i, a) {
      var c = new r(a);
      return c.process(i);
    }
    t = e.exports = s, t.FilterCSS = r;
    for (var o in n) t[o] = n[o];
    typeof window < "u" && (window.filterCSS = e.exports);
  }(Po, Po.exports)), Po.exports;
}
var wa, b0;
function Nl() {
  return b0 || (b0 = 1, wa = {
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
  }), wa;
}
var y0;
function Pm() {
  if (y0) return Fe;
  y0 = 1;
  var e = Uc().FilterCSS, t = Uc().getDefaultWhiteList, n = Nl();
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
  function o(z, N, F) {
  }
  function i(z, N, F) {
  }
  function a(z, N, F) {
  }
  function c(z, N, F) {
  }
  function u(z) {
    return z.replace(l, "&lt;").replace(m, "&gt;");
  }
  function d(z, N, F, Z) {
    if (F = R(F), N === "href" || N === "src") {
      if (F = n.trim(F), F === "#") return "#";
      if (!(F.substr(0, 7) === "http://" || F.substr(0, 8) === "https://" || F.substr(0, 7) === "mailto:" || F.substr(0, 4) === "tel:" || F.substr(0, 11) === "data:image/" || F.substr(0, 6) === "ftp://" || F.substr(0, 2) === "./" || F.substr(0, 3) === "../" || F[0] === "#" || F[0] === "/"))
        return "";
    } else if (N === "background") {
      if (w.lastIndex = 0, w.test(F))
        return "";
    } else if (N === "style") {
      if (k.lastIndex = 0, k.test(F) || (C.lastIndex = 0, C.test(F) && (w.lastIndex = 0, w.test(F))))
        return "";
      Z !== !1 && (Z = Z || s, F = Z.process(F));
    }
    return F = B(F), F;
  }
  var l = /</g, m = />/g, f = /"/g, v = /&quot;/g, g = /&#([a-zA-Z0-9]*);?/gim, b = /&colon;?/gim, h = /&newline;?/gim, w = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, k = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, C = /u\s*r\s*l\s*\(.*/gi;
  function A(z) {
    return z.replace(f, "&quot;");
  }
  function E(z) {
    return z.replace(v, '"');
  }
  function $(z) {
    return z.replace(g, function(F, Z) {
      return Z[0] === "x" || Z[0] === "X" ? String.fromCharCode(parseInt(Z.substr(1), 16)) : String.fromCharCode(parseInt(Z, 10));
    });
  }
  function M(z) {
    return z.replace(b, ":").replace(h, " ");
  }
  function O(z) {
    for (var N = "", F = 0, Z = z.length; F < Z; F++)
      N += z.charCodeAt(F) < 32 ? " " : z.charAt(F);
    return n.trim(N);
  }
  function R(z) {
    return z = E(z), z = $(z), z = M(z), z = O(z), z;
  }
  function B(z) {
    return z = A(z), z = u(z), z;
  }
  function V() {
    return "";
  }
  function re(z, N) {
    typeof N != "function" && (N = function() {
    });
    var F = !Array.isArray(z);
    function Z(le) {
      return F ? !0 : n.indexOf(z, le) !== -1;
    }
    var W = [], pe = !1;
    return {
      onIgnoreTag: function(le, Ae, Oe) {
        if (Z(le))
          if (Oe.isClosing) {
            var ze = "[/removed]", Qe = Oe.position + ze.length;
            return W.push([
              pe !== !1 ? pe : Oe.position,
              Qe
            ]), pe = !1, ze;
          } else
            return pe || (pe = Oe.position), "[removed]";
        else
          return N(le, Ae, Oe);
      },
      remove: function(le) {
        var Ae = "", Oe = 0;
        return n.forEach(W, function(ze) {
          Ae += le.slice(Oe, ze[0]), Oe = ze[1];
        }), Ae += le.slice(Oe), Ae;
      }
    };
  }
  function P(z) {
    for (var N = "", F = 0; F < z.length; ) {
      var Z = z.indexOf("<!--", F);
      if (Z === -1) {
        N += z.slice(F);
        break;
      }
      N += z.slice(F, Z);
      var W = z.indexOf("-->", Z);
      if (W === -1)
        break;
      F = W + 3;
    }
    return N;
  }
  function U(z) {
    var N = z.split("");
    return N = N.filter(function(F) {
      var Z = F.charCodeAt(0);
      return Z === 127 ? !1 : Z <= 31 ? Z === 10 || Z === 13 : !0;
    }), N.join("");
  }
  return Fe.whiteList = r(), Fe.getDefaultWhiteList = r, Fe.onTag = o, Fe.onIgnoreTag = i, Fe.onTagAttr = a, Fe.onIgnoreTagAttr = c, Fe.safeAttrValue = d, Fe.escapeHtml = u, Fe.escapeQuote = A, Fe.unescapeQuote = E, Fe.escapeHtmlEntities = $, Fe.escapeDangerHtml5Entities = M, Fe.clearNonPrintableCharacter = O, Fe.friendlyAttrValue = R, Fe.escapeAttrValue = B, Fe.onIgnoreTagStripAll = V, Fe.StripTagBody = re, Fe.stripCommentTag = P, Fe.stripBlankChar = U, Fe.attributeWrapSign = '"', Fe.cssFilter = s, Fe.getDefaultCSSWhiteList = t, Fe;
}
var Bo = {}, w0;
function Bm() {
  if (w0) return Bo;
  w0 = 1;
  var e = Nl();
  function t(l) {
    var m = e.spaceIndex(l), f;
    return m === -1 ? f = l.slice(1, -1) : f = l.slice(1, m + 1), f = e.trim(f).toLowerCase(), f.slice(0, 1) === "/" && (f = f.slice(1)), f.slice(-1) === "/" && (f = f.slice(0, -1)), f;
  }
  function n(l) {
    return l.slice(0, 2) === "</";
  }
  function r(l, m, f) {
    var v = "", g = 0, b = !1, h = !1, w = 0, k = l.length, C = "", A = "";
    e: for (w = 0; w < k; w++) {
      var E = l.charAt(w);
      if (b === !1) {
        if (E === "<") {
          b = w;
          continue;
        }
      } else if (h === !1) {
        if (E === "<") {
          v += f(l.slice(g, w)), b = w, g = w;
          continue;
        }
        if (E === ">" || w === k - 1) {
          v += f(l.slice(g, b)), A = l.slice(b, w + 1), C = t(A), v += m(
            b,
            v.length,
            C,
            A,
            n(A)
          ), g = w + 1, b = !1;
          continue;
        }
        if (E === '"' || E === "'")
          for (var $ = 1, M = l.charAt(w - $); M.trim() === "" || M === "="; ) {
            if (M === "=") {
              h = E;
              continue e;
            }
            M = l.charAt(w - ++$);
          }
      } else if (E === h) {
        h = !1;
        continue;
      }
    }
    return g < k && (v += f(l.substr(g))), v;
  }
  var s = /[^a-zA-Z0-9\\_:.-]/gim;
  function o(l, m) {
    var f = 0, v = 0, g = [], b = !1, h = l.length;
    function w($, M) {
      if ($ = e.trim($), $ = $.replace(s, "").toLowerCase(), !($.length < 1)) {
        var O = m($, M || "");
        O && g.push(O);
      }
    }
    for (var k = 0; k < h; k++) {
      var C = l.charAt(k), A, E;
      if (b === !1 && C === "=") {
        b = l.slice(f, k), f = k + 1, v = l.charAt(f) === '"' || l.charAt(f) === "'" ? f : a(l, k + 1);
        continue;
      }
      if (b !== !1 && k === v) {
        if (E = l.indexOf(C, k + 1), E === -1)
          break;
        A = e.trim(l.slice(v + 1, E)), w(b, A), b = !1, k = E, f = k + 1;
        continue;
      }
      if (/\s|\n|\t/.test(C))
        if (l = l.replace(/\s|\n|\t/g, " "), b === !1)
          if (E = i(l, k), E === -1) {
            A = e.trim(l.slice(f, k)), w(A), b = !1, f = k + 1;
            continue;
          } else {
            k = E - 1;
            continue;
          }
        else if (E = c(l, k - 1), E === -1) {
          A = e.trim(l.slice(f, k)), A = d(A), w(b, A), b = !1, f = k + 1;
          continue;
        } else
          continue;
    }
    return f < l.length && (b === !1 ? w(l.slice(f)) : w(b, d(e.trim(l.slice(f))))), e.trim(g.join(" "));
  }
  function i(l, m) {
    for (; m < l.length; m++) {
      var f = l[m];
      if (f !== " ")
        return f === "=" ? m : -1;
    }
  }
  function a(l, m) {
    for (; m < l.length; m++) {
      var f = l[m];
      if (f !== " ")
        return f === "'" || f === '"' ? m : -1;
    }
  }
  function c(l, m) {
    for (; m > 0; m--) {
      var f = l[m];
      if (f !== " ")
        return f === "=" ? m : -1;
    }
  }
  function u(l) {
    return l[0] === '"' && l[l.length - 1] === '"' || l[0] === "'" && l[l.length - 1] === "'";
  }
  function d(l) {
    return u(l) ? l.substr(1, l.length - 2) : l;
  }
  return Bo.parseTag = r, Bo.parseAttr = o, Bo;
}
var ka, k0;
function iVe() {
  if (k0) return ka;
  k0 = 1;
  var e = Uc().FilterCSS, t = Pm(), n = Bm(), r = n.parseTag, s = n.parseAttr, o = Nl();
  function i(l) {
    return l == null;
  }
  function a(l) {
    var m = o.spaceIndex(l);
    if (m === -1)
      return {
        html: "",
        closing: l[l.length - 2] === "/"
      };
    l = o.trim(l.slice(m + 1, -1));
    var f = l[l.length - 1] === "/";
    return f && (l = o.trim(l.slice(0, -1))), {
      html: l,
      closing: f
    };
  }
  function c(l) {
    var m = {};
    for (var f in l)
      m[f] = l[f];
    return m;
  }
  function u(l) {
    var m = {};
    for (var f in l)
      Array.isArray(l[f]) ? m[f.toLowerCase()] = l[f].map(function(v) {
        return v.toLowerCase();
      }) : m[f.toLowerCase()] = l[f];
    return m;
  }
  function d(l) {
    l = c(l || {}), l.stripIgnoreTag && (l.onIgnoreTag && console.error(
      'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
    ), l.onIgnoreTag = t.onIgnoreTagStripAll), l.whiteList || l.allowList ? l.whiteList = u(l.whiteList || l.allowList) : l.whiteList = t.whiteList, this.attributeWrapSign = l.singleQuotedAttributeValue === !0 ? "'" : t.attributeWrapSign, l.onTag = l.onTag || t.onTag, l.onTagAttr = l.onTagAttr || t.onTagAttr, l.onIgnoreTag = l.onIgnoreTag || t.onIgnoreTag, l.onIgnoreTagAttr = l.onIgnoreTagAttr || t.onIgnoreTagAttr, l.safeAttrValue = l.safeAttrValue || t.safeAttrValue, l.escapeHtml = l.escapeHtml || t.escapeHtml, this.options = l, l.css === !1 ? this.cssFilter = !1 : (l.css = l.css || {}, this.cssFilter = new e(l.css));
  }
  return d.prototype.process = function(l) {
    if (l = l || "", l = l.toString(), !l) return "";
    var m = this, f = m.options, v = f.whiteList, g = f.onTag, b = f.onIgnoreTag, h = f.onTagAttr, w = f.onIgnoreTagAttr, k = f.safeAttrValue, C = f.escapeHtml, A = m.attributeWrapSign, E = m.cssFilter;
    f.stripBlankChar && (l = t.stripBlankChar(l)), f.allowCommentTag || (l = t.stripCommentTag(l));
    var $ = !1;
    f.stripIgnoreTagBody && ($ = t.StripTagBody(
      f.stripIgnoreTagBody,
      b
    ), b = $.onIgnoreTag);
    var M = r(
      l,
      function(O, R, B, V, re) {
        var P = {
          sourcePosition: O,
          position: R,
          isClosing: re,
          isWhite: Object.prototype.hasOwnProperty.call(v, B)
        }, U = g(B, V, P);
        if (!i(U)) return U;
        if (P.isWhite) {
          if (P.isClosing)
            return "</" + B + ">";
          var z = a(V), N = v[B], F = s(z.html, function(Z, W) {
            var pe = o.indexOf(N, Z) !== -1, le = h(B, Z, W, pe);
            return i(le) ? pe ? (W = k(B, Z, W, E), W ? Z + "=" + A + W + A : Z) : (le = w(B, Z, W, pe), i(le) ? void 0 : le) : le;
          });
          return V = "<" + B, F && (V += " " + F), z.closing && (V += " /"), V += ">", V;
        } else
          return U = b(B, V, P), i(U) ? C(V) : U;
      },
      C
    );
    return $ && (M = $.remove(M)), M;
  }, ka = d, ka;
}
var C0;
function aVe() {
  return C0 || (C0 = 1, function(e, t) {
    var n = Pm(), r = Bm(), s = iVe();
    function o(a, c) {
      var u = new s(c);
      return u.process(a);
    }
    t = e.exports = o, t.filterXSS = o, t.FilterXSS = s, function() {
      for (var a in n)
        t[a] = n[a];
      for (var c in r)
        t[c] = r[c];
    }(), typeof window < "u" && (window.filterXSS = e.exports);
    function i() {
      return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
    }
    i() && (self.filterXSS = e.exports);
  }(Ro, Ro.exports)), Ro.exports;
}
var Zo = aVe();
const cVe = /* @__PURE__ */ Ar(Zo), lVe = /@\[youtube]\(([\w-]{11}(?:\?.*)?)\)/im, uVe = /^https:\/\/(?:www\.)?(youtube\.com|youtube-nocookie\.com)\/embed\/[\w-]{11}(?:\?.*)?$/i, dVe = (e, t) => {
  const n = {
    width: "100%",
    title: "YouTube video player",
    nocookie: !0,
    ...t
  }, r = (o, i) => {
    const { pos: a, src: c } = o;
    if (c.charCodeAt(a) !== 64) return !1;
    const u = lVe.exec(c.slice(a));
    if (!u) return !1;
    if (!i) {
      const d = o.push("youtube_embed", "", 0);
      d.meta = { videoId: u[1] };
    }
    return o.pos += u[0].length, !0;
  }, s = n.nocookie ? "https://www.youtube-nocookie.com/embed/" : "https://www.youtube.com/embed/";
  e.inline.ruler.before("link", "youtube_embed", r), e.renderer.rules.youtube_embed = (o, i) => {
    const { videoId: a } = o[i].meta;
    return `<iframe ${[
      `width="${n.width}"`,
      ...n.height ? [`height="${n.height}"`] : [],
      `src="${s}${a}"`,
      `title="${e.utils.escapeHtml(n.title)}"`,
      'frameborder="0"',
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"',
      'referrerpolicy="strict-origin-when-cross-origin"',
      "allowfullscreen"
    ].join(" ")}></iframe>`;
  };
}, fVe = { class: "n8n-markdown" }, pVe = ["innerHTML"], hVe = /* @__PURE__ */ H({
  __name: "Markdown",
  props: {
    content: { default: "" },
    withMultiBreaks: { type: Boolean, default: !1 },
    images: { default: () => [] },
    loading: { type: Boolean, default: !1 },
    loadingBlocks: { default: 2 },
    loadingRows: { default: 3 },
    theme: { default: "markdown" },
    options: { default: () => ({
      markdown: {
        html: !1,
        linkify: !0,
        typographer: !0,
        breaks: !0
      },
      linkAttributes: {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      },
      tasklists: {
        enabled: !0,
        label: !0,
        labelAfter: !0
      },
      youtube: {}
    }) }
  },
  emits: ["markdown-click", "update-content"],
  setup(e, { emit: t }) {
    const n = e, r = D(void 0), { options: s } = n, o = new Im(s.markdown).use(Lm, s.linkAttributes).use(JHe).use(rVe, s.tasklists).use(dVe, s.youtube), i = {
      ...Zo.whiteList,
      label: ["class", "for"],
      iframe: [
        "width",
        "height",
        "src",
        "title",
        "frameborder",
        "allow",
        "referrerpolicy",
        "allowfullscreen"
      ]
    }, a = T(() => {
      if (!n.content)
        return "";
      const f = {};
      n.images && n.images.forEach((w) => {
        w && (f[w.id] = w.url);
      });
      const v = new RegExp("fileId:([0-9]+)");
      let g = n.content;
      n.withMultiBreaks && (g = g.replaceAll(`

`, `
&nbsp;
`));
      const b = o.render(g);
      return cVe(b, {
        onTagAttr(w, k, C) {
          if (w === "img" && k === "src") {
            if (C.match(v)) {
              const $ = C.split("fileId:")[1], M = Zo.friendlyAttrValue(f[$]);
              return M ? `src=${M}` : "";
            }
            const E = C.split("#")[0].match(/\.(jpeg|jpg|gif|png|webp)$/) !== null && C.startsWith("/static/");
            if (!C.startsWith("https://") && !E)
              return "";
          }
          if (w === "iframe")
            return k === "src" ? uVe.test(C) ? `src=${Zo.friendlyAttrValue(C)}` : "" : void 0;
        },
        onTag(w, k) {
          if (w === "img" && k.includes('alt="workflow-screenshot"'))
            return "";
        },
        onIgnoreTag(w, k) {
          if (w === "input" && k.includes('type="checkbox"'))
            return k;
        },
        whiteList: i
      });
    }), c = t, u = (f) => {
      let v = null;
      if (f.target instanceof HTMLAnchorElement && (v = f.target), f.target instanceof HTMLElement && f.target.matches("a *")) {
        const g = f.target.closest("a");
        g && (v = g);
      }
      v && c("markdown-click", v, f);
    }, d = async (f) => {
      var v;
      if (f.target instanceof HTMLInputElement && f.target.type === "checkbox") {
        const g = (v = r.value) == null ? void 0 : v.querySelectorAll('input[type="checkbox"]');
        if (g) {
          const b = Array.from(g).indexOf(f.target);
          b !== -1 && m(b);
        }
      }
    }, l = (f) => {
      f.target instanceof HTMLInputElement && f.stopPropagation();
    }, m = (f) => {
      const v = n.content;
      if (!v)
        return;
      const g = lO(v, f);
      c("update-content", g);
    };
    return (f, v) => (y(), x("div", fVe, [
      f.loading ? (y(), x("div", {
        key: 1,
        class: j(f.$style.markdown)
      }, [
        (y(!0), x(Pe, null, Je(f.loadingBlocks, (g, b) => (y(), x("div", { key: b }, [
          ue(_(uT), {
            loading: f.loading,
            rows: f.loadingRows,
            animated: "",
            variant: "p"
          }, null, 8, ["loading", "rows"]),
          p("div", {
            class: j(f.$style.spacer)
          }, null, 2)
        ]))), 128))
      ], 2)) : (y(), x("div", {
        key: 0,
        ref_key: "editor",
        ref: r,
        class: j(f.$style[f.theme]),
        onClick: u,
        onMousedown: l,
        onChange: d,
        innerHTML: a.value
      }, null, 42, pVe))
    ]));
  }
}), gVe = "_markdown_17ukb_1", mVe = "_label_17ukb_43", vVe = "_sticky_17ukb_64", _Ve = "_spacer_17ukb_160", bVe = {
  markdown: gVe,
  label: mVe,
  sticky: vVe,
  spacer: _Ve
}, yVe = {
  $style: bVe
}, wVe = /* @__PURE__ */ qt(hVe, [["__cssModules", yVe]]), x0 = {
  right: "ew-resize",
  top: "ns-resize",
  bottom: "ns-resize",
  left: "ew-resize",
  topLeft: "nw-resize",
  topRight: "ne-resize",
  bottomLeft: "sw-resize",
  bottomRight: "se-resize"
};
({
  // @ts-expect-error TS doesn't understand this but it works
  ...qd.props
  // <a> element "props" are passed as attributes
});
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
function Gr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gr = function(t) {
    return typeof t;
  } : Gr = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gr(e);
}
function kVe(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function CVe(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function xVe(e, t, n) {
  return t && CVe(e.prototype, t), e;
}
function SVe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    }))), r.forEach(function(s) {
      SVe(e, s, n[s]);
    });
  }
  return e;
}
function zm(e, t) {
  return $Ve(e) || TVe(e, t) || LVe();
}
function EVe(e) {
  return AVe(e) || MVe(e) || IVe();
}
function AVe(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
    return n;
  }
}
function $Ve(e) {
  if (Array.isArray(e)) return e;
}
function MVe(e) {
  if (Symbol.iterator in Object(e) || Object.prototype.toString.call(e) === "[object Arguments]") return Array.from(e);
}
function TVe(e, t) {
  var n = [], r = !0, s = !1, o = void 0;
  try {
    for (var i = e[Symbol.iterator](), a; !(r = (a = i.next()).done) && (n.push(a.value), !(t && n.length === t)); r = !0)
      ;
  } catch (c) {
    s = !0, o = c;
  } finally {
    try {
      !r && i.return != null && i.return();
    } finally {
      if (s) throw o;
    }
  }
  return n;
}
function IVe() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function LVe() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
var S0 = function() {
}, ql = {}, Dm = {}, OVe = null, Nm = {
  mark: S0,
  measure: S0
};
try {
  typeof window < "u" && (ql = window), typeof document < "u" && (Dm = document), typeof MutationObserver < "u" && (OVe = MutationObserver), typeof performance < "u" && (Nm = performance);
} catch {
}
var RVe = ql.navigator || {}, E0 = RVe.userAgent, A0 = E0 === void 0 ? "" : E0, $s = ql, gt = Dm, zo = Nm;
$s.document;
var Fl = !!gt.documentElement && !!gt.head && typeof gt.addEventListener == "function" && typeof gt.createElement == "function", PVe = ~A0.indexOf("MSIE") || ~A0.indexOf("Trident/"), Cn = "___FONT_AWESOME___", Zc = 16, qm = "fa", Fm = "svg-inline--fa", jm = "data-fa-i2svg";
(function() {
  try {
    return !0;
  } catch {
    return !1;
  }
})();
var Ca = {
  GROUP: "group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Hm = $s.FontAwesomeConfig || {};
function BVe(e) {
  var t = gt.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function zVe(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (gt && typeof gt.querySelector == "function") {
  var DVe = [["data-family-prefix", "familyPrefix"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  DVe.forEach(function(e) {
    var t = zm(e, 2), n = t[0], r = t[1], s = zVe(BVe(n));
    s != null && (Hm[r] = s);
  });
}
var NVe = {
  familyPrefix: qm,
  replacementClass: Fm,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
}, Wc = Se({}, NVe, Hm);
Wc.autoReplaceSvg || (Wc.observeMutations = !1);
var dt = Se({}, Wc);
$s.FontAwesomeConfig = dt;
var xn = $s || {};
xn[Cn] || (xn[Cn] = {});
xn[Cn].styles || (xn[Cn].styles = {});
xn[Cn].hooks || (xn[Cn].hooks = {});
xn[Cn].shims || (xn[Cn].shims = []);
var ln = xn[Cn], qVe = [], FVe = function e() {
  gt.removeEventListener("DOMContentLoaded", e), Gc = 1, qVe.map(function(t) {
    return t();
  });
}, Gc = !1;
Fl && (Gc = (gt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(gt.readyState), Gc || gt.addEventListener("DOMContentLoaded", FVe));
var jl = "pending", Vm = "settled", ns = "fulfilled", rs = "rejected", jVe = function() {
}, Um = typeof global < "u" && typeof global.process < "u" && typeof global.process.emit == "function", HVe = typeof setImmediate > "u" ? setTimeout : setImmediate, Hr = [], Kc;
function VVe() {
  for (var e = 0; e < Hr.length; e++)
    Hr[e][0](Hr[e][1]);
  Hr = [], Kc = !1;
}
function os(e, t) {
  Hr.push([e, t]), Kc || (Kc = !0, HVe(VVe, 0));
}
function UVe(e, t) {
  function n(s) {
    Hl(t, s);
  }
  function r(s) {
    co(t, s);
  }
  try {
    e(n, r);
  } catch (s) {
    r(s);
  }
}
function Zm(e) {
  var t = e.owner, n = t._state, r = t._data, s = e[n], o = e.then;
  if (typeof s == "function") {
    n = ns;
    try {
      r = s(r);
    } catch (i) {
      co(o, i);
    }
  }
  Wm(o, r) || (n === ns && Hl(o, r), n === rs && co(o, r));
}
function Wm(e, t) {
  var n;
  try {
    if (e === t)
      throw new TypeError("A promises callback cannot return that same promise.");
    if (t && (typeof t == "function" || Gr(t) === "object")) {
      var r = t.then;
      if (typeof r == "function")
        return r.call(t, function(s) {
          n || (n = !0, t === s ? Gm(e, s) : Hl(e, s));
        }, function(s) {
          n || (n = !0, co(e, s));
        }), !0;
    }
  } catch (s) {
    return n || co(e, s), !0;
  }
  return !1;
}
function Hl(e, t) {
  (e === t || !Wm(e, t)) && Gm(e, t);
}
function Gm(e, t) {
  e._state === jl && (e._state = Vm, e._data = t, os(ZVe, e));
}
function co(e, t) {
  e._state === jl && (e._state = Vm, e._data = t, os(WVe, e));
}
function Km(e) {
  e._then = e._then.forEach(Zm);
}
function ZVe(e) {
  e._state = ns, Km(e);
}
function WVe(e) {
  e._state = rs, Km(e), !e._handled && Um && global.process.emit("unhandledRejection", e._data, e);
}
function GVe(e) {
  global.process.emit("rejectionHandled", e);
}
function Bt(e) {
  if (typeof e != "function")
    throw new TypeError("Promise resolver " + e + " is not a function");
  if (!(this instanceof Bt))
    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
  this._then = [], UVe(e, this);
}
Bt.prototype = {
  constructor: Bt,
  _state: jl,
  _then: null,
  _data: void 0,
  _handled: !1,
  then: function(t, n) {
    var r = {
      owner: this,
      then: new this.constructor(jVe),
      fulfilled: t,
      rejected: n
    };
    return (n || t) && !this._handled && (this._handled = !0, this._state === rs && Um && os(GVe, this)), this._state === ns || this._state === rs ? os(Zm, r) : this._then.push(r), r.then;
  },
  catch: function(t) {
    return this.then(null, t);
  }
};
Bt.all = function(e) {
  if (!Array.isArray(e))
    throw new TypeError("You must pass an array to Promise.all().");
  return new Bt(function(t, n) {
    var r = [], s = 0;
    function o(c) {
      return s++, function(u) {
        r[c] = u, --s || t(r);
      };
    }
    for (var i = 0, a; i < e.length; i++)
      a = e[i], a && typeof a.then == "function" ? a.then(o(i), n) : r[i] = a;
    s || t(r);
  });
};
Bt.race = function(e) {
  if (!Array.isArray(e))
    throw new TypeError("You must pass an array to Promise.race().");
  return new Bt(function(t, n) {
    for (var r = 0, s; r < e.length; r++)
      s = e[r], s && typeof s.then == "function" ? s.then(t, n) : t(s);
  });
};
Bt.resolve = function(e) {
  return e && Gr(e) === "object" && e.constructor === Bt ? e : new Bt(function(t) {
    t(e);
  });
};
Bt.reject = function(e) {
  return new Bt(function(t, n) {
    n(e);
  });
};
var fr = Zc, Dn = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function KVe(e) {
  if (!(!e || !Fl)) {
    var t = gt.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = gt.head.childNodes, r = null, s = n.length - 1; s > -1; s--) {
      var o = n[s], i = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (r = o);
    }
    return gt.head.insertBefore(t, r), e;
  }
}
var XVe = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ss() {
  for (var e = 12, t = ""; e-- > 0; )
    t += XVe[Math.random() * 62 | 0];
  return t;
}
function Xm(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function YVe(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(Xm(e[n]), '" ');
  }, "").trim();
}
function Vl(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n], ";");
  }, "");
}
function Ul(e) {
  return e.size !== Dn.size || e.x !== Dn.x || e.y !== Dn.y || e.rotate !== Dn.rotate || e.flipX || e.flipY;
}
function Ym(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, s = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), a = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(o, " ").concat(i, " ").concat(a)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: s,
    inner: c,
    path: u
  };
}
function JVe(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? Zc : n, s = e.height, o = s === void 0 ? Zc : s, i = "";
  return PVe ? i += "translate(".concat(t.x / fr - r / 2, "em, ").concat(t.y / fr - o / 2, "em) ") : i += "translate(calc(-50% + ".concat(t.x / fr, "em), calc(-50% + ").concat(t.y / fr, "em)) "), i += "scale(".concat(t.size / fr * (t.flipX ? -1 : 1), ", ").concat(t.size / fr * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var xa = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function $0(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function QVe(e) {
  return e.tag === "g" ? e.children : [e];
}
function eUe(e) {
  var t = e.children, n = e.attributes, r = e.main, s = e.mask, o = e.maskId, i = e.transform, a = r.width, c = r.icon, u = s.width, d = s.icon, l = Ym({
    transform: i,
    containerWidth: u,
    iconWidth: a
  }), m = {
    tag: "rect",
    attributes: Se({}, xa, {
      fill: "white"
    })
  }, f = c.children ? {
    children: c.children.map($0)
  } : {}, v = {
    tag: "g",
    attributes: Se({}, l.inner),
    children: [$0(Se({
      tag: c.tag,
      attributes: Se({}, c.attributes, l.path)
    }, f))]
  }, g = {
    tag: "g",
    attributes: Se({}, l.outer),
    children: [v]
  }, b = "mask-".concat(o || ss()), h = "clip-".concat(o || ss()), w = {
    tag: "mask",
    attributes: Se({}, xa, {
      id: b,
      maskUnits: "userSpaceOnUse",
      maskContentUnits: "userSpaceOnUse"
    }),
    children: [m, g]
  }, k = {
    tag: "defs",
    children: [{
      tag: "clipPath",
      attributes: {
        id: h
      },
      children: QVe(d)
    }, w]
  };
  return t.push(k, {
    tag: "rect",
    attributes: Se({
      fill: "currentColor",
      "clip-path": "url(#".concat(h, ")"),
      mask: "url(#".concat(b, ")")
    }, xa)
  }), {
    children: t,
    attributes: n
  };
}
function tUe(e) {
  var t = e.children, n = e.attributes, r = e.main, s = e.transform, o = e.styles, i = Vl(o);
  if (i.length > 0 && (n.style = i), Ul(s)) {
    var a = Ym({
      transform: s,
      containerWidth: r.width,
      iconWidth: r.width
    });
    t.push({
      tag: "g",
      attributes: Se({}, a.outer),
      children: [{
        tag: "g",
        attributes: Se({}, a.inner),
        children: [{
          tag: r.icon.tag,
          children: r.icon.children,
          attributes: Se({}, r.icon.attributes, a.path)
        }]
      }]
    });
  } else
    t.push(r.icon);
  return {
    children: t,
    attributes: n
  };
}
function nUe(e) {
  var t = e.children, n = e.main, r = e.mask, s = e.attributes, o = e.styles, i = e.transform;
  if (Ul(i) && n.found && !r.found) {
    var a = n.width, c = n.height, u = {
      x: a / c / 2,
      y: 0.5
    };
    s.style = Vl(Se({}, o, {
      "transform-origin": "".concat(u.x + i.x / 16, "em ").concat(u.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: s,
    children: t
  }];
}
function rUe(e) {
  var t = e.prefix, n = e.iconName, r = e.children, s = e.attributes, o = e.symbol, i = o === !0 ? "".concat(t, "-").concat(dt.familyPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: Se({}, s, {
        id: i
      }),
      children: r
    }]
  }];
}
function oUe(e) {
  var t = e.icons, n = t.main, r = t.mask, s = e.prefix, o = e.iconName, i = e.transform, a = e.symbol, c = e.title, u = e.maskId, d = e.titleId, l = e.extra, m = e.watchable, f = m === void 0 ? !1 : m, v = r.found ? r : n, g = v.width, b = v.height, h = s === "fak", w = h ? "" : "fa-w-".concat(Math.ceil(g / b * 16)), k = [dt.replacementClass, o ? "".concat(dt.familyPrefix, "-").concat(o) : "", w].filter(function(R) {
    return l.classes.indexOf(R) === -1;
  }).filter(function(R) {
    return R !== "" || !!R;
  }).concat(l.classes).join(" "), C = {
    children: [],
    attributes: Se({}, l.attributes, {
      "data-prefix": s,
      "data-icon": o,
      class: k,
      role: l.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(g, " ").concat(b)
    })
  }, A = h && !~l.classes.indexOf("fa-fw") ? {
    width: "".concat(g / b * 16 * 0.0625, "em")
  } : {};
  f && (C.attributes[jm] = ""), c && C.children.push({
    tag: "title",
    attributes: {
      id: C.attributes["aria-labelledby"] || "title-".concat(d || ss())
    },
    children: [c]
  });
  var E = Se({}, C, {
    prefix: s,
    iconName: o,
    main: n,
    mask: r,
    maskId: u,
    transform: i,
    symbol: a,
    styles: Se({}, A, l.styles)
  }), $ = r.found && n.found ? eUe(E) : tUe(E), M = $.children, O = $.attributes;
  return E.children = M, E.attributes = O, a ? rUe(E) : nUe(E);
}
function sUe(e) {
  var t = e.content, n = e.width, r = e.height, s = e.transform, o = e.title, i = e.extra, a = e.watchable, c = a === void 0 ? !1 : a, u = Se({}, i.attributes, o ? {
    title: o
  } : {}, {
    class: i.classes.join(" ")
  });
  c && (u[jm] = "");
  var d = Se({}, i.styles);
  Ul(s) && (d.transform = JVe({
    transform: s,
    width: n,
    height: r
  }), d["-webkit-transform"] = d.transform);
  var l = Vl(d);
  l.length > 0 && (u.style = l);
  var m = [];
  return m.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), o && m.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), m;
}
dt.measurePerformance && zo && zo.mark && zo.measure;
var Sa = function(t, n, r, s) {
  var o = Object.keys(t), i = o.length, a = n, c, u, d;
  for (r === void 0 ? (c = 1, d = t[o[0]]) : (c = 0, d = r); c < i; c++)
    u = o[c], d = a(d, t[u], u, t);
  return d;
};
function Jm(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, s = r === void 0 ? !1 : r, o = Object.keys(t).reduce(function(i, a) {
    var c = t[a], u = !!c.icon;
    return u ? i[c.iconName] = c.icon : i[a] = c, i;
  }, {});
  typeof ln.hooks.addPack == "function" && !s ? ln.hooks.addPack(e, o) : ln.styles[e] = Se({}, ln.styles[e] || {}, o), e === "fas" && Jm("fa", t);
}
var M0 = ln.styles, iUe = ln.shims, Qm = function() {
  var t = function(s) {
    return Sa(M0, function(o, i, a) {
      return o[a] = Sa(i, s, {}), o;
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
  var n = "far" in M0;
  Sa(iUe, function(r, s) {
    var o = s[0], i = s[1], a = s[2];
    return i === "far" && !n && (i = "fas"), r[o] = {
      prefix: i,
      iconName: a
    }, r;
  }, {});
};
Qm();
ln.styles;
function T0(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
function ev(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, s = e.children, o = s === void 0 ? [] : s;
  return typeof e == "string" ? Xm(e) : "<".concat(t, " ").concat(YVe(r), ">").concat(o.map(ev).join(""), "</").concat(t, ">");
}
var aUe = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t ? t.toLowerCase().split(" ").reduce(function(r, s) {
    var o = s.toLowerCase().split("-"), i = o[0], a = o.slice(1).join("-");
    if (i && a === "h")
      return r.flipX = !0, r;
    if (i && a === "v")
      return r.flipY = !0, r;
    if (a = parseFloat(a), isNaN(a))
      return r;
    switch (i) {
      case "grow":
        r.size = r.size + a;
        break;
      case "shrink":
        r.size = r.size - a;
        break;
      case "left":
        r.x = r.x - a;
        break;
      case "right":
        r.x = r.x + a;
        break;
      case "up":
        r.y = r.y - a;
        break;
      case "down":
        r.y = r.y + a;
        break;
      case "rotate":
        r.rotate = r.rotate + a;
        break;
    }
    return r;
  }, n) : n;
};
function Xc(e) {
  this.name = "MissingIcon", this.message = e || "Icon unavailable", this.stack = new Error().stack;
}
Xc.prototype = Object.create(Error.prototype);
Xc.prototype.constructor = Xc;
var Ms = {
  fill: "currentColor"
}, tv = {
  attributeType: "XML",
  repeatCount: "indefinite",
  dur: "2s"
};
Se({}, Ms, {
  d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
});
var Zl = Se({}, tv, {
  attributeName: "opacity"
});
Se({}, Ms, {
  cx: "256",
  cy: "364",
  r: "28"
}), Se({}, tv, {
  attributeName: "r",
  values: "28;14;28;28;14;28;"
}), Se({}, Zl, {
  values: "1;0;1;1;0;1;"
});
Se({}, Ms, {
  opacity: "1",
  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
}), Se({}, Zl, {
  values: "1;0;0;0;0;1;"
});
Se({}, Ms, {
  opacity: "0",
  d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
}), Se({}, Zl, {
  values: "0;0;1;1;0;0;"
});
ln.styles;
function I0(e) {
  var t = e[0], n = e[1], r = e.slice(4), s = zm(r, 1), o = s[0], i = null;
  return Array.isArray(o) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(dt.familyPrefix, "-").concat(Ca.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(dt.familyPrefix, "-").concat(Ca.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(dt.familyPrefix, "-").concat(Ca.PRIMARY),
        fill: "currentColor",
        d: o[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: o
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
ln.styles;
var cUe = `svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;
function lUe() {
  var e = qm, t = Fm, n = dt.familyPrefix, r = dt.replacementClass, s = cUe;
  if (n !== e || r !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), a = new RegExp("\\.".concat(t), "g");
    s = s.replace(o, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(a, ".".concat(r));
  }
  return s;
}
var uUe = /* @__PURE__ */ function() {
  function e() {
    kVe(this, e), this.definitions = {};
  }
  return xVe(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, s = new Array(r), o = 0; o < r; o++)
        s[o] = arguments[o];
      var i = s.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(a) {
        n.definitions[a] = Se({}, n.definitions[a] || {}, i[a]), Jm(a, i[a]), Qm();
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
        var i = s[o], a = i.prefix, c = i.iconName, u = i.icon;
        n[a] || (n[a] = {}), n[a][c] = u;
      }), n;
    }
  }]), e;
}();
function nv() {
  dt.autoAddCss && !O0 && (KVe(lUe()), O0 = !0);
}
function rv(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return ev(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (Fl) {
        var r = gt.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function L0(e) {
  var t = e.prefix, n = t === void 0 ? "fa" : t, r = e.iconName;
  if (r)
    return T0(fUe.definitions, n, r) || T0(ln.styles, n, r);
}
function dUe(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : L0(t || {}), s = n.mask;
    return s && (s = (s || {}).icon ? s : L0(s || {})), e(r, Se({}, n, {
      mask: s
    }));
  };
}
var fUe = new uUe(), O0 = !1, is = {
  transform: function(t) {
    return aUe(t);
  }
}, pUe = dUe(function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.transform, r = n === void 0 ? Dn : n, s = t.symbol, o = s === void 0 ? !1 : s, i = t.mask, a = i === void 0 ? null : i, c = t.maskId, u = c === void 0 ? null : c, d = t.title, l = d === void 0 ? null : d, m = t.titleId, f = m === void 0 ? null : m, v = t.classes, g = v === void 0 ? [] : v, b = t.attributes, h = b === void 0 ? {} : b, w = t.styles, k = w === void 0 ? {} : w;
  if (e) {
    var C = e.prefix, A = e.iconName, E = e.icon;
    return rv(Se({
      type: "icon"
    }, e), function() {
      return nv(), dt.autoA11y && (l ? h["aria-labelledby"] = "".concat(dt.replacementClass, "-title-").concat(f || ss()) : (h["aria-hidden"] = "true", h.focusable = "false")), oUe({
        icons: {
          main: I0(E),
          mask: a ? I0(a.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: C,
        iconName: A,
        transform: Se({}, Dn, r),
        symbol: o,
        title: l,
        maskId: u,
        titleId: f,
        extra: {
          attributes: h,
          styles: k,
          classes: g
        }
      });
    });
  }
}), hUe = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, s = r === void 0 ? Dn : r, o = n.title, i = o === void 0 ? null : o, a = n.classes, c = a === void 0 ? [] : a, u = n.attributes, d = u === void 0 ? {} : u, l = n.styles, m = l === void 0 ? {} : l;
  return rv({
    type: "text",
    content: t
  }, function() {
    return nv(), sUe({
      content: t,
      transform: Se({}, Dn, s),
      title: i,
      extra: {
        attributes: d,
        styles: m,
        classes: ["".concat(dt.familyPrefix, "-layers-text")].concat(EVe(c))
      }
    });
  });
};
function R0(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Kt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? R0(Object(n), !0).forEach(function(r) {
      vt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R0(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function as(e) {
  "@babel/helpers - typeof";
  return as = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, as(e);
}
function vt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function gUe(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), s, o;
  for (o = 0; o < r.length; o++)
    s = r[o], !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
function mUe(e, t) {
  if (e == null) return {};
  var n = gUe(e, t), r, s;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (s = 0; s < o.length; s++)
      r = o[s], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Yc(e) {
  return vUe(e) || _Ue(e) || bUe(e) || yUe();
}
function vUe(e) {
  if (Array.isArray(e)) return Jc(e);
}
function _Ue(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function bUe(e, t) {
  if (e) {
    if (typeof e == "string") return Jc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jc(e, t);
  }
}
function Jc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function yUe() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var wUe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ov = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(h, w, k) {
      if (!u(w) || l(w) || m(w) || f(w) || c(w))
        return w;
      var C, A = 0, E = 0;
      if (d(w))
        for (C = [], E = w.length; A < E; A++)
          C.push(n(h, w[A], k));
      else {
        C = {};
        for (var $ in w)
          Object.prototype.hasOwnProperty.call(w, $) && (C[h($, k)] = n(h, w[$], k));
      }
      return C;
    }, r = function(h, w) {
      w = w || {};
      var k = w.separator || "_", C = w.split || /(?=[A-Z])/;
      return h.split(C).join(k);
    }, s = function(h) {
      return v(h) ? h : (h = h.replace(/[\-_\s]+(.)?/g, function(w, k) {
        return k ? k.toUpperCase() : "";
      }), h.substr(0, 1).toLowerCase() + h.substr(1));
    }, o = function(h) {
      var w = s(h);
      return w.substr(0, 1).toUpperCase() + w.substr(1);
    }, i = function(h, w) {
      return r(h, w).toLowerCase();
    }, a = Object.prototype.toString, c = function(h) {
      return typeof h == "function";
    }, u = function(h) {
      return h === Object(h);
    }, d = function(h) {
      return a.call(h) == "[object Array]";
    }, l = function(h) {
      return a.call(h) == "[object Date]";
    }, m = function(h) {
      return a.call(h) == "[object RegExp]";
    }, f = function(h) {
      return a.call(h) == "[object Boolean]";
    }, v = function(h) {
      return h = h - 0, h === h;
    }, g = function(h, w) {
      var k = w && "process" in w ? w.process : w;
      return typeof k != "function" ? h : function(C, A) {
        return k(C, h, A);
      };
    }, b = {
      camelize: s,
      decamelize: i,
      pascalize: o,
      depascalize: i,
      camelizeKeys: function(h, w) {
        return n(g(s, w), h);
      },
      decamelizeKeys: function(h, w) {
        return n(g(i, w), h, w);
      },
      pascalizeKeys: function(h, w) {
        return n(g(o, w), h);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = b : t.humps = b;
  })(wUe);
})(ov);
var kUe = ov.exports, CUe = ["class", "style"];
function xUe(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), s = kUe.camelize(n.slice(0, r)), o = n.slice(r + 1).trim();
    return t[s] = o, t;
  }, {});
}
function SUe(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Wl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(c) {
    return Wl(c);
  }), s = Object.keys(e.attributes || {}).reduce(function(c, u) {
    var d = e.attributes[u];
    switch (u) {
      case "class":
        c.class = SUe(d);
        break;
      case "style":
        c.style = xUe(d);
        break;
      default:
        c.attrs[u] = d;
    }
    return c;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var o = n.style, i = o === void 0 ? {} : o, a = mUe(n, CUe);
  return Lt(e.tag, Kt(Kt(Kt({}, t), {}, {
    class: s.class,
    style: Kt(Kt({}, s.style), i)
  }, s.attrs), a), r);
}
var sv = !1;
try {
  sv = !0;
} catch {
}
function EUe() {
  if (!sv && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Kr(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? vt({}, e, t) : {};
}
function AUe(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, vt(t, "fa-".concat(e.size), e.size !== null), vt(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), vt(t, "fa-pull-".concat(e.pull), e.pull !== null), vt(t, "fa-swap-opacity", e.swapOpacity), vt(t, "fa-bounce", e.bounce), vt(t, "fa-shake", e.shake), vt(t, "fa-beat", e.beat), vt(t, "fa-fade", e.fade), vt(t, "fa-beat-fade", e.beatFade), vt(t, "fa-flash", e.flash), vt(t, "fa-spin-pulse", e.spinPulse), vt(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function P0(e) {
  if (e && as(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (is.icon)
    return is.icon(e);
  if (e === null)
    return null;
  if (as(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
H({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.attrs, s = T(function() {
      return P0(t.icon);
    }), o = T(function() {
      return Kr("classes", AUe(t));
    }), i = T(function() {
      return Kr("transform", typeof t.transform == "string" ? is.transform(t.transform) : t.transform);
    }), a = T(function() {
      return Kr("mask", P0(t.mask));
    }), c = T(function() {
      return pUe(s.value, Kt(Kt(Kt(Kt({}, o.value), i.value), a.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    ae(c, function(d) {
      if (!d)
        return EUe("Could not find one or more icon(s)", s.value, a.value);
    }, {
      immediate: !0
    });
    var u = T(function() {
      return c.value ? Wl(c.value.abstract[0], {}, r) : null;
    });
    return function() {
      return u.value;
    };
  }
});
H({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, s = dt.familyPrefix, o = T(function() {
      return ["".concat(s, "-layers")].concat(Yc(t.fixedWidth ? ["".concat(s, "-fw")] : []));
    });
    return function() {
      return Lt("div", {
        class: o.value
      }, r.default ? r.default() : []);
    };
  }
});
H({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, n) {
    var r = n.attrs, s = dt.familyPrefix, o = T(function() {
      return Kr("classes", [].concat(Yc(t.counter ? ["".concat(s, "-layers-counter")] : []), Yc(t.position ? ["".concat(s, "-layers-").concat(t.position)] : [])));
    }), i = T(function() {
      return Kr("transform", typeof t.transform == "string" ? is.transform(t.transform) : t.transform);
    }), a = T(function() {
      var u = hUe(t.value.toString(), Kt(Kt({}, i.value), o.value)), d = u.abstract;
      return t.counter && (d[0].attributes.class = d[0].attributes.class.replace("fa-layers-text", "")), d[0];
    }), c = T(function() {
      return Wl(a.value, {}, r);
    });
    return function() {
      return c.value;
    };
  }
});
({
  ...c2
});
const $Ue = ["data-dir"], MUe = /* @__PURE__ */ H({
  __name: "ResizeWrapper",
  props: {
    isResizingEnabled: { type: Boolean, default: !0 },
    height: { default: 0 },
    width: { default: 0 },
    minHeight: { default: 0 },
    minWidth: { default: 0 },
    scale: { default: 1 },
    gridSize: { default: 20 },
    supportedDirections: { default: () => [] },
    outset: { type: Boolean, default: !1 },
    window: { default: void 0 }
  },
  emits: ["resizestart", "resize", "resizeend"],
  setup(e, { emit: t }) {
    function n(f, v) {
      const g = f / v, b = v * g, h = f * v > 0 ? v * (g + 1) : v * (g - 1);
      return Math.abs(f - b) < Math.abs(f - h) ? b : h;
    }
    function r(f, v, g) {
      const b = n(v, g);
      return b >= f && v > 0 ? b : f;
    }
    const s = e, o = us(), i = t, a = T(() => {
      const f = Object.keys(x0);
      return s.isResizingEnabled ? s.supportedDirections.length === 0 ? f : s.supportedDirections : [];
    }), c = {
      dir: D(""),
      dHeight: D(0),
      dWidth: D(0),
      vHeight: D(0),
      vWidth: D(0),
      x: D(0),
      y: D(0)
    }, u = T(() => ({
      [o.resize]: !0,
      [o.outset]: s.outset
    })), d = (f) => {
      f.preventDefault(), f.stopPropagation();
      let v = 0, g = 0, b = !1, h = !1;
      c.dir.value.includes("right") && (v = f.pageX - c.x.value), c.dir.value.includes("left") && (v = c.x.value - f.pageX, h = !0), c.dir.value.includes("top") && (g = c.y.value - f.pageY, b = !0), c.dir.value.includes("bottom") && (g = f.pageY - c.y.value);
      const w = (v - c.dWidth.value) / s.scale, k = (g - c.dHeight.value) / s.scale;
      c.vHeight.value = c.vHeight.value + k, c.vWidth.value = c.vWidth.value + w;
      const C = r(s.minHeight, c.vHeight.value, s.gridSize), A = r(s.minWidth, c.vWidth.value, s.gridSize), E = h && A !== s.width ? -1 * (A - s.width) : 0, $ = b && C !== s.height ? -1 * (C - s.height) : 0, M = f.x, O = f.y, R = c.dir.value;
      i("resize", { height: C, width: A, dX: E, dY: $, x: M, y: O, direction: R }), c.dHeight.value = g, c.dWidth.value = v;
    }, l = (f) => {
      f.preventDefault(), f.stopPropagation(), i("resizeend"), (s.window ?? window).removeEventListener("mousemove", d), (s.window ?? window).removeEventListener("mouseup", l), document.body.style.cursor = "unset", c.dir.value = "";
    }, m = (f) => {
      f.preventDefault(), f.stopPropagation();
      const v = f.target;
      v && (c.dir.value = v.dataset.dir.toLocaleLowerCase()), document.body.style.cursor = x0[c.dir.value], c.x.value = f.pageX, c.y.value = f.pageY, c.dWidth.value = 0, c.dHeight.value = 0, c.vHeight.value = s.height, c.vWidth.value = s.width, (s.window ?? window).addEventListener("mousemove", d), (s.window ?? window).addEventListener("mouseup", l), i("resizestart");
    };
    return (f, v) => (y(), x("div", {
      class: j(u.value)
    }, [
      (y(!0), x(Pe, null, Je(a.value, (g) => (y(), x("div", {
        key: g,
        "data-dir": g,
        class: j({ [_(o).resizer]: !0, [_(o)[g]]: !0 }),
        "data-test-id": "resize-handle",
        onMousedown: m
      }, null, 42, $Ue))), 128)),
      ne(f.$slots, "default")
    ], 2));
  }
}), TUe = "_resize_r3sn9_1", IUe = "_resizer_r3sn9_11", LUe = "_right_r3sn9_16", OUe = "_top_r3sn9_24", RUe = "_bottom_r3sn9_32", PUe = "_left_r3sn9_40", BUe = "_topLeft_r3sn9_48", zUe = "_topRight_r3sn9_56", DUe = "_bottomLeft_r3sn9_64", NUe = "_bottomRight_r3sn9_72", qUe = "_outset_r3sn9_80", FUe = {
  resize: TUe,
  resizer: IUe,
  right: LUe,
  top: OUe,
  bottom: RUe,
  left: PUe,
  topLeft: BUe,
  topRight: zUe,
  bottomLeft: DUe,
  bottomRight: NUe,
  outset: qUe
}, jUe = {
  $style: FUe
}, HUe = /* @__PURE__ */ qt(MUe, [["__cssModules", jUe]]), iv = {
  height: 180,
  width: 240,
  minHeight: 80,
  minWidth: 150,
  id: "0",
  editMode: !1,
  readOnly: !1,
  backgroundColor: 1
}, VUe = /* @__PURE__ */ H({
  __name: "Sticky",
  props: /* @__PURE__ */ Hp({
    modelValue: {},
    height: {},
    width: {},
    minHeight: {},
    minWidth: {},
    id: {},
    defaultText: {},
    editMode: { type: Boolean },
    readOnly: { type: Boolean },
    backgroundColor: {}
  }, iv),
  emits: ["edit", "update:modelValue", "markdown-click"],
  setup(e, { emit: t }) {
    const n = e, r = t, { t: s } = gO(), o = D(!1), i = D(void 0), a = T(() => n.height < n.minHeight ? n.minHeight : n.height), c = T(() => n.width < n.minWidth ? n.minWidth : n.width), u = T(() => n.id ? `${n.id}-input` : void 0), d = T(() => ({
      height: `${a.value}px`,
      width: `${c.value}px`
    })), l = T(() => a.value > 100 && c.value > 155);
    ae(
      () => n.editMode,
      (h, w) => {
        setTimeout(() => {
          h && !w && i.value && (n.defaultText === n.modelValue && i.value.select(), i.value.focus());
        }, 100);
      }
    );
    const m = () => {
      n.readOnly || r("edit", !0);
    }, f = () => {
      o.value || r("edit", !1);
    }, v = (h) => {
      r("update:modelValue", h);
    }, g = (h, w) => {
      r("markdown-click", h, w);
    }, b = (h) => {
      !h.ctrlKey && !h.metaKey && h.stopPropagation();
    };
    return (h, w) => {
      const k = tl("n8n-html");
      return y(), x("div", {
        class: j({
          "n8n-sticky": !0,
          [h.$style.sticky]: !0,
          [h.$style.clickable]: !o.value,
          [h.$style[`color-${h.backgroundColor}`]]: !0
        }),
        style: qe(d.value),
        onKeydown: w[4] || (w[4] = Ke(() => {
        }, ["prevent"]))
      }, [
        Ye(p("div", {
          class: j(h.$style.wrapper),
          onDblclick: Ke(m, ["stop"])
        }, [
          ue(_(wVe), {
            theme: "sticky",
            content: h.modelValue,
            "with-multi-breaks": !0,
            onMarkdownClick: g,
            onUpdateContent: v
          }, null, 8, ["content"])
        ], 34), [
          [Jt, !h.editMode]
        ]),
        Ye(p("div", {
          class: j({ "full-height": !l.value, "sticky-textarea": !0 }),
          onClick: w[0] || (w[0] = Ke(() => {
          }, ["stop"])),
          onMousedown: w[1] || (w[1] = Ke(() => {
          }, ["stop"])),
          onMouseup: w[2] || (w[2] = Ke(() => {
          }, ["stop"])),
          onKeydown: [
            at(f, ["esc"]),
            w[3] || (w[3] = Ke(() => {
            }, ["stop"]))
          ]
        }, [
          ue(_(gm), {
            ref_key: "input",
            ref: i,
            "model-value": h.modelValue,
            name: u.value,
            type: "textarea",
            rows: 5,
            onBlur: f,
            "onUpdate:modelValue": v,
            onWheel: b
          }, null, 8, ["model-value", "name"])
        ], 34), [
          [Jt, h.editMode]
        ]),
        h.editMode && l.value ? (y(), x("div", {
          key: 0,
          class: j(h.$style.footer)
        }, [
          ue(_(fm), {
            size: "xsmall",
            align: "right"
          }, {
            default: Y(() => [
              Ye(p("span", null, null, 512), [
                [k, _(s)("sticky.markdownHint")]
              ])
            ]),
            _: 1
          })
        ], 2)) : Q("", !0)
      ], 38);
    };
  }
}), UUe = "_sticky_1iqd8_1", ZUe = "_wrapper_1iqd8_7", WUe = "_clickable_1iqd8_12", GUe = "_footer_1iqd8_33", KUe = {
  sticky: UUe,
  wrapper: ZUe,
  clickable: WUe,
  footer: GUe,
  "color-2": "_color-2_1iqd8_39",
  "color-3": "_color-3_1iqd8_44",
  "color-4": "_color-4_1iqd8_49",
  "color-5": "_color-5_1iqd8_54",
  "color-6": "_color-6_1iqd8_59",
  "color-7": "_color-7_1iqd8_64"
}, XUe = {
  $style: KUe
}, YUe = /* @__PURE__ */ qt(VUe, [["__cssModules", XUe]]);
({
  ...iv
});
var Ea, B0;
function Gl() {
  if (B0) return Ea;
  B0 = 1;
  var e = Array.isArray;
  return Ea = e, Ea;
}
var Aa, z0;
function JUe() {
  if (z0) return Aa;
  z0 = 1;
  var e = typeof Co == "object" && Co && Co.Object === Object && Co;
  return Aa = e, Aa;
}
var $a, D0;
function Kl() {
  if (D0) return $a;
  D0 = 1;
  var e = JUe(), t = typeof self == "object" && self && self.Object === Object && self, n = e || t || Function("return this")();
  return $a = n, $a;
}
var Ma, N0;
function Xl() {
  if (N0) return Ma;
  N0 = 1;
  var e = Kl(), t = e.Symbol;
  return Ma = t, Ma;
}
var Ta, q0;
function QUe() {
  if (q0) return Ta;
  q0 = 1;
  var e = Xl(), t = Object.prototype, n = t.hasOwnProperty, r = t.toString, s = e ? e.toStringTag : void 0;
  function o(i) {
    var a = n.call(i, s), c = i[s];
    try {
      i[s] = void 0;
      var u = !0;
    } catch {
    }
    var d = r.call(i);
    return u && (a ? i[s] = c : delete i[s]), d;
  }
  return Ta = o, Ta;
}
var Ia, F0;
function eZe() {
  if (F0) return Ia;
  F0 = 1;
  var e = Object.prototype, t = e.toString;
  function n(r) {
    return t.call(r);
  }
  return Ia = n, Ia;
}
var La, j0;
function av() {
  if (j0) return La;
  j0 = 1;
  var e = Xl(), t = QUe(), n = eZe(), r = "[object Null]", s = "[object Undefined]", o = e ? e.toStringTag : void 0;
  function i(a) {
    return a == null ? a === void 0 ? s : r : o && o in Object(a) ? t(a) : n(a);
  }
  return La = i, La;
}
var Oa, H0;
function tZe() {
  if (H0) return Oa;
  H0 = 1;
  function e(t) {
    return t != null && typeof t == "object";
  }
  return Oa = e, Oa;
}
var Ra, V0;
function Yl() {
  if (V0) return Ra;
  V0 = 1;
  var e = av(), t = tZe(), n = "[object Symbol]";
  function r(s) {
    return typeof s == "symbol" || t(s) && e(s) == n;
  }
  return Ra = r, Ra;
}
var Pa, U0;
function nZe() {
  if (U0) return Pa;
  U0 = 1;
  var e = Gl(), t = Yl(), n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/;
  function s(o, i) {
    if (e(o))
      return !1;
    var a = typeof o;
    return a == "number" || a == "symbol" || a == "boolean" || o == null || t(o) ? !0 : r.test(o) || !n.test(o) || i != null && o in Object(i);
  }
  return Pa = s, Pa;
}
var Ba, Z0;
function cv() {
  if (Z0) return Ba;
  Z0 = 1;
  function e(t) {
    var n = typeof t;
    return t != null && (n == "object" || n == "function");
  }
  return Ba = e, Ba;
}
var za, W0;
function rZe() {
  if (W0) return za;
  W0 = 1;
  var e = av(), t = cv(), n = "[object AsyncFunction]", r = "[object Function]", s = "[object GeneratorFunction]", o = "[object Proxy]";
  function i(a) {
    if (!t(a))
      return !1;
    var c = e(a);
    return c == r || c == s || c == n || c == o;
  }
  return za = i, za;
}
var Da, G0;
function oZe() {
  if (G0) return Da;
  G0 = 1;
  var e = Kl(), t = e["__core-js_shared__"];
  return Da = t, Da;
}
var Na, K0;
function sZe() {
  if (K0) return Na;
  K0 = 1;
  var e = oZe(), t = function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
  }();
  function n(r) {
    return !!t && t in r;
  }
  return Na = n, Na;
}
var qa, X0;
function iZe() {
  if (X0) return qa;
  X0 = 1;
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
  return qa = n, qa;
}
var Fa, Y0;
function aZe() {
  if (Y0) return Fa;
  Y0 = 1;
  var e = rZe(), t = sZe(), n = cv(), r = iZe(), s = /[\\^$.*+?()[\]{}|]/g, o = /^\[object .+?Constructor\]$/, i = Function.prototype, a = Object.prototype, c = i.toString, u = a.hasOwnProperty, d = RegExp(
    "^" + c.call(u).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(m) {
    if (!n(m) || t(m))
      return !1;
    var f = e(m) ? d : o;
    return f.test(r(m));
  }
  return Fa = l, Fa;
}
var ja, J0;
function cZe() {
  if (J0) return ja;
  J0 = 1;
  function e(t, n) {
    return t == null ? void 0 : t[n];
  }
  return ja = e, ja;
}
var Ha, Q0;
function lv() {
  if (Q0) return Ha;
  Q0 = 1;
  var e = aZe(), t = cZe();
  function n(r, s) {
    var o = t(r, s);
    return e(o) ? o : void 0;
  }
  return Ha = n, Ha;
}
var Va, ep;
function Ts() {
  if (ep) return Va;
  ep = 1;
  var e = lv(), t = e(Object, "create");
  return Va = t, Va;
}
var Ua, tp;
function lZe() {
  if (tp) return Ua;
  tp = 1;
  var e = Ts();
  function t() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
  }
  return Ua = t, Ua;
}
var Za, np;
function uZe() {
  if (np) return Za;
  np = 1;
  function e(t) {
    var n = this.has(t) && delete this.__data__[t];
    return this.size -= n ? 1 : 0, n;
  }
  return Za = e, Za;
}
var Wa, rp;
function dZe() {
  if (rp) return Wa;
  rp = 1;
  var e = Ts(), t = "__lodash_hash_undefined__", n = Object.prototype, r = n.hasOwnProperty;
  function s(o) {
    var i = this.__data__;
    if (e) {
      var a = i[o];
      return a === t ? void 0 : a;
    }
    return r.call(i, o) ? i[o] : void 0;
  }
  return Wa = s, Wa;
}
var Ga, op;
function fZe() {
  if (op) return Ga;
  op = 1;
  var e = Ts(), t = Object.prototype, n = t.hasOwnProperty;
  function r(s) {
    var o = this.__data__;
    return e ? o[s] !== void 0 : n.call(o, s);
  }
  return Ga = r, Ga;
}
var Ka, sp;
function pZe() {
  if (sp) return Ka;
  sp = 1;
  var e = Ts(), t = "__lodash_hash_undefined__";
  function n(r, s) {
    var o = this.__data__;
    return this.size += this.has(r) ? 0 : 1, o[r] = e && s === void 0 ? t : s, this;
  }
  return Ka = n, Ka;
}
var Xa, ip;
function hZe() {
  if (ip) return Xa;
  ip = 1;
  var e = lZe(), t = uZe(), n = dZe(), r = fZe(), s = pZe();
  function o(i) {
    var a = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++a < c; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, Xa = o, Xa;
}
var Ya, ap;
function gZe() {
  if (ap) return Ya;
  ap = 1;
  function e() {
    this.__data__ = [], this.size = 0;
  }
  return Ya = e, Ya;
}
var Ja, cp;
function mZe() {
  if (cp) return Ja;
  cp = 1;
  function e(t, n) {
    return t === n || t !== t && n !== n;
  }
  return Ja = e, Ja;
}
var Qa, lp;
function Is() {
  if (lp) return Qa;
  lp = 1;
  var e = mZe();
  function t(n, r) {
    for (var s = n.length; s--; )
      if (e(n[s][0], r))
        return s;
    return -1;
  }
  return Qa = t, Qa;
}
var ec, up;
function vZe() {
  if (up) return ec;
  up = 1;
  var e = Is(), t = Array.prototype, n = t.splice;
  function r(s) {
    var o = this.__data__, i = e(o, s);
    if (i < 0)
      return !1;
    var a = o.length - 1;
    return i == a ? o.pop() : n.call(o, i, 1), --this.size, !0;
  }
  return ec = r, ec;
}
var tc, dp;
function _Ze() {
  if (dp) return tc;
  dp = 1;
  var e = Is();
  function t(n) {
    var r = this.__data__, s = e(r, n);
    return s < 0 ? void 0 : r[s][1];
  }
  return tc = t, tc;
}
var nc, fp;
function bZe() {
  if (fp) return nc;
  fp = 1;
  var e = Is();
  function t(n) {
    return e(this.__data__, n) > -1;
  }
  return nc = t, nc;
}
var rc, pp;
function yZe() {
  if (pp) return rc;
  pp = 1;
  var e = Is();
  function t(n, r) {
    var s = this.__data__, o = e(s, n);
    return o < 0 ? (++this.size, s.push([n, r])) : s[o][1] = r, this;
  }
  return rc = t, rc;
}
var oc, hp;
function wZe() {
  if (hp) return oc;
  hp = 1;
  var e = gZe(), t = vZe(), n = _Ze(), r = bZe(), s = yZe();
  function o(i) {
    var a = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++a < c; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, oc = o, oc;
}
var sc, gp;
function kZe() {
  if (gp) return sc;
  gp = 1;
  var e = lv(), t = Kl(), n = e(t, "Map");
  return sc = n, sc;
}
var ic, mp;
function CZe() {
  if (mp) return ic;
  mp = 1;
  var e = hZe(), t = wZe(), n = kZe();
  function r() {
    this.size = 0, this.__data__ = {
      hash: new e(),
      map: new (n || t)(),
      string: new e()
    };
  }
  return ic = r, ic;
}
var ac, vp;
function xZe() {
  if (vp) return ac;
  vp = 1;
  function e(t) {
    var n = typeof t;
    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
  }
  return ac = e, ac;
}
var cc, _p;
function Ls() {
  if (_p) return cc;
  _p = 1;
  var e = xZe();
  function t(n, r) {
    var s = n.__data__;
    return e(r) ? s[typeof r == "string" ? "string" : "hash"] : s.map;
  }
  return cc = t, cc;
}
var lc, bp;
function SZe() {
  if (bp) return lc;
  bp = 1;
  var e = Ls();
  function t(n) {
    var r = e(this, n).delete(n);
    return this.size -= r ? 1 : 0, r;
  }
  return lc = t, lc;
}
var uc, yp;
function EZe() {
  if (yp) return uc;
  yp = 1;
  var e = Ls();
  function t(n) {
    return e(this, n).get(n);
  }
  return uc = t, uc;
}
var dc, wp;
function AZe() {
  if (wp) return dc;
  wp = 1;
  var e = Ls();
  function t(n) {
    return e(this, n).has(n);
  }
  return dc = t, dc;
}
var fc, kp;
function $Ze() {
  if (kp) return fc;
  kp = 1;
  var e = Ls();
  function t(n, r) {
    var s = e(this, n), o = s.size;
    return s.set(n, r), this.size += s.size == o ? 0 : 1, this;
  }
  return fc = t, fc;
}
var pc, Cp;
function MZe() {
  if (Cp) return pc;
  Cp = 1;
  var e = CZe(), t = SZe(), n = EZe(), r = AZe(), s = $Ze();
  function o(i) {
    var a = -1, c = i == null ? 0 : i.length;
    for (this.clear(); ++a < c; ) {
      var u = i[a];
      this.set(u[0], u[1]);
    }
  }
  return o.prototype.clear = e, o.prototype.delete = t, o.prototype.get = n, o.prototype.has = r, o.prototype.set = s, pc = o, pc;
}
var hc, xp;
function TZe() {
  if (xp) return hc;
  xp = 1;
  var e = MZe(), t = "Expected a function";
  function n(r, s) {
    if (typeof r != "function" || s != null && typeof s != "function")
      throw new TypeError(t);
    var o = function() {
      var i = arguments, a = s ? s.apply(this, i) : i[0], c = o.cache;
      if (c.has(a))
        return c.get(a);
      var u = r.apply(this, i);
      return o.cache = c.set(a, u) || c, u;
    };
    return o.cache = new (n.Cache || e)(), o;
  }
  return n.Cache = e, hc = n, hc;
}
var gc, Sp;
function IZe() {
  if (Sp) return gc;
  Sp = 1;
  var e = TZe(), t = 500;
  function n(r) {
    var s = e(r, function(i) {
      return o.size === t && o.clear(), i;
    }), o = s.cache;
    return s;
  }
  return gc = n, gc;
}
var mc, Ep;
function LZe() {
  if (Ep) return mc;
  Ep = 1;
  var e = IZe(), t = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n = /\\(\\)?/g, r = e(function(s) {
    var o = [];
    return s.charCodeAt(0) === 46 && o.push(""), s.replace(t, function(i, a, c, u) {
      o.push(c ? u.replace(n, "$1") : a || i);
    }), o;
  });
  return mc = r, mc;
}
var vc, Ap;
function OZe() {
  if (Ap) return vc;
  Ap = 1;
  function e(t, n) {
    for (var r = -1, s = t == null ? 0 : t.length, o = Array(s); ++r < s; )
      o[r] = n(t[r], r, t);
    return o;
  }
  return vc = e, vc;
}
var _c, $p;
function RZe() {
  if ($p) return _c;
  $p = 1;
  var e = Xl(), t = OZe(), n = Gl(), r = Yl(), s = e ? e.prototype : void 0, o = s ? s.toString : void 0;
  function i(a) {
    if (typeof a == "string")
      return a;
    if (n(a))
      return t(a, i) + "";
    if (r(a))
      return o ? o.call(a) : "";
    var c = a + "";
    return c == "0" && 1 / a == -1 / 0 ? "-0" : c;
  }
  return _c = i, _c;
}
var bc, Mp;
function PZe() {
  if (Mp) return bc;
  Mp = 1;
  var e = RZe();
  function t(n) {
    return n == null ? "" : e(n);
  }
  return bc = t, bc;
}
var yc, Tp;
function BZe() {
  if (Tp) return yc;
  Tp = 1;
  var e = Gl(), t = nZe(), n = LZe(), r = PZe();
  function s(o, i) {
    return e(o) ? o : t(o, i) ? [o] : n(r(o));
  }
  return yc = s, yc;
}
var wc, Ip;
function zZe() {
  if (Ip) return wc;
  Ip = 1;
  var e = Yl();
  function t(n) {
    if (typeof n == "string" || e(n))
      return n;
    var r = n + "";
    return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
  }
  return wc = t, wc;
}
var kc, Lp;
function DZe() {
  if (Lp) return kc;
  Lp = 1;
  var e = BZe(), t = zZe();
  function n(r, s) {
    s = e(s, r);
    for (var o = 0, i = s.length; r != null && o < i; )
      r = r[t(s[o++])];
    return o && o == i ? r : void 0;
  }
  return kc = n, kc;
}
var Cc, Op;
function NZe() {
  if (Op) return Cc;
  Op = 1;
  var e = DZe();
  function t(n, r, s) {
    var o = n == null ? void 0 : e(n, r);
    return o === void 0 ? s : o;
  }
  return Cc = t, Cc;
}
NZe();
function qZe(e) {
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
  }, c = {
    className: "string",
    begin: /'/,
    end: /'/
  }, u = {
    match: /\\'/
  }, d = {
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
  }, l = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], m = e.SHEBANG({
    binary: `(${l.join("|")})`,
    relevance: 10
  }), f = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, v = [
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
  ], b = { match: /(\/[a-z._-]+)+/ }, h = [
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
  ], w = [
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
  ], k = [
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
  ], C = [
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
      keyword: v,
      literal: g,
      built_in: [
        ...h,
        ...w,
        // Shell modifiers
        "set",
        "shopt",
        ...k,
        ...C
      ]
    },
    contains: [
      m,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      f,
      d,
      e.HASH_COMMENT_MODE,
      o,
      b,
      i,
      a,
      c,
      u,
      n
    ]
  };
}
function FZe(e) {
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
  }, c = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, u = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: a,
    illegal: /#/
  }, d = {
    begin: /\{\{/,
    relevance: 0
  }, l = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c,
          d,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          c,
          d,
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
          d,
          u
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          d,
          u
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, m = "[0-9](_?[0-9])*", f = `(\\b(${m}))?\\.(${m})|\\b(${m})\\.`, v = `\\b|${r.join("|")}`, g = {
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
        begin: `(\\b(${m})|(${f}))[eE][+-]?(${m})[jJ]?(?=${v})`
      },
      {
        begin: `(${f})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${v})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${v})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${v})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${v})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${m})[jJ](?=${v})`
      }
    ]
  }, b = {
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
          c,
          g,
          l,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return u.contains = [
    l,
    g,
    c
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
      c,
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
      l,
      b,
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
          l
        ]
      }
    ]
  };
}
const cs = "[A-Za-z$_][0-9A-Za-z$_]*", uv = [
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
], dv = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], fv = [
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
], pv = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], hv = [
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
], gv = [
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
], mv = [].concat(
  hv,
  fv,
  pv
);
function jZe(e) {
  const t = e.regex, n = (F, { after: Z }) => {
    const W = "</" + F[0].slice(1);
    return F.input.indexOf(W, Z) !== -1;
  }, r = cs, s = {
    begin: "<>",
    end: "</>"
  }, o = /<[A-Za-z0-9\\._:-]+\s*\/>/, i = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (F, Z) => {
      const W = F[0].length + F.index, pe = F.input[W];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        pe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        pe === ","
      ) {
        Z.ignoreMatch();
        return;
      }
      pe === ">" && (n(F, { after: W }) || Z.ignoreMatch());
      let le;
      const Ae = F.input.substring(W);
      if (le = Ae.match(/^\s*=/)) {
        Z.ignoreMatch();
        return;
      }
      if ((le = Ae.match(/^\s+extends\s+/)) && le.index === 0) {
        Z.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: cs,
    keyword: uv,
    literal: dv,
    built_in: mv,
    "variable.language": gv
  }, c = "[0-9](_?[0-9])*", u = `\\.(${c})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", l = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${u})|\\.)?|(${u}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${d})\\b((${u})\\b|\\.)?|(${u})\\b` },
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
  }, m = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, f = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        m
      ],
      subLanguage: "xml"
    }
  }, v = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        m
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
        m
      ],
      subLanguage: "graphql"
    }
  }, b = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      m
    ]
  }, w = {
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
  }, k = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    f,
    v,
    g,
    b,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    l
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  m.contains = k.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(k)
  });
  const C = [].concat(w, m.contains), A = C.concat([
    // eat recursive parens in sub expressions
    {
      begin: /\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(C)
    }
  ]), E = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: A
  }, $ = {
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
  }, M = {
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
        ...fv,
        ...pv
      ]
    }
  }, O = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, R = {
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
    contains: [E],
    illegal: /%/
  }, B = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function V(F) {
    return t.concat("(?!", F.join("|"), ")");
  }
  const re = {
    match: t.concat(
      /\b/,
      V([
        ...hv,
        "super",
        "import"
      ]),
      r,
      t.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  }, P = {
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
      E
    ]
  }, z = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", N = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(z)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      E
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: A, CLASS_REFERENCE: M },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      f,
      v,
      g,
      b,
      w,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      l,
      M,
      {
        className: "attr",
        begin: r + t.lookahead(":"),
        relevance: 0
      },
      N,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          w,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: z,
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
                    contains: A
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
      R,
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
          E,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      P,
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
        contains: [E]
      },
      re,
      B,
      $,
      U,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function HZe(e) {
  const t = jZe(e), n = cs, r = [
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
  ], c = {
    $pattern: cs,
    keyword: uv.concat(a),
    literal: dv,
    built_in: mv.concat(r),
    "variable.language": gv
  }, u = {
    className: "meta",
    begin: "@" + n
  }, d = (m, f, v) => {
    const g = m.contains.findIndex((b) => b.label === f);
    if (g === -1)
      throw new Error("can not find mode to replace");
    m.contains.splice(g, 1, v);
  };
  Object.assign(t.keywords, c), t.exports.PARAMS_CONTAINS.push(u), t.contains = t.contains.concat([
    u,
    s,
    o
  ]), d(t, "shebang", e.SHEBANG()), d(t, "use_strict", i);
  const l = t.contains.find((m) => m.label === "func.def");
  return l.relevance = 0, Object.assign(t, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), t;
}
const VZe = H({
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
    const t = D(new Im(e.options ?? {}));
    for (const r of e.plugins ?? [])
      t.value.use(r);
    const n = T(() => t.value.render(e.source));
    return () => Lt("div", { innerHTML: n.value });
  }
}), UZe = {
  key: 0,
  class: "chat-message-actions"
}, ZZe = {
  key: 2,
  class: "chat-message-files"
}, Qc = /* @__PURE__ */ H({
  __name: "Message",
  props: {
    message: {}
  },
  setup(e, { expose: t }) {
    const n = e;
    mn.registerLanguage("javascript", Yp), mn.registerLanguage("typescript", HZe), mn.registerLanguage("python", FZe), mn.registerLanguage("xml", Jp), mn.registerLanguage("bash", qZe);
    const { message: r } = ls(n), { options: s } = uo(), o = D(null), i = D({}), a = T(() => r.value.text || "&lt;Empty response&gt;"), c = T(() => ({
      "chat-message-from-user": r.value.sender === "user",
      "chat-message-from-bot": r.value.sender === "bot",
      "chat-message-transparent": r.value.transparent === !0
    })), u = (v) => {
      v.use(Lm, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    }, d = () => {
      var v;
      (v = o.value) != null && v.scrollIntoView && o.value.scrollIntoView({
        block: "start"
      });
    }, l = {
      highlight(v, g) {
        if (g && mn.getLanguage(g))
          try {
            return mn.highlight(v, { language: g }).value;
          } catch {
          }
        return "";
      }
    }, m = { ...(s == null ? void 0 : s.messageComponents) ?? {} };
    t({ scrollToView: d });
    const f = async (v) => await new Promise((g, b) => {
      const h = new FileReader();
      h.onload = () => g(h.result), h.onerror = b, h.readAsDataURL(v);
    });
    return Be(async () => {
      if (r.value.files)
        for (const v of r.value.files)
          try {
            const g = await f(v);
            i.value[v.name] = g;
          } catch (g) {
            console.error("Error reading file:", g);
          }
    }), (v, g) => (y(), x("div", {
      ref_key: "messageContainer",
      ref: o,
      class: j(["chat-message", c.value])
    }, [
      v.$slots.beforeMessage ? (y(), x("div", UZe, [
        ne(v.$slots, "beforeMessage", Yr(jp({ message: _(r) })))
      ])) : Q("", !0),
      ne(v.$slots, "default", {}, () => [
        _(r).type === "component" && m[_(r).key] ? (y(), X(lt(m[_(r).key]), Yr(je({ key: 0 }, _(r).arguments)), null, 16)) : (y(), X(_(VZe), {
          key: 1,
          class: "chat-message-markdown",
          source: a.value,
          options: l,
          plugins: [u]
        }, null, 8, ["source", "plugins"])),
        (_(r).files ?? []).length > 0 ? (y(), x("div", ZZe, [
          (y(!0), x(Pe, null, Je(_(r).files ?? [], (b) => (y(), x("div", {
            key: b.name,
            class: "chat-message-file"
          }, [
            ue(Qp, {
              file: b,
              "is-removable": !1,
              "is-previewable": !0
            }, null, 8, ["file"])
          ]))), 128))
        ])) : Q("", !0)
      ])
    ], 2));
  }
}), WZe = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function GZe(e, t) {
  return y(), x("svg", WZe, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"
    }, null, -1)
  ]));
}
const KZe = { name: "mdi-chat", render: GZe }, XZe = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function YZe(e, t) {
  return y(), x("svg", XZe, t[0] || (t[0] = [
    p("path", {
      fill: "currentColor",
      d: "M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
    }, null, -1)
  ]));
}
const JZe = { name: "mdi-chevron-down", render: YZe }, QZe = { class: "chat-window-wrapper" }, eWe = { class: "chat-window" }, tWe = /* @__PURE__ */ H({
  __name: "ChatWindow",
  setup(e) {
    const t = D(!1);
    function n() {
      t.value = !t.value, t.value && xe(() => {
        ht.emit("scrollToBottom");
      });
    }
    return (r, s) => (y(), x("div", QZe, [
      ue(nr, { name: "chat-window-transition" }, {
        default: Y(() => [
          Ye(p("div", eWe, [
            ue(vv)
          ], 512), [
            [Jt, t.value]
          ])
        ]),
        _: 1
      }),
      p("div", {
        class: "chat-window-toggle",
        onClick: n
      }, [
        ue(nr, {
          name: "chat-window-toggle-transition",
          mode: "out-in"
        }, {
          default: Y(() => [
            t.value ? (y(), X(_(JZe), {
              key: 1,
              height: "32",
              width: "32"
            })) : (y(), X(_(KZe), {
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
}), nWe = /* @__PURE__ */ H({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(e) {
    const t = e, n = {
      id: "typing",
      text: "",
      sender: "bot"
    }, r = D(), s = T(() => ({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "chat-message-typing": !0,
      [`chat-message-typing-animation-${t.animation}`]: !0
    }));
    return Be(() => {
      var o;
      (o = r.value) == null || o.scrollToView();
    }), (o, i) => (y(), X(_(Qc), {
      ref_key: "messageContainer",
      ref: r,
      class: j(s.value),
      message: n,
      "data-test-id": "chat-message-typing"
    }, {
      default: Y(() => i[0] || (i[0] = [
        p("div", { class: "chat-message-typing-body" }, [
          p("span", { class: "chat-message-typing-circle" }),
          p("span", { class: "chat-message-typing-circle" }),
          p("span", { class: "chat-message-typing-circle" })
        ], -1)
      ])),
      _: 1
    }, 8, ["class"]));
  }
}), rWe = {
  key: 0,
  class: "empty-container"
}, oWe = {
  class: "empty",
  "data-test-id": "chat-messages-empty"
}, sWe = {
  key: 1,
  class: "chat-messages-list"
}, iWe = /* @__PURE__ */ H({
  __name: "MessagesList",
  props: {
    messages: {},
    emptyText: {}
  },
  setup(e) {
    const t = rl(), n = D([]), { initialMessages: r, waitingForResponse: s } = t;
    return ae(
      () => n.value.length,
      () => {
        const o = n.value[n.value.length - 1];
        o && o.scrollToView();
      }
    ), (o, i) => o.emptyText && _(r).length === 0 && o.messages.length === 0 ? (y(), x("div", rWe, [
      p("div", oWe, [
        ue(_(Il), {
          icon: "message-circle",
          size: "large",
          class: "emptyIcon"
        }),
        ue(_(fm), {
          tag: "p",
          size: "medium",
          color: "text-base"
        }, {
          default: Y(() => [
            _r(ve(o.emptyText), 1)
          ]),
          _: 1
        })
      ])
    ])) : (y(), x("div", sWe, [
      (y(!0), x(Pe, null, Je(_(r), (a) => (y(), X(Qc, {
        key: a.id,
        message: a
      }, null, 8, ["message"]))), 128)),
      (y(!0), x(Pe, null, Je(o.messages, (a) => (y(), X(Qc, {
        key: a.id,
        ref_for: !0,
        ref_key: "messageComponents",
        ref: n,
        message: a
      }, {
        beforeMessage: Y(({ message: c }) => [
          ne(o.$slots, "beforeMessage", je({ ref_for: !0 }, { message: c }))
        ]),
        _: 2
      }, 1032, ["message"]))), 128)),
      _(s) ? (y(), X(nWe, { key: 0 })) : Q("", !0)
    ]));
  }
}), aWe = { class: "chat-heading" }, cWe = ["title"], lWe = { key: 0 }, vv = /* @__PURE__ */ H({
  __name: "Chat",
  setup(e) {
    const { t } = ds(), n = rl(), { messages: r, currentSessionId: s } = n, { options: o } = uo(), i = T(() => o.mode === "window" && o.showWindowCloseButton);
    async function a() {
      n.startNewSession && (n.startNewSession(), xe(() => {
        ht.emit("scrollToBottom");
      }));
    }
    async function c() {
      n.loadPreviousSession && (await n.loadPreviousSession(), xe(() => {
        ht.emit("scrollToBottom");
      }));
    }
    function u() {
      ht.emit("close");
    }
    return Be(async () => {
      await c(), !o.showWelcomeScreen && !s.value && await a();
    }), (d, l) => (y(), X(Mb, { class: "chat-wrapper" }, {
      header: Y(() => [
        p("div", aWe, [
          p("h1", null, ve(_(t)("title")), 1),
          i.value ? (y(), x("button", {
            key: 0,
            class: "chat-close-button",
            title: _(t)("closeButtonTooltip"),
            onClick: u
          }, [
            ue(_(S_), {
              height: "18",
              width: "18"
            })
          ], 8, cWe)) : Q("", !0)
        ]),
        _(t)("subtitle") ? (y(), x("p", lWe, ve(_(t)("subtitle")), 1)) : Q("", !0)
      ]),
      footer: Y(() => [
        _(s) ? (y(), X(Sb, { key: 0 })) : (y(), X(D_, { key: 1 }))
      ]),
      default: Y(() => [
        !_(s) && _(o).showWelcomeScreen ? (y(), X(I_, {
          key: 0,
          "onClick:button": a
        })) : (y(), X(iWe, {
          key: 1,
          messages: _(r)
        }, null, 8, ["messages"]))
      ]),
      _: 1
    }));
  }
}), uWe = /* @__PURE__ */ H({
  __name: "App",
  props: {},
  setup(e) {
    const { options: t } = uo(), n = T(() => t.mode === "fullscreen");
    return Be(() => {
      mn.registerLanguage("xml", Jp), mn.registerLanguage("javascript", Yp);
    }), (r, s) => n.value ? (y(), X(vv, {
      key: 0,
      class: "n8n-chat"
    })) : (y(), X(tWe, {
      key: 1,
      class: "n8n-chat"
    }));
  }
});
function pWe(e) {
  var s, o;
  const t = {
    ...Br,
    ...e,
    webhookConfig: {
      ...Br.webhookConfig,
      ...e == null ? void 0 : e.webhookConfig
    },
    i18n: {
      ...Br.i18n,
      ...e == null ? void 0 : e.i18n,
      en: {
        ...(s = Br.i18n) == null ? void 0 : s.en,
        ...(o = e == null ? void 0 : e.i18n) == null ? void 0 : o.en
      }
    },
    theme: {
      ...Br.theme,
      ...e == null ? void 0 : e.theme
    }
  }, n = t.target ?? Kv;
  typeof n == "string" && u_(n);
  const r = Gv(uWe);
  return r.use(g_, t), r.mount(n), r;
}
export {
  pWe as createChat
};
