// app/projects/[slug]/page.tsx
import { spaceGrotesk } from "@/lib/fonts";

type ProjectPageProps = {
  // In Next 16, params is a Promise for dynamic routes
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPlaceholder({ params }: ProjectPageProps) {
  // ✅ Unwrap the Promise
  const { slug } = await params;
  const safeSlug = slug || "this project";

  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
          Project
        </p>
        <h1
          className={`${spaceGrotesk.className} mt-2 text-2xl font-semibold md:text-3xl`}
        >
          Coming soon
        </h1>
        <p className="mt-3 text-sm text-[color:var(--muted)] md:text-base">
          The detail page for{" "}
          <span className="font-mono">{safeSlug}</span> isn&apos;t ready yet.
          I&apos;ll add a full breakdown of the problem, approach, tech stack
          and impact here later.
        </p>

        <a
          href="/#projects"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm transition hover:border-[#C35A33]"
        >
          ← Back to projects
        </a>
      </div>
    </main>
  );
}
