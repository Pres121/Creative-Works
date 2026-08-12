import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CalendarDays, Check, Mail, Phone, User } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book A Shoot — Creative Works Photography & Videography" },
      {
        name: "description",
        content:
          "Book a photography or videography shoot with Creative Works. Share your brief, date and budget and we'll reply with a crew, schedule and fixed price.",
      },
      { property: "og:title", content: "Book A Shoot — Creative Works" },
      {
        property: "og:description",
        content:
          "Tell us about your shoot and we'll come back with a crew, a schedule and a fixed price within one working day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

const SHOOT_TYPES = [
  "Campaign Stills",
  "Brand Film",
  "Wedding",
  "Event Coverage",
  "Interiors & Architecture",
  "Aerial / Drone",
];

const BUDGETS = ["Under $2k", "$2k – $5k", "$5k – $10k", "$10k+"];

const inputClass =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15";

function BookPage() {
  const [shootType, setShootType] = useState(SHOOT_TYPES[0]!);
  const [budget, setBudget] = useState(BUDGETS[1]!);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background page-enter">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pt-16 pb-10 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
        <Reveal className="relative mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Book A Shoot</p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] md:text-6xl">
            Tell Us About Your Shoot.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Share the brief and we'll reply within one working day with a crew, a schedule and a
            fixed price.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        {sent ? (
          <Reveal from="scale" className="soft-card rounded-3xl p-10 text-center">
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl brand-gradient">
              <Check className="size-6 text-brand-foreground" />
            </span>
            <h2 className="mt-6 text-2xl font-bold">
              Thanks{name ? `, ${name.split(" ")[0]}` : ""} — request received.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              We've got your {shootType.toLowerCase()} brief. Expect a reply with availability and a
              fixed quote within one working day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground btn-motion brand-glow"
              >
                Back Home
              </Link>
              <button
                onClick={() => setSent(false)}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground btn-motion hover:border-brand hover:text-brand"
              >
                Send Another
              </button>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <form onSubmit={handleSubmit} className="soft-card space-y-6 rounded-3xl p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <User className="size-3.5 text-brand" /> Full name
                  </span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Jordan Miles"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <Mail className="size-3.5 text-brand" /> Email
                  </span>
                  <input
                    required
                    type="email"
                    className={inputClass}
                    placeholder="you@studio.com"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <Phone className="size-3.5 text-brand" /> Phone
                  </span>
                  <input type="tel" className={inputClass} placeholder="+27 82 000 0000" />
                </label>
                <label className="block">
                  <span className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <CalendarDays className="size-3.5 text-brand" /> Preferred date
                  </span>
                  <input required type="date" className={inputClass} />
                </label>
              </div>

              <fieldset>
                <legend className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Shoot type
                </legend>
                <div className="flex flex-wrap gap-2">
                  {SHOOT_TYPES.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setShootType(t)}
                      className={`rounded-full px-4 py-1.5 text-xs font-medium btn-motion ${
                        shootType === t
                          ? "brand-gradient tab-pop text-brand-foreground"
                          : "border border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Budget
                </legend>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`rounded-full px-4 py-1.5 text-xs font-medium btn-motion ${
                        budget === b
                          ? "brand-gradient tab-pop text-brand-foreground"
                          : "border border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Location
                </span>
                <input className={inputClass} placeholder="Cape Town, or a venue name" />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Tell us about the brief
                </span>
                <textarea
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="What are we shooting, who's it for, and where will it run?"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full brand-gradient px-6 py-3.5 text-sm font-semibold text-brand-foreground btn-motion brand-glow"
              >
                Send Booking Request
              </button>
            </form>
          </Reveal>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
