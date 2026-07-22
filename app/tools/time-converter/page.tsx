import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import TimeConverter from "@/components/tools/TimeConverter";

const tool = getTool("time-converter")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "time-converter");
  return (
    <ToolLayout tool={tool} index={index}>
      <TimeConverter />
    </ToolLayout>
  );
}
