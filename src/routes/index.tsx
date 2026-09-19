import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";
import { PORTFOLIO_GALLERY, PRODUCTIONS, Shot } from "@/assets/portfolio-images";
import { ImageLightbox } from "@/components/ImageLightbox";
import { HeroVisualCarousel } from "@/components/HeroVisualCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creative Works — Photography & Videography" },
      {
        name: "description",
        content:
          "Creative Works Communications is a photography and videography team crafting brand films, campaign stills, documentaries and event coverage in Malawi and beyond. View the portfolio and book a shoot.",
      },
      { property: "og:title", content: "Creative Works — Photography & Videography" },
      {
        property: "og:description",
        content:
          "Brand films, campaign stills and event coverage by Creative Works Communications. View the portfolio and book a shoot.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CATEGORIES = [
  "All",
  "Brand Films",
  "Portraits",
  "Events",
  "Editorial",
  "Products",
  "Travel",
];

const FEATURES = [
  {
    title: "Professionalism",
    body: "Over two decades producing multimedia in accordance with professional ethics and standards — a crew that has stood the test of time since 2002.",
  },
  {
    title: "Quality",
    body: "TV programmes, documentaries, adverts, event videography and live streaming, all shot on the latest state-of-the-art equipment.",
  },
  {
    title: "Affordability",
    body: "Converging creativity, technology and professionalism so clients effortlessly and affordably access the highest quality multimedia services.",
  },
  {
    title: "Customization",
    body: "A creative, dynamic and friendly team that caters for all — every production shaped around the customer's brief and budget.",
  },
];

const CLIENTS = [
  {
    name: "Malawi Liverpool Wellcome Programme",
    work: "Video documentaries & photography — over 5 years",
  },
  { name: "Baylor College of Medicine", work: "TV spots & health films" },
  { name: "Illovo Sugar Malawi", work: "Events coverage, live streaming & photography" },
  { name: "Aljazeera Television", work: "Supplying local news footage" },
  { name: "'The Boy Who Harnessed The Wind'", work: "Hollywood feature production support" },
  { name: "Save the Children", work: "Field documentaries & campaign films" },
];

const OFFERINGS = [
  { title: "TV programs & documentaries" },
  { title: "Event videography & corporate functions" },
  { title: "Graphic designing & campaign collateral" },
  { title: "Radio & audio adverts" },
  { title: "Professional photography & studio stills" },
  { title: "Multi-camera live streaming" },
];

const SERVICES = ["Photography", "Videography", "Aerial"] as const;

