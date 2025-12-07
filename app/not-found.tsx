// app/not-found.tsx
import { spaceGrotesk } from "@/lib/fonts";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1
          className={`${spaceGrotesk.className} text-2xl font-semibold md:text-3xl`}
        >
          Page under construction
        </h1>
        <p className="mt-3 text-sm text-[color:var(--muted)] md:text-base">
          This page isn&apos;t available yet. I&apos;m still building out my
          portfolio sections.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm transition hover:border-[#C35A33]"
        >
          ← Back to home
        </a>
      </div>
    </main>
  );
}
