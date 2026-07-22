"use client";

import { useMemo, useState } from "react";

const UNITS: Record<string, number> = {
  second: 1,
  minute: 60,
  hour: 3600,
  day: 86400,
};

const LABELS: Record<string, string> = {
  second: "ثانية",
  minute: "دقيقة",
  hour: "ساعة",
  day: "يوم",
};

export default function TimeConverter() {
  const [value, setValue] = useState("1");
  const [from, setFrom] = useState("hour");
  const [to, setTo] = useState("minute");

  const result = useMemo(() => {
    const v = parseFloat(value) || 0;
    const seconds = v * UNITS[from];
    return (seconds / UNITS[to]).toFixed(4);
  }, [value, from, to]);

  return (
    <div>
      <div className="flex gap-3 flex-wrap mb-3.5">
        <div className="flex-1 min-w-[120px] flex flex-col gap-1.5">
          <label className="field-label">القيمة</label>
          <input
            type="number"
            className="field-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="flex-1 min-w-[120px] flex flex-col gap-1.5">
          <label className="field-label">من</label>
          <select
            className="field-input"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {Object.keys(UNITS).map((u) => (
              <option key={u} value={u}>
                {LABELS[u]}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 min-w-[120px] flex flex-col gap-1.5">
          <label className="field-label">إلى</label>
          <select
            className="field-input"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            {Object.keys(UNITS).map((u) => (
              <option key={u} value={u}>
                {LABELS[u]}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="result-box text-2xl font-display font-bold text-mint">
        {result} {LABELS[to]}
      </div>
    </div>
  );
}
