import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import QrGenerator from "@/components/tools/QrGenerator";

const tool = getTool("qr-generator")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "qr-generator");
  return (
    <ToolLayout tool={tool} index={index}>
      <QrGenerator />
    </ToolLayout>
  );
}
