"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function Base64Converter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function encode() {
    try {
      setOutput(btoa(unescape(encodeURIComponent(input))));
    } catch {
      setOutput("خطأ في التشفير");
    }
  }

  function decode() {
    try {
      setOutput(decodeURIComponent(escape(atob(input))));
    } catch {
      setOutput("نص Base64 غير صالح");
    }
  }

  return (
    <div>
      <div className="mb-3.5">
        <label className="field-label">النص</label>
        <textarea
          className="field-input min-h-[100px] mt-1.5"
          placeholder="اكتب نص هنا"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <button className="btn-action" onClick={encode}>
          تشفير Encode
        </button>
        <button className="btn-ghost" onClick={decode}>
          فك التشفير Decode
        </button>
      </div>
      <div className="result-box">{output}</div>
      {output && (
        <div className="flex justify-end mt-2">
          <CopyButton text={output} />
        </div>
      )}
    </div>
  );
}
