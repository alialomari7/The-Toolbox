import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import DiscountCalculator from "@/components/tools/DiscountCalculator";

const tool = getTool("discount-calculator")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "discount-calculator");
  return (
    <ToolLayout tool={tool} index={index}>
      <DiscountCalculator />
    </ToolLayout>
  );
}
