import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Camera,
  Clapperboard,
  Film,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";
import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";
import g9 from "@/assets/g9.jpg";
import g10 from "@/assets/g10.jpg";
import g11 from "@/assets/g11.jpg";
import g12 from "@/assets/g12.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Creative Works — Photography & Videography" },
      {
        name: "description",
        content:
          "Creative Works is a photography and videography team crafting brand films, campaign stills and event coverage. View the portfolio and book a shoot.",
      },
      { property: "og:title", content: "Creative Works — Photography & Videography" },
      {
        property: "og:description",
        content:
          "Brand films, campaign stills and event coverage by Creative Works. View the portfolio and book a shoot.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CATEGORIES = [
  "All",
  "Weddings",
  "Brand Films",
  "Portraits",
  "Architecture",
  "Events",
  "Editorial",
  "Products",
  "Travel",
];

type Shot = {
  src: string;
  alt: string;
  h: string;
  category: string;
  service: "Photography" | "Videography" | "Aerial";
};

const GALLERY: Shot[] = [
  { src: g1, alt: "Interior shoot for a boutique hotel", h: "h-56", category: "Architecture", service: "Photography" },
  { src: g2, alt: "City street scene from a documentary shoot", h: "h-64", category: "Editorial", service: "Videography" },
  { src: g3, alt: "Architectural facade study", h: "h-52", category: "Architecture", service: "Photography" },
  { src: g4, alt: "Wildlife portrait captured on location", h: "h-72", category: "Travel", service: "Photography" },
  { src: g5, alt: "Coastal frame from a travel film", h: "h-56", category: "Travel", service: "Aerial" },
  { src: g6, alt: "Studio fashion portrait with red scarf", h: "h-72", category: "Portraits", service: "Photography" },
  { src: g7, alt: "Colour-graded still from a brand film", h: "h-52", category: "Brand Films", service: "Videography" },
  { src: g8, alt: "Abstract lighting test frame", h: "h-52", category: "Brand Films", service: "Videography" },
  { src: g9, alt: "Macro texture study", h: "h-44", category: "Products", service: "Photography" },
  { src: g10, alt: "Sailing sequence from a lifestyle campaign", h: "h-64", category: "Events", service: "Aerial" },
  { src: g11, alt: "Tropical foliage detail shot", h: "h-44", category: "Weddings", service: "Photography" },
  { src: g12, alt: "Mural backdrop for an editorial session", h: "h-48", category: "Editorial", service: "Photography" },
];

const FEATURES = [
  {
    icon: Camera,
    title: "Professionalism",
    body: "Over two decades producing multimedia in accordance with professional ethics and standards — a crew that has stood the test of time since 2002.",
  },
  {
    icon: Clapperboard,
    title: "Quality",
    body: "TV programmes, documentaries, adverts, event videography and live streaming, all shot on the latest state-of-the-art equipment.",
  },
  {
    icon: Sparkles,
    title: "Affordability",
    body: "Converging creativity, technology and professionalism so clients effortlessly and affordably access the highest quality multimedia services.",
  },
  {
    icon: Users,
    title: "Customization",
    body: "A creative, dynamic and friendly team that caters for all — every production shaped around the customer's brief and budget.",
  },
];

const CLIENTS = [
  {
    name: "Malawi Liverpool Wellcome Programme",
    work: "Video documentaries & photography — over 5 years",
  },
  { name: "Baylor College of Medicine", work: "TV spots" },
  { name: "Illovo Sugar Malawi", work: "Events coverage, live streaming & photography" },
  { name: "Aljazeera Television", work: "Supplying local news" },
  { name: "'The Boy Who Harnessed The Wind'", work: "Hollywood feature production support" },
  { name: "Save the Children", work: "Field documentaries & campaign films" },
];

const OFFERINGS = [
  "TV programs, documentaries and adverts",
  "Event videography for launches, workshops and corporate functions",
  "Graphic designing",
  "Radio adverts",
  "Professional photography",
  "Live streaming",
  "Audio and video adverts",
];


