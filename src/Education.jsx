import "./Education.css";

export default function Education() {
  return (
    <section className="education" id="education">
      <h2>Education</h2>

      <div className="edu-container">

        <div className="edu-card">
          <h3>B.Sc. Computer Science</h3>
          <p>Moolji Jaitha College, Jalgaon</p>
          <span>CGPA: 7.25</span>
          <p className="date">Jun 2025</p>
        </div>

        <div className="edu-card">
          <h3>HSC</h3>
          <p>Bhusawal Arts, Science and P.O. Nahata College</p>
          <span>66.83%</span>
          <p className="date">Mar 2022</p>
        </div>

        <div className="edu-card">
          <h3>SSC</h3>
          <p>Maharana Pratap Vidyalaya, Bhusawal</p>
          <span>85.80%</span>
          <p className="date">Mar 2020</p>
        </div>

      </div>
    </section>
  );
}