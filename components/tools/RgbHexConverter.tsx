"use client";

import { useState } from "react";

export default function RgbHexConverter() {
  const [hex, setHex] = useState("#5EEAD4");
  const [r, setR] = useState(94);
  const [g, setG] = useState(234);
  const [b, setB] = useState(212);

  function fromHex(v: string) {
    setHex(v);
    const h = v.replace("#", "");
    if (h.length !== 6) return;
    setR(parseInt(h.substr(0, 2), 16));
    setG(parseInt(h.substr(2, 2), 16));
    setB(parseInt(h.substr(4, 2), 16));
  }

  function fromRgb(nr: number, ng: number, nb: number) {
    setR(nr);
    setG(ng);
    setB(nb);
    setHex(
      "#" +
        [nr, ng, nb]
          .map((v) => Math.max(0, Math.min(255, v)).toString(16).padStart(2, "0"))
          .join("")
    );
  }

  return (
    <div>
      <div className="flex gap-3 flex-wrap mb-3.5">
        <div className="flex-1 min-w-[120px] flex flex-col gap-1.5">
          <label className="field-label">HEX</label>
          <input className="field-input" value={hex} onChange={(e) => fromHex(e.target.value)} />
        </div>
        <div className="flex-1 min-w-[80px] flex flex-col gap-1.5">
          <label className="field-label">R</label>
          <input
            type="number"
            className="field-input"
            value={r}
            onChange={(e) => fromRgb(+e.target.value, g, b)}
          />
        </div>
        <div className="flex-1 min-w-[80px] flex flex-col gap-1.5">
          <label className="field-label">G</label>
          <input
            type="number"
            className="field-input"
            value={g}
            onChange={(e) => fromRgb(r, +e.target.value, b)}
          />
        </div>
        <div className="flex-1 min-w-[80px] flex flex-col gap-1.5">
          <label className="field-label">B</label>
          <input
            type="number"
            className="field-input"
            value={b}
            onChange={(e) => fromRgb(r, g, +e.target.value)}
          />
        </div>
      </div>
      <div
        className="h-[60px] rounded-lg border border-border"
        style={{ background: `rgb(${r},${g},${b})` }}
      />
    </div>
  );
}