const SERVICES = ["Photography", "Videography", "Aerial"] as const;

type Production = {
  src: string;
  alt: string;
  title: string;
  meta: string;
  tab: string;
  badge?: string;
};

const PRODUCTIONS: Production[] = [
  { src: g7, alt: "Colour-graded still from a brand film", title: "Nova Skincare", meta: "Campaign film · 2026", tab: "Brand Films" },
  { src: g9, alt: "Macro texture study for a product shoot", title: "Atelier Ceramics", meta: "Product stills · 2026", tab: "Brand Films" },
  { src: g8, alt: "Abstract lighting frame from a studio shoot", title: "Creative Works Showreel", meta: "Direction & cinematography", tab: "Brand Films", badge: "Showreel 2026" },
  { src: g11, alt: "Tropical foliage detail from a wedding day", title: "Sena & Michael", meta: "Wedding film · Cape Town", tab: "Weddings" },
  { src: g6, alt: "Studio fashion portrait with red scarf", title: "Maison No.4", meta: "Bridal editorial", tab: "Weddings" },
  { src: g10, alt: "Sailing sequence from a lifestyle campaign", title: "Harbour Vows", meta: "Coastal wedding · Aerial", tab: "Weddings", badge: "Aerial" },
  { src: g2, alt: "City street scene from a documentary shoot", title: "Street Notes", meta: "Editorial series", tab: "Editorial" },
  { src: g12, alt: "Mural backdrop for an editorial session", title: "Colour Field", meta: "Magazine spread", tab: "Editorial" },
  { src: g1, alt: "Interior shoot for a boutique hotel", title: "Hotel Marnie", meta: "Interiors editorial", tab: "Editorial", badge: "Feature" },
];

