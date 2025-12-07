// components/theme-toggle.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Keep `<html>` in sync with our state
  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label="Toggle dark mode"
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E3D3C1] bg-[#FFF8EC] text-xs text-[#7D6A5A] shadow-sm transition hover:border-[#C35A33] hover:text-[#2F221B] dark:border-[#3A2D24] dark:bg-[#1A120F] dark:text-[#E8DCCC] dark:hover:border-[#E4A847]"
    >
      {/* Sun when dark (to go light), moon when light (to go dark) */}
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
