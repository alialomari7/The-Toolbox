"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QrGenerator() {
  const [text, setText] = useState("https://example.com");
  const [value, setValue] = useState("https://example.com");

  return (
    <div>
      <div className="flex gap-3 flex-wrap mb-3.5">
        <div className="flex-1 min-w-[160px] flex flex-col gap-1.5">
          <label className="field-label">النص أو الرابط</label>
          <input
            type="text"
            className="field-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <button className="btn-action" onClick={() => setValue(text)}>
        توليد QR
      </button>
      <div className="flex justify-center bg-white rounded-lg p-4 mt-4 w-fit">
        <QRCodeCanvas value={value || "https://example.com"} size={160} />
      </div>
    </div>
  );
}
