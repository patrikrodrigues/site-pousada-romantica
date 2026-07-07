import { cn } from "@/lib/utils";

export function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-base leading-8 text-[#5F675E]", className)}>{children}</p>
  );
}
