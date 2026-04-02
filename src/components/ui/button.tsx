import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "accent" | "gold";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 text-sm tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark px-7 py-3.5 shadow-sm hover:shadow-md",
  secondary:
    "bg-surface text-primary border border-border hover:border-accent/40 px-7 py-3.5",
  outline:
    "border border-white/30 text-white hover:bg-white/10 px-7 py-3.5",
  ghost: "text-muted hover:text-accent px-4 py-2",
  accent:
    "bg-accent text-white hover:bg-accent-dark px-7 py-3.5 shadow-sm hover:shadow-md",
  gold:
    "bg-gold text-white hover:bg-gold-dark px-7 py-3.5 shadow-sm hover:shadow-md",
};

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
