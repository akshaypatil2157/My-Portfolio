import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTop.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}

export default BackToTop;

