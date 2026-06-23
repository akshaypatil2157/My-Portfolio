import { useState, useEffect } from "react";
import { FaEllipsisV, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);

      const sections = ["home", "about", "projects", "education", "skill", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skill", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
      <h2 className="logo">Portfolio</h2>

      <div className="nav-right">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaEllipsisV />
        </div>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeSection === link.id ? "active" : ""}
              onClick={(e) => handleLinkClick(e, link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

