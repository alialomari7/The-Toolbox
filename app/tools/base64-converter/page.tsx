import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import Base64Converter from "@/components/tools/Base64Converter";

const tool = getTool("base64-converter")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "base64-converter");
  return (
    <ToolLayout tool={tool} index={index}>
      <Base64Converter />
    </ToolLayout>
  );
}
