import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_20px_50px_rgba(34,49,39,0.12)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
