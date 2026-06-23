import "./Certifications.css";
import { motion } from "framer-motion"
import {
  FaCertificate,
  FaAward,
} from "react-icons/fa"

const certifications = [
  {
    title: "Graphs Camp Participation Certificate",
    issuer: "AlgoUniversity",
    date: "Oct 2025",
    skills: "Python",
  },

  {
    title: "UI-HACKATHON TECHNOCAVE 2025",
    issuer: "SVKM's Institute of Technology, Dhule",
    date: "May 2025",
    skills: "React.js, Front-End Development",
  },

  {
    title: "Certificate of Participation in Quadrant - BUG2BUILD",
    issuer: "Unstop",
    date: "Mar 2026",
    credential: "d19ae614-660a-4821-9990-5030a50401c1",
    skills: "Java, Team Leadership",
  },

  {
    title: "AI Fundamentals and Vision AI Workshop",
    issuer: "Arenesha AI Labs",
    date: "Dec 2025",
    skills: "AI Fundamentals",
  },

  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "Nov 2025",
    credential: "6709722D4489",
    skills: "Python",
  },

  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Nov 2025",
    credential: "01C6FA3E8D2A",
    skills: "SQL",
  },
]

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-black text-center mb-16"
        >
          Certifications
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="
                bg-slate-800/50
                backdrop-blur-xl
                border border-slate-700
                rounded-3xl
                p-7
                hover:border-cyan-400
                hover:shadow-xl
                hover:shadow-cyan-500/10
                duration-300
              "
            >

              {/* Top Icon */}
              <div className="
                w-14 h-14
                rounded-2xl
                bg-cyan-500/10
                border border-cyan-400/20
                flex items-center justify-center
                text-cyan-400
                text-2xl
                mb-6
              ">
                <FaCertificate />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white leading-8 mb-4">

                {cert.title}

              </h3>

              {/* Issuer */}
              <p className="text-cyan-400 font-semibold mb-2">

                {cert.issuer}

              </p>

              {/* Date */}
              <p className="text-slate-400 mb-4">

                Issued {cert.date}

              </p>

              {/* Skills */}
              <div className="flex items-center gap-3 mb-4">

                <FaAward className="text-cyan-400" />

                <p className="text-slate-300 text-sm">

                  {cert.skills}

                </p>

              </div>

              {/* Credential */}
              {cert.credential && (
                <div className="
                  mt-4
                  bg-slate-700/50
                  border border-slate-600
                  rounded-xl
                  px-4 py-3
                  text-sm
                  text-slate-300
                  break-all
                ">

                  Credential ID:
                  <br />

                  {cert.credential}

                </div>
              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Certifications