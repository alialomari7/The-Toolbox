"use client";

import { useMemo, useState } from "react";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("100");
  const [discount, setDiscount] = useState("20");

  const { final, saved } = useMemo(() => {
    const p = parseFloat(price) || 0;
    const d = parseFloat(discount) || 0;
    const savedAmount = (p * d) / 100;
    return { final: p - savedAmount, saved: savedAmount };
  }, [price, discount]);

  return (
    <div>
      <div className="flex gap-3 flex-wrap mb-3.5">
        <div className="flex-1 min-w-[160px] flex flex-col gap-1.5">
          <label className="field-label">السعر الأصلي</label>
          <input
            type="number"
            className="field-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="flex-1 min-w-[160px] flex flex-col gap-1.5">
          <label className="field-label">نسبة الخصم (%)</label>
          <input
            type="number"
            className="field-input"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="stat-box">
          <b className="block font-mono text-lg text-mint">
            {final.toFixed(2)}
          </b>
          <span className="text-sm text-muted">السعر بعد الخصم</span>
        </div>
        <div className="stat-box">
          <b className="block font-mono text-lg text-mint">
            {saved.toFixed(2)}
          </b>
          <span className="text-sm text-muted">مقدار التوفير</span>
        </div>
      </div>
    </div>
  );
}
