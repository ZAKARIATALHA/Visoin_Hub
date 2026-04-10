import Image from "next/image";

interface LogoMarkProps {
  size?: number;
  className?: string;
  white?: boolean;
}

export function LogoMark({ size = 36, className = "", white }: LogoMarkProps) {
  return (
    <Image
      // Use the same logo asset across all contexts.
      src="/logovhg.png"
      alt="Vision Hub"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
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
    <div className={`flex items-center gap-3 select-none ${className}`}>
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