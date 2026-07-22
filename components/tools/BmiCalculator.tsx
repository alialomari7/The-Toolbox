"use client";

import { useState } from "react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  function calculate() {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h) return;
    const bmi = w / (h * h);
    const cat =
      bmi < 18.5
        ? "نقص وزن"
        : bmi < 25
        ? "وزن طبيعي"
        : bmi < 30
        ? "زيادة وزن"
        : "سمنة";
    setResult(`${bmi.toFixed(1)} — ${cat}`);
  }

  return (
    <div>
      <div className="flex gap-3 flex-wrap mb-3.5">
        <div className="flex-1 min-w-[160px] flex flex-col gap-1.5">
          <label className="field-label">الوزن (كجم)</label>
          <input
            type="number"
            className="field-input"
            placeholder="70"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex-1 min-w-[160px] flex flex-col gap-1.5">
          <label className="field-label">الطول (سم)</label>
          <input
            type="number"
            className="field-input"
            placeholder="175"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      </div>
      <button className="btn-action" onClick={calculate}>
        احسب BMI
      </button>
      {result && (
        <div className="result-box text-[25px] font-display font-bold text-mint">
          {result}
        </div>
      )}
    </div>
  );
}
