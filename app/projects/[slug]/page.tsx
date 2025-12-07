// app/projects/[slug]/page.tsx (once params issue is sorted)
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import { spaceGrotesk } from "@/lib/fonts";
import { Pill } from "@/components/ui/Pill";

type ProjectPageProps = {
  params: Promise<{ slug: string }>; // for Next 16 app router
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) as Project | undefined;

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
            Project
          </p>
          <h1
            className={`${spaceGrotesk.className} mt-2 text-2xl font-semibold md:text-3xl`}
          >
            {project.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Pill>{project.tag}</Pill>
            <span className="text-xs text-[color:var(--muted)]">
              Tech: {project.tech.join(" · ")}
            </span>
          </div>
        </header>

        {/* Problem */}
        <section className="mt-6 space-y-2 text-sm text-[color:var(--muted)] md:text-base">
          <h2
            className={`${spaceGrotesk.className} text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]`}
          >
            Problem
          </h2>
          <p>{project.problem}</p>
        </section>

        {/* Approach */}
        <section className="mt-6 space-y-2 text-sm text-[color:var(--muted)] md:text-base">
          <h2
            className={`${spaceGrotesk.className} text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]`}
          >
            Approach
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>

        {/* Impact */}
        <section className="mt-6 space-y-2 text-sm text-[color:var(--muted)] md:text-base">
          <h2
            className={`${spaceGrotesk.className} text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]`}
          >
            Impact
          </h2>
          <p>{project.impact}</p>
        </section>

        <a
          href="/#projects"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm transition hover:border-[color:var(--accent-soft)]"
        >
          ← Back to projects
        </a>
      </div>
    </main>
  );
}
