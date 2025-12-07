// app/page.tsx
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const skills = {
  Backend: ["Laravel", "NestJS", "FastAPI", "Flask"],
  Frontend: ["Next.js", "React", "Livewire", "HTML5", "CSS", "Tailwind CSS"],
  "Cloud & DevOps": [
    "AWS (EC2, S3, RDS, SQS)",
    "Linux (Ubuntu)",
    "Nginx",
    "PM2/systemd",
    "Celery",
    "Meilisearch",
    "Stripe API",
  ],
  "Data & ML": [
    "Python",
    "NumPy",
    "Pandas",
    "SciPy",
    "Matplotlib",
    "Seaborn",
    "scikit-learn",
  ],
  "Databases & Tools": ["MySQL", "PostgreSQL", "MongoDB", "Git", "Excel"],
};

const experience = [
  {
    company: "INVOKE Solutions, Malaysia",
    role: "Backend Software Developer",
    period: "Feb 2025 – Present",
    bullets: [
      "Maintain and extend multi-tenant HRMS backend (Laravel, MySQL) for HR Operations.",
      "Built a real-time Chat System with NestJS, MongoDB and Meilisearch-powered search.",
      "Designed a Video Interview Analytics pipeline using FastAPI, Celery, OpenAI and AWS S3.",
      "Integrated Stripe payment gateway for Pactonline platform.",
      "Manage AWS deployments with EC2, S3, Nginx and PM2/systemd services.",
    ],
  },
  {
    company: "SD Tech Solution Sdn Bhd, Selangor",
    role: "Data Migration Analyst",
    period: "May 2023 – Sep 2024",
    bullets: [
      "Planned and executed ETL processes for client systems.",
      "Ensured data integrity and accessibility throughout migration projects.",
    ],
  },
  {
    company: "Telekom Malaysia Berhad",
    role: "Intern",
    period: "Oct 2022 – Mar 2023",
    bullets: [
      "Assisted in maintaining server-side applications and network infrastructure.",
    ],
  },
];

const projects = [
  {
    name: "Adnexio HRMS Backend",
    tag: "Backend · HR & Payroll",
    description:
      "Multi-tenant HR and payroll backend powering daily operations, statutory calculations and staff management.",
    tech: ["Laravel", "MySQL", "AWS", "Redis"],
  },
  {
    name: "Chat System with Search",
    tag: "Backend · Real-time",
    description:
      "Internal chat platform with channels, DMs and full-text search over messages using Meilisearch.",
    tech: ["NestJS", "MongoDB", "Meilisearch", "WebSockets"],
  },
  {
    name: "Video Interview Analytics Pipeline",
    tag: "Backend · AI/ML",
    description:
      "Async pipeline that ingests candidate videos, runs transcription and scoring, and returns structured feedback.",
    tech: ["FastAPI", "Celery", "OpenAI", "AWS S3", "FFmpeg"],
  },
];

