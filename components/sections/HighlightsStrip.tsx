// components/sections/HighlightsStrip.tsx
export function HighlightsStrip() {
  return (
    <section className="py-6 md:py-8">
      <div className="mx-auto grid max-w-4xl gap-4 text-xs text-[color:var(--muted)] md:grid-cols-3 md:text-sm">
        <div>
          <p className="font-semibold text-[color:var(--foreground)]">
            Experience
          </p>
          <p>
            Early-career dev shipping production backends with Laravel, NestJS and FastAPI.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[color:var(--foreground)]">
            Products
          </p>
          <p>HRMS backend, internal chat and video interview analytics tools.</p>
        </div>
        <div>
          <p className="font-semibold text-[color:var(--foreground)]">
            Currently
          </p>
          <p>
            Backend Developer at INVOKE · Open to backend / platform roles.
          </p>
        </div>
      </div>
    </section>
  );
}
