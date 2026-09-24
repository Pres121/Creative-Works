import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import videoAsset from "@/assets/creative_works video.mp4";

type ShowreelModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ShowreelModal({ isOpen, onClose }: ShowreelModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto play / pause lifecycle control
  useEffect(() => {
    if (!isOpen) {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setIsPlaying(false);
      return;
    }

    // Scroll lock when modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto-play attempt when modal opens
    const playTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay with audio may be blocked by browser policy until user gesture
            setIsPlaying(false);
          });
      }
    }, 150);

    // ESC key listener to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(playTimer);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-xl">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-brand/40 bg-neutral-950 shadow-2xl shadow-brand/20 my-auto max-h-[95vh]">
        {/* Modal Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-3.5 sm:px-6 sm:py-4 bg-neutral-950">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full brand-gradient text-brand-foreground text-xs font-bold shadow-md">
              ▶
            </span>
            <div>
              <h3 className="font-bold text-white text-sm sm:text-base leading-snug">
                Creative Works — Production Showreel
              </h3>
              <p className="text-[11px] sm:text-xs text-neutral-400">
                20+ Years of High-Impact Multimedia & Documentaries in Malawi
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:bg-white/20 hover:scale-110 active:scale-95"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            controls
            playsInline
            autoPlay
            preload="auto"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onWaiting={() => setIsBuffering(true)}
            onPlaying={() => setIsBuffering(false)}
            onCanPlay={() => setIsBuffering(false)}
            onLoadedData={() => setIsBuffering(false)}
            className="h-full w-full object-contain focus:outline-none"
          >
            <source src="/creative-works-video.mp4" type="video/mp4" />
            <source src={videoAsset} type="video/mp4" />
            Your browser does not support HTML5 video playback.
          </video>

          {/* Buffering Indicator */}
          {isBuffering && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs">
              <div className="flex flex-col items-center gap-2">
                <div className="size-10 rounded-full border-3 border-brand border-t-transparent animate-spin" />
                <span className="text-xs font-semibold text-white/90">Loading Video...</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 bg-neutral-950 px-5 py-3.5 sm:px-6 sm:py-4 text-xs text-neutral-400 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-4 text-[11px] sm:text-xs font-medium text-neutral-400">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-brand animate-pulse" />
              <span>Full HD Broadcast Master</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>TPIN: 31659272</span>
            <span className="hidden sm:inline">•</span>
            <span>Blantyre, Malawi</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/book"
              onClick={onClose}
              className="rounded-full brand-gradient px-5 py-2 text-xs font-bold text-brand-foreground btn-motion brand-glow shadow-md"
            >
              Book A Shoot
            </Link>
            <button
              onClick={onClose}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-white/15"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
