type IconProps = { className?: string; style?: React.CSSProperties };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WebIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden>
      <rect x="4" y="8" width="34" height="24" rx="2" />
      <path d="M15 40h12M21 32v8" />
      <path d="m16 16-4 4 4 4M26 16l4 4-4 4M23 14l-4 12" />
      <circle cx="40" cy="30" r="4" />
      <path d="M40 23v3M40 34v3M33 30h3M44 30h3" />
    </svg>
  );
}

export function AppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden>
      <rect x="10" y="4" width="20" height="40" rx="3" />
      <path d="M17 38h6" />
      <path d="m17 14-3 3 3 3M23 14l3 3-3 3" />
      <circle cx="34" cy="28" r="4" />
      <path d="M34 21v3M34 32v3M27 28h3M38 28h3" />
    </svg>
  );
}

export function AiIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden>
      <rect x="12" y="12" width="24" height="24" rx="3" />
      <path d="M19 30l3-12h4l3 12M20 26h8" />
      <path d="M18 6v6M24 6v6M30 6v6M18 36v6M24 36v6M30 36v6M6 18h6M6 24h6M6 30h6M36 18h6M36 24h6M36 30h6" />
    </svg>
  );
}

export function ChevronLeft({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
      <path d="M55 5 8 30l47 25" />
      <path d="M55 15 25 30l30 15" />
    </svg>
  );
}

export function ChevronRight({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 60 60" className={`${className ?? ""} -scale-x-100`} style={style} fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
      <path d="M55 5 8 30l47 25" />
      <path d="M55 15 25 30l30 15" />
    </svg>
  );
}