function Index() {
  const [category, setCategory] = useState("All");
  const [service, setService] = useState<(typeof SERVICES)[number]>("Photography");
  const [query, setQuery] = useState("");
  const [featuredTab, setFeaturedTab] = useState("Brand Films");

  const shots = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GALLERY.filter(
      (s) =>
        (category === "All" || s.category === category) &&
        s.service === service &&
        (q === "" ||
          s.alt.toLowerCase().includes(q) ||
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
        <div className="pointer-events-none absolute left-1/2 top-0 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Multimedia Production Since 2002 · Blantyre, Malawi
            </p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] text-foreground md:text-6xl">
              We Film The Stories
              <br />Your Brand Tells.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Creative Works Communications produces high quality multimedia — documentaries, TV
              adverts, event videography, live streaming and professional photography — for clients
              across Malawi and beyond.
            </p>
          </Reveal>


          <Reveal
            delay={120}
            className="mx-auto mt-9 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center"
          >
            <div className="flex flex-1 items-center gap-3 rounded-full glass-brand px-5 py-3 transition-shadow duration-300 focus-within:ring-4 focus-within:ring-brand/15">
              <Search className="size-4 shrink-0 text-brand" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the portfolio — weddings, brand films, portraits"
                aria-label="Search the portfolio"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            <Link
              to="/book"
              className="rounded-full brand-gradient px-6 py-3 text-center text-sm font-semibold text-brand-foreground btn-motion brand-glow"
            >
              Book A Shoot
            </Link>
          </Reveal>

          <Reveal delay={220} className="mt-10 flex items-center justify-center gap-8 text-sm">
            {SERVICES.map((t) => (
              <button
                key={t}
                onClick={() => setService(t)}
                className={`relative pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-brand after:transition-transform after:duration-300 ${
                  service === t
                    ? "font-semibold text-brand after:scale-x-100"
                    : "text-muted-foreground after:scale-x-0 hover:text-foreground hover:after:scale-x-100"
                }`}
              >
                {t}
              </button>
            ))}
          </Reveal>
        </div>
      </section>


      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal className="flex flex-wrap justify-center gap-2 border-t border-border pt-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium btn-motion ${
                category === c
                  ? "brand-gradient tab-pop text-brand-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        {shots.length === 0 ? (
          <p className="mt-16 text-center text-sm text-muted-foreground page-enter">
            No {service.toLowerCase()} work in “{category}” yet — try another filter.
          </p>
        ) : (
          <div
            key={`${category}-${service}-${query}`}
            className="mt-8 grid grid-cols-2 gap-4 page-enter md:grid-cols-4"
          >
            {columns.map((col, i) => (
              <div key={i} className="flex flex-col gap-4">
                {col.map((img) => (
                  <figure key={img.alt} className="group relative overflow-hidden rounded-2xl">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={`w-full ${img.h} object-cover transition-transform duration-500 group-hover:scale-105`}
                    />
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-3 text-xs opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-white/85">{img.category}</span>
                      <span className="rounded-full brand-gradient px-2 py-0.5 font-semibold text-brand-foreground">
                        View
                      </span>
                    </figcaption>
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
            className="rounded-full brand-gradient px-7 py-3 text-sm font-semibold text-brand-foreground btn-motion brand-glow"
          >
            See All Work
          </button>
        </div>
      </section>


      {/* Recent productions */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-bold md:text-5xl">Recent Productions</h2>
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

      {/* About */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
          <Reveal from="left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">About Us</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Two Decades Behind The Lens</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Creative Works Communications, formerly known as Creative Works, was established in
              <strong className="text-foreground"> 2002</strong> and re-registered in 2023 (TPIN:
              31659272). We focus on converging creativity, technology and professionalism with the
              sole aim of ensuring that our customers effortlessly and affordably access and use the
              highest quality multimedia services and products.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              With experience spanning over a decade in video production, we have worked with high
              profile individuals and international production companies — including the Hollywood
              production of “The Boy Who Harnessed The Wind” — using the latest state-of-the-art
              equipment.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "2002", v: "Established" },
                { k: "20+", v: "Years of production" },
                { k: "7", v: "Service lines" },
              ].map((s) => (
                <div key={s.v} className="soft-card rounded-2xl p-4">
                  <p className="text-2xl font-bold text-brand">{s.k}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal from="right">
              <article className="soft-card rounded-3xl p-8">
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To produce high quality multimedia products in accordance to professional ethics
                  and standards while satisfying the customer.
                </p>
              </article>
            </Reveal>
            <Reveal from="right" delay={100}>
              <article className="soft-card rounded-3xl p-8">
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Creating compelling and high-quality video content.
                </p>
              </article>
            </Reveal>
            <Reveal from="right" delay={200}>
              <article className="soft-card rounded-3xl p-8">
                <h3 className="text-xl font-bold">What We Have For You</h3>
                <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {OFFERINGS.map((o) => (
                    <li key={o} className="flex gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                      {o}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              What We Have Done For Others
            </p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">Trusted By</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CLIENTS.map((c, i) => (
              <Reveal key={c.name} delay={i * 70}>
                <article className="soft-card h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-base font-bold">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.work}</p>
                </article>
              </Reveal>
            ))}
          </div>
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
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/10">
                    <f.icon className="size-5 text-brand" />
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
    <figure className="group relative overflow-hidden rounded-3xl soft-card">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {badge && (
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full brand-gradient px-3 py-1.5 text-xs font-medium text-brand-foreground">
          <Film className="size-3.5" />
          {badge}
        </span>
      )}

      <figcaption className="flex items-center justify-between px-4 py-3">
        <span className="leading-tight">
          <span className="block text-xs font-semibold">{title}</span>
          <span className="block text-[10px] text-muted-foreground">{meta}</span>
        </span>
        <span className="flex items-center gap-2 text-xs font-semibold text-brand">
          Case study
          <ArrowUpRight className="size-3.5" />
        </span>
      </figcaption>
    </figure>
  );
}
