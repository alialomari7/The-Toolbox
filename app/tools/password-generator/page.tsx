import type { Metadata } from "next";
import { getTool, TOOLS } from "@/lib/tools";
import ToolLayout from "@/components/ToolLayout";
import PasswordGenerator from "@/components/tools/PasswordGenerator";

const tool = getTool("password-generator")!;

export const metadata: Metadata = {
  title: tool.name,
  description: tool.metaDescription,
};

export default function Page() {
  const index = TOOLS.findIndex((t) => t.slug === "password-generator");
  return (
    <ToolLayout tool={tool} index={index}>
      <PasswordGenerator />
    </ToolLayout>
  );
}
