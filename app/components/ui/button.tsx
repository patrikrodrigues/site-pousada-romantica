import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[#223127] text-white shadow-[0_12px_40px_rgba(34,49,39,0.18)] hover:-translate-y-0.5 hover:bg-[#1a261f]",
    secondary:
      "border border-[#223127] bg-transparent text-[#223127] hover:bg-[#223127] hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  return (
    <button className={cn(baseClass, variants[variant], sizes[size], className)} {...props} />
  );
}
