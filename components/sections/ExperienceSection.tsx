import { spaceGrotesk } from "@/lib/fonts";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-[color:var(--border)] py-12 md:py-20"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
          Experience
        </p>
        <h2
          id="experience-heading"
          className={`${spaceGrotesk.className} mt-2 text-xl font-semibold md:text-2xl`}
        >
          Where I&apos;ve worked
        </h2>
      </div>
      <div className="space-y-6">
        {experience.map((job) => (
          <article key={job.company} className="flex gap-4">
            <div className="relative mt-1 hidden w-6 md:block">
              <div className="absolute left-1.5 top-0 h-full border-l border-[color:var(--border)]" />

              <span
                className="
    relative z-10 inline-block h-3 w-3 rounded-full
    border border-white bg-[color:var(--accent-soft)]
    dark:border-[#0B0908] dark:bg-[color:var(--accent)]"
              />


            </div>
            <div className="flex-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p
                    className={`${spaceGrotesk.className} text-sm font-semibold`}
                  >
                    {job.role}
                  </p>
                  <p className="text-xs text-[color:var(--muted)]">
                    {job.company}
                  </p>
                </div>
                <p className="text-xs text-[color:var(--muted)]">
                  {job.period}
                </p>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-[color:var(--muted)] md:text-sm">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#E4A847] dark:bg-[#C35A33]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
