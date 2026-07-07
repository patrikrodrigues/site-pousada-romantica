import { cn } from "@/lib/utils";

type HeadingProps = React.ComponentPropsWithoutRef<"h1"> & {
  as?: "h1" | "h2" | "h3" | "h4";
};

export function Heading({ as: Component = "h2", className, children, ...props }: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-[family-name:var(--font-cormorant)] text-[#223127] leading-tight",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
