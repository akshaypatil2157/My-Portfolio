import { useEffect, useRef, useState } from "react";
import "./Projects.css";

function Projects() {
  const sectionRef = useRef(null);
  const [tiltStyles, setTiltStyles] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTiltStyles((prev) => ({
      ...prev,
      [index]: {
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      },
    }));
  };

  const handleMouseLeave = (index) => {
    setTiltStyles((prev) => ({
      ...prev,
      [index]: {
        transform: "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
      },
    }));
  };

  const projectData = [
    {
      title: "Online Agri Centre",
      desc: "React + Node + MySQL application for farmer records management and agricultural information.",
      img: "/info.png",
      github: "https://github.com/akshaypatil2157/Agricultureinfo",
      tags: ["React", "Node.js", "MySQL"],
    },
    {
      title: "Food Delivery App",
      desc: "React food ordering app with cart functionality, product pages, and responsive design.",
      img: "/food.png",
      github: "#",
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      title: "Travel Booking System",
      desc: "HTML, CSS, JavaScript based travel booking platform with interactive UI components.",
      img: "/travel4.png",
      github: "https://github.com/akshaypatil2157/Travel-Booking-System",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2>My Projects</h2>
      <p className="section-subtitle">Some of my recent work</p>

      <div className="project-container">
        {projectData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={tiltStyles[index] || {}}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div className="project-image-wrapper">
              <img src={project.img} alt={project.title} />
              <div className="project-overlay">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  {/* View Code */}
                </a>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
