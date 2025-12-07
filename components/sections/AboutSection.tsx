// components/sections/AboutSection.tsx
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

        <div className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-[color:var(--muted)] md:text-base">
          <p>
            I&apos;m a full stack developer who leans towards backend and
            infrastructure. I like taking messy business rules and turning them
            into clear services, background jobs and APIs.
          </p>
          <p>
            Recently I&apos;ve worked on a multi-tenant HRMS backend, an
            internal chat platform and a video interview analytics pipeline,
            mostly using Laravel, NestJS, FastAPI and Next.js.
          </p>
          <p>
            I&apos;m comfortable working close to production: configuring AWS
            (EC2, S3, RDS), wiring Nginx and SSL, and keeping apps running with
            PM2/systemd and deployment scripts.
          </p>
          <p>
            I enjoy joining existing codebases, understanding how things fit
            together and improving them without breaking what&apos;s already in
            use.
          </p>
        </div>

        {/* How I work
        <div className="mt-6 max-w-2xl border-t border-[color:var(--border)] pt-4 text-xs text-[color:var(--muted)] md:text-sm">
          <p className="font-semibold text-[color:var(--foreground)]">
            How I like to work
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-4">
            <li>I prefer small, focused pull requests with clear commits.</li>
            <li>
              I like to own features end-to-end: from API design to deployment.
            </li>
            <li>
              I&apos;m comfortable reading legacy code and adding tests as I
              refactor.
            </li>
          </ul>
        </div> */}


      </div>
    </section>
  );
}
