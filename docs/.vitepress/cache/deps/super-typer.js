import "./chunk-BUSYA2B4.js";

// node_modules/super-typer/dist/super-typer.mjs
var t = class {
  constructor() {
    this.items = [];
  }
  push(t2) {
    this.items.push(t2);
  }
  pop() {
    return this.items.shift();
  }
  isEmpty() {
    return 0 === this.items.length;
  }
  get length() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
  get front() {
    return this.items[0];
  }
  get back() {
    return this.items[this.items.length - 1];
  }
};
function i(t2, i2) {
  return new Promise((s2, h) => {
    setTimeout(() => {
      t2(s2, h);
    }, i2);
  });
}
var s = class _s {
  constructor(i2 = {}, s2 = []) {
    this.t = new t(), this.i = "", this.h = 0, this.o = {}, this.u = {}, this.p = false, this.m = false, this._ = false, this.setGlobalOptions(i2), this.addCommands(s2), this.l();
  }
  get isRunning() {
    return this.p;
  }
  get isPaused() {
    return this.m;
  }
  addCommands(t2) {
    for (const i2 of t2) this.t.push(i2);
    return this;
  }
  clearCommands() {
    return this.t.clear(), this;
  }
  setGlobalOptions(t2, i2 = true) {
    return this.o = i2 ? { ...this.o, ...t2 } : t2, this;
  }
  reset() {
    return this.p ? (this._ = true, this.p = false, this.m = false) : this.k(), this;
  }
  pause() {
    return this.p && (this.m = true), this;
  }
  start() {
    return this.m = false, this.L(), this;
  }
  addCommand(t2, i2, s2 = {}) {
    return this.t.push({ command: t2, argument: i2, options: s2 }), this;
  }
  type(t2, i2 = {}) {
    return this.addCommand("type", t2, i2), this.L(), this;
  }
  backspace(t2, i2 = {}) {
    return this.addCommand("backspace", t2, i2), this.L(), this;
  }
  arrowLeft(t2, i2 = {}) {
    return this.addCommand("arrowLeft", t2, i2), this.L(), this;
  }
  arrowRight(t2, i2 = {}) {
    return this.addCommand("arrowRight", t2, i2), this.L(), this;
  }
  wait(t2, i2 = {}) {
    return this.addCommand("wait", t2, i2), this.L(), this;
  }
  async L() {
    if (!this.p) {
      for (this.p = true; !this.t.isEmpty(); ) {
        if (this.m && await this.C(), this._) return void this.k();
        const t2 = this.t.pop();
        switch (this.u = { ..._s.defaultOptions, ...this.o, ...t2.options }, this.u.onBeforeChange(this.i, this.h), t2.command) {
          case "type":
            await this.R(t2.argument);
            break;
          case "backspace":
            await this.v(t2.argument);
            break;
          case "arrowLeft":
            await this.P(t2.argument);
            break;
          case "arrowRight":
            await this.A(t2.argument);
            break;
          case "wait":
            await this.M(t2.argument);
        }
        this.u.onAfterChange(this.i, this.h);
      }
      this.p = false, this.l();
    }
  }
  l() {
    this.p = false, this.m = false, this._ = false, this.t.clear(), this.i = "", this.h = 0;
  }
  k() {
    this.l(), this.u.onChange(this.i, this.h);
  }
  async C() {
    await new Promise((t2) => {
      const i2 = () => {
        this.m ? requestAnimationFrame(i2) : t2();
      };
      i2();
    });
  }
  async R(t2) {
    const s2 = t2.length;
    for (let h = 0; h < s2; ++h) {
      if (this.m && await this.C(), this._) return void this.k();
      await i((i2) => {
        this.q(t2[h]), this.u.onChange(this.i, this.h), i2();
      }, this.u.speed);
    }
  }
  B(t2) {
    const i2 = this.i.length + 1;
    return (t2 % i2 + i2) % i2;
  }
  async v(t2) {
    t2 = this.B(t2);
    for (let s2 = 0; s2 < t2; ++s2) {
      if (this.m && await this.C(), this._) return void this.k();
      await i((t3) => {
        this.F(), this.u.onChange(this.i, this.h), t3();
      }, this.u.speed);
    }
  }
  async P(t2) {
    t2 = this.B(t2);
    for (let s2 = 0; s2 < t2; ++s2) {
      if (this.m && await this.C(), this._) return void this.k();
      await i((t3) => {
        this.G(), this.u.onChange(this.i, this.h), t3();
      }, this.u.speed);
    }
  }
  async A(t2) {
    t2 = this.B(t2);
    for (let s2 = 0; s2 < t2; ++s2) {
      if (this.m && await this.C(), this._) return void this.k();
      await i((t3) => {
        this.O(), this.u.onChange(this.i, this.h), t3();
      }, this.u.speed);
    }
  }
  async M(t2) {
    await i((t3) => {
      t3(), this._ && this.k();
    }, t2);
  }
  q(t2) {
    this.i = this.i.slice(0, this.h) + t2 + this.i.slice(this.h), ++this.h;
  }
  F() {
    this.i = this.i.slice(0, this.h - 1) + this.i.slice(this.h), --this.h;
  }
  G() {
    this.h = Math.max(this.h - 1, 0);
  }
  O() {
    this.h = Math.min(this.h + 1, this.i.length);
  }
};
s.defaultOptions = { speed: 100, onChange: () => {
}, onBeforeChange: () => {
}, onAfterChange: () => {
} };
export {
  s as default
};
/*! Bundled license information:

super-typer/dist/super-typer.mjs:
  (**
   * super-typer
   * A JavaScript library for typing effects
   *
   * @version 0.1.6
   * @author Wujue
   * @email wujue0115@gmail.com
   * @github https://github.com/Wujue0115
   * @license MIT
   * @link https://github.com/wujue0115/super-typer
   *)
*/
//# sourceMappingURL=super-typer.js.map
