import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Play, Mail, Phone, MapPin, Menu, X } from "lucide-react";

const NAV = [
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 md:py-4">
        <Link to="/" className="group flex shrink-0 items-center gap-3 self-center">
          <img
            src="/cw-logo.png"
            alt="Creative Works logo"
            className="block h-16 w-auto shrink-0 transition-transform duration-500 group-hover:scale-105 md:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-brand font-semibold after:scale-x-100" }}
              className="relative transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <button
            aria-label="Showreel"
            className="hidden size-9 items-center justify-center rounded-full glass-brand text-brand btn-motion hover:text-foreground sm:flex"
          >
            <Play className="size-4" />
          </button>
          <Link
            to="/book"
            className="hidden rounded-full brand-gradient px-5 py-2.5 text-sm font-semibold text-brand-foreground btn-motion brand-glow sm:inline-flex"
          >
            Book A Shoot
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex size-10 items-center justify-center rounded-full glass-brand text-brand btn-motion md:hidden"
          >
            <Menu
              className={`absolute size-5 transition-all duration-300 ${
                open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute size-5 transition-all duration-300 ${
                open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 top-[65px] z-40 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        className={`absolute inset-x-0 top-full z-50 origin-top overflow-hidden border-b border-border bg-background shadow-xl transition-[max-height,opacity] duration-400 ease-out md:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-5">
          {NAV.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-brand bg-brand/5" }}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              className={`rounded-xl px-4 py-3 text-base font-medium text-foreground transition-all duration-300 hover:bg-brand/5 hover:text-brand ${
                open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/book"
            style={{ transitionDelay: open ? `${80 + NAV.length * 60}ms` : "0ms" }}
            className={`mt-3 rounded-full brand-gradient px-5 py-3 text-center text-sm font-semibold text-brand-foreground btn-motion brand-glow transition-all duration-300 ${
              open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            Book A Shoot
          </Link>
        </nav>
      </div>
    </header>
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
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
              <span>
                House No. 13, Nthiwatiwa Drive, New Naperi
                <br />
                P.O. Box 32216, Blantyre 3, Malawi
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-brand" />
              <a href="tel:+265999800094" className="hover:text-foreground">
                0999 800 094
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-brand" />
              <a href="mailto:chimzere@gmail.com" className="hover:text-foreground">
                chimzere@gmail.com
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
