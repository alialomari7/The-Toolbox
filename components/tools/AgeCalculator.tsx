"use client";

import { useState } from "react";

export default function AgeCalculator() {
  const [date, setDate] = useState("");
  const [result, setResult] = useState<{ y: number; m: number; d: number } | null>(
    null
  );

  function calculate() {
    if (!date) return;
    const b = new Date(date);
    const n = new Date();
    let y = n.getFullYear() - b.getFullYear();
    let m = n.getMonth() - b.getMonth();
    let d = n.getDate() - b.getDate();
    if (d < 0) {
      m--;
      d += new Date(n.getFullYear(), n.getMonth(), 0).getDate();
    }
    if (m < 0) {
      y--;
      m += 12;
    }
    setResult({ y, m, d });
  }

  return (
    <div>
      <div className="flex gap-3 flex-wrap mb-3.5">
        <div className="flex-1 min-w-[160px] flex flex-col gap-1.5">
          <label className="field-label">تاريخ الميلاد</label>
          <input
            type="date"
            className="field-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <button className="btn-action" onClick={calculate}>
        احسب العمر
      </button>
      {result && (
        <div className="grid grid-cols-3 gap-2.5 mt-4">
          <div className="stat-box">
            <b className="block font-mono text-xl text-mint">{result.y}</b>
            <span className="text-[15px] text-muted">سنة</span>
          </div>
          <div className="stat-box">
            <b className="block font-mono text-xl text-mint">{result.m}</b>
            <span className="text-[15px] text-muted">شهر</span>
          </div>
          <div className="stat-box">
            <b className="block font-mono text-xl text-mint">{result.d}</b>
            <span className="text-[15px] text-muted">يوم</span>
          </div>
        </div>
      )}
    </div>
  );
}
