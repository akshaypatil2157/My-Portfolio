import { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>

          <p>
            Hello! I am <b>Akshay Patil</b>, a passionate Full Stack Developer.
            I enjoy building modern web applications using React, Node.js, and MySQL.
            I love solving problems and creating responsive user interfaces that
            deliver exceptional user experiences.
          </p>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Commitment</span>
            </div>
          </div>

          <a
            href="/Akshaypatilresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="resume-btn">Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
