import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Camera,
  Clapperboard,
  Radio,
  PenTool,
  Check,
  Tv,
  Video,
  Signal,
} from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Creative Works Communications" },
      {
        name: "description",
        content:
          "TV programmes, documentaries, adverts, event videography, live streaming, professional photography, graphic design and radio adverts from Creative Works Communications in Blantyre, Malawi.",
      },
      { property: "og:title", content: "Services — Creative Works Communications" },
      {
        property: "og:description",
        content:
          "Multimedia production services: documentaries, TV and radio adverts, event videography, live streaming, photography and graphic design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const FILTERS = ["All", "Video", "Photography", "Audio", "Design"] as const;

type Service = {
  name: string;
  type: (typeof FILTERS)[number];
  icon: typeof Tv;
  blurb: string;
  includes: string[];
};

const SERVICES: Service[] = [
  {
    name: "TV Programmes & Documentaries",
    type: "Video",
    icon: Tv,
    blurb:
      "Broadcast-standard programmes and documentary storytelling, produced end to end for local and international broadcasters.",
    includes: ["Research & scripting", "Field production", "Editing & grading", "Broadcast masters"],
  },
  {
    name: "TV & Video Adverts",
    type: "Video",
    icon: Clapperboard,
    blurb:
      "Commercials and TV spots built around a clear message — including multi-language versions such as Chichewa and English.",
    includes: ["Concept development", "Direction & filming", "Multi-language versions", "Social cutdowns"],
  },
  {
    name: "Event Videography",
    type: "Video",
    icon: Video,
    blurb:
      "Coverage of launches, workshops, conferences and other corporate functions, delivered as highlight and full-length edits.",
    includes: ["Multi-camera crew", "Professional audio", "Highlight film", "Full event edit"],
  },
  {
    name: "Live Streaming",
    type: "Video",
    icon: Signal,
    blurb:
      "Reliable live broadcast of corporate events and functions to online audiences, with an on-site technical team.",
    includes: ["Vision mixing", "Connectivity setup", "Platform delivery", "Recorded archive"],
  },
  {
    name: "Professional Photography",
    type: "Photography",
    icon: Camera,
    blurb:
      "Event, corporate, portrait and documentary photography using the latest state-of-the-art equipment.",
    includes: ["On-location shoots", "Studio portraits", "Editing & retouching", "Print-ready files"],
  },
  {
    name: "Radio & Audio Adverts",
    type: "Audio",
    icon: Radio,
    blurb:
      "Scripted, voiced and mixed radio spots and audio adverts ready for station delivery.",
    includes: ["Scriptwriting", "Voice-over casting", "Sound design", "Station-ready masters"],
  },
  {
    name: "Graphic Design",
    type: "Design",
    icon: PenTool,
    blurb:
      "Brand and campaign design work that keeps your print and digital materials consistent with your films.",
    includes: ["Logos & identity", "Posters & banners", "Digital artwork", "Campaign collateral"],
  },
];

const VALUES = [
  { t: "Professionalism", d: "Work delivered in accordance with professional ethics and standards." },
  { t: "Quality", d: "High quality multimedia products, shot on state-of-the-art equipment." },
  { t: "Affordability", d: "Accessible pricing so quality production is within reach." },
  { t: "Customization", d: "Every production shaped around your brief, audience and budget." },
];

const PROCESS = [
  { n: "01", t: "Brief", d: "We discuss your objective, audience and budget." },
  { n: "02", t: "Plan", d: "Concept, script and production schedule agreed up front." },
  { n: "03", t: "Produce", d: "Filming, photography or recording with our full crew." },
  { n: "04", t: "Deliver", d: "Editing, grading and final files in the formats you need." },
];

function ServicesPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const list = useMemo(
    () => SERVICES.filter((s) => filter === "All" || s.type === filter),
    [filter],
  );

  return (
    <div className="min-h-screen bg-background page-enter">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pt-16 pb-10 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
        <Reveal className="relative mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Services</p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] md:text-6xl">
            What We Have For You.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Creative Works Communications offers an array of multimedia products and services — from
            documentaries and TV adverts to photography, live streaming and graphic design.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium btn-motion ${
                filter === f
                  ? "brand-gradient tab-pop text-brand-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {list.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            Nothing under “{filter}” yet.
          </p>
        ) : (
          <div key={filter} className="grid gap-6 page-enter md:grid-cols-2 lg:grid-cols-3">
            {list.map((s) => (
              <article
                key={s.name}
                className="soft-card h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/10">
                    <s.icon className="size-5 text-brand" />
                  </span>
                  <span className="rounded-full bg-brand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand">
                    {s.type}
                  </span>
                </div>
                <h2 className="mt-5 text-lg font-bold">{s.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.includes.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Check className="size-3.5 shrink-0 text-brand" />
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold md:text-4xl">How We Work</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="soft-card h-full rounded-3xl p-6">
                  <p className="text-sm font-bold text-brand">{p.n}</p>
                  <h3 className="mt-3 text-base font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[color-mix(in_oklab,var(--brand)_5%,white)] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Our Core Values</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-3xl border border-border bg-background p-6">
                <h3 className="text-base font-bold text-brand">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link
              to="/book"
              className="rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground btn-motion brand-glow"
            >
              Book A Shoot
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground btn-motion hover:text-brand"
            >
              About The Company
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
