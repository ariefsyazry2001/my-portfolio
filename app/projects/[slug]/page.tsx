// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { projects, type Project } from "@/lib/data";
import { spaceGrotesk } from "@/lib/fonts";
import { Pill } from "@/components/ui/Pill";
import Link from "next/link";

type ProjectPageProps = {
  params: Promise<{ slug: string }>; // Next 16 app router
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug) as Project | undefined;

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
            Project
          </p>
          <h1
            className={`${spaceGrotesk.className} mt-2 text-2xl font-semibold md:text-3xl`}
          >
            {project.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[color:var(--muted)]">
            <Pill>{project.tag}</Pill>
            <span>Tech: {project.tech.join(" · ")}</span>
          </div>

          {project.myRole && (
            <p className="mt-2 text-xs text-[color:var(--muted)]">
              My role: {project.myRole}
            </p>
          )}
        </header>

        {/* Content */}
        <section className="space-y-8 text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
          {/* Problem */}
          <div className="space-y-2 border-t border-[color:var(--border)] pt-4 first:border-none first:pt-0">
            <h2
              className={`${spaceGrotesk.className} text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]`}
            >
              Problem
            </h2>
            <p>{project.problem}</p>
          </div>

          {/* Approach */}
          <div className="space-y-2 border-t border-[color:var(--border)] pt-4">
            <h2
              className={`${spaceGrotesk.className} text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]`}
            >
              Approach
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="space-y-2 border-t border-[color:var(--border)] pt-4">
            <h2
              className={`${spaceGrotesk.className} text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]`}
            >
              Impact
            </h2>
            <p>{project.impact}</p>
          </div>
        </section>

        {/* Back link */}
        <Link
          href="/#projects"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm transition hover:border-[color:var(--accent-soft)]"
        >
          ← Back to projects
        </Link>
      </div>
    </main>
  );
}
