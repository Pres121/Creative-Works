import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Creative Works Communications" },
      {
        name: "description",
        content:
          "Creative Works Communications: established 2002, re-registered 2023 (TPIN 31659272). Multimedia production in Blantyre, Malawi — mission, vision, core values, services and clients.",
      },
      { property: "og:title", content: "About — Creative Works Communications" },
      {
        property: "og:description",
        content:
          "Facts about Creative Works Communications — a Malawian multimedia production house producing TV programmes, documentaries, adverts, photography and live streaming since 2002.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const FACTS = [
  { k: "Established", v: "2002 (as Creative Works)" },
  { k: "Re-registered", v: "2023" },
  { k: "TPIN", v: "31659272" },
  { k: "Base", v: "Blantyre, Malawi" },
  { k: "Experience", v: "20+ years in multimedia" },
  { k: "Service lines", v: "7" },
];

const VALUES = [
  {
    title: "Professionalism",
    body: "We produce in accordance with professional ethics and standards — a crew that has stood the test of time since 2002.",
  },
  {
    title: "Quality",
    body: "Broadcast-standard programmes, adverts and events coverage, shot on the latest state-of-the-art equipment.",
  },
  {
    title: "Affordability",
    body: "Converging creativity, technology and professionalism so clients effortlessly and affordably access high quality multimedia.",
  },
  {
    title: "Customization",
    body: "A creative, dynamic and friendly team that shapes every production around the customer's brief and budget.",
  },
];

const SERVICES = [
  "TV programs, documentaries and adverts",
  "Event videography for launches, workshops and corporate functions",
  "Graphic designing",
  "Radio adverts",
  "Professional photography",
  "Live streaming",
  "Audio and video adverts",
];

