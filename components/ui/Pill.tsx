// components/ui/Pill.tsx
import React from "react";

type PillProps = React.HTMLAttributes<HTMLSpanElement>;

export function Pill({ className = "", ...props }: PillProps) {
  return (
    <span
      className={`
        inline-flex items-center rounded-full px-3 py-1 text-[11px] font-medium
        bg-[color:var(--foreground)] text-[color:var(--background)]
        border border-[color:var(--border)]
        dark:bg-[#0F0A08] dark:text-[#F9F5EC]
        ${className}
      `}
      {...props}
    />
  );
}
