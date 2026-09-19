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
    shotId: "tea-plantation-cinema",
    title: "Thyolo Estate Commercial",
    client: "Brand Campaign",
    category: "Travel",
    tag: "Location Cinematography",
    image: ALL_IMAGES.teaPlantation,
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
  const matchedShot = slide ? portfolioShots.find((s) => s.id === slide.shotId) : undefined;

  if (!slide) {
    return null;
  }

  return (
    <div className="mt-8 flex flex-col gap-10">
      {/* Visual Reel Banner */}
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-brand/20 bg-neutral-950 p-2 shadow-2xl">
        <div className="relative aspect-[16/8] sm:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-neutral-900">
          <img
            key={slide.shotId}
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover transition-all duration-700 ease-out brightness-90 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          {/* Slide Metadata Card */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-between gap-3 text-left sm:bottom-6 sm:left-6 sm:right-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-full brand-gradient px-3 py-1 text-[10px] font-bold text-brand-foreground shadow-sm">
                  {slide.tag}
                </span>
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-md">
                  {slide.category}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">{slide.title}</h3>
              <p className="text-xs text-white/75 mt-0.5">Client: {slide.client}</p>
            </div>

            <button
              onClick={() => {
                if (matchedShot) onSelectShot(matchedShot);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full glass-brand px-4 py-2 text-xs font-semibold text-brand backdrop-blur-md transition-transform duration-300 hover:scale-105"
            >
              ⤢ Expand Stills
            </button>
          </div>

          {/* Nav Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <button
              onClick={() =>
                setActiveIdx((prev) => (prev - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length)
              }
              className="flex size-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % FEATURED_SLIDES.length)}
              className="flex size-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </div>

        {/* Thumbnail Dots */}
        <div className="flex items-center justify-center gap-2 py-3">
          {FEATURED_SLIDES.map((s, idx) => (
            <button
              key={s.shotId}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIdx === idx ? "w-8 bg-brand" : "w-2 bg-white/20 hover:bg-white/40"
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
