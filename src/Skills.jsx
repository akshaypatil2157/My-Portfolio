import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
    { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
    { name: "React", icon: <FaReact color="#61DBFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
    { name: "MySQL", icon: <FaDatabase color="#00758F" /> }
  ];

  return (
    <section id="skill" className="skill">

      <h2>My Skills</h2>

      <div className="skills-container">
        
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;