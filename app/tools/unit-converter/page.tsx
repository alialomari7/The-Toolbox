import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import UnitConverter from "@/components/tools/UnitConverter";

const tool = getTool("unit-converter")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "unit-converter");
  return (
    <ToolLayout tool={tool} index={index}>
      <UnitConverter />
    </ToolLayout>
  );
}
