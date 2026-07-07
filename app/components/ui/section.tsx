import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("py-20 sm:py-24 lg:py-32", className)} {...props}>
      {children}
    </section>
  );
}
