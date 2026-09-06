import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";

import { courses, getCourseBySlug } from "../lib/courses";
import courseLabImage from "../assets/course-lab.jpg";

export const Route = createFileRoute("/courses/$slug")({
  head: ({ params }) => {
    const course = getCourseBySlug(params.slug);
    const title = course ? `${course.fullName} — Himalayan College` : "Programme — Himalayan College";
    const description = course
      ? `Explore the ${course.fullName} programme: ${course.duration}, subjects, eligibility, and career outcomes.`
      : "Explore undergraduate programmes at Himalayan College.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  loader: ({ params }) => {
    const course = getCourseBySlug(params.slug);
    if (!course) throw notFound();
    return course;
  },
  component: CourseDetailPage,
  notFoundComponent: CourseNotFound,
});

function CourseNotFound() {
  return (
    <div className="bg-cream px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-ink">Programme not found</h1>
        <p className="mt-3 text-muted-warm">We couldn't find the course you're looking for.</p>
        <Link
          to="/courses"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-brand-deep"
        >
          Browse all programmes <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

type Tab = "subjects" | "careers" | "eligibility";

function CourseDetailPage() {
  const course = Route.useLoaderData();
  const [activeTab, setActiveTab] = useState<Tab>("subjects");

  const tabs: { key: Tab; label: string }[] = [
    { key: "subjects", label: "Subjects" },
    { key: "careers", label: "Career outcomes" },
    { key: "eligibility", label: "Eligibility" },
  ];

  return (
    <div className="bg-cream">
      <section className="border-b border-ink/5 bg-sand/40 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-brand">Programme detail</p>
              <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                {course.fullName}
              </h1>
              <p className="mt-5 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-warm">{course.description}</p>

              {/* Tabs */}
              <div className="mt-8 flex gap-6 border-b border-ink/10 text-sm font-medium">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`pb-3 transition-colors ${
                      activeTab === tab.key
                        ? "border-b-2 border-brand text-brand"
                        : "border-b-2 border-transparent text-muted-warm hover:text-ink"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="mt-6">
                {activeTab === "subjects" && (
                  <div className="space-y-6">
                    {course.years.map((year) => (
                      <div key={year.title} className="rounded-2xl bg-cream/70 p-5 ring-1 ring-ink/10">
                        <div className="flex items-center justify-between">
                          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">{year.title}</h3>
                          <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-warm">{year.label}</span>
                        </div>
                        <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-warm">{year.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {year.subjects.map((subject) => (
                            <span key={subject} className="rounded-full bg-sand px-3 py-1 text-xs text-ink">
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "careers" && (
                  <div className="max-w-xl">
                    <p className="mb-5 text-muted-warm">Graduates of {course.fullName} typically move into roles such as:</p>
                    <ul className="space-y-3">
                      {course.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-center gap-3 rounded-lg bg-cream/70 px-3 py-2.5 ring-1 ring-ink/10">
                          <span className="size-2 rounded-full bg-brand" />
                          <span className="text-sm font-medium text-ink">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "eligibility" && (
                  <div className="max-w-xl rounded-2xl bg-cream/70 p-6 ring-1 ring-ink/10">
                    <dl className="space-y-4 text-sm">
                      <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                        <dt className="text-muted-warm">Academic requirement</dt>
                        <dd className="font-medium text-ink">{course.eligibility}</dd>
                      </div>
                      <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                        <dt className="text-muted-warm">Duration</dt>
                        <dd className="font-medium text-ink">{course.duration}</dd>
                      </div>
                      <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                        <dt className="text-muted-warm">Credits</dt>
                        <dd className="font-medium text-ink">{course.credits}</dd>
                      </div>
                      <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                        <dt className="text-muted-warm">Annual intake</dt>
                        <dd className="font-medium text-ink">{course.seats}</dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-muted-warm">Intake month</dt>
                        <dd className="font-medium text-ink">{course.intake}</dd>
                      </div>
                    </dl>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky fact card */}
            <aside className="lg:col-span-5">
              <div className="rounded-2xl bg-cream/70 p-6 ring-1 ring-ink/10 backdrop-blur-md lg:sticky lg:top-24">
                <img
                  src={courseLabImage}
                  alt={`Students in a ${course.name} classroom`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="mb-5 aspect-[4/3] w-full rounded-xl object-cover"
                />
                <dl className="space-y-4 text-sm">
                  <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                    <dt className="text-muted-warm">Duration</dt>
                    <dd className="font-medium text-ink">{course.duration}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                    <dt className="text-muted-warm">Credits</dt>
                    <dd className="font-medium text-ink">{course.credits}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-ink/5 pb-3">
                    <dt className="text-muted-warm">Eligibility</dt>
                    <dd className="max-w-[12ch] text-right font-medium text-ink">{course.eligibility}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-muted-warm">Intake</dt>
                    <dd className="font-medium text-ink">{course.intake}</dd>
                  </div>
                </dl>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-brand-deep"
                >
                  Request full syllabus
                </Link>
                <Link
                  to="/contact"
                  className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-brand ring-1 ring-brand/30 transition-colors hover:bg-brand/5"
                >
                  Talk to an admissions counsellor
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Other programmes */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-ink">Explore other programmes</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses
            .filter((c) => c.slug !== course.slug)
            .map((c) => (
              <article
                key={c.slug}
                className="group rounded-2xl bg-sand/60 p-5 ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:ring-brand/25"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">{c.name}</span>
                  <span className="text-xs font-medium text-accent-gold">{c.duration.split(",")[0]}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-warm">{c.tagline}</p>
                <Link
                  to="/courses/$slug"
                  params={{ slug: c.slug }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-all group-hover:gap-2.5"
                >
                  Explore <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </div>
  );
}
