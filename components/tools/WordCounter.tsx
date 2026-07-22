"use client";

import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const sentences = (text.match(/[.!?؟]+/g) || []).length;

  return (
    <div>
      <div className="mb-3.5">
        <label className="field-label">النص</label>
        <textarea
          className="field-input min-h-[100px] mt-1.5"
          placeholder="الصق النص هنا للعد الفوري"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        <div className="stat-box">
          <b className="block font-mono text-xl text-mint">{words}</b>
          <span className="text-[15px] text-muted">كلمة</span>
        </div>
        <div className="stat-box">
          <b className="block font-mono text-xl text-mint">{chars}</b>
          <span className="text-[15px] text-muted">حرف</span>
        </div>
        <div className="stat-box">
          <b className="block font-mono text-xl text-mint">{sentences}</b>
          <span className="text-[15px] text-muted">جملة</span>
        </div>
      </div>
    </div>
  );
}
