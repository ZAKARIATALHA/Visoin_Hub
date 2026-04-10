interface LogoMarkProps {
  size?: number;
  className?: string;
  white?: boolean;
}

export function LogoMark({ size = 36, className = "", white }: LogoMarkProps) {
  const gradId = "vh-grad";
  const gradIdDark = "vh-grad-dark";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="40" y1="10" x2="160" y2="190" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={white ? "#ffffff" : "#004d40"} />
          <stop offset="55%" stopColor={white ? "#e0e0e0" : "#006050"} />
          <stop offset="100%" stopColor={white ? "#cccccc" : "#00816A"} />
        </linearGradient>
        <linearGradient id={gradIdDark} x1="40" y1="10" x2="160" y2="190" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={white ? "#aaaaaa" : "#003d33"} />
          <stop offset="100%" stopColor={white ? "#888888" : "#005044"} />
        </linearGradient>
      </defs>

      {/*
        Logo structure — 7 separate pieces with white gaps between:
        1. Top-left blade   2. Top-right blade
        3. Bottom-left blade 4. Bottom-right blade
        5. Left diamond     6. Right diamond
        7. Center star
      */}

      {/* ── TOP-LEFT BLADE ── */}
      {/* Runs from center-top down-left, forms left side of the upper V */}
      <path
        d="M100 7
           L58 63
           L72 73
           L87 82
           L96 76
           L100 68
           Z"
        fill={`url(#${gradId})`}
      />

      {/* ── TOP-RIGHT BLADE ── */}
      <path
        d="M100 7
           L142 63
           L128 73
           L113 82
           L104 76
           L100 68
           Z"
        fill={`url(#${gradId})`}
      />

      {/* ── BOTTOM-LEFT BLADE ── */}
      <path
        d="M100 193
           L58 137
           L72 127
           L87 118
           L96 124
           L100 132
           Z"
        fill={`url(#${gradId})`}
      />

      {/* ── BOTTOM-RIGHT BLADE ── */}
      <path
        d="M100 193
           L142 137
           L128 127
           L113 118
           L104 124
           L100 132
           Z"
        fill={`url(#${gradId})`}
      />

      {/* ── LEFT DIAMOND ── */}
      <path
        d="M7 100
           L62 84
           L78 92
           L84 100
           L78 108
           L62 116
           Z"
        fill={`url(#${gradId})`}
      />

      {/* ── RIGHT DIAMOND ── */}
      <path
        d="M193 100
           L138 84
           L122 92
           L116 100
           L122 108
           L138 116
           Z"
        fill={`url(#${gradId})`}
      />

      {/* ── CENTER SMALL STAR ── */}
      <path
        d="M100 84
           L103.5 96.5
           L116 100
           L103.5 103.5
           L100 116
           L96.5 103.5
           L84 100
           L96.5 96.5
           Z"
        fill={`url(#${gradIdDark})`}
      />
    </svg>
  );
}

interface LogoFullProps {
  className?: string;
  dark?: boolean;
}

export function LogoFull({ className = "", dark }: LogoFullProps) {
  const textColor = dark ? "text-white" : "text-primary";
  const subColor  = dark ? "text-white/50" : "text-[#00816A]";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <LogoMark size={38} white={dark} />
      <div className="flex flex-col leading-none">
        <span className={`font-heading text-[1.05rem] font-bold tracking-[0.1em] leading-tight ${textColor}`}>
          VISION HUB
        </span>
        <span className={`text-[8.5px] font-medium tracking-[0.18em] uppercase leading-tight mt-0.5 ${subColor}`}>
          Operational Hub&nbsp;|&nbsp;Morocco
        </span>
      </div>
    </div>
  );
}
