import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import GpaCalculator from "@/components/tools/GpaCalculator";

const tool = getTool("gpa-calculator")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "gpa-calculator");
  return (
    <ToolLayout tool={tool} index={index}>
      <GpaCalculator />
    </ToolLayout>
  );
}
