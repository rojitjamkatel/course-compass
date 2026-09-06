import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { courses, searchCourses } from "../lib/courses";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MMC Makwanpur Multiple Campus — Find Your Programme" },
      { name: "description", content: "Explore BBA, BICTE, BBM, and BBS at MMC Makwanpur Multiple Campus. Search courses, read subject details, and choose your future." },
      { property: "og:title", content: "MMC Makwanpur Multiple Campus — Find Your Programme" },
      { property: "og:description", content: "Explore BBA, BICTE, BBM, and BBS at MMC Makwanpur Multiple Campus. Search courses, read subject details, and choose your future." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => searchCourses(query), [query]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sand via-cream to-cream" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-16 -top-24 size-96 rounded-full bg-accent-gold/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-20 size-80 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-16 sm:pb-16 sm:pt-24">
          <div className="max-w-2xl">
            <p className="animate-rise inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand">
              <span className="size-1.5 rounded-full bg-brand" />
              Admissions open · 2026 intake
            </p>
            <h1 className="animate-rise-lg mt-5 max-w-[24ch] font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Find the programme that fits the person you're becoming.
            </h1>
            <p className="animate-rise mt-6 max-w-[46ch] text-pretty text-base leading-relaxed text-muted-warm sm:text-lg">
              Four undergraduate degrees, one campus in the hills. Search by course, browse full syllabi, and see exactly where each programme leads.
            </p>
          </div>

          {/* Search card */}
          <div className="animate-rise mt-10 max-w-3xl rounded-2xl bg-cream/70 p-4 ring-1 ring-ink/10 backdrop-blur-md sm:p-5">
            <label className="sr-only" htmlFor="prog-search">
              Search programmes
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-warm" aria-hidden="true">
                  <Search className="size-4" />
                </span>
                <input
                  id="prog-search"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by course, subject or career…"
                  className="w-full rounded-xl bg-cream py-3 pl-11 pr-4 text-sm text-ink ring-1 ring-ink/10 placeholder:text-muted-warm/70 focus:outline-none focus:ring-2 focus:ring-brand/40"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink/90"
              >
                Search
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs text-muted-warm">Popular:</span>
              {courses.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setQuery(c.name)}
                  className="rounded-full bg-sand px-3 py-1 text-xs font-medium text-ink transition-colors hover:bg-ink/5"
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme grid */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-accent-gold">Programmes</p>
              <h2 className="max-w-[20ch] font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Four ways in
              </h2>
            </div>
            <Link
              to="/courses"
              className="hidden shrink-0 items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-deep sm:inline-flex"
            >
              View all programmes <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((course) => (
              <article
                key={course.slug}
                className="group rounded-2xl bg-sand/60 p-5 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:ring-brand/25"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">{course.name}</span>
                  <span className="text-xs font-medium text-accent-gold">{course.duration.split(",")[0]}</span>
                </div>
                <h3 className="mb-2 font-[family-name:var(--font-display)] text-lg font-medium leading-snug text-ink">{course.fullName}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-warm">{course.tagline}</p>
                <Link
                  to="/courses/$slug"
                  params={{ slug: course.slug }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-all group-hover:gap-2.5"
                >
                  Explore <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-2xl bg-sand/60 p-8 text-center ring-1 ring-ink/5">
              <p className="text-ink">No programmes match "{query}".</p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-3 text-sm font-medium text-brand hover:text-brand-deep"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-brand px-6 py-10 sm:flex-row sm:items-center sm:px-10 sm:py-12">
            <div>
              <h2 className="max-w-[26ch] font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-tight text-cream sm:text-3xl">
                Not sure which programme is yours?
              </h2>
              <p className="mt-2 max-w-[48ch] text-pretty text-sm leading-relaxed text-cream/80 sm:text-base">
                Book a free 30-minute call with our admissions team. We'll map your interests to the right degree and walk you through fees, scholarships and campus visits.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cream px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-sand"
            >
              Book a counselling call <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
