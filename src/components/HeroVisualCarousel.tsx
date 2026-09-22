import { useState, useEffect } from "react";
import { Shot, ALL_IMAGES } from "@/assets/portfolio-images";

type HeroVisualCarouselProps = {
  onSelectShot: (shot: Shot) => void;
  portfolioShots: Shot[];
};

const FEATURED_SLIDES = [
  {
    shotId: "boy-harnessed-wind",
    title: "Hollywood Production Support",
    client: "'The Boy Who Harnessed The Wind'",
    category: "Brand Films",
    tag: "Hollywood Feature Support",
    image: ALL_IMAGES.hollywoodForest,
  },
  {
    shotId: "fcb-stadium-drone",
    title: "First Capital Bank Corporate Cup",
    client: "First Capital Bank",
    category: "Aerial",
    tag: "Stadium Drone Panorama",
    image: ALL_IMAGES.fcbAerial,
  },
  {
    shotId: "mulanje-drone",
    title: "Mulanje Massif Expedition",
    client: "Tourism & Documentary",
    category: "Aerial",
    tag: "Mountain Landscape Drone",
    image: ALL_IMAGES.mulanjeAerial,
  },
  {
    shotId: "tea-plantation-cinema",
    title: "Thyolo Estate Commercial",
    client: "Brand Campaign",
    category: "Travel",
    tag: "Location Cinematography",
    image: ALL_IMAGES.teaPlantation,
  },
  {
    shotId: "tv-studio-set",
    title: "National TV Broadcast Series",
    client: "Malawi TV Production",
    category: "Brand Films",
    tag: "TV Studio Broadcast Set",
    image: ALL_IMAGES.tvStudioSet,
  },
  {
    shotId: "mlw-docu-interview",
    title: "MLW Community Health Stories",
    client: "Malawi Liverpool Wellcome",
    category: "Editorial",
    tag: "Field Documentary Crew",
    image: ALL_IMAGES.mlwDocuInterview,
  },
  {
    shotId: "wireless-streaming-hall",
    title: "Multi-Cam Broadcast Desk",
    client: "Corporate Conference",
    category: "Events",
    tag: "Live Streaming Station",
    image: ALL_IMAGES.wirelessStreamHall,
  },
];

const CLIENT_PARTNERS = [
  { name: "Malawi Liverpool Wellcome", badge: "5+ Yr Partnership" },
  { name: "First Capital Bank", badge: "Events & Stills" },
  { name: "Illovo Sugar Malawi", badge: "Live Streaming" },
  { name: "The Boy Who Harnessed The Wind", badge: "Hollywood Support" },
  { name: "Save the Children", badge: "Field Docs" },
  { name: "Al Jazeera Television", badge: "News Supply" },
  { name: "Baylor College of Medicine", badge: "TV Spots" },
];

export function HeroVisualCarousel({ onSelectShot, portfolioShots }: HeroVisualCarouselProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % FEATURED_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = FEATURED_SLIDES[activeIdx] ?? FEATURED_SLIDES[0];

  return (
    <div className="mt-6 md:mt-8 flex flex-col gap-8 md:gap-10">
      {/* Visual Reel Banner */}
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-brand/30 bg-neutral-950 p-1.5 sm:p-2 shadow-2xl shadow-brand/10">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-neutral-900">
          {/* Stacked Slides for Instant Preloading & Smooth Fade */}
          {FEATURED_SLIDES.map((s, idx) => {
            const isActive = idx === activeIdx;
            const matchedShot = portfolioShots.find((p) => p.id === s.shotId);

            return (
              <div
                key={s.shotId}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover brightness-[0.92] transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                {/* Slide Metadata Card */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-col justify-between gap-3 text-left sm:bottom-5 sm:left-5 sm:right-5 sm:flex-row sm:items-end">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-4 backdrop-blur-md">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full brand-gradient px-2.5 py-0.5 text-[10px] font-bold text-brand-foreground shadow-xs">
                        {s.tag}
                      </span>
                      <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-md">
                        {s.category}
                      </span>
                    </div>
                    <h3 className="mt-1.5 text-lg font-bold text-white sm:text-xl md:text-2xl leading-snug">{s.title}</h3>
                    <p className="text-xs text-white/75 mt-0.5 font-medium">Client: {s.client}</p>
                  </div>

                  <button
                    onClick={() => {
                      if (matchedShot) onSelectShot(matchedShot);
                    }}
                    className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-brand hover:text-brand-foreground hover:scale-105 shadow-md"
                  >
                    <span>⤢</span>
                    <span>Expand Stills</span>
                  </button>
                </div>
              </div>
            );
          })}

          {/* Nav Controls */}
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 sm:top-4 sm:right-4">
            <button
              onClick={() =>
                setActiveIdx((prev) => (prev - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length)
              }
              className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-brand hover:border-brand hover:text-brand-foreground sm:size-9"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % FEATURED_SLIDES.length)}
              className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-brand hover:border-brand hover:text-brand-foreground sm:size-9"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        {/* Thumbnail Dots */}
        <div className="flex items-center justify-center gap-2 py-2.5">
          {FEATURED_SLIDES.map((s, idx) => (
            <button
              key={s.shotId}
              onClick={() => setActiveIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIdx === idx ? "w-7 bg-brand" : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Trusted Clients Marquee */}
      <div className="border-y border-border/70 py-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-brand" aria-hidden="true">✓</span>
            Proven Track Record Across Malawi & International Broadcasts
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {CLIENT_PARTNERS.map((client) => (
              <div
                key={client.name}
                className="soft-card flex items-center gap-2.5 rounded-full border border-border/80 px-4 py-2 text-xs font-semibold text-foreground transition-all duration-300 hover:border-brand/40 hover:scale-105"
              >
                <span className="size-2 rounded-full bg-brand" />
                <span>{client.name}</span>
                <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-medium text-brand">
                  {client.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