function Index() {
  const [category, setCategory] = useState("All");
  const [service, setService] = useState<(typeof SERVICES)[number]>("Photography");
  const [query, setQuery] = useState("");
  const [featuredTab, setFeaturedTab] = useState("Brand Films");
  const [activeShot, setActiveShot] = useState<Shot | null>(null);

  // Calculate item counts for category pills
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PORTFOLIO_GALLERY.length };
    CATEGORIES.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = PORTFOLIO_GALLERY.filter((s) => s.category === cat).length;
      }
    });
    return counts;
  }, []);

  const shots = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PORTFOLIO_GALLERY.filter(
      (s) =>
        (category === "All" || s.category === category) &&
        (service === "Photography" || s.service === service || service === "Aerial" ? s.service === service : true) &&
        (q === "" ||
          s.title.toLowerCase().includes(q) ||
          s.alt.toLowerCase().includes(q) ||
          (s.client && s.client.toLowerCase().includes(q)) ||
          s.category.toLowerCase().includes(q)),
    );
  }, [category, service, query]);

  const columns = useMemo(() => {
    const cols: Shot[][] = [[], [], [], []];
    shots.forEach((s, i) => cols[i % 4]?.push(s));
    return cols;
  }, [shots]);

  const productions = PRODUCTIONS.filter((p) => p.tab === featuredTab);

  return (
    <div className="min-h-screen bg-background page-enter">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-16 pb-14 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 size-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Multimedia Production Since 2002 · Blantyre, Malawi
            </p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              We Film The Stories
              <br />
              <span className="bg-gradient-to-r from-brand via-brand-soft to-amber-500 bg-clip-text text-transparent">
                Your Brand Tells.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Creative Works Communications produces high quality multimedia — documentaries, TV
              adverts, event videography, live streaming and professional photography — for clients
              across Malawi and beyond.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="relative flex flex-1 items-center gap-3 rounded-full glass-brand px-5 py-3 transition-shadow duration-300 focus-within:ring-4 focus-within:ring-brand/15">
              <span className="text-brand" aria-hidden="true">⌕</span>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search portfolio — MLW, Illovo, Drone, Live Stream"
                aria-label="Search the portfolio"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="size-5 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground"
                >
                  ×
                </button>
              )}
            </div>
            <Link
              to="/book"
              className="rounded-full brand-gradient px-6 py-3 text-center text-sm font-semibold text-brand-foreground btn-motion brand-glow"
            >
              Book A Shoot
            </Link>
          </Reveal>

          <Reveal delay={220} className="mt-8 flex items-center justify-center gap-8 text-sm">
            {SERVICES.map((t) => (
              <button
                key={t}
                onClick={() => setService(t)}
                className={`relative pb-1 font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand after:transition-transform after:duration-300 ${
                  service === t
                    ? "font-semibold text-brand after:scale-x-100"
                    : "text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100"
                }`}
              >
                {t}
              </button>
            ))}
          </Reveal>

          {/* Hero Visual Reel Showcase Banner */}
          <HeroVisualCarousel onSelectShot={setActiveShot} portfolioShots={PORTFOLIO_GALLERY} />
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Production Stills</p>
          <h2 className="text-3xl font-bold md:text-4xl">Explore The Portfolio</h2>

          <Reveal className="flex flex-wrap justify-center gap-2 border-t border-border pt-6">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium btn-motion ${
                  category === c
                    ? "brand-gradient tab-pop text-brand-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-brand/30"
                }`}
              >
                {c} <span className="opacity-75 font-normal">({categoryCounts[c] ?? 0})</span>
              </button>
            ))}
          </Reveal>

          <div className="text-xs text-muted-foreground">
            Showing <strong className="text-foreground">{shots.length}</strong> {service.toLowerCase()} production stills
            {category !== "All" && ` in ${category}`}
            {query && ` matching "${query}"`}
          </div>
        </div>

        {shots.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-dashed border-border p-12 text-center text-sm text-muted-foreground page-enter">
            <p className="text-base font-semibold text-foreground">No matches found</p>
            <p className="mt-1 text-xs">Try selecting another service type or clear your search.</p>
            <button
              onClick={() => {
                setCategory("All");
                setQuery("");
              }}
              className="mt-4 rounded-full border border-border px-4 py-2 text-xs font-semibold text-brand hover:border-brand"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div
            key={`${category}-${service}-${query}`}
            className="mt-8 grid grid-cols-1 gap-4 page-enter sm:grid-cols-2 md:grid-cols-4"
          >
            {columns.map((col, i) => (
              <div key={i} className="flex flex-col gap-4">
                {col.map((img) => (
                  <figure
                    key={img.id}
                    onClick={() => setActiveShot(img)}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-brand/40"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={`w-full ${img.h} object-cover transition-transform duration-700 ease-out group-hover:scale-105`}
                    />

                    {/* Top badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                        {img.service}
                      </span>
                    </div>

                    {/* Hover detail overlay */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 text-xs opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span className="font-bold text-white text-base leading-snug">{img.title}</span>
                      {img.client && (
                        <span className="text-white/80 text-[11px] mt-0.5 font-medium">Client: {img.client}</span>
                      )}
                      <div className="mt-3 flex items-center justify-between">
                        <span className="rounded-full bg-brand/30 px-2.5 py-0.5 font-medium text-white text-[10px] backdrop-blur-md">
                          {img.category}
                        </span>
                        <span className="flex items-center gap-1 rounded-full brand-gradient px-2.5 py-1 font-semibold text-brand-foreground text-[10px] shadow-sm">
                          ⤢ Inspect
                        </span>
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => {
              setCategory("All");
              setQuery("");
            }}
            className="rounded-full brand-gradient px-8 py-3.5 text-sm font-semibold text-brand-foreground btn-motion brand-glow"
          >
            See All Work
          </button>
        </div>
      </section>

      {/* Recent productions */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Portfolio Spotlight</p>
            <h2 className="mt-2 text-4xl font-bold md:text-5xl">Featured Productions</h2>
          </div>
          <div className="flex gap-2">
            {["Brand Films", "Weddings", "Editorial"].map((t) => (
              <button
                key={t}
                onClick={() => setFeaturedTab(t)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium btn-motion ${
                  featuredTab === t
                    ? "brand-gradient tab-pop text-brand-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={featuredTab} className="mt-10 grid gap-5 page-enter md:grid-cols-3">
          {productions.map((p) => (
            <AssetCard key={p.title} {...p} />
          ))}
        </div>
      </section>

     
      {/* What we believe in */}
      <section className="relative overflow-hidden border-t border-border bg-[color-mix(in_oklab,var(--brand)_5%,white)] px-6 py-24">
        <div className="pointer-events-none absolute right-[10%] top-1/3 size-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute left-[5%] bottom-0 size-80 rounded-full bg-brand-soft/25 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <Reveal className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Our Core Values
              </p>
              <h2 className="mt-3 text-4xl font-bold md:text-5xl">What We Believe In</h2>
            </div>

            <Link
              to="/book"
              className="rounded-full brand-gradient px-5 py-2.5 text-sm font-semibold text-brand-foreground btn-motion brand-glow"
            >
              Request A Quote
            </Link>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 90}
                from={i % 2 === 0 ? "left" : "right"}
                className={i % 2 === 1 ? "sm:mt-8" : ""}
              >
                <article className="soft-card h-full rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand text-lg font-bold">
                    ✓
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Lightbox Modal */}
      <ImageLightbox
        activeShot={activeShot}
        shots={shots}
        onClose={() => setActiveShot(null)}
        onSelect={setActiveShot}
      />
    </div>
  );
}

function AssetCard({
  src,
  alt,
  badge,
  title,
  meta,
}: {
  src: string;
  alt: string;
  badge?: string;
  title: string;
  meta: string;
}) {
  return (
    <figure className="group relative overflow-hidden rounded-3xl soft-card border border-border/60">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {badge && (
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full brand-gradient px-3 py-1.5 text-xs font-medium text-brand-foreground shadow-md">
          <span aria-hidden="true">◉</span>
          {badge}
        </span>
      )}

      <figcaption className="flex items-center justify-between px-5 py-4">
        <span className="leading-tight">
          <span className="block text-sm font-semibold">{title}</span>
          <span className="block text-[11px] text-muted-foreground mt-0.5">{meta}</span>
        </span>
        <Link to="/book" className="flex items-center gap-1 text-xs font-semibold text-brand hover:underline">
          Book →
        </Link>
      </figcaption>
    </figure>
  );
}
