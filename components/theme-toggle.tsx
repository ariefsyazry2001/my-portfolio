// components/theme-toggle.tsx
"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // On mount: read from localStorage or system preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme") as Theme | null;

    let initial: Theme = "light";

    if (stored === "dark" || stored === "light") {
      initial = stored;
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      initial = prefersDark ? "dark" : "light";
    }

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";

      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem("theme", next);

      return next;
    });
  };

  // Avoid flicker / mismatch before we know the theme
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] text-xs text-[color:var(--muted)] shadow-sm"
      >
        🌙
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="
        inline-flex h-8 w-8 items-center justify-center rounded-full
        border border-[color:var(--border)] bg-[color:var(--card)]
        text-xs text-[color:var(--muted)] shadow-sm
        transition hover:border-[color:var(--accent-soft)] hover:text-[color:var(--foreground)]
        dark:border-[#3A2D24] dark:bg-[#1A120F] dark:text-[#E8DCCC] dark:hover:border-[color:var(--accent)]
      "
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
