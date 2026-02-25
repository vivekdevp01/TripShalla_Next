import React, { useState } from "react";

export default function VideoModal({
  thumbnail,
  videoUrl,
  captionTitle,
}) {
  const [open, setOpen] = useState(false);

  // Convert YouTube URL to embeddable format
  const embedUrl = videoUrl
    ? videoUrl.replace("watch?v=", "embed/") + "?autoplay=1"
    : null;

  return (
    <>
      <div className="relative rounded-lg overflow-hidden shadow-md group">
        {/* Thumbnail Image */}
        <img
          src={thumbnail}
          alt={captionTitle || "Video thumbnail"}
          className="w-full h-64 object-cover group-hover:brightness-90 transition"
        />

        {/* Play Button */}
        <button
          onClick={() => setOpen(true)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Play video"
        >
          ▶
        </button>

     
      </div>

      {/* Modal Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {embedUrl && (
              <iframe
                className="w-full h-full"
                src={embedUrl}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-2 text-black font-bold"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
