import React, { useState } from "react";
import { Lightbox } from "./LightBox";

/**
 * props:
 *  photos: [{ id, url, caption }]
 *  columns?: number (default 4; max 6)
 */
export default function PhotoGallery({ photos = [], columns = 4 }) {
  const [open, setOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  // clamp to 1..6 for lg screen
  const lgCols = Math.max(1, Math.min(columns, 6));
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${lgCols} gap-4`;

  const openAt = (i) => {
    setStartIndex(i);
    setOpen(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h3 className="text-2xl font-semibold mb-4">Photo Gallery</h3>

      {photos.length === 0 ? (
        <div className="text-gray-500 text-sm">No photos available.</div>
      ) : (
        <div className={gridClass}>
          {photos.map((p, i) => (
            <figure
              key={p.id || p.url || i}
              className="group relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
              onClick={() => openAt(i)}
            >
              {/* choose a tidy height; change as you like */}
              <img
                src={p.url}
                alt={p.caption || `photo-${i + 1}`}
                className="block w-full h-56 md:h-52 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {p.caption && (
                <figcaption className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {p.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Lightbox
        open={open}
        images={photos}
        startIndex={startIndex}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
