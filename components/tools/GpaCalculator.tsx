"use client";

import { useState } from "react";

type Course = { id: number; grade: number; hours: number };

export default function GpaCalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, grade: 4, hours: 3 },
  ]);
  const [nextId, setNextId] = useState(2);

  function addCourse() {
    setCourses([...courses, { id: nextId, grade: 4, hours: 3 }]);
    setNextId(nextId + 1);
  }

  function removeCourse(id: number) {
    setCourses(courses.filter((c) => c.id !== id));
  }

  function updateCourse(id: number, field: "grade" | "hours", value: number) {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  }

  const totalHours = courses.reduce((s, c) => s + (c.hours || 0), 0);
  const totalPoints = courses.reduce(
    (s, c) => s + (c.grade || 0) * (c.hours || 0),
    0
  );
  const gpa = totalHours > 0 ? (totalPoints / totalHours).toFixed(2) : "—";

  return (
    <div>
      <div className="space-y-2.5 mb-4">
        {courses.map((c) => (
          <div key={c.id} className="flex gap-2 items-end">
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="field-label">التقدير (من 4.0)</label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="4"
                className="field-input"
                value={c.grade}
                onChange={(e) =>
                  updateCourse(c.id, "grade", parseFloat(e.target.value) || 0)
                }
              />
            </div>
            <div className="flex-1 flex flex-col gap-1.5">
              <label className="field-label">عدد الساعات</label>
              <input
                type="number"
                min="1"
                className="field-input"
                value={c.hours}
                onChange={(e) =>
                  updateCourse(c.id, "hours", parseInt(e.target.value) || 0)
                }
              />
            </div>
            <button
              onClick={() => removeCourse(c.id)}
              className="btn-ghost h-[42px]"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
      <button className="btn-ghost mb-4" onClick={addCourse}>
        + إضافة مادة
      </button>
      <div className="result-box text-2xl font-display font-bold text-mint text-center">
        المعدل التراكمي: {gpa}
      </div>
    </div>
  );
}