export default function Home() {
  return (
    <main
      className={`${inter.className} bg-[#FDF3E3] text-[#2F221B] min-h-screen`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header / Nav */}
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-[#C35A33]/90" />
            <span
              className={`${spaceGrotesk.className} text-sm font-semibold tracking-[0.18em] uppercase`}
            >
              Arief Suid
            </span>
          </div>
          <nav className="hidden text-xs font-medium text-[#7D6A5A] sm:flex gap-5">
            <a href="#about" className="hover:text-[#2F221B]">
              About
            </a>
            <a href="#skills" className="hover:text-[#2F221B]">
              Skills
            </a>
            <a href="#experience" className="hover:text-[#2F221B]">
              Experience
            </a>
            <a href="#projects" className="hover:text-[#2F221B]">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#2F221B]">
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="py-10 md:py-16">
          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-center">
            {/* Text */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#7D6A5A] mb-3">
                Backend · DevOps · AI
              </p>
              <h1
                className={`${spaceGrotesk.className} text-3xl md:text-4xl font-semibold leading-tight`}
              >
                Backend Software Developer
              </h1>
              <p className="mt-3 text-sm md:text-base text-[#7D6A5A] max-w-xl">
                I build reliable backend systems & infrastructure — from HR and
                payroll platforms to real-time chat and video analytics
                pipelines.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-[#C35A33] px-5 py-2 text-sm font-medium text-[#FFF8EC] shadow-sm hover:bg-[#a84929] transition"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#E3D3C1] bg-[#FFF8EC] px-5 py-2 text-sm font-medium text-[#2F221B] hover:border-[#C35A33] transition"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#7D6A5A]">
                {["Laravel & NestJS", "FastAPI & Celery", "AWS & Stripe"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#FFF8EC] border border-[#E3D3C1] px-3 py-1"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Photo card */}
            <aside className="relative">
              <div className="rounded-2xl border border-[#E3D3C1] bg-[#FFF8EC] p-4 shadow-sm">
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
                    <p className="text-xs text-[#7D6A5A]">
                      Full-stack Engineer · Malaysia
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-[#E4A847]/20 px-3 py-1 text-[11px] font-medium text-[#7A5A1A]">
                    Backend · DevOps · AI
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-10 md:py-16 border-t border-[#E3D3C1]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#7D6A5A] uppercase">
              About
            </p>
            <h2
              className={`${spaceGrotesk.className} mt-2 text-xl md:text-2xl font-semibold`}
            >
              Who I am
            </h2>
            <div className="mt-4 space-y-2 text-sm md:text-base text-[#7D6A5A]">
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
                I&apos;m comfortable working close to infrastructure — setting
                up AWS, Nginx, PM2/systemd and deployment scripts to keep
                systems stable in production.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="py-10 md:py-16 border-t border-[#E3D3C1]"
        >
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#7D6A5A] uppercase">
              Skills
            </p>
            <h2
              className={`${spaceGrotesk.className} mt-2 text-xl md:text-2xl font-semibold`}
            >
              What I work with
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-xl border border-[#E3D3C1] bg-[#FFF8EC] p-4"
              >
                <p
                  className={`${spaceGrotesk.className} text-sm font-semibold`}
                >
                  {category}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-[#7D6A5A]">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E3D3C1] bg-[#FDF3E3] px-3 py-1"
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
          className="py-10 md:py-16 border-t border-[#E3D3C1]"
        >
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#7D6A5A] uppercase">
              Experience
            </p>
            <h2
              className={`${spaceGrotesk.className} mt-2 text-xl md:text-2xl font-semibold`}
            >
              Where I&apos;ve worked
            </h2>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <article key={job.company} className="flex gap-4">
                <div className="relative mt-1 hidden w-6 md:block">
                  <div className="absolute left-1.5 top-0 h-full border-l border-[#E3D3C1]" />
                  <span className="relative z-10 inline-block h-3 w-3 rounded-full border border-white bg-[#C35A33]" />
                </div>
                <div className="flex-1 rounded-xl bg-[#FFF8EC] border border-[#E3D3C1] p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p
                        className={`${spaceGrotesk.className} text-sm font-semibold`}
                      >
                        {job.role}
                      </p>
                      <p className="text-xs text-[#7D6A5A]">{job.company}</p>
                    </div>
                    <p className="text-xs text-[#7D6A5A]">{job.period}</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-xs md:text-sm text-[#7D6A5A]">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#E4A847]" />
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
          className="py-10 md:py-16 border-t border-[#E3D3C1]"
        >
          <div className="mb-6">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#7D6A5A] uppercase">
              Projects
            </p>
            <h2
              className={`${spaceGrotesk.className} mt-2 text-xl md:text-2xl font-semibold`}
            >
              Selected work
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-xl border border-[#E3D3C1] bg-[#FFF8EC] p-4 hover:-translate-y-0.5 hover:shadow-sm transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={`${spaceGrotesk.className} text-sm font-semibold`}
                    >
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs md:text-sm text-[#7D6A5A]">
                      {project.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#FDF3E3] px-3 py-1 text-[11px] font-medium text-[#7D6A5A]">
                    {project.tag}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#7D6A5A]">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#E3D3C1] bg-[#FDF3E3] px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-10 md:py-16 border-t border-[#E3D3C1]"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#7D6A5A] uppercase">
              Contact
            </p>
            <h2
              className={`${spaceGrotesk.className} mt-2 text-xl md:text-2xl font-semibold`}
            >
              Let&apos;s work together
            </h2>
            <p className="mt-3 text-sm md:text-base text-[#7D6A5A]">
              I&apos;m open to backend roles, platform teams and AI/ML-adjacent
              work where a strong backend foundation is useful.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a
                href="mailto:ariefsyazry15@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-[#C35A33] px-5 py-2 text-sm font-medium text-[#FFF8EC] shadow-sm hover:bg-[#a84929] transition"
              >
                Email me
              </a>
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#E3D3C1] bg-[#FFF8EC] px-4 py-2 text-sm text-[#2F221B] hover:border-[#C35A33] transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#E3D3C1] bg-[#FFF8EC] px-4 py-2 text-sm text-[#2F221B] hover:border-[#C35A33] transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#E3D3C1] py-6 mt-4">
          <p className="text-xs text-[#7D6A5A]">
            © {new Date().getFullYear()} Muhammad Arief Syazry Suid. Built with
            Next.js & Tailwind CSS.
          </p>
        </footer>
      </div>
    </main>
  );
}
