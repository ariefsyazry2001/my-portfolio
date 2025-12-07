import Link from "next/link";
import { spaceGrotesk } from "@/lib/fonts";
import { projects } from "@/lib/data";
import { Pill } from "@/components/ui/Pill";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-[color:var(--border)] py-12 md:py-20"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
          Projects
        </p>
        <h2
          id="projects-heading"
          className={`${spaceGrotesk.className} mt-2 text-xl font-semibold md:text-2xl`}
        >
          Selected work
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <article className="flex h-full flex-col rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3
                    className={`${spaceGrotesk.className} text-sm font-semibold text-[color:var(--foreground)]`}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs text-[color:var(--muted)] md:text-sm">
                    {project.description}
                  </p>
                </div>

                <Pill className="shrink-0">{project.tag}</Pill>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                {project.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
              <span className="mt-3 text-[11px] font-medium text-[#C35A33] opacity-0 transition group-hover:opacity-100 dark:text-[#E4A847]">
                View project →
              </span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
