import React, { useEffect, useState, useCallback } from "react";

export function Lightbox({ open, images = [], startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => setIndex(startIndex), [startIndex]);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next, onClose]);

  if (!open || images.length === 0) return null;

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        aria-label="Close"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 text-white"
        onClick={(e) => {
          e.stopPropagation();
          onClose?.();
        }}
      >
        ✕
      </button>

      {/* Content */}
      <div
        className="max-w-[95vw] max-h-[90vh] w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.url}
          alt={img.caption || `Photo ${index + 1}`}
          className="max-h-[78vh] object-contain rounded-md shadow-2xl"
        />

        <div className="mt-3 w-full flex items-center justify-between text-white text-sm">
          <div className="flex items-center gap-2">
            <button
              aria-label="Previous"
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25"
            >
              ‹
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25"
            >
              ›
            </button>
            <span className="ml-2 opacity-80">
              {index + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
