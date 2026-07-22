"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function JsonFormatter() {
  const [input, setInput] = useState('{"name":"Ali","level":6}');
  const [output, setOutput] = useState("");

  function format() {
    try {
      setOutput(JSON.stringify(JSON.parse(input), null, 2));
    } catch {
      setOutput("خطأ: JSON غير صالح");
    }
  }

  function minify() {
    try {
      setOutput(JSON.stringify(JSON.parse(input)));
    } catch {
      setOutput("خطأ: JSON غير صالح");
    }
  }

  return (
    <div>
      <div className="mb-3.5">
        <label className="field-label">JSON غير منسّق</label>
        <textarea
          className="field-input min-h-[100px] mt-1.5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <button className="btn-action" onClick={format}>
          نسّق
        </button>
        <button className="btn-ghost" onClick={minify}>
          ضغط (minify)
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
