import { useState, useEffect } from "react";
import "./Preloader.css";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="loader-ring"></div>
        <div className="loader-text">Loading Portfolio...</div>
      </div>
    </div>
  );
}

export default Preloader;

