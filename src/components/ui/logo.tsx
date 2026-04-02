interface LogoMarkProps {
  size?: number;
  className?: string;
  color?: string;
}

export function LogoMark({ size = 32, className = "", color = "currentColor" }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 4-pointed star — Vision Hub brand mark */}
      <path
        d="M50 0 C52 20, 58 38, 80 42 C100 44, 100 44, 80 58 C58 62, 52 80, 50 100 C48 80, 42 62, 20 58 C0 56, 0 56, 20 42 C42 38, 48 20, 50 0Z"
        fill={color}
      />
      {/* Inner star detail */}
      <path
        d="M50 18 C51.5 30, 55 40, 70 44 C82 46, 82 46, 70 56 C55 60, 51.5 70, 50 82 C48.5 70, 45 60, 30 56 C18 54, 18 54, 30 44 C45 40, 48.5 30, 50 18Z"
        fill={color}
        opacity="0.3"
      />
    </svg>
  );
}

interface LogoFullProps {
  className?: string;
  dark?: boolean;
}

export function LogoFull({ className = "", dark }: LogoFullProps) {
  const starColor = dark ? "#ffffff" : "#006050";
  const textColor = dark ? "text-white" : "text-primary";
  const subColor = dark ? "text-white/50" : "text-accent-light";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={36} color={starColor} />
      <div className="flex flex-col">
        <span className={`font-heading text-lg font-semibold tracking-[0.08em] leading-tight ${textColor}`}>
          VISION HUB
        </span>
        <span className={`text-[9px] font-medium tracking-[0.15em] uppercase leading-tight ${subColor}`}>
          Operational Hub | Morocco
        </span>
      </div>
    </div>
  );
}
