import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import RgbHexConverter from "@/components/tools/RgbHexConverter";

const tool = getTool("rgb-hex-converter")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "rgb-hex-converter");
  return (
    <ToolLayout tool={tool} index={index}>
      <RgbHexConverter />
    </ToolLayout>
  );
}
