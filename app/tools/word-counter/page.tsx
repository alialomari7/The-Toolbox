import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import WordCounter from "@/components/tools/WordCounter";

const tool = getTool("word-counter")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "word-counter");
  return (
    <ToolLayout tool={tool} index={index}>
      <WordCounter />
    </ToolLayout>
  );
}
