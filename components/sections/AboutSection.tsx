import { spaceGrotesk } from "@/lib/fonts";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-[color:var(--border)] py-12 md:py-20"
    >
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
          About
        </p>
        <h2
          id="about-heading"
          className={`${spaceGrotesk.className} mt-2 text-xl font-semibold md:text-2xl`}
        >
          Who I am
        </h2>
        <div className="mt-4 space-y-2 text-sm text-[color:var(--muted)] md:text-base">
          <p>
            I&apos;m a backend-focused developer who enjoys turning messy HR and
            operations logic into reliable services and background jobs.
          </p>
          <p>
            Recently, I&apos;ve worked on HRMS backends, a real-time chat system
            and a video interview analytics pipeline — combining REST APIs,
            message queues, Celery workers and OpenAI.
          </p>
          <p>
            I&apos;m comfortable working close to infrastructure: setting up AWS
            EC2, S3 and RDS, wiring Nginx and SSL, and using PM2/systemd to keep
            services running in production.
          </p>
        </div>
      </div>
    </section>
  );
}
