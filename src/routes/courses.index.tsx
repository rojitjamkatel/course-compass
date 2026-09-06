import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { courses, searchCourses } from "../lib/courses";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Programmes — MMC Makwanpur Multiple Campus" },
      { name: "description", content: "Browse all undergraduate programmes at MMC Makwanpur Multiple Campus: BBA, BICTE, BBM, and BBS. Compare subjects, duration, and career outcomes." },
      { property: "og:title", content: "Programmes — MMC Makwanpur Multiple Campus" },
      { property: "og:description", content: "Browse all undergraduate programmes at MMC Makwanpur Multiple Campus: BBA, BICTE, BBM, and BBS. Compare subjects, duration, and career outcomes." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => searchCourses(query), [query]);

  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden border-b border-ink/5 bg-gradient-to-br from-sand via-cream to-cream pb-12 pt-16">
        <div className="pointer-events-none absolute -right-16 -top-24 size-96 rounded-full bg-accent-gold/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-20 size-80 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-gold">Programmes</p>
          <h1 className="mt-3 max-w-[24ch] font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Every programme, explained
          </h1>
          <p className="mt-4 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-warm">
            Compare subjects, duration, and career outcomes across our four undergraduate degrees. Click any card to see the full syllabus.
          </p>

          <div className="mt-8 max-w-2xl rounded-2xl bg-cream/70 p-4 ring-1 ring-ink/10 backdrop-blur-md">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-warm" aria-hidden="true">
                <Search className="size-4" />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by course, subject or career…"
                className="w-full rounded-xl bg-cream py-3 pl-11 pr-4 text-sm text-ink ring-1 ring-ink/10 placeholder:text-muted-warm/70 focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((course) => (
            <article
              key={course.slug}
              className="group flex flex-col rounded-2xl bg-sand/60 p-5 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:ring-brand/25"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">{course.name}</span>
                <span className="text-xs font-medium text-accent-gold">{course.duration.split(",")[0]}</span>
              </div>
              <h2 className="mb-2 font-[family-name:var(--font-display)] text-lg font-medium leading-snug text-ink">{course.fullName}</h2>
              <p className="mb-4 text-sm leading-relaxed text-muted-warm">{course.tagline}</p>
              <div className="mt-auto space-y-1.5 border-t border-ink/5 pt-4 font-mono text-[11px] text-muted-warm">
                <p>Eligibility · {course.eligibility}</p>
                <p>Outcome · {course.outcomes.slice(0, 2).join(", ")}</p>
              </div>
              <Link
                to="/courses/$slug"
                params={{ slug: course.slug }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-all group-hover:gap-2.5"
              >
                View course <span aria-hidden="true">→</span>
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
      </section>
    </div>
  );
}
