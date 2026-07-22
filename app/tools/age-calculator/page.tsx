import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import AgeCalculator from "@/components/tools/AgeCalculator";

const tool = getTool("age-calculator")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "age-calculator");
  return (
    <ToolLayout tool={tool} index={index}>
      <AgeCalculator />
    </ToolLayout>
  );
}
