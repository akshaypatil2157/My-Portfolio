// import "./Contact.css";

// function Contact() {
//   return (
//     <section id="contact" className="contact">

//       <h2>Contact Me</h2>

//       <div className="contact-info">
//         <p><strong>Name:</strong> Akshay Patil</p>
//         <p><strong>Mobile:</strong> +91 7558722488</p>
//         <p><strong>Email:</strong> akshaypatil215721@gmail.com</p>
//         <p><strong>Location:</strong> Pune,Maharashtra, India</p>
//       </div>

//     </section>
//   );
// }

// export default Contact;

import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"
import "./Contact.css"
function Contact() {

  const form = useRef()

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      "service_w5yfpzi",
      "template_sfyxhbl",
      form.current,
      "iDnMxnOeUUTwO8PSL"
    )

    alert("Message Sent Successfully!")

    e.target.reset()
  }

  return (

    <section
      id="contact"
      className="py-24 px-6"
    >

      <div className="max-w-3xl mx-auto">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-5xl font-black mb-12 text-center"
        >
          Contact Me
        </motion.h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
        >

          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-slate-800 p-4 rounded-xl outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-slate-800 p-4 rounded-xl outline-none"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="bg-slate-800 p-4 rounded-xl outline-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold duration-300"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact