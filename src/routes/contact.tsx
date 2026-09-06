import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Himalayan College" },
      { name: "description", content: "Get in touch with Himalayan College admissions. Book a counselling call, request a syllabus, or schedule a campus visit." },
      { property: "og:title", content: "Contact — Himalayan College" },
      { property: "og:description", content: "Get in touch with Himalayan College admissions. Book a counselling call, request a syllabus, or schedule a campus visit." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 800);
  }

  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden border-b border-ink/5 bg-gradient-to-br from-sand via-cream to-cream pb-16 pt-16">
        <div className="pointer-events-none absolute -right-16 -top-24 size-96 rounded-full bg-accent-gold/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-24 top-20 size-80 rounded-full bg-brand/15 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-5">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-gold">Contact</p>
          <h1 className="mt-3 max-w-[24ch] font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Talk to admissions
          </h1>
          <p className="mt-5 max-w-[52ch] text-pretty text-lg leading-relaxed text-muted-warm">
            Ask about a programme, request a syllabus, book a counselling call, or schedule a campus tour. We're here to help you decide.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-2xl bg-sand/60 p-6 ring-1 ring-ink/5 sm:p-8">
            {status === "success" ? (
              <div className="py-10 text-center">
                <div className="mx-auto grid size-12 place-items-center rounded-full bg-brand/10">
                  <Mail className="size-6 text-brand" />
                </div>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">Message sent</h2>
                <p className="mt-2 text-muted-warm">Thank you. Our admissions team will reply within one working day.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-xl bg-brand px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-brand-deep"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full rounded-xl bg-cream px-4 py-3 text-sm text-ink ring-1 ring-ink/10 placeholder:text-muted-warm/70 focus:outline-none focus:ring-2 focus:ring-brand/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-xl bg-cream px-4 py-3 text-sm text-ink ring-1 ring-ink/10 placeholder:text-muted-warm/70 focus:outline-none focus:ring-2 focus:ring-brand/40"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="programme" className="mb-1.5 block text-sm font-medium text-ink">
                    Programme of interest
                  </label>
                  <select
                    id="programme"
                    className="w-full rounded-xl bg-cream px-4 py-3 text-sm text-ink ring-1 ring-ink/10 focus:outline-none focus:ring-2 focus:ring-brand/40"
                  >
                    <option>BBA — Bachelor of Business Administration</option>
                    <option>BICTE — Bachelor of Information & Communication Technology Education</option>
                    <option>BBM — Bachelor of Business Management</option>
                    <option>BBS — Bachelor of Business Studies</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full rounded-xl bg-cream px-4 py-3 text-sm text-ink ring-1 ring-ink/10 placeholder:text-muted-warm/70 focus:outline-none focus:ring-2 focus:ring-brand/40"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-xl bg-brand px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-brand-deep disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-sand/60 p-6 ring-1 ring-ink/5">
              <div className="flex items-start gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10">
                  <Phone className="size-4 text-brand" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">Phone</h3>
                  <p className="mt-1 text-sm text-muted-warm">+977 1 555 0142</p>
                  <p className="text-xs text-muted-warm/80">Sun–Fri, 9:00–17:00</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-sand/60 p-6 ring-1 ring-ink/5">
              <div className="flex items-start gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10">
                  <Mail className="size-4 text-brand" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">Email</h3>
                  <p className="mt-1 text-sm text-muted-warm">admissions@himalayancollege.edu</p>
                  <p className="text-xs text-muted-warm/80">Replies within one working day</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-sand/60 p-6 ring-1 ring-ink/5">
              <div className="flex items-start gap-4">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-brand/10">
                  <MapPin className="size-4 text-brand" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">Campus</h3>
                  <p className="mt-1 text-sm text-muted-warm">Hillside, Kathmandu Valley, Nepal</p>
                  <p className="text-xs text-muted-warm/80">Open for scheduled visits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
