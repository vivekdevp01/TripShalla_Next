// UnderwaterStatsSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { useInView } from "react-intersection-observer";

/**
 * UnderwaterStatsSection
 *
 * - Background uses uploaded image path from your history:
 *   /mnt/data/d943bd3b-cb6d-4110-9eb5-7134d38c6d4e.png
 * - Click play opens a modal video player (if videoSrc is a direct mp4/webm it plays in modal;
 *   if videoSrc is a YouTube link it opens in a new tab).
 * - When the stats area enters the viewport, all four numbers count from 0 -> target.
 *
 * Props (optional):
 *  - videoSrc: string (direct mp4/webm path or YouTube URL). If omitted, modal still opens but no video plays.
 *
 * Usage:
 *  <UnderwaterStatsSection videoSrc="/path/to/video.mp4" />
 */

export default function UnderwaterStatsSection({ videoSrc = "" }) {
  // use the uploaded background path (from conversation history)
  const bg = "/src/assets/1.jpg";

  // stats config
  const statsConfig = [
    { label: "Awards Winning", value: 3600, suffix: "+", icon: "🏅" },
    { label: "Happy Traveler", value: 7634, suffix: "+", icon: "🧳" },
    { label: "Tours success", value: 2500, suffix: "k", icon: "🚐" },
    { label: "Our Experience", value: 25, suffix: "+", icon: "⭐" },
  ];

  // modal state
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative w-full mb-6">
      {/* HERO area */}
      <div
        className="relative w-full h-[520px] overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* optional: if you want a background video rather than image, pass direct mp4 via videoSrc and uncomment below */}
        {/* {videoSrc && videoSrc.endsWith('.mp4') && (
          <video src={videoSrc} className="w-full h-full object-cover" autoPlay muted loop playsInline />
        )} */}

        {/* subtle overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* center play button (opens modal or link) */}
        <button
          onClick={() => {
            // if videoSrc is a youtube link, open new tab; else open modal
            if (/youtube\.com|youtu\.be/.test(videoSrc || "")) {
              window.open(videoSrc || "https://www.youtube.com/watch?v=uLnJy8LddgM", "_blank", "noopener");
              return;
            }
            setModalOpen(true);
          }}
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     w-20 h-20 rounded-full border border-white/30 bg-white/10 flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          <Play className="text-white" size={28} />
        </button>
      </div>

      {/* STATS area */}
      <div className="bg-[#0D6773] py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <StatsGrid statsConfig={statsConfig} startWhenInView />
        </div>
      </div>

      {/* Modal video player */}
      <VideoModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        videoSrc={videoSrc}
      />
    </section>
  );
}

/* -------------------------
   StatsGrid: triggers animation for all counters together
   ------------------------- */
function StatsGrid({ statsConfig = [], startWhenInView = true }) {
  // refs and in-view for the whole stats grid
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-10% 0px" });

  // state of displayed numbers
  const [displayValues, setDisplayValues] = useState(
    statsConfig.map((s) => ({ id: s.id, value: 0 }))
  );

  useEffect(() => {
    if (!startWhenInView) return;

    if (inView) {
      // begin a single RAF-driven animation that updates all stats simultaneously
      const startTimeRef = { current: null };
      const rafRef = { current: null };
      const duration = 1400; // base duration in ms

      const step = (timestamp) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const t = Math.min(1, elapsed / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);

        const newVals = statsConfig.map((s) => {
          const raw = Math.round(eased * s.value);
          return { id: s.id, value: raw };
        });
        setDisplayValues(newVals);

        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          // final snap to exact values to avoid rounding differences
          const final = statsConfig.map((s) => ({ id: s.id, value: s.value }));
          setDisplayValues(final);
        }
      };

      rafRef.current = requestAnimationFrame(step);

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }
  }, [inView, statsConfig, startWhenInView]);

  // helper to format numbers with commas
  const fmt = (n) => new Intl.NumberFormat().format(n);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {statsConfig.map((s) => {
        const current = displayValues.find((d) => d.id === s.id)?.value ?? 0;
        return (
          <div
            key={s.id}
            className="rounded-xl border border-teal-700/20 p-6 flex flex-col items-center text-center text-white shadow-inner"
            style={{ background: "transparent" }}
          >
            {/* replace emoji with SVG icons if you like */}
            <div className="mb-2 text-2xl">{s.icon}</div>

            <div className="text-3xl md:text-4xl font-extrabold text-amber-400">
              {fmt(current)}
              <span className="text-amber-400 ml-1 text-xl align-super">{s.suffix}</span>
            </div>

            <div className="text-sm mt-2 opacity-90">{s.label}</div>
          </div>
        );
      })}
    </div>
  );
}

/* -------------------------
   Simple Video Modal (no external lib)
   - If videoSrc is a direct mp4/webm it will render <video> inside the modal.
   - If videoSrc is empty, modal shows a placeholder message.
   - If videoSrc is a YouTube link, we open the link in a new tab instead of modal.
   ------------------------- */
function VideoModal({ open, onClose, videoSrc = "" }) {
  if (!open) return null;

  const isDirectVideo = typeof videoSrc === "string" && /\.(mp4|webm|ogg)$/i.test(videoSrc);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-[min(900px,95%)] bg-black rounded-xl overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-30 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
          aria-label="Close video"
        >
          <X className="text-white" size={16} />
        </button>

        <div className="w-full h-[min(600px,60vh)] bg-black flex items-center justify-center">
          {isDirectVideo ? (
            <video
              src={videoSrc}
              controls
              autoPlay
              className="w-full h-full object-contain bg-black"
            />
          ) : videoSrc ? (
            // if it's not a direct video file (e.g. youtube), show link to open in new tab
            <div className="p-8 text-center">
              <p className="text-white mb-4">Cannot play this link inline. Open in new tab?</p>
              <a
                href={videoSrc}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-amber-400 text-teal-900 px-4 py-2 rounded-full font-semibold"
              >
                Open Video
              </a>
            </div>
          ) : (
            // no video provided
            <div className="p-8 text-center">
              <p className="text-white">No video source provided.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
