import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CalendarDays, ArrowUpRight } from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g9 from "@/assets/g9.jpg";
import g11 from "@/assets/g11.jpg";
import g12 from "@/assets/g12.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Notes From The Creative Works Crew" },
      {
        name: "description",
        content:
          "Behind-the-scenes notes, lighting breakdowns and production diaries from the Creative Works photography and videography team.",
      },
      { property: "og:title", content: "Journal — Creative Works" },
      {
        property: "og:description",
        content:
          "Lighting breakdowns, gear notes and production diaries from our photography and videography shoots.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JournalPage,
});

const TOPICS = ["All", "Behind The Scenes", "Lighting", "Gear", "Post"] as const;

type Post = {
  title: string;
  topic: (typeof TOPICS)[number];
  date: string;
  read: string;
  img: string;
  alt: string;
  excerpt: string;
};

const POSTS: Post[] = [
  {
    title: "Shooting A Two-Day Brand Film On One Location",
    topic: "Behind The Scenes",
    date: "12 Jul 2026",
    read: "6 min",
    img: g2,
    alt: "City street scene from a documentary shoot",
    excerpt: "How we scheduled 14 setups in a single warehouse without ever relighting from scratch.",
  },
  {
    title: "The Three-Light Setup We Use For Almost Every Portrait",
    topic: "Lighting",
    date: "28 Jun 2026",
    read: "4 min",
    img: g4,
    alt: "Wildlife portrait captured on location",
    excerpt: "A key, a negative fill and one honeycombed rim — the rest is just distance.",
  },
  {
    title: "Why We Still Grade Every Frame By Hand",
    topic: "Post",
    date: "09 Jun 2026",
    read: "5 min",
    img: g12,
    alt: "Mural backdrop for an editorial session",
    excerpt: "LUTs get you 70% there. The last 30% is what clients actually remember.",
  },
  {
    title: "Our Travel Kit For A Ten-Day Documentary Shoot",
    topic: "Gear",
    date: "22 May 2026",
    read: "7 min",
    img: g3,
    alt: "Architectural facade study",
    excerpt: "Two bodies, four primes, one drone — and everything that stayed at home.",
  },
  {
    title: "Macro Product Work Without A Studio",
    topic: "Lighting",
    date: "03 May 2026",
    read: "3 min",
    img: g9,
    alt: "Macro texture study",
    excerpt: "A window, a bounce card and a focus rail beat a rented cyc more often than you'd think.",
  },
  {
    title: "Planning A Wedding Timeline Around The Light",
    topic: "Behind The Scenes",
    date: "18 Apr 2026",
    read: "5 min",
    img: g11,
    alt: "Tropical foliage detail shot",
    excerpt: "Move the portraits, not the ceremony — a scheduling note we give every couple.",
  },
];

function JournalPage() {
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("All");
  const [query, setQuery] = useState("");

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter(
      (p) =>
        (topic === "All" || p.topic === topic) &&
        (q === "" ||
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)),
    );
  }, [topic, query]);

  return (
    <div className="min-h-screen bg-background page-enter">
      <SiteHeader />

      <section className="relative overflow-hidden px-6 pt-16 pb-10 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
        <Reveal className="relative mx-auto max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Journal</p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] md:text-6xl">
            Notes From The Set.
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Lighting breakdowns, gear lists and production diaries from our shoots.
          </p>

          <div className="mx-auto mt-8 flex max-w-md items-center gap-3 rounded-full glass-brand px-5 py-3">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the journal"
              aria-label="Search the journal"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {TOPICS.map((t) => (
            <button
              key={t}
              onClick={() => setTopic(t)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium btn-motion ${
                topic === t
                  ? "brand-gradient tab-pop text-brand-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        {posts.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted-foreground">
            No entries match that search.
          </p>
        ) : (
          <div key={`${topic}-${query}`} className="grid gap-6 page-enter md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.title}
                className="group soft-card overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1"
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span className="rounded-full bg-brand/10 px-2.5 py-1 font-semibold text-brand">
                      {p.topic}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="size-3.5" />
                      {p.date}
                    </span>
                    <span>· {p.read}</span>
                  </div>
                  <h2 className="mt-4 text-lg font-bold leading-snug">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-brand">
                    Read entry
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="border-t border-border bg-[color-mix(in_oklab,var(--brand)_5%,white)] px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Planning A Shoot?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Tell us the brief and we'll come back with a crew, a schedule and a fixed price.
        </p>
        <Link
          to="/services"
          className="mt-8 inline-block rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground btn-motion brand-glow"
        >
          See Services
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
