// frontier-field — compact WebGL field web component.
// Echoes the landing frontier grammar at banner scale: spectral candidate
// particles stream from a shared origin, the useful paths converge onto a
// pulsing gold node (inheritance), weak paths redden and recede; the cycle
// loops (diverge -> align -> resolve -> inherit -> reopen).
(() => {
  if (customElements.get('frontier-field')) return;

  const VERT =
    'attribute vec2 a_pos; attribute float a_size; attribute vec3 a_rgb; attribute float a_a;' +
    'varying vec3 v_c; varying float v_a;' +
    'void main(){ gl_Position=vec4(a_pos,0.0,1.0); gl_PointSize=a_size; v_c=a_rgb; v_a=a_a; }';
  const FRAG =
    'precision mediump float; varying vec3 v_c; varying float v_a;' +
    'void main(){ vec2 d=gl_PointCoord-vec2(0.5); float r=length(d); float a=smoothstep(0.5,0.0,r); a=pow(a,1.6); gl_FragColor=vec4(v_c*a*v_a, a*v_a); }';

  const FRONTIER = [[0.15,0.38,1.0],[0.52,0.24,1.0],[1.0,0.14,0.6],[0.08,0.94,0.84],[0.40,0.56,1.0]];
  const GOLD = [1.0,0.78,0.18];
  const RED = [1.0,0.22,0.24];
  const smooth = (x) => { x = Math.max(0, Math.min(1, x)); return x*x*(3-2*x); };

  class FrontierField extends HTMLElement {
    connectedCallback(){
      if (this._init) return; this._init = true;
      if (getComputedStyle(this).position === 'static') this.style.position = 'relative';
      if (!this.style.display) this.style.display = 'block';
      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'position:absolute; inset:0; width:100%; height:100%; display:block;';
      this.appendChild(canvas);
      this._canvas = canvas;

      let gl = null;
      try { gl = canvas.getContext('webgl', { alpha:false, antialias:false, premultipliedAlpha:false }) || canvas.getContext('experimental-webgl'); } catch(e){}
      if (!gl) { this.style.background = 'radial-gradient(circle at 64% 50%, rgba(243,196,73,.16), transparent 60%), #141414'; return; }
      this._gl = gl;

      const sh = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
      const p = gl.createProgram();
      gl.attachShader(p, sh(gl.VERTEX_SHADER, VERT));
      gl.attachShader(p, sh(gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(p); gl.useProgram(p);
      this._aPos = gl.getAttribLocation(p, 'a_pos');
      this._aSize = gl.getAttribLocation(p, 'a_size');
      this._aRgb = gl.getAttribLocation(p, 'a_rgb');
      this._aA = gl.getAttribLocation(p, 'a_a');
      this._buf = gl.createBuffer();

      const dpr = Math.min(2, window.devicePixelRatio || 1); this._dpr = dpr;
      const S = 26, PP = 12;
      const strands = [];
      for (let s = 0; s < S; s++) {
        strands.push({
          c: FRONTIER[(Math.random()*FRONTIER.length)|0],
          spread: (Math.random()-0.5)*1.15,
          len: 1.7 + Math.random()*0.55,
          bow: (Math.random()-0.5),
          aff: s % 5,
          fail: (Math.random()<0.5?-1:1)*(0.4+Math.random()*0.55),
          seed: Math.random()
        });
      }
      const P = [];
      for (let s = 0; s < S; s++) for (let j = 0; j < PP; j++) P.push({ s, u0: Math.random(), sp: 0.05+Math.random()*0.12, size: (3+Math.random()*7)*dpr });
      const G = 46, GP = [];
      for (let g = 0; g < G; g++) GP.push({ u0: Math.random(), jx: (Math.random()-0.5), jy: (Math.random()-0.5), ph: Math.random()*6.283, size: (3+Math.random()*6)*dpr });
      this._strands = strands; this._P = P; this._GP = GP;
      this._data = new Float32Array((P.length + G) * 7);

      this._ro = new ResizeObserver(() => this._resize()); this._ro.observe(this); this._resize();
      this._reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this._last = performance.now(); this._tt = 0; this._era = -1; this._winner = 0;
      const loop = () => { this._draw(); this._raf = requestAnimationFrame(loop); };
      if (this._reduced) { this._tt = 3.4; this._draw(); } else { this._raf = requestAnimationFrame(loop); }
    }

    disconnectedCallback(){ if (this._raf) cancelAnimationFrame(this._raf); if (this._ro) this._ro.disconnect(); }

    _resize(){
      const gl = this._gl; if (!gl) return;
      const w = Math.max(1, this.clientWidth), h = Math.max(1, this.clientHeight);
      const cw = Math.round(w*this._dpr), ch = Math.round(h*this._dpr);
      if (cw === this._cw && ch === this._ch) return;
      this._cw = cw; this._ch = ch; this._canvas.width = cw; this._canvas.height = ch; gl.viewport(0, 0, cw, ch);
    }

    _draw(){
      const gl = this._gl; if (!gl) return;
      const now = performance.now(); let dt = (now - this._last)/1000; this._last = now; if (dt > 0.05) dt = 0.05;
      if (!this._reduced) this._tt += dt;
      const tt = this._tt, T = 7.5;
      const e = Math.floor(tt/T); if (e !== this._era) { this._era = e; this._winner = (this._winner + 1 + ((Math.random()*3)|0)) % 5; }
      const f = (tt % T)/T;
      const energy = f < 0.18 ? 0.25 + 0.75*(f/0.18) : (f < 0.72 ? 1.0 : Math.max(0.25, 1.0 - (f-0.72)/0.28));
      const converge = smooth((f-0.30)/0.34);
      const reopen = smooth((f-0.82)/0.18);
      const goldAmt = 0.22 + smooth((f-0.40)/0.26)*(1-reopen*0.5)*0.66;
      const ox = -0.92, nx = 0.58;
      const strands = this._strands, P = this._P, GP = this._GP, data = this._data;
      let o = 0;
      for (let i = 0; i < P.length; i++) {
        const p = P[i], st = strands[p.s];
        const u = (p.u0 + tt*p.sp) % 1, lf = Math.sin(u*Math.PI);
        let x = ox + u*st.len;
        let y = st.spread*Math.sin(u*Math.PI*0.92) + Math.sin(u*6.0 + st.seed*6.28)*0.02*st.bow;
        const aligned = (st.aff === this._winner) || (st.seed > 0.82);
        const jb = aligned ? converge*smooth((u-0.28)/0.6)*(1-reopen*0.4) : 0;
        const fa = aligned ? 0 : converge*smooth((u-0.22)/0.6)*(1-reopen*0.3);
        x = x*(1-jb) + nx*jb;
        y = y*(1-jb) + (aligned ? 0 : st.fail*fa*(0.2 + u*0.5));
        let r = st.c[0], g = st.c[1], b = st.c[2];
        const comp = Math.min(1, jb*(0.6 + 0.9*converge));
        r += (GOLD[0]-r)*comp; g += (GOLD[1]-g)*comp; b += (GOLD[2]-b)*comp;
        if (fa > 0) { r += (RED[0]-r)*fa*0.6; g += (RED[1]-g)*fa*0.6; b += (RED[2]-b)*fa*0.6; }
        const a = lf*(0.16 + energy*0.5)*(1 - fa*0.7)*(0.6 + comp*1.4);
        const size = p.size*(0.7 + energy*0.5)*(1 + comp*0.8);
        data[o++] = x; data[o++] = y; data[o++] = size; data[o++] = r; data[o++] = g; data[o++] = b; data[o++] = Math.max(0, a);
      }
      for (let i = 0; i < GP.length; i++) {
        const gp = GP[i], u = (gp.u0 + tt*0.05) % 1, lf = Math.sin(u*Math.PI);
        const pulse = 0.7 + 0.3*Math.sin(tt*2.4 + gp.ph);
        const tight = 1 - goldAmt*0.7;
        const x = nx + gp.jx*0.05*tight + Math.sin(tt*0.8 + gp.ph)*0.01;
        const y = gp.jy*0.10*tight;
        const a = goldAmt*lf*(0.2 + energy*0.5)*pulse;
        data[o++] = x; data[o++] = y; data[o++] = gp.size*(0.9 + goldAmt*0.7); data[o++] = GOLD[0]; data[o++] = GOLD[1]; data[o++] = GOLD[2]; data[o++] = Math.max(0, a);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, this._buf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
      gl.clearColor(0.078, 0.078, 0.078, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      const stride = 28;
      gl.enableVertexAttribArray(this._aPos); gl.vertexAttribPointer(this._aPos, 2, gl.FLOAT, false, stride, 0);
      gl.enableVertexAttribArray(this._aSize); gl.vertexAttribPointer(this._aSize, 1, gl.FLOAT, false, stride, 8);
      gl.enableVertexAttribArray(this._aRgb); gl.vertexAttribPointer(this._aRgb, 3, gl.FLOAT, false, stride, 12);
      gl.enableVertexAttribArray(this._aA); gl.vertexAttribPointer(this._aA, 1, gl.FLOAT, false, stride, 24);
      gl.drawArrays(gl.POINTS, 0, P.length + GP.length);
    }
  }
  customElements.define('frontier-field', FrontierField);
})();
