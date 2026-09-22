import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ShowreelModal } from "@/components/ShowreelModal";

const NAV = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl transition-all duration-300 shadow-xs shadow-brand/5">
        {/* Top ambient brand shimmer accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand to-transparent opacity-80" />

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2.5 md:py-3">
          {/* Logo - compact height */}
          <Link to="/" className="group flex shrink-0 items-center gap-2.5 transition-opacity hover:opacity-90">
            <img
              src="/cw-logo.png"
              alt="Creative Works logo"
              className="block h-8 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105 md:h-10"
            />
          </Link>

          {/* Nav pill container */}
          <nav className="hidden items-center gap-1 rounded-full border border-border/60 bg-secondary/40 p-1 text-xs font-medium text-muted-foreground backdrop-blur-md md:flex shadow-xs">
            {NAV.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "!text-brand !bg-background font-semibold shadow-xs" }}
                className="rounded-full px-4 py-1.5 transition-all duration-300 hover:text-foreground hover:bg-background/60"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex shrink-0 items-center gap-2.5">
            <button
              onClick={() => setShowreelOpen(true)}
              aria-label="Watch Showreel"
              title="Watch Showreel"
              className="hidden items-center gap-1.5 rounded-full border border-brand/25 bg-brand/5 px-3.5 py-1.5 text-xs font-semibold text-brand transition-all duration-300 hover:bg-brand/15 hover:border-brand/40 hover:scale-105 sm:flex"
            >
              <span className="flex size-4 items-center justify-center rounded-full bg-brand text-[8px] text-white">▶</span>
              <span>Reel</span>
            </button>
            <Link
              to="/book"
              className="hidden rounded-full brand-gradient px-4 py-1.5 text-xs font-semibold text-brand-foreground btn-motion brand-glow shadow-sm sm:inline-flex"
            >
              Book A Shoot
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative flex size-9 items-center justify-center rounded-full border border-border/70 bg-secondary/50 text-foreground transition-all duration-200 hover:bg-secondary md:hidden"
            >
              <span className={`text-base transition-all duration-300 ${open ? "scale-50 opacity-0" : "scale-100 opacity-100"}`} aria-hidden="true">
                ☰
              </span>
              <span className={`absolute text-base transition-all duration-300 ${open ? "scale-100 opacity-100" : "scale-50 opacity-0"}`} aria-hidden="true">
                ✕
              </span>
            </button>
          </div>
        </div>

        {/* Mobile overlay menu */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 top-[53px] z-40 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />
        <div
          className={`absolute inset-x-0 top-full z-50 origin-top overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl shadow-2xl transition-[max-height,opacity] duration-300 ease-out md:hidden ${
            open ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 px-5 py-4">
            {NAV.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "!text-brand bg-brand/10 font-semibold" }}
                style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-brand/5 hover:text-brand ${
                  open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                setShowreelOpen(true);
              }}
              className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-brand/20 bg-brand/5 px-4 py-2.5 text-xs font-semibold text-brand transition-all hover:bg-brand/10"
            >
              ▶ Watch Showreel
            </button>
            <Link
              to="/book"
              style={{ transitionDelay: open ? `${60 + NAV.length * 40}ms` : "0ms" }}
              className={`mt-1 rounded-full brand-gradient px-4 py-2.5 text-center text-xs font-semibold text-brand-foreground btn-motion brand-glow transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
            >
              Book A Shoot
            </Link>
          </nav>
        </div>
      </header>

      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </>
  );
}

const SERVICE_LINKS = [
  "TV programs, documentaries & adverts",
  "Event videography & live streaming",
  "Professional photography",
  "Graphic design & radio adverts",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[color-mix(in_oklab,var(--brand)_6%,white)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/cw-logo.png" alt="Creative Works logo" className="h-11 w-auto" />
            <span className="font-display text-lg font-bold text-foreground">
              Communications
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Established in 2002 and re-registered in 2023 (TPIN: 31659272)
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">What We Offer</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-brand" aria-hidden="true"></span>
              <span>
                House No. 13, Nthiwatiwa Drive, New Naperi
                <br />
                P.O. Box 32216, Blantyre 3, Malawi
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand" aria-hidden="true"></span>
              <a href="tel:+265999800094" className="hover:text-foreground">
                0999 800 094
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand" aria-hidden="true"></span>
              <a href="mailto:creativeworksmw@gmail.com" className="hover:text-foreground">
                creativeworksmw@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Creative Works Communications. Multimedia production since 2002.</div>
        <div className="mt-2">
          Made with love by{' '}
          <a
            href="https://sure-defense-systems.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand hover:text-foreground"
          >
            SureDefense Systems — Cybersecurity Services
          </a>
        </div>
      </div>
    </footer>
  );
}
