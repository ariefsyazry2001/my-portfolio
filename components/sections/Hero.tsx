import Image from "next/image";
import { spaceGrotesk } from "@/lib/fonts";
import { Pill } from "@/components/ui/Pill";

export function Hero() {
    return (
        <section className="py-10 md:py-16">
            <div className="grid items-center gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
                {/* Text */}
                <div>
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--accent-soft)]">
                        Full Stack · Backend · DevOps
                    </p>

                    <h1
                        className={`${spaceGrotesk.className} text-3xl font-semibold leading-tight md:text-4xl`}
                    >
                        Full Stack Software Developer
                    </h1>
                    <p className="mt-3 max-w-xl text-sm text-[color:var(--muted)] md:text-base">
                        I build production backends, APIs and simple frontends for HR, chat and video analytics products.
                    </p>
                    <p className="mt-2 text-xs font-medium text-[color:var(--muted)]">
                        Based in Malaysia · Backend Developer at INVOKE Solutions.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">

                        <a
                            href="#projects"
                            className="
    inline-flex items-center justify-center rounded-full
    bg-[color:var(--accent)] px-5 py-2 text-sm font-medium text-[#FFF8EC]
    shadow-sm transition hover:brightness-95
    dark:text-[#22160C]"
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

                    <div className="mt-6 flex flex-wrap gap-2">
                        {["Laravel & NestJS", "FastAPI & Celery", "AWS & Stripe"].map(
                            (item) => (
                                <Pill key={item}>{item}</Pill>
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

                            <Pill>Backend · DevOps · AI</Pill>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}
