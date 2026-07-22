"use client";

import { useMemo, useState } from "react";

const UNITS: Record<string, Record<string, number>> = {
  length: { m: 1, km: 1000, cm: 0.01, mile: 1609.34, foot: 0.3048 },
  weight: { kg: 1, g: 0.001, lb: 0.453592, ton: 1000 },
};

export default function UnitConverter() {
  const [type, setType] = useState<"length" | "weight" | "temp">("length");
  const [value, setValue] = useState("1");
  const keys = type === "temp" ? ["c", "f", "k"] : Object.keys(UNITS[type]);
  const [from, setFrom] = useState(keys[0]);
  const [to, setTo] = useState(keys[1] || keys[0]);

  function handleTypeChange(t: "length" | "weight" | "temp") {
    setType(t);
    const k = t === "temp" ? ["c", "f", "k"] : Object.keys(UNITS[t]);
    setFrom(k[0]);
    setTo(k[1] || k[0]);
  }

  const result = useMemo(() => {
    const v = parseFloat(value) || 0;
    if (type === "temp") {
      const c = from === "c" ? v : from === "f" ? ((v - 32) * 5) / 9 : v - 273.15;
      const r = to === "c" ? c : to === "f" ? (c * 9) / 5 + 32 : c + 273.15;
      return `${r.toFixed(4)} ${to}`;
    }
    const r = (v * UNITS[type][from]) / UNITS[type][to];
    return `${r.toFixed(4)} ${to}`;
  }, [type, value, from, to]);

  return (
    <div>
      <div className="mb-3.5">
        <label className="field-label">النوع</label>
        <select
          className="field-input mt-1.5"
          value={type}
          onChange={(e) => handleTypeChange(e.target.value as any)}
        >
          <option value="length">الطول</option>
          <option value="weight">الوزن</option>
          <option value="temp">الحرارة</option>
        </select>
      </div>
      <div className="flex gap-3 flex-wrap mb-3.5">
        <div className="flex-1 min-w-[120px] flex flex-col gap-1.5">
          <label className="field-label">من</label>
          <input
            type="number"
            className="field-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex-1 min-w-[120px] flex flex-col gap-1.5">
          <label className="field-label">الوحدة</label>
          <select className="field-input" value={from} onChange={(e) => setFrom(e.target.value)}>
            {keys.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[120px] flex flex-col gap-1.5">
          <label className="field-label">إلى</label>
          <select className="field-input" value={to} onChange={(e) => setTo(e.target.value)}>
            {keys.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="result-box text-[25px] font-display font-bold text-mint">
        {result}
      </div>
    </div>
  );
}
