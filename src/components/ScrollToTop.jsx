import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Access the current location (URL) object
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the very top-left of the window
    window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth",
});
  }, [pathname]); // This effect runs every time the pathname changes

  return null;
};

export default ScrollToTop;