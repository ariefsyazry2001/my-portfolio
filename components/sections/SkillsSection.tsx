import { spaceGrotesk } from "@/lib/fonts";
import { skills } from "@/lib/data";
import { Pill } from "@/components/ui/Pill";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-[color:var(--border)] py-12 md:py-20"
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted)]">
          Skills
        </p>
        <h2
          id="skills-heading"
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
            <p className={`${spaceGrotesk.className} text-sm font-semibold`}>
              {category}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <Pill key={item} className="text-xs">
                  {item}
                </Pill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
