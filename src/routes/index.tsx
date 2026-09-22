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

const INITIAL_PORTFOLIO_COUNT = 8;

function Index() {
  const [expanded, setExpanded] = useState(false);
  const [featuredTab, setFeaturedTab] = useState("Brand Films");
  const [activeShot, setActiveShot] = useState<Shot | null>(null);

  const visibleShots = useMemo(() => {
    return expanded ? PORTFOLIO_GALLERY : PORTFOLIO_GALLERY.slice(0, INITIAL_PORTFOLIO_COUNT);
  }, [expanded]);

  const columns = useMemo(() => {
    const cols: Shot[][] = [[], [], [], []];
    visibleShots.forEach((s, i) => cols[i % 4]?.push(s));
    return cols;
  }, [visibleShots]);

  const productions = PRODUCTIONS.filter((p) => p.tab === featuredTab);

  return (
    <div className="min-h-screen bg-background page-enter">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-8 md:pt-12 pb-12 text-center">
        {/* Layered ambient lighting effects */}
        <div className="pointer-events-none absolute left-1/2 top-0 size-[42rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/12 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-1/4 size-72 rounded-full bg-amber-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-brand shadow-xs backdrop-blur-sm">
              <span className="size-2 rounded-full bg-brand animate-pulse" />
              <span>MULTIMEDIA PRODUCTION SINCE 2002 · BLANTYRE, MALAWI</span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08]">
              We Film The Stories
              <br />
              <span className="bg-gradient-to-r from-brand via-amber-500 to-orange-500 bg-clip-text text-transparent drop-shadow-xs">
                Your Brand Tells.
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Creative Works Communications produces high-impact multimedia — documentaries, TV
              adverts, event coverage, live streaming and commercial stills — for clients
              across Malawi and internationally.
            </p>
          </Reveal>

          <Reveal delay={120} className="mx-auto mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-full brand-gradient px-7 py-3 text-sm font-bold text-brand-foreground btn-motion brand-glow shadow-md"
            >
              <span>Book A Shoot</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-brand/40 hover:bg-secondary/60 hover:scale-105"
            >
              <span>Explore Portfolio</span>
            </a>
          </Reveal>

          {/* Quick trust metrics */}
          <Reveal delay={180} className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="text-brand">✓</span> 22+ Years Track Record
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand">✓</span> 4K & Broadcast Grade
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-brand">✓</span> Hollywood Support Credit
            </span>
          </Reveal>

          {/* Hero Visual Reel Showcase Banner */}
          <HeroVisualCarousel onSelectShot={setActiveShot} portfolioShots={PORTFOLIO_GALLERY} />
        </div>
      </section>

      {/* Gallery */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">Production Stills</p>
          <h2 className="text-3xl font-bold md:text-4xl">Explore The Portfolio</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Displaying <strong className="text-foreground">{visibleShots.length}</strong> of{" "}
            <strong className="text-foreground">{PORTFOLIO_GALLERY.length}</strong> production stills
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 page-enter sm:grid-cols-2 md:grid-cols-4">
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

        <div className="mt-12 flex flex-col items-center justify-center gap-3">
          {!expanded ? (
            <button
              onClick={() => setExpanded(true)}
              className="group inline-flex items-center gap-2 rounded-full brand-gradient px-8 py-4 text-sm font-bold text-brand-foreground btn-motion brand-glow"
            >
              <span>Show More Work ({PORTFOLIO_GALLERY.length - INITIAL_PORTFOLIO_COUNT} more stills)</span>
              <span className="text-base transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </button>
          ) : (
            <button
              onClick={() => setExpanded(false)}
              className="rounded-full border border-border px-6 py-2.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-brand hover:text-brand"
            >
              Show Less ↑
            </button>
          )}
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
            {["Brand Films", "commercial", "Editorial"].map((t) => (
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
                  <h3 className="text-xl font-bold">{f.title}</h3>
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
        shots={PORTFOLIO_GALLERY}
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
