"use client";

import Link from "next/link";
import { spaceGrotesk } from "@/lib/fonts";
import ThemeToggle from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center gap-2">
        <span className="h-6 w-6 rounded-full bg-[#C35A33]/90 dark:bg-[#E4A847]" />
        <span
          className={`${spaceGrotesk.className} text-sm font-semibold tracking-[0.18em] uppercase`}
        >
          Arief Suid
        </span>
      </div>
      <div className="flex items-center gap-4">
        <nav className="hidden gap-5 text-xs font-medium text-[color:var(--muted)] sm:flex">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#experience", label: "Experience" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[color:var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
