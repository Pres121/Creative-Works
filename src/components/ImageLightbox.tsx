import { useEffect } from "react";
import type { Shot } from "@/assets/portfolio-images";

type ImageLightboxProps = {
  activeShot: Shot | null;
  shots: Shot[];
  onClose: () => void;
  onSelect: (shot: Shot) => void;
};

export function ImageLightbox({ activeShot, shots, onClose, onSelect }: ImageLightboxProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!activeShot) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeShot, shots]);

  if (!activeShot) return null;

  const currentIndex = shots.findIndex((s) => s.id === activeShot.id);

  function handlePrev() {
    const prevIdx = (currentIndex - 1 + shots.length) % shots.length;
    const prevShot = shots[prevIdx];
    if (prevShot) onSelect(prevShot);
  }

  function handleNext() {
    const nextIdx = (currentIndex + 1) % shots.length;
    const nextShot = shots[nextIdx];
    if (nextShot) onSelect(nextShot);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md page-enter">
      {/* Background Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-10 flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110"
        aria-label="Close lightbox"
      >
        ×
      </button>

      {/* Navigation Buttons */}
      {shots.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110"
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 z-10 flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110"
            aria-label="Next photo"
          >
            ›
          </button>
        </>
      )}

      {/* Main Image Container */}
      <div className="relative z-0 flex max-h-[85vh] max-w-5xl flex-col items-center overflow-hidden rounded-3xl bg-neutral-950 border border-white/10 shadow-2xl">
        <div className="relative flex max-h-[70vh] w-full items-center justify-center overflow-hidden bg-black">
          <img
            src={activeShot.src}
            alt={activeShot.alt}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Footer Info Bar */}
        <div className="flex w-full flex-col justify-between gap-3 bg-gradient-to-t from-black via-neutral-950 to-neutral-950 p-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand">
                {activeShot.service}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                {activeShot.category}
              </span>
              {activeShot.client && (
                <span className="hidden text-xs text-white/60 sm:inline">
                  Client: <strong className="text-white">{activeShot.client}</strong>
                </span>
              )}
            </div>
            <h3 className="mt-2 text-xl font-bold text-white">{activeShot.title}</h3>
            <p className="mt-1 text-xs text-neutral-400">{activeShot.alt}</p>
          </div>

          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <span className="text-xs text-white/50">
              {currentIndex + 1} of {shots.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
