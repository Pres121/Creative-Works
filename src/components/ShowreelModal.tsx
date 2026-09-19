import { useState } from "react";
import { ALL_IMAGES } from "@/assets/portfolio-images";

type ShowreelModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  const [playing, setPlaying] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg page-enter">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-brand/30 bg-neutral-950 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full brand-gradient text-brand-foreground text-xs font-bold">
              Reel
            </span>
            <div>
              <h3 className="font-bold text-white text-base">Creative Works — Showreel</h3>
              <p className="text-xs text-neutral-400">20+ Years of Multimedia Production in Malawi</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:scale-110"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Video / Visual Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
          {!playing ? (
            <div className="relative flex h-full w-full items-center justify-center">
              <img
                src={ALL_IMAGES.hollywoodForest}
                alt="Showreel Preview"
                className="h-full w-full object-cover brightness-75 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute flex flex-col items-center text-center p-6">
                <button
                  onClick={() => setPlaying(true)}
                  className="group relative flex size-20 items-center justify-center rounded-full brand-gradient text-brand-foreground shadow-2xl transition-transform duration-300 hover:scale-110 btn-motion brand-glow"
                >
                  ▶
                  <span className="absolute -inset-2 rounded-full border border-brand/50 animate-ping opacity-30" />
                </button>
                <h4 className="mt-5 text-2xl font-bold text-white">Watch Official Showreel</h4>
                <p className="mt-2 text-xs text-neutral-300 max-w-md">
                  Documentaries, corporate adverts, Hollywood production support & broadcast live streaming.
                </p>
              </div>
            </div>
          ) : (
            <div className="relative flex h-full w-full flex-col items-center justify-center bg-black p-8 text-center">
              <div className="relative z-10 max-w-lg">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand/20 text-brand font-bold">
                  ★
                </div>
                <h4 className="mt-4 text-xl font-bold text-white">Broadcast & Production Reel</h4>
                <p className="mt-2 text-sm text-neutral-300">
                  Featuring production stills, live streaming setups, and cinema stills from over two decades of work across Malawi and international broadcasts.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-left text-xs text-neutral-300">
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3">
                    <span className="text-brand shrink-0" aria-hidden="true">✓</span>
                    <span>4K Cinema & Drone Footage</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3">
                    <span className="text-brand shrink-0" aria-hidden="true">✓</span>
                    <span>Multi-Cam ATEM Live Streaming</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3">
                    <span className="text-brand shrink-0" aria-hidden="true">✓</span>
                    <span>Hollywood Production Support</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-white/5 p-3">
                    <span className="text-brand shrink-0" aria-hidden="true">✓</span>
                    <span>Broadcast Master Grading</span>
                  </div>
                </div>

                <button
                  onClick={() => setPlaying(false)}
                  className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
                >
                  Back to Overview
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-neutral-950 px-6 py-4 text-xs text-neutral-400 border-t border-white/10">
          <div className="flex items-center gap-4">
            <span>TPIN: 31659272</span>
            <span>•</span>
            <span>Blantyre, Malawi</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-full brand-gradient px-5 py-2 font-semibold text-brand-foreground"
          >
            Close Reel
          </button>
        </div>
      </div>
    </div>
  );
}
