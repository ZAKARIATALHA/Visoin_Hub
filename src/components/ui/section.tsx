interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className = "", id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? "bg-dark text-white" : ""} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  light,
  center = true,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 md:mb-18 ${center ? "text-center" : ""}`}>
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] leading-tight ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-white/70" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
