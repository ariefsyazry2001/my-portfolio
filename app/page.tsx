// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { spaceGrotesk } from "@/lib/fonts";
import { skills, experience, projects } from "@/lib/data";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header / Nav */}
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
              <a
                href="#about"
                className="transition-colors hover:text-[color:var(--foreground)]"
              >
                About
              </a>
              <a
                href="#skills"
                className="transition-colors hover:text-[color:var(--foreground)]"
              >
                Skills
              </a>
              <a
                href="#experience"
                className="transition-colors hover:text-[color:var(--foreground)]"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="transition-colors hover:text-[color:var(--foreground)]"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-[color:var(--foreground)]"
              >
                Contact
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        {/* Hero */}
        <section className="py-10 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
            {/* Text */}
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--muted)]">
                Backend · DevOps · AI
              </p>
              <h1
                className={`${spaceGrotesk.className} text-3xl font-semibold leading-tight md:text-4xl`}
              >
                Backend Software Developer
              </h1>
              <p className="mt-3 max-w-xl text-sm text-[color:var(--muted)] md:text-base">
                I build reliable backend systems & infrastructure — from HR and
                payroll platforms to real-time chat and video analytics pipelines.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-[#C35A33] px-5 py-2 text-sm font-medium text-[#FFF8EC] shadow-sm transition hover:bg-[#a84929] dark:bg-[#E4A847] dark:text-[#22160C] dark:hover:bg-[#d19a34]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-5 py-2 text-sm font-medium transition hover:border-[#C35A33]"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                {["Laravel & NestJS", "FastAPI & Celery", "AWS & Stripe"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Photo card */}
            <aside className="relative">
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 shadow-sm">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/profile-1.jpg"
                    alt="Portrait of Muhammad Arief Syazry Suid"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div>
                    <p
                      className={`${spaceGrotesk.className} text-sm font-semibold`}
                    >
                      Muhammad Arief Syazry Suid
                    </p>
                    <p className="text-xs text-[color:var(--muted)]">
                      Backend Engineer · Malaysia
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-[#E4A847]/20 px-3 py-1 text-[11px] font-medium text-[#7A5A1A] dark:bg-[#E4A847]/25 dark:text-[#F9F5EC]">
                    Backend · DevOps · AI
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-[color:var(--border)] py-10 md:py-16"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
              About
            </p>
            <h2
              className={`${spaceGrotesk.className} mt-2 text-xl font-semibold md:text-2xl`}
            >
              Who I am
            </h2>
            <div className="mt-4 space-y-2 text-sm text-[color:var(--muted)] md:text-base">
              <p>
                I&apos;m a backend-focused software developer who enjoys turning
                messy business rules into clear, reliable services.
              </p>
              <p>
                I&apos;ve worked on HRMS, chat platforms and video interview
                analytics, combining APIs, background workers and a bit of AI to
                ship practical solutions.
              </p>
              <p>
                I&apos;m comfortable working close to infrastructure — setting up
                AWS, Nginx, PM2/systemd and deployment scripts to keep systems
                stable in production.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="border-t border-[color:var(--border)] py-10 md:py-16"
        >
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Skills
            </p>
            <h2
              className={`${spaceGrotesk.className} mt-2 text-xl font-semibold md:text-2xl`}
            >
              What I work with
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-4"
              >
                <p
                  className={`${spaceGrotesk.className} text-sm font-semibold`}
                >
                  {category}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--border)] bg-[#FDF3E3] px-3 py-1 dark:bg-[#0F0A08]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="border-t border-[color:var(--border)] py-10 md:py-16"
        >
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Experience
            </p>
            <h2
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
                  <span className="relative z-10 inline-block h-3 w-3 rounded-full border border-white bg-[#C35A33] dark:border-[#0B0908] dark:bg-[#E4A847]" />
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

        {/* Projects */}
        <section
          id="projects"
          className="border-t border-[color:var(--border)] py-10 md:py-16"
        >
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Projects
            </p>
            <h2
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
                        className={`${spaceGrotesk.className} text-sm font-semibold`}
                      >
                        {project.name}
                      </h3>
                      <p className="mt-2 text-xs text-[color:var(--muted)] md:text-sm">
                        {project.description}
                      </p>
                    </div>
                    <span className="rounded-full bg-[#FDF3E3] px-3 py-1 text-[11px] font-medium text-[color:var(--muted)] dark:bg-[#0F0A08]">
                      {project.tag}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[color:var(--muted)]">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[color:var(--border)] bg-[#FDF3E3] px-2.5 py-1 dark:bg-[#0F0A08]"
                      >
                        {t}
                      </span>
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

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-[color:var(--border)] py-10 md:py-16"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Contact
            </p>
            <h2
              className={`${spaceGrotesk.className} mt-2 text-xl font-semibold md:text-2xl`}
            >
              Let&apos;s work together
            </h2>
            <p className="mt-3 text-sm text-[color:var(--muted)] md:text-base">
              I&apos;m open to backend roles, platform teams and AI/ML-adjacent
              work where a strong backend foundation is useful.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:ariefsyazry15@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-[#C35A33] px-5 py-2 text-sm font-medium text-[#FFF8EC] shadow-sm transition hover:bg-[#a84929] dark:bg-[#E4A847] dark:text-[#22160C] dark:hover:bg-[#d19a34]"
              >
                Email me
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm transition hover:border-[#C35A33]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm transition hover:border-[#C35A33]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-4 border-t border-[color:var(--border)] py-6 text-xs text-[color:var(--muted)]">
          © {new Date().getFullYear()} Muhammad Arief Syazry Suid. Built with
          Next.js &amp; Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}
