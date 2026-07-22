import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import JsonFormatter from "@/components/tools/JsonFormatter";

const tool = getTool("json-formatter")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "json-formatter");
  return (
    <ToolLayout tool={tool} index={index}>
      <JsonFormatter />
    </ToolLayout>
  );
}