const CLIENTS = [
  {
    name: "Malawi Liverpool Wellcome Programme",
    work: "Video documentaries & photography — over 5 years",
  },
  { name: "Baylor College of Medicine", work: "TV spots" },
  { name: "Illovo Sugar Malawi", work: "Events coverage, live streaming & photography" },
  { name: "Aljazeera Television", work: "Supplying local news" },
  { name: "“The Boy Who Harnessed The Wind”", work: "Hollywood feature production support" },
  { name: "Save the Children", work: "Field documentaries & campaign films" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground page-enter">
      <SiteHeader />

      <main>
        <section className="border-b border-border px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
                About Us
              </p>
              <h1 className="mt-3 text-4xl font-bold md:text-6xl">
                Creative Works Communications
              </h1>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Creative Works Communications, formerly known as Creative Works, was established in
                2002 and re-registered in 2023 under TPIN 31659272. We focus on converging
                creativity, technology and professionalism with the sole aim of ensuring that our
                customers effortlessly and affordably access and use the highest quality multimedia
                services and products. With experience spanning over a decade in video production,
                we have worked with high profile individuals and international production companies
                using the latest state-of-the-art equipment.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FACTS.map((f, i) => (
                <Reveal key={f.k} delay={i * 60}>
                  <div className="soft-card h-full rounded-2xl p-5">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{f.k}</p>
                    <p className="mt-2 text-lg font-bold text-brand">{f.v}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            <Reveal from="left">
              <article className="soft-card h-full rounded-3xl p-8">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To produce high quality multimedia products in accordance to professional ethics
                  and standards while satisfying the customer.
                </p>
              </article>
            </Reveal>
            <Reveal from="right">
              <article className="soft-card h-full rounded-3xl p-8">
                <h2 className="text-2xl font-bold">Our Vision</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Creating compelling and high-quality video content.
                </p>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border bg-[color-mix(in_oklab,var(--brand)_5%,white)] px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-3xl font-bold md:text-4xl">Core Values</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 80} from={i % 2 === 0 ? "left" : "right"}>
                  <article className="soft-card h-full rounded-3xl p-7">
                    <h3 className="text-lg font-bold">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <Reveal from="left">
              <h2 className="text-3xl font-bold md:text-4xl">What We Have For You</h2>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {SERVICES.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="mt-8 inline-block rounded-full brand-gradient px-5 py-2.5 text-sm font-semibold text-brand-foreground btn-motion brand-glow"
              >
                View Services
              </Link>
            </Reveal>

            <Reveal from="right">
              <h2 className="text-3xl font-bold md:text-4xl">What We Have Done For Others</h2>
              <ul className="mt-6 space-y-4">
                {CLIENTS.map((c) => (
                  <li key={c.name} className="border-b border-border pb-4 last:border-0">
                    <p className="text-sm font-bold">{c.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.work}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 className="text-3xl font-bold md:text-4xl">Contact & Registration</h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <dl className="grid gap-6">
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                        Physical address
                      </dt>
                      <dd className="mt-2 text-sm">
                        House No. 13, Nthiwatiwa Drive, New Naperi, Blantyre, Malawi
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                        Postal address
                      </dt>
                      <dd className="mt-2 text-sm">P.O. Box 32216, Blantyre 3, Malawi</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-muted-foreground">Phone</dt>
                      <dd className="mt-2 text-sm">
                        <a href="tel:+265999800094" className="hover:text-brand">
                          0999 800 094
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-muted-foreground">Email</dt>
                      <dd className="mt-2 text-sm">
                        <a href="mailto:chimzere@gmail.com" className="hover:text-brand">
                          chimzere@gmail.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>

                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputClass =
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all duration-300 placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15";

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email.";
    if (phone.trim() && !/^\+?[0-9 \-()]{7,20}$/.test(phone)) e.phone = "Enter a valid phone number.";
    if (!message.trim() || message.trim().length < 10) e.message = "Please enter a message (10+ chars).";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const RECAPTCHA_SITE_KEY = (import.meta.env as any).VITE_RECAPTCHA_SITE_KEY as string | undefined;

  async function loadRecaptcha(siteKey: string) {
    if (!(window as any).grecaptcha) {
      await new Promise<void>((resolve, reject) => {
        const s = document.createElement("script");
        s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error("Failed to load reCAPTCHA script"));
        document.head.appendChild(s);
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!validate()) return;

    setSending(true);

    try {
      let recaptchaToken: string | undefined;
      if (RECAPTCHA_SITE_KEY) {
        await loadRecaptcha(RECAPTCHA_SITE_KEY);
        // @ts-ignore
        recaptchaToken = await (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact" });
      }

      const templateParams: Record<string, any> = {
        name: name || "",
        email: email || "",
        phone: phone || "",
        message: message || "",
      };
      if (recaptchaToken) templateParams.recaptcha = recaptchaToken;

      await emailjs.send("service_eiuzrok", "template_o174voq", templateParams, "VPoMsdr9538BV0n9G");
      setSent(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <Reveal from="scale">
        <div className="soft-card rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold">Message sent</h3>
          <p className="mt-3 text-sm text-muted-foreground">Thanks — we'll be in touch shortly.</p>
          <button
            onClick={() => setSent(false)}
            className="mt-6 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground btn-motion hover:border-brand hover:text-brand"
          >
            Send Another
          </button>
        </div>
      </Reveal>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="soft-card space-y-4 rounded-3xl p-6">
      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Full name</span>
        <input required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Your name" />
        {errors.name ? <p className="mt-1 text-sm text-destructive">{errors.name}</p> : null}
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</span>
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@studio.com" />
        {errors.email ? <p className="mt-1 text-sm text-destructive">{errors.email}</p> : null}
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Phone</span>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="+265 99 9xx xxxx" />
        {errors.phone ? <p className="mt-1 text-sm text-destructive">{errors.phone}</p> : null}
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">Message</span>
        <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClass} resize-none`} placeholder="How can we help?" />
        {errors.message ? <p className="mt-1 text-sm text-destructive">{errors.message}</p> : null}
      </label>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}
      {RECAPTCHA_SITE_KEY ? (
        <p className="mt-1 text-xs text-muted-foreground">reCAPTCHA is enabled.</p>
      ) : (
        <p className="mt-1 text-xs text-muted-foreground">reCAPTCHA not configured (set VITE_RECAPTCHA_SITE_KEY to enable).</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full brand-gradient px-6 py-3.5 text-sm font-semibold text-brand-foreground btn-motion brand-glow"
      >
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
