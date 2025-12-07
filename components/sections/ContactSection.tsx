import { spaceGrotesk } from "@/lib/fonts";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-[color:var(--border)] py-12 md:py-20"
    >
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
          Contact
        </p>
        <h2
          id="contact-heading"
          className={`${spaceGrotesk.className} mt-2 text-xl font-semibold md:text-2xl`}
        >
          Let&apos;s work together
        </h2>
        <p className="mt-3 text-sm text-[color:var(--muted)] md:text-base">
          I&apos;m open to backend roles, platform teams and AI/ML-adjacent work
          where a strong backend foundation is useful.
        </p>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <a
            href="mailto:ariefsyazry15@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-[#C35A33] px-5 py-2 text-sm font-medium text-[#FFF8EC] shadow-sm transition hover:bg-[#a84929] dark:bg-[#E4A847] dark:text-[#22160C] dark:hover:bg-[#d19a34]"
          >
            Email me
          </a>
          <a
            href="https://github.com/ariefsyazry2001"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm transition hover:border-[#C35A33]"
          >
            GitHub
          </a>
          <a
            href="https://my.linkedin.com/in/muhammad-arief-syazry-suid-baa577312/en"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm transition hover:border-[#C35A33]"
          >
            LinkedIn
          </a>

          <a
            href="/cv/muhammad-arief-syazry-suid-cv.pdf"
            download
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-2 text-sm transition hover:border-[color:var(--accent-soft)]"
          >
            Download CV
          </a>


        </div>
      </div>
    </section>
  );
}
