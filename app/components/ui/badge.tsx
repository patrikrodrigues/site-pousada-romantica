import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#D9D0C2] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#223127] backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}
