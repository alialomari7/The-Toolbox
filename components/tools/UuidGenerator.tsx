"use client";

import { useState } from "react";
import CopyButton from "@/components/CopyButton";

export default function UuidGenerator() {
  const [uuid, setUuid] = useState("");

  function generate() {
    const id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    setUuid(id);
  }

  return (
    <div>
      <button className="btn-action" onClick={generate}>
        توليد UUID جديد
      </button>
      <div className="result-box">{uuid}</div>
      {uuid && (
        <div className="flex justify-end mt-2">
          <CopyButton text={uuid} />
        </div>
      )}
    </div>
  );
}
