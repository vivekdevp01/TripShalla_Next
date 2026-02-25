import { useEffect, useState } from "react";

export default function StickyEnquiryWrapper({ children }) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("enquiry-sentinel");

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sentinel goes OUT of view → activate sticky
        setIsSticky(!entry.isIntersecting);
      },
      {
        rootMargin: "-100px 0px 0px 0px",
        threshold: 0,
      },
    );

    if (sentinel) observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`transition-all ${isSticky ? "sticky top-24" : "relative"}`}
    >
      {children}
    </div>
  );
}
