import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

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

const BUDGETS = [
  "Under MK50,000",
  "MK100,000 – MK300,000",
  "MK350,000 – MK500,000",
  "MK600,000+",
];

const inputClass =
  "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15";

function BookPage() {
  const [shootType, setShootType] = useState(SHOOT_TYPES[0]!);
  const [budget, setBudget] = useState(BUDGETS[1]!);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");

  // Honeypot field
  const [hpValue, setHpValue] = useState("");

  // Time-trap
  const [formLoadedAt] = useState(() => Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Check honeypot via state and FormData
    const formData = new FormData(e.currentTarget);
    const hpSubmitted = (formData.get("hp_confirm")?.toString() || hpValue).trim();

    // Block bots that fill the hidden honeypot field
    if (hpSubmitted !== "") {
      console.log("Spam submission blocked (honeypot).");
      setSent(true);
      return;
    }

    // Block submissions made unrealistically quickly
    if (Date.now() - formLoadedAt < 2000) {
      console.log("Spam submission blocked (too fast).");
      setSent(true);
      return;
    }

    setSending(true);

    try {
      await emailjs.sendForm(
        "service_xiyk2js",
        "template_o174voq",
        e.currentTarget,
        {
          publicKey: "VPoMsdr9538BV0n9G",
        }
      );

      setSent(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(
        "Sorry, your booking request could not be sent. Please try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-background page-enter">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pt-16 pb-10 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />

        <Reveal className="relative mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Book A Shoot
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-[1.05] md:text-6xl">
            Tell Us About Your Shoot.
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Share the brief and we'll reply within one working day with a crew,
            a schedule and a fixed price.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        {sent ? (
          <Reveal
            from="scale"
            className="soft-card rounded-3xl p-10 text-center"
          >
            <span className="mx-auto inline-flex rounded-2xl brand-gradient px-4 py-3 text-sm font-bold text-brand-foreground">
              Sent
            </span>

            <h2 className="mt-6 text-2xl font-bold">
              Thanks{name ? `, ${name.split(" ")[0]}` : ""} — request received.
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
              We've got your {shootType.toLowerCase()} brief. Expect a reply
              with availability and a fixed quote within one working day.
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
            <form
              onSubmit={handleSubmit}
              className="soft-card relative space-y-6 rounded-3xl p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Full name
                  </span>

                  <input
                    required
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    placeholder="Jordan Miles"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email
                  </span>

                  <input
                    required
                    type="email"
                    name="email"
                    className={inputClass}
                    placeholder="you@studio.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    className={inputClass}
                    placeholder="+265 888 16755"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Preferred date
                  </span>

                  <input
                    required
                    type="date"
                    name="date"
                    className={inputClass}
                  />
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

                <input
                  type="hidden"
                  name="shoot_type"
                  value={shootType}
                />
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

                <input
                  type="hidden"
                  name="budget"
                  value={budget}
                />
              </fieldset>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Location
                </span>

                <input
                  name="location"
                  className={inputClass}
                  placeholder="Blantyre, or a venue name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Tell us more about your shoot
                </span>

                <textarea
                  required
                  name="message"
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="What are we shooting, who's it for, and where will it run?"
                />
              </label>

              {/* Honeypot anti-spam field */}
              <div
                className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
                aria-hidden="true"
              >
                <label htmlFor="hp_confirm">
                  Leave this field empty
                </label>

                <input
                  id="hp_confirm"
                  name="hp_confirm"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={hpValue}
                  onChange={(e) => setHpValue(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full brand-gradient px-6 py-3.5 text-sm font-semibold text-brand-foreground btn-motion brand-glow disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Booking Request"}
              </button>
            </form>
          </Reveal>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}