"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function PasswordGenerator() {
  const [len, setLen] = useState(16);
  const [sym, setSym] = useState(true);
  const [num, setNum] = useState(true);
  const [up, setUp] = useState(true);
  const [pw, setPw] = useState("");
  const [strength, setStrength] = useState("—");

  function generate() {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (up) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num) chars += "0123456789";
    if (sym) chars += "!@#$%^&*()-_=+";
    let out = "";
    for (let i = 0; i < len; i++)
      out += chars[Math.floor(Math.random() * chars.length)];
    setPw(out);

    let score = 0;
    if (len >= 12) score++;
    if (/[A-Z]/.test(out)) score++;
    if (/[0-9]/.test(out)) score++;
    if (/[^A-Za-z0-9]/.test(out)) score++;
    const labels = ["ضعيفة", "مقبولة", "جيدة", "قوية", "قوية جدًا"];
    setStrength(labels[score]);
  }

  return (
    <div>
      <div className="mb-3.5">
        <label className="field-label">
          الطول: <span className="text-text">{len}</span>
        </label>
        <input
          type="range"
          min={6}
          max={32}
          value={len}
          onChange={(e) => setLen(parseInt(e.target.value))}
          className="w-full mt-1.5"
        />
      </div>
      <div className="flex gap-4 flex-wrap mb-3.5 text-[14.5px] text-muted">
        <label className="flex items-center gap-1.5">
          <input type="checkbox" checked={sym} onChange={(e) => setSym(e.target.checked)} />
          رموز خاصة (!@#$)
        </label>
        <label className="flex items-center gap-1.5">
          <input type="checkbox" checked={num} onChange={(e) => setNum(e.target.checked)} />
          أرقام
        </label>
        <label className="flex items-center gap-1.5">
          <input type="checkbox" checked={up} onChange={(e) => setUp(e.target.checked)} />
          أحرف كبيرة
        </label>
      </div>
      <button className="btn-action" onClick={generate}>
        توليد كلمة مرور
      </button>
      <div className="result-box">{pw}</div>
      <div className="flex items-center justify-between mt-2">
        <div className="text-[14.5px] text-muted">القوة: {strength}</div>
        <CopyButton text={pw} />
      </div>
    </div>
  );
}
