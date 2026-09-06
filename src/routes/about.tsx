import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Himalayan College" },
      { name: "description", content: "Learn about Himalayan College of Business & Technology, our mission, campus, and commitment to student success." },
      { property: "og:title", content: "About — Himalayan College" },
      { property: "og:description", content: "Learn about Himalayan College of Business & Technology, our mission, campus, and commitment to student success." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden border-b border-ink/5 bg-gradient-to-br from-sand via-cream to-cream pb-16 pt-16">
        <div className="pointer-events-none absolute -right-16 -top-24 size-96 rounded-full bg-accent-gold/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-20 size-80 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-gold">About us</p>
          <h1 className="mt-3 max-w-[24ch] font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            A college built around clarity
          </h1>
          <p className="mt-5 max-w-[52ch] text-pretty text-lg leading-relaxed text-muted-warm">
            We believe choosing a degree should feel straightforward. Our programmes are designed so every student knows what they will study, what skills they will gain, and where those skills can lead.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink">Our mission</h2>
            <p className="mt-4 leading-relaxed text-muted-warm">
              Himalayan College of Business & Technology exists to make higher education transparent. We run four undergraduate programmes — BBA, BICTE, BBM, and BBS — each mapped to real career paths and local industry needs.
            </p>
            <p className="mt-4 leading-relaxed text-muted-warm">
              Our faculty combine academic training with practical experience, and our campus is designed for focused study, group work, and hands-on projects.
            </p>
          </div>
          <div className="rounded-2xl bg-sand/60 p-6 ring-1 ring-ink/5">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink">Quick facts</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                <dt className="text-muted-warm">Established</dt>
                <dd className="font-medium text-ink">1998</dd>
              </div>
              <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                <dt className="text-muted-warm">Programmes</dt>
                <dd className="font-medium text-ink">4 undergraduate degrees</dd>
              </div>
              <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                <dt className="text-muted-warm">Students</dt>
                <dd className="font-medium text-ink">1,200+ enrolled</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-warm">Campus</dt>
                <dd className="font-medium text-ink">Hillside, Nepal</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 rounded-2xl bg-brand px-6 py-10 text-cream sm:px-10 sm:py-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight sm:text-3xl">
                Visit the campus
              </h2>
              <p className="mt-2 max-w-[48ch] text-pretty text-cream/80">
                The best way to decide is to see the place. Book a campus tour and meet an admissions counsellor in person.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cream px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-sand"
            >
              Book a visit <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
