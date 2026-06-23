content = r"""import { useEffect, useRef } from "react";
import "./Education.css";

export default function Education() {
  const sectionRef = useRef(null);

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

  const educationData = [
    {
      degree: "B.Sc. Computer Science",
      institution: "Moolji Jaitha College, Jalgaon",
      score: "CGPA: 7.25",
      date: "Jun 2025",
    },
    {
      degree: "HSC",
      institution: "Bhusawal Arts, Science and P.O. Nahata College",
      score: "66.83%",
      date: "Mar 2022",
    },
    {
      degree: "SSC",
      institution: "Maharana Pratap Vidyalaya, Bhusawal",
      score: "85.80%",
      date: "Mar 2020",
    },
  ];

  return (
    <section className="education" id="education" ref={sectionRef}>
      <h2>Education</h2>
      <p className="section-subtitle">My academic journey</p>

      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <span className="score">{edu.score}</span>
              <p className="date">{edu.date}</p>
            </div>
        ))}
      </div>
    </section>
  );
}
"""

with open('Education.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Education.jsx written successfully')
